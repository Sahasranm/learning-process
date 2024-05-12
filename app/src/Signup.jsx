import { useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result => {console.log(result)
        navigate('/login')
    })
    .catch(err=> console.log(err))

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
   <div className ="mb-3">
       <label htmlFor="email">
        <strong>name</strong>
        </label>
        <input
        type="text" 
        name="name"
        className="form-control rounded-0"
        onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div className ="mb-3">
       <label htmlFor="email">
        <strong>email</strong>
        </label>
        <input
        type="email" 
        name="email"
        className="form-control rounded-0"
        onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className ="mb-3">
       <label htmlFor="email">
        <strong>password</strong>
        </label>
        <input
        type="password" 
        name="password"
        className="form-control rounded-0"
        onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button type="Submit" className="btn btn-success w-100 rounded-0">register</button> 
    </form><br></br>
  
     <Link to="/login" className="btn btn-success w-100 rounded-0">login</Link>
    </div>
  );
}

export default Signup;
