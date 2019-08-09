import {DefaultCrudRepository} from '@loopback/repository';
import {Tax, TaxRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TaxRepository extends DefaultCrudRepository<
  Tax,
  typeof Tax.prototype.taxId,
  TaxRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Tax, dataSource);
  }
}
