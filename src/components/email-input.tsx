import React, { FormEvent } from "react";
import { CgArrowLongRight } from "react-icons/cg";

const EmailInput = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM SUBMIT :::: ", e);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="join rounded-none border-2 border-white w-full md:w-fit">
        <label
          htmlFor="email"
          className="label join-item uppercase px-8 bg-white text-black font-bold tracking-wide"
        >
          email
        </label>
        <input
          name="email"
          type="email"
          className="input join-item w-full md:w-96"
          placeholder="example@email.com"
        />
      </div>
      <button type="submit" className="flex items-center self-end gap-3">
        <div className="font-bold text-2xl text-[#F9D846] pb-2">
          catch me up
        </div>
        <CgArrowLongRight className="w-14 h-14" color="#F9D846" />
      </button>
    </form>
  );
};

export default EmailInput;
