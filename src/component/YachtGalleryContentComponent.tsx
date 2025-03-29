import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import gall1 from "assets/gall1.jpeg";
import gall2 from "assets/gall2.jpeg";
import gall3 from "assets/gall3.jpeg";
import gall4 from "assets/gall5.jpeg";
import gall5 from "assets/gall6.jpeg";
import gall6 from "assets/gall6.jpeg";
import gall7 from "assets/gall7.jpeg";
import gall8 from "assets/gall8.jpeg";
import gall9 from "assets/gall9.jpeg";
import gall10 from "assets/gall10.jpeg";
import gall11 from "assets/gall11.jpeg";
import gall12 from "assets/gall12.jpeg";
import gall13 from "assets/gall13.jpeg";
import gall14 from "assets/gall14.jpeg";
import gall15 from "assets/gall15.jpeg";
import gall16 from "assets/gall16.jpeg";
import gall17 from "assets/gall17.jpeg";
import gall18 from "assets/gall18.jpeg";
import gall19 from "assets/gall19.jpeg";
import gall20 from "assets/gall20.jpeg";
import {
  BottomNavComponent,
  ContentBoxComponent,
  GalleryComponent,
} from "./ContentComponent";

export const GalleryContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>요트 갤러리
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent url={gall1}></GalleryComponent>
            <GalleryComponent url={gall2}></GalleryComponent>
            <GalleryComponent url={gall3}></GalleryComponent>
            <GalleryComponent url={gall4}></GalleryComponent>
            <GalleryComponent url={gall5}></GalleryComponent>
            <GalleryComponent url={gall6}></GalleryComponent>
            <GalleryComponent url={gall7}></GalleryComponent>
            <GalleryComponent url={gall8}></GalleryComponent>
            <GalleryComponent url={gall9}></GalleryComponent>
            <GalleryComponent url={gall10}></GalleryComponent>
            <GalleryComponent url={gall11}></GalleryComponent>
            <GalleryComponent url={gall12}></GalleryComponent>
            <GalleryComponent url={gall13}></GalleryComponent>
            <GalleryComponent url={gall14}></GalleryComponent>
            <GalleryComponent url={gall15}></GalleryComponent>
            <GalleryComponent url={gall16}></GalleryComponent>
            <GalleryComponent url={gall17}></GalleryComponent>
            <GalleryComponent url={gall18}></GalleryComponent>
            <GalleryComponent url={gall19}></GalleryComponent>
            <GalleryComponent url={gall20}></GalleryComponent>
          </ContentBoxComponent>
          <BottomNavComponent></BottomNavComponent>
        </div>
      </div>
    </div>
  );
};
