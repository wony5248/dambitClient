import { TopNavComponent } from "component/TopNavBarComponent";
import Router from "./Router";

import "App.css";
import { FloatingComponent } from "component/FloatingComponent";
import { FooterComponent } from "component/FooterComponent";
import { fcWrapStyle } from "style/topNavBarStyle";

const App = () => {
  return (
    <div
      style={{
        position: "relative",
        minWidth: "1280px",
        height: "100%",
        backgroundColor: "#000",
        margin: "0",
        padding: "0",
      }}
    >
      <div css={fcWrapStyle}>
        <TopNavComponent></TopNavComponent>
        <Router />
        <FloatingComponent></FloatingComponent>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
};

export default App;
