const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
    name: {
        type: String,
        trim: true,
        required: "Yes"
    },
    type: {
        type: String,
        trim: true,
        required: "Yes"
    },
    duration: {
        type: Number,
        required: "Yes"
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
    },
}]
}, 
// for including a virtual property on data request 
{ toJSON: { virtuals: true }}); 

WorkoutSchema.virtual('totalDuration').get(function(){
    
    return this.exercises.reduce((totalTime, exercise) => {
        return totalTime + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;