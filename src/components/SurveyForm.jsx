import React, { useState } from 'react'
import QuestionField from './QuestionField'
import { questions } from '../utils/surveyQuestions'
import { validateForm } from '../utils/formValidation'

const SurveyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    visitFrequency: '',
    servicesInterest: [],
    otherService: '',
    badExperience: '',
    serviceImportance: '',
    clinicSelection: '',
    financialInterest: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    
    // Clear error for this field when user makes a change
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }))
    }
  }

  const handleCheckboxChange = (name, value, checked) => {
    setFormData(prevData => {
      const updatedServices = [...prevData.servicesInterest]
      
      if (checked) {
        updatedServices.push(value)
      } else {
        const index = updatedServices.indexOf(value)
        if (index !== -1) {
          updatedServices.splice(index, 1)
        }
      }
      
      return {
        ...prevData,
        [name]: updatedServices
      }
    })
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formErrors = validateForm(formData)
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      // Scroll to the first error
      const firstErrorId = Object.keys(formErrors)[0]
      const errorElement = document.getElementById(firstErrorId)
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    
    // Form is valid, submit data
    onSubmit(formData)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((question) => (
          <QuestionField
            key={question.id}
            question={question}
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            error={errors[question.id]}
          />
        ))}
        
        <div className="mt-8 flex justify-center">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
          >
            {isSubmitting ? 'Duke dërguar...' : 'Dërgo Përgjigjet'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SurveyForm