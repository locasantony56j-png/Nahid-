import { Medicine, DictionaryTerm, Disease, Doctor, EmergencyGuide, MedicalImage, Hospital, Abbreviation, Flashcard, QuizQuestion, StudyNote, ExamPlan } from './types';

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Napa Extend',
    genericName: 'Paracetamol',
    companyName: 'Beximco Pharmaceuticals Ltd.',
    dosage: '665 mg',
    type: 'Tablet',
    uses: {
      en: 'Used for fever, headache, toothache, and back pain.',
      bn: 'জ্বর, মাথাব্যথা, দাঁত ব্যথা এবং পিঠের ব্যথার জন্য ব্যবহৃত হয়।'
    },
    howToUse: {
      en: 'Take 1-2 tablets every 6-8 hours. Do not exceed 6 tablets in 24 hours.',
      bn: 'প্রতি ৬-৮ ঘণ্টা অন্তর ১-২টি ট্যাবলেট নিন। ২৪ ঘণ্টায় ৬টির বেশি ট্যাবলেট নেবেন না।'
    },
    warnings: {
      en: 'Consult a doctor if you have liver disease. Avoid alcohol.',
      bn: 'আপনার লিভারের রোগ থাকলে ডাক্তারের পরামর্শ নিন। অ্যালকোহল এড়িয়ে চলুন।'
    },
    sideEffects: {
      en: 'Nausea, allergic reactions, skin rash (rare).',
      bn: 'বমি বমি ভাব, অ্যালার্জিজনিত প্রতিক্রিয়া, ত্বকে ফুসকুড়ি (বিরল)।'
    },
    contraindications: {
      en: 'Hypersensitivity to paracetamol, severe renal impairment.',
      bn: 'প্যারাসিটামলের প্রতি অতিসংবেদনশীলতা, গুরুতর কিডনি সমস্যা।'
    },
    price: '৳ 2.50 / Tablet',
    interactions: ['Warfarin', 'Busulfan']
  },
  {
    id: '2',
    name: 'Seclo 20',
    genericName: 'Omeprazole',
    companyName: 'Square Pharmaceuticals Ltd.',
    dosage: '20 mg',
    type: 'Capsule',
    uses: {
      en: 'Used for acidity, gastric ulcers, and GERD.',
      bn: 'অ্যাসিডিটি, গ্যাস্ট্রিক আলসার এবং জিইআরডি-র জন্য ব্যবহৃত হয়।'
    },
    howToUse: {
      en: 'Take one capsule 30 minutes before breakfast.',
      bn: 'সকালের নাস্তার ৩০ মিনিট আগে একটি ক্যাপসুল নিন।'
    },
    warnings: {
      en: 'Long term use may lead to bone fractures.',
      bn: 'দীর্ঘমেয়াদী ব্যবহারে হাড়ের ফ্র্যাকচার হতে পারে।'
    },
    sideEffects: {
      en: 'Headache, diarrhea, abdominal pain.',
      bn: 'মাথাব্যথা, ডায়রিয়া, পেটে ব্যথা।'
    },
    contraindications: {
      en: 'Hypersensitivity to omeprazole.',
      bn: 'ওমিপ্রাজলের প্রতি অতিসংবেদনশীলতা।'
    },
    price: '৳ 5.00 / Capsule'
  },
  {
    id: '3',
    name: 'Fexo 120',
    genericName: 'Fexofenadine Hydrochloride',
    companyName: 'Beximco Pharmaceuticals Ltd.',
    dosage: '120 mg',
    type: 'Tablet',
    uses: {
      en: 'Relief from allergy symptoms like sneezing, runny nose, and itchy eyes.',
      bn: 'হাঁচি, নাক দিয়ে পানি পড়া এবং চোখ চুলকানোর মতো অ্যালার্জিজনিত লক্ষণ থেকে মুক্তি।'
    },
    howToUse: {
      en: 'One tablet daily with water.',
      bn: 'প্রতিদিন একটি ট্যাবলেট পানির সাথে নিন।'
    },
    warnings: {
      en: 'Avoid fruit juices within 4 hours of taking.',
      bn: 'ওষুধ নেওয়ার ৪ ঘণ্টার মধ্যে ফলের রস এড়িয়ে চলুন।'
    },
    sideEffects: {
      en: 'Drowsiness (rare), dizziness, headache.',
      bn: 'ঝিমুনি (বিরল), মাথা ঘোরা, মাথাব্যথা।'
    },
    contraindications: {
      en: 'Hypersensitivity to fexofenadine.',
      bn: 'ফেক্সোফেনাডিনের প্রতি অতিসংবেদনশীলতা।'
    },
    price: '৳ 8.00 / Tablet'
  },
  {
    id: '4',
    name: 'Azithrocin 500',
    genericName: 'Azithromycin',
    companyName: 'Square Pharmaceuticals Ltd.',
    dosage: '500 mg',
    type: 'Tablet',
    uses: {
      en: 'Bacterial infections of the respiratory tract, skin, and ears.',
      bn: 'শ্বাসনালী, ত্বক এবং কানের ব্যাকটেরিয়াল সংক্রমণ।'
    },
    howToUse: {
      en: 'One tablet daily for 3-5 days as prescribed.',
      bn: 'ডাক্তারের পরামর্শ অনুযায়ী ৩-৫ দিন প্রতিদিন একটি ট্যাবলেট।'
    },
    warnings: {
      en: 'Complete the full course even if you feel better.',
      bn: 'সুস্থ বোধ করলেও পুরো কোর্সটি সম্পন্ন করুন।'
    },
    sideEffects: {
      en: 'Diarrhea, nausea, vomiting.',
      bn: 'ডায়রিয়া, বমি বমি ভাব, বমি।'
    },
    contraindications: {
      en: 'Hypersensitivity to azithromycin or other macrolides.',
      bn: 'অ্যাজিথ্রোমাইসিন বা অন্যান্য ম্যাক্রোলাইডের প্রতি অতিসংবেদনশীলতা।'
    },
    price: '৳ 35.00 / Tablet'
  },
  {
    id: '5',
    name: 'Sergel 20',
    genericName: 'Esomeprazole',
    companyName: 'Healthcare Pharmaceuticals Ltd.',
    dosage: '20 mg',
    type: 'Tablet',
    uses: {
      en: 'Treatment of gastroesophageal reflux disease (GERD) and stomach ulcers.',
      bn: 'গ্যাস্ট্রোইসোফেজিয়াল রিফ্লাক্স ডিজিজ (GERD) এবং পাকস্থলীর আলসারের চিকিৎসা।'
    },
    howToUse: {
      en: 'Take one tablet daily, usually before a meal.',
      bn: 'প্রতিদিন একটি ট্যাবলেট নিন, সাধারণত খাবারের আগে।'
    },
    warnings: {
      en: 'May cause low magnesium levels with long-term use.',
      bn: 'দীর্ঘমেয়াদী ব্যবহারে ম্যাগনেসিয়ামের মাত্রা কমে যেতে পারে।'
    },
    sideEffects: {
      en: 'Headache, diarrhea, dry mouth.',
      bn: 'মাথাব্যথা, ডায়রিয়া, মুখ শুকিয়ে যাওয়া।'
    },
    contraindications: {
      en: 'Hypersensitivity to esomeprazole.',
      bn: 'এসোমিপ্রাজলের প্রতি অতিসংবেদনশীলতা।'
    },
    price: '৳ 7.00 / Tablet'
  },
  {
    id: '6',
    name: 'Amodis 400',
    genericName: 'Metronidazole',
    companyName: 'Aristopharma Ltd.',
    dosage: '400 mg',
    type: 'Tablet',
    uses: {
      en: 'Treatment of infections caused by bacteria or parasites.',
      bn: 'ব্যাকটেরিয়া বা পরজীবী দ্বারা সৃষ্ট সংক্রমণের চিকিৎসা।'
    },
    howToUse: {
      en: 'Take with food to avoid stomach upset.',
      bn: 'পেটের সমস্যা এড়াতে খাবারের সাথে নিন।'
    },
    warnings: {
      en: 'Avoid alcohol during treatment and for 48 hours after.',
      bn: 'চিকিৎসার সময় এবং পরবর্তী ৪৮ ঘণ্টা অ্যালকোহল এড়িয়ে চলুন।'
    },
    sideEffects: {
      en: 'Metallic taste, nausea, dark urine.',
      bn: 'ধাতব স্বাদ, বমি বমি ভাব, প্রস্রাব গাঢ় হওয়া।'
    },
    contraindications: {
      en: 'First trimester of pregnancy in some cases.',
      bn: 'কিছু ক্ষেত্রে গর্ভাবস্থার প্রথম তিন মাস।'
    },
    price: '৳ 3.00 / Tablet'
  }
];

export const dictionary: DictionaryTerm[] = [
  {
    id: '1',
    term: 'Anemia',
    meaningBangla: 'রক্তস্বল্পতা',
    explanationEnglish: 'A condition in which the blood doesn\'t have enough healthy red blood cells.',
    definition: {
      en: 'Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body\'s tissues.',
      bn: 'রক্তস্বল্পতা এমন একটি অবস্থা যেখানে আপনার শরীরের টিস্যুগুলোতে পর্যাপ্ত অক্সিজেন বহন করার জন্য যথেষ্ট স্বাস্থ্যকর লোহিত রক্তকণিকা থাকে না।'
    },
    relatedTerms: ['Hemoglobin', 'Iron Deficiency', 'Erythrocytes']
  },
  {
    id: '2',
    term: 'Hypertension',
    meaningBangla: 'উচ্চ রক্তচাপ',
    explanationEnglish: 'A condition in which the force of the blood against the artery walls is too high.',
    definition: {
      en: 'High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.',
      bn: 'উচ্চ রক্তচাপ একটি সাধারণ অবস্থা যেখানে ধমনীর দেয়ালে রক্তের দীর্ঘমেয়াদী চাপ এতটাই বেশি থাকে যে এটি শেষ পর্যন্ত হৃদরোগের মতো স্বাস্থ্য সমস্যা তৈরি করতে পারে।'
    },
    relatedTerms: ['Blood Pressure', 'Systolic', 'Diastolic', 'Cardiovascular']
  },
  {
    id: '3',
    term: 'Diabetes Mellitus',
    meaningBangla: 'ডায়াবেটিস',
    explanationEnglish: 'A group of diseases that result in too much sugar in the blood.',
    definition: {
      en: 'Diabetes mellitus refers to a group of diseases that affect how your body uses blood sugar (glucose). Glucose is vital to your health because it\'s an important source of energy for the cells that make up your muscles and tissues.',
      bn: 'ডায়াবেটিস মেলিটাস বলতে এমন একদল রোগকে বোঝায় যা আপনার শরীর কীভাবে রক্তের শর্করা (গ্লুকোজ) ব্যবহার করে তা প্রভাবিত করে। গ্লুকোজ আপনার স্বাস্থ্যের জন্য অত্যাবশ্যক কারণ এটি আপনার পেশী এবং টিস্যু গঠনকারী কোষগুলোর শক্তির একটি গুরুত্বপূর্ণ উৎস।'
    },
    relatedTerms: ['Insulin', 'Glucose', 'Pancreas', 'Hyperglycemia']
  },
  {
    id: '4',
    term: 'Tachycardia',
    meaningBangla: 'ট্যাকিকার্ডিয়া',
    explanationEnglish: 'A heart rate that exceeds the normal resting rate.',
    definition: {
      en: 'Tachycardia is a condition that makes your heart beat more than 100 times per minute. It can be caused by exercise, stress, or medical conditions.',
      bn: 'ট্যাকিকার্ডিয়া এমন একটি অবস্থা যা আপনার হৃদস্পন্দন প্রতি মিনিটে ১০০ বারের বেশি করে তোলে। এটি ব্যায়াম, মানসিক চাপ বা শারীরিক সমস্যার কারণে হতে পারে।'
    },
    relatedTerms: ['Arrhythmia', 'Bradycardia', 'Palpitations']
  },
  {
    id: '5',
    term: 'Edema',
    meaningBangla: 'শোথ বা ফুলা',
    explanationEnglish: 'Swelling caused by excess fluid trapped in your body\'s tissues.',
    definition: {
      en: 'Edema is swelling caused by excess fluid trapped in your body\'s tissues. Although edema can affect any part of your body, you may notice it more in your hands, arms, feet, ankles and legs.',
      bn: 'শোথ হলো শরীরের টিস্যুতে আটকে থাকা অতিরিক্ত তরলের কারণে হওয়া ফুলা। যদিও শোথ শরীরের যেকোনো অংশকে প্রভাবিত করতে পারে, তবে আপনি এটি আপনার হাত, বাহু, পা, গোড়ালি এবং পায়ে বেশি লক্ষ্য করতে পারেন।'
    },
    relatedTerms: ['Fluid Retention', 'Inflammation', 'Diuretics']
  }
];

