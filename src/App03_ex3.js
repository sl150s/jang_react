//App03_ex3.js

import { Component } from "react";
import FriendComponent from "./components/FriendComponent";

class App extends Component{
    state={
        friends:["김구라","해골","원숭이"]
    }

    render(){
        return(
            <div className="container">
                <h1>자식 component 사용 예제</h1>
                <FriendComponent friends={this.state.friends} deleteClicked={this.deleteClicked}
                updateClicked={this.updateClicked}
                />
            </div>
        );
    }
    deleteClicked = (idx) => {
        console.log(idx+"인덱스 아이템을 삭제합니다.");
        //this.state.friends 배열에서 idx 인덱스를 제외한 새로운 배열 얻어내기
        let newArray = this.state.friends.filter((item,index)=>{
            return index !== idx; // index, idx 값이 같은 경우 false 이므로 삭제된다
        });
        this.setState({friends:newArray})
    }

    updateClicked=(data)=>{
        //data는 {index:xxx, newName:xxx} 모양이다. 
        let newArray=this.state.friends.map((item,index)=>{
            return data.index === index ? data.newName : item;
        });
        this.setState({friends:newArray});
    }
}
export default App;