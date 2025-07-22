//{}안에는 js 표현식만 가능, 숫자 문자열, 배열값만 렌더링 됨

const Main = () => {
  const number = 10;
  return (
    <>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    </>
  );
};

export default Main;
