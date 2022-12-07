
import { Component } from 'react';
import './App.css';


class App extends Component{
  render(){
    let myName = "김구라"
    return(
      <div className='container'>
      <h1>인덱스 페이지 입니다. </h1>
      {/* myName이라는 변수안에 있는 내용 사용하기  */}
      <p>내이름은 <strong>{myName}</strong></p>
      {/* 
        [ 이벤트 처리 ]
        
        onEventName={화살표 함수}
        onClick={}
        
        처럼 on 다음에 이벤트 명을 camel case로 작성한다
        화살표 함수는 해당 이벤트가 발생하면 자동으로 호출된다
        예) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus... 
      */}
      <button className="btn btn-primary" onClick={()=>{
        alert("버튼을 눌렀네요 ");
      }}>눌러보셈</button>
    </div>
    );
  }
}

export default App;
