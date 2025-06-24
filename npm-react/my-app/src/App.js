import Sub2 from "./Sub2";

function App() {
  return (
    <div>
      <Parent />
      <Sub2 />
    </div>
  );
}

function Parent() {
  const name = "cherry";
  const animal = "cat";
  return <Child name={name} animal={animal} />;
}

function Child({ name, animal }) {
  const a = 2;
  const b = 1;
  return (
    <>
      <h2>
        my {animal} name is {name}
      </h2>
      <h2>{8 + 9 ? "정답" : "오답"}</h2>
      {a > b && (
        <h3>
          {a}이 {b}보다 크다.
        </h3>
      )}
      {/* 그냥 문자열로 인식돼서 출력 가능 */}
    </>
  );
}
// 구조분해할당
export default App;
