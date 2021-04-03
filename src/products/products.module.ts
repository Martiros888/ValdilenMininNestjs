import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SortsController } from './sorts/sorts.controller';

@Module({
    controllers:[ProductsController, SortsController],
    providers:[ProductsService],
    exports:[ProductsService],
})

export class CatsModule {}