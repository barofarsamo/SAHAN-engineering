
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

// --- Aerospace Engineering Lessons ---
const aero_intro = createStandardLesson('what-is-aero', 'Waa Maxay Injineernimada Hawada Sare?', {
    whatIsIt: "Injineernimada Hawada Sare waa laanta injineernimada ee ka shaqaysa naqshadaynta, dhismaha, iyo tijaabinta diyaaradaha iyo dayax-gacmeedyada.",
    whyIsItImportant: "Waxay awood noo siinaysaa inaan u safarno adduunka oo dhan, sahamino hawada sare, la xiriirno dayax-gacmeedyada, oo aan difaacno qarankeenna. Waa xudunta tignoolajiyada casriga ah.",
    mainParts: "Waxay u qaybsantaa laba laamood oo waaweyn: **Injineernimada Duulista (Aeronautical)**, oo diiradda saarta diyaaradaha ku jira jawiga dhulka, iyo **Injineernimada Hawada Sare (Astronautical)**, oo diiradda saarta dayax-gacmeedyada iyo gantaalaha ka baxsan jawiga.",
    howItWorks: "Injineeradu waxay adeegsadaan mabaadi'da fiisigiska (sida aerodynamics iyo thermodynamics) iyo sayniska walxaha si ay u naqshadeeyaan gawaari duuli karta oo adkeysi u leh xaaladaha adag ee duulimaadka iyo hawada sare.",
    prerequisites: "Waxaa loo baahan yahay aasaas adag oo xagga xisaabta (gaar ahaan calculus), fiisigiska, iyo kimisteriga ah.",
    examples: "Diyaaradda Boeing 787, Gantaalka Falcon 9 ee SpaceX, Saldhigga Hawada Sare ee Caalamiga ah (ISS), iyo diyaaradaha aan duuliyaha lahayn (drones).",
    challenges: "Caqabadaha waxaa ka mid ah abuurista walxo fudud oo adag, naqshadaynta matooro hufan, iyo hubinta badbaadada duulimaadyada xawaaraha sare leh iyo kuwa hawada sare.",
    comparison: "Haddii injineernimada madanigu dhisto buundooyinka isku xira meelaha, injineernimada hawada sare waxay dhistaa 'buundooyin' isku xira cirka iyo hawada sare.",
    quiz: [{ question: "Laanta injineernimada hawada sare ee ka shaqaysa dayax-gacmeedyada waa:", options: ["Aeronautical", "Astronautical", "Labadaba", "Midna"], correctAnswer: "Astronautical", explanation: "Astronautical waxay ka shaqeysaa maraakiibta ka baxsan jawiga dhulka." }]
});
const aero_aerodynamics = createStandardLesson('aerodynamics', 'Mabaadi\'da Aerodynamics', {
    whatIsIt: "Aerodynamics waa barashada sida hawadu ula falgasho walxaha dhaqaaqaya, sida baalka diyaaradda.",
    whyIsItImportant: "Waa aasaaska duulimaadka. Fahamka aerodynamics la'aanteed, suurtagal ma noqon lahayd in la naqshadeeyo diyaarad awood u leh inay abuurto kor u qaadis (lift) si ay hawada ugu jirto.",
    mainParts: "Fikradaha ugu waaweyn waa afarta awoodood ee duulimaadka: **Kor u Qaadis (Lift)**, **Miisaan (Weight)**, **Riixid (Thrust)**, iyo **Jiidis (Drag)**. Sidoo kale waxaa muhiim ah fahamka **Airfoil** (qaabka baalka).",
    howItWorks: "Baalka diyaaradda (airfoil) waxaa loo naqshadeeyay si hawada sare uga socotaa ay u dheereyso tan hoose. Sida uu dhigayo [[Mabda'a Bernoulli]], hawada dheereysa waxay leedahay cadaadis yar, taasoo keenta in cadaadiska sare ee hoose uu baalka kor u riixo, abuurayana kor u qaadis.",
    prerequisites: "Fahamka aasaasiga ah ee fiisigiska, gaar ahaan sharciyada Newton ee dhaqdhaqaaqa iyo fikradaha cadaadiska iyo cufnaanta.",
    examples: "Qaabka baabuurta tartanka (Formula 1) si loogu cadaadiyo dhulka (downforce), naqshadaynta marawaxadaha dabaysha, iyo xitaa duulimaadka kubadda kolayga marka la tuuro.",
    challenges: "Xakamaynta socodka hawada ee xawaaraha aadka u sarreeya (supersonic), yaraynta jiidista si loo badbaadiyo shidaalka, iyo ka hortagga 'istaagga' (stall) oo ah lumis lama filaan ah oo kor u qaadis ah.",
    principles: "Mabda'a Bernoulli iyo Saddexda Sharci ee Newton ee Dhaqdhaqaaqa.",
    quiz: [{ question: 'Awooddee ka mid ah afarta awoodood ee duulimaadka ayaa ka soo horjeedda jiidista?', options: ['Kor u qaadis', 'Miisaan', 'Riixid', 'Cufisjiid'], correctAnswer: 'Riixid', explanation: 'Riixitaanku waa awoodda hore u wada diyaaradda, halka jiidistu ay tahay awoodda iska caabinta hawada ee hoos u dhigta. Labaduba waa iska soo horjeedaan.' }]
});
const aero_propulsion = createStandardLesson('jet-engines', 'Matoorada Diyaaradaha (Jet Engines)', { whatIsIt: "Matoor diyaaradeed waa mashiin hawada neefsada oo abuurta riixid si uu diyaaradda hore ugu wado." });
const aero_orbital = createStandardLesson('keplers-laws', 'Shuruucda Kepler', { whatIsIt: "Shuruucda Kepler waa saddex sharci oo sharxaya dhaqdhaqaaqa meerayaasha ee ku wareegsan qorraxda." });
const aero_hypersonics = createStandardLesson('scramjets', 'Naqshadaynta Matoorka Scramjet', { whatIsIt: "Scramjet waa nooc matoor diyaaradeed oo ku shaqeeya xawaare ka sarreeya shan jeer xawaaraha codka." });

