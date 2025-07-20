import Button from "../components/Button";

const Home = () => {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">홈 페이지</h1>
      <Button onClick={handleClick}>클릭하세요</Button>
    </div>
  );
};

export default Home;
