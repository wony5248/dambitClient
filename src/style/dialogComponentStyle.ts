import { css } from "@emotion/react";

export const dialogContainerStyle = (isOpen: boolean) => css`
  opacity: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -163px;
  margin-left: -220px;
  z-index: 20002;
  display: ${isOpen ? "block" : "none"};
  width: 438px;
  border: 1px solid #824b4b;
  background-color: #faf0f0;
`;

export const dialogContentTopStyle = css`
  position: relative;
  height: 55px;
  background-color: #824b4b;
  line-height: 55px;
`;

export const dialogContentTopTextStyle = css`
  padding: 0 23px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.06em;
`;

export const dialogContentStyle = css`
  display: table;
  width: 100%;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const dialogContentInnerStyle = css`
  text-align: center;
  padding: 44px 15px 45px;
`;

export const ttStyle = css`
  margin-top: 2px;
  padding-bottom: 14px;
  font-weight: 700;
  font-size: 16px;
  color: #111;
  line-height: 24px;
  letter-spacing: -0.5px;
`;

export const tsStyle = css`
  font-size: 14px;
  color: #45484f;
  line-height: 24px;
  letter-spacing: -0.5px;
`;

export const strongStyle = css`
  font-size: 22px;
  color: #ffa099;
`;

export const dialogBottomStyle = css`
  padding: 20px 0;
  border-top: 1px solid #dedede;
  text-align: center;
  font-size: 0;
`;

export const dialogBtnStyle = css`
  border: 0;
  background-color: #824b4b;
  color: #fff;
  display: inline-block;
  height: 35px;
  padding: 0 22px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.06em;
  vertical-align: top;
`;
