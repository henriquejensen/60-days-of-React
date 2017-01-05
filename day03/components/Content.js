import React, { Component } from "react";

import Post from "./Post";

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            textPost: ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onExclude = this.onExclude.bind(this);
    }

    onFormSubmit(evt) {
        evt.preventDefault();

        this.setState({
            posts: this.state.posts.concat(this.state.textPost),
            textPost: ""
        })
    }

    onChange(evt) {
        this.setState({
            textPost: evt.target.value
        })
    }

    onEdit(index) {
        let newPosts = this.state.posts.concat();
        let newText = newPosts[index];
        newPosts.pop(index);

        this.setState({
            posts: newPosts,
            textPost: newText
        })
    }

    onExclude(index) {
        let newPosts = this.state.posts.concat();
        newPosts.pop(index);

        this.setState({
            posts: newPosts,
        })
    }

    render() {
        return (
            <section style={{width:500, margin:"0 auto"}}>
                <form
                    onSubmit={this.onFormSubmit}>

                    <textarea
                        placeholder="What's on your mind?"
                        required
                        value={this.state.textPost}
                        onChange={this.onChange}
                        style={{width:"100%", margin:"10px 0px", height:80, padding:7, resize:"none"}}>
                    
                    </textarea>

                    <button
                        style={{float:"right", clear:"both", backgroundColor:"#4267b2", color:"white", border:"1px solid #4267b2", padding:"3px 16px", margin: "5px 0px"}}
                        type="submit">Post</button>
                </form>

                <div>
                    {this.state.posts.map((post,index) => {
                        return <Post post={post} key={index} index={index} onExclude={this.onExclude} onEdit={this.onEdit} />
                    })}
                </div>
            </section>
        )
    }
}