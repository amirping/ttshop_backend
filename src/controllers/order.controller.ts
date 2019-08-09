import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Orders} from '../models';
import {OrdersRepository} from '../repositories';

export class OrderController {
  constructor(
    @repository(OrdersRepository)
    public ordersRepository : OrdersRepository,
  ) {}

  @post('/orders', {
    responses: {
      '200': {
        description: 'Orders model instance',
        content: {'application/json': {schema: {'x-ts-type': Orders}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orders, {exclude: ['id']}),
        },
      },
    })
    orders: Omit<Orders, 'id'>,
  ): Promise<Orders> {
    return await this.ordersRepository.create(orders);
  }

  @get('/orders/count', {
    responses: {
      '200': {
        description: 'Orders model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Orders)) where?: Where<Orders>,
  ): Promise<Count> {
    return await this.ordersRepository.count(where);
  }

  @get('/orders', {
    responses: {
      '200': {
        description: 'Array of Orders model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Orders}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Orders)) filter?: Filter<Orders>,
  ): Promise<Orders[]> {
    return await this.ordersRepository.find(filter);
  }

  @patch('/orders', {
    responses: {
      '200': {
        description: 'Orders PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orders, {partial: true}),
        },
      },
    })
    orders: Orders,
    @param.query.object('where', getWhereSchemaFor(Orders)) where?: Where<Orders>,
  ): Promise<Count> {
    return await this.ordersRepository.updateAll(orders, where);
  }

  @get('/orders/{id}', {
    responses: {
      '200': {
        description: 'Orders model instance',
        content: {'application/json': {schema: {'x-ts-type': Orders}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Orders> {
    return await this.ordersRepository.findById(id);
  }

  @patch('/orders/{id}', {
    responses: {
      '204': {
        description: 'Orders PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orders, {partial: true}),
        },
      },
    })
    orders: Orders,
  ): Promise<void> {
    await this.ordersRepository.updateById(id, orders);
  }

  @put('/orders/{id}', {
    responses: {
      '204': {
        description: 'Orders PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orders: Orders,
  ): Promise<void> {
    await this.ordersRepository.replaceById(id, orders);
  }

  @del('/orders/{id}', {
    responses: {
      '204': {
        description: 'Orders DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordersRepository.deleteById(id);
  }
}
