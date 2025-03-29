import { css } from "@emotion/react";

export const lstGuideStyle = css`
  padding: 30px 0 30px 30px;
`;

export const lstGuideLiStyle = css`
  color: #666;
  line-height: 2;
  &::before {
    display: inline-block;
    width: 2px;
    height: 2px;
    margin-right: 10px;
    -webkit-border-radius: 1px;
    border-radius: 1px;
    background-color: #666;
    vertical-align: middle;
    content: "";
  }
`;

export const tableTypeStyle = css`
  margin-top: 0;
  border-top: 1px solid #ebebeb;
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: -0.8px;
  border-spacing: 0;
  border-collapse: collapse;
  clear: both;
  table > tr:first-child th {
    padding-top: 40px;
  }
  table > tr > th {
    padding: 20px 30px;
    background-color: #fafafa;
  }
  table > tr:first-child td {
    padding-top: 30px;
  }
  table > tr > td {
    padding: 10px 30px;
    position: relative;
  }
`;

export const captionStyle = css`
  display: table-caption;
  text-align: -webkit-center;
  unicode-bidi: isolate;
`;

export const colGroupStyle = css`
  display: table-column-group;
  unicode-bidi: isolate;
`;

export const colStyle = css`
  width: 160px;
  display: table-column;
  unicode-bidi: isolate;
`;

export const trStyle = css`
  display: table-row;
  vertical-align: inherit;
  unicode-bidi: isolate;
  border-color: inherit;
`;

export const iconRequiredStyle = css`
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0);
  &::before {
    display: inline-block;
    color: #ff2500;
    content: "*";
  }
`;

export const inputTextStyle = css`
  width: 100%;
  height: 40px;
  padding: 7px 15px;
  border: 1px solid #ddd;
  color: #666;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
