import {
  Box,
  chakra,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"calc(100vh - 120px)"}
      backgroundImage={"url(/img/bg1.jpeg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"left"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Box textAlign="center" w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}>
            <chakra.h1
              textAlign={"left"}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              letterSpacing="tight"
              lineHeight="short"
              fontWeight="extrabold"
              color="white"
            >
              <chakra.span
                display={{ base: "block", xl: "inline" }}
                color="green.300"
              >
                Quincho Don Chelo:{" "}
              </chakra.span>
              <chakra.span display={{ base: "block", xl: "inline" }}>
                Un lugar para descansar y relajar
              </chakra.span>
            </chakra.h1>
          </Box>
          <Stack direction={"row"}>
            <Button
              bg={"green.400"}
              rounded={"md"}
              color={"white"}
              _hover={{ bg: "green.500" }}
            >
              Reservar
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"md"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Contacto
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
