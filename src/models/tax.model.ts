import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'tax'}}})
export class Tax extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"tax_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  taxId: Number;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"tax_type","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  taxType: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 2,
    mysql: {"columnName":"tax_percentage","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  taxPercentage: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tax>) {
    super(data);
  }
}

export interface TaxRelations {
  // describe navigational properties here
}

export type TaxWithRelations = Tax & TaxRelations;
