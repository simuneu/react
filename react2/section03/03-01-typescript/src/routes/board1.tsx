import { ChangeEvent, useState } from "react"

const Board = ()=>{
    const [writer, setWriter]=useState<string>("")
    const [title, setTitle]=useState<string>("")
    const [content, setContent]=useState<string>("")
    
    const [isActive, setIsActive]=useState<boolean>(false)
    
    const checkActive=(write:string, title:string, content:string)=>{
          if(write !==""&& title!==""&&content!==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    const onChangeWriter=(event:ChangeEvent<HTMLInputElement>)=>{
        const newWriter = event.target.value
        setWriter(newWriter)
        checkActive(newWriter, title, content)
    }
    const onChangeTitle=(event:ChangeEvent<HTMLInputElement>)=>{
        const newTitle = event.target.value
        setTitle(newTitle)
        checkActive(writer, newTitle, content)
    }
    const onChangeContent=(event:ChangeEvent<HTMLInputElement>)=>{
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