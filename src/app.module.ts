import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from './comments/comment.service';
import { CommentController } from './comments/comment.controller';
import { CommentSchema } from './comments/schemas/comment.schema';
import mongoose from 'mongoose'; // Import Mongoose

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:softdev@cluster0.gxuaxaj.mongodb.net/SoftdevProject', {
    }),
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class AppModule {}
