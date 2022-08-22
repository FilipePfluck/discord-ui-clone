import {Message} from '../Message';
import * as S from './styles';

export const MessageList = () => (
	<S.ScrollContainer>
		<S.Container>
			<Message
				message='Bom dia'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='Boa tarde'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
			/>
			<Message
				message='Boa noite'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
			/>
			<Message
				message='Boa tarde @Pfluck'
				name='jooj'
				avatarUrl='https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048'
				isFirstMessage
				isPingingMe
			/>
			<Message
				message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan id turpis pellentesque viverra. Nam ut bibendum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt in lorem eget tristique. Nulla sit amet metus nec quam sagittis eleifend. Phasellus pulvinar vitae orci eget scelerisque. Etiam massa nunc, eleifend ac auctor in, mollis nec nisl. Vivamus porttitor libero nulla, ut tristique nibh faucibus id. Sed facilisis nec arcu at dictum.
          Donec consectetur interdum tempor. Donec et elementum purus, vel mattis magna. Proin in blandit mi. Morbi interdum tristique dictum. Praesent purus odio, malesuada et egestas at, finibus a metus. Cras sodales odio ligula, in hendrerit sapien molestie nec. Fusce eu nisi a libero tincidunt mattis sed et massa. Aliquam erat volutpat. Nunc cursus elementum dui, id vestibulum ex vulputate sit amet. Maecenas ornare turpis id neque mollis pharetra. Fusce quis hendrerit sem. Nunc sit amet quam lorem. Suspendisse vel pellentesque dui, sit amet dictum risus. Integer porttitor faucibus dui id feugiat. Mauris id ligula tristique, molestie est eget, rhoncus magna. Sed dignissim bibendum sapien, vitae feugiat turpis aliquet quis.'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan id turpis pellentesque viverra. Nam ut bibendum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt in lorem eget tristique. Nulla sit amet metus nec quam sagittis eleifend. Phasellus pulvinar vitae orci eget scelerisque. Etiam massa nunc, eleifend ac auctor in, mollis nec nisl. Vivamus porttitor libero nulla, ut tristique nibh faucibus id. Sed facilisis nec arcu at dictum.
          Donec consectetur interdum tempor. Donec et elementum purus, vel mattis magna. Proin in blandit mi. Morbi interdum tristique dictum. Praesent purus odio, malesuada et egestas at, finibus a metus. Cras sodales odio ligula, in hendrerit sapien molestie nec. Fusce eu nisi a libero tincidunt mattis sed et massa. Aliquam erat volutpat. Nunc cursus elementum dui, id vestibulum ex vulputate sit amet. Maecenas ornare turpis id neque mollis pharetra. Fusce quis hendrerit sem. Nunc sit amet quam lorem. Suspendisse vel pellentesque dui, sit amet dictum risus. Integer porttitor faucibus dui id feugiat. Mauris id ligula tristique, molestie est eget, rhoncus magna. Sed dignissim bibendum sapien, vitae feugiat turpis aliquet quis.'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan id turpis pellentesque viverra. Nam ut bibendum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt in lorem eget tristique. Nulla sit amet metus nec quam sagittis eleifend. Phasellus pulvinar vitae orci eget scelerisque. Etiam massa nunc, eleifend ac auctor in, mollis nec nisl. Vivamus porttitor libero nulla, ut tristique nibh faucibus id. Sed facilisis nec arcu at dictum.
          Donec consectetur interdum tempor. Donec et elementum purus, vel mattis magna. Proin in blandit mi. Morbi interdum tristique dictum. Praesent purus odio, malesuada et egestas at, finibus a metus. Cras sodales odio ligula, in hendrerit sapien molestie nec. Fusce eu nisi a libero tincidunt mattis sed et massa. Aliquam erat volutpat. Nunc cursus elementum dui, id vestibulum ex vulputate sit amet. Maecenas ornare turpis id neque mollis pharetra. Fusce quis hendrerit sem. Nunc sit amet quam lorem. Suspendisse vel pellentesque dui, sit amet dictum risus. Integer porttitor faucibus dui id feugiat. Mauris id ligula tristique, molestie est eget, rhoncus magna. Sed dignissim bibendum sapien, vitae feugiat turpis aliquet quis.'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='Eu odeio animes'
				name='Fabritcho'
				avatarUrl='https://cdn.discordapp.com/avatars/824723269474320405/c1c706ba6e7e6ad3ca249ae9cfbed428.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='..p essence of silence'
				name='jooj'
				avatarUrl='https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048'
				isFirstMessage
			/>
			<Message
				message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan id turpis pellentesque viverra. Nam ut bibendum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tincidunt in lorem eget tristique. Nulla sit amet metus nec quam sagittis eleifend. Phasellus pulvinar vitae orci eget scelerisque. Etiam massa nunc, eleifend ac auctor in, mollis nec nisl. Vivamus porttitor libero nulla, ut tristique nibh faucibus id. Sed facilisis nec arcu at dictum.
          Donec consectetur interdum tempor. Donec et elementum purus, vel mattis magna. Proin in blandit mi. Morbi interdum tristique dictum. Praesent purus odio, malesuada et egestas at, finibus a metus. Cras sodales odio ligula, in hendrerit sapien molestie nec. Fusce eu nisi a libero tincidunt mattis sed et massa. Aliquam erat volutpat. Nunc cursus elementum dui, id vestibulum ex vulputate sit amet. Maecenas ornare turpis id neque mollis pharetra. Fusce quis hendrerit sem. Nunc sit amet quam lorem. Suspendisse vel pellentesque dui, sit amet dictum risus. Integer porttitor faucibus dui id feugiat. Mauris id ligula tristique, molestie est eget, rhoncus magna. Sed dignissim bibendum sapien, vitae feugiat turpis aliquet quis.'
				name='Pfluck'
				avatarUrl='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'
				isFirstMessage
			/>
		</S.Container>
	</S.ScrollContainer>
);
