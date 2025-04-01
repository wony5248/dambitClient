import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import {
  areaInnerStyle,
  areaLogoStyle,
  areaNavbarStyle,
  itemBarStyle,
  navigationFrameStyle,
  navigationListItemStyle,
  navigationListStyle,
  navigationWrapStyle,
  sectionHeaderStyle,
  sectionHeaderWrapStyle,
  siteNameStyle,
  topNavDivStyle,
  topNavStickyStyle,
} from "style/topNavBarStyle";
import MenuIcon from "@mui/icons-material/Menu";

export const tabs = [
  "",
  "intro",
  "public",
  "private",
  "special",
  // "reservation",
  "direction",
  "gallery",
  "term",
];

export const tabNames = [
  "홈",
  "회사소개",
  "퍼블릭[그룹]투어",
  "프라이빗투어",
  "스페셜투어",
  // "예약신청/FAQ",
  "오시는길",
  "요트 갤러리",
  "이용약관",
];

export const TopNavComponent: React.FC = () => {
  const location = window.location;
  const width = useWindowSize();
  const url = location.pathname.split("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div style={{ backgroundColor: "#faf0f0", height: "100%" }}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List disablePadding>
          {tabNames.map((text, idx) => (
            <ListItem
              style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
              <a
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: 100,
                }}
                href={`/${tabs[idx]}`}
              ></a>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Box>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return width < 768 ? (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#ffa099",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          width: "100%",
          padding: "0 40px",
          justifyContent: "start",
          pointerEvents: "none",
        }}
      >
        {
          <MenuIcon
            sx={{ width: "32px" }}
            style={{ color: " white", height: "100%", pointerEvents: "all" }}
            onClick={toggleDrawer(true)}
          ></MenuIcon>
        }
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  ) : (
    <div
      css={isScrolled ? [topNavDivStyle, topNavStickyStyle] : topNavDivStyle}
      className="header"
    >
      <div css={sectionHeaderWrapStyle}>
        <div css={sectionHeaderStyle}>
          <div css={areaInnerStyle}>
            <div css={areaLogoStyle}>
              <h1 css={siteNameStyle}>
                <a href="/">아그리나 요트 투어</a>
              </h1>
            </div>
            <div css={areaNavbarStyle}>
              <div css={navigationWrapStyle}>
                <div css={navigationFrameStyle}>
                  <ul css={navigationListStyle}>
                    {tabs.map((tab, idx) => {
                      return (
                        <li css={navigationListItemStyle}>
                          <a href={`/${tab}`}>
                            <span
                              style={{ letterSpacing: "-1px", fontSize: "0" }}
                            >
                              <span
                                key={tab}
                                style={{
                                  fontSize: "16px",
                                  color:
                                    url[url.length - 1] === tab
                                      ? "#824b4b"
                                      : "black",
                                }}
                              >
                                {tabNames[idx]}
                              </span>
                            </span>
                          </a>
                          <span css={itemBarStyle}></span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
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
      {/* <div css={headerSubMenuWrap}></div> */}
    </div>
  );
};
