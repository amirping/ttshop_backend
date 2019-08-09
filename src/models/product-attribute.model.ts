import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'product_attribute'}}
})
export class ProductAttribute extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"product_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  productId: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 2,
    mysql: {"columnName":"attribute_value_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  attributeValueId: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProductAttribute>) {
    super(data);
  }
}

export interface ProductAttributeRelations {
  // describe navigational properties here
}

export type ProductAttributeWithRelations = ProductAttribute & ProductAttributeRelations;
