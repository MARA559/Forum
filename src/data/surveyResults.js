// src/data/surveyResults.js
export const surveyResults = {
  age: {
    under18: 3,
    '18-24': 10,
    '25-34': 18,
    '35-44': 9,
    '45-54': 6,
    '55plus': 4
  },
  gender: {
    female: 30,
    male: 18,
    other: 2
  },
  visitFrequency: {
    every6months: 12,
    onceAYear: 20,
    whenInPain: 14,
    never: 4
  },
  servicesInterest: {
    routineCheckup: 40,
    fillings: 35,
    orthodontics: 20,
    cosmetic: 28,
    implants: 15,
    other: 5
  },
  badExperience: {
    yes: 22,
    no: 26,
    dontRemember: 2
  },
  serviceImportance: {
    veryImportant: 27,
    qualityMoreImportant: 14,
    priceMoreImportant: 5,
    bothEquallyImportant: 4
  },
  clinicSelection: {
    recommendations: 21,
    socialMedia: 13,
    googleSearch: 9,
    convenientLocation: 5,
    previousExperiences: 2
  },
  financialInterest: {
    yes: 39,
    no: 4,
    maybe: 7
  }
};

// This maps the survey question IDs to their labels in Albanian
export const questionLabels = {
  age: 'Mosha',
  gender: 'Gjinia',
  visitFrequency: 'Sa shpesh vizitoni dentistin?',
  servicesInterest: 'Çfarë lloj shërbimesh dentare ju interesojnë më shumë?',
  badExperience: 'A keni pasur ndonjëherë ndonjë përvojë të pakëndshme me një dentist?',
  serviceImportance: 'Sa e rëndësishme është për ju cilësia e shërbimit krahasuar me çmimin?',
  clinicSelection: 'Si e zgjidhni zakonisht një klinikë dentare?',
  financialInterest: 'A do të ishit të interesuar për oferta apo plane financiare për shërbime dentare?'
};

// This maps the option values to their display labels in Albanian
export const optionLabels = {
  age: {
    under18: 'Nën 18',
    '18-24': '18–24',
    '25-34': '25–34',
    '35-44': '35–44',
    '45-54': '45–54',
    '55plus': '55+'
  },
  gender: {
    female: 'Femër',
    male: 'Mashkull',
    other: 'Tjetër / Preferoj të mos përgjigjem'
  },
  visitFrequency: {
    every6months: 'Çdo 6 muaj',
    onceAYear: 'Një herë në vit',
    whenInPain: 'Vetëm kur kam dhimbje',
    never: 'Nuk kam vizituar ndonjëherë dentistin'
  },
  servicesInterest: {
    routineCheckup: 'Kontroll rutinë dhe pastrim',
    fillings: 'Mbushje dhe trajtime kundër kaviteteve',
    orthodontics: 'Ortodonci (rregullim i dhëmbëve, aparate)',
    cosmetic: 'Estetikë dentare (zbardhje, faseta, etj.)',
    implants: 'Implantologji',
    other: 'Të tjera (p.sh. kirurgji, këshillim)'
  },
  badExperience: {
    yes: 'Po',
    no: 'Jo',
    dontRemember: 'Nuk më kujtohet'
  },
  serviceImportance: {
    veryImportant: 'Shumë e rëndësishme cilësia',
    qualityMoreImportant: 'Më e rëndësishme cilësia',
    priceMoreImportant: 'Më i rëndësishëm çmimi',
    bothEquallyImportant: 'Të dy janë të rëndësishëm'
  },
  clinicSelection: {
    recommendations: 'Rekomandime nga miqtë/familja',
    socialMedia: 'Rrjetet sociale',
    googleSearch: 'Kërkim në Google',
    convenientLocation: 'Lokacion i përshtatshëm',
    previousExperiences: 'Përvojë e mëparshme'
  },
  financialInterest: {
    yes: 'Po',
    no: 'Jo',
    maybe: 'Ndoshta'
  }
};

// Chart configuration and colors
export const chartColors = [
  'rgba(255, 99, 132, 0.7)',   // red
  'rgba(54, 162, 235, 0.7)',   // blue
  'rgba(255, 206, 86, 0.7)',   // yellow
  'rgba(75, 192, 192, 0.7)',   // green
  'rgba(153, 102, 255, 0.7)',  // purple
  'rgba(255, 159, 64, 0.7)',   // orange
  'rgba(199, 199, 199, 0.7)',  // gray
  'rgba(83, 102, 255, 0.7)',   // indigo
  'rgba(255, 99, 255, 0.7)',   // pink
  'rgba(10, 199, 140, 0.7)',   // teal
];