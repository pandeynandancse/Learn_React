// creating function handleclick 
// function which contains setState method is binded in constructor method.
// when state of parent is changed then whole render method runs again.
// prevState method is used to get the previous value of this.state keys .
mport React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }




    //          handleClick() {
    //                 this.setState(
   //
   //                            return   {count : 1}
  //                    )
  //           }


    
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <ChildComponent count={this.state.count}/>
            </div>
        )
    }
}

export default App
