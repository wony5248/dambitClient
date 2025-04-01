import { css } from "@emotion/react";

export const footerStyle = css`
  position: relative;
  z-index: 100;
  background-color: #824b4b;
`;

export const sectionFooterStyle = css`
  position: relative;
  width: 1100px;
  padding: 58px 0;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 40px 50px;
  }
`;

export const footerInnerStyle = css`
  min-height: 55px;
  padding-right: 300px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 55px;
    padding-right: 0px;
  }
`;

export const areaSearchStyle = css`
  display: inline-block;
  position: relative;
  min-width: 222px;
  height: 45px;
  margin: 2px 0 28px;
  border: 1px solid #fff;
  line-height: 45px;
  letter-spacing: -0.8px;
  font-size: 18px;
  color: #fff;
  @media (max-width: 768px) {
    min-width: 140px;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
  }
`;

export const areaSearchKeywordStyle = css`
  display: block;
  padding: 0 40px 0 15px;
  text-align: left;
  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

export const areaListInfoLiStyle = css`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff;
  letter-spacing: -0.8px;
  line-height: 20px;
  white-space: nowrap;
  @media (min-width: 768px) {
    &::after {
      display: inline-block;
      width: 1px;
      height: 12px;
      margin: 4px 8px 0 6px;
      background-color: #fff;
      vertical-align: top;
      content: "";
    }
  }
`;
