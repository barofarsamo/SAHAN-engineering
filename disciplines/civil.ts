
import type { Discipline, Lesson } from '../types';
import { BuildingIcon } from '../components/Icons';

const createCivilLesson = (id: string, title: string, content: any): Lesson => ({
    id: `civil-${id}`,
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


// --- SANADKA 1AAD ---

// Qaybta 1aad: Calculus I
const calculus_functions_limits = [
    createCivilLesson('calculus-functions-basics', 'CASHAR 1: Aasaaska Functions', {
        whatIsIt: "Function waa isku xirka u dhexeeya laba doorsoome (variables) halkaasoo qiimaha mid ka mid ah uu ku xiran yahay qiimaha kan kale. Midka hore waxaa loo yaqaan doorsoomaha madaxa-bannaan (Independent Variable), kan labaadna waa doorsoomaha ku-tiirsan (Dependent Variable).",
        whyIsItImportant: "Functions waa aasaaska luqadda aan kula hadalno qaab-dhismeedyada. Waxay noo oggolaanayaan inaan si xisaabeysan u moodeelayno xiriirka ka dhexeeya sababta iyo saameynta injineernimada. Marka aad dhisayso daaqad, culeyska ay qaadanaysaa waxay ku xirantahay masaafka u dhexeeya tiirrada. Haddii masaafu yar yahay, culeysku wuu kordhiyaa. Haddii masaafu weyn yahay, culeysku wuu yaraadaa.",
        examples: `Tusaale Dhismaha:\n\`Culeyska Daqaad = f(Masaafa Xoog)\`\nHalkee:\n- **Culeyska Daqaad** = Dependent Variable (waa natiijada)\n- **Masaafa Xoog** = Independent Variable (waa waxa aad beddeli karto)`,
        howItWorks: `Qaabka Function-ka ee fudud wuxuu noqon karaa: \`f(x)= (W × L) / d\`\nHalkee:\n- \`f(x)\` = Culeyska uu qaadayo (Output)\n- \`W\` = Culeyska guud ee saaran (tusaale, 1000kg)\n- \`L\` = Dhererka daaqadda (tusaale, 4 mitir)\n- \`d\` = Masaafka u dhexeeya tiirrada (Input)`,
        prerequisites: "Fahamka aasaasiga ah ee aljebrada iyo doorsoomayaasha (variables).",
        quiz: [
            {
                question: "Function-ka `C(d) = 100/d` wuxuu matalayaa culeyska (C) uu qaadi karo dogob marka loo eego dhumucdiisa (d). Maxaa dhacaya marka dhumucda (d) la kordhiyo?",
                options: ["Culeysku wuu kordhayaa", "Culeysku wuu yaraanayaa", "Culeysku isma beddelayo", "Lama ogaan karo"],
                correctAnswer: "Culeysku wuu yaraanayaa",
                explanation: "Maadaama 'd' ay ku jirto hooseeyaha jajabka, kororka 'd' wuxuu keenaa in natiijada 'C' ay yaraato."
            },
            {
                question: "Function-ka `f(x)= (W × L) / d`, keebaa ah 'Independent Variable' (doorsoomaha madaxa-bannaan)?",
                options: ["W (Culeyska)", "L (Dhererka)", "d (Masaafka)", "f(x) (Natiijada)"],
                correctAnswer: "d (Masaafka)",
                explanation: "Xaaladdan, waxaan u qaadaneynaa inaan beddeli karno masaafka tiirrada (d) si aan u aragno saameynta, taasoo ka dhigaysa mid madax-bannaan."
            },
            {
                question: "Haddii W=2000kg, L=5m, iyo d=2m, waa maxay culeyska f(x) adigoo isticmaalaya qaacidada f(x)= (W × L) / d?",
                options: ["2500 kg", "5000 kg", "10000 kg", "2000 kg"],
                correctAnswer: "5000 kg",
                explanation: "f(x) = (2000 * 5) / 2 = 10000 / 2 = 5000 kg."
            }
        ]
    }),
    createCivilLesson('calculus-limits-intro', 'CASHAR 2: Xadka (Limits) - Qeexida iyo Tusaale', {
        whatIsIt: "Limit waa qiimaha uu shaqo (function) 'u dhowaanayo' marka doorsoomuhu (variable) uu u dhowaado qiimo gaar ah. Ma aha daruuri qiimaha shaqada ee dhibicdaas, laakiin waa meesha uu ku wajahan yahay.",
        whyIsItImportant: "Limits-ku wuxuu injineerka u sheegayaa 'barta burburka' ama 'xadka badbaadada'. Waxaan u isticmaalnaa inaan saadaalino waxa ku dhici doona qaab-dhismeedka marka uu gaaro xaaladaha ugu adag, xitaa daqiiqad ka hor inta uusan fashilmin.",
        examples: `Tusaale La Fududeeyay:\nHaddii daaqad ay qaadi karto 100kg oo culeys ah, limit-keedu waa 100kg. Tani waxay ka dhigan tahay:\n- Marka culeysku = 99kg → daaqadu way yara dheemanaysaa, laakiin waa badqabtaa.\n- Marka culeysku = 99.999kg → daaqadu aad ayay u dheemanaysaa, waxay ku dhowdahay inay jabto.\n- Marka culeysku uu *gaaro* 100kg → daaqadu waa jabaysaa.\nLimit-ku waa 100kg – culeyska ugu badan ee ay *u dhowaan* karto iyadoon jabin.`,
        howItWorks: `Qaabka Xisaabinta:\n\`lim f(x) = L\`\n\`x→c\`\nTani waxaa loo aqriyaa: "Limit-ka f(x) marka x uu u dhowaado c waa L".\nTusaale ahaan, \`lim f(x) = 100kg\` marka \`x→100\`, halka L (100kg) uu yahay culeyska ugu badan ee daaqadu qaadi karto.`,
        prerequisites: "Fahamka fikradda functions-ka.",
        quiz: [
            {
                question: "Maxay la macno tahay 'limit' marka laga hadlayo injineernimada dhismaha?",
                options: ["Celceliska culeyska", "Qiimaha ugu yar ee uu qaadi karo", "Qiimaha ugu badan ee uu qaab-dhismeedku u dhowaan karo ka hor inta uusan burburin", "Bilowga culeyska"],
                correctAnswer: "Qiimaha ugu badan ee uu qaab-dhismeedku u dhowaan karo ka hor inta uusan burburin",
                explanation: "Limit-ku wuxuu qeexayaa xadka ama barta ugu dambaysa ee badbaadada ka hor inta uusan fashilku dhicin."
            },
            {
                question: "Haddii limit-ka xoogga dabaysha ee buundo uu yahay 200 km/h, maxaa la filan karaa haddii dabayshu gaarto 199 km/h?",
                options: ["Buundadu way dumi doontaa", "Buundadu waxba ma noqon doonto", "Buundadu waxay la kulmi doontaa gariir xooggan laakiin ma dumi doonto", "Dabayshu way istaagi doontaa"],
                correctAnswer: "Buundadu waxay la kulmi doontaa gariir xooggan laakiin ma dumi doonto",
                explanation: "Marka la u dhowaado limit-ka, qaab-dhismeedku wuxuu la kulmaa cadaadis daran, laakiin fashilku wuxuu dhacaa marka la gaaro ama la dhaafo limit-ka."
            }
        ]
    }),
    createCivilLesson('calculus-trig-functions', 'CASHAR 3: Shaqooyinka Trigonometric ee Dhismaha', {
        whatIsIt: `Shaqooyinka aasaasiga ah ee trigonometric (Sine, Cosine, Tangent) waxay qeexaan xiriirka ka dhexeeya xaglaha iyo dhinacyada saddex-xagalka qumman.\n- **sin(θ)** = Dhinaca Ka Soo Horjeeda / Hypotenuse\n- **cos(θ)** = Dhinaca Ku Dhow / Hypotenuse\n- **tan(θ)** = Dhinaca Ka Soo Horjeeda / Dhinaca Ku Dhow`,
        whyIsItImportant: "Injineernimada madaniga, wax kasta oo leh xagal ama jiirad—sida saqafyada, buundooyinka, jaranjarooyinka, iyo xoogagga ku dhacaya xagal—waxaa lagu falanqeeyaa iyadoo la isticmaalayo trigonometry.",
        examples: `Tusaale La Fududeeyay: Saqaf leh xagal 30° oo salkiisu yahay 10m.\n- Si loo helo dhererka jiirada saqafka (birta), waxaan isticmaalnaa Cosine.\n- Si loo helo joogga saqafka, waxaan isticmaalnaa Tangent.`,
        howItWorks: `Haddii aad leedahay saqaf leh xagal θ iyo sal (L):\n- **Dhererka Birta Jiirada (Hypotenuse)** = L / cos(θ)\n- **Joogga Saqafka (Opposite)** = L × tan(θ)\n\nTusaale ahaan, saqaf leh xagal 30° oo salkiisu yahay 10m:\n- Dhererka Birta = 10 / cos(30°) = 10 / 0.866 ≈ 11.55m\n- Joogga Birta = 10 × tan(30°) = 10 × 0.577 ≈ 5.77m`,
        prerequisites: "Aqoonta aasaasiga ah ee joometeriga iyo saddex-xagallada.",
        quiz: [
            {
                question: "Haddii aad rabto inaad hesho joogga tiirka korontada adigoo og masaafada aad u jirto iyo xagasha aad kor ugu eegayso, keebaa isticmaalaysaa?",
                options: ["Sine", "Cosine", "Tangent", "Midna"],
                correctAnswer: "Tangent",
                explanation: "Tangent waxay isku xirtaa xagasha, dhinaca ka soo horjeeda (joogga), iyo dhinaca ku dhow (masaafada aad u jirto)."
            },
            {
                question: "Jaranjaro dhererkeedu yahay 15m ayaa derbi ku tiirsan, waxayna dhulka la samaynaysaa xagal 60°. Immisa ayay derbiga kor uga taal?",
                options: ["7.5 m", "10.6 m", "13 m", "15 m"],
                correctAnswer: "13 m",
                explanation: "Waxaan rabnaa dhinaca ka soo horjeeda (joogga). Waxaan haysannaa hypotenuse. Marka waxaan isticmaaleynaa sin(60°) = Joogga / 15. Joogga = 15 * sin(60°) ≈ 13m."
            }
        ]
    }),
    createCivilLesson('calculus-continuity', 'CASHAR 4: Continuity - Socodka si Joogto ah', {
        whatIsIt: "Funkshan waa 'joogto' (continuous) haddii garaafkiisa la sawiri karo iyada oo aan qalinka la qaadin. Si farsamo ahaan, macnaheedu waa isbeddel yar oo ku yimaada input-ka wuxuu keenaa isbeddel yar oo la saadaalin karo oo ku yimaada output-ka, iyada oo aan jirin boodbood ama daloolo.",
        whyIsItImportant: "Dhismayaasha iyo kaabayaasha waa inay noqdaan kuwo joogto ah. Jajab ama meel aan isku xirnayn (discontinuity) oo ku timaada dogob, buundo, ama waddo waxay matalaysaa dildilaac, daciifnimo, ama barta burburka. Falanqaynta qaab-dhismeedku waxay ku tiirsan tahay malo-awaalka ah in walxuhu ay yiin kuwo joogto ah.",
        mainParts: `Shuruudaha Continuity ee dhibicda 'a':\n1.  **f(a) waa inuu jiraa:** Shaqadu waa inay qeexan tahay meeshaas.\n2.  **lim f(x) marka x→a waa inuu jiraa:** Limit-ku waa inuu ka jiraa labada dhinacba.\n3.  **f(a) = lim f(x) marka x→a:** Qiimaha shaqada iyo limit-ku waa inay is le'ekaadaan.`,
        examples: `Tusaale La Fududeeyay ee Waddada:\n- **Continuous:** Waddo si fiican loo dhisay, siman, oo aan lahayn dildilaac. Gaarigu si habsami leh ayuu ku socon karaa.\n- **Discontinuous:** Waddo leh god weyn ama buundo dhexda ka go'an. Tani waa meel aan joogto ahayn oo halis gelinaysa badbaadada.`,
        prerequisites: "Fahamka Limits-ka.",
        quiz: [
            {
                question: "Muxuu 'discontinuity' ku matali karaa qaab-dhismeedka buundo?",
                options: ["Midabka buundada", "Dhererka buundada", "Dildilaac ama meel jaban oo halis ah", "Tirada baabuurta"],
                correctAnswer: "Dildilaac ama meel jaban oo halis ah",
                explanation: "Discontinuity waxay ka dhigan tahay in qaab-dhismeedku uusan isku xirnayn si sax ah, taasoo ah cillad weyn oo qaab-dhismeedka."
            },
            {
                question: "Keebaa ka mid ah shaqooyinkan soo socda leh 'discontinuity' meesha x=0?",
                options: ["f(x) = x + 5", "f(x) = x²", "f(x) = 5/x", "f(x) = cos(x)"],
                correctAnswer: "f(x) = 5/x",
                explanation: "Shaqada f(x) = 5/x lama qeexi karo marka x=0 (isku qeybinta eber), taasoo abuuraysa discontinuity."
            }
        ]
    }),
    createCivilLesson('calculus-limits-applications', 'CASHAR 5: Isticmaalka Xadka Dhibaatooyinka Dhabta ah', {
        whatIsIt: "Casharkani wuxuu isku darayaa fahamkeena limits-ka si aan u xallino dhibaatooyin la taaban karo oo injineernimo. Waxaan arki doonaa sida loo isticmaalo aljebrada si loo qiimeeyo limits-ka marka ay u muuqdaan kuwo aan la qeexin marka hore.",
        prerequisites: "Faham adag oo ku saabsan aljebrada, gaar ahaan kala-bixinta (factoring).",
        examples: `**Masaal 1: Xisaabinta Culeyska Ugu Badan**\nHaddii awoodda qaadista daaqad lagu matalo \`f(x) = 50x - x²\`, halka 'x' yahay masaafada tiirarka. Waxaan rabnaa inaan ogaanno culeyska ugu badan marka masaafadu tahay 25.\n\`lim (50x - x²)\` marka \`x→25\`\n**Xallinta:** Maadaama shaqadani ay tahay mid joogto ah, waxaan si toos ah u gelin karnaa qiimaha:\nf(25) = 50(25) - (25)² = 1250 - 625 = 625kg.\n\n**Masaal 2: Falanqaynta Barta Daciifka ah ee Kaniyo**\nLeexashada kaniyo waxaa lagu matalaa \`f(x) = (x³ - 8) / (x - 2)\`. Meesha x=2 waa meel muhiim ah, laakiin haddii aan gelinno 2, waxaan helaynaa 0/0. Waxaan isticmaaleynaa aljebrada si aan u helno limit-ka.\n**Xallinta:**\nWaxaan kala bixin karnaa \`x³ - 8\` oo noqonaysa \`(x-2)(x²+2x+4)\`.\nlim [(x-2)(x²+2x+4) / (x-2)] marka \`x→2\`\nWaxaan iska jareynaa \`(x-2)\`:\nlim (x²+2x+4) marka \`x→2\`\nHadda waxaan gelin karnaa 2:\n(2)² + 2(2) + 4 = 4 + 4 + 4 = 12.\nLeexashadu waxay u dhowaanaysaa 12 cutub marka la gaaro bartaas.`,
        quiz: [
            {
                question: "Waa maxay limit-ka f(x) = (x² - 9) / (x - 3) marka x uu u dhowaado 3?",
                options: ["0", "3", "6", "9"],
                correctAnswer: "6",
                explanation: "Kala bixi (x² - 9) oo noqo (x-3)(x+3). Iska jar (x-3). Waxaa haraya (x+3). Geli 3, natiijadu waa 3+3=6."
            },
            {
                question: "Maxay muhiim u tahay in la xalliyo limit-ka '0/0' halkii la dhihi lahaa 'lama qeexin'?",
                options: ["Ma ahan muhiim", "Si loo helo dabeecadda saxda ah ee qaab-dhismeedka ee barta muhiimka ah", "Si loo fududeeyo xisaabta", "Si loo jahawareeriyo injineerada"],
                correctAnswer: "Si loo helo dabeecadda saxda ah ee qaab-dhismeedka ee barta muhiimka ah",
                explanation: "Inkastoo qiimaha saxda ah ee bartaas aan la qeexin, limit-ku wuxuu noo sheegayaa qiimaha ay u dhowaanayso, taasoo muhiim u ah falanqaynta badbaadada."
            }
        ]
    })
];

const calculus_derivatives = [
    createCivilLesson('derivative-definition-basics', 'CASHAR 1: Qeexida Derivative iyo Aasaasiga', {
        whatIsIt: "Derivative waa isbeddelka degdegga ah (instantaneous rate of change) ee shaqo marka doorsoomuhu isbeddelo. Si fudud, waa xawaaraha isbeddelka ee hal dhibic oo gaar ah. Joomatari ahaan, waa jiirada (slope) xariiqda taabata qalooca meeshaas.",
        whyIsItImportant: "Derivatives waxay injineerka u sheegaan sida ay wax isu beddelayaan. Tani waxay muhiim u tahay in la helo meelaha ugu sarreeya (maximum) iyo kuwa ugu hooseeya (minimum). Tusaale ahaan, marka aad dhisayso saqaf qaloocan, waxaad u baahan tahay inaad ogaato barta ugu sarreysa si aad u hubiso adkeysiga, ama marka aad naqshadeynayso biyo-mareen, waxaad rabtaa inaad hesho meesha ugu hooseysa si aad u hubiso in biyuhu si fiican u socdaan.",
        howItWorks: `Haddii shaqada matalaysa qaabka saqafka ay tahay: \`f(x) = x² - 4x + 6\`.
Si aan u helno derivative-keeda, waxaan isticmaalnaa qawaaniinta aasaasiga ah:
Derivative-keedu waa: \`f'(x) = 2x - 4\`.
Marka aan derivative-ka la simno eber (\`2x - 4 = 0\`), waxaan helaynaa \`x = 2\`. Tani waa barta ugu hooseysa ee saqafka, meesha ugu muhiimsan ee la falanqeeyo.`,
        examples: `Saami dushiisa, haddii qaabkiisa lagu matalo funkshan, derivative-ku wuxuu naga caawinayaa inaan helno meesha ugu hooseysa. Meeshan waa meesha ugu fiican ee laga taagi karo tiir dheeraad ah maxaa yeelay waa meesha ugu adag.`,
        quiz: [
            {
                question: "Maxay derivative-ku u matalaysaa garaafka shaqo?",
                options: ["Bedka garaafka hoostiisa", "Jiirada xariiqda taabata", "Dhererka garaafka", "Qiimaha ugu weyn"],
                correctAnswer: "Jiirada xariiqda taabata",
                explanation: "Derivative-ku wuxuu bixiyaa jiirada (slope) ee qalooca meel kasta oo la siiyo."
            },
            {
                question: "Haddii derivative-ka shaqo uu yahay eber meel gaar ah, maxay taasi ka dhigan tahay?",
                options: ["Shaqadu way sii kordhaysaa", "Shaqadu waxay gaartay meel taagan (maximum, minimum, ama barta leexashada)", "Shaqadu way sii yaraanaysaa", "Shaqadu waa eber"],
                correctAnswer: "Shaqadu waxay gaartay meel taagan (maximum, minimum, ama barta leexashada)",
                explanation: "Marka jiiradu eber tahay, garaafku waa siman yahay, taasoo muujinaysa barta ugu sarreysa, tan ugu hooseysa, ama meel kale oo muhiim ah."
            }
        ]
    }),
    createCivilLesson('differentiation-rules-basics', 'CASHAR 2: Qawaaniinta Differentiation', {
        whatIsIt: `Qawaaniinta Differentiation-ka waa xeerar la soo gaabiyey oo loo isticmaalo in lagu helo derivatives si fudud. Kuwa ugu muhiimsan waa:
1.  **Power Rule:** \`d/dx(xⁿ) = nxⁿ⁻¹\`
2.  **Product Rule:** \`d/dx(uv) = u'v + uv'\`
3.  **Chain Rule:** \`d/dx[f(g(x))] = f'(g(x)) × g'(x)\``,
        whyIsItImportant: "Qawaaniintan waxay noo suurtagelinayaan inaan si degdeg ah u xallino qaacidooyin injineernimo oo adag. Tusaale ahaan, marka la xisaabinayo sida cadaadisku ugu faafo birta, qaacidada waxay noqon kartaa mid isku dhafan, waxaana loo baahan yahay Chain Rule si loo helo isbeddelkeeda.",
        howItWorks: `Tusaale ahaan, aan isticmaalno Chain Rule si aan u helno derivative-ka shaqada matalaysa adkeysiga bir qoto dheer: \`f(x) = √(x² + 4)\`
1.  Shaqada dibadda waa \`√u\`, derivative-keedu waa \`1/(2√u)\`.
2.  Shaqada gudaha waa \`u = x² + 4\`, derivative-keedu waa \`2x\`.
3.  Isku dhufo: \`f'(x) = (1/(2√(x² + 4))) × 2x = x/√(x² + 4)\``,
        examples: `Haddii aan rabno inaan ogaano heerka isbeddelka adkeysiga marka birta dhererkeedu yahay 5m:
\`f'(5) = 5/√(5² + 4) = 5/√29 ≈ 0.93\`.
Tani waxay ka dhigan tahay in heerka isbeddelka adkeysigu yahay 0.93 cutub halkii mitir ee dhererka ah meeshaas.`,
        quiz: [
            {
                question: "Isticmaal Power Rule, waa maxay derivative-ka f(x) = x⁵?",
                options: ["5x", "x⁴", "5x⁴", "x⁵"],
                correctAnswer: "5x⁴",
                explanation: "Sida ku cad Power Rule, n=5, markaa derivative-ku waa nxⁿ⁻¹ = 5x⁵⁻¹ = 5x⁴."
            },
            {
                question: "Goorma ayaa la isticmaalaa Chain Rule?",
                options: ["Marka laba shaqo la isku darayo", "Marka shaqo ay ku dhex jirto shaqo kale (composite function)", "Marka shaqo loo qeybiyo mid kale", "Mar kasta"],
                correctAnswer: "Marka shaqo ay ku dhex jirto shaqo kale (composite function)",
                explanation: "Chain Rule waxaa si gaar ah loogu talagalay in lagu helo derivative-ka shaqooyinka isku-dhafan sida sin(2x) ama (x²+1)³."
            }
        ]
    }),
    createCivilLesson('optimization-basics', 'CASHAR 3: Optimization - Helitaanka Qiimaha ugu Fiican', {
        whatIsIt: "Optimization waa habka loo isticmaalo derivatives si loo helo qiimaha ugu sarreeya (maximum) ama kan ugu hooseeya (minimum) ee shaqo. Tani waxay fure u tahay naqshadaha ugu hufan ee injineernimada.",
        whyIsItImportant: "Injineer ahaan, hadafkaagu waa inaad hesho naqshadda ugu fiican — tan ugu jaban, tan ugu adag, ama tan ugu weyn. Tusaale ahaan, inaad dhisto daaqad leh bedka ugu weyn adigoo isticmaalaya qadar go'an oo bir ah si aad u hesho iftiinka ugu badan.",
        howItWorks: `Tusaale: Waxaan rabnaa inaan dhisno daaqad leydi ah oo dhererkeedu dhan yahay 10m oo bir ah.
1.  **Bedka (Area):** \`A = x × y\` (kan ayaan rabnaa inaan weyneyno)
2.  **Wareegga (Perimeter):** \`2x + 2y = 10\` → \`y = 5 - x\`
3.  Ku beddel y shaqada bedka: \`A(x) = x(5 - x) = 5x - x²\`
4.  Soo hel derivative-ka: \`A'(x) = 5 - 2x\`
5.  La sim eber si aad u hesho barta muhiimka ah: \`5 - 2x = 0\` → \`x = 2.5m\`
6.  Soo hel y: \`y = 5 - 2.5 = 2.5m\``,
        examples: "Si loo helo daaqadda ugu weyn ee lagu dhisi karo 10m oo bir ah, waa inay noqotaa laba-jibbaarane (square) dhinacyadiisu yihiin 2.5m. Tani waxay bixinaysaa bedka ugu badan ee suurtogalka ah.",
        quiz: [
            {
                question: "Maxay tahay tillaabada ugu horreysa ee lagu xalliyo dhibaatada optimization-ka?",
                options: ["In la helo derivative-ka labaad", "In la sawiro garaafka", "In la qoro shaqada la rabo in la weyneeyo/yareeyo iyo xiriirka xaddidaya", "In la qiyaaso jawaabta"],
                correctAnswer: "In la qoro shaqada la rabo in la weyneeyo/yareeyo iyo xiriirka xaddidaya",
                explanation: "Kahor intaadan isticmaalin calculus, waa inaad si xisaabeysan u qeexdaa dhibaatada adigoo samaynaya isle'egyada ku habboon."
            }
        ]
    }),
    createCivilLesson('related-rates-basics', 'CASHAR 4: Related Rates - Isbeddelka la Xidhiidha', {
        whatIsIt: "Related Rates waa dhibaatooyin ku lug leh helitaanka heerka isbeddelka hal doorsoome iyadoo la og yahay heerka isbeddelka doorsoome kale oo la xiriira. Waxaan isticmaalnaa differentiation si aan u helno xiriirka ka dhexeeya heerarkooda isbeddel.",
        whyIsItImportant: "Dhismaha, waxyaabo badan ayaa isku mar isbeddela. Marka la shubayo biyo weel (weer), mugga biyuhu wuu kordhayaa, dhererka biyuhuna sidoo kale wuu kordhayaa. Related rates waxay noo oggolaanayaan inaan xisaabino sida degdegga ah ee dhererku u kordhayo marka la ogyahay sida degdegga ah ee biyaha loo shubayo.",
        howItWorks: `Tusaale: Weer (taangi) cilindir ah, gacan-kiisu (radius) yahay 2m, ayaa biyo lagu shubayaa heerka 10 m³/s. Sidee degdeg ah ayuu dhererka (h) biyuhu u kordhayaa?
1.  **Qaacidada:** Mugga cilindirka waa \`V = πr²h\`. Maadaama r uu yahay mid go'an (2m), \`V = 4πh\`.
2.  **Differentiation:** Ka qaad derivative-ka labada dhinac marka loo eego waqtiga (t): \`dV/dt = 4π(dh/dt)\`.
3.  **Xallinta:** Waxaan naqaannaa \`dV/dt = 10 m³/s\`. Marka \`10 = 4π(dh/dt)\`.
    \`dh/dt = 10 / (4π) ≈ 0.796 m/s\`.`,
        examples: "Dhererka biyuhu wuxuu ku kordhayaa qiyaastii 0.8 mitir ilbiriqsikiiba. Aqoontani waxay muhiim u tahay naqshadaynta nidaamyada buuxinta iyo faaruqinta taangiyada si looga fogaado inay buux-dhaafaan.",
        quiz: [
            {
                question: "Haddii dhererka iyo ballaca leydi ay ku korayaan heerarka 2 cm/s iyo 3 cm/s siday u kala horreeyaan, sidee degdeg ah ayuu bedku u korayaa marka dhererku yahay 10cm ballacuna yahay 6cm?",
                options: ["5 cm²/s", "38 cm²/s", "60 cm²/s", "12 cm²/s"],
                correctAnswer: "38 cm²/s",
                explanation: "A = l*w. dA/dt = (dl/dt)w + l(dw/dt). dA/dt = (2)(6) + (10)(3) = 12 + 30 = 38 cm²/s."
            }
        ]
    }),
    createCivilLesson('derivative-applications-construction', 'CASHAR 5: Isticmaalka Derivatives-ka ee Dhismaha', {
        whatIsIt: "Casharkani wuxuu soo koobayaa sida fikradaha derivatives-ka loogu dabaqo dhibaatooyinka dhabta ah ee injineernimada madaniga, sida xisaabinta xoogagga, dheemanista (deflection), iyo jiirada waddooyinka.",
        whyIsItImportant: "Derivatives waxay bixiyaan hab sax ah oo lagu falanqeeyo sida qaab-dhismeedyadu uga falceliyaan culeysyada iyo sida loo naqshadeeyo kaabayaasha sida waddooyinka si ay u noqdaan kuwo badbaado leh oo waxtar leh.",
        examples: `**Qorsheynta Jiirada Waddo:**
Haddii qaabka dhererka waddo lagu matalo: \`f(x) = 0.02x² - 0.5x + 10\`, halka x ay tahay masaafada.
Jiirada waddada meel kasta waxaa bixiya derivative-ka:
\`f'(x) = 0.04x - 0.5\`.
Jiiradu waa boqolley (percentage), markaa haddii aan rabno jiirada meesha masaafadu tahay 100m:
\`f'(100) = 0.04(100) - 0.5 = 4 - 0.5 = 3.5\`.
Tani waxay ka dhigan tahay in meeshaas, jiirada waddadu ay tahay 3.5%. Aqoontani waxay muhiim u tahay naqshadaynta dheecaanka biyaha iyo badbaadada gaadiidka.`,
        quiz: [
            {
                question: "Haddii shaqada matalaysa dheemanista (deflection) dogob ay tahay d(x), maxay matalaysaa d'(x)?",
                options: ["Dhererka dogobka", "Culeyska saaran", "Jiirada (slope) ee dheemanista", "Midna"],
                correctAnswer: "Jiirada (slope) ee dheemanista",
                explanation: "Derivative-ka shaqada dheemanista wuxuu bixiyaa jiirada qalooca dheemanista, taasoo muujinaysa xagasha uu dogobku ku leexday."
            },
            {
                question: "Maxay muhiim u tahay in la ogaado jiirada waddo?",
                options: ["Midabka waddada", "Dheecaanka biyaha roobka iyo xawaaraha baabuurta", "Magaca waddada", "Tirada dadka isticmaala"],
                correctAnswer: "Dheecaanka biyaha roobka iyo xawaaraha baabuurta",
                explanation: "Jiirada saxda ah waxay hubisaa in biyuhu aysan fariisan waddada dhexdeeda waxayna saameysaa badbaadada iyo awoodda ay baabuurta u leeyihiin inay koraan ama degaan."
            }
        ]
    })
];

const calculus_integration = [
    createCivilLesson('integration-basics', 'CASHAR 1: Aasaaska Integration', {
        whatIsIt: "Integration waa habka lagu helo 'anti-derivative' ee shaqo. Si kale haddii loo dhigo, waa soo uruurinta isbeddellada yaryar si loo helo wadarta guud. Haddii derivative-ku yahay kala-bixinta, integration-ku waa isku-keenidda.",
        whyIsItImportant: "Marka aan naqaanno heerka isbeddelka (sida xawaaraha), integration-ku wuxuu noo oggolaanayaa inaan helno wadarta guud (sida masaafada). Dhismaha, haddii aan naqaanno culeyska ku qaybsan daaqad, integration-ku wuxuu na siinayaa culeyska guud ee ay tahay in tiirarku qaadaan.",
        howItWorks: `Definite Integral wuxuu xisaabiyaa bedka hoos yimaada qalooc. Tusaale: Haddii culeyska ku qaybsan daaqad lagu matalo \`f(x) = 2x\` (culeysku wuu kordhayaa marka laga fogaado bilowga), culeyska guud ee daaqad 5m ah waxaa lagu helaa:
\`Culeyska Guud = ∫₀⁵ 2x dx\`
Anti-derivative-ka \`2x\` waa \`x²\`. Marka waxaan qiimeyneynaa:
\`[x²]₀⁵ = 5² - 0² = 25kg\`.
Culeyska guud ee ay tahay in daaqadu qaado waa 25kg.`,
        examples: "Tusaalahan wuxuu muujinayaa sida loo xisaabiyo culeyska guud ee aan sinnayn. Tani waxay muhiim u tahay naqshadaynta tiirarka iyo aasaaska si ay u qaadaan culeyska dhabta ah.",
        quiz: [
            {
                question: "Maxay matalaysaa definite integral-ka ∫ₐᵇ f(x)dx joomatari ahaan?",
                options: ["Jiirada qalooca", "Bedka saafiga ah ee u dhexeeya qalooca f(x) iyo x-axis-ka", "Dhererka qalooca", "Qiimaha ugu sarreeya ee f(x)"],
                correctAnswer: "Bedka saafiga ah ee u dhexeeya qalooca f(x) iyo x-axis-ka",
                explanation: "Fasiraadda aasaasiga ah ee definite integral waa bedka gobolka ku xaddidan garaafka iyo x-axis-ka."
            }
        ]
    }),
    createCivilLesson('integration-rules-basics', 'CASHAR 2: Qawaaniinta Integration', {
        whatIsIt: `Sida differentiation-ka, integration-ku wuxuu leeyahay qawaaniin fududeynaya habka. Kuwa ugu muhiimsan waa:
1.  **Power Rule:** \`∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C\`
2.  **Integration by Substitution:** Waa habka rogaal-celiska ah ee Chain Rule, loo isticmaalo shaqooyinka isku-dhafan.
3.  **Integration by Parts:** Waa habka rogaal-celiska ah ee Product Rule, loo isticmaalo isku-dhufashada shaqooyinka.`,
        whyIsItImportant: "Qawaaniintan ayaa ah qalabka lagama maarmaanka u ah xallinta dhibaatooyin injineernimo oo badan oo ku lug leh isku-darka saameynaha, sida helitaanka 'center of mass' ee qaab-dhismeed adag.",
        howItWorks: `Tusaale ahaan, aan isticmaalno **Substitution** si aan u xallino:
\`∫x√(x² + 1) dx\`
Tani waxay matali kartaa qaacido adag oo la xiriirta awoodda birta.
1.  Dooro u: \`u = x² + 1\`.
2.  Soo hel du: \`du = 2x dx\` → \`x dx = du/2\`.
3.  Ku beddel integral-ka: \`∫√u (du/2) = (1/2)∫u¹ᐟ² du\`.
4.  Isticmaal Power Rule: \`(1/2) * [u³ᐟ² / (3/2)] + C = (1/3)u³ᐟ² + C\`.
5.  Ku celi u qiimihiisii hore: \`(1/3)(x² + 1)³ᐟ² + C\`.`,
        quiz: [
            {
                question: "Isticmaal Power Rule for integration, waa maxay ∫x³ dx?",
                options: ["3x² + C", "x⁴/4 + C", "4x⁴ + C", "x³/3 + C"],
                correctAnswer: "x⁴/4 + C",
                explanation: "Sida ku cad Power Rule, n=3, markaa integral-ku waa xⁿ⁺¹/(n+1) = x⁴/4 + C."
            }
        ]
    }),
    createCivilLesson('integration-area-volume', 'CASHAR 3: Xisaabinta Bedka iyo Mugga', {
        whatIsIt: "Mid ka mid ah adeegsiyada ugu awoodda badan ee integration-ka waa awoodda lagu xisaabiyo bedka qaababka aan joogtada ahayn iyo mugga walxaha adag (solids of revolution).",
        // FIX: Combine multiline content into a single template literal string.
        whyIsItImportant: `Injineernimada madaniga, tan waxaa loo isticmaalaa in lagu xisaabiyo:
- Mugga ciidda la qodayo ama la buuxinayo.
- Mugga shamiitada looga baahan yahay dhismo qaab adag leh.
- Awoodda kaydinta biyaha ee biyo-xireen (dam) leh qaab aan joogto ahayn.`,
        howItWorks: `Xisaabinta Mugga Weer (Taangi):
Si loo xisaabiyo mugga weer cilindir ah oo dhererkiisu yahay 'H' iyo gacan-kiisu 'R', waxaan isku-darnaa bedka goobo kasta oo yar (πR²) laga bilaabo salka ilaa dusha:
\`V = ∫₀ᴴ πR² dh\`
Maadaama πR² ay tahay joogto:
\`V = πR² [h]₀ᴴ = πR²(H - 0) = πR²H\`.
Haddii dhererku yahay 10m, gacankuna 2m:
\`V = π(2)² × 10 = 40π ≈ 125.66 m³\`.`,
        examples: "Marka la ogaado mugga saxda ah, injineerku wuxuu si sax ah u qiyaasi karaa kharashka agabka wuxuuna hubin karaa in qaab-dhismeedku buuxinayo shuruudaha loo baahan yahay, sida inuu hayo 125.66 mitir cubic oo biyo ah.",
        quiz: [
            {
                question: "Sidee loo helaa mugga shay adag oo la abuuray iyadoo lagu wareejiyay qalooca y=f(x) agagaarka x-axis-ka laga bilaabo a ilaa b?",
                options: ["∫ₐᵇ f(x) dx", "∫ₐᵇ π[f(x)]² dx", "2π ∫ₐᵇ xf(x) dx", "π ∫ₐᵇ f(x) dx"],
                correctAnswer: "∫ₐᵇ π[f(x)]² dx",
                explanation: "Kani waa 'Disk Method'. Waxaan isku-darnaa mugga saxanno (disks) yaryar oo leh gacan f(x) iyo dhumuc dx."
            }
        ]
    }),
    createCivilLesson('integration-applications-construction', 'CASHAR 4: Isticmaalka Integration-ka ee Dhismaha', {
        whatIsIt: "Casharkani wuxuu muujinayaa sida fikradaha integration-ka loogu dabaqo si loo xalliyo dhibaatooyin kala duwan oo la taaban karo oo dhismaha ah, sida xisaabinta culeyska guud, mugga agabka, iyo xitaa shaqada la qabtay.",
        whyIsItImportant: "Integration-ku wuxuu injineerka siinayaa awood uu ku xisaabiyo tirooyinka guud ee ka dhasha qaybin aan sinnayn, taasoo ah xaalad caadi ah oo laga helo dhibaatooyinka dhabta ah ee adduunka.",
        examples: `**Xisaabinta Culeyska Guud ee Tiir:**
Ka soo qaad in tiir dhererkiisu yahay 3m uu qaadayo culeys aan sinnayn oo lagu matalo shaqada \`f(x) = 50 + 2x²\` N/m, halkaasoo x ay tahay masaafada salka tiirka. Si aan u helno culeyska guud ee tiirku qaadayo:
\`Culeyska Guud = ∫₀³ (50 + 2x²) dx\`
1.  Soo hel anti-derivative-ka: \`[50x + (2/3)x³]\`
2.  Qiimee laga bilaabo 0 ilaa 3: \`[50(3) + (2/3)(3)³] - [50(0) + (2/3)(0)³]\`
3.  Xisaabi: \`[150 + (2/3)(27)] - 0 = 150 + 18 = 168 N\`.
Tiirku waa inuu awood u leeyahay inuu qaado culeys guud oo ah 168 Newton.`,
        quiz: [
            {
                question: "Haddii xoogga loo baahan yahay in lagu riixo shay masaafada x uu yahay F(x) = 3x², imisa shaqo (work) ayaa la qabtay marka shayga laga raro x=0 ilaa x=2?",
                options: ["6 J", "8 J", "12 J", "4 J"],
                correctAnswer: "8 J",
                explanation: "Shaqadu waa integral-ka xoogga: W = ∫₀² 3x² dx = [x³]₀² = 2³ - 0³ = 8 Joules."
            }
        ]
    })
];

const calculus_transcendental_overview_lesson = createCivilLesson('calculus-transcendental-overview', 'Hordhac: Transcendental Functions', {
    whatIsIt: `**Waxa uu Taraarayaa:**
- Shaqooyinka gaarka ah ee transcendental (exponential, logarithmic, trigonometric)
- Sida loo isticmaalo shaqooyinkan xisaabayaasha injineernimada
- Isbeddelka iyo isugu-dhufashada shaqooyinkaas

**Waxa aad Baran Dontaa:**
- Shaqooyinka exponential iyo logarithmic
- Shaqooyinka trigonometric (sin, cos, tan)
- Sida loo isticmaalo shaqooyinkan xallinta dhibaatooyinka`,
    whyIsItImportant: `Dhacdooyin badan oo dabiici ah iyo kuwa injineernimo, sida gariirka dhismayaasha ama burburka walxaha shucaaca leh, laguma tilmaami karo funkshanno aljebra ah oo fudud. Funkshannada transcendental ayaa bixiya luqadda lagu moodeeleeyo nidaamyadan adag.
- **Qorsheynta Jidhka Dhismaha:** Shaqooyinka trigonometric waxaa lagu isticmaalaa xisaabinta xoogagga ku dhaqma dhismo, gaar ahaan xoogagga kala-socda (oscillating forces) ee ka dhasha dabaysha ama dhulgariirka.
- **Hisaabida Xoogagga:** Marka aad dhisayso dhismo, xoogagga ay saaran yihiin waxay isbeddelaan sida shaqooyinka trigonometric. Fahamka shaqooyinkan waxay kuu caawin doonaan inaad hisaabiso xoogaggaas.`,
    examples: `**Goorta uu u Baahan Yahay:**
- Marka aad xisaabinayso xoogagga kala-socda
- Marka aad qorsheynayso dhismo xoogagga kala-socda ku dhaqma
- Marka aad sahaminayso sida dhismuhu u dheemanayo xoogagga kala-duwan`,
    quiz: [{
        question: "Dhaqdhaqaaqa gariirka (vibration) ee buundo waxaa sida ugu fiican loogu moodeeleeyaa noocee funkshan ah?",
        options: ["Logarithmic", "Quadratic", "Linear", "Trigonometric (sida sine ama cosine)"],
        correctAnswer: "Trigonometric (sida sine ama cosine)",
        explanation: "Funkshannada trigonometric waxay si dabiici ah u qeexaan dhaqdhaqaaqa soo noqnoqda ama wareegsan, sida gariirka."
    }]
});

const transcendental_functions = [
    calculus_transcendental_overview_lesson,
    createCivilLesson('exponential-functions', 'Exponential Functions', { whatIsIt: "Waa funkshanno qaabkoodu yahay f(x) = aˣ, halka salka 'a' uu yahay joogte togan. Funkshanka ugu muhiimsan waa `eˣ` (natural exponential function). Waxay moodeeleeyaan koritaanka ama burburka joogtada ah."}),
    createCivilLesson('logarithmic-functions', 'Logarithmic Functions', { whatIsIt: "Waa funkshannada rogaal-celiska ah (inverse) ee exponential functions. Haddii y = aˣ, markaa x = logₐ(y). Waxay u rogaan isku-dhufashada isku-geyn iyo awoodaha isku-dhufasho."}),
    createCivilLesson('inverse-trigonometric-functions', 'Inverse Trigonometric Functions', { whatIsIt: "Waa funkshannada rogaal-celiska ah ee trigonometric functions (sida arcsin, arccos, arctan). Waxay naga caawiyaan inaan helno xagal marka la yaqaan saamiga dhinacyada."})
];

const integration_techniques = [
    createCivilLesson('integration-by-substitution', 'Integration by Substitution', { whatIsIt: "Waa farsamo loo isticmaalo in lagu fududeeyo integral-lada iyadoo la beddelayo qayb ka mid ah integral-ka doorsoome cusub (sida 'u'). Waa habka rogaal-celiska ah ee Chain Rule."}),
    createCivilLesson('integration-by-parts', 'Integration by Parts', { whatIsIt: "Waa farsamo loo isticmaalo isku-dhexfidinta taran-dhigga (product) laba funkshan. Waxay ka timid Product Rule ee differentiation-ka. Qaacidada waa: ∫u dv = uv - ∫v du."}),
    createCivilLesson('partial-fractions', 'Partial Fractions', { whatIsIt: "Waa farsamo aljebra ah oo loo isticmaalo in lagu burburiyo jajab adag oo razional ah (rational fraction) oo loo beddelo isku-darka jajabyo fudud oo si sahlan loo isku-dhexfidin karo."})
];

// Qaybta 2aad: Physics I (Mechanics)
const physics_units_measurements = [
    createCivilLesson('si-units-conversions', 'SI Units and Conversions', { whatIsIt: "Barashada Nidaamka Caalamiga ah ee Halbeegyada (SI Units) - mitir (m), kiilogaraam (kg), ilbiriqsi (s), iwm. - iyo sida loogu kala beddelo halbeegyada kala duwan."}),
    createCivilLesson('dimensional-analysis', 'Dimensional Analysis', { whatIsIt: "Farsamo awood leh oo loo isticmaalo hubinta is-waafajinta isle'egyada fiisigiska iyadoo la falanqeynayo halbeegyadooda aasaasiga ah (Mass, Length, Time)."}),
    createCivilLesson('measurement-techniques', 'Measurement Techniques', { whatIsIt: "Barashada isticmaalka qalabka cabbirka ee aasaasiga ah iyo fahamka fikradaha saxnaanta (accuracy) iyo qummanaanta (precision)."}),
];
// ... Dhammaan casharrada kale ee Physics I ...

// Qaybta 3aad: Engineering Drawing
const drawing_intro = [
    createCivilLesson('drawing-instruments', 'Drawing Instruments', { whatIsIt: "Barashada iyo isticmaalka qalabka aasaasiga ah ee sawirka farsamada, sida T-squares, set squares, compasses, iyo miisaanno (scales)."}),
    createCivilLesson('lettering-line-types', 'Lettering and Line Types', { whatIsIt: "Barashada heerarka qoraalka farsamada iyo noocyada kala duwan ee xariiqyada iyo macnahooda sawirka injineernimada."}),
    createCivilLesson('scales-dimensions', 'Scales and Dimensions', { whatIsIt: "Fahamka sida loo isticmaalo miisaannada si loo matalo walxo waaweyn warqad yar iyo sida saxda ah ee loo cabbiro sawirrada."}),
];
// ... Dhammaan casharrada kale ee Engineering Drawing ...

// ... Ku celi qaabkan dhammaan 8-da qaybood ee Sanadka 1aad ...

export const civilEngineeringDiscipline: Discipline = {
  id: 'civil-engineering',
  name: 'Injineernimada Madaniga',
  icon: BuildingIcon,
  description: 'Naqshadee, dhis, oo dayactir kaabayaasha aasaasiga ah ee bulshada casriga ah.',
  levels: [
    {
      id: 'civil-year-1',
      name: 'SANADKA 1AAD: Aasaaska Injineernimada',
      description: 'Baro xisaabta, sayniska, iyo aqoonta aasaasiga ah ee injineernimada oo saldhig u ah dhammaan qaybaha kale.',
      modules: [
        // Qaybta 1aad: Calculus I
        { id: 'civil-y1-m1', title: 'Calculus I: Functions and Limits', lessons: calculus_functions_limits },
        { id: 'civil-y1-m2', title: 'Calculus I: Derivatives and Applications', lessons: calculus_derivatives },
        { id: 'civil-y1-m3', title: 'Calculus I: Integration', lessons: calculus_integration },
        { id: 'civil-y1-m4', title: 'Calculus I: Transcendental Functions', lessons: transcendental_functions },
        { id: 'civil-y1-m5', title: 'Calculus I: Techniques of Integration', lessons: integration_techniques },

        // Qaybta 2aad: Physics I (Mechanics)
        { id: 'civil-y1-m6', title: 'Physics I: Units and Measurements', lessons: physics_units_measurements },
        { id: 'civil-y1-m7', title: 'Physics I: Kinematics', lessons: [createCivilLesson('kin-1d', 'Motion in One Dimension', {}), createCivilLesson('kin-projectile', 'Projectile Motion', {}), createCivilLesson('kin-circular', 'Circular Motion', {})] },
        { id: 'civil-y1-m8', title: "Physics I: Newton's Laws of Motion", lessons: [createCivilLesson('newton-force', 'Force and Acceleration', {}), createCivilLesson('newton-friction', 'Friction Forces', {}), createCivilLesson('newton-apps', 'Applications in Engineering', {})] },
        { id: 'civil-y1-m9', title: 'Physics I: Work, Energy, and Power', lessons: [createCivilLesson('wep-ke-pe', 'Kinetic and Potential Energy', {}), createCivilLesson('wep-conservation', 'Conservation of Energy', {}), createCivilLesson('wep-power', 'Power Calculations', {})] },
        { id: 'civil-y1-m10', title: 'Physics I: Rotational Motion', lessons: [createCivilLesson('rot-torque', 'Torque and Angular Momentum', {}), createCivilLesson('rot-inertia', 'Moment of Inertia', {}), createCivilLesson('rot-dynamics', 'Rotational Dynamics', {})] },
        { id: 'civil-y1-m11', title: 'Physics I: Gravitation', lessons: [createCivilLesson('grav-newton', "Newton's Law of Gravitation", {}), createCivilLesson('grav-planetary', 'Planetary Motion', {}), createCivilLesson('grav-satellite', 'Satellite Dynamics', {})] },

        // Qaybta 3aad: Engineering Drawing
        { id: 'civil-y1-m12', title: 'Drawing: Introduction to Technical Drawing', lessons: drawing_intro },
        { id: 'civil-y1-m13', title: 'Drawing: Orthographic Projections', lessons: [createCivilLesson('ortho-first', 'First Angle Projection', {}), createCivilLesson('ortho-third', 'Third Angle Projection', {}), createCivilLesson('ortho-multi', 'Multi-view Drawings', {})] },
        { id: 'civil-y1-m14', title: 'Drawing: Isometric Projections', lessons: [createCivilLesson('iso-axes', 'Isometric Axes and Scales', {}), createCivilLesson('iso-tech', 'Isometric Drawing Techniques', {}), createCivilLesson('iso-convert', 'Conversion from Orthographic', {})] },
        { id: 'civil-y1-m15', title: 'Drawing: Sectional Views', lessons: [createCivilLesson('sec-full', 'Full Sections', {}), createCivilLesson('sec-half', 'Half Sections', {}), createCivilLesson('sec-offset', 'Offset Sections', {})] },
        { id: 'civil-y1-m16', title: 'Drawing: Dimensioning Techniques', lessons: [createCivilLesson('dim-linear', 'Linear Dimensioning', {}), createCivilLesson('dim-angular', 'Angular Dimensioning', {}), createCivilLesson('dim-tolerances', 'Tolerances', {})] },
        { id: 'civil-y1-m17', title: 'Drawing: Introduction to CAD', lessons: [createCivilLesson('cad-basic', 'Basic CAD Commands', {}), createCivilLesson('cad-2d', '2D Drawing in AutoCAD', {}), createCivilLesson('cad-plot', 'Plotting and Printing', {})] },

        // Qaybta 4aad: General Chemistry
        { id: 'civil-y1-m18', title: 'Chemistry: Atomic Structure', lessons: [createCivilLesson('chem-atomic', 'Atomic Theory', {}), createCivilLesson('chem-config', 'Electronic Configuration', {}), createCivilLesson('chem-periodic', 'Periodic Table', {})] },
        { id: 'civil-y1-m19', title: 'Chemistry: Chemical Bonding', lessons: [createCivilLesson('bond-ionic', 'Ionic Bonds', {}), createCivilLesson('bond-covalent', 'Covalent Bonds', {}), createCivilLesson('bond-metallic', 'Metallic Bonds', {})] },
        { id: 'civil-y1-m20', title: 'Chemistry: Stoichiometry', lessons: [createCivilLesson('stoich-eq', 'Chemical Equations', {}), createCivilLesson('stoich-mole', 'Mole Concept', {}), createCivilLesson('stoich-calc', 'Reaction Calculations', {})] },
        { id: 'civil-y1-m21', title: 'Chemistry: States of Matter', lessons: [createCivilLesson('matter-states', 'Gases, Liquids, and Solids', {}), createCivilLesson('matter-phase', 'Phase Changes', {}), createCivilLesson('matter-laws', 'Gas Laws', {})] },
        { id: 'civil-y1-m22', title: 'Chemistry: Chemical Reactions', lessons: [createCivilLesson('react-acid', 'Acid-Base Reactions', {}), createCivilLesson('react-redox', 'Oxidation-Reduction', {}), createCivilLesson('react-precip', 'Precipitation Reactions', {})] },
        { id: 'civil-y1-m23', title: 'Chemistry: Basic Electrochemistry', lessons: [createCivilLesson('electro-cells', 'Electrolytic Cells', {}), createCivilLesson('electro-corrosion', 'Corrosion Principles', {}), createCivilLesson('electro-battery', 'Battery Technology', {})] },

        // Qaybta 5aad: Introduction to Engineering
        { id: 'civil-y1-m24', title: 'Intro to Eng: History of Engineering', lessons: [createCivilLesson('hist-ancient', 'Ancient Engineering', {}), createCivilLesson('hist-industrial', 'Industrial Revolution', {}), createCivilLesson('hist-modern', 'Modern Engineering', {})] },
        { id: 'civil-y1-m25', title: 'Intro to Eng: Engineering Ethics', lessons: [createCivilLesson('eth-resp', 'Professional Responsibility', {}), createCivilLesson('eth-code', 'Code of Ethics', {}), createCivilLesson('eth-case', 'Case Studies', {})] },
        { id: 'civil-y1-m26', title: 'Intro to Eng: Engineering Disciplines', lessons: [createCivilLesson('disc-civil', 'Civil Engineering Specializations', {}), createCivilLesson('disc-related', 'Related Engineering Fields', {}), createCivilLesson('disc-paths', 'Career Paths', {})] },
        { id: 'civil-y1-m27', title: 'Intro to Eng: Problem-Solving Methods', lessons: [createCivilLesson('prob-design', 'Engineering Design Process', {}), createCivilLesson('prob-critical', 'Critical Thinking', {}), createCivilLesson('prob-decision', 'Decision Making', {})] },
        { id: 'civil-y1-m28', title: 'Intro to Eng: Engineering Design Process', lessons: [createCivilLesson('des-prob', 'Problem Identification', {}), createCivilLesson('des-sol', 'Solution Development', {}), createCivilLesson('des-plan', 'Implementation Planning', {})] },
        { id: 'civil-y1-m29', title: 'Intro to Eng: Career Opportunities', lessons: [createCivilLesson('car-const', 'Construction Industry', {}), createCivilLesson('car-consult', 'Consulting Firms', {}), createCivilLesson('car-gov', 'Government Agencies', {})] },

        // Qaybta 6aad: Computer Applications
        { id: 'civil-y1-m30', title: 'Computer: MS Office Applications', lessons: [createCivilLesson('comp-word', 'Word for Technical Reports', {}), createCivilLesson('comp-excel', 'Excel for Engineering Calculations', {}), createCivilLesson('comp-ppt', 'PowerPoint for Presentations', {})] },
        { id: 'civil-y1-m31', title: 'Computer: Basic Programming Concepts', lessons: [createCivilLesson('prog-algo', 'Algorithm Development', {}), createCivilLesson('prog-flow', 'Flowcharting', {}), createCivilLesson('prog-python', 'Introduction to Python', {})] },
        { id: 'civil-y1-m32', title: 'Computer: Engineering Software Overview', lessons: [createCivilLesson('soft-cad', 'CAD Software Introduction', {}), createCivilLesson('soft-analysis', 'Analysis Tools', {}), createCivilLesson('soft-sim', 'Simulation Software', {})] },
        { id: 'civil-y1-m33', title: 'Computer: Internet Research Skills', lessons: [createCivilLesson('res-tech', 'Technical Information Search', {}), createCivilLesson('res-db', 'Academic Databases', {}), createCivilLesson('res-online', 'Online Resources', {})] },
        { id: 'civil-y1-m34', title: 'Computer: Data Analysis Basics', lessons: [createCivilLesson('data-stat', 'Statistical Calculations', {}), createCivilLesson('data-pres', 'Data Presentation', {}), createCivilLesson('data-plot', 'Graph Plotting', {})] },
        
        // Qaybta 7aad: Communication Skills
        { id: 'civil-y1-m35', title: 'Communication: Technical Report Writing', lessons: [createCivilLesson('comm-struct', 'Report Structure', {}), createCivilLesson('comm-lang', 'Technical Language', {}), createCivilLesson('comm-std', 'Documentation Standards', {})] },
        { id: 'civil-y1-m36', title: 'Communication: Presentation Skills', lessons: [createCivilLesson('pres-public', 'Public Speaking', {}), createCivilLesson('pres-visual', 'Visual Aids Preparation', {}), createCivilLesson('pres-aud', 'Audience Engagement', {})] },
        { id: 'civil-y1-m37', title: 'Communication: Professional Communication', lessons: [createCivilLesson('prof-bus', 'Business Correspondence', {}), createCivilLesson('prof-meet', 'Meeting Etiquette', {}), createCivilLesson('prof-team', 'Team Communication', {})] },
        { id: 'civil-y1-m38', title: 'Communication: Team Communication', lessons: [createCivilLesson('team-dyn', 'Group Dynamics', {}), createCivilLesson('team-res', 'Conflict Resolution', {}), createCivilLesson('team-proj', 'Collaborative Projects', {})] },
        { id: 'civil-y1-m39', title: 'Communication: Engineering Documentation', lessons: [createCivilLesson('doc-proj', 'Project Documentation', {}), createCivilLesson('doc-spec', 'Technical Specifications', {}), createCivilLesson('doc-qual', 'Quality Records', {})] },

        // Qaybta 8aad: Somaliya Engineering
        { id: 'civil-y1-m40', title: 'Somalia Eng: Engineering History in Somalia', lessons: [createCivilLesson('som-trad', 'Traditional Building Methods', {}), createCivilLesson('som-col', 'Colonial Engineering Works', {}), createCivilLesson('som-post', 'Post-Independence Development', {})] },
        { id: 'civil-y1-m41', title: 'Somalia Eng: Local Construction Materials', lessons: [createCivilLesson('mat-ind', 'Indigenous Materials', {}), createCivilLesson('mat-mod', 'Modern Material Availability', {}), createCivilLesson('mat-sust', 'Sustainable Alternatives', {})] },
        { id: 'civil-y1-m42', title: 'Somalia Eng: Somali Building Codes', lessons: [createCivilLesson('code-nat', 'National Standards', {}), createCivilLesson('code-safe', 'Safety Regulations', {}), createCivilLesson('code-env', 'Environmental Considerations', {})] },
        { id: 'civil-y1-m43', title: 'Somalia Eng: Environmental Considerations', lessons: [createCivilLesson('env-clim', 'Climate Impact on Structures', {}), createCivilLesson('env-water', 'Water Management', {}), createCivilLesson('env-prot', 'Environmental Protection', {})] },
        { id: 'civil-y1-m44', title: 'Somalia Eng: Case Studies of Local Projects', lessons: [createCivilLesson('case-succ', 'Successful Projects', {}), createCivilLesson('case-chall', 'Challenges and Solutions', {}), createCivilLesson('case-fut', 'Future Opportunities', {})] },
      ],
    },
    {
        id: 'civil-year-2',
        name: 'SANADKA 2AAD: Qalabaynta Aasaasiga ah',
        description: 'Baro fikradaha iyo qalabka aasaasiga u ah laamaha kala duwan ee injineernimada madaniga.',
        modules: [
            { id: 'civil-y2-m1', title: 'Makaanikada Injineernimada', lessons: [
                createCivilLesson('eng-mechanics', 'Engineering Mechanics (Statics & Dynamics)', { whatIsIt: "Barashada saameynta xoogaggu ku leeyihiin walxaha, marka ay nasanayaan (statics) iyo marka ay dhaqaaqayaan (dynamics)." }),
                createCivilLesson('strength-materials', 'Awoodda Walxaha (Strength of Materials)', { 
                    whatIsIt: "Awoodda Walxaha, oo sidoo kale loo yaqaan Makaanikada Walxaha, waa laan injineernimo oo barata saameynta xoogagga dibadda ku leeyihiin walxaha adag. Waxay falanqeysaa **stress** (cadaadiska gudaha ee walaxda), **strain** (heerka ay walaxdu isu beddesho qaab ahaan), iyo xiriirka ka dhexeeya labadooda. Fikradaha asaasiga ah waxaa ka mid ah elasticity (awoodda walaxdu ugu soo laaban karto qaabkeedii hore), plasticity (qaab-beddelka joogtada ah), iyo fashilka (failure).",
                    whyIsItImportant: "Waa aasaaska naqshad kasta oo badbaado leh oo waxtar leh ee injineernimada madaniga. La'aanteed faham qoto dheer oo ku saabsan sida walxuhu u dhaqmaan marka culeys la saaro, buundooyinku way dumi lahaayeen, dhismayaashu way dumi lahaayeen, biyo-xireennaduna way jabi lahaayeen. Waxay noo oggolaanaysaa inaan dooranno walaxda saxda ah iyo cabbirka saxda ah ee qayb kasta oo qaab-dhismeedka ah si loo hubiyo inay u adkeysato culeysyada la filayo inta ay nooshahay.",
                    mainParts: `1. **Stress (Cadaadis):** Awoodda gudaha ee halkii bed ee walaxdu isaga caabiso culeyska dibadda (σ = F/A). Waxaa jira noocyo kala duwan:
- **Tensile Stress:** Marka la kala jiidayo walaxda.
- **Compressive Stress:** Marka la isku cadaadinayo walaxda.
- **Shear Stress:** Marka xoogag is barbar socda ay isku dayaan inay walaxda kala gooyaan.
2. **Strain (Kala-bax):** Cabirka qaab-beddelka walaxda marka loo eego cabbirkeedii asalka ahaa (ε = ΔL/L).
3. **Stress-Strain Curve:** Garaaf muujinaya sida walaxdu uga falceliso culeyska sii kordhaya, oo muujinaya xadkeeda elastic-ka, barta dhalidda (yield point), iyo xoogga ugu dambeeya (ultimate strength).`,
                    howItWorks: "Injineeradu waxay isticmaalaan tijaabooyin shaybaar si ay u go'aamiyaan sifooyinka farsamo ee walxaha sida birta iyo shamiitada. Xogtan, oo lagu soo bandhigo qaabka Stress-Strain Curve, ayaa loo isticmaalaa in lagu sameeyo qaacidooyin xisaabeed. Qaacidooyinkan ayaa markaa u oggolaanaya injineerada inay xisaabiyaan stress-ka iyo strain-ka ku dhici doona qaybaha qaab-dhismeedka (sida dogobyada, tiirarka) marka la saaro culeysyo la yaqaan (sida miisaanka dhismaha, dabaysha, dhulgariirka).",
                    examples: `**Kiisaska Dhabta ah ee Adduunka:**

**1. Kiiska Fashilka: Buundada Tacoma Narrows (1940)**
- **Dhacdada:** Buundadan caanka ah ee Maraykanka waxay ku duntay afar bilood oo keliya ka dib markii la furay sababtoo ah dabayl xooggeedu ahaa 40 mayl saacaddii oo keliya. Buundadu waxay bilowday inay si daran u ruxanto (phenomenon loo yaqaan aeroelastic flutter) ilaa ay ugu dambeyntii burburtay.
- **Mabda'a Injineernimada:** Tani waxay tusaale u tahay fashil ka dhashay **resonance** iyo **dynamic loading (culeysyo isbedbeddela)**. Inkastoo birta loo isticmaalay ay ahayd mid ku filan culeysyada taagan (static loads) sida miisaanka baabuurta, naqshadda buundada oo aad u dhuubneyd oo fududeyd ayaa ka dhigtay mid u nugul gariirka dabaysha. Marka inta jeer ee gariirka dabayshu ay la mid noqotay inta jeer ee dabiiciga ah ee buundada (natural frequency), gariirku wuu sii weynaaday ilaa uu gaaray heer uu dhaafiyay awoodda walaxdu u leedahay inay u adkeysato *stress*-ka soo noqnoqda (fatigue failure). Casharka halkan laga bartay waa muhiimadda ay leedahay in la falanqeeyo sida qaab-dhismeedyadu uga falceliyaan culeysyada isbedbeddela, ma aha oo keliya kuwa taagan.

**2. Kiiska Fashilka: Burburka Jidka Lugta ee Hyatt Regency (1981)**
- **Dhacdada:** Laba jid oo lugayn ah oo is dul saarnaa oo ku yaallay hoolka hoteelka Hyatt Regency ee Kansas City ayaa burburay, waxaana ku dhintay 114 qof. Sababtu waxay ahayd isbeddel yar oo naqshadda lagu sameeyay xilligii dhismaha oo ku saabsanaa biraha (hanger rods) sitay jidadka.
- **Mabda'a Injineernimada:** Tani waa tusaale naxdin leh oo ku saabsan fashil ka dhashay **shear stress** iyo **bearing stress** oo xad-dhaaf ah oo ku yimid isku xirka. Naqshaddii asalka ahayd waxay isticmaaleysay hal bir oo dheer oo isku xireysay labada jidba, laakiin naqshadda la dhisay waxay isticmaashay laba bir oo kala go'an, taasoo labanlaabtay culeyska saaran lowska (nut) iyo alwaaxa (washer) ee birta sare. Culeyskani wuxuu dhaafiyay awoodda **shear strength** ee alwaaxa, taasoo keentay in lowsku uu ka duso, kaddibna uu burburku dhaco. Casharku waa sida ay muhiim u tahay in si faahfaahsan loo falanqeeyo isku xirka (connections) iyo sida culeysyadu ugu gudbaan, maxaa yeelay waa meelaha ugu nugul qaab-dhismeedka.

**3. Kiiska Guusha: Dhismaha Burj Khalifa**
- **Guusha:** Dhismaha ugu dheer adduunka, Burj Khalifa, wuxuu tusaale cajiib ah u yahay sida loo isticmaalo mabaadi'da Awoodda Walxaha si loo gaaro wax aan horay loo arag. Wuxuu adeegsadaa nidaam qaab-dhismeed "buttressed core".
- **Mabda'a Injineernimada:** Guushu waxay ku jirtaa isticmaalka xariifnimada leh ee **walxaha awoodda sare leh (high-strength materials)**. Waxaa loo isticmaalay shamiito la xoojiyey oo leh awood aad u sarreysa (ilaa 80 MPa) si ay u qaado **compressive stress**-ka weyn ee ka dhasha miisaankiisa. Sidoo kale, waxaa loo isticmaalay birta xoojinta (rebar) si ay u qaado **tensile stress**-ka ka dhasha xoogagga dabaysha. Naqshadda dhismaha ayaa si taxaddar leh u maareysa oo u qaybisa culeysyadan, iyadoo hubinaysa in *stress*-ka ku dhacaya qayb kasta uu ka hooseeyo awoodda walaxdaas. Waa cashar ku saabsan sida isku-darka walxaha saxda ah iyo naqshad caqli-gal ah ay u suurtagelin karto in la dhiso qaab-dhismeedyo waaweyn oo badbaado leh.`,
                    quiz: [
                        {
                            question: "Maxay ahayd sababta ugu weyn ee burburka Buundada Tacoma Narrows?",
                            options: ["Culeys baabuur oo xad-dhaaf ah", "Walax tayo liidata", "Gariirka dabaysha oo la mid noqday inta jeer ee dabiiciga ah ee buundada (resonance)", "Dhulgariir"],
                            correctAnswer: "Gariirka dabaysha oo la mid noqday inta jeer ee dabiiciga ah ee buundada (resonance)",
                            explanation: "Burburku wuxuu ka dhashay culeysyo isbedbeddela (dynamic loads) oo ka yimid dabaysha, taasoo keentay gariir xad-dhaaf ah, ma ahayn culeys taagan (static load) oo fashiliyay."
                        },
                        {
                            question: "Fashilkii Hyatt Regency, isbeddelka naqshadda wuxuu labanlaabay noocee stress ah oo saarnaa isku xirka sare?",
                            options: ["Tensile stress", "Compressive stress", "Shear and bearing stress", "Torsional stress"],
                            correctAnswer: "Shear and bearing stress",
                            explanation: "Isbeddelku wuxuu culeyska oo dhan saaray hal isku xir oo sare, taasoo keentay in lowska iyo alwaaxu ay u adkeysan waayaan shear stress-ka, taasoo keentay in ay duso."
                        },
                        {
                            question: "Si loo qaado culeyska weyn ee miisaankiisa, Burj Khalifa wuxuu si weyn ugu tiirsan yahay walax leh awood sare oo noocee ah?",
                            options: ["Awoodda jiidista (Tensile Strength)", "Awoodda cadaadiska (Compressive Strength)", "Awoodda leexinta (Flexural Strength)", "Awoodda daalka (Fatigue Strength)"],
                            correctAnswer: "Awoodda cadaadiska (Compressive Strength)",
                            explanation: "Shamiitada awoodda sare leh ayaa loo isticmaalaa inay qaado culeyska weyn ee cadaadiska ah ee ka dhasha miisaanka dhismaha oo dhan."
                        }
                    ]
                }),
            ]},
            { id: 'civil-y2-m2', title: 'Cabbirka Dhulka iyo Biyaha', lessons: [
                createCivilLesson('surveying', 'Surveying', { whatIsIt: "Sayniska iyo farshaxanka cabbirka saxda ah ee dusha dhulka si loo qorsheeyo mashaariicda." }),
                createCivilLesson('fluid-mechanics', 'Fluid Mechanics for Civil Engineers', { whatIsIt: "Barashada dhaqanka dareerayaasha, gaar ahaan biyaha, iyo sida ay ula falgalaan kaabayaasha." }),
            ]},
             { id: 'civil-y2-m3', title: 'Falanqaynta Qaab-dhismeedka Hordhaca ah', lessons: [
                createCivilLesson('struct-analysis-1', 'Structural Analysis I', { whatIsIt: "Falanqaynta qaab-dhismeedyada go'an (statically determinate structures) sida beams, trusses, iyo frames." }),
                createCivilLesson('materials-concrete', 'Civil Engineering Materials (Concrete)', { whatIsIt: "Barashada sifooyinka, naqshadaynta isku-darka, iyo tijaabinta shamiitada." }),
                createCivilLesson('materials-steel', 'Civil Engineering Materials (Steel)', { whatIsIt: "Barashada sifooyinka, noocyada, iyo isticmaalka birta ee dhismaha." }),
            ]},
            { id: 'civil-y2-m4', title: 'Xirfadaha Sawirka iyo Xisaabta', lessons: [
                createCivilLesson('autocad-2d-3d', 'AutoCAD (2D & 3D)', { whatIsIt: "Software aasaasi ah oo loo isticmaalo sawirka farsamada ee injineernimada madaniga." }),
                createCivilLesson('numerical-methods', 'Numerical Methods', { whatIsIt: "Isticmaalka hababka xisaabeed ee kombiyuutarka si loo xalliyo dhibaatooyinka injineernimada ee adag." }),
            ]},
        ]
    },
    {
        id: 'civil-year-3',
        name: 'SANADKA 3AAD: Heerka Takhasuska',
        description: 'Si qoto dheer u gal laamaha waaweyn ee injineernimada madaniga, sida wadooyinka, biyaha, iyo maareynta mashaariicda.',
        modules: [
            { id: 'civil-y3-m1', title: 'Injineernimada Wadooyinka & Gaadiidka', lessons: [
                createCivilLesson('highway-eng', 'Highway Engineering', { whatIsIt: "Naqshadaynta joomatari ee waddooyinka, oo ay ku jiraan qaloocyada toosan iyo kuwa jiifba." }),
                createCivilLesson('traffic-eng', 'Traffic Engineering', { whatIsIt: "Barashada iyo maareynta socodka gaadiidka si loo hagaajiyo badbaadada iyo hufnaanta." }),
                createCivilLesson('pavement-design', 'Pavement Design', { whatIsIt: "Naqshadaynta lakabyada dusha sare ee waddooyinka (flexible and rigid pavements) si ay ugu adkaystaan culeyska gaadiidka." }),
            ]},
            { id: 'civil-y3-m2', title: 'Injineernimada Biyaha & Deegaanka', lessons: [
                createCivilLesson('hydraulics-open-channel', 'Open-Channel Hydraulics', { whatIsIt: "Barashada dhaqanka biyaha ee kanaallada furan, sida webiyada iyo kanaallada waraabka." }),
                createCivilLesson('hydrology', 'Hydrology', { whatIsIt: "Barashada meertada biyaha, oo ay ku jiraan roobka, socodka dusha sare, iyo biyaha dhulka hoostiisa." }),
                createCivilLesson('water-supply', 'Water Supply & Wastewater Engineering', { whatIsIt: "Naqshadaynta nidaamyada biyaha la cabo iyo kuwa daaweynta biyaha wasakhda ah." }),
            ]},
            { id: 'civil-y3-m3', title: 'Injineernimada Dhulka & Aasaaska', lessons: [
                createCivilLesson('soil-mechanics', 'Soil Mechanics', { whatIsIt: "Barashada sifooyinka jir ahaaneed iyo farsamo ee ciidda si loo fahmo dhaqankeeda marka culeys la saaro." }),
                createCivilLesson('foundation-eng', 'Foundation Engineering', { whatIsIt: "Naqshadaynta aasaaska dhismayaasha si ay si badbaado leh ugu gudbiyaan culeyska ciidda." }),
            ]},
            { id: 'civil-y3-m4', title: 'Naqshadeynta Qaab-dhismeedka & Maareynta', lessons: [
                createCivilLesson('rc-design-1', 'Reinforced Concrete Design I', { whatIsIt: "Naqshadaynta walxaha aasaasiga ah ee shamiitada la xoojiyey sida beams, slabs, iyo columns." }),
                 createCivilLesson('steel-design-1', 'Steel Structure Design I', { whatIsIt: "Naqshadaynta walxaha birta ah ee isku xiran iyo kuwa cadaadis qaada." }),
                createCivilLesson('project-mgmt', 'Construction Project Management', { whatIsIt: "Barashada mabaadi'da maareynta mashaariicda dhismaha, oo ay ku jiraan qorsheynta, jadwalka, iyo xakamaynta kharashka." }),
            ]},
        ]
    },
     {
        id: 'civil-year-4',
        name: 'SANADKA 4AAD: Software-yada Sare & Mashruuca Qalin-jabinta',
        description: 'Ku dabaq aqoontaada mashaariicda dhabta ah, baro software-yada sare, oo dhammaystir mashruucaaga qalin-jabinta.',
        modules: [
            { id: 'civil-y4-m1', title: 'Software-ka Falanqaynta Qaab-dhismeedka', lessons: [
                createCivilLesson('sw-etabs', 'Structural Design with ETABS', { whatIsIt: "Isticmaalka ETABS si loo moodeeleeyo, loo falanqeeyo, loona naqshadeeyo dhismayaasha dhaadheer." }),
                createCivilLesson('sw-sap2000', 'Advanced Analysis with SAP2000', { whatIsIt: "Isticmaalka SAP2000 falanqaynta qaab-dhismeedyada adag sida buundooyinka iyo taangiyada." }),
                createCivilLesson('sw-safe', 'Foundation Design with SAFE', { whatIsIt: "Isticmaalka SAFE si loo naqshadeeyo aasaasyo kala duwan iyo sagxadaha shamiitada." }),
            ]},
            { id: 'civil-y4-m2', title: 'Software-yada Kaabayaasha & Qiyaasta', lessons: [
                createCivilLesson('sw-civil3d', 'Infrastructure Design with Civil 3D', { whatIsIt: "Isticmaalka Civil 3D naqshadaynta waddooyinka, goobaha, iyo nidaamyada bullaacadaha." }),
                createCivilLesson('quantity-surveying', 'Quantity Surveying & Estimation', { whatIsIt: "Xisaabinta tirada iyo qiimaha agabka, shaqada, iyo qalabka loo baahan yahay mashruuc dhismaha." }),
            ]},
             { id: 'civil-y4-m3', title: 'Xirfadaha Xirfadeed & Anshaxa', lessons: [
                createCivilLesson('skill-contracts', 'Contracts and Specifications', { whatIsIt: "Fahamka qandaraasyada dhismaha, qeexitaannada farsamo, iyo dukumeentiyada tartanka." }),
                createCivilLesson('skill-ethics-adv', 'Professional Ethics and Practice', { whatIsIt: "Daraasad qoto dheer oo ku saabsan anshaxa injineernimada, mas'uuliyadda sharciga, iyo doorka injineerka ee bulshada." }),
            ]},
            { id: 'civil-y4-m4', title: 'Mashruuca Qalin-jabinta', lessons: [
                createCivilLesson('final-project-proposal', 'Final Year Project - Proposal', { whatIsIt: "Diyaarinta soo jeedin cilmi-baaris ama naqshad oo faahfaahsan oo loogu talagalay mashruucaaga qalin-jabinta." }),
                createCivilLesson('final-project-implementation', 'Final Year Project - Implementation & Report', { whatIsIt: "Fulinta mashruucaaga, falanqaynta natiijooyinka, iyo qorista warbixinta farsamo ee kama dambaysta ah." }),
            ]},
        ]
    },
  ],
};