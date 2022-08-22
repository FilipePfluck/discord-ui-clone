import {useState} from 'react';
import {MdTag, MdVolumeUp, MdPersonAdd, MdSettings} from 'react-icons/md';
import {TooltipIcon} from '../TooltipIcon';

import * as S from './Channel.styles';

export interface ChannelProps {
	type: 'voice' | 'text';
	name: string;
	isSelected: boolean;
	onClick: (a: any) => any;
}

export const Channel = ({type, name, isSelected, onClick}: ChannelProps) => (
	<S.Container
		isSelected={isSelected}
		onClick={type === 'text' ? onClick : () => {}}
	>
		<S.LeftContent>
			{type === 'text'
				? <MdTag size={20}/>
				: <MdVolumeUp size={20}/>
			}
			<p>{name}</p>
		</S.LeftContent>
		<S.RightContent>
			<TooltipIcon icon={MdPersonAdd} label='Criar convite' tooltipText='Criar convite' />
			<MdSettings/>
		</S.RightContent>
	</S.Container>
);
