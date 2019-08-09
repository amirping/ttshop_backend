import {HttpErrors, stringTypeToWrapper} from '@loopback/rest';

import {UserService, UserProfile} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {PasswordHasher} from './hash.password.bcryptjs';
import {PasswordHasherBindings} from '../keys';
import {inject} from '@loopback/context';
import {Customer} from '../models/customer.model';
import {
  CustomerRepository,
  Credentials,
} from '../repositories/customer.repository';
export class MyUserService implements UserService<Customer, Credentials> {
  constructor(
    @repository(CustomerRepository) public userRepository: CustomerRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<Customer> {
    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with email ${credentials.email} not found.`,
      );
    }
    console.log(foundUser.password);
    console.log(credentials.password);
    const passi: string = foundUser.password + '';
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password + '',
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: Customer): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.name) userName = `${user.name}`;
    return {id: user.customerId.toString(), name: userName};
  }
}
