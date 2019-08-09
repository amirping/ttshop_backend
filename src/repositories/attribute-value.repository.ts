import {DefaultCrudRepository} from '@loopback/repository';
import {AttributeValue, AttributeValueRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AttributeValueRepository extends DefaultCrudRepository<
  AttributeValue,
  typeof AttributeValue.prototype.attributeValueId,
  AttributeValueRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(AttributeValue, dataSource);
  }
}
