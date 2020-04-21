import React from 'react';

import { GameDone } from './style';

const PlayAgain = props => {
    return(
        <GameDone>
            <button onClick={props.onClick}>{props.content}</button>
        </GameDone>
    );
}

export default PlayAgain;