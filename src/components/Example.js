import React from "react";

import './Example.styl'; 

export default class Example extends React.Component {

    state= {
        
    };

    handleChange= (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="Example">
                <h1>Example</h1>
            </div>
        )
    }

}
