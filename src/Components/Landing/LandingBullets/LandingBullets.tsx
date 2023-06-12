import { FC } from "react";

// components
import SingleBullet from "./SingleBullet/SingleBullet";

// css
import * as S from "./LandingBullets.style";

// images
import landingQualitiesImg from "../../../assets/images/landing/landingBullets/bulletStudyGirl.png";

// consts
import { LANDING_BULLET_POINTS } from "./LandingBullets.data";

const LandingBullets: FC = () => {
  return (
    <S.container>
      <S.AllBulletWrapper>
        <S.title>החלק הכי טוב? הכל.</S.title>
        {LANDING_BULLET_POINTS.map((bullet, index) => (
          <SingleBullet
            desc={bullet.desc}
            header={bullet.header}
            icon={bullet.icon}
            key={index}
          />
        ))}
      </S.AllBulletWrapper>

      <S.CenterLeftImg src={landingQualitiesImg}></S.CenterLeftImg>
    </S.container>
  );
};

export default LandingBullets;
