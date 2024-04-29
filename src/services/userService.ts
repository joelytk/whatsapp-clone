import supabase from '@/config/supabase';

interface BodyType {
  data?: {
    first_name?: string;
    last_name?: string;
  };
  email?: string;
  phone?: string;
}

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};

export const updateUser = async (body: BodyType) => {
  const { data, error } = await supabase.auth.updateUser(body);
  return { data, error };
};
