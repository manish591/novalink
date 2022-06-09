import React from 'react';
import { users } from 'common/data';
import { Story } from './sub/Story';

const Stories = () => {
  return (
    <div className="w-11/12 m-auto mt-1 lg:mt-4 border-b border-[#303337] user-select-none">
      <div className="grid grid-col-1">
        <section>
          <p className="font-semibold text-xs opacity-80 sm:text-sm">
            Featured Stories
          </p>
        </section>
        <section className="overflow-x-auto py-3 pb-4 px-2 overscroll-contain">
          <div className="grid grid-flow-col auto-cols-[5ch] gap-5 sm:gap-8 lg:gap-10">
            <div className="grid gap-2">
              <div className="w-[5ch] h-[5ch] sm:w-[6ch] sm:h-[6ch] lg:w-[7ch] lg:h-[7ch] rounded-full inline-block outline outline-[1.6px] outline-offset-2 outline-[#D9D4C5] outline-dashed">
                <div className="w-full h-full flex justify-center items-center">
                  <span className="material-icons-round text-base">add</span>
                </div>
              </div>
              <p className="text-center text-xs truncate tracking-tighter">
                Share
              </p>
            </div>
            {users.map((item) => {
              return <Story key={item.id} name={item.name} img={item.img} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export { Stories };
