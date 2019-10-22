import { ITouristAttractionCategory } from '../interfaces/ITouristAttractionCategory';
import mongoose from 'mongoose';

const TouristAttractionCategory = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, 'Please enter a category name'],
      unique: true,
      index: true
    },
    categoryDescription: {
      type: String
    },
    categoryShortDesc: {
      type: String
    }
  }
);

export default mongoose.model<ITouristAttractionCategory & mongoose.Document>('ITouristAttractionCategory', TouristAttractionCategory);
