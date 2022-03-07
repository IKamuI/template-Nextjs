import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react"
import Input from "@components/Input"
import { useAuth } from "@hooks/auth"
import { useState } from "react";



const Cadastro = () => {
  const { register } = useAuth({ middleware: 'guest' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErrors] = useState();
  const [loading, setloading] = useState();



  const handleSubmitForm = async (event) => {
    event.preventDefault()
    register({ setErrors, setloading, name, password, email });
  }

  return (
    <Flex h="100vh" align="center" justify="center">
      <VStack as="form" onSubmit={handleSubmitForm} bg="gray.200" p={16} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <VStack spacing={5}>
          <Input
            label="Nome"
            size="lg"
            placeholder="joaopaulo@gmail.com"
            id="name"
            name="name"
            variant="filled"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            label="Email"
            size="lg"
            placeholder="joaopaulo@gmail.com"
            id="email"
            name="email"
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
            name="password"
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
    </Flex>
  )
}

export default Cadastro