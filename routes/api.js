const router = require("express").Router();
const Workout = require("../models/workout");

//get all workouts
router.get("/api/workouts", async (req, res) => {
    try{
        const workouts = await Workout.find()
         res.status(200).json(workouts)
    } catch(err){
        res.status(500).json(err);
    }
});

//create a new workout
router.post("/api/workouts", async ({ body }, res) => {
    try{
        const workout = await Workout.create({ body });
        res.status(200).json(workout);
    } catch(err) {
        json.status(500).json(err);
    }  
});

//update a workout
router.put("/api/workouts/:id", async ({ body, params}, res) => {
    try{
        const workout = await Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body}}
        )
         res.status(200).json(workout);
    } catch(err) {
        res.status(500).json(err);
    }  
});

router.get("/api/workouts/range", async (req, res) => {
    try{
        const workoutRange = await Workout.find({}).limit(7);
        res.status(200).json(workoutRange);

    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;