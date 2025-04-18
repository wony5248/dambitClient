import { css } from "@emotion/react";

export const topNavDivStyle = css`
  position: relative;
  z-index: 9999;
  border-bottom: 1px solid #ebebeb;
  background-color: #0a2342;
`;

export const topNavStickyStyle = css`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  min-width: 1280px;
`;

export const headerSubMenuWrap = css`
  display: block;
  display: none;
  width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

// topnavbar bg
export const sectionHeaderWrapStyle = css`
  background-color: #4c6e91;
  font-color: white;
`;

export const sectionHeaderStyle = css`
  position: relative;
  width: 1100px;
  margin: 0 auto;
`;

export const areaInnerStyle = css`
  overflow: hidden;
  padding: 28px 0 24px;
`;

export const areaLogoStyle = css`
  display: inline-block;
  float: left;
  // &::after {
  //   display: inline-block;
  //   width: 1px;
  //   height: 20px;
  //   margin: 0 25px 0 21px;
  //   background-color: #ebebeb;
  //   vertical-align: top;
  //   content: "";
  //   vertical-align: middle;
  // }
`;

export const areaNavbarStyle = css`
  overflow: hidden;
`;

export const areaGlobalStyle = css`
  position: absolute;
  top: 26px;
  right: 0;
`;

export const siteNameStyle = css`
  display: inline-block;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.2px;
  color: #ffffff;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all;
`;

export const fcWrapStyle = css`
  margin: 0;
  padding: 0;
`;

export const navigationWrapStyle = css`
  overflow: hidden;
  position: relative;
  padding-right: 30px;
`;

export const navigationFrameStyle = css`
  overflow: hidden;
`;

export const navigationListStyle = css`
  transform: translateZ(0px);
  width: auto;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  margin-left: -10px;
  height: 28px;
  overflow: auto;
  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow: scroll;
  }
`;

export const navigationListItemStyle = css`
  display: inline-block;
  position: relative;
  float: left;
  padding: 0 10px;
  font-size: 15px;
  color: #faf5f5;
`;

export const navigationListLinkStyle = css`
  display: inline-block;
  color: #666;
  line-height: 18px;
`;

export const navigationListLinkSelectedStyle = css`
  color: inherit;
`;

export const itemBarStyle = css`
  position: absolute;
  bottom: 0;
  right: 10px;
  left: 10px;
  height: 1px;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  opacity: 0;
`;

export const itemBarSelectedStyle = css`
  transform: scale(1);
  opacity: 1;
`;
