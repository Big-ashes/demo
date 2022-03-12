import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function Manager() {
    console.log("Render")
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    // xxx setxxx
    // console.log("我是一个写在外面的函数")
    useEffect(() => {
        //     console.log("组件初始化1")
        //     const data=num+1
        // setNum(data)

    }, [])
    useEffect(() => {
        console.log("组件初始化2")


    }, [num1])
    const handle = () => {
        // console.log("按钮被点击了")
        const data = num + 1
        setNum(data)
    }

    const handle1 = () => {
        // console.log("按钮被点击了")
        const data = num1 + 1
        setNum1(data)
    }
    return (
        <div>
            {num}
            <Button type="primary" onClick={handle}>
                按钮
            </Button>
            <Button type="primary" onClick={handle1}>
                按钮2222
            </Button>
            {num1}
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function Manager() {
    console.log("Render")
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    // xxx setxxx
    // console.log("我是一个写在外面的函数")
    useEffect(() => {
        //     console.log("组件初始化1")
        //     const data=num+1
        // setNum(data)

    }, [])
    useEffect(() => {
        console.log("组件初始化2")


    }, [num1])
    const handle = () => {
        // console.log("按钮被点击了")
        const data = num + 1
        setNum(data)
    }

    const handle1 = () => {
        // console.log("按钮被点击了")
        const data = num1 + 1
        setNum1(data)
    }
    return (
        <div>
            {num}
            <Button type="primary" onClick={handle}>
                按钮
            </Button>
            <Button type="primary" onClick={handle1}>
                按钮2222
            </Button>
            {num1}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function Manager() {
    console.log("Render")
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    // xxx setxxx
    // console.log("我是一个写在外面的函数")
    useEffect(() => {
        //     console.log("组件初始化1")
        //     const data=num+1
        // setNum(data)

    }, [])
    useEffect(() => {
        console.log("组件初始化2")


    }, [num1])
    const handle = () => {
        // console.log("按钮被点击了")
        const data = num + 1
        setNum(data)
    }

    const handle1 = () => {
    // console.log("按