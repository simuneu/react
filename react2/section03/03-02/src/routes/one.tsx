import{Link} from 'react-router-dom'

const One = ()=>{
    return (
        <>
            <div>page One</div>
            {/* react이동방식 : 현 페이지에서 js로 태그만 바꿔치기<SPA single page application) */}
            <Link to="/two">go to page Two </Link>
            {/* 고전 html 이동방식 :html페이지 새로 접속(느림) MPA*/}
            <a href = "two"></a>
        </>
    )
}

export default One;