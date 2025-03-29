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
`;

export const footerInnerStyle = css`
  min-height: 55px;
  padding-right: 300px;
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
`;

export const areaSearchKeywordStyle = css`
  display: block;
  padding: 0 40px 0 15px;
  text-align: left;
`;

export const areaListInfoLiStyle = css`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff;
  letter-spacing: -0.8px;
  line-height: 20px;
  white-space: nowrap;
  &::after {
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 4px 8px 0 6px;
    background-color: #fff;
    vertical-align: top;
    content: "";
  }
`;
