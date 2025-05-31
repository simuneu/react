import { useState } from "react"

const Board = ()=>{
    const [writer, setWriter]=useState("")
    const [title, setTitle]=useState("")
    const [content, setContent]=useState("")
    
    const [isActive, setIsActive]=useState(false)
    
    const checkActive=(write, title, content)=>{
        if(write&& title&&content){
            return setIsActive(true)
        }
        setIsActive(false)
    } //early exit
    const onChangeWriter=(event)=>{
        const newWriter = event.target.value
        setWriter(newWriter)
        checkActive(newWriter, title, content)
    }
    const onChangeTitle=(event)=>{
        const newTitle = event.target.value
        setTitle(newTitle)
        checkActive(writer, newTitle, content)
    }
    const onChangeContent=(event)=>{
        const newContent= event.target.value
        setContent(newContent)
        checkActive(writer, title, newContent)
    }
    const onClickSubmit=()=>{
    console.log(writer, title, content)
        alert("게시글 등록 성공")
    }

    const style1 ={
        backgroundColor: isActive===true ? "lightPink":"none"
    }

    return (
        <>
            작성자 : <input type="text" onChange={onChangeWriter}/> <br/>
            제목 : <input type="text" onChange={onChangeTitle}/><br/>
            내용 : <input type="text" onChange={onChangeContent}/><br/>
            <button onClick={onClickSubmit} style={style1}>등록하기</button>
        </>
    )
}

export default Board