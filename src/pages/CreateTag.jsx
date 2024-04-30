import { Box, Text, Input, Button } from "@chakra-ui/react";

const CreateTag = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">Create New Tag</Text>
      <Input placeholder="Tag Name" my={3} />
      <Button colorScheme="green">Create Tag</Button>
    </Box>
  );
};

export default CreateTag;