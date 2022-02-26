import { VStack, List, ListItem } from "@chakra-ui/react"
import { useRouter } from "next/router";

import { NavItem } from "./nav-item";
import { NavItem as NavItemProps } from 'types/nav-item';
import { navItems } from "./nav-data";

export const Sidebar = () => {
  const router = useRouter();

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
      {/* Logo */}

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