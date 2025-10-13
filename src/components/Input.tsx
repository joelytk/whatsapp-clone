import { ReactNode } from 'react';

import { OutlinedInput } from '@mui/material';

const Input = ({
	type = 'text',
	style,
	name,
	startAdornment,
	endAdornment,
	placeholder,
	autoFocus = true,
	multiline,
	maxRows,
	value,
	onChange,
	required
}: {
	type?: string;
	style?: any;
	name?: string;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
	placeholder?: string;
	autoFocus?: boolean;
	multiline?: boolean;
	maxRows?: number;
	value: string;
	onChange: Function;
	required?: boolean;
}) => {
	return (
		<OutlinedInput
			type={type}
			sx={{
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
			endAdornment={endAdornment}
			placeholder={placeholder}
			autoFocus={autoFocus}
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
