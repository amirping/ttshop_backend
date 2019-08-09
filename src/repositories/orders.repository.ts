import {DefaultCrudRepository} from '@loopback/repository';
import {Orders, OrdersRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdersRepository extends DefaultCrudRepository<
  Orders,
  typeof Orders.prototype.orderId,
  OrdersRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Orders, dataSource);
  }
}
