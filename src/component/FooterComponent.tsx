import useWindowSize from "hooks/useWindowSize";
import {
  areaListInfoLiStyle,
  areaSearchKeywordStyle,
  areaSearchStyle,
  footerInnerStyle,
  footerStyle,
  sectionFooterStyle,
} from "style/footerStyle";
import logo from "assets/agrinaLogo.png";

export const FooterComponent = () => {
  const width = useWindowSize();
  return width < 768 ? (
    <div css={footerStyle}>
      <div css={sectionFooterStyle}>
        <div css={footerInnerStyle}>
          <div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "128px",
                  height: "128px",
                  borderRadius: "128px",
                  backgroundColor: "#fff",
                  margin: "16px 0",
                }}
              >
                <img width={"128px"} height={"128px"} src={logo}></img>
              </div>
              <li css={areaListInfoLiStyle} style={{ fontWeight: "bold" }}>
                아그리나요트
              </li>
              <li css={areaListInfoLiStyle}>대표자 : 윤현철</li>
              <li css={areaListInfoLiStyle}>전화번호 : 010-2648-5000</li>
              <li css={areaListInfoLiStyle}>이메일 : ayhc3324@gmail.com</li>
              <li css={areaListInfoLiStyle}>
                주소 : 전라남도 여수시 웅천남2로 12 이순신마리나 C-Gate
              </li>
              <li css={areaListInfoLiStyle}>
                사업자등록번호 : 409-04-43596{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4090443596"
                  target="_blank"
                >
                  사업자 정보 확인
                </a>
              </li>
              <li css={areaListInfoLiStyle}>
                통신판매업 신고번호 : 제2018-전남여수-00200호
              </li>
            </ul>
          </div>
          <div css={areaSearchStyle}>
            <a href="https://search.naver.com/search.naver?ie=UTF-8&query=%EC%97%AC%EC%88%98+%EC%95%84%EA%B7%B8%EB%A6%AC%EB%82%98%EC%9A%94%ED%8A%B8%ED%88%AC%EC%96%B4%40">
              <span css={areaSearchKeywordStyle}>여수 아그리나요트투어@</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div css={footerStyle}>
      <div css={sectionFooterStyle}>
        <div css={footerInnerStyle}>
          <div css={areaSearchStyle}>
            <a href="https://search.naver.com/search.naver?ie=UTF-8&query=%EC%97%AC%EC%88%98+%EC%95%84%EA%B7%B8%EB%A6%AC%EB%82%98%EC%9A%94%ED%8A%B8%ED%88%AC%EC%96%B4%40">
              <span css={areaSearchKeywordStyle}>아그리나요트투어@</span>
            </a>
          </div>
          <div>
            <ul style={{ margin: 0, padding: 0 }}>
              <li css={areaListInfoLiStyle}>아그리나요트</li>
              <li css={areaListInfoLiStyle}>윤현철</li>
              <li css={areaListInfoLiStyle}>
                전라남도 여수시 웅천남2로 12 이순신마리나 C-Gate
              </li>
              <li css={areaListInfoLiStyle}>
                사업자등록번호 : 409-04-43596{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4090443596"
                  target="_blank"
                >
                  사업자 정보 확인
                </a>
              </li>
              <li css={areaListInfoLiStyle}>
                통신판매업 신고번호 : 제2018-전남여수-00200호
              </li>
              <li css={areaListInfoLiStyle}>전화번호 : 010-2648-5000</li>
              <li css={areaListInfoLiStyle}>이메일 : ayhc3324@gmail.com</li>
              {/* <li css={areaListInfoLiStyle}>신고하기</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
