import {
  areaListInfoLiStyle,
  areaSearchKeywordStyle,
  areaSearchStyle,
  footerInnerStyle,
  footerStyle,
  sectionFooterStyle,
} from "style/footerStyle";

export const FooterComponent = () => {
  return (
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
              <li css={areaListInfoLiStyle}>윤헌철</li>
              <li css={areaListInfoLiStyle}>
                전라남도 여수시 웅천남2로 12 이순신마리나 C-Gate
              </li>
              <li css={areaListInfoLiStyle}>사업자등록번호 : 409-04-43596</li>
              <li css={areaListInfoLiStyle}>
                통신판매업 신고번호 : 제2018-전남여수-00200호
              </li>
              <li css={areaListInfoLiStyle}>전화번호 : 010-2648-5000</li>
              <li css={areaListInfoLiStyle}>이메일 : ayhc3324@gmail.com</li>
              <li css={areaListInfoLiStyle}>신고하기</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
