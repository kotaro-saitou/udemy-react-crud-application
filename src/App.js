import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("I am clicked") }} />
        <Cat />
      </React.Fragment>
    )
  }
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