export const academicDictionary: DictionaryTerm[] = [
  // Class 1-5
  {
    id: '1',
    term: 'Apple',
    meaningBangla: 'আপেল',
    explanationEnglish: 'A round fruit with red or green skin and a whitish interior.',
    definition: {
      en: 'A common, round fruit produced by the apple tree.',
      bn: 'আপেল গাছ থেকে উৎপন্ন একটি সাধারণ, গোলাকার ফল।'
    },
    synonyms: ['Fruit', 'Pome'],
    usage: { en: 'I eat an apple every day.', bn: 'আমি প্রতিদিন একটি আপেল খাই।' }
  },
  {
    id: '2',
    term: 'Book',
    meaningBangla: 'বই',
    explanationEnglish: 'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
    definition: {
      en: 'A set of printed pages, bound together, containing text or pictures.',
      bn: 'মুদ্রিত পৃষ্ঠাগুলোর একটি সেট, যা একসাথে বাঁধা থাকে এবং এতে পাঠ্য বা ছবি থাকে।'
    },
    synonyms: ['Volume', 'Tome', 'Publication'],
    usage: { en: 'She is reading a book.', bn: 'সে একটি বই পড়ছে।' }
  },
  {
    id: '3',
    term: 'Water',
    meaningBangla: 'পানি',
    explanationEnglish: 'A transparent, tasteless, odorless, and nearly colorless chemical substance.',
    definition: {
      en: 'The clear liquid that has no color, taste, or smell, that falls from clouds as rain.',
      bn: 'স্বচ্ছ তরল যার কোনো রঙ, স্বাদ বা গন্ধ নেই, যা মেঘ থেকে বৃষ্টি হিসেবে পড়ে।'
    },
    synonyms: ['Aqua', 'H2O', 'Liquid'],
    usage: { en: 'Drink plenty of water.', bn: 'প্রচুর পানি পান করুন।' }
  },
  // High School
  {
    id: '4',
    term: 'Photosynthesis',
    meaningBangla: 'সালোকসংশ্লেষণ',
    explanationEnglish: 'The process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water.',
    definition: {
      en: 'The process by which green plants use sunlight to make their own food.',
      bn: 'যে প্রক্রিয়ায় সবুজ উদ্ভিদ সূর্যালোক ব্যবহার করে নিজেদের খাদ্য তৈরি করে।'
    },
    synonyms: ['Energy production', 'Plant metabolism'],
    usage: { en: 'Photosynthesis is essential for plant growth.', bn: 'উদ্ভিদের বৃদ্ধির জন্য সালোকসংশ্লেষণ অপরিহার্য।' }
  },
  {
    id: '5',
    term: 'Metaphor',
    meaningBangla: 'রূপক',
    explanationEnglish: 'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.',
    definition: {
      en: 'A figure of speech that describes an object or action in a way that isn\'t literally true, but helps explain an idea or make a comparison.',
      bn: 'একটি অলংকার যা কোনো বস্তু বা কাজকে এমনভাবে বর্ণনা করে যা আক্ষরিক অর্থে সত্য নয়, কিন্তু একটি ধারণা ব্যাখ্যা করতে বা তুলনা করতে সাহায্য করে।'
    },
    synonyms: ['Analogy', 'Symbol', 'Figure of speech'],
    usage: { en: 'The world is a stage is a famous metaphor.', bn: '"পৃথিবী একটি রঙ্গমঞ্চ" একটি বিখ্যাত রূপক।' }
  },
  {
    id: '6',
    term: 'Velocity',
    meaningBangla: 'বেগ',
    explanationEnglish: 'The speed of something in a given direction.',
    definition: {
      en: 'The rate at which an object changes its position in a specific direction.',
      bn: 'একটি নির্দিষ্ট দিকে কোনো বস্তুর অবস্থান পরিবর্তনের হার।'
    },
    synonyms: ['Speed', 'Pace', 'Momentum'],
    usage: { en: 'The car reached a high velocity.', bn: 'গাড়িটি উচ্চ বেগে পৌঁছেছিল।' }
  },
  // University
  {
    id: '7',
    term: 'Hypothesis',
    meaningBangla: 'অনুকল্প',
    explanationEnglish: 'A proposed explanation made on the basis of limited evidence as a starting point for further investigation.',
    definition: {
      en: 'A tentative assumption made in order to draw out and test its logical or empirical consequences.',
      bn: 'একটি প্রস্তাবিত ব্যাখ্যা যা আরও অনুসন্ধানের শুরুর বিন্দু হিসেবে সীমিত প্রমাণের ভিত্তিতে তৈরি করা হয়।'
    },
    relatedTerms: ['Theory', 'Experiment', 'Data', 'Scientific Method'],
    synonyms: ['Assumption', 'Postulate', 'Premise'],
    usage: { en: 'The scientists tested their hypothesis.', bn: 'বিজ্ঞানীরা তাদের অনুকল্প পরীক্ষা করেছেন।' }
  },
  {
    id: '8',
    term: 'Thermodynamics',
    meaningBangla: 'তাপগতিবিদ্যা',
    explanationEnglish: 'The branch of physical science that deals with the relations between heat and other forms of energy.',
    definition: {
      en: 'The study of the effects of work, heat, and energy on a system.',
      bn: 'একটি সিস্টেমে কাজ, তাপ এবং শক্তির প্রভাবের অধ্যয়ন।'
    },
    synonyms: ['Thermal physics', 'Energy dynamics'],
    usage: { en: 'Thermodynamics explains how engines work.', bn: 'তাপগতিবিদ্যা ব্যাখ্যা করে কীভাবে ইঞ্জিন কাজ করে।' }
  },
  {
    id: '9',
    term: 'Macroeconomics',
    meaningBangla: 'সামষ্টিক অর্থনীতি',
    explanationEnglish: 'The part of economics concerned with large-scale or general economic factors, such as interest rates and national productivity.',
    definition: {
      en: 'The study of the behavior of a national or regional economy as a whole.',
      bn: 'সামগ্রিকভাবে একটি জাতীয় বা আঞ্চলিক অর্থনীতির আচরণের অধ্যয়ন।'
    },
    synonyms: ['Global economics', 'National economics'],
    usage: { en: 'Inflation is a key topic in macroeconomics.', bn: 'মুদ্রাস্ফীতি সামষ্টিক অর্থনীতির একটি মূল বিষয়।' }
  },
  // Ph.D. Level
  {
    id: '10',
    term: 'Epistemology',
    meaningBangla: 'জ্ঞানতত্ত্ব',
    explanationEnglish: 'The theory of knowledge, especially with regard to its methods, validity, and scope.',
    definition: {
      en: 'The branch of philosophy concerned with the nature and scope of knowledge.',
      bn: 'দর্শনের যে শাখা জ্ঞানের প্রকৃতি এবং পরিধি নিয়ে আলোচনা করে।'
    },
    synonyms: ['Theory of knowledge', 'Philosophy of knowledge'],
    usage: { en: 'His research focuses on the epistemology of science.', bn: 'তার গবেষণা বিজ্ঞানের জ্ঞানতত্ত্বের উপর নিবদ্ধ।' }
  },
  {
    id: '11',
    term: 'Ontology',
    meaningBangla: 'সত্তাতত্ত্ব',
    explanationEnglish: 'The branch of metaphysics dealing with the nature of being.',
    definition: {
      en: 'The philosophical study of being, existence, or reality.',
      bn: 'সত্তা, অস্তিত্ব বা বাস্তবতার দার্শনিক অধ্যয়ন।'
    },
    synonyms: ['Metaphysics', 'Study of existence'],
    usage: { en: 'Ontology questions what entities exist in the universe.', bn: 'সত্তাতত্ত্ব মহাবিশ্বে কী কী সত্তা বিদ্যমান তা নিয়ে প্রশ্ন তোলে।' }
  },
  {
    id: '12',
    term: 'Hermeneutics',
    meaningBangla: 'ব্যাখ্যাতত্ত্ব',
    explanationEnglish: 'The branch of knowledge that deals with interpretation, especially of the Bible or literary texts.',
    definition: {
      en: 'The theory and methodology of interpretation, especially of written texts.',
      bn: 'ব্যাখ্যার তত্ত্ব এবং পদ্ধতি, বিশেষ করে লিখিত পাঠ্যের।'
    },
    synonyms: ['Interpretation', 'Exegesis'],
    usage: { en: 'Hermeneutics is essential for understanding ancient texts.', bn: 'প্রাচীন পাঠ্য বোঝার জন্য ব্যাখ্যাতত্ত্ব অপরিহার্য।' }
  },
  {
    id: '13',
    term: 'Phenomenology',
    meaningBangla: 'অবভাসবাদ',
    explanationEnglish: 'The philosophical study of the structures of experience and consciousness.',
    definition: {
      en: 'An approach that concentrates on the study of consciousness and the objects of direct experience.',
      bn: 'একটি পদ্ধতি যা চেতনা এবং প্রত্যক্ষ অভিজ্ঞতার বস্তুর অধ্যয়নের উপর দৃষ্টি নিবদ্ধ করে।'
    },
    synonyms: ['Study of experience', 'Consciousness studies'],
    usage: { en: 'Phenomenology explores how we perceive the world.', bn: 'অবভাসবাদ অন্বেষণ করে আমরা কীভাবে বিশ্বকে উপলব্ধি করি।' }
  },
  {
    id: '14',
    term: 'Neuroplasticity',
    meaningBangla: 'স্নায়বিক নমনীয়তা',
    explanationEnglish: 'The ability of the brain to form and reorganize synaptic connections, especially in response to learning or experience.',
    definition: {
      en: 'The brain\'s ability to reorganize itself by forming new neural connections throughout life.',
      bn: 'সারা জীবন নতুন স্নায়বিক সংযোগ তৈরি করে মস্তিষ্ক নিজেকে পুনর্গঠিত করার ক্ষমতা।'
    },
    synonyms: ['Brain plasticity', 'Neural plasticity'],
    usage: { en: 'Neuroplasticity allows the brain to recover from injuries.', bn: 'স্নায়বিক নমনীয়তা মস্তিষ্ককে আঘাত থেকে সেরে উঠতে সাহায্য করে।' }
  }
];

