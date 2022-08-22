import {MdSearch} from 'react-icons/md';
import * as S from './styles';

export const ChatSearchbar = () => (
	<S.Container htmlFor='chat-search-input'>
		<input type='text' id='chat-search-input' placeholder='Buscar'/>
		<MdSearch size={24}/>
	</S.Container>
);
