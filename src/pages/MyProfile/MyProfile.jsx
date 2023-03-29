import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../../mock-data.json";
import ReadOnlyRow from "../../components/ReadOnlyRow";
import EditableRow from "../../components/EditableRow";
import './MyProfile.css'
import Button from '@mui/material/Button';

const App = () => {
  const [workouts, setWorkouts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    exercise: "",
    sets: "",
    weight: "",
    repGoal: "",
    repsDone: ""
  });

  const [editFormData, setEditFormData] = useState({
    exercise: "",
    sets: "",
    weight: "",
    repGoal: "",
    repsDone: ""
  });

  const [editWorkoutId, setEditWorkoutId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWorkout = {
      id: nanoid(),
      exercise: addFormData.exercise,
      sets: addFormData.sets,
      weight: addFormData.weight,
      repGoal: addFormData.repGoal,
      repsDone: addFormData.repsDone,
    };

    const newWorkouts = [...workouts, newWorkout];
    setWorkouts(newWorkouts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedWorkout = {
      id: editFormData,
      exercise: editFormData.exercise,
      sets: editFormData.sets,
      weight: editFormData.weight,
      repGoal: editFormData.repGoal,
      repsDone: editFormData.repsDone,
    };

    const newWorkouts = [...workouts];

    const index = workouts.findIndex((workout) => workout.id === editWorkoutId);

    newWorkouts[index] = editedWorkout;

    setWorkouts(newWorkouts);
    setEditWorkoutId(null);
  };

  const handleEditClick = (event, workout) => {
    event.preventDefault();
    setEditWorkoutId(workout.id);

    const formValues = {
      exercise: workout.exercise,
      sets: workout.sets,
      weight: workout.weight,
      repGoal: workout.repGoal,
      repsDone: workout.repsDone,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditWorkoutId(null);
  };

  const handleDeleteClick = (workoutId) => {
    const newWorkouts = [...workouts];

    const index = workouts.findIndex((workout) => workout.id === workoutId);

    newWorkouts.splice(index, 1);

    setWorkouts(newWorkouts);
  };

  return (
    <div className="app-container">

<div>
  <h1>HELLO</h1>
</div>



      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Weight</th>
              <th>Rep Goal</th>
              <th>Reps Done</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <Fragment>
                {editWorkoutId === workout.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    workout={workout}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Workout</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="exercise"
          required="required"
          placeholder="Enter an exercise..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="sets"
          required="required"
          placeholder="Enter sets..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="weight"
          required="required"
          placeholder="Enter weight..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="repGoal"
          required="required"
          placeholder="Enter a rep goal..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="repsDone"
          required="required"
          placeholder="Enter reps done..."
          onChange={handleAddFormChange}
        />
       <Button variant="outlined" type="submit">Add</Button>
      </form>
    </div>
  );
};

export default App;