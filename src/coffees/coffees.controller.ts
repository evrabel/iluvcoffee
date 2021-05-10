import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Note that the following string uses the backtick instead of the apostrophe
    return `This action returns #${id} coffees`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
