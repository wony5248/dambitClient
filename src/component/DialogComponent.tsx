import {
  dialogBottomStyle,
  dialogBtnStyle,
  dialogContainerStyle,
  dialogContentInnerStyle,
  dialogContentStyle,
  dialogContentTopStyle,
  dialogContentTopTextStyle,
  strongStyle,
  tsStyle,
  ttStyle,
} from "style/dialogComponentStyle";

export interface ChildProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DialogComponent = (props: ChildProps) => {
  return (
    <div css={dialogContainerStyle(props.isOpen)}>
      <div css={dialogContentTopStyle}>
        <h1 css={dialogContentTopTextStyle}>전화번호</h1>
      </div>
      <div css={dialogContentStyle}>
        <div css={dialogContentInnerStyle}>
          <div css={ttStyle}>" 여수 아그리나요트투어 " 입니다.</div>
          <div css={ttStyle}>
            <strong css={strongStyle}>0507-1480-5000</strong>
          </div>
          <div css={tsStyle}>전화연결은 모바일에서 가능합니다.</div>
        </div>
      </div>
      <div css={dialogBottomStyle}>
        <a
          href="#"
          css={dialogBtnStyle}
          onClick={(e) => {
            e.preventDefault();
            props.setIsOpen(false);
          }}
        >
          확인
        </a>
      </div>
    </div>
  );
};
