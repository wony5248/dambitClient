import {
  contentBodyStyle,
  contentContainerStyle,
  innerContentStyle,
  uioTilteBulletStyle,
  uioTitleStyle,
} from "style/contentComponentStyle";
import {} from "style/topNavBarStyle";

import {
  captionStyle,
  colGroupStyle,
  iconRequiredStyle,
  inputTextStyle,
  lstGuideLiStyle,
  lstGuideStyle,
  tableTypeStyle,
} from "style/reservationComponentStyle";

export const FaqComponent = () => {
  // fc_container
  return (
    <div css={contentContainerStyle}>
      <div css={contentBodyStyle}>
        <h3 css={[uioTitleStyle]}>
          <span
            style={{ marginBottom: "0px" }}
            css={uioTilteBulletStyle}
          ></span>
          예약신청
        </h3>
        <div>
          <div css={innerContentStyle}>
            <div className="uio_box">
              <div className="uio_content">
                <ul css={lstGuideStyle}>
                  <li css={lstGuideLiStyle}>
                    아래의 양식에 따라 글을 작성해주세요
                  </li>
                  <li css={lstGuideLiStyle}>
                    예약신청후 담당자가 확인하여 연락드립니다.
                  </li>
                  <li css={lstGuideLiStyle}>
                    문의전화는 010-2648-5000 입니다.
                  </li>
                </ul>
                <table css={tableTypeStyle}>
                  <caption css={captionStyle}></caption>
                  <colgroup css={colGroupStyle}>
                    <col style={{ width: "160px" }} />
                    <col />
                  </colgroup>
                  <tbody css={innerContentStyle}>
                    <tr className="name">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_name">성명</label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_name"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="phone">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_phone">연락처</label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_phone"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="applicationInfo">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_applicationInfo">
                          참여경로
                        </label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_applicationInfo"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="date">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_date">승선일자</label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_date"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="reserveInfo">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_reserveInfo">
                          승선인원, 예약시간
                        </label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_reserveInfo"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="interestedTour">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_interestedTour">
                          관심투어
                        </label>
                        <span css={iconRequiredStyle}>필수입력항목</span>
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_interestedTour"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="service">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_service">추가서비스</label>
                        {/* <span css={iconRequiredStyle}>필수입력항목</span> */}
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_service"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                    <tr className="talk">
                      <th
                        scope="row"
                        style={{
                          paddingTop: "40px",
                          padding: "0px 30px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <label htmlFor="u_content_talk">남기고 싶은 말</label>
                        {/* <span css={iconRequiredStyle}>필수입력항목</span> */}
                      </th>
                      <td
                        style={{
                          padding: "20px 30px",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          id="u_content_talk"
                          css={inputTextStyle}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
