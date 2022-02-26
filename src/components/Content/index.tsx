import { HStack, VStack } from "@chakra-ui/react";
import { Sidebar } from "@components/Sidebar";
import { Children } from "react";



export const Content = ({ children }) => {
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
        {children}
      </VStack>
    </HStack>
  )
};