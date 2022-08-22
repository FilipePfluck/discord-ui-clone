import * as S from './styles';

interface MessageProps {
	message: string;
	avatarUrl?: string;
	name: string;
	isFirstMessage?: boolean;
	isPingingMe?: boolean;
}

export const Message = ({message, avatarUrl, isFirstMessage, name, isPingingMe = false}: MessageProps) => (
	<S.Container isPingingMe={isPingingMe} isFirstMessage={isFirstMessage}>
		{isFirstMessage && <S.StyledAvatar size={40} src={avatarUrl} alt={name} showStatus={false}/>}
		<div>
			{isFirstMessage && (
				<S.NameAndTimeContainer>
					<strong>{name}</strong>
					<p>Hoje às 14:40</p>
				</S.NameAndTimeContainer>
			)}
			<S.Message>{message}</S.Message>
		</div>

	</S.Container>
);
