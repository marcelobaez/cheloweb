import { Container, VStack } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <VStack minH="100vh">
      <Container maxW="8xl" padding={0}>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </VStack>
  );
}
