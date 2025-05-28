// src/App.jsx
import { useState } from 'react'
import Header from './components/Header'
import SurveyForm from './components/SurveyForm'
import ThankYou from './components/ThankYou'
import ResultsDashboard from './components/ResultsDashboard'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const handleFormSubmit = (data) => {
    console.log('Form submitted with data:', data)
    setFormData(data)
    setIsSubmitted(true)
    // Here you would typically send the data to a server
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        {/* Toggle buttons for switching between survey and results */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setShowResults(false)}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                !showResults 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Plotëso Pyetësorin
            </button>
            <button
              type="button"
              onClick={() => setShowResults(true)}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                showResults 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Shiko Rezultatet
            </button>
          </div>
        </div>
        
        {showResults ? (
          <ResultsDashboard />
        ) : (
          !isSubmitted ? (
            <SurveyForm onSubmit={handleFormSubmit} />
          ) : (
            <ThankYou formData={formData} />
          )
        )}
      </div>
      
      <footer className="py-4 text-center text-gray-500 text-sm mt-10">
        <p>© 2025 Pyetësor për Shërbime Dentare</p>
        <p>Projektuar nga Flavio Mara,Franc Halili,Jorgers Ahmeti,Nevrus Cili</p>
        <p>Gjithë të drejtat e rezervuara</p>
        <p>Studente te Kolegjit Universitar Beder</p>
      </footer>
    </div>
  );
}

export default App;