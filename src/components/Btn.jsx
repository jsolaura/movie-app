import React from "react";
import PropTypes from "prop-types";

export default function Btn({ name="name", backgroundColor, onClick, fontSize="0.9rem" }) {
    Btn.propTypes = {
        name: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string,
        fontSize: PropTypes.string,
    }
    return (
        <button style={{
            backgroundColor: backgroundColor,
            color: "#fff",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            cursor: "pointer",
            fontSize: fontSize,
        }} onClick={onClick}>{name}</button>
    )
}