import { GalleryContentContainerComponent } from "component/YachtGalleryContentComponent";
import { HomeContentContainerComponent } from "component/HomeContentComponent";
import { IntroContentContainerComponent } from "component/IntroContentComponent";
import { PrivateContentContainerComponent } from "component/PrivateContentComponent";
import { PublicContentContainerComponent } from "component/PublicContentComponent";
import { ReservationComponent } from "component/ReservationComponent";
import { SpecialContentContainerComponent } from "component/SpecialContentComponent";
import { TermContentComponent } from "component/TermComponent";
import { JSX, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MapComponent } from "component/MapComponent";

/**
 * 프로젝트 라우팅을 정의한 라우터 컴포넌트입니다.
 */
const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeContentContainerComponent></HomeContentContainerComponent>
            }
          ></Route>
          <Route
            path="/intro"
            element={
              <IntroContentContainerComponent></IntroContentContainerComponent>
            }
          ></Route>
          <Route
            path="/public"
            element={
              <PublicContentContainerComponent></PublicContentContainerComponent>
            }
          ></Route>
          <Route
            path="/private"
            element={
              <PrivateContentContainerComponent></PrivateContentContainerComponent>
            }
          ></Route>
          <Route
            path="/special"
            element={
              <SpecialContentContainerComponent></SpecialContentContainerComponent>
            }
          ></Route>
          <Route
            path="/reservation"
            element={<ReservationComponent></ReservationComponent>}
          ></Route>
          <Route
            path="/direction"
            element={<MapComponent></MapComponent>}
          ></Route>
          <Route
            path="/gallery"
            element={
              <GalleryContentContainerComponent></GalleryContentContainerComponent>
            }
          ></Route>
          <Route
            path="/term"
            element={<TermContentComponent></TermContentComponent>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

Router.displayName = "Router";

export default Router;
