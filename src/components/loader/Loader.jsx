import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <section className="w-[60px] h-[60px] bg-[white] rounded-full flex items-center justify-center shadow-[0_0_6px_rgba(0,0,0,20%)]">
        <div className="w-[75%] h-[75%] border-4 border-[hotpink] rounded-full animate-spin border-l-[transparent]" />
      </section>
    </div>
  );
};

export { Loader };
