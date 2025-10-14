import { useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const EmojiPicker = ({ addEmojiToMessage }: { addEmojiToMessage: (emoji: string) => void }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

	return (
		<Box position="relative">
			<Tooltip title="Emojis, GIFs, Stickers">
				<IconButton type="button" sx={{ width: 40, height: 40 }} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
					<InsertEmoticonIcon />
				</IconButton>
			</Tooltip>
			{showEmojiPicker && (
				<Box position="absolute" bottom={60}>
					<Picker data={data} onEmojiSelect={(emoji: any) => addEmojiToMessage(emoji.native)} />
				</Box>
			)}
		</Box>
	);
};

export default EmojiPicker;
