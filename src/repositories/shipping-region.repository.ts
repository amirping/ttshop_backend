import {DefaultCrudRepository} from '@loopback/repository';
import {ShippingRegion, ShippingRegionRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShippingRegionRepository extends DefaultCrudRepository<
  ShippingRegion,
  typeof ShippingRegion.prototype.shippingRegionId,
  ShippingRegionRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(ShippingRegion, dataSource);
  }
}
