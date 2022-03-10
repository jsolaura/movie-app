import React, { useEffect, useState } from 'react';
import Button from "../../components/Button";

function Hello() {
    // clean up function
    // component 가 없어질 때
    // (event 를 지우거나 할 때 return 으로 destroyed 를 확인)
    useEffect(() => {
        console.log("hi :)")
        return () => console.log("bye :(")
    },[]);

    // function byeFnc() {
    //     console.log("bye :(")
    //
    // }
    // function hiFnc() {
    //     console.log("hi :)")
    //     return byeFnc();
    // }
    // useEffect(hiFnc,[]);

    return (
        <h1>Hello</h1>
    );
}


function Toggle () {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello /> : null}
            <Button onClick={onClick} name={showing ? "Hide" : "Show"} backgroundColor={"#999"} />
        </div>
    );
};

export default Toggle;