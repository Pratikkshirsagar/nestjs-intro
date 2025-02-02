import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './providers/posts.service';
import { UserModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  imports: [UserModule],
})
export class PostsModule {}
