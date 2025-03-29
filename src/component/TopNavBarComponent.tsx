import {
  areaInnerStyle,
  areaLogoStyle,
  areaNavbarStyle,
  headerSubMenuWrap,
  itemBarStyle,
  navigationFrameStyle,
  navigationListItemStyle,
  navigationListStyle,
  navigationWrapStyle,
  sectionHeaderStyle,
  sectionHeaderWrapStyle,
  siteNameStyle,
  topNavDivStyle,
} from "style/topNavBarStyle";

type ListItemProps = {
  text?: string;
  url?: string;
  selected?: boolean;
};

export const TopNavComponent: React.FC = () => {
  return (
    <div css={topNavDivStyle} className="header">
      <div css={sectionHeaderWrapStyle}>
        <div css={sectionHeaderStyle}>
          <div css={areaInnerStyle}>
            <div css={areaLogoStyle}>
              <h1 css={siteNameStyle}>
                <a href="/">아그리나 요트 투어</a>
              </h1>
            </div>
            <div css={areaNavbarStyle}>
              <NavBarListComponent></NavBarListComponent>
            </div>
            {/* <div css={areaGlobalStyle}>
                <div>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div> */}
          </div>
        </div>
      </div>
      <div css={headerSubMenuWrap}></div>
    </div>
  );
};

export const NavBarListComponent = () => {
  return (
    <div css={navigationWrapStyle}>
      {/* <button></button> */}
      <div css={navigationFrameStyle}>
        <ul css={navigationListStyle}>
          <NavBarListItemComponent text="홈" url="/"></NavBarListItemComponent>
          <NavBarListItemComponent
            text="회사소개"
            url="/intro"
          ></NavBarListItemComponent>
          <NavBarListItemComponent
            text="퍼블릭[그룹]투어"
            url="/public"
          ></NavBarListItemComponent>
          <NavBarListItemComponent
            text="프라이빗투어"
            url="/private"
          ></NavBarListItemComponent>
          <NavBarListItemComponent
            text="스페셜투어"
            url="/special"
          ></NavBarListItemComponent>
          {/* <NavBarListItemComponent
            text="예약신청/FAQ"
            url="/reservation"
          ></NavBarListItemComponent> */}
          <NavBarListItemComponent
            text="오시는길"
            url="/direction"
          ></NavBarListItemComponent>
          <NavBarListItemComponent
            text="요트 갤러리"
            url="/gallery"
          ></NavBarListItemComponent>
          <NavBarListItemComponent
            text="이용약관"
            url="/term"
          ></NavBarListItemComponent>
        </ul>
      </div>
      {/* <button></button> */}
    </div>
  );
};

export const NavBarListItemComponent = (props: ListItemProps) => {
  return (
    <li css={navigationListItemStyle}>
      <a href={props.url}>
        <span style={{ letterSpacing: "-1px", fontSize: "0" }}>
          <span style={{ fontSize: "16px", color: "black" }}>{props.text}</span>
        </span>
      </a>
      <span css={itemBarStyle}></span>
    </li>
  );
};
