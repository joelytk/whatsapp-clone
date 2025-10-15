import { FormEvent, useState } from 'react';

import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MuiTelInput } from 'mui-tel-input';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useAuth } from '@/hooks/useAuth';

const Login = () => {
	const [phone, setPhone] = useState<string>('');
	const [otp, setOtp] = useState<string>('');
	const [step, setStep] = useState<'phone' | 'otp'>('phone');
	const { signInWithPhone, verifyOtp } = useAuth();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (step === 'phone') {
			await signInWithPhone(phone);
			setStep('otp');
		} else {
			await verifyOtp(phone, otp);
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
					{step === 'phone' ? (
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
					) : (
						<>
							<Typography mb={1}>Enter SMS code</Typography>
							<OutlinedInput
								type="password"
								name="token"
								sx={{ mb: 6 }}
								value={otp}
								onChange={e => setOtp(e.target.value)}
								required
							/>
						</>
					)}
					<Button type="submit" color="primary" variant="contained" sx={{ borderRadius: 6, width: 200 }}>
						{step === 'phone' ? 'Send' : 'Verify'} OTP
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Login;
