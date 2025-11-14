
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

const algebraContent = {
    whatIsIt: "Algebra waa laan ka mid ah xisaabta oo ka shaqaysa calaamadaha (sida x iyo y) iyo sharciyada lagu maareeyo calaamadahaas. Waa luqadda loo isticmaalo in lagu qeexo xiriirka ka dhexeeya tirooyinka aan la garanayn.",
    whyIsItImportant: "Injineernimada madaniga, Algebra waa aasaaska falanqayn kasta. Waxay noo oggolaanaysaa inaan dhibaatooyinka adduunka dhabta ah (sida xoogagga saaran buundo) u beddelno isle'egyo la xallin karo si aan u helno jawaabo sax ah oo aan ugu naqshadeyno si badbaado leh.",
    mainParts: "Qaybaha ugu waaweyn waa: **Doorsoomayaasha (Variables)** sida x, y; **Joogtayaasha (Constants)** sida 2, 5; **Hawlgallada (Operations)** sida isku-darka, kala-goynta; iyo **Isle'egyada (Equations)** oo ah odhaahyo sheegaya in laba shay ay siman yihiin.",
    howItWorks: "Waxay u shaqeysaa iyadoo la dejinayo isle'eg matalaya xaalad jir ahaaneed. Tusaale ahaan, haddii wadarta xoogaggu ay eber yihiin (ΣF=0), waxaan u isticmaali karnaa aljebrada si aan u xallino xoog aan la garanayn oo ku jira qaab-dhismeedka.",
    prerequisites: "Si loo fahmo aljebrada, waxaa loo baahan yahay faham adag oo ku saabsan xisaabta aasaasiga ah (isku-darka, kala-goynta, isku-dhufashada, iyo isku-qaybinta).",
    examples: "Xisaabinta inta shamiito ah ee loo baahan yahay mashruuc, go'aaminta culeyska saaran tiirarka dhismaha, ama helitaanka leexashada waddo cusub oo la dhisayo.",
    challenges: "Caqabada ugu weyn waa in si sax ah loogu tarjumo dhibaatada jir ahaaneed ee adduunka dhabta ah qaab isle'eg xisaabeed. Hal qalad oo yar ayaa horseedi kara natiijooyin gebi ahaanba khaldan.",
    history: "Asalka aljebrada waxaa loo celin karaa Baabiliyooniyihii hore, laakiin waxaa si weyn u horumariyay xisaabyahankii Faarisiga ahaa, Al-Khwarizmi, qarnigii 9aad.",
    principles: "Mabda'a aasaasiga ah waa in la ilaaliyo dheellitirka isle'egta. Wax kasta oo aad ku samayso dhinac ka mid ah calaamadda siman, waa inaad ku samaysaa dhinaca kale.",
    skills: "Xallinta dhibaatooyinka, fikirka macquulka ah, iyo awoodda lagu soo saaro macluumaadka muhiimka ah.",
    comparison: "Haddii xisaabta aasaasiga ah ay tahay isticmaalka tirooyinka, aljebradu waa isticmaalka sharciyada si loo maareeyo tirooyinkaas, xitaa marka aan la garanayn.",
    quiz: [
        { question: 'Haddii 3x - 7 = 11, waa maxay qiimaha x?', options: ['3', '6', '9', '18'], correctAnswer: '6', explanation: '3x = 11 + 7 => 3x = 18 => x = 18 / 3 => x = 6.' },
        { question: 'Waa maxay doorsoome (variable)?', options: ['Nambar go\'an', 'Calaamad matasha qiime aan la garanayn', 'Jawaabta isle\'egta', 'Hawlgal xisaabeed'], correctAnswer: 'Calaamad matasha qiime aan la garanayn', explanation: 'Doorsoomayaasha sida "x" waxay noo oggolaanayaan inaan la shaqayno qiyam aan weli la aqoon.' },
    ]
};

