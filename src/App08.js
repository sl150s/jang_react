//App08.js

import React, { Component } from "react";

/*함수 기반 ========================================== */
/*const App = () => {
    //이 함수는 UI가 업데이트 될때마다 여러번 호출되는 함수이다.

    //상태값으로 관리될 cafeList는 jsx로 구성된 글 목록을 담고 있는 배열 
    const [cafeList, setCafeList] = React.useState([]);

    //아래서 리턴한 UI의 초기화 작업(준비작업)이 끝났을 때, 원하는 동작이 있으면 
    //아래의 useEffect() 안에 전달한 함수안에서 작업을 하면된다.
    React.useEffect(()=>{
        //fetch 함수를 이용해서 tomcat 서버로부터 json 문자열을 응답받는다. 
        fetch("http://localhost:8888/Step04_Final/cafe/ajax_list.jsp")
        .then((res)=>{
            //json 문자열이 응답되기 때문에 res.json()을 리턴해준다. 
            return res.json();
        })
        .then((data)=>{
            //data는 array이다. 
            //console.log(data);
            //hint : 배열의 map 함수를 활용해보세요. 
            let newArray = data.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.writer}</td>
                        <td>{item.Title}</td>
                        <td>{item.viewCount}</td>
                        <td>{item.regdate}</td>
                    </tr>
                );
            });
            setCafeList(newArray);
        })
    }, []);

    return(
        <div className="container">
            <h1>글 목록입니다. </h1>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>
            </table>
        </div>
    )
}
*/


/*클래스 기반 ==================================================================*/
class App extends Component {
    //상태값
    state = {
        cafeList:[]
    }
    //컴포넌트가 준비 되었을때 호출되는 함수 
    //부모 메소드를 오버라이드(재정의)하는 느낌 = 함수의 useEffect 기능과 거의 비슷하다.
    componentDidMount = () => {
        //fetch 함수를 이용해서 tomcat 서버로부터 json 문자열을 응답받는다. 
        fetch("http://localhost:8888/Step04_Final/cafe/ajax_list.jsp")
        .then((res)=>{
            //json 문자열이 응답되기 때문에 res.json()을 리턴해준다. 
            return res.json();
        })
        .then((data)=>{
            //data는 array이다. 
            //console.log(data);
            //hint : 배열의 map 함수를 활용해보세요. 
            let newArray = data.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.writer}</td>
                        <td>{item.Title}</td>
                        <td>{item.viewCount}</td>
                        <td>{item.regdate}</td>
                    </tr>
                );
            });
            this.setState(newArray);
        })
    }
    render(){
        return(
            <div className="container">
            <h1>글 목록입니다. </h1>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cafeList}
                </tbody>
            </table>
        </div>
        )
    }
}


export default App;

