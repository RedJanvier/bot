import { Schema, model } from 'mongoose';

const responseSchema = Schema(
  {
    userId: {
      type: String,
    },
    mood: {
      type: String,
    },
    freeTime: {
      type: String,
    },
    hobby: {
      type: [String],
      // enum: ['Football', 'Music', 'Sleep', 'Movies', 'Basketball'],
    },
    digitsOnScale: {
      type: Number,
    },
  },
  { timestamps: true, collection: 'Response' }
);

export default model('Response', responseSchema);
