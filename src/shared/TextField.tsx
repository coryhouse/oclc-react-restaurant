import { TextField as MuiTextField } from "@mui/material";
import { Status } from "../Admin";
import { useState } from "react";
import { FormField } from "./FormField";

type TextFieldProps = {
  label: string;
  id: string;
  onBlur?: (event: any) => void;
  onChange: (event: any) => void;
  error: string | undefined;
  type?: "text" | "number" | "password" | "email";
  value: string | number;
  status: Status;
};

export function TextField({
  type = "text",
  error,
  status,
  onBlur,
  ...rest
}: TextFieldProps) {
  const [touched, setTouched] = useState(false);

  return (
    <FormField>
      <MuiTextField
        type={type}
        onBlur={(e) => {
          setTouched(true);
          onBlur && onBlur(e);
        }}
        error={(touched || status === "submitted") && Boolean(error)}
        helperText={(touched || status === "submitted") && error}
        // Using spread syntax to pass all other props down.
        {...rest}
      />
    </FormField>
  );
}
