import { Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { useAuth } from "@hooks/auth"
import { useRouter } from "next/router"
import { useState } from "react"


const Login = () => {
  const router = useRouter()

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const handleSubmitForm = async event => {
    event.preventDefault()

    login({ email, password, setErrors, setStatus })
  }
  return (
    <Flex h="100vh" align="center" justify="center">
      <VStack as="form" onSubmit={handleSubmitForm} bg="gray.300" p={16} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel htmlFor="email"> Email</FormLabel>
            <Input size="lg" placeholder="joaopaulo@gmail.com" id="email" variant="filled" mb={3} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input size="lg" placeholder="joaopaulo@gmail.com" id="password" variant="filled" mb={3} type="password" onChange={(event) => setPassword(event.target.value)} />
          </FormControl>
        </VStack>
        <HStack w="full" spacing={5} justify="flex-end">
          <Button type="submit" colorScheme="teal" variant="solid"> Log In</Button>
        </HStack>
      </VStack>
    </Flex >
  )
}

export default Login