import supabase from '@/config/supabase';

export const fetchUserById = async (id: number) => {
  const { data } = await supabase.from('users').select().eq('id', id).single();
  return data;
};
