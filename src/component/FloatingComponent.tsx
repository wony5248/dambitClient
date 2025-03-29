import {
  floatingItemStyle,
  linkIconStyle,
  linkItemStyle,
  linkTextStyle,
} from "style/floatingComponentStyle";
import { themeBackgroundStyle } from "style/globalStyle";

import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";

export type FloatingProps = {
  text: string;
  url?: string;
  children: EmotionJSX.Element;
};

export const FloatingComponent = () => {
  // btn_wrap
  return (
    <ul css={floatingItemStyle}>
      <FloatingListComponent text="전화">
        <svg
          viewBox="-5 -5 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
              fill="#ffffff"
              stroke="#FFA099"
            ></path>
          </g>
        </svg>
      </FloatingListComponent>
      <FloatingListComponent text="톡톡">
        <svg
          fill="#ffffff"
          width="64px"
          height="64px"
          viewBox="0 -0.08 20 20"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M13.93,5.92l-7.79,0h0A1.25,1.25,0,0,0,4.91,7.09l0,8.5a.38.38,0,0,0,.23.35.4.4,0,0,0,.15,0,.35.35,0,0,0,.26-.12c.7-.71,1.93-1.72,2.46-1.72H8l5.92,0h0A1.23,1.23,0,0,0,15.1,13l0-5.8A1.23,1.23,0,0,0,13.93,5.92Zm.42,7a.47.47,0,0,1-.14.33.59.59,0,0,1-.33.14L8,13.38c-.71,0-1.69.75-2.34,1.33l0-7.62a.47.47,0,0,1,.47-.47h0l7.78,0a.44.44,0,0,1,.33.14.48.48,0,0,1,.14.34Z"></path>
          </g>
        </svg>
      </FloatingListComponent>
      <FloatingListComponent text="오시는길">
        <svg
          viewBox="-8 -8 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </FloatingListComponent>
      <FloatingListComponent
        text="예약신청"
        url="https://map.naver.com/p/entry/place/1728293137?lng=127.6728526&lat=34.7446273&placePath=%2Fbooking%3FbookingRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Fbooking%2F6%2Fbizes%2F147337%3Ftheme%3Dplace%26entry%3Dpll%26lang%3Dko%26entry%3Dpll&area=pll&c=15.00,0,0,0,dh"
      >
        <svg
          viewBox="-5 -5 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFA099"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </FloatingListComponent>
    </ul>
  );
};

export const FloatingListComponent = (props: FloatingProps) => {
  return (
    <li>
      <a
        href={props.url}
        target="_blank"
        css={[linkItemStyle, themeBackgroundStyle]}
      >
        <span
          css={linkIconStyle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.children}
        </span>
        <span css={linkTextStyle}>{props.text}</span>
      </a>
    </li>
  );
};
