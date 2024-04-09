import supabase from '@/config/supabase';
import { MessageType } from '@/types/Message';

export const fetchChatMessages = async (chatId: number) => {
  const { data } = await supabase
    .from('messages')
    .select()
    .eq('chat_id', chatId);
  return data;
};

export const createMessage = async (message: MessageType) => {
  const { data } = await supabase.from('messages').insert([message]);
  return data;
};

export const updateMessage = async (message: MessageType) => {
  const { data } = await supabase
    .from('messages')
    .update(message)
    .eq('id', message.id);
  return data;
};

export const deleteMessage = async (id: number) => {
  const { data } = await supabase.from('messages').delete().eq('id', id);
  return data;
};
