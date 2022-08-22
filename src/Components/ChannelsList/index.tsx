import {useState} from 'react';
import {ChannelGroup} from './ChannelGroup';
import * as S from './styles';

export const ChannelsList = () => {
	const [selectedChannel, setSelectedChannel] = useState<number | undefined>(null);

	return (
		<S.Container type='multiple'>
			<ChannelGroup
				name='CANAIS DE TEXTO'
				value='canais-de-texto'
				channels={[{
					id: 1,
					name: 'geral',
					type: 'text',
				}, {
					id: 2,
					name: 'coisas-bizarras-und-sus',
					type: 'text',
				}, {
					id: 3,
					name: 'coisas-fofas',
					type: 'text',
				}, {
					id: 4,
					name: 'poesias-ou-textos-comoventes',
					type: 'text',
				}, {
					id: 5,
					name: 'nihongo-desu-ke',
					type: 'text',
				}]}
				selectedChannel={selectedChannel}
				setSelectedChannel={setSelectedChannel}
			/>
			<ChannelGroup
				name='CANAIS DE VOZ'
				value='canais-de-voz'
				channels={[{
					id: 6,
					name: 'Geral',
					type: 'voice',
				}, {
					id: 7,
					name: 'Fuzuê',
					type: 'voice',
				}, {
					id: 8,
					name: 'real gamers',
					type: 'voice',
				}, {
					id: 9,
					name: 'otakitos',
					type: 'voice',
				}]}
				selectedChannel={selectedChannel}
				setSelectedChannel={setSelectedChannel}
			/>
		</S.Container>
	);
};
