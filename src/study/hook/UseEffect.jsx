import React, { useEffect, useState } from 'react';
import Button from "../../components/Button";

function UseEffect () {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setCounter((prev) => prev + 1)
    const onChange = (e) => setKeyword(e.target.value);

    // state 가 변화할 때 모든 component 와 code 들이 다시 실행됨을 막기 위함
    // 첫번째 argument 만 실행시키고 싶을 때

    // 전체적으로 한번만 실행
    useEffect(() => {
        console.log("run only once");
    }, [])

    // keyword
    useEffect(() => {
        console.log("run only keyword argument change");

        if (keyword !== "" && keyword.length > 5) {
            console.log("keyword change");
        }
    }, [keyword])

    // counter
    useEffect(() => {
        console.log("run only counter argument change");
    }, [counter])

    // keyword, counter
    useEffect(() => {
        console.log("run only keyword & counter change");
    }, [keyword, counter])

    return (
        <div>
            <input value={keyword} onChange={onChange} type={"text"} placeholder={"search here..."}/>
            <h1>{counter}</h1>
            <Button onClick={onClick} name={"click"} backgroundColor={"#999"} />
        </div>
    );
};

export default UseEffect;