// --- Mechanical Engineering Lessons ---
const mech_thermodynamics = createStandardLesson('thermodynamics', 'Shuruucda Thermodynamics', { whatIsIt: "Thermodynamics waa barashada xiriirka ka dhexeeya kuleylka, shaqada, iyo tamarta." });
const mech_materials_science = createStandardLesson('materials-science', 'Sayniska Walxaha', { whatIsIt: "Sayniska walxuhu waa barashada sifooyinka walxaha iyo sida loogu dabaqo injineernimada." });
const mech_fluid_mechanics = createStandardLesson('bernoullis-equation', 'Isle\'egta Bernoulli', { whatIsIt: "Isle'egta Bernoulli waxay sharxaysaa xiriirka ka dhexeeya cadaadiska, xawaaraha, iyo dhererka dareere dhaqaaqaya." });

// --- Electrical Engineering Lessons ---
const elec_ohms_law = createStandardLesson('ohms-law', 'Sharciga Ohm', { whatIsIt: "Sharciga Ohm waa sharci aasaasi ah oo qeexaya xiriirka ka dhexeeya danabka, korantada, iyo iska caabinta." });
const elec_kirchhoffs_laws = createStandardLesson('kirchhoffs-laws', 'Shuruucda Kirchhoff', { whatIsIt: "Shuruucda Kirchhoff waa laba sharci oo loo isticmaalo falanqaynta wareegyada korontada ee adag." });
const elec_ac_circuits = createStandardLesson('phasors-impedance', 'Phasors iyo Impedance', { whatIsIt: "Phasors iyo Impedance waa fikrado xisaabeed loo isticmaalo in lagu fududeeyo falanqaynta wareegyada AC." });

// --- Computer Engineering Lessons ---
const comp_logic_gates = createStandardLesson('logic-gates', 'Albaabada Caqliga', { whatIsIt: "Albaabada caqligu waa dhismayaasha aasaasiga ah ee wareegyada dijitaalka ah." });
const comp_number_systems = createStandardLesson('number-systems', 'Nidaamyada Nambarada', { whatIsIt: "Barashada sida kombiyuutaradu u matalaan xogta iyagoo isticmaalaya binary iyo hexadecimal." });
const comp_architecture = createStandardLesson('von-neumann', 'Dhismaha Von Neumann', { whatIsIt: "Dhismaha Von Neumann waa naqshad aasaasi ah oo kombiyuutarada casriga ahi ku dhisan yihiin." });


