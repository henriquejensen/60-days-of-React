import React, { Component } from "react";

export default class Post extends Component {
    render() {
        return (
            <div style={{width:"100%", border:"2px solid #ccc", margin:"15px 0", clear:"both", background:"white", position:"relative"}}>
                <p style={{padding:"5px"}}>{this.props.post}</p>

                <i
                    style={{position:"absolute", top:0, right:30, color:"blue"}}
                    className="fa fa-pencil"
                    onClick={() => this.props.onEdit(this.props.index)}
                    aria-hidden="true">
                </i>

                <i
                    style={{position:"absolute", top:0, right:10, color:"red"}}
                    className="fa fa-times"
                    onClick={() => this.props.onExclude(this.props.index)}
                    aria-hidden="true">
                </i>
            </div>
        )
    }
}