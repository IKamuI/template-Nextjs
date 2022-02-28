import { Avatar, Heading, HStack } from "@chakra-ui/react"
import ThemeMode from "@components/TemeMode"


const UserName = ({ user }) => {


  return (
    <HStack pl={8} mt={8} spacing={3} w="100%">
      <Avatar name={user?.name} src={user?.photo} />
      <Heading
        color="gray.light"
        fontWeight="normal"
        textTransform="uppercase"
        letterSpacing={1}
        fontSize="sm"
        ml={8}
        mt={{ base: 6, '2xl': 8 }}
        mb={2}
      >
        {user?.name}
      </Heading>

      <HStack flex={1} justify="flex-end" p={4} >
        <ThemeMode />
      </HStack>
    </HStack >
  )
}

export default UserName