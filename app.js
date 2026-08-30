const { createApp } = Vue;

createApp({
  data() {
    return {
      editMode: false,
      currentLang: localStorage.getItem("currentLang") || "nl",
      resumeData: {
        settings: { sectionSpacing: 1.0 },
        personalInfo: {
          name: "Alireza Amani",
          email: "alireza.amani101@gmail.com",
          phone: "06 25 14 28 51",
          location: "Rotterdam, NL",
          website: "alireza-amani.github.io",
          websiteUrl:
            "https://alireza-amani.github.io/project-stories/index.html",
          linkedin: "linkedin.com/in/alireza--amani/",
          linkedinUrl: "https://linkedin.com/in/alireza--amani/",
          github: "github.com/Alireza-Amani",
          githubUrl: "https://github.com/Alireza-Amani",
        },
        profileSummary: {
          en: "I am a Research Engineer who builds algorithms and predictive models for complex systems. I apply first-principles thinking and leverage Python and AI to solve problems involving complex physics and noisy data. I am always looking for ways to improve workflow efficiency; either I find a solution or I build one.",
          nl: "Ik ben een Research Engineer die algoritmen en voorspellende modellen bouwt voor complexe systemen. Ik pas fundamenteel analytisch denken toe en gebruik Python en AI om complexe fysische problemen en ruizige datasets aan te pakken. Ik ben altijd op zoek naar manieren om werkprocessen te verbeteren — ik vind een oplossing of ik bouw er een.",
        },
        skills: {
          techStack: [
            "Python",
            "R",
            "SQL",
            "Git",
            "HPC",
            "GenAI",
            "Web Development",
          ],
          domains: [
            "Water Resources Engineering",
            "Climate Data Analysis",
            "Numerical Simulation",
            "Mathematical Optimization",
            "Physics-Guided ML",
          ],
          languages: {
            en: [
              { name: "Persian (Native)" },
              { name: "English (Fluent)" },
              { name: "Dutch (B2)" },
              { name: "French (A2)" },
            ],
            nl: [
              { name: "Perzisch (moedertaal)" },
              { name: "Engels (vloeiend)" },
              { name: "Nederlands (B2)" },
              { name: "Frans (A2)" },
            ],
          },
        },
        experiences: [
          {
            title: {
              en: "Doctoral Researcher",
              nl: "Doctoral Researcher",
            },
            company: "Université de Sherbrooke",
            period: "Aug 2019 – Aug 2024",
            bullets: [
              {
                text: {
                  en: "<strong>Led the extensive data curation and analysis</strong> of a complex multivariable high-frequency dataset to analyze potential groundwater recharge, quantifying the future impacts of climate-driven rain-on-snow events.",
                  nl: "<strong>Verantwoordelijk voor uitgebreide datacuratie en -analyse</strong> van een hoogfrequente, multivariabele dataset om potentiële grondwateraanvulling te analyseren, met kwantificering van de toekomstige effecten van klimaatgedreven regen-op-sneeuw situaties.",
                },
                links: [
                  {
                    text: "Repo",
                    url: "https://github.com/Alireza-Amani/PhD_AlirezaAmani/tree/main/Manuscript%201%20(Deep%20Percolation)",
                    icon: "github",
                  },
                  {
                    text: "Dataset",
                    url: "https://zenodo.org/records/10582140",
                    icon: "database",
                  },
                ],
              },
              {
                text: {
                  en: "<strong>Collaborated with Environment Canada</strong> to stress-test and validate the national operational forecasting model using high-resolution field data, pinpointing fundamental limitations within the model's physics.",
                  nl: "<strong>Samenwerking met Environment Canada</strong> voor het stresstesten en valideren van het nationale operationele voorspellingsmodel met behulp van hoge-resolutie velddata, waarbij fundamentele beperkingen in de fysica van het model zijn geïdentificeerd.",
                },
                links: [
                  {
                    text: "Repo",
                    url: "https://github.com/Alireza-Amani/PhD_AlirezaAmani/tree/main/Manuscript%202%20(Model%20Evaluation)",
                    icon: "github",
                  },
                ],
              },
              {
                text: {
                  en: "<strong>Developed a Python computational orchestration</strong> to modernize a Fortran-based model workflow, reducing model setup time by orders of magnitude, facilitating post-processing and results analysis, and enabling parallel execution on High-Performance Computing (HPC) clusters.",
                  nl: "<strong>Een Python-orkestratiesysteem ontwikkeld</strong> om een Fortran-gebaseerde modelworkflow te moderniseren. Dit reduceerde de voorbereidingstijd drastisch, vereenvoudigde post-processing en maakte parallelle uitvoering op High-Performance Computing (HPC)-clusters mogelijk.",
                },
                links: [
                  {
                    text: "Repo",
                    url: "https://github.com/Alireza-Amani/svspyed",
                    icon: "github",
                  },
                ],
              },
              {
                text: {
                  en: "<strong>Developed and benchmarked machine learning models</strong> integrating geospatial data with high-frequency IoT sensor streams across 124 global locations. Designed robust spatial cross-validation strategies to eliminate overfitting, achieving a 15% improvement in estimating evapotranspiration compared to traditional methods.",
                  nl: "<strong>Machine learning-modellen ontwikkeld en geëvalueerd</strong> die geospatiale data integreren met hoogfrequente IoT-sensorstromen op 124 wereldwijde locaties. Robuuste ruimtelijke kruisvalidatiestrategieën ontworpen om overfitting te elimineren, wat resulteerde in een verbetering van 15% in de schatting van evapotranspiratie ten opzichte van traditionele methoden.",
                },
                links: [
                  {
                    text: "Repo",
                    url: "https://github.com/Alireza-Amani/ET_FLUXNET/tree/main",
                    icon: "github",
                  },
                  {
                    text: "EGU Presentation",
                    url: "https://meetingorganizer.copernicus.org/EGU22/EGU22-5580.html",
                    icon: "presentation",
                  },
                ],
              },
            ],
          },
          {
            title: {
              en: "Graduate Researcher",
              nl: "Graduate Researcher",
            },
            company: "Iran University of Science and Technology",
            period: "Sep 2016 - Jun 2019",
            bullets: [
              {
                text: {
                  en: "<strong>Developed a novel optimization algorithm</strong> for NP-hard hydropower scheduling, outperforming commercial solvers by an order of magnitude in speed and conserving 20,000 m³/day of physical resources without loss in fidelity.",
                  nl: "<strong>Een nieuw optimalisatie-algoritme ontwikkeld</strong> voor de NP-harde planning van waterkrachtcentrales. Dit algoritme overtrof commerciële solvers ruimschoots qua snelheid en bespaarde 20.000 m³/dag aan water zonder in te leveren op nauwkeurigheid.",
                },
                links: [
                  {
                    text: "Read more",
                    url: "https://alireza-amani.github.io/project-stories/huc-paper.html",
                    icon: "globe",
                  },
                ],
              },
            ],
          },
        ],
        projects: [
          {
            title: {
              en: "AI Applications Developer",
              nl: "AI Applications Developer",
            },
            company: { en: "Self-Directed", nl: "Zelfstandig" },
            period: { en: "2025 – Present", nl: "2025 – heden" },
            bullets: [
              {
                text: {
                  en: "<strong>Designed and developed Flash Card 2.0</strong>, a full-stack Python web app integrating Google Gemini API for dynamic context-rich generation of learning material. Translated cognitive science principles into software features to maximize long-term retention; helped me reach B2 Dutch proficiency in one year.",
                  nl: "<strong>Flash Card 2.0 ontworpen en ontwikkeld</strong>, een full-stack Python-webapp die gebruikmaakt van de Google Gemini API voor dynamische, contextrijke generatie van leermateriaal. Door cognitieve wetenschapsprincipes te vertalen naar softwarefuncties voor maximale langdurige kennisretentie, hielp deze applicatie mij in één jaar niveau B2 in het Nederlands te bereiken.",
                },
                links: [
                  {
                    text: "Repo",
                    url: "https://github.com/Alireza-Amani/flash_denken",
                    icon: "github",
                  },
                  {
                    text: "Read more",
                    url: "https://alireza-amani.github.io/project-stories/flash-denken.html",
                    icon: "globe",
                  },
                ],
              },
            ],
          },
        ],
        repositories: [
          {
            name: "svspyed",
            url: "https://github.com/Alireza-Amani/svspyed",
            description: {
              en: "Python orchestration wrapper for the SVS (Soil, Vegetation, and Snow) land-surface model in point-mode.",
              nl: "Python-wrapper om het SVS-landoppervlaktemodel (Bodem, Vegetatie en Sneeuw) in puntmodus te orkestreren en uit te voeren.",
            },
          },
          {
            name: "CRPSnb",
            url: "https://github.com/Alireza-Amani/CRPSnb",
            description: {
              en: "Python package for calculating Neighborhood-Based Continuous Ranked Probability Scores for spatial and ensemble verification.",
              nl: "Python-pakket voor het berekenen van Neighborhood-Based Continuous Ranked Probability Scores voor ruimtelijke en ensemble-verificatie.",
            },
          },
          {
            name: "Integrated Lysimeter Study Dataset",
            url: "https://zenodo.org/doi/10.5281/zenodo.10582139",
            description: {
              en: "Open-access, high-frequency multivariable hydrometeorological dataset (Zenodo).",
              nl: "Open-access, hoge-frequentie multivariabele hydrometeorologique dataset (Zenodo).",
            },
          },
          {
            name: "Flash Card 2.0",
            url: "https://github.com/Alireza-Amani/flash_denken",
            description: {
              en: "Full-stack application leveraging the Gemini API to implement cognitive-science-driven spaced repetition workflows; helped me reach B2 Dutch proficiency in one year.",
              nl: "Full-stack applicatie die de Gemini API gebruikt voor cognitieve-wetenschap-gedreven spaced repetition workflows; hielp mij in één jaar niveau B2 in het Nederlands te bereiken.",
            },
            readMoreUrl: "https://alireza-amani.github.io/project-stories/flash-denken.html",
          },
        ],
        education: [
          {
            degree: {
              en: "Ph.D. in Civil Engineering (Hydrology)",
              nl: "Ph.D. in Civiele Techniek (Hydrologie)",
            },
            institution: "Université de Sherbrooke, Canada",
            period: "2019 – 2024",
            thesis: {
              en: "Thesis: Cold region deep percolation: Characterization, drivers, and modeling challenges",
              nl: "Thesis: Cold region deep percolation: Characterization, drivers, and modeling challenges",
            },
          },
          {
            degree: {
              en: "M.Sc. in Civil Engineering (Water Resources Engineering)",
              nl: "M.Sc. in Civiele Techniek (Waterbeheer)",
            },
            institution: "Iran University of Science and Technology",
            period: "2016 – 2019",
            thesis: {
              en: "Thesis: Robust optimization for the hydro-unit commitment problem: a case study of Karun cascaded hydroplants",
              nl: "Thesis: Robust optimization for the hydro-unit commitment problem: a case study of Karun cascaded hydroplants",
            },
          },
          {
            degree: {
              en: "B.Sc. in Civil Engineering",
              nl: "B.Sc. in Civiele Techniek",
            },
            institution: "Babol Noshirvani University of Technology",
            period: "2011 – 2016",
            thesis: { en: "", nl: "" },
          },
        ],
        certifications: [
          {
            name: "Deep Learning Specialization",
            issuer: "DeepLearning.AI",
            date: "Mar 2022",
            url: "https://www.coursera.org/account/accomplishments/specialization/8GFAC5U3PKVK",
          },
          {
            name: "From Data to Insights with Google Cloud",
            issuer: "Google",
            date: "May 2022",
            url: "https://coursera.org/share/6a05e8c19c58b31656e2fbf947895e72",
          },
          {
            name: "Advanced Data Modeling",
            issuer: "Meta",
            date: "Dec 2024",
            url: "https://coursera.org/share/8a9363a933d02de035eabe80d60e1d2b",
          },
          {
            name: "Database Structures & Management with MySQL",
            issuer: "Meta",
            date: "Jun 2023",
            url: "https://coursera.org/share/8097029bceee97381f7e99c0a6495b4c",
          },
          {
            name: "HTML, CSS, and Javascript for Web Developers",
            issuer: "Johns Hopkins University",
            date: "Feb 2022",
            url: "https://coursera.org/share/79be45be60e8a8ceb59c7f97b461a698",
          },
        ],
        references: [
          {
            name: "Marie-Amélie Boucher",
            title: { en: "Professor, Faculty of Engineering", nl: "Professor, Faculteit Ingenieurswetenschappen" },
            company: "Université de Sherbrooke",
            email: "marie-amelie.boucher@usherbrooke.ca",
            phone: "",
          },
          {
            name: "Hossein Alizadeh",
            title: { en: "Assistant Professor, Civil Engineering School", nl: "Universitair Docent, School Civiele Techniek" },
            company: "Iran University of Science and Technology",
            email: "alizadeh@iust.ac.ir",
            phone: "",
          },
          {
            name: "Vincent Vionnet",
            title: { en: "Researcher, Meteorological Research Division", nl: "Onderzoeker, Meteorologisch Onderzoek" },
            company: "Environment and Climate Change Canada",
            email: "vincent.vionnet@ec.gc.ca",
            phone: "",
          },
          {
            name: "Alexandre R. Cabral",
            title: { en: "Professor, Faculty of Engineering", nl: "Professor, Faculteit Ingenieurswetenschappen" },
            company: "Université de Sherbrooke",
            email: "alexandre.cabral@usherbrooke.ca",
            phone: "",
          },
        ],
        publications: [
          {
            title:
              "Cold climates, complex hydrology: can a land surface model accurately simulate deep percolation?",
            authors:
              "Amani, A., Boucher, M.-A., Cabral, A. R., Vionnet, V., and Gaborit, É. (2025)",
            journal: "Hydrology and Earth System Sciences",
            links: [
              {
                text: "View Publication",
                url: "https://doi.org/10.5194/hess-29-2445-2025",
                icon: "external",
              },
            ],
          },
          {
            title:
              "Analysing Deep Percolation Dynamics: A Lysimeter-Based Study in a Cold Environment",
            authors:
              "Amani, A., Boucher, M.-A., Cabral, A. R., Vionnet, V., and Gaborit, É. (2025)",
            journal: "Hydrological Processes",
            links: [
              {
                text: "View Publication",
                url: "https://onlinelibrary.wiley.com/doi/full/10.1002/hyp.70119",
                icon: "external",
              },
            ],
          },
          {
            title:
              "Comparing three machine learning algorithms with existing methods for natural streamflow estimation",
            authors:
              "Mehrvand, S., Boucher, M.-A., Kornelsen, K., and Amani, A. (2024)",
            journal: "Hydrological Sciences Journal",
            links: [
              {
                text: "View Publication",
                url: "https://doi.org/10.1080/02626667.2023.2273402",
                icon: "external",
              },
            ],
          },
          {
            title:
              "Assessing the generalization power of three machine learning models and three evapotranspiration formulas using 143 FLUXNET towers data",
            authors:
              "Amani, A., Boucher, M.-A., Cabral, A. R., and Nadeau, D. F. (2022)",
            journal: "EGU General Assembly 2022",
            links: [
              {
                text: "View Presentation",
                url: "https://meetingorganizer.copernicus.org/EGU22/EGU22-5580.html",
                icon: "presentation",
              },
            ],
          },
          {
            title:
              "Solving hydropower unit commitment problem using a novel sequential mixed integer linear programming approach",
            authors: "Amani, A., and Alizadeh, H. (2021)",
            journal: "Water Resources Management",
            links: [
              {
                text: "View Publication",
                url: "https://www.researchgate.net/profile/Alireza-Amani-4/publication/351064069_Solving_Hydropower_Unit_Commitment_Problem_Using_a_Novel_Sequential_Mixed_Integer_Linear_Programming_Approach/links/67f6422f03b8d7280e2fa6e0/Solving-Hydropower-Unit-Commitment-Problem-Using-a-Novel-Sequential-Mixed-Integer-Linear-Programming-Approach.pdf",
                icon: "external",
              },
            ],
          },
        ],
      },
      sectionOrder: [
        "profileSummary",
        "education",
        "experiences",
        "publications",
        "repositories",
        "certifications",
        "projects",
        "skills",
        "references",
      ],
      sectionTitles: {
        profileSummary: { en: "Profile Summary", nl: "Profiel Samenvatting" },
        skills: { en: "Core Competencies & Skills", nl: "Kerncompetenties & Vaardigheden" },
        experiences: { en: "Research Experience", nl: "Onderzoekservaring" },
        projects: { en: "Technical Projects", nl: "Technische Projecten" },
        repositories: { en: "Scientific Software & Open-Source Tools", nl: "Wetenschappelijke Software & Open-Source Tools" },
        education: { en: "Education", nl: "Opleiding" },
        certifications: { en: "Certifications", nl: "Certificeringen" },
        publications: { en: "Publications & Presentations", nl: "Publicaties & Presentaties" },
        references: { en: "References", nl: "Referenties" },
      },
      sectionVisibility: {
        profileSummary: false,
        skills: true,
        experiences: true,
        projects: false,
        repositories: true,
        education: true,
        certifications: true,
        publications: true,
        references: true,
      },
      _undoStack: [],
      _redoStack: [],
      _historyPaused: false,
      _debounceTimer: null,
    };
  },
  computed: {
    currentProfileSummary() {
      return this.resumeData.profileSummary[this.currentLang];
    },
    canUndo() {
      return this._undoStack.length > 0;
    },
    canRedo() {
      return this._redoStack.length > 0;
    },
  },
  watch: {
    resumeData: {
      deep: true,
      handler() {
        if (this._historyPaused || !this.editMode) return;
        clearTimeout(this._debounceTimer);
        this._debounceTimer = setTimeout(() => {
          this._pushHistory();
          // Auto-save while editing so refreshing or navigating away never loses work
          this.saveToLocalStorage();
        }, 400);
      },
    },
    sectionOrder: {
      deep: true,
      handler() {
        if (this._historyPaused || !this.editMode) return;
        this._pushHistory();
      },
    },
    sectionTitles: {
      deep: true,
      handler() {
        if (this._historyPaused || !this.editMode) return;
        clearTimeout(this._debounceTimer);
        this._debounceTimer = setTimeout(() => {
          this._pushHistory();
          this.saveToLocalStorage();
        }, 400);
      },
    },
    sectionVisibility: {
      deep: true,
      handler() {
        if (this._historyPaused || !this.editMode) return;
        clearTimeout(this._debounceTimer);
        this._debounceTimer = setTimeout(() => {
          this._pushHistory();
          this.saveToLocalStorage();
        }, 400);
      },
    },
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        // Record a clean baseline when entering edit mode
        this._undoStack = [];
        this._redoStack = [];
        this._snapshotBeforeEdit = this._snapshot();
      } else {
        this.saveToLocalStorage();
      }
      // Always persist edit mode state so it survives page refresh
      localStorage.setItem("editMode", this.editMode ? "1" : "0");
    },
    toggleLang() {
      this.currentLang = this.currentLang === "nl" ? "en" : "nl";
      localStorage.setItem("currentLang", this.currentLang);
    },
    saveToLocalStorage() {
      if (this._isResetting) return;
      localStorage.setItem("resumeData", JSON.stringify(this.resumeData));
      localStorage.setItem("sectionTitles", JSON.stringify(this.sectionTitles));
      localStorage.setItem("sectionVisibility", JSON.stringify(this.sectionVisibility));
      localStorage.setItem("sectionOrder", JSON.stringify(this.sectionOrder));
      localStorage.setItem("editMode", this.editMode ? "1" : "0");
    },
    loadFromLocalStorage() {
      const defaultData = JSON.parse(JSON.stringify(this.resumeData));
      
      const saved = localStorage.getItem("resumeData");
      const savedTitles = localStorage.getItem("sectionTitles");
      const savedVisibility = localStorage.getItem("sectionVisibility");
      const savedOrder = localStorage.getItem("sectionOrder");
      const savedEditMode = localStorage.getItem("editMode");
      
      if (savedEditMode !== null) {
        this.editMode = savedEditMode === "1";
      }
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge missing top-level keys from defaults (e.g. newly added sections like references)
        for (const key in defaultData) {
          if (!(key in parsed)) {
            parsed[key] = defaultData[key];
          }
        }
        this.resumeData = parsed;
        
        // Ensure settings are initialized
        if (!this.resumeData.settings) {
          this.resumeData.settings = { sectionSpacing: 1.0 };
        } else if (!this.resumeData.settings.sectionSpacing) {
          this.resumeData.settings.sectionSpacing = 1.0;
        }

        // Ensure readMoreUrl and updated description are present in repositories
        if (this.resumeData.repositories) {
          this.resumeData.repositories.forEach((repo) => {
            if (repo.name && repo.name.toLowerCase().includes("flash card")) {
              if (!repo.readMoreUrl) {
                repo.readMoreUrl = "https://alireza-amani.github.io/project-stories/flash-denken.html";
              }
              const defaultRepo = defaultData.repositories.find(r => r.name.toLowerCase().includes("flash card"));
              if (defaultRepo && (!repo.description || !repo.description.en || !repo.description.en.includes("B2"))) {
                repo.description = defaultRepo.description;
              }
            } else if (repo.readMoreUrl === undefined) {
              repo.readMoreUrl = "";
            }
          });
        }
        
        // Migrate old languages array format
        const langs = this.resumeData.skills?.languages;
        if (Array.isArray(langs)) {
          this.resumeData.skills.languages = {
            en: langs.map((l) => ({ name: typeof l.name === "object" ? l.name.en : l.name })),
            nl: langs.map((l) => ({ name: typeof l.name === "object" ? l.name.nl : l.name })),
          };
        }
      }
      if (savedTitles) {
        const parsed = JSON.parse(savedTitles);
        this.sectionTitles = Object.assign({}, this.sectionTitles, parsed);
      }
      if (savedVisibility) {
        const parsed = JSON.parse(savedVisibility);
        this.sectionVisibility = Object.assign({}, this.sectionVisibility, parsed);
      }
      if (savedOrder) {
        const parsed = JSON.parse(savedOrder);
        // Ensure any new sections in the codebase default order are appended
        const missing = this.sectionOrder.filter(id => !parsed.includes(id));
        this.sectionOrder = [...parsed, ...missing];
      }
    },
    _snapshot() {
      return JSON.stringify({
        resumeData: this.resumeData,
        sectionOrder: this.sectionOrder,
        sectionTitles: this.sectionTitles,
        sectionVisibility: this.sectionVisibility,
      });
    },
    _pushHistory() {
      const snap = this._snapshot();
      // Don't push if nothing changed vs last snapshot
      if (
        this._undoStack.length > 0 &&
        this._undoStack[this._undoStack.length - 1] === snap
      )
        return;
      this._undoStack.push(snap);
      if (this._undoStack.length > 100) this._undoStack.shift();
      this._redoStack = [];
    },
    undo() {
      clearTimeout(this._debounceTimer);
      if (this._undoStack.length === 0) return;
      this._redoStack.push(this._snapshot());
      const prev = this._undoStack.pop();
      this._restoreSnapshot(prev);
    },
    redo() {
      if (this._redoStack.length === 0) return;
      this._undoStack.push(this._snapshot());
      const next = this._redoStack.pop();
      this._restoreSnapshot(next);
    },
    _restoreSnapshot(snap) {
      this._historyPaused = true;
      const state = JSON.parse(snap);
      this.resumeData = state.resumeData;
      this.sectionOrder = state.sectionOrder;
      if (state.sectionTitles) this.sectionTitles = state.sectionTitles;
      if (state.sectionVisibility) this.sectionVisibility = state.sectionVisibility;
      this.$nextTick(() => {
        this._historyPaused = false;
      });
    },
    toggleSectionVisibility(sectionId) {
      this.sectionVisibility[sectionId] = !this.sectionVisibility[sectionId];
    },
    addSkill(category) {
      const skill = prompt(`Add new ${category}:`);
      if (skill && skill.trim()) {
        this.resumeData.skills[category].push(skill.trim());
      }
    },
    addLanguage() {
      const label = this.currentLang === "nl" ? "Dutch" : "English";
      const name = prompt(`Language name (${label}):`);
      if (!name || !name.trim()) return;
      this.resumeData.skills.languages[this.currentLang].push({
        name: name.trim(),
      });
    },
    removeLanguage(index) {
      this.resumeData.skills.languages[this.currentLang].splice(index, 1);
    },
    moveLanguage(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      const arr = this.resumeData.skills.languages[this.currentLang];
      if (newIndex >= 0 && newIndex < arr.length) {
        const temp = arr[index];
        arr[index] = arr[newIndex];
        arr[newIndex] = temp;
      }
    },
    removeSkill(category, index) {
      this.resumeData.skills[category].splice(index, 1);
    },
    moveSkill(category, index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      const skillArray = this.resumeData.skills[category];
      if (newIndex >= 0 && newIndex < skillArray.length) {
        const temp = skillArray[index];
        skillArray[index] = skillArray[newIndex];
        skillArray[newIndex] = temp;
      }
    },
    addExperience() {
      this.resumeData.experiences.push({
        title: { en: "Job Title", nl: "Functietitel" },
        company: "Company Name",
        period: "Start - End",
        bullets: [],
      });
    },
    removeExperience(index) {
      if (confirm("Remove this experience?")) {
        this.resumeData.experiences.splice(index, 1);
      }
    },
    addBullet(experience) {
      experience.bullets.push({
        text: {
          en: "New achievement or responsibility",
          nl: "Nieuwe prestatie of verantwoordelijkheid",
        },
        links: [],
      });
    },
    removeBullet(item, index) {
      item.bullets.splice(index, 1);
    },
    moveBullet(item, index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < item.bullets.length) {
        const temp = item.bullets[index];
        item.bullets[index] = item.bullets[newIndex];
        item.bullets[newIndex] = temp;
      }
    },
    addLink(bullet) {
      bullet.links.push({
        text: "Link",
        url: "https://example.com",
        icon: "globe",
      });
    },
    removeLink(bullet, index) {
      bullet.links.splice(index, 1);
    },
    addProject() {
      this.resumeData.projects.push({
        title: { en: "Project Title", nl: "Projecttitel" },
        company: { en: "Company/Organization", nl: "Bedrijf/Organisatie" },
        period: { en: "Start – Present", nl: "Start – heden" },
        bullets: [],
      });
    },
    removeProject(index) {
      if (confirm("Remove this project?")) {
        this.resumeData.projects.splice(index, 1);
      }
    },
    addEducation() {
      this.resumeData.education.push({
        degree: { en: "Degree", nl: "Diploma" },
        institution: "Institution Name",
        period: "Start – End",
        thesis: { en: "", nl: "" },
      });
    },
    removeEducation(index) {
      if (confirm("Remove this education entry?")) {
        this.resumeData.education.splice(index, 1);
      }
    },
    addCertification() {
      this.resumeData.certifications.push({
        name: "Certification Name",
        issuer: "Issuer",
        date: "Month Year",
        url: "",
      });
    },
    removeCertification(index) {
      this.resumeData.certifications.splice(index, 1);
    },
    addPublication() {
      this.resumeData.publications.push({
        title: "Publication Title",
        authors: "Authors",
        journal: "Journal Name",
        links: [],
      });
    },
    removePublication(index) {
      if (confirm("Remove this publication?")) {
        this.resumeData.publications.splice(index, 1);
      }
    },
    addPublicationLink(publication) {
      publication.links.push({
        text: "Link",
        url: "https://example.com",
        icon: "external",
      });
    },
    removePublicationLink(publication, index) {
      publication.links.splice(index, 1);
    },
    addReference() {
      this.resumeData.references.push({
        name: "Reference Name",
        title: { en: "Title", nl: "Functietitel" },
        company: "Company / Institution",
        email: "",
        phone: "",
      });
    },
    removeReference(index) {
      if (confirm("Remove this reference?")) {
        this.resumeData.references.splice(index, 1);
      }
    },
    moveReference(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.resumeData.references.length) {
        const temp = this.resumeData.references[index];
        this.resumeData.references[index] = this.resumeData.references[newIndex];
        this.resumeData.references[newIndex] = temp;
      }
    },
    addRepository() {
      this.resumeData.repositories.push({
        name: "Repository Name",
        url: "https://github.com/username/repo",
        description: {
          en: "Description in English",
          nl: "Beschrijving in het Nederlands",
        },
        readMoreUrl: "",
      });
    },
    removeRepository(index) {
      if (confirm("Remove this repository?")) {
        this.resumeData.repositories.splice(index, 1);
      }
    },
    exportData() {
      const exportObj = {
        resumeData: this.resumeData,
        sectionTitles: this.sectionTitles,
        sectionVisibility: this.sectionVisibility,
        sectionOrder: this.sectionOrder
      };
      const dataStr = JSON.stringify(exportObj, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume-data.json";
      link.click();
    },
    importData(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const parsed = JSON.parse(e.target.result);
            
            if (parsed.resumeData) {
              // New combined format
              this.resumeData = parsed.resumeData;
              if (parsed.sectionTitles) this.sectionTitles = Object.assign({}, this.sectionTitles, parsed.sectionTitles);
              if (parsed.sectionVisibility) this.sectionVisibility = Object.assign({}, this.sectionVisibility, parsed.sectionVisibility);
              if (parsed.sectionOrder) {
                const missing = this.sectionOrder.filter(id => !parsed.sectionOrder.includes(id));
                this.sectionOrder = [...parsed.sectionOrder, ...missing];
              }
            } else {
              // Legacy format (just resumeData)
              this.resumeData = parsed;
            }
            
            // Re-run standard migrations on the imported data
            const langs = this.resumeData.skills?.languages;
            if (Array.isArray(langs)) {
              this.resumeData.skills.languages = {
                en: langs.map((l) => ({ name: typeof l.name === "object" ? l.name.en : l.name })),
                nl: langs.map((l) => ({ name: typeof l.name === "object" ? l.name.nl : l.name })),
              };
            }
            if (!Array.isArray(this.resumeData.references)) {
              this.resumeData.references = [];
            }
            
            this.saveToLocalStorage();
            alert("Resume data imported successfully!");
          } catch (error) {
            alert("Error importing data. Please check the file format.");
          }
        };
        reader.readAsText(file);
      }
    },
    resetData() {
      if (confirm("This will reset all data to default. Continue?")) {
        this._isResetting = true;
        window.removeEventListener("beforeunload", this.saveToLocalStorage);
        localStorage.removeItem("resumeData");
        localStorage.removeItem("sectionTitles");
        localStorage.removeItem("sectionVisibility");
        localStorage.removeItem("sectionOrder");
        localStorage.removeItem("editMode");
        location.reload();
      }
    },
    moveExperience(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.resumeData.experiences.length) {
        const temp = this.resumeData.experiences[index];
        this.resumeData.experiences[index] =
          this.resumeData.experiences[newIndex];
        this.resumeData.experiences[newIndex] = temp;
      }
    },
    moveProject(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.resumeData.projects.length) {
        const temp = this.resumeData.projects[index];
        this.resumeData.projects[index] = this.resumeData.projects[newIndex];
        this.resumeData.projects[newIndex] = temp;
      }
    },
    moveEducation(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.resumeData.education.length) {
        const temp = this.resumeData.education[index];
        this.resumeData.education[index] = this.resumeData.education[newIndex];
        this.resumeData.education[newIndex] = temp;
      }
    },
    movePublication(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.resumeData.publications.length) {
        const temp = this.resumeData.publications[index];
        this.resumeData.publications[index] =
          this.resumeData.publications[newIndex];
        this.resumeData.publications[newIndex] = temp;
      }
    },
    moveSection(index, direction) {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex >= 0 && newIndex < this.sectionOrder.length) {
        const temp = this.sectionOrder[index];
        this.sectionOrder[index] = this.sectionOrder[newIndex];
        this.sectionOrder[newIndex] = temp;
        this.saveToLocalStorage();
      }
    },
    getSectionTitle(sectionId) {
      return this.sectionTitles[sectionId]
        ? this.sectionTitles[sectionId][this.currentLang]
        : sectionId;
    },
    getIcon(iconName) {
      const icons = {
        github: [
          {
            type: "path",
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
          },
          { type: "path", d: "M9 18c-4.51 2-5-2-7-2" },
        ],
        database: [
          { type: "ellipse", cx: "12", cy: "5", rx: "9", ry: "3" },
          { type: "path", d: "M3 5V19A9 3 0 0 0 21 19V5" },
          { type: "path", d: "M3 12A9 3 0 0 0 21 12" },
        ],
        presentation: [
          { type: "path", d: "M2 3h20" },
          { type: "path", d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" },
          { type: "path", d: "m7 21 5-5 5 5" },
        ],
        globe: [
          { type: "circle", cx: "12", cy: "12", r: "10" },
          { type: "line", x1: "2", y1: "12", x2: "22", y2: "12" },
          {
            type: "path",
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
          },
        ],
        external: [
          {
            type: "path",
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          },
          { type: "polyline", points: "15 3 21 3 21 9" },
          { type: "line", x1: "10", y1: "14", x2: "21", y2: "3" },
        ],
      };
      return icons[iconName] || icons.globe;
    },
  },
  mounted() {
    this.loadFromLocalStorage();
    window.addEventListener("beforeunload", this.saveToLocalStorage);
    this._keyHandler = (e) => {
      if (!this.editMode) return;
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && !e.shiftKey && e.key === "z") {
        e.preventDefault();
        this.undo();
      } else if (ctrl && (e.key === "y" || (e.shiftKey && e.key === "z"))) {
        e.preventDefault();
        this.redo();
      }
    };
    document.addEventListener("keydown", this._keyHandler);
  },
  unmounted() {
    window.removeEventListener("beforeunload", this.saveToLocalStorage);
    document.removeEventListener("keydown", this._keyHandler);
  },
}).mount("#app");
