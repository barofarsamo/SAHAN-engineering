
import type { Discipline, Lesson } from './types';
import { civilEngineeringDiscipline } from './disciplines/civil';
import { BuildingIcon, RocketIcon, GearIcon, ZapIcon, ChipIcon } from './components/Icons';

const createStandardLesson = (id: string, title: string, content: any): Lesson => ({
    id,
    title,
    imageUrl: `https://picsum.photos/800/400?random=${id}`,
    structuredContent: {
        whatIsIt: { title: 'Waa Maxay?', content: content.whatIsIt || 'Qeexitaan guud oo ku saabsan mawduucan.' },
        whyIsItImportant: { title: 'Maxay Muhiim u Tahay?', content: content.whyIsItImportant || 'Sharaxaad ku saabsan muhiimadda mawduucan.' },
        mainParts: { title: 'Qaybaha Ugu Waaweyn', content: content.mainParts || 'Faahfaahin ku saabsan qaybaha uu ka kooban yahay.' },
        howItWorks: { title: 'Sidee Buu u Shaqeeyaa?', content: content.howItWorks || 'Habka uu u shaqeeyo ama loo fuliyo.' },
        prerequisites: { title: 'Maxaa Loo Baahan Yahay si Loo Fahmo?', content: content.prerequisites || 'Aqoonta aasaasiga ah ee loo baahan yahay.' },
        examples: { title: 'Tusaalooyin Cad', content: content.examples || 'Tusaalooyin nolosha dhabta ah ka yimid.' },
        challenges: { title: 'Caqabadaha La Xiriira', content: content.challenges || 'Dhibaatooyinka ama caqabadaha la xiriira.' },
    },
    additionalContent: {
        history: content.history ? { title: 'Taariikhda / Asalka', content: content.history } : undefined,
        principles: content.principles ? { title: 'Fikrado / Mabaadii', content: content.principles } : undefined,
        skills: content.skills ? { title: 'Xirfado Lagu Dabaqi Karo', content: content.skills } : undefined,
        comparison: content.comparison ? { title: 'Isbarbardhig', content: content.comparison } : undefined,
    },
    quiz: content.quiz || [
        { question: `Waa maxay ${title}?`, options: ['Haa', 'Maya', 'Laga yaabee', 'Ma aqaan'], correctAnswer: 'Haa', explanation: 'Sharaxaad.' },
    ],
});

const aeroEngLesson1 = createStandardLesson('what-is-aero', 'Waa Maxay Injineernimada Hawada Sare?', {
    whatIsIt: "Injineernimada Hawada Sare waa laanta injineernimada ee ka shaqaysa naqshadaynta, dhismaha, iyo tijaabinta diyaaradaha iyo dayax-gacmeedyada.",
    whyIsItImportant: "Waxay awood noo siinaysaa inaan u safarno adduunka oo dhan, sahamino hawada sare, la xiriirno dayax-gacmeedyada, oo aan difaacno qarankeenna. Waa xudunta tignoolajiyada casriga ah.",
    mainParts: "Waxay u qaybsantaa laba laamood oo waaweyn: **Injineernimada Duulista (Aeronautical)**, oo diiradda saarta diyaaradaha ku jira jawiga dhulka, iyo **Injineernimada Hawada Sare (Astronautical)**, oo diiradda saarta dayax-gacmeedyada iyo gantaalaha ka baxsan jawiga.",
    howItWorks: "Injineeradu waxay adeegsadaan mabaadi'da fiisigiska (sida aerodynamics iyo thermodynamics) iyo sayniska walxaha si ay u naqshadeeyaan gawaari duuli karta oo adkeysi u leh xaaladaha adag ee duulimaadka iyo hawada sare.",
    prerequisites: "Waxaa loo baahan yahay aasaas adag oo xagga xisaabta (gaar ahaan calculus), fiisigiska, iyo kimisteriga ah.",
    examples: "Diyaaradda Boeing 787, Gantaalka Falcon 9 ee SpaceX, Saldhigga Hawada Sare ee Caalamiga ah (ISS), iyo diyaaradaha aan duuliyaha lahayn (drones).",
    challenges: "Caqabadaha waxaa ka mid ah abuurista walxo fudud oo adag, naqshadaynta matooro hufan, iyo hubinta badbaadada duulimaadyada xawaaraha sare leh iyo kuwa hawada sare.",
    comparison: "Haddii injineernimada madanigu dhisto buundooyinka isku xira meelaha, injineernimada hawada sare waxay dhistaa 'buundooyin' isku xira cirka iyo hawada sare.",
    quiz: [
        { question: "Laanta injineernimada hawada sare ee ka shaqaysa dayax-gacmeedyada waa:", options: ["Aeronautical", "Astronautical", "Labadaba", "Midna"], correctAnswer: "Astronautical", explanation: "Astronautical waxay ka shaqeysaa maraakiibta ka baxsan jawiga dhulka." },
    ]
});

