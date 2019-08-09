import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'shipping_region'}}
})
export class ShippingRegion extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"shipping_region_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  shippingRegionId: Number;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"shipping_region","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  shippingRegion: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ShippingRegion>) {
    super(data);
  }
}

export interface ShippingRegionRelations {
  // describe navigational properties here
}

export type ShippingRegionWithRelations = ShippingRegion & ShippingRegionRelations;
