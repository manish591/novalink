import React from 'react';

const Login = () => {
  return (
    <div className="bg-white w-11/12 p-4 sm:w-96 m-auto lg:shadow-[0_0_10px_rgba(0,0,0,0.08),0_0_80px_rgba(0,0,0,0.16)]">
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
            />
          </section>
          <section>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border w-full py-2 lg:py-3 px-1 rounded"
            />
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
            <button
              type="button"
              className="bg-[#2F394D] py-1 lg:py-1.5 px-3 text-sm rounded text-white">
              Create New Account
            </button>
          </section>
        </div>
      </form>
    </div>
  );
};

export { Login };
