//FriendComponent.js
import { Component } from "react";

class FriendComponent extends Component{
    render(){
        // 부모 component에서 전달된 props
        const friends=this.props.friends;
        //배열에 저장된 아이템을 이용해서 jsx 배열을 얻어낸다. 
        const list = friends.map((item, index)=>{
            return (
                <li key={index}>
                    {item} 
                    <button onClick={()=>{
                        let newName=prompt(item+"의 새로운 이름을 입력하세요.");
                        this.props.updateClicked({newName,index});
                    }}>
                        수정
                    </button>
                    <button onClick={()=>{
                        //props로 전달된 deleteClicked라는 함수 호출하면서 인덱스값 전달하기
                        this.props.deleteClicked(index)
                    }}>
                        삭제
                    </button>
                </li>
            );
        });
        return(
            <ul>
                {list}
            </ul>
        )
    }
}
export default FriendComponent;
//FriendComponent를 import하면 FriendComponent클래스를 내보낸다는뜻 