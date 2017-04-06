import React from "react";
import "./Input.css";

export const MyInput = (props) => {
    return (
        <div>
            <label className="label-input" htmlFor={props.name}>{props.label}</label>
            <input
                className="my-input"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange} />
            {props.error ? 
                !props.value ? <div className="message-error">{props.message}</div> : ""
            : ""}
        </div>
    )
}

export const MyTextArea = (props) => {
    return (
        <div>
            <label className="label-input" htmlFor={props.name}>{props.label}</label>
            <textarea
                className="my-input my-textarea"
                name={props.name}
                value={props.value}
                onChange={props.onChange}></textarea>
            {props.error ? 
                !props.value ? <div className="message-error">{props.message}</div> : ""
            : ""}
        </div>
    )
}