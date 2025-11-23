
import type { Discipline, Lesson } from '../types';
import { RocketIcon } from '../components/Icons';

const createAeroLesson = (id: string, title: string, content: any): Lesson => ({
    id: `aero-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=aero-${id}`,
    structuredContent: {
        whatIsIt: { title: 'Waa Maxay?', content: content.whatIsIt || 'Qeexitaan guud.' },
        whyIsItImportant: { title: 'Maxay Muhiim u Tahay?', content: content.whyIsItImportant || 'Sharaxaad ku saabsan muhiimadda.' },
        mainParts: { title: 'Qaybaha Ugu Waaweyn', content: content.mainParts || 'Faahfaahin.' },
        howItWorks: { title: 'Sidee Buu u Shaqeeyaa?', content: content.howItWorks || 'Habka shaqada.' },
        prerequisites: { title: 'Maxaa Loo Baahan Yahay?', content: content.prerequisites || 'Aqoonta aasaasiga ah.' },
        examples: { title: 'Tusaalooyin', content: content.examples || 'Tusaalooyin nolosha dhabta ah.' },
        challenges: { title: 'Caqabadaha', content: content.challenges || 'Dhibaatooyinka.' },
    },
    additionalContent: {},
    quiz: content.quiz || []
});

export const aerospaceEngineeringDiscipline: Discipline = {
    id: 'aerospace-engineering',
    name: 'Injineernimada Hawada Sare',
    icon: RocketIcon,
    description: 'Qaybta koowaad ee injineernimada ee ka shaqaysa horumarinta diyaaradaha iyo dayax-gacmeedyada.',
    levels: [
      {
        id: 'aero-year-1',
        name: 'SANADKA 1AAD: Aasaaska Duulimaadka',
        description: 'Baro taariikhda duulimaadka, jawiga dhulka, iyo fiisigiska aasaasiga ah.',
        modules: [
          { 
              id: 'aero-y1-intro', 
              title: 'Introduction to Flight', 
              lessons: [
                  createAeroLesson('atmosphere', 'Standard Atmosphere', { whatIsIt: "Qaabka cadaadiska iyo heerkulka hawada.", whyIsItImportant: "Muhiim u ah xisaabinta waxqabadka diyaaradda." }),
                  createAeroLesson('forces', 'Four Forces of Flight', { whatIsIt: "Lift, Weight, Thrust, Drag.", howItWorks: "Dheellitirka afartan xoog." })
              ] 
          },
        ]
      },
      {
        id: 'aero-year-2',
        name: 'SANADKA 2AAD: Aerodynamics',
        description: 'Faham sida hawadu u dhaqanto marka ay dul marayso walxaha xawaaraha ku socda.',
        modules: [
          { 
              id: 'aero-y2-aero', 
              title: 'Aerodynamics I', 
              lessons: [
                  createAeroLesson('airfoils', 'Airfoil Theory', { whatIsIt: "Qaabka baalka diyaaradda.", howItWorks: "Abuurista Lift-ka." }),
                  createAeroLesson('incompressible', 'Incompressible Flow', { whatIsIt: "Dhaqdhaqaaqa hawada xawaaraha hooseeya." })
              ] 
          },
          { 
              id: 'aero-y2-struct', 
              title: 'Aerospace Structures', 
              lessons: [
                  createAeroLesson('thin-walled', 'Thin-Walled Structures', { whatIsIt: "Qaab-dhismeedka diyaaradaha fudud oo adag." })
              ] 
          },
        ]
      },
      {
        id: 'aero-year-3',
        name: 'SANADKA 3AAD: Propulsion & Stability',
        description: 'Baro matoorada diyaaradaha iyo gantaalaha, iyo xasiloonida duulimaadka.',
        modules: [
          { 
              id: 'aero-y3-prop', 
              title: 'Propulsion Systems', 
              lessons: [
                  createAeroLesson('jets', 'Jet Engines (Turbojet/Turbofan)', { whatIsIt: "Matoorada gaaska." }),
                  createAeroLesson('rockets', 'Rocket Propulsion', { whatIsIt: "Matoorada gantaalaha." })
              ] 
          },
          { 
              id: 'aero-y3-stability', 
              title: 'Flight Dynamics', 
              lessons: [
                  createAeroLesson('stability', 'Static & Dynamic Stability', { whatIsIt: "Awoodda diyaaraddu isku dheellitirto." })
              ] 
          },
        ]
      },
      {
        id: 'aero-year-4',
        name: 'SANADKA 4AAD: Space & Design',
        description: 'Naqshadaynta dayax-gacmeedyada iyo hawlgallada hawada sare.',
        modules: [
          { 
              id: 'aero-y4-space', 
              title: 'Orbital Mechanics', 
              lessons: [
                  createAeroLesson('kepler', 'Kepler\'s Laws', { whatIsIt: "Dhaqdhaqaaqa meerayaasha." }),
                  createAeroLesson('maneuvers', 'Orbital Maneuvers', { whatIsIt: "Beddelka wadada dayax-gacmeedka (Hohmann Transfer)." })
              ] 
          },
          { 
              id: 'aero-y4-design', 
              title: 'Aircraft Design Project', 
              lessons: [
                  createAeroLesson('design-cycle', 'Conceptual Design', { whatIsIt: "Tallaabooyinka naqshadaynta diyaarad cusub." })
              ] 
          },
        ]
      }
    ]
};
