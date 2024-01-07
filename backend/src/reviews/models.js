"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models here, mirroring those from ../customers/models.ts
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    id: { type: String }
});
const Review = (0, mongoose_1.model)('Review', ReviewSchema);
