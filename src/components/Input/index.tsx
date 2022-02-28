import { FormControl, FormLabel, Input as InputChakra, InputProps as InputPropsChakra } from "@chakra-ui/react";


interface InputProps extends InputPropsChakra {
  label: string;
  id: string;
}


const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputChakra id={id} {...rest} />
    </FormControl>
  );
}

export default Input;