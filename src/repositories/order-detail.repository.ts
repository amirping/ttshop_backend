import {DefaultCrudRepository} from '@loopback/repository';
import {OrderDetail, OrderDetailRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderDetailRepository extends DefaultCrudRepository<
  OrderDetail,
  typeof OrderDetail.prototype.itemId,
  OrderDetailRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(OrderDetail, dataSource);
  }
}
