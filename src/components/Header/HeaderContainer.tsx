import React, { useState, useCallback } from "react";
import HeaderPresenter from "./HeaderPresenter";
interface IProps {
  title: string;
}
function HeaderContainer({ title }: IProps) {
  const [isNight, setNight] = useState<boolean>(false);
  const handleToggle = useCallback(
    (e) => {
      console.log(isNight);
      setNight(!isNight);
    },
    [isNight]
  );
  return (
    <HeaderPresenter
      title={title}
      isNight={isNight}
      handleToggle={handleToggle}
    />
  );
}
export default HeaderContainer;
