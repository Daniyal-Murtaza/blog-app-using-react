import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




const App = () => {
  return (
    <div>


    
    </div>
  );
}

export default App;






























































// // *********
// // MY NOTES:
// // *********

// // BEST PRACTICAL EXAMPLE OF STATE IN REACT

// // function LoginForm() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = () => {
// //     if (!email || !password) {
// //       setError("Both fields are required!");
// //     } else {
// //       setError("");
// //       console.log("Logged in with:", { email, password });
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         placeholder="Email"
// //       />
// //       <input
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         placeholder="Password"
// //       />
// //       <button onClick={handleSubmit}>Login</button>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // }



// // array destructuring in Javascript
// // const colors = ["red", "green", "blue"];
// // const [first, second] = colors;

// // console.log(first); // Output: "red"
// // console.log(second); // Output: "green"


// // CALLBACK  CHILD COMPONENT
// // var ChildComponent = (props) => {
// //   return(
// //     <button onClick={() => props.handler("dani")}>show name</button>
  
// //   )

// // }


// // Seperated the above FIRST METHOD to act it like an another component. Just like following the App component syntax
// // function List(){
// //   return(
// //     <div>
// //       {listie.map(function(i){
// //         return <div key={i.objectID}> <br/>
// //           <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
// //           <span>AUTHOR: {i.author}</span> <br/>
// //           <span>COMMENTS: {i.num_comments}</span> <br/>
// //           <span>POINTS: {i.points}</span><br/>
// //           </div>
// //       })}
// //     </div>
// //   );
// // }

// // we can also use above function as an arrow function
// // const List = () => {
// //   return(
// //     <div>
// //       {listie.map(function(i){
// //         return <div key={i.objectID}> <br/>
// //           <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
// //           <span>AUTHOR: {i.author}</span> <br/>
// //           <span>COMMENTS: {i.num_comments}</span> <br/>
// //           <span>POINTS: {i.points}</span><br/>
      

// //           </div>
// //       })}
// //     </div>
// //   );
// // }

// // LEARNING PROPS For passing only variable
// // const List = (props) => {
// //   return(
// //     <div>
// //       {/* Inherited the parents component (App Component Vairable named GUest name here) */}
// //       <span>GUEST NAME: {props.guestName}</span><br/>
// //       {listie.map(function(i){
// //         return <div key={i.objectID}> <br/>
// //           <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
// //           <span>AUTHOR: {i.author}</span> <br/>
// //           <span>COMMENTS: {i.num_comments}</span> <br/>
// //           <span>POINTS: {i.points}</span><br/>
// //           </div>
// //       })}
// //     </div>
// //   );
// // }

// // // LEARNING PROPS FOR OBJECT
// // const List = (props) => {
// //   return(
// //     <div>
// //       {/* Inherited the parents component (App Component Vairable named GUest name here) */}
// //       <span>GUEST NAME: {props.guestName}</span><br/>
// //       {listie.map(function(i){
// //         return <div key={i.objectID}> <br/>
// //           <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
// //           <span>AUTHOR: {i.author}</span> <br/>
// //           <span>COMMENTS: {i.num_comments}</span> <br/>
// //           <span>POINTS: {i.points}</span><br/>
// //           </div>
// //       })}
// //       <br/>
// //       <h1>Comfort Size</h1>
// //       <span>Bed: {props.objectie.bed}</span><br/>
// //       <span>Length: {props.objectie.length}</span><br/>
// //       <span>width: {props.objectie.width}</span><br/>
// //     </div>
// //   );
// // }


// // LEARNING PROPS FOR list
// // const List = (props) => {
// //   return(
// //     <div>
// //       {/* {listie.map(function(i){
// //         return <div key={i.objectID}> <br/>
// //           <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
// //           <span>AUTHOR: {i.author}</span> <br/>
// //           <span>COMMENTS: {i.num_comments}</span> <br/>
// //           <span>POINTS: {i.points}</span><br/>
// //           </div>
// //       })} */}
// //       <br/>

// //       {
// //         props.propsListie.map(
// //           function(i){
// //             return(
// //               <div>
// //                 {i.pauthor} <br/>
// //                 {i.purl} <br/> <br/>

// //               </div>
// //             )
// //           }
// //         )
// //       }

// //     </div>
// //   );
// // }


// // IN DIV OF APP:

//       {/* styling */}
//       {/* <h1 style={h1style}>HELLO WORLD IN {title}</h1> */}

