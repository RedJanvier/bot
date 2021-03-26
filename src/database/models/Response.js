import { Schema, model } from 'mongoose';

const responseSchema = Schema({
  mood: {
    type: String,
  },
  freeTime: {
    type: Date,
  },
  hobby: {
    type: String,
    enum: ['Football', 'Music', 'Sleep', 'Movies', 'Basketball'],
  },
  digitsOnScale: {
    type: Number,

  },
}, { timestamps: true, collection: 'Response' });

export default model('Response', responseSchema);
