import React from 'react';

const Comments = () => {
  return (
    <div>
      <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3 border-b pb-3">
        <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
          <img
            src="https://i.pravatar.cc/150?img=26"
            alt="avatar"
            className="min-w-full rounded-full"
          />
        </div>
        <div>
          <p className="text-sm">
            <span className="text-sm font-bold">manishdevrani77</span>&nbsp;
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error enim
            officia reiciendis beatae provident consectetur, sunt quae itaque
            sit eligendi unde laborum aut inventore. Labore, numquam.
            Repudiandae, qui beatae. Fuga laborum nisi qui doloribus fugiat
            pariatur consequuntur quasi. Dolores atque officiis ex nemo velit
            non, nisi et nesciunt ullam autem.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="avatar"
              className="max-w-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="text-sm font-bold">prachirautela77</span>&nbsp;
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ut!
            </p>
          </div>
        </section>
        <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
            <img
              src="https://i.pravatar.cc/150?img=4"
              alt="avatar"
              className="min-w-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="text-sm font-bold">kank8</span>&nbsp; Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Unde adipisci
              voluptatum sapiente qui odio vel? ut!
            </p>
          </div>
        </section>
        <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
            <img
              src="https://i.pravatar.cc/150?img=4"
              alt="avatar"
              className="min-w-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="text-sm font-bold">kank8</span>&nbsp; Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Unde adipisci
              voluptatum sapiente qui odio vel? ut!
            </p>
          </div>
        </section>
        <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
            <img
              src="https://i.pravatar.cc/150?img=4"
              alt="avatar"
              className="min-w-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="text-sm font-bold">kank8</span>&nbsp; Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Unde adipisci
              voluptatum sapiente qui odio vel? ut!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Comments };
