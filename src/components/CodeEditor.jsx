// src/components/CodeEditor.js
import React from "react";
import "./CodeEditor.css";
import useSyntaxHighlighting from "../hooks/useSyntaxHighlighting";

const CodeEditor = () => {
  const initialCode = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`;

  const { sourceCode, handleSourceCodeChange, SyntaxHighlightedCode } =
    useSyntaxHighlighting(initialCode);

  return (
    <div className="code-editor">
      <textarea
        value={sourceCode}
        onChange={handleSourceCodeChange}
        spellCheck="false"
        onSelect={(e) => {
          e.preventDefault();
        }}
      />
      <SyntaxHighlightedCode code={sourceCode} />
    </div>
  );
};

export default CodeEditor;
