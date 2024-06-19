// src/components/CodeEditor.tsx

import React, { useRef, useEffect } from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';

const CodeEditor: React.FC = () => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    monaco.editor.defineTheme('customTheme', {
      base: 'vs', // Peut être 'vs', 'vs-dark' ou 'hc-black'
      inherit: true, // Inherit base theme
      rules: [],
      colors: {
        'editor.background': '#F2EFE5',
      },
    });

    if (editorRef.current) {
      const editor = editorRef.current.editor;
      monaco.editor.setTheme('customTheme');
    }
  }, []);

  return (
    <div className="code-editor">
      <MonacoEditor
        width="100vh"
        height="100%"
        language="javascript"
        theme="customTheme"
        options={{
          selectOnLineNumbers: true,
        }}
        editorDidMount={(editor) => {
          editorRef.current = { editor };
          monaco.editor.setTheme('customTheme');
        }}
      />
    </div>
  );
};

export default CodeEditor;
