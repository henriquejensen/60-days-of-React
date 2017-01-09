import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../components/card/Card";
import { answerQuestion } from "../actions/index";

class Question extends Component {
    render() {
        return (
            <Card
                title={this.props.question.title}
                options={this.props.question.options}
                pos={this.props.question.pos}
                onAnswered={this.props.answerQuestion}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.question
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ answerQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);