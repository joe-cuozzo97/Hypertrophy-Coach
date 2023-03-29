import React from "react";

const ReadOnlyRow = ({ workout, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{workout.exercise}</td>
      <td>{workout.sets}</td>
      <td>{workout.weight}</td>
      <td>{workout.repGoal}</td>
      <td>{workout.repsDone}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, workout)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(workout.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;