export const diseases: Disease[] = [
  {
    id: '1',
    name: { en: 'Dengue Fever', bn: 'ডেঙ্গু জ্বর' },
    symptoms: {
      en: 'High fever, severe headache, pain behind eyes, joint and muscle pain, rash.',
      bn: 'তীব্র জ্বর, প্রচণ্ড মাথাব্যথা, চোখের পেছনে ব্যথা, জয়েন্ট এবং পেশীতে ব্যথা, র‍্যাশ।'
    },
    causes: {
      en: 'Dengue virus transmitted by Aedes mosquitoes.',
      bn: 'এডিস মশা বাহিত ডেঙ্গু ভাইরাস।'
    },
    diagnosis: {
      en: 'NS1 Antigen test, CBC (Platelet count), Dengue IgM/IgG.',
      bn: 'NS1 অ্যান্টিজেন পরীক্ষা, CBC (প্লাটিলেট কাউন্ট), ডেঙ্গু IgM/IgG।'
    },
    treatment: {
      en: 'Fluid replacement, rest, paracetamol for fever. Avoid aspirin/ibuprofen.',
      bn: 'তরল খাবার গ্রহণ, বিশ্রাম, জ্বরের জন্য প্যারাসিটামল। অ্যাসপিরিন/আইবুপ্রোফেন এড়িয়ে চলুন।'
    },
    prevention: {
      en: 'Destroy mosquito breeding sites, use mosquito nets, wear long-sleeved clothes.',
      bn: 'মশার প্রজননস্থল ধ্বংস করা, মশারি ব্যবহার করা, লম্বা হাতার পোশাক পরা।'
    }
  },
  {
    id: '2',
    name: { en: 'Typhoid Fever', bn: 'টাইফয়েড জ্বর' },
    symptoms: {
      en: 'Sustained high fever, weakness, stomach pain, headache, loss of appetite.',
      bn: 'টানা উচ্চ জ্বর, দুর্বলতা, পেটে ব্যথা, মাথাব্যথা, ক্ষুধামন্দা।'
    },
    causes: {
      en: 'Salmonella Typhi bacteria through contaminated food or water.',
      bn: 'দূষিত খাবার বা পানির মাধ্যমে সালমোনেলা টাইফি ব্যাকটেরিয়া।'
    },
    diagnosis: {
      en: 'Widal test, Blood culture, Typhidot.',
      bn: 'উইডাল পরীক্ষা, ব্লাড কালচার, টাইফিডট।'
    },
    treatment: {
      en: 'Antibiotics (Ciprofloxacin, Azithromycin), hydration, nutrition.',
      bn: 'অ্যান্টিবায়োটিক (সিপ্রোফ্লক্সাসিন, অ্যাজিথ্রোমাইসিন), হাইড্রেশন, পুষ্টি।'
    },
    prevention: {
      en: 'Drink boiled water, wash hands, avoid street food, vaccination.',
      bn: 'ফুটানো পানি পান করা, হাত ধোয়া, রাস্তার খাবার এড়িয়ে চলা, টিকা নেওয়া।'
    }
  },
  {
    id: '3',
    name: { en: 'Pneumonia', bn: 'নিউমোনিয়া' },
    symptoms: {
      en: 'Cough with phlegm, fever, chills, difficulty breathing, chest pain.',
      bn: 'কফসহ কাশি, জ্বর, কাঁপুনি, শ্বাসকষ্ট, বুকে ব্যথা।'
    },
    causes: {
      en: 'Infection by bacteria, viruses, or fungi in the lungs.',
      bn: 'ফুসফুসে ব্যাকটেরিয়া, ভাইরাস বা ছত্রাকের সংক্রমণ।'
    },
    diagnosis: {
      en: 'Chest X-ray, Blood tests, Pulse oximetry.',
      bn: 'বুকের এক্স-রে, রক্ত পরীক্ষা, পালস অক্সিমেট্রি।'
    },
    treatment: {
      en: 'Antibiotics or antivirals, cough medicine, fever reducers, rest.',
      bn: 'অ্যান্টিবায়োটিক বা অ্যান্টিভাইরাল, কাশির ওষুধ, জ্বর কমানোর ওষুধ, বিশ্রাম।'
    },
    prevention: {
      en: 'Vaccination, good hygiene, not smoking.',
      bn: 'টিকা নেওয়া, সুস্বাস্থ্যবিধি মেনে চলা, ধূমপান না করা।'
    }
  },
  {
    id: '4',
    name: { en: 'COVID-19', bn: 'কোভিড-১৯' },
    symptoms: {
      en: 'Fever, dry cough, tiredness, loss of taste or smell, difficulty breathing.',
      bn: 'জ্বর, শুকনো কাশি, ক্লান্তি, স্বাদ বা গন্ধ হারানো, শ্বাসকষ্ট।'
    },
    causes: {
      en: 'SARS-CoV-2 virus.',
      bn: 'সার্স-কোভ-২ (SARS-CoV-2) ভাইরাস।'
    },
    diagnosis: {
      en: 'RT-PCR test, Rapid Antigen test.',
      bn: 'আরটি-পিসিআর পরীক্ষা, র‍্যাপিড অ্যান্টিজেন পরীক্ষা।'
    },
    treatment: {
      en: 'Rest, hydration, fever reducers, antiviral medications, oxygen therapy in severe cases.',
      bn: 'বিশ্রাম, হাইড্রেশন, জ্বর কমানোর ওষুধ, অ্যান্টিভাইরাল ওষুধ, গুরুতর ক্ষেত্রে অক্সিজেন থেরাপি।'
    },
    prevention: {
      en: 'Vaccination, wearing masks, hand hygiene, social distancing.',
      bn: 'টিকা নেওয়া, মাস্ক পরা, হাত ধোয়া, সামাজিক দূরত্ব বজায় রাখা।'
    }
  },
  {
    id: '5',
    name: { en: 'Malaria', bn: 'ম্যালেরিয়া' },
    symptoms: {
      en: 'High fever, shaking chills, profuse sweating, headache, nausea.',
      bn: 'তীব্র জ্বর, কাঁপুনি, প্রচুর ঘাম, মাথাব্যথা, বমি বমি ভাব।'
    },
    causes: {
      en: 'Plasmodium parasites transmitted by Anopheles mosquitoes.',
      bn: 'অ্যানোফিলিস মশা বাহিত প্লাজমোডিয়াম পরজীবী।'
    },
    diagnosis: {
      en: 'Blood smear test, Rapid Diagnostic Test (RDT).',
      bn: 'ব্লাড স্মিয়ার পরীক্ষা, র‍্যাপিড ডায়াগনস্টিক টেস্ট (RDT)।'
    },
    treatment: {
      en: 'Antimalarial drugs like Artemisinin-based combination therapies (ACTs).',
      bn: 'অ্যান্টিম্যালেরিয়াল ওষুধ যেমন আর্টেমিসিনিন-ভিত্তিক কম্বিনেশন থেরাপি (ACTs)।'
    },
    prevention: {
      en: 'Mosquito nets, insect repellents, antimalarial medications before travel.',
      bn: 'মশারি, মশা নিরোধক, ভ্রমণের আগে অ্যান্টিম্যালেরিয়াল ওষুধ।'
    }
  },
  {
    id: '6',
    name: { en: 'Cholera', bn: 'কলেরা' },
    symptoms: {
      en: 'Severe watery diarrhea, vomiting, leg cramps, rapid dehydration.',
      bn: 'তীব্র জলের মতো ডায়রিয়া, বমি, পায়ে টান ধরা, দ্রুত পানিশূন্যতা।'
    },
    causes: {
      en: 'Vibrio cholerae bacteria from contaminated water or food.',
      bn: 'দূষিত পানি বা খাবার থেকে ভিব্রিও কলেরি ব্যাকটেরিয়া।'
    },
    diagnosis: {
      en: 'Stool culture, Rapid dipstick test.',
      bn: 'স্টুল কালচার, র‍্যাপিড ডিপস্টিক পরীক্ষা।'
    },
    treatment: {
      en: 'Oral Rehydration Solution (ORS), intravenous fluids, antibiotics.',
      bn: 'খাবার স্যালাইন (ORS), শিরায় তরল, অ্যান্টিবায়োটিক।'
    },
    prevention: {
      en: 'Safe drinking water, proper sanitation, handwashing, cholera vaccine.',
      bn: 'নিরাপদ পানীয় জল, সঠিক স্যানিটেশন, হাত ধোয়া, কলেরার টিকা।'
    }
  },
  {
    id: '7',
    name: { en: 'Tuberculosis (TB)', bn: 'যক্ষ্মা (টিবি)' },
    symptoms: {
      en: 'Persistent cough (lasting >3 weeks), chest pain, coughing up blood, fatigue, night sweats.',
      bn: 'টানা কাশি (৩ সপ্তাহের বেশি), বুকে ব্যথা, কাশির সাথে রক্ত পড়া, ক্লান্তি, রাতে ঘাম।'
    },
    causes: {
      en: 'Mycobacterium tuberculosis bacteria.',
      bn: 'মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস ব্যাকটেরিয়া।'
    },
    diagnosis: {
      en: 'Sputum test, Chest X-ray, Tuberculin skin test (Mantoux).',
      bn: 'কফ পরীক্ষা, বুকের এক্স-রে, টিউবারকুলিন স্কিন টেস্ট (Mantoux)।'
    },
    treatment: {
      en: 'Long-term course of antibiotics (e.g., Isoniazid, Rifampin) for 6-9 months.',
      bn: '৬-৯ মাসের জন্য অ্যান্টিবায়োটিকের দীর্ঘমেয়াদী কোর্স (যেমন, আইসোনিয়াজিড, রিফাম্পিন)।'
    },
    prevention: {
      en: 'BCG vaccination, avoiding close contact with infected individuals, good ventilation.',
      bn: 'বিসিজি টিকা, সংক্রামিত ব্যক্তিদের সাথে ঘনিষ্ঠ যোগাযোগ এড়ানো, ভালো বায়ুচলাচল।'
    }
  },
  {
    id: '8',
    name: { en: 'Diabetes Type 2', bn: 'ডায়াবেটিস টাইপ ২' },
    symptoms: {
      en: 'Increased thirst, frequent urination, increased hunger, unintended weight loss, fatigue.',
      bn: 'অতিরিক্ত তৃষ্ণা, ঘন ঘন প্রস্রাব, অতিরিক্ত ক্ষুধা, অনিচ্ছাকৃত ওজন হ্রাস, ক্লান্তি।'
    },
    causes: {
      en: 'Insulin resistance, obesity, lack of physical activity, genetics.',
      bn: 'ইনসুলিন রেজিস্ট্যান্স, স্থূলতা, শারীরিক ক্রিয়াকলাপের অভাব, জেনেটিক্স।'
    },
    diagnosis: {
      en: 'Fasting blood sugar test, HbA1c test, Oral glucose tolerance test.',
      bn: 'ফাস্টিং ব্লাড সুগার টেস্ট, HbA1c টেস্ট, ওরাল গ্লুকোজ টলারেন্স টেস্ট।'
    },
    treatment: {
      en: 'Diet modification, exercise, oral medications (e.g., Metformin), insulin therapy.',
      bn: 'খাদ্যাভ্যাস পরিবর্তন, ব্যায়াম, মুখে খাওয়ার ওষুধ (যেমন, মেটফরমিন), ইনসুলিন থেরাপি।'
    },
    prevention: {
      en: 'Healthy diet, regular exercise, maintaining a healthy weight.',
      bn: 'স্বাস্থ্যকর খাবার, নিয়মিত ব্যায়াম, স্বাস্থ্যকর ওজন বজায় রাখা।'
    }
  },
  {
    id: '9',
    name: { en: 'Hypertension', bn: 'উচ্চ রক্তচাপ' },
    symptoms: {
      en: 'Often asymptomatic. Severe cases may cause headaches, shortness of breath, nosebleeds.',
      bn: 'প্রায়ই কোনো লক্ষণ থাকে না। গুরুতর ক্ষেত্রে মাথাব্যথা, শ্বাসকষ্ট, নাক দিয়ে রক্ত পড়া হতে পারে।'
    },
    causes: {
      en: 'High salt intake, stress, obesity, genetics, underlying kidney issues.',
      bn: 'অতিরিক্ত লবণ গ্রহণ, মানসিক চাপ, স্থূলতা, জেনেটিক্স, কিডনির সমস্যা।'
    },
    diagnosis: {
      en: 'Blood pressure measurement using a sphygmomanometer.',
      bn: 'স্ফিগমোম্যানোমিটার ব্যবহার করে রক্তচাপ পরিমাপ।'
    },
    treatment: {
      en: 'Lifestyle changes, antihypertensive medications (e.g., ACE inhibitors, beta-blockers).',
      bn: 'জীবনযাত্রার পরিবর্তন, অ্যান্টিহাইপারটেনসিভ ওষুধ (যেমন, এসিই ইনহিবিটরস, বিটা-ব্লকার)।'
    },
    prevention: {
      en: 'Low-sodium diet, regular exercise, stress management, limiting alcohol.',
      bn: 'কম সোডিয়ামযুক্ত খাবার, নিয়মিত ব্যায়াম, মানসিক চাপ নিয়ন্ত্রণ, অ্যালকোহল সীমিত করা।'
    }
  },
  {
    id: '10',
    name: { en: 'Asthma', bn: 'হাঁপানি' },
    symptoms: {
      en: 'Shortness of breath, chest tightness, wheezing, coughing attacks.',
      bn: 'শ্বাসকষ্ট, বুকে চাপ অনুভব করা, শ্বাস নেওয়ার সময় বাঁশির মতো শব্দ, কাশির আক্রমণ।'
    },
    causes: {
      en: 'Airborne allergens, respiratory infections, physical activity, cold air, stress.',
      bn: 'বায়ুবাহিত অ্যালার্জেন, শ্বাসযন্ত্রের সংক্রমণ, শারীরিক ক্রিয়াকলাপ, ঠান্ডা বাতাস, মানসিক চাপ।'
    },
    diagnosis: {
      en: 'Spirometry, Peak flow test, Allergy testing.',
      bn: 'স্পাইরোমেট্রি, পিক ফ্লো টেস্ট, অ্যালার্জি টেস্টিং।'
    },
    treatment: {
      en: 'Inhaled corticosteroids, bronchodilators (inhalers), avoiding triggers.',
      bn: 'ইনহেলড কর্টিকোস্টেরয়েড, ব্রঙ্কোডাইলেটর (ইনহেলার), ট্রিগার এড়িয়ে চলা।'
    },
    prevention: {
      en: 'Identify and avoid asthma triggers, get vaccinated for influenza and pneumonia.',
      bn: 'হাঁপানির ট্রিগার শনাক্ত করা এবং এড়ানো, ইনফ্লুয়েঞ্জা এবং নিউমোনিয়ার টিকা নেওয়া।'
    }
  },
  {
    id: '11',
    name: { en: 'Alzheimer\'s Disease', bn: 'আলঝেইমার রোগ' },
    symptoms: {
      en: 'Memory loss, confusion, difficulty thinking, changes in behavior and personality.',
      bn: 'স্মৃতিশক্তি হ্রাস, বিভ্রান্তি, চিন্তা করতে অসুবিধা, আচরণ এবং ব্যক্তিত্বের পরিবর্তন।'
    },
    causes: {
      en: 'Brain cell death, buildup of amyloid plaques and tau tangles, genetics, aging.',
      bn: 'মস্তিষ্কের কোষের মৃত্যু, অ্যামাইলয়েড ফলক এবং টাউ জট তৈরি হওয়া, জেনেটিক্স, বার্ধক্য।'
    },
    diagnosis: {
      en: 'Cognitive tests, Neurological exams, Brain imaging (MRI, PET scan).',
      bn: 'কগনিটিভ টেস্ট, স্নায়বিক পরীক্ষা, ব্রেন ইমেজিং (এমআরআই, পিইটি স্ক্যান)।'
    },
    treatment: {
      en: 'No cure. Medications to manage symptoms (e.g., Donepezil), supportive care.',
      bn: 'কোনো নিরাময় নেই। লক্ষণ নিয়ন্ত্রণের ওষুধ (যেমন, ডনেপেজিল), সহায়ক যত্ন।'
    },
    prevention: {
      en: 'Mental stimulation, healthy diet, regular exercise, cardiovascular health.',
      bn: 'মানসিক উদ্দীপনা, স্বাস্থ্যকর খাবার, নিয়মিত ব্যায়াম, কার্ডিওভাসকুলার স্বাস্থ্য।'
    }
  },
  {
    id: '12',
    name: { en: 'HIV/AIDS', bn: 'এইচআইভি/এইডস' },
    symptoms: {
      en: 'Fever, chills, rash, night sweats, muscle aches, sore throat, fatigue, swollen lymph nodes.',
      bn: 'জ্বর, কাঁপুনি, র‍্যাশ, রাতে ঘাম, পেশীতে ব্যথা, গলা ব্যথা, ক্লান্তি, লিম্ফ নোড ফুলে যাওয়া।'
    },
    causes: {
      en: 'Human Immunodeficiency Virus (HIV) transmitted via bodily fluids.',
      bn: 'হিউম্যান ইমিউনোডেফিসিয়েন্সি ভাইরাস (এইচআইভি) শারীরিক তরলের মাধ্যমে ছড়ায়।'
    },
    diagnosis: {
      en: 'Blood tests (Antigen/Antibody tests), Nucleic acid tests (NATs).',
      bn: 'রক্ত পরীক্ষা (অ্যান্টিজেন/অ্যান্টিবডি পরীক্ষা), নিউক্লিক অ্যাসিড পরীক্ষা (NATs)।'
    },
    treatment: {
      en: 'Antiretroviral therapy (ART) to suppress viral load.',
      bn: 'ভাইরাল লোড কমানোর জন্য অ্যান্টিরেট্রোভাইরাল থেরাপি (ART)।'
    },
    prevention: {
      en: 'Safe sex practices, avoiding needle sharing, Pre-exposure prophylaxis (PrEP).',
      bn: 'নিরাপদ যৌন অনুশীলন, সুই ভাগাভাগি এড়ানো, প্রি-এক্সপোজার প্রফিল্যাক্সিস (PrEP)।'
    }
  },
  {
    id: '13',
    name: { en: 'Rabies', bn: 'জলাতঙ্ক' },
    symptoms: {
      en: 'Fever, headache, excess salivation, muscle spasms, confusion, fear of water (hydrophobia).',
      bn: 'জ্বর, মাথাব্যথা, অতিরিক্ত লালা, পেশীর খিঁচুনি, বিভ্রান্তি, জলের ভয় (হাইড্রোফোবিয়া)।'
    },
    causes: {
      en: 'Rabies virus transmitted through the bite of an infected animal (e.g., dogs, bats).',
      bn: 'সংক্রামিত প্রাণীর (যেমন, কুকুর, বাদুড়) কামড়ের মাধ্যমে জলাতঙ্ক ভাইরাস ছড়ায়।'
    },
    diagnosis: {
      en: 'Direct fluorescent antibody (DFA) test on brain tissue (post-mortem), saliva tests.',
      bn: 'মস্তিষ্কের টিস্যুতে ডাইরেক্ট ফ্লুরোসেন্ট অ্যান্টিবডি (DFA) পরীক্ষা (মরণোত্তর), লালা পরীক্ষা।'
    },
    treatment: {
      en: 'Post-exposure prophylaxis (PEP) including rabies vaccine and immunoglobulin immediately after bite.',
      bn: 'কামড়ের পরপরই জলাতঙ্কের টিকা এবং ইমিউনোগ্লোবুলিন সহ পোস্ট-এক্সপোজার প্রফিল্যাক্সিস (PEP)।'
    },
    prevention: {
      en: 'Vaccinating pets, avoiding stray animals, pre-exposure vaccination for high-risk groups.',
      bn: 'পোষা প্রাণীদের টিকা দেওয়া, বিপথগামী প্রাণী এড়ানো, উচ্চ-ঝুঁকিপূর্ণ গোষ্ঠীর জন্য প্রি-এক্সপোজার টিকা।'
    }
  },
  {
    id: '14',
    name: { en: 'Measles', bn: 'হাম' },
    symptoms: {
      en: 'High fever, cough, runny nose, inflamed eyes, Koplik spots, full-body rash.',
      bn: 'তীব্র জ্বর, কাশি, নাক দিয়ে পানি পড়া, চোখ লাল হওয়া, কোপলিক স্পট, সারা শরীরে র‍্যাশ।'
    },
    causes: {
      en: 'Measles virus (highly contagious, airborne).',
      bn: 'হামের ভাইরাস (অত্যন্ত সংক্রামক, বায়ুবাহিত)।'
    },
    diagnosis: {
      en: 'Clinical observation of rash and Koplik spots, Blood test for measles antibodies.',
      bn: 'র‍্যাশ এবং কোপলিক স্পটের ক্লিনিকাল পর্যবেক্ষণ, হামের অ্যান্টিবডির জন্য রক্ত পরীক্ষা।'
    },
    treatment: {
      en: 'Supportive care, fever reducers, Vitamin A supplements, hydration.',
      bn: 'সহায়ক যত্ন, জ্বর কমানোর ওষুধ, ভিটামিন এ পরিপূরক, হাইড্রেশন।'
    },
    prevention: {
      en: 'MMR (Measles, Mumps, Rubella) vaccine.',
      bn: 'এমএমআর (হাম, মাম্পস, রুবেলা) টিকা।'
    }
  },
  {
    id: '15',
    name: { en: 'Hepatitis B', bn: 'হেপাটাইটিস বি' },
    symptoms: {
      en: 'Abdominal pain, dark urine, fever, joint pain, loss of appetite, jaundice (yellowing of skin/eyes).',
      bn: 'পেটে ব্যথা, গাঢ় প্রস্রাব, জ্বর, জয়েন্টে ব্যথা, ক্ষুধামন্দা, জন্ডিস (ত্বক/চোখ হলুদ হওয়া)।'
    },
    causes: {
      en: 'Hepatitis B virus (HBV) transmitted through blood, semen, or other body fluids.',
      bn: 'হেপাটাইটিস বি ভাইরাস (HBV) রক্ত, বীর্য বা অন্যান্য শারীরিক তরলের মাধ্যমে ছড়ায়।'
    },
    diagnosis: {
      en: 'Blood tests (HBsAg, Anti-HBs, Anti-HBc), Liver ultrasound.',
      bn: 'রক্ত পরীক্ষা (HBsAg, Anti-HBs, Anti-HBc), লিভার আল্ট্রাসাউন্ড।'
    },
    treatment: {
      en: 'Antiviral medications, interferon injections, liver transplant in severe cases.',
      bn: 'অ্যান্টিভাইরাল ওষুধ, ইন্টারফেরন ইনজেকশন, গুরুতর ক্ষেত্রে লিভার ট্রান্সপ্লান্ট।'
    },
    prevention: {
      en: 'Hepatitis B vaccine, safe sex, avoiding sharing needles or personal items like razors.',
      bn: 'হেপাটাইটিস বি টিকা, নিরাপদ যৌনতা, সুই বা রেজার ভাগাভাগি এড়ানো।'
    }
  },
  {
    id: '16',
    name: { en: 'Cancer (General)', bn: 'ক্যান্সার (সাধারণ)' },
    symptoms: {
      en: 'Fatigue, lump or area of thickening, weight changes, skin changes, persistent cough or trouble breathing.',
      bn: 'ক্লান্তি, পিণ্ড বা ঘন হওয়া অংশ, ওজনের পরিবর্তন, ত্বকের পরিবর্তন, অবিরাম কাশি বা শ্বাসকষ্ট।'
    },
    causes: {
      en: 'Genetic mutations, smoking, radiation, certain viruses, obesity.',
      bn: 'জেনেটিক মিউটেশন, ধূমপান, বিকিরণ, কিছু ভাইরাস, স্থূলতা।'
    },
    diagnosis: {
      en: 'Biopsy, CT scan, MRI, PET scan, blood tests (tumor markers).',
      bn: 'বায়োপসি, সিটি স্ক্যান, এমআরআই, পিইটি স্ক্যান, রক্ত পরীক্ষা (টিউমার মার্কার)।'
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy.',
      bn: 'সার্জারি, কেমোথেরাপি, রেডিয়েশন থেরাপি, ইমিউনোথেরাপি, টার্গেটেড থেরাপি।'
    },
    prevention: {
      en: 'Avoid tobacco, eat a healthy diet, maintain a healthy weight, protect yourself from the sun, get vaccinated.',
      bn: 'তামাক এড়িয়ে চলুন, স্বাস্থ্যকর খাবার খান, স্বাস্থ্যকর ওজন বজায় রাখুন, সূর্য থেকে নিজেকে রক্ষা করুন, টিকা নিন।'
    }
  },
  {
    id: '17',
    name: { en: 'Stroke', bn: 'স্ট্রোক' },
    symptoms: {
      en: 'Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body. Sudden confusion, trouble speaking, or difficulty understanding speech.',
      bn: 'মুখ, বাহু বা পায়ে হঠাৎ অসাড়তা বা দুর্বলতা, বিশেষ করে শরীরের একপাশে। হঠাৎ বিভ্রান্তি, কথা বলতে সমস্যা বা কথা বুঝতে অসুবিধা।'
    },
    causes: {
      en: 'Blocked artery (ischemic stroke) or leaking/bursting of a blood vessel (hemorrhagic stroke).',
      bn: 'অবরুদ্ধ ধমনী (ইস্কেমিক স্ট্রোক) বা রক্তনালী লিক/ফেটে যাওয়া (হেমোরেজিক স্ট্রোক)।'
    },
    diagnosis: {
      en: 'CT scan, MRI, carotid ultrasound, cerebral angiogram, echocardiogram.',
      bn: 'সিটি স্ক্যান, এমআরআই, ক্যারোটিড আল্ট্রাসাউন্ড, সেরিব্রাল অ্যাঞ্জিওগ্রাম, ইকোকার্ডিওগ্রাম।'
    },
    treatment: {
      en: 'Emergency IV medication (tPA), endovascular procedures, surgery, rehabilitation.',
      bn: 'জরুরী আইভি ওষুধ (tPA), এন্ডোভাসকুলার পদ্ধতি, সার্জারি, পুনর্বাসন।'
    },
    prevention: {
      en: 'Control high blood pressure, lower cholesterol, quit smoking, manage diabetes, maintain a healthy weight.',
      bn: 'উচ্চ রক্তচাপ নিয়ন্ত্রণ করুন, কোলেস্টেরল কমান, ধূমপান ত্যাগ করুন, ডায়াবেটিস পরিচালনা করুন, স্বাস্থ্যকর ওজন বজায় রাখুন।'
    }
  },
  {
    id: '18',
    name: { en: 'Heart Attack (Myocardial Infarction)', bn: 'হার্ট অ্যাটাক (মায়োকার্ডিয়াল ইনফার্কশন)' },
    symptoms: {
      en: 'Chest pain or discomfort, shortness of breath, pain in the arm, back, neck, jaw, or stomach, cold sweat, nausea.',
      bn: 'বুকে ব্যথা বা অস্বস্তি, শ্বাসকষ্ট, বাহু, পিঠ, ঘাড়, চোয়াল বা পেটে ব্যথা, ঠান্ডা ঘাম, বমি বমি ভাব।'
    },
    causes: {
      en: 'Coronary artery disease (plaque buildup blocking blood flow to the heart).',
      bn: 'করোনারি ধমনী রোগ (প্লাক জমার কারণে হার্টে রক্ত প্রবাহ বাধাগ্রস্ত হয়)।'
    },
    diagnosis: {
      en: 'ECG/EKG, blood tests (troponin), echocardiogram, coronary angiography.',
      bn: 'ইসিজি/ইকেজি, রক্ত পরীক্ষা (ট্রপোনিন), ইকোকার্ডিওগ্রাম, করোনারি অ্যাঞ্জিওগ্রাফি।'
    },
    treatment: {
      en: 'Aspirin, thrombolytics, angioplasty and stenting, coronary artery bypass surgery.',
      bn: 'অ্যাসপিরিন, থ্রম্বোলাইটিক্স, অ্যাঞ্জিওপ্লাস্টি এবং স্টেন্টিং, করোনারি আর্টারি বাইপাস সার্জারি।'
    },
    prevention: {
      en: 'Healthy diet, regular exercise, no smoking, stress management, control BP and cholesterol.',
      bn: 'স্বাস্থ্যকর খাদ্য, নিয়মিত ব্যায়াম, ধূমপান না করা, স্ট্রেস ম্যানেজমেন্ট, রক্তচাপ এবং কোলেস্টেরল নিয়ন্ত্রণ।'
    }
  },
  {
    id: '19',
    name: { en: 'Chronic Kidney Disease (CKD)', bn: 'দীর্ঘস্থায়ী কিডনি রোগ (CKD)' },
    symptoms: {
      en: 'Nausea, vomiting, loss of appetite, fatigue, sleep problems, changes in urine output, swelling of feet/ankles.',
      bn: 'বমি বমি ভাব, বমি, ক্ষুধামন্দা, ক্লান্তি, ঘুমের সমস্যা, প্রস্রাবের পরিমাণের পরিবর্তন, পা/গোড়ালি ফুলে যাওয়া।'
    },
    causes: {
      en: 'Diabetes (type 1 or 2), high blood pressure, glomerulonephritis, polycystic kidney disease.',
      bn: 'ডায়াবেটিস (টাইপ ১ বা ২), উচ্চ রক্তচাপ, গ্লোমেরুলোনফ্রাইটিস, পলিসিস্টিক কিডনি রোগ।'
    },
    diagnosis: {
      en: 'Blood tests (creatinine, GFR), urine tests, kidney ultrasound, kidney biopsy.',
      bn: 'রক্ত পরীক্ষা (ক্রিয়েটিনিন, জিএফআর), প্রস্রাব পরীক্ষা, কিডনি আল্ট্রাসাউন্ড, কিডনি বায়োপসি।'
    },
    treatment: {
      en: 'Medications to control BP/cholesterol, treat anemia, dialysis, kidney transplant.',
      bn: 'রক্তচাপ/কোলেস্টেরল নিয়ন্ত্রণের ওষুধ, রক্তাল্পতার চিকিৎসা, ডায়ালাইসিস, কিডনি ট্রান্সপ্লান্ট।'
    },
    prevention: {
      en: 'Manage diabetes and high blood pressure, maintain a healthy weight, don\'t smoke, limit alcohol.',
      bn: 'ডায়াবেটিস এবং উচ্চ রক্তচাপ পরিচালনা করুন, স্বাস্থ্যকর ওজন বজায় রাখুন, ধূমপান করবেন না, অ্যালকোহল সীমিত করুন।'
    }
  },
  {
    id: '20',
    name: { en: 'Peptic Ulcer Disease', bn: 'পেপটিক আলসার' },
    symptoms: {
      en: 'Burning stomach pain, feeling of fullness, bloating or belching, intolerance to fatty foods, heartburn, nausea.',
      bn: 'পেটে জ্বালাপোড়া ব্যথা, পেট ভরা অনুভূতি, ফোলাভাব বা ঢেকুর, চর্বিযুক্ত খাবারে অসহিষ্ণুতা, বুকজ্বালা, বমি বমি ভাব।'
    },
    causes: {
      en: 'Helicobacter pylori (H. pylori) bacteria, long-term use of NSAIDs (like ibuprofen, naproxen).',
      bn: 'হেলিকোব্যাক্টার পাইলোরি (H. pylori) ব্যাকটেরিয়া, দীর্ঘমেয়াদী NSAIDs (যেমন আইবুপ্রোফেন, নেপ্রোক্সেন) ব্যবহার।'
    },
    diagnosis: {
      en: 'Endoscopy, test for H. pylori (breath, stool, or blood test), upper gastrointestinal series (X-ray).',
      bn: 'এন্ডোস্কোপি, H. pylori এর জন্য পরীক্ষা (শ্বাস, মল বা রক্ত পরীক্ষা), উপরের গ্যাস্ট্রোইনটেস্টাইনাল সিরিজ (এক্স-রে)।'
    },
    treatment: {
      en: 'Antibiotics (if H. pylori is present), proton pump inhibitors (PPIs), H2 blockers, antacids.',
      bn: 'অ্যান্টিবায়োটিক (যদি H. pylori থাকে), প্রোটন পাম্প ইনহিবিটর (PPIs), H2 ব্লকার, অ্যান্টাসিড।'
    },
    prevention: {
      en: 'Protect yourself from infections (wash hands), use caution with pain relievers (NSAIDs), limit alcohol.',
      bn: 'সংক্রমণ থেকে নিজেকে রক্ষা করুন (হাত ধোয়া), ব্যথানাশক (NSAIDs) ব্যবহারে সতর্কতা অবলম্বন করুন, অ্যালকোহল সীমিত করুন।'
    }
  },
  {
    id: '21',
    name: { en: 'Migraine', bn: 'মাইগ্রেন' },
    symptoms: {
      en: 'Throbbing pain (usually on one side of the head), sensitivity to light and sound, nausea, vomiting, visual auras.',
      bn: 'দপদপ করা ব্যথা (সাধারণত মাথার একপাশে), আলো এবং শব্দের প্রতি সংবেদনশীলতা, বমি বমি ভাব, বমি, চাক্ষুষ আভা (aura)।'
    },
    causes: {
      en: 'Genetics, environmental factors, changes in the brainstem and its interactions with the trigeminal nerve, serotonin imbalances.',
      bn: 'জেনেটিক্স, পরিবেশগত কারণ, ব্রেনস্টেমের পরিবর্তন এবং ট্রাইজেমিনাল নার্ভের সাথে এর মিথস্ক্রিয়া, সেরোটোনিন ভারসাম্যহীনতা।'
    },
    diagnosis: {
      en: 'Clinical evaluation based on symptoms, neurological exam, MRI or CT scan (to rule out other causes).',
      bn: 'লক্ষণগুলির উপর ভিত্তি করে ক্লিনিকাল মূল্যায়ন, স্নায়বিক পরীক্ষা, এমআরআই বা সিটি স্ক্যান (অন্যান্য কারণগুলি বাতিল করতে)।'
    },
    treatment: {
      en: 'Pain relievers (triptans, NSAIDs), anti-nausea drugs, preventive medications (beta-blockers, antidepressants).',
      bn: 'ব্যথানাশক (ট্রিপটান, NSAIDs), বমি বমি ভাব বিরোধী ওষুধ, প্রতিরোধমূলক ওষুধ (বিটা-ব্লকার, অ্যান্টিডিপ্রেসেন্টস)।'
    },
    prevention: {
      en: 'Identify and avoid triggers (certain foods, stress, lack of sleep), regular exercise, adequate hydration.',
      bn: 'ট্রিগারগুলি চিহ্নিত করুন এবং এড়িয়ে চলুন (কিছু খাবার, স্ট্রেস, ঘুমের অভাব), নিয়মিত ব্যায়াম, পর্যাপ্ত হাইড্রেশন।'
    }
  },
  {
    id: '22',
    name: { en: 'Epilepsy', bn: 'মৃগীরোগ' },
    symptoms: {
      en: 'Temporary confusion, a staring spell, stiff muscles, uncontrollable jerking movements of the arms and legs, loss of consciousness.',
      bn: 'অস্থায়ী বিভ্রান্তি, একদৃষ্টে তাকিয়ে থাকা, শক্ত পেশী, বাহু এবং পায়ের অনিয়ন্ত্রিত ঝাঁকুনি, চেতনা হ্রাস।'
    },
    causes: {
      en: 'Genetic influence, head trauma, brain conditions (tumors, strokes), infectious diseases (meningitis), prenatal injury.',
      bn: 'জেনেটিক প্রভাব, মাথায় আঘাত, মস্তিষ্কের অবস্থা (টিউমার, স্ট্রোক), সংক্রামক রোগ (মেনিনজাইটিস), প্রসবপূর্ব আঘাত।'
    },
    diagnosis: {
      en: 'Neurological exam, blood tests, Electroencephalogram (EEG), High-density EEG, CT scan, MRI.',
      bn: 'স্নায়বিক পরীক্ষা, রক্ত পরীক্ষা, ইলেক্ট্রোএনসেফালোগ্রাম (ইইজি), উচ্চ-ঘনত্বের ইইজি, সিটি স্ক্যান, এমআরআই।'
    },
    treatment: {
      en: 'Anti-seizure medications, vagus nerve stimulation, ketogenic diet, brain surgery.',
      bn: 'খিঁচুনি বিরোধী ওষুধ, ভ্যাগাস নার্ভ স্টিমুলেশন, কেটোজেনিক ডায়েট, মস্তিষ্কের সার্জারি।'
    },
    prevention: {
      en: 'Prevent traumatic brain injuries (wear helmets, seatbelts), lower chances of stroke and heart disease, get vaccinated.',
      bn: 'মস্তিষ্কের আঘাত প্রতিরোধ করুন (হেলমেট, সিটবেল্ট পরুন), স্ট্রোক এবং হৃদরোগের সম্ভাবনা কমান, টিকা নিন।'
    }
  },
  {
    id: '23',
    name: { en: 'Osteoarthritis', bn: 'অস্টিওআর্থারাইটিস' },
    symptoms: {
      en: 'Pain, stiffness, tenderness, loss of flexibility, grating sensation, bone spurs, swelling in joints.',
      bn: 'ব্যথা, আড়ষ্টতা, কোমলতা, নমনীয়তা হ্রাস, ঘর্ষণ অনুভূতি, হাড়ের স্পার, জয়েন্টগুলোতে ফোলাভাব।'
    },
    causes: {
      en: 'Wear and tear of cartilage over time, joint injuries, obesity, genetics, bone deformities.',
      bn: 'সময়ের সাথে সাথে তরুণাস্থির ক্ষয়, জয়েন্টে আঘাত, স্থূলতা, জেনেটিক্স, হাড়ের বিকৃতি।'
    },
    diagnosis: {
      en: 'X-rays, MRI, blood tests (to rule out other causes), joint fluid analysis.',
      bn: 'এক্স-রে, এমআরআই, রক্ত পরীক্ষা (অন্যান্য কারণগুলি বাতিল করতে), জয়েন্ট ফ্লুইড বিশ্লেষণ।'
    },
    treatment: {
      en: 'Acetaminophen, NSAIDs, duloxetine, physical therapy, occupational therapy, cortisone injections, joint replacement surgery.',
      bn: 'অ্যাসিটামিনোফেন, NSAIDs, ডুলোক্সেটিন, শারীরিক থেরাপি, পেশাগত থেরাপি, কর্টিসোন ইনজেকশন, জয়েন্ট প্রতিস্থাপন সার্জারি।'
    },
    prevention: {
      en: 'Maintain a healthy weight, control blood sugar, be active, protect joints from injury.',
      bn: 'স্বাস্থ্যকর ওজন বজায় রাখুন, রক্তে শর্করা নিয়ন্ত্রণ করুন, সক্রিয় থাকুন, জয়েন্টগুলোকে আঘাত থেকে রক্ষা করুন।'
    }
  },
  {
    id: '24',
    name: { en: 'Anemia', bn: 'রক্তাল্পতা' },
    symptoms: {
      en: 'Fatigue, weakness, pale or yellowish skin, irregular heartbeats, shortness of breath, dizziness, cold hands and feet.',
      bn: 'ক্লান্তি, দুর্বলতা, ফ্যাকাশে বা হলদেটে ত্বক, অনিয়মিত হৃদস্পন্দন, শ্বাসকষ্ট, মাথা ঘোরা, হাত ও পা ঠান্ডা হওয়া।'
    },
    causes: {
      en: 'Iron deficiency, vitamin deficiency (B12, folate), chronic diseases, bone marrow diseases, hemolytic anemias, sickle cell anemia.',
      bn: 'আয়রনের ঘাটতি, ভিটামিনের ঘাটতি (B12, ফোলেট), দীর্ঘস্থায়ী রোগ, অস্থিমজ্জার রোগ, হেমোলাইটিক অ্যানিমিয়া, সিকেল সেল অ্যানিমিয়া।'
    },
    diagnosis: {
      en: 'Complete blood count (CBC), test to determine the size and shape of red blood cells, iron studies, vitamin B12/folate levels.',
      bn: 'কমপ্লিট ব্লাড কাউন্ট (সিবিসি), লোহিত রক্তকণিকার আকার এবং আকৃতি নির্ধারণের পরীক্ষা, আয়রন স্টাডিজ, ভিটামিন বি১২/ফোলেট লেভেল।'
    },
    treatment: {
      en: 'Iron supplements, vitamin supplements, dietary changes, blood transfusions, bone marrow transplant (in severe cases).',
      bn: 'আয়রন সাপ্লিমেন্ট, ভিটামিন সাপ্লিমেন্ট, খাদ্যতালিকায় পরিবর্তন, রক্ত সঞ্চালন, অস্থিমজ্জা প্রতিস্থাপন (গুরুতর ক্ষেত্রে)।'
    },
    prevention: {
      en: 'Eat a diet rich in iron, folate, vitamin B12, and vitamin C. Consider genetic counseling if you have a family history.',
      bn: 'আয়রন, ফোলেট, ভিটামিন B12 এবং ভিটামিন সি সমৃদ্ধ খাবার খান। আপনার যদি পারিবারিক ইতিহাস থাকে তবে জেনেটিক কাউন্সেলিং বিবেচনা করুন।'
    }
  },
  {
    id: '25',
    name: { en: 'Common Cold', bn: 'সাধারণ সর্দি' },
    symptoms: {
      en: 'Runny or stuffy nose, sore throat, cough, congestion, slight body aches, mild headache, sneezing, low-grade fever.',
      bn: 'নাক দিয়ে পানি পড়া বা নাক বন্ধ হওয়া, গলা ব্যথা, কাশি, কনজেশন, শরীরে হালকা ব্যথা, হালকা মাথাব্যথা, হাঁচি, হালকা জ্বর।'
    },
    causes: {
      en: 'Various viruses, most commonly rhinoviruses.',
      bn: 'বিভিন্ন ভাইরাস, সবচেয়ে বেশি রাইনোভাইরাস।'
    },
    diagnosis: {
      en: 'Usually self-diagnosed based on symptoms. Rarely, a doctor may take a throat swab to rule out strep throat.',
      bn: 'সাধারণত লক্ষণগুলির উপর ভিত্তি করে স্ব-নির্ণয় করা হয়। খুব কমই, একজন ডাক্তার স্ট্রেপ থ্রোট বাতিল করার জন্য গলার সোয়াব নিতে পারেন।'
    },
    treatment: {
      en: 'Rest, fluids, over-the-counter pain relievers (acetaminophen, ibuprofen), decongestants, cough syrups.',
      bn: 'বিশ্রাম, তরল, ওভার-দ্য-কাউন্টার ব্যথানাশক (অ্যাসিটামিনোফেন, আইবুপ্রোফেন), ডিকনজেস্ট্যান্ট, কাফ সিরাপ।'
    },
    prevention: {
      en: 'Wash hands frequently, avoid touching face, stay away from sick people, cover mouth/nose when coughing/sneezing.',
      bn: 'ঘন ঘন হাত ধোয়া, মুখ স্পর্শ করা এড়িয়ে চলুন, অসুস্থ ব্যক্তিদের থেকে দূরে থাকুন, কাশি/হাঁচির সময় মুখ/নাক ঢেকে রাখুন।'
    }
  },
  {
    id: '26',
    name: { en: 'Influenza (Flu)', bn: 'ইনফ্লুয়েঞ্জা (ফ্লু)' },
    symptoms: {
      en: 'Fever, chills, muscle aches, cough, congestion, runny nose, headaches, and fatigue.',
      bn: 'জ্বর, ঠান্ডা লাগা, পেশীতে ব্যথা, কাশি, কনজেশন, নাক দিয়ে পানি পড়া, মাথাব্যথা এবং ক্লান্তি।'
    },
    causes: {
      en: 'Influenza viruses that infect the nose, throat, and lungs.',
      bn: 'ইনফ্লুয়েঞ্জা ভাইরাস যা নাক, গলা এবং ফুসফুসকে সংক্রমিত করে।'
    },
    diagnosis: {
      en: 'Physical exam, rapid influenza diagnostic tests (RIDTs), viral culture.',
      bn: 'শারীরিক পরীক্ষা, দ্রুত ইনফ্লুয়েঞ্জা ডায়াগনস্টিক পরীক্ষা (RIDTs), ভাইরাল কালচার।'
    },
    treatment: {
      en: 'Rest, plenty of fluids, antiviral medications (if prescribed early), pain relievers.',
      bn: 'বিশ্রাম, প্রচুর তরল, অ্যান্টিভাইরাল ওষুধ (যদি তাড়াতাড়ি নির্ধারিত হয়), ব্যথানাশক।'
    },
    prevention: {
      en: 'Annual flu vaccine, frequent handwashing, avoiding close contact with sick individuals.',
      bn: 'বার্ষিক ফ্লু ভ্যাকসিন, ঘন ঘন হাত ধোয়া, অসুস্থ ব্যক্তিদের সাথে ঘনিষ্ঠ যোগাযোগ এড়ানো।'
    }
  },
  {
    id: '27',
    name: { en: 'Gastroenteritis (Stomach Flu)', bn: 'গ্যাস্ট্রোএন্টেরাইটিস (স্টমাক ফ্লু)' },
    symptoms: {
      en: 'Watery diarrhea, abdominal cramps, nausea, vomiting, and sometimes fever.',
      bn: 'পানির মতো ডায়রিয়া, পেটে ব্যথা, বমি বমি ভাব, বমি এবং কখনও কখনও জ্বর।'
    },
    causes: {
      en: 'Viral infections (norovirus, rotavirus), bacterial infections (Salmonella, E. coli), or parasites.',
      bn: 'ভাইরাল সংক্রমণ (নোরোভাইরাস, রোটাভাইরাস), ব্যাকটেরিয়া সংক্রমণ (সালমোনেলা, ই. কোলাই), বা পরজীবী।'
    },
    diagnosis: {
      en: 'Based on symptoms, stool tests to identify the specific virus, bacteria, or parasite.',
      bn: 'লক্ষণগুলির উপর ভিত্তি করে, নির্দিষ্ট ভাইরাস, ব্যাকটেরিয়া বা পরজীবী সনাক্ত করতে মল পরীক্ষা।'
    },
    treatment: {
      en: 'Oral rehydration solutions (ORS), rest, bland diet (BRAT diet), anti-diarrheal medications (with caution).',
      bn: 'ওরাল রিহাইড্রেশন সলিউশন (ORS), বিশ্রাম, হালকা খাবার (BRAT ডায়েট), ডায়রিয়া বিরোধী ওষুধ (সতর্কতার সাথে)।'
    },
    prevention: {
      en: 'Wash hands thoroughly, wash fruits and vegetables, avoid undercooked food, drink safe water.',
      bn: 'ভালো করে হাত ধোয়া, ফলমূল ও শাকসবজি ধোয়া, কম রান্না করা খাবার এড়িয়ে চলা, নিরাপদ পানি পান করা।'
    }
  },
  {
    id: '28',
    name: { en: 'Appendicitis', bn: 'অ্যাপেন্ডিসাইটিস' },
    symptoms: {
      en: 'Sudden pain on the right side of the lower abdomen, nausea, vomiting, loss of appetite, low-grade fever.',
      bn: 'তলপেটের ডানদিকে হঠাৎ ব্যথা, বমি বমি ভাব, বমি, ক্ষুধামন্দা, হালকা জ্বর।'
    },
    causes: {
      en: 'Blockage in the lining of the appendix that results in infection.',
      bn: 'অ্যাপেন্ডিক্সের আস্তরণে বাধা যার ফলে সংক্রমণ হয়।'
    },
    diagnosis: {
      en: 'Physical exam, blood tests (white blood cell count), urine test, imaging tests (abdominal ultrasound, CT scan).',
      bn: 'শারীরিক পরীক্ষা, রক্ত পরীক্ষা (শ্বেত রক্তকণিকার সংখ্যা), প্রস্রাব পরীক্ষা, ইমেজিং পরীক্ষা (পেটের আল্ট্রাসাউন্ড, সিটি স্ক্যান)।'
    },
    treatment: {
      en: 'Surgery to remove the appendix (appendectomy), antibiotics.',
      bn: 'অ্যাপেন্ডিক্স অপসারণের জন্য সার্জারি (অ্যাপেন্ডেক্টমি), অ্যান্টিবায়োটিক।'
    },
    prevention: {
      en: 'There is no proven way to prevent appendicitis, but a high-fiber diet may lower the risk.',
      bn: 'অ্যাপেন্ডিসাইটিস প্রতিরোধের কোনো প্রমাণিত উপায় নেই, তবে উচ্চ আঁশযুক্ত খাবার ঝুঁকি কমাতে পারে।'
    }
  },
  {
    id: '29',
    name: { en: 'Urinary Tract Infection (UTI)', bn: 'মূত্রনালীর সংক্রমণ (UTI)' },
    symptoms: {
      en: 'Strong, persistent urge to urinate, burning sensation when urinating, passing frequent, small amounts of urine, cloudy urine.',
      bn: 'প্রস্রাব করার তীব্র, অবিরাম তাগিদ, প্রস্রাব করার সময় জ্বালাপোড়া, ঘন ঘন অল্প পরিমাণে প্রস্রাব হওয়া, ঘোলাটে প্রস্রাব।'
    },
    causes: {
      en: 'Bacteria (usually E. coli) entering the urinary tract through the urethra and multiplying in the bladder.',
      bn: 'ব্যাকটেরিয়া (সাধারণত ই. কোলাই) মূত্রনালী দিয়ে মূত্রতন্ত্রে প্রবেশ করে এবং মূত্রাশয়ে বৃদ্ধি পায়।'
    },
    diagnosis: {
      en: 'Urine analysis (checking for white blood cells, red blood cells, or bacteria), urine culture.',
      bn: 'প্রস্রাব বিশ্লেষণ (শ্বেত রক্তকণিকা, লোহিত রক্তকণিকা বা ব্যাকটেরিয়া পরীক্ষা করা), প্রস্রাব কালচার।'
    },
    treatment: {
      en: 'Antibiotics, pain relievers (phenazopyridine) to numb the bladder and urethra.',
      bn: 'অ্যান্টিবায়োটিক, মূত্রাশয় এবং মূত্রনালীকে অসাড় করার জন্য ব্যথানাশক (ফেনাজোপাইরিডিন)।'
    },
    prevention: {
      en: 'Drink plenty of liquids (especially water), wipe from front to back, empty bladder soon after intercourse.',
      bn: 'প্রচুর তরল পান করুন (বিশেষ করে পানি), সামনে থেকে পিছনে মুছুন, সহবাসের পরপরই মূত্রাশয় খালি করুন।'
    }
  },
  {
    id: '30',
    name: { en: 'Syphilis', bn: 'সিফিলিস' },
    symptoms: {
      en: 'Painless sore (chancre) on genitals, rectum, or mouth (primary stage). Rash, fever, swollen lymph nodes (secondary stage).',
      bn: 'যৌনাঙ্গ, মলদ্বার বা মুখে ব্যথাহীন ঘা (প্রাথমিক পর্যায়)। ফুসকুড়ি, জ্বর, ফোলা লিম্ফ নোড (দ্বিতীয় পর্যায়)।'
    },
    causes: {
      en: 'Treponema pallidum bacteria, primarily transmitted through sexual contact.',
      bn: 'ট্রেপোনেমা প্যালিডাম ব্যাকটেরিয়া, প্রাথমিকভাবে যৌন যোগাযোগের মাধ্যমে সংক্রামিত হয়।'
    },
    diagnosis: {
      en: 'Blood tests (VDRL, RPR, FTA-ABS), testing fluid from sores.',
      bn: 'রক্ত পরীক্ষা (VDRL, RPR, FTA-ABS), ঘা থেকে তরল পরীক্ষা।'
    },
    treatment: {
      en: 'Penicillin (antibiotic) is the preferred treatment for all stages.',
      bn: 'পেনিসিলিন (অ্যান্টিবায়োটিক) সব পর্যায়ের জন্য পছন্দের চিকিৎসা।'
    },
    prevention: {
      en: 'Abstain from sexual contact, use latex condoms correctly, get tested regularly if sexually active.',
      bn: 'যৌন যোগাযোগ থেকে বিরত থাকুন, ল্যাটেক্স কনডম সঠিকভাবে ব্যবহার করুন, যৌনভাবে সক্রিয় হলে নিয়মিত পরীক্ষা করুন।'
    }
  },
  {
    id: '31',
    name: { en: 'Gonorrhea', bn: 'গনোরিয়া' },
    symptoms: {
      en: 'Painful urination, abnormal discharge from the penis or vagina, testicular pain, lower abdominal pain.',
      bn: 'প্রস্রাবে ব্যথা, লিঙ্গ বা যোনি থেকে অস্বাভাবিক স্রাব, অণ্ডকোষে ব্যথা, তলপেটে ব্যথা।'
    },
    causes: {
      en: 'Neisseria gonorrhoeae bacteria, transmitted through sexual contact.',
      bn: 'নিসেরিয়া গনোরিয়া ব্যাকটেরিয়া, যৌন যোগাযোগের মাধ্যমে সংক্রামিত হয়।'
    },
    diagnosis: {
      en: 'Urine test, swab of the affected area (urethra, cervix, throat, or rectum).',
      bn: 'প্রস্রাব পরীক্ষা, আক্রান্ত স্থানের সোয়াব (মূত্রনালী, জরায়ুমুখ, গলা বা মলদ্বার)।'
    },
    treatment: {
      en: 'Antibiotics (usually an injection of ceftriaxone and oral azithromycin).',
      bn: 'অ্যান্টিবায়োটিক (সাধারণত সেফট্রিয়াক্সোনের ইনজেকশন এবং ওরাল অ্যাজিথ্রোমাইসিন)।'
    },
    prevention: {
      en: 'Use condoms consistently and correctly, limit number of sex partners, regular STI screening.',
      bn: 'ধারাবাহিকভাবে এবং সঠিকভাবে কনডম ব্যবহার করুন, যৌন সঙ্গীর সংখ্যা সীমিত করুন, নিয়মিত এসটিআই স্ক্রীনিং।'
    }
  },
  {
    id: '32',
    name: { en: 'Chlamydia', bn: 'ক্ল্যামিডিয়া' },
    symptoms: {
      en: 'Often asymptomatic. Can cause painful urination, abnormal discharge, pelvic pain in women, testicular pain in men.',
      bn: 'প্রায়শই উপসর্গবিহীন। প্রস্রাবে ব্যথা, অস্বাভাবিক স্রাব, মহিলাদের পেলভিক ব্যথা, পুরুষদের অণ্ডকোষে ব্যথা হতে পারে।'
    },
    causes: {
      en: 'Chlamydia trachomatis bacteria, transmitted through sexual contact.',
      bn: 'ক্ল্যামিডিয়া ট্র্যাকোমাটিস ব্যাকটেরিয়া, যৌন যোগাযোগের মাধ্যমে সংক্রামিত হয়।'
    },
    diagnosis: {
      en: 'Urine test or a swab from the cervix or urethra.',
      bn: 'প্রস্রাব পরীক্ষা বা জরায়ুমুখ বা মূত্রনালী থেকে সোয়াব।'
    },
    treatment: {
      en: 'Antibiotics (such as azithromycin or doxycycline).',
      bn: 'অ্যান্টিবায়োটিক (যেমন অ্যাজিথ্রোমাইসিন বা ডক্সিসাইক্লিন)।'
    },
    prevention: {
      en: 'Use condoms correctly every time you have sex, limit sex partners, get tested regularly.',
      bn: 'প্রতিবার যৌন মিলনের সময় সঠিকভাবে কনডম ব্যবহার করুন, যৌন সঙ্গীর সংখ্যা সীমিত করুন, নিয়মিত পরীক্ষা করুন।'
    }
  },
  {
    id: '33',
    name: { en: 'Polio (Poliomyelitis)', bn: 'পোলিও (পোলিওমায়েলাইটিস)' },
    symptoms: {
      en: 'Fever, fatigue, headache, vomiting, stiffness in the neck, pain in the limbs. In severe cases, irreversible paralysis.',
      bn: 'জ্বর, ক্লান্তি, মাথাব্যথা, বমি, ঘাড় শক্ত হওয়া, অঙ্গ-প্রত্যঙ্গে ব্যথা। গুরুতর ক্ষেত্রে, অপরিবর্তনীয় পক্ষাঘাত।'
    },
    causes: {
      en: 'Poliovirus, transmitted mainly through the fecal-oral route or contaminated water/food.',
      bn: 'পোলিওভাইরাস, প্রধানত মল-মৌখিক পথ বা দূষিত পানি/খাবারের মাধ্যমে ছড়ায়।'
    },
    diagnosis: {
      en: 'Clinical symptoms, isolation of the virus from stool or throat secretions, cerebrospinal fluid analysis.',
      bn: 'ক্লিনিকাল লক্ষণ, মল বা গলার নিঃসরণ থেকে ভাইরাস আলাদা করা, সেরিব্রোস্পাইনাল ফ্লুইড বিশ্লেষণ।'
    },
    treatment: {
      en: 'No cure exists. Treatment focuses on relieving symptoms, physical therapy, and respiratory support if needed.',
      bn: 'কোনো নিরাময় নেই। চিকিৎসা লক্ষণ উপশম, শারীরিক থেরাপি এবং প্রয়োজনে শ্বাসযন্ত্রের সহায়তার উপর দৃষ্টি নিবদ্ধ করে।'
    },
    prevention: {
      en: 'Polio vaccine (OPV or IPV) given during childhood.',
      bn: 'শৈশবে দেওয়া পোলিও টিকা (OPV বা IPV)।'
    }
  },
  {
    id: '34',
    name: { en: 'Tetanus', bn: 'টিটেনাস (ধনুষ্টংকার)' },
    symptoms: {
      en: 'Jaw cramping (lockjaw), muscle spasms (often in the back, abdomen, and extremities), painful muscle stiffness, trouble swallowing.',
      bn: 'চোয়াল আটকে যাওয়া (লকজ), পেশীর খিঁচুনি (প্রায়শই পিঠ, পেট এবং হাত-পায়ে), বেদনাদায়ক পেশী শক্ত হওয়া, গিলতে সমস্যা।'
    },
    causes: {
      en: 'Toxin produced by Clostridium tetani bacteria, which enters the body through cuts, scratches, or wounds.',
      bn: 'ক্লোস্ট্রিডিয়াম টিটানি ব্যাকটেরিয়া দ্বারা উত্পাদিত টক্সিন, যা কাটা, আঁচড় বা ক্ষতের মাধ্যমে শরীরে প্রবেশ করে।'
    },
    diagnosis: {
      en: 'Based on clinical signs and symptoms. There are no specific hospital lab tests to confirm tetanus.',
      bn: 'ক্লিনিকাল লক্ষণ এবং উপসর্গের উপর ভিত্তি করে। টিটেনাস নিশ্চিত করার জন্য কোনো নির্দিষ্ট হাসপাতালের ল্যাব পরীক্ষা নেই।'
    },
    treatment: {
      en: 'Wound care, tetanus antitoxin (TIG), antibiotics, muscle relaxants, supportive care (often in ICU).',
      bn: 'ক্ষতের যত্ন, টিটেনাস অ্যান্টিটক্সিন (TIG), অ্যান্টিবায়োটিক, পেশী শিথিলকারী, সহায়ক যত্ন (প্রায়শই আইসিইউতে)।'
    },
    prevention: {
      en: 'Tetanus vaccination (DTaP for children, Tdap/Td boosters for adults every 10 years) and good wound care.',
      bn: 'টিটেনাস টিকা (শিশুদের জন্য DTaP, প্রাপ্তবয়স্কদের জন্য প্রতি ১০ বছর অন্তর Tdap/Td বুস্টার) এবং ক্ষতের ভালো যত্ন।'
    }
  },
  {
    id: '35',
    name: { en: 'Diphtheria', bn: 'ডিপথেরিয়া' },
    symptoms: {
      en: 'A thick, gray coating in the throat and tonsils, sore throat, swollen glands in the neck, difficulty breathing or swallowing.',
      bn: 'গলা এবং টনসিলে একটি পুরু, ধূসর আবরণ, গলা ব্যথা, ঘাড়ে গ্রন্থি ফুলে যাওয়া, শ্বাস নিতে বা গিলতে অসুবিধা।'
    },
    causes: {
      en: 'Corynebacterium diphtheriae bacteria, spread through respiratory droplets or touching infected sores.',
      bn: 'কোরিনেব্যাকটেরিয়াম ডিপথেরিয়া ব্যাকটেরিয়া, শ্বাসযন্ত্রের ফোঁটার মাধ্যমে বা সংক্রামিত ঘা স্পর্শ করার মাধ্যমে ছড়ায়।'
    },
    diagnosis: {
      en: 'Clinical examination of the throat, swabbing the back of the throat and testing for the bacteria.',
      bn: 'গলার ক্লিনিকাল পরীক্ষা, গলার পিছনে সোয়াব করা এবং ব্যাকটেরিয়ার জন্য পরীক্ষা করা।'
    },
    treatment: {
      en: 'Diphtheria antitoxin to neutralize the toxin, antibiotics (erythromycin or penicillin) to kill the bacteria.',
      bn: 'টক্সিনকে নিরপেক্ষ করার জন্য ডিপথেরিয়া অ্যান্টিটক্সিন, ব্যাকটেরিয়া মারার জন্য অ্যান্টিবায়োটিক (এরিথ্রোমাইসিন বা পেনিসিলিন)।'
    },
    prevention: {
      en: 'Diphtheria vaccination (usually combined as DTaP, Tdap, or Td).',
      bn: 'ডিপথেরিয়া টিকা (সাধারণত DTaP, Tdap, বা Td হিসাবে একত্রিত)।'
    }
  }
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: { en: 'Dr. Ahmed Khan', bn: 'ডাঃ আহমেদ খান' },
    specialization: { en: 'Cardiologist', bn: 'হৃদরোগ বিশেষজ্ঞ' },
    hospital: { en: 'Dhaka Medical College', bn: 'ঢাকা মেডিকেল কলেজ' },
    location: { en: 'Dhaka', bn: 'ঢাকা' },
    phone: '01711000000'
  },
  {
    id: '2',
    name: { en: 'Dr. Sarah Islam', bn: 'ডাঃ সারাহ ইসলাম' },
    specialization: { en: 'Pediatrician', bn: 'শিশু বিশেষজ্ঞ' },
    hospital: { en: 'Bangabandhu Sheikh Mujib Medical University', bn: 'বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়' },
    location: { en: 'Dhaka', bn: 'ঢাকা' },
    phone: '01811000000'
  }
];

