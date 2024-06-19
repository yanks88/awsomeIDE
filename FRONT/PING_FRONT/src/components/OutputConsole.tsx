// src/components/OutputConsole.tsx
import {Box, Button, Text, useToast} from "@chakra-ui/react"
import { BiPlayCircle } from "react-icons/bi";
import { executeCode } from '../api';
import { useState } from "react";
const Output = ({editorRef,language}) =>
  {
    const toast = useToast();
    const[output,setOutput] = useState(null);
    const[isLoading, setisLoading] = useState(false);
    const[isError, setisError] = useState(false);

    const runCode = async()=>
      {
        const sourceCode = editorRef.current.getValue();
        
        if(!sourceCode)
          {
            return;
          } 
        try
        {
          setisLoading(true)

          const {run:result} = await executeCode(language, sourceCode)
          setOutput(result.output.split("\n"));
          result.stderr ? setisError(true) : setisError(false)
        }
        catch (error)
        {
          toast({
            title: "An error occured.",
            description: error.message || "Unable to run code",
            status: "error",
            duration: 6000,
          })
          //alert(`language: ${language},\n code: ${sourceCode}`);
          //alert(error)
        }
        finally{
          setisLoading(false);
        }
      }
    return(
      <Box w='20%' >
        <Text mb = {2} fontSize='lg'></Text>
        <BiPlayCircle 
          size={'10%'}
          color="green"
          isLoading={isLoading}
          onClick={runCode}>
            Run Code
        </BiPlayCircle>
        <Box
          height='90vh'
          p={2}
          backgroundColor={"#F4F1E7"}
          //color={"red"}
          color={
            isError ? "red.400" : ""
          }
          border='1px solid'
          borderRadius={4}
          borderColor={
            isError ? "red.500" : "#333"
          }>
            {
              output ? 
              output.map(
                (line,i) => <Text key={i}>{line}</Text>
              )
               : "Click the run button to see the output here !"

            }
        </Box>
      </Box>
    )
  }
export default Output