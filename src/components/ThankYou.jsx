import React from 'react'

const ThankYou = ({ formData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-4 text-gray-800">Faleminderit për përgjigjet tuaja!</h2>
      <p className="mt-2 text-gray-600">
        Të dhënat tuaja janë dërguar me sukses. Ato do të na ndihmojnë të përmirësojmë shërbimet tona dentare.
      </p>
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <p className="text-gray-600 text-sm">
          Nëse keni ndonjë pyetje shtesë, mos hezitoni të na kontaktoni.
        </p>
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Plotëso një pyetësor të ri
      </button>
    </div>
  )
}

export default ThankYou