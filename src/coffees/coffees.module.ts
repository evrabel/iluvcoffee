import { Module, Scope } from '@nestjs/common';

import { Coffee } from './entities/coffee.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { ConfigModule } from '@nestjs/config';
import { Event } from '../events/entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      // provide: COFFEE_BRANDS,
      // // Note "async" here, and Promise/Async event inside the Factory function
      // // Could be a database connection / API call / etc
      // // In our case we're just "mocking" this type of event with a Promise
      // useFactory: async (connection: Connection): Promise<string[]> => {
      //   // const coffeeBrands = await connection.query('SELECT * ...');
      //   const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
      //   console.log('[!] Async factory');
      //   return coffeeBrands;
      // },
      // inject: [Connection],
      provide: 'COFFEE_BRANDS',
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
