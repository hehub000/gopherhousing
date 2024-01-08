// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface IReview extends Document {

  id: string
}

const ReviewSchema: Schema = new Schema({

  id: { type: String }
});

const Review = model('Review', ReviewSchema)

export { Review };