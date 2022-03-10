import React, { useState} from "react";
import Button from "../../components/Button";

function Test() {
    function saveContent() {

    }
    function deleteContent() {
        console.log("delete!")

    }

    return (
        <div>
            <Button name={"save"} backgroundColor={"green"} onClick={saveContent} fontSize={"1.2rem"}/>
            <Button name={"delete"} backgroundColor={"red"} onClick={deleteContent}/>
        </div>
    )
}



export default Test;