export const emergencyGuides: EmergencyGuide[] = [
  {
    id: '1',
    title: { en: 'Heart Attack', bn: 'হার্ট অ্যাটাক' },
    steps: {
      en: [
        'Call emergency services immediately.',
        'Have the person sit down and rest.',
        'Loosen tight clothing.',
        'Ask if they take chest pain medication.',
        'Perform CPR if they become unconscious.'
      ],
      bn: [
        'অবিলম্বে জরুরি পরিষেবায় কল করুন।',
        'ব্যক্তিকে বসিয়ে বিশ্রাম নিতে দিন।',
        'আঁটসাঁট পোশাক ঢিলা করে দিন।',
        'জিজ্ঞাসা করুন তারা বুকের ব্যথার ওষুধ খান কিনা।',
        'অজ্ঞান হয়ে গেলে সিপিআর (CPR) দিন।'
      ]
    }
  },
  {
    id: '2',
    title: { en: 'Choking', bn: 'দম বন্ধ হওয়া' },
    steps: {
      en: [
        'Give 5 back blows.',
        'Give 5 abdominal thrusts (Heimlich maneuver).',
        'Alternate between 5 blows and 5 thrusts.',
        'Call 999 if the object is not cleared.'
      ],
      bn: [
        'পিঠে ৫টি জোরে থাপ্পড় দিন।',
        '৫টি পেটে চাপ (হেইমলিচ ম্যানুভার) দিন।',
        '৫টি থাপ্পড় এবং ৫টি চাপের মধ্যে পর্যায়ক্রমে কাজ করুন।',
        'বস্তুটি বের না হলে ৯৯৯-এ কল করুন।'
      ]
    }
  }
];

