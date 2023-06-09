import React, { FC } from "react";
import { ISingleBullet } from "./ISingleBullet";
import * as S from "./SingleBullet.style";

const SingleBullet: FC<ISingleBullet> = ({ desc, header, icon }) => {
  return (
    <S.wrapper>
      <S.titleContainer>
        <S.bulletIcon className="material-symbols-outlined">
          {icon}
        </S.bulletIcon>
        <S.bulletTitle>{header}</S.bulletTitle>
      </S.titleContainer>
      <S.bulletDesc>{desc}</S.bulletDesc>
    </S.wrapper>
  );
};

export default SingleBullet;
