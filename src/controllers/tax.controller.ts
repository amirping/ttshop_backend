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
import {Tax} from '../models';
import {TaxRepository} from '../repositories';

export class TaxController {
  constructor(
    @repository(TaxRepository)
    public taxRepository : TaxRepository,
  ) {}

  @post('/taxes', {
    responses: {
      '200': {
        description: 'Tax model instance',
        content: {'application/json': {schema: {'x-ts-type': Tax}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tax, {exclude: ['id']}),
        },
      },
    })
    tax: Omit<Tax, 'id'>,
  ): Promise<Tax> {
    return await this.taxRepository.create(tax);
  }

  @get('/taxes/count', {
    responses: {
      '200': {
        description: 'Tax model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tax)) where?: Where<Tax>,
  ): Promise<Count> {
    return await this.taxRepository.count(where);
  }

  @get('/taxes', {
    responses: {
      '200': {
        description: 'Array of Tax model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Tax}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tax)) filter?: Filter<Tax>,
  ): Promise<Tax[]> {
    return await this.taxRepository.find(filter);
  }

  @patch('/taxes', {
    responses: {
      '200': {
        description: 'Tax PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tax, {partial: true}),
        },
      },
    })
    tax: Tax,
    @param.query.object('where', getWhereSchemaFor(Tax)) where?: Where<Tax>,
  ): Promise<Count> {
    return await this.taxRepository.updateAll(tax, where);
  }

  @get('/taxes/{id}', {
    responses: {
      '200': {
        description: 'Tax model instance',
        content: {'application/json': {schema: {'x-ts-type': Tax}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Tax> {
    return await this.taxRepository.findById(id);
  }

  @patch('/taxes/{id}', {
    responses: {
      '204': {
        description: 'Tax PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tax, {partial: true}),
        },
      },
    })
    tax: Tax,
  ): Promise<void> {
    await this.taxRepository.updateById(id, tax);
  }

  @put('/taxes/{id}', {
    responses: {
      '204': {
        description: 'Tax PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tax: Tax,
  ): Promise<void> {
    await this.taxRepository.replaceById(id, tax);
  }

  @del('/taxes/{id}', {
    responses: {
      '204': {
        description: 'Tax DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.taxRepository.deleteById(id);
  }
}
