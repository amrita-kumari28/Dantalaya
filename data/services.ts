
export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;

  overview: string;

  symptoms: string[];

  benefits: string[];

  procedure: string[];

  aftercare: string[];

  faqs: FAQ[];
}
export const services: Service[] = [
  //Dental checkups
  {
    
slug:"dental-checkups",
title:"Dental Check-ups",
shortDescription:"Routine examinations to maintain healthy teeth and gums.",
icon:"🦷",
image:"/services/dental-checkup.jpg",

overview:
"Regular dental check-ups help detect oral problems early, maintain healthy teeth and gums, and prevent the need for complex treatments in the future.",

symptoms:[
"Tooth sensitivity",
"Bleeding gums",
"Persistent bad breath",
"Occasional tooth pain",
"Routine preventive care"
],

benefits:[
"Early detection of dental problems",
"Prevents cavities and gum disease",
"Maintains oral hygiene",
"Professional oral health advice",
"Reduces future treatment costs"
],

procedure:[
"Review of dental history",
"Comprehensive oral examination",
"Digital X-rays if required",
"Gum health assessment",
"Personalized treatment recommendations"
],

aftercare:[
"Brush twice daily",
"Floss regularly",
"Limit sugary foods and drinks",
"Follow dentist's advice",
"Schedule routine check-ups"
],

faqs:[
{
question:"How often should I have a dental check-up?",
answer:"Most people should visit their dentist every six months, though some may require more frequent visits depending on their oral health."
},
{
question:"What happens during a dental check-up?",
answer:"A dental check-up includes an examination of your teeth, gums, and oral tissues, along with recommendations for maintaining good oral health."
},
{
question:"Why are regular dental check-ups important?",
answer:"Regular check-ups help identify problems early, prevent serious dental conditions, and maintain a healthy smile."
}
]
},
//pediatric dentistry
{
  slug:"pediatric-dentistry",

  title:"Pediatric Dentistry",

  shortDescription:
    "Gentle dental care designed specifically for infants, children, and teenagers.",

  icon:"🦷",

  image:"/services/pediatric.jpg",

  overview:
    "Pediatric dentistry focuses on the oral health of children from infancy through adolescence. It emphasizes prevention, early diagnosis, and child-friendly treatments to ensure healthy smiles as children grow.",

  symptoms:[
    "Tooth decay in children",
    "Early childhood cavities",
    "Tooth pain or sensitivity",
    "Thumb sucking habits",
    "Preventive dental care needs"
  ],

  benefits:[
    "Healthy dental development",
    "Prevents childhood cavities",
    "Builds positive dental habits",
    "Early detection of problems",
    "Comfortable child-friendly care"
  ],

  procedure:[
    "Child dental examination",
    "Oral health assessment",
    "Professional cleaning",
    "Fluoride application if required",
    "Parent guidance and education"
  ],

  aftercare:[
    "Brush twice daily",
    "Limit sugary snacks",
    "Regular dental visits",
    "Encourage healthy habits",
    "Use fluoride toothpaste"
  ],

  faqs:[
    {
      question:"When should my child first visit a dentist?",
      answer:"The first dental visit is recommended by the child's first birthday or when the first tooth appears."
    },
    {
      question:"How often should children have dental check-ups?",
      answer:"Most children should visit the dentist every six months."
    },
    {
      question:"Why are baby teeth important?",
      answer:"Baby teeth help with chewing, speech development, and guide permanent teeth into the correct position."
    }
  ]
},
//root canal
{
  
  slug: "root-canal-treatment",
  title: "Root Canal Treatment",
  shortDescription:
    "Relieve pain and save infected teeth.",
  icon: "🦷",
  image:"/services/root-canal.jpg",

  overview:
    "Root canal treatment is a safe and effective procedure used to remove infected tissue from inside a tooth, relieving pain and preserving your natural tooth structure.",

  symptoms: [
    "Severe toothache",
    "Lingering sensitivity to hot or cold",
    "Gum boil which may indicate infection",
    "Pain while chewing",
    "Darkening of the tooth",
  ],

  procedure: [
    "Examination and digital diagnosis",
    "Local anesthesia for comfort",
    "Cleaning the infected pulp",
    "Disinfection of the root canals",
    "Sealing the canals",
    "Restoration with filling and/or crown",
  ],

  benefits: [
    "Relieves dental pain",
    "Saves the natural tooth",
    "Prevents spread of infection",
    "Restores chewing function",
    "Maintains natural appearance",
  ],

  aftercare: [
    "Avoid chewing hard foods for a few days",
    "Maintain good oral hygiene",
    "Take prescribed medications",
    "Attend follow-up appointments",
    "Get a crown if recommended",
  ],

  faqs: [
    {
      question: "Is root canal treatment painful?",
      answer:
        "Modern root canal treatment is performed under local anesthesia and is generally comfortable.",
    },
    {
      question: "How many visits are needed?",
      answer:
        "Many cases can be completed in 2-3 visits depending on the infection.",
    },
    {
      question: "Will I need a crown?",
      answer:
        "Many treated teeth benefit from a crown for long-term strength and protection.",
    },
  ],
},
//professional teeth cleaning
{
  
  slug:"professional-teeth-cleaning",
  title:"Professional Teeth Cleaning",
  shortDescription:"Remove plaque and stains for a healthier smile.",
  icon:"🦷",
  image:"/services/teeth-cleaning.jpg",

overview:
"Professional teeth cleaning removes plaque, tartar, and stains to maintain healthy teeth and gums while preventing oral diseases.",

symptoms:[
"Plaque buildup",
"Bad breath",
"Yellow stains",
"Bleeding gums",
"Routine preventive care"
],

benefits:[
"Cleaner teeth",
"Fresher breath",
"Healthier gums",
"Prevents gum disease",
"Brighter smile"
],

procedure:[
"Dental examination",
"Plaque removal",
"Tartar removal",
"Polishing",
"Oral hygiene guidance"
],

aftercare:[
"Brush twice daily",
"Floss regularly",
"Avoid tobacco products",
"Reduce sugary foods",
"Schedule regular cleanings"
],

faqs:[
{
question:"How often should I get my teeth cleaned?",
answer:"Most people benefit from professional cleaning every six months."
},
{
question:"Is teeth cleaning painful?",
answer:"The procedure is generally comfortable with minimal discomfort."
},
{
question:"Will cleaning whiten my teeth?",
answer:"It removes stains and plaque, making teeth appear brighter."
}
]
},

//tooth extraction
{
  
  slug:"tooth-extraction",
  title:"Tooth Extraction",
  shortDescription:"Safe and comfortable removal of damaged teeth.",
  icon:"🦷",
  image:"/services/extraction.jpg",

overview:
"Tooth extraction removes severely damaged, infected, or problematic teeth while protecting surrounding oral structures and improving overall oral health.",

symptoms:[
"Severe tooth damage",
"Wisdom tooth problems",
"Advanced tooth decay",
"Advanced gum disease",
"Advanced dental infection"
],

benefits:[
"Provides pain relief",
"Prevents spread of infection",
"Protects neighboring teeth",
"Improves oral health",
"Prepares for future dental treatments if required"
],

procedure:[
"Comprehensive examination",
"Local anesthesia for comfort",
"Careful tooth removal",
"Cleaning of the extraction site",
"Post-treatment care instructions"
],

aftercare:[
"Avoid smoking and alcohol",
"Eat soft foods for a few days",
"Take prescribed medications",
"Keep the extraction area clean",
"Attend follow-up appointments if advised"
],

faqs:[
{
question:"Is tooth extraction painful?",
answer:"The procedure is performed under local anesthesia, making it comfortable for most patients. Mild soreness after the treatment is normal."
},
{
question:"How long does it take to recover after an extraction?",
answer:"Most patients recover within a few days, though complete healing of the extraction site may take several weeks."
},
{
question:"What should I avoid after a tooth extraction?",
answer:"Avoid smoking, drinking through a straw, strenuous activity, and hard foods for the first few days to promote proper healing."
}
]
},
//dental fillings
{
  
  slug:"dental-fillings",
  title:"Dental Fillings",
  shortDescription:"Restore cavities and damaged teeth naturally.",
  icon:"🦷",
  image:"/services/fillings.jpg",

overview:
"Dental fillings repair teeth damaged by decay or minor fractures, restoring their strength and function.",

symptoms:[
"Toothache",
"Sensitivity",
"Visible cavities",
"Food getting stuck",
"Chipped teeth"
],

benefits:[
"Stops tooth decay",
"Restores tooth shape",
"Reduces sensitivity",
"Improves chewing",
"Prevents further damage"
],

procedure:[
"Examination",
"Local anesthesia if required",
"Decay removal",
"Placement of filling",
"Shaping and polishing"
],

aftercare:[
"Avoid hard foods initially",
"Maintain oral hygiene",
"Brush and floss daily",
"Visit for regular check-ups",
"Report persistent discomfort"
],

faqs:[
{
question:"Do fillings hurt?",
answer:"Fillings are usually comfortable with local anesthesia."
},
{
question:"How long do fillings last?",
answer:"They can last many years with proper care."
},
{
question:"Can I eat after a filling?",
answer:"Yes, though your dentist may recommend waiting for a short period."
}
]
},
//crowns and bridges
{
  
  slug:"crowns-and-bridges",
  title:"Crowns & Bridges",
  shortDescription:"Restore function and appearance of missing teeth.",
  icon:"🦷",
  image:"/services/crowns.jpg",

overview:
"Crowns and bridges restore damaged or missing teeth, improving both appearance and chewing function.",

symptoms:[
"Broken teeth",
"Missing teeth",
"After root canal treatment",
"Cosmetic concerns",
"Large fillings"
],

benefits:[
"Restores chewing ability",
"Improves appearance",
"Protects damaged teeth",
"Prevents tooth movement",
"Long-lasting solution"
],

procedure:[
"Examination",
"Tooth preparation",
"Impressions",
"Temporary restoration",
"Final placement"
],

aftercare:[
"Maintain oral hygiene",
"Avoid excessive force",
"Regular dental visits",
"Use floss carefully",
"Report looseness immediately"
],

faqs:[
{
question:"What is the difference between a crown and a bridge?",
answer:"A crown protects a damaged tooth, while a bridge replaces missing teeth."
},
{
question:"How long do crowns and bridges last?",
answer:"They can last 10 to 15 years or more with proper care."
},
{
question:"Can I eat normally with them?",
answer:"Yes, they restore normal chewing function."
}
]
},
//smile designing
{
  
  slug:"smile-designing",
  title:"Smile Designing",
  shortDescription:"Personalized cosmetic treatments for confident smiles.",
  icon:"🦷",
  image:"/services/smile-design.jpg",

overview:
"Smile designing combines cosmetic dental treatments to enhance the appearance and harmony of your smile.",

symptoms:[
"Discolored teeth",
"Uneven teeth",
"Gaps between teeth",
"Chipped teeth",
"Unsatisfactory smile"
],

benefits:[
"Improves appearance",
"Boosts confidence",
"Creates balanced smile",
"Enhances facial aesthetics",
"Personalized treatment"
],

procedure:[
"Smile analysis",
"Treatment planning",
"Cosmetic procedures",
"Adjustments",
"Final evaluation"
],

aftercare:[
"Maintain oral hygiene",
"Avoid staining foods",
"Attend follow-up visits",
"Use protective appliances if advised",
"Practice healthy habits"
],

faqs:[
{
question:"What is smile designing?",
answer:"It is a customized cosmetic dental treatment plan to improve your smile."
},
{
question:"How long does treatment take?",
answer:"The duration depends on the procedures involved."
},
{
question:"Are the results long-lasting?",
answer:"Good oral care helps maintain long-lasting results."
}
]
},
//denture 
{

  slug: "Denture",

  title: "Denture",

  shortDescription:
    "Comfortable and customized removable dentures to restore your smile and chewing function.",

  icon: "🦷",

  image: "/services/denture.jpg",

  overview:
    "Removable complete and partial dentures are custom-made dental prostheses designed to replace missing teeth and surrounding tissues. Complete dentures are used when all teeth are missing, while partial dentures replace one or more missing teeth, restoring function, appearance, and confidence.",

  symptoms: [
    "Missing one or more teeth",
    "Difficulty chewing food",
    "Problems with speech due to tooth loss",
    "Sunken facial appearance",
    "Reduced confidence while smiling",
  ],

  benefits: [
    "Restores chewing ability",
    "Improves speech and pronunciation",
    "Enhances facial appearance",
    "Boosts confidence and smile aesthetics",
    "Provides an affordable tooth replacement option",
  ],

  procedure: [
    "Comprehensive dental examination",
    "Impressions of the mouth",
    "Custom denture design and fabrication",
    "Trial fitting and adjustments",
    "Final denture placement and instructions",
  ],

  aftercare: [
    "Clean dentures daily with a denture brush",
    "Remove dentures before sleeping",
    "Handle dentures carefully to avoid damage",
    "Maintain good oral hygiene",
    "Visit the dentist for regular adjustments and check-ups",
  ],

  faqs: [
    {
      question: "What is the difference between complete and partial dentures?",
      answer:
        "Complete dentures replace all missing teeth in an arch, while partial dentures replace only a few missing teeth and are supported by the remaining natural teeth.",
    },
    {
      question: "How long does it take to get dentures?",
      answer:
        "The process usually takes a few appointments over several weeks, depending on the type of denture and individual requirements.",
    },
    {
      question: "Will it take time to get used to dentures?",
      answer:
        "Yes. Most patients need a few weeks to adapt to speaking and eating comfortably with their new dentures.",
    },
  ],
},
];
