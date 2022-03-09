import React, {useState} from "react";

function KmToMiles() {
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
                <label htmlFor={"km"}>Km: </label>
                <input id={"km"}
                       onChange={onChange}
                       value={inverted ? (amount * 1.609344).toFixed(2) : amount}
                       placeholder={"km"}
                       type={"number"}
                       disabled={inverted}
                />
            </div>
            <span>to</span>
            <div>
                <label htmlFor={"miles"}>Miles: </label>
                <input id={"miles"}
                       value={inverted ? amount : (amount / 1.609344).toFixed(2)}
                       placeholder={"Miles"}
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

export default KmToMiles;