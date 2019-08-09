import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'shopping_cart'}}
})
export class ShoppingCart extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"item_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  itemId: Number;

  @property({
    type: String,
    required: true,
    length: 32,
    mysql: {"columnName":"cart_id","dataType":"char","dataLength":32,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  cartId: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"product_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  productId: Number;

  @property({
    type: String,
    required: true,
    length: 1000,
    mysql: {"columnName":"attributes","dataType":"varchar","dataLength":1000,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  attributes: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"quantity","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  quantity: Number;

  @property({
    type: Number,
    required: true,
    precision: 3,
    scale: 0,
    mysql: {"columnName":"buy_now","dataType":"tinyint","dataLength":null,"dataPrecision":3,"dataScale":0,"nullable":"N"},
  })
  buyNow: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"added_on","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  addedOn: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ShoppingCart>) {
    super(data);
  }
}

export interface ShoppingCartRelations {
  // describe navigational properties here
}

export type ShoppingCartWithRelations = ShoppingCart & ShoppingCartRelations;
