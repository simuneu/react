const UseInput = (aProps)=>{  // 함수형 컴포넌트는 대문자로 시작해야 JSX에서 사용할 수 있음.
    console.log(aProps.what)
    console.log(aProps)
    console.log(aProps.a_bag)
    console.log(aProps.b_bag)
    const msg="비밀번호를 입력하세요"
    //
    return (
        <input type="text" placeholder={msg}></input>
    )
}