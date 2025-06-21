"use client";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = fetch("https://koreanjson.com/posts/1");
    console.log(result);
  };
  const onClickSync = async () => {
    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청</button>
      <br />
      <button onClick={onClickSync}>REST-API(동기) 요청</button>
      <br />
    </div>
  );
}
