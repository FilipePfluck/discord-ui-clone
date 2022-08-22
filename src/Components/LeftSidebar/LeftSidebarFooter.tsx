import {MdHeadphones, MdMic, MdSettings} from 'react-icons/md';
import {useState} from 'react';
import {Avatar} from '../Avatar';

import * as S from './LeftSidebarFooter.styles';

export const Footer = () => {
	const [isMuted, setIsMuted] = useState(false);
	const [isDeaf, setIsDeaf] = useState(false);

	return (
		<S.Container>
			<S.NameAndImageContainer>
				<Avatar
					status='doNotDisturb'
					src='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
					alt='Pfluck'
				/>
				<S.NameAndTag>
					<p>Pfluck</p>
					<span>#3427</span>
				</S.NameAndTag>
			</S.NameAndImageContainer>
			<S.ConfigurationButtons>
				<S.IconButton onClick={() => {
					setIsMuted(state => !state);
				}}>
					<MdMic size={20} color='#DCDDDE'/>
					{(isMuted || isDeaf) && <S.DiagonalLine/>}
				</S.IconButton>
				<S.IconButton onClick={() => {
					setIsDeaf(state => !state);
				}}>
					<MdHeadphones size={20} color='#DCDDDE'/>
					{isDeaf && <S.DiagonalLine/>}
				</S.IconButton>
				<S.IconButton>
					<MdSettings size={20} color='#DCDDDE'/>
				</S.IconButton>
			</S.ConfigurationButtons>
		</S.Container>
	);
};
