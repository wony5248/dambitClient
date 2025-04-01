import { TopNavComponent } from "component/TopNavBarComponent";
import Router from "./Router";

import "App.css";
import { FloatingComponent } from "component/FloatingComponent";
import { FooterComponent } from "component/FooterComponent";
import { fcWrapStyle } from "style/topNavBarStyle";
import { DialogComponent } from "component/DialogComponent";
import { useState } from "react";
import useWindowSize from "hooks/useWindowSize";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowSize();
  return (
    <div
      style={{
        position: "relative",
        minWidth: width > 768 ? "1280px" : "auto",
        height: "100%",
        backgroundColor: "#000",
        margin: "0",
        padding: "0",
      }}
    >
      <div css={fcWrapStyle}>
        <TopNavComponent></TopNavComponent>
        <Router />
        <DialogComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></DialogComponent>
        <FloatingComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></FloatingComponent>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
};

export default App;
