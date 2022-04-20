import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormComment = () => {
  const [comment, setComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="pseudo"
          label="Pseudo"
          type="text"
          onChange={handleChange}
          name="pseudo"
        />
      </div>

      <div>
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="standard"
          onChange={handleChange}
          name="content"
        />
      </div>

      <div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormComment;
