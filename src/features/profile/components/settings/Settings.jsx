import React from 'react';
import { logoutUser } from 'features';
import { useDispatch } from 'react-redux';
import { BottomBar, Sidebar } from 'components';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[250px_1fr_300px] lg:m-auto">
      <Sidebar />
      <div className="sm:col-start-2">
        <div className="w-11/12 m-auto py-4">
          <div>
            <section className="flex gap-3">
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => {
                  navigate(-1);
                }}>
                <span className="material-icons-outlined">west</span>
              </button>
              <h1 className="font-bold text-xl">User Settings</h1>
            </section>
            <section className="mt-4 grid gap-4 justify-start">
              <button
                type="button"
                className="border py-1 px-3 mt-4"
                onClick={() => {
                  dispatch(logoutUser());
                }}>
                Logout
              </button>
            </section>
          </div>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export { Settings };
