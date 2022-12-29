/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export default function DemoTicket() {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        gap: 2,
        borderColor: "neutral.outlinedHoverBorder",
        background: "inherit",
        mt: 4,
        borderWidth: 2,
        borderRadius: "4px",
        width: "80%",
        overflow: "hidden",
      }}
    >
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Fill all the necessary information to proceed.
        </Typography>
        <Typography
          gutterBottom
          fontSize="sm"
          aria-describedby="card-description"
          mb={1}
        >
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: "text.tertiary" }}
          >
            We are collecting necessary information to create metadata and
            generate unique tokenURI as per the ETH721 standards. For more
            information, please link on the link below.
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          onClick={() => {}}
          sx={{
            borderRadius: "4px",
            transition: "all .25s linear",
            "&:hover": {
              background: "#353535",
              color: "#fff",
            },
          }}
        >
          NFT METADATA STANDARDS
        </Chip>
      </div>
    </Card>
  );
}
