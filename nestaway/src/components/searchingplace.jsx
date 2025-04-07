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
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                <h2 className="text-2xl font-bold text-gray-800">Speech to Text</h2>
                <p className="text-sm text-blue-600 font-medium">
                  Tap the box below before copying to the search bar
                </p>
                <button
                  onClick={() => setvoicebutton(false)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Transcript Display */}
              <div
                onClick={() => setSearchTerm(transcript)}
                className="border border-gray-300 rounded-xl h-60 p-4 overflow-y-auto text-gray-700 cursor-pointer hover:border-blue-400 transition"
              >
                {text}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <button
                  onClick={setCopied}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full transition"
                >
                  {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button
                  onClick={startListening}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-full transition"
                >
                  Start Listening
                </button>
                <button
                  onClick={stopListening}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 rounded-full transition"
                >
                  Stop Listening
                </button>
                <button
                  onClick={resetTranscript}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 rounded-full transition"
                >
                  Clear
                </button>
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
