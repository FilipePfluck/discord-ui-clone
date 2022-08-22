import {MdExpandMore} from 'react-icons/md';
import * as Tooltip from '@radix-ui/react-tooltip';

import {GlobalStyles, styled} from '../../stitches.config';

import {ChannelsList} from '../Components/ChannelsList';
import {LeftSidebar} from '../Components/LeftSidebar';
import {ServersListSidebar} from '../Components/ServersListSidebar/indexs';
import {ServerHeader} from '../Components/Header/ServerHeader';
import {ServerUsersList} from '../Components/ServerUsersList';
import {MessageInput} from '../Components/MessageInput';
import {MessageList} from '../Components/MessageList';

export default function Home() {
	GlobalStyles();

	const Container = styled('main', {
		height: '100vh',
		display: 'flex',
	});

	const Content = styled('div', {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	});

	const BelowHeaderContent = styled('div', {
		display: 'flex',
		flex: 1,
		overflow: 'hidden',
	});

	const Chat = styled('div', {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	});

	return (
		<Tooltip.Provider>
			<Container>
				<ServersListSidebar/>
				<Content>
					<ServerHeader/>
					<BelowHeaderContent>
						<LeftSidebar>
							<ChannelsList/>
						</LeftSidebar>
						<Chat>
							<MessageList/>
							<MessageInput/>
						</Chat>
						<ServerUsersList/>
					</BelowHeaderContent>
				</Content>
			</Container>
		</Tooltip.Provider>

	);
}
