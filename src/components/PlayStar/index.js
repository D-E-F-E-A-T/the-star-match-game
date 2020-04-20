import React from 'react';

import { PlayStar } from './styles';

const StarDisplay = props => (
    {utils.range(1, stars).map(starId => 
        <PlayStar key={starId} starId={starId} />
    )}
)

export default StarDisplay;