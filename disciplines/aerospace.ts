
import type { Discipline, Lesson } from '../types';
import { RocketIcon } from '../components/Icons';

const createAeroLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `aero-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=aero-${id}`,
    videoUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
    structuredContent: {
        whatIsIt: { title: 'Faahfaahin Buuxda', content: content.whatIsIt || 'Qeexitaan guud.' },
        whyIsItImportant: { title: 'Muhiimadda', content: content.whyIsItImportant || 'Sharaxaad ku saabsan muhiimadda.' },
        mainParts: { title: 'Qaybaha', content: content.mainParts || 'Faahfaahin.' },
        howItWorks: { title: 'Habka Shaqada', content: content.howItWorks || 'Habka shaqada.' },
        prerequisites: { title: 'Shuruudaha', content: content.prerequisites || 'Aqoonta aasaasiga ah.' },
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
                  createAeroLesson('atmosphere', 'Standard Atmosphere Model', { 
                      whatIsIt: `Si diyaarad loo naqshadeeyo, waa inaan marka hore fahamnaa badweynta aan ku dhex dabaalanayno: **Hawada (The Atmosphere)**.`,
                      howItWorks: `**Hydrostatic Equation:** $$dP = -\rho g dh$$`,
                      whyIsItImportant: `Fahamka Atmosphere-ka ayaa go'aamiya Dhererka Duulimaadka iyo Xawaaraha.`
                  }, '5ltjznN1sK4'),
                  createAeroLesson('forces', 'Four Forces of Flight', { 
                      whatIsIt: `Diyaarad kasta oo duulaysa waxay ku jirtaa dagaal u dhexeeya afar xoog: Lift, Weight, Thrust, Drag.`,
                      howItWorks: `**Bernoulli's Principle:** Hawada dusha sare ee baalka maraysa way dheeraysaa.`
                  }, 'Gg0TXNX9SwA')
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
                  createAeroLesson('airfoils', 'Airfoil Theory', { whatIsIt: "Qaabka baalka diyaaradda." }, 'QKQK6_9h0pI'),
                  createAeroLesson('incompressible', 'Incompressible Flow', { whatIsIt: "Dhaqdhaqaaqa hawada xawaaraha hooseeya." }, '6Z7Uk5y9g8w')
              ] 
          },
          { 
              id: 'aero-y2-struct', 
              title: 'Aerospace Structures', 
              lessons: [
                  createAeroLesson('thin-walled', 'Thin-Walled Structures', { whatIsIt: "Qaab-dhismeedka diyaaradaha fudud oo adag." }, 'b1c2d3e4f5g')
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
                  createAeroLesson('jets', 'Jet Engines', { whatIsIt: "Matoorada gaaska (Turbojet/Turbofan)." }, 'Kqiq4e6-R8E'),
                  createAeroLesson('rockets', 'Rocket Propulsion', { whatIsIt: "Matoorada gantaalaha." }, 'L0AMQ6k77cE')
              ] 
          },
          { 
              id: 'aero-y3-stability', 
              title: 'Flight Dynamics', 
              lessons: [
                  createAeroLesson('stability', 'Static & Dynamic Stability', { whatIsIt: "Awoodda diyaaraddu isku dheellitirto." }, 'x_qC8a12c8E')
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
                  createAeroLesson('kepler', 'Kepler\'s Laws', { whatIsIt: "Dhaqdhaqaaqa meerayaasha." }, '5a6b7c8d9e0'),
                  createAeroLesson('maneuvers', 'Orbital Maneuvers', { whatIsIt: "Beddelka wadada dayax-gacmeedka." }, 'f1g2h3i4j5k')
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
