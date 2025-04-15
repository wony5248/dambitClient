import {
  btnWrapStyle,
  btnThemeV2Style,
  btnBackGroundStyle,
  btnIcStyle,
  inStyle,
  btnTextStyle,
  btnBackGroundBeforeStyle,
  componentBoxStyle,
  componentTopBoxStyle,
  contentImgStyle,
  contentImgWrapperStyle,
  galleryAreaStyle,
  galleryImgStyle,
  galleryTxtStyle,
  maskBgStyle,
} from "style/contentComponentStyle";

import publicSvg from "assets/bottompublic.svg";
import specialSvg from "assets/bottomspecial.svg";
import naverSvg from "assets/bottomreservation.svg";
import kakaoSvg from "assets/bottomkakao.svg";
import gallerySvg from "assets/bottomgallery.svg";
import navigateSvg from "assets/bottomnavigate.svg";

export type LinkProps = {
  texts: number[];
};

export const txtMap: { [key: number]: string } = {
  0: "",
  1: "퍼블릭투어",
  2: "스페셜투어",
  3: "네이버예약",
  4: "카톡상담",
  5: "요트갤러리",
  6: "오시는 길",
  7: "이용약관",
};

export const urlMap: { [key: number]: string } = {
  0: "",
  1: "public",
  2: "special",
  3: "https://booking.naver.com/booking/6/bizes/147337",
  4: "https://pf.kakao.com/_WxmEUC",
  5: "gallery",
  6: "direction",
  7: "term",
};

export const svgMap: { [key: number]: string } = {
  0: "",
  1: publicSvg,
  2: specialSvg,
  3: naverSvg,
  4: kakaoSvg,
  5: gallerySvg,
  6: navigateSvg,
  7: "",
};

const newWindowArr = ["네이버예약", "카톡상담"];

export type imgProps = {
  url: string;
};

export const BottomNavComponent = () => {
  return (
    <>
      <ContentBoxComponent isMargin={false}>
        <BottomLinkComponent texts={[1, 2]}></BottomLinkComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}>
        <DivisionComponent></DivisionComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}>
        <BottomLinkComponent texts={[3, 4]}></BottomLinkComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}>
        <DivisionComponent></DivisionComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}>
        <BottomLinkComponent texts={[5, 6]}></BottomLinkComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}>
        <DivisionComponent></DivisionComponent>
      </ContentBoxComponent>
      <ContentBoxComponent isMargin={true}></ContentBoxComponent>
    </>
  );
};

export const BottomLinkComponent = (props: LinkProps) => {
  // btn_wrap

  return (
    <div css={btnWrapStyle}>
      <ul style={{ margin: "0", padding: "0" }} css={btnThemeV2Style}>
        {props.texts.map((item: number, idx: number) => {
          const newWindow = newWindowArr.includes(txtMap[item]) ? true : false;
          return (
            <li
              key={idx}
              css={
                idx === 0
                  ? btnBackGroundStyle
                  : [btnBackGroundBeforeStyle, btnBackGroundStyle]
              }
            >
              <a
                href={newWindow ? urlMap[item] : `/${urlMap[item]}`}
                target={newWindow ? "_blank" : "_self"}
                css={btnIcStyle}
              >
                <div css={inStyle}>
                  <span css={btnTextStyle}>
                    <img src={svgMap[item]} alt="" />
                    {txtMap[item]}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContentBoxComponent = (props: any) => {
  // component_box
  return (
    <div css={props.isMargin ? componentBoxStyle : componentTopBoxStyle}>
      {props.children}
    </div>
  );
};

export const GalleryComponent = (props: imgProps) => {
  // gallery_area
  return (
    <div css={galleryAreaStyle}>
      <ul style={{ margin: "0", padding: "0" }}>
        <li>
          <div css={galleryImgStyle}>
            <a css={contentImgWrapperStyle} href="#">
              <img css={contentImgStyle} src={props.url} alt="" />
            </a>
          </div>
          <div css={maskBgStyle}></div>
          <div css={galleryTxtStyle}></div>
        </li>
      </ul>
    </div>
  );
};

export const DivisionComponent = () => {
  return (
    <div style={{ backgroundColor: "#f9f5eb" }}>
      <div style={{ width: "100%", height: "10px" }}></div>
    </div>
  );
};
