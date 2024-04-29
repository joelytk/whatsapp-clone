import { FC } from 'react';

import FilledInput from '@mui/material/FilledInput';

interface InputProps {
  type?: string;
  style?: any;
  name: string;
  startAdornment?: FC;
  placeholder?: string;
  autoFocus?: boolean;
  multiline?: boolean;
  maxRows?: number;
  value: string;
  onChange: Function;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  type = 'text',
  style,
  name,
  startAdornment,
  placeholder,
  autoFocus = true,
  multiline,
  maxRows,
  value,
  onChange,
  required
}) => {
  return (
    <FilledInput
      type={type}
      sx={{
        // p: 0,
        flex: 1,
        borderRadius: 2,
        '& .MuiFilledInput-input': {
          px: 1.5,
          py: 1
        },
        ...style
      }}
      name={name}
      startAdornment={startAdornment}
      placeholder={placeholder}
      autoFocus={autoFocus}
      disableUnderline
      fullWidth
      multiline={multiline}
      maxRows={maxRows}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
    />
  );
};

export default Input;
