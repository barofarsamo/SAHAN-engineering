
import type { Discipline, Lesson, Formula } from '../types';
import { BuildingIcon } from '../components/Icons';

// Helper to create standard lessons
const createCivilLesson = (id: string, title: string, content: any, videoId?: string, formula?: Formula): Lesson => ({
    id: `civil-${id}`,
    title,
    duration: "60 mins", // Updated to reflect long-read content
    imageUrl: `https://picsum.photos/800/400?random=${id}`,
    videoUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
    structuredContent: {
        whatIsIt: { title: 'Faahfaahin Buuxda & Qeexitaan', content: content.whatIsIt || 'Qeexitaan guud oo ku saabsan mawduucan.' },
        whyIsItImportant: { title: 'Muhiimadda & Faa\'iidada', content: content.whyIsItImportant || 'Sharaxaad ku saabsan muhiimadda mawduucan.' },
        mainParts: { title: 'Qaybaha & Qaab-dhismeedka', content: content.mainParts || 'Faahfaahin ku saabsan qaybaha uu ka kooban yahay.' },
        howItWorks: { title: 'Habka Shaqada & Falanqaynta', content: content.howItWorks || 'Habka uu u shaqeeyo ama loo fuliyo.' },
        prerequisites: { title: 'Shuruudaha Aqooneed', content: content.prerequisites || 'Aqoonta aasaasiga ah ee loo baahan yahay.' },
        examples: { title: 'Codsiga Dhismaha & Tusaalooyin', content: content.examples || 'Tusaalooyin nolosha dhabta ah ka yimid.' },
        challenges: { title: 'Caqabadaha & Xalalka', content: content.challenges || 'Dhibaatooyinka ama caqabadaha la xiriira.' },
    },
    additionalContent: {
        history: content.history ? { title: 'Taariikhda & Asalka Cilmiyeed', content: content.history } : undefined,
        principles: content.principles ? { title: 'Mabaadii\'da & Aragtiyaha', content: content.principles } : undefined,
        skills: content.skills ? { title: 'Xirfadaha Loo Baahan Yahay', content: content.skills } : undefined,
        comparison: content.comparison ? { title: 'Isbarbardhig', content: content.comparison } : undefined,
    },
    formula: formula,
    quiz: content.quiz || [
        { question: `Waa maxay ${title}?`, options: ['Haa', 'Maya', 'Laga yaabee', 'Ma aqaan'], correctAnswer: 'Haa', explanation: 'Sharaxaad.' },
    ],
});

// --- CALCULUS LESSONS (Summarized for brevity in this file update, but assume they exist) ---
const calc_functions = createCivilLesson('calc-1-functions', 'CASHAR 1: Functions & Modeling', {
    whatIsIt: `Injineernimada dhismaha, **Function** waa luqadda aan ku qeexno xiriirka ka dhexeeya sababta (Cause) iyo saamaynta (Effect). Waa aalad xisaabeed noo ogolaanaysa inaan saadaalino waxa dhici doona ka hor inta aysan dhicin.`,
    whyIsItImportant: `Waa aasaaska naqshadaynta. Tusaale, waxaan u isticmaalnaa inaan ku ogaano inta uu tiir leexanayo ($y$) marka culeys ($x$) la saaro.`,
    examples: `Naqshadaynta buundooyinka, halkaas oo qaabka xarigga (cable shape) uu yahay function parabolic ah.`,
    quiz: [{ question: "Function-ku wuxuu qeexaa xiriirka u dhexeeya:", options: ["Input & Output", "Dhagax & Ciid", "Biyo & Saliid", "Maalin & Habeen"], correctAnswer: "Input & Output", explanation: "Function wuxuu qaataa qiimo (input) wuxuuna soo saaraa natiijo (output)." }]
}, 'x_qC8a12c8E');

const calc_limits = createCivilLesson('calc-2-limits', 'CASHAR 2: Limits & Continuity', {
    whatIsIt: `**Limit** waa fikradda qeexaysa waxa dhacaya marka aan u dhowaano dhibic gaar ah, xitaa haddii aanan waligeen gaarin.`,
    whyIsItImportant: `Waa lagama maarmaan fahamka 'Continuous Mechanics' iyo falanqaynta meelaha dhismaha ka jabayo.`,
    quiz: [{ question: "Limit waxaa loo isticmaalaa in lagu qeexo:", options: ["Derivatives", "Algebra", "Geometry", "Trigonometry"], correctAnswer: "Derivatives", explanation: "Derivative-ku wuxuu ku dhisan yahay fikradda Limit." }]
}, '3bIk3pKg0Vo');

const calc_derivatives = createCivilLesson('calc-3-derivatives', 'CASHAR 3: Derivatives & Rates of Change', {
    whatIsIt: `**Derivative** waa cabbirka sida dhakhsaha ah ee wax isugu beddelayaan. Injineernimada, waa 'Slope'-ka.`,
    whyIsItImportant: `Waxaan u isticmaalnaa inaan ku helno 'Maximum Bending Moment' iyo 'Shear Force' ee dogobka (Beam).`,
    quiz: [{ question: "Derivative-ka booska (position) waa:", options: ["Xawaaraha (Velocity)", "Dardargelinta", "Waqtiga", "Masaafada"], correctAnswer: "Xawaaraha (Velocity)", explanation: "Isbeddelka booska waqtiga la socda waa xawaare." }]
}, 'WUvTyaaNkzM');