export const disciplines: Discipline[] = [
  civilEngineeringDiscipline,
  {
    id: 'aerospace-engineering',
    name: 'Injineernimada Hawada Sare',
    icon: RocketIcon,
    description: 'Qaybta koowaad ee injineernimada ee ka shaqaysa horumarinta diyaaradaha iyo dayax-gacmeedyada.',
    levels: [
      {
        id: 'aero-year-1',
        name: 'SANADKA 1AAD: Aasaaska Injineernimada',
        description: 'Baro xisaabta, sayniska, iyo aqoonta aasaasiga ah ee saldhig u ah injineernimada hawada sare.',
        modules: [
          { id: 'aero-y1-m1', title: 'Hordhaca Injineernimada Hawada Sare', lessons: [aero_intro] },
          { id: 'aero-y1-m2', title: 'Calculus I & II', lessons: [createStandardLesson('aero-y1-calculus', 'Calculus for Aerospace', { whatIsIt: "Xisaabta isbeddelka oo muhiim u ah fahamka dhaqdhaqaaqa iyo xoogagga." })] },
          { id: 'aero-y1-m3', title: 'Physics: Mechanics & Thermodynamics', lessons: [createStandardLesson('aero-y1-physics', 'Physics for Aerospace', { whatIsIt: "Mabaadiida aasaasiga ah ee dhaqdhaqaaqa, tamarta, iyo kuleylka." })] },
          { id: 'aero-y1-m4', title: 'Engineering Drawing & CAD', lessons: [createStandardLesson('aero-y1-cad', 'Technical Drawing', { whatIsIt: "Barashada luqadda sawirka ee injineernimada." })] },
        ]
      },
      {
        id: 'aero-year-2',
        name: 'SANADKA 2AAD: Aasaaska Hawada Sare',
        description: 'Si qoto dheer u gal mabaadiida aasaasiga ah ee duulimaadka iyo naqshadaynta.',
        modules: [
          { id: 'aero-y2-m1', title: 'Aerodynamics', lessons: [aero_aerodynamics] },
          { id: 'aero-y2-m2', title: 'Strength of Materials', lessons: [createStandardLesson('aero-y2-materials', 'Aerospace Materials', { whatIsIt: "Barashada adkeysiga walxaha loo isticmaalo diyaaradaha." })] },
          { id: 'aero-y2-m3', title: 'Thermodynamics II', lessons: [createStandardLesson('aero-y2-thermo', 'Advanced Thermodynamics', { whatIsIt: "Dabagga mabaadiida thermodynamics ee nidaamyada hawada sare." })] },
          { id: 'aero-y2-m4', title: 'Dynamics & Vibrations', lessons: [createStandardLesson('aero-y2-dynamics', 'Aircraft Dynamics', { whatIsIt: "Barashada gariirka iyo dhaqdhaqaaqa qaab-dhismeedka diyaaradaha." })] },
        ]
      },
       {
        id: 'aero-year-3',
        name: 'SANADKA 3AAD: Nidaamyada Hawada Sare',
        description: 'Baro nidaamyada gaarka ah ee awoodda siiya, hago, oo dhisa diyaaradaha iyo dayax-gacmeedyada.',
        modules: [
          { id: 'aero-y3-m1', title: 'Nidaamyada Riixitaanka (Propulsion)', lessons: [aero_propulsion] },
          { id: 'aero-y3-m2', title: 'Makaanikada Wareega (Orbital Mechanics)', lessons: [aero_orbital] },
          { id: 'aero-y3-m3', title: 'Flight Dynamics and Control', lessons: [createStandardLesson('aero-y3-flight-control', 'Flight Control Systems', { whatIsIt: "Barashada sida loo xakameeyo oo loo dejiyo duulimaadka diyaaradaha." })] },
          { id: 'aero-y3-m4', title: 'Aircraft Structures', lessons: [createStandardLesson('aero-y3-structures', 'Analysis of Aircraft Structures', { whatIsIt: "Falanqaynta faahfaahsan ee qaab-dhismeedka diyaaradaha si ay u qaadaan culeysyada." })] },
        ]
      },
      {
        id: 'aero-year-4',
        name: 'SANADKA 4AAD: Naqshadaynta Sare & Mashruuca',
        description: 'Ku dabaq aqoontaada naqshadayn dhamaystiran iyo mashruuc qalin-jebin.',
        modules: [
          { id: 'aero-y4-m1', title: 'Duulimaadka Hypersonic', lessons: [aero_hypersonics] },
          { id: 'aero-y4-m2', title: 'Spacecraft Design', lessons: [createStandardLesson('aero-y4-spacecraft', 'Spacecraft Systems Design', { whatIsIt: "Naqshadaynta dayax-gacmeedyada iyo maraakiibta hawada sare." })] },
          { id: 'aero-y4-m3', title: 'Avionics', lessons: [createStandardLesson('aero-y4-avionics', 'Avionics Systems', { whatIsIt: "Barashada nidaamyada elektarooniga ah ee diyaaradaha iyo dayax-gacmeedyada." })] },
          { id: 'aero-y4-m4', title: 'Mashruuca Qalin-jabinta', lessons: [createStandardLesson('aero-y4-project', 'Aerospace Final Year Project', { whatIsIt: "Mashruuc naqshadeed ama cilmi-baaris oo dhamaystiran." })] },
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
        id: 'mech-year-1',
        name: 'SANADKA 1AAD: Aasaaska Injineernimada',
        description: 'Baro xisaabta, sayniska, iyo aqoonta aasaasiga ah ee saldhig u ah injineernimada makaanikada.',
        modules: [
          { id: 'mech-y1-m1', title: 'Hordhaca Injineernimada Makaanikada', lessons: [createStandardLesson('mech-y1-intro', 'Waa Maxay Injineernimada Makaanikada?', { whatIsIt: "Waa laan ballaaran oo ka shaqaysa naqshadaynta, dhismaha, iyo hawlgelinta mashiinnada." })] },
          { id: 'mech-y1-m2', title: 'Calculus I & II', lessons: [createStandardLesson('mech-y1-calculus', 'Calculus for Mechanical Eng', { whatIsIt: "Xisaabta muhiimka u ah falanqaynta dhaqdhaqaaqa, xoogagga, iyo tamarta." })] },
          { id: 'mech-y1-m3', title: 'Physics: Mechanics', lessons: [createStandardLesson('mech-y1-physics', 'Physics for Mechanical Eng', { whatIsIt: "Mabaadiida aasaasiga ah ee Newton iyo codsiyadooda." })] },
          { id: 'mech-y1-m4', title: 'Engineering Drawing & CAD', lessons: [createStandardLesson('mech-y1-cad', 'Technical Drawing & CAD', { whatIsIt: "Barashada sawirka farsamada iyo barnaamijyada naqshadaynta." })] },
        ]
      },
      {
        id: 'mech-year-2',
        name: 'SANADKA 2AAD: Mabaadi\'da Makaanikada',
        description: 'Si qoto dheer u gal fikradaha aasaasiga ah ee makaanikada, walxaha, iyo dareerayaasha.',
        modules: [
          { id: 'mech-y2-m1', title: 'Thermodynamics', lessons: [mech_thermodynamics] },
          { id: 'mech-y2-m2', title: 'Sayniska Walxaha', lessons: [mech_materials_science] },
          { id: 'mech-y2-m3', title: 'Makaanikada Dareeraha (Fluid Mechanics)', lessons: [mech_fluid_mechanics] },
          { id: 'mech-y2-m4', title: 'Statics & Dynamics', lessons: [createStandardLesson('mech-y2-statics', 'Statics and Dynamics', { whatIsIt: "Falanqaynta xoogagga saaran walxaha taagan iyo kuwa dhaqaaqaya." })] },
        ]
      },
      {
        id: 'mech-year-3',
        name: 'SANADKA 3AAD: Naqshadaynta Mashiinnada & Nidaamyada',
        description: 'Baro sida loo naqshadeeyo qaybaha mashiinnada, iyo sida kuleylka iyo xakamaynta u saameeyaan nidaamyada.',
        modules: [
          { id: 'mech-y3-m1', title: 'Naqshadaynta Mashiinka (Machine Design)', lessons: [createStandardLesson('mech-y3-machine-design', 'Machine Element Design', { whatIsIt: "Naqshadaynta qaybaha mashiinnada sida gears, bearings, iyo shafts." })] },
          { id: 'mech-y3-m2', title: 'Wareejinta Kuleylka (Heat Transfer)', lessons: [createStandardLesson('mech-y3-heat-transfer', 'Principles of Heat Transfer', { whatIsIt: "Barashada hababka kuleylku u socdo: conduction, convection, iyo radiation." })] },
          { id: 'mech-y3-m3', title: 'Nidaamyada Xakamaynta (Control Systems)', lessons: [createStandardLesson('mech-y3-controls', 'Introduction to Control Systems', { whatIsIt: "Barashada sida loo maareeyo, loo amro, loona xakameeyo dhaqanka nidaamyada." })] },
        ]
      },
      {
        id: 'mech-year-4',
        name: 'SANADKA 4AAD: Takhasuska Makaanikada & Mashruuca',
        description: 'Ku dabaq aqoontaada mashaariicda sare, robotics-ka, iyo mashruuc qalin-jebin.',
        modules: [
          { id: 'mech-y4-m1', title: 'Hababka Wax-soo-saarka (Manufacturing)', lessons: [createStandardLesson('mech-y4-manufacturing', 'Manufacturing Processes', { whatIsIt: "Barashada farsamooyinka wax-soo-saarka sida alxanka, mashiinnada, iyo daabacaadda 3D." })] },
          { id: 'mech-y4-m2', title: 'Robotics', lessons: [createStandardLesson('mech-y4-robotics', 'Introduction to Robotics', { whatIsIt: "Mabaadiida naqshadaynta, xakamaynta, iyo isticmaalka robot-yada." })] },
          { id: 'mech-y4-m3', title: 'Mashruuca Qalin-jabinta', lessons: [createStandardLesson('mech-y4-project', 'Mechanical Final Year Project', { whatIsIt: "Mashruuc naqshadeed ama cilmi-baaris oo dhamaystiran." })] },
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
        id: 'elec-year-1',
        name: 'SANADKA 1AAD: Aasaaska Injineernimada',
        description: 'Baro xisaabta, sayniska, iyo aqoonta aasaasiga ah ee saldhig u ah injineernimada korontada.',
        modules: [
          { id: 'elec-y1-m1', title: 'Hordhaca Injineernimada Korontada', lessons: [createStandardLesson('elec-y1-intro', 'Waa Maxay Injineernimada Korontada?', { whatIsIt: "Waa laan ka shaqaysa daraasadda iyo ku-dhaqanka korontada, elektarooniga, iyo electromagnetism-ka." })] },
          { id: 'elec-y1-m2', title: 'Calculus & Differential Equations', lessons: [createStandardLesson('elec-y1-calculus', 'Essential Mathematics', { whatIsIt: "Xisaabta aasaasiga u ah falanqaynta wareegyada iyo calaamadaha." })] },
          { id: 'elec-y1-m3', title: 'Physics: Electricity & Magnetism', lessons: [createStandardLesson('elec-y1-physics', 'Physics of E&M', { whatIsIt: "Shuruucda aasaasiga ah ee xukuma korontada iyo magnetism-ka." })] },
          { id: 'elec-y1-m4', title: 'Hordhaca Barnaamijinta (Python/C++)', lessons: [createStandardLesson('elec-y1-programming', 'Programming Fundamentals', { whatIsIt: "Barashada luqad barnaamijineed oo aasaasi ah." })] },
        ]
      },
      {
        id: 'elec-year-2',
        name: 'SANADKA 2AAD: Wareegyada & Elektarooniga',
        description: 'Si qoto dheer u gal falanqaynta wareegyada korontada iyo qaybaha aasaasiga ah ee elektarooniga.',
        modules: [
          { id: 'elec-y2-m1', title: 'Falanqaynta Wareegyada (DC Circuits)', lessons: [elec_ohms_law, elec_kirchhoffs_laws] },
          { id: 'elec-y2-m2', title: 'Wareegyada AC', lessons: [elec_ac_circuits] },
          { id: 'elec-y2-m3', title: 'Naqshadaynta Caqliga Dijitaalka ah (Digital Logic)', lessons: [createStandardLesson('elec-y2-digital', 'Digital Logic Design', { whatIsIt: "Aasaaska kombiyuutarada dijitaalka ah, oo ay ku jiraan albaabada caqliga iyo wareegyada isku-dhafan." })] },
          { id: 'elec-y2-m4', title: 'Aaladaha Elektarooniga ah', lessons: [createStandardLesson('elec-y2-electronics', 'Electronic Devices & Circuits', { whatIsIt: "Barashada diodes, transistors, iyo op-amps." })] },
        ]
      },
      {
        id: 'elec-year-3',
        name: 'SANADKA 3AAD: Nidaamyada Korontada & Isgaarsiinta',
        description: 'Baro mowjadaha electromagnetic, sida calaamadaha loo farsameeyo, iyo sida nidaamyada awoodda iyo isgaarsiintu u shaqeeyaan.',
        modules: [
          { id: 'elec-y3-m1', title: 'Electromagnetics', lessons: [createStandardLesson('elec-y3-em', 'Electromagnetic Fields & Waves', { whatIsIt: "Barashada isle'egyada Maxwell iyo faafidda mowjadaha." })] },
          { id: 'elec-y3-m2', title: 'Calaamadaha & Nidaamyada (Signals & Systems)', lessons: [createStandardLesson('elec-y3-signals', 'Signals and Systems', { whatIsIt: "Falanqaynta xisaabeed ee calaamadaha iyo nidaamyada waqtiga." })] },
          { id: 'elec-y3-m3', title: 'Nidaamyada Isgaarsiinta', lessons: [createStandardLesson('elec-y3-comms', 'Communication Systems', { whatIsIt: "Mabaadiida modulation-ka analog iyo dijitaalka ah." })] },
        ]
      },
      {
        id: 'elec-year-4',
        name: 'SANADKA 4AAD: Nidaamyada Sare & Takhasuska',
        description: 'Ku dabaq aqoontaada nidaamyada awoodda, xakamaynta, iyo mashruuc qalin-jebin.',
        modules: [
          { id: 'elec-y4-m1', title: 'Nidaamyada Awoodda Korontada (Power Systems)', lessons: [createStandardLesson('elec-y4-power', 'Power System Analysis', { whatIsIt: "Falanqaynta shabakadaha korontada ee waaweyn." })] },
          { id: 'elec-y4-m2', title: 'Nidaamyada Xakamaynta (Control Systems)', lessons: [createStandardLesson('elec-y4-controls', 'Feedback Control Systems', { whatIsIt: "Naqshadaynta nidaamyada xakamaynta si loo gaaro dhaqan la rabo." })] },
          { id: 'elec-y4-m3', title: 'Mashruuca Qalin-jabinta', lessons: [createStandardLesson('elec-y4-project', 'Electrical Final Year Project', { whatIsIt: "Mashruuc naqshadeed ama cilmi-baaris oo dhamaystiran." })] },
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
        id: 'comp-year-1',
        name: 'SANADKA 1AAD: Aasaaska Injineernimada',
        description: 'Baro xisaabta, sayniska, iyo barnaamijinta aasaasiga ah ee saldhig u ah injineernimada kombiyuutarka.',
        modules: [
          { id: 'comp-y1-m1', title: 'Hordhaca Injineernimada Kombiyuutarka', lessons: [createStandardLesson('comp-y1-intro', 'Waa Maxay Injineernimada Kombiyuutarka?', { whatIsIt: "Waa isku-darka naqshadaynta qalabka elektarooniga ah iyo horumarinta software-ka." })] },
          { id: 'comp-y1-m2', title: 'Calculus & Discrete Mathematics', lessons: [createStandardLesson('comp-y1-math', 'Essential Mathematics', { whatIsIt: "Xisaabta aasaasiga u ah algorithms-ka iyo naqshadaynta caqliga." })] },
          { id: 'comp-y1-m3', title: 'Hordhaca Barnaamijinta (Python)', lessons: [createStandardLesson('comp-y1-python', 'Programming in Python', { whatIsIt: "Barashada aasaaska barnaamijinta iyadoo la isticmaalayo Python." })] },
          { id: 'comp-y1-m4', title: 'Physics: Electricity & Magnetism', lessons: [createStandardLesson('comp-y1-physics', 'Physics of E&M', { whatIsIt: "Fahamka mabaadiida aasaasiga ah ee ka dambeeya wareegyada elektarooniga ah." })] },
        ]
      },
      {
        id: 'comp-year-2',
        name: 'SANADKA 2AAD: Aasaaska Dijitaalka & Barnaamijinta',
        description: 'Si qoto dheer u gal naqshadaynta dijitaalka ah, qaab-dhismeedka xogta, iyo dhismaha kombiyuutarka.',
        modules: [
          { id: 'comp-y2-m1', title: 'Caqliga Dijitaalka ah & Nidaamyada Nambarada', lessons: [comp_logic_gates, comp_number_systems] },
          { id: 'comp-y2-m2', title: 'Qaab-dhismeedka Xogta & Algorithms (Data Structures)', lessons: [createStandardLesson('comp-y2-data-struct', 'Data Structures and Algorithms', { whatIsIt: "Barashada hababka loo habeeyo xogta si hufan iyo algorithms-ka lagu farsameeyo." })] },
          { id: 'comp-y2-m3', title: 'Dhismaha Kombiyuutarka (Computer Architecture)', lessons: [comp_architecture] },
          { id: 'comp-y2-m4', title: 'Barnaamijinta Ku Wajahan Walxaha (OOP)', lessons: [createStandardLesson('comp-y2-oop', 'Object-Oriented Programming (C++)', { whatIsIt: "Barashada qaabka OOP oo aasaas u ah horumarinta software-ka weyn." })] },
        ]
      },
      {
        id: 'comp-year-3',
        name: 'SANADKA 3AAD: Nidaamyada Kombiyuutarka & Software-ka',
        description: 'Baro nidaamyada hawlgalka, shabakadaha, iyo sida loo naqshadeeyo nidaamyada ku-xiran (embedded systems).',
        modules: [
          { id: 'comp-y3-m1', title: 'Nidaamyada Hawlgalka (Operating Systems)', lessons: [createStandardLesson('comp-y3-os', 'Operating Systems Concepts', { whatIsIt: "Barashada sida nidaamka hawlgalku u maareeyo kheyraadka kombiyuutarka." })] },
          { id: 'comp-y3-m2', title: 'Shabakadaha Kombiyuutarka (Computer Networks)', lessons: [createStandardLesson('comp-y3-networks', 'Computer Networking', { whatIsIt: "Mabaadiida sida kombiyuutaradu isula xiriiraan internetka." })] },
          { id: 'comp-y3-m3', title: 'Microprocessors & Embedded Systems', lessons: [createStandardLesson('comp-y3-embedded', 'Embedded Systems Design', { whatIsIt: "Naqshadaynta kombiyuutarada yaryar ee ku jira aaladaha kale sida baabuurta iyo taleefannada." })] },
        ]
      },
      {
        id: 'comp-year-4',
        name: 'SANADKA 4AAD: Naqshadaynta Sare & Takhasuska',
        description: 'Ku dabaq aqoontaada mowduucyo sare sida naqshadaynta VLSI iyo sirdoonka macmalka ah, oo dhammaystir mashruuc qalin-jebin.',
        modules: [
          { id: 'comp-y4-m1', title: 'Naqshadaynta VLSI', lessons: [createStandardLesson('comp-y4-vlsi', 'VLSI System Design', { whatIsIt: "Naqshadaynta wareegyada isku-dhafan ee aadka u ballaaran (chips)." })] },
          { id: 'comp-y4-m2', title: 'Sirdoonka Macmalka ah (AI)', lessons: [createStandardLesson('comp-y4-ai', 'Introduction to AI', { whatIsIt: "Mabaadiida aasaasiga ah ee sirdoonka macmalka ah iyo barashada mashiinka." })] },
          { id: 'comp-y4-m3', title: 'Mashruuca Qalin-jabinta', lessons: [createStandardLesson('comp-y4-project', 'Computer Eng Final Year Project', { whatIsIt: "Mashruuc naqshadeed ama cilmi-baaris oo dhamaystiran." })] },
        ]
      }
    ]
  }
];
