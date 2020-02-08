import React from "react";


function ContextProvider() {

    return (<Context.Provider value={this.state}>{this.props.children}</Context.Provider>);
}

export const Context = React.createContext();
export const ContextConsumer = Context.Consumer;
export default ContextProvider;