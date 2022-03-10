import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ name="name", backgroundColor = "#999", onClick, fontSize="0.9rem", className }) {
    Button.propTypes = {
        name: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string,
        fontSize: PropTypes.string,
    }
    return (
        <button style={{
            backgroundColor: backgroundColor,
            fontSize: fontSize,
        }}      className={styles.btn}
                onClick={onClick}
            >{name}</button>
    )
}