import React from "react";
import HeaderPresenter from "./HeaderPresenter";
interface IProps {
  title: string;
}
function HeaderContainer({ title }: IProps) {
  return <HeaderPresenter title={title} />;
}
export default HeaderContainer;
