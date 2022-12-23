import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Text = () => {
  // hooks
  const wrapper = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const textBoxes = gsap.utils.selector(wrapper.current)(".text");
      const textBox = textBoxes[0];
      const boxWidth = textBox.offsetWidth;
      const numBoxes = textBoxes.length;

      const totalWidth = numBoxes * boxWidth;

      const dirFromRight = "-=" + (totalWidth - 200);

      gsap.to(wrapper.current, {
        duration: 25,
        ease: "none",
        x: dirFromRight,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth - 200)), //force x value to be between 0 and 500 using modulus
        },
        repeat: -1,
      });
    }, wrapper);

    return () => context.revert();
  });

  return (
    <Box sx={{ width: "200%", mb: 2 }} ref={wrapper}>
      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>

      <Typography
        className="text"
        fontWeight={"900"}
        level="h2"
        sx={{ display: "inline", ml: "1em" }}
      >
        NFT
      </Typography>
      <Typography
        className="text"
        fontWeight={"500"}
        level="h2"
        sx={{ display: "inline", ml: "1em", fontFamily: "League Spartan" }}
      >
        TICKETS
      </Typography>
    </Box>
  );
};

export default Text;
