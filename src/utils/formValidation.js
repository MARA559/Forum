export const validateForm = (formData) => {
  const errors = {}

  // Check age selection
  if (!formData.age) {
    errors.age = 'Ju lutem zgjidhni grupmoshën tuaj'
  }

  // Check gender selection
  if (!formData.gender) {
    errors.gender = 'Ju lutem zgjidhni gjininë tuaj'
  }

  // Check visit frequency
  if (!formData.visitFrequency) {
    errors.visitFrequency = 'Ju lutem zgjidhni sa shpesh vizitoni dentistin'
  }

  // Check services interest
  if (!formData.servicesInterest || formData.servicesInterest.length === 0) {
    errors.servicesInterest = 'Ju lutem zgjidhni të paktën një shërbim që ju intereson'
  }

  // If "other" is selected in services interest, check if other service is specified
  if (
    formData.servicesInterest && 
    formData.servicesInterest.includes('other') && 
    !formData.otherService.trim()
  ) {
    errors.otherService = 'Ju lutem specifikoni shërbimin tjetër që ju intereson'
  }

  // Check bad experience selection
  if (!formData.badExperience) {
    errors.badExperience = 'Ju lutem zgjidhni një përgjigje'
  }

  // Check service importance selection
  if (!formData.serviceImportance) {
    errors.serviceImportance = 'Ju lutem zgjidhni se sa e rëndësishme është cilësia e shërbimit krahasuar me çmimin'
  }

  // Check clinic selection
  if (!formData.clinicSelection) {
    errors.clinicSelection = 'Ju lutem zgjidhni se si e zgjidhni zakonisht një klinikë dentare'
  }

  // Check financial interest selection
  if (!formData.financialInterest) {
    errors.financialInterest = 'Ju lutem zgjidhni nëse jeni të interesuar për oferta financiare'
  }

  return errors
}