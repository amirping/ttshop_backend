import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'order_detail'}}
})
export class OrderDetail extends Entity {
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
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"order_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  orderId: Number;

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
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"product_name","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  productName: String;

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
    precision: 10,
    scale: 2,
    mysql: {"columnName":"unit_cost","dataType":"decimal","dataLength":null,"dataPrecision":10,"dataScale":2,"nullable":"N"},
  })
  unitCost: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrderDetail>) {
    super(data);
  }
}

export interface OrderDetailRelations {
  // describe navigational properties here
}

export type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
