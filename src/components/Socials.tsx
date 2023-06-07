import React from "react";

const Socials = ({cn}:{cn?:string}) => {
  return (
    <div className={`flex gap-4 flex-wrap ${cn}`}>
      <button className="btn-white">
        <img src="/assets/facebook.svg" className="w-6" />
      </button>
      <button className="btn-white">
        <img src="/assets/insta.svg" className="w-6" />
      </button>
      <button className="btn-white">
        <img src="/assets/whatsapp.svg" className="w-6" />
      </button>
    </div>
  );
};

export default Socials;
