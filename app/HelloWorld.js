import React from "react";

class HelloWorld extends React.Component {
    render() {
        return (
            <p ref="greeting">
                Hello World!
            </p>
        );
    }
}

export default HelloWorld;