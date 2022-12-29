// import { signIn, useSession } from "next-auth/react";
// import { useAccount, useNetwork, useSignMessage } from "wagmi";

// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
// import { EvmAddressish, EvmChainish } from "moralis/common-evm-utils";

// const Login = () => {
//   const { isConnected, address } = useAccount();
//   const { chain } = useNetwork();
//   const { status } = useSession();
//   const { signMessageAsync } = useSignMessage();
//   const { push } = useRouter();
//   const { requestChallengeAsync } = useAuthRequestChallengeEvm();

//   useEffect(() => {
//     const handleAuth = async () => {
//       const output = await requestChallengeAsync({
//         address: address as EvmAddressish,
//         chainId: chain?.id as EvmChainish,
//       });

//       const signature = await signMessageAsync({
//         message: output?.message as string,
//       });

//       // redirect user after success authentication to '/user' page

//       const signInStatus = await signIn("moralis-auth", {
//         message: output?.message as string,
//         signature,
//         redirect: false,
//         callbackUrl: "/",
//       });
//       /**
//        * instead of using signIn(..., redirect: "/user")
//        * we get the url from callback and push it to the router to avoid page refreshing
//        */
//       push(signInStatus?.url as string);
//     };
//     if (status === "unauthenticated" && isConnected) {
//       handleAuth();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [status, isConnected]);

//   return (
//     <motion.div whileHover={{ scale: 1.01 }}>
//       <ConnectButton
//         accountStatus={"avatar"}
//         chainStatus="none"
//         showBalance={false}
//       />
//     </motion.div>
//   );
// };

// // export default Login;

import { Button } from "@mui/joy";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../ui/hooks";
import { toggleLogin } from "../../ui/reducers/uiReducer";
import { signOut, useSession } from "next-auth/react";

const Login = () => {
  const logginToggleState = useAppSelector((state) => state.ui.loginToggle);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  return session?.user ? (
    <Button
      endDecorator={
        <LockOpenOutlinedIcon fontSize="small" sx={{ mr: "0px" }} />
      }
      sx={{ fontWeight: "500" }}
      size="md"
      color="primary"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  ) : (
    <Button
      endDecorator={
        <LockOpenOutlinedIcon fontSize="small" sx={{ mr: "0px" }} />
      }
      sx={{ fontWeight: "500" }}
      size="md"
      color="primary"
      onClick={() => {
        dispatch(toggleLogin(true));
      }}
    >
      Login
    </Button>
  );
};

export default Login;
