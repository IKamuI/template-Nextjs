import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react"
import Input from "@components/Input"
import { useAuth } from "@hooks/auth"
import { useState } from "react"


const Login = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus, setLoading })
  }
  return (
    <Flex h="100vh" align="center" justify="center">
      <VStack as="form" onSubmit={handleSubmitForm} bg="gray.700" p={16} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <VStack spacing={5}>
          <Input
            label="Email"
            size="lg"
            placeholder="joaopaulo@gmail.com"
            id="email"
            variant="filled"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            label="Password"
            size="lg"
            placeholder="******"
            id="password"
            variant="filled"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </VStack>
        <HStack w="full" spacing={5} justify="flex-end">
          <Button isLoading={loading} type="submit" colorScheme="teal" variant="solid"> Log In</Button>
        </HStack>
      </VStack>
    </Flex >
  )
}

export default Login