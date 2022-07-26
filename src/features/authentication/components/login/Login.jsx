import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'features/authentication/authenticationSlice';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loginErrorData, setLoginErrorData] = useState({
    usernameError: '',
    passwordError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(
    (state) => state.authentication.isUserLoggedIn,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/feed');
    }
  }, [isUserLoggedIn]);

  const handleLoginUser = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({ username: loginData.username, password: loginData.password }),
    );
  };

  const handleGuestLogin = () => {
    setLoginData({ username: 'manish18', password: 'manishdevrani123456' });
    dispatch(
      loginUser({ username: 'manish18', password: 'manishdevrani123456' }),
    );
  };

  const handleValidateUser = (e) => {
    const { name, value } = e.target;
    const isValid = e.target.validity.valid;
    if (name === 'username' && value === '') {
      e.target.setCustomValidity('Please enter your username!');
    } else if (name === 'password' && value === '') {
      e.target.setCustomValidity('Please enter your password!');
    } else {
      e.target.setCustomValidity('');
    }
    if (isValid) {
      setLoginErrorData({ ...loginErrorData, [`${name}Error`]: '' });
    } else {
      setLoginErrorData({
        ...loginErrorData,
        [`${name}Error`]: e.target.validationMessage,
      });
    }
  };

  return (
    <div className="fixed left-2/4 top-4 sm:top-2/4 z-[10] sm:-translate-y-2/4 -translate-x-2/4 bg-white w-11/12 p-4 sm:w-96 m-auto shadow-[0_0_10px_rgba(0,0,0,0.08),0_0_80px_rgba(0,0,0,0.16)]">
      <form onSubmit={handleLoginUser}>
        <div className="grid grid-cols-1 gap-2 lg:gap-4">
          <section>
            <label htmlFor="username" className="sr-only">
              username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="border w-full py-2 lg:py-3 px-1 rounded"
              autoComplete="username"
              value={loginData.username}
              onChange={(e) => {
                setLoginData({ ...loginData, username: e.target.value });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="text-sm text-[red] mt-1">
              {loginErrorData.usernameError}
            </p>
          </section>
          <section>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                className="border w-full py-2 lg:py-3 px-1 rounded"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
                onBlur={handleValidateUser}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2/4 -translate-y-2/4 bg-white z-[2] select-none"
                onClick={() => {
                  setShowPassword((sp) => !sp);
                }}>
                {showPassword ? (
                  <span className="material-icons-outlined text-xl opacity-70 hover:opacity-100">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-icons-outlined text-xl opacity-70 hover:opacity-100">
                    visibility
                  </span>
                )}
              </button>
            </div>
            <p className="text-sm text-[red] mt-1">
              {loginErrorData.passwordError}
            </p>
          </section>
          <section>
            <button
              type="submit"
              className="w-full bg-[#1877f2] text-white py-2 lg:py-3 my-1 rounded opacity-95 hover:opacity-100">
              Login
            </button>
          </section>
          <section className="text-center">
            <p className="text-sm">
              Don&apos;t have an Account?&nbsp;{' '}
              <Link to="/signup" className="text-sm text-[#1877f2]">
                Signup
              </Link>
            </p>
          </section>
          <section className="text-center">
            <p>or</p>
          </section>
          <section className="text-center flex items-center justify-center gap-2">
            <button
              type="button"
              className="bg-gray-100 text-black text-white py-3 px-3 my-1 rounded hover:bg-gray-200 transition duration-300"
              onClick={handleGuestLogin}>
              Login As Guest
            </button>
          </section>
        </div>
      </form>
    </div>
  );
};

export { Login };
