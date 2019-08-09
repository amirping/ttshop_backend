import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './shop.datasource.json';

export class ShopDataSource extends juggler.DataSource {
  static dataSourceName = 'shop';

  constructor(
    @inject('datasources.config.shop', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
