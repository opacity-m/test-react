import React from "react";



//-------- 路由 --------
import {
    HashRouter as Router,
    Route
} from "react-router-dom";


//------------ 组件面板 ----------------

import TodoList from "../todoList/todoList"            //-------- 任务列表
import Shopping from "../shoppingCar/shoppingCar"      //-------- 购物面板



//------------ 二级面板 ----------------  

import User from "./user"                             //-------- 用户管理



class RouterFrist extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route  path="/user" component={User} />
                    <Route path="/shoppingCar" component={Shopping} />
                    <Route exact path="/" component={TodoList} />
                </div>

            </Router>

        )

    }
}


export default RouterFrist;


