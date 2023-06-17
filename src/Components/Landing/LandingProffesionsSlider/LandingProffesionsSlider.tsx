import { FC, useState } from 'react';

// css
import * as S from './LandingProffesionsSlider.style'

// data
import { SliderData } from './LandingProffesionsSlider.data';

// mui
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid } from '@mui/material';

const CardSlider: FC = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [currCards, setCurrCards] = useState(SliderData.slice(0, 5));

    const handleNext = () => {
        let z
        if (currIndex === SliderData.length - 1) {
            setCurrIndex(0);
            z = 0
        } else {
            setCurrIndex(currIndex + 1);
            z = currIndex + 1
        }
        currArray(z)
    }

    const handlePrev = () => {
        let z
        if (currIndex === 0) {
            setCurrIndex(SliderData.length - 1);
            z = SliderData.length - 1
        } else {
            setCurrIndex(currIndex - 1);
            z = currIndex - 1
        }
        currArray(z)
    }

    const currArray = (shahar: number) => {

        setCurrCards(prev => {
            let endIndex = shahar + 5;
            let y = JSON.parse(JSON.stringify(SliderData));
            if (endIndex > y.length) {
                endIndex = endIndex - y.length;
                return y.slice(shahar).concat(y.slice(0, endIndex));
            } else {
                return y.slice(shahar, endIndex);
            }
        });
    }

    return (
        <>
            <S.SliderTitle>מקצועות פופולריים</S.SliderTitle>
            <S.SliderContainer container spacing={0}>
                <S.SliderArrow onClick={handlePrev} >
                    <ArrowForward />
                </S.SliderArrow>

                {currCards.map((element, index) => (
                    <Grid container item xs={2} key={index}>
                        <S.SliderSingleTitle>{element.label}</S.SliderSingleTitle>
                        <S.SliderSingleImg src={element.imgSrc} />
                    </Grid>
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
