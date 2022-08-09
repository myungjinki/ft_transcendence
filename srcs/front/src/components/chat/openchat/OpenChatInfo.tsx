import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { IChannel } from '../../../modules/Interfaces/chatInterface';
import { channelInfoData, chatContent } from '../../../modules/atoms';

const OpenChatStyleC = styled.li`
	display: flex;
	align-items: center;
	height: 85px;
	border-bottom: 1px solid rgba(255, 255, 255, 1);
	overflow: hidden;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	&:last-of-type {
		border: none;
	}
`;

const OpenChatDivStyleC = styled.div`
	max-width: 70%;
	margin: 5px;
	p {
		margin: 3px 0;
	}
`;

interface IOpenChatInfoProps {
	channelInfo: IChannel;
}

function OpenChatInfo({ channelInfo }: IOpenChatInfoProps) {
	const setChannelInfo = useSetRecoilState(channelInfoData);
	const setContent = useSetRecoilState(chatContent);
	const onClick = () => {
		setChannelInfo(channelInfo);
		setContent('OpenChatRoom');
	};
	return (
		<OpenChatStyleC onClick={onClick}>
			<OpenChatDivStyleC>
				<p>{channelInfo.name}</p>
				<p>{channelInfo.privacy}</p>
				<p>{channelInfo.users.length}</p>
			</OpenChatDivStyleC>
		</OpenChatStyleC>
	);
}

export default OpenChatInfo;