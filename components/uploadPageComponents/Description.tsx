import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

export default function Description() {
  const [text, setText] = React.useState("");
  const addEmoji = (emoji: string) => () => setText(`${text}${emoji} `);
  return (
    <Textarea
      placeholder="type in here..."
      required
      size="sm"
      value={text}
      variant="soft"
      onChange={(event) => setText(event.target.value)}
      minRows={3}
      maxRows={3}
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
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