export const medicalImages: MedicalImage[] = [
  {
    id: '1',
    title: { en: 'Human Heart Anatomy', bn: 'মানুষের হৃদযন্ত্রের শারীরস্থান' },
    url: 'https://picsum.photos/seed/heart/800/800',
    category: 'Anatomy'
  },
  {
    id: '2',
    title: { en: 'Chest X-Ray Normal', bn: 'বুকের এক্স-রে (স্বাভাবিক)' },
    url: 'https://picsum.photos/seed/xray/800/800',
    category: 'Radiology'
  },
  {
    id: '3',
    title: { en: 'Brain MRI', bn: 'মস্তিষ্কের এমআরআই' },
    url: 'https://picsum.photos/seed/brain/800/800',
    category: 'Radiology'
  },
  {
    id: '4',
    title: { en: 'Skeletal System', bn: 'কঙ্কালতন্ত্র' },
    url: 'https://picsum.photos/seed/skeleton/800/800',
    category: 'Anatomy'
  }
];

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: { en: 'Dhaka Medical College Hospital', bn: 'ঢাকা মেডিকেল কলেজ হাসপাতাল' },
    location: { en: 'Ramna, Dhaka', bn: 'রমনা, ঢাকা' },
    type: 'Public',
    phone: '02-55165001'
  },
  {
    id: '2',
    name: { en: 'Evercare Hospital Dhaka', bn: 'এভারকেয়ার হাসপাতাল ঢাকা' },
    location: { en: 'Bashundhara, Dhaka', bn: 'বসুন্ধরা, ঢাকা' },
    type: 'Private',
    phone: '02-8431661'
  }
];

