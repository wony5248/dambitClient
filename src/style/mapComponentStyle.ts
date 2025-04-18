import { css } from "@emotion/react";

export const locationTextStyle = css`
  font-size: 26px;
  line-height: 38px;
  overflow: hidden;
  margin-top: 3px;
  letter-spacing: -1px;
  color: #4c6e91 !important;
`;

export const locationBtnDivStyle = css`
  right: 20px;
  top: 40px;
  z-index: 250;
`;

export const locationLinkStyle = css`
  margin-left: 5px;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: auto;
  height: 40px;
  padding: 0 20px;
  border-radius: 2px;
  border: 0;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: -1px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background-color: #4c6e91 !important;
`;

export const locationFindLoadStyle = css`
  font-size: 15px;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  display: flex;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const dlStyle = css`
  border-top: 1px solid #ebebeb;
  padding: 30px 0;
  letter-spacing: -1px;
  font-size: 15px;
  line-height: 22px;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const dtStyle = css`
  float: left;
  width: 168px;
  padding-left: 10px;
  font-size: 15px;
  color: #111;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const dtSpanStyle = css`
  margin: 2px 9px 0 0;
  font-size: 15px;
  display: flex;
  align-itmes: center;
  font-style: normal;
  line-height: 1;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: modoo;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const ddStyle = css`
  margin-left: 60px;
  color: #666;
  overflow: hidden;
  padding-right: 10px;
  @media (max-width: 768px) {
    margin-left: 0px;
    float: left;
    padding-left: 0px;
  }
`;

export const subTitleStyle = css`
  display: inline-block;
  min-width: 40px;
  margin-right: 20px;
  color: #666;
`;

export const subTextStyle = css`
  color: #666;
  &::before {
    display: inline-block;
    width: 1px;
    height: 15px;
    margin: 2px 9px 0 -11px;
    background-color: #e0e0e0;
    vertical-align: top;
    content: "";
  }
`;

export const subDescriptionStyle = css`
  margin-top: 8px;
  margin-left: 60px;
  color: #666;
  display: block;
`;

export const businessCheckLinkStyle = css`
  display: inline-block;
  border: 1px solid #e0e0e0;
  padding: 0 4px;
  font-size: 11px;
  margin-left: 8px;
  color: #666;
  vertical-align: top;
`;
