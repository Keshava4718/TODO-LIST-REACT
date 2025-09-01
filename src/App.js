import React from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";

export default function App() {
  return (
    <div>
      <Header />
      <div className="main-content container border border-2 w-50 mt-5 rounded-top">
        <TodoInput />
      </div>
    </div>
  );
}
