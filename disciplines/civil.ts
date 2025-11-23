
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
*   $f$ waa qaaciidada (Function) xiriirisa labadaas.

Injineerku wuxuu isticmaalaa functions si uu u abuuro **Mathematical Model**. Tani waa matalaad xisaabeed oo u dhiganta dhismaha dhabta ah. Kahor inta aan la dhisin Burj Khalifa, injineeradu waxay sameeyeen kumanaan functions oo matalaya sida dhismuhu u dhaqmi doono dabaysha, culeyska, iyo dhulgariirka. Waa aasaaska koowaad ee naqshadaynta (Design).`,

    whyIsItImportant: `Muhiimadda Functions ee Injineernimada Dhismaha waa mid aan la soo koobi karin. Waa farqiga u dhexeeya dhisme taagan iyo mid dumaya.
1.  **Saadaalinta Badbaadada:** Waxay noo ogolaanayaan inaan ogaano in dhismuhu badbaado yahay iyadoo aan weli la dhisin. Tusaale, waxaan xisaabin karnaa in buundada ay qaadi karto 50 tan, inkastoo aan weli hal dhagax la dhigin.
2.  **Dhaqaalaynta (Economy):** Iyadoo la isticmaalayo functions, waxaan ogaan karnaa dhumucda ugu yar ee tiirka looga baahan yahay si uu u qaado culeyska. Tani waxay badbaadisaa malaayiin doolar oo shub iyo bir ah.
3.  **Fahamka Dhaqanka (Behavior Analysis):** Dhismayaashu way 'nool yihiin'. Way neefsadaan (ballaartaan kulaylka), way fooraraan (culeyska), wayna gariiraan (dabaysha). Functions ayaa qeexa dhaqankan oo dhan.`,

    mainParts: `**1. Linear Functions ($y = mx + c$):**
Kuwani waa kuwa ugu fudud laakiin ugu muhiimsan. Waxay qeexaan xiriirka toosan.
*   *Tusaale:* Hooke's Law ($F = kx$). Halkan, $F$ waa xoogga, $x$ waa kala-bixitaanka, $k$ waa adkaanta (stiffness). Birta dhismuhu waxay u dhaqantaa si 'Linear' ah ilaa heer go'an (Elastic Limit).
*   *Dhismaha:* Xiriirka ka dhexeeya kharashka dhismaha iyo mitirka laba-jibbaaran badanaa waa linear.

**2. Quadratic Functions ($y = ax^2 + bx + c$):**
Kuwani waxay sameeyaan qaab qalloocan (Parabola).
*   *Tusaale:* Qaansada (Arch) ee buundada, ama xarigga (Cable) ee buundada la laalay (Suspension Bridge) marka culeysku siman yahay.
*   *Moment Diagrams:* Marka dogob (beam) la saaro culeys siman (Uniformly Distributed Load), Moment diagram-kiisu waa Quadratic (Parabola).

**3. Trigonometric Functions ($\sin, \cos, \tan$):**
Waxaa loo isticmaalaa falanqaynta xaglaha iyo mowjadaha.
*   *Tusaale:* Falanqaynta dhulgariirka (Seismic Analysis) iyo xoogagga dabaysha ee ku dhufta dhismayaasha dhaadheer. Saqafka Truss-ka ah waxaa lagu xalliyaa Trigonometry.`,

    howItWorks: `Habka isticmaalka functions ee dhismaha wuxuu maraa marxalado:
1.  **Indho-indheyn (Observation):** Injineerku wuxuu fiiriyaa dhibaatada. Tusaale: "Tiirkaan wuu leexanayaa marka culeys la saaro."
2.  **Ururinta Xogta (Data Collection):** Waxaa la qaadaa cabbiro. "Marka 10kg la saaro, wuxuu leexday 2mm. Marka 20kg la saaro, wuxuu leexday 4mm."
3.  **Samaynta Qaaciidada (Modeling):** Waxaan aragnaa in leexashadu ay laba-jibbaarmayso marka culeysku laba-jibbaarmo. Sidaas darteed, $f(x) = kx$ (Linear).
4.  **Tijaabinta iyo Saxidda:** Waxaan ku tijaabineynaa function-ka xaalado ka duwan. Haddii uu shaqeeyo, waxaan u isticmaalnaa naqshadaynta dhismaha rasmiga ah.`,

    prerequisites: `Si aad u fahanto casharkan si buuxda, waa inaad haysataa:
*   **Aljebrada Sare:** Fahamka sida loo xalliyo isle'egyada (Equations) iyo sida loo sawiro garaafyada.
*   **Fahamka Joomitiriga:** Ogaanshaha xaglaha iyo qaababka.
*   **Fiisigiska Aasaasiga ah:** Fahamka xoogga (Force) iyo culeyska.`,

    examples: `**Tusaale 1: Naqshadaynta Buundada La Laalay (Suspension Bridge):**
Aynu eegno Golden Gate Bridge. Xadhkaha waaweyn ee hayn buundada ma aha kuwo toosan, waxay qaabeeyaan 'Catenary' ama 'Parabola' iyadoo ku xiran culeyska.
Haddii culeyska buundada (Deck) uu siman yahay, qaabka xariggu waa:
$$y = \frac{wx^2}{2T}$$
Halka:
*   $y$ = Dhererka xarigga ee barta $x$.
*   $w$ = Culeyska halkii mitir (Load per meter).
*   $x$ = Masaafada laga soo bilaabo bartamaha.
*   $T$ = Xoogga jiidista (Tension) ee xarigga.
Injineerku wuxuu isticmaalaa function-kan si uu u go'aamiyo dhererka saxda ah ee xarigga taageerada (Suspender cables) meel kasta.

**Tusaale 2: Kharashka Dhismaha:**
Haddii kharashka aasaasiga ah ee mashiinadu yahay $10,000 (Fixed Cost), halkii mitir oo la dhisana uu ku kacayo $500 (Variable Cost).
Function-ka kharashku waa: $C(x) = 500x + 10,000$.
Haddii aan dhisayno 100 mitir, kharashku waa: $500(100) + 10,000 = \$60,000$.`,
    
    quiz: [
        { question: "Waa maxay ujeedada ugu weyn ee 'Functions' ee injineernimada?", options: ["In la xalliyo imtixaanka", "In la saadaaliyo dhaqanka dhismaha (Modeling)", "In la sawiro khadad", "Ma laha faa'iido"], correctAnswer: "In la saadaaliyo dhaqanka dhismaha (Modeling)", explanation: "Waxaan u isticmaalnaa inaan ku matalno xaqiiqada si aan u saadaalino natiijooyinka." },
        { question: "Nooca function-kee ayaa ugu habboon qaabka xarigga buundada (Suspension Cable)?", options: ["Linear", "Quadratic (Parabola)", "Constant", "Logarithmic"], correctAnswer: "Quadratic (Parabola)", explanation: "Xarigga culeyska sida siman u qaybsan yahay wuxuu qaataa qaab parabola ah." },
        { question: "Hooke's Law oo sharxaya kala-bixitaanka birta waa tusaale function noocee ah?", options: ["Linear", "Exponential", "Quadratic", "Rational"], correctAnswer: "Linear", explanation: "Stress-ku wuxuu si toos ah u la socdaa Strain-ka (Directly proportional)." },
        { question: "Haddii `y` ay tahay kharashka, `x` na ay tahay tirada sibirka, waa maxay `Slope`?", options: ["Wadarta kharashka", "Kharashka halkii kiish (Unit cost)", "Kharashka gaadiidka", "Fa'iidada"], correctAnswer: "Kharashka halkii kiish (Unit cost)", explanation: "Slope (m) wuxuu qeexayaa heerka isbeddelka (Rate of change)." },
        { question: "Domain-ka function ee dhismaha matalaya wuxuu u dhigmaa:", options: ["Qiimaha mashruuca", "Xadka fiisikiga ah ee dhismaha (Physical Constraints)", "Magaca injineerka", "Taariikhda"], correctAnswer: "Xadka fiisikiga ah ee dhismaha (Physical Constraints)", explanation: "Tusaale, dhererka buundada ma noqon karo negative." }
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
     whatIsIt: `**Limit** waa fikradda aasaasiga ah ee Calculus, taasoo qeexaysa dhaqanka function marka uu u dhowaado qiimo go'an, xitaa haddii uusan gaarin. Injineernimada, tani waxay inta badan la xiriirtaa "Xadka" (Boundary conditions) ama waxa dhacaya marka aan u dhowaano burbur.

