import { css } from "@emotion/react";

export const contentContainerStyle = css`
  padding-top: 20px;
  background-color: #faf0f0;
`;

export const contentBodyStyle = css`
  width: 1280px;
  min-height: 650px;
  padding: 0 90px 100px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const uioTitleStyle = css`
  display: inline-block;
  position: relative;
  font-size: 20px;
  margin-bottom: 40px;
  color: #824b4b;
  font-weight: 400;
  letter-spacing: -0.8px;
`;

export const uioTilteBulletStyle = css`
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 1px;
  z-index: 1;
`;

export const innerContentStyle = css`
  position: relative;
`;

export const galleryAreaStyle = css`
  position: relative;
  height: 100%;
  overflow: hidden;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const galleryImgStyle = css`
  position: relative;
`;

export const maskBgStyle = css`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: #242424;
  opacity: 0;
`;

export const galleryTxtStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`;

export const contentImgStyle = css`
  display: block;
  width: 100%;
  vertical-align: top;
`;

// img a style
export const contentImgWrapperStyle = css`
  display: block;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const componentTopBoxStyle = css`
  margin-top: 40px;
`;

export const componentBoxStyle = css`
  margin-top: 10px;
`;

export const btnWrapStyle = css`
  background-color: #fff;
  width: 100%;
`;

export const btnThemeV2Style = css`
  background-color: #ffa099 !important;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const btnBackGroundStyle = css`
  float: left;
  width: 50%;
  position: relative;
  background-color: #ffa099 !important;
  opacity: 0.9;
`;

export const btnBackGroundBeforeStyle = css`
  &::before {
    background-color: #fff;
    display: inline-block;
    width: 1px;
    height: 30px;
    margin: -15px 0 0 0;
    background-color: white;
    vertical-align: top;
    content: "";
    position: absolute;
    top: 50%;
  }
`;

export const btnIcStyle = css`
  display: block;
  height: 70px;
  line-height: 70px;
  padding: 0 15px;
  text-align: center;
  border-right: 0;
`;

export const inStyle = css`
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: 100%;
`;

export const btnTextStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  max-height: 70px;
  padding: 0 5px 0 30px;
  font-size: 18px;
  letter-spacing: -1.1px;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
`;

export const icStyle = css`
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -10px;
  font-size: 20px;
  color: #fff;
  display: inline-block;
  font-style: normal;
  line-height: 1;
  color: #888;
  font-size: 40px;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
`;
