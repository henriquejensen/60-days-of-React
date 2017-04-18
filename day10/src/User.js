import React, { Component } from "react";
import PropTypes from "prop-types";

import { users } from "./datas";
import { USER_DONT_FOUND } from "./constants";

export default class User extends Component {
    render() {
        const image = users[parseInt(this.props.match.params.id, 10)]
        if (!image) {
            return <div>{USER_DONT_FOUND}</div>
        }

        return (
            <div>
                <h1>{image.user}</h1>
                <div style={{
                        width: '100%',
                        height: 400,
                        background: image.color
                    }}>
                </div>
            </div>
        )
    }
}

User.propTypes = {
    match: PropTypes.object
}