// state can be used with class only, not with function
// state can not be changed but props are immutable.
// parent class' state value can be passed as child component's props value

import React from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}

export default App