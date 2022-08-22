
import {MdAddCircle, MdRedeem, MdGif} from 'react-icons/md';
import {TooltipIcon} from '../TooltipIcon';
import * as S from './styles';

export const MessageInput = () => (
	<S.Container>
		<S.InputContainer>
			<MdAddCircle size={24}/>
			<input type='text' placeholder='Conversar em #geral'/>
			{/* <TooltipIcon icon={MdRedeem} tooltipText="Reforce os parças! Dê vantagens super bacanas de bate-papo com o Nitro!"/>
      <S.GifBox>
        <p>GIF</p>
  </S.GifBox> */}
		</S.InputContainer>
	</S.Container>
);
