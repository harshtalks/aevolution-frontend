import { Box, Button, Typography } from "@mui/joy";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import { signOut, useSession } from "next-auth/react";

import Login from "./smallerComponents/Login";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";

const Header = () => {
  const session = useSession();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 7,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography fontWeight={"bold"} level="h5">
          eavolution.
        </Typography>
        <Box
          sx={{
            height: "50px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            width: "400px",
            opacity: 0.3,
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            p: "0 10px",
            "&:hover": {
              opacity: 0.7,
            },
            transition: ".25s linear opacity",
            cursor: "pointer",
          }}
        >
          <EmojiObjectsTwoToneIcon />
          <Typography level="body1" fontWeight={"300"}>
            What Problem are we trying to solve?
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Button
          variant="plain"
          sx={{ fontWeight: "500" }}
          endDecorator={<GitHubIcon fontSize="small" sx={{ mr: "0px" }} />}
        >
          github
        </Button>
        <Button
          variant="plain"
          sx={{ fontWeight: "500" }}
          endDecorator={<LinkedInIcon fontSize="small" sx={{ mr: "0px" }} />}
        >
          linkedin
        </Button>
        <Login />
        {session.data?.user ? (
          <Button
            variant="outlined"
            sx={{ fontWeight: "500" }}
            size="md"
            color="primary"
            endDecorator={
              <CloudCircleIcon fontSize="small" sx={{ mr: "0px" }} />
            }
          >
            create an event
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{ fontWeight: "500" }}
            size="md"
            color="primary"
            endDecorator={<GitHubIcon fontSize="small" sx={{ mr: "0px" }} />}
          >
            backend
          </Button>
        )}
        <Box
          sx={{
            "&:hover": {
              transform: "0",
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Header;
