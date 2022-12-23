import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect, useState } from "react";
import { Button } from "@mui/joy";
import Face4Outlined from "@mui/icons-material/Face4Outlined";

function Authentication() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: session, status } = useSession();

  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Button
      size="lg"
      sx={{ borderRadius: "4px", fontWeight: "500" }}
      startDecorator={<Face4Outlined sx={{ ml: 0 }} />}
      onClick={() => {
        handleLogin();
      }}
    >
      Signin with Address
    </Button>
  );
}

export default Authentication;
