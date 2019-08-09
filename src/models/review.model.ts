import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'review'}}
})
export class Review extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"review_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  reviewId: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"customer_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  customerId: Number;

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
    length: 65535,
    mysql: {"columnName":"review","dataType":"text","dataLength":65535,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  review: String;

  @property({
    type: Number,
    required: true,
    precision: 5,
    scale: 0,
    mysql: {"columnName":"rating","dataType":"smallint","dataLength":null,"dataPrecision":5,"dataScale":0,"nullable":"N"},
  })
  rating: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"created_on","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdOn: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {
  // describe navigational properties here
}

export type ReviewWithRelations = Review & ReviewRelations;
