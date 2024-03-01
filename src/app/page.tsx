"use client";
import React, { useEffect, useRef } from "react";

// pages/index.js
import ToDoList from "../components/TodoList";
// Import and use ToDoList once implemented

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="absolute todo opacity-0 translate-y-[-20px] transition duration-500 ease-in-out top-8">
        <h1 className="text-2xl font-bold mb-2 flex justify-center">
          Candidate 0340 Project 1
        </h1>
        <p className="mb-4 flex justify-center">
          ToDo list using Next.js and Firebase, built with TailwindCSS and GSAP.
        </p>
      </div>
      <div className="todo opacity-0 translate-y-[-20px] transition duration-500 ease-in-out flex flex-col justify-center m-8 md:mx-auto p-12 rounded-2xl border-slate-200 border-4 bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">To-Do List</h1>
        <ToDoList />
      </div>
    </div>
  );
}
