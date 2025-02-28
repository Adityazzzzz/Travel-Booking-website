import React, { useState } from "react";
import { Client } from "@gradio/client";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function TravelPlannerModal({ onClose }) {
  const [city, setCity] = useState("");
  const [interests, setInterests] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!city || !interests) return;
    setLoading(true);
    setResult("");

    try{
      const client = await Client.connect("Shounak02/TravelPlanner");
      const res = await client.predict("/predict", {
        city,
        interests,
      });
      setResult(res.data); 
    } 
    catch(err){
      setResult("Error calling TravelPlanner model.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }} className="relative w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 text-white p-6 rounded-xl shadow-2xl mx-2">

        <button onClick={onClose} className="absolute top-3 right-3 text-red-600 hover:text-red-400">
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">AI Itinerary Planner</h2>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1 font-semibold">City</label>
            <input type="text" className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. Paris" value={city} onChange={(e) => setCity(e.target.value)}/>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Interests (comma-separated)</label>
            <input type="text" className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. Museums, Cafes, Art" value={interests} onChange={(e) => setInterests(e.target.value)}/>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full mt-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-md hover:scale-105 transition-transform">
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>

        {result && (
          <div className="mt-5 p-4 bg-white bg-opacity-20 rounded-md text-sm">
            <h3 className="font-semibold mb-2">AI-Generated Itinerary:</h3>
            <ul className="list-disc pl-5">
              {String(result) 
                .split("* ") 
                .map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
            </ul>
          </div>
        )}
      </motion.div>
      
    </div>
  );
}