const aeroEngLesson2 = createStandardLesson('aerodynamics', 'Mabaadi\'da Aerodynamics', {
    whatIsIt: "Aerodynamics waa barashada sida hawadu ula falgasho walxaha dhaqaaqaya, sida baalka diyaaradda.",
    whyIsItImportant: "Waa aasaaska duulimaadka. Fahamka aerodynamics la'aanteed, suurtagal ma noqon lahayd in la naqshadeeyo diyaarad awood u leh inay abuurto kor u qaadis (lift) si ay hawada ugu jirto.",
    mainParts: "Fikradaha ugu waaweyn waa afarta awoodood ee duulimaadka: **Kor u Qaadis (Lift)**, **Miisaan (Weight)**, **Riixid (Thrust)**, iyo **Jiidis (Drag)**. Sidoo kale waxaa muhiim ah fahamka **Airfoil** (qaabka baalka).",
    howItWorks: "Baalka diyaaradda (airfoil) waxaa loo naqshadeeyay si hawada sare uga socotaa ay u dheereyso tan hoose. Sida uu dhigayo [[Mabda'a Bernoulli]], hawada dheereysa waxay leedahay cadaadis yar, taasoo keenta in cadaadiska sare ee hoose uu baalka kor u riixo, abuurayana kor u qaadis.",
    prerequisites: "Fahamka aasaasiga ah ee fiisigiska, gaar ahaan sharciyada Newton ee dhaqdhaqaaqa iyo fikradaha cadaadiska iyo cufnaanta.",
    examples: "Qaabka baabuurta tartanka (Formula 1) si loogu cadaadiyo dhulka (downforce), naqshadaynta marawaxadaha dabaysha, iyo xitaa duulimaadka kubadda kolayga marka la tuuro.",
    challenges: "Xakamaynta socodka hawada ee xawaaraha aadka u sarreeya (supersonic), yaraynta jiidista si loo badbaadiyo shidaalka, iyo ka hortagga 'istaagga' (stall) oo ah lumis lama filaan ah oo kor u qaadis ah.",
    principles: "Mabda'a Bernoulli iyo Saddexda Sharci ee Newton ee Dhaqdhaqaaqa.",
    quiz: [
        { question: 'Awooddee ka mid ah afarta awoodood ee duulimaadka ayaa ka soo horjeedda jiidista?', options: ['Kor u qaadis', 'Miisaan', 'Riixid', 'Cufisjiid'], correctAnswer: 'Riixid', explanation: 'Riixitaanku waa awoodda hore u wada diyaaradda, halka jiidistu ay tahay awoodda iska caabinta hawada ee hoos u dhigta. Labaduba waa iska soo horjeedaan.' },
    ]
});