//       {/* html tags and attriutes in react */}
//       {/* <label htmlFor='search'>Search:</label>
//       <input id='search' type='text' onChange={handleEvent}></input> */}

//       {/* Object instance*/}
//       {/* <p>{myobj.greet}! How are youu doing {myobj.name}</p> */}

//       {/* Function Invoke */}
//       {/* <p>my double age is {getAge(22)}</p> */}
      
//       {/* list FIRST METHOD */}
//       {/* function List(){
//         return(
//           <div>
//             {listie.map(function(i){
//               return <div key={i.objectID}> <br/>
//                 <span>TITLE: <a href={i.url}>{i.title}</a></span> <br/>
//                 <span>AUTHOR: {i.author}</span> <br/>
//                 <span>COMMENTS: {i.num_comments}</span> <br/>
//                 <span>POINTS: {i.points}</span><br/>
//                 </div>
//             })}
//           </div>
//         );
//       } */}

//       {/* List SECOND METHOD */}
//       {/* <List guestName="Daniel Guestav"/>
//        */}

//         {/* I want to pass an object to my child component */}
//         {/* <List objectie={objectie}/> */}

//         {/* I want to pass a list to my child component */}
//         {/* <List propsListie={propsListie}/> */}
      

//         {/* REACT STATE - Example 1*/}
//         {/* count: {count}
//         <button onClick={() => setCount(count+1)}>
//         hello
//         </button> */}

//         {/* EXAMPLE 2 */}
//         {/* <input type='text' value={text} onChange={(e)=>setText(e.target.value)}>
        
//         </input>

//         <p>You Entered: {text}</p> */}

//         {/* Example 3 */}
//         {/* <input type='text' value={searchTerm} onChange={handleEachTerm} placeholder='write something...'>

//         </input>

//         <p>YOu are seraching the term <strong>{searchTerm}</strong></p> */}

//         {/* CALLBACK HANDLERS IN JSX */}

//         {/* <ChildComponent handler={myCallBackHandler}/> */}


//         // in js of app:

//           // let title = "React";

//   // handling event value (see inspect)
//   // const handleEvent = (event) => {
//   //   console.log(event.target.value);
//   // }

//   // const [count, setCount] = useState(0);
//   // const [text, setText] = useState("");
//   // const [searchTerm, setSearchTerm] = useState('');

//   // const handleEachTerm = (e) => {
//   //   setSearchTerm(e.target.value);
//   // }

//   // CALLBACK HANDLER - FUNCTION
//   // const myCallBackHandler = (name) => {

//       // console.log("I am Call Back Handler AKA CB-function. HOw are you doing", name);
//       // return(
//       //   <div> WE CANNOT RETURN SOMETHING LIKE THIS IN CALLBACK.. CAN DO CONSOLE LOG OR ALERT
//       //   "I am Call Back Handler AKA CB-function. HOw are you doing", {name}
//       //   </div>
//       // )


// //       global:

// //       // Styling using html tag for which changes to htmlFor in React
// // const h1style = {
// //   color: 'blue'
// // }

// // // Just like objects in javascript
// // const myobj = {
// //   greet: "Konichiwa",
// //   name: "Daniel"
// // }

// // // Functions
// // function getAge(age){
// //   let doubleAge = age * 2;
// //   return doubleAge;
// // }

// // //list
// // const listie = [
// //   {
// //     title: 'React',
// //     url: 'https://reactjs.org/',
// //     author: 'Jordan Walke',
// //     num_comments: 3,
// //     points: 4,
// //     objectID: 0, 
// //   },
// //   {
// //     title: 'Redux',
// //     url: 'https://redux.js.org/',
// //     author: 'Dan Abramov, Andrew Clark',
// //     num_comments: 2,
// //     points: 5,
// //     objectID: 1,

// //   }
// // ]

// // // Passing object as props
// // const objectie = {
// //   bed: "kingsize",
// //   length: "4820cm",
// //   width: "28439cm"

// // }

// // // Passing listie as props
// // const propsListie = [
// //   {
// //     ptitle: 'React',
// //     purl: 'https://reactjs.org/',
// //     pauthor: 'Jordan Walke',
// //     pnum_comments: 3,
// //     ppoints: 4,
// //     pobjectID: 0, 
// //   },
// //   {
// //     ptitle: 'Redux',
// //     purl: 'https://redux.js.org/',
// //     pauthor: 'Dan Abramov, Andrew Clark',
// //     pnum_comments: 2,
// //     ppoints: 5,
// //     pobjectID: 1,

// //   }
// // ]
