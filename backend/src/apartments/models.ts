// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface IApartment extends Document {
  location: string;
  name: string;
  management: string;
  averageOverall: number;
  reviews: import('../reviews/models').IReview[];
  id: string;
}

const ApartmentSchema: Schema = new Schema({
  title: { type: String, required: true },
  postText: { type: String, required: true },
  comments: { type: [String] },
  upvotes: { type: Number, default: 0 },
  course: { type: String },
  id: { type: String }
});

const Apartment = model('Apartment', ApartmentSchema);

export type { Apartment };