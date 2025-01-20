import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CancionesController } from './controllers/canciones/canciones.controller';
import { ThreadsController } from './controller/threads/threads.controller';
import { ProductsService } from './services/products/products.service';
import { DtosService } from './dtos/dtos.service';
import { EntitiesService } from './entities/entities.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, CancionesController, ThreadsController],
  providers: [AppService, ProductsService, DtosService, EntitiesService],
})
export class AppModule {}
