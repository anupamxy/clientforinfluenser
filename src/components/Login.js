import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';

export const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://influencerkaserver.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        console.log(json);

        // Save the auth token and redirect
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Login Successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='page'>
          <h1 className='heading'>Nerdlogics Digital HQ Welcomes you</h1>
          <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="https://www.questionna.com/wp-content/uploads/2020/11/influencer_publicidad.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">About Us</h5>
      <p className="card-text">
        
Nerdlogics Digital HQ is a Think Tank of IT Services that strives to foster collaboration between digital content creators, companies, and individuals. 
      </p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.Mmxv7kV6PDcwSQbEfxd-mQHaEK&pid=Api&P=0&h=180" alt="Card image cap" />
    
    <div className="card-body">
      <h5 className="card-title">Add Influnser</h5>
      <p className="card-text">
      Our website is designed with your empowerment in mind. It provides you, the user, with a seamless and intuitive platform to effortlessly integrate and showcase your cherished influencers within your profiles.
      </p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://wallpapercave.com/wp/wp7685677.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">List of Influnsers</h5>
      <p className="card-text">
      Within the confines of our user-friendly website, individuals can not only seamlessly add their influencers but also conveniently peruse and manage their personalized roster of influencers, making it a streamlined and engaging experience for all.
      </p>
      
    </div>
  </div>
</div>
<h1 className='view'>please login to continue</h1>

     
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name='password' />
                    </div>
                    <button type="submit" className="button-85">Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

