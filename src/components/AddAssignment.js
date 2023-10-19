import React, { useState } from 'react';


function AddAssignment(props) { 


  return (
      <div>
        <h3>Add Assignment</h3>
    <input name="assignmentName"></input>
    <input name="courseTitle"></input>
    <input name="dueDate"></input>
      </div>
  ); 
}

export default AddAssignment;
