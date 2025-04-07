/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  contentContainerStyle,
  contentBodyStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import { ContentBoxComponent } from "./ContentComponent";
import {
  businessCheckLinkStyle,
  ddStyle,
  dlStyle,
  dtSpanStyle,
  dtStyle,
  locationFindLoadStyle,
  locationLinkStyle,
  locationTextStyle,
  subDescriptionStyle,
  subTextStyle,
  subTitleStyle,
} from "style/mapComponentStyle";
import useWindowSize from "hooks/useWindowSize";
import { useState, useEffect } from "react";

interface NaverStaticMapProps {
  width?: string | number;
  height?: string | number;
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

const CLIENT_ID = "5v6c7tldgi"; // 네이버 API Client ID
let mapInstance: naver.maps.Map | undefined = undefined;
const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

export const MapComponent: React.FC<NaverStaticMapProps> = ({
  width,
  height,
  latitude = 34.7452342,
  longitude = 127.6724058,
  zoom = 15,
}) => {
  const curWidth = useWindowSize();
  width = curWidth < 768 ? 600 : 1100;
  height = curWidth < 768 ? 600 : 400;
  const [isMapLoaded, setMapLoaded] = useState(false);

  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      center: new naver.maps.LatLng(latitude, longitude),
      zoom,
    };

    // 지도 초기화 확인
    if (document.getElementById("map")) {
      mapInstance = new naver.maps.Map("map", mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, "click", () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(zoom);
    });

    // 지도 로드 완료
    setMapLoaded(true);
  };

  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === "undefined") {
      loadScript(
        "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=4zvrocdjj8",
        initMap
      );
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>오시는길
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            {/* <img
              src={mapUrl}
              alt="Naver Static Map"
              width={"100%"}
              height={"100%"}
            /> */}
            <div id="map" style={{ width: "100%", height: "400px" }}></div>
            <div></div>
          </ContentBoxComponent>
          <ContentBoxComponent>
            {curWidth < 768 ? (
              <></>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p css={locationTextStyle}>
                  전남 여수시 웅천남2로 12 이순신마리나
                </p>
                <div>
                  <a
                    href="https://map.naver.com/p/directions/-/14212476.9395566,4129230.9412352,%EC%97%AC%EC%88%98%20%EC%95%84%EA%B7%B8%EB%A6%AC%EB%82%98%20%EC%9A%94%ED%8A%B8%ED%88%AC%EC%96%B4,1728293137,PLACE_POI/-/transit?c=20.00,0,0,0,dh"
                    target="_blank"
                    css={locationLinkStyle}
                  >
                    <span css={locationFindLoadStyle}></span>길찾기
                  </a>
                  <a
                    href="https://map.naver.com/p/entry/place/1728293137?c=20.00,0,0,0,dh"
                    target="_blank"
                    css={locationLinkStyle}
                  >
                    <span css={locationFindLoadStyle}></span>지도에서 보기
                  </a>
                </div>
              </div>
            )}
          </ContentBoxComponent>
          <div style={{ marginTop: curWidth < 768 ? "0px" : "24px" }}>
            <DlComponent></DlComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DlComponent = () => {
  const width = useWindowSize();
  return width < 768 ? (
    <div>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>주소
        </dt>
        <dd css={ddStyle}>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            전남 여수시 웅천남2로 12 이순신마리나
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <a
                  href="https://map.naver.com/p/entry/place/1728293137?c=20.00,0,0,0,dh"
                  target="_blank"
                >
                  <span
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "#faf0f0",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid gray",
                    }}
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
                <a
                  href="https://map.naver.com/p/directions/-/14212476.9395566,4129230.9412352,%EC%97%AC%EC%88%98%20%EC%95%84%EA%B7%B8%EB%A6%AC%EB%82%98%20%EC%9A%94%ED%8A%B8%ED%88%AC%EC%96%B4,1728293137,PLACE_POI/-/transit?c=20.00,0,0,0,dh
                  "
                  target="_blank"
                >
                  <span
                    style={{
                      display: "flex",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "#faf0f0",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid gray",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>전화번호
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>010-2648-5000</span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>이용시간
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            <span css={subTitleStyle}>매일</span>
            <span css={subTextStyle}>10:00 ~ 21:00</span>
          </span>
          <span css={subDescriptionStyle}>선착순예약제, 당일예약가능</span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>오시는길
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            주차하신 후 원형교차로에서 해상방향 C/B입구를 통과하여 왼쪽 C7계류장
            입니다.
            <br />
            <br />
            네이버지도, 카카오맵, T-map에서
            <br />
            "아그리나요트" 검색
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>주차정보
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            이순신마리나 1주차장, 2주차장 무료이용
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>사업자정보
        </dt>
        <dd css={ddStyle} style={{ width: "360px" }}>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              상호명
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              아그리나요트
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              대표자
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>윤현철</span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              사업자번호
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              409-04-43596
              <a
                target="_blank"
                css={businessCheckLinkStyle}
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4090443596"
              >
                사업자 정보 확인
              </a>
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              통신판매번호
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              제2018-전남여수-00200호
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              이메일
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              ayhc3324@gmail.com
            </span>
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>이용안내
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            예약, 주차, 남/녀 화장실 구분
            <br />
          </span>
        </dd>
      </dl>
    </div>
  ) : (
    <div>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>오시는길
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            주차하신 후 원형교차로에서 해상방향 C/B입구를 통과하여 왼쪽 C7계류장
            입니다.
            <br />
            <br />
            네이버지도, 카카오맵, T-map에서
            <br />
            "아그리나요트" 검색
          </span>
          <span style={{ marginTop: "8px", display: "block" }}>
            <span css={subTitleStyle}>주차정보</span>
            <span css={subTextStyle}>
              이순신마리나 1주차장, 2주차장 무료이용{" "}
            </span>
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>이용시간
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            <span css={subTitleStyle}>매일</span>
            <span css={subTextStyle}>10:00 ~ 21:00</span>
          </span>
          <span css={subDescriptionStyle}>선착순예약제, 당일예약가능</span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>전화번호
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>010-2648-5000</span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>이용안내
        </dt>
        <dd css={ddStyle}>
          <span style={{ display: "block" }}>
            예약, 주차, 남/녀 화장실 구분
            <br />
          </span>
        </dd>
      </dl>
      <dl css={dlStyle}>
        <dt css={dtStyle}>
          <span css={dtSpanStyle}></span>사업자정보
        </dt>
        <dd css={ddStyle} style={{ width: "360px" }}>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              상호명
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              아그리나요트
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              대표자
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>윤현철</span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              사업자번호
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              409-04-43596
              <a
                target="_blank"
                css={businessCheckLinkStyle}
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4090443596"
              >
                사업자 정보 확인
              </a>
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              통신판매번호
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              제2018-전남여수-00200호
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span
              css={subTitleStyle}
              style={{ width: "77px", fontSize: "13px" }}
            >
              이메일
            </span>
            <span style={{ color: "#666", fontSize: "13px" }}>
              ayhc3324@gmail.com
            </span>
          </span>
        </dd>
      </dl>
    </div>
  );
};
