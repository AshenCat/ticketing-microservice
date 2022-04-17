import {useState} from 'react'
import Router from 'next/router'
import useRequest from '../../hooks/use-request';

function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {doRequest, errors} = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {email, password},
    onSuccess: () => Router.push('/')
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  }

  return (
    <form onSubmit={onSubmit}>
        <h1>signin</h1>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="text" className="form-control" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        {errors}
        <button className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default signin