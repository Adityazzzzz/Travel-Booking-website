import React, { useState } from "react";
import TravelPlannerModal from "../components/Traveitinery"; 
import { motion } from "framer-motion";

export default function AIFeaturePage() {
  const [travelrecommend, setTravelrecommend] = useState(false);
  const [budgetai, setBudgetai] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  const features = [
    {
      title: "AI-Powered Search",
      description: "Get instant, smart travel recommendations based on your preferences.",
      onClick: () => {
        console.log("Opening AI-Powered Search Modal");
        setTravelrecommend(true);
      },
    },
    {
      title: "Budget Planner",
      description: "Take AI-assistance for building your travel budget.",
      onClick: () => setBudgetai(true),
    },
    {
      title: "Personalized Itineraries",
      description: "AI plans your trip with customized day-wise activities.",
      onClick: () => setShowPlanner(true),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white rounded-xl mt-4">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          Unlock AI-Powered Travel
        </motion.h1>
        <p className="text-lg text-gray-400 mt-3">
          Smart Recommendations, Personalized Itineraries & AI Budget Planning
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} title={feature.title} description={feature.description} onClick={feature.onClick}/>
          ))}
        </div>
      </div>
      {showPlanner && <TravelPlannerModal onClose={() => setShowPlanner(false)} />}
      {travelrecommend && <AITravelSearchModal onClose={() => setTravelrecommend(false)} />}
      
    </div>
  );
}

function FeatureCard({ title, description, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500 shadow-lg hover:shadow-purple-500/40 transition cursor-pointer"
      onClick={onClick}
    >
      <div className="text-xl font-semibold mb-2">{title}</div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function AITravelSearchModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 text-white p-6 rounded-xl shadow-2xl mx-2"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
        >
          ✖
        </button>

        {/* Embedded AI Travel Planner */}
        <iframe
          src="https://saikumar27-ai-travel-planner.hf.space"
          frameBorder="0"
          width="100%"
          height="450"
          className="rounded-lg border border-gray-700"
        ></iframe>
      </motion.div>
    </div>
  );
}


