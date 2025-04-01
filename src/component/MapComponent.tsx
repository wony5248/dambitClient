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
  locationBtnDivStyle,
  locationFindLoadStyle,
  locationLinkStyle,
  locationTextStyle,
  subDescriptionStyle,
  subTextStyle,
  subTitleStyle,
} from "style/mapComponentStyle";

interface NaverStaticMapProps {
  width?: number;
  height?: number;
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

const CLIENT_ID = "5v6c7tldgi"; // 네이버 API Client ID

export const MapComponent: React.FC<NaverStaticMapProps> = ({
  width = 1100,
  height = 400,
  latitude = 34.7452342,
  longitude = 127.6724058,
  zoom = 15,
}) => {
  const mapUrl = `https://maps.apigw.ntruss.com/map-static/v2/raster-cors?w=${width}&h=${height}&center=${longitude},${latitude}&level=${zoom}&X-NCP-APIGW-API-KEY-ID=${CLIENT_ID}&markers=color:red|type:d|size:mid|pos:127.6724058%2034.7452342`;

  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span css={uioTilteBulletStyle}></span>오시는길
        </h3>
        <div css={innerContentStyle}>
          <ContentBoxComponent isMargin={true}>
            <img
              src={mapUrl}
              alt="Naver Static Map"
              width={width}
              height={height}
            />
          </ContentBoxComponent>
          <ContentBoxComponent>
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
              <div css={locationBtnDivStyle}>
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
          </ContentBoxComponent>
          <div style={{ marginTop: "24px" }}>
            <DlComponent></DlComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DlComponent = () => {
  return (
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
