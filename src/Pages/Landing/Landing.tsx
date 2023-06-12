import { FC } from 'react';

// components
import LandingCenter from '../../Components/Landing/LandingCenter/LandingCenter';
import LandingProffesionsSlider from '../../Components/Landing/LandingProffesionsSlider/LandingProffesionsSlider';
import LandingBullets from '../../Components/Landing/LandingBullets/LandingBullets';
import LandingCategories from '../../Components/Landing/LandingCategories/LandingCategories';

const Landing: FC = () => {
    return (
        <>
            <LandingCenter />
            <LandingProffesionsSlider />
            <LandingBullets />
            <LandingCategories/>
        </>
    );
};

export default Landing;