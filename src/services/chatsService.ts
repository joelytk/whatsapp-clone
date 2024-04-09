import supabase from '@/config/supabase';

export const fetchChats = async () => {
  const { data } = await supabase.from('chats').select();
  return data;
};
