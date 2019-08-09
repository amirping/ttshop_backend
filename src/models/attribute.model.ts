import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'attribute'}}
})
export class Attribute extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"attribute_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  attributeId: Number;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"name","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Attribute>) {
    super(data);
  }
}

export interface AttributeRelations {
  // describe navigational properties here
}

export type AttributeWithRelations = Attribute & AttributeRelations;
