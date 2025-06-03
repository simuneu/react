const TypescriptExample = ()=>{
    //타입 추론
    let a = "안녕"
    // a=3 string인데 숫자 넣으니 에러

    //타입명시 필요한 경우
    let b :number|string = 1000
    b="안녕"

    let c:number= 10
    let d:boolean = true
    
    //배열
    let e = [1,2,3,4,5]//명시해도 안해도 가능, 근데 명시하면 그 타입만 들어갈 수 있음
    let f = [1,2,3,"4"] 

    //객체
    interface type{
        name:string
        age:number|string
        school:string
        hobby?:string //?:있어도 되고 없어도 되고
    }
    const Iprofile = {
        name:"lee", 
        age:10, 
        school:"highschool"
    } as type //as profile 생략하면 인터페이스랑 연결 안돼서 에러남
    // profile.age="15" 타입이 달라서 문자열로 변경할 수 없음
    Iprofile.hobby="swim"

    //함수 : 어디서 몇 번이든 호출 가능하므로 타입 추론이 안됨(타입 명시 필수)
    function add(x:number,y:number, unit:string):string{ //결과도 명시, 결과는 명시 안돼도 추론이 되긴 하는 듯..
        return x + y + unit
    }
    const result = add(1000, 2000, "원")
    
    //화살표함수
    const add2 = (x:number,y:number, unit:string):string=>{ 
        return x + y + unit
    }
    const result2 = add(1000, 2000, "원")

    //any
    let everything:any='kim' //무엇이든 가능하다(자바스크립트와 동일)
    everything=123
    everything=true

    return <></>
}