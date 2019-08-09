import {DefaultCrudRepository} from '@loopback/repository';
import {Shipping, ShippingRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShippingRepository extends DefaultCrudRepository<
  Shipping,
  typeof Shipping.prototype.shippingId,
  ShippingRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Shipping, dataSource);
  }
}
