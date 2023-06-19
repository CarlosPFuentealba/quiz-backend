import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  exercise0() {
    return  this.appService.exercise0();
  }
  @Get()
  exercise1() {
    return  this.appService.exercise1();
  }
  @Get()
  exercise2() {
    return  this.appService.exercise2();
  }
  @Get()
  exercise3() {
    return  this.appService.exercise3();
  }
  @Get()
  exercise4() {
    return  this.appService.exercise4();
  }
  @Get()
  exercise5() {
    return  this.appService.exercise5();
  }
  @Get()
  exercise6() {
    return  this.appService.exercise6();
  }
  @Get()
  exercise7() {
    return  this.appService.exercise7();
  }
}
