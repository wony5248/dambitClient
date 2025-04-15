import { css } from "@emotion/react";

export const floatingItemStyle = css`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 9999;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const linkItemStyle = css`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: relative;
  width: 60px;
  height: 60px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  background-color: #fff;
  text-align: center;
  -webkit-box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  margin-top: 10px;
`;

export const linkItemHoveredStyle = css`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: relative;
  width: auto;
  padding-right: 16px;
  height: 60px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  background-color: #fff;
  text-align: center;
  -webkit-box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  margin-top: 10px;
`;

export const linkIconStyle = css`
  display: inline-block;
  height: 60px;
  border-radius: 50%;
  font-size: 26px;
  line-height: 60px;
  color: #fff;
  font-style: normal;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: modoo;
`;

export const linkTextStyle = css`
  display: none;
  margin-left: 10px;
  font-size: 20px;
  vertical-align: top;
  line-height: 60px;
  color: #fff;
  white-space: nowrap;
  opacity: 0;
`;

export const linkTextHoveredStyle = css`
  display: flex;
  margin-left: 10px;
  font-size: 20px;
  vertical-align: top;
  line-height: 60px;
  color: #fff;
  white-space: nowrap;
`;
