import mongoose, { Schema, Document } from 'mongoose';

interface IResource extends Document {
  name: string;
  description: string;
  createdAt: Date;
}

const resourceSchema = new Schema<IResource>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ResourceModel = mongoose.model<IResource>('Resource', resourceSchema);

export { ResourceModel };
