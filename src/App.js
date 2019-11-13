import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const profiles = [
      { nane: "Taro", age: 20 },
      { name: "Hanako", age: 45 },
      {name: "Nari", age: 10}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
