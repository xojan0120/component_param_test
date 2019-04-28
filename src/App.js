import React from 'react';

function App() {
  return (
    <div className="App">
      <Test component={Hello} />
      <Test component={()=><Hello msg="hoge" />} />
    </div>
  );
}

const Test = ({component}) => {
  const Component = component;
  return (
    <div>
      <Component />
    </div>
  );
}

const Hello = (props) => {
  return (
    <div>hello world {props.msg}</div>
  );
}

export default App;
