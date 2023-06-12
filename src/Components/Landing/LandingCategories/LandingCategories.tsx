import React, { FC } from "react";
import * as S from "./LandingCategories.style";
import { LANDING_CATEGORIES } from "./LandingCategories.data";

const LandingCategories: FC = () => {
  return (
    <S.gridWrapper container rowSpacing={8} columns={15}>
      {LANDING_CATEGORIES.map((category, index) => (
        <S.gridItem item xs={3}>
          <S.icon className="material-symbols-outlined">{category.icon}</S.icon>
          <S.hoverLine/>
          <S.title>{category.title}</S.title>
        </S.gridItem>
      ))}
    </S.gridWrapper>
  );
};

export default LandingCategories;
