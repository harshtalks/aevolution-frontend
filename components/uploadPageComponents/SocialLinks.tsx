import { Box, Card, Chip, Stack, TextField, Typography } from "@mui/joy";
import React, { useState } from "react";

const SocialLinks = () => {
  const [socialLinksCount, setSocialLinksCount] = useState([] as number[]);

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        borderColor: "neutral.outlinedHoverBorder",
        background: "inherit",
        borderRadius: "4px",
        borderWidth: "2px",
      }}
    >
      <Typography gutterBottom level="body2" fontWeight={"bold"}>
        social links
      </Typography>
      {socialLinksCount.map((el, i) => {
        return (
          <Stack key={i} direction={"row"} spacing={2}>
            <TextField
              label="Platform Name"
              placeholder="type in here..."
              variant="soft"
              required
              type="phone"
              size="sm"
              id="event address"
              sx={{ mb: 2, borderRadius: "4px" }}
              helperText="name of the social media app"
            />
            <TextField
              label="social media link"
              placeholder="type in here..."
              variant="soft"
              required
              type="phone"
              size="sm"
              id="event address"
              sx={{ mb: 2, borderRadius: "4px" }}
            />
          </Stack>
        );
      })}
      <Box>
        <Chip
          onClick={() => {
            setSocialLinksCount((count) => [...count, 0]);
          }}
          sx={{ borderRadius: "4px", width: "fit-content", mr: 1 }}
        >
          + add app
        </Chip>
        {socialLinksCount.length > 1 && (
          <Chip
            onClick={() => {
              setSocialLinksCount((count) => {
                return count.slice(0, count.length - 1);
              });
            }}
            sx={{ borderRadius: "4px", width: "fit-content" }}
          >
            - remove app
          </Chip>
        )}
      </Box>
    </Card>
  );
};

export default SocialLinks;
