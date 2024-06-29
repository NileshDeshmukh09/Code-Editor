import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [sourceCode, setSourceCode] = useState(
    `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

`
  );

  const handleCodeChange = (event) => {
    setSourceCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        value={sourceCode}
        onChange={handleCodeChange}
        spellCheck="false"
        onSelect={(e) => {
          e.preventDefault(); 
        }}
      />
      <Highlight theme={themes.github} code={sourceCode} language="jsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre>
            {tokens.map((lineTokens, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line: lineTokens, key: lineIndex })}>
                {lineTokens.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token, key: tokenIndex })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
