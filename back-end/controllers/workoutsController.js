
const Workout = require("../models/workoutModel")
const mongoose = require("mongoose");

//get all 
const getWorkouts = async (req, res)=>{
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1 });
      
    res.status(200).json(workouts)
} catch (error) {
    res.status(400).json({error: error.message})
    }
}


//get a specific workout 
const getWorkout = async (req, res) => {
    try {
      const { id } = req.params;
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid object ID" });
      }
      
      const workout = await Workout.findById(id);
      
      if (!workout) {
        return res.status(404).json({ error: "No such workout" });
      }
      
      res.status(200).json(workout);
    } catch (error) {
      // Handle the error
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };






// post 
const createWorkout = async (req,res)=>{
    const {title, reps, load} = req.body;

    let emptyFields= []; 

    if (!title) {
      emptyFields.push("title")
    }

    if (!load) {
      emptyFields.push("load")
    }

    if (!reps) {
      emptyFields.push("reps")
    }

    if (emptyFields.length > 0) {
      return  res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete 

const deleteWorkout = async (req,res)=>{

    const { id } = req.params;
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid object ID" });
      }

      const workout = await Workout.findOneAndDelete({_id: id}); 

      if (!workout) {
        return res.status(404).json({ error: "No such workout" });
      }

      res.status(200).json(workout);
}

//patch(update)
const updateWorkout = async (req,res) => {
  const {title, reps, load} = req.body;
  
    try {
        const { id } = req.params;
      
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: "Invalid object ID" });
        }
  
        const workout = await Workout.findOneAndUpdate({_id: id},{
          ...req.body
        }); 
  
        if (!workout) {
          return res.status(404).json({ error: "No such workout" });
        }
        res.status(200).json(workout);
    } catch (error) {
        console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
   
}




module.exports = {
    getWorkout,
    createWorkout, 
    deleteWorkout,
    updateWorkout,
    getWorkouts };