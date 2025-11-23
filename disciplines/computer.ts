
import type { Discipline, Lesson } from '../types';
import { ChipIcon } from '../components/Icons';

const createCompLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `comp-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=comp-${id}`,
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

export const computerEngineeringDiscipline: Discipline = {
    id: 'computer-engineering',
    name: 'Injineernimada Kombiyuutarka',
    icon: ChipIcon,
    description: 'Waxay isku darsataa sayniska kombiyuutarka iyo injineernimada elektarooniga si loo horumariyo qalabka iyo software-ka kombiyuutarka.',
    levels: [
      {
        id: 'comp-year-1',
        name: 'SANADKA 1AAD: Aasaaska & Barnaamijinta',
        description: 'Baro luqadaha barnaamijinta, xisaabta algorithms-ka, iyo fiisigiska korontada.',
        modules: [
          { 
              id: 'comp-y1-prog', 
              title: 'Programming Fundamentals (Python)', 
              lessons: [
                  createCompLesson('py-intro', 'Hordhaca Python & Programming Logic', { 
                      whatIsIt: `**Python** waa luqad barnaamijineed (programming language) heer sare ah (high-level), fasiraad leh (interpreted), oo ujeedooyin badan leh (general-purpose).`,
                      whyIsItImportant: `Injineerka kombiyuutarka, barashada Python waa sida barashada luqadda Ingiriiska ee sayniska.`,
                      mainParts: `**1. Syntax (Naxwaha):** Python ma isticmaasho qaansooyin.`,
                      examples: `**Tusaale 1: Hello World**`
                  }, 'rfscVS0vtbw'),
                  createCompLesson('py-control', 'Control Structures (Loops & Conditionals)', { 
                      whatIsIt: `Barnaamijku ma noqon karo mid waxtar leh haddii uu kaliya u socdo si toos ah.`,
                      howItWorks: `If, Else, While, For.`
                  }, 'PqFKRqpHrjw'),
                  createCompLesson('py-functions', 'Functions & Modules', { whatIsIt: "Qaybo koodh ah oo dib loo isticmaali karo." }, 'NSbOtYzIQI0')
              ] 
          },
          { 
              id: 'comp-y1-math', 
              title: 'Discrete Mathematics', 
              lessons: [
                  createCompLesson('math-logic', 'Propositional Logic', { whatIsIt: "Barashada runta iyo beenta (True/False)." }, 'h8E-uE6d-k4'),
                  createCompLesson('math-sets', 'Set Theory', { whatIsIt: "Barashada ururinta walxaha." }, 'tyDKR4FG3Yw')
              ] 
          },
        ]
      },
      {
        id: 'comp-year-2',
        name: 'SANADKA 2AAD: Dhismaha & Xogta',
        description: 'Faham sida kombiyuutarku u shaqeeyo min hoos ilaa kor, iyo sida xogta loo habeeyo.',
        modules: [
          { 
              id: 'comp-y2-arch', 
              title: 'Computer Architecture', 
              lessons: [
                  createCompLesson('arch-von-neumann', 'Von Neumann Architecture', { whatIsIt: "Qaabka kombiyuutarka casriga ah uu u dhisan yahay." }, '4rXfjLSrQDI'),
                  createCompLesson('arch-cpu', 'CPU Design', { whatIsIt: "Sida loo naqshadeeyo processor-ka." }, 'cNN_tTXABUA')
              ] 
          },
          { 
              id: 'comp-y2-dsa', 
              title: 'Data Structures & Algorithms', 
              lessons: [
                  createCompLesson('dsa-arrays', 'Arrays & Linked Lists', { whatIsIt: "Hababka aasaasiga ah ee kaydinta xogta." }, 'RBSGKlAvoiM'),
                  createCompLesson('dsa-trees', 'Trees & Graphs', { whatIsIt: "Qaababka xogta ee isku xiran." }, 'oSWTXtMglKE')
              ] 
          },
        ]
      },
      {
        id: 'comp-year-3',
        name: 'SANADKA 3AAD: Nidaamyada & Shabakadaha',
        description: 'Baro sida kombiyuutaradu u wada xiriiraan iyo sida nidaamyada hawlgalka u shaqeeyaan.',
        modules: [
          { 
              id: 'comp-y3-os', 
              title: 'Operating Systems', 
              lessons: [
                  createCompLesson('os-intro', 'Hordhaca OS', { whatIsIt: "Software-ka maamula hardware-ka." }, 'vBURTt97EkA'),
                  createCompLesson('os-process', 'Process Management', { whatIsIt: "Sida barnaamijyadu u wada shaqeeyaan." }, 'OrM7nZCxWZk')
              ] 
          },
          { 
              id: 'comp-y3-net', 
              title: 'Computer Networks', 
              lessons: [
                  createCompLesson('net-osi', 'OSI Model', { whatIsIt: "Toddobada lakab ee isgaarsiinta." }, 'IPVgpEiQZhY'),
                  createCompLesson('net-tcpip', 'TCP/IP Protocol', { whatIsIt: "Luqadda Internet-ka." }, 'PpsEaqJV_A0')
              ] 
          },
        ]
      },
      {
        id: 'comp-year-4',
        name: 'SANADKA 4AAD: Tiknoolajiyada Casriga ah',
        description: 'Mowduucyo horumarsan sida AI, Cyber Security, iyo Cloud Computing.',
        modules: [
          { 
              id: 'comp-y4-ai', 
              title: 'Artificial Intelligence', 
              lessons: [
                  createCompLesson('ai-ml', 'Machine Learning Basics', { whatIsIt: "Barashada sida kombiyuutarku wax u barto." }, 'Gv9_4yMHFhI'),
                  createCompLesson('ai-nn', 'Neural Networks', { whatIsIt: "Qaabka maskaxda dadka oo lagu dayday." }, 'aircAruvnKk')
              ] 
          },
          { 
              id: 'comp-y4-security', 
              title: 'Cybersecurity', 
              lessons: [
                  createCompLesson('sec-crypto', 'Cryptography', { whatIsIt: "Qarinta xogta." }, 'JH4qNrLx8FE'),
                  createCompLesson('sec-network', 'Network Security', { whatIsIt: "Ilaalinta shabakadaha." }, 'DNsR92q-G6Q')
              ] 
          },
        ]
      }
    ]
};
