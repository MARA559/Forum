import React from 'react'

const QuestionField = ({ 
  question, 
  formData, 
  handleInputChange, 
  handleCheckboxChange,
  error 
}) => {
  const { id, text, type, options, required } = question

  const renderFieldContent = () => {
    switch (type) {
      case 'radio':
        return (
          <div className="space-y-2 mt-3">
            {options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={`${id}-${option.value}`}
                  name={id}
                  value={option.value}
                  checked={formData[id] === option.value}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label 
                  htmlFor={`${id}-${option.value}`} 
                  className="ml-2 block text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-2 mt-3">
            {options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={`${id}-${option.value}`}
                  name={id}
                  value={option.value}
                  checked={formData[id].includes(option.value)}
                  onChange={(e) => handleCheckboxChange(id, option.value, e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label 
                  htmlFor={`${id}-${option.value}`} 
                  className="ml-2 block text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );

      case 'text':
        return (
          <div className="mt-3">
            <input
              type="text"
              id={id}
              value={formData[id]}
              onChange={(e) => handleInputChange(id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={question.placeholder || ''}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id={id} className="py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-start">
        <div className="flex-grow">
          <label 
            htmlFor={id} 
            className="block text-lg font-medium text-gray-700"
          >
            {text}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          {renderFieldContent()}
          
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
          
          {id === 'servicesInterest' && formData['servicesInterest'].includes('other') && (
            <div className="mt-3 pl-6">
              <label htmlFor="otherService" className="block text-sm text-gray-600">
                Ju lutemi specifikoni:
              </label>
              <input
                type="text"
                id="otherService"
                value={formData.otherService}
                onChange={(e) => handleInputChange('otherService', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionField