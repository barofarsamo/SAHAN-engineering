
import type { Discipline, Lesson, Formula } from '../types';
import { BuildingIcon } from '../components/Icons';

// Helper to create standard lessons
const createCivilLesson = (id: string, title: string, content: any, videoId?: string, formula?: Formula): Lesson => ({
    id: `civil-${id}`,
    title,
    duration: "45 mins",
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

const calc_functions = createCivilLesson('calc-1-functions', 'CASHAR 1: Functions & Modeling ee Dhismaha', {
    whatIsIt: `Injineernimada dhismaha, **Function** ma aha oo kaliya fikrad xisaabeed oo ku qoran buug, ee waa luqadda aan ku qeexno xiriirka ka dhexeeya sababta (Cause) iyo saamaynta (Effect) ee dhismaha. Function waa sharci xisaabeed isku xiraya 'Input' (sida culeyska saaran buundo, xawaaraha dabaysha, ama heerkulka) iyo 'Output' (sida inta ay buundadaasi leexanayso/deflection, gariirka dhismaha, ama kala-bixitaanka birta).

Haddii aan dhahno $y = f(x)$, xagga dhismaha:
*   $x$ waxay noqon kartaa tirada gawaarida saaran buundada.
*   $y$ waxay noqon kartaa cadaadiska (Stress) ku dhacaya tiirarka hoose.
*   $f$ waa qaaciidada (Function) xiriirisa labadaas.`,

    whyIsItImportant: `Muhiimadda Functions ee Injineernimada Dhismaha waa mid aan la soo koobi karin. Waa farqiga u dhexeeya dhisme taagan iyo mid dumaya.
1.  **Saadaalinta Badbaadada:** Waxay noo ogolaanayaan inaan ogaano in dhismuhu badbaado yahay iyadoo aan weli la dhisin.
2.  **Dhaqaalaynta (Economy):** Iyadoo la isticmaalayo functions, waxaan ogaan karnaa dhumucda ugu yar ee tiirka looga baahan yahay si uu u qaado culeyska.`,

    mainParts: `**1. Linear Functions ($y = mx + c$):**
Kuwani waa kuwa ugu fudud laakiin ugu muhiimsan. Waxay qeexaan xiriirka toosan.
*   *Tusaale:* Hooke's Law ($F = kx$).
*   *Dhismaha:* Xiriirka ka dhexeeya kharashka dhismaha iyo mitirka laba-jibbaaran badanaa waa linear.

**2. Quadratic Functions ($y = ax^2 + bx + c$):**
Kuwani waxay sameeyaan qaab qalloocan (Parabola).
*   *Tusaale:* Qaansada (Arch) ee buundada.

**3. Trigonometric Functions ($\sin, \cos, \tan$):**
Waxaa loo isticmaalaa falanqaynta xaglaha iyo mowjadaha.`,

    howItWorks: `Habka isticmaalka functions ee dhismaha wuxuu maraa marxalado:
1.  **Indho-indheyn (Observation):** Injineerku wuxuu fiiriyaa dhibaatada.
2.  **Ururinta Xogta (Data Collection):** Waxaa la qaadaa cabbiro.
3.  **Samaynta Qaaciidada (Modeling):** Waxaan aragnaa in leexashadu ay laba-jibbaarmayso marka culeysku laba-jibbaarmo.`,

    prerequisites: `Si aad u fahanto casharkan si buuxda, waa inaad haysataa:
*   **Aljebrada Sare:** Fahamka sida loo xalliyo isle'egyada (Equations).
*   **Fiisigiska Aasaasiga ah:** Fahamka xoogga (Force) iyo culeyska.`,

    examples: `**Tusaale 1: Naqshadaynta Buundada La Laalay (Suspension Bridge):**
Aynu eegno Golden Gate Bridge. Xadhkaha waaweyn ee hayn buundada ma aha kuwo toosan, waxay qaabeeyaan 'Catenary' ama 'Parabola' iyadoo ku xiran culeyska.
Haddii culeyska buundada (Deck) uu siman yahay, qaabka xariggu waa:
$$y = \frac{wx^2}{2T}$$`,
    
    quiz: [
        { question: "Waa maxay ujeedada ugu weyn ee 'Functions' ee injineernimada?", options: ["In la xalliyo imtixaanka", "In la saadaaliyo dhaqanka dhismaha (Modeling)", "In la sawiro khadad", "Ma laha faa'iido"], correctAnswer: "In la saadaaliyo dhaqanka dhismaha (Modeling)", explanation: "Waxaan u isticmaalnaa inaan ku matalno xaqiiqada si aan u saadaalino natiijooyinka." },
        { question: "Nooca function-kee ayaa ugu habboon qaabka xarigga buundada (Suspension Cable)?", options: ["Linear", "Quadratic (Parabola)", "Constant", "Logarithmic"], correctAnswer: "Quadratic (Parabola)", explanation: "Xarigga culeyska sida siman u qaybsan yahay wuxuu qaataa qaab parabola ah." }
    ]
}, 'x_qC8a12c8E', {
    name: "Linear Function Model",
    equation: "y = mx + c",
    description: "Qaaciidada xiriirka toosan ee u dhexeeya laba doorsoome.",
    variables: [
        { symbol: "y", definition: "Natiijada (Output), tusaale: Kharashka guud", unit: "$" },
        { symbol: "m", definition: "Janjeerka (Slope), tusaale: Kharashka halkii mitir", unit: "$/m" },
        { symbol: "x", definition: "Doorsoomaha (Input), tusaale: Mitirka dhismaha", unit: "m" },
        { symbol: "c", definition: "Sabite (Constant), tusaale: Kharashka aasaasiga ah", unit: "$" }
    ],
    steps: [
        "Aqoonso qiimaha go'an (Fixed Cost) - kani waa 'c'.",
        "Aqoonso qiimaha isbeddelaya halkii unug (Variable Cost) - kani waa 'm'.",
        "Ku beddel qiimayaasha qaaciidada: y = mx + c.",
        "Isticmaal qaaciidada si aad u saadaaliso kharashka mashruuc kasta adigoo beddelaya 'x'."
    ],
    realWorldApplication: "Waxaa loo isticmaalaa qiyaasidda kharashka dhismaha waddooyinka, halkaas oo 'm' ay tahay qiimaha halkii kiiloomitir."
});

const calc_limits = createCivilLesson('calc-2-limits', 'CASHAR 2: Limits, Continuity & Failure Analysis', {
     whatIsIt: `**Limit** waa fikradda aasaasiga ah ee Calculus, taasoo qeexaysa dhaqanka function marka uu u dhowaado qiimo go'an.
Injineernimada, tani waxay inta badan la xiriirtaa "Xadka" (Boundary conditions) ama waxa dhacaya marka aan u dhowaano burbur.`,
    whyIsItImportant: `1.  **Falanqaynta Burburka (Failure Analysis):** Injineerku waa inuu ogaado xadka ugu dambeeya ee dhismaha.
2.  **Xiriirsanaanta Dhismaha (Structural Continuity):** Haddii a waddo ay leedahay 'Discontinuity' (go'itaan), baabuurku wuu dhacayaa.`,
    mainParts: `**1. Qeexitaanka Rasmiga ah ee Limit:**
$$\lim_{x \to c} f(x) = L$$
**2. Infinite Limits & Asymptotes:**
Marka $f(x) \to \infty$. Tani injineernimada waxay ka dhigan tahay "Musibo" (Catastrophe).`,
    howItWorks: `Marka aan falanqeynayno dhismayaasha, waxaan eegnaa meelaha ay suuragal tahay in dhibaato ka dhacdo (points of discontinuity).`,
    examples: `**Tusaale 1: Go'itaanka Waddada (Expansion Joints):**
Buundooyinka dhaadheer way ballaartaan markii qorraxdu kululaato. Injineerku wuxuu sameeyaa "Expansion Joint".`,
    quiz: [
        { question: "Haddii $\\lim_{x \\to 2} f(x) = 5$ laakiin $f(2) = 3$, function-ku ma 'Continuous' baa?", options: ["Haa", "Maya", "Mararka qaar", "Lama ogaan karo"], correctAnswer: "Maya", explanation: "Si uu continuous u noqdo, Limit-ka iyo qiimaha dhabta ah waa inay isku mid noqdaan." }
    ]
}, '3bIk3pKg0Vo');

const calc_derivatives = createCivilLesson('calc-3-derivatives', 'CASHAR 3: Derivatives & Structural Analysis', {
    whatIsIt: `**Derivative** waa Cabbirka Heerka Isbeddelka (Rate of Change).
Injineernimada dhismaha, wax walba way isbeddelaan. Derivative-ku wuxuu inoo sheegaa *sida* ay wax isu beddelayaan.
Haddii $y$ ay tahay leexashada dogobka (Beam deflection), $dy/dx$ waa xagasha leexashada (Slope).`,
    whyIsItImportant: `Waa wadnaha Structural Analysis.
1.  **Xiriirka Xoogagga:** Waxaa jira xiriir cajiib ah oo derivative ah oo ka dhexeeya culeyska (Load), xoogga jarista (Shear), iyo foorarka (Moment).`,
    mainParts: `**1. Physical Interpretation:**
*   $y(x)$ = Displacement.
*   $y'(x)$ = Slope.
*   $y''(x)$ = Curvature.`,
    howItWorks: `Tallaabooyinka falanqaynta Dogobka (Beam Analysis) iyadoo la isticmaalayo Derivatives:
1.  Integrate culeyska si aad u hesho Shear Force.
2.  Integrate mar kale si aad u hesho Bending Moment.`,
    examples: `**Tusaale: Falanqaynta Dogob (Beam Analysis):**
Ka soo qaad dogob dhererkiisu yahay $L$ oo culeys siman ($w$) saaran yahay.
Meesha Shear Force-ku eber yahay ($V(x)=0$), Bending Moment-ku waa Maximum.`,
    quiz: [
        { question: "Derivative wuxuu cabbiraa:", options: ["Mugga", "Heerka isbeddelka (Rate of Change)", "Dhererka", "Wareegga"], correctAnswer: "Heerka isbeddelka (Rate of Change)", explanation: "Waa sida degdegga ah ee `y` isku beddesho marka `x` isbeddesho." }
    ]
}, 'WUvTyaaNkzM', {
    name: "Definition of Derivative",
    equation: "f'(x) = lim(h->0) [f(x+h) - f(x)] / h",
    description: "Qeexitaanka rasmiga ah ee Derivative oo ku saleysan Limits.",
    variables: [
        { symbol: "f'(x)", definition: "Derivative-ka function-ka (Rate of change)" },
        { symbol: "h", definition: "Isbeddel aad u yar oo ku yimid x", unit: "unitless" },
        { symbol: "f(x)", definition: "Qiimaha asalka ah ee function-ka" }
    ],
    steps: [
        "Beddel x+h gudaha function-ka asalka ah.",
        "Ka jar f(x) natiijadaas.",
        "U qaybi dhammaan 'h'.",
        "Xisaabi Limit-ka marka 'h' ay u dhowaato 0."
    ],
    realWorldApplication: "Waa aasaaska lagu helo xawaaraha (Velocity) marka la hayo masaafada (Position)."
});

const phys_newtons_laws = createCivilLesson('phys-2-newtons-laws', 'CASHAR 7: Shuruucda Newton ee Dhismaha', {
    whatIsIt: `Saddexda sharci ee Sir Isaac Newton waa dastuurka injineernimada dhismaha.
*   **Sharciga 1aad:** Walaxdu ma dhaqaaqdo haddii aan xoog lagu qasbin (Statics).
*   **Sharciga 2aad:** Xooggu waa Cuf x Dardar ($F=ma$).
*   **Sharciga 3aad:** Ficil kasta wuxuu leeyahay fal-celin la eg (Action = Reaction).`,
    whyIsItImportant: `1.  **Dheellitirnaanta (Equilibrium):** Sharciga 1aad wuxuu saldhig u yahay maaddada **Statics**.
2.  **Aasaaska & Ciidda:** Sharciga 3aad wuxuu sharxayaa sida dhulku u qaado dhismaha.`,
    mainParts: `**1. Sharciga 1aad:** Walax kasta oo taagan way sii taagnaanaysaa.
**2. Sharciga 2aad:** $F = ma$.
**3. Sharciga 3aad:** Ficil kasta wuxuu leeyahay fal-celin la eg.`,
    howItWorks: `Marka injineerku naqshadaynayo dhisme:
1.  **Aqoonsiga Xoogagga (Loads).**
2.  **Free Body Diagram (FBD).**
3.  **Xisaabinta (Equilibrium Equations).**`,
    examples: `**Tusaale 1: Wiishka Dhismaha (Tower Crane):**
Wiishku wuxuu qaadayaa bir culus. Marka wiishku bilaabo inuu birta kor u qaado, wuu dardargelinayaa (F=ma).
**Tusaale 2: Darbiga Biyo-xireenka (Dam Wall):**
Biyuhu waxay xoog ku riixayaan darbiga (Action). Darbigu waa inuu ku riixaa biyaha xoog la eg (Reaction).`,
    quiz: [
        { question: "Sharciga 1aad ee Newton wuxuu aasaas u yahay laanta injineernimada ee loo yaqaan:", options: ["Statics", "Dynamics", "Fluid Mechanics", "Thermodynamics"], correctAnswer: "Statics", explanation: "Statics waxay daraasaysaa walxaha dheellitiran." }
    ]
}, 'kKKM8Y-u7ds', {
    name: "Newton's Second Law",
    equation: "F = m × a",
    description: "Xoogga saaran walax wuxuu la mid yahay cufka walaxda oo lagu dhuftay dardargelinta.",
    variables: [
        { symbol: "F", definition: "Xoogga (Force)", unit: "Newton (N)" },
        { symbol: "m", definition: "Cufka (Mass)", unit: "Kilogram (kg)" },
        { symbol: "a", definition: "Dardargelinta (Acceleration)", unit: "m/s²" }
    ],
    steps: [
        "Aqoonso cufka walaxda (m).",
        "Aqoonso dardargelinta (a).",
        "Isku dhufo cufka iyo dardargelinta.",
        "Natiijada u qor Newton (N)."
    ],
    realWorldApplication: "Wuxuu injineerka u sheegaa inta xoog ee loo baahan yahay si wiish u qaado bir culus."
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
                        createCivilLesson('phys-kinematics', 'CASHAR 6: Kinematics', { whatIsIt: "Barashada dhaqdhaqaaqa." }), 
                        phys_newtons_laws, 
                        createCivilLesson('phys-work-energy', 'CASHAR 8: Work & Energy', { whatIsIt: "Tamarta iyo shaqada." }), 
                        createCivilLesson('phys-momentum', 'CASHAR 9: Momentum', { whatIsIt: "Dhaqdhaqaaqa cufka." }), 
                        createCivilLesson('phys-rotation', 'CASHAR 10: Rotation', { whatIsIt: "Wareegga." }), 
                        createCivilLesson('phys-equilibrium', 'CASHAR 11: Equilibrium', { whatIsIt: "Dheellitirnaanta." })
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
