import { Controller, Get } from '@nestjs/common';
import { AppService, OrchestratorStatus } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): OrchestratorStatus {
    return this.appService.getStatus();
  }
}
