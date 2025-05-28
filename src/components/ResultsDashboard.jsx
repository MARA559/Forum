// src/components/ResultsDashboard.jsx
import React from 'react';
import ChartCard from './ChartCard';
import { surveyResults, questionLabels, optionLabels } from '../data/surveyResults';

const ResultsDashboard = () => {
  // Function to prepare data for charting
  const prepareChartData = (questionId) => {
    const questionData = surveyResults[questionId];
    const data = Object.values(questionData);
    const labels = Object.keys(questionData).map(key => optionLabels[questionId][key]);
    
    return { data, labels };
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Përmbledhje e Përgjigjeve nga 50 Persona
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Age Chart */}
        <ChartCard 
          title={questionLabels.age}
          {...prepareChartData('age')}
        />
        
        {/* Gender Chart */}
        <ChartCard 
          title={questionLabels.gender}
          {...prepareChartData('gender')}
        />
        
        {/* Visit Frequency Chart */}
        <ChartCard 
          title={questionLabels.visitFrequency}
          {...prepareChartData('visitFrequency')}
        />
        
        {/* Services Interest Chart - Using bar chart for multiple selections */}
        <ChartCard 
          title={questionLabels.servicesInterest}
          {...prepareChartData('servicesInterest')}
          chartType="bar"
          multipleSelection={true}
        />
        
        {/* Bad Experience Chart */}
        <ChartCard 
          title={questionLabels.badExperience}
          {...prepareChartData('badExperience')}
        />
        
        {/* Service Importance Chart */}
        <ChartCard 
          title={questionLabels.serviceImportance}
          {...prepareChartData('serviceImportance')}
        />
        
        {/* Clinic Selection Chart */}
        <ChartCard 
          title={questionLabels.clinicSelection}
          {...prepareChartData('clinicSelection')}
        />
        
        {/* Financial Interest Chart */}
        <ChartCard 
          title={questionLabels.financialInterest}
          {...prepareChartData('financialInterest')}
        />
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Të dhënat e paraqitura bazohen në përgjigjet e 50 personave dhe janë të përmbledhura për qëllime ilustruese.</p>
      </div>
    </div>
  );
};

export default ResultsDashboard;