**Continuity** (Xiriirsanaan) waa marka dhismaha function-ku uusan lahayn wax go'itaan ah (Breaks, Holes, Jumps). Dhismayaasha dhabta ah waa inay ahaadaan kuwo 'Continuous' qaab-dhismeedkooda si xoogga (Load path) uu ugu gudbo si habsami leh min saqafka ilaa aasaaska.

Fikirka Limit wuxuu jawaab u bixiyaa su'aasha: "Maxaa dhacaya marka waqtigu uu gaaro dhammaad ($t \to \infty$)?" ama "Maxaa dhacaya marka culeysku gaaro xadka ugu dambeeya?"`,

    whyIsItImportant: `1.  **Falanqaynta Burburka (Failure Analysis):** Injineerku waa inuu ogaado xadka ugu dambeeya ee dhismaha (Ultimate Limit State). Limits waxay naga caawiyaan inaan fahanno dhaqanka dhismaha marka uu ku dhow yahay inuu dumo (Asymptotes), si aan uga hortagno.
2.  **Xiriirsanaanta Dhismaha (Structural Continuity):** Haddii a waddo ay leedahay 'Discontinuity' (go'itaan), baabuurku wuu dhacayaa. Limits waxay noo ogolaanayaan inaan hubino in isku-xirka biraha iyo shubka uu yahay mid aan kala go' lahayn oo xooggu gudbi karo.
3.  **Xisaabinta Degdegga ah (Instantaneous Change):** Limits waa aasaaska 'Derivative-ka', kaas oo loo baahan yahay si loo ogaado xawaaraha iyo leexashada degdegga ah.`,

    mainParts: `**1. Qeexitaanka Rasmiga ah ee Limit:**
$$\lim_{x \to c} f(x) = L$$
Tani waxay ka dhigan tahay "Marka $x$ ay u dhowaato $c$, $f(x)$ waxay u dhowaanaysaa $L$".

**2. Continuity (Xiriirsanaan):**
Function $f(x)$ wuxuu continuous ku yahay barta $c$ haddii iyo kaliya haddii:
*   $f(c)$ way jirtaa (Defined).
*   Limit $\lim_{x \to c} f(x)$ wuu jiraa.
*   Limit-ka iyo qiimaha function-ku waa isku mid: $\lim_{x \to c} f(x) = f(c)$.
*Dhismaha dhexdiisa, tani waxay la macno tahay inaanay jirin dillaac ama kala-bax aan la qorsheyn.*

**3. Infinite Limits & Asymptotes:**
Marka $f(x) \to \infty$. Tani injineernimada waxay ka dhigan tahay "Musibo" (Catastrophe). Tusaale, haddii cadaadiska (Stress) uu u dhowaado Infinity, walaxdu way qarxaysaa ama jabaysaa. Waa inaan naqshadaynaa si aan uga fogaano xaaladahan.`,

    howItWorks: `Marka aan falanqeynayno dhismayaasha:
1.  **Aqoonsiga Baraha Xasaasiga ah:** Waxaan eegnaa meelaha ay suuragal tahay in dhibaato ka dhacdo (points of discontinuity), sida isku-xirka (joints) ama meelaha dhumucdu iska beddesho.
2.  **Xisaabinta Limit-ka Bidix iyo Midig:** Waxaan hubinaa in xoogga ka imanaya bidix uu la mid yahay kan midigta (Equilibrium at a point).
3.  **Hubinta Xiriirsanaanta:** Waxaan xaqiijinaa in leexashada (Deflection curve) ay tahay mid siman (smooth curve) oo aan lahayn geesaha fiiqan (sharp corners) oo keeni kara stress concentration.`,

    prerequisites: `Calculus 1: Functions. Waa inaad taqaanaa sida loo beddelo qiimayaasha function-ka.`,

    examples: `**Tusaale 1: Go'itaanka Waddada (Expansion Joints):**
Buundooyinka dhaadheer way ballaartaan markii qorraxdu kululaato. Haddii aan loo samayn meel ay u ballaartaan, way jabayaan. Injineerku wuxuu sameeyaa "Expansion Joint" (Dillaac ula-kac ah).
Xisaab ahaan, tani waa 'Discontinuity'.
Limit-ka bidix (wadada dhinaca A) iyo Limit-ka midig (wadada dhinaca B) isku meel ma joogaan heerkulka qaarkood.
Injineerku wuxuu isticmaalaa Limits si uu u xisaabiyo "Gap-ka" ugu yar ee loo baahan yahay si taayirka baabuurka uu si habsami leh ugu gudbo ($\lim_{gap \to 0}$), laakiin uu u ogolaado ballaarinta.

**Tusaale 2: Resonance (Gariirka):**
Function-ka gariirka dhismaha wuxuu yeelan karaa qaab:
$$A(f) = \frac{1}{|f^2 - f_n^2|}$$
Marka Frequency-ga dabaysha ($f$) uu u dhowaado Frequency-ga dabiiciga ah ee dhismaha ($f_n$), hooseeyaha (denominator) wuxuu u dhowaadaa eber.
$$\lim_{f \to f_n} A(f) = \infty$$
Tani waxay ka dhigan tahay gariirka wuxuu noqonayaa mid aan xad lahayn (Infinity), dhismuhuna wuu dumayaa (sida Buundadii Tacoma Narrows). Injineerku waa inuu hubiyaa in Limit-kan aan waligiis la gaarin.`,

    quiz: [
        { question: "Haddii $\\lim_{x \\to 2} f(x) = 5$ laakiin $f(2) = 3$, function-ku ma 'Continuous' baa?", options: ["Haa", "Maya", "Mararka qaar", "Lama ogaan karo"], correctAnswer: "Maya", explanation: "Si uu continuous u noqdo, Limit-ka iyo qiimaha dhabta ah waa inay isku mid noqdaan." },
        { question: "Injineernimada, maxay ka dhigan tahay haddii Limit-ka Stress-ka uu aado Infinity?", options: ["Dhismaha wuu sii xoogeysanayaa", "Waa xaalad caadi ah", "Burbur (Failure) ayaa dhacaya", "Kharashka ayaa yaraanaya"], correctAnswer: "Burbur (Failure) ayaa dhacaya", explanation: "Walaxna ma qaadi karto cadaadis aan xad lahayn." }
    ]
}, '3bIk3pKg0Vo');

