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
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";
import yacht from "assets/yacht.jpeg";
import { BottomNavComponent } from "./ContentComponent";

export const HomeContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent></GalleryComponent>
          </ContentBoxComponent>
          <BottomNavComponent></BottomNavComponent>
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
              <img css={contentImgStyle} src={yacht} alt="" />
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
    <div style={{ backgroundColor: "#FAF0F0" }}>
      <div style={{ width: "100%", height: "10px" }}></div>
    </div>
  );
};
