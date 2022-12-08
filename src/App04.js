//App04.js
import { Component } from "react";

class App extends Component{
    state={
        isRun:false
    }
    render(){
        const myName="kim";
        const myP=<p>p2입니다.</p>
        const isRun = false;
        return(
            <div className="container">
                <h1>jsx 객체 활용하기</h1>
                {<p>p 요소입니다</p>}
                {"kim"}
                <br />
                {myName}
                <br />
                <p>p1입니다</p>
                {myP}
                <h2>아래가 달려요인지 달리지 않아요인지 확인!</h2>
                {true ? <p>달려요</p> : <p>멈춰요</p>}

                <h2>아래가 달려요인지 달리지 않아요인지 확인!</h2>
                {isRun ? <p>달려요</p> : <p>멈춰요</p>}

                <h2>state값 활용</h2>
                달리려면 체크 <input type="checkbox" checked={this.state.isRun} onChange={this.handleChange} />
                {this.state.isRun ? <p>달려요</p> : <p>멈춰요</p>} 

                <h2>아래가 로그인중인지 확인</h2>
                {/* 하나를 출력할지 안할지 결정할거면 && <- 를 활용, true 이기 때문에 출력   */}
                {true && <p>구라님 로그인중.. </p>}

                <h2>아래가 로그인중인지 확인</h2>
                {false && <p>구라님 로그인중.. </p>}

                <h2>아래가 로그인중인지 확인</h2>
                {this.state.isRun && <p>구라님 로그인중.. </p>}
            </div>
        );
    }
    // 체크박스에 체크 상태가 변했을 때 호출되는 함수
    handleChange = (e) => {
        this.setState({isRun:e.target.checked})
        
    }
}
export default App;