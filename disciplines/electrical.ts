
import type { Discipline, Lesson } from '../types';
import { ZapIcon } from '../components/Icons';

const createElecLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `elec-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=elec-${id}`,
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

export const electricalEngineeringDiscipline: Discipline = {
    id: 'electrical-engineering',
    name: 'Injineernimada Korontada',
    icon: ZapIcon,
    description: 'Daraasadda iyo ku dabaqida korontada, elektarooniga, iyo electromagnetism.',
    levels: [
      {
        id: 'elec-year-1',
        name: 'SANADKA 1AAD: Aasaaska Korontada',
        description: 'Baro sharciyada aasaasiga ah ee wareegyada DC iyo AC.',
        modules: [
          { 
              id: 'elec-y1-circuits', 
              title: 'Circuit Theory I', 
              lessons: [
                  createElecLesson('ohms-law', 'Sharciga Ohm, Voltage, & Current', { 
                      whatIsIt: `**Sharciga Ohm (Ohm's Law)** waa aasaaska koowaad ee injineernimada korontada. Wuxuu qeexayaa xiriirka tooska ah ee ka dhexeeya Saddexda Weyn:
1.  **Voltage (Danab - $V$):** Waa cadaadiska ama xoogga riixaya electrons-ka. Waxaa lagu cabbiraa Volts. Ka fakar sida cadaadiska biyaha ee tuubada.
2.  **Current (Qulqul - $I$):** Waa qulqulka dhabta ah ee electrons-ka. Waxaa lagu cabbiraa Amperes (Amps). Ka fakar sida xaddiga biyaha socda.
3.  **Resistance (Iska-caabin - $R$):** Waa diidmada walaxda ay u diidayso qulqulka. Waxaa lagu cabbiraa Ohms ($\Omega$). Ka fakar sida tuubo dhuuban ama xiran oo biyaha celinaysa.

Qaaciidada caanka ah waa:
$$V = I \cdot R$$

Tan macnaheedu waa: Si aad u kordhiso qulqulka (Current), waa inaad kordhisaa Danabka (Voltage) ama aad yaraysaa Iska-caabinta (Resistance).

**Electrical Power (Awoodda):**
Marka korontadu socoto, waxay qabataa shaqo (sida iftiin ama kulayl). Awooddaas waxaa lagu helaa:
$$P = V \cdot I$$
Haddii aan isticmaalno Sharciga Ohm, waxaan sidoo kale dhihi karnaa: $P = I^2 R$.`,

                      whyIsItImportant: `Fahmidda xiriirkan waa lama huraan.
*   **Badbaadada:** Haddii aad ogtahay iska-caabinta jirkaaga iyo danabka korontada, waxaad ogaan kartaa inta qulqul (Current) ah ee kugu dhacaysa haddii aad taabato fiilo qaawan. (0.1 Amp ayaa dili kara qofka).
*   **Naqshadaynta Qalabka:** Injineerku waa inuu xisaabiyaa Resistor-ka saxda ah si uu u ilaaliyo nalka LED-ka ah inuu gubto.
*   **Gudbinta Korontada:** Waxaan u isticmaalnaa Voltage sare (High Voltage) xadhkaha waaweyn si aan u yarayno Current-ka, taas oo iyaduna yaraynaysa lumista awoodda ($P_{lost} = I^2R$).`,

                      howItWorks: `**Atomic Level:**
Maaddada sida naxaasta (Copper) waxay leedahay electrons xor ah oo diyaar u ah inay dhaqaaqaan. Marka aan ku xirno Batariga, dhinaca Positive-ka ah wuxuu soo jiitaa electrons-ka (kuwaas oo ah Negative). Dhaqdhaqaaqaas wadajirka ah waa waxa aan u naqaano **Current**.
Iska-caabinta (Resistance) waxay timaadaa marka electrons-ku ay ku dhacaan atam-yada kale ee birta, taasoo dhalisa kulayl (Joule Heating).`,
                      
                      quiz: [{ question: "Haddii $V$ ay kordho iyadoo $R$ ay joogto tahay, maxaa ku dhaca $I$?", options: ["Way kordhaysaa", "Way yaraanaysaa", "Isma beddelayso", "Eber bay noqonaysaa"], correctAnswer: "Way kordhaysaa", explanation: "V iyo I waa Directly Proportional ($V=IR$)." }] 
                  }, 'F_vLWkkOofw'),
                  createElecLesson('kirchhoff', 'Shuruucda Kirchhoff (KCL & KVL)', { 
                      whatIsIt: `Halka Sharciga Ohm uu ka shaqeeyo hal qayb (component), **Shuruucda Kirchhoff** waxay xalliyaan shabakado waaweyn oo isku-dhafan.
Waxaa jira laba sharci oo waaweyn:
1.  **Kirchhoff's Current Law (KCL):**
    "Wadarta Current-ka soo gala gunti (node) waa inay la mid noqotaa wadarta Current-ka ka baxa."
    $$\sum I_{in} = \sum I_{out}$$
    *Mabda'a:* Conservation of Charge (Koorontadu ma lunto, meelna kama soo baxdo iyadoon meel kale ka iman).

2.  **Kirchhoff's Voltage Law (KVL):**
    "Wadarta Voltage-ka ee wareeg xiran (closed loop) waa inay noqotaa eber."
    $$\sum V = 0$$
    Tan macnaheedu waa: Tamarta batariga bixiyo waxaa wada isticmaala qaybaha wareegga ku jira (Resistors, etc.).

**Node & Mesh Analysis:**
Kuwani waa habab xisaabeed (Matrix algebra) oo la adeegsado KCL iyo KVL si loo xalliyo wareegyo leh boqolaal qaybood.`,

                      examples: `**Tusaale Dhab ah: Gurigaaga**
*   **KCL:** Barta ay korontadu ka soo gasho gurigaaga (Main Breaker) waa 'Node'. Korontada halkaas soo gasha waxay u qaybsantaa qolalka kala duwan. Wadarta korontada qolalka oo dhan waa inay la mid noqotaa tan soo gashay.
*   **KVL:** Haddii aad haysato silsilad nalal ah (Christmas lights in series), Voltage-ka guud ee 220V wuxuu u qaybsamayaa nalalka. Haddii hal nal uu isticmaalo Voltage badan, kuwa kale way daciifayaan.`
                  }, 'm4jzgqYefa8'),
                  createElecLesson('network-theorems', 'Network Theorems (Thevenin & Norton)', { whatIsIt: "Thevenin & Norton theorems.", whyIsItImportant: "Si loo fududeeyo wareegyada adag." }, 'MDETdJ6qZAk')
              ] 
          },
          // ... (Rest of electrical structure)
        ]
      },
      // ... (Other years)
       {
        id: 'elec-year-2',
        name: 'SANADKA 2AAD: Elektarooniga & Calaamadaha',
        description: 'U gudub qalabka elektarooniga ah sida transistors iyo falanqaynta calaamadaha.',
        modules: [
          { 
              id: 'elec-y2-electronics', 
              title: 'Analog Electronics', 
              lessons: [
                  createElecLesson('diodes', 'Semiconductor Diodes', { whatIsIt: "Qalabka u ogolaada korontada hal dhinac kaliya." }, 'JBTE4M55US4'),
                  createElecLesson('bjt', 'Bipolar Junction Transistors (BJT)', { whatIsIt: "Qalabka cod-weyneeyaha iyo furaha (switch).", whyIsItImportant: "Waa aasaaska qalabka casriga ah." }, '7ukDKVHpac4'),
                  createElecLesson('opamps', 'Operational Amplifiers', { whatIsIt: "Wareegyo koronto oo aad u awood badan." }, '7VFidTA5ThY')
              ] 
          },
          { 
              id: 'elec-y2-signals', 
              title: 'Signals & Systems', 
              lessons: [
                  createElecLesson('fourier', 'Fourier Series', { whatIsIt: "Kala dhigidda calaamadaha mawjadaha.", whyIsItImportant: "Falanqaynta isgaarsiinta." }, 'r6sGWTCMz2k'),
                  createElecLesson('laplace', 'Laplace Transform', { whatIsIt: "Xallinta isle'egyada differential-ka." }, 'ZGPtPkTft8g')
              ] 
          },
        ]
      },
      {
        id: 'elec-year-3',
        name: 'SANADKA 3AAD: Awoodda & Xakamaynta',
        description: 'Baro sida loo dhaliyo, loo gudbiyo korontada, iyo sida loo xakameeyo nidaamyada.',
        modules: [
          { 
              id: 'elec-y3-power', 
              title: 'Power Systems Analysis', 
              lessons: [
                  createElecLesson('power-gen', 'Dhalinta Korontada', { whatIsIt: "Sida korontada looga dhaliyo warshadaha." }, '20Vb6hlLQSg'),
                  createElecLesson('transmission', 'Gudbinta & Qaybinta', { whatIsIt: "Khadadka korontada sare (High Voltage)." }, 'pXy1J432rXU')
              ] 
          },
          { 
              id: 'elec-y3-control', 
              title: 'Control Systems', 
              lessons: [
                  createElecLesson('feedback', 'Feedback Control', { whatIsIt: "Nidaamyada is-hagaajiya.", examples: "Cruise control-ka baabuurka." }, 'yE75wKbe2l4'),
                  createElecLesson('pid', 'PID Controllers', { whatIsIt: "Nooca ugu caansan ee xakamaynta warshadaha." }, '4Y7zG48uHRo')
              ] 
          },
        ]
      },
      {
        id: 'elec-year-4',
        name: 'SANADKA 4AAD: Isgaarsiinta & Mashruuca',
        description: 'Takhasuska isgaarsiinta iyo mashruuca qalin-jebinta.',
        modules: [
          { 
              id: 'elec-y4-comms', 
              title: 'Communication Systems', 
              lessons: [
                  createElecLesson('modulation', 'AM & FM Modulation', { whatIsIt: "Sida codka loogu diro hawada." }, 'isBCirwkCms'),
                  createElecLesson('digital-comms', 'Digital Communications', { whatIsIt: "Gudbinta xogta internetka." }, '0-P4VjFq7s')
              ] 
          },
          { 
              id: 'elec-y4-project', 
              title: 'Final Year Project', 
              lessons: [
                  createElecLesson('capstone', 'Mashruuca Qalin-jebinta', { whatIsIt: "Naqshadaynta nidaam koronto oo dhamaystiran." })
              ] 
          },
        ]
      }
    ]
};
