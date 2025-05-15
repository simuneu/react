const Counter = ()=>{  // 함수형 컴포넌트는 대문자로 시작해야 JSX에서 사용할 수 있음.
    const [countVar, countFunc]= React.useState(0)
    const countUp=()=>{
        countFunc(countVar+1)
    }
    const countDown=()=>{
        countFunc(countVar-1)
    }
    
    return (
        <div>
            <div>{countVar}</div>
            <button onClick={countUp}>카운트 올리기</button>
            <button onClick={countDown}>카운트 내리기</button>
        </div>
        //<>이렇게 묶을 수도 있고 프레그먼트라고 함~
        //함수의 반환값은 하나라서 묶은 거임 
    )
}