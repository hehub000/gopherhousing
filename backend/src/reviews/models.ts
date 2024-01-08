// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface IReview extends Document {
  apartmentID: string;
  header: string;
  body: string;
  leaseTime: string;
  postTime: string;
  overallRating: number;
  priceRating: number;
  locationRating: number;
  managementRating: number;
  id: string;
}

const ReviewSchema: Schema = new Schema({
  apartmentID: { type: String, required: true },
  header: { type: String, required: true },
  body: { type: String, required: false },
  leaseTime: { type: String, required: false },
  postTime: { type: String, required: true },
  averageOverall: { type: Number, default: 0 },
  averagePrice: { type: Number, default: 0 },
  averageLocation: { type: Number, default: 0 },
  averageManagement: { type: Number, default: 0 },
  id: { type: String }
});

const Review = model('Review', ReviewSchema)

export { Review };