const App = ()=>{  // 함수형 컴포넌트는 대문자로 시작해야 JSX에서 사용할 수 있음.
    //state만들기
    const [email,setEmail]=React.useState("") //useState<<hook
    const [password,setPassword]=React.useState("")

    const [emailError,setEmailError]=React.useState("")

    const onChangeEmail=(event)=>{
        // console.log(event.target)//작동된 태그
        setEmail(event.target.value)
        
    }
    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    const onClickSignup=(event)=>{
        console.log(email)
        console.log(password)
        if(email.includes("@")===false){
            // alert("이메일을 올바른 형식으로 작성하세요")
            // document.getElementById("emailError").innerText="이메일을 올바른 형식으로 작성하세요"
            //state로 에러 보여주기
            setEmailError("이메일을 올바른 형식으로 작성하세요")
        }else{
            alert("회원가입을 축하합니다.")
        }
    }
    return (
        <div className="appDiv">
            이메일:<input type="text" onChange={onChangeEmail}></input><br/>
            {/* <div id="emailError"></div> */}
            <div>{emailError}</div>
            비밀번호:<input type="password" onChange={onChangePassword}></input><br/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}