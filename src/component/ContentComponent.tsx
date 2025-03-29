import {
  btnWrapStyle,
  btnThemeV2Style,
  btnBackGroundStyle,
  btnIcStyle,
  inStyle,
  btnTextStyle,
  icStyle,
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

export type LinkProps = {
  texts: number[];
};

export const txtMap: { [key: number]: string } = {
  0: "",
  1: "DAY TOUR",
  2: "PRIVATE TOUR",
  3: "SPECIAL TOUR",
  4: "예약/FAQ",
  5: "오시는 길",
  6: "요트 갤러리",
  7: "term",
};

export const urlMap: { [key: number]: string } = {
  0: "",
  1: "public",
  2: "private",
  3: "special",
  4: "reservation",
  5: "direction",
  6: "gallery",
  7: "term",
};

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
          return (
            <li
              key={idx}
              css={
                idx === 0
                  ? btnBackGroundStyle
                  : [btnBackGroundBeforeStyle, btnBackGroundStyle]
              }
            >
              <a href={`/${urlMap[item]}`} css={btnIcStyle}>
                <div css={inStyle}>
                  <span css={btnTextStyle}>{txtMap[item]}</span>
                  <span css={icStyle}>
                    <span></span>
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
    <div style={{ backgroundColor: "#fff" }}>
      <div style={{ width: "100%", height: "10px" }}></div>
    </div>
  );
};
