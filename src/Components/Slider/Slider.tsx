import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import * as S from './Slider.style'

const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

const CardSlider: React.FC = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [currCards, setCurrCards] = useState(cards.slice(0, 5));

    const handleNext = () => {
        if (currIndex === cards.length - 1) {
            setCurrIndex(0);
        } else {
            setCurrIndex(currIndex + 1);
        }
        currArray()
    }

    const handlePrev = () => {
        if (currIndex === 0) {
            setCurrIndex(cards.length - 1);
        } else {
            setCurrIndex(currIndex - 1);
        }
        currArray()
    }

    const currArray = () => {

        setCurrCards(prev => {
            let endIndex = currIndex + 5;
            let y = JSON.parse(JSON.stringify(cards));
            if (endIndex > y.length) {
                endIndex = endIndex - y.length;
                return y.slice(currIndex).concat(y.slice(0, endIndex));
            } else {
                return y.slice(currIndex, endIndex);
            }
        });
    }

    return (
        <>
            <S.SliderTitle>תחומים פופולריים</S.SliderTitle>
            <S.SliderContainer container spacing={0}>
                <S.SliderArrow onClick={handlePrev} >
                    <ArrowForward />
                </S.SliderArrow>
                {
                    currCards.map((element, index) => (
                        <S.SingleCard container item xs={2}>
                            {element}
                        </S.SingleCard>
                    ))
                }

                <S.SliderArrow onClick={handleNext}>
                    {<ArrowBack />}
                </S.SliderArrow>
            </S.SliderContainer>
        </>
    );
};

export default CardSlider;
