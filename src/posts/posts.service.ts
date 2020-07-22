import { HttpException, HttpStatus, Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
// App Imports
import {CreatePostDto} from './dto/createPost.dto';
import {Post} from './post.interface';
import {UpdatePostDto} from './dto/updatePost.dto';
 
@Injectable()
export class PostsService {
  private lastPostId = 0;
  private posts: Post[] = [];

  constructor(private httpService: HttpService) {}
 
  getAllPosts(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:4500/posts').pipe(map(response => this.posts = response.data));
  }
 
  getPostById(id: number) {
    const post = this.posts.find(post => post.id === id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }
 
  replacePost(id: number, post: UpdatePostDto) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts[postIndex] = post;
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }
 
  createPost(post: CreatePostDto) {
      this.lastPostId = this.posts.length+1;
    const newPost = {
      id: this.lastPostId,
      ...post
    }
    this.posts.push(newPost);
    return newPost;
  }
 
  deletePost(id: number) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}