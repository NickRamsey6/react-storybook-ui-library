import { Box, Stack } from "@/components/Layout";
import { Text } from "@/components";

export const LoginForm = () => {
  return (
    <Box className='px-8 py-12 border border-x-gray-300 rounded-xl'>
      <Stack>
        <Text as="h2" weight={'bold'} align={'center'} size={'3xl'} className="mb-2">Login</Text>
        <Text as="span" emphasis={'low'} size={'sm'} align={'center'} className="mb-8">Please enter your credentials</Text>
      </Stack>
    </Box>
  );
};

