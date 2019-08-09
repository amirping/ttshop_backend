import {DefaultCrudRepository} from '@loopback/repository';
import {ProductAttribute, ProductAttributeRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductAttributeRepository extends DefaultCrudRepository<
  ProductAttribute,
  ProductAttributeRelations
> {
  constructor(@inject('datasources.shop') dataSource: ShopDataSource) {
    super(ProductAttribute, dataSource);
  }
}
