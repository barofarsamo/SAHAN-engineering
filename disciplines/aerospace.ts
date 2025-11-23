
import type { Discipline, Lesson } from '../types';
import { RocketIcon } from '../components/Icons';

const createAeroLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `aero-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=aero-${id}`,
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

export const aerospaceEngineeringDiscipline: Discipline = {
    id: 'aerospace-engineering',
    name: 'Injineernimada Hawada Sare',
    icon: RocketIcon,
    description: 'Qaybta koowaad ee injineernimada ee ka shaqaysa horumarinta diyaaradaha iyo dayax-gacmeedyada.',
    levels: [
      {
        id: 'aero-year-1',
        name: 'SANADKA 1AAD: Aasaaska Duulimaadka',
        description: 'Baro taariikhda duulimaadka, jawiga dhulka, iyo fiisigiska aasaasiga ah.',
        modules: [
          { 
              id: 'aero-y1-intro', 
              title: 'Introduction to Flight', 
              lessons: [
                  createAeroLesson('atmosphere', 'Standard Atmosphere Model', { 
                      whatIsIt: `Si diyaarad loo naqshadeeyo, waa inaan marka hore fahamnaa badweynta aan ku dhex dabaalanayno: **Hawada (The Atmosphere)**.
Hawadu ma aha mid joogto ah. Cadaadiska ($P$), Heerkulka ($T$), iyo Cufnaanta ($\rho$) way isbeddelaan markii kor loo kaco.

**ISA (International Standard Atmosphere):**
Injineeradu waxay sameeyeen "Standard Model" si qof walba xisaabtiisu isku mid u noqoto.
*   Heerkulka badda: 15°C.
*   Cadaadiska badda: 101.325 kPa.
*   Heerka hoos u dhaca heerkulka (Lapse Rate): -6.5°C halkii kiiloomitir ee Troposphere-ka dhexdiisa.

Tani aad bay muhiim u tahay sababtoo ah matoorka diyaaradda iyo baalasheedu waxay ku xiran yihiin cufnaanta hawada. Hawada khafiifka ah (High Altitude), matoorku wuxuu helayaa ogsijiin yar, baalkuna wuxuu helayaa 'Lift' yar.`,
                      
                      howItWorks: `**Hydrostatic Equation:**
Waxay sharxaysaa isbeddelka cadaadiska:
$$dP = -\rho g dh$$
(Isbeddelka cadaadiska = Cufnaanta x Cuf-isjiidad x Isbeddelka dhererka).

Marka aan kor u kacno, culeyska hawada naga sarreysa ayaa yaraada, markaas cadaadiskuna wuu yaraadaa. Injineerada Aerospace-ku waa inay naqshadeeyaan qolka diyaaradda (Cabin Pressurization) si dadku u neefsan karaan marka la joogo 30,000 feet, halkaas oo cadaadisku aad u hooseeyo.`,

                      whyIsItImportant: `Fahamka Atmosphere-ka ayaa go'aamiya:
1.  **Dhererka Duulimaadka (Ceiling):** Ilaa intee ayay diyaaraddu kori kartaa?
2.  **Xawaaraha:** Hawada khafiifka ah waxay ogolaataa xawaare sare (Drag yar), laakiin waxay u baahan tahay matoor awood badan.
3.  **Aerodynamic Heating:** Marka xawaaraha aad u kordho (Supersonic), jajabinta hawadu waxay dhalisaa kulayl daran oo dhalaalin kara birta diyaaradda.`
                  }, '5ltjznN1sK4'),
                  createAeroLesson('forces', 'Four Forces of Flight', { 
                      whatIsIt: `Diyaarad kasta oo duulaysa waxay ku jirtaa dagaal u dhexeeya afar xoog oo waaweyn:
1.  **Lift (Kor-u-qaadis):** Xoogga ka yimaada baalasheeda oo la dagaalama cuf-isjiidadka. Wuxuu u shaqeeyaa kor.
2.  **Weight (Culeys):** Xoogga cuf-isjiidadka dhulka oo hoos u jiidaya diyaaradda ($W=mg$).
3.  **Thrust (Riixid):** Xoogga ka yimaada matoorka oo diyaaradda horay u riixaya.
4.  **Drag (Iska-caabin):** Xoogga hawada oo diyaaradda dib u celinaya (Air Resistance).

Si diyaaraddu u duusho si siman (Steady Level Flight):
$$Lift = Weight$$
$$Thrust = Drag$$`,
                      
                      howItWorks: `**Sidee Lift loo sameeyaa?**
Waxaa jira laba aragtiyood oo wada shaqeeya:
*   **Bernoulli's Principle:** Hawada dusha sare ee baalka maraysa way dheeraysaa (cadaadis hoose), tan hoos maraysana way gaabisaa (cadaadis sare). Farqiga cadaadiska ayaa diyaaradda kor u qaada.
*   **Newton's 3rd Law:** Baalku wuxuu hawada u leexiyaa hoos (Action). Hawadu waxay baalka u riixdaa kor (Reaction).

**Angle of Attack ($\alpha$):**
Waa xagasha u dhaxaysa baalka iyo hawada ku soo socota. Haddii $\alpha$ la kordhiyo, Lift wuu kordhayaa ilaa heer go'an (Stall point). Haddii laga badiyo, hawadu way ka go'aysaa baalka, diyaaradduna way soo dhacaysaa (Stall).`
                  }, 'Gg0TXNX9SwA')
              ] 
          },
        ]
      },
      // ... (Rest of Aerospace structure)
      {
        id: 'aero-year-2',
        name: 'SANADKA 2AAD: Aerodynamics',
        description: 'Faham sida hawadu u dhaqanto marka ay dul marayso walxaha xawaaraha ku socda.',
        modules: [
          { 
              id: 'aero-y2-aero', 
              title: 'Aerodynamics I', 
              lessons: [
                  createAeroLesson('airfoils', 'Airfoil Theory', { whatIsIt: "Qaabka baalka diyaaradda.", howItWorks: "Abuurista Lift-ka." }, 'QKQK6_9h0pI'),
                  createAeroLesson('incompressible', 'Incompressible Flow', { whatIsIt: "Dhaqdhaqaaqa hawada xawaaraha hooseeya." }, '6Z7Uk5y9g8w')
              ] 
          },
          { 
              id: 'aero-y2-struct', 
              title: 'Aerospace Structures', 
              lessons: [
                  createAeroLesson('thin-walled', 'Thin-Walled Structures', { whatIsIt: "Qaab-dhismeedka diyaaradaha fudud oo adag." }, 'b1c2d3e4f5g')
              ] 
          },
        ]
      },
      {
        id: 'aero-year-3',
        name: 'SANADKA 3AAD: Propulsion & Stability',
        description: 'Baro matoorada diyaaradaha iyo gantaalaha, iyo xasiloonida duulimaadka.',
        modules: [
          { 
              id: 'aero-y3-prop', 
              title: 'Propulsion Systems', 
              lessons: [
                  createAeroLesson('jets', 'Jet Engines (Turbojet/Turbofan)', { whatIsIt: "Matoorada gaaska." }, 'Kqiq4e6-R8E'),
                  createAeroLesson('rockets', 'Rocket Propulsion', { whatIsIt: "Matoorada gantaalaha." }, 'L0AMQ6k77cE')
              ] 
          },
          { 
              id: 'aero-y3-stability', 
              title: 'Flight Dynamics', 
              lessons: [
                  createAeroLesson('stability', 'Static & Dynamic Stability', { whatIsIt: "Awoodda diyaaraddu isku dheellitirto." }, 'x_qC8a12c8E')
              ] 
          },
        ]
      },
      {
        id: 'aero-year-4',
        name: 'SANADKA 4AAD: Space & Design',
        description: 'Naqshadaynta dayax-gacmeedyada iyo hawlgallada hawada sare.',
        modules: [
          { 
              id: 'aero-y4-space', 
              title: 'Orbital Mechanics', 
              lessons: [
                  createAeroLesson('kepler', 'Kepler\'s Laws', { whatIsIt: "Dhaqdhaqaaqa meerayaasha." }, '5a6b7c8d9e0'),
                  createAeroLesson('maneuvers', 'Orbital Maneuvers', { whatIsIt: "Beddelka wadada dayax-gacmeedka (Hohmann Transfer)." }, 'f1g2h3i4j5k')
              ] 
          },
          { 
              id: 'aero-y4-design', 
              title: 'Aircraft Design Project', 
              lessons: [
                  createAeroLesson('design-cycle', 'Conceptual Design', { whatIsIt: "Tallaabooyinka naqshadaynta diyaarad cusub." })
              ] 
          },
        ]
      }
    ]
};
