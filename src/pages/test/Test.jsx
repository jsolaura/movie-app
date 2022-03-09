import React, { useState} from "react";
import Btn from "../../components/Btn";
import PropTypes from "prop-types";

function Test() {
    function saveContent() {

    }
    function deleteContent() {
        console.log("delete!")

    }

    return (
        <div>
            <Btn name={"save"} backgroundColor={"green"} onClick={saveContent} fontSize={"1.2rem"}/>
            <Btn name={"delete"} backgroundColor={"red"} onClick={deleteContent}/>
        </div>
    )
}

export default Test;