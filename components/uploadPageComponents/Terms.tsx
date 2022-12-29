import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";

export default function Terms() {
  return (
    <FormControl sx={{ mb: 2 }}>
      <Checkbox required variant="solid" label="Terms and Conditions" />
      <FormHelperText>
        This web app is solely made for exploring the application of NFT in the
        entertainment industry primarily ticket selling for events.
      </FormHelperText>
    </FormControl>
  );
}
