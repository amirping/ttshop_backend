import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'category'}}
})
export class Category extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"category_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  categoryId: Number;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"department_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  departmentId: Number;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"name","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  @property({
    type: String,
    required: false,
    length: 1000,
    mysql: {"columnName":"description","dataType":"varchar","dataLength":1000,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  description?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
