import { Controller, Get, Query,Post,Body,Put,Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand?: string,
  ): string {
    return `Products with limit=${limit}, offset=${offset}, brand=${brand}`;
  }
  @Post()
    create(@Body() payload: any) {
      return {
        message: 'acción de crear',
        payload,
      };
    }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
}
