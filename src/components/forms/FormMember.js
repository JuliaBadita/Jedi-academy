import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormMember = () => {
  return (
    <form>
      <div>
        <TextField id="pseudo" label="Pseudo" type="text" />
      </div>

      <div>
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="standard"
        />
      </div>

      <div>
        <Button variant="contained">Contained</Button>
      </div>
    </form>
  );
};

export default FormMember;
