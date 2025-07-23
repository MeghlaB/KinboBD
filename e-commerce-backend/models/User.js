import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  uid: { type: String, unique: true, required: true },   
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },  
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
  image: { type: String },
  phone: String,
  address: String,
  createdAt: { type: Date, default: Date.now },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  recommendations: { type: Schema.Types.ObjectId, ref: 'Recommendation' },
});

export const User = models.User || model('User', userSchema);
