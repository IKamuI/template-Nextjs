import { VStack, List, ListItem, Avatar, HStack, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router";

import { NavItem } from "./nav-item";
import { NavItem as NavItemProps } from 'types/nav-item';
import { navItems } from "./nav-data";
import { useAuth } from "@hooks/auth";

export const Sidebar = () => {
  const router = useRouter();
  const { user } = useAuth({ middleware: 'auth' })

  function isActive(item: NavItemProps) {
    if (item.type === 'link') {
      if (router.pathname === item.href) return true
    }
  }

  return (
    <VStack
      alignItems="flex-start"
      width="full"
      height="full"
      maxW={{ base: 56, '2xl': 72 }}
      borderRightColor="gray.900"
      borderRightWidth={2}
      flexShrink={0}
    >
      <HStack ml={8} mt={8} spacing={3}>
        <Avatar name={user?.name} />
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

      <List
        w="full"
        overflowY="auto"
      >
        {navItems.map((item, index) => (

          <ListItem key={item.label}>
            <NavItem item={item} isActive={isActive(item)} />
          </ListItem>
        ))

        }
      </List>
    </VStack >
  )
}