import React from "react";

import { connect } from "react-redux"                  //-------  状态

import { a_Add_Todo } from "../store/actions"          //------- 获取actions

// --------引入ant样式组件--------

import { Button } from 'antd';



class TodoList extends React.Component {

    render() {
        return (
            <div>{
                this.props.todos.map((todo, i) => {
                    return <li key={i}>{todo}</li>
                })

            }
                <Button onClick={this.getData.bind(this)}>按钮</Button >
                < button onClick={this.getData.bind(this)}>添加</button>

            </div>
        )

    }

    getData() {

        this.props.dispatch(a_Add_Todo(2))
    }

    btn() {
        console.log(77777)
    }
}


function filter(store) {
    return {
        todos: store.todoList
    }
}

//------- 筛选并导出  -------
export default connect(filter)(TodoList);