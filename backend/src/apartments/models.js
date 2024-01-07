"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ApartmentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    postText: { type: String, required: true },
    comments: { type: [String] },
    upvotes: { type: Number, default: 0 },
    course: { type: String },
    id: { type: String }
});
const Apartment = (0, mongoose_1.model)('Apartment', ApartmentSchema);
