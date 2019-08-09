import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'tshirtsshop', table: 'customer'}}
})
export class Customer extends Entity {
  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {"columnName":"customer_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  customerId: Number;

  @property({
    type: String,
    required: true,
    length: 50,
    mysql: {"columnName":"name","dataType":"varchar","dataLength":50,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  @property({
    type: String,
    required: true,
    length: 100,
    mysql: {"columnName":"email","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  email: String;

  @property({
    type: String,
    required: true,
    length: 50,
    mysql: {"columnName":"password","dataType":"varchar","dataLength":50,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  password: String;

  @property({
    type: String,
    required: false,
    length: 65535,
    mysql: {"columnName":"credit_card","dataType":"text","dataLength":65535,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  creditCard?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"address_1","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  address1?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"address_2","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  address2?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"city","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  city?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"region","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  region?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"postal_code","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  postalCode?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"country","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  country?: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {"columnName":"shipping_region_id","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  shippingRegionId: Number;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"day_phone","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  dayPhone?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"eve_phone","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  evePhone?: String;

  @property({
    type: String,
    required: false,
    length: 100,
    mysql: {"columnName":"mob_phone","dataType":"varchar","dataLength":100,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  mobPhone?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
