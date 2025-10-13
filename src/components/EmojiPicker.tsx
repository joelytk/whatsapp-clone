import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const EmojiPicker = ({ addEmojiToMessage }: { addEmojiToMessage: (emoji: string) => void }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	return (
		<Box position="relative">
			<IconButton
				type="button"
				color={showEmojiPicker ? 'primary' : 'inherit'}
				sx={{ height: 40 }}
				onClick={() => setShowEmojiPicker(!showEmojiPicker)}
			>
				<InsertEmoticonIcon />
			</IconButton>
			{showEmojiPicker && (
				<Box position="absolute" sx={{ bottom: 60 }}>
					<Picker data={data} onEmojiSelect={(emoji: any) => addEmojiToMessage(emoji.native)} />
				</Box>
			)}
		</Box>
	);
};

export default EmojiPicker;
