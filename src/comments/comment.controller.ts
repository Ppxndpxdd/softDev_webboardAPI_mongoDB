import { Controller, Post, Get, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './schemas/comment.schema';

@Controller('api/webboard')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.createComment(comment);
  }

  @Get() // This is the GET endpoint for /api/comments
  async findAll(): Promise<Comment[]> {
    return this.commentService.getAllComments();
  }
}