export const disciplines: Discipline[] = [
  civilEngineeringDiscipline,
  {
    id: 'aerospace-engineering',
    name: 'Injineernimada Hawada Sare',
    icon: RocketIcon,
    description: 'Qaybta koowaad ee injineernimada ee ka shaqaysa horumarinta diyaaradaha iyo dayax-gacmeedyada.',
    levels: [
      {
        id: 'beginner',
        name: 'Bilow',
        description: '',
        modules: [
          {
            id: 'intro-aero',
            title: 'Hordhaca Hawada Sare',
            lessons: [aeroEngLesson1, aeroEngLesson2],
          },
        ],
      },
      {
        id: 'intermediate',
        name: 'Dhexe',
        description: '',
        modules: [
          {
            id: 'propulsion',
            title: 'Nidaamyada Riixitaanka',
            lessons: [createStandardLesson('jet-engines', 'Matoorada Diyaaradaha (Jet Engines)', { whatIsIt: "Matoor diyaaradeed waa mashiin hawada neefsada oo abuurta riixid si uu diyaaradda hore ugu wado." })],
          }
        ]
      },
       {
        id: 'advanced',
        name: 'Sare',
        description: '',
        modules: [
          {
            id: 'orbital-mechanics',
            title: 'Makaanikada Wareega',
            lessons: [createStandardLesson('keplers-laws', 'Shuruucda Kepler', { whatIsIt: "Shuruucda Kepler waa saddex sharci oo sharxaya dhaqdhaqaaqa meerayaasha ee ku wareegsan qorraxda." })],
          }
        ]
      },
      {
        id: 'expert',
        name: 'Khibrad',
        description: '',
        modules: [
          {
            id: 'hypersonics',
            title: 'Duulimaadka Hypersonic',
            lessons: [createStandardLesson('scramjets', 'Naqshadaynta Matoorka Scramjet', { whatIsIt: "Scramjet waa nooc matoor diyaaradeed oo ku shaqeeya xawaare ka sarreeya shan jeer xawaaraha codka." })],
          }
        ]
      }
    ],
  },
  {
    id: 'mechanical-engineering',
    name: 'Injineernimada Makaanikada',
    icon: GearIcon,
    description: 'Ku dabaq mabaadi\'da fiisigiska iyo sayniska walxaha naqshadaynta iyo falanqaynta nidaamyada makaanikada.',
    levels: [
        {
            id: 'beginner',
            name: 'Bilow',
            description: '',
            modules: [
                {
                    id: 'intro-mech',
                    title: 'Hordhaca Injineernimada Makaanikada',
                    lessons: [
                        createStandardLesson('thermodynamics', 'Shuruucda Thermodynamics', { whatIsIt: "Thermodynamics waa barashada xiriirka ka dhexeeya kuleylka, shaqada, iyo tamarta." }),
                        createStandardLesson('materials-science', 'Sayniska Walxaha', { whatIsIt: "Sayniska walxuhu waa barashada sifooyinka walxaha iyo sida loogu dabaqo injineernimada." }),
                    ]
                }
            ]
        },
        {
            id: 'intermediate-mech',
            name: 'Dhexe',
            description: '',
            modules: [
                {
                    id: 'fluid-mechanics',
                    title: 'Makaanikada Dareeraha',
                    lessons: [
                        createStandardLesson('bernoullis-equation', 'Isle\'egta Bernoulli', { whatIsIt: "Isle'egta Bernoulli waxay sharxaysaa xiriirka ka dhexeeya cadaadiska, xawaaraha, iyo dhererka dareere dhaqaaqaya." }),
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 'electrical-engineering',
    name: 'Injineernimada Korontada',
    icon: ZapIcon,
    description: 'Daraasadda iyo ku dabaqida korontada, elektarooniga, iyo electromagnetism.',
    levels: [
        {
            id: 'beginner',
            name: 'Bilow',
            description: '',
            modules: [
                {
                    id: 'intro-elec',
                    title: 'Aasaaska Wareegyada Korontada',
                    lessons: [
                        createStandardLesson('ohms-law', 'Sharciga Ohm', { whatIsIt: "Sharciga Ohm waa sharci aasaasi ah oo qeexaya xiriirka ka dhexeeya danabka, korantada, iyo iska caabinta." }),
                        createStandardLesson('kirchhoffs-laws', 'Shuruucda Kirchhoff', { whatIsIt: "Shuruucda Kirchhoff waa laba sharci oo loo isticmaalo falanqaynta wareegyada korontada ee adag." }),
                    ]
                }
            ]
        },
        {
            id: 'intermediate-elec',
            name: 'Dhexe',
            description: '',
            modules: [
                {
                    id: 'ac-circuits',
                    title: 'Wareegyada AC',
                    lessons: [
                        createStandardLesson('phasors-impedance', 'Phasors iyo Impedance', { whatIsIt: "Phasors iyo Impedance waa fikrado xisaabeed loo isticmaalo in lagu fududeeyo falanqaynta wareegyada AC." }),
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 'computer-engineering',
    name: 'Injineernimada Kombiyuutarka',
    icon: ChipIcon,
    description: 'Waxay isku darsataa sayniska kombiyuutarka iyo injineernimada elektarooniga si loo horumariyo qalabka iyo software-ka kombiyuutarka.',
    levels: [
        {
            id: 'beginner',
            name: 'Bilow',
            description: '',
            modules: [
                {
                    id: 'intro-comp',
                    title: 'Caqliga Dijitaalka ah',
                    lessons: [
                        createStandardLesson('logic-gates', 'Albaabada Caqliga', { whatIsIt: "Albaabada caqligu waa dhismayaasha aasaasiga ah ee wareegyada dijitaalka ah." }),
                        createStandardLesson('number-systems', 'Nidaamyada Nambarada', { whatIsIt: "Barashada sida kombiyuutaradu u matalaan xogta iyagoo isticmaalaya binary iyo hexadecimal." }),
                    ]
                }
            ]
        },
        {
            id: 'intermediate-comp',
            name: 'Dhexe',
            description: '',
            modules: [
                {
                    id: 'computer-architecture',
                    title: 'Dhismaha Kombiyuutarka',
                    lessons: [
                        createStandardLesson('von-neumann', 'Dhismaha Von Neumann', { whatIsIt: "Dhismaha Von Neumann waa naqshad aasaasi ah oo kombiyuutarada casriga ahi ku dhisan yihiin." }),
                    ]
                }
            ]
        }
    ]
  }
];