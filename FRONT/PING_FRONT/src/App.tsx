// src/App.tsx

import React, { useState, useRef } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor.tsx';
import Editor from "@monaco-editor/react"
import { HStack, Box } from "@chakra-ui/react";
import Output from './components/OutputConsole.tsx';



const App: React.FC = () => {
  const files = {
    "script.py": 
    {
      name: "script.py",
      language: 'python',
      value: 'print("OUIIII")'
    },
    "index.js":
    {
      name: "index.js",
      language: 'javascript',
      value: 'DOCTYPE'
    }
  
  }
  const [fileName, setFileName] = useState("script.py");
  const file = files[fileName];
  const editorRef = useRef(null);
  
  function handleEditorDidMount(editor,monaco)
  {
    editorRef.current = editor;
  }
  
  
  
  function getEditorValue()
  {
    alert(editorRef.current.getValue());
  }
  



  return (
    <div className="App">
      
      <HStack spacing = {5}>
      <Box w = '10%' backgroundColor={"#F4F1E7"} height='83vh' border='1px solid' borderRadius={4}
          p={4}>
        <h1 >file tree</h1>

      </Box>
        <Box w = '70%' height='94vh'>
        <button onClick={()=>setFileName("index.js") }>
        index.js
      </button>
      <button onClick={()=>setFileName("script.py") }>
        script.py
      </button>
        <Editor 
        height="100vh"
        width="100%"
        theme="vs-light"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        />
       </Box>
       <Output editorRef={editorRef} language = {file.language}/>
      </HStack>
    </div>
  );
};


export default App;