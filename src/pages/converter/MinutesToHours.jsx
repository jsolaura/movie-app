import React, {useState} from "react";

function MinutesToHours() {
    const [amount, setAmount] = useState("");
    const [inverted, setInverted] = useState(false);

    const onChange = (e) => {
        setAmount(e.target.value);
    }
    const onInvert = () => {
        reset();
        setInverted((current) => !current);
    };
    const reset = () => setAmount("");


    return (
        <>
            <div>
                <label htmlFor={"minutes"}>Minutes: </label>
                <input id={"minutes"}
                       onChange={onChange}
                       value={inverted ? amount * 60 : amount}
                       placeholder={"Minutes"}
                       type={"number"}
                       disabled={inverted}
                />
            </div>
            <span>to</span>
            <div>
                <label htmlFor={"hours"}>Hours: </label>
                <input id={"hours"}
                       value={inverted ? amount : Math.round(amount / 60)}
                       placeholder={"Hours"}
                       type={"number"}
                       onChange={onChange}
                       disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Turn Back" : "Invert"}</button>
        </>
    )
}
export default MinutesToHours;