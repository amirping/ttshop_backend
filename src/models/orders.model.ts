import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'orders'}}
})
export class Orders extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"order_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  orderId: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 2,
    mysql: {"columnName":"total_amount","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  totalAmount: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"created_on","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdOn: Date;

  @property({
    type: Date,
    required: false,
    mysql: {"columnName":"shipped_on","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  shippedOn?: Date;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"status","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  status: Number;

  @property({
    type: String,
    required: false,
    length: 255,
    mysql: {"columnName":"comments","dataType":"varchar","dataLength":255,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  comments?: String;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"customer_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"Y"},
  })
  customerId?: Number;

  @property({
    type: String,
    required: false,
    length: 50,
    mysql: {"columnName":"auth_code","dataType":"varchar","dataLength":50,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  authCode?: String;

  @property({
    type: String,
    required: false,
    length: 50,
    mysql: {"columnName":"reference","dataType":"varchar","dataLength":50,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  reference?: String;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"shipping_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"Y"},
  })
  shippingId?: Number;

  @property({
    type: Number,
    required: false,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"tax_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"Y"},
  })
  taxId?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Orders>) {
    super(data);
  }
}

export interface OrdersRelations {
  // describe navigational properties here
}

export type OrdersWithRelations = Orders & OrdersRelations;
