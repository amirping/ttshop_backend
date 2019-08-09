import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'audit'}}})
export class Audit extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"audit_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  auditId: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"order_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  orderId: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"created_on","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdOn: Date;

  @property({
    type: String,
    required: true,
    length: 65535,
    mysql: {"columnName":"message","dataType":"text","dataLength":65535,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  message: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"code","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  code: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Audit>) {
    super(data);
  }
}

export interface AuditRelations {
  // describe navigational properties here
}

export type AuditWithRelations = Audit & AuditRelations;
