
import type { Discipline, Lesson } from '../types';
import { ZapIcon } from '../components/Icons';

const createElecLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `elec-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=elec-${id}`,
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
                  createElecLesson('ohms-law', 'Sharciga Ohm, Voltage, & Current', { 
                      whatIsIt: `**Sharciga Ohm** waa aasaaska koowaad ee injineernimada korontada. Wuxuu qeexayaa xiriirka V, I, R.`,
                      whyIsItImportant: `Fahmidda xiriirkan waa lama huraan.`,
                      howItWorks: `**Atomic Level:** Maaddada sida naxaasta (Copper) waxay leedahay electrons xor ah.`,
                      quiz: [{ question: "Haddii $V$ ay kordho iyadoo $R$ ay joogto tahay, maxaa ku dhaca $I$?", options: ["Way kordhaysaa", "Way yaraanaysaa", "Isma beddelayso", "Eber bay noqonaysaa"], correctAnswer: "Way kordhaysaa", explanation: "V iyo I waa Directly Proportional ($V=IR$)." }] 
                  }, 'F_vLWkkOofw'),
                  createElecLesson('kirchhoff', 'Shuruucda Kirchhoff (KCL & KVL)', { whatIsIt: "Shuruucda xallinta wareegyada adag." }, 'm4jzgqYefa8'),
                  createElecLesson('network-theorems', 'Network Theorems', { whatIsIt: "Thevenin & Norton theorems." }, 'MDETdJ6qZAk')
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
                  createElecLesson('bjt', 'Bipolar Junction Transistors', { whatIsIt: "Qalabka cod-weyneeyaha iyo furaha." }, '7ukDKVHpac4'),
                  createElecLesson('opamps', 'Operational Amplifiers', { whatIsIt: "Wareegyo koronto oo aad u awood badan." }, '7VFidTA5ThY')
              ] 
          },
          { 
              id: 'elec-y2-signals', 
              title: 'Signals & Systems', 
              lessons: [
                  createElecLesson('fourier', 'Fourier Series', { whatIsIt: "Kala dhigidda calaamadaha mawjadaha." }, 'r6sGWTCMz2k'),
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
                  createElecLesson('feedback', 'Feedback Control', { whatIsIt: "Nidaamyada is-hagaajiya." }, 'yE75wKbe2l4'),
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
