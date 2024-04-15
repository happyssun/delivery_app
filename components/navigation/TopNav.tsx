"use client";

import { useState } from "react";

export default function TopNav() {
  const [dialog, setDialog] = useState(false);
  return (
    <nav className="max-w-screen-xl">
      <div className="absolute  mt-2 rounded-md overflow-hidden bottom-0 top-0 right-0 left-0 z-20 bg-gray-300/70">
        <div className="bg-white h-screen w-full flex flex-col items-center">
          <div className="flex bg-gray-300 h-1  w-1/12" /> {/* 회색바 */}
          <div className="flex w-full items-center justify-center">
            <h2 className="w-full inline-flex justify-center ml-10 mt-4">
              주소 설정
            </h2>
            <p className="text-sm w-1/12">편집</p>
          </div>
          <div className="w-full p-4 flex">
            <div className="bg-gray-300 px-2 rounded-l-md flex justify-center items-center">
              {/* 주소검색 아이콘 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              className="w-full bg-gray-300 px-2 py-1  rounded-r-md placeholder:px-2 placeholder:m-2 outline-none"
              placeholder="지번, 건물명, 도로명으로 입력"
              type="text"
            />
          </div>
          <div className="flex gap-2 w-full ml-8 justify-start items-center ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </span>
            <p className="text-sm">현재 위치로 설정</p>
          </div>
          <div>우리집 추가</div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center border rounded-b-xl bg-teal-300 pb-1">
        <div className="flex justify-between w-full mt-5 p-2">
          {/* address */}
          <div className="flex">
            <p className="text-white font-semibold truncate max-w-60">
              경기도 안양시 동안구 관평로 정자천로 24-2
            </p>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="flex w-full p-2">
          <span className=" flex w-1/7 pl-3 justify-center items-center inset-4  bg-white rounded-l-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-teal-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full rounded-r-sm p-2 mr-8 placeholder:pl-4 outline-none"
            placeholder="치즈쭈꾸미 나와라!!!"
          />
        </div>
      </div>
    </nav>
  );
}

// truncate는 글자가 많아서 넘어갈때 ...으로 보이게

/* 9번째 줄 <div className="absolute">  => 이 부분은 주소를 검색할때 나머지가 블러처리되게 하기 위해서 인데
  이때 이곳과 연결될 relative가 들어갈 곳은 위의 <nav>가 아니라 전체 layout.tsx파일의 <body> 부분에 들어가게 된다
  nav에 들어가게 되면 topnav만 블러가 되기때문에 전체에 적용되게 하기 위해서는 전체가 적용될 부분을 찾아서 넣어야함
  absolte가 있으면 그 위의 relative를 찾아서 하게 되어있음
*/
