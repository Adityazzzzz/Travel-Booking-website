import { useState, useEffect } from "react";
import { RiVoiceAiFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Searching({searchTerm, setSearchTerm, setfilter }) {
  const [voicebutton, setvoicebutton] = useState(false);
  const [text, setText] = useState(""); 
  const [isCopied, setCopied] = useClipboard(searchTerm, {successDuration:1000});



  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  
  useEffect(() => {
    setText(transcript);
  }, [transcript]);


  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto flex gap-3 m-5 border border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-300">

        <button onClick={() => { setSearchTerm("")}} className="bg-gray-400 m-2  text-black p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
          </svg>
        </button>



        <button onClick={() => setvoicebutton(true)} className="bg-primary m-2 text-white p-3 rounded-full">
          <RiVoiceAiFill />
        </button>

        {voicebutton && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-3xl shadow-lg  w-9/12">
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Speech to Text:</h2>
                <h4 className="text-lg font-semibold text-blue-500">Don't forget to Tap on the Box before Copying to Searchbar</h4>
                <button onClick={() => setvoicebutton(false)} className="text-gray-500 hover:text-red-600">
                  <FaTimes className="size-5" />
                </button>
              </div>


              <div onClick={() => setSearchTerm(transcript)} className="border border-gray-500 h-60 p-2 overflow-y-auto">
                {text} 
              </div>


              <div className="flex gap-2 mt-4">
                <button onClick={setCopied} className="w-full bg-primary hover:bg-blue-500 text-white py-2 rounded-full transition duration-300">
                  {isCopied ? 'Copied!' : 'Copy to clipboard'}
                </button>
                <button onClick={startListening} className="w-full bg-primary hover:bg-blue-500 text-white py-2 rounded-full transition duration-300">  Start Listening </button>
                <button onClick={stopListening} className="w-full bg-primary hover:bg-blue-500 text-white py-2 rounded-full transition duration-300"> Stop Listening </button>
                <button onClick={resetTranscript} className="w-full bg-gray-500 hover:bg-gray-700 text-white py-2 rounded-full transition duration-300">Clear</button>
              </div>
            </div>
          </div>
        )}

        <input onChange={(e) => setSearchTerm(e.target.value || transcript )} type="text" placeholder="Where to?" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />

        <button onClick={() => setfilter(true)} className="bg-white flex gap-1 text-sm border h-9 w-20 mt-2 m-2 border-gray-300 rounded-lg font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-2 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
          </svg>
          <h6 className="mt-2 mr-2">Filter</h6>
        </button>
      </div>
      
    </>
  );
}
