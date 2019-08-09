import {DefaultCrudRepository} from '@loopback/repository';
import {ProductCategory, ProductCategoryRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductCategoryRepository extends DefaultCrudRepository<
  ProductCategory,
  typeof ProductCategory.prototype.productId,
  ProductCategoryRelations
> {
  constructor(@inject('datasources.shop') dataSource: ShopDataSource) {
    super(ProductCategory, dataSource);
  }
}
