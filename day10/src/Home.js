import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { users } from "./datas";

class Home extends Component {
    render() {
        return (
            <div style={{ textAlign:"center", margin:"0 auto", width:1000 }}>
                <h2>Usuários do sistema</h2>
                <div style={{ display:"flex" }}>
                    {users.map(i => (
                    <Link
                        key={i.id}
                        to={{
                            pathname: `/img/${i.id}`,
                            state: { modal: true }
                        }}
                        style={{ margin:"0 auto" }}
                    >
                        <div style={{
                            width: 50,
                            height: 50,
                            background: i.color
                        }}/>
                        <p>{i.user}</p>
                    </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home;