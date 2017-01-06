import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser, fetchUserSuccess, fetchUserError } from "../actions/index";

import User from "../components/User";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onFormSubmit(evt) {
        evt.preventDefault();

        this.props.fetchUser(this.state.user)
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
 
    render() {
        return (
            <section className="container">
                <form className="md-form"
                    onSubmit={this.onFormSubmit}>

                    <input
                        value={this.state.user}
                        onChange={this.onChange}
                        name="user"
                        type="text"
                        placeholder="Type the github user name"/>

                    <button type="submit" className="btn btn-primary">Search</button>
                </form>

                {this.props.user.error ? <div className="alert alert-warning">Usuário não existente</div> : ""}

                {this.props.user.loading ? <img src="../../public/images/loading.gif" width="50" /> : ""}

                <div className="row">

                    {this.props.user.data.length > 0 ? 
                        this.props.user.data.map((user, index) => {
                            return <User user={user} key={index} />
                        })
                    : <div className="alert alert-warning">Nenhum usuário carregado</div>}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => {
      dispatch(fetchUser(user))
            .then((response) => {
                response.error ? dispatch(fetchUserError()) : dispatch(fetchUserSuccess(response.payload.data));
            })
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Content);