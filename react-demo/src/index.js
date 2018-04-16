import React from "react";           //--------引入raect
import ReactDOM from "react-dom";    //--------引入DOM
import "./css/index.css"             //--------引入样式表

//------- ant design --------

import DatePicker from '../node_modules/antd/lib/date-picker';  // ------ 加载 JS
import '../node_modules/antd/lib/date-picker/style/css';        // ------ 加载 JS
import "../node_modules/antd/dist/antd.css"                     // ------ 加载 CSS


//------- 一级路由配置 --------

import RouterFrist from "./router/routerFrist"


//------- 配置状态机 --------

import store from "./store/store"        //---------- 引入状态机
import { Provider } from "react-redux";  //---------- 标签包住,拿到所有状态


//------- 此为入口页面 --------

ReactDOM.render((
    <Provider store={store}>
        <RouterFrist />
    </Provider>

), container)


