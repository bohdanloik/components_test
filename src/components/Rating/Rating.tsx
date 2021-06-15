import React from 'react';
import { Star } from '../Star/Star';

export type Checked = 0 | 1 | 2 | 3 | 4 | 5 ;

export type RatingPropsType = {
    value: Checked
    setRatingCount: (value: Checked) => void
}
export function RatingSecret(props: RatingPropsType)  {
    console.log('RATING');
    
    return <div>
        <Star checked={props.value > 0} setRatingCount={() => { props.setRatingCount(1)}} />
        <Star checked={props.value > 1} setRatingCount={() => { props.setRatingCount(2)}} />
        <Star checked={props.value > 2} setRatingCount={() => { props.setRatingCount(3)}} />
        <Star checked={props.value > 3} setRatingCount={() => { props.setRatingCount(4)}} />
        <Star checked={props.value > 4} setRatingCount={() => { props.setRatingCount(5)}} />
    </div>
}

export const Rating = React.memo(RatingSecret);

