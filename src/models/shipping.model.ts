import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'shipping'}}
})
export class Shipping extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"shipping_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  shippingId: Number;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"shipping_type","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  shippingType: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 2,
    mysql: {"columnName":"shipping_cost","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  shippingCost: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"shipping_region_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  shippingRegionId: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Shipping>) {
    super(data);
  }
}

export interface ShippingRelations {
  // describe navigational properties here
}

export type ShippingWithRelations = Shipping & ShippingRelations;
