const MainPage = ()=>{  // 함수형 컴포넌트는 대문자로 시작해야 JSX에서 사용할 수 있음.
    const[subBox, updateSub]=React.useState(0)
    const updateSubFunc=()=>{
        updateSub(subBox+1)
    }
    const showListPage=()=>{
        document.getElementById("showListPage").style="display:block"
        document.getElementById("showChannelPage").style="display:none"
    }
    const showChannelPage=()=>{
        document.getElementById("showListPage").style="display:none"
        document.getElementById("showChannelPage").style="display:block"

    }
    return (
        <div>
            <div>배너화면입니다.</div>
            <div>
                <button onClick={showListPage}>유튜브 목록</button>
                <button onClick={showChannelPage}>유튜버 채널</button>
            </div>

            <div id="showListPage">
                <ListPage subBox={subBox}/>
            </div>
            <div id="showChannelPage">
                <ChannelPage subBox={subBox} updateSubFunc={updateSubFunc}/>
            </div>
        </div>
    )
}