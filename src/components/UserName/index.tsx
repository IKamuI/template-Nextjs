import { Avatar, Heading, HStack } from "@chakra-ui/react"




const UserName = ({ user }) => {
  return (
    <HStack ml={8} mt={8} spacing={3}>
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
    </HStack>
  )
}

export default UserName