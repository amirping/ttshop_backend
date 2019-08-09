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
import {ShippingRegion} from '../models';
import {ShippingRegionRepository} from '../repositories';

export class ShippingRegionController {
  constructor(
    @repository(ShippingRegionRepository)
    public shippingRegionRepository : ShippingRegionRepository,
  ) {}

  @post('/shipping-regions', {
    responses: {
      '200': {
        description: 'ShippingRegion model instance',
        content: {'application/json': {schema: {'x-ts-type': ShippingRegion}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShippingRegion, {exclude: ['id']}),
        },
      },
    })
    shippingRegion: Omit<ShippingRegion, 'id'>,
  ): Promise<ShippingRegion> {
    return await this.shippingRegionRepository.create(shippingRegion);
  }

  @get('/shipping-regions/count', {
    responses: {
      '200': {
        description: 'ShippingRegion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ShippingRegion)) where?: Where<ShippingRegion>,
  ): Promise<Count> {
    return await this.shippingRegionRepository.count(where);
  }

  @get('/shipping-regions', {
    responses: {
      '200': {
        description: 'Array of ShippingRegion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ShippingRegion}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ShippingRegion)) filter?: Filter<ShippingRegion>,
  ): Promise<ShippingRegion[]> {
    return await this.shippingRegionRepository.find(filter);
  }

  @patch('/shipping-regions', {
    responses: {
      '200': {
        description: 'ShippingRegion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShippingRegion, {partial: true}),
        },
      },
    })
    shippingRegion: ShippingRegion,
    @param.query.object('where', getWhereSchemaFor(ShippingRegion)) where?: Where<ShippingRegion>,
  ): Promise<Count> {
    return await this.shippingRegionRepository.updateAll(shippingRegion, where);
  }

  @get('/shipping-regions/{id}', {
    responses: {
      '200': {
        description: 'ShippingRegion model instance',
        content: {'application/json': {schema: {'x-ts-type': ShippingRegion}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ShippingRegion> {
    return await this.shippingRegionRepository.findById(id);
  }

  @patch('/shipping-regions/{id}', {
    responses: {
      '204': {
        description: 'ShippingRegion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShippingRegion, {partial: true}),
        },
      },
    })
    shippingRegion: ShippingRegion,
  ): Promise<void> {
    await this.shippingRegionRepository.updateById(id, shippingRegion);
  }

  @put('/shipping-regions/{id}', {
    responses: {
      '204': {
        description: 'ShippingRegion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() shippingRegion: ShippingRegion,
  ): Promise<void> {
    await this.shippingRegionRepository.replaceById(id, shippingRegion);
  }

  @del('/shipping-regions/{id}', {
    responses: {
      '204': {
        description: 'ShippingRegion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.shippingRegionRepository.deleteById(id);
  }
}
