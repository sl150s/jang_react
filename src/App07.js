//App07.js

import React from "react";

//함수 기반으로 컴포넌트를 만드는 방법

const App =()=>{
    /*
        [ 초기값을 받을 변수(상태값), 상태값을 변경할 함수]
    */

    const [msg, setMsg] = React.useState('초기값');
    const [num, setNum] = React.useState(1);


    console.log(msg);
    console.log(setMsg);

    //버튼을 눌렀을 때 
    const handleClick = () => {
        alert("버튼을 눌렀네요?")
    };
    
    const onChange = (e) => {
        //상태값을 바꿔주는 함수를 이용해서 상태값 바꾸기
        let inputMsg = e.target.value;
        setMsg(inputMsg);
    }

    const onClick = (e) => {
        //상태값으로 관리되는 num에 1을 더한 값으로 상태를 변경한다. 
        let btnMsg = num + 1;
        setNum(btnMsg);
    }
    return(
        <div className="container">
            <h1>함수 기반 컴포턴트</h1>
            <button onClick ={handleClick} className="btn btn-primary">
                눌러보셈</button>
            <input type="text" onChange={onChange}/>
            <p>{msg}</p>
            {/* 아래버튼을 누르면 숫자가 1씩 증가되게 상태값을 관리하면서 동작하기 */}
            <button onClick={onClick}>{num}</button>
        </div>
    )
}

export default App;

/*
======== 함수기반 컴포넌트 작성법 2 - 경고가 나온다 
export default () => {
    return(
        <div className="container">
            <h1>함수 기반 컴포턴트</h1>
        </div>
    );
}
*/

/*
======== 함수기반 컴포넌트 1 - 기본 
const App =()=>{
    return(
        <div className="container">
            <h1>함수 기반 컴포턴트</h1>
        </div>
    )
}

export default App;
*/