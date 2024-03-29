import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading ? <p className = 'animate__lightSpeedInRight'>Loading</p> : null}
            <div className = 'card-grid'>
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                        ))
                    }            
                </ol>
            </div>
        </>
    )

}
