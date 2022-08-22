import React from 'react';
import styled from 'styled-components';
import { IPlayer } from '../game/GameInterfaces';

const PlayerInfoDivStyleC = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PlayerInfoStyleC = styled.div`
	width: 30%;
`;

const PlayerPhotoDivStyleC = styled.div`
	width: 70px;
	height: 70px;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin: auto;
`;

const PlayerPhotoStyleC = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const PlayerDataDivStyleC = styled.div`
	width: 200px;
	margin: auto;
`;

const PlayerDataPStyleC = styled.p`
	width: 100%;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	margin: 5px;
`;

interface IPlayerInfo {
	leftPlayer: IPlayer;
	rightPlayer: IPlayer;
}

function PlayerInfo({ leftPlayer, rightPlayer }: IPlayerInfo) {
	return (
		<PlayerInfoDivStyleC>
			<PlayerInfoStyleC>
				<PlayerPhotoDivStyleC>
					<PlayerPhotoStyleC src={leftPlayer.user.photo} alt={leftPlayer.user.nickname} />
				</PlayerPhotoDivStyleC>
				<PlayerDataDivStyleC>
					<PlayerDataPStyleC>{leftPlayer.user.nickname}</PlayerDataPStyleC>
					<PlayerDataPStyleC>
						{leftPlayer.user.wins}W {leftPlayer.user.losses}L {leftPlayer.user.ratio}pts
					</PlayerDataPStyleC>
				</PlayerDataDivStyleC>
			</PlayerInfoStyleC>
			<PlayerInfoStyleC>
				<PlayerPhotoDivStyleC>
					<PlayerPhotoStyleC src={rightPlayer.user.photo} alt={rightPlayer.user.nickname} />
				</PlayerPhotoDivStyleC>
				<PlayerDataDivStyleC>
					<PlayerDataPStyleC>{rightPlayer.user.nickname}</PlayerDataPStyleC>
					<PlayerDataPStyleC>
						{rightPlayer.user.wins}W {rightPlayer.user.losses}L {rightPlayer.user.ratio}pts
					</PlayerDataPStyleC>
				</PlayerDataDivStyleC>
			</PlayerInfoStyleC>
		</PlayerInfoDivStyleC>
	);
}

export default PlayerInfo;
