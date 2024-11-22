import React from "react";
class MyComponent extends React.Component{ 
    state={
        name:'ân',
        address: 'hcm',
        age: 20
    }
    render(){
        return(
            <div> my first component
            {Math.random()}
            my name is {this.state.name} and i'm from {this.state.address} 
            </div>
        );
    }

}

export default MyComponent;