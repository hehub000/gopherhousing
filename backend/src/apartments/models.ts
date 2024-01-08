// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';
import { Review } from '../reviews/models'
export interface IApartment extends Document {
  location: string;
  name: string;
  management: string;
  averageOverall: number;
  averagePrice: number;
  averageLocation: number;
  averageManagement: number;
  reviews: import('../reviews/models').IReview[];
  id: string;
}

const ApartmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  reviews: { type: [Review] },
  management: { type: String, required: true },
  averageOverall: { type: Number, default: 0 },
  averagePrice: { type: Number, default: 0 },
  averageLocation: { type: Number, default: 0 },
  averageManagement: { type: Number, default: 0 },
  id: { type: String }
});

const Apartment = model('Apartment', ApartmentSchema);

export type { Apartment };