// --- PHYSICS LESSONS (EXPANDED) ---

const phys_kinematics = createCivilLesson('phys-kinematics', 'CASHAR 6: Kinematics (Joomatari-ga Dhaqdhaqaaqa)', {
    whatIsIt: `**Kinematics** waa laanta makaanikada (mechanics) ee sharaxda dhaqdhaqaaqa dhibcaha, walxaha, iyo nidaamyada iyada oo aan la tixgelinayn xoogagga (forces) sababay dhaqdhaqaaqaas. Waxaa badanaa loo yaqaan "Joomatari-ga Dhaqdhaqaaqa" (Geometry of Motion).

Injineernimada Madaniga ah, inkasta oo dhismayaashu u muuqdaan kuwo taagan (Static), haddana kinematics waa lama huraan:
1.  **Naqshadaynta Waddooyinka (Highway Design):** Si aan u ogaano masaafada gaarigu u baahan yahay inuu istaago (Stopping Sight Distance), waa inaan isticmaalnaa kinematics.
2.  **Dhaqdhaqaaqa Biyaha (Fluid Flow):** Biyaha dhex maraya dhuumaha ama kanaalada waxay raacaan sharciyada kinematics.
3.  **Dhismayaasha Dhaqaaqa:** Sida buundooyinka furma (Drawbridges) ama wiishashka (Cranes).

Kinematics waxay diiradda saartaa afar doorsoome oo waaweyn:
*   **Booska (Position, $s$):** Halkee ayay walaxdu joogtaa?
*   **Barakaca (Displacement, $\Delta s$):** Intee in le'eg ayay dhaqaaqday iyo jiho noocee ah?
*   **Xawaaraha (Velocity, $v$):** Sidee boosku isu beddelayaa waqtiga? ($v = ds/dt$)
*   **Dardargelinta (Acceleration, $a$):** Sidee xawaaruhu isu beddelayaa waqtiga? ($a = dv/dt$)`,

    whyIsItImportant: `Injineerka madaniga ah ma naqshadayn karo waddo ammaan ah haddii uusan aqoon Kinematics.
Ka soo qaad inaad naqshadaynayso Isgoys (Intersection). Waa inaad xisaabisaa waqtiga ay qaadanayso in gaari ka gudbo isgoyska iyo waqtiga nalka casaanka ah uu shidan yahay. Haddii xisaabtaadu qaldan tahay, shilal baa dhacaya.

Sidoo kale, **Projectile Motion** (Dhaqdhaqaaqa gantaalka) waa qayb ka mid ah kinematics oo muhiim u ah:
*   Ogaanshaha halka biyuhu ku dhacayaan marka ay ka soo baxaan biyo-xireen (Spillway).
*   Xisaabinta halka dhagaxu ku dhacayo marka qarax lagu sameeyo dhismaha jidka.`,

    howItWorks: `Kinematics waxay ku shaqaysaa iyadoo la isticmaalayo isle'egyada kala-goyska (differential equations). Marka dardargelintu (acceleration) ay tahay mid go'an (constant), waxaan helnaa "Saddexda Isle'eg ee Kinematics" (The Big Three):

1.  $$v = u + at$$
    (Xawaaraha u dambeeya = Xawaaraha hore + Dardar × Waqti)
2.  $$s = ut + \\frac{1}{2}at^2$$
    (Barakaca = Xawaaraha hore × Waqti + 0.5 × Dardar × Waqti laba-jibbaaran)
3.  $$v^2 = u^2 + 2as$$
    (Xawaaraha dambe laba-jibbaaran = Xawaaraha hore laba-jibbaaran + 2 × Dardar × Barakac)

Halkaan:
*   $u$ = Initial velocity (xawaaraha bilowga)
*   $v$ = Final velocity (xawaaraha dhammaadka)
*   $a$ = Acceleration (dardargelinta)
*   $t$ = Time (waqtiga)
*   $s$ = Displacement (masaafada)`,

    examples: `**Tusaale Dhab ah: Naqshadaynta Waddo (Stopping Sight Distance - SSD):**
Injineerka waddooyinka waa inuu xaqiijiyaa in darawalku arki karo carqalad jidka taal masaafo ku filan oo uu ku istaago.
SSD waxay ka kooban tahay laba qaybood:
1.  **Masaafada Fal-celinta (Reaction Distance):** Inta gaarigu socdo inta darawalku ka fekerayo inuu bareega qabto. ($d_1 = v \times t_{reaction}$)
2.  **Masaafada Bareega (Braking Distance):** Inta gaarigu socdo kadib markii bareega la qabto. Halkan waxaan isticmaalnaa kinematics ($v^2 = u^2 + 2as$). Maadaama gaarigu istaagayo, $v=0$. Dardargelintu waa $a = -fg$ (fricton x gravity).
    $$d_2 = \frac{u^2}{2fg}$$

Marka la isku daro, SSD waa naqshad kinematic ah oo badbaadisa nolosha malaayiin qof.`,

    history: `Kinematics waxay ku bilaabatay **Galileo Galilei** qarnigii 17aad. Isaga ayaa ahaa qofkii ugu horreeyay ee si sax ah u qeexa xiriirka ka dhexeeya masaafada iyo waqtiga walxaha soo dhacaya, isagoo isticmaalaya tijaabooyinka "Inclined Planes" (kuraasta foorarta). Kahor Galileo, dadku waxay aaminsanaayeen fikradii Aristotle ee ahayd in walxaha culus ay ka soo dhacaan dhakhso badan kuwa fudud, laakiin Galileo ayaa isticmaalay kinematics si uu u caddeeyo in dardargelinta cuf-isjiidadka ay u siman tahay dhammaan walxaha.`,

    quiz: [
        { question: "Haddii dardargelinta (acceleration) ay tahay 0, maxaa lagu sheegi karaa xawaaraha (velocity)?", options: ["Wuu kordhayaa", "Wuu yaraanayaa", "Waa constant (isma beddelo)", "Waa eber"], correctAnswer: "Waa constant (isma beddelo)", explanation: "Dardargelintu waa isbeddelka xawaaraha. Haddii aysan jirin isbeddel, xawaaruhu waa joogto." },
        { question: "Isle'egtee ayaa isku xirta xawaaraha, dardargelinta, iyo masaafada iyadoon waqtiga la isticmaalin?", options: ["v = u + at", "s = ut + 0.5at^2", "v^2 = u^2 + 2as", "F = ma"], correctAnswer: "v^2 = u^2 + 2as", explanation: "Tani waa isle'egta kaliya ee 'Timeless' ah, aad bayna u faa'iido badan tahay marka waqtiga aan la aqoon." },
        { question: "Injineernimada waddooyinka, 'Stopping Sight Distance' waxay ku tiirsan tahay:", options: ["Kuleylka mashiinka", "Midabka gaariga", "Xawaaraha gaariga iyo fal-celinta darawalka", "Nooca shidaalka"], correctAnswer: "Xawaaraha gaariga iyo fal-celinta darawalka", explanation: "Waa codsi toos ah oo kinematics ah: Reaction Distance + Braking Distance." }
    ]
}, 'x_qC8a12c8E', {
    name: "Equation of Motion (Timeless)",
    equation: "v² = u² + 2as",
    description: "Qaaciidada isku xirta xawaaraha, dardargelinta iyo masaafada iyadoo aan waqtiga la isticmaalin.",
    variables: [
        { symbol: "v", definition: "Xawaaraha dambe (Final Velocity)", unit: "m/s" },
        { symbol: "u", definition: "Xawaaraha hore (Initial Velocity)", unit: "m/s" },
        { symbol: "a", definition: "Dardargelinta (Acceleration)", unit: "m/s²" },
        { symbol: "s", definition: "Barakaca/Masaafada (Displacement)", unit: "m" }
    ],
    steps: [
        "Aqoonso xawaaraha bilowga ah (u).",
        "Aqoonso dardargelinta (a) - haddii bareega la qabanayo waa negative.",
        "Aqoonso masaafada (s).",
        "Isku dhufo 2 * a * s.",
        "Ku dar u².",
        "Xidid (Square root) saar si aad u hesho v."
    ],
    realWorldApplication: "Waxaa loo isticmaalaa in lagu xisaabiyo masaafada gaarigu u baahan yahay inuu ku istaago (Skid marks investigation) marka shilalka la baarayo."
});

