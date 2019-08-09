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
import {Attribute} from '../models';
import {AttributeRepository} from '../repositories';

export class AttributeController {
  constructor(
    @repository(AttributeRepository)
    public attributeRepository : AttributeRepository,
  ) {}

  @post('/attributes', {
    responses: {
      '200': {
        description: 'Attribute model instance',
        content: {'application/json': {schema: {'x-ts-type': Attribute}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {exclude: ['id']}),
        },
      },
    })
    attribute: Omit<Attribute, 'id'>,
  ): Promise<Attribute> {
    return await this.attributeRepository.create(attribute);
  }

  @get('/attributes/count', {
    responses: {
      '200': {
        description: 'Attribute model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Attribute)) where?: Where<Attribute>,
  ): Promise<Count> {
    return await this.attributeRepository.count(where);
  }

  @get('/attributes', {
    responses: {
      '200': {
        description: 'Array of Attribute model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Attribute}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Attribute)) filter?: Filter<Attribute>,
  ): Promise<Attribute[]> {
    return await this.attributeRepository.find(filter);
  }

  @patch('/attributes', {
    responses: {
      '200': {
        description: 'Attribute PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {partial: true}),
        },
      },
    })
    attribute: Attribute,
    @param.query.object('where', getWhereSchemaFor(Attribute)) where?: Where<Attribute>,
  ): Promise<Count> {
    return await this.attributeRepository.updateAll(attribute, where);
  }

  @get('/attributes/{id}', {
    responses: {
      '200': {
        description: 'Attribute model instance',
        content: {'application/json': {schema: {'x-ts-type': Attribute}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Attribute> {
    return await this.attributeRepository.findById(id);
  }

  @patch('/attributes/{id}', {
    responses: {
      '204': {
        description: 'Attribute PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {partial: true}),
        },
      },
    })
    attribute: Attribute,
  ): Promise<void> {
    await this.attributeRepository.updateById(id, attribute);
  }

  @put('/attributes/{id}', {
    responses: {
      '204': {
        description: 'Attribute PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() attribute: Attribute,
  ): Promise<void> {
    await this.attributeRepository.replaceById(id, attribute);
  }

  @del('/attributes/{id}', {
    responses: {
      '204': {
        description: 'Attribute DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.attributeRepository.deleteById(id);
  }
}
