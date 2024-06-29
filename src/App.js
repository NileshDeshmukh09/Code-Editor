// src/App.js
import React from "react";
import CodeEditor from "./components/CodeEditor";
import imageUrls from "./constants/imageUrls";

const App = () => {
  return (
    // To style a CodeEditor
    <div
      style={{
        backgroundColor: "#282c34",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Fira Code",
      }}
    >
      <img src={imageUrls.monitor2} alt="computer" width={"35%"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }} 
      >
        <h1 style={{ textAlign: "center", color: "#00B496" }}>
          TealFeed Code Editor
        </h1>
        <p
          style={{
            color: "#D4D4D4",
            textAlign: "center",
            width: "80%",
            fontSize: "14px",
          }}
        >
          CodeEditor in React with Textarea & Prism React Renderer for highlighting JSX,
          simplifying code editing and viewing in web apps.
          <span>
            <a
              href="https://github.com/NileshDeshmukh09/Code-Editor"
              target="_blank"
              style={{ color: "#D4D4D4" }}
            >
              Github
            </a>
          </span>
        </p>
        <CodeEditor />
      </div>
    </div>
  );
};

export default App;
