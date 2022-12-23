import EmojiObjectsTwoTone from "@mui/icons-material/EmojiObjectsTwoTone";
import { Box, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import React from "react";
import { useAppDispatch, useAppSelector } from "../ui/hooks";
import { toggleLogin } from "../ui/reducers/uiReducer";
import LeftComponent from "./authComps/LeftComponent";
import RightComponent from "./authComps/RightComponent";

const Auth = () => {
  const toggleLoginState = useAppSelector((state) => {
    return state.ui.loginToggle;
  });

  const dispatch = useAppDispatch();

  return (
    <Modal open={toggleLoginState}>
      <ModalDialog layout="fullscreen">
        <ModalClose
          onClick={() => {
            dispatch(toggleLogin(false));
          }}
        />
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <Box sx={{ width: "50%", height: "100%", background: "#dee2e6" }}>
            <LeftComponent />
          </Box>
          <Box sx={{ width: "50%", height: "100%" }}>
            <RightComponent />
          </Box>
        </Box>
      </ModalDialog>
    </Modal>
  );
};

export default Auth;
