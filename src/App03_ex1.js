//App03_ex1.js

import { Component } from "react";

class App extends Component{
    state={
        index:0,
        msgs:[]
    }
    render(){
        return(
            <div className="container">
                <h1>문서 객체 동적으로 만들기</h1>
                <input type="text" onKeyUp={this.handleKeyUp} />
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }
    //input 요소에 keyup이벤트가 일어날 때마다 호출되는 함수
    handleKeyUp=(e)=>{
        console.log(e);
        //입력한 문자열 읽어오기(이벤트가 일어난 input 요소의 value값)
        if(e.keyCode == 13){
            let msg = e.target.value;
            //아래와 같이 배열에 아이템을 추가한다고 해서 UI가 update되지 않는다
            //this.state.masgs.pusy(<li>msg</li>);

            //아이템이 추가된 새로운 배열을 얻어내서 setState() 해야한다.
            let newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
            this.setState({
                msgs:newArray,
                index: this.state.index+1
            });

            // let masgs2 = [];
            // masgs2.push(<li>{msg}</li>);
            // console.log(masgs2);
            // let masgs3 = this.masgs.concat(masgs2);
            // this.setState({msgs:masgs3});
        }
    }
}
export default App;