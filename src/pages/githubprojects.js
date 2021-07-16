// Step 1: Import React
// import * as React from 'react'
// import { title } from './githubprojects.module.css'
// Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main className={title}>
//       <title >Home Page</title>
//       <h1  className={title} >Welcome to my Gatsby site!</h1>
//       <p className={title} >I'm making this by following the Gatsby Tutorial.</p>
      
//       </main>
//   )
// }

// Step 3: Export your component
// export default IndexPage

import * as React from 'react'
import  { Component } from 'react';

import fetch from 'node-fetch'
import ReactDOM from 'react-dom'


class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/autsav/repos")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return ([
        <h3>All my repository lists are:</h3>,
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
          ]);
    }
  }
}

export default myComponent;