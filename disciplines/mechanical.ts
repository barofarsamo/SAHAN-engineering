
import type { Discipline, Lesson } from '../types';
import { GearIcon } from '../components/Icons';

const createMechLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `mech-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=mech-${id}`,
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

export const mechanicalEngineeringDiscipline: Discipline = {
    id: 'mechanical-engineering',
    name: 'Injineernimada Makaanikada',
    icon: GearIcon,
    description: 'Ku dabaq mabaadi\'da fiisigiska iyo sayniska walxaha naqshadaynta iyo falanqaynta nidaamyada makaanikada.',
    levels: [
      {
        id: 'mech-year-1',
        name: 'SANADKA 1AAD: Aasaaska Makaanikada',
        description: 'Baro xoogagga, dhaqdhaqaaqa, iyo sawirka farsamada.',
        modules: [
          { 
              id: 'mech-y1-statics', 
              title: 'Engineering Mechanics: Statics', 
              lessons: [
                  createMechLesson('vectors', 'Force Vectors & Equilibrium', { 
                      whatIsIt: `**Engineering Statics** waa cilmiga barashada walxaha aan dhaqaaqin (ama ku socda xawaare go'an). Nuxurka casharkani waa **Force Vector**.
Xooggu (Force) ma aha kaliya tiro (Magnitude, sida 50 Newton), ee wuxuu leeyahay jiho (Direction) iyo bar uu ka shaqeynayo (Point of application).

**Vector Analysis:**
Si aan u fahamno xoogagga, waxaan u kala jabinaa qaybaha $X$, $Y$, iyo $Z$ (Components).
$$F = F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}$$
Tani waxay noo ogolaaneysaa inaan isku darno xoogag badan oo jihooyin kala duwan ka imaanaya annagoo isticmaalayna xisaab fudud.

**Free Body Diagrams (FBD):**
Waa aaladda ugu muhiimsan ee injineerka. Waa sawir muujinaya walax go'doon ah iyo dhammaan xoogagga dibadda ee saaran (culeyska, xadhkaha, tiirarka). Haddii aad khalad ku samayso FBD, dhammaan xisaabtaada way khaldamaysaa.`,
                      
                      whyIsItImportant: `Dhisme kasta, buundo kasta, iyo mashiin kasta waa inuu ahaadaa mid "Static Equilibrium" ku jira.
Mabda'a aasaasiga ah:
$$\sum F = 0$$
$$\sum M = 0$$
Haddii wadarta xoogaggu aysan eber ahayn, walaxdu way dhaqaaqaysaa (taas oo macnaheedu yahay buundada oo dumaysa ama dhismaha oo dhacaya). Statics waa tallaabada ugu horreysa ee lagu xisaabiyo culeyska ay tahay in tiirarku qaadaan.`,

                      examples: `**Tusaale: Laambad Jidka (Traffic Light):**
Ka soo qaad laambad miisaankeedu yahay 50kg oo ay hayso laba xarig (Cable A iyo Cable B). Xarig A wuxuu sameynayaa xagal 30°, Xarig B na xagal 45°.
Injineerku wuxuu isticmaalayaa Statics si uu u ogaado Tension-ka ku jira xarig kasta:
1.  Iska dhig Laambadda bar (Particle).
2.  Sawir culeyska hoos u dhacaya ($W = mg$).
3.  Sawir Tension-ka xadhkaha.
4.  Jebi vector-rada ($T_x = T\cos\theta$, $T_y = T\sin\theta$).
5.  Dhig $\sum F_x = 0$ iyo $\sum F_y = 0$ si aad u hesho jawaabta.`
                  }, 'w5C_lro_V9Q'),
                  createMechLesson('equilibrium', 'Equilibrium of Particles', { whatIsIt: "Marka wadarta xoogagga ay eber tahay." }, 'Py8254yWfT0')
              ] 
          },
          { 
              id: 'mech-y1-thermo', 
              title: 'Thermodynamics I', 
              lessons: [
                  createMechLesson('thermo-laws', 'Shuruucda Thermodynamics & Entropy', { 
                      whatIsIt: `**Thermodynamics** waa barashada tamarta, kulaylka, iyo shaqada. Waa cilmiga wada matoorada baabuurta, qaboojiyayaasha, iyo gantaalaha.

**1. Sharciga Koowaad (Conservation of Energy):**
"Tamarta lama abuuri karo, lamana burburin karo, kaliya way isku beddeshaa."
$$Q - W = \Delta U$$
(Kulaylka la helay - Shaqada la qabtay = Isbeddelka Tamarta Gudaha).

**2. Sharciga Labaad (Entropy):**
"Kulaylku waligiis si dabiici ah ugama gudbo meel qabow oo u aado meel kulul haddii aan shaqo la qaban."
Tani waxay soo kordhinaysaa fikradda **Entropy** (Qasnaan/Disorder). Entropy-ga koonku mar walba wuu kordhayaa. Tani waxay xaddidaysaa waxtarka (Efficiency) mashiinnada. Ma samayn kartid mashiin 100% waxtar leh sababtoo ah Sharciga 2aad.`,

                      howItWorks: `Matoorka baabuurka (Internal Combustion Engine) wuxuu ku shaqeeyaa wareegga Thermodynamics (Otto Cycle):
1.  **Intake:** Hawada iyo shidaalka ayaa la nuugaa.
2.  **Compression:** Waa la cadaadiyaa (Temperature & Pressure way kordhaan).
3.  **Combustion:** Waa la guba (Power stroke). Tamarta kiimikada waxay noqotaa Tamar farsamo (Work).
4.  **Exhaust:** Qiiqa ayaa la saaraa (Kulayl lumay - Heat Rejection).`,

                      whyIsItImportant: `Haddii aadan aqoon Thermodynamics, ma naqshadayn kartid mashiin waxtar leh. Injineerada waxay isticmaalaan cilmigan si ay u kordhiyaan masaafada baabuurku ku gooyo halkii litir, iyo si ay u qaboojiyaan kombiyuutarada iyo xarumaha xogta.`
                  }, '8N1BxHg9Ov8'),
                  createMechLesson('cycles', 'Power Cycles (Otto, Diesel, Rankine)', { whatIsIt: "Otto, Diesel, iyo Rankine cycles." }, 'hJm8sC5fGk8')
              ] 
          },
        ]
      },
      // ... (Other years)
      {
        id: 'mech-year-2',
        name: 'SANADKA 2AAD: Dhaqdhaqaaqa & Walxaha',
        description: 'Faham sida walxuhu u dhaqaaqaan iyo sida ay u jabaan.',
        modules: [
          { 
              id: 'mech-y2-dynamics', 
              title: 'Dynamics', 
              lessons: [
                  createMechLesson('kinematics', 'Kinematics of Particles', { whatIsIt: "Dhaqdhaqaaqa walxaha.", whyIsItImportant: "Naqshadaynta mashiinnada dhaqaaqa." }, 'x_qC8a12c8E'),
                  createMechLesson('kinetics', 'Work & Energy', { whatIsIt: "Xiriirka xoogga iyo tamarta." }, '2WS1sG9fhOk')
              ] 
          },
          { 
              id: 'mech-y2-materials', 
              title: 'Mechanics of Materials', 
              lessons: [
                  createMechLesson('stress-strain', 'Stress & Strain Analysis', { whatIsIt: "Cadaadiska iyo kala-bixitaanka walxaha." }, 'hQ_t1xO-3u0'),
                  createMechLesson('failure', 'Failure Theories', { whatIsIt: "Sida loo saadaaliyo burburka." }, 'uN4rD6_w7sA')
              ] 
          },
        ]
      },
      {
        id: 'mech-year-3',
        name: 'SANADKA 3AAD: Dareerayaasha & Naqshadaynta',
        description: 'Baro sida dareeruhu u dhaqmo iyo sida loo naqshadeeyo qaybaha mashiinka.',
        modules: [
          { 
              id: 'mech-y3-fluids', 
              title: 'Fluid Mechanics', 
              lessons: [
                  createMechLesson('bernoulli', 'Bernoulli\'s Equation', { whatIsIt: "Xiriirka cadaadiska iyo xawaaraha dareeraha." }, 'DW4rItB20h4'),
                  createMechLesson('pipe-flow', 'Flow in Pipes', { whatIsIt: "Xisaabinta lumista cadaadiska tuubooyinka." }, '1f2e3d4c5b6')
              ] 
          },
          { 
              id: 'mech-y3-design', 
              title: 'Machine Design', 
              lessons: [
                  createMechLesson('gears', 'Gear Design', { whatIsIt: "Naqshadaynta ilkaha mashiinka." }, 'odpsL3_g1Ew'),
                  createMechLesson('bearings', 'Bearings & Lubrication', { whatIsIt: "Yaraynta is-jiidjiidka." }, '6b7c8d9e0f1')
              ] 
          },
        ]
      },
      {
        id: 'mech-year-4',
        name: 'SANADKA 4AAD: Kuleylka & Wax-soo-saarka',
        description: 'Takhasuska wareejinta kuleylka iyo hababka wax-soo-saarka casriga ah.',
        modules: [
          { 
              id: 'mech-y4-heat', 
              title: 'Heat Transfer', 
              lessons: [
                  createMechLesson('conduction', 'Conduction, Convection, Radiation', { whatIsIt: "Saddexda hab ee kuleylku u gudbo." }, 'SNnd0f3dDcw'),
                  createMechLesson('exchangers', 'Heat Exchangers', { whatIsIt: "Naqshadaynta qaboojiyayaasha." }, 'Oa-aB8hV7uM')
              ] 
          },
          { 
              id: 'mech-y4-manuf', 
              title: 'Manufacturing Processes', 
              lessons: [
                  createMechLesson('cnc', 'CNC Machining', { whatIsIt: "Mashiinnada kombiyuutarku wado." }, 'j4l1m2n3o4p'),
                  createMechLesson('3d-print', 'Additive Manufacturing (3D Printing)', { whatIsIt: "Dhisidda walxaha lakab-lakab." }, 'VxW5-Z6y_wA')
              ] 
          },
        ]
      }
    ]
};
