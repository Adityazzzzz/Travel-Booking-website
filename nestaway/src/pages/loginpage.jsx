import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../store/user';
import { toast } from 'react-toastify';
import Loader from '@/components/loader'; 

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setredirect] = useState(false);
  const { setuser } = useContext(UserContext);
  const [variant, setVariant] = useState("spinner");
  const [size, setSize] = useState("md");
  const [loading, setLoading] = useState(false); 

  const loginuser = async (ev) => {
    ev.preventDefault();
    setLoading(true); 
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      setuser(data);
      toast.success('User Log In Successful.');
      setredirect(true);
    } 
    catch (error) {
      toast.error('Login Failed. Try again later.');
    } 
    finally {
      setLoading(false); 
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex justify-center items-center">
          <Loader variant={variant} size={size} />
        </div>
      )}

      <div className="mt-20 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form className="ml-90 mt-4 p-4 max-w-md mx-auto border" onSubmit={loginuser}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="ml-1 mt-1 primary" type="submit">
              Login
            </button>
            <div className="mt-3 text-center text-gray-500">
              Don't have an Account yet?{' '}
              <Link to="/register" className="underline font-semibold text-black">
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
