import supabase from '@/config/supabase';

export const signInWithOtp = async (phone: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({ phone });
  return { data, error };
};

export const verifyOtp = async (phone: string, token: string) => {
  const {
    data: { session },
    error
  } = await supabase.auth.verifyOtp({
    phone,
    token,
    type: 'sms'
  });

  return { session, error };
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
