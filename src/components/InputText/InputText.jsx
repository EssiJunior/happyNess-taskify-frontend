import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import './input_text.scss'

const InputText = ({label, helper, icon, identifier, type}) => {
  return (
    <FormControl className='input'>
      <FormLabel>{label}</FormLabel>
      <p class="input-container">
        <input type={type} name="text" id={identifier} class="input-field" autocomplete="name" />
      </p>
      {icon}
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  )
}

export default InputText
