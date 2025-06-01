import{Link} from 'react-router-dom'

const Two = ()=>{
      return (
        <>
            <div>page Two</div>
            <Link to="/one">go to page One </Link>
            <a href = "one"></a>
        </>
    )
}
export default Two;
