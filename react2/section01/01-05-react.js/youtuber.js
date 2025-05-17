const ChannelPage = (props)=>{
    return (
        <div>
            <div>채널에 오신 것을 환영합니다</div>
            <span>{props.subBox}</span>

            <button onClick={props.updateSubFunc}>구독하기</button>
        </div>
    )
}