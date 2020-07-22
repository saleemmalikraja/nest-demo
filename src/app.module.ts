import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostService],
})
export class AppModule {}
