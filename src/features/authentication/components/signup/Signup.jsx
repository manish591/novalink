import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from 'features/authentication/authenticationSlice';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });
  const [signupErrorData, setSignupErrorData] = useState({
    emailError: '',
    nameError: '',
    usernameError: '',
    passwordError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(
    (state) => state.authentication.isUserLoggedIn,
  );
  const navigate = useNavigate();

  const handleUserSingup = (e) => {
    e.preventDefault();
    dispatch(signupUser(signupData));
  };

  const handleValidateUser = (e) => {
    const { name, value } = e.target;
    const isValid = e.target.validity.valid;
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/;
    if (name === 'username' && value === '') {
      e.target.setCustomValidity('Please enter your username!');
    } else if (name === 'password' && value === '') {
      e.target.setCustomValidity('Please enter your password!');
    } else if (name === 'email' && value === '') {
      e.target.setCustomValidity('Please enter your email!');
    } else if (name === 'name' && value === '') {
      e.target.setCustomValidity('Please enter your full name!');
    } else if (name === 'password' && !value.match(pattern)) {
      e.target.setCustomValidity(
        'Your password must be at least 8 characters long and should not exceed more than 20 characters, contain at least one number, 1 speacial character and have a mixture of uppercase and lowercase letters.',
      );
    } else {
      e.target.setCustomValidity('');
    }
    if (isValid) {
      setSignupErrorData({ ...signupErrorData, [`${name}Error`]: '' });
    } else {
      setSignupErrorData({
        ...signupErrorData,
        [`${name}Error`]: e.target.validationMessage,
      });
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/feed');
    }
  }, [isUserLoggedIn]);

  return (
    <div className="fixed left-2/4 top-4 sm:top-2/4 z-[10] sm:-translate-y-2/4 -translate-x-2/4 bg-white w-11/12 p-4 sm:w-96 m-auto shadow-[0_0_10px_rgba(0,0,0,0.08),0_0_80px_rgba(0,0,0,0.16)]">
      <form onSubmit={handleUserSingup}>
        <div className="grid grid-cols-1 gap-2 lg:gap-4">
          <section>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="border w-full py-2 lg:py-3 px-1 rounded"
              autoComplete="email"
              value={signupData.email}
              onChange={(e) => {
                setSignupData({ ...signupData, email: e.target.value });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="text-sm text-[red] mt-1">
              {signupErrorData.emailError}
            </p>
          </section>
          <section>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="border w-full py-2 lg:py-3 px-1 rounded"
              autoComplete="name"
              value={signupData.name}
              onChange={(e) => {
                setSignupData({ ...signupData, name: e.target.value });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="text-sm text-[red] mt-1">
              {signupErrorData.nameError}
            </p>
          </section>
          <section>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="border w-full py-2 lg:py-3 px-1 rounded"
              autoComplete="username"
              value={signupData.userName}
              onChange={(e) => {
                setSignupData({ ...signupData, username: e.target.value });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="text-sm text-[red] mt-1">
              {signupErrorData.usernameError}
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
                minLength="8"
                id="password"
                placeholder="Password"
                className="border w-full py-2 lg:py-3 px-1 rounded"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
                value={signupData.password}
                onChange={(e) => {
                  setSignupData({ ...signupData, password: e.target.value });
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
              {signupErrorData.passwordError}
            </p>
          </section>
          <section>
            <button
              type="submit"
              className="w-full bg-[#1877f2] text-white py-2 lg:py-3 my-1 rounded">
              Signup
            </button>
          </section>
          <section className="text-center">
            <p>Already have a account?</p>
          </section>
          <section className="text-center">
            <Link
              to="/login"
              className="bg-[#2F394D] py-1 lg:py-1.5 px-3 text-sm rounded text-white">
              Login
            </Link>
          </section>
        </div>
      </form>
    </div>
  );
};

export { Signup };
