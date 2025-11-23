
import type { Discipline, Lesson } from '../types';
import { ZapIcon } from '../components/Icons';

const createElecLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `elec-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=elec-${id}`,
    videoUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
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

export const electricalEngineeringDiscipline: Discipline = {
    id: 'electrical-engineering',
    name: 'Injineernimada Korontada',
    icon: ZapIcon,
    description: 'Daraasadda iyo ku dabaqida korontada, elektarooniga, iyo electromagnetism.',
    levels: [
      {
        id: 'elec-year-1',
        name: 'SANADKA 1AAD: Aasaaska Korontada',
        description: 'Baro sharciyada aasaasiga ah ee wareegyada DC iyo AC.',
        modules: [
          { 
              id: 'elec-y1-circuits', 
              title: 'Circuit Theory I', 
              lessons: [
                  createElecLesson('ohms-law', 'Sharciga Ohm & Awoodda', { whatIsIt: "V = IR.", whyIsItImportant: "Aasaaska dhammaan xisaabaadka korontada.", quiz: [{ question: "V = ?", options: ["IR", "I/R", "R/I"], correctAnswer: "IR", explanation: "Ohm's Law." }] }, 'F_vLWkkOofw'),
                  createElecLesson('kirchhoff', 'Shuruucda Kirchhoff (KCL & KVL)', { whatIsIt: "Shuruucda socodka korontada iyo danabka.", howItWorks: "Wadarta korontada soo gasha meel waa inay la mid tahay tan ka baxda." }, 'm4jzgqYefa8'),
                  createElecLesson('network-theorems', 'Network Theorems', { whatIsIt: "Thevenin & Norton theorems.", whyIsItImportant: "Si loo fududeeyo wareegyada adag." }, 'MDETdJ6qZAk')
              ] 
          },
          { 
              id: 'elec-y1-digital', 
              title: 'Digital Logic Design', 
              lessons: [
                  createElecLesson('logic-gates', 'Logic Gates (AND, OR, NOT)', { whatIsIt: "Dhismayaasha kombiyuutarka.", whyIsItImportant: "Waxay sameeyaan go'aamada dijitaalka ah." }, 'gI-qXk7XojA'),
                  createElecLesson('boolean', 'Boolean Algebra', { whatIsIt: "Xisaabta logic-ga." }, 'm5Y1906a5_U')
              ] 
          },
        ]
      },
      {
        id: 'elec-year-2',
        name: 'SANADKA 2AAD: Elektarooniga & Calaamadaha',
        description: 'U gudub qalabka elektarooniga ah sida transistors iyo falanqaynta calaamadaha.',
        modules: [
          { 
              id: 'elec-y2-electronics', 
              title: 'Analog Electronics', 
              lessons: [
                  createElecLesson('diodes', 'Semiconductor Diodes', { whatIsIt: "Qalabka u ogolaada korontada hal dhinac kaliya." }, 'JBTE4M55US4'),
                  createElecLesson('bjt', 'Bipolar Junction Transistors (BJT)', { whatIsIt: "Qalabka cod-weyneeyaha iyo furaha (switch).", whyIsItImportant: "Waa aasaaska qalabka casriga ah." }, '7ukDKVHpac4'),
                  createElecLesson('opamps', 'Operational Amplifiers', { whatIsIt: "Wareegyo koronto oo aad u awood badan." }, '7VFidTA5ThY')
              ] 
          },
          { 
              id: 'elec-y2-signals', 
              title: 'Signals & Systems', 
              lessons: [
                  createElecLesson('fourier', 'Fourier Series', { whatIsIt: "Kala dhigidda calaamadaha mawjadaha.", whyIsItImportant: "Falanqaynta isgaarsiinta." }, 'r6sGWTCMz2k'),
                  createElecLesson('laplace', 'Laplace Transform', { whatIsIt: "Xallinta isle'egyada differential-ka." }, 'ZGPtPkTft8g')
              ] 
          },
        ]
      },
      {
        id: 'elec-year-3',
        name: 'SANADKA 3AAD: Awoodda & Xakamaynta',
        description: 'Baro sida loo dhaliyo, loo gudbiyo korontada, iyo sida loo xakameeyo nidaamyada.',
        modules: [
          { 
              id: 'elec-y3-power', 
              title: 'Power Systems Analysis', 
              lessons: [
                  createElecLesson('power-gen', 'Dhalinta Korontada', { whatIsIt: "Sida korontada looga dhaliyo warshadaha." }, '20Vb6hlLQSg'),
                  createElecLesson('transmission', 'Gudbinta & Qaybinta', { whatIsIt: "Khadadka korontada sare (High Voltage)." }, 'pXy1J432rXU')
              ] 
          },
          { 
              id: 'elec-y3-control', 
              title: 'Control Systems', 
              lessons: [
                  createElecLesson('feedback', 'Feedback Control', { whatIsIt: "Nidaamyada is-hagaajiya.", examples: "Cruise control-ka baabuurka." }, 'yE75wKbe2l4'),
                  createElecLesson('pid', 'PID Controllers', { whatIsIt: "Nooca ugu caansan ee xakamaynta warshadaha." }, '4Y7zG48uHRo')
              ] 
          },
        ]
      },
      {
        id: 'elec-year-4',
        name: 'SANADKA 4AAD: Isgaarsiinta & Mashruuca',
        description: 'Takhasuska isgaarsiinta iyo mashruuca qalin-jebinta.',
        modules: [
          { 
              id: 'elec-y4-comms', 
              title: 'Communication Systems', 
              lessons: [
                  createElecLesson('modulation', 'AM & FM Modulation', { whatIsIt: "Sida codka loogu diro hawada." }, 'isBCirwkCms'),
                  createElecLesson('digital-comms', 'Digital Communications', { whatIsIt: "Gudbinta xogta internetka." }, '0-P4VjFq7s')
              ] 
          },
          { 
              id: 'elec-y4-project', 
              title: 'Final Year Project', 
              lessons: [
                  createElecLesson('capstone', 'Mashruuca Qalin-jebinta', { whatIsIt: "Naqshadaynta nidaam koronto oo dhamaystiran." })
              ] 
          },
        ]
      }
    ]
};