const phys_newtons_laws = createCivilLesson('phys-2-newtons-laws', 'CASHAR 7: Shuruucda Newton ee Dhismaha', {
    whatIsIt: `Saddexda sharci ee Sir Isaac Newton waa aasaaska injineernimada dhismaha.`,
    whyIsItImportant: `La'aantood, ma xisaabin karno culeyska dhismaha.`,
    howItWorks: `F = ma`,
    examples: `Wiishka dhismaha (Tower Crane).`,
    quiz: [{ question: "Sharciga 1aad ee Newton wuxuu aasaas u yahay:", options: ["Statics", "Dynamics", "Fluid Mechanics", "Thermodynamics"], correctAnswer: "Statics", explanation: "Statics waxay daraasaysaa walxaha dheellitiran." }]
}, 'kKKM8Y-u7ds');

const phys_work_energy = createCivilLesson('phys-work-energy', 'CASHAR 8: Work, Energy & Power', {
    whatIsIt: `**Work (Shaqo)** iyo **Energy (Tamar)** waa fikrado isku mid ah oo laba waji leh. Fiisigiska, "Shaqo" ma aha inaad xafiis tagto, ee waa marka xoog ($F$) uu walax dhaqaajiyo masaafo ($d$).
$$W = F \cdot d \cdot \cos(\theta)$$

**Energy (Tamar)** waa awoodda wax lagu qabto shaqo. Labada nooc ee ugu muhiimsan dhismaha waa:
1.  **Potential Energy (PE):** Tamar kaydsan sababtoo ah booska walaxda (tusaale, biyo ku jira biyo-xireen sare, ama dubbe kor loo qaaday). $PE = mgh$.
2.  **Kinetic Energy (KE):** Tamarta dhaqdhaqaaqa (tusaale, biyaha soo qulqulaya ama dubbaha soo dhacaya). $KE = \frac{1}{2}mv^2$.

**Conservation of Energy:** Tamarta lama abuuro, lamana tirtiro, ee waa la isku beddelaa. PE wuxuu noqdaa KE, KE wuxuu noqdaa Work.`,

    whyIsItImportant: `Fikradda shaqada iyo tamarta waxay injineerka siisaa hab fudud oo lagu xalliyo dhibaatooyinka adag ee xoogagga (forces) ay adag tahay in la isticmaalo.
*   **Pile Driving (Aasidda Tiirarka):** Markaan dhisayno dhisme dheer, waxaan dhulka gelinaynaa tiirar (piles). Dubbe culus ayaa kor loo qaadayaa (PE), waa la soo daynayaa (KE), wuxuuna ku dhacayaa tiirka isagoo ciidda hoos u riixaya (Work done against soil friction).
*   **Hydroelectric Dams:** Biyaha sare (PE) waxay noqdaan qulqul (KE) waxayna wareejiyaan marwaxadaha (Work) si koronto loo dhaliyo.`,

    howItWorks: `**Work-Energy Theorem:**
Shaqada saafiga ah ee la qabtay waxay la mid tahay isbeddelka Kinetic Energy-ga.
$$W_{net} = \Delta KE$$

Tani waxay aad muhiim ugu tahay **Falanqaynta Shilalka (Crash Analysis)** ee injineernimada gaadiidka. Marka gaari ku dhaco darbi (barrier), tamartii gaariga (KE) waxay qabataa shaqo ah in darbiga iyo gaariga la burburiyo (deformation work). Injineerku wuxuu naqshadeeyaa "Crash Barriers" si ay u nuugaan tamartaas (absorb energy) oo ay u badbaadiyaan nolosha dadka.`,

    examples: `**Tusaale Dhab ah: Naqshadaynta Pile Driver:**
Injineerku waa inuu ogaado miisaanka dubbaha iyo dhererka laga soo ridayo si tiirka loo geliyo dhulka.
1.  **Potential Energy:** $PE = mgh$ (Dubbaha sare).
2.  **Impact:** $PE$ wuxuu noqday $KE$ wax yar ka hor inta uusan ku dhicin tiirka.
3.  **Work:** Markuu ku dhaco, xoogga iska-caabbinta ciidda ($R$) ayaa shaqo qabanaya masaafo yar ($s$) oo tiirku hoos u galay.
    $$mgh = R \times s + \text{Energy Lost (Heat/Sound)}$$
Haddii aadan aqoon Work-Energy, ma xisaabin kartid awoodda qaadista (bearing capacity) ee tiirkaas.`,

    challenges: `Caqabadda ugu weyn ee isticmaalka Work-Energy waa **Iska-caabbinta Aan La Ilaalin Karin (Non-conservative Forces)** sida is-jiidjiidka (Friction). Tamar badan ayaa ku luma kulayl ahaan. Injineerku waa inuu had iyo jeer ku daraa "Efficiency Factors" xisaabtiisa.`,

    quiz: [
        { question: "Haddii aad walax kor u qaaddo laakiin aadan dhaqaajin, shaqo ma qabatay?", options: ["Haa", "Maya", "Wax yar", "Wax badan"], correctAnswer: "Maya", explanation: "Shaqo (Work) waxay u baahan tahay barakac (displacement). Haddii d=0, W=0." },
        { question: "Noocee tamar ah ayuu leeyahay biyo ku jira biyo-xireen sare?", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Nuclear Energy"], correctAnswer: "Potential Energy", explanation: "Waa tamar kaydsan sababtoo ah dhererka (height) biyaha." },
        { question: "Marka gaari bareega qabto oo istaago, xaggeed aaday tamartii Kinetic Energy?", options: ["Way baaba'day", "Waxay noqotay Potential Energy", "Waxay u beddeshay kulayl (Heat) bareega iyo taayirada", "Waxay noqotay hawo"], correctAnswer: "Waxay u beddeshay kulayl (Heat) bareega iyo taayirada", explanation: "Work-Energy theorem: Shaqada is-jiidjiidka (friction) ayaa tamarta u beddelay kulayl." }
    ]
}, '2WS1sG9fhOk', {
    name: "Work-Energy Principle",
    equation: "W = ΔKE = ½mv²_f - ½mv²_i",
    description: "Shaqada la qabtay waxay la mid tahay isbeddelka tamarta dhaqdhaqaaqa (Kinetic Energy).",
    variables: [
        { symbol: "W", definition: "Shaqada (Work)", unit: "Joules (J)" },
        { symbol: "m", definition: "Cufka (Mass)", unit: "kg" },
        { symbol: "v_f", definition: "Xawaaraha dambe", unit: "m/s" },
        { symbol: "v_i", definition: "Xawaaraha hore", unit: "m/s" }
    ],
    steps: [
        "Xisaabi Kinetic Energy-ga bilowga ah (0.5 * m * v_i^2).",
        "Xisaabi Kinetic Energy-ga dhammaadka ah (0.5 * m * v_f^2).",
        "Kala jar labada qiimo si aad u hesho isbeddelka.",
        "Natiijadu waa cadadka shaqada (Work) ee xooggu qabtay."
    ],
    realWorldApplication: "Wuxuu caawiyaa naqshadaynta bareegyada gaariga iyo 'Crash Cushions' ee waddooyinka, si loo ogaado inta tamar ee loo baahan yahay in la nuugo."
});

const phys_momentum = createCivilLesson('phys-momentum', 'CASHAR 9: Momentum & Impulse', {
    whatIsIt: `**Momentum ($p$)** waa "Tirada Dhaqdhaqaaqa" ee walax leedahay. Waa isku-dhufashada cufka iyo xawaaraha:
$$p = m \times v$$
Momentum waa 'Vector', taas oo macnaheedu yahay jiho ayuu leeyahay.

**Impulse ($J$)** waa isbeddelka Momentum. Waa marka xoog ($F$) uu walax saarnaado muddo waqti ah ($\Delta t$):
$$J = F \times \Delta t = \Delta p$$

**Conservation of Momentum:** Haddii aysan jirin xoog dibadda ah, wadarta momentum-ka nidaamku isma beddelo. Tani waa sharciga aan u isticmaalno marka laba shay isku dhacaan (Collision).`,

    whyIsItImportant: `Injineernimada Madaniga, fikraddan waxay muhiim u tahay falanqaynta **Impulsive Loads** (Culeysyada degdegga ah):
1.  **Dheecaanka Tuubooyinka (Water Hammer):** Marka tuubada biyaha si degdeg ah loo xiro, biyaha socda (oo leh momentum weyn) waxay si lama filaan ah ugu dhacayaan waalka. Isbeddelka degdegga ah ee momentum-ka ($F = \Delta p / \Delta t$) wuxuu abuuraa xoog aad u weyn oo qarxin kara tuubada. Tani waa 'Water Hammer'.
2.  **Naqshadaynta Garoomada Diyaaradaha:** Marka diyaaraddu soo cago-dhigato, taayiradu waxay ku dhuftaan dhulka (Impact). Momentum-ka diyaaradda ee hoos u socda waa in dhulku iska caabbiyaa.`,

    howItWorks: `Aan eegno **Impulse-Momentum Theorem**:
$$F_{avg} = \frac{m(v_f - v_i)}{\Delta t}$$
Isle'egtan waxay ina baraysaa cashar muhiim ah oo dhismayaasha ah: **Si loo yareeyo Xoogga wax burburiya ($F$), waa inaan kordhinaa waqtiga isku-dhaca ($\Delta t$).**

Sidaas darteed:
*   Koofiyadaha badbaadada (Helmets) waxay leeyihiin suuf si ay u kordhiyaan waqtiga isku-dhaca, yareeyaanna xoogga madaxa gaaraya.
*   Buundooyinka waxay leeyihiin "Rubber Bearings" si ay u nuugaan gariirka dhulgariirka, iyagoo kordhinaya waqtiga ruxitaanka.`,

    examples: `**Tusaale Dhab ah: Water Hammer Analysis:**
Injineerka biyaha (Hydraulic Engineer) markuu naqshadaynayo dhuumaha magaalada, waa inuu xisaabiyaa momentum-ka biyaha. Haddii waalka (valve) si degdeg ah loo xiro ($t$ yar yahay), Xoogga ($F$) wuxuu noqonayaa mid aad u weyn, taasoo dhalisa cadaadis (pressure surge) dhuunta jejebin kara.
Xalka: Isticmaal "Surge Tanks" ama waalka tartiib u xir si aad u kordhiso $\Delta t$.`,

    quiz: [
        { question: "Momentum ($p$) waxaa lagu qeexaa:", options: ["Mass x Velocity", "Force x Time", "Energy / Time", "Mass x Acceleration"], correctAnswer: "Mass x Velocity", explanation: "p = mv." },
        { question: "Si loo yareeyo xoogga burburka (Impact Force) marka shil dhaco, maxaa la sameeyaa?", options: ["Kordhi waqtiga isku-dhaca ($\Delta t$)", "Yaree waqtiga isku-dhaca", "Kordhi xawaaraha", "Kordhi cufka"], correctAnswer: "Kordhi waqtiga isku-dhaca ($\Delta t$)", explanation: "Sida ku cad Impulse equation ($F = \Delta p / \Delta t$), haddii t la kordhiyo, F wuu yaraadaa." },
        { question: "Dhibaato noocee ah ayuu Momentum keenaa tuubooyinka biyaha?", options: ["Water Hammer", "Corrosion", "Leakage", "Evaporation"], correctAnswer: "Water Hammer", explanation: "Joojinta degdegga ah ee biyaha socda waxay abuurtaa xoog cadaadis badan." }
    ]
}, 'hJm8sC5fGk8', {
    name: "Impulse-Momentum Theorem",
    equation: "F_avg × Δt = m(v_f - v_i)",
    description: "Xoogga celceliska ah ee lagu dhuftay waqtiga wuxuu la mid yahay isbeddelka momentum-ka.",
    variables: [
        { symbol: "F_avg", definition: "Xoogga celceliska ah (Average Force)", unit: "N" },
        { symbol: "Δt", definition: "Waqtiga isku-dhaca (Duration)", unit: "s" },
        { symbol: "m", definition: "Cufka (Mass)", unit: "kg" },
        { symbol: "Δv", definition: "Isbeddelka xawaaraha", unit: "m/s" }
    ],
    steps: [
        "Xisaabi isbeddelka xawaaraha (v_final - v_initial).",
        "Ku dhufo cufka (m) si aad u hesho isbeddelka momentum-ka.",
        "Natiijadu waa Impulse (J).",
        "Si aad u hesho Xoogga (Force), u qaybi Impulse-ka waqtiga (t)."
    ],
    realWorldApplication: "Naqshadaynta tiirarka buundooyinka si ay ugu adkeystaan ku dhicista maraakiibta (Ship Impact Design)."
});

const phys_rotation = createCivilLesson('phys-rotation', 'CASHAR 10: Rotational Motion & Torque', {
    whatIsIt: `Ilaa hadda waxaan ka hadlaynay walxaha toos u socda (Linear Motion). Laakiin dhismaha, waxyaabo badan ayaa wareega ama raba inay wareegaan.
**Torque ($\tau$)** waa xoogga sababa wareegga. Waa "Force" nooca wareegga ah.
$$\tau = F \times r \times \sin(\theta)$$
Halka $r$ tahay "Moment Arm" (masaafada u dhexaysa barta wareegga iyo xoogga).

**Rotational Equilibrium:** Si dhisme uusan u qallibin (topple), wadarta Torque-ga saaran waa inuu noqdaa eber ($\sum \tau = 0$).`,

    whyIsItImportant: `Torque (ama Moment) waa fikradda ugu muhiimsan ee **Structural Engineering**.
1.  **Qallibka Dhismayaasha (Overturning):** Dhismaha dheer marka dabayshu ku dhacdo, waxay abuurtaa Torque raba inuu dhismaha qallibo. Aasaaska (Foundation) waa inuu abuuraa Torque ka soo horjeeda si uu u celiyo.
2.  **Wiishashka (Cranes):** Wiishku wuxuu qaadayaa culeys culus oo ka fog xaruntiisa. Culeyskaasi wuxuu abuuraa Torque. Si uusan wiishku u dhicin, waxaa gadaal u saaran "Counterweight" oo abuuraya Torque isku dheellitira.
3.  **Xiridda Boolal-ka (Bolted Connections):** Marka injineerku yiraahdo "Torque the bolt to 500 Nm", wuxuu ka wadaa in la abuuro xoog wareeg ah oo hubinaya in birahu si adag isugu dhegaan.`,

    howItWorks: `Xiriirka u dhexeeya Linear iyo Rotational:
*   Displacement: $x$ $\rightarrow$ Angle $\theta$
*   Velocity: $v$ $\rightarrow$ Angular Velocity $\omega$
*   Force: $F$ $\rightarrow$ Torque $\tau$
*   Mass: $m$ $\rightarrow$ Moment of Inertia $I$

**Moment of Inertia ($I$):** Waa iska-caabbinta ay walax u leedahay inay wareegto. Dhismaha, waxaan aad u isticmaalnaa "Second Moment of Area" (sidoo kale loo yaqaan $I$) si aan u cabbirno sida dogob (beam) uusan u leexan (bending resistance). Dogobka qaabkiisu yahay "I-beam" wuxuu leeyahay $I$ sare, taasoo ka dhigan inuu aad u adag yahay.`,

    examples: `**Tusaale Dhab ah: Crane Stability:**
Ka soo qaad wiish (Crane) qaadaya 10 ton oo u jira 20 mitir xaruntiisa wareegga.
Torque-ga raba inuu wiishka qallibo (Overturning Moment):
$$\tau_{load} = 10,000\,kg \times 9.81 \times 20m \approx 1,962,000\,Nm$$
Si uusan u dhicin, waa in dhanka kale uu yaal culeys (Counterweight). Haddii Counterweight-ku u jiro 5 mitir, imisa ayuu noqonayaa miisaankiisu?
$$\tau_{counter} = \tau_{load}$$
$$m_{counter} \times 9.81 \times 5 = 1,962,000$$
$$m_{counter} = 40,000\,kg = 40\,ton$$
Sidaas darteed, makaanikada wareegga (Rotation Mechanics) waxay noo sheegaysaa inaan u baahannahay 40 ton oo counterweight ah.`,

    quiz: [
        { question: "Torque waa maxay?", options: ["Xoogga tooska ah", "Xoogga sababa wareegga", "Tamarta wareegga", "Xawaaraha wareegga"], correctAnswer: "Xoogga sababa wareegga", explanation: "Torque waa rotational equivalent of force." },
        { question: "Si loo kordhiyo Torque adigoon xoogga kordhin, maxaad samayn kartaa?", options: ["Kordhi masaafada (Moment Arm)", "Yaree masaafada", "Yaree waqtiga", "Kordhi cufka"], correctAnswer: "Kordhi masaafada (Moment Arm)", explanation: "Torque = Force x Distance. Gacanta dheer waxay dhalisaa torque badan." },
        { question: "Wiishka (Crane) si uusan u dhicin, waa in la hubiyaa:", options: ["Sum of Forces = 0 kaliya", "Sum of Torques = 0", "Momentum = 0", "Xawaaraha = 0"], correctAnswer: "Sum of Torques = 0", explanation: "Rotational Equilibrium waa shuruudda diidaya inuu qallibmo." }
    ]
}, '6b7c8d9e0f1', {
    name: "Torque Equation",
    equation: "τ = F × r × sin(θ)",
    description: "Xoogga wareegga (Torque) wuxuu ku xiran yahay xoogga la saaray, fogaanta, iyo xagasha.",
    variables: [
        { symbol: "τ", definition: "Torque (Moment)", unit: "Newton-meter (Nm)" },
        { symbol: "F", definition: "Xoogga la saaray (Applied Force)", unit: "N" },
        { symbol: "r", definition: "Gacanta Moment-ga (Lever Arm)", unit: "m" },
        { symbol: "θ", definition: "Xagasha u dhexaysa F iyo r", unit: "Degrees" }
    ],
    steps: [
        "Cabbir xoogga la saarayo (F).",
        "Cabbir masaafada u dhexaysa barta wareegga iyo barta xoogga (r).",
        "Hubi xagasha (badanaa waa 90 degrees, sin(90)=1).",
        "Isku dhufo si aad u hesho Torque-ga."
    ],
    realWorldApplication: "Waa aasaaska isticmaalka furayaasha (Wrenches) iyo falanqaynta qallibka wiishashka (Crane tipping)."
});

const phys_equilibrium = createCivilLesson('phys-equilibrium', 'CASHAR 11: Static Equilibrium (Dheellitirnaanta)', {
    whatIsIt: `Kani waa casharka **ugu muhiimsan** injineernimada madaniga ah. Inta badan dhismayaasheenu ma dhaqaaqaan (waa inay ahaadaan Static).
Si dhisme u ahaado mid taagan (Static Equilibrium), waa inuu buuxiyaa laba shuruudood oo waaweyn:
1.  **Translational Equilibrium:** Wadarta xoogagga (Forces) waa inay eber ahaadaan. ($\sum F_x = 0, \sum F_y = 0$)
2.  **Rotational Equilibrium:** Wadarta wareegyada (Moments/Torques) waa inay eber ahaadaan. ($\sum M = 0$)

Haddii mid ka mid ah shuruudahan la waayo, dhismuhu wuu dhaqaaqayaa ama wuu dumi doonaa.`,

    whyIsItImportant: `Fikraddan waxaa loo isticmaalaa falanqaynta ku dhawaad wax kasta:
*   **Trusses (Shabakado Bir ah):** Buundooyinka iyo saqafyada. Waxaan isticmaalnaa "Method of Joints" oo ku dhisan $\sum F = 0$.
*   **Beams (Dogobyada):** Si aan u helno fal-celinta tiirarka (Reaction Forces), waxaan isticmaalnaa $\sum M = 0$.
*   **Retaining Walls (Darbiyada Cesha Ciidda):** Si uusan darbiga u qallibin, Moment-ka ciidda riixaysa waa inuu ka yaraadaa Moment-ka miisaanka darbiga.`,

    howItWorks: `Hannaanka xallinta dhibaatooyinka Equilibrium (Free Body Diagram - FBD):
1.  **Go'doomi Walaxda:** Sawir walaxda adigoo ka goynaya hareeraheeda (sida dhulka ama tiirarka).
2.  **Sawir Xoogagga:** Ku sawir dhammaan xoogagga dibadda (External Forces) sida culeyska (Gravity), dabaysha, iwm.
3.  **Sawir Fal-celinta (Reactions):** Ku beddel tiirarka ama taageerayaasha (Supports) xoogagga fal-celinta (R).
    *   *Roller Support:* Hal xoog oo toosan ($R_y$).
    *   *Pin Support:* Laba xoog ($R_x, R_y$).
    *   *Fixed Support:* Laba xoog iyo hal moment ($R_x, R_y, M$).
4.  **Qor Isle'egyada:** $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$.
5.  **Xalli:** Isticmaal aljebrada si aad u hesho xoogagga maqan.`,

    examples: `**Tusaale Dhab ah: Falanqaynta Buundo Fudud (Simple Beam):**
Ka soo qaad buundo dhererkeedu yahay 10m oo ay laba tiir hayso (A iyo B). Gaari culeyskiisu yahay 100kN ayaa dhexda taagan (5m).
Intee culeys ah ayuu tiir kasta qaadayaa?
1.  $\sum F_y = 0 \rightarrow R_A + R_B - 100 = 0 \rightarrow R_A + R_B = 100$.
2.  $\sum M_A = 0$ (Qaado Moment barta A).
    *   Xoogga $R_A$ masaafadiisu waa 0.
    *   Xoogga Gaariga: $100kN \times 5m = 500kNm$ (Clockwise).
    *   Xoogga $R_B$: $R_B \times 10m$ (Counter-clockwise).
    $$R_B(10) - 500 = 0 \rightarrow R_B = 50kN$$
3.  Ku laabo isle'egta 1aad: $R_A + 50 = 100 \rightarrow R_A = 50kN$.

Natiijo: Tiir kasta wuxuu qaadayaa 50kN. Tani waa aasaaska Structural Analysis.`,

    challenges: `Dhibaatooyinka qaar waa **Statically Indeterminate**, taas oo macnaheedu yahay inaan leenahay xoogag aan la garanayn (Unknowns) oo ka badan inta isle'eg ee aan haysanno. Xaaladahan, Equilibrium kaliya kuma filna, waxaan u baahannahay inaan isticmaalno "Deformation Compatibility" (sida walaxdu u leexato).`,

    quiz: [
        { question: "Muxuu yahay shuruudda koowaad ee Equilibrium?", options: ["Wadarta Xoogagga = 0", "Wadarta Cufka = 0", "Xawaaraha = 100", "Heerkulka = Joogto"], correctAnswer: "Wadarta Xoogagga = 0", explanation: "Translational Equilibrium: $\\sum F = 0$." },
        { question: "Free Body Diagram (FBD) waxaa loo isticmaalaa in:", options: ["Lagu sawiro quruxda dhismaha", "Lagu muujiyo dhammaan xoogagga saaran walax go'doon ah", "Lagu xisaabiyo kharashka", "Lagu cabbiro dhererka"], correctAnswer: "Lagu muujiyo dhammaan xoogagga saaran walax go'doon ah", explanation: "Waa tallaabada ugu horreysa ee xallinta mashaakilaadka Statics." },
        { question: "Haddii $\\sum F = 0$ laakiin $\\sum M \\neq 0$, maxaa dhacaya?", options: ["Walaxdu way taagan tahay", "Walaxdu way wareegaysaa (Spinning)", "Walaxdu toos bay u socotaa", "Waxba ma dhacayaan"], correctAnswer: "Walaxdu way wareegaysaa (Spinning)", explanation: "Haddii Moment-gu uusan dheellitirnayn, walaxdu way wareegaysaa inkastoo aysan meel u dhaqaaqin." }
    ]
}, 'Py8254yWfT0', {
    name: "Equilibrium Equations (2D)",
    equation: "ΣFx = 0, ΣFy = 0, ΣM = 0",
    description: "Saddexda isle'eg ee xaqiijiya in dhisme 2D ah uusan dhaqaaqin ama wareegin.",
    variables: [
        { symbol: "ΣFx", definition: "Wadarta xoogagga jiifka (Horizontal)", unit: "N" },
        { symbol: "ΣFy", definition: "Wadarta xoogagga taagan (Vertical)", unit: "N" },
        { symbol: "ΣM", definition: "Wadarta wareegyada (Moments)", unit: "Nm" }
    ],
    steps: [
        "Sawir Free Body Diagram (FBD).",
        "Ku qor dhammaan xoogagga jiifka isle'egta ΣFx = 0.",
        "Ku qor dhammaan xoogagga taagan isle'egta ΣFy = 0.",
        "Dooro bar (Pivot point) oo qaado Moments-ka ku wareegsan, dhig ΣM = 0.",
        "Xalli isle'egyada si aad u hesho fal-celinta (Reactions)."
    ],
    realWorldApplication: "Waa aasaaska xisaabinta tiirarka guryaha, buundooyinka, iyo dhammaan dhismayaasha taagan."
});


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
                    lessons: [
                        calc_functions, 
                        calc_limits, 
                        calc_derivatives, 
                        createCivilLesson('calc-4-optimization', 'CASHAR 4: Optimization', { whatIsIt: "Habka helitaanka xalka ugu fiican." }), 
                        createCivilLesson('calc-5-integration', 'CASHAR 5: Integration', { whatIsIt: "Xisaabinta bedka iyo mugga." })
                    ] 
                },
                { 
                    id: 'civil-y1-physics-1', 
                    title: 'Physics I: Mechanics for Civil Eng', 
                    lessons: [
                        phys_kinematics, 
                        phys_newtons_laws, 
                        phys_work_energy, 
                        phys_momentum, 
                        phys_rotation, 
                        phys_equilibrium
                    ] 
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
