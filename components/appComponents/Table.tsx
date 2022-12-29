import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { Chip, Typography } from "@mui/joy";
import { Stack } from "@mui/system";

export default function Table() {
  return (
    <List
      row
      variant="outlined"
      sx={{
        bgcolor: "background.body",
        borderRadius: "0",
        boxShadow: "sm",
        flexGrow: 0,
        "--List-decorator-size": "50px",
        "--List-item-paddingY": "0.3rem",
        "--List-item-paddingX": "1rem",
        my: 2,
        borderColor: "#495057",
      }}
    >
      <ListItem sx={{ fontSize: "0.75em" }}>
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Chip sx={{ borderRadius: "4px" }} size="sm" variant="outlined">
            ETH
          </Chip>
          <Typography fontWeight={"bold"} level="h6">
            1.09
          </Typography>
        </Stack>
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem sx={{ fontSize: "0.75em" }}>
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Chip sx={{ borderRadius: "4px" }} size="sm" variant="outlined">
            USD
          </Chip>
          <Typography fontWeight={"bold"} level="h6">
            1892
          </Typography>
        </Stack>
      </ListItem>
    </List>
  );
}
