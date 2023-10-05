import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<Comment>) {}

  async createComment(comment: Comment): Promise<Comment> {
    const createdComment = new this.commentModel(comment);
    return createdComment.save();
  }

  async getAllComments(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }
}
