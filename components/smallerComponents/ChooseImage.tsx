/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { Alert, Chip, Sheet, TextField } from "@mui/joy";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import useGetPosters from "../../hooks/useGetPosters";
import Loader from "../Loader";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../ui/hooks";
import { setPoster } from "../../ui/reducers/eventReducer";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const ImageCard = () => {
  const [query, setQuery] = React.useState("");
  const { result, error, isLoading } = useGetPosters({ query: query });
  const poster = useAppSelector((state) => state.eventForm.poster);

  const [image, setImage] = React.useState(poster || "");

  const dispatch = useAppDispatch();

  return (
    <Card variant="soft" sx={{ my: 2 }}>
      <Typography fontWeight={"bold"} level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Event Poster
      </Typography>
      <Typography level="body2">
        type relevant keywords for your event to get the best results.
      </Typography>
      <TextField
        placeholder="type in here…"
        sx={{ mt: 1 }}
        startDecorator={<ScreenSearchDesktopOutlinedIcon sx={{ ml: 0 }} />}
        endDecorator={
          <Chip size="sm" variant="soft" color="neutral">
            unsplash API
          </Chip>
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <InsertLinkOutlinedIcon />
      </IconButton>
      <Box
        height="300px"
        sx={{ my: 2, borderRadius: "8px", background: "#fff" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: 0,
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
            py: 2,
          }}
        >
          {error !== "" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Alert variant="outlined">{error}</Alert>
            </Box>
          )}
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </Box>
          ) : result.length === 0 ? (
            query === "" && poster ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Chip sx={{ mb: 2, borderRadius: "4px" }}>selected image</Chip>
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    background: "#d3d3d3",
                    mb: 2,
                    borderRadius: "4px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={poster}
                    height="200"
                    width={"200"}
                    alt="image"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Alert variant="outlined">please enter a keyword.</Alert>
              </Box>
            )
          ) : (
            result.map((el: any) => {
              return (
                <Box
                  key={el.id}
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "#d3d3d3",
                    mb: 2,
                    borderRadius: "4px",
                    position: "relative",
                    opacity: image === el.image ? 0.5 : 1,
                    "&:hover": {
                      opacity: 0.5,
                      cursor: "pointer",
                    },
                    "&:focus": {
                      opacity: 0.5,
                    },
                  }}
                  onClick={() => {
                    setImage(el.image);
                    dispatch(setPoster(image));
                  }}
                >
                  <Image
                    src={el.image}
                    height="100"
                    width={"100"}
                    alt="image"
                    style={{ objectFit: "cover" }}
                  />
                  {image === el.image && (
                    <CheckCircleOutlinedIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: "unset",
                      }}
                      fontSize="large"
                    />
                  )}
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ImageCard;
