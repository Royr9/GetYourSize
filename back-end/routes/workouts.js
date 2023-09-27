const express = require("express"); 


const router = express.Router();
const {
    createWorkout, 
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutsController");

//mongoose schema model
const Workout = require("../models/workoutModel");

//all workout requests 
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getWorkout);

//post a workout
router.post("/", createWorkout);

//delete
router.delete("/:id", deleteWorkout );

//update 
router.patch("/:id", updateWorkout );





module.exports = router;

