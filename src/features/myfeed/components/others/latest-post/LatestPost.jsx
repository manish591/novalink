import React from 'react';

const LatestPost = () => {
  return (
    <section>
      <p className="font">Latest Post Activity</p>
      <div className="mt-3 py-4 px-2 bg-gray-50">
        <div className="flex items-center gap-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="beach"
            />
          </div>
          <div>
            <h2>My Post Title</h2>
            <section className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">
                  favorite_border
                </span>
                <p className="text-[0.625rem]">10K</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">chat</span>
                <p className="text-[0.625rem]">4K</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-lg">
                  ios_share
                </span>
                <p className="text-[0.625rem]">7K</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LatestPost };
