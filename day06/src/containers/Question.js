import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../components/card/Card";
import { answerQuestion } from "../actions/index";

class Question extends Component {
    render() {
        return (
            this.props.isCompleted ?
                <div>
                    <h2>Parabens</h2>
                    <p>você acertou {this.props.correct} questões</p>
                </div>

            :
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
    console.log(state.question)
    return {
        question: state.question.question,
        isCompleted: state.question.isCompleted,
        correct: state.question.correct
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ answerQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);