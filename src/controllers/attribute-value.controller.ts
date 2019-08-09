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
import {AttributeValue} from '../models';
import {AttributeValueRepository} from '../repositories';

export class AttributeValueController {
  constructor(
    @repository(AttributeValueRepository)
    public attributeValueRepository : AttributeValueRepository,
  ) {}

  @post('/attribute-values', {
    responses: {
      '200': {
        description: 'AttributeValue model instance',
        content: {'application/json': {schema: {'x-ts-type': AttributeValue}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AttributeValue, {exclude: ['id']}),
        },
      },
    })
    attributeValue: Omit<AttributeValue, 'id'>,
  ): Promise<AttributeValue> {
    return await this.attributeValueRepository.create(attributeValue);
  }

  @get('/attribute-values/count', {
    responses: {
      '200': {
        description: 'AttributeValue model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(AttributeValue)) where?: Where<AttributeValue>,
  ): Promise<Count> {
    return await this.attributeValueRepository.count(where);
  }

  @get('/attribute-values', {
    responses: {
      '200': {
        description: 'Array of AttributeValue model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': AttributeValue}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(AttributeValue)) filter?: Filter<AttributeValue>,
  ): Promise<AttributeValue[]> {
    return await this.attributeValueRepository.find(filter);
  }

  @patch('/attribute-values', {
    responses: {
      '200': {
        description: 'AttributeValue PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AttributeValue, {partial: true}),
        },
      },
    })
    attributeValue: AttributeValue,
    @param.query.object('where', getWhereSchemaFor(AttributeValue)) where?: Where<AttributeValue>,
  ): Promise<Count> {
    return await this.attributeValueRepository.updateAll(attributeValue, where);
  }

  @get('/attribute-values/{id}', {
    responses: {
      '200': {
        description: 'AttributeValue model instance',
        content: {'application/json': {schema: {'x-ts-type': AttributeValue}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<AttributeValue> {
    return await this.attributeValueRepository.findById(id);
  }

  @patch('/attribute-values/{id}', {
    responses: {
      '204': {
        description: 'AttributeValue PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AttributeValue, {partial: true}),
        },
      },
    })
    attributeValue: AttributeValue,
  ): Promise<void> {
    await this.attributeValueRepository.updateById(id, attributeValue);
  }

  @put('/attribute-values/{id}', {
    responses: {
      '204': {
        description: 'AttributeValue PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() attributeValue: AttributeValue,
  ): Promise<void> {
    await this.attributeValueRepository.replaceById(id, attributeValue);
  }

  @del('/attribute-values/{id}', {
    responses: {
      '204': {
        description: 'AttributeValue DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.attributeValueRepository.deleteById(id);
  }
}
