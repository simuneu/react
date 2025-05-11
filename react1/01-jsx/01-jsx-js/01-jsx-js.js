let text = 'Hello, world!';
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ['a', 'b', 'c'];
const imageUrl =
  'https://imgnn.seoul.co.kr/img/upload/2024/08/06/SSC_20240806100040.jpg';

const element = (
  <div>
    <h1>변수 넣기</h1>
    <ul>
      <li>{text}</li>
      <li>{text + 'test'}</li>
    </ul>
    <h1>숫자 및 계산식 넣기</h1>
    <ul>
      <li>{num}</li>
      <li>{num + 15}</li>
    </ul>
    <h1>Boolean, Nullish 값 넣기</h1>
    <ul>
      <li>{true.toString()}</li>
      <li>{false.toString()}</li>
      <li>{String(undefined)}</li>
      <li>{String(null)}</li>
    </ul>
    <h1>Object, Array 넣기</h1>
    <ul>
      {/* <li>{obj}</li> */}
      <li>{arr.join(', ')}</li>
    </ul>
    <h1>주석 넣기</h1>
    <ul>
      <li>{/* 주석입니다. */}</li>
    </ul>
    <h1>태그 속성에 넣기</h1>
    <ul>
      <li>
        <img src={imageUrl} alt="logo" width="500px" />
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
