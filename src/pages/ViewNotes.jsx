import { Box, Text, Select, VStack } from "@chakra-ui/react";

const ViewNotes = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">View Notes</Text>
        <Select placeholder="Filter by tag">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="misc">Miscellaneous</option>
        </Select>
      </Box>
      <Box>
        {/* Placeholder for notes list */}
        <Text>No notes available.</Text>
      </Box>
    </VStack>
  );
};

export default ViewNotes;