import React from "react";
import FooterPresenter from "./FooterPresenter";
interface IProps {
  isNight: boolean;
}
function FooterContainer({ isNight }: IProps) {
  return <FooterPresenter isNight={isNight} />;
}
export default FooterContainer;
