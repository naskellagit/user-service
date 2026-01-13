import { Schema, model, Document } from "mongoose"
import { IUserDoc } from "../../types/types"


const UserSchema = new Schema<IUserDoc>({
  fullName: { type: String, required: true },
  birthDate: { type: Date },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true,
  versionKey: false
})

export const User = model<IUserDoc>('User', UserSchema)