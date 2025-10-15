import { Session, User } from '@supabase/supabase-js';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { useSnackbar } from '@/hooks';
import supabase from '@/lib/supabaseClient';

interface AuthContextValue {
	user: User | null;
	session: Session | null;
	loading: boolean;
	signInWithPhone: (phone: string) => Promise<void>;
	verifyOtp: (phone: string, token: string) => Promise<void>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState(true);
	const { showSnackbar } = useSnackbar();

	useEffect(() => {
		// Load initial session
		const loadSession = async () => {
			const { data } = await supabase.auth.getSession();
			setSession(data.session);
			setUser(data.session?.user ?? null);
			setLoading(false);
		};

		loadSession();

		// Listen for auth state changes
		const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user ?? null);
		});

		return () => {
			listener.subscription.unsubscribe();
		};
	}, []);

	const signInWithPhone = async (phone: string) => {
		const { error } = await supabase.auth.signInWithOtp({ phone });

		if (error) {
			showSnackbar(error.message, 'error');
		} else {
			showSnackbar('OTP sent to your phone', 'info');
		}
	};

	const verifyOtp = async (phone: string, token: string) => {
		const { error } = await supabase.auth.verifyOtp({
			phone,
			token,
			type: 'sms'
		});

		if (error) {
			showSnackbar(error.message, 'error');
		} else {
			showSnackbar('Login successful', 'success');
		}
	};

	const signOut = async () => {
		await supabase.auth.signOut();
		showSnackbar('Signed out', 'info');
	};

	return (
		<AuthContext
			value={{
				user,
				session,
				loading,
				signInWithPhone,
				verifyOtp,
				signOut
			}}
		>
			{children}
		</AuthContext>
	);
};
