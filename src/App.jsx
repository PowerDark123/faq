import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {questions} from './data'
import { useState } from 'react'
import { Questions } from './components/Questions'

function App() {
  const [data,setData]=useState(questions)
  return (
    <div className="main">
      <div className="container mt-5 w-75">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Questions And Answer About LOGIN</h2>
        </div>
        <div className="col-md-8">
          <Questions data={data} />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
