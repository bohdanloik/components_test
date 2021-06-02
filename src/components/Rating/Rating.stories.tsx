import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Checked, Rating, RatingPropsType } from './Rating';


export default {
  title: 'Rating',
  component: Rating,
  
};

export const EmptyRating = () => <Rating value={0} setRatingCount={r=>r}/>

export const Rating1 = () => <Rating value={1} setRatingCount={r=>r}/>

export const Rating2 = () => <Rating value={2} setRatingCount={r=>r}/>

export const Rating3 = () => <Rating value={3} setRatingCount={r=>r}/>

export const Rating4 = () => <Rating value={4} setRatingCount={r=>r}/>

export const Rating5 = () => <Rating value={5} setRatingCount={r=>r}/>

export const RatingChanging = () => {
    const [rating, setRating]= useState<Checked>(0);
   return  <Rating value={rating} setRatingCount={setRating}/>
}


