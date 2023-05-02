import { Box } from "@mui/system";

type FormFieldProps = {
  children: React.ReactNode;
};

export function FormField(props: FormFieldProps) {
  return <Box className="mt-2 mb-2">{props.children}</Box>;
}
