import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";

const CreateNote = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">Create New Note</Text>
      <Input placeholder="Title" my={3} />
      <Textarea placeholder="Write your note here..." my={3} />
      <Button colorScheme="blue">Save Note</Button>
    </Box>
  );
};

export default CreateNote;