import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import { useAppDispatch, useAppSelector } from "../../ui/hooks";
import { setDescription } from "../../ui/reducers/eventReducer";

export default function Description() {
  const description = useAppSelector((state) => state.eventForm.description);
  const dispatch = useAppDispatch();

  const addEmoji = (emoji: string) => () =>
    dispatch(setDescription(`${description}${emoji} `));
  return (
    <Textarea
      placeholder="type in here..."
      required
      size="sm"
      value={description}
      variant="soft"
      onChange={(event) => dispatch(setDescription(event.target.value))}
      minRows={5}
      maxRows={5}
      startDecorator={
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("👍")}
          >
            👍
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("🏖")}
          >
            🏖
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("😍")}
          >
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: "auto" }}>
          {description.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
