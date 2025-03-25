import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

export default function BudgetPlannerModal({ onClose }) {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [accommodation, setAccommodation] = useState("Budget");
  const [budget, setBudget] = useState(null);

  const handleSubmit = async () => {
    if (!destination || !days) {
      alert("Please fill in both the destination and the number of days.");
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://global-city-cost-api.p.rapidapi.com/cost%2Bof%2Bliving%2Bby%2Bcity%2Bv2',
      params: {
        country: 'India', 
        city: destination, 
      },
      headers: {
        'x-rapidapi-key': 'e9bcec3f5amsh05df4204157175ap169b36jsn7aff446cef11',
        'x-rapidapi-host': 'global-city-cost-api.p.rapidapi.com',
      }
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      const mealCost = parseFloat(data['Meal, Inexpensive Restaurant'].replace(' €', ''));
      const transportCost = parseFloat(data['One-way Ticket (Local Transport)'].replace(' €', ''));
      const accommodationCost = accommodation === "Budget" 
        ? parseFloat(data['Apartment (1 bedroom) Outside of Centre'].replace(' €', '')) 
        : accommodation === "Mid-Range" 
        ? parseFloat(data['Apartment (1 bedroom) in City Centre'].replace(' €', '')) 
        : parseFloat(data['Apartment (3 bedrooms) in City Centre'].replace(' €', ''));
      const dailyMealCost = mealCost * 3; 

      const totalBudget = (accommodationCost * days) + (transportCost * days) + (dailyMealCost * days);

      setBudget(totalBudget.toFixed(2));
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setBudget(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 text-white p-6 rounded-xl shadow-2xl mx-2"
      >
        <h3 className="text-xl font-semibold text-white mb-4">AI Budget Planner</h3>

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 text-white rounded"
        />

        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 text-white rounded"
        />

        <select
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 text-white rounded"
        >
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
        >
          Estimate Budget
        </button>

        {budget && (
          <div className="mt-4 p-4 bg-gray-900 text-white rounded">
            <h4 className="font-semibold">Estimated Budget for {days} Days:</h4>
            <p>€{budget}</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          ✖
        </button>
      </motion.div>
    </div>
  );
}
