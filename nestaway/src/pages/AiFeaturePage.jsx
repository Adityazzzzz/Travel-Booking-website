import React, { useState } from "react";
import TravelPlannerModal from "../components/Traveitinery"; 
import { motion } from "framer-motion";

export default function AIFeaturePage() {
  const [showPlanner, setShowPlanner] = useState(false);

  const features = [
    {
      title: "AI-Powered Search",
      description: "Get instant, smart travel recommendations based on your preferences.",
      onClick: () => alert("Feature 1 clicked!"),
    },
    {
      title: "Voice Assistance",
      description: "Use voice commands to find the best travel deals and routes.",
      onClick: () => alert("Feature 2 clicked!"),
    },
    {
      title: "Personalized Itineraries",
      description: "AI plans your trip with customized day-wise activities.",
      onClick: () => setShowPlanner(true),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
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
          Smart Recommendations, Personalized Itineraries & Voice Assistance
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              onClick={feature.onClick}
            />
          ))}
        </div>
      </div>

      {/* Modal for Personalized Itineraries */}
      {showPlanner && (
        <TravelPlannerModal onClose={() => setShowPlanner(false)} />
      )}
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
