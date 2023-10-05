// Import the necessary modules
import * as mongoose from 'mongoose';

// Define your schema
export const CommentSchema = new mongoose.Schema({
  text: String,
  author: String,
  parentCommentId: {
    type: mongoose.Types.ObjectId,
    default: null,
  },
}, {
  timestamps: true, // Add timestamps option
  collection: 'webboard', // Specify the custom collection name
});

// Define the Comment model
export interface Comment extends mongoose.Document {
  text: string;
  author: string;
  parentCommentId: mongoose.Types.ObjectId | null;
}
