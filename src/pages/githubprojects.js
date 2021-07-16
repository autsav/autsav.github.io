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
// import { title } from './githubprojects.module.css'
// import { loader } from './githubprojects.module.css'


const  IndexPage= () => <div >
                    <h2> List of all the repository </h2>
                    <ul id="repos"></ul>
                    
                      </div>

fetch("https://api.github.com/users/autsav/repos")
.then(response => response.json())
.then(function(data){
  data.forEach(element => {
    console.log(element.name)
    let ul =  document.getElementById('repos');

    let li = document.createElement('li');

    ul.appendChild(li);
    li.innerHTML= element.name;

    
  });
 
 
})

export default IndexPage