import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hola {props.name} tu edad es {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Maria";
  const age = "10";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Jose" />
      <Hello name="Sofia" />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
