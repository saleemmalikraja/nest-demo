import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import {PostsService} from './posts.service';
import {CreatePostDto}  from './dto/createPost.dto';
import {UpdatePostDto}  from './dto/updatePost.dto';
import { HttpExceptionFilter } from 'src/filters/http-exception-filter';
 
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}
 
  @Get()
  @HttpCode(202)
  getAllPosts() {
    return this.postsService.getAllPosts();
  }
 
  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  getPostById(@Param('id', ParseIntPipe) id: string) {
    return this.postsService.getPostById(Number(id));
  }
 
  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }
 
  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }
 
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}