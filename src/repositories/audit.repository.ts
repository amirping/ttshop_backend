import {DefaultCrudRepository} from '@loopback/repository';
import {Audit, AuditRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AuditRepository extends DefaultCrudRepository<
  Audit,
  typeof Audit.prototype.auditId,
  AuditRelations
> {
  constructor(
    @inject('datasources.shop') dataSource: ShopDataSource,
  ) {
    super(Audit, dataSource);
  }
}
