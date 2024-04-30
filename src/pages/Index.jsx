import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Welcome to the Notes App</Heading>
      <Text fontSize="xl" mt={4}>Your simple and effective solution to note-taking.</Text>
      <Button colorScheme="blue" mt={8} as={Link} to="/view-notes">View Notes</Button>
    </Box>
  );
};

export default Index;