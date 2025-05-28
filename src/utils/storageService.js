// src/utils/storageService.js
import { surveyResults as initialResults } from './surveyResults';

// Key for storing the survey results in localStorage
const STORAGE_KEY = 'dental_survey_results';
const TOTAL_INITIAL_RESPONSES = 50; // The number of initial survey responses

// Initialize the storage with the initial data if it doesn't exist
const initializeStorage = () => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  
  if (!existingData) {
    // Store the initial data with metadata about the number of responses
    const initialData = {
      responses: TOTAL_INITIAL_RESPONSES,
      results: { ...initialResults }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
  }

  return JSON.parse(existingData);
};

/**
 * Get all survey results including both initial and submitted data
 * @returns {Object} Survey results and total number of responses
 */
export const getAllResults = () => {
  try {
    return initializeStorage();
  } catch (error) {
    console.error('Error retrieving survey results from localStorage:', error);
    // Return initial data if there's an error
    return {
      responses: TOTAL_INITIAL_RESPONSES,
      results: { ...initialResults }
    };
  }
};

/**
 * Save a new survey submission
 * @param {Object} formData - The survey form data submitted by a user
 * @returns {boolean} - Success status of the save operation
 */
export const saveSubmission = (formData) => {
  try {
    // Get current data
    const currentData = getAllResults();
    const updatedResults = { ...currentData.results };
    
    // Update results based on form data
    // Age
    if (formData.age) {
      const ageMapping = {
        'under18': 'under18',
        '18-24': '18-24',
        '25-34': '25-34',
        '35-44': '35-44',
        '45-54': '45-54',
        '55plus': '55plus'
      };
      const ageKey = ageMapping[formData.age];
      if (ageKey && updatedResults.age[ageKey] !== undefined) {
        updatedResults.age[ageKey] += 1;
      }
    }
    
    // Gender
    if (formData.gender) {
      const genderMapping = {
        'female': 'female',
        'male': 'male',
        'other': 'other'
      };
      const genderKey = genderMapping[formData.gender];
      if (genderKey && updatedResults.gender[genderKey] !== undefined) {
        updatedResults.gender[genderKey] += 1;
      }
    }
    
    // Visit Frequency
    if (formData.visitFrequency) {
      const visitMapping = {
        'every6months': 'every6months',
        'onceAYear': 'onceAYear',
        'whenInPain': 'whenInPain',
        'never': 'never'
      };
      const visitKey = visitMapping[formData.visitFrequency];
      if (visitKey && updatedResults.visitFrequency[visitKey] !== undefined) {
        updatedResults.visitFrequency[visitKey] += 1;
      }
    }
    
    // Services Interest (Multiple selection)
    if (formData.servicesInterest && Array.isArray(formData.servicesInterest)) {
      formData.servicesInterest.forEach(service => {
        const serviceMapping = {
          'routineCheckup': 'routineCheckup',
          'fillings': 'fillings',
          'orthodontics': 'orthodontics',
          'cosmetic': 'cosmetic',
          'implants': 'implants',
          'other': 'other'
        };
        const serviceKey = serviceMapping[service];
        if (serviceKey && updatedResults.servicesInterest[serviceKey] !== undefined) {
          updatedResults.servicesInterest[serviceKey] += 1;
        }
      });
    }
    
    // Bad Experience
    if (formData.badExperience) {
      const experienceMapping = {
        'yes': 'yes',
        'no': 'no',
        'dontRemember': 'dontRemember'
      };
      const experienceKey = experienceMapping[formData.badExperience];
      if (experienceKey && updatedResults.badExperience[experienceKey] !== undefined) {
        updatedResults.badExperience[experienceKey] += 1;
      }
    }
    
    // Service Importance
    if (formData.serviceImportance) {
      const importanceMapping = {
        'veryImportant': 'veryImportant',
        'qualityMoreImportant': 'qualityMoreImportant',
        'priceMoreImportant': 'priceMoreImportant',
        'bothEquallyImportant': 'bothEquallyImportant'
      };
      const importanceKey = importanceMapping[formData.serviceImportance];
      if (importanceKey && updatedResults.serviceImportance[importanceKey] !== undefined) {
        updatedResults.serviceImportance[importanceKey] += 1;
      }
    }
    
    // Clinic Selection
    if (formData.clinicSelection) {
      const selectionMapping = {
        'recommendations': 'recommendations',
        'socialMedia': 'socialMedia',
        'googleSearch': 'googleSearch',
        'convenientLocation': 'convenientLocation',
        'previousExperiences': 'previousExperiences'
      };
      const selectionKey = selectionMapping[formData.clinicSelection];
      if (selectionKey && updatedResults.clinicSelection[selectionKey] !== undefined) {
        updatedResults.clinicSelection[selectionKey] += 1;
      }
    }
    
    // Financial Interest
    if (formData.financialInterest) {
      const interestMapping = {
        'yes': 'yes',
        'no': 'no',
        'maybe': 'maybe'
      };
      const interestKey = interestMapping[formData.financialInterest];
      if (interestKey && updatedResults.financialInterest[interestKey] !== undefined) {
        updatedResults.financialInterest[interestKey] += 1;
      }
    }
    
    // Update total responses count
    const updatedData = {
      responses: currentData.responses + 1,
      results: updatedResults
    };
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    
    return true;
  } catch (error) {
    console.error('Error saving survey submission:', error);
    return false;
  }
};

/**
 * Clear all survey data except the initial data
 * @returns {boolean} - Success status of the clear operation
 */
export const resetToInitialData = () => {
  try {
    const initialData = {
      responses: TOTAL_INITIAL_RESPONSES,
      results: { ...initialResults }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return true;
  } catch (error) {
    console.error('Error resetting survey data:', error);
    return false;
  }
};