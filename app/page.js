"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i)=>{
    let copyele = [...mainTask]
    copyele.splice(i,1)
    setMainTask(copyele)
  }
  let renderTask = "No Task Available"

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="mb-5 w-2/3">
            <h4 className="text-xl font-semibold">{t.title}</h4>
            <p className="font-semibold">{t.desc}</p>
          </div>
          <button onClick = {()=>{deleteHandler(i)}} className="bg-red-500 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        My To-Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className=" border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className=" border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Description"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-3 m-5 font-bold rounded">
          Add Task
        </button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-300">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;
