import { Injectable } from '@nestjs/common';
import { product } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    private products:product[] = [
        {id:1, price:100, title:"name"},
        {id:2, price:200, title:"name2"},
        {id:3, price:400, title:"name3"},
        {id:4, price:300, title:"name4"},
    ]

    getAll():product[] {
        return this.products
    }

    getById(id:number):product {
        return  this.products.find(elem => elem.id === id)
    }

    create(data:product):string {
        this.products = [...this.products, data]
        return 'ok'
    }
}
