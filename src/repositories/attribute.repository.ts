import {DefaultCrudRepository} from '@loopback/repository';
import {Attribute, AttributeRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AttributeRepository extends DefaultCrudRepository<
  Attribute,
  typeof Attribute.prototype.attributeId,
  AttributeRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Attribute, dataSource);
  }
}
