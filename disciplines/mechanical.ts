
import type { Discipline, Lesson } from '../types';
import { GearIcon } from '../components/Icons';

const createMechLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `mech-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=mech-${id}`,
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
                  createMechLesson('vectors', 'Force Vectors & Equilibrium', { 
                      whatIsIt: `**Engineering Statics** waa cilmiga barashada walxaha aan dhaqaaqin.`,
                      whyIsItImportant: `Dhisme kasta waa inuu ahaadaa mid "Static Equilibrium" ku jira.`,
                      examples: `**Tusaale: Laambad Jidka (Traffic Light):**`
                  }, 'w5C_lro_V9Q'),
                  createMechLesson('equilibrium', 'Equilibrium of Particles', { whatIsIt: "Marka wadarta xoogagga ay eber tahay." }, 'Py8254yWfT0')
              ] 
          },
          { 
              id: 'mech-y1-thermo', 
              title: 'Thermodynamics I', 
              lessons: [
                  createMechLesson('thermo-laws', 'Shuruucda Thermodynamics', { whatIsIt: "Barashada tamarta, kulaylka, iyo shaqada." }, '8N1BxHg9Ov8'),
                  createMechLesson('cycles', 'Power Cycles', { whatIsIt: "Otto, Diesel, iyo Rankine cycles." }, 'hJm8sC5fGk8')
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
                  createMechLesson('kinematics', 'Kinematics of Particles', { whatIsIt: "Dhaqdhaqaaqa walxaha." }, 'x_qC8a12c8E'),
                  createMechLesson('kinetics', 'Work & Energy', { whatIsIt: "Xiriirka xoogga iyo tamarta." }, '2WS1sG9fhOk')
              ] 
          },
          { 
              id: 'mech-y2-materials', 
              title: 'Mechanics of Materials', 
              lessons: [
                  createMechLesson('stress-strain', 'Stress & Strain Analysis', { whatIsIt: "Cadaadiska iyo kala-bixitaanka walxaha." }, 'hQ_t1xO-3u0'),
                  createMechLesson('failure', 'Failure Theories', { whatIsIt: "Sida loo saadaaliyo burburka." }, 'uN4rD6_w7sA')
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
                  createMechLesson('bernoulli', 'Bernoulli\'s Equation', { whatIsIt: "Xiriirka cadaadiska iyo xawaaraha dareeraha." }, 'DW4rItB20h4'),
                  createMechLesson('pipe-flow', 'Flow in Pipes', { whatIsIt: "Xisaabinta lumista cadaadiska tuubooyinka." }, '1f2e3d4c5b6')
              ] 
          },
          { 
              id: 'mech-y3-design', 
              title: 'Machine Design', 
              lessons: [
                  createMechLesson('gears', 'Gear Design', { whatIsIt: "Naqshadaynta ilkaha mashiinka." }, 'odpsL3_g1Ew'),
                  createMechLesson('bearings', 'Bearings & Lubrication', { whatIsIt: "Yaraynta is-jiidjiidka." }, '6b7c8d9e0f1')
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
                  createMechLesson('conduction', 'Heat Transfer Modes', { whatIsIt: "Conduction, Convection, Radiation." }, 'SNnd0f3dDcw'),
                  createMechLesson('exchangers', 'Heat Exchangers', { whatIsIt: "Naqshadaynta qaboojiyayaasha." }, 'Oa-aB8hV7uM')
              ] 
          },
          { 
              id: 'mech-y4-manuf', 
              title: 'Manufacturing Processes', 
              lessons: [
                  createMechLesson('cnc', 'CNC Machining', { whatIsIt: "Mashiinnada kombiyuutarku wado." }, 'j4l1m2n3o4p'),
                  createMechLesson('3d-print', 'Additive Manufacturing', { whatIsIt: "3D Printing." }, 'VxW5-Z6y_wA')
              ] 
          },
        ]
      }
    ]
};
