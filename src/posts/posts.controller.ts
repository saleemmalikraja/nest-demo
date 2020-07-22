import { Controller, Get, Param, Post, Put, Body, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('posts')
export class PostsController {

@Get()
  getPosts(): string {
    //return 'This retuns all post';
    //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  getPostsById(@Param('id') id: string) {
    return `This retuns specific post with ${id}`;
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() payload: any){
      return `This updates post for given id ${id} with the payload ${payload}`;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string){
      return ''
  }

  @Post()
  createPost(@Body() payload: any){
    return `will update the body with this ${payload}`
  }
}
