import { createContext, ReactNode, SyntheticEvent, useCallback, useState } from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarContextValue {
	showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

export const SnackbarContext = createContext<SnackbarContextValue | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [severity, setSeverity] = useState<SnackbarSeverity>('info');

	const showSnackbar = useCallback((msg: string, sev: SnackbarSeverity = 'info') => {
		setMessage(msg);
		setSeverity(sev);
		setOpen(true);
	}, []);

	const handleClose = useCallback((event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	}, []);

	return (
		<SnackbarContext value={{ showSnackbar }}>
			{children}
			<Snackbar
				open={open}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert variant="filled" severity={severity} sx={{ width: '100%' }} onClose={handleClose}>
					{message}
				</Alert>
			</Snackbar>
		</SnackbarContext>
	);
};
