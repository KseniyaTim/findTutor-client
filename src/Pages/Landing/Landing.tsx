import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';

const Landing: FC = () => {
    return (
        <>
            <LandingCenter />
            <LandingProffesionsSlider />
            <LandingBullets />
        </>
    );
};

export default Landing;