const calc_derivatives = createCivilLesson('calc-3-derivatives', 'CASHAR 3: Derivatives & Structural Analysis', {
    whatIsIt: `**Derivative** (Hos-timaad) waa fikradda ugu awoodda badan Calculus-ka injineernimada. Si fudud, waa **Cabbirka Heerka Isbeddelka (Rate of Change)**. Xagga joomitiriga, waa janjeerka (slope) xariiqda taabata qallooca (Tangent line) bartaas.

Injineernimada dhismaha, wax walba way isbeddelaan. Culeyska wuu isbeddelaa, heerkulku wuu isbeddelaa, dhismaha booskiisa wuu isbeddelaa (deflection). Derivative-ku wuxuu inoo sheegaa *sida* ay wax isu beddelayaan.
Haddii $y$ ay tahay leexashada dogobka (Beam deflection), $dy/dx$ waa xagasha leexashada (Slope). $d^2y/dx^2$ waa qallooca (Curvature), oo xiriir toos ah la leh xoogga foorarka (Bending Moment).`,

    whyIsItImportant: `Waa wadnaha Structural Analysis (Falanqaynta Dhismaha).
1.  **Xiriirka Xoogagga:** Waxaa jira xiriir cajiib ah oo derivative ah oo ka dhexeeya culeyska (Load), xoogga jarista (Shear), iyo foorarka (Moment). Haddii aadan aqoon Derivative, ma naqshadayn kartid dogob (Beam) badbaado ah.
2.  **Helitaanka Meelaha Khatarta ah:** Derivative-ku wuxuu noo ogolaadaa inaan helno meesha ugu sarreysa ee foorarka (Maximum Moment) - tani waa barta dhismuhu ka jabi karo, waana meesha aan dhigno birta ugu badan.
3.  **Dhaqdhaqaaqa (Dynamics):** Si loo falanqeeyo saamaynta dhulgariirka, waxaan u baahanahay derivatives-ka bar-ka-baxa (Displacement) si aan u helno Xawaaraha (Velocity) iyo Dardargelinta (Acceleration).`,

    mainParts: `**1. Power Rule & Chain Rule:**
Hababka aasaasiga ah ee loo helo derivative-ka functions-ka kala duwan.
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

**2. Physical Interpretation (Fahamka Fiisikiga ah):**
*   $y(x)$ = Displacement (Bar-ka-bax / Leexasho).
*   $y'(x)$ = Slope (Xagal / Janjeer).
*   $y''(x)$ = Curvature (Qallooc / Bending Moment factor).

**3. Higher Order Derivatives:**
Injineernimada dhismaha, waxaan isticmaalnaa ilaa derivative-ka 4aad ($y''''$).
Sida uu qabo **Euler-Bernoulli Beam Theory**:
$$EI \frac{d^4y}{dx^4} = w(x)$$
Halka $w(x)$ uu yahay culeyska, $E$ waa Elastic Modulus, iyo $I$ waa Moment of Inertia.`,

    howItWorks: `Tallaabooyinka falanqaynta Dogobka (Beam Analysis) iyadoo la isticmaalayo Derivatives:
1.  **Qeex Function-ka Culeyska:** $w(x)$.
2.  **Integrate (lidka Derivative):** Si aad u hesho Shear Force $V(x)$. ($V = \int w dx$).
3.  **Integrate mar kale:** Si aad u hesho Bending Moment $M(x)$. ($M = \int V dx$).
4.  **Isticmaal Derivative:** Si aad u hesho barta 'Max Moment'. Waxaad xallisaa $dM/dx = V = 0$. Meesha Shear Force-ku eber yahay, Bending Moment-ku waa Maximum. Halkan ayaa u baahan birta ugu badan.`,

    prerequisites: `Calculus 2: Limits. Waa inaad taqaanaa Limits si aad u fahanto qeexitaanka rasmiga ah ee Derivative.`,

    examples: `**Tusaale: Falanqaynta Dogob (Beam Analysis):**
Ka soo qaad dogob dhererkiisu yahay $L$ oo culeys siman ($w$) saaran yahay.
1.  **Load:** $w(x) = -w$ (Culeys hoos u dhacaya).
2.  **Shear Force ($V$):** Waa integral-ka culeyska.
    $$V(x) = -wx + C_1$$
    (Halka $C_1$ tahay Reaction force).
3.  **Bending Moment ($M$):** Waa integral-ka Shear-ka.
    $$M(x) = -\frac{wx^2}{2} + C_1x + C_2$$

Haddii injineerku rabo inuu ogaado **Halkee ayuu dogobku ka jabi karaa?**, wuxuu qaadanayaa derivative-ka $M(x)$ oo eber ka dhigayaa ($dM/dx = 0$).
Tani waxay ku tusaysaa in $V(x) = 0$. Meeshaas waa bartamaha dogobka. Sidaas darteed, injineerku wuxuu ogaanayaa in bartamaha u baahan yahay xoojinta ugu weyn.

**Xiriirka Caalamiga ah:**
*   Load ($w$) $\to$ Shear ($V$) $\to$ Moment ($M$) $\to$ Slope ($\theta$) $\to$ Deflection ($y$).
Kuwani dhamaantood waxay isku yihiin derivatives iyo integrals.`,

    quiz: [
        { question: "Derivative wuxuu cabbiraa:", options: ["Mugga", "Heerka isbeddelka (Rate of Change)", "Dhererka", "Wareegga"], correctAnswer: "Heerka isbeddelka (Rate of Change)", explanation: "Waa sida degdegga ah ee `y` isku beddesho marka `x` isbeddesho." },
        { question: "Xiriirka ka dhexeeya Moment (M) iyo Shear Force (V) waa:", options: ["V waa derivative-ka M", "M waa derivative-ka V", "Way isku mid yihiin", "Xiriir ma laha"], correctAnswer: "V waa derivative-ka M", explanation: "dM/dx = V. Shear waa isbeddelka Moment-ka." },
        { question: "Haddii derivative-ka koowaad eber yahay (f'(x)=0), tani waxay badanaa tilmaamaysaa:", options: ["Maximum ama Minimum point", "Barta bilowga", "Barta dhamaadka", "Khalad"], correctAnswer: "Maximum ama Minimum point", explanation: "Waa barta janjeerku siman yahay (horizontal tangent), oo ah meesha ugu sarreysa ama hoosaysa." }
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

const phys_newtons_laws = createCivilLesson('phys-2-newtons-laws', 'CASHAR 7: Shuruucda Newton ee Dhismaha (Structural Mechanics)', {
    whatIsIt: `Saddexda sharci ee Sir Isaac Newton ma aha oo kaliya taariikh saynis; waa dastuurka injineernimada dhismaha. Dhisme kasta, laga soo bilaabo aqal yar ilaa buundooyinka adduunka ugu dheer, wuxuu ku taagan yahay adeecidda sharciyadan.
*   **Sharciga 1aad:** Walaxdu ma dhaqaaqdo haddii aan xoog lagu qasbin (Statics).
*   **Sharciga 2aad:** Xooggu waa Cuf x Dardar ($F=ma$).
*   **Sharciga 3aad:** Ficil kasta wuxuu leeyahay fal-celin la eg (Action = Reaction).

Injineerka madaniga ah (Civil Engineer), shuruucdan waxay u tarjumaan: "Sidee dhismahaygu u taagnaadaa isagoon dhaqaaqin, dumin, ama quusin?"`,

    whyIsItImportant: `Fahamka shuruucdan ayaa ah farqiga u dhexeeya dhisme badbaado ah iyo masiibo.
1.  **Dheellitirnaanta (Equilibrium):** Sharciga 1aad wuxuu saldhig u yahay maaddada **Statics**. Dhismayaasha badankoodu waa inayan dhaqaaqin. Sidaas darteed, wadarta xoogagga saaran waa inay noqotaa eber ($\sum F = 0$).
2.  **Culeyska Dabaylaha & Dhulgariirka:** Sharciga 2aad ($F=ma$) ayaa loo isticmaalaa marka dhismuhu dhaqaaqo (Dynamics). Marka dhulku gariiro, dhismuhu wuxuu yeeshaa dardar ($a$), taasoo dhalisa xoog ($F$) weyn oo burburin kara tiirarka.
3.  **Aasaaska & Ciidda:** Sharciga 3aad wuxuu sharxayaa sida dhulku u qaado dhismaha. Culeyska dhismaha (Action) waa inuu la mid noqdaa xoogga ciidda (Soil Reaction) si uusan dhismuhu u degin/quusin (Settlement).`,

    mainParts: `**1. Sharciga 1aad (Law of Inertia):**
"Walax kasta oo taagan way sii taagnaanaysaa, tan socotana way sii soconaysaa, ilaa xoog dibadda ah uu wax ka beddelo."
*Codsiga:* Dhismuhu waa inuu ahaadaa 'Static'. Wadarta xoogagga hoos u riixaya waa inay la mid yihiin kuwa kor u riixaya. Wadarta xoogagga bidix waa inay la mid yihiin kuwa midig.

**2. Sharciga 2aad (Law of Acceleration):**
$$F = m \cdot a$$
"Xoogga saaran walax wuxuu la mid yahay cufka walaxda oo lagu dhuftay dardargelinta."
*Codsiga:* Haddii wiish (Crane) uu kor u qaadayo shub, waa inuu bixiyaa xoog ka badan culeyska shubka ($mg$) si uu u dardargeliyo ($ma$). Wadarta xooggu waa $F = mg + ma$.

**3. Sharciga 3aad (Action-Reaction):**
"Ficil kasta wuxuu leeyahay fal-celin la eg oo jihada ka soo horjeeda."
*Codsiga:* Tani waa sirta 'Supports' (tiirarka iyo aasaaska). Haddii buundo ay 100 tan ku riixdo tiirka, tiirku waa inuu 100 tan kor u soo riixaa. Haddii kale, buundada way jabaysaa.`,

    howItWorks: `Marka injineerku naqshadaynayo dhisme:
1.  **Aqoonsiga Xoogagga (Loads):** Wuxuu xisaabiyaa culeyska dhismaha (Dead Load) iyo dadka/alaabta (Live Load).
2.  **Free Body Diagram (FBD):** Wuxuu sawiraa qayb ka mid ah dhismaha, isagoo muujinaya dhammaan xoogagga 'Action' iyo 'Reaction'.
3.  **Xisaabinta (Equilibrium Equations):** Wuxuu adeegsadaa Newton's 1st Law:
    *   $\sum F_x = 0$ (Xoogagga jiifaa waa eber).
    *   $\sum F_y = 0$ (Xoogagga taagani waa eber).
    *   $\sum M = 0$ (Wareeg-xoogaggu waa eber).
4.  **Cabbirka Xubnaha:** Markuu ogaado xoogga ku dhacaya tiirka (Reaction), wuxuu dooranayaa dhumucda iyo birta loo baahan yahay si ay u adkeysato xooggaas (Newton's 3rd Law application).`,

    prerequisites: `Physics: Kinematics. Waa inaad fahantaa vector-rada iyo sida la isugu daro.`,

    examples: `**Tusaale 1: Wiishka Dhismaha (Tower Crane):**
Wiishku wuxuu qaadayaa bir culus.
*   **Sharciga 1aad:** Marka birta hawada lagu hayo iyadoon dhaqaaqin, xoogga xarigga (Tension) wuxuu la mid yahay culeyska birta ($T = mg$).
*   **Sharciga 2aad:** Marka wiishku bilaabo inuu birta kor u qaado, wuu dardargelinayaa. Xoogga xariggu waa inuu ka bataa culeyska ($T = m(g+a)$). Haddii xariggu uusan qaadi karin xooggan dheeriga ah, wuu go'ayaa.
*   **Sharciga 3aad:** Wiishku wuxuu hoos u riixayaa dhulka. Dhulku waa inuu soo celiyaa xoog la eg. Sidaas darteed aasaaska wiishka (Foundation) waa inuu aad u ballaaran yahay oo culus yahay si uusan u gaddoomin.

**Tusaale 2: Darbiga Biyo-xireenka (Dam Wall):**
Biyuhu waxay xoog ku riixayaan darbiga (Action). Darbigu waa inuu ku riixaa biyaha xoog la eg (Reaction). Haddii darbiga uusan awoodin 'Reaction-kaas', biyaha ayaa duminaya.`,

    quiz: [
        { question: "Sharciga 1aad ee Newton wuxuu aasaas u yahay laanta injineernimada ee loo yaqaan:", options: ["Statics (Dhismaha Taagan)", "Dynamics", "Fluid Mechanics", "Thermodynamics"], correctAnswer: "Statics (Dhismaha Taagan)", explanation: "Statics waxay daraasaysaa walxaha dheellitiran (Equilibrium), taas oo ah nuxurka Sharciga 1aad." },
        { question: "Sida uu qabo Sharciga 3aad, haddii tiir 50 tan ku riixo aasaaska, imisa ayuu aasaasku soo riixayaa?", options: ["50 tan", "Ka yar 50 tan", "Ka badan 50 tan", "Eber"], correctAnswer: "50 tan", explanation: "Action iyo Reaction mar walba way is le'eg yihiin, laakiin jihooyinka ayaa kala jeeda." }
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
        "Aqoonso cufka walaxda (m) oo u beddel Kilogram.",
        "Aqoonso dardargelinta (a) oo u beddel m/s².",
        "Isku dhufo cufka iyo dardargelinta.",
        "Natiijada u qor Newton (N)."
    ],
    realWorldApplication: "Wuxuu injineerka u sheegaa inta xoog ee loo baahan yahay si wiish u qaado bir culus (Cuf) oo lagu dhaqaajinayo xawaare (Dardar)."
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
                    lessons: [calc_functions, calc_limits, calc_derivatives, createCivilLesson('calc-4-optimization', 'CASHAR 4: Optimization', { whatIsIt: "Habka helitaanka xalka ugu fiican." }), createCivilLesson('calc-5-integration', 'CASHAR 5: Integration', { whatIsIt: "Xisaabinta bedka iyo mugga." })] 
                },
                { 
                    id: 'civil-y1-physics-1', 
                    title: 'Physics I: Mechanics for Civil Eng', 
                    lessons: [createCivilLesson('phys-kinematics', 'CASHAR 6: Kinematics', { whatIsIt: "Barashada dhaqdhaqaaqa." }), phys_newtons_laws, createCivilLesson('phys-work-energy', 'CASHAR 8: Work & Energy', { whatIsIt: "Tamarta iyo shaqada." }), createCivilLesson('phys-momentum', 'CASHAR 9: Momentum', { whatIsIt: "Dhaqdhaqaaqa cufka." }), createCivilLesson('phys-rotation', 'CASHAR 10: Rotation', { whatIsIt: "Wareegga." }), createCivilLesson('phys-equilibrium', 'CASHAR 11: Equilibrium', { whatIsIt: "Dheellitirnaanta." })] 
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
        // ... (Other years remain the same structure, can be expanded similarly in future updates)
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
