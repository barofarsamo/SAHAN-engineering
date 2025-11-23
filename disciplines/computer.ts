
import type { Discipline, Lesson } from '../types';
import { ChipIcon } from '../components/Icons';

const createCompLesson = (id: string, title: string, content: any, videoId?: string): Lesson => ({
    id: `comp-${id}`,
    title,
    duration: "45 mins",
    imageUrl: `https://picsum.photos/800/400?random=comp-${id}`,
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

export const computerEngineeringDiscipline: Discipline = {
    id: 'computer-engineering',
    name: 'Injineernimada Kombiyuutarka',
    icon: ChipIcon,
    description: 'Waxay isku darsataa sayniska kombiyuutarka iyo injineernimada elektarooniga si loo horumariyo qalabka iyo software-ka kombiyuutarka.',
    levels: [
      {
        id: 'comp-year-1',
        name: 'SANADKA 1AAD: Aasaaska & Barnaamijinta',
        description: 'Baro luqadaha barnaamijinta, xisaabta algorithms-ka, iyo fiisigiska korontada.',
        modules: [
          { 
              id: 'comp-y1-prog', 
              title: 'Programming Fundamentals (Python)', 
              lessons: [
                  createCompLesson('py-intro', 'Hordhaca Python & Programming Logic', { 
                      whatIsIt: `**Python** waa luqad barnaamijineed (programming language) heer sare ah (high-level), fasiraad leh (interpreted), oo ujeedooyin badan leh (general-purpose).

Laakiin maxaa dhab ahaan looga jeedaa erayadaas?
1.  **High-Level:** Waxaad ku qortaa luqad u dhow Ingiriiska (sida \`print\`, \`if\`, \`while\`), kombiyuutarka ayaa u beddela luqadda mashiinka (0s iyo 1s). Tani waxay ka dhigeysaa mid aad uga fudud C ama Assembly.
2.  **Interpreted:** Koodhka lama ururiyo (compile) hal mar kahor intaan la kicin. Taa beddelkeeda, "Interpreter-ka" Python wuxuu koodhka u akhriyaa sadar-sadar (line by line) xilliga shaqada. Tani waxay sahlaysaa in khaladaadka (bugs) la helo, laakiin waxay yara dhimaysaa xawaaraha marka la barbardhigo C++.
3.  **General-Purpose:** Waxaa loo isticmaali karaa wax kasta: Samaynta mareegaha (Web), Falanqaynta Xogta (Data Science), Sirdoonka Macmal (AI), iyo Automation.

Python waxaa abuuray **Guido van Rossum** sanadkii 1991, waxaana loogu magac daray kooxda majaajilada ah ee "Monty Python". Falsafadda Python waa "Readability counts" - Koodhku waa inuu ahaadaa mid la akhrin karo sida qoraalka caadiga ah.`,
                      
                      whyIsItImportant: `Injineerka kombiyuutarka, barashada Python waa sida barashada luqadda Ingiriiska ee sayniska.
*   **Caannimada:** Waa luqadda #1 ee adduunka maanta, gaar ahaan dhinacyada AI iyo Machine Learning.
*   **Maktabadaha (Libraries):** Python waxay leedahay malaayiin maktabadood oo diyaarsan (sida NumPy, Pandas, TensorFlow) kuwaas oo kuu ogolaanaya inaad qabato shaqooyin adag adigoo qoraya dhowr sadar oo koodh ah.
*   **Automation:** Injineeradu waxay u isticmaalaan Python si ay u otomaatigeeyaan hawlaha soo noqnoqda, tijaabiyaan chip-yada (hardware testing), iyo falanqeeyaan shabakadaha.`,

                      mainParts: `**1. Syntax (Naxwaha):**
Python ma isticmaasho qaansooyin \`{}\` si ay u kala soocdo baloogyada koodhka (code blocks) sida Java ama C++. Taa beddelkeeda, waxay isticmaashaa **Indentation** (Bannaan dhanka bidix ah). Tani waxay ku qasbaysaa barnaamij-sameeyaha inuu qoro koodh nidaamsan.

**2. Variables & Data Types:**
Python waa "Dynamically Typed". Uma baahnid inaad sheegto nooca xogta (int, float, string) marka aad variable abuurayso.
Example:
\`x = 10\` (Python way garanaysaa inuu yahay Integer).
\`y = "Hello"\` (Waa String).

**3. Memory Management:**
Python waxay si otomaatig ah u maamushaa xusuusta (Memory). Waxay leedahay "Garbage Collector" kaas oo tirtira xogta aan la isticmaalin si loo baneeyo RAM-ka.`,
                      
                      examples: `**Tusaale 1: Hello World**
Koodhka ugu horreeya ee qof walba qoro:
\`\`\`python
print("Hello, World!")
\`\`\`
Eeg sida ay u fududahay. Java, waxaad u baahan lahayd inaad qorto class, method, iyo syntax adag si aad u hesho natiijo isku mid ah.

**Tusaale 2: Xisaab Fudud**
\`\`\`python
a = 5
b = 10
sum = a + b
print(f"Wadarta waa: {sum}")
\`\`\`
Halkan waxaan ku baranaynaa variable assignment iyo f-strings oo loo isticmaalo in qoraalka iyo doorsoomayaasha la isku daro.`
                  }, 'rfscVS0vtbw'),
                  createCompLesson('py-control', 'Control Structures (Loops & Conditionals)', { 
                      whatIsIt: `Barnaamijku ma noqon karo mid waxtar leh haddii uu kaliya u socdo si toos ah (sequential). **Control Structures** waa aaladaha noo ogolaada inaan maamulno "Socodka" (Flow) barnaamijka. Waxay u kala baxaan laba nooc oo waaweyn:
1.  **Conditionals (Go'aan-qaadasho):** Sida \`if\`, \`elif\`, iyo \`else\`. Kuwani waxay kombiyuutarka u sheegaan: "Haddii ay tani dhacdo, tan samee. Haddii kale, wax kale samee."
2.  **Loops (Ku-celcelin):** Sida \`for\` iyo \`while\`. Kuwani waxay kuu ogolaanayaan inaad hal hawl qabato kumanaan jeer adigoon dib u qorin koodhka.

Fikirka ka dambeeya waa **Logic**. Kombiyuutarku wuxuu qiimeeyaa hadal (statement) inuu yahay RUN (True) ama BEEN (False), kadibna wuxuu qaataa tallaabo ku saleysan natiijadaas.`,

                      howItWorks: `**1. If Statement:**
Wuxuu shaqeeyaa kaliya haddii shuruuddu tahay Run.
\`\`\`python
temperature = 30
if temperature > 25:
    print("Waa kulayl, shid qaboojiyaha.")
else:
    print("Cimiladu waa fiican tahay.")
\`\`\`

**2. For Loop:**
Wuxuu ku socdaa tiro go'an oo jeer. Aad buu u fiican yahay marka aad ogtahay inta jeer ee aad rabto inaad wax ku celiso.
\`\`\`python
for i in range(5):
    print(f"Lambarka: {i}")
# Waxay soo saaraysaa 0, 1, 2, 3, 4
\`\`\`

**3. While Loop:**
Wuxuu socdaa inta shuruuddu tahay Run. Waa in laga taxadaro "Infinite Loop" (Loop aan dhamaanin) haddii shuruuddu waligeed aysan noqon False.`,

                      whyIsItImportant: `Dhammaan caqliga kombiyuutarka wuxuu ku dhisan yahay structures-kan.
*   **Website-ka:** "Haddii (If) password-ku sax yahay, soo gal. Haddii kale, sii fariin qalad ah."
*   **Ciyaarta (Game):** "Inta (While) ciyaaryahanku nool yahay, sii wad ciyaarta."
*   **Robot-ka:** "Haddii (If) dareemaha (sensor) arko darbi, leexo."
Awoodda lagu xakameeyo socodka barnaamijka ayaa ah waxa kombiyuutarka ka dhiga mashiin caqli badan.`
                  }, 'PqFKRqpHrjw'),
                  createCompLesson('py-functions', 'Functions & Modules', { whatIsIt: "Qaybo koodh ah oo dib loo isticmaali karo." }, 'NSbOtYzIQI0')
              ] 
          },
          { 
              id: 'comp-y1-math', 
              title: 'Discrete Mathematics', 
              lessons: [
                  createCompLesson('math-logic', 'Propositional Logic', { 
                      whatIsIt: `**Propositional Logic** waa laanta xisaabta ee daraasaysa bayaannada (statements) kuwaas oo noqon kara **Run (True)** ama **Been (False)**. Injineernimada Kombiyuutarka, Run waxaa loo taqaanaa **1**, Beenna waxaa loo taqaanaa **0**.

Kani waa aasaaska "Digital Logic Design". Chip kasta oo ku jira taleefankaaga ama kombiyuutarkaaga wuxuu ku shaqeeyaa malaayiin go'aamo yaryar ah oo ku saleysan Logic-gan.
Waxaan isticmaalnaa hawl-wadeenada (Operators) sida:
*   **AND ($\land$):** Labaduba waa inay Run noqdaan.
*   **OR ($\lor$):** Ugu yaraan mid waa inuu Run noqdaa.
*   **NOT ($\neg$):** Wuxuu rogayaa qiimaha (Haddii Run $\to$ Been).`,
                      
                      whyIsItImportant: `La'aanteed Logic, ma jireen kombiyuutar.
1.  **Hardware Design:** Logic gates (AND, OR, NOT gates) ayaa laga sameeyaa transistors. Isku-geyntooda ayaa samaysa Processor-ka.
2.  **Algorithm Design:** Barnaamijyada kombiyuutarku waxay ku dhisan yihiin shuruudo macquul ah (Logical conditions).
3.  **Artificial Intelligence:** Nidaamyada khabiirada (Expert Systems) waxay isticmaalaan xeerar macquul ah si ay u gaaraan go'aamo.`,

                      examples: `**Truth Tables (Jadwalka Runta):**
Kani waa habka aan ku muujino dhammaan natiijooyinka suurtagalka ah.
Tusaale: $P \land Q$ (P AND Q)
*   Haddii P=0, Q=0 $\to$ Natiijo=0
*   Haddii P=1, Q=0 $\to$ Natiijo=0
*   Haddii P=0, Q=1 $\to$ Natiijo=0
*   Haddii P=1, Q=1 $\to$ Natiijo=1

Codsiga: Nidaamka Amniga. "Fur albaabka HADDII (Kaarka la aqoonsaday) IYO (Faraha la aqoonsaday)." Haddii midkood maqan yahay, albaabku ma furmayo.`
                  }, 'h8E-uE6d-k4'),
                  createCompLesson('math-sets', 'Set Theory', { whatIsIt: "Barashada ururinta walxaha." }, 'tyDKR4FG3Yw')
              ] 
          },
        ]
      },
      // ... (Rest of Computer structure)
      {
        id: 'comp-year-2',
        name: 'SANADKA 2AAD: Dhismaha & Xogta',
        description: 'Faham sida kombiyuutarku u shaqeeyo min hoos ilaa kor, iyo sida xogta loo habeeyo.',
        modules: [
          { 
              id: 'comp-y2-arch', 
              title: 'Computer Architecture', 
              lessons: [
                  createCompLesson('arch-von-neumann', 'Von Neumann Architecture', { whatIsIt: "Qaabka kombiyuutarka casriga ah uu u dhisan yahay.", whyIsItImportant: "Waa aasaaska dhammaan CPU-yada." }, '4rXfjLSrQDI'),
                  createCompLesson('arch-cpu', 'CPU Design', { whatIsIt: "Sida loo naqshadeeyo processor-ka." }, 'cNN_tTXABUA')
              ] 
          },
          { 
              id: 'comp-y2-dsa', 
              title: 'Data Structures & Algorithms', 
              lessons: [
                  createCompLesson('dsa-arrays', 'Arrays & Linked Lists', { whatIsIt: "Hababka aasaasiga ah ee kaydinta xogta." }, 'RBSGKlAvoiM'),
                  createCompLesson('dsa-trees', 'Trees & Graphs', { whatIsIt: "Qaababka xogta ee isku xiran." }, 'oSWTXtMglKE')
              ] 
          },
        ]
      },
      {
        id: 'comp-year-3',
        name: 'SANADKA 3AAD: Nidaamyada & Shabakadaha',
        description: 'Baro sida kombiyuutaradu u wada xiriiraan iyo sida nidaamyada hawlgalka u shaqeeyaan.',
        modules: [
          { 
              id: 'comp-y3-os', 
              title: 'Operating Systems', 
              lessons: [
                  createCompLesson('os-intro', 'Hordhaca OS', { whatIsIt: "Software-ka maamula hardware-ka." }, 'vBURTt97EkA'),
                  createCompLesson('os-process', 'Process Management', { whatIsIt: "Sida barnaamijyadu u wada shaqeeyaan." }, 'OrM7nZCxWZk')
              ] 
          },
          { 
              id: 'comp-y3-net', 
              title: 'Computer Networks', 
              lessons: [
                  createCompLesson('net-osi', 'OSI Model', { whatIsIt: "Toddobada lakab ee isgaarsiinta." }, 'IPVgpEiQZhY'),
                  createCompLesson('net-tcpip', 'TCP/IP Protocol', { whatIsIt: "Luqadda Internet-ka." }, 'PpsEaqJV_A0')
              ] 
          },
        ]
      },
      {
        id: 'comp-year-4',
        name: 'SANADKA 4AAD: Tiknoolajiyada Casriga ah',
        description: 'Mowduucyo horumarsan sida AI, Cyber Security, iyo Cloud Computing.',
        modules: [
          { 
              id: 'comp-y4-ai', 
              title: 'Artificial Intelligence', 
              lessons: [
                  createCompLesson('ai-ml', 'Machine Learning Basics', { whatIsIt: "Barashada sida kombiyuutarku wax u barto." }, 'Gv9_4yMHFhI'),
                  createCompLesson('ai-nn', 'Neural Networks', { whatIsIt: "Qaabka maskaxda dadka oo lagu dayday." }, 'aircAruvnKk')
              ] 
          },
          { 
              id: 'comp-y4-security', 
              title: 'Cybersecurity', 
              lessons: [
                  createCompLesson('sec-crypto', 'Cryptography', { whatIsIt: "Qarinta xogta." }, 'JH4qNrLx8FE'),
                  createCompLesson('sec-network', 'Network Security', { whatIsIt: "Ilaalinta shabakadaha." }, 'DNsR92q-G6Q')
              ] 
          },
        ]
      }
    ]
};
