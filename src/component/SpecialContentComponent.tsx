import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";
import special1 from "assets/special1.png";
import special2 from "assets/special2.png";
import special3 from "assets/special3.jpeg";
import special4 from "assets/special4.jpeg";
import special5 from "assets/special5.png";

import { ContentBoxComponent, GalleryComponent } from "./ContentComponent";

export const SpecialContentContainerComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>스페셜투어
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent url={special1}></GalleryComponent>
            <GalleryComponent url={special2}></GalleryComponent>
            <GalleryComponent url={special3}></GalleryComponent>
            <GalleryComponent url={special4}></GalleryComponent>
            <GalleryComponent url={special5}></GalleryComponent>
          </ContentBoxComponent>
        </div>
      </div>
    </div>
  );
};
