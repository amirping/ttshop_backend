import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'product'}}
})
export class Product extends Entity {
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
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"name","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  @property({
    type: String,
    required: true,
    length: 1000,
    mysql: {"columnName":"description","dataType":"varchar","dataLength":1000,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  description: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 2,
    mysql: {"columnName":"price","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  price: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 2,
    mysql: {"columnName":"discounted_price","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  discountedPrice: Number;

  @property({
    type: String,
    required: false,
    length: 150,
    mysql: {"columnName":"image","dataType":"varchar","dataLength":150,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  image?: String;

  @property({
    type: String,
    required: false,
    length: 150,
    mysql: {"columnName":"image_2","dataType":"varchar","dataLength":150,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  image2?: String;

  @property({
    type: String,
    required: false,
    length: 150,
    mysql: {"columnName":"thumbnail","dataType":"varchar","dataLength":150,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  thumbnail?: String;

  @property({
    type: Number,
    required: true,
    precision: 5,
    scale: 0,
    mysql: {"columnName":"display","dataType":"smallint","dataLength":null,"dataPrecision":5,"dataScale":0,"nullable":"N"},
  })
  display: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
