import Link from "next/link";

const One = () => {
  return (
    <>
      <div>page One</div>
      {/* react이동방식 : 현 페이지에서 js로 태그만 바꿔치기<SPA single page application) */}
      <Link href="/section04/04-01-02">go to page Two </Link>
      {/* 고전 html 이동방식 :html페이지 새로 접속(느림) MPA*/}
      <a href="/section04/04-01-02"></a>
    </>
  );
};

export default One;
