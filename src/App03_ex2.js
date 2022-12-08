//App03_ex2.js

import { Component } from "react";

class App extends Component{

    state={
        index:0,
        msgs:[]
    }
    render(){
        return(
            <div className="container">
                <h1>동적으로 문서 객체 만들기2</h1>
                {/* 
                    input 요소가 초기화되는 시점에 ref={함수} 안에 있는 함수가 호출되면서
                    input 요소의 참조값이 함수의 매개 변수에 전달된다. 
                    매개변수에 전달된 값을 필드에 저장하면 추후에 필요한 시점에 사용할 수있다.
                */}
                <input type="text" placeholder="메세지 입력" ref={(ref)=>{
                    console.log(ref);
                    //ref에 담긴 참조값을 inputText라는 이름의 필드에 저장하기
                    //js는 필드를 미리 선언할 필요가 없이 만들면서 저장할 수 있다. 
                    this.inputText=ref;
                }} />
                <button onClick={this.handleClick}>전송</button>
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }
    handleClick = () => {
        //입력한 메세지 읽어오기
        let msg = this.inputText.value;
        let newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
        this.setState({
            index:this.state.index+1,
            msgs: newArray
        });
    }
}
export default App;