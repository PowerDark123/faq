import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {questions} from './data'
import { useState } from 'react'
import { Questions } from './components/Questions'

function App() {
  const [data,setData]=useState(questions)
  return (
    <div className="container mt-5 w-75">
      <div className="row justify-content-center">
        <div className="col-md-5 border">
          <h2>Questions and answer about LOGIN</h2>
        </div>
        <div className="col-md-7 border">
          <Questions data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
