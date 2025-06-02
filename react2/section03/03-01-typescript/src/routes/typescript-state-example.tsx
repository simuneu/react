import { useState } from "react"
interface IProfile{
        name:string
        age:number|string
        school:string
        hobby?:string //?:있어도 되고 없어도 되고
    }

const TypescriptStateExample =()=>{
    //타입추론
    const [age, setAge]=useState(12)
    // setAge('12');

    //타입 명시
    const [school, setSchool]=useState<string>('')

    //타입명시필요상황
    const [profile, setProfile]=useState<IProfile>({
        name:'lee', 
        age:2, 
        school:'X'
    })
    setProfile({
        name:'kim', 
        age:12, 
        school:'middle'
    })
    return <></>
}