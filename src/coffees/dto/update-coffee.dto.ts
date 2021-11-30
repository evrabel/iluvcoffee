import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType marks all of the fields as optional, inherits the
// validation decorators and adds the optional validation rule
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
