(() => {
  "use strict";

  /* ==========================================================================
     i18n — dicionário de traduções
     ========================================================================== */

  const translations = {
    pt: {
      "a11y.skip": "Pular para o conteúdo",
      "lang.group": "Selecionar idioma",

      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.stack": "Stack",
      "nav.contact": "Contato",
      "nav.cta": "Falar comigo",

      "hero.pretitle": "Estudante de ADS · Front-end · Construindo projetos reais",
      "hero.greeting": "Oi, eu sou",
      "hero.name": "Bruno Cartolano.",
      "hero.lead": "Crio interfaces web claras, organizadas e úteis — com foco em experiência, código limpo e projetos reais.",
      "hero.subtitle": "Sou estudante de Análise e Desenvolvimento de Sistemas e venho transformando estudo em prática através de projetos reais, com atenção ao visual, organização e qualidade da interface.",
      "hero.cta.projects": "Ver projetos",
      "hero.cta.contact": "Falar comigo",
      "hero.caption": "Estudante de ADS • Front-end • São José dos Campos – SP",

      "about.eyebrow": "SOBRE",
      "about.heading": "Como eu penso, estudo e construo.",
      "about.p1": "Tenho me dedicado a evoluir como desenvolvedor front-end, estudando e aplicando na prática conceitos de interface, organização de código e construção de sistemas web. Meu objetivo é criar produtos úteis, bem pensados e agradáveis de usar.",
      "about.p2": "Acredito que código bom é aquele que entrega valor real para quem usa. Por isso tento equilibrar a parte técnica com cuidado em produto, acessibilidade e experiência — mesmo nos projetos mais simples.",
      "about.card1.title": "Em formação em ADS",
      "about.card1.desc": "Curso de Análise e Desenvolvimento de Sistemas em andamento.",
      "about.card2.title": "Foco em front-end",
      "about.card2.desc": "Interfaces modernas, responsivas e organizadas com React e Next.",
      "about.card3.title": "Projetos com propósito",
      "about.card3.desc": "Prefiro construir coisas que ajudem alguém de verdade.",
      "about.card4.title": "Estudo aplicado na prática",
      "about.card4.desc": "Cada conceito que aprendo vira um pedaço de projeto real.",

      "featured.eyebrow": "PROJETO EM DESTAQUE",
      "featured.title": "Sophia — apoio e informação para mães no puerpério",
      "featured.lead": "A Sophia nasceu da ideia de criar um espaço de apoio, acolhimento e informação para mães no puerpério, com uma experiência segura, sensível e fácil de usar.",
      "featured.badge": "Projeto em desenvolvimento",
      "featured.intro": "Um estudo de caso pessoal — desde o motivo de existir até as decisões técnicas e o que vem por aí.",
      "featured.imageCaption": "ILUSTRAÇÃO CONCEITUAL DO PROJETO",
      "featured.case.01.title": "Por que criei",
      "featured.case.01.desc": "Quis construir algo que tivesse uma utilidade real e que dialogasse com um contexto sensível. Saúde materna no puerpério é um espaço onde informação confiável e tom acolhedor fazem diferença concreta.",
      "featured.case.02.title": "O problema",
      "featured.case.02.desc": "O pós-parto é um período de muitas dúvidas e vulnerabilidade. A proposta da Sophia é oferecer um ambiente organizado, acolhedor e informativo — sem substituir profissionais de saúde.",
      "featured.case.03.title": "A decisão técnica",
      "featured.case.03.desc": "Optei por uma abordagem baseada em regras, com respostas previsíveis e auditáveis, priorizando segurança, clareza e responsabilidade no contexto de saúde materna. Em vez de modelos generativos, motor curado com detecção de intenção e protocolo de crise.",
      "featured.case.04.title": "O que já está pronto",
      "featured.case.04.item1": "Conversa acolhedora com detecção de intenção e protocolo de crise",
      "featured.case.04.item2": "Biblioteca de conteúdo curado com referências de fontes oficiais",
      "featured.case.04.item3": "Cadastro com verificação de e-mail por código e sessão segura",
      "featured.case.04.item4": "Consentimento granular e fluxo de exclusão de dados (LGPD)",
      "featured.case.04.item5": "Design system próprio, totalmente responsivo",
      "featured.case.05.title": "Próximos passos",
      "featured.case.05.desc": "Refinar a experiência, testar com usuárias, revisar conteúdo e preparar uma versão pública mais segura e estável.",
      "featured.statusNote": "O repositório já está disponível no GitHub. A demo pública entra no ar em breve.",
      "featured.cta.repo": "Ver no GitHub",

      "other.eyebrow": "OUTROS PROJETOS",
      "other.heading": "O que vem por aí.",
      "other.card1.title": "Novos projetos em breve",
      "other.card1.desc": "Estou organizando meus próximos projetos para mostrar aqui com mais contexto, imagens e explicação do processo.",
      "other.card2.title": "Estudos aplicados",
      "other.card2.desc": "Também quero registrar experimentos, interfaces e aprendizados que fazem parte da minha evolução como desenvolvedor.",
      "other.card3.title": "Tem uma ideia?",
      "other.card3.desc": "Se você precisa de uma landing page, site institucional ou interface simples, posso conversar sobre o projeto.",
      "other.card3.cta": "Iniciar conversa",

      "stack.eyebrow": "STACK",
      "stack.heading": "Ferramentas que estou usando e estudando.",
      "stack.lead": "Minha stack está evoluindo junto com meus projetos. Hoje meu foco está em construir interfaces organizadas, responsivas e fáceis de manter.",
      "stack.frontend": "Front-end",
      "stack.frontend.1": "React e Next.js",
      "stack.frontend.2": "TypeScript",
      "stack.frontend.3": "Tailwind CSS",
      "stack.frontend.4": "HTML semântico e CSS moderno",
      "stack.frontend.5": "JavaScript ES6+",
      "stack.backend": "Back-end leve",
      "stack.backend.1": "Node.js (rotas e APIs)",
      "stack.backend.2": "Prisma ORM",
      "stack.backend.3": "SQLite e PostgreSQL",
      "stack.backend.4": "Autenticação com JWT",
      "stack.backend.5": "Validação com Zod",
      "stack.practices": "Boas práticas",
      "stack.practices.1": "Mobile-first e responsividade",
      "stack.practices.2": "Acessibilidade (a11y)",
      "stack.practices.3": "Privacidade e LGPD",
      "stack.practices.4": "Versionamento com Git",
      "stack.practices.5": "Deploy em Vercel e Netlify",

      "contact.eyebrow": "CONTATO",
      "contact.heading": "Vamos conversar.",
      "contact.lead": "Gostou do meu trabalho ou quer trocar uma ideia sobre um projeto? Pode me chamar. Vou ficar feliz em conversar.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",

      "footer.text": "Bruno Cartolano dos Santos. Desenvolvido com HTML, CSS e JavaScript.",
      "footer.top": "Voltar ao topo",

      "aria.whatsapp": "Falar comigo no WhatsApp",
      "aria.email": "Enviar e-mail para bruno.santos.cartolano@gmail.com",
      "aria.instagram": "Instagram @cartolano.bruno",
      "aria.github": "GitHub BCartolano",
      "aria.github.sophia": "Ver código da Sophia no GitHub",
      "aria.linkedin": "LinkedIn de Bruno Cartolano",

      "meta.title": "Bruno Cartolano | Desenvolvedor Front-end",
      "meta.description": "Portfólio de Bruno Cartolano, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor front-end.",
    },

    en: {
      "a11y.skip": "Skip to content",
      "lang.group": "Select language",

      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "nav.cta": "Contact me",

      "hero.pretitle": "Systems Analysis and Development student · Front-end · Building real projects",
      "hero.greeting": "Hi, I’m",
      "hero.name": "Bruno Cartolano.",
      "hero.lead": "I build clear, organized, and useful web interfaces — focused on experience, clean code, and real projects.",
      "hero.subtitle": "I’m a Systems Analysis and Development student, turning study into practice through real projects, with attention to visuals, organization and interface quality.",
      "hero.cta.projects": "View projects",
      "hero.cta.contact": "Contact me",
      "hero.caption": "Systems Analysis and Development student • Front-end • São José dos Campos – SP",

      "about.eyebrow": "ABOUT",
      "about.heading": "How I think, study, and build.",
      "about.p1": "I’ve been focused on growing as a front-end developer, studying and applying concepts of interface design, code organization and web systems development in practice. My goal is to create useful, well-thought-out products that are pleasant to use.",
      "about.p2": "I believe good code is code that delivers real value to the people who use it. That’s why I try to balance the technical side with care for product, accessibility and experience — even in simpler projects.",
      "about.card1.title": "Studying Systems Analysis and Development",
      "about.card1.desc": "Systems Analysis and Development course in progress.",
      "about.card2.title": "Front-end focus",
      "about.card2.desc": "Modern, responsive and organized interfaces with React and Next.",
      "about.card3.title": "Purpose-driven projects",
      "about.card3.desc": "I prefer building things that genuinely help someone.",
      "about.card4.title": "Learning through practice",
      "about.card4.desc": "Every concept I learn becomes part of a real project.",

      "featured.eyebrow": "FEATURED PROJECT",
      "featured.title": "Sophia — support and information for mothers in the postpartum period",
      "featured.lead": "Sophia was born from the idea of creating a space for support, care and information for mothers in the postpartum period, with a safe, sensitive and easy-to-use experience.",
      "featured.badge": "Project in development",
      "featured.intro": "A personal case study — from the reason it exists to the technical decisions and what comes next.",
      "featured.imageCaption": "CONCEPTUAL ILLUSTRATION OF THE PROJECT",
      "featured.case.01.title": "Why I created it",
      "featured.case.01.desc": "I wanted to build something with real usefulness that could speak to a sensitive context. Maternal health in the postpartum period is an area where reliable information and a welcoming tone can make a concrete difference.",
      "featured.case.02.title": "The problem",
      "featured.case.02.desc": "The postpartum period is a time of many questions and vulnerability. Sophia’s proposal is to offer an organized, welcoming and informative environment — without replacing healthcare professionals.",
      "featured.case.03.title": "The technical decision",
      "featured.case.03.desc": "I chose a rule-based approach, with predictable and auditable responses, prioritizing safety, clarity and responsibility in the context of maternal health. Instead of generative models, I used a curated engine with intent detection and a crisis protocol.",
      "featured.case.04.title": "What is already ready",
      "featured.case.04.item1": "Welcoming conversation with intent detection and crisis protocol",
      "featured.case.04.item2": "Curated content library with references from official sources",
      "featured.case.04.item3": "Account creation with e-mail code verification and secure session",
      "featured.case.04.item4": "Granular consent and data deletion flow (LGPD)",
      "featured.case.04.item5": "Custom design system, fully responsive",
      "featured.case.05.title": "Next steps",
      "featured.case.05.desc": "Refine the experience, test with users, review the content and prepare a safer and more stable public version.",
      "featured.statusNote": "The repository is now available on GitHub. A public demo is coming soon.",
      "featured.cta.repo": "View on GitHub",

      "other.eyebrow": "OTHER PROJECTS",
      "other.heading": "What’s coming next.",
      "other.card1.title": "New projects coming soon",
      "other.card1.desc": "I’m organizing my next projects to show them here with more context, images and an explanation of the process.",
      "other.card2.title": "Applied studies",
      "other.card2.desc": "I also want to document experiments, interfaces and learnings that are part of my growth as a developer.",
      "other.card3.title": "Have an idea?",
      "other.card3.desc": "If you need a landing page, institutional website or simple interface, we can talk about the project.",
      "other.card3.cta": "Start a conversation",

      "stack.eyebrow": "STACK",
      "stack.heading": "Tools I’m using and studying.",
      "stack.lead": "My stack is evolving along with my projects. Right now, my focus is on building organized, responsive and easy-to-maintain interfaces.",
      "stack.frontend": "Front-end",
      "stack.frontend.1": "React and Next.js",
      "stack.frontend.2": "TypeScript",
      "stack.frontend.3": "Tailwind CSS",
      "stack.frontend.4": "Semantic HTML and modern CSS",
      "stack.frontend.5": "JavaScript ES6+",
      "stack.backend": "Light back-end",
      "stack.backend.1": "Node.js (routes and APIs)",
      "stack.backend.2": "Prisma ORM",
      "stack.backend.3": "SQLite and PostgreSQL",
      "stack.backend.4": "JWT authentication",
      "stack.backend.5": "Validation with Zod",
      "stack.practices": "Best practices",
      "stack.practices.1": "Mobile-first and responsive design",
      "stack.practices.2": "Accessibility (a11y)",
      "stack.practices.3": "Privacy and LGPD",
      "stack.practices.4": "Version control with Git",
      "stack.practices.5": "Deployment on Vercel and Netlify",

      "contact.eyebrow": "CONTACT",
      "contact.heading": "Let’s talk.",
      "contact.lead": "Did you like my work or want to exchange ideas about a project? Feel free to reach out. I’ll be happy to talk.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",

      "footer.text": "Bruno Cartolano dos Santos. Developed with HTML, CSS and JavaScript.",
      "footer.top": "Back to top",

      "aria.whatsapp": "Contact me on WhatsApp",
      "aria.email": "Send an e-mail to bruno.santos.cartolano@gmail.com",
      "aria.instagram": "Instagram @cartolano.bruno",
      "aria.github": "GitHub BCartolano",
      "aria.github.sophia": "View Sophia's code on GitHub",
      "aria.linkedin": "Bruno Cartolano on LinkedIn",

      "meta.title": "Bruno Cartolano | Front-end Developer",
      "meta.description": "Portfolio of Bruno Cartolano, Systems Analysis and Development student and front-end developer.",
    },

    it: {
      "a11y.skip": "Vai al contenuto",
      "lang.group": "Seleziona lingua",

      "nav.about": "Chi sono",
      "nav.projects": "Progetti",
      "nav.stack": "Stack",
      "nav.contact": "Contatto",
      "nav.cta": "Parla con me",

      "hero.pretitle": "Studente di ADS · Front-end · Costruendo progetti reali",
      "hero.greeting": "Ciao, sono",
      "hero.name": "Bruno Cartolano.",
      "hero.lead": "Costruisco interfacce web chiare, organizzate e utili — con attenzione all’esperienza, al codice pulito e ai progetti reali.",
      "hero.subtitle": "Sono studente di Analisi e Sviluppo di Sistemi e trasformo lo studio in pratica attraverso progetti reali, con attenzione al design, all’organizzazione del codice e alla qualità dell’interfaccia.",
      "hero.cta.projects": "Vedi progetti",
      "hero.cta.contact": "Parla con me",
      "hero.caption": "Studente di ADS • Front-end • São José dos Campos – SP",

      "about.eyebrow": "CHI SONO",
      "about.heading": "Come penso, studio e costruisco.",
      "about.p1": "Mi sto dedicando a crescere come sviluppatore front-end, studiando e applicando nella pratica concetti di interfaccia, organizzazione del codice e costruzione di sistemi web. Il mio obiettivo è creare prodotti utili, ben pensati e piacevoli da usare.",
      "about.p2": "Credo che un buon codice sia quello che offre valore reale a chi lo usa. Per questo cerco di equilibrare la parte tecnica con cura per il prodotto, accessibilità ed esperienza — anche nei progetti più semplici.",
      "about.card1.title": "In formazione in ADS",
      "about.card1.desc": "Corso di Analisi e Sviluppo di Sistemi in corso.",
      "about.card2.title": "Focus sul front-end",
      "about.card2.desc": "Interfacce moderne, responsive e organizzate con React e Next.",
      "about.card3.title": "Progetti con uno scopo",
      "about.card3.desc": "Preferisco costruire cose che aiutino davvero qualcuno.",
      "about.card4.title": "Studio applicato nella pratica",
      "about.card4.desc": "Ogni concetto che imparo diventa una parte di un progetto reale.",

      "featured.eyebrow": "PROGETTO IN EVIDENZA",
      "featured.title": "Sophia — supporto e informazione per madri nel puerperio",
      "featured.lead": "Sophia è nata dall’idea di creare uno spazio di supporto, accoglienza e informazione per madri nel puerperio, con un’esperienza sicura, sensibile e facile da usare.",
      "featured.badge": "Progetto in sviluppo",
      "featured.intro": "Un caso studio personale — dal motivo della sua esistenza alle decisioni tecniche e ai prossimi passi.",
      "featured.imageCaption": "ILLUSTRAZIONE CONCETTUALE DEL PROGETTO",
      "featured.case.01.title": "Perché l’ho creato",
      "featured.case.01.desc": "Volevo costruire qualcosa con un’utilità reale e capace di dialogare con un contesto sensibile. La salute materna nel puerperio è uno spazio in cui informazioni affidabili e un tono accogliente possono fare una differenza concreta.",
      "featured.case.02.title": "Il problema",
      "featured.case.02.desc": "Il post-parto è un periodo di molti dubbi e vulnerabilità. La proposta di Sophia è offrire un ambiente organizzato, accogliente e informativo — senza sostituire i professionisti della salute.",
      "featured.case.03.title": "La decisione tecnica",
      "featured.case.03.desc": "Ho scelto un approccio basato su regole, con risposte prevedibili e verificabili, dando priorità a sicurezza, chiarezza e responsabilità nel contesto della salute materna. Invece di modelli generativi, un motore curato con rilevamento dell’intenzione e protocollo di crisi.",
      "featured.case.04.title": "Cosa è già pronto",
      "featured.case.04.item1": "Conversazione accogliente con rilevamento dell’intenzione e protocollo di crisi",
      "featured.case.04.item2": "Biblioteca di contenuti curati con riferimenti a fonti ufficiali",
      "featured.case.04.item3": "Registrazione con verifica e-mail tramite codice e sessione sicura",
      "featured.case.04.item4": "Consenso granulare e flusso di eliminazione dei dati (LGPD)",
      "featured.case.04.item5": "Design system proprio, completamente responsive",
      "featured.case.05.title": "Prossimi passi",
      "featured.case.05.desc": "Rifinire l’esperienza, testare con utenti, revisionare i contenuti e preparare una versione pubblica più sicura e stabile.",
      "featured.statusNote": "Il repository è ora disponibile su GitHub. Una demo pubblica arriverà a breve.",
      "featured.cta.repo": "Vedi su GitHub",

      "other.eyebrow": "ALTRI PROGETTI",
      "other.heading": "Cosa arriverà prossimamente.",
      "other.card1.title": "Nuovi progetti in arrivo",
      "other.card1.desc": "Sto organizzando i miei prossimi progetti per mostrarli qui con più contesto, immagini e spiegazione del processo.",
      "other.card2.title": "Studi applicati",
      "other.card2.desc": "Voglio anche registrare esperimenti, interfacce e apprendimenti che fanno parte della mia evoluzione come sviluppatore.",
      "other.card3.title": "Hai un’idea?",
      "other.card3.desc": "Se hai bisogno di una landing page, un sito istituzionale o un’interfaccia semplice, possiamo parlare del progetto.",
      "other.card3.cta": "Inizia conversazione",

      "stack.eyebrow": "STACK",
      "stack.heading": "Strumenti che sto usando e studiando.",
      "stack.lead": "La mia stack si sta evolvendo insieme ai miei progetti. Oggi il mio focus è costruire interfacce organizzate, responsive e facili da mantenere.",
      "stack.frontend": "Front-end",
      "stack.frontend.1": "React e Next.js",
      "stack.frontend.2": "TypeScript",
      "stack.frontend.3": "Tailwind CSS",
      "stack.frontend.4": "HTML semantico e CSS moderno",
      "stack.frontend.5": "JavaScript ES6+",
      "stack.backend": "Back-end leggero",
      "stack.backend.1": "Node.js (rotte e API)",
      "stack.backend.2": "Prisma ORM",
      "stack.backend.3": "SQLite e PostgreSQL",
      "stack.backend.4": "Autenticazione con JWT",
      "stack.backend.5": "Validazione con Zod",
      "stack.practices": "Buone pratiche",
      "stack.practices.1": "Mobile-first e responsività",
      "stack.practices.2": "Accessibilità (a11y)",
      "stack.practices.3": "Privacy e LGPD",
      "stack.practices.4": "Versionamento con Git",
      "stack.practices.5": "Deploy su Vercel e Netlify",

      "contact.eyebrow": "CONTATTO",
      "contact.heading": "Parliamone.",
      "contact.lead": "Ti è piaciuto il mio lavoro o vuoi scambiare un’idea su un progetto? Scrivimi. Sarò felice di parlare.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",

      "footer.text": "Bruno Cartolano dos Santos. Sviluppato con HTML, CSS e JavaScript.",
      "footer.top": "Torna all’inizio",

      "aria.whatsapp": "Parla con me su WhatsApp",
      "aria.email": "Invia un’e-mail a bruno.santos.cartolano@gmail.com",
      "aria.instagram": "Instagram @cartolano.bruno",
      "aria.github": "GitHub BCartolano",
      "aria.github.sophia": "Vedi il codice di Sophia su GitHub",
      "aria.linkedin": "LinkedIn di Bruno Cartolano",

      "meta.title": "Bruno Cartolano | Sviluppatore Front-end",
      "meta.description": "Portfolio di Bruno Cartolano, studente di Analisi e Sviluppo di Sistemi e sviluppatore front-end.",
    },

    fr: {
      "a11y.skip": "Aller au contenu",
      "lang.group": "Choisir la langue",

      "nav.about": "À propos",
      "nav.projects": "Projets",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "nav.cta": "Me contacter",

      "hero.pretitle": "Étudiant en ADS · Front-end · Création de projets réels",
      "hero.greeting": "Bonjour, je suis",
      "hero.name": "Bruno Cartolano.",
      "hero.lead": "Je crée des interfaces web claires, organisées et utiles — pensées pour l’expérience, un code propre et des projets concrets.",
      "hero.subtitle": "Je suis étudiant en Analyse et Développement de Systèmes et je transforme mes études en pratique grâce à des projets réels, avec une attention particulière au visuel, à l’organisation et à la qualité de l’interface.",
      "hero.cta.projects": "Voir les projets",
      "hero.cta.contact": "Me contacter",
      "hero.caption": "Étudiant en ADS • Front-end • São José dos Campos – SP",

      "about.eyebrow": "À PROPOS",
      "about.heading": "Comment je pense, j’étudie et je construis.",
      "about.p1": "Je me consacre à évoluer comme développeur front-end, en étudiant et en appliquant dans la pratique des concepts d’interface, d’organisation du code et de construction de systèmes web. Mon objectif est de créer des produits utiles, bien pensés et agréables à utiliser.",
      "about.p2": "Je crois qu’un bon code est celui qui apporte une vraie valeur à celles et ceux qui l’utilisent. C’est pourquoi j’essaie d’équilibrer la partie technique avec le soin apporté au produit, à l’accessibilité et à l’expérience — même dans les projets les plus simples.",
      "about.card1.title": "En formation en ADS",
      "about.card1.desc": "Formation en Analyse et Développement de Systèmes en cours.",
      "about.card2.title": "Focus front-end",
      "about.card2.desc": "Interfaces modernes, responsives et organisées avec React et Next.",
      "about.card3.title": "Projets avec du sens",
      "about.card3.desc": "Je préfère construire des choses qui aident vraiment quelqu’un.",
      "about.card4.title": "Étude appliquée à la pratique",
      "about.card4.desc": "Chaque concept que j’apprends devient une partie d’un projet réel.",

      "featured.eyebrow": "PROJET MIS EN AVANT",
      "featured.title": "Sophia — soutien et information pour les mères en post-partum",
      "featured.lead": "Sophia est née de l’idée de créer un espace de soutien, d’accueil et d’information pour les mères en post-partum, avec une expérience sûre, sensible et facile à utiliser.",
      "featured.badge": "Projet en développement",
      "featured.intro": "Une étude de cas personnelle — de la raison d’exister aux décisions techniques et aux prochaines étapes.",
      "featured.imageCaption": "ILLUSTRATION CONCEPTUELLE DU PROJET",
      "featured.case.01.title": "Pourquoi je l’ai créé",
      "featured.case.01.desc": "Je voulais construire quelque chose avec une utilité réelle et capable de dialoguer avec un contexte sensible. La santé maternelle en post-partum est un domaine où une information fiable et un ton accueillant peuvent faire une différence concrète.",
      "featured.case.02.title": "Le problème",
      "featured.case.02.desc": "Le post-partum est une période de nombreux doutes et de vulnérabilité. La proposition de Sophia est d’offrir un environnement organisé, accueillant et informatif — sans remplacer les professionnels de santé.",
      "featured.case.03.title": "La décision technique",
      "featured.case.03.desc": "J’ai choisi une approche basée sur des règles, avec des réponses prévisibles et vérifiables, en donnant la priorité à la sécurité, à la clarté et à la responsabilité dans le contexte de la santé maternelle. Au lieu de modèles génératifs, un moteur curé avec détection d’intention et protocole de crise.",
      "featured.case.04.title": "Ce qui est déjà prêt",
      "featured.case.04.item1": "Conversation accueillante avec détection d’intention et protocole de crise",
      "featured.case.04.item2": "Bibliothèque de contenus curés avec références à des sources officielles",
      "featured.case.04.item3": "Inscription avec vérification par code e-mail et session sécurisée",
      "featured.case.04.item4": "Consentement granulaire et flux de suppression des données (LGPD)",
      "featured.case.04.item5": "Design system propre, entièrement responsive",
      "featured.case.05.title": "Prochaines étapes",
      "featured.case.05.desc": "Affiner l’expérience, tester avec des utilisatrices, réviser le contenu et préparer une version publique plus sûre et stable.",
      "featured.statusNote": "Le dépôt est désormais disponible sur GitHub. Une démo publique sera mise en ligne bientôt.",
      "featured.cta.repo": "Voir sur GitHub",

      "other.eyebrow": "AUTRES PROJETS",
      "other.heading": "Ce qui arrive bientôt.",
      "other.card1.title": "Nouveaux projets bientôt",
      "other.card1.desc": "J’organise mes prochains projets pour les présenter ici avec plus de contexte, d’images et d’explication du processus.",
      "other.card2.title": "Études appliquées",
      "other.card2.desc": "Je veux aussi enregistrer des expérimentations, des interfaces et des apprentissages qui font partie de mon évolution comme développeur.",
      "other.card3.title": "Vous avez une idée ?",
      "other.card3.desc": "Si vous avez besoin d’une landing page, d’un site institutionnel ou d’une interface simple, nous pouvons en discuter.",
      "other.card3.cta": "Démarrer une conversation",

      "stack.eyebrow": "STACK",
      "stack.heading": "Outils que j’utilise et que j’étudie.",
      "stack.lead": "Ma stack évolue avec mes projets. Aujourd’hui, mon objectif est de construire des interfaces organisées, responsives et faciles à maintenir.",
      "stack.frontend": "Front-end",
      "stack.frontend.1": "React et Next.js",
      "stack.frontend.2": "TypeScript",
      "stack.frontend.3": "Tailwind CSS",
      "stack.frontend.4": "HTML sémantique et CSS moderne",
      "stack.frontend.5": "JavaScript ES6+",
      "stack.backend": "Back-end léger",
      "stack.backend.1": "Node.js (routes et API)",
      "stack.backend.2": "Prisma ORM",
      "stack.backend.3": "SQLite et PostgreSQL",
      "stack.backend.4": "Authentification avec JWT",
      "stack.backend.5": "Validation avec Zod",
      "stack.practices": "Bonnes pratiques",
      "stack.practices.1": "Mobile-first et responsivité",
      "stack.practices.2": "Accessibilité (a11y)",
      "stack.practices.3": "Confidentialité et LGPD",
      "stack.practices.4": "Versioning avec Git",
      "stack.practices.5": "Déploiement sur Vercel et Netlify",

      "contact.eyebrow": "CONTACT",
      "contact.heading": "Parlons-en.",
      "contact.lead": "Vous avez aimé mon travail ou vous voulez échanger une idée sur un projet ? Vous pouvez me contacter. Je serai heureux d’en discuter.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",

      "footer.text": "Bruno Cartolano dos Santos. Développé avec HTML, CSS et JavaScript.",
      "footer.top": "Retour en haut",

      "aria.whatsapp": "Me contacter sur WhatsApp",
      "aria.email": "Envoyer un e-mail à bruno.santos.cartolano@gmail.com",
      "aria.instagram": "Instagram @cartolano.bruno",
      "aria.github": "GitHub BCartolano",
      "aria.github.sophia": "Voir le code de Sophia sur GitHub",
      "aria.linkedin": "LinkedIn de Bruno Cartolano",

      "meta.title": "Bruno Cartolano | Développeur Front-end",
      "meta.description": "Portfolio de Bruno Cartolano, étudiant en Analyse et Développement de Systèmes et développeur front-end.",
    },
  };

  const SUPPORTED_LANGS = ["pt", "en", "it", "fr"];
  const STORAGE_KEY = "bc.lang";
  const HTML_LANG_MAP = { pt: "pt-BR", en: "en", it: "it", fr: "fr" };

  const isLangSupported = (lang) => SUPPORTED_LANGS.includes(lang);

  const getInitialLang = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isLangSupported(saved)) return saved;
    } catch (_) {
      /* localStorage indisponível — segue para fallback */
    }
    return "pt";
  };

  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = dict[key];
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.description"]) {
      metaDesc.setAttribute("content", dict["meta.description"]);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict["meta.title"]) {
      ogTitle.setAttribute("content", dict["meta.title"]);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict["meta.description"]) {
      ogDesc.setAttribute("content", dict["meta.description"]);
    }

    document.documentElement.setAttribute("lang", HTML_LANG_MAP[lang] || lang);
  };

  const updateLangButtons = (lang) => {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });
  };

  const setLanguage = (lang) => {
    if (!isLangSupported(lang)) return;
    applyTranslations(lang);
    updateLangButtons(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* localStorage bloqueado em modo privado — apenas ignora */
    }
  };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang) setLanguage(lang);
    });
  });

  setLanguage(getInitialLang());

  /* ==========================================================================
     UI helpers (não relacionados a i18n)
     ========================================================================== */

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* Ano dinâmico no rodapé */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Sombra na nav ao rolar */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ==========================================================================
     Smooth scroll interno com URL limpa (sem hash)
     ========================================================================== */

  const SCROLL_DURATION = 650;
  const SCROLL_SAFE_GAP = 16;
  const FOCUS_CLASS = "section--focus";
  const FOCUS_DURATION = 900;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const getNavOffset = () => {
    if (!nav) return 0;
    return Math.round(nav.getBoundingClientRect().height) + SCROLL_SAFE_GAP;
  };

  const computeTargetY = (target) => {
    const rect = target.getBoundingClientRect();
    const absoluteY = rect.top + window.pageYOffset;
    const max = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    return Math.min(Math.max(0, absoluteY - getNavOffset()), max);
  };

  let scrollRaf = null;

  const cancelScroll = () => {
    if (scrollRaf !== null) {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = null;
    }
  };

  const stopScrollOnUserInput = () => cancelScroll();

  const smoothScrollTo = (endY) => {
    const startY = window.pageYOffset;
    const distance = endY - startY;

    if (Math.abs(distance) < 2) {
      window.scrollTo(0, endY);
      return;
    }

    if (prefersReducedMotion) {
      window.scrollTo(0, endY);
      return;
    }

    cancelScroll();

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / SCROLL_DURATION);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, startY + distance * eased);

      if (t < 1) {
        scrollRaf = requestAnimationFrame(step);
      } else {
        scrollRaf = null;
      }
    };

    scrollRaf = requestAnimationFrame(step);
  };

  window.addEventListener("wheel", stopScrollOnUserInput, { passive: true });
  window.addEventListener("touchstart", stopScrollOnUserInput, { passive: true });
  window.addEventListener("keydown", (e) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ].includes(e.key)
    ) {
      stopScrollOnUserInput();
    }
  });

  let focusTimer = null;

  const flashFocus = (el) => {
    if (!el || prefersReducedMotion) return;
    if (focusTimer !== null) {
      clearTimeout(focusTimer);
    }
    document
      .querySelectorAll("." + FOCUS_CLASS)
      .forEach((node) => node.classList.remove(FOCUS_CLASS));

    void el.offsetWidth;
    el.classList.add(FOCUS_CLASS);

    focusTimer = window.setTimeout(() => {
      el.classList.remove(FOCUS_CLASS);
      focusTimer = null;
    }, FOCUS_DURATION);
  };

  const cleanUrlHash = () => {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  const handleInternalLinkClick = (event) => {
    const link = event.currentTarget;
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const isTop = href === "#top";
    const target = isTop ? null : document.querySelector(href);

    if (!isTop && !target) return;

    event.preventDefault();

    const endY = isTop ? 0 : computeTargetY(target);
    smoothScrollTo(endY);

    if (!isTop && target) {
      const focusEl =
        target.classList.contains("section") ||
        target.tagName === "SECTION"
          ? target
          : target.closest(".section") || target;
      flashFocus(focusEl);
    }

    cleanUrlHash();

    if (typeof link.blur === "function") link.blur();
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", handleInternalLinkClick);
  });

  cleanUrlHash();

  /* Menu mobile */
  const hamburger = document.querySelector(".nav__hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMenu = () => {
    if (!hamburger || !mobileMenu) return;
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("is-open", !isOpen);
      mobileMenu.setAttribute("aria-hidden", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transitionDelay = `${Math.min(idx * 50, 200)}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
