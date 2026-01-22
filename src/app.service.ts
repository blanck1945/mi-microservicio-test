import { Injectable } from '@nestjs/common';

export interface OrchestratorStatus {
  name: string;
  version: string;
  status: string;
  template: string;
  environment: string;
  documentation: string;
  useful_commands: {
    deploy_check: string;
    logs: string;
  };
}

@Injectable()
export class AppService {
  getStatus(): OrchestratorStatus {
    return {
      name: 'BoogiePop Cloud Orchestrator',
      version: '1.0.0',
      status: 'Ready & Running',
      template: 'NestJS + Docker + Nginx (pnpm)',
      environment: process.env.NODE_ENV || 'development',
      documentation: 'https://docs.boogiepop.cloud (Coming Soon)',
      useful_commands: {
        deploy_check: 'GET /deploy/list',
        logs: 'docker logs infra-orchestrator',
      },
    };
  }
}
