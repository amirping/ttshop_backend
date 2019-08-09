import {DefaultCrudRepository} from '@loopback/repository';
import {ShoppingCart, ShoppingCartRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoppingCartRepository extends DefaultCrudRepository<
  ShoppingCart,
  typeof ShoppingCart.prototype.itemId,
  ShoppingCartRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(ShoppingCart, dataSource);
  }
}
