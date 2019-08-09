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
import {Audit} from '../models';
import {AuditRepository} from '../repositories';

export class AuditController {
  constructor(
    @repository(AuditRepository)
    public auditRepository : AuditRepository,
  ) {}

  @post('/audits', {
    responses: {
      '200': {
        description: 'Audit model instance',
        content: {'application/json': {schema: {'x-ts-type': Audit}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Audit, {exclude: ['id']}),
        },
      },
    })
    audit: Omit<Audit, 'id'>,
  ): Promise<Audit> {
    return await this.auditRepository.create(audit);
  }

  @get('/audits/count', {
    responses: {
      '200': {
        description: 'Audit model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Audit)) where?: Where<Audit>,
  ): Promise<Count> {
    return await this.auditRepository.count(where);
  }

  @get('/audits', {
    responses: {
      '200': {
        description: 'Array of Audit model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Audit}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Audit)) filter?: Filter<Audit>,
  ): Promise<Audit[]> {
    return await this.auditRepository.find(filter);
  }

  @patch('/audits', {
    responses: {
      '200': {
        description: 'Audit PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Audit, {partial: true}),
        },
      },
    })
    audit: Audit,
    @param.query.object('where', getWhereSchemaFor(Audit)) where?: Where<Audit>,
  ): Promise<Count> {
    return await this.auditRepository.updateAll(audit, where);
  }

  @get('/audits/{id}', {
    responses: {
      '200': {
        description: 'Audit model instance',
        content: {'application/json': {schema: {'x-ts-type': Audit}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Audit> {
    return await this.auditRepository.findById(id);
  }

  @patch('/audits/{id}', {
    responses: {
      '204': {
        description: 'Audit PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Audit, {partial: true}),
        },
      },
    })
    audit: Audit,
  ): Promise<void> {
    await this.auditRepository.updateById(id, audit);
  }

  @put('/audits/{id}', {
    responses: {
      '204': {
        description: 'Audit PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() audit: Audit,
  ): Promise<void> {
    await this.auditRepository.replaceById(id, audit);
  }

  @del('/audits/{id}', {
    responses: {
      '204': {
        description: 'Audit DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.auditRepository.deleteById(id);
  }
}
