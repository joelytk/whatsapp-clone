import { MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { signInWithOtp, verifyOtp } from '@/services/authService';

const Login = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState('');
	const [showOtpField, setShowOtpField] = useState(false);
	const [token, setToken] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();

		if (!showOtpField) {
			try {
				const { data, error } = await signInWithOtp(phone);

				if (error) {
					throw error;
				} else {
					console.log(data);
					setShowOtpField(true);
				}
			} catch (error) {
				console.error({ error });
			}
		} else {
			try {
				const { session, error } = await verifyOtp(phone, token);

				if (error) {
					throw error;
				} else {
					console.log(session);
					navigate('chats');
				}
			} catch (error) {
				console.error({ error });
			}
		}
	};

	return (
		<Stack justifyContent="center" alignItems="center" height="100vh">
			<Stack justifyContent="center" alignItems="center">
				<WhatsAppIcon color="primary" sx={{ fontSize: 120, mb: 3 }} />
				<Typography component="h1" variant="h5" fontWeight={500} mb={3}>
					Welcome to WhatsApp
				</Typography>
				<Stack component="form" alignItems="center" onSubmit={handleSubmit}>
					{showOtpField ? (
						<>
							<Typography mb={2}>Enter SMS code</Typography>
							<Input type="password" name="token" style={{ mb: 6 }} value={token} onChange={setToken} required />
						</>
					) : (
						<>
							<Typography mb={1}>Enter phone number</Typography>
							<MuiTelInput
								defaultCountry="MY"
								value={phone}
								onChange={setPhone}
								sx={{
									mb: 6,
									'& .MuiInputBase-root': {
										borderRadius: 8
									}
								}}
							/>
						</>
					)}
					<Button type="submit" color="primary" variant="contained" sx={{ borderRadius: 6, width: 200 }}>
						{showOtpField ? 'Done' : 'Send'}
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Login;
