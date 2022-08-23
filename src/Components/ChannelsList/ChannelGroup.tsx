import {MdAdd} from 'react-icons/md';
import {useState} from 'react';
import * as S from './ChannelGroup.styles';

import {Channel, ChannelProps} from './Channel';
import { TooltipIcon } from '../TooltipIcon';

export interface ChannelGroupProps {
	value: string;
	name: string;
	channels: Array<{
		type: 'voice' | 'text';
		name: string;
		id: number;
	}>;
	selectedChannel: number | null;
	setSelectedChannel: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ChannelGroup = ({value, name, channels, selectedChannel, setSelectedChannel}: ChannelGroupProps) => (
	<S.Item value={value}>
		<S.Header>
			<S.Trigger>
				<div>
					<S.AccordionChevron/>
					{name}
				</div>

				<S.AddButton>
					<TooltipIcon icon={MdAdd} tooltipText="Criar canal" size={20}/>
				</S.AddButton>
			</S.Trigger>
		</S.Header>
		<S.Content>
			{channels.map(channel => (
				<Channel
					key={channel.id}
					type={channel.type}
					name={channel.name}
					isSelected={selectedChannel === channel.id}
					onClick={() => {
						setSelectedChannel(channel.id);
					}}
				/>
			))}
		</S.Content>
	</S.Item>
);
