import { VStack } from "@chakra-ui/react"
import { Content } from "@components/Content"

import { useAuth } from '@hooks/auth'




const AppLayout = ({ children }) => {

  // const { toggleColorMode } = useColorMode()
  // const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack
      height={"100vh"}
      bg="black"
      width="full"
      overflow={"hidden"}
      spacing={0}
    >
      <Content>
        {children}
      </Content>

    </VStack>
  )
}

export default AppLayout
