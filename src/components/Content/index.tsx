import { HStack, VStack } from "@chakra-ui/react";
import { Sidebar } from "@components/Sidebar";



export const Content = () => {
  return (
    <HStack
      width={"full"}
      flex={1}
      overflow={"hidden"}
    >
      <Sidebar />


      <VStack
        px={12}
        pt={12}
        width={"full"}
        height={"full"}
        spacing={6}
        overflow={"hidden"}
      >

      </VStack>
    </HStack>
  )
};