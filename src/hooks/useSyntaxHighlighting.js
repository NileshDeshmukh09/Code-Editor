// src/hooks/useSyntaxHighlighting.js
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const useSyntaxHighlighting = (
  initialCode,
  language = "jsx",
  theme = themes.github
) => {
  const [sourceCode, setSourceCode] = useState(initialCode);

  const handleSourceCodeChange = (event) => {
    setSourceCode(event.target.value);
  };

  const SyntaxHighlightedCode = ({ code }) => (
    <Highlight theme={theme} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre>
          {tokens.map((lineTokens, lineIndex) => (
            <div
              key={lineIndex}
              {...getLineProps({ line: lineTokens, key: lineIndex })}
            >
              {lineTokens.map((token, tokenIndex) => (
                <span
                  key={tokenIndex}
                  {...getTokenProps({ token, key: tokenIndex })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return {
    sourceCode,
    handleSourceCodeChange,
    SyntaxHighlightedCode,
  };
};

export default useSyntaxHighlighting;
