const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//---Creating a custom method for the schema.
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  //---Virtuals is set true for when data is requested.
  {
    toJSON: {
      virtuals: true
    }
  }
);
//---Makes the array of exercise durations into a sum.
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
//---Exporting Workout Module
module.exports = Workout;
