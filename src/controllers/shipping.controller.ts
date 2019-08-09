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
import {Shipping} from '../models';
import {ShippingRepository} from '../repositories';

export class ShippingController {
  constructor(
    @repository(ShippingRepository)
    public shippingRepository : ShippingRepository,
  ) {}

  @post('/shippings', {
    responses: {
      '200': {
        description: 'Shipping model instance',
        content: {'application/json': {schema: {'x-ts-type': Shipping}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shipping, {exclude: ['id']}),
        },
      },
    })
    shipping: Omit<Shipping, 'id'>,
  ): Promise<Shipping> {
    return await this.shippingRepository.create(shipping);
  }

  @get('/shippings/count', {
    responses: {
      '200': {
        description: 'Shipping model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Shipping)) where?: Where<Shipping>,
  ): Promise<Count> {
    return await this.shippingRepository.count(where);
  }

  @get('/shippings', {
    responses: {
      '200': {
        description: 'Array of Shipping model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Shipping}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Shipping)) filter?: Filter<Shipping>,
  ): Promise<Shipping[]> {
    return await this.shippingRepository.find(filter);
  }

  @patch('/shippings', {
    responses: {
      '200': {
        description: 'Shipping PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shipping, {partial: true}),
        },
      },
    })
    shipping: Shipping,
    @param.query.object('where', getWhereSchemaFor(Shipping)) where?: Where<Shipping>,
  ): Promise<Count> {
    return await this.shippingRepository.updateAll(shipping, where);
  }

  @get('/shippings/{id}', {
    responses: {
      '200': {
        description: 'Shipping model instance',
        content: {'application/json': {schema: {'x-ts-type': Shipping}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Shipping> {
    return await this.shippingRepository.findById(id);
  }

  @patch('/shippings/{id}', {
    responses: {
      '204': {
        description: 'Shipping PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shipping, {partial: true}),
        },
      },
    })
    shipping: Shipping,
  ): Promise<void> {
    await this.shippingRepository.updateById(id, shipping);
  }

  @put('/shippings/{id}', {
    responses: {
      '204': {
        description: 'Shipping PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() shipping: Shipping,
  ): Promise<void> {
    await this.shippingRepository.replaceById(id, shipping);
  }

  @del('/shippings/{id}', {
    responses: {
      '204': {
        description: 'Shipping DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.shippingRepository.deleteById(id);
  }
}
