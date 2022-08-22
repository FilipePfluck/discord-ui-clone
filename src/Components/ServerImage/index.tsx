import {FaDiscord} from 'react-icons/fa';
import * as S from './styles';

interface ServerImageProps {
	src: string;
	alt: string;
	isMain?: boolean;
}

export const ServerImage = ({src, alt, isMain}: ServerImageProps) => (
	<S.Container type={isMain ? 'main' : 'default'}>
		{isMain ? (
			<FaDiscord color='#FFF' size={28}/>
		) : (
			<img src={src} alt={alt} />
		)}
	</S.Container>
);