export const abbreviations: Abbreviation[] = [
  { id: '1', short: 'BP', full: { en: 'Blood Pressure', bn: 'রক্তচাপ' } },
  { id: '2', short: 'CNS', full: { en: 'Central Nervous System', bn: 'কেন্দ্রীয় স্নায়ুতন্ত্র' } },
  { id: '3', short: 'GI', full: { en: 'Gastrointestinal', bn: 'গ্যাস্ট্রোইনটেস্টাইনাল' } },
  { id: '4', short: 'IV', full: { en: 'Intravenous', bn: 'শিরায়' } },
  { id: '5', short: 'PRN', full: { en: 'As needed', bn: 'প্রয়োজন অনুযায়ী' } },
  { id: '6', short: 'TID', full: { en: 'Three times a day', bn: 'দিনে তিনবার' } },
  { id: '7', short: 'BID', full: { en: 'Twice a day', bn: 'দিনে দুইবার' } },
  { id: '8', short: 'QD', full: { en: 'Every day', bn: 'প্রতিদিন' } },
  { id: '9', short: 'PO', full: { en: 'By mouth', bn: 'মুখের মাধ্যমে' } },
  { id: '10', short: 'NPO', full: { en: 'Nothing by mouth', bn: 'মুখের মাধ্যমে কিছু নয়' } },
  { id: '11', short: 'STAT', full: { en: 'Immediately', bn: 'অবিলম্বে' } },
  { id: '12', short: 'Hx', full: { en: 'History', bn: 'ইতিহাস' } },
  { id: '13', short: 'Dx', full: { en: 'Diagnosis', bn: 'রোগ নির্ণয়' } },
  { id: '14', short: 'Rx', full: { en: 'Prescription', bn: 'প্রেসক্রিপশন' } },
  { id: '15', short: 'OTC', full: { en: 'Over the counter', bn: 'ওভার দ্য কাউন্টার' } }
];

