import React from "react";               //-------- 引入react
import { createStore } from "redux";     //-------- 创建状态机

import reducers from "./reducers"        //-------- 获取reducers

let store = createStore(reducers);       //-------- 状态机集合

export default store;




