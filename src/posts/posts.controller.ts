import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get('/:userId?')
  getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
}
