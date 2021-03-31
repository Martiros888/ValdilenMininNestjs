import { product } from './dto/create-product.dto';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly ProductsService:ProductsService
    ){}

    @Get()
    // @Redirect('https://google.com', 301)
    getAll():product[] {
        return this.ProductsService.getAll()
    }

    // @Get(':id')
    // getOne(@Param() params):string{
    //     return params.id
    // }

    @Get(':id')
    getOne(@Param('id') id:string):product {
        return this.ProductsService.getById(+id)
    }

    @Post()
    // @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() createProduct:product):string {
        return this.ProductsService.create(createProduct)
    }

    // if you want get req, res do this
    // @Get()
    // // @ts-ignore
    // getAll2(@Req() req:Request, @Res res:Response){
    //     console.log(req, res)
    //     return 'ok'
    // }
}
