//App03.js

import { Component } from "react";

class App03 extends Component{
    render(){
        const names=[];
        /*
        *  배열에 jsx 객체를 여러개 넣기 
        */
        names.push(<li key={0}>김구라</li>);
        names.push(<li key={1}>해골</li>);
        names.push(<li key={2}>원숭이</li>);

        //jsx 객체를 만들어낼 아이템이 배열에 준비되어 있다고 가정하자
        const animals=["강아지","코끼리","고양이"];

        //만들어낼 jsx 객체를 저장할 빈 배열을 만든다.
        const result=[];

        //반복문 돌면서
        for(let i=0; i<animals.length; i++){
            //동물 이름이 출력된 jsx 객체를 만들어서 
            let tmp=<li key={i}>{animals[i]}</li>;
            //미리 준비된 배열에 누적시키기
            result.push(tmp);
        }

        //.map() 메소드 사용하기
        let result2 = animals.map((item,index)=>{
            return<li key={index}>{item}</li>
        });
        
        return(
            
            <div>
                <h3>반복문 돌면서 여러 개의 문서 객체 만들기</h3>
                <ul>
                    {names}
                </ul>
                <h3>동물 목록</h3>
                <ul>
                    {result}
                </ul>
                <h3>테스트 목록</h3>
                <ul>
                    {result2}
                </ul>
            </div>
        );
    }
}

export default App03;