export const flashcards: Flashcard[] = [
  {
    id: '1',
    front: { en: 'Myocardial Infarction', bn: 'মায়োকার্ডিয়াল ইনফার্কশন' },
    back: { en: 'Heart Attack', bn: 'হার্ট অ্যাটাক' },
    category: 'Cardiology'
  },
  {
    id: '2',
    front: { en: 'Tachycardia', bn: 'ট্যাকিকার্ডিয়া' },
    back: { en: 'Rapid heart rate (>100 bpm)', bn: 'দ্রুত হৃদস্পন্দন (>১০০ বিপিএম)' },
    category: 'Cardiology'
  },
  {
    id: '3',
    front: { en: 'Dyspnea', bn: 'ডিস্পনিয়া' },
    back: { en: 'Difficulty breathing', bn: 'শ্বাসকষ্ট' },
    category: 'Respiratory'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: { en: 'What is the normal range for adult blood pressure?', bn: 'প্রাপ্তবয়স্কদের রক্তচাপের স্বাভাবিক সীমা কত?' },
    options: {
      en: ['120/80 mmHg', '140/90 mmHg', '100/60 mmHg', '110/70 mmHg'],
      bn: ['১২০/৮০ mmHg', '১৪০/৯০ mmHg', '১০০/৬০ mmHg', '১১০/৭০ mmHg']
    },
    correctAnswer: 0,
    explanation: {
      en: '120/80 mmHg is considered the standard normal blood pressure for adults.',
      bn: '১২০/৮০ mmHg প্রাপ্তবয়স্কদের জন্য আদর্শ স্বাভাবিক রক্তচাপ হিসেবে বিবেচিত হয়।'
    }
  },
  {
    id: '2',
    question: { en: 'Which organ produces insulin?', bn: 'কোন অঙ্গ ইনসুলিন তৈরি করে?' },
    options: {
      en: ['Liver', 'Pancreas', 'Kidney', 'Stomach'],
      bn: ['লিভার', 'অগ্ন্যাশয়', 'কিডনি', 'পাকস্থলী']
    },
    correctAnswer: 1,
    explanation: {
      en: 'The pancreas produces insulin to regulate blood sugar levels.',
      bn: 'রক্তের শর্করার মাত্রা নিয়ন্ত্রণ করতে অগ্ন্যাশয় ইনসুলিন তৈরি করে।'
    }
  }
];

