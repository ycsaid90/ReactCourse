import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//Example 1
// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   return React.createElement('div', null, React.createElement('p', null, 'Hello world, it is ', now.toString()), React.createElement('p', null, a, ' plus ', b, ' is ', a + b));
// };


//Example 2
// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       Greeting app created by <a href='https://github.com/mluukkai'>Yadira</a>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     // Instead of use <div> you can use Fragments empty tag <>
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

//Example 3
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

//Example 4
// const App = () => {
//   const friends = [ 'Peter', 'Maya']
//   return (
//     <div>
//       <p>{friends[0]}</p>
//       <p>{friends}</p>

//     </div>
//   )
// }



  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <p>Course {props.course}</p>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props)

    return (
      <>
        {props.content.map((e,i) => (
        <Part key={i} mp={e} pos={i + 1}/>
        ))}
      </>
    )
  }

  const Part = (props) =>{
    console.log(props)
    return(
      <>
        <p> Part {props.pos}: {props.mp.name}, {props.mp.number} </p>
      </>
    )
  }

  const Total = (props) =>{
    console.log(props)
    return (
      <p>Number of exercises {props.total}</p>
    )

  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const content = [    
    {name: 'Fundamentals of React', number: 10},
    {name: 'Using props to pass data', number: 7},
    {name: 'State of a component', number: 14},
    {name: 'State of a component XCDDFF', number: 22},
    ]
    let total = 0;
    content.forEach(e => {
      total += e.number;
    });

    return (
      <>
        <h2> <Header course = {course} /> </h2>
        <Content content = {content} />
        <Total total = {total}/>
      </>
    )
  }

export default App