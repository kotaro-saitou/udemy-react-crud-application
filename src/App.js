import React from 'react';

class App extends React.Component {
  render() {
    const profiles = [
      { nane: "Taro", age: 20 },
      { name: "Hanako", age: 45 },
      {name: "noname"}
    ]
    return (
      <React.Fragment>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index} />
          
          })
        }
      </React.Fragment>
    )
  }
}

const User = (props) => {
  return <div>Hi! I am {props.name}! and {props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
