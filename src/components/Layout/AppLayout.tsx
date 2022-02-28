import { HStack, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import { Content } from "@components/Content"
import { Sidebar } from "@components/Sidebar"

import { useAuth } from '@hooks/auth'


const AppLayout = ({ children }) => {
  const { user } = useAuth({ middleware: 'auth' })

  const formBackground = useColorModeValue("light", "gray.700");

  return (
    <VStack
      height={"100vh"}
      width="full"
      overflow={"hidden"}
      spacing={0}
      bg={formBackground}
    >
      <HStack
        width={"full"}
        flex={1}
        overflow={"hidden"}
      >

        <Sidebar user={user} />
        <Content>{children}</Content>

      </HStack>

    </VStack>
  )
}

export default AppLayout
