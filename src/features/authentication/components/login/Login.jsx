import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed left-2/4 top-4 sm:top-2/4 z-[10] sm:-translate-y-2/4 -translate-x-2/4 bg-white w-11/12 p-4 sm:w-96 m-auto shadow-[0_0_10px_rgba(0,0,0,0.08),0_0_80px_rgba(0,0,0,0.16)]">
      <form>
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
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              required
            />
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
          </section>
          <section>
            <button
              type="submit"
              className="w-full bg-[#1877f2] text-white py-2 lg:py-3 my-1 rounded">
              Login
            </button>
          </section>
          <section className="text-center">
            <p className="text-sm text-[#1877f2]">Forgot Password?</p>
          </section>
          <section className="text-center">
            <p>or</p>
          </section>
          <section className="text-center">
            <Link
              to="/signup"
              className="bg-[#2F394D] py-1 lg:py-1.5 px-3 text-sm rounded text-white">
              Create New Account
            </Link>
          </section>
        </div>
      </form>
    </div>
  );
};

export { Login };
