import { Controller, Get, Param } from '@nestjs/common';

@Controller('sorts')
export class SortsController {
    
    @Get()
    sortProducts(){
        return 'id'
    }
}
