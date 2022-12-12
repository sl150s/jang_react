//App09.js

//import
import React from "react";
import util from "./my_modules/util"
import {num,name, isWoman, myLongInformation as info} from './my_modules/member'

//폴더명으로 import 해서 사용하면 index.js에서 ixport 해준 자원을 사용할 수 있다.
import modules from './your_modules';

const App = () => {
    
    util.drill();
    util.sender("hi");

    console.log(num);
    console.log(name);
    console.log(isWoman);
    console.log(info);
    console.log(info.num);
    console.log(info.name);
    console.log(info.isWoman);

    modules.Home();
    modules.Game();
    modules.Study();

    return(
        <div className="container">
            <h3>모듈 import, export 테스트</h3>
        </div>
    )
}
//export
export default App;