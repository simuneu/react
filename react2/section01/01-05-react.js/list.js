const ListPage = (props)=>{
    return (
        <div>
            <div>유튜브 목록</div>
            <div>영상1</div>
            <div>영상2</div>
            <div>영상3</div>
            <div>...</div>

            <span>구독자 수:</span>
            <span>{props.subBox}</span>
        </div>
    )
}