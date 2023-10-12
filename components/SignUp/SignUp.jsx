"use client";
import { useState } from "react";

import Link from "next/link";
import { supabase } from "@/supabase/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const notify = () => {
    toast.info("An email has been sent to you !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      toast.warn("The field must be filled !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (password !== confirmpassword) {
      toast.warn("Review your password !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      try {
        let { error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: "http://localhost:3000/signin",
          },
        });

        if (error) {
          console.error("Error signing up:", error.message);
        } else {
          notify();
        }
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="text-white text-center font-black text-3xl">
        Sign up to OmniGPT
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
        <input
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
          placeholder="Email Address"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <input
          type="password"
          value={password}
          onChange={handleChange(setPassword)}
          placeholder="Password"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <input
          type="password"
          value={confirmpassword}
          onChange={handleChange(setConfirmPassword)}
          placeholder="Confirm Password"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white
        h-12 rounded-[5px] font-black"
        >
          Sign Up
        </button>
      </form>
      <span className="flex justify-center text-white">
        Have an account ? &nbsp;
        <Link href="/signin" className="hover:text-green">
          Sign In
        </Link>
      </span>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
