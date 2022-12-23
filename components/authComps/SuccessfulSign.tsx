import { Button, Card, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import { OpenInNew } from "@mui/icons-material";
import { useRouter } from "next/router";
const SuccessfulSign = () => {
  const { data: session } = useSession();
  const [time, setTime] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (time === 0) {
      router.reload();
    }

    // exit early when we reach 0
    if (!time) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [time]);
  return (
    <Card variant="soft" sx={{ width: 400, m: "1 auto" }}>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box>
          <CheckCircleTwoToneIcon fontSize="large" />
        </Box>
      </Box>
      <Box sx={{ my: 1 }}>
        <Typography fontWeight={"bold"} level="h5">
          Signed In Successfully
        </Typography>
        <Typography level="body2" width={300}>
          you will be redirected to the authorized page in {time} seconds.
        </Typography>
      </Box>
      <Box></Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "1em", my: 1 }}>
        <Button
          loading={time === 0}
          variant="outlined"
          fullWidth
          sx={{ borderRadius: "4px", fontWeight: "500" }}
        >
          Take me
        </Button>
        <Button
          endDecorator={<FaceRoundedIcon sx={{ mr: 0 }} />}
          fullWidth
          onClick={() => {
            signOut();
          }}
          sx={{ fontWeight: "500", borderRadius: "4px" }}
        >
          Logout
        </Button>
      </Box>
      <Button
        startDecorator={<OpenInNew fontSize="small" sx={{ ml: 0 }} />}
        sx={{ borderRadius: "0", mb: 1 }}
        variant="outlined"
        fullWidth
      >
        learn how the web3 authentication works
      </Button>
    </Card>
  );
};

export default SuccessfulSign;
