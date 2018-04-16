import React from "react"



//------- 添加任务到任务列表 ---------

export function a_Add_Todo(val) {
    console.log()
    return {
        type: "A_ADD_TODO",
        val
    }
}

