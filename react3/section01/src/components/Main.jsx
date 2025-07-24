//{}안에는 js 표현식만 가능, 숫자 문자열, 배열값만 렌더링 됨
import "./Main.css";

const Main = () => {
  const user = {
    name: "lee",
    isLogin: true,
  };
  // return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
  if (user.isLogin) {
    return <div className="logIn">로그인</div>;
  } else {
    return <div>로그아웃</div>;
  }
};

export default Main;
