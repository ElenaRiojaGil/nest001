/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //Inyección de dependencias--> Gestiona automaticamente la instancia
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-point')
  getNewEndpoint(): string {
    return 'new endpoint';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    // http://localhost:3000/products/1
    return `product ${productId}`
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    //@Param('productId') productId: string
    return `Product ${productId}, Category ${categoryId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  @Get(':categoryId/products/:productId')
  getCategory2(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }
}
