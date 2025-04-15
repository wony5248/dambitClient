import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";
import public1 from "assets/public1.jpeg";
import public2 from "assets/public2.jpeg";
import public3 from "assets/public3.jpeg";
import public4 from "assets/public4.jpeg";
import public5 from "assets/public5.jpeg";
import public6 from "assets/public6.jpeg";
import public7 from "assets/public7.jpeg";
import public8 from "assets/public8.jpeg";
import public9 from "assets/public9.jpeg";
import public10 from "assets/public10.jpeg";
import public11 from "assets/public11.jpeg";
import public12 from "assets/public12.jpeg";
import public13 from "assets/public13.jpeg";
import public14 from "assets/public14.jpeg";
import public15 from "assets/public15.jpeg";
import public16 from "assets/public16.jpeg";
import public17 from "assets/public17.jpeg";
import public18 from "assets/public18.jpeg";
import public19 from "assets/public19.jpeg";

import { ContentBoxComponent, GalleryComponent } from "./ContentComponent";

export const PublicContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>퍼블릭[그룹]투어
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent url={public1}></GalleryComponent>
            <GalleryComponent url={public2}></GalleryComponent>
            <GalleryComponent url={public3}></GalleryComponent>
            <GalleryComponent url={public4}></GalleryComponent>
            <GalleryComponent url={public5}></GalleryComponent>
            <GalleryComponent url={public6}></GalleryComponent>
            <GalleryComponent url={public7}></GalleryComponent>
            <GalleryComponent url={public8}></GalleryComponent>
            <GalleryComponent url={public9}></GalleryComponent>
            <GalleryComponent url={public10}></GalleryComponent>
            <GalleryComponent url={public11}></GalleryComponent>
            <GalleryComponent url={public12}></GalleryComponent>
            <GalleryComponent url={public13}></GalleryComponent>
            <GalleryComponent url={public14}></GalleryComponent>
            <GalleryComponent url={public15}></GalleryComponent>
            <GalleryComponent url={public16}></GalleryComponent>
            <GalleryComponent url={public17}></GalleryComponent>
            <GalleryComponent url={public18}></GalleryComponent>
            <GalleryComponent url={public19}></GalleryComponent>
          </ContentBoxComponent>
        </div>
      </div>
    </div>
  );
};
