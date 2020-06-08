import React, { useState, useCallback } from "react";
import HeaderPresenter from "./HeaderPresenter";
interface IProps {
  title: string;
  isNight: boolean;
  handleToggle: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
function HeaderContainer({ title, isNight, handleToggle }: IProps) {
  //const [isNight, setNight] = useState<boolean>(false);
  return (
    <HeaderPresenter
      title={title}
      isNight={isNight}
      handleToggle={handleToggle}
    />
  );
}
export default HeaderContainer;
