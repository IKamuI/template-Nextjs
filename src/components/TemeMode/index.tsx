
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Button, Icon, useColorMode } from '@chakra-ui/react';

const ThemeMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button border="none" onClick={toggleColorMode}>
      <Icon as={colorMode === 'light' ? MoonIcon : SunIcon} />
    </Button>
  )
}

export default ThemeMode