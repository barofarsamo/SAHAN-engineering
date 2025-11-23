
import type { Discipline, Lesson } from '../types';
import { BuildingIcon } from '../components/Icons';

// Helper to create standard lessons
const createCivilLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `civil-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=${id}`,
    videoUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
    structuredContent: {
        whatIsIt: { title: 'Waa Maxay?', content: content.whatIsIt || 'Qeexitaan guud oo ku saabsan mawduucan.' },
        whyIsItImportant: { title: 'Maxay Muhiim u Tahay?', content: content.whyIsItImportant || 'Sharaxaad ku saabsan muhiimadda mawduucan.' },
        mainParts: { title: 'Qaybaha Ugu Waaweyn', content: content.mainParts || 'Faahfaahin ku saabsan qaybaha uu ka kooban yahay.' },
        howItWorks: { title: 'Sidee Buu u Shaqeeyaa?', content: content.howItWorks || 'Habka uu u shaqeeyo ama loo fuliyo.' },
        prerequisites: { title: 'Maxaa Loo Baahan Yahay si Loo Fahmo?', content: content.prerequisites || 'Aqoonta aasaasiga ah ee loo baahan yahay.' },
        examples: { title: 'Tusaalooyin Cad & Codsiga Dhismaha', content: content.examples || 'Tusaalooyin nolosha dhabta ah ka yimid.' },
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

const calc_functions = createCivilLesson('calc-1-functions', 'CASHAR 1: Functions & Modeling', {
    whatIsIt: "Injineernimada dhismaha, **Function** waa sharci xisaabeed isku xiraya 'Input' (sida culeyska saaran buundo) iyo 'Output' (sida inta ay buundadaasi leexanayso/deflection). Waa luqadda aan ku qeexno xiriirka ka dhexeeya doorsoomayaasha fiisikiga ah.",
    whyIsItImportant: "Kahor intaan dhagax la dhigin, injineerku wuxuu isticmaalaa functions si uu u saadaaliyo dhaqanka dhismaha. Waxay noo ogolaanayaan inaan xisaabino badbaadada, kharashka, iyo cimriga dhismaha annagoo aan weli dhisin.",
    mainParts: `**1. Linear Functions (y = mx + c):** Waxaa loo isticmaalaa xiriirka toosan, tusaale ahaan, *Hooke's Law* oo qeexaya xiriirka Stress-ka iyo Strain-ka ee biraha ilaa xad go'an.
**2. Quadratic Functions (y = ax² + bx + c):** Waxay qeexaan qaababka qalloocan, sida qaansada (arch) buundada ama xarigga la laalay (suspension cable).
**3. Trigonometric Functions:** Muhiim u ah falanqaynta xaglaha iyo xoogagga (Resolving forces).`,
    howItWorks: "Injineerku wuxuu qaataa xogta dhabta ah (Data points) wuxuuna u sameeyaa function matala (Mathematical Model). Tusaale, haddii tiir la saaro culeys, leexashadiisa waxaa lagu qeexi karaa function `d(x)` halka `x` ay tahay masaafada.",
    prerequisites: "Aljebrada Dugsiga Sare, Fahamka garaafyada.",
    examples: "**Buundada Qaansada (Arch Bridge):** Qaabka qaansada waxaa badanaa lagu matalaa `y = -0.05x² + 2x`. Tani waxay injineerka u sheegaysaa dhererka saxda ah ee meel kasta oo buundada ka mid ah.",
    quiz: [
        { question: "Waa maxay ujeedada ugu weyn ee 'Functions' ee injineernimada?", options: ["In la xalliyo imtixaanka", "In la saadaaliyo dhaqanka dhismaha (Modeling)", "In la sawiro khadad", "Ma laha faa'iido"], correctAnswer: "In la saadaaliyo dhaqanka dhismaha (Modeling)", explanation: "Waxaan u isticmaalnaa inaan ku matalno xaqiiqada si aan u saadaalino natiijooyinka." },
        { question: "Nooca function-kee ayaa ugu habboon qaabka xarigga buundada (Suspension Cable)?", options: ["Linear", "Quadratic (Parabola)", "Constant", "Logarithmic"], correctAnswer: "Quadratic (Parabola)", explanation: "Xarigga culeyska sida siman u qaybsan yahay wuxuu qaataa qaab parabola ah." },
        { question: "Hooke's Law oo sharxaya kala-bixitaanka birta waa tusaale function noocee ah?", options: ["Linear", "Exponential", "Quadratic", "Rational"], correctAnswer: "Linear", explanation: "Stress-ku wuxuu si toos ah u la socdaa Strain-ka (Directly proportional)." },
        { question: "Haddii `y` ay tahay kharashka, `x` na ay tahay tirada sibirka, waa maxay `Slope`?", options: ["Wadarta kharashka", "Kharashka halkii kiish (Unit cost)", "Kharashka gaadiidka", "Fa'iidada"], correctAnswer: "Kharashka halkii kiish (Unit cost)", explanation: "Slope (m) wuxuu qeexayaa heerka isbeddelka (Rate of change)." },
        { question: "Domain-ka function ee dhismaha matalaya wuxuu u dhigmaa:", options: ["Qiimaha mashruuca", "Xadka fiisikiga ah ee dhismaha (Physical Constraints)", "Magaca injineerka", "Taariikhda"], correctAnswer: "Xadka fiisikiga ah ee dhismaha (Physical Constraints)", explanation: "Tusaale, dhererka buundada ma noqon karo negative." }
    ]
}, 'x_qC8a12c8E');

const calc_limits = createCivilLesson('calc-2-limits', 'CASHAR 2: Limits & Continuity', {
     whatIsIt: "**Limit** waa fikradda aasaasiga ah ee Calculus, taasoo qeexaysa dhaqanka function marka uu u dhowaado qiimo go'an, xitaa haddii uusan gaarin. **Continuity** (Xiriirsanaan) waa marka dhismaha function-ku uusan lahayn wax go'itaan ah.",
    whyIsItImportant: "Dhismayaasha waa inay ahaadaan kuwo 'Continuous'. Haddii waddo ay leedahay 'Discontinuity' (go'itaan), baabuurku wuu dhacayaa. Limits waxay noo ogolaanayaan inaan fahamno waxa dhacaya marka aan gaarno xadka ugu dambeeya ee badbaadada (Ultimate Limit State).",
    mainParts: `**1. Qeexitaanka Limit:** $\\lim_{x \\to c} f(x) = L$.
**2. Continuity:** Function wuxuu continuous yahay haddii Limit-ka bidix, midig, iyo qiimaha function-ka ay siman yihiin.
**3. Infinite Limits:** Marka culeysku uu u dhowaado mid aan la qaadi karin (Vertical Asymptote).`,
    howItWorks: "Waxaan baarnaa waxa dhacaya marka `x` ay aad ugu dhowaato qiimo, tusaale ahaan, marka dhumucda derbiga ay u dhowaato eber (theoretical failure points).",
    prerequisites: "Calculus 1: Functions.",
    examples: "**Go'itaanka Waddada (Road Gap):** Haddii buundo ay leedahay kala-bax (expansion joint), injineerku wuxuu isticmaalaa Limits si uu u hubiyo in taayirka baabuurka uu si habsami leh uga gudbi karo, inkastoo ay jirto farqi yar.",
    quiz: [
        { question: "Haddii $\\lim_{x \\to 2} f(x) = 5$ laakiin $f(2) = 3$, function-ku ma 'Continuous' baa?", options: ["Haa", "Maya", "Mararka qaar", "Lama ogaan karo"], correctAnswer: "Maya", explanation: "Si uu continuous u noqdo, Limit-ka iyo qiimaha dhabta ah waa inay isku mid noqdaan." }
    ]
}, '3bIk3pKg0Vo');

const calc_derivatives = createCivilLesson('calc-3-derivatives', 'CASHAR 3: Derivatives (Hos-timaad)', {
    whatIsIt: "**Derivative** (Hos-timaad) waa cabbirka sida degdegga ah ee wax isu beddelaan (Rate of Change). Xagga joomitiriga, waa janjeerka (slope) xariiqda taabata qallooca.",
    whyIsItImportant: "Waa wadnaha injineernimada. Haddii aan haysano function u taagan 'Moment' (leexinta), derivative-kiisu waa 'Shear Force' (Xoogga jarista). Haddii aan haysano 'Load', derivative-kiisu waa isbeddelka culeyska. Waxay noo sheegtaa meesha ugu khatarta badan dhismaha.",
    mainParts: `**1. Power Rule:** $\\frac{d}{dx}(x^n) = nx^{n-1}$.
**2. Chain Rule:** Loo isticmaalo functions-ka isku-dhafan.
**3. Higher Order Derivatives:** Derivative-ka labaad wuxuu tilmaamayaa 'Concavity' (qallooca), muhiim u ah ogaanshaha meesha ugu hoosaysa ee leexashada (Maximum deflection).`,
    howItWorks: "Waxaan qaadanaa function matalaya dhismaha (sida qaabka uu u leexday), waxaana ka qaadnaa derivative si aan u ogaano xaglaha (slope) iyo xoogagga gudaha (internal forces).",
    prerequisites: "Calculus 2: Limits.",
    examples: "**Dogob (Beam Analysis):**\n" +
"Haddii `y` tahay leexashada (deflection).\n" +
"`dy/dx` (Slope) = Xagasha leexashada.\n" +
"`d²y/dx²` (Curvature) = Wuxuu xiriir la leeyahay Bending Moment (M).\n" +
"`d³y/dx³` = Shear Force (V).\n" +
"`d⁴y/dx⁴` = Load (w).",
    quiz: [
        { question: "Derivative wuxuu cabbiraa:", options: ["Mugga", "Heerka isbeddelka (Rate of Change)", "Dhererka", "Wareegga"], correctAnswer: "Heerka isbeddelka (Rate of Change)", explanation: "Waa sida degdegga ah ee `y` isku beddesho marka `x` isbeddesho." }
    ]
}, 'WUvTyaaNkzM');
const calc_optimization = createCivilLesson('calc-4-optimization', 'CASHAR 4: Codsiyada Derivative & Optimization', {
    whatIsIt: "**Optimization** waa habka loo helo xalka ugu fiican—ha noqdo midka ugu qiimaha yar, kan ugu adag, ama kan ugu fudud. Waxaan isticmaalnaa Derivatives si aan u helno meelaha ugu sarreeya (Maxima) iyo ugu hooseeya (Minima).",
    whyIsItImportant: "Injineerka wanaagsan ma dhiso kaliya wax taagan; wuxuu dhisaa wax taagan oo kharashkiisu macquul yahay (Efficient). Sidee loo sameeyaa haanta biyaha oo qaadda mugga ugu badan laakiin isticmaasha birta ugu yar? Taasi waa Optimization.",
    mainParts: `**1. Critical Points:** Helitaanka meesha $f'(x) = 0$.
**2. Second Derivative Test:** Si loo ogaado in bartaasi tahay Max ama Min.
**3. Related Rates:** Isbeddelka laba shay oo isku xiran (sida shubka lagu shubayo haan koon ah iyo sare u kaca heerka biyaha).`,
    howItWorks: "Qor function kharashka ama awoodda matalaya, qaado derivative-ka, eber ka dhig, kadibna xalli si aad u hesho qiimaha ugu habboon.",
    prerequisites: "Calculus 3: Derivatives.",
    examples: "**Naqshadaynta Kanaalka Biyaha:** Injineerka wuxuu rabaa inuu qodo kanaal qaada biyaha ugu badan (Maximum flow). Waa inuu helaa xagasha (angle) iyo dhumucda ugu habboon isagoo isticmaalaya derivative-ka function-ka qulqulka (Flow equation).",
    quiz: [
        { question: "Optimization macnaheedu waa:", options: ["In la helo xalka ugu fiican (Best solution)", "In la qiyaaso", "In la isticmaalo kombiyuutar", "In la badiyo kharashka"], correctAnswer: "In la helo xalka ugu fiican (Best solution)", explanation: "Waa habka lagu helo Maxima ama Minima." }
    ]
}, '7kOqZ1fA2uI');
const calc_integration = createCivilLesson('calc-5-integration', 'CASHAR 5: Integration (Isku-geyn)', {
    whatIsIt: "**Integration** waa geeddi-socodka ka soo horjeeda Derivative-ka. Waa isku-geynta qaybo yaryar si loo helo wadarta guud. Joomitiri ahaan, waa bedka (Area) ka hooseeya qallooca garaafka.",
    whyIsItImportant: "Haddii aan haysano function-ka 'Load' (Culeyska), Integration-kiisu waa 'Shear Force'. Integration-ka Shear Force waa 'Bending Moment'. Sidoo kale, waxaan u isticmaalnaa si aan u xisaabino mugga (Volume) dhismayaasha qaabkoodu adag yahay (sida biyo-xireenada) iyo xarumaha cuf-isjiidadka (Center of Gravity/Centroids).",
    mainParts: `**1. Indefinite Integral:** $\\int f(x) dx$ (Waxaa soo baxa function + C).
**2. Definite Integral:** $\\int_{a}^{b} f(x) dx$ (Waxaa soo baxa tiro/qiimo).
**3. Codsiyada:** Area under curve, Volume of revolution, Centroids.`,
    howItWorks: "Waxaan u qaybinnaa dhismaha qaybo aad u yaryar (dx), kadibna waan isku darnaa dhammaantood si aan u helno wadarta saxda ah.",
    prerequisites: "Calculus 3 & 4.",
    examples: "**Xisaabinta Mugga Biyo-xireenka (Dam Volume):** Biyo-xireenku badanaa waa qaab qalloocan. Si loo ogaado inta shub (concrete) ee galaha, waxaan isticmaalnaa Definite Integral ee function-ka qaabka biyo-xireenka.",
    quiz: [
        { question: "Integration waa lidka:", options: ["Derivative-ka", "Limit-ka", "Function-ka", "Algebra"], correctAnswer: "Derivative-ka", explanation: "Fundamental Theorem of Calculus ayaa isku xira labadan." }
    ]
}, 'rfscVS0vtbw');
const phys_kinematics = createCivilLesson('phys-1-kinematics', 'CASHAR 6: Kinematics (Dhaqdhaqaaqa)', {
    whatIsIt: "**Kinematics** waa laanta makaanikada ee sharxaysa dhaqdhaqaaqa walxaha iyadoon la eegayn xoogagga sababa. Waxay ka jawaabtaa su'aalaha: Xagee buu joogaa? Intee buu socdaa? Sidee buu u dardar-gelinayaa?",
    whyIsItImportant: "Goobta dhismaha, wax walba way dhaqaaqaan. Wiishashka (Cranes), gawaarida xamuulka, iyo biyaha tuubooyinka. Fahamka Kinematics wuxuu muhiim u yahay badbaadada goobta iyo qorsheynta saadka (logistics).",
    mainParts: `**1. Displacement (Bar-ka-bax):** Isbeddelka booska (Vector).
**2. Velocity (Xawaare):** Heerka isbeddelka booska ($v = dx/dt$).
**3. Acceleration (Dardargelin):** Heerka isbeddelka xawaaraha ($a = dv/dt$).
**4. Projectile Motion:** Dhaqdhaqaaqa walxaha hawada la tuuray (muhiim u ah shubka la tuurayo - concrete pumping).`,
    howItWorks: "Waxaan isticmaalnaa isle'egyada dhaqdhaqaaqa (Equations of Motion) si aan u saadaalino meesha walaxdu ahaan doonto waqti cayiman.",
    prerequisites: "Calculus 3: Derivatives.",
    examples: "**Bamgareynta Shubka (Concrete Pumping):** Marka shubka laga soo tuurayo tuubo dheer, wuxuu raacaa qaabka 'Projectile Motion'. Injineerku waa inuu xisaabiyaa xawaaraha iyo xagasha saxda ah si shubku ugu dhaco meesha loogu talagalay.",
    quiz: [
        { question: "Kinematics waxay barataa:", options: ["Dhaqdhaqaaqa iyadoon la eegin xoogga", "Xoogagga", "Tamarta", "Walxaha"], correctAnswer: "Dhaqdhaqaaqa iyadoon la eegin xoogga", explanation: "Waa sharaxaadda dhaqdhaqaaqa (Geometry of motion)." }
    ]
}, 'x_qC8a12c8E');
const phys_newtons_laws = createCivilLesson('phys-2-newtons-laws', 'CASHAR 7: Shuruucda Newton ee Dhaqdhaqaaqa', {
    whatIsIt: "Saddexda sharci ee Sir Isaac Newton ayaa ah aasaaska injineernimada dhismaha. Waxay qeexaan xiriirka ka dhexeeya walax, xoogagga saaran, iyo dhaqdhaqaaqeeda.",
    whyIsItImportant: "Dhismaha ma istaagi karo haddii aynaan fahmin xoogagga. Sharciga 1aad wuxuu saldhig u yahay **Statics** (Dhismaha taagan). Sharciga 2aad wuxuu muhiim u yahay **Dynamics** (Dhismaha gariiraya dhulgariirka dartii). Sharciga 3aad wuxuu sharxayaa sida dhulku u celiyo culeyska dhismaha (Reaction forces).",
    mainParts: `**1. Sharciga 1aad (Inertia):** Walaxdu way iska sii soconaysaa ama way taagnaanaysaa ilaa xoog dibadda ah qabto ($\\sum F = 0$ for equilibrium).
**2. Sharciga 2aad (Dynamics):** $F = ma$ (Xoog = Cuf x Dardargelin).
**3. Sharciga 3aad (Action/Reaction):** Ficil kasta wuxuu leeyahay fal-celin la eg oo kasoo horjeeda (Tiirka dhulka ku dhaya, dhulkuna tiirka wuu soo riixayaa).`,
    howItWorks: "Waxaan sawirnaa 'Free Body Diagram' muujinaya dhammaan xoogagga, kadibna waxaan dabaqnaa shuruucda Newton si aan u xisaabino xoogagga aan la aqoon.",
    prerequisites: "Physics: Kinematics.",
    examples: "**Tiirka Dhismaha (Structural Column):**\n" +
"Tiirku wuxuu dhulka ku hayaa culeyska dhismaha (Action). Dhulku wuxuu bixiyaa xoog siman oo soo horjeeda (Reaction) si tiirku uusan u quusin. Tani waa Sharciga 3aad.",
    quiz: [
        { question: "Sharciga 1aad ee Newton wuxuu aasaas u yahay:", options: ["Equilibrium (Dheellitirnaanta)", "Acceleration", "Energy", "Gravity"], correctAnswer: "Equilibrium (Dheellitirnaanta)", explanation: "Haddii xoogaggu isku dheellitiran yihiin (Sum F = 0), walaxdu ma dardargelayso." }
    ]
}, 'kKKM8Y-u7ds');
const phys_work_energy = createCivilLesson('phys-3-work-energy', 'CASHAR 8: Work & Energy (Shaqada & Tamarta)', {
    whatIsIt: "**Work** (Shaqo) fiisigis ahaan waa marka xoog uu walax u dhaqaajiyo masaafo ($W = F \\cdot d$). **Energy** (Tamar) waa awoodda shaqo lagu qabto. Dhismaha dhexdiisa, tamartu way isku beddeshaa (Potential to Kinetic).",
    whyIsItImportant: "Injineerku wuxuu u baahan yahay inuu ogaado awoodda mashiinnada. Wiishku imisa tamar ah ayuu u baahan yahay si uu bir 5-tan ah ugu qaado dabaqa 10aad? Dubbaha dhulka qoda (Pile Driver) imisa tamar ah ayuu ku dhuftaa dhulka?",
    mainParts: `**1. Work:** $W = Fd \\cos(\\theta)$.
**2. Potential Energy (PE):** Tamarta kaydsan sababo la xiriira dhererka ($PE = mgh$).
**3. Kinetic Energy (KE):** Tamarta dhaqdhaqaaqa ($KE = 0.5mv^2$).
**4. Conservation of Energy:** Tamarta lama abuuri karo lamana burburin karo, kaliya way isku beddeshaa.`,
    howItWorks: "Waxaan xisaabinaa tamarta bilowga ah iyo tamarta dhamaadka si aan u ogaano shaqada la qabtay ama awoodda loo baahan yahay.",
    prerequisites: "Physics: Newton's Laws.",
    examples: "**Pile Driver (Mashiinka Qoditaanka):** Dubbe culus ayaa kor loo qaadaa (Potential Energy kordhay). Kadibna waa la sii daayaa (wuxuu noqdaa Kinetic Energy). Markuu dhulka ku dhufto, tamartaas waxay qabataa SHAQO (Work) lagu quusiyo birta dhulka.",
    quiz: [
        { question: "Shaqo (Work) waxaa la qabtaa kaliya marka:", options: ["Walaxdu ay dhaqaaqdo jihada xoogga", "Xoog la saaro oo kaliya", "Walaxdu istaagto", "Waqti dhaafo"], correctAnswer: "Walaxdu ay dhaqaaqdo jihada xoogga", explanation: "Haddii aadan dhaqaajin, shaqo maadan qaban fiisigis ahaan." }
    ]
}, '2WS1sG9fhOk');
const phys_momentum = createCivilLesson('phys-4-momentum', 'CASHAR 9: Impulse & Momentum', {
    whatIsIt: "**Momentum** waa qiyaasta ay adag tahay in la joojiyo walax dhaqaaqaysa ($p = mv$). **Impulse** waa xoogga lagu dabaqay waqti gaaban ($J = F \\Delta t$).",
    whyIsItImportant: "Injineernimada madaniga, tani waxay muhiim u tahay falanqaynta shilalka (Impact Loads). Tusaale ahaan, marka baabuur ku dhufto darbiga buundada (Bridge Barrier), ama marka biyuhu si xoog ah ugu dhuftaan biyo-xireenka (Water Hammer). Waa inaan naqshadaynaa dhismayaal u adkeysan kara dharbaaxadaas.",
    mainParts: `**1. Momentum:** $p = mv$ (Vector).
**2. Impulse-Momentum Theorem:** $F \\Delta t = \\Delta p$ (Impulse wuxuu le'eg yahay isbeddelka momentum-ka).
**3. Conservation of Momentum:** Isku-dhaca walxaha (Collisions), wadarta momentum-ku isma beddesho.`,
    howItWorks: "Haddii aan ognahay xawaaraha iyo cufka baabuurka, iyo waqtiga uu shilku socdo, waxaan xisaabin karnaa Xoogga (Force) uu darbiga kala kulmayo.",
    prerequisites: "Physics: Work & Energy.",
    examples: "**Naqshadaynta Badbaadada Waddada (Crash Barriers):** Caagaga ama biraha waddada dhinaceeda yaal waxaa loo sameeyay inay 'jilicsanaadaan' si ay u dheereeyaan waqtiga shilka (Increase $\\Delta t$). Sida ku cad $F = \\Delta p / \\Delta t$, haddii waqtigu kordho, xoogga (Force) waxyeellada geysta wuu yaraadaa, taasoo badbaadisa nolosha.",
    quiz: [
        { question: "Momentum ($p$) waxaa lagu xisaabiyaa:", options: ["Mass x Velocity", "Mass x Acceleration", "Force x Time", "Energy / Time"], correctAnswer: "Mass x Velocity", explanation: "p = mv." }
    ]
}, 'hM7P5-s3r3E');
const phys_rotation = createCivilLesson('phys-5-rotation', 'CASHAR 10: Rotational Motion & Torque', {
    whatIsIt: "**Torque** (Wareeg-xoog) waa xoogga keena wareegga ($τ = r \\times F$). Waa muhiim in la kala saaro dhaqdhaqaaqa toosan (Linear) iyo kan wareega (Rotational).",
    whyIsItImportant: "Dhismayaasha intooda badan ma wareegaan, laakiin xoogagga isku daya inay wareejiyaan (Moments) ayaa ah kuwa ugu khatarta badan. Wiishka (Crane) ma gaddoomayo? Boolka (Bolt) ma si fiican baa loo adkeeyay? Albaabka biyo-xireenku ma furmayaa? Dhammaan waa Torque.",
    mainParts: `**1. Torque (Moment of Force):** $\\tau = F \\cdot d$ (Force x Perpendicular Distance).
**2. Center of Mass:** Barta ay walaxdu ku dheellitiran tahay.
**3. Moment of Inertia:** Sida ay walaxdu uga hortagto wareegga (muhiim u ah naqshadaynta dogobyada - I-beams).`,
    howItWorks: "Waxaan xisaabinaa Torque-ga ay keenaan culeysyada kala duwan. Si uusan dhismaha u gaddoomin, wadarta Torque-ga waa inay eber noqotaa (Equilibrium).",
    prerequisites: "Physics: Forces.",
    examples: "**Wiishka Dhismaha (Tower Crane):** Wiishku wuxuu leeyahay culeys qaade (Load) iyo culeys celise (Counterweight). Injineerku waa inuu hubiyaa in Torque-ga uu keeno Counterweight-ku uu la siman yahay ama ka badan yahay kan Load-ka, si uusan wiishku u gaddoomin.",
    quiz: [
        { question: "Torque (Moment) waa:", options: ["Xoog keena wareeg (Force causing rotation)", "Xoog toosan", "Xawaare", "Cuf"], correctAnswer: "Xoog keena wareeg (Force causing rotation)", explanation: "T = F x d." }
    ]
}, 'b-FAsozWEnt');
const phys_equilibrium = createCivilLesson('phys-6-equilibrium', 'CASHAR 11: Static Equilibrium (Dheellitirnaanta Taagan)', {
    whatIsIt: "**Static Equilibrium** waa xaaladda ugu muhiimsan injineernimada madaniga. Waa marka dhismaha uu taagan yahay oo uusan dhaqaaqin (`Sum of Forces = 0`) uusan wareegin (`Sum of Moments = 0`).",
    whyIsItImportant: "Buundo kasta, guri kasta, iyo biyo-xireen kasta oo aad aragto wuxuu ku taagan yahay Equilibrium. Haddii shuruudahan la buuxin waayo, dhismaha wuu dumayaa. Barashada Statics waa tallaabada ugu horreysa ee lagu noqdo Injineer Dhisme.",
    mainParts: `**1. $\\sum F_x = 0$:** Xoogagga jiifaa waa inay isku dheellitiran yihiin.
**2. $\\sum F_y = 0$:** Xoogagga taagani waa inay isku dheellitiran yihiin (Culeyska iyo Fal-celinta dhulka).
**3. $\\sum M = 0$:** Wareeg-xoogaggu waa inay isku dheellitiran yihiin.`,
    howItWorks: "Waxaan qaadanaa dhismaha (sida truss ama beam), waxaan goynaa qayb (Method of Sections/Joints), waxaanan xisaabinaa xoogagga aan la aqoon si aan u hubino in dhismuhu taagnaanayo.",
    prerequisites: "Physics: Newton's Laws & Rotation.",
    examples: "**Falanqaynta Truss-ka (Saqafka):** Truss-ka saqafka wuxuu ka kooban yahay birro isku xiran. Si aan u ogaano in bir kasta ay qaadi karto culeyska, waxaan u qaadanaa in guud ahaan Truss-ku uu ku jiro Equilibrium, kadibna waxaan xisaabinaa xoogga (Tension or Compression) bir kasta.",
    quiz: [
        { question: "Static Equilibrium macnaheedu waa:", options: ["Dhismaha ma dhaqaaqayo mana wareegayo", "Dhismaha wuu dhaqaaqayaa", "Dhismaha wuu wareegayaa", "Dhismaha wuu gariirayaa"], correctAnswer: "Dhismaha ma dhaqaaqayo mana wareegayo", explanation: "Acceleration = 0 xaalad walba." }
    ]
}, 'jH-3q9a6X6A');

export const civilEngineeringDiscipline: Discipline = {
    id: 'civil-engineering',
    name: 'Injineernimada Madaniga',
    icon: BuildingIcon,
    description: 'Baro sida loo naqshadeeyo, loo dhiso, loona dayactiro kaabayaasha bulshada sida buundooyinka, waddooyinka, iyo dhismayaasha dhaadheer.',
    levels: [
        {
            id: 'civil-year-1',
            name: 'SANADKA 1AAD: Aasaaska Injineernimada',
            description: 'Baro xisaabta sare iyo fiisigiska oo saldhig u ah fahamka xoogagga iyo naqshadaynta dhismaha.',
            modules: [
                { 
                    id: 'civil-y1-calculus-1', 
                    title: 'Calculus I: Modeling & Analysis', 
                    lessons: [calc_functions, calc_limits, calc_derivatives, calc_optimization, calc_integration] 
                },
                { 
                    id: 'civil-y1-physics-1', 
                    title: 'Physics I: Mechanics for Civil Eng', 
                    lessons: [phys_kinematics, phys_newtons_laws, phys_work_energy, phys_momentum, phys_rotation, phys_equilibrium] 
                },
                { 
                    id: 'civil-y1-drawing', 
                    title: 'Engineering Drawing & CAD', 
                    lessons: [createCivilLesson('civil-drawing-intro', 'Hordhaca Sawirka Farsamada', { whatIsIt: "Luqadda caalamiga ah ee injineernimada." })] 
                },
                {
                    id: 'civil-y1-materials',
                    title: 'Civil Engineering Materials',
                    lessons: [createCivilLesson('civil-materials-intro', 'Hordhaca Qalabka Dhismaha', { whatIsIt: "Barashada sifooyinka shubka, birta, iyo alwaaxa." })]
                }
            ]
        },
        {
            id: 'civil-year-2',
            name: 'SANADKA 2AAD: Mabaadi\'da Dhismaha',
            description: 'U gudub maadooyinka udub-dhexaadka u ah dhismaha sida Statics, Mechanics of Materials, iyo Surveying.',
            modules: [
                { id: 'civil-y2-statics', title: 'Statics & Structural Analysis', lessons: [createCivilLesson('civil-statics', 'Mabaadi\'da Statics', { whatIsIt: "Barashada xoogagga saaran dhismayaasha taagan." })] },
                { id: 'civil-y2-mechanics', title: 'Mechanics of Materials', lessons: [createCivilLesson('civil-stress-strain', 'Stress & Strain', { whatIsIt: "Sida walxuhu u dhaqmaan marka xoog la saaro." })] },
                { id: 'civil-y2-surveying', title: 'Surveying (Cabirka Dhulka)', lessons: [createCivilLesson('civil-surveying', 'Introduction to Surveying', { whatIsIt: "Cabbirka iyo khariidaynta dhulka." })] },
                { id: 'civil-y2-fluids', title: 'Fluid Mechanics', lessons: [createCivilLesson('civil-fluids', 'Fluid Properties', { whatIsIt: "Barashada dhaqdhaqaaqa biyaha iyo dareerayaasha." })] },
            ]
        },
        {
            id: 'civil-year-3',
            name: 'SANADKA 3AAD: Naqshadaynta & Geotechnics',
            description: 'Baro sida loo naqshadeeyo xubnaha shubka iyo birta, iyo fahamka ciidda dhismaha lagu dul dhisayo.',
            modules: [
                { id: 'civil-y3-concrete', title: 'Reinforced Concrete Design', lessons: [createCivilLesson('civil-rc-design', 'Naqshadaynta Shubka Xoojisan', { whatIsIt: "Isku-dhafka shubka iyo birta si loo helo dhisme adag." })] },
                { id: 'civil-y3-geotech', title: 'Geotechnical Engineering', lessons: [createCivilLesson('civil-soil-mech', 'Soil Mechanics', { whatIsIt: "Barashada sifooyinka ciidda iyo dhagaxa." })] },
                { id: 'civil-y3-transport', title: 'Transportation Engineering', lessons: [createCivilLesson('civil-highway', 'Highway Design', { whatIsIt: "Qorsheynta iyo dhisidda waddooyinka." })] },
                { id: 'civil-y3-hydrology', title: 'Hydrology & Water Resources', lessons: [createCivilLesson('civil-water', 'Water Systems', { whatIsIt: "Maareynta kheyraadka biyaha." })] },
            ]
        },
        {
            id: 'civil-year-4',
            name: 'SANADKA 4AAD: Maareynta & Mashruuca',
            description: 'Ku soo gabagabeey aqoontaada maareynta mashruuca, dhismaha deegaanka, iyo mashruuca qalin-jebinta.',
            modules: [
                { id: 'civil-y4-construction', title: 'Construction Management', lessons: [createCivilLesson('civil-management', 'Project Planning', { whatIsIt: "Maareynta waqtiga, kharashka, iyo tayada mashruuca." })] },
                { id: 'civil-y4-environment', title: 'Environmental Engineering', lessons: [createCivilLesson('civil-env', 'Water Treatment', { whatIsIt: "Sifeynta biyaha iyo maareynta qashinka." })] },
                { id: 'civil-y4-steel', title: 'Steel Structure Design', lessons: [createCivilLesson('civil-steel', 'Structural Steel Design', { whatIsIt: "Naqshadaynta dhismayaasha birta ah." })] },
                { id: 'civil-y4-project', title: 'Mashruuca Qalin-jabinta', lessons: [createCivilLesson('civil-final-project', 'Final Year Project', { whatIsIt: "Cilmi-baaris madax-bannaan ama naqshad dhisme oo dhamaystiran." })] },
            ]
        }
    ],
};
