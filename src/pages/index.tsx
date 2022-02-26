import { VStack } from "@chakra-ui/react"

import { Content } from "@/components/content"

const IndexPage = () => {

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
      <Content />

    </VStack>
  )
}

export default IndexPage
