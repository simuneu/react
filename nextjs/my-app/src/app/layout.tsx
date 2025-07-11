// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout() {
  return (
    <html lang="en">
      <div>========위로는 레이아웃=========</div>
      <body>{}</body>
      {/* <div>Next js first page</div> */}
      <div>========아래로는 레이아웃=========</div>
    </html>
  );
}

/*
 [Next] 실행 순서
  1. 주소창에 주소 입력
  http://localhost:3000/

  2. 입력된 주소의 폴더 안의page.tsx찾기
  app/page.tsx
    (ex.주소:/mypage면 app/mypage/page.tsx찾기)
  
  3. 해당 페이지 컴포넌트 통째로 props에 넣어서 실행
  <RootLayout children={페이지 컴포넌트}/> - props안에 '페이지 컴포넌트'들어감
  (page.tsx의 Home이 해당)  

*/
