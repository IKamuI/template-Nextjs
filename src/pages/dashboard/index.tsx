import AppLayout from '@components/Layout/AppLayout'
import { useAuth } from '@hooks/auth'



const DashBoardPage = () => {

  // const { toggleColorMode } = useColorMode()
  // const formBackground = useColorModeValue("gray.100", "gray.700");
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <AppLayout>
      <div>DashBoard</div>
      <div>{user?.name}</div>
    </AppLayout>
  )
}

export default DashBoardPage
