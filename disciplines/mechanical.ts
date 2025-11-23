
import type { Discipline, Lesson } from '../types';
import { GearIcon } from '../components/Icons';

const createMechLesson = (id: string, title: string, content: any): Lesson => ({
    id: `mech-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=mech-${id}`,
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

export const mechanicalEngineeringDiscipline: Discipline = {
    id: 'mechanical-engineering',
    name: 'Injineernimada Makaanikada',
    icon: GearIcon,
    description: 'Ku dabaq mabaadi\'da fiisigiska iyo sayniska walxaha naqshadaynta iyo falanqaynta nidaamyada makaanikada.',
    levels: [
      {
        id: 'mech-year-1',
        name: 'SANADKA 1AAD: Aasaaska Makaanikada',
        description: 'Baro xoogagga, dhaqdhaqaaqa, iyo sawirka farsamada.',
        modules: [
          { 
              id: 'mech-y1-statics', 
              title: 'Engineering Mechanics: Statics', 
              lessons: [
                  createMechLesson('vectors', 'Force Vectors', { whatIsIt: "Xoogagga leh jihada iyo qiyaasta.", whyIsItImportant: "Aasaaska xisaabinta xoogga." }),
                  createMechLesson('equilibrium', 'Equilibrium of Particles', { whatIsIt: "Marka wadarta xoogagga ay eber tahay." })
              ] 
          },
          { 
              id: 'mech-y1-thermo', 
              title: 'Thermodynamics I', 
              lessons: [
                  createMechLesson('thermo-laws', 'Shuruucda Thermodynamics', { whatIsIt: "Sharciga 1aad iyo 2aad ee tamarta." }),
                  createMechLesson('cycles', 'Power Cycles', { whatIsIt: "Otto, Diesel, iyo Rankine cycles." })
              ] 
          },
        ]
      },
      {
        id: 'mech-year-2',
        name: 'SANADKA 2AAD: Dhaqdhaqaaqa & Walxaha',
        description: 'Faham sida walxuhu u dhaqaaqaan iyo sida ay u jabaan.',
        modules: [
          { 
              id: 'mech-y2-dynamics', 
              title: 'Dynamics', 
              lessons: [
                  createMechLesson('kinematics', 'Kinematics of Particles', { whatIsIt: "Dhaqdhaqaaqa walxaha.", whyIsItImportant: "Naqshadaynta mashiinnada dhaqaaqa." }),
                  createMechLesson('kinetics', 'Work & Energy', { whatIsIt: "Xiriirka xoogga iyo tamarta." })
              ] 
          },
          { 
              id: 'mech-y2-materials', 
              title: 'Mechanics of Materials', 
              lessons: [
                  createMechLesson('stress-strain', 'Stress & Strain Analysis', { whatIsIt: "Cadaadiska iyo kala-bixitaanka walxaha." }),
                  createMechLesson('failure', 'Failure Theories', { whatIsIt: "Sida loo saadaaliyo burburka." })
              ] 
          },
        ]
      },
      {
        id: 'mech-year-3',
        name: 'SANADKA 3AAD: Dareerayaasha & Naqshadaynta',
        description: 'Baro sida dareeruhu u dhaqmo iyo sida loo naqshadeeyo qaybaha mashiinka.',
        modules: [
          { 
              id: 'mech-y3-fluids', 
              title: 'Fluid Mechanics', 
              lessons: [
                  createMechLesson('bernoulli', 'Bernoulli\'s Equation', { whatIsIt: "Xiriirka cadaadiska iyo xawaaraha dareeraha." }),
                  createMechLesson('pipe-flow', 'Flow in Pipes', { whatIsIt: "Xisaabinta lumista cadaadiska tuubooyinka." })
              ] 
          },
          { 
              id: 'mech-y3-design', 
              title: 'Machine Design', 
              lessons: [
                  createMechLesson('gears', 'Gear Design', { whatIsIt: "Naqshadaynta ilkaha mashiinka." }),
                  createMechLesson('bearings', 'Bearings & Lubrication', { whatIsIt: "Yaraynta is-jiidjiidka." })
              ] 
          },
        ]
      },
      {
        id: 'mech-year-4',
        name: 'SANADKA 4AAD: Kuleylka & Wax-soo-saarka',
        description: 'Takhasuska wareejinta kuleylka iyo hababka wax-soo-saarka casriga ah.',
        modules: [
          { 
              id: 'mech-y4-heat', 
              title: 'Heat Transfer', 
              lessons: [
                  createMechLesson('conduction', 'Conduction, Convection, Radiation', { whatIsIt: "Saddexda hab ee kuleylku u gudbo." }),
                  createMechLesson('exchangers', 'Heat Exchangers', { whatIsIt: "Naqshadaynta qaboojiyayaasha." })
              ] 
          },
          { 
              id: 'mech-y4-manuf', 
              title: 'Manufacturing Processes', 
              lessons: [
                  createMechLesson('cnc', 'CNC Machining', { whatIsIt: "Mashiinnada kombiyuutarku wado." }),
                  createMechLesson('3d-print', 'Additive Manufacturing (3D Printing)', { whatIsIt: "Dhisidda walxaha lakab-lakab." })
              ] 
          },
        ]
      }
    ]
};
