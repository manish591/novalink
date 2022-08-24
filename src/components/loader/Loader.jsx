import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <section className="w-[45px] h-[45px] bg-[white] rounded-full flex items-center justify-center shadow-[0_0_6px_rgba(0,0,0,20%)]">
        <div className="w-[75%] h-[75%] border-[3px] border-[hotpink] rounded-full animate-spin border-l-[transparent]" />
      </section>
    </div>
  );
};

export { Loader };
