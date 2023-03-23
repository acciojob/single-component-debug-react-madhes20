import React from "react";
import ReactDOM from "react-dom";

function App(){
          return (
            <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
            )
}

ReactDOM.render(<App/>, document.getElementById('root'));


