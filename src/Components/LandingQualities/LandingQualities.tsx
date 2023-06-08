import React, { FC } from "react";
import { LANDING_BULLET_POINTS } from "../../consts/landingBulletPoints";
import SingleBullet from "./SingleBullet/SingleBullet";
import * as S from "./LandingQualities.style";
import landingQualitiesImg from "./girl.png";

const LandingQualities: FC = () => {
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

export default LandingQualities;