export const studyNotes: StudyNote[] = [
  {
    id: '1',
    title: { en: 'ECG Basics', bn: 'ইসিজি বেসিকস' },
    content: {
      en: 'P wave: Atrial depolarization. QRS complex: Ventricular depolarization. T wave: Ventricular repolarization.',
      bn: 'P তরঙ্গ: অলিন্দের ডিপোলারাইজেশন। QRS কমপ্লেক্স: নিলয়ের ডিপোলারাইজেশন। T তরঙ্গ: নিলয়ের রিপোলারাইজেশন।'
    },
    category: 'Cardiology'
  },
  {
    id: '2',
    title: { en: 'Cranial Nerves', bn: 'ক্রেনিয়াল নার্ভ' },
    content: {
      en: 'There are 12 pairs of cranial nerves. I: Olfactory, II: Optic, III: Oculomotor, IV: Trochlear, V: Trigeminal, VI: Abducens, VII: Facial, VIII: Vestibulocochlear, IX: Glossopharyngeal, X: Vagus, XI: Accessory, XII: Hypoglossal.',
      bn: '১২ জোড়া ক্রেনিয়াল নার্ভ আছে। ১: অলফ্যাক্টরি, ২: অপটিক, ৩: অকুলোমোটর, ৪: ট্রক্লিয়ার, ৫: ট্রাইজেমিনাল, ৬: অ্যাবডুসেন্স, ৭: ফেসিয়াল, ৮: ভেস্টিবুলোকোক্লিয়ার, ৯: গ্লোসোফ্যারিঞ্জিয়াল, ১০: ভেগাস, ১১: অ্যাকসেসরি, ১২: হাইপোগ্লোসাল।'
    },
    category: 'Neurology'
  },
  {
    id: '3',
    title: { en: 'Antibiotic Classes', bn: 'অ্যান্টিবায়োটিক ক্লাস' },
    content: {
      en: 'Penicillins (e.g., Amoxicillin), Cephalosporins (e.g., Ceftriaxone), Macrolides (e.g., Azithromycin), Fluoroquinolones (e.g., Ciprofloxacin).',
      bn: 'পেনিসিলিন (যেমন, অ্যামোক্সিসিলিন), সেফালোস্পোরিন (যেমন, সেফট্রিয়াক্সোন), ম্যাক্রোলাইড (যেমন, অ্যাজিথ্রোমাইসিন), ফ্লুরোকুইনোলোন (যেমন, সিপ্রোফ্লক্সাসিন)।'
    },
    category: 'Pharmacology'
  }
];

export const initialExamPlans: ExamPlan[] = [
  {
    id: '1',
    subject: { en: 'Anatomy', bn: 'অ্যানাটমি' },
    date: '2026-04-15',
    topics: [
      { title: { en: 'Upper Limb', bn: 'আপার লিম্ব' }, completed: true },
      { title: { en: 'Thorax', bn: 'থোরাক্স' }, completed: false },
      { title: { en: 'Abdomen', bn: 'অ্যাবডোমেন' }, completed: false }
    ]
  },
  {
    id: '2',
    subject: { en: 'Physiology', bn: 'ফিজিওলজি' },
    date: '2026-04-20',
    topics: [
      { title: { en: 'Blood', bn: 'রক্ত' }, completed: true },
      { title: { en: 'Cardiovascular System', bn: 'কার্ডিওভাসকুলার সিস্টেম' }, completed: false }
    ]
  }
];
