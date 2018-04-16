import React from "react";

import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";


// ---------- 当前页面子路由 ---------------

import Info from "../user/info"          //---------- 信息
import Movie from "../user/movie"        //---------- 电影
import Users from "../user/users"        //---------- 用户


class User extends React.Component {

    render() {

        //---------- Link跳转方式 -----------

       // <li><Link to="/user/info">信息管理</Link></li>

        return (
            <div>
                <ul onClick={this.href.bind(this)} id="userAmd_left">
                    <li>信息管理</li>
                    <li>电影管理</li>
                    <li>用户管理</li>
                </ul>

                <Router>
                    <div id="userAmd_right">
                        <Route path="/user/info" component={Info} />
                        <Route path="/user/movie" component={Movie} />
                        <Route path="/user/users" component={Users} />
                    </div>
                </Router>

            </div>
        )
    }

    //------------ js跳转方式 -------------
    href(e) {
        const { history } = this.props;
        switch (e.target.innerHTML) {
            case "信息管理": history.push("/user/info"); break;
            case "电影管理": history.push("/user/movie"); break;
            case "用户管理": history.push("/user/users"); break;
        }
    }



}

export default User;