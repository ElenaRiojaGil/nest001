/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query, Delete, Put, Post } from '@nestjs/common';

@Controller('controllers/canciones')
export class CancionesController {
  @Get()
  getCanciones(@Query('title') title?: string): string {
    if (title) {
      return `Lista de canciones con el título: ${title}`;
    }
    return 'Lista de canciones';
    // http://localhost:3000/controllers/canciones
  }

  @Get(':id')
  getCancion(@Param('id') id: string): string {
    return `Detalles de la canción con ID: ${id}`;
    // http://localhost:3000/controllers/canciones/:id
  }

  @Delete(':id')
  deleteCancion(@Param('id') id: string): string {
    return `Canción con ID: ${id} eliminada`;
    // http://localhost:3000/controllers/canciones/:id
  }

  @Put(':id')
  updateCancion(@Param('id') id: string): string {
    return `Canción con ID: ${id} actualizada`;
  }

  @Post(':title/:category')
  createCancion(
    @Param('title') title: string,
    @Param('category') category: string,
  ): string {
    return `Canción creada con título: ${title} y categoría: ${category}`;
    // http://localhost:3000/controllers/canciones/:title/:category
  }
}
