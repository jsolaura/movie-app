import React, {useEffect, useState} from "react";
import MinutesToHours from "./MinutesToHours";
import KmToMiles from "./KmToMiles";
import Button from "../../components/Button";

function Converter() {
    const [index, setIndex] = useState("xx");
    const onSelect = (e) => {
        setIndex(e.target.value);
    }
    return (
        <div className={"container"}>
            <h1>Super Converter</h1>
            <select onChange={onSelect}>
                <option value={"xx"}>Select your units</option>
                <option value={"0"}>Minutes & Hours</option>
                <option value={"1"}>Km & Miles</option>
            </select>
            <hr/>
            { index === "xx" ? "Please select your units" : null }
            { index === "0" ?  <MinutesToHours /> : null }
            { index === "1" ?   <KmToMiles /> : null }
            <hr />
            <Button name={"확인하기"} backgroundColor={"skyblue"} />
        </div>
    )
}

export default Converter;