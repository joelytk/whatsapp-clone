import supabase from '@/config/supabase';
import { ChatType } from '@/types/Chat';

export const fetchChats = async () => {
  const { data } = await supabase.from('chats').select();
  return data;
};

export const fetchChatById = async (id: number) => {
  const { data } = await supabase.from('chats').select().eq('id', id).single();
  return data;
};

export const createChat = async (chat: ChatType) => {
  const { data } = await supabase.from('chats').insert([chat]);
  return data;
};

export const updateChat = async (chat: ChatType) => {
  const { data } = await supabase.from('chats').update(chat).eq('id', chat.id);
  return data;
};

export const deleteChat = async (id: number) => {
  const { data } = await supabase.from('chats').delete().eq('id', id);
  return data;
};
