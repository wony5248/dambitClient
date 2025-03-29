import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";
import term from "assets/term.jpeg";
import {
  BottomNavComponent,
  ContentBoxComponent,
  GalleryComponent,
} from "./ContentComponent";

export const TermContentComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>이용약관
        </h3>

        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <GalleryComponent url={term}></GalleryComponent>
          </ContentBoxComponent>
          <BottomNavComponent></BottomNavComponent>
        </div>
      </div>
    </div>
  );
};
