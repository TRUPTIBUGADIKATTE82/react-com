// import React from 'react';
// import Home from './Component/Home';
// import Department from './Component/Department';
// import Employee from './Component/Employee';

// function App() {
//   return (
//     <div className="container">
//       <Home />
//       <Department />
//       <Employee />
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';
function App(){
  const [message, setMessage]=useState("hello cse students");
  const handleclick=()=> {
    setMessage("thank you! for the click");
  };
  return(
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Welcome</h1>
      <p>{message}</p>
      <button onClick={handleclick}>Click</button>
    </div>
  );
}
export default App;