import {
  maskBgStyle,
  galleryTxtStyle,
  galleryImgStyle,
  galleryAreaStyle,
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  contentImgStyle,
  contentImgWrapperStyle,
  componentBoxStyle,
  componentTopBoxStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";
import yachtIntro from "assets/yachtIntro.png";

export const IntroContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>회사소개
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <VideoComponent></VideoComponent>
          </ContentBoxComponent>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent></GalleryComponent>
          </ContentBoxComponent>
        </div>
      </div>
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

export const GalleryComponent = () => {
  // gallery_area
  return (
    <div css={galleryAreaStyle}>
      <ul style={{ margin: "0", padding: "0" }}>
        <li>
          <div css={galleryImgStyle}>
            <a css={contentImgWrapperStyle} href="#">
              <img css={contentImgStyle} src={yachtIntro} alt="" />
            </a>
          </div>
          <div css={maskBgStyle}></div>
          <div css={galleryTxtStyle}></div>
        </li>
      </ul>
    </div>
  );
};

export const VideoComponent = () => {
  // gallery_area
  return (
    <div css={galleryAreaStyle}>
      <ul style={{ margin: "0", padding: "0" }}>
        <li>
          <div css={galleryImgStyle}>
            <a css={contentImgWrapperStyle} href="#">
              {/* <video
                css={contentImgStyle}
                controls
                src={
                  "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=EF1AB2CD750223CB6D2B5508428F425CE66C&outKey=V1210850a8e67f5ebc87ce2abc5b8a335bc58743df7965ec6d3f8e2abc5b8a335bc58&width=544&height=306"
                }
              >
                <source
                  src="https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=EF1AB2CD750223CB6D2B5508428F425CE66C&outKey=V1210850a8e67f5ebc87ce2abc5b8a335bc58743df7965ec6d3f8e2abc5b8a335bc58&width=544&height=306"
                  type="vidoe/mp4"
                />
              </video> */}
              <iframe
                width="100%"
                height="600px"
                src="https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=EF1AB2CD750223CB6D2B5508428F425CE66C&outKey=V126850a80e67f5ebc87ce2abc5b8a335bc582e38fb6cb12ea8cbe2abc5b8a335bc58"
                title="NaverVideo"
                allow="autoplay; gyroscope; accelerometer; encrypted-media"
                allowFullScreen
              ></iframe>
            </a>
          </div>
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
