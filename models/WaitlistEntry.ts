// models/WaitlistEntry.ts
import mongoose, { Schema, Document } from 'mongoose';

// Interface for Waitlist document
export interface IWaitlistEntry extends Document {
  email: string;
  signupDate: Date;
  source?: string;
  metadata?: Record<string, any>;
}

// Schema definition
const WaitlistEntrySchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    signupDate: {
      type: Date,
      default: Date.now,
    },
    source: {
      type: String,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create and export the model
// Note: This is only needed if you prefer to use Mongoose over the MongoDB native driver
export default mongoose.models.WaitlistEntry ||
  mongoose.model<IWaitlistEntry>('WaitlistEntry', WaitlistEntrySchema);

// Usage example with Mongoose:
/*
import WaitlistEntry from '@/models/WaitlistEntry';

// In your API route
const entry = new WaitlistEntry({
  email: 'user@example.com',
  source: 'homepage'
});
await entry.save();
*/
