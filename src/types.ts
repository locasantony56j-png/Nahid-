export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  companyName: string;
  dosage: string;
  type: string;
  uses: { en: string; bn: string };
  warnings: { en: string; bn: string };
  contraindications: { en: string; bn: string };
  sideEffects: { en: string; bn: string };
  price: string;
  howToUse: { en: string; bn: string };
  interactions?: string[];
}

export interface Disease {
  id: string;
  name: { en: string; bn: string };
  symptoms: { en: string; bn: string };
  causes: { en: string; bn: string };
  diagnosis: { en: string; bn: string };
  treatment: { en: string; bn: string };
  prevention: { en: string; bn: string };
}

export interface DictionaryTerm {
  id: string;
  term: string;
  meaningBangla: string;
  explanationEnglish: string;
  definition: { en: string; bn: string };
  relatedTerms?: string[];
  synonyms?: string[];
  usage?: { en: string; bn: string };
}

export interface Abbreviation {
  id: string;
  short: string;
  full: { en: string; bn: string };
}

export interface Flashcard {
  id: string;
  front: { en: string; bn: string };
  back: { en: string; bn: string };
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: { en: string; bn: string };
  options: { en: string[]; bn: string[] };
  correctAnswer: number;
  explanation: { en: string; bn: string };
}

export interface StudyNote {
  id: string;
  title: { en: string; bn: string };
  content: { en: string; bn: string };
  category: string;
}

export interface ExamPlan {
  id: string;
  subject: { en: string; bn: string };
  date: string;
  topics: { title: { en: string; bn: string }; completed: boolean }[];
}

export interface Doctor {
  id: string;
  name: { en: string; bn: string };
  specialization: { en: string; bn: string };
  hospital: { en: string; bn: string };
  location: { en: string; bn: string };
  phone: string;
}

export interface EmergencyGuide {
  id: string;
  title: { en: string; bn: string };
  steps: { en: string[]; bn: string[] };
}

export interface MedicalImage {
  id: string;
  title: { en: string; bn: string };
  url: string;
  category: string;
}

export interface Hospital {
  id: string;
  name: { en: string; bn: string };
  location: { en: string; bn: string };
  type: string;
  phone: string;
}

export type Language = 'en' | 'bn';

export interface Bookmark {
  id: string;
  userId: string;
  itemId: string;
  type: 'medicine' | 'dictionary' | 'disease';
  savedAt: string;
}

export interface Screenshot {
  id: string;
  userId: string;
  imageUrl: string;
  timestamp: string;
}
