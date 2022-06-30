import React from "react";

export const TodoItem = ({ title, id, userId, completed }) => {
  return (
    <div
      style={{
        marginBottom: "30px",
        border: "10px solid tomato",
        background: "black",
        color: "whitesmoke",
      }}
    >
      <h2>userId {userId}</h2>
      <h4>{title}</h4>
      <h4>Task {completed ? "Completed" : "Not Completed"}</h4>
    </div>
  );
};
