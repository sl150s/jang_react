//App05.js 

import { Component } from "react";
import "./css/custom.css";

/*
    [ 모듈화된 css를 사용하는 방법 ]
    1. css 파일의 이름에 .moudle.을 추가한다
    2. from과 함께 import해서 사용한다.
    ex) import name(사용하려는 이름) from "./css/xxx.module.css"(경로)
    3.jsx에서 사용하는 방법 
    {name["css파일에 있는 선택자)"]}
    ex) <p className={styles["text-red"]}>p 요소입니다.</p>
    왜이런 문법이 가능할까?
    예시) 
    let mem ={num:1, name:"김구라"}
    mem.num;
    mem["num"];
    오브젝트 타입의 value값을 가져올 때 위와 같은 방법으로도 
    가져올 수 있다.
    css의 선택자 이름에 '-'의 대쉬가 있다면
    그냥 적었을 때 js에서 빼기로 인식되기 때문에 
    styles["text-red"]와 같은
    방식으로 가져온다. 

*/

import styles from "./css/custom.module.css"

class App extends Component{
    state={
        obj:{
            color:"blue",
            border:"1px solid red",
            backgroundColor:"yellow"    
        },
        isYellow:false
    }
    render(){
        const classes="box bg-yellow";
        return(
            <div>
                <h1>css 적용 예제</h1>
                <button onClick={()=>{
                    this.setState({
                        obj:{...this.state.obj, backgroundColor:"pink"}
                        //setState는 기존의 값을 새로운 값으로 덮어씀. (기존의 값이 없어짐)
                    })
                }}>배경색 바꾸기</button>
                <p style={this.state.obj}>p1 입니다.</p>
                <div className="box bg-pink">box</div>
                {/* 
                    jsx에서 { 중괄호 내부 } 
                    중괄호 내부는 javascript에서 사용하는 데이터가 참조 되어야한다.

                    ex) number, string, object, array  function
                    number => 10, 20, 30... 
                    string => "abcd"..
                    object => {key:value}
                    array => [value1, vaule2, ..]
                    function => () => {}

                    -데이터를 즉석에서 만들면서 참조할수도 있고, 이미 만들어진 데이터를 참조할 수도 있다.
                    
                */}
                <div className={"box bg-pink"}>box2</div>
                <div className={classes}>box3</div>
                <div className={`box bg-pink`}>box4</div>
                <div className={`box ${true ? "bg-yellow" :""}`}>box5</div>
                <div className={`box ${false ? "bg-yellow" :""}`}>box6</div>
                <div className={`box ${true && "bg-yellow"}`}>box7</div>
                <div className={`box ${this.state.isYellow ? "bg-yellow" : ""}`} onClick={()=>{
                    this.setState({
                       isYellow:!this.state.isYellow 
                    });
                }}>box8</div>
                <p className={styles["text-red"]}>p 요소입니다.1</p>
                <p className={styles["text-bold"]}>p 요소입니다.2</p>
                <p className={`${styles["text-red"]} ${styles["text-bold"]}`}>p 요소입니다.3</p>
            </div>



                
        );
    }
}
export default App;