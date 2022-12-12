//index.js

import Home from './Home';
import Game from './Game';
import Study from './Study';

//object에 담은 다음 
let obj = {Home,Game,Study}

//한번에 default로 export 해주면 사용할 때 폴더명으로 import 해서 사용할 수 있다. 
export default obj;