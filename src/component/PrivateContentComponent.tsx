import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import private1 from "assets/private1.jpeg";
import private2 from "assets/private2.jpeg";
import private3 from "assets/private3.jpeg";
import private4 from "assets/private5.jpeg";
import private5 from "assets/private6.jpeg";
import private6 from "assets/private6.jpeg";
import private7 from "assets/private7.jpeg";
import private8 from "assets/private8.jpeg";
import private9 from "assets/private9.jpeg";
import private10 from "assets/private10.jpeg";
import private11 from "assets/private11.jpeg";
import private12 from "assets/private12.jpeg";
import private13 from "assets/private13.jpeg";
import private14 from "assets/private14.jpeg";
import private15 from "assets/private15.jpeg";
import private16 from "assets/private16.jpeg";
import private17 from "assets/private17.jpeg";
import private18 from "assets/private18.jpeg";
import private19 from "assets/private19.jpeg";
import {
  BottomNavComponent,
  ContentBoxComponent,
  GalleryComponent,
} from "./ContentComponent";

export const PrivateContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>프라이빗투어
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent url={private1}></GalleryComponent>
            <GalleryComponent url={private2}></GalleryComponent>
            <GalleryComponent url={private3}></GalleryComponent>
            <GalleryComponent url={private4}></GalleryComponent>
            <GalleryComponent url={private5}></GalleryComponent>
            <GalleryComponent url={private6}></GalleryComponent>
            <GalleryComponent url={private7}></GalleryComponent>
            <GalleryComponent url={private8}></GalleryComponent>
            <GalleryComponent url={private9}></GalleryComponent>
            <GalleryComponent url={private10}></GalleryComponent>
            <GalleryComponent url={private11}></GalleryComponent>
            <GalleryComponent url={private12}></GalleryComponent>
            <GalleryComponent url={private13}></GalleryComponent>
            <GalleryComponent url={private14}></GalleryComponent>
            <GalleryComponent url={private15}></GalleryComponent>
            <GalleryComponent url={private16}></GalleryComponent>
            <GalleryComponent url={private17}></GalleryComponent>
            <GalleryComponent url={private18}></GalleryComponent>
            <GalleryComponent url={private19}></GalleryComponent>
          </ContentBoxComponent>
          <BottomNavComponent></BottomNavComponent>
        </div>
      </div>
    </div>
  );
};
