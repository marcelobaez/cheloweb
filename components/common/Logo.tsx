import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import logoDark from "/public/logo-dark.png";
import logoLight from "/public/logo-light.png";

export default function Logo(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box maxW={"120px"}>
      <Image
        src={colorMode === "light" ? logoLight : logoDark}
        alt="Site logo"
      />
    </Box>
  );
}