export const civilEngineeringDiscipline: Discipline = {
  id: 'civil-engineering',
  name: 'Injineernimada Madaniga',
  icon: BuildingIcon,
  description: 'Naqshadee, dhis, oo dayactir kaabayaasha aasaasiga ah ee bulshada casriga ah.',
  levels: [
    {
      id: 'civil-level-1',
      name: '1: AASAASKA (Foundation Level)',
      description: 'Baro xisaabta, sayniska, iyo aqoonta aasaasiga ah ee injineernimada oo saldhig u ah dhammaan qaybaha kale.',
      modules: [
        {
          id: 'civil-1-1',
          title: '1.1. Xisaab & Saynis',
          lessons: [
            createCivilLesson('algebra', 'Algebra', algebraContent),
            createCivilLesson('calculus', 'Calculus', { whatIsIt: "Calculus waa barashada isbeddelka joogtada ah." }),
            createCivilLesson('statistics', 'Statistics', { whatIsIt: "Statistics waa sayniska ururinta, falanqaynta, iyo tarjumaadda xogta." }),
            createCivilLesson('physics', 'Physics', { whatIsIt: "Physics waa barashada walaxda, tamarta, iyo isdhexgalkooda." }),
            createCivilLesson('chemistry', 'Chemistry', { whatIsIt: "Chemistry waa barashada walxaha iyo sifooyinkooda." }),
          ],
        },
        {
          id: 'civil-1-2',
          title: '1.2. Aqoonta injineernimada aasaaska u ah',
          lessons: [
            createCivilLesson('intro-eng', 'Introduction to Engineering', { whatIsIt: "Hordhac guud oo ku saabsan mihnadda injineernimada." }),
            createCivilLesson('eng-drawing', 'Engineering Drawing', { whatIsIt: "Barashada sida loo akhriyo loona abuuro sawirro farsamo." }),
            createCivilLesson('computer-skills', 'Computer Skills', { whatIsIt: "Xirfadaha aasaasiga ah ee kombiyuutarka ee injineer kasta u baahan yahay." }),
          ],
        },
      ],
    },
    {
        id: 'civil-level-2',
        name: '2: HEERKA HORMARINTA AASAASKA (Pre-professional Level)',
        description: 'Baro fikradaha iyo qalabka aasaasiga u ah laamaha kala duwan ee injineernimada madaniga.',
        modules: [
            {
                id: 'civil-2-1',
                title: '2.1. Qalabka iyo Fikradaha Injineernimada',
                lessons: [
                    createCivilLesson('eng-mechanics', 'Engineering Mechanics', { whatIsIt: "Barashada saameynta xoogaggu ku leeyihiin walxaha." }),
                    createCivilLesson('strength-materials', 'Strength of Materials', { whatIsIt: "Fahamka sida walxuhu uga falceliyaan culeysyada." }),
                    createCivilLesson('surveying', 'Surveying', { whatIsIt: "Sayniska iyo farshaxanka cabbirka saxda ah ee dusha dhulka." }),
                    createCivilLesson('fluid-mechanics', 'Fluid Mechanics', { whatIsIt: "Barashada dhaqanka dareerayaasha (biyaha, hawada)." }),
                    createCivilLesson('eng-geology', 'Engineering Geology', { whatIsIt: "Ku dabaqida aqoonta juqraafiga dhibaatooyinka injineernimada." }),
                ]
            },
            {
                id: 'civil-2-2',
                title: '2.2. Software-yada Aasaasiga ah',
                lessons: [
                    createCivilLesson('autocad-2d-3d', 'AutoCAD (2D & 3D)', { whatIsIt: "Software aasaasi ah oo loo isticmaalo sawirka farsamada." }),
                    createCivilLesson('gis-basics', 'GIS Basics (optional)', { whatIsIt: "Hordhac ku saabsan Nidaamyada Macluumaadka Juqraafiga." }),
                ]
            }
        ]
    },
    {
        id: 'civil-level-3',
        name: '3: HEERKA TAKHASSUSKA (Professional Level)',
        description: 'Si qoto dheer u gal laamaha waaweyn ee injineernimada madaniga, laga bilaabo dhismayaasha ilaa maareynta mashaariicda.',
        modules: [
            { id: 'civil-3-1', title: '3.1. Dhismayaasha (Structural Engineering)', lessons: [
                createCivilLesson('struct-analysis', 'Structural Analysis I & II', { whatIsIt: "Falanqaynta sida xoogaggu ugu dhex safraan qaab-dhismeedka." }),
                createCivilLesson('rc-design', 'Reinforced Concrete Design', { whatIsIt: "Naqshadaynta walxaha shamiitada la xoojiyey." }),
                createCivilLesson('steel-design', 'Steel Structure Design', { whatIsIt: "Naqshadaynta dhismayaasha birta ah." }),
                createCivilLesson('foundation-eng', 'Foundation Engineering', { whatIsIt: "Naqshadaynta aasaaska dhismayaasha." }),
                createCivilLesson('struct-dynamics', 'Structural Dynamics (optional)', { whatIsIt: "Barashada saameynta culeysyada dhaqaaqa (sida dhulgariirka)." }),
            ]},
            { id: 'civil-3-2', title: '3.2. Wadooyinka & Gaadiidka (Transportation Engineering)', lessons: [
                createCivilLesson('highway-eng', 'Highway Engineering', { whatIsIt: "Naqshadaynta iyo dhismaha waddooyinka waaweyn." }),
                createCivilLesson('traffic-eng', 'Traffic Engineering', { whatIsIt: "Barashada iyo maareynta socodka gaadiidka." }),
                createCivilLesson('pavement-design', 'Pavement Design', { whatIsIt: "Naqshadaynta lakabyada dusha sare ee waddooyinka." }),
                createCivilLesson('geometric-design', 'Geometric Design of Roads', { whatIsIt: "Naqshadaynta joometeriga waddooyinka si badbaado leh." }),
            ]},
            { id: 'civil-3-3', title: '3.3. Biyaha & Deegaanka (Water & Environmental Engineering)', lessons: [
                createCivilLesson('hydraulics', 'Hydraulics', { whatIsIt: "Barashada dhaqanka biyaha ee tuubooyinka iyo kanaallada." }),
                createCivilLesson('hydrology', 'Hydrology', { whatIsIt: "Barashada dhaqdhaqaaqa iyo qaybinta biyaha dhulka." }),
                createCivilLesson('water-supply', 'Water Supply Engineering', { whatIsIt: "Naqshadaynta nidaamyada biyaha la cabo." }),
                createCivilLesson('wastewater-eng', 'Wastewater Engineering', { whatIsIt: "Naqshadaynta nidaamyada daaweynta biyaha wasakhda ah." }),
                createCivilLesson('eia', 'Environmental Impact Assessment (EIA)', { whatIsIt: "Qiimaynta saameynta mashruuc ku yeelan karo deegaanka." }),
            ]},
            { id: 'civil-3-4', title: '3.4. Dhulka & Aasaaska (Geotechnical Engineering)', lessons: [
                createCivilLesson('soil-mechanics', 'Soil Mechanics', { whatIsIt: "Barashada sifooyinka jir ahaaneed ee ciidda." }),
                createCivilLesson('slope-stability', 'Slope Stability', { whatIsIt: "Falanqaynta xasiloonida jiirarka dabiiciga ah iyo kuwa la sameeyay." }),
                createCivilLesson('earth-retaining', 'Earth Retaining Structures', { whatIsIt: "Naqshadaynta darbiyada dhulka celiya." }),
                createCivilLesson('ground-improvement', 'Ground Improvement Techniques', { whatIsIt: "Hababka lagu wanaajiyo awoodda ciidda." }),
            ]},
            { id: 'civil-3-5', title: '3.5. Qorsheynta & Maareynta Mashaariicda (Construction Management)', lessons: [
                createCivilLesson('const-planning', 'Construction Planning', { whatIsIt: "Qorshaynta hawlaha dhismaha." }),
                createCivilLesson('quantity-surveying', 'Quantity Surveying', { whatIsIt: "Xisaabinta tirada iyo qiimaha agabka dhismaha." }),
                createCivilLesson('project-mgmt', 'Project Management', { whatIsIt: "Maareynta mashaariicda si loo gaaro hadafyada." }),
                createCivilLesson('contracts-specs', 'Contracts & Specifications', { whatIsIt: "Fahamka heshiisyada iyo qeexitaannada farsamo." }),
                createCivilLesson('safety-mgmt', 'Safety Management (HSE)', { whatIsIt: "Maareynta badbaadada goobta dhismaha." }),
            ]},
            { id: 'civil-3-6', title: '3.6. Qalabka Dhismaha & Habka Dhismaha', lessons: [
                createCivilLesson('const-materials', 'Construction Materials', { whatIsIt: "Barashada sifooyinka agabka dhismaha." }),
                createCivilLesson('const-methods', 'Construction Methods', { whatIsIt: "Fahamka hababka kala duwan ee dhismaha." }),
            ]},
        ]
    },
    {
        id: 'civil-level-4',
        name: '4: SOFTWARE-YADA QOFKA CIVIL-KA LAGA RABO',
        description: 'Baro software-yada muhiimka ah ee loo isticmaalo falanqaynta, naqshadaynta, iyo maareynta mashaariicda madaniga ah.',
        modules: [
            { id: 'civil-4-1', title: '4.1. Structural Software', lessons: [
                createCivilLesson('sw-etabs', 'ETABS', { whatIsIt: "Software awood badan oo loo isticmaalo falanqaynta iyo naqshadaynta dhismayaasha." }),
                createCivilLesson('sw-staad', 'STAAD Pro', { whatIsIt: "Software kale oo caan ah oo loogu talagalay falanqaynta qaab-dhismeedka." }),
                createCivilLesson('sw-sap2000', 'SAP2000', { whatIsIt: "Software ujeedo guud leh oo loogu talagalay qaab-dhismeed kasta." }),
                createCivilLesson('sw-safe', 'SAFE', { whatIsIt: "Software ku takhasusay naqshadaynta aasaaska iyo sagxadaha." }),
            ]},
            { id: 'civil-4-2', title: '4.2. Wadooyinka', lessons: [
                createCivilLesson('sw-civil3d', 'Civil 3D', { whatIsIt: "Software-ka ugu muhiimsan ee naqshadaynta kaabayaasha madaniga ah." }),
                createCivilLesson('sw-infraworks', 'InfraWorks', { whatIsIt: "Software loogu talagalay qorsheynta iyo naqshadaynta hordhaca ah." }),
            ]},
            { id: 'civil-4-3', title: '4.3. Biyaha', lessons: [
                createCivilLesson('sw-watercad', 'WaterCAD / SewerCAD', { whatIsIt: "Software loogu talagalay moodeelaynta nidaamyada biyaha." }),
                createCivilLesson('sw-epanet', 'EPANET', { whatIsIt: "Software bilaash ah oo loogu talagalay falanqaynta shabakadaha biyaha." }),
                createCivilLesson('sw-hec-ras', 'HEC-RAS & HEC-HMS', { whatIsIt: "Software loogu talagalay moodeelaynta webiyada iyo fatahaadaha." }),
            ]},
            { id: 'civil-4-4', title: '4.4. Qorshaynta & Maareynta', lessons: [
                createCivilLesson('sw-primavera', 'Primavera P6', { whatIsIt: "Software heer sare ah oo loogu talagalay maareynta mashaariicda waaweyn." }),
                createCivilLesson('sw-msproject', 'MS Project', { whatIsIt: "Software caan ah oo loogu talagalay qorsheynta iyo la socodka mashaariicda." }),
                createCivilLesson('sw-excel', 'Excel advanced', { whatIsIt: "Isticmaalka sare ee Excel ee falanqaynta iyo xakameynta kharashka." }),
            ]},
        ]
    },
    {
        id: 'civil-level-5',
        name: '5: WAAYA-ARAGNIMADA (Practical Experience)',
        description: 'Faham muhiimadda waayo-aragnimada gacanta iyo tan shaybaarka si aad aqoontaada ugu beddesho xirfad.',
        modules: [
            { id: 'civil-5-1', title: '5.1. Shaqo Gacan-ku-Samays (Field Work / Internship)', lessons: [
                createCivilLesson('exp-site-supervision', 'Site supervision', { whatIsIt: "Kormeerka hawlaha dhismaha ee goobta." }),
                createCivilLesson('exp-reading-drawings', 'Reading Drawings', { whatIsIt: "Barashada sida loo akhriyo sawirrada dhismaha." }),
                createCivilLesson('exp-concrete-works', 'Concrete works', { whatIsIt: "La socodka shaqooyinka shamiitada." }),
                createCivilLesson('exp-steel-fixing', 'Steel fixing & formwork', { whatIsIt: "Kormeerka shaqooyinka biraha iyo alwaaxyada." }),
                createCivilLesson('exp-surveying-practicals', 'Surveying practicals', { whatIsIt: "Ku celcelinta shaqooyinka cabbirka dhulka." }),
            ]},
            { id: 'civil-5-2', title: '5.2. Laboratory Experience', lessons: [
                createCivilLesson('exp-soil-tests', 'Soil tests', { whatIsIt: "Samaynta tijaabooyinka aasaasiga ah ee ciidda." }),
                createCivilLesson('exp-concrete-tests', 'Concrete tests', { whatIsIt: "Tijaabinta xoogga iyo sifooyinka shamiitada." }),
                createCivilLesson('exp-asphalt-tests', 'Asphalt tests', { whatIsIt: "Tijaabinta sifooyinka daamurka." }),
            ]},
        ]
    },
    {
        id: 'civil-level-6',
        name: '6: XIRFADAHA SOO KORDHA (Professional Skills)',
        description: 'Horumari xirfadaha jilicsan ee muhiimka u ah guusha injineer kasta, sida isgaarsiinta iyo xallinta dhibaatooyinka.',
        modules: [
            { id: 'civil-6-1', title: '6.1. Xirfadaha Xirfadeed', lessons: [
                createCivilLesson('skill-report-writing', 'Report Writing', { whatIsIt: "Qorista warbixinno farsamo oo cad oo sax ah." }),
                createCivilLesson('skill-communication', 'Communication Skills', { whatIsIt: "Xirfadaha isgaarsiinta ee waxtarka leh." }),
                createCivilLesson('skill-leadership', 'Leadership & teamwork', { whatIsIt: "Hoggaaminta iyo la shaqaynta kooxaha." }),
                createCivilLesson('skill-problem-solving', 'Problem solving', { whatIsIt: "Hababka xallinta dhibaatooyinka injineernimada." }),
                createCivilLesson('skill-ethics', 'Ethics of engineering', { whatIsIt: "Anshaxa iyo mas'uuliyadda mihnadda." }),
            ]},
        ]
    },
    {
        id: 'civil-level-7',
        name: '7: TAKHASSUS UGU DAMBEEYA (Optional After Graduation)',
        description: 'Sahami waddooyinka kala duwan ee takhasuska aad mari karto ka dib markaad dhammayso waxbarashadaada aasaasiga ah.',
        modules: [
            { id: 'civil-7-1', title: '7.1. Waddooyinka Takhasuska', lessons: [
                createCivilLesson('spec-structural', 'Structural Engineer', { whatIsIt: "Ku takhasusidda naqshadaynta qaab-dhismeedka." }),
                createCivilLesson('spec-geotechnical', 'Geotechnical Engineer', { whatIsIt: "Ku takhasusidda dhulka iyo aasaaska." }),
                createCivilLesson('spec-transportation', 'Transportation Engineer', { whatIsIt: "Ku takhasusidda waddooyinka iyo gaadiidka." }),
                createCivilLesson('spec-water', 'Water Resources Engineer', { whatIsIt: "Ku takhasusidda kheyraadka biyaha." }),
                createCivilLesson('spec-construction', 'Construction Manager', { whatIsIt: "Ku takhasusidda maareynta dhismaha." }),
                createCivilLesson('spec-quantity', 'Quantity Surveyor', { whatIsIt: "Ku takhasusidda qiimeynta kharashka." }),
                createCivilLesson('spec-environmental', 'Environmental Engineer', { whatIsIt: "Ku takhasusidda ilaalinta deegaanka." }),
            ]},
        ]
    },
  ],
};