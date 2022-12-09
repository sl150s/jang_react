//App04_ex2.js

import { Component } from "react";

class App extends Component{
    render() {
        let menu = [
            {id:1, name:"김밥"},
            {id:2, name:"라면"},
            {id:3, name:"비빔밥"},
            {id:4, name:"떡볶이"},
            {id:5, name:"만두"},
        ]
        let list = menu.map((item)=>{
            //item은 {id:x, name:x}형태의 object이다.
            return (
                <label key={item.id}>
                    {item.name}
                    <input type="checkbox" />
                </label>
            );
        })
        return (
            <div className="container">
                <h3>먹고싶은 분식 메뉴를 체크하세요</h3>
                <p>{list}</p>

                <h3>선택된 메뉴 목록입니다.</h3>
                <ul>
                    <li>라면</li>
                    <li>만두</li>
                </ul>
                {/* <label>
                    {menu[0].name}
                    <input type="checkbox" />
                </label>
                <label>
                    {menu[1].name}
                    <input type="checkbox" />
                </label> */}
            </div>
        );
    }
   
}
export default App;