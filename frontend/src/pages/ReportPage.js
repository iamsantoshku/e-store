import React, { useState } from 'react';

const ReportPage = () => {
  // State to manage form data
  const [reportData, setReportData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
  });

  // Categories for the report (you can add more as needed)
  const categories = ['Bug', 'Feature Request', 'Feedback', 'Other'];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value,
    });
  };

  // Handle form submission (frontend only, no API calls)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Report submitted:\nTitle: ${reportData.title}\nCategory: ${reportData.category}\nDate: ${reportData.date}\nDescription: ${reportData.description}`);

    // Reset the form after submission
    setReportData({
      title: '',
      description: '',
      category: '',
      date: '',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Report Page</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Report Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={reportData.title}
            onChange={handleInputChange}
            required
            placeholder="Enter report title"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={reportData.description}
            onChange={handleInputChange}
            required
            placeholder="Enter report description"
            className="w-full border border-gray-300 rounded-lg p-2"
            rows="4"
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={reportData.category}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-lg font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={reportData.date}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportPage;
