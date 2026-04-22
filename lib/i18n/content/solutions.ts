import { type Locale } from "@/lib/i18n/config";

interface SolutionTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  problem: { title: string; description: string; points: string[] };
  solution: { title: string; description: string; points: string[] };
  benefits: Array<{ title: string; description: string }>;
  howItWorks: Array<{ title: string; description: string }>;
  results: Array<{ label: string }>;
  testimonial: { quote: string; author: string; role: string };
  faqs: Array<{ question: string; answer: string }>;
  ctaText: string;
}

type NonEnLocale = Exclude<Locale, "en">;

const solutionTranslations: Record<string, Partial<Record<NonEnLocale, SolutionTranslation>>> = {
  "no-editing-skills": {
    es: {
      name: "Sin Habilidades de Edicion",
      heroHeadline: "Crea Videos Profesionales Sin Saber Editar",
      heroSubheadline: "Olvida los meses de tutoriales y software caro. La IA de Hyreel hace la edicion por ti — solo sube una foto y obtén un video.",
      metaTitle: "Crea Videos Sin Habilidades de Edicion | Hyreel AI",
      metaDescription: "Sin experiencia en edicion de video? No hay problema. La IA de Hyreel crea videos profesionales de tus fotos automaticamente. Cero curva de aprendizaje, resultados instantaneos.",
      problem: {
        title: "La Edicion de Video es Dificil",
        description: "La edicion de video tradicional requiere meses de aprendizaje, software caro y horas de trabajo por cada video.",
        points: [
          "El software de edicion tiene curvas de aprendizaje pronunciadas",
          "Las herramientas profesionales cuestan cientos de dolares",
          "Cada video toma horas en crearse",
          "Los resultados aun parecen amateurs sin experiencia",
          "No hay tiempo para aprender cuando necesitas contenido ahora"
        ]
      },
      solution: {
        title: "Deja que la IA Haga la Edicion",
        description: "La IA de Hyreel maneja todo el trabajo tecnico de edicion. Tu proporcionas la direccion creativa — una foto y una eleccion de efecto — y obtienes resultados profesionales al instante.",
        points: [
          "Sube cualquier foto de tu galeria",
          "Elige entre efectos de movimiento cinematicos",
          "La IA genera video profesional automaticamente",
          "Exporta y comparte en segundos",
          "Sin linea de tiempo de edicion, sin keyframes, sin complejidad"
        ]
      },
      benefits: [
        { title: "Cero Curva de Aprendizaje", description: "Crea tu primer video en menos de un minuto. Sin tutoriales necesarios." },
        { title: "Sin Software Caro", description: "$9.99/mes vs. cientos por herramientas de edicion profesionales." },
        { title: "Resultados Profesionales", description: "Efectos cinematicos que parecen horas de edicion." },
        { title: "Crea en Cualquier Lugar", description: "App iOS completa — crea videos profesionales en tu telefono." }
      ],
      howItWorks: [
        { title: "Sube Tu Foto", description: "Elige cualquier foto de tu galeria" },
        { title: "Selecciona un Efecto", description: "Elige entre zoom, orbita, parallax y mas" },
        { title: "La IA Crea Tu Video", description: "Mira como Hyreel genera movimiento profesional" },
        { title: "Exporta y Comparte", description: "Descarga o comparte directamente en redes sociales" }
      ],
      results: [
        { label: "Primer Video" },
        { label: "Habilidades Necesarias" },
        { label: "Resultados de Calidad" },
        { label: "Por Video" }
      ],
      testimonial: {
        quote: "Nunca he editado un video en mi vida. Con Hyreel, creo contenido que parece que contrate a un profesional. Mis seguidores no saben que no soy experto en video.",
        author: "Amanda S.",
        role: "Propietaria de Pequena Empresa"
      },
      faqs: [
        { question: "Realmente necesito cero experiencia en edicion?", answer: "Absolutamente cero. Si puedes tomar una foto y tocar un boton, puedes usar Hyreel. La IA maneja todo el trabajo tecnico." },
        { question: "Mis videos se veran amateurs?", answer: "No! Los efectos de movimiento de Hyreel estan disenados por profesionales. Los resultados parecen horas de edicion en software profesional." },
        { question: "Que pasa si quiero mas control?", answer: "Hyreel te permite personalizar la intensidad del efecto, velocidad, direccion y mas. Empieza simple, agrega complejidad cuando te sientas comodo." },
        { question: "Es mas facil que aprender CapCut o Premiere?", answer: "Dramaticamente mas facil. Esas herramientas toman semanas en aprender. Hyreel toma minutos. La mayoria de usuarios crean su primer video en menos de 60 segundos." }
      ],
      ctaText: "Crea Tu Primer Video Gratis"
    },
    de: {
      name: "Keine Bearbeitungskenntnisse",
      heroHeadline: "Professionelle Videos Ohne Bearbeitungskenntnisse",
      heroSubheadline: "Uberspringe monatelanges Lernen und teure Software. Hyreels KI erledigt die Bearbeitung — lade ein Foto hoch und erhalte ein Video.",
      metaTitle: "Videos Erstellen Ohne Bearbeitungskenntnisse | Hyreel AI",
      metaDescription: "Keine Videobearbeitungserfahrung? Kein Problem. Hyreels KI erstellt professionelle Videos aus deinen Fotos automatisch. Null Lernkurve, sofortige Ergebnisse.",
      problem: {
        title: "Videobearbeitung ist Schwer",
        description: "Traditionelle Videobearbeitung erfordert Monate des Lernens, teure Software und stundenlange Arbeit fur jedes Video.",
        points: [
          "Bearbeitungssoftware hat steile Lernkurven",
          "Professionelle Tools kosten Hunderte von Euro",
          "Jedes Video dauert Stunden",
          "Ergebnisse sehen ohne Erfahrung amateurhaft aus",
          "Keine Zeit zum Lernen wenn du jetzt Content brauchst"
        ]
      },
      solution: {
        title: "Lass die KI Bearbeiten",
        description: "Hyreels KI ubernimmt die gesamte technische Bearbeitungsarbeit. Du gibst die kreative Richtung vor — ein Foto und eine Effektauswahl — und erhaltst sofort professionelle Ergebnisse.",
        points: [
          "Lade ein beliebiges Foto aus deiner Galerie hoch",
          "Wahle aus kinematischen Bewegungseffekten",
          "KI generiert automatisch professionelles Video",
          "Exportiere und teile in Sekunden",
          "Keine Bearbeitungs-Timeline, keine Keyframes, keine Komplexitat"
        ]
      },
      benefits: [
        { title: "Null Lernkurve", description: "Erstelle dein erstes Video in unter einer Minute. Keine Tutorials notig." },
        { title: "Keine Teure Software", description: "9,99€/Monat vs. Hunderte fur professionelle Bearbeitungstools." },
        { title: "Professionelle Ergebnisse", description: "Kinematische Effekte die nach stundenlanger Bearbeitung aussehen." },
        { title: "Uberall Erstellen", description: "Vollstandige iOS-App — erstelle professionelle Videos auf deinem Handy." }
      ],
      howItWorks: [
        { title: "Lade Dein Foto Hoch", description: "Wahle ein beliebiges Foto aus deiner Galerie" },
        { title: "Wahle einen Effekt", description: "Wahle aus Zoom, Orbit, Parallax und mehr" },
        { title: "KI Erstellt Dein Video", description: "Sieh zu wie Hyreel professionelle Bewegung generiert" },
        { title: "Exportiere und Teile", description: "Lade herunter oder teile direkt in sozialen Medien" }
      ],
      results: [
        { label: "Erstes Video" },
        { label: "Fahigkeiten Benotigt" },
        { label: "Qualitats-Ergebnisse" },
        { label: "Pro Video" }
      ],
      testimonial: {
        quote: "Ich habe noch nie ein Video bearbeitet. Mit Hyreel erstelle ich Content der aussieht als hatte ich einen Profi engagiert. Meine Follower wissen nicht dass ich kein Video-Experte bin.",
        author: "Amanda S.",
        role: "Kleinunternehmerin"
      },
      faqs: [
        { question: "Brauche ich wirklich null Bearbeitungserfahrung?", answer: "Absolut null. Wenn du ein Foto machen und einen Button drucken kannst, kannst du Hyreel nutzen. Die KI ubernimmt die gesamte technische Arbeit." },
        { question: "Werden meine Videos amateurhaft aussehen?", answer: "Nein! Hyreels Bewegungseffekte wurden von Profis entworfen. Die Ergebnisse sehen aus wie stundenlange Bearbeitung in professioneller Software." },
        { question: "Was wenn ich mehr Kontrolle mochte?", answer: "Hyreel lasst dich Effektintensitat, Geschwindigkeit, Richtung und mehr anpassen. Starte einfach, fuge Komplexitat hinzu wenn du dich wohl fuhlst." },
        { question: "Ist das einfacher als CapCut oder Premiere zu lernen?", answer: "Dramatisch einfacher. Diese Tools brauchen Wochen zum Lernen. Hyreel braucht Minuten. Die meisten Nutzer erstellen ihr erstes Video in unter 60 Sekunden." }
      ],
      ctaText: "Erstelle Dein Erstes Video Kostenlos"
    },
    fr: {
      name: "Sans Competences de Montage",
      heroHeadline: "Creez des Videos Pro Sans Savoir Monter",
      heroSubheadline: "Oubliez les mois de tutoriels et logiciels couteux. L'IA de Hyreel fait le montage — uploadez une photo et obtenez une video.",
      metaTitle: "Creez des Videos Sans Competences de Montage | Hyreel AI",
      metaDescription: "Pas d'experience en montage video? Pas de probleme. L'IA de Hyreel cree des videos professionnelles a partir de vos photos automatiquement. Zero courbe d'apprentissage, resultats instantanes.",
      problem: {
        title: "Le Montage Video est Difficile",
        description: "Le montage video traditionnel necessite des mois d'apprentissage, des logiciels couteux et des heures de travail pour chaque video.",
        points: [
          "Les logiciels de montage ont des courbes d'apprentissage abruptes",
          "Les outils professionnels coutent des centaines d'euros",
          "Chaque video prend des heures a creer",
          "Les resultats semblent amateurs sans experience",
          "Pas de temps pour apprendre quand vous avez besoin de contenu maintenant"
        ]
      },
      solution: {
        title: "Laissez l'IA Faire le Montage",
        description: "L'IA de Hyreel gere tout le travail technique de montage. Vous fournissez la direction creative — une photo et un choix d'effet — et obtenez des resultats professionnels instantanement.",
        points: [
          "Telechargez n'importe quelle photo de votre galerie",
          "Choisissez parmi les effets de mouvement cinematiques",
          "L'IA genere automatiquement une video professionnelle",
          "Exportez et partagez en secondes",
          "Pas de timeline de montage, pas de keyframes, pas de complexite"
        ]
      },
      benefits: [
        { title: "Zero Courbe d'Apprentissage", description: "Creez votre premiere video en moins d'une minute. Pas de tutoriels necessaires." },
        { title: "Pas de Logiciel Couteux", description: "9,99€/mois vs. des centaines pour les outils de montage professionnels." },
        { title: "Resultats Professionnels", description: "Effets cinematiques qui semblent des heures de montage." },
        { title: "Creez Partout", description: "Application iOS complete — creez des videos professionnelles sur votre telephone." }
      ],
      howItWorks: [
        { title: "Telechargez Votre Photo", description: "Choisissez n'importe quelle photo de votre galerie" },
        { title: "Selectionnez un Effet", description: "Choisissez parmi zoom, orbite, parallax et plus" },
        { title: "L'IA Cree Votre Video", description: "Regardez Hyreel generer un mouvement professionnel" },
        { title: "Exportez et Partagez", description: "Telechargez ou partagez directement sur les reseaux sociaux" }
      ],
      results: [
        { label: "Premiere Video" },
        { label: "Competences Requises" },
        { label: "Resultats de Qualite" },
        { label: "Par Video" }
      ],
      testimonial: {
        quote: "Je n'ai jamais monte de video de ma vie. Avec Hyreel, je cree du contenu qui semble professionnel. Mes abonnes ne savent pas que je ne suis pas un expert video.",
        author: "Amanda S.",
        role: "Proprietaire de Petite Entreprise"
      },
      faqs: [
        { question: "Ai-je vraiment besoin de zero experience en montage?", answer: "Absolument zero. Si vous pouvez prendre une photo et appuyer sur un bouton, vous pouvez utiliser Hyreel. L'IA gere tout le travail technique." },
        { question: "Mes videos auront-elles l'air amateurs?", answer: "Non! Les effets de mouvement de Hyreel sont concus par des professionnels. Les resultats semblent des heures de montage dans un logiciel professionnel." },
        { question: "Et si je veux plus de controle?", answer: "Hyreel vous permet de personnaliser l'intensite de l'effet, la vitesse, la direction et plus. Commencez simple, ajoutez de la complexite quand vous etes a l'aise." },
        { question: "Est-ce plus facile que d'apprendre CapCut ou Premiere?", answer: "Dramatiquement plus facile. Ces outils prennent des semaines a apprendre. Hyreel prend des minutes. La plupart des utilisateurs creent leur premiere video en moins de 60 secondes." }
      ],
      ctaText: "Creez Votre Premiere Video Gratuitement"
    },
    pt: {
      name: "Sem Habilidades de Edicao",
      heroHeadline: "Crie Videos Profissionais Sem Saber Editar",
      heroSubheadline: "Esqueca meses de tutoriais e software caro. A IA do Hyreel faz a edicao — envie uma foto e obtenha um video.",
      metaTitle: "Crie Videos Sem Habilidades de Edicao | Hyreel AI",
      metaDescription: "Sem experiencia em edicao de video? Sem problema. A IA do Hyreel cria videos profissionais de suas fotos automaticamente. Zero curva de aprendizado, resultados instantaneos.",
      problem: {
        title: "Edicao de Video e Dificil",
        description: "A edicao de video tradicional requer meses de aprendizado, software caro e horas de trabalho para cada video.",
        points: [
          "Software de edicao tem curvas de aprendizado ingremes",
          "Ferramentas profissionais custam centenas de reais",
          "Cada video leva horas para criar",
          "Resultados ainda parecem amadores sem experiencia",
          "Sem tempo para aprender quando voce precisa de conteudo agora"
        ]
      },
      solution: {
        title: "Deixe a IA Fazer a Edicao",
        description: "A IA do Hyreel cuida de todo o trabalho tecnico de edicao. Voce fornece a direcao criativa — uma foto e uma escolha de efeito — e obtem resultados profissionais instantaneamente.",
        points: [
          "Envie qualquer foto da sua galeria",
          "Escolha entre efeitos de movimento cinematicos",
          "IA gera video profissional automaticamente",
          "Exporte e compartilhe em segundos",
          "Sem linha do tempo de edicao, sem keyframes, sem complexidade"
        ]
      },
      benefits: [
        { title: "Zero Curva de Aprendizado", description: "Crie seu primeiro video em menos de um minuto. Sem tutoriais necessarios." },
        { title: "Sem Software Caro", description: "R$49,99/mes vs. centenas por ferramentas de edicao profissionais." },
        { title: "Resultados Profissionais", description: "Efeitos cinematicos que parecem horas de edicao." },
        { title: "Crie em Qualquer Lugar", description: "App iOS completo — crie videos profissionais no seu celular." }
      ],
      howItWorks: [
        { title: "Envie Sua Foto", description: "Escolha qualquer foto da sua galeria" },
        { title: "Selecione um Efeito", description: "Escolha entre zoom, orbita, parallax e mais" },
        { title: "IA Cria Seu Video", description: "Veja o Hyreel gerar movimento profissional" },
        { title: "Exporte e Compartilhe", description: "Baixe ou compartilhe diretamente nas redes sociais" }
      ],
      results: [
        { label: "Primeiro Video" },
        { label: "Habilidades Necessarias" },
        { label: "Resultados de Qualidade" },
        { label: "Por Video" }
      ],
      testimonial: {
        quote: "Nunca editei um video na minha vida. Com o Hyreel, crio conteudo que parece que contratei um profissional. Meus seguidores nao sabem que nao sou especialista em video.",
        author: "Amanda S.",
        role: "Proprietaria de Pequeno Negocio"
      },
      faqs: [
        { question: "Eu realmente preciso de zero experiencia em edicao?", answer: "Absolutamente zero. Se voce pode tirar uma foto e tocar um botao, voce pode usar o Hyreel. A IA cuida de todo o trabalho tecnico." },
        { question: "Meus videos vao parecer amadores?", answer: "Nao! Os efeitos de movimento do Hyreel sao projetados por profissionais. Os resultados parecem horas de edicao em software profissional." },
        { question: "E se eu quiser mais controle?", answer: "O Hyreel permite personalizar intensidade do efeito, velocidade, direcao e mais. Comece simples, adicione complexidade quando se sentir confortavel." },
        { question: "E mais facil do que aprender CapCut ou Premiere?", answer: "Dramaticamente mais facil. Essas ferramentas levam semanas para aprender. Hyreel leva minutos. A maioria dos usuarios cria seu primeiro video em menos de 60 segundos." }
      ],
      ctaText: "Crie Seu Primeiro Video Gratis"
    },
    ru: {
      name: "Без Навыков Редактирования",
      heroHeadline: "Создавайте Профессиональные Видео Без Навыков Монтажа",
      heroSubheadline: "Забудьте о месяцах обучения и дорогом софте. ИИ Hyreel делает монтаж за вас — загрузите фото и получите видео.",
      metaTitle: "Создавайте Видео Без Навыков Редактирования | Hyreel AI",
      metaDescription: "Нет опыта в монтаже видео? Не проблема. ИИ Hyreel автоматически создает профессиональные видео из ваших фотографий. Нулевая кривая обучения, мгновенные результаты.",
      problem: {
        title: "Монтаж Видео — Это Сложно",
        description: "Традиционный монтаж видео требует месяцев обучения, дорогого программного обеспечения и часов работы над каждым видео.",
        points: [
          "Программы для монтажа имеют крутую кривую обучения",
          "Профессиональные инструменты стоят сотни долларов",
          "На каждое видео уходят часы",
          "Результаты все равно выглядят любительски без опыта",
          "Нет времени учиться когда контент нужен сейчас"
        ]
      },
      solution: {
        title: "Пусть ИИ Делает Монтаж",
        description: "ИИ Hyreel берет на себя всю техническую работу по монтажу. Вы задаете творческое направление — фото и выбор эффекта — и мгновенно получаете профессиональные результаты.",
        points: [
          "Загружайте любое фото из галереи",
          "Выбирайте из кинематографических эффектов движения",
          "ИИ автоматически генерирует профессиональное видео",
          "Экспортируйте и делитесь за секунды",
          "Без временной шкалы, без ключевых кадров, без сложностей"
        ]
      },
      benefits: [
        { title: "Нулевая Кривая Обучения", description: "Создайте первое видео менее чем за минуту. Без туториалов." },
        { title: "Без Дорогого Софта", description: "$9.99/месяц против сотен за профессиональные инструменты." },
        { title: "Профессиональные Результаты", description: "Кинематографические эффекты которые выглядят как часы монтажа." },
        { title: "Создавайте Везде", description: "Полноценное iOS-приложение — создавайте профессиональные видео на телефоне." }
      ],
      howItWorks: [
        { title: "Загрузите Фото", description: "Выберите любое фото из галереи" },
        { title: "Выберите Эффект", description: "Выбирайте из зума, орбиты, параллакса и других" },
        { title: "ИИ Создает Видео", description: "Смотрите как Hyreel генерирует профессиональное движение" },
        { title: "Экспортируйте и Делитесь", description: "Скачайте или поделитесь напрямую в соцсетях" }
      ],
      results: [
        { label: "Первое Видео" },
        { label: "Навыков Требуется" },
        { label: "Качественный Результат" },
        { label: "На Видео" }
      ],
      testimonial: {
        quote: "Я никогда в жизни не монтировал видео. С Hyreel я создаю контент который выглядит профессионально. Мои подписчики не знают что я не эксперт по видео.",
        author: "Аманда С.",
        role: "Владелица Малого Бизнеса"
      },
      faqs: [
        { question: "Мне правда не нужен опыт в монтаже?", answer: "Абсолютно никакого. Если вы можете сделать фото и нажать кнопку, вы можете использовать Hyreel. ИИ берет на себя всю техническую работу." },
        { question: "Мои видео будут выглядеть любительски?", answer: "Нет! Эффекты движения Hyreel разработаны профессионалами. Результаты выглядят как часы работы в профессиональном софте." },
        { question: "А если я хочу больше контроля?", answer: "Hyreel позволяет настраивать интенсивность эффекта, скорость, направление и многое другое. Начните просто, добавляйте сложность по мере освоения." },
        { question: "Это проще чем учить CapCut или Premiere?", answer: "Кардинально проще. На изучение тех инструментов уходят недели. Hyreel — минуты. Большинство пользователей создают первое видео менее чем за 60 секунд." }
      ],
      ctaText: "Создайте Первое Видео Бесплатно"
    },
    it: {
      name: "Senza Competenze di Editing",
      heroHeadline: "Crea Video Professionali Senza Saper Editare",
      heroSubheadline: "Dimentica mesi di tutorial e software costosi. L'IA di Hyreel fa il montaggio — carica una foto e ottieni un video.",
      metaTitle: "Crea Video Senza Competenze di Editing | Hyreel AI",
      metaDescription: "Nessuna esperienza di editing video? Nessun problema. L'IA di Hyreel crea video professionali dalle tue foto automaticamente. Zero curva di apprendimento, risultati istantanei.",
      problem: {
        title: "L'Editing Video e Difficile",
        description: "L'editing video tradizionale richiede mesi di apprendimento, software costosi e ore di lavoro per ogni video.",
        points: [
          "I software di editing hanno curve di apprendimento ripide",
          "Gli strumenti professionali costano centinaia di euro",
          "Ogni video richiede ore per essere creato",
          "I risultati sembrano ancora amatoriali senza esperienza",
          "Non c'e tempo per imparare quando hai bisogno di contenuti adesso"
        ]
      },
      solution: {
        title: "Lascia che l'IA Faccia l'Editing",
        description: "L'IA di Hyreel gestisce tutto il lavoro tecnico di editing. Tu fornisci la direzione creativa — una foto e una scelta di effetto — e ottieni risultati professionali istantaneamente.",
        points: [
          "Carica qualsiasi foto dalla tua galleria",
          "Scegli tra effetti di movimento cinematografici",
          "L'IA genera automaticamente video professionale",
          "Esporta e condividi in secondi",
          "Nessuna timeline di editing, nessun keyframe, nessuna complessita"
        ]
      },
      benefits: [
        { title: "Zero Curva di Apprendimento", description: "Crea il tuo primo video in meno di un minuto. Nessun tutorial necessario." },
        { title: "Nessun Software Costoso", description: "9,99€/mese vs. centinaia per strumenti di editing professionali." },
        { title: "Risultati Professionali", description: "Effetti cinematografici che sembrano ore di editing." },
        { title: "Crea Ovunque", description: "App iOS completa — crea video professionali sul tuo telefono." }
      ],
      howItWorks: [
        { title: "Carica la Tua Foto", description: "Scegli qualsiasi foto dalla tua galleria" },
        { title: "Seleziona un Effetto", description: "Scegli tra zoom, orbita, parallax e altro" },
        { title: "L'IA Crea il Tuo Video", description: "Guarda Hyreel generare movimento professionale" },
        { title: "Esporta e Condividi", description: "Scarica o condividi direttamente sui social media" }
      ],
      results: [
        { label: "Primo Video" },
        { label: "Competenze Richieste" },
        { label: "Risultati di Qualita" },
        { label: "Per Video" }
      ],
      testimonial: {
        quote: "Non ho mai editato un video in vita mia. Con Hyreel, creo contenuti che sembrano professionali. I miei follower non sanno che non sono un esperto di video.",
        author: "Amanda S.",
        role: "Proprietaria di Piccola Impresa"
      },
      faqs: [
        { question: "Ho davvero bisogno di zero esperienza di editing?", answer: "Assolutamente zero. Se puoi scattare una foto e toccare un pulsante, puoi usare Hyreel. L'IA gestisce tutto il lavoro tecnico." },
        { question: "I miei video sembreranno amatoriali?", answer: "No! Gli effetti di movimento di Hyreel sono progettati da professionisti. I risultati sembrano ore di editing in software professionale." },
        { question: "E se voglio piu controllo?", answer: "Hyreel ti permette di personalizzare intensita dell'effetto, velocita, direzione e altro. Inizia semplice, aggiungi complessita quando ti senti a tuo agio." },
        { question: "E piu facile che imparare CapCut o Premiere?", answer: "Drammaticamente piu facile. Quegli strumenti richiedono settimane per imparare. Hyreel richiede minuti. La maggior parte degli utenti crea il primo video in meno di 60 secondi." }
      ],
      ctaText: "Crea il Tuo Primo Video Gratis"
    },
    nl: {
      name: "Geen Bewerkingsvaardigheden",
      heroHeadline: "Professionele Video's Zonder Bewerkingskennis",
      heroSubheadline: "Sla maanden tutorials en dure software over. Hyreels AI doet de bewerking — upload een foto en krijg een video.",
      metaTitle: "Maak Video's Zonder Bewerkingsvaardigheden | Hyreel AI",
      metaDescription: "Geen video-bewerkingservaring? Geen probleem. Hyreels AI maakt automatisch professionele video's van je foto's. Nul leercurve, directe resultaten.",
      problem: {
        title: "Videobewerking is Moeilijk",
        description: "Traditionele videobewerking vereist maanden leren, dure software en uren werk per video.",
        points: [
          "Bewerkingssoftware heeft steile leercurves",
          "Professionele tools kosten honderden euro's",
          "Elke video kost uren om te maken",
          "Resultaten zien er nog steeds amateuristisch uit zonder ervaring",
          "Geen tijd om te leren wanneer je nu content nodig hebt"
        ]
      },
      solution: {
        title: "Laat AI het Bewerken Doen",
        description: "Hyreels AI verzorgt al het technische bewerkingswerk. Jij geeft de creatieve richting — een foto en een effectkeuze — en krijgt direct professionele resultaten.",
        points: [
          "Upload elke foto uit je galerij",
          "Kies uit cinematische bewegingseffecten",
          "AI genereert automatisch professionele video",
          "Exporteer en deel in seconden",
          "Geen bewerkingstijdlijn, geen keyframes, geen complexiteit"
        ]
      },
      benefits: [
        { title: "Nul Leercurve", description: "Maak je eerste video in minder dan een minuut. Geen tutorials nodig." },
        { title: "Geen Dure Software", description: "€9,99/maand vs. honderden voor professionele bewerkingstools." },
        { title: "Professionele Resultaten", description: "Cinematische effecten die eruitzien als uren bewerking." },
        { title: "Maak Overal", description: "Volledige iOS-app — maak professionele video's op je telefoon." }
      ],
      howItWorks: [
        { title: "Upload Je Foto", description: "Kies een foto uit je galerij" },
        { title: "Selecteer een Effect", description: "Kies uit zoom, orbit, parallax en meer" },
        { title: "AI Maakt Je Video", description: "Kijk hoe Hyreel professionele beweging genereert" },
        { title: "Exporteer en Deel", description: "Download of deel direct op sociale media" }
      ],
      results: [
        { label: "Eerste Video" },
        { label: "Vaardigheden Nodig" },
        { label: "Kwaliteitsresultaten" },
        { label: "Per Video" }
      ],
      testimonial: {
        quote: "Ik heb nog nooit een video bewerkt. Met Hyreel maak ik content die eruitziet alsof ik een professional heb ingehuurd. Mijn volgers weten niet dat ik geen video-expert ben.",
        author: "Amanda S.",
        role: "Eigenaar Klein Bedrijf"
      },
      faqs: [
        { question: "Heb ik echt nul bewerkingservaring nodig?", answer: "Absoluut nul. Als je een foto kunt maken en op een knop kunt tikken, kun je Hyreel gebruiken. De AI verzorgt al het technische werk." },
        { question: "Zullen mijn video's er amateuristisch uitzien?", answer: "Nee! Hyreels bewegingseffecten zijn ontworpen door professionals. De resultaten zien eruit als uren bewerking in professionele software." },
        { question: "Wat als ik meer controle wil?", answer: "Hyreel laat je effectintensiteit, snelheid, richting en meer aanpassen. Begin eenvoudig, voeg complexiteit toe wanneer je je comfortabel voelt." },
        { question: "Is dit makkelijker dan CapCut of Premiere leren?", answer: "Dramatisch makkelijker. Die tools kosten weken om te leren. Hyreel kost minuten. De meeste gebruikers maken hun eerste video in minder dan 60 seconden." }
      ],
      ctaText: "Maak Je Eerste Video Gratis"
    },
    pl: {
      name: "Bez Umiejetnosci Edycji",
      heroHeadline: "Tworz Profesjonalne Filmy Bez Umiejetnosci Montazu",
      heroSubheadline: "Zapomnij o miesiacach nauki i drogim oprogramowaniu. AI Hyreel robi montaz — przeslij zdjecie i uzyskaj wideo.",
      metaTitle: "Tworz Filmy Bez Umiejetnosci Edycji | Hyreel AI",
      metaDescription: "Brak doswiadczenia w edycji wideo? Zaden problem. AI Hyreel automatycznie tworzy profesjonalne filmy z Twoich zdjec. Zerowa krzywa uczenia sie, natychmiastowe rezultaty.",
      problem: {
        title: "Edycja Wideo Jest Trudna",
        description: "Tradycyjna edycja wideo wymaga miesiecy nauki, drogiego oprogramowania i godzin pracy nad kazdym filmem.",
        points: [
          "Oprogramowanie do edycji ma strome krzywe uczenia sie",
          "Profesjonalne narzedzia kosztuja setki zlotych",
          "Kazdy film zajmuje godziny",
          "Rezultaty nadal wygladaja amatorsko bez doswiadczenia",
          "Brak czasu na nauke gdy potrzebujesz tresci teraz"
        ]
      },
      solution: {
        title: "Pozwol AI Robic Edycje",
        description: "AI Hyreel zajmuje sie cala techniczna praca edycyjna. Ty podajesz kierunek kreatywny — zdjecie i wybor efektu — i natychmiast otrzymujesz profesjonalne rezultaty.",
        points: [
          "Przeslij dowolne zdjecie z galerii",
          "Wybierz sposrod kinematograficznych efektow ruchu",
          "AI automatycznie generuje profesjonalne wideo",
          "Eksportuj i udostepniaj w sekundy",
          "Bez osi czasu edycji, bez klatek kluczowych, bez zlozonosci"
        ]
      },
      benefits: [
        { title: "Zerowa Krzywa Uczenia Sie", description: "Stworz pierwszy film w mniej niz minute. Bez tutoriali." },
        { title: "Bez Drogiego Oprogramowania", description: "39,99zl/miesiac vs. setki za profesjonalne narzedzia." },
        { title: "Profesjonalne Rezultaty", description: "Kinematograficzne efekty wygladajace jak godziny edycji." },
        { title: "Tworz Wszedzie", description: "Pelna aplikacja iOS — tworz profesjonalne filmy na telefonie." }
      ],
      howItWorks: [
        { title: "Przeslij Swoje Zdjecie", description: "Wybierz dowolne zdjecie z galerii" },
        { title: "Wybierz Efekt", description: "Wybierz sposrod zoom, orbit, parallax i wiecej" },
        { title: "AI Tworzy Twoj Film", description: "Zobacz jak Hyreel generuje profesjonalny ruch" },
        { title: "Eksportuj i Udostepnij", description: "Pobierz lub udostepnij bezposrednio w mediach spolecznosciowych" }
      ],
      results: [
        { label: "Pierwszy Film" },
        { label: "Wymagane Umiejetnosci" },
        { label: "Jakosciowe Rezultaty" },
        { label: "Na Film" }
      ],
      testimonial: {
        quote: "Nigdy w zyciu nie edytowalem filmu. Z Hyreel tworze tresci ktore wygladaja profesjonalnie. Moi obserwujacy nie wiedza ze nie jestem ekspertem od wideo.",
        author: "Amanda S.",
        role: "Wlascicielka Malej Firmy"
      },
      faqs: [
        { question: "Naprawde potrzebuje zero doswiadczenia w edycji?", answer: "Absolutnie zero. Jesli mozesz zrobic zdjecie i nacisnac przycisk, mozesz uzywac Hyreel. AI zajmuje sie cala praca techniczna." },
        { question: "Moje filmy beda wygladac amatorsko?", answer: "Nie! Efekty ruchu Hyreel sa projektowane przez profesjonalistow. Rezultaty wygladaja jak godziny edycji w profesjonalnym oprogramowaniu." },
        { question: "A jesli chce wiecej kontroli?", answer: "Hyreel pozwala dostosowac intensywnosc efektu, predkosc, kierunek i wiecej. Zacznij prosto, dodawaj zlozonosc gdy poczujesz sie komfortowo." },
        { question: "Czy to latwiejsze niz nauka CapCut lub Premiere?", answer: "Dramatycznie latwiejsze. Te narzedzia wymagaja tygodni nauki. Hyreel wymaga minut. Wiekszosc uzytkownikow tworzy pierwszy film w mniej niz 60 sekund." }
      ],
      ctaText: "Stworz Swoj Pierwszy Film Za Darmo"
    },
    ja: {
      name: "編集スキル不要",
      heroHeadline: "編集スキルなしでプロフェッショナルな動画を作成",
      heroSubheadline: "何ヶ月ものチュートリアルや高価なソフトウェアを忘れましょう。HyreelのAIが編集を行います — 写真をアップロードして動画を取得。",
      metaTitle: "編集スキルなしで動画作成 | Hyreel AI",
      metaDescription: "動画編集の経験がない？問題ありません。HyreelのAIが写真からプロフェッショナルな動画を自動作成。学習曲線ゼロ、即座に結果。",
      problem: {
        title: "動画編集は難しい",
        description: "従来の動画編集には何ヶ月もの学習、高価なソフトウェア、各動画に何時間もの作業が必要です。",
        points: [
          "編集ソフトウェアは学習曲線が急",
          "プロ用ツールは数万円かかる",
          "各動画の作成に何時間もかかる",
          "経験がないとアマチュアのように見える",
          "今すぐコンテンツが必要な時に学ぶ時間がない"
        ]
      },
      solution: {
        title: "AIに編集を任せる",
        description: "HyreelのAIがすべての技術的な編集作業を処理します。あなたはクリエイティブな方向性を提供するだけ — 写真とエフェクトの選択 — そして即座にプロの結果を得られます。",
        points: [
          "カメラロールから任意の写真をアップロード",
          "シネマティックなモーションエフェクトから選択",
          "AIが自動的にプロ動画を生成",
          "数秒でエクスポートして共有",
          "編集タイムラインなし、キーフレームなし、複雑さなし"
        ]
      },
      benefits: [
        { title: "学習曲線ゼロ", description: "1分以内に最初の動画を作成。チュートリアル不要。" },
        { title: "高価なソフト不要", description: "月額$9.99 vs プロ編集ツールに数万円。" },
        { title: "プロの結果", description: "何時間も編集したように見えるシネマティックエフェクト。" },
        { title: "どこでも作成", description: "フル機能のiOSアプリ — スマホでプロ動画を作成。" }
      ],
      howItWorks: [
        { title: "写真をアップロード", description: "カメラロールから任意の写真を選択" },
        { title: "エフェクトを選択", description: "ズーム、オービット、パララックスなどから選択" },
        { title: "AIが動画を作成", description: "Hyreelがプロのモーションを生成するのを見る" },
        { title: "エクスポートして共有", description: "ダウンロードまたはSNSに直接共有" }
      ],
      results: [
        { label: "最初の動画" },
        { label: "必要なスキル" },
        { label: "高品質な結果" },
        { label: "動画あたり" }
      ],
      testimonial: {
        quote: "人生で一度も動画を編集したことがありません。Hyreelを使えば、プロを雇ったようなコンテンツを作成できます。フォロワーは私が動画の専門家でないことを知りません。",
        author: "アマンダ S.",
        role: "小規模ビジネスオーナー"
      },
      faqs: [
        { question: "本当に編集経験ゼロで大丈夫？", answer: "完全にゼロで大丈夫です。写真を撮ってボタンをタップできれば、Hyreelを使えます。AIがすべての技術的な作業を処理します。" },
        { question: "動画はアマチュアに見える？", answer: "いいえ！Hyreelのモーションエフェクトはプロがデザインしています。結果はプロソフトで何時間も編集したように見えます。" },
        { question: "もっとコントロールしたい場合は？", answer: "Hyreelではエフェクトの強度、速度、方向などをカスタマイズできます。シンプルに始めて、慣れたら複雑さを追加。" },
        { question: "CapCutやPremiereより簡単？", answer: "圧倒的に簡単です。それらのツールは学ぶのに何週間もかかります。Hyreelは数分。ほとんどのユーザーが60秒以内に最初の動画を作成します。" }
      ],
      ctaText: "最初の動画を無料で作成"
    },
    ko: {
      name: "편집 기술 불필요",
      heroHeadline: "편집 기술 없이 전문 비디오 제작",
      heroSubheadline: "수개월의 튜토리얼과 비싼 소프트웨어를 건너뛰세요. Hyreel AI가 편집합니다 — 사진을 업로드하고 비디오를 받으세요.",
      metaTitle: "편집 기술 없이 비디오 제작 | Hyreel AI",
      metaDescription: "비디오 편집 경험이 없나요? 문제없습니다. Hyreel AI가 사진에서 전문 비디오를 자동으로 만듭니다. 학습 곡선 제로, 즉각적인 결과.",
      problem: {
        title: "비디오 편집은 어렵다",
        description: "전통적인 비디오 편집은 몇 달의 학습, 비싼 소프트웨어, 각 비디오당 몇 시간의 작업이 필요합니다.",
        points: [
          "편집 소프트웨어는 학습 곡선이 가파름",
          "전문 도구는 수십만원이 들음",
          "각 비디오 제작에 몇 시간 소요",
          "경험 없이는 여전히 아마추어처럼 보임",
          "지금 콘텐츠가 필요할 때 배울 시간이 없음"
        ]
      },
      solution: {
        title: "AI가 편집하게 하세요",
        description: "Hyreel AI가 모든 기술적 편집 작업을 처리합니다. 당신은 창의적 방향만 제공하면 됩니다 — 사진과 효과 선택 — 그리고 즉시 전문적인 결과를 얻습니다.",
        points: [
          "카메라 롤에서 아무 사진이나 업로드",
          "시네마틱 모션 효과 중 선택",
          "AI가 자동으로 전문 비디오 생성",
          "몇 초 만에 내보내고 공유",
          "편집 타임라인 없음, 키프레임 없음, 복잡함 없음"
        ]
      },
      benefits: [
        { title: "학습 곡선 제로", description: "1분 이내에 첫 비디오 제작. 튜토리얼 필요 없음." },
        { title: "비싼 소프트웨어 불필요", description: "월 $9.99 vs 전문 편집 도구에 수십만원." },
        { title: "전문적인 결과", description: "몇 시간 편집한 것처럼 보이는 시네마틱 효과." },
        { title: "어디서나 제작", description: "완전한 iOS 앱 — 스마트폰으로 전문 비디오 제작." }
      ],
      howItWorks: [
        { title: "사진 업로드", description: "카메라 롤에서 아무 사진이나 선택" },
        { title: "효과 선택", description: "줌, 오빗, 패럴랙스 등에서 선택" },
        { title: "AI가 비디오 제작", description: "Hyreel이 전문 모션을 생성하는 것을 확인" },
        { title: "내보내고 공유", description: "다운로드하거나 소셜 미디어에 직접 공유" }
      ],
      results: [
        { label: "첫 비디오" },
        { label: "필요한 기술" },
        { label: "품질 결과" },
        { label: "비디오당" }
      ],
      testimonial: {
        quote: "저는 인생에서 비디오를 편집해 본 적이 없습니다. Hyreel로 전문가를 고용한 것 같은 콘텐츠를 만듭니다. 팔로워들은 제가 비디오 전문가가 아니라는 것을 모릅니다.",
        author: "아만다 S.",
        role: "소규모 비즈니스 소유자"
      },
      faqs: [
        { question: "정말 편집 경험이 전혀 필요 없나요?", answer: "전혀 필요 없습니다. 사진을 찍고 버튼을 탭할 수 있다면 Hyreel을 사용할 수 있습니다. AI가 모든 기술적 작업을 처리합니다." },
        { question: "제 비디오가 아마추어처럼 보일까요?", answer: "아니요! Hyreel의 모션 효과는 전문가가 디자인했습니다. 결과는 전문 소프트웨어에서 몇 시간 편집한 것처럼 보입니다." },
        { question: "더 많은 제어를 원하면요?", answer: "Hyreel은 효과 강도, 속도, 방향 등을 커스터마이즈할 수 있습니다. 간단하게 시작하고 편안해지면 복잡성을 추가하세요." },
        { question: "CapCut이나 Premiere보다 쉬운가요?", answer: "훨씬 쉽습니다. 그 도구들은 배우는 데 몇 주가 걸립니다. Hyreel은 몇 분이면 됩니다. 대부분의 사용자가 60초 이내에 첫 비디오를 만듭니다." }
      ],
      ctaText: "첫 비디오를 무료로 제작"
    },
    zh: {
      name: "无需编辑技能",
      heroHeadline: "无需学习编辑即可创建专业视频",
      heroSubheadline: "忘记数月的教程和昂贵的软件。Hyreel的AI为您编辑 — 上传照片即可获得视频。",
      metaTitle: "无需编辑技能创建视频 | Hyreel AI",
      metaDescription: "没有视频编辑经验？没问题。Hyreel AI自动从您的照片创建专业视频。零学习曲线，即时结果。",
      problem: {
        title: "视频编辑很难",
        description: "传统视频编辑需要数月学习、昂贵的软件，每个视频都需要数小时的工作。",
        points: [
          "编辑软件学习曲线陡峭",
          "专业工具花费数千元",
          "每个视频需要数小时创建",
          "没有经验结果仍然看起来业余",
          "当你现在需要内容时没有时间学习"
        ]
      },
      solution: {
        title: "让AI来编辑",
        description: "Hyreel AI处理所有技术编辑工作。您提供创意方向 — 一张照片和效果选择 — 立即获得专业结果。",
        points: [
          "从相册上传任何照片",
          "从电影级运动效果中选择",
          "AI自动生成专业视频",
          "几秒钟内导出并分享",
          "无编辑时间线，无关键帧，无复杂性"
        ]
      },
      benefits: [
        { title: "零学习曲线", description: "一分钟内创建您的第一个视频。无需教程。" },
        { title: "无需昂贵软件", description: "每月$9.99 vs 专业编辑工具数千元。" },
        { title: "专业结果", description: "看起来像花了数小时编辑的电影级效果。" },
        { title: "随时随地创建", description: "完整iOS应用 — 在手机上创建专业视频。" }
      ],
      howItWorks: [
        { title: "上传您的照片", description: "从相册选择任何照片" },
        { title: "选择效果", description: "从缩放、环绕、视差等中选择" },
        { title: "AI创建您的视频", description: "观看Hyreel生成专业动态" },
        { title: "导出并分享", description: "下载或直接分享到社交媒体" }
      ],
      results: [
        { label: "第一个视频" },
        { label: "所需技能" },
        { label: "质量结果" },
        { label: "每个视频" }
      ],
      testimonial: {
        quote: "我从未编辑过视频。使用Hyreel，我创建的内容看起来像是聘请了专业人士。我的粉丝不知道我不是视频专家。",
        author: "阿曼达 S.",
        role: "小企业主"
      },
      faqs: [
        { question: "真的不需要编辑经验吗？", answer: "完全不需要。如果你能拍照并点击按钮，就能使用Hyreel。AI处理所有技术工作。" },
        { question: "我的视频会看起来业余吗？", answer: "不会！Hyreel的运动效果由专业人士设计。结果看起来像在专业软件中编辑了数小时。" },
        { question: "如果我想要更多控制呢？", answer: "Hyreel允许您自定义效果强度、速度、方向等。从简单开始，熟悉后添加复杂性。" },
        { question: "比学习CapCut或Premiere更简单吗？", answer: "简单得多。那些工具需要数周学习。Hyreel只需几分钟。大多数用户在60秒内创建第一个视频。" }
      ],
      ctaText: "免费创建您的第一个视频"
    }
  },
  "fast-content-creation": {
    es: {
      name: "Creacion Rapida de Contenido",
      heroHeadline: "Crea Videos en Segundos, No Horas",
      heroSubheadline: "Produce semanas de contenido en minutos. La IA de Hyreel transforma una sesion de fotos en docenas de videos unicos.",
      metaTitle: "Crea Contenido de Video 10x Mas Rapido | Hyreel AI",
      metaDescription: "Deja de pasar horas editando video. Crea videos profesionales en segundos con Hyreel AI. Creacion de contenido 10x mas rapida para creadores y negocios.",
      problem: {
        title: "La Creacion de Contenido Toma Demasiado Tiempo",
        description: "La creacion tradicional de video es lenta. Para cuando editas un video, has perdido oportunidades de publicar mas contenido.",
        points: ["Editar un solo video toma 2-4 horas", "Las plataformas recompensan la publicacion frecuente", "No puedes mantener el ritmo de las demandas de contenido", "Agotamiento por la edicion constante", "Grandes ideas atascadas porque no hay tiempo para crear"]
      },
      solution: {
        title: "Segundos, No Horas",
        description: "Hyreel comprime horas de edicion en segundos. Crea los mismos resultados profesionales en una fraccion del tiempo.",
        points: ["Foto a video en menos de 10 segundos", "Crea contenido por lotes para la semana", "Sin linea de tiempo de edicion que navegar", "Crea en movil mientras viajas", "Mas tiempo para estrategia y engagement"]
      },
      benefits: [
        { title: "10x Mas Contenido", description: "Crea 10 videos en el tiempo que tomaba hacer 1." },
        { title: "Mantente Consistente", description: "Nunca pierdas un dia de publicacion. Crea tu calendario de contenido por lotes." },
        { title: "Evita el Agotamiento", description: "Crea mas con menos esfuerzo. Creacion de contenido sostenible." },
        { title: "Crece Mas Rapido", description: "Mas contenido = mas alcance = crecimiento mas rapido." }
      ],
      howItWorks: [
        { title: "Sube Fotos por Lotes", description: "Selecciona multiples fotos para tu semana de contenido" },
        { title: "Aplica Efectos", description: "Elige efectos para cada video" },
        { title: "Genera Todo", description: "La IA crea todos los videos rapidamente" },
        { title: "Programa y Publica", description: "Exporta a tu herramienta de programacion o publica directamente" }
      ],
      results: [{ label: "Creacion Mas Rapida" }, { label: "Por Video" }, { label: "Contenido en 30 min" }, { label: "Publicacion Posible" }],
      testimonial: { quote: "Solia pasar todo mi domingo editando contenido para la semana. Ahora creo todo por lotes en 30 minutos. Recupere mis fines de semana.", author: "Marcus T.", role: "Creador de Contenido" },
      faqs: [
        { question: "Que tan rapido es Hyreel realmente?", answer: "Un video que toma 2-3 horas en edicion tradicional toma unos 10 segundos en Hyreel. Eso es aproximadamente 1000x mas rapido por video." },
        { question: "Puedo crear el contenido de una semana de una vez?", answer: "Si! Crea por lotes subiendo multiples fotos, aplicando efectos y generando todos los videos en una sesion. Una semana de contenido en menos de 30 minutos." },
        { question: "Sufrira la calidad a esta velocidad?", answer: "No! La velocidad no sacrifica la calidad. La IA de Hyreel aplica los mismos efectos profesionales ya sea que crees uno o cincuenta videos." },
        { question: "Como ayuda esto con la consistencia?", answer: "Cuando la creacion de contenido es rapida, mantenerse consistente es facil. No mas saltar publicaciones porque no tuviste tiempo de editar." }
      ],
      ctaText: "Empieza a Crear Mas Rapido"
    },
    de: {
      name: "Schnelle Content-Erstellung",
      heroHeadline: "Videos in Sekunden, Nicht Stunden",
      heroSubheadline: "Produziere Wochen an Content in Minuten. Hyreels KI verwandelt ein Fotoshooting in Dutzende einzigartige Videos.",
      metaTitle: "Erstelle Video-Content 10x Schneller | Hyreel AI",
      metaDescription: "Hor auf, Stunden mit Videobearbeitung zu verbringen. Erstelle professionelle Videos in Sekunden mit Hyreel AI. 10x schnellere Content-Erstellung fur Creator und Unternehmen.",
      problem: {
        title: "Content-Erstellung Dauert Zu Lange",
        description: "Traditionelle Videoerstellung ist langsam. Bis du ein Video bearbeitet hast, hast du Moglichkeiten verpasst, mehr Content zu posten.",
        points: ["Ein einzelnes Video zu bearbeiten dauert 2-4 Stunden", "Plattformen belohnen haufiges Posten", "Kann mit Content-Anforderungen nicht mithalten", "Burnout durch standiges Bearbeiten", "Grossartige Ideen stecken fest weil keine Zeit zum Erstellen"]
      },
      solution: {
        title: "Sekunden, Nicht Stunden",
        description: "Hyreel komprimiert Stunden der Bearbeitung in Sekunden. Erstelle die gleichen professionellen Ergebnisse in einem Bruchteil der Zeit.",
        points: ["Foto zu Video in unter 10 Sekunden", "Erstelle Content fur die Woche stapelweise", "Keine Bearbeitungs-Timeline zum Navigieren", "Erstelle unterwegs auf dem Handy", "Mehr Zeit fur Strategie und Engagement"]
      },
      benefits: [
        { title: "10x Mehr Content", description: "Erstelle 10 Videos in der Zeit die frueher fuer 1 benotigt wurde." },
        { title: "Bleib Konsistent", description: "Verpasse nie einen Posting-Tag. Erstelle deinen Content-Kalender stapelweise." },
        { title: "Vermeide Burnout", description: "Erstelle mehr mit weniger Aufwand. Nachhaltige Content-Erstellung." },
        { title: "Wachse Schneller", description: "Mehr Content = mehr Reichweite = schnelleres Wachstum." }
      ],
      howItWorks: [
        { title: "Fotos Stapelweise Hochladen", description: "Wahle mehrere Fotos fur deine Content-Woche" },
        { title: "Effekte Anwenden", description: "Wahle Effekte fur jedes Video" },
        { title: "Alle Generieren", description: "KI erstellt alle Videos schnell" },
        { title: "Planen und Posten", description: "Exportiere zu deinem Planungstool oder poste direkt" }
      ],
      results: [{ label: "Schnellere Erstellung" }, { label: "Pro Video" }, { label: "Content in 30 min" }, { label: "Tagliches Posten Moglich" }],
      testimonial: { quote: "Ich habe frueher meinen ganzen Sonntag mit Content-Bearbeitung fuer die Woche verbracht. Jetzt erstelle ich alles stapelweise in 30 Minuten. Ich habe meine Wochenenden zuruck.", author: "Marcus T.", role: "Content Creator" },
      faqs: [
        { question: "Wie viel schneller ist Hyreel wirklich?", answer: "Ein Video das 2-3 Stunden in traditioneller Bearbeitung dauert, dauert etwa 10 Sekunden in Hyreel. Das ist ungefahr 1000x schneller pro Video." },
        { question: "Kann ich den Content einer Woche auf einmal erstellen?", answer: "Ja! Erstelle stapelweise indem du mehrere Fotos hochladst, Effekte anwendest und alle Videos in einer Sitzung generierst. Eine Woche Content in unter 30 Minuten." },
        { question: "Leidet die Qualitat bei dieser Geschwindigkeit?", answer: "Nein! Geschwindigkeit opfert keine Qualitat. Hyreels KI wendet die gleichen professionellen Effekte an ob du ein Video oder funfzig erstellst." },
        { question: "Wie hilft das bei Konsistenz?", answer: "Wenn Content-Erstellung schnell ist, ist Konsistenz einfach. Kein Uberspringen von Posts mehr weil keine Zeit zum Bearbeiten war." }
      ],
      ctaText: "Starte Schneller zu Erstellen"
    },
    fr: {
      name: "Creation Rapide de Contenu",
      heroHeadline: "Creez des Videos en Secondes, Pas en Heures",
      heroSubheadline: "Produisez des semaines de contenu en minutes. L'IA de Hyreel transforme une seance photo en dizaines de videos.",
      metaTitle: "Creez du Contenu Video 10x Plus Vite | Hyreel AI",
      metaDescription: "Arretez de passer des heures a editer des videos. Creez des videos professionnelles en secondes avec Hyreel AI. Creation de contenu 10x plus rapide pour createurs et entreprises.",
      problem: {
        title: "La Creation de Contenu Prend Trop de Temps",
        description: "La creation video traditionnelle est lente. Le temps d'editer une video, vous avez manque des opportunites de publier plus de contenu.",
        points: ["Editer une seule video prend 2-4 heures", "Les plateformes recompensent la publication frequente", "Impossible de suivre les demandes de contenu", "Epuisement par l'edition constante", "Bonnes idees bloquees car pas de temps pour creer"]
      },
      solution: {
        title: "Secondes, Pas Heures",
        description: "Hyreel compresse des heures d'edition en secondes. Creez les memes resultats professionnels en une fraction du temps.",
        points: ["Photo a video en moins de 10 secondes", "Creez du contenu par lots pour la semaine", "Pas de timeline d'edition a naviguer", "Creez sur mobile en deplacement", "Plus de temps pour la strategie et l'engagement"]
      },
      benefits: [
        { title: "10x Plus de Contenu", description: "Creez 10 videos dans le temps qu'il fallait pour en faire 1." },
        { title: "Restez Consistant", description: "Ne manquez jamais un jour de publication. Creez votre calendrier de contenu par lots." },
        { title: "Evitez l'Epuisement", description: "Creez plus avec moins d'effort. Creation de contenu durable." },
        { title: "Croissez Plus Vite", description: "Plus de contenu = plus de portee = croissance plus rapide." }
      ],
      howItWorks: [
        { title: "Telechargez des Photos par Lots", description: "Selectionnez plusieurs photos pour votre semaine de contenu" },
        { title: "Appliquez des Effets", description: "Choisissez des effets pour chaque video" },
        { title: "Generez Tout", description: "L'IA cree toutes les videos rapidement" },
        { title: "Planifiez et Publiez", description: "Exportez vers votre outil de planification ou publiez directement" }
      ],
      results: [{ label: "Creation Plus Rapide" }, { label: "Par Video" }, { label: "Contenu en 30 min" }, { label: "Publication Quotidienne Possible" }],
      testimonial: { quote: "Je passais tout mon dimanche a editer du contenu pour la semaine. Maintenant je cree tout par lots en 30 minutes. J'ai recupere mes week-ends.", author: "Marcus T.", role: "Createur de Contenu" },
      faqs: [
        { question: "A quel point Hyreel est-il vraiment rapide?", answer: "Une video qui prend 2-3 heures en edition traditionnelle prend environ 10 secondes dans Hyreel. C'est environ 1000x plus rapide par video." },
        { question: "Puis-je creer le contenu d'une semaine d'un coup?", answer: "Oui! Creez par lots en telechargeant plusieurs photos, appliquant des effets et generant toutes les videos en une session. Une semaine de contenu en moins de 30 minutes." },
        { question: "La qualite souffre-t-elle a cette vitesse?", answer: "Non! La vitesse ne sacrifie pas la qualite. L'IA de Hyreel applique les memes effets professionnels que vous creez une video ou cinquante." },
        { question: "Comment cela aide-t-il la consistance?", answer: "Quand la creation de contenu est rapide, rester consistant est facile. Plus de publications sautees parce que vous n'aviez pas le temps d'editer." }
      ],
      ctaText: "Commencez a Creer Plus Vite"
    },
    pt: {
      name: "Criacao Rapida de Conteudo",
      heroHeadline: "Crie Videos em Segundos, Nao Horas",
      heroSubheadline: "Produza semanas de conteudo em minutos. A IA do Hyreel transforma uma sessao de fotos em dezenas de videos unicos.",
      metaTitle: "Crie Conteudo de Video 10x Mais Rapido | Hyreel AI",
      metaDescription: "Pare de gastar horas editando video. Crie videos profissionais em segundos com Hyreel AI. Criacao de conteudo 10x mais rapida para criadores e negocios.",
      problem: {
        title: "Criacao de Conteudo Leva Muito Tempo",
        description: "A criacao tradicional de video e lenta. Quando voce termina de editar um video, perdeu oportunidades de postar mais conteudo.",
        points: ["Editar um unico video leva 2-4 horas", "Plataformas recompensam postagem frequente", "Nao consegue acompanhar as demandas de conteudo", "Burnout por edicao constante", "Otimas ideias paradas porque nao ha tempo para criar"]
      },
      solution: {
        title: "Segundos, Nao Horas",
        description: "Hyreel comprime horas de edicao em segundos. Crie os mesmos resultados profissionais em uma fracao do tempo.",
        points: ["Foto para video em menos de 10 segundos", "Crie conteudo em lote para a semana", "Sem timeline de edicao para navegar", "Crie no celular em movimento", "Mais tempo para estrategia e engajamento"]
      },
      benefits: [
        { title: "10x Mais Conteudo", description: "Crie 10 videos no tempo que levava para fazer 1." },
        { title: "Mantenha Consistencia", description: "Nunca perca um dia de postagem. Crie seu calendario de conteudo em lote." },
        { title: "Evite Burnout", description: "Crie mais com menos esforco. Criacao de conteudo sustentavel." },
        { title: "Cresca Mais Rapido", description: "Mais conteudo = mais alcance = crescimento mais rapido." }
      ],
      howItWorks: [
        { title: "Envie Fotos em Lote", description: "Selecione multiplas fotos para sua semana de conteudo" },
        { title: "Aplique Efeitos", description: "Escolha efeitos para cada video" },
        { title: "Gere Tudo", description: "IA cria todos os videos rapidamente" },
        { title: "Agende e Publique", description: "Exporte para sua ferramenta de agendamento ou publique diretamente" }
      ],
      results: [{ label: "Criacao Mais Rapida" }, { label: "Por Video" }, { label: "Conteudo em 30 min" }, { label: "Postagem Diaria Possivel" }],
      testimonial: { quote: "Eu costumava passar todo o meu domingo editando conteudo para a semana. Agora crio tudo em lote em 30 minutos. Recuperei meus fins de semana.", author: "Marcus T.", role: "Criador de Conteudo" },
      faqs: [
        { question: "Quao rapido e o Hyreel realmente?", answer: "Um video que leva 2-3 horas em edicao tradicional leva cerca de 10 segundos no Hyreel. Isso e aproximadamente 1000x mais rapido por video." },
        { question: "Posso criar o conteudo de uma semana de uma vez?", answer: "Sim! Crie em lote enviando multiplas fotos, aplicando efeitos e gerando todos os videos em uma sessao. Uma semana de conteudo em menos de 30 minutos." },
        { question: "A qualidade sofre nessa velocidade?", answer: "Nao! Velocidade nao sacrifica qualidade. A IA do Hyreel aplica os mesmos efeitos profissionais seja criando um video ou cinquenta." },
        { question: "Como isso ajuda com consistencia?", answer: "Quando a criacao de conteudo e rapida, manter consistencia e facil. Chega de pular postagens porque nao teve tempo de editar." }
      ],
      ctaText: "Comece a Criar Mais Rapido"
    },
    ru: {
      name: "Быстрое Создание Контента",
      heroHeadline: "Создавайте Видео за Секунды, Не Часы",
      heroSubheadline: "Производите недели контента за минуты. ИИ Hyreel превращает фотосессию в десятки уникальных видео.",
      metaTitle: "Создавайте Видеоконтент в 10 Раз Быстрее | Hyreel AI",
      metaDescription: "Перестаньте тратить часы на монтаж видео. Создавайте профессиональные видео за секунды с Hyreel AI. В 10 раз быстрее создание контента для креаторов и бизнеса.",
      problem: {
        title: "Создание Контента Занимает Слишком Много Времени",
        description: "Традиционное создание видео медленное. Пока вы редактируете одно видео, вы упускаете возможности опубликовать больше контента.",
        points: ["Редактирование одного видео занимает 2-4 часа", "Платформы вознаграждают частые публикации", "Невозможно успевать за требованиями к контенту", "Выгорание от постоянного редактирования", "Отличные идеи застревают потому что нет времени создавать"]
      },
      solution: {
        title: "Секунды, Не Часы",
        description: "Hyreel сжимает часы редактирования в секунды. Создавайте те же профессиональные результаты за долю времени.",
        points: ["От фото к видео менее чем за 10 секунд", "Создавайте контент партиями на неделю", "Без временной шкалы редактирования", "Создавайте на мобильном в пути", "Больше времени на стратегию и вовлечение"]
      },
      benefits: [
        { title: "В 10 Раз Больше Контента", description: "Создавайте 10 видео за время которое раньше уходило на 1." },
        { title: "Оставайтесь Последовательными", description: "Никогда не пропускайте день публикации. Создавайте контент-план партиями." },
        { title: "Избегайте Выгорания", description: "Создавайте больше с меньшими усилиями. Устойчивое создание контента." },
        { title: "Растите Быстрее", description: "Больше контента = больше охват = быстрее рост." }
      ],
      howItWorks: [
        { title: "Загружайте Фото Партиями", description: "Выберите несколько фото для контентной недели" },
        { title: "Применяйте Эффекты", description: "Выберите эффекты для каждого видео" },
        { title: "Генерируйте Все", description: "ИИ быстро создает все видео" },
        { title: "Планируйте и Публикуйте", description: "Экспортируйте в планировщик или публикуйте напрямую" }
      ],
      results: [{ label: "Быстрее Создание" }, { label: "На Видео" }, { label: "Контент за 30 мин" }, { label: "Ежедневные Публикации" }],
      testimonial: { quote: "Раньше я тратил все воскресенье на редактирование контента на неделю. Теперь создаю все партиями за 30 минут. Я вернул себе выходные.", author: "Маркус Т.", role: "Контент-Криейтор" },
      faqs: [
        { question: "Насколько быстрее Hyreel на самом деле?", answer: "Видео которое занимает 2-3 часа в традиционном редактировании занимает около 10 секунд в Hyreel. Это примерно в 1000 раз быстрее на каждое видео." },
        { question: "Могу ли я создать контент на неделю сразу?", answer: "Да! Создавайте партиями загружая несколько фото применяя эффекты и генерируя все видео за одну сессию. Неделя контента менее чем за 30 минут." },
        { question: "Пострадает ли качество при такой скорости?", answer: "Нет! Скорость не жертвует качеством. ИИ Hyreel применяет те же профессиональные эффекты создаете ли вы одно видео или пятьдесят." },
        { question: "Как это помогает с последовательностью?", answer: "Когда создание контента быстрое оставаться последовательным легко. Больше никаких пропущенных публикаций потому что не было времени редактировать." }
      ],
      ctaText: "Начните Создавать Быстрее"
    },
    it: {
      name: "Creazione Rapida di Contenuti",
      heroHeadline: "Crea Video in Secondi, Non Ore",
      heroSubheadline: "Produci settimane di contenuti in minuti. L'IA di Hyreel trasforma un servizio fotografico in decine di video unici.",
      metaTitle: "Crea Contenuti Video 10x Piu Veloce | Hyreel AI",
      metaDescription: "Smetti di passare ore a editare video. Crea video professionali in secondi con Hyreel AI. Creazione di contenuti 10x piu veloce per creator e aziende.",
      problem: {
        title: "La Creazione di Contenuti Richiede Troppo Tempo",
        description: "La creazione video tradizionale e lenta. Quando finisci di editare un video hai perso opportunita di pubblicare piu contenuti.",
        points: ["Editare un singolo video richiede 2-4 ore", "Le piattaforme premiano la pubblicazione frequente", "Non riesci a stare al passo con le richieste di contenuto", "Burnout dall'editing costante", "Ottime idee bloccate perche non c'e tempo per creare"]
      },
      solution: {
        title: "Secondi, Non Ore",
        description: "Hyreel comprime ore di editing in secondi. Crea gli stessi risultati professionali in una frazione del tempo.",
        points: ["Da foto a video in meno di 10 secondi", "Crea contenuti in batch per la settimana", "Nessuna timeline di editing da navigare", "Crea su mobile in movimento", "Piu tempo per strategia ed engagement"]
      },
      benefits: [
        { title: "10x Piu Contenuti", description: "Crea 10 video nel tempo che serviva per farne 1." },
        { title: "Resta Consistente", description: "Non perdere mai un giorno di pubblicazione. Crea il tuo calendario contenuti in batch." },
        { title: "Evita il Burnout", description: "Crea di piu con meno sforzo. Creazione di contenuti sostenibile." },
        { title: "Cresci Piu Veloce", description: "Piu contenuti = piu portata = crescita piu veloce." }
      ],
      howItWorks: [
        { title: "Carica Foto in Batch", description: "Seleziona multiple foto per la tua settimana di contenuti" },
        { title: "Applica Effetti", description: "Scegli effetti per ogni video" },
        { title: "Genera Tutto", description: "L'IA crea tutti i video rapidamente" },
        { title: "Programma e Pubblica", description: "Esporta nel tuo strumento di programmazione o pubblica direttamente" }
      ],
      results: [{ label: "Creazione Piu Veloce" }, { label: "Per Video" }, { label: "Contenuti in 30 min" }, { label: "Pubblicazione Giornaliera Possibile" }],
      testimonial: { quote: "Passavo tutta la domenica a editare contenuti per la settimana. Ora creo tutto in batch in 30 minuti. Ho recuperato i miei weekend.", author: "Marcus T.", role: "Content Creator" },
      faqs: [
        { question: "Quanto e veloce Hyreel davvero?", answer: "Un video che richiede 2-3 ore in editing tradizionale richiede circa 10 secondi in Hyreel. Circa 1000x piu veloce per video." },
        { question: "Posso creare i contenuti di una settimana in una volta?", answer: "Si! Crea in batch caricando multiple foto applicando effetti e generando tutti i video in una sessione. Una settimana di contenuti in meno di 30 minuti." },
        { question: "La qualita ne risente a questa velocita?", answer: "No! La velocita non sacrifica la qualita. L'IA di Hyreel applica gli stessi effetti professionali che tu crei un video o cinquanta." },
        { question: "Come aiuta con la consistenza?", answer: "Quando la creazione di contenuti e veloce restare consistenti e facile. Niente piu pubblicazioni saltate perche non c'era tempo per editare." }
      ],
      ctaText: "Inizia a Creare Piu Veloce"
    },
    nl: {
      name: "Snelle Content Creatie",
      heroHeadline: "Videos in Seconden, Niet Uren",
      heroSubheadline: "Produceer weken aan content in minuten. Hyreels AI transformeert een fotoshoot in tientallen unieke videos.",
      metaTitle: "Maak Video Content 10x Sneller | Hyreel AI",
      metaDescription: "Stop met uren besteden aan video bewerking. Maak professionele videos in seconden met Hyreel AI. 10x snellere content creatie voor creators en bedrijven.",
      problem: {
        title: "Content Creatie Duurt Te Lang",
        description: "Traditionele videocreatie is traag. Tegen de tijd dat je een video bewerkt heb je kansen gemist om meer content te posten.",
        points: ["Een enkele video bewerken duurt 2-4 uur", "Platforms belonen frequent posten", "Kan de content eisen niet bijhouden", "Burnout door constant bewerken", "Geweldige ideeen vastgelopen omdat geen tijd om te creeren"]
      },
      solution: {
        title: "Seconden, Niet Uren",
        description: "Hyreel comprimeert uren bewerking in seconden. Creeer dezelfde professionele resultaten in een fractie van de tijd.",
        points: ["Foto naar video in minder dan 10 seconden", "Maak batch content voor de week", "Geen bewerkingstijdlijn om te navigeren", "Maak onderweg op mobiel", "Meer tijd voor strategie en engagement"]
      },
      benefits: [
        { title: "10x Meer Content", description: "Maak 10 videos in de tijd die het kostte om 1 te maken." },
        { title: "Blijf Consistent", description: "Mis nooit een postdag. Maak je content kalender in batch." },
        { title: "Vermijd Burnout", description: "Creeer meer met minder moeite. Duurzame content creatie." },
        { title: "Groei Sneller", description: "Meer content = meer bereik = snellere groei." }
      ],
      howItWorks: [
        { title: "Upload Fotos in Batch", description: "Selecteer meerdere fotos voor je content week" },
        { title: "Pas Effecten Toe", description: "Kies effecten voor elke video" },
        { title: "Genereer Alles", description: "AI maakt alle videos snel" },
        { title: "Plan en Post", description: "Exporteer naar je planning tool of post direct" }
      ],
      results: [{ label: "Snellere Creatie" }, { label: "Per Video" }, { label: "Content in 30 min" }, { label: "Dagelijks Posten Mogelijk" }],
      testimonial: { quote: "Ik besteedde mijn hele zondag aan content bewerken voor de week. Nu maak ik alles in batch in 30 minuten. Ik heb mijn weekenden terug.", author: "Marcus T.", role: "Content Creator" },
      faqs: [
        { question: "Hoe veel sneller is Hyreel echt?", answer: "Een video die 2-3 uur duurt in traditionele bewerking duurt ongeveer 10 seconden in Hyreel. Dat is ongeveer 1000x sneller per video." },
        { question: "Kan ik de content van een week in een keer maken?", answer: "Ja! Maak in batch door meerdere fotos te uploaden effecten toe te passen en alle videos in een sessie te genereren. Een week content in minder dan 30 minuten." },
        { question: "Lijdt de kwaliteit onder deze snelheid?", answer: "Nee! Snelheid offert geen kwaliteit op. Hyreels AI past dezelfde professionele effecten toe of je nu een video maakt of vijftig." },
        { question: "Hoe helpt dit met consistentie?", answer: "Als content creatie snel is is consistent blijven makkelijk. Geen gemiste posts meer omdat je geen tijd had om te bewerken." }
      ],
      ctaText: "Begin Sneller te Creeren"
    },
    pl: {
      name: "Szybkie Tworzenie Tresci",
      heroHeadline: "Tworz Filmy w Sekundach, Nie Godzinach",
      heroSubheadline: "Produkuj tygodnie tresci w minuty. AI Hyreel zamienia sesje zdjeciowa w dziesiatki unikalnych filmow.",
      metaTitle: "Tworzenie Wideo 10x Szybciej | Hyreel AI",
      metaDescription: "Przestac spedzac godziny na edycji wideo. Tworz profesjonalne filmy w sekundy z Hyreel AI. 10x szybsze tworzenie tresci dla tworcow i firm.",
      problem: {
        title: "Tworzenie Tresci Trwa Zbyt Dlugo",
        description: "Tradycyjne tworzenie wideo jest wolne. Zanim skonczysz edytowac jeden film tracisz okazje do publikacji wiekszej ilosci tresci.",
        points: ["Edycja pojedynczego filmu trwa 2-4 godziny", "Platformy nagradzaja czeste publikacje", "Nie mozesz nadazyc za wymaganiami tresci", "Wypalenie przez ciagla edycje", "Swietne pomysly utknely bo nie ma czasu na tworzenie"]
      },
      solution: {
        title: "Sekundy, Nie Godziny",
        description: "Hyreel kompresuje godziny edycji w sekundy. Tworzysz te same profesjonalne rezultaty w ulamku czasu.",
        points: ["Ze zdjecia do wideo w mniej niz 10 sekund", "Tworzenie tresci partiami na caly tydzien", "Bez osi czasu edycji do nawigacji", "Tworz w drodze na telefonie", "Wiecej czasu na strategie i zaangazowanie"]
      },
      benefits: [
        { title: "10x Wiecej Tresci", description: "Tworz 10 filmow w czasie ktory kiedys zajmowalo zrobienie 1." },
        { title: "Badz Konsekwentny", description: "Nigdy nie przegap dnia publikacji. Tworzenie kalendarza tresci partiami." },
        { title: "Unikaj Wypalenia", description: "Tworz wiecej z mniejszym wysilkiem. Zrownowazne tworzenie tresci." },
        { title: "Rosn Szybciej", description: "Wiecej tresci = wiekszy zasieg = szybszy wzrost." }
      ],
      howItWorks: [
        { title: "Przeslij Zdjecia Partiami", description: "Wybierz wiele zdjec na tydzien tresci" },
        { title: "Zastosuj Efekty", description: "Wybierz efekty dla kazdego filmu" },
        { title: "Generuj Wszystko", description: "AI szybko tworzy wszystkie filmy" },
        { title: "Zaplanuj i Publikuj", description: "Eksportuj do narzedzia planowania lub publikuj bezposrednio" }
      ],
      results: [{ label: "Szybsze Tworzenie" }, { label: "Na Film" }, { label: "Tresci w 30 min" }, { label: "Codzienne Publikacje Mozliwe" }],
      testimonial: { quote: "Kiedys spedzalem cala niedziele na edycji tresci na tydzien. Teraz tworze wszystko partiami w 30 minut. Odzyskalem weekendy.", author: "Marcus T.", role: "Tworca Tresci" },
      faqs: [
        { question: "Jak szybki jest Hyreel naprawde?", answer: "Film ktory zajmuje 2-3 godziny w tradycyjnej edycji zajmuje okolo 10 sekund w Hyreel. To okolo 1000x szybciej na film." },
        { question: "Czy moge stworzyc tresci na tydzien na raz?", answer: "Tak! Tworz partiami przesylajac wiele zdjec stosujac efekty i generujac wszystkie filmy w jednej sesji. Tydzien tresci w mniej niz 30 minut." },
        { question: "Czy jakosc ucierpi przy tej predkosci?", answer: "Nie! Predkosc nie poswięca jakosci. AI Hyreel stosuje te same profesjonalne efekty czy tworzysz jeden film czy piecdziesiat." },
        { question: "Jak to pomaga z konsekwencja?", answer: "Gdy tworzenie tresci jest szybkie bycie konsekwentnym jest latwe. Koniec z pomijanymi publikacjami bo nie bylo czasu na edycje." }
      ],
      ctaText: "Zacznij Tworzyc Szybciej"
    },
    ja: {
      name: "高速コンテンツ作成",
      heroHeadline: "数時間ではなく数秒で動画を作成",
      heroSubheadline: "数週間分のコンテンツを数分で制作。HyreelのAIが1回の撮影を数十本のユニークな動画に変換。",
      metaTitle: "動画コンテンツを10倍速く作成 | Hyreel AI",
      metaDescription: "動画編集に何時間も費やすのをやめましょう。Hyreel AIで数秒でプロ動画を作成。クリエイターとビジネス向けに10倍速いコンテンツ作成。",
      problem: {
        title: "コンテンツ作成に時間がかかりすぎる",
        description: "従来の動画作成は遅い。1本の動画を編集している間に、より多くのコンテンツを投稿する機会を逃しています。",
        points: ["1本の動画編集に2-4時間かかる", "プラットフォームは頻繁な投稿を評価する", "コンテンツの需要に追いつけない", "絶え間ない編集による燃え尽き", "作成する時間がないため素晴らしいアイデアが滞っている"]
      },
      solution: {
        title: "数時間ではなく数秒",
        description: "Hyreelは数時間の編集を数秒に圧縮。同じプロフェッショナルな結果を数分の一の時間で作成。",
        points: ["写真から動画へ10秒以内", "1週間分のコンテンツをバッチ作成", "編集タイムラインのナビゲーション不要", "移動中にモバイルで作成", "戦略とエンゲージメントにより多くの時間"]
      },
      benefits: [
        { title: "10倍のコンテンツ", description: "1本作るのにかかっていた時間で10本作成。" },
        { title: "一貫性を維持", description: "投稿日を逃さない。コンテンツカレンダーをバッチ作成。" },
        { title: "燃え尽きを回避", description: "より少ない労力でより多く作成。持続可能なコンテンツ作成。" },
        { title: "より速く成長", description: "より多くのコンテンツ = より多くのリーチ = より速い成長。" }
      ],
      howItWorks: [
        { title: "写真をバッチアップロード", description: "コンテンツ週間用に複数の写真を選択" },
        { title: "エフェクトを適用", description: "各動画にエフェクトを選択" },
        { title: "すべてを生成", description: "AIがすべての動画を素早く作成" },
        { title: "スケジュールして投稿", description: "スケジューリングツールにエクスポートまたは直接投稿" }
      ],
      results: [{ label: "より速い作成" }, { label: "動画あたり" }, { label: "30分でコンテンツ" }, { label: "毎日投稿可能" }],
      testimonial: { quote: "以前は毎週日曜日をコンテンツ編集に費やしていました。今は30分でバッチ作成。週末を取り戻しました。", author: "マーカス T.", role: "コンテンツクリエイター" },
      faqs: [
        { question: "Hyreelは実際どれくらい速い？", answer: "従来の編集で2-3時間かかる動画がHyreelでは約10秒。動画あたり約1000倍速い。" },
        { question: "1週間分のコンテンツを一度に作成できる？", answer: "はい！複数の写真をアップロードしエフェクトを適用し1セッションですべての動画を生成してバッチ作成。30分以内で1週間分のコンテンツ。" },
        { question: "この速度で品質は落ちる？", answer: "いいえ！速度は品質を犠牲にしません。HyreelのAIは1本作っても50本作っても同じプロエフェクトを適用します。" },
        { question: "これはどのように一貫性に役立つ？", answer: "コンテンツ作成が速いと一貫性を保つのが簡単です。編集する時間がなかったから投稿をスキップすることはもうありません。" }
      ],
      ctaText: "より速い作成を始める"
    },
    ko: {
      name: "빠른 콘텐츠 제작",
      heroHeadline: "몇 시간이 아닌 몇 초 만에 비디오 제작",
      heroSubheadline: "몇 분 만에 몇 주치 콘텐츠 제작. Hyreel AI가 포토슈트를 수십 개의 독특한 비디오로 변환.",
      metaTitle: "비디오 콘텐츠를 10배 빠르게 제작 | Hyreel AI",
      metaDescription: "비디오 편집에 몇 시간 쓰지 마세요. Hyreel AI로 몇 초 만에 전문 비디오 제작. 크리에이터와 비즈니스를 위한 10배 빠른 콘텐츠 제작.",
      problem: {
        title: "콘텐츠 제작에 너무 오래 걸린다",
        description: "전통적인 비디오 제작은 느립니다. 하나의 비디오를 편집하는 동안 더 많은 콘텐츠를 게시할 기회를 놓칩니다.",
        points: ["하나의 비디오 편집에 2-4시간 소요", "플랫폼은 자주 게시하는 것을 보상", "콘텐츠 수요를 따라잡을 수 없음", "끊임없는 편집으로 번아웃", "만들 시간이 없어 좋은 아이디어가 막혀있음"]
      },
      solution: {
        title: "몇 시간이 아닌 몇 초",
        description: "Hyreel은 몇 시간의 편집을 몇 초로 압축. 같은 전문적인 결과를 훨씬 짧은 시간에 제작.",
        points: ["사진에서 비디오로 10초 이내", "일주일치 콘텐츠 배치 제작", "편집 타임라인 탐색 불필요", "이동 중 모바일로 제작", "전략과 참여에 더 많은 시간"]
      },
      benefits: [
        { title: "10배 더 많은 콘텐츠", description: "1개 만드는 데 걸리던 시간에 10개 제작." },
        { title: "일관성 유지", description: "게시일을 놓치지 마세요. 콘텐츠 캘린더를 배치로 제작." },
        { title: "번아웃 방지", description: "더 적은 노력으로 더 많이 제작. 지속 가능한 콘텐츠 제작." },
        { title: "더 빠른 성장", description: "더 많은 콘텐츠 = 더 많은 도달 = 더 빠른 성장." }
      ],
      howItWorks: [
        { title: "사진 배치 업로드", description: "콘텐츠 주간용 여러 사진 선택" },
        { title: "효과 적용", description: "각 비디오에 효과 선택" },
        { title: "모두 생성", description: "AI가 모든 비디오를 빠르게 생성" },
        { title: "예약 및 게시", description: "스케줄링 도구로 내보내거나 직접 게시" }
      ],
      results: [{ label: "더 빠른 제작" }, { label: "비디오당" }, { label: "30분 만에 콘텐츠" }, { label: "매일 게시 가능" }],
      testimonial: { quote: "이전에는 매주 일요일 전체를 콘텐츠 편집에 썼습니다. 이제 30분 만에 배치로 모두 제작. 주말을 되찾았습니다.", author: "마커스 T.", role: "콘텐츠 크리에이터" },
      faqs: [
        { question: "Hyreel이 정말 얼마나 빠른가요?", answer: "전통적인 편집으로 2-3시간 걸리는 비디오가 Hyreel에서는 약 10초. 비디오당 약 1000배 빠릅니다." },
        { question: "일주일치 콘텐츠를 한 번에 만들 수 있나요?", answer: "네! 여러 사진을 업로드하고 효과를 적용하고 한 세션에서 모든 비디오를 생성하여 배치로 제작. 30분 이내에 일주일치 콘텐츠." },
        { question: "이 속도에서 품질이 떨어지나요?", answer: "아니요! 속도가 품질을 희생하지 않습니다. Hyreel AI는 1개를 만들든 50개를 만들든 같은 전문 효과를 적용합니다." },
        { question: "이것이 일관성에 어떻게 도움이 되나요?", answer: "콘텐츠 제작이 빠르면 일관성을 유지하기 쉽습니다. 편집할 시간이 없어서 게시를 건너뛰는 일은 더 이상 없습니다." }
      ],
      ctaText: "더 빠른 제작 시작"
    },
    zh: {
      name: "快速内容创作",
      heroHeadline: "几秒钟而非几小时创建视频",
      heroSubheadline: "几分钟内制作数周的内容。Hyreel AI将一次拍摄转换为数十个独特视频。",
      metaTitle: "视频内容创作快10倍 | Hyreel AI",
      metaDescription: "停止花几小时编辑视频。使用Hyreel AI几秒钟创建专业视频。为创作者和企业提供10倍更快的内容创作。",
      problem: {
        title: "内容创作耗时太长",
        description: "传统视频创作很慢。当你编辑完一个视频时，你已经错过了发布更多内容的机会。",
        points: ["编辑一个视频需要2-4小时", "平台奖励频繁发布", "无法跟上内容需求", "持续编辑导致倦怠", "好创意因为没时间创建而搁置"]
      },
      solution: {
        title: "几秒钟，而非几小时",
        description: "Hyreel将数小时的编辑压缩到几秒钟。在极短时间内创建同样专业的结果。",
        points: ["照片到视频不到10秒", "批量创建一周的内容", "无需导航编辑时间线", "在移动设备上随时创建", "更多时间用于策略和互动"]
      },
      benefits: [
        { title: "10倍更多内容", description: "在过去制作1个的时间里制作10个视频。" },
        { title: "保持一致性", description: "永不错过发布日。批量创建内容日历。" },
        { title: "避免倦怠", description: "用更少的努力创造更多。可持续的内容创作。" },
        { title: "更快增长", description: "更多内容 = 更大覆盖 = 更快增长。" }
      ],
      howItWorks: [
        { title: "批量上传照片", description: "为内容周选择多张照片" },
        { title: "应用效果", description: "为每个视频选择效果" },
        { title: "生成全部", description: "AI快速创建所有视频" },
        { title: "安排并发布", description: "导出到排程工具或直接发布" }
      ],
      results: [{ label: "更快创建" }, { label: "每个视频" }, { label: "30分钟内容" }, { label: "每日发布可能" }],
      testimonial: { quote: "我过去整个周日都在编辑一周的内容。现在30分钟批量完成。我找回了周末。", author: "马库斯 T.", role: "内容创作者" },
      faqs: [
        { question: "Hyreel真的有多快？", answer: "传统编辑需要2-3小时的视频在Hyreel中大约需要10秒。每个视频大约快1000倍。" },
        { question: "我可以一次创建一周的内容吗？", answer: "可以！通过上传多张照片、应用效果并在一个会话中生成所有视频来批量创建。30分钟内完成一周的内容。" },
        { question: "这种速度会影响质量吗？", answer: "不会！速度不会牺牲质量。无论你创建1个还是50个视频，Hyreel AI都会应用相同的专业效果。" },
        { question: "这如何帮助保持一致性？", answer: "当内容创作快速时，保持一致性就很容易。不再因为没时间编辑而跳过发布。" }
      ],
      ctaText: "开始更快创作"
    }
  },
  "viral-videos": {
    es: {
      name: "Videos Virales",
      heroHeadline: "Crea Videos Que Se Vuelven Virales",
      heroSubheadline: "Efectos y formatos optimizados para algoritmos de redes sociales. Maximiza tu alcance con cada video.",
      metaTitle: "Crea Videos Virales con IA | Hyreel - Contenido Que Detiene el Scroll",
      metaDescription: "Crea videos que se vuelven virales. Efectos IA optimizados para algoritmos de TikTok, Instagram y YouTube. Contenido que detiene el scroll y obtiene vistas.",
      problem: {
        title: "La Mayoria de Videos Son Ignorados",
        description: "El video promedio de redes sociales es pasado en milisegundos. Sin los ganchos y efectos correctos, tu contenido desaparece.",
        points: ["Los algoritmos favorecen contenido atractivo", "Los primeros 0.5 segundos determinan si los espectadores se quedan", "El tiempo de visualizacion afecta dramaticamente el alcance", "Videos estaticos o aburridos quedan enterrados", "No sabes que hace el contenido viral"]
      },
      solution: {
        title: "Efectos Optimizados para Algoritmos",
        description: "Los efectos de movimiento de Hyreel estan disenados en torno a lo que los algoritmos de redes sociales recompensan — ganchos fuertes, alto tiempo de visualizacion y movimiento atractivo.",
        points: ["Diseno de gancho primero que captura atencion instantaneamente", "Finales amigables para loops impulsan rewatches", "Patrones de movimiento que maximizan tiempo de visualizacion", "Efectos probados para impulsar engagement", "Optimizado para TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Detiene el Scroll", description: "Movimiento dinamico captura atencion en la primera fraccion de segundo." },
        { title: "Maximiza Tiempo de Visualizacion", description: "Efectos que mantienen espectadores viendo hasta el final — y reviendo." },
        { title: "Impulso de Algoritmo", description: "Senales de mayor engagement empujan tu contenido a mas espectadores." },
        { title: "Contenido Compartible", description: "Videos que la gente realmente quiere compartir con amigos." }
      ],
      howItWorks: [
        { title: "Sube Foto Atractiva", description: "Comienza con una imagen que cuenta una historia" },
        { title: "Elige Efecto Viral", description: "Selecciona efectos optimizados para engagement" },
        { title: "IA Genera Gancho", description: "Primeros 0.5 segundos disenados para detener scroll" },
        { title: "Publica y Mira Expandirse", description: "Comparte y deja que el algoritmo trabaje" }
      ],
      results: [{ label: "Mas Engagement" }, { label: "Tiempo de Gancho" }, { label: "Tiempo de Vista" }, { label: "Amigable" }],
      testimonial: { quote: "Mi primer video de Hyreel obtuvo 2 millones de vistas. El efecto zoom en mi foto de producto detuvo a la gente mientras hacía scroll. Nunca tuve algo viral antes.", author: "Kevin L.", role: "Vendedor de tienda online" },
      faqs: [
        { question: "Puede la IA realmente ayudar a hacer videos virales?", answer: "La IA no puede garantizar viralidad — nadie puede. Pero los efectos de Hyreel estan disenados en torno a lo que los algoritmos recompensan: ganchos fuertes, alto tiempo de visualizacion y movimiento atractivo que mejora dramaticamente tus chances." },
        { question: "Que hace estos efectos 'listos para viral'?", answer: "Estan disenados para atencion: impacto visual inmediato en el primer medio segundo, movimiento que mantiene ojos en pantalla y finales amigables para loops que fomentan rewatches." },
        { question: "Para que plataformas funciona?", answer: "TikTok, Instagram Reels, YouTube Shorts y Facebook Reels tienen preferencias de algoritmo similares. Los efectos de Hyreel funcionan en todas." },
        { question: "Que tan importante son los primeros 0.5 segundos?", answer: "Criticos. La mayoria de espectadores deciden ver o pasar en medio segundo. Los efectos de Hyreel estan disenados con ganchos visuales frontales." }
      ],
      ctaText: "Crea Contenido Viral Gratis"
    },
    de: {
      name: "Virale Videos",
      heroHeadline: "Erstelle Videos Die Viral Gehen",
      heroSubheadline: "Effekte und Formate optimiert fur Social-Media-Algorithmen. Maximiere deine Reichweite mit jedem Video.",
      metaTitle: "Erstelle Virale Videos mit KI | Hyreel - Scroll-Stoppender Content",
      metaDescription: "Erstelle Videos die viral gehen. KI-Effekte optimiert fur TikTok, Instagram und YouTube Algorithmen. Scroll-stoppender Content der Views bekommt.",
      problem: {
        title: "Die Meisten Videos Werden Ignoriert",
        description: "Das durchschnittliche Social-Media-Video wird in Millisekunden vorbei gescrollt. Ohne die richtigen Hooks und Effekte verschwindet dein Content.",
        points: ["Algorithmen bevorzugen ansprechenden Content", "Die ersten 0.5 Sekunden bestimmen ob Zuschauer bleiben", "Watchtime beeinflusst Reichweite dramatisch", "Statische oder langweilige Videos werden begraben", "Weisst nicht was Content viral macht"]
      },
      solution: {
        title: "Algorithmus-Optimierte Effekte",
        description: "Hyreels Bewegungseffekte sind darauf ausgelegt was Social-Media-Algorithmen belohnen — starke Hooks, hohe Watchtime und ansprechendes Bewegung.",
        points: ["Hook-First Design fangt Aufmerksamkeit sofort", "Loop-freundliche Enden fordern Rewatches", "Bewegungsmuster die Watchtime maximieren", "Effekte bewiesen um Engagement zu steigern", "Optimiert fur TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Stoppt den Scroll", description: "Dynamische Bewegung fangt Aufmerksamkeit im ersten Bruchteil einer Sekunde." },
        { title: "Maximiere Watchtime", description: "Effekte die Zuschauer bis zum Ende schauen lassen — und nochmal." },
        { title: "Algorithmus-Boost", description: "Hohere Engagement-Signale pushen deinen Content zu mehr Zuschauern." },
        { title: "Teilbarer Content", description: "Videos die Menschen wirklich mit Freunden teilen wollen." }
      ],
      howItWorks: [
        { title: "Lade Uberzeugendes Foto", description: "Starte mit einem Bild das eine Geschichte erzahlt" },
        { title: "Wahle Viral-Ready Effekt", description: "Wahle Effekte optimiert fur Engagement" },
        { title: "KI Generiert Hook", description: "Erste 0.5 Sekunden designed um Scrollen zu stoppen" },
        { title: "Poste und Schau zu", description: "Teile und lass den Algorithmus arbeiten" }
      ],
      results: [{ label: "Mehr Engagement" }, { label: "Hook-Zeit" }, { label: "Watchtime" }, { label: "Freundlich" }],
      testimonial: { quote: "Mein erstes Hyreel Video bekam 2 Millionen Views. Der Zoom-Effekt auf meinem Produktfoto stoppte Leute beim Scrollen. Ich hatte noch nie etwas Virales.", author: "Kevin L.", role: "Online-Shop-Verkäufer" },
      faqs: [
        { question: "Kann KI wirklich helfen virale Videos zu machen?", answer: "KI kann Viralitat nicht garantieren — niemand kann das. Aber Hyreels Effekte sind darauf ausgelegt was Algorithmen belohnen: starke Hooks, hohe Watchtime und ansprechendes Bewegung die deine Chancen dramatisch verbessert." },
        { question: "Was macht diese Effekte 'viral-ready'?", answer: "Sie sind fur Aufmerksamkeit engineered: sofortiger visueller Impact in der ersten halben Sekunde, Bewegung die Augen auf dem Bildschirm halt und loop-freundliche Enden die Rewatches fordern." },
        { question: "Fur welche Plattformen funktioniert das?", answer: "TikTok, Instagram Reels, YouTube Shorts und Facebook Reels haben ahnliche Algorithmus-Praferenzen. Hyreels Effekte funktionieren auf allen." },
        { question: "Wie wichtig sind die ersten 0.5 Sekunden?", answer: "Kritisch. Die meisten Zuschauer entscheiden in einer halben Sekunde ob sie schauen oder scrollen. Hyreels Effekte sind mit frontgeladenen visuellen Hooks designed." }
      ],
      ctaText: "Erstelle Viralen Content Kostenlos"
    },
    fr: {
      name: "Videos Virales",
      heroHeadline: "Creez des Videos Qui Deviennent Virales",
      heroSubheadline: "Effets et formats optimises pour les algorithmes des reseaux sociaux. Maximisez votre portee avec chaque video.",
      metaTitle: "Creez des Videos Virales avec IA | Hyreel - Contenu Qui Arrete le Scroll",
      metaDescription: "Creez des videos qui deviennent virales. Effets IA optimises pour les algorithmes TikTok, Instagram et YouTube. Contenu qui arrete le scroll et obtient des vues.",
      problem: {
        title: "La Plupart des Videos Sont Ignorees",
        description: "La video moyenne sur les reseaux sociaux est scrollee en millisecondes. Sans les bons hooks et effets, votre contenu disparait.",
        points: ["Les algorithmes favorisent le contenu engageant", "Les premiers 0.5 secondes determinent si les spectateurs restent", "Le temps de visionnage affecte dramatiquement la portee", "Les videos statiques ou ennuyeuses sont enterrees", "Ne sait pas ce qui rend le contenu viral"]
      },
      solution: {
        title: "Effets Optimises pour Algorithmes",
        description: "Les effets de mouvement de Hyreel sont concus autour de ce que les algorithmes recompensent — hooks forts, temps de visionnage eleve et mouvement engageant.",
        points: ["Design hook-first capte l'attention instantanement", "Fins loop-friendly encouragent les revisionnages", "Patterns de mouvement qui maximisent le temps de visionnage", "Effets prouves pour stimuler l'engagement", "Optimise pour TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Arrete le Scroll", description: "Mouvement dynamique capte l'attention dans la premiere fraction de seconde." },
        { title: "Maximise le Temps de Visionnage", description: "Effets qui gardent les spectateurs jusqu'a la fin — et a revoir." },
        { title: "Boost Algorithme", description: "Signaux d'engagement plus eleves poussent votre contenu vers plus de spectateurs." },
        { title: "Contenu Partageable", description: "Videos que les gens veulent vraiment partager avec leurs amis." }
      ],
      howItWorks: [
        { title: "Telechargez Photo Captivante", description: "Commencez avec une image qui raconte une histoire" },
        { title: "Choisissez Effet Viral-Ready", description: "Selectionnez des effets optimises pour l'engagement" },
        { title: "L'IA Genere le Hook", description: "Premiers 0.5 secondes concus pour arreter le scroll" },
        { title: "Publiez et Regardez Grandir", description: "Partagez et laissez l'algorithme faire son travail" }
      ],
      results: [{ label: "Plus d'Engagement" }, { label: "Temps de Hook" }, { label: "Temps de Vue" }, { label: "Loop-Friendly" }],
      testimonial: { quote: "Ma premiere video Hyreel a obtenu 2 millions de vues. L'effet zoom sur ma photo produit a arrete les gens pendant le défilement. Je n'avais jamais rien eu de viral avant.", author: "Kevin L.", role: "Vendeur en boutique en ligne" },
      faqs: [
        { question: "L'IA peut-elle vraiment aider a faire des videos virales?", answer: "L'IA ne peut pas garantir la viralite — personne ne peut. Mais les effets de Hyreel sont concus autour de ce que les algorithmes recompensent: hooks forts, temps de visionnage eleve et mouvement engageant qui ameliore dramatiquement vos chances." },
        { question: "Qu'est-ce qui rend ces effets 'viral-ready'?", answer: "Ils sont concus pour l'attention: impact visuel immediat dans la premiere demi-seconde, mouvement qui garde les yeux sur l'ecran et fins loop-friendly qui encouragent les revisionnages." },
        { question: "Pour quelles plateformes ca fonctionne?", answer: "TikTok, Instagram Reels, YouTube Shorts et Facebook Reels ont des preferences d'algorithme similaires. Les effets Hyreel fonctionnent sur toutes." },
        { question: "A quel point les premiers 0.5 secondes sont importants?", answer: "Critiques. La plupart des spectateurs decident de regarder ou scroller en une demi-seconde. Les effets Hyreel sont concus avec des hooks visuels frontaux." }
      ],
      ctaText: "Creez du Contenu Viral Gratuitement"
    },
    pt: {
      name: "Videos Virais",
      heroHeadline: "Crie Videos Que Viralizam",
      heroSubheadline: "Efeitos e formatos otimizados para algoritmos de redes sociais. Maximize seu alcance com cada video.",
      metaTitle: "Crie Videos Virais com IA | Hyreel - Conteudo Que Para o Scroll",
      metaDescription: "Crie videos que viralizam. Efeitos IA otimizados para algoritmos do TikTok, Instagram e YouTube. Conteudo que para o scroll e obtem visualizacoes.",
      problem: {
        title: "A Maioria dos Videos e Ignorada",
        description: "O video medio de redes sociais e passado em milissegundos. Sem os hooks e efeitos certos, seu conteudo desaparece.",
        points: ["Algoritmos favorecem conteudo envolvente", "Os primeiros 0.5 segundos determinam se os espectadores ficam", "Tempo de visualizacao afeta dramaticamente o alcance", "Videos estaticos ou chatos sao enterrados", "Nao sabe o que torna conteudo viral"]
      },
      solution: {
        title: "Efeitos Otimizados para Algoritmos",
        description: "Os efeitos de movimento do Hyreel sao projetados em torno do que os algoritmos de redes sociais recompensam — hooks fortes, alto tempo de visualizacao e movimento envolvente.",
        points: ["Design hook-first captura atencao instantaneamente", "Finais amigaveis a loop impulsionam rewatches", "Padroes de movimento que maximizam tempo de visualizacao", "Efeitos comprovados para impulsionar engajamento", "Otimizado para TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Para o Scroll", description: "Movimento dinamico captura atencao na primeira fracao de segundo." },
        { title: "Maximiza Tempo de Visualizacao", description: "Efeitos que mantem espectadores assistindo ate o fim — e reassistindo." },
        { title: "Impulso de Algoritmo", description: "Sinais de maior engajamento empurram seu conteudo para mais espectadores." },
        { title: "Conteudo Compartilhavel", description: "Videos que as pessoas realmente querem compartilhar com amigos." }
      ],
      howItWorks: [
        { title: "Envie Foto Atraente", description: "Comece com uma imagem que conta uma historia" },
        { title: "Escolha Efeito Viral-Ready", description: "Selecione efeitos otimizados para engajamento" },
        { title: "IA Gera Hook", description: "Primeiros 0.5 segundos projetados para parar scroll" },
        { title: "Publique e Veja Espalhar", description: "Compartilhe e deixe o algoritmo fazer seu trabalho" }
      ],
      results: [{ label: "Mais Engajamento" }, { label: "Tempo de Hook" }, { label: "Tempo de Vista" }, { label: "Loop-Friendly" }],
      testimonial: { quote: "Meu primeiro video Hyreel teve 2 milhoes de visualizacoes. O efeito zoom na minha foto de produto parou as pessoas durante a rolagem. Nunca tive nada viral antes.", author: "Kevin L.", role: "Vendedor de loja online" },
      faqs: [
        { question: "A IA pode realmente ajudar a fazer videos virais?", answer: "A IA nao pode garantir viralidade — ninguem pode. Mas os efeitos do Hyreel sao projetados em torno do que os algoritmos recompensam: hooks fortes, alto tempo de visualizacao e movimento envolvente que melhora dramaticamente suas chances." },
        { question: "O que torna esses efeitos 'viral-ready'?", answer: "Eles sao projetados para atencao: impacto visual imediato no primeiro meio segundo, movimento que mantem olhos na tela e finais amigaveis a loop que encorajam rewatches." },
        { question: "Para quais plataformas funciona?", answer: "TikTok, Instagram Reels, YouTube Shorts e Facebook Reels tem preferencias de algoritmo semelhantes. Os efeitos Hyreel funcionam em todas." },
        { question: "Quao importante sao os primeiros 0.5 segundos?", answer: "Criticos. A maioria dos espectadores decide assistir ou passar em meio segundo. Os efeitos Hyreel sao projetados com hooks visuais frontais." }
      ],
      ctaText: "Crie Conteudo Viral Gratis"
    },
    ru: {
      name: "Вирусные Видео",
      heroHeadline: "Создавайте Видео, Которые Становятся Вирусными",
      heroSubheadline: "Эффекты и форматы, оптимизированные для алгоритмов соцсетей. Максимизируйте охват каждого видео.",
      metaTitle: "Создавайте Вирусные Видео с ИИ | Hyreel - Контент Останавливающий Скролл",
      metaDescription: "Создавайте видео которые становятся вирусными. ИИ-эффекты оптимизированные для алгоритмов TikTok, Instagram и YouTube. Контент который останавливает скролл и получает просмотры.",
      problem: {
        title: "Большинство Видео Игнорируются",
        description: "Среднее видео в соцсетях пролистывается за миллисекунды. Без правильных хуков и эффектов ваш контент исчезает в никуда.",
        points: ["Алгоритмы предпочитают вовлекающий контент", "Первые 0.5 секунды определяют останутся ли зрители", "Время просмотра драматически влияет на охват", "Статичные или скучные видео хоронятся", "Не знаете что делает контент вирусным"]
      },
      solution: {
        title: "Эффекты Оптимизированные Под Алгоритмы",
        description: "Эффекты движения Hyreel разработаны вокруг того что алгоритмы соцсетей вознаграждают — сильные хуки, высокое время просмотра и вовлекающее движение.",
        points: ["Дизайн с хуком в начале захватывает внимание мгновенно", "Лупо-дружественные концовки повышают повторные просмотры", "Паттерны движения максимизирующие время просмотра", "Эффекты доказавшие повышение вовлеченности", "Оптимизировано для TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Останавливает Скролл", description: "Динамичное движение захватывает внимание в первую долю секунды." },
        { title: "Максимизирует Время Просмотра", description: "Эффекты удерживающие зрителей до конца — и на повторный просмотр." },
        { title: "Буст Алгоритма", description: "Более высокие сигналы вовлеченности продвигают ваш контент большему числу зрителей." },
        { title: "Контент Для Репостов", description: "Видео которыми люди действительно хотят делиться с друзьями." }
      ],
      howItWorks: [
        { title: "Загрузите Привлекательное Фото", description: "Начните с изображения которое рассказывает историю" },
        { title: "Выберите Вирусный Эффект", description: "Выберите эффекты оптимизированные для вовлечения" },
        { title: "ИИ Генерирует Хук", description: "Первые 0.5 секунды спроектированы чтобы остановить скролл" },
        { title: "Публикуйте и Наблюдайте Распространение", description: "Поделитесь и дайте алгоритму работать" }
      ],
      results: [{ label: "Больше Вовлечения" }, { label: "Время Хука" }, { label: "Время Просмотра" }, { label: "Лупо-Дружественно" }],
      testimonial: { quote: "Мое первое видео на Hyreel набрало 2 миллиона просмотров. Эффект зума на моем фото продукта остановил людей во время прокрутки. У меня никогда раньше не было вирусного контента.", author: "Кевин Л.", role: "Продавец онлайн-магазина" },
      faqs: [
        { question: "Может ли ИИ действительно помочь сделать вирусные видео?", answer: "ИИ не может гарантировать виральность — никто не может. Но эффекты Hyreel разработаны вокруг того что алгоритмы вознаграждают: сильные хуки, высокое время просмотра и вовлекающее движение которое драматически увеличивает ваши шансы." },
        { question: "Что делает эти эффекты 'готовыми к виралу'?", answer: "Они спроектированы для внимания: немедленный визуальный импакт в первые полсекунды, движение удерживающее взгляд на экране и лупо-дружественные концовки поощряющие повторные просмотры." },
        { question: "Для каких платформ это работает?", answer: "TikTok, Instagram Reels, YouTube Shorts и Facebook Reels имеют схожие предпочтения алгоритмов. Эффекты Hyreel работают на всех." },
        { question: "Насколько важны первые 0.5 секунды?", answer: "Критически. Большинство зрителей решают смотреть или листать за полсекунды. Эффекты Hyreel спроектированы с визуальными хуками в начале." }
      ],
      ctaText: "Создайте Вирусный Контент Бесплатно"
    },
    it: {
      name: "Video Virali",
      heroHeadline: "Crea Video Che Diventano Virali",
      heroSubheadline: "Effetti e formati ottimizzati per gli algoritmi dei social media. Massimizza la tua portata con ogni video.",
      metaTitle: "Crea Video Virali con IA | Hyreel - Contenuto Che Ferma lo Scroll",
      metaDescription: "Crea video che diventano virali. Effetti IA ottimizzati per algoritmi TikTok, Instagram e YouTube. Contenuto che ferma lo scroll e ottiene visualizzazioni.",
      problem: {
        title: "La Maggior Parte dei Video Viene Ignorata",
        description: "Il video medio sui social viene scrollato in millisecondi. Senza i giusti hook ed effetti, il tuo contenuto scompare.",
        points: ["Gli algoritmi favoriscono contenuti coinvolgenti", "I primi 0.5 secondi determinano se gli spettatori restano", "Il tempo di visualizzazione influenza drammaticamente la portata", "Video statici o noiosi vengono sepolti", "Non sai cosa rende il contenuto virale"]
      },
      solution: {
        title: "Effetti Ottimizzati per Algoritmi",
        description: "Gli effetti di movimento di Hyreel sono progettati intorno a cio che gli algoritmi dei social media premiano — hook forti, alto tempo di visualizzazione e movimento coinvolgente.",
        points: ["Design hook-first cattura l'attenzione istantaneamente", "Finali loop-friendly incentivano i rewatch", "Pattern di movimento che massimizzano il tempo di visualizzazione", "Effetti provati per aumentare l'engagement", "Ottimizzato per TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Ferma lo Scroll", description: "Movimento dinamico cattura l'attenzione nella prima frazione di secondo." },
        { title: "Massimizza Tempo di Visualizzazione", description: "Effetti che tengono gli spettatori fino alla fine — e a rivederlo." },
        { title: "Boost Algoritmo", description: "Segnali di engagement piu alti spingono il tuo contenuto a piu spettatori." },
        { title: "Contenuto Condivisibile", description: "Video che le persone vogliono davvero condividere con gli amici." }
      ],
      howItWorks: [
        { title: "Carica Foto Avvincente", description: "Inizia con un'immagine che racconta una storia" },
        { title: "Scegli Effetto Viral-Ready", description: "Seleziona effetti ottimizzati per l'engagement" },
        { title: "L'IA Genera l'Hook", description: "Primi 0.5 secondi progettati per fermare lo scroll" },
        { title: "Pubblica e Guarda Diffondersi", description: "Condividi e lascia che l'algoritmo faccia il suo lavoro" }
      ],
      results: [{ label: "Piu Engagement" }, { label: "Tempo Hook" }, { label: "Tempo Vista" }, { label: "Loop-Friendly" }],
      testimonial: { quote: "Il mio primo video Hyreel ha ottenuto 2 milioni di visualizzazioni. L'effetto zoom sulla mia foto prodotto ha fermato le persone durante lo scroll. Non avevo mai avuto nulla di virale prima.", author: "Kevin L.", role: "Venditore di negozio online" },
      faqs: [
        { question: "L'IA puo davvero aiutare a fare video virali?", answer: "L'IA non puo garantire la viralita — nessuno puo. Ma gli effetti di Hyreel sono progettati intorno a cio che gli algoritmi premiano: hook forti, alto tempo di visualizzazione e movimento coinvolgente che migliora drammaticamente le tue possibilita." },
        { question: "Cosa rende questi effetti 'viral-ready'?", answer: "Sono progettati per l'attenzione: impatto visivo immediato nel primo mezzo secondo, movimento che tiene gli occhi sullo schermo e finali loop-friendly che incoraggiano i rewatch." },
        { question: "Per quali piattaforme funziona?", answer: "TikTok, Instagram Reels, YouTube Shorts e Facebook Reels hanno preferenze algoritmiche simili. Gli effetti Hyreel funzionano su tutte." },
        { question: "Quanto sono importanti i primi 0.5 secondi?", answer: "Critici. La maggior parte degli spettatori decide di guardare o scrollare in mezzo secondo. Gli effetti Hyreel sono progettati con hook visivi frontali." }
      ],
      ctaText: "Crea Contenuto Virale Gratis"
    },
    nl: {
      name: "Virale Videos",
      heroHeadline: "Maak Videos Die Viraal Gaan",
      heroSubheadline: "Effecten en formaten geoptimaliseerd voor social media algoritmes. Maximaliseer je bereik met elke video.",
      metaTitle: "Maak Virale Videos met AI | Hyreel - Scroll-Stoppende Content",
      metaDescription: "Maak videos die viraal gaan. AI-effecten geoptimaliseerd voor TikTok, Instagram en YouTube algoritmes. Scroll-stoppende content die views krijgt.",
      problem: {
        title: "De Meeste Videos Worden Genegeerd",
        description: "De gemiddelde social media video wordt in milliseconden voorbij gescrold. Zonder de juiste hooks en effecten verdwijnt je content.",
        points: ["Algoritmes geven de voorkeur aan boeiende content", "De eerste 0.5 seconden bepalen of kijkers blijven", "Kijktijd beinvloedt bereik dramatisch", "Statische of saaie videos worden begraven", "Weet niet wat content viraal maakt"]
      },
      solution: {
        title: "Algoritme-Geoptimaliseerde Effecten",
        description: "Hyreels bewegingseffecten zijn ontworpen rond wat social media algoritmes belonen — sterke hooks, hoge kijktijd en boeiende beweging.",
        points: ["Hook-first design vangt direct aandacht", "Loop-vriendelijke eindes bevorderen rewatches", "Bewegingspatronen die kijktijd maximaliseren", "Effecten bewezen om engagement te verhogen", "Geoptimaliseerd voor TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Stopt de Scroll", description: "Dynamische beweging vangt aandacht in de eerste fractie van een seconde." },
        { title: "Maximaliseer Kijktijd", description: "Effecten die kijkers tot het einde houden — en opnieuw kijken." },
        { title: "Algoritme Boost", description: "Hogere engagement signalen pushen je content naar meer kijkers." },
        { title: "Deelbare Content", description: "Videos die mensen echt willen delen met vrienden." }
      ],
      howItWorks: [
        { title: "Upload Overtuigende Foto", description: "Begin met een beeld dat een verhaal vertelt" },
        { title: "Kies Viral-Ready Effect", description: "Selecteer effecten geoptimaliseerd voor engagement" },
        { title: "AI Genereert Hook", description: "Eerste 0.5 seconden ontworpen om scrollen te stoppen" },
        { title: "Post en Kijk Hoe Het Groeit", description: "Deel en laat het algoritme zijn werk doen" }
      ],
      results: [{ label: "Meer Engagement" }, { label: "Hook Tijd" }, { label: "Kijktijd" }, { label: "Loop-Vriendelijk" }],
      testimonial: { quote: "Mijn eerste Hyreel video kreeg 2 miljoen views. Het zoom-effect op mijn productfoto stopte mensen tijdens het scrollen. Ik had nog nooit iets viraals gehad.", author: "Kevin L.", role: "Webshopverkoper" },
      faqs: [
        { question: "Kan AI echt helpen om virale videos te maken?", answer: "AI kan viraliteit niet garanderen — niemand kan dat. Maar Hyreels effecten zijn ontworpen rond wat algoritmes belonen: sterke hooks, hoge kijktijd en boeiende beweging die je kansen dramatisch verbetert." },
        { question: "Wat maakt deze effecten 'viral-ready'?", answer: "Ze zijn ontworpen voor aandacht: direct visuele impact in de eerste halve seconde, beweging die ogen op het scherm houdt en loop-vriendelijke eindes die rewatches aanmoedigen." },
        { question: "Voor welke platforms werkt dit?", answer: "TikTok, Instagram Reels, YouTube Shorts en Facebook Reels hebben vergelijkbare algoritme voorkeuren. Hyreel effecten werken op allemaal." },
        { question: "Hoe belangrijk zijn de eerste 0.5 seconden?", answer: "Kritisch. De meeste kijkers beslissen om te kijken of te scrollen binnen een halve seconde. Hyreel effecten zijn ontworpen met frontgeladen visuele hooks." }
      ],
      ctaText: "Maak Virale Content Gratis"
    },
    pl: {
      name: "Wirusowe Filmy",
      heroHeadline: "Tworz Filmy, Ktore Staja Sie Wirusowe",
      heroSubheadline: "Efekty i formaty zoptymalizowane pod algorytmy mediow spolecznosciowych. Maksymalizuj zasieg kazdego filmu.",
      metaTitle: "Tworz Wirusowe Filmy z AI | Hyreel - Tresci Zatrzymujace Scroll",
      metaDescription: "Tworz filmy ktore staja sie wirusowe. Efekty AI zoptymalizowane pod algorytmy TikTok, Instagram i YouTube. Tresci zatrzymujace scroll ktore zdobywaja wyswietlenia.",
      problem: {
        title: "Wiekszosc Filmow Jest Ignorowana",
        description: "Przecietny film w mediach spolecznosciowych jest przewijany w milisekundach. Bez odpowiednich hookow i efektow twoje tresci znikaja.",
        points: ["Algorytmy faworyzuja angazujace tresci", "Pierwsze 0.5 sekundy decyduja czy widzowie zostana", "Czas ogladania dramatycznie wplywa na zasieg", "Statyczne lub nudne filmy sa zakopywane", "Nie wiesz co sprawia ze tresci staja sie wirusowe"]
      },
      solution: {
        title: "Efekty Zoptymalizowane pod Algorytmy",
        description: "Efekty ruchu Hyreel sa zaprojektowane wokol tego co algorytmy mediow spolecznosciowych nagradzaja — silne hooki, wysoki czas ogladania i angazujacy ruch.",
        points: ["Design hook-first przyciaga uwage natychmiast", "Koncowki przyjazne dla loopow zwiekszaja ponowne ogladanie", "Wzorce ruchu maksymalizujace czas ogladania", "Efekty udowodnione w zwiekszaniu zaangazowania", "Zoptymalizowane pod TikTok, Instagram, YouTube"]
      },
      benefits: [
        { title: "Zatrzymuje Scroll", description: "Dynamiczny ruch przyciaga uwage w pierwszym ulamku sekundy." },
        { title: "Maksymalizuj Czas Ogladania", description: "Efekty ktore utrzymuja widzow do konca — i na ponowne ogladanie." },
        { title: "Boost Algorytmu", description: "Wyzsze sygnaly zaangazowania przesuwaja twoje tresci do wiekszej liczby widzow." },
        { title: "Tresci do Udostepniania", description: "Filmy ktore ludzie naprawde chca udostepniac znajomym." }
      ],
      howItWorks: [
        { title: "Przeslij Przekonujace Zdjecie", description: "Zacznij od obrazu ktory opowiada historie" },
        { title: "Wybierz Efekt Viral-Ready", description: "Wybierz efekty zoptymalizowane pod zaangazowanie" },
        { title: "AI Generuje Hook", description: "Pierwsze 0.5 sekundy zaprojektowane by zatrzymac scroll" },
        { title: "Publikuj i Patrz Jak Sie Rozprzestrzenia", description: "Udostepnij i pozwol algorytmowi dzialac" }
      ],
      results: [{ label: "Wiecej Zaangazowania" }, { label: "Czas Hooka" }, { label: "Czas Ogladania" }, { label: "Loop-Friendly" }],
      testimonial: { quote: "Moj pierwszy film Hyreel zdobyl 2 miliony wyswietlen. Efekt zoom na moim zdjeciu produktu zatrzymal ludzi podczas przewijania. Nigdy wczesniej nie mialem nic wirusowego.", author: "Kevin L.", role: "Sprzedawca sklepu internetowego" },
      faqs: [
        { question: "Czy AI naprawde moze pomoc robic wirusowe filmy?", answer: "AI nie moze zagwarantowac wirusowosci — nikt nie moze. Ale efekty Hyreel sa zaprojektowane wokol tego co algorytmy nagradzaja: silne hooki, wysoki czas ogladania i angazujacy ruch ktory dramatycznie poprawia twoje szanse." },
        { question: "Co sprawia ze te efekty sa 'viral-ready'?", answer: "Sa zaprojektowane dla uwagi: natychmiastowy wizualny wplyw w pierwszej polsekundy, ruch ktory utrzymuje oczy na ekranie i koncowki przyjazne dla loopow zachecajace do ponownego ogladania." },
        { question: "Dla jakich platform to dziala?", answer: "TikTok, Instagram Reels, YouTube Shorts i Facebook Reels maja podobne preferencje algorytmow. Efekty Hyreel dzialaja na wszystkich." },
        { question: "Jak wazne sa pierwsze 0.5 sekundy?", answer: "Krytyczne. Wiekszosc widzow decyduje czy ogladac czy przewijac w pol sekundy. Efekty Hyreel sa zaprojektowane z wizualnymi hookami na poczatku." }
      ],
      ctaText: "Stworz Wirusowe Tresci Za Darmo"
    },
    ja: {
      name: "バイラル動画",
      heroHeadline: "バイラルになる動画を作成",
      heroSubheadline: "SNSアルゴリズムに最適化されたエフェクトとフォーマット。各動画でリーチを最大化。",
      metaTitle: "AIでバイラル動画を作成 | Hyreel - スクロールを止めるコンテンツ",
      metaDescription: "バイラルになる動画を作成。TikTok、Instagram、YouTubeアルゴリズムに最適化されたAIエフェクト。視聴を獲得するスクロールを止めるコンテンツ。",
      problem: {
        title: "ほとんどの動画は無視される",
        description: "平均的なSNS動画はミリ秒でスクロールされます。適切なフックとエフェクトがなければ、あなたのコンテンツは消えてしまいます。",
        points: ["アルゴリズムは魅力的なコンテンツを好む", "最初の0.5秒で視聴者が残るか決まる", "視聴時間がリーチに劇的に影響", "静的または退屈な動画は埋もれる", "何がコンテンツをバイラルにするかわからない"]
      },
      solution: {
        title: "アルゴリズム最適化エフェクト",
        description: "Hyreelのモーションエフェクトは、SNSアルゴリズムが評価するもの — 強力なフック、高い視聴時間、魅力的なモーション — を中心に設計されています。",
        points: ["フックファーストデザインが即座に注意を引く", "ループフレンドリーなエンディングが再視聴を促進", "視聴時間を最大化するモーションパターン", "エンゲージメントを高めることが証明されたエフェクト", "TikTok、Instagram、YouTube向けに最適化"]
      },
      benefits: [
        { title: "スクロールを止める", description: "ダイナミックなモーションが最初の瞬間で注意を引く。" },
        { title: "視聴時間を最大化", description: "視聴者を最後まで、そして再視聴まで引きつけるエフェクト。" },
        { title: "アルゴリズムブースト", description: "より高いエンゲージメントシグナルがより多くの視聴者にコンテンツを届ける。" },
        { title: "シェアしたくなるコンテンツ", description: "人々が本当に友達と共有したい動画。" }
      ],
      howItWorks: [
        { title: "魅力的な写真をアップロード", description: "ストーリーを伝える画像から始める" },
        { title: "バイラル対応エフェクトを選択", description: "エンゲージメント向けに最適化されたエフェクトを選択" },
        { title: "AIがフックを生成", description: "最初の0.5秒はスクロールを止めるよう設計" },
        { title: "投稿して拡散を見る", description: "共有してアルゴリズムに任せる" }
      ],
      results: [{ label: "より多くのエンゲージメント" }, { label: "フック時間" }, { label: "視聴時間" }, { label: "ループフレンドリー" }],
      testimonial: { quote: "私の最初のHyreel動画は200万回再生されました。商品写真のズームエフェクトが人々のスクロールを止めました。今までバイラルになったことはありませんでした。", author: "ケビン L.", role: "Eコマース販売者" },
      faqs: [
        { question: "AIは本当にバイラル動画を作るのに役立つ？", answer: "AIはバイラル性を保証できません — 誰にもできません。しかしHyreelのエフェクトは、アルゴリズムが評価するもの：強力なフック、高い視聴時間、あなたのチャンスを劇的に向上させる魅力的なモーションを中心に設計されています。" },
        { question: "これらのエフェクトを「バイラル対応」にするものは？", answer: "注目を集めるよう設計されています：最初の0.5秒での即座のビジュアルインパクト、画面に目を留めるモーション、再視聴を促すループフレンドリーなエンディング。" },
        { question: "どのプラットフォームで機能する？", answer: "TikTok、Instagram Reels、YouTube Shorts、Facebook Reelsは同様のアルゴリズム傾向を持っています。Hyreelのエフェクトはすべてで機能します。" },
        { question: "最初の0.5秒はどれくらい重要？", answer: "非常に重要。ほとんどの視聴者は0.5秒以内に視聴するかスクロールするか決めます。Hyreelのエフェクトは冒頭にビジュアルフックを配置して設計されています。" }
      ],
      ctaText: "バイラルコンテンツを無料で作成"
    },
    ko: {
      name: "바이럴 비디오",
      heroHeadline: "바이럴되는 비디오 제작",
      heroSubheadline: "소셜 미디어 알고리즘에 최적화된 효과와 형식. 모든 비디오로 도달률 최대화.",
      metaTitle: "AI로 바이럴 비디오 제작 | Hyreel - 스크롤을 멈추는 콘텐츠",
      metaDescription: "바이럴되는 비디오 제작. TikTok, Instagram, YouTube 알고리즘에 최적화된 AI 효과. 조회수를 얻는 스크롤을 멈추는 콘텐츠.",
      problem: {
        title: "대부분의 비디오는 무시된다",
        description: "평균적인 소셜 미디어 비디오는 밀리초 만에 스크롤됩니다. 적절한 훅과 효과가 없으면 콘텐츠는 사라집니다.",
        points: ["알고리즘은 매력적인 콘텐츠를 선호", "처음 0.5초가 시청자가 남을지 결정", "시청 시간이 도달률에 극적으로 영향", "정적이거나 지루한 비디오는 묻힘", "무엇이 콘텐츠를 바이럴하게 만드는지 모름"]
      },
      solution: {
        title: "알고리즘 최적화 효과",
        description: "Hyreel의 모션 효과는 소셜 미디어 알고리즘이 보상하는 것을 중심으로 설계되었습니다 — 강력한 훅, 높은 시청 시간, 매력적인 모션.",
        points: ["훅 퍼스트 디자인이 즉시 주의를 끔", "루프 친화적 엔딩이 재시청 촉진", "시청 시간을 최대화하는 모션 패턴", "참여 증가가 입증된 효과", "TikTok, Instagram, YouTube에 최적화"]
      },
      benefits: [
        { title: "스크롤 멈춤", description: "다이내믹한 모션이 첫 순간에 주의를 끔." },
        { title: "시청 시간 최대화", description: "시청자를 끝까지, 그리고 재시청까지 유지하는 효과." },
        { title: "알고리즘 부스트", description: "더 높은 참여 신호가 더 많은 시청자에게 콘텐츠를 전달." },
        { title: "공유하고 싶은 콘텐츠", description: "사람들이 정말 친구와 공유하고 싶은 비디오." }
      ],
      howItWorks: [
        { title: "매력적인 사진 업로드", description: "스토리를 전달하는 이미지로 시작" },
        { title: "바이럴 대응 효과 선택", description: "참여에 최적화된 효과 선택" },
        { title: "AI가 훅 생성", description: "처음 0.5초가 스크롤을 멈추도록 설계" },
        { title: "게시하고 확산 보기", description: "공유하고 알고리즘에 맡기기" }
      ],
      results: [{ label: "더 많은 참여" }, { label: "훅 시간" }, { label: "시청 시간" }, { label: "루프 친화적" }],
      testimonial: { quote: "내 첫 Hyreel 비디오가 200만 조회를 받았습니다. 제품 사진의 줌 효과가 사람들의 스크롤을 멈췄습니다. 전에는 바이럴된 적이 없었습니다.", author: "케빈 L.", role: "이커머스 판매자" },
      faqs: [
        { question: "AI가 정말 바이럴 비디오 만드는 데 도움이 될까요?", answer: "AI는 바이럴성을 보장할 수 없습니다 — 아무도 못합니다. 하지만 Hyreel의 효과는 알고리즘이 보상하는 것을 중심으로 설계되었습니다: 강력한 훅, 높은 시청 시간, 당신의 기회를 극적으로 향상시키는 매력적인 모션." },
        { question: "이 효과들을 '바이럴 대응'으로 만드는 것은?", answer: "주의를 끌도록 설계되었습니다: 처음 0.5초의 즉각적인 시각적 임팩트, 화면에 시선을 유지하는 모션, 재시청을 장려하는 루프 친화적 엔딩." },
        { question: "어떤 플랫폼에서 작동하나요?", answer: "TikTok, Instagram Reels, YouTube Shorts, Facebook Reels는 비슷한 알고리즘 선호도를 가지고 있습니다. Hyreel 효과는 모두에서 작동합니다." },
        { question: "처음 0.5초가 얼마나 중요한가요?", answer: "매우 중요합니다. 대부분의 시청자는 0.5초 이내에 시청할지 스크롤할지 결정합니다. Hyreel 효과는 앞부분에 시각적 훅을 배치하여 설계되었습니다." }
      ],
      ctaText: "바이럴 콘텐츠 무료로 제작"
    },
    zh: {
      name: "病毒视频",
      heroHeadline: "创建爆款视频",
      heroSubheadline: "针对社交媒体算法优化的效果和格式。最大化每个视频的覆盖面。",
      metaTitle: "用AI创建病毒视频 | Hyreel - 停止滚动的内容",
      metaDescription: "创建爆款视频。针对TikTok、Instagram和YouTube算法优化的AI效果。获得观看的停止滚动内容。",
      problem: {
        title: "大多数视频被忽略",
        description: "普通的社交媒体视频在毫秒内被滚动过去。没有正确的钩子和效果，你的内容就会消失。",
        points: ["算法偏好吸引人的内容", "前0.5秒决定观众是否留下", "观看时间极大地影响覆盖面", "静态或无聊的视频被埋没", "不知道是什么让内容病毒式传播"]
      },
      solution: {
        title: "算法优化效果",
        description: "Hyreel的运动效果围绕社交媒体算法奖励的内容设计 — 强钩子、高观看时间和吸引人的运动。",
        points: ["钩子优先设计立即抓住注意力", "循环友好的结尾促进重复观看", "最大化观看时间的运动模式", "经证明能提高参与度的效果", "针对TikTok、Instagram、YouTube优化"]
      },
      benefits: [
        { title: "停止滚动", description: "动态运动在第一瞬间抓住注意力。" },
        { title: "最大化观看时间", description: "让观众看到最后并重复观看的效果。" },
        { title: "算法提升", description: "更高的参与信号将你的内容推送给更多观众。" },
        { title: "可分享内容", description: "人们真正想与朋友分享的视频。" }
      ],
      howItWorks: [
        { title: "上传吸引人的照片", description: "从讲述故事的图片开始" },
        { title: "选择病毒就绪效果", description: "选择优化参与度的效果" },
        { title: "AI生成钩子", description: "前0.5秒设计用于停止滚动" },
        { title: "发布并观看传播", description: "分享让算法发挥作用" }
      ],
      results: [{ label: "更多参与" }, { label: "钩子时间" }, { label: "观看时间" }, { label: "循环友好" }],
      testimonial: { quote: "我的第一个Hyreel视频获得了200万观看。产品照片上的缩放效果让人们停止滚动。我以前从未有过病毒式传播的内容。", author: "凯文 L.", role: "电商卖家" },
      faqs: [
        { question: "AI真的能帮助制作病毒视频吗？", answer: "AI无法保证病毒性 — 没人能。但Hyreel的效果围绕算法奖励的内容设计：强钩子、高观看时间和极大提高你机会的吸引人运动。" },
        { question: "是什么让这些效果'病毒就绪'？", answer: "它们是为吸引注意力而设计的：前半秒的即时视觉冲击、保持眼睛在屏幕上的运动以及鼓励重复观看的循环友好结尾。" },
        { question: "这对哪些平台有效？", answer: "TikTok、Instagram Reels、YouTube Shorts和Facebook Reels有类似的算法偏好。Hyreel效果在所有平台都有效。" },
        { question: "前0.5秒有多重要？", answer: "至关重要。大多数观众在半秒内决定观看还是滚动。Hyreel效果设计时将视觉钩子放在前面。" }
      ],
      ctaText: "免费创建病毒内容"
    }
  },
  "product-photography-to-video": {
    es: {
      name: "De Fotos de Producto a Video",
      heroHeadline: "Transforma Fotos de Producto en Videos Que Venden",
      heroSubheadline: "Convierte tu fotografia de producto existente en videos de e-commerce profesionales. Sin nuevas sesiones de fotos necesarias.",
      metaTitle: "Convierte Fotos de Producto en Videos | Hyreel AI",
      metaDescription: "Transforma fotografia de producto en videos profesionales. Efectos de movimiento IA que aumentan conversiones. Sin videografo necesario.",
      problem: {
        title: "Las Fotos Solas No Convierten",
        description: "Los listados de producto con video convierten 20-30% mejor, pero la produccion de video es cara y consume tiempo para cada SKU.",
        points: ["Produccion de video cuesta $200-500+ por producto", "No puedes costear video para todo el catalogo", "Fotos estaticas tienen menores tasas de conversion", "Competidores con video roban ventas", "Sin tiempo para filmar y editar cada producto"]
      },
      solution: {
        title: "Fotos Se Convierten en Videos",
        description: "Transforma tu fotografia de producto existente en videos profesionales con efectos de movimiento IA. Cada producto puede tener video sin nuevas sesiones.",
        points: ["Usa fotos que ya tienes", "IA agrega efectos de movimiento cinematicos", "Video para cada SKU a precio accesible", "Aumenta conversiones sin nuevas sesiones", "Actualiza listados en minutos, no dias"]
      },
      benefits: [
        { title: "90% Ahorro en Costos", description: "Video para cada producto a una fraccion de costos tradicionales de produccion." },
        { title: "30% Mayor Conversion", description: "Listados con video convierten significativamente mejor que solo fotos." },
        { title: "Videos el Mismo Dia", description: "Nuevo producto? Crea video el mismo dia que lo fotografias." },
        { title: "Cobertura de Catalogo Completo", description: "Finalmente dale a cada producto en tu catalogo contenido de video profesional." }
      ],
      howItWorks: [
        { title: "Sube Foto de Producto", description: "Usa tu fotografia de producto existente" },
        { title: "Selecciona Efecto de Exhibicion", description: "Zoom, orbita o parallax para destacar caracteristicas" },
        { title: "IA Genera Video", description: "Video profesional de producto en segundos" },
        { title: "Agrega a Listados", description: "Exporta para Amazon, Shopify, Etsy y mas" }
      ],
      results: [{ label: "Mayor Conversion" }, { label: "Ahorro en Costos" }, { label: "Cobertura de Catalogo" }, { label: "Entrega de Video" }],
      testimonial: { quote: "Teniamos 500 productos con fotos y solo 20 con video. Despues de Hyreel, los 500 tienen videos profesionales. Nuestra tasa de conversion general aumento 24%.", author: "Sarah M.", role: "Propietaria Tienda Shopify" },
      faqs: [
        { question: "Que calidad de fotos de producto necesito?", answer: "Fotografia e-commerce estandar funciona genial — fotos claras, bien iluminadas en fondos limpios. Incluso buenas fotos de smartphone pueden crear videos profesionales." },
        { question: "Que plataformas de e-commerce aceptan estos videos?", answer: "Todas las principales plataformas: Amazon, Shopify, Etsy, eBay, WooCommerce, y shopping social en TikTok, Instagram y Pinterest." },
        { question: "Puedo procesar por lotes todo mi catalogo?", answer: "Si! Sube multiples fotos de producto y crea videos para todo tu catalogo eficientemente. Usuarios del plan Business obtienen procesamiento por lotes prioritario." },
        { question: "Los videos de producto realmente aumentan ventas?", answer: "La investigacion muestra consistentemente 20-30% mayores tasas de conversion para listados con video. El video de producto es una de las inversiones de marketing con mayor ROI." }
      ],
      ctaText: "Transforma Tus Fotos Gratis"
    },
    de: {
      name: "Produktfotos zu Video",
      heroHeadline: "Verwandle Produktfotos in Verkaufende Videos",
      heroSubheadline: "Verwandle deine bestehenden Produktfotos in professionelle E-Commerce-Videos. Keine neuen Fotoshootings notig.",
      metaTitle: "Verwandle Produktfotos in Videos | Hyreel AI",
      metaDescription: "Transformiere Produktfotografie in professionelle Videos. KI-Bewegungseffekte die Conversions steigern. Kein Videograf notig.",
      problem: {
        title: "Fotos Allein Konvertieren Nicht",
        description: "Produktlistings mit Video konvertieren 20-30% besser, aber Videoproduktion ist teuer und zeitaufwendig fur jede SKU.",
        points: ["Videoproduktion kostet 200-500€+ pro Produkt", "Kann Video fur den gesamten Katalog nicht leisten", "Statische Fotos haben niedrigere Conversion-Raten", "Wettbewerber mit Video stehlen Verkaufe", "Keine Zeit zum Filmen und Bearbeiten fur jedes Produkt"]
      },
      solution: {
        title: "Fotos Werden zu Videos",
        description: "Transformiere deine bestehende Produktfotografie in professionelle Videos mit KI-Bewegungseffekten. Jedes Produkt kann Video haben ohne neue Shootings.",
        points: ["Nutze Fotos die du bereits hast", "KI fugt kinematische Bewegungseffekte hinzu", "Video fur jede SKU erschwinglich", "Steigere Conversions ohne neue Shoots", "Aktualisiere Listings in Minuten nicht Tagen"]
      },
      benefits: [
        { title: "90% Kosteneinsparung", description: "Video fur jedes Produkt zu einem Bruchteil traditioneller Produktionskosten." },
        { title: "30% Hohere Conversions", description: "Produktlistings mit Video konvertieren deutlich besser als Fotos allein." },
        { title: "Same-Day Videos", description: "Neues Produkt? Erstelle Video am selben Tag an dem du es fotografierst." },
        { title: "Vollstandige Katalogabdeckung", description: "Gib endlich jedem Produkt in deinem Katalog professionellen Video-Content." }
      ],
      howItWorks: [
        { title: "Lade Produktfoto Hoch", description: "Nutze deine bestehende Produktfotografie" },
        { title: "Wahle Showcase-Effekt", description: "Zoom, Orbit oder Parallax um Features hervorzuheben" },
        { title: "KI Generiert Video", description: "Professionelles Produktvideo in Sekunden" },
        { title: "Zu Listings Hinzufugen", description: "Exportiere fur Amazon, Shopify, Etsy und mehr" }
      ],
      results: [{ label: "Hohere Conversions" }, { label: "Kosteneinsparung" }, { label: "Katalogabdeckung" }, { label: "Video-Turnaround" }],
      testimonial: { quote: "Wir hatten 500 Produkte mit Fotos und nur 20 mit Video. Nach Hyreel haben alle 500 professionelle Videos. Unsere Gesamt-Conversion-Rate stieg um 24%.", author: "Sarah M.", role: "Shopify Shop-Inhaberin" },
      faqs: [
        { question: "Welche Qualitat Produktfotos brauche ich?", answer: "Standard E-Commerce-Fotografie funktioniert super — klare, gut beleuchtete Fotos auf sauberen Hintergrunden. Selbst gute Smartphone-Fotos konnen professionelle Videos erstellen." },
        { question: "Welche E-Commerce-Plattformen akzeptieren diese Videos?", answer: "Alle grossen Plattformen: Amazon, Shopify, Etsy, eBay, WooCommerce und Social Shopping auf TikTok, Instagram und Pinterest." },
        { question: "Kann ich meinen gesamten Katalog stapelweise verarbeiten?", answer: "Ja! Lade mehrere Produktfotos hoch und erstelle effizient Videos fur deinen gesamten Katalog. Business-Plan-Nutzer erhalten prioritare Stapelverarbeitung." },
        { question: "Erhohen Produktvideos wirklich den Umsatz?", answer: "Forschung zeigt konsistent 20-30% hohere Conversion-Raten fur Listings mit Video. Produktvideo ist eine der Marketinginvestitionen mit hochstem ROI." }
      ],
      ctaText: "Transformiere Deine Fotos Kostenlos"
    },
    fr: {
      name: "Photos Produit en Video",
      heroHeadline: "Transformez les Photos Produit en Videos Qui Vendent",
      heroSubheadline: "Convertissez vos photos produit existantes en videos e-commerce professionnelles. Pas de nouvelles seances photo.",
      metaTitle: "Transformez les Photos Produit en Videos | Hyreel AI",
      metaDescription: "Transformez la photographie produit en videos professionnelles. Effets de mouvement IA qui augmentent les conversions. Pas de videographe necessaire.",
      problem: {
        title: "Les Photos Seules Ne Convertissent Pas",
        description: "Les fiches produit avec video convertissent 20-30% mieux, mais la production video est couteuse et chronophage pour chaque SKU.",
        points: ["La production video coute 200-500€+ par produit", "Impossible de payer video pour tout le catalogue", "Les photos statiques ont des taux de conversion plus bas", "Les concurrents avec video volent les ventes", "Pas de temps pour filmer et editer chaque produit"]
      },
      solution: {
        title: "Les Photos Deviennent des Videos",
        description: "Transformez votre photographie produit existante en videos professionnelles avec des effets de mouvement IA. Chaque produit peut avoir une video sans nouvelles seances.",
        points: ["Utilisez les photos que vous avez deja", "L'IA ajoute des effets de mouvement cinematiques", "Video pour chaque SKU a prix abordable", "Augmentez les conversions sans nouvelles seances", "Mettez a jour les fiches en minutes pas en jours"]
      },
      benefits: [
        { title: "90% d'Economie", description: "Video pour chaque produit a une fraction des couts de production traditionnels." },
        { title: "30% Plus de Conversions", description: "Les fiches avec video convertissent nettement mieux que les photos seules." },
        { title: "Videos le Meme Jour", description: "Nouveau produit? Creez la video le meme jour que la photo." },
        { title: "Couverture Complete du Catalogue", description: "Donnez enfin a chaque produit de votre catalogue du contenu video professionnel." }
      ],
      howItWorks: [
        { title: "Telechargez Photo Produit", description: "Utilisez votre photographie produit existante" },
        { title: "Selectionnez Effet Vitrine", description: "Zoom, orbite ou parallax pour mettre en valeur les caracteristiques" },
        { title: "L'IA Genere la Video", description: "Video produit professionnelle en secondes" },
        { title: "Ajoutez aux Fiches", description: "Exportez pour Amazon, Shopify, Etsy et plus" }
      ],
      results: [{ label: "Plus de Conversions" }, { label: "Economie" }, { label: "Couverture Catalogue" }, { label: "Delai Video" }],
      testimonial: { quote: "Nous avions 500 produits avec photos et seulement 20 avec video. Apres Hyreel, les 500 ont des videos professionnelles. Notre taux de conversion global a augmente de 24%.", author: "Sarah M.", role: "Proprietaire Boutique Shopify" },
      faqs: [
        { question: "Quelle qualite de photos produit ai-je besoin?", answer: "La photographie e-commerce standard fonctionne tres bien — photos claires, bien eclairees sur fonds propres. Meme de bonnes photos smartphone peuvent creer des videos professionnelles." },
        { question: "Quelles plateformes e-commerce acceptent ces videos?", answer: "Toutes les grandes plateformes: Amazon, Shopify, Etsy, eBay, WooCommerce, et shopping social sur TikTok, Instagram et Pinterest." },
        { question: "Puis-je traiter tout mon catalogue en lot?", answer: "Oui! Telechargez plusieurs photos produit et creez efficacement des videos pour tout votre catalogue. Les utilisateurs Business beneficient d'un traitement par lots prioritaire." },
        { question: "Les videos produit augmentent-elles vraiment les ventes?", answer: "La recherche montre systematiquement 20-30% de taux de conversion plus eleves pour les fiches avec video. La video produit est l'un des investissements marketing au meilleur ROI." }
      ],
      ctaText: "Transformez Vos Photos Gratuitement"
    },
    pt: {
      name: "Fotos de Produto para Video",
      heroHeadline: "Transforme Fotos de Produto em Videos Que Vendem",
      heroSubheadline: "Converta suas fotos de produto existentes em videos de e-commerce profissionais. Sem novas sessoes de fotos.",
      metaTitle: "Transforme Fotos de Produto em Videos | Hyreel AI",
      metaDescription: "Transforme fotografia de produto em videos profissionais. Efeitos de movimento IA que aumentam conversoes. Sem videografo necessario.",
      problem: {
        title: "Fotos Sozinhas Nao Convertem",
        description: "Listagens de produto com video convertem 20-30% melhor, mas producao de video e cara e demorada para cada SKU.",
        points: ["Producao de video custa R$1000-2500+ por produto", "Nao pode pagar video para todo o catalogo", "Fotos estaticas tem taxas de conversao mais baixas", "Concorrentes com video roubam vendas", "Sem tempo para filmar e editar cada produto"]
      },
      solution: {
        title: "Fotos Se Tornam Videos",
        description: "Transforme sua fotografia de produto existente em videos profissionais com efeitos de movimento IA. Cada produto pode ter video sem novas sessoes.",
        points: ["Use fotos que voce ja tem", "IA adiciona efeitos de movimento cinematicos", "Video para cada SKU a preco acessivel", "Aumente conversoes sem novas sessoes", "Atualize listagens em minutos nao dias"]
      },
      benefits: [
        { title: "90% Economia", description: "Video para cada produto a uma fracao dos custos tradicionais de producao." },
        { title: "30% Mais Conversao", description: "Listagens com video convertem significativamente melhor que apenas fotos." },
        { title: "Videos no Mesmo Dia", description: "Novo produto? Crie video no mesmo dia que fotografar." },
        { title: "Cobertura Total do Catalogo", description: "Finalmente de a cada produto do seu catalogo conteudo de video profissional." }
      ],
      howItWorks: [
        { title: "Envie Foto do Produto", description: "Use sua fotografia de produto existente" },
        { title: "Selecione Efeito Vitrine", description: "Zoom, orbita ou parallax para destacar caracteristicas" },
        { title: "IA Gera Video", description: "Video profissional de produto em segundos" },
        { title: "Adicione as Listagens", description: "Exporte para Amazon, Shopify, Mercado Livre e mais" }
      ],
      results: [{ label: "Mais Conversao" }, { label: "Economia" }, { label: "Cobertura Catalogo" }, { label: "Entrega Video" }],
      testimonial: { quote: "Tinhamos 500 produtos com fotos e apenas 20 com video. Depois do Hyreel, todos os 500 tem videos profissionais. Nossa taxa de conversao geral aumentou 24%.", author: "Sarah M.", role: "Dona de Loja Shopify" },
      faqs: [
        { question: "Que qualidade de fotos de produto preciso?", answer: "Fotografia e-commerce padrao funciona otimo — fotos claras, bem iluminadas em fundos limpos. Ate boas fotos de smartphone podem criar videos profissionais." },
        { question: "Quais plataformas de e-commerce aceitam esses videos?", answer: "Todas as principais: Amazon, Shopify, Mercado Livre, eBay, WooCommerce, e shopping social no TikTok, Instagram e Pinterest." },
        { question: "Posso processar todo meu catalogo em lote?", answer: "Sim! Envie multiplas fotos de produto e crie videos para todo seu catalogo eficientemente. Usuarios Business tem processamento em lote prioritario." },
        { question: "Videos de produto realmente aumentam vendas?", answer: "Pesquisa mostra consistentemente 20-30% maiores taxas de conversao para listagens com video. Video de produto e um dos investimentos de marketing com maior ROI." }
      ],
      ctaText: "Transforme Suas Fotos Gratis"
    },
    ru: {
      name: "Фото Продукта в Видео",
      heroHeadline: "Превращайте Фото Продуктов в Продающие Видео",
      heroSubheadline: "Конвертируйте существующие фото продуктов в профессиональные видео для e-commerce. Новые фотосессии не нужны.",
      metaTitle: "Превратите Фото Продуктов в Видео | Hyreel AI",
      metaDescription: "Трансформируйте фотографии продуктов в профессиональные видео. ИИ-эффекты движения повышающие конверсию. Видеограф не нужен.",
      problem: {
        title: "Фото Одних Недостаточно для Конверсии",
        description: "Карточки товаров с видео конвертируют на 20-30% лучше, но видеопроизводство дорогое и времязатратное для каждого SKU.",
        points: ["Производство видео стоит $200-500+ за продукт", "Невозможно оплатить видео для всего каталога", "Статичные фото имеют более низкую конверсию", "Конкуренты с видео забирают продажи", "Нет времени снимать и редактировать для каждого продукта"]
      },
      solution: {
        title: "Фото Становятся Видео",
        description: "Превращайте существующие фото продуктов в профессиональные видео с ИИ-эффектами движения. Каждый продукт может иметь видео без новых фотосессий.",
        points: ["Используйте фото которые уже есть", "ИИ добавляет кинематографические эффекты движения", "Видео для каждого SKU по доступной цене", "Повышайте конверсию без новых съемок", "Обновляйте карточки за минуты не дни"]
      },
      benefits: [
        { title: "90% Экономия", description: "Видео для каждого продукта за долю от традиционных затрат на производство." },
        { title: "30% Выше Конверсия", description: "Карточки с видео конвертируют значительно лучше чем только фото." },
        { title: "Видео в Тот Же День", description: "Новый продукт? Создайте видео в тот же день когда фотографируете." },
        { title: "Полное Покрытие Каталога", description: "Наконец дайте каждому продукту в каталоге профессиональный видеоконтент." }
      ],
      howItWorks: [
        { title: "Загрузите Фото Продукта", description: "Используйте существующую фотографию продукта" },
        { title: "Выберите Эффект Презентации", description: "Зум, орбита или параллакс для выделения особенностей" },
        { title: "ИИ Генерирует Видео", description: "Профессиональное видео продукта за секунды" },
        { title: "Добавьте в Карточки", description: "Экспортируйте для Amazon, Wildberries, Ozon и других" }
      ],
      results: [{ label: "Выше Конверсия" }, { label: "Экономия" }, { label: "Покрытие Каталога" }, { label: "Скорость Создания" }],
      testimonial: { quote: "У нас было 500 товаров с фото и только 20 с видео. После Hyreel все 500 имеют профессиональные видео. Наша общая конверсия выросла на 24%.", author: "Сара М.", role: "Владелица Магазина Shopify" },
      faqs: [
        { question: "Какое качество фото продукта нужно?", answer: "Стандартная e-commerce фотография работает отлично — четкие, хорошо освещенные фото на чистом фоне. Даже хорошие фото со смартфона могут создать профессиональные видео." },
        { question: "Какие e-commerce платформы принимают эти видео?", answer: "Все основные: Amazon, Wildberries, Ozon, eBay, WooCommerce и социальный шопинг в TikTok, Instagram и Pinterest." },
        { question: "Могу ли я обрабатывать весь каталог пакетно?", answer: "Да! Загружайте несколько фото продуктов и эффективно создавайте видео для всего каталога. Пользователи плана Business получают приоритетную пакетную обработку." },
        { question: "Видео продуктов действительно увеличивают продажи?", answer: "Исследования стабильно показывают на 20-30% более высокую конверсию для карточек с видео. Видео продукта — одна из инвестиций в маркетинг с наивысшим ROI." }
      ],
      ctaText: "Преобразите Ваши Фото Бесплатно"
    },
    it: {
      name: "Foto Prodotto in Video",
      heroHeadline: "Trasforma le Foto Prodotto in Video Che Vendono",
      heroSubheadline: "Converti le tue foto prodotto esistenti in video e-commerce professionali. Nessun nuovo servizio fotografico.",
      metaTitle: "Trasforma le Foto Prodotto in Video | Hyreel AI",
      metaDescription: "Trasforma la fotografia prodotto in video professionali. Effetti di movimento IA che aumentano le conversioni. Nessun videografo necessario.",
      problem: {
        title: "Le Foto da Sole Non Convertono",
        description: "Le schede prodotto con video convertono 20-30% meglio, ma la produzione video e costosa e richiede tempo per ogni SKU.",
        points: ["La produzione video costa 200-500€+ per prodotto", "Non puoi permetterti video per tutto il catalogo", "Le foto statiche hanno tassi di conversione piu bassi", "I concorrenti con video rubano vendite", "Non c'e tempo per filmare e editare ogni prodotto"]
      },
      solution: {
        title: "Le Foto Diventano Video",
        description: "Trasforma la tua fotografia prodotto esistente in video professionali con effetti di movimento IA. Ogni prodotto puo avere video senza nuovi servizi fotografici.",
        points: ["Usa le foto che hai gia", "L'IA aggiunge effetti di movimento cinematografici", "Video per ogni SKU a prezzo accessibile", "Aumenta le conversioni senza nuovi shooting", "Aggiorna le schede in minuti non giorni"]
      },
      benefits: [
        { title: "90% Risparmio Costi", description: "Video per ogni prodotto a una frazione dei costi di produzione tradizionali." },
        { title: "30% Piu Conversioni", description: "Le schede con video convertono significativamente meglio delle sole foto." },
        { title: "Video lo Stesso Giorno", description: "Nuovo prodotto? Crea video lo stesso giorno in cui lo fotografi." },
        { title: "Copertura Completa Catalogo", description: "Dai finalmente a ogni prodotto del tuo catalogo contenuto video professionale." }
      ],
      howItWorks: [
        { title: "Carica Foto Prodotto", description: "Usa la tua fotografia prodotto esistente" },
        { title: "Seleziona Effetto Vetrina", description: "Zoom, orbita o parallax per evidenziare le caratteristiche" },
        { title: "L'IA Genera Video", description: "Video prodotto professionale in secondi" },
        { title: "Aggiungi alle Schede", description: "Esporta per Amazon, Shopify, Etsy e altri" }
      ],
      results: [{ label: "Piu Conversioni" }, { label: "Risparmio Costi" }, { label: "Copertura Catalogo" }, { label: "Tempo Consegna Video" }],
      testimonial: { quote: "Avevamo 500 prodotti con foto e solo 20 con video. Dopo Hyreel, tutti i 500 hanno video professionali. Il nostro tasso di conversione complessivo e aumentato del 24%.", author: "Sarah M.", role: "Proprietaria Negozio Shopify" },
      faqs: [
        { question: "Che qualita di foto prodotto mi serve?", answer: "La fotografia e-commerce standard funziona benissimo — foto chiare, ben illuminate su sfondi puliti. Anche buone foto da smartphone possono creare video professionali." },
        { question: "Quali piattaforme e-commerce accettano questi video?", answer: "Tutte le principali: Amazon, Shopify, Etsy, eBay, WooCommerce, e shopping social su TikTok, Instagram e Pinterest." },
        { question: "Posso elaborare tutto il mio catalogo in batch?", answer: "Si! Carica multiple foto prodotto e crea efficientemente video per tutto il tuo catalogo. Gli utenti Business hanno elaborazione batch prioritaria." },
        { question: "I video prodotto aumentano davvero le vendite?", answer: "La ricerca mostra costantemente tassi di conversione 20-30% piu alti per le schede con video. Il video prodotto e uno degli investimenti di marketing con il ROI piu alto." }
      ],
      ctaText: "Trasforma le Tue Foto Gratis"
    },
    nl: {
      name: "Productfotos naar Video",
      heroHeadline: "Verander Productfotos in Videos Die Verkopen",
      heroSubheadline: "Zet je bestaande productfotos om in professionele e-commerce videos. Geen nieuwe fotoshoots nodig.",
      metaTitle: "Verander Productfotos in Videos | Hyreel AI",
      metaDescription: "Transformeer productfotografie in professionele videos. AI-bewegingseffecten die conversies verhogen. Geen videograaf nodig.",
      problem: {
        title: "Fotos Alleen Converteren Niet",
        description: "Productlistings met video converteren 20-30% beter, maar videoproductie is duur en tijdrovend voor elke SKU.",
        points: ["Videoproductie kost €200-500+ per product", "Kan video voor hele catalogus niet betalen", "Statische fotos hebben lagere conversieratio's", "Concurrenten met video stelen verkopen", "Geen tijd om elk product te filmen en bewerken"]
      },
      solution: {
        title: "Fotos Worden Videos",
        description: "Transformeer je bestaande productfotografie in professionele videos met AI-bewegingseffecten. Elk product kan video hebben zonder nieuwe shoots.",
        points: ["Gebruik fotos die je al hebt", "AI voegt cinematische bewegingseffecten toe", "Video voor elke SKU betaalbaar", "Verhoog conversies zonder nieuwe shoots", "Update listings in minuten niet dagen"]
      },
      benefits: [
        { title: "90% Kostenbesparing", description: "Video voor elk product voor een fractie van traditionele productiekosten." },
        { title: "30% Hogere Conversies", description: "Productlistings met video converteren aanzienlijk beter dan alleen fotos." },
        { title: "Zelfde Dag Videos", description: "Nieuw product? Maak video dezelfde dag dat je fotografeert." },
        { title: "Volledige Catalogusdekking", description: "Geef eindelijk elk product in je catalogus professionele video-content." }
      ],
      howItWorks: [
        { title: "Upload Productfoto", description: "Gebruik je bestaande productfotografie" },
        { title: "Selecteer Showcase Effect", description: "Zoom, orbit of parallax om features te highlighten" },
        { title: "AI Genereert Video", description: "Professionele productvideo in seconden" },
        { title: "Voeg Toe aan Listings", description: "Exporteer voor Amazon, Shopify, Etsy en meer" }
      ],
      results: [{ label: "Hogere Conversies" }, { label: "Kostenbesparing" }, { label: "Catalogusdekking" }, { label: "Video Doorlooptijd" }],
      testimonial: { quote: "We hadden 500 producten met fotos en slechts 20 met video. Na Hyreel hebben alle 500 professionele videos. Onze totale conversieratio steeg met 24%.", author: "Sarah M.", role: "Shopify Winkeleigenaar" },
      faqs: [
        { question: "Welke kwaliteit productfotos heb ik nodig?", answer: "Standaard e-commerce fotografie werkt prima — heldere, goed verlichte fotos op schone achtergronden. Zelfs goede smartphone-fotos kunnen professionele videos maken." },
        { question: "Welke e-commerce platforms accepteren deze videos?", answer: "Alle grote platforms: Amazon, Shopify, Etsy, eBay, WooCommerce, en social shopping op TikTok, Instagram en Pinterest." },
        { question: "Kan ik mijn hele catalogus in batch verwerken?", answer: "Ja! Upload meerdere productfotos en maak efficient videos voor je hele catalogus. Business plan gebruikers krijgen prioriteit batch-verwerking." },
        { question: "Verhogen productvideoos echt de verkoop?", answer: "Onderzoek toont consistent 20-30% hogere conversieratio's voor listings met video. Productvideo is een van de marketing-investeringen met de hoogste ROI." }
      ],
      ctaText: "Transformeer Je Fotos Gratis"
    },
    pl: {
      name: "Zdjecia Produktow na Wideo",
      heroHeadline: "Zamien Zdjecia Produktow w Filmy, Ktore Sprzedaja",
      heroSubheadline: "Przeksztalc istniejace zdjecia produktow w profesjonalne filmy e-commerce. Bez nowych sesji zdjeciowych.",
      metaTitle: "Zamien Zdjecia Produktow w Filmy | Hyreel AI",
      metaDescription: "Przeksztalc fotografie produktowa w profesjonalne filmy. Efekty ruchu AI ktore zwiekszaja konwersje. Bez wideooperatora.",
      problem: {
        title: "Same Zdjecia Nie Konwertuja",
        description: "Listingi produktow z wideo konwertuja 20-30% lepiej, ale produkcja wideo jest droga i czasochlonna dla kazdego SKU.",
        points: ["Produkcja wideo kosztuje 800-2000+ zl za produkt", "Nie stac na wideo dla calego katalogu", "Statyczne zdjecia maja nizsze wskazniki konwersji", "Konkurenci z wideo kradna sprzedaz", "Brak czasu na filmowanie i edycje kazdego produktu"]
      },
      solution: {
        title: "Zdjecia Staja Sie Filmami",
        description: "Przeksztalc istniejaca fotografie produktowa w profesjonalne filmy z efektami ruchu AI. Kazdy produkt moze miec wideo bez nowych sesji.",
        points: ["Uzyj zdjec ktore juz masz", "AI dodaje kinematograficzne efekty ruchu", "Wideo dla kazdego SKU w przystepnej cenie", "Zwieksz konwersje bez nowych sesji", "Aktualizuj listingi w minuty nie dni"]
      },
      benefits: [
        { title: "90% Oszczednosc Kosztow", description: "Wideo dla kazdego produktu za ulamek tradycyjnych kosztow produkcji." },
        { title: "30% Wyzsza Konwersja", description: "Listingi z wideo konwertuja znacznie lepiej niz same zdjecia." },
        { title: "Filmy Tego Samego Dnia", description: "Nowy produkt? Stworz wideo tego samego dnia gdy fotografujesz." },
        { title: "Pelne Pokrycie Katalogu", description: "Wreszcie daj kazdemu produktowi w katalogu profesjonalna tresc wideo." }
      ],
      howItWorks: [
        { title: "Przeslij Zdjecie Produktu", description: "Uzyj istniejacego zdjecia produktu" },
        { title: "Wybierz Efekt Prezentacji", description: "Zoom, orbita lub parallax by wyroznic cechy" },
        { title: "AI Generuje Film", description: "Profesjonalne wideo produktowe w sekundy" },
        { title: "Dodaj do Listingow", description: "Eksportuj na Amazon, Allegro, Shopify i wiecej" }
      ],
      results: [{ label: "Wyzsza Konwersja" }, { label: "Oszczednosc Kosztow" }, { label: "Pokrycie Katalogu" }, { label: "Czas Realizacji" }],
      testimonial: { quote: "Mielismy 500 produktow ze zdjeciami i tylko 20 z wideo. Po Hyreel wszystkie 500 maja profesjonalne filmy. Nasz ogolny wskaznik konwersji wzrosl o 24%.", author: "Sarah M.", role: "Wlascicielka Sklepu Shopify" },
      faqs: [
        { question: "Jakiej jakosci zdjec produktow potrzebuje?", answer: "Standardowa fotografia e-commerce dziala swietnie — wyrazne, dobrze oswietlone zdjecia na czystym tle. Nawet dobre zdjecia ze smartfona moga stworzyc profesjonalne filmy." },
        { question: "Ktore platformy e-commerce akceptuja te filmy?", answer: "Wszystkie glowne: Amazon, Allegro, Shopify, eBay, WooCommerce i social shopping na TikToku, Instagramie i Pintereście." },
        { question: "Czy moge przetwarzac caly katalog partiami?", answer: "Tak! Przeslij wiele zdjec produktow i efektywnie tworzfilmy dla calego katalogu. Uzytkownicy planu Business otrzymuja priorytetowe przetwarzanie partiami." },
        { question: "Czy filmy produktowe naprawde zwiekszaja sprzedaz?", answer: "Badania konsekwentnie pokazuja 20-30% wyzsze wskazniki konwersji dla listingow z wideo. Film produktowy to jedna z inwestycji marketingowych o najwyzszym ROI." }
      ],
      ctaText: "Przeksztalc Swoje Zdjecia Za Darmo"
    },
    ja: {
      name: "商品写真から動画へ",
      heroHeadline: "商品写真を売れる動画に変換",
      heroSubheadline: "既存の商品写真をプロフェッショナルなEコマース動画に変換。新しい撮影は不要。",
      metaTitle: "商品写真を動画に変換 | Hyreel AI",
      metaDescription: "商品写真をプロフェッショナルな動画に変換。コンバージョンを高めるAIモーションエフェクト。ビデオグラファー不要。",
      problem: {
        title: "写真だけでは売れない",
        description: "動画付きの商品リスティングは20-30%高いコンバージョンを示しますが、各SKUの動画制作は高価で時間がかかります。",
        points: ["動画制作は1商品あたり2-5万円以上", "カタログ全体の動画は予算的に厳しい", "静止画像はコンバージョン率が低い", "動画のある競合に売上を奪われる", "各商品を撮影・編集する時間がない"]
      },
      solution: {
        title: "写真が動画になる",
        description: "既存の商品写真をAIモーションエフェクトでプロフェッショナルな動画に変換。新しい撮影なしで各商品に動画を。",
        points: ["すでにある写真を使用", "AIがシネマティックなモーションエフェクトを追加", "各SKUの動画を手頃な価格で", "新しい撮影なしでコンバージョンを向上", "リスティングを数日ではなく数分で更新"]
      },
      benefits: [
        { title: "90%コスト削減", description: "従来の制作コストの一部で各商品の動画を。" },
        { title: "30%高いコンバージョン", description: "動画付きリスティングは写真のみより大幅に高いコンバージョン。" },
        { title: "当日動画", description: "新商品？撮影当日に動画を作成。" },
        { title: "カタログ完全カバー", description: "ついにカタログの全商品にプロの動画コンテンツを。" }
      ],
      howItWorks: [
        { title: "商品写真をアップロード", description: "既存の商品写真を使用" },
        { title: "ショーケースエフェクトを選択", description: "ズーム、オービット、パララックスで特徴を強調" },
        { title: "AIが動画を生成", description: "数秒でプロの商品動画" },
        { title: "リスティングに追加", description: "Amazon、楽天、Shopifyなどにエクスポート" }
      ],
      results: [{ label: "高いコンバージョン" }, { label: "コスト削減" }, { label: "カタログカバー" }, { label: "動画納品" }],
      testimonial: { quote: "500商品の写真があり、動画は20だけでした。Hyreel後、500全てにプロの動画があります。全体のコンバージョン率が24%向上しました。", author: "サラ M.", role: "Shopifyストアオーナー" },
      faqs: [
        { question: "どのような品質の商品写真が必要？", answer: "標準的なEコマース写真で十分です — きれいな背景で明るく撮影された鮮明な写真。スマートフォンの良い写真でもプロの動画を作成できます。" },
        { question: "どのEコマースプラットフォームがこれらの動画を受け入れる？", answer: "すべての主要プラットフォーム：Amazon、楽天、Shopify、eBay、WooCommerce、TikTok、Instagram、Pinterestのソーシャルショッピング。" },
        { question: "カタログ全体を一括処理できる？", answer: "はい！複数の商品写真をアップロードして効率的にカタログ全体の動画を作成。Businessプランユーザーは優先一括処理を利用可能。" },
        { question: "商品動画は本当に売上を増やす？", answer: "研究は一貫して動画付きリスティングで20-30%高いコンバージョン率を示しています。商品動画はROIが最も高いマーケティング投資の一つです。" }
      ],
      ctaText: "写真を無料で変換"
    },
    ko: {
      name: "제품 사진을 비디오로",
      heroHeadline: "제품 사진을 판매하는 비디오로 변환",
      heroSubheadline: "기존 제품 사진을 전문적인 이커머스 비디오로 변환. 새로운 촬영 불필요.",
      metaTitle: "제품 사진을 비디오로 변환 | Hyreel AI",
      metaDescription: "제품 사진을 전문 비디오로 변환. 전환율을 높이는 AI 모션 효과. 비디오그래퍼 불필요.",
      problem: {
        title: "사진만으로는 전환되지 않는다",
        description: "비디오가 있는 제품 리스팅은 20-30% 더 높은 전환율을 보이지만, 각 SKU의 비디오 제작은 비용과 시간이 많이 듭니다.",
        points: ["비디오 제작 비용 제품당 20-50만원 이상", "전체 카탈로그 비디오 예산 부담", "정적 사진은 낮은 전환율", "비디오 있는 경쟁사에 매출 빼앗김", "각 제품을 촬영하고 편집할 시간 없음"]
      },
      solution: {
        title: "사진이 비디오가 된다",
        description: "기존 제품 사진을 AI 모션 효과로 전문 비디오로 변환. 새로운 촬영 없이 각 제품에 비디오를.",
        points: ["이미 가지고 있는 사진 사용", "AI가 시네마틱 모션 효과 추가", "각 SKU 비디오를 저렴하게", "새 촬영 없이 전환율 향상", "리스팅을 며칠이 아닌 몇 분 만에 업데이트"]
      },
      benefits: [
        { title: "90% 비용 절감", description: "전통적인 제작 비용의 일부로 각 제품 비디오를." },
        { title: "30% 높은 전환율", description: "비디오 리스팅이 사진만 있는 것보다 훨씬 높은 전환율." },
        { title: "당일 비디오", description: "새 제품? 촬영 당일 비디오 제작." },
        { title: "전체 카탈로그 커버", description: "드디어 카탈로그의 모든 제품에 전문 비디오 콘텐츠를." }
      ],
      howItWorks: [
        { title: "제품 사진 업로드", description: "기존 제품 사진 사용" },
        { title: "쇼케이스 효과 선택", description: "줌, 오빗, 패럴랙스로 특징 강조" },
        { title: "AI가 비디오 생성", description: "몇 초 만에 전문 제품 비디오" },
        { title: "리스팅에 추가", description: "아마존, 쿠팡, Shopify 등으로 내보내기" }
      ],
      results: [{ label: "높은 전환율" }, { label: "비용 절감" }, { label: "카탈로그 커버" }, { label: "비디오 납품" }],
      testimonial: { quote: "500개 제품에 사진이 있고 비디오는 20개뿐이었습니다. Hyreel 후, 500개 모두 전문 비디오가 있습니다. 전체 전환율이 24% 증가했습니다.", author: "사라 M.", role: "Shopify 스토어 오너" },
      faqs: [
        { question: "어떤 품질의 제품 사진이 필요한가요?", answer: "표준 이커머스 사진이면 충분합니다 — 깨끗한 배경에 밝게 촬영된 선명한 사진. 좋은 스마트폰 사진으로도 전문 비디오를 만들 수 있습니다." },
        { question: "어떤 이커머스 플랫폼이 이 비디오를 수용하나요?", answer: "모든 주요 플랫폼: 아마존, 쿠팡, Shopify, eBay, WooCommerce, TikTok, Instagram, Pinterest의 소셜 쇼핑." },
        { question: "전체 카탈로그를 일괄 처리할 수 있나요?", answer: "네! 여러 제품 사진을 업로드하고 효율적으로 전체 카탈로그 비디오를 생성. Business 플랜 사용자는 우선 일괄 처리 가능." },
        { question: "제품 비디오가 정말 매출을 늘리나요?", answer: "연구는 일관되게 비디오 리스팅에서 20-30% 높은 전환율을 보여줍니다. 제품 비디오는 ROI가 가장 높은 마케팅 투자 중 하나입니다." }
      ],
      ctaText: "사진을 무료로 변환"
    },
    zh: {
      name: "产品照片转视频",
      heroHeadline: "将产品照片转换为促销视频",
      heroSubheadline: "将现有产品照片转换为专业的电商视频。无需新的拍摄。",
      metaTitle: "将产品照片转换为视频 | Hyreel AI",
      metaDescription: "将产品摄影转换为专业视频。提高转化率的AI运动效果。无需摄像师。",
      problem: {
        title: "仅靠照片无法转化",
        description: "带视频的产品列表转化率高20-30%，但每个SKU的视频制作昂贵且耗时。",
        points: ["视频制作每个产品花费200-500美元以上", "无法负担整个目录的视频", "静态照片转化率较低", "有视频的竞争对手抢走销售", "没有时间为每个产品拍摄和编辑"]
      },
      solution: {
        title: "照片变成视频",
        description: "用AI运动效果将现有产品照片转换为专业视频。无需新拍摄，每个产品都能有视频。",
        points: ["使用你已有的照片", "AI添加电影级运动效果", "以实惠价格为每个SKU制作视频", "无需新拍摄提高转化", "几分钟而非几天更新列表"]
      },
      benefits: [
        { title: "90%成本节省", description: "以传统制作成本的一小部分为每个产品制作视频。" },
        { title: "30%更高转化", description: "带视频的列表比仅有照片的转化率显著更高。" },
        { title: "当天视频", description: "新产品？拍摄当天就能制作视频。" },
        { title: "完整目录覆盖", description: "终于让目录中的每个产品都有专业视频内容。" }
      ],
      howItWorks: [
        { title: "上传产品照片", description: "使用现有的产品照片" },
        { title: "选择展示效果", description: "缩放、环绕或视差来突出特点" },
        { title: "AI生成视频", description: "几秒钟内生成专业产品视频" },
        { title: "添加到列表", description: "导出到亚马逊、Shopify、淘宝等" }
      ],
      results: [{ label: "更高转化" }, { label: "成本节省" }, { label: "目录覆盖" }, { label: "视频交付" }],
      testimonial: { quote: "我们有500个产品有照片，只有20个有视频。使用Hyreel后，500个都有专业视频。我们的整体转化率提高了24%。", author: "莎拉 M.", role: "Shopify店主" },
      faqs: [
        { question: "需要什么质量的产品照片？", answer: "标准电商摄影就可以 — 在干净背景上拍摄的清晰、光线好的照片。即使是好的手机照片也能创建专业视频。" },
        { question: "哪些电商平台接受这些视频？", answer: "所有主要平台：亚马逊、Shopify、淘宝、eBay、WooCommerce，以及TikTok、Instagram和Pinterest的社交购物。" },
        { question: "可以批量处理整个目录吗？", answer: "可以！上传多张产品照片，高效地为整个目录创建视频。Business计划用户享有优先批量处理。" },
        { question: "产品视频真的能增加销量吗？", answer: "研究一致显示带视频的列表转化率高20-30%。产品视频是ROI最高的营销投资之一。" }
      ],
      ctaText: "免费转换您的照片"
    }
  },
  "scale-video-production": {
    es: {
      name: "Escalar Produccion de Video",
      heroHeadline: "Escala Tu Produccion de Video 10x",
      heroSubheadline: "Produce cientos de videos por el costo de unos pocos. La IA de Hyreel hace que la produccion de video a escala sea finalmente asequible.",
      metaTitle: "Escala Produccion de Video Sin Contratar | Hyreel AI",
      metaDescription: "10x tu produccion de video sin 10x el equipo. Generador de video IA que escala produccion de contenido para agencias, equipos y creadores de alto volumen.",
      problem: {
        title: "Escalar Video es Caro",
        description: "A medida que las demandas de video crecen, la solucion tradicional es contratar mas editores — pero eso significa mas salarios, mas gestion y aumentos lineales de costos.",
        points: ["Mas demanda de contenido = mas contrataciones", "Costos del equipo de video escalan linealmente", "Entrenar nuevos editores toma tiempo", "La calidad varia entre miembros del equipo", "Cuellos de botella cuando la demanda aumenta"]
      },
      solution: {
        title: "Escala Sin Contratar",
        description: "Hyreel te permite 10x la produccion de video sin 10x el equipo. La IA maneja el trabajo de produccion, dejando que tu equipo existente se enfoque en estrategia y creatividad.",
        points: ["Mismo equipo, 10x produccion", "Calidad consistente a cualquier volumen", "Sin entrenamiento para nuevos empleados", "Maneja picos de demanda instantaneamente", "Los costos no escalan linealmente con el contenido"]
      },
      benefits: [
        { title: "10x Produccion", description: "Produce dramaticamente mas contenido sin agregar personal." },
        { title: "Rompe el Escalado Lineal", description: "Los costos permanecen planos mientras el volumen de produccion crece." },
        { title: "Calidad Consistente", description: "Mismos resultados profesionales ya crees 10 o 1,000 videos." },
        { title: "Capacidad Instantanea", description: "Escala para campanas o picos de demanda inmediatamente." }
      ],
      howItWorks: [
        { title: "Sube Contenido por Lotes", description: "Sube todas las fotos fuente de una vez" },
        { title: "Aplica Efectos a Escala", description: "Configura efectos para lotes de contenido" },
        { title: "IA Genera en Paralelo", description: "Multiples videos creados simultaneamente" },
        { title: "Exporta y Despliega", description: "Descarga todos los videos para distribucion" }
      ],
      results: [{ label: "Mas Produccion" }, { label: "Tamano de Equipo" }, { label: "Estructura de Costos" }, { label: "Escalar" }],
      testimonial: { quote: "Nuestro equipo de contenido de 3 personas ahora produce mas video que companias con 10+ editores. Hyreel no reemplazo a nuestro equipo — los hizo 10x mas poderosos.", author: "Jennifer K.", role: "Jefa de Contenido" },
      faqs: [
        { question: "Cuanto puedo escalar realmente?", answer: "No hay limite practico. Crea cientos o miles de videos por mes. La unica limitacion es tu contenido fuente y direccion creativa." },
        { question: "La calidad bajara a alto volumen?", answer: "No. La IA aplica los mismos efectos profesionales ya crees 1 video o 1,000. La calidad es consistente sin importar el volumen." },
        { question: "Como afecta esto a mi equipo?", answer: "Tu equipo pasa de edicion tediosa a trabajo estrategico: planificacion de contenido, direccion creativa y optimizacion de rendimiento." },
        { question: "Que hay de necesidades empresariales?", answer: "El plan Business incluye colaboracion de equipo, procesamiento prioritario y caracteristicas disenadas para produccion de alto volumen." }
      ],
      ctaText: "Empieza a Escalar Gratis"
    },
    de: {
      name: "Videoproduktion Skalieren",
      heroHeadline: "Skaliere Deine Videoproduktion 10x",
      heroSubheadline: "Produziere Hunderte Videos zu den Kosten von wenigen. Hyreels KI macht skalierbare Videoproduktion endlich erschwinglich.",
      metaTitle: "Skaliere Videoproduktion Ohne Einzustellen | Hyreel AI",
      metaDescription: "10x deine Videoausgabe ohne 10x das Team. KI-Videogenerator der Content-Produktion fur Agenturen, Teams und High-Volume-Creator skaliert.",
      problem: {
        title: "Video Skalieren ist Teuer",
        description: "Wenn Video-Anforderungen wachsen ist die traditionelle Losung mehr Editoren einzustellen — aber das bedeutet mehr Gehalter, mehr Management und linear steigende Kosten.",
        points: ["Mehr Content-Nachfrage = mehr Einstellungen", "Video-Team-Kosten skalieren linear", "Neue Editoren einzuarbeiten braucht Zeit", "Qualitat variiert zwischen Teammitgliedern", "Engpasse wenn Nachfrage sprunghaft steigt"]
      },
      solution: {
        title: "Skaliere Ohne Einzustellen",
        description: "Hyreel lasst dich die Videoausgabe 10x erhohen ohne 10x das Team. KI ubernimmt die Produktionsarbeit, sodass dein bestehendes Team sich auf Strategie und Kreativitat konzentrieren kann.",
        points: ["Gleiches Team, 10x Output", "Konsistente Qualitat bei jedem Volumen", "Kein Training fur neue Mitarbeiter", "Handle Nachfragespitzen sofort", "Kosten skalieren nicht linear mit Content"]
      },
      benefits: [
        { title: "10x Output", description: "Produziere dramatisch mehr Content ohne Headcount zu erhohen." },
        { title: "Lineare Skalierung Brechen", description: "Kosten bleiben flach wahrend Produktionsvolumen wachst." },
        { title: "Konsistente Qualitat", description: "Gleiche professionelle Ergebnisse ob du 10 oder 1.000 Videos erstellst." },
        { title: "Sofortige Kapazitat", description: "Skaliere fur Kampagnen oder Nachfragespitzen sofort." }
      ],
      howItWorks: [
        { title: "Batch Content Hochladen", description: "Lade alle Quellfotos auf einmal hoch" },
        { title: "Effekte im Grossen Anwenden", description: "Setze Effekte fur Batches von Content" },
        { title: "KI Generiert Parallel", description: "Mehrere Videos gleichzeitig erstellt" },
        { title: "Exportieren und Bereitstellen", description: "Alle Videos zur Verteilung herunterladen" }
      ],
      results: [{ label: "Mehr Output" }, { label: "Teamgrosse" }, { label: "Kostenstruktur" }, { label: "Sofort Skalieren" }],
      testimonial: { quote: "Unser 3-Personen Content-Team produziert jetzt mehr Video als Unternehmen mit 10+ Editoren. Hyreel hat unser Team nicht ersetzt — es hat sie 10x machtiger gemacht.", author: "Jennifer K.", role: "Head of Content" },
      faqs: [
        { question: "Wie viel kann ich wirklich skalieren?", answer: "Es gibt keine praktische Grenze. Erstelle Hunderte oder Tausende Videos pro Monat. Die einzige Einschrankung ist dein Quellcontent und kreative Richtung." },
        { question: "Wird die Qualitat bei hohem Volumen sinken?", answer: "Nein. KI wendet die gleichen professionellen Effekte an ob du 1 Video oder 1.000 erstellst. Qualitat ist konsistent unabhangig vom Volumen." },
        { question: "Wie beeinflusst das mein Team?", answer: "Dein Team wechselt von muhsamer Bearbeitung zu strategischer Arbeit: Content-Planung, kreative Richtung und Performance-Optimierung." },
        { question: "Was ist mit Unternehmensanforderungen?", answer: "Der Business-Plan beinhaltet Team-Zusammenarbeit, prioritare Verarbeitung und Features fur Hochvolumen-Produktion." }
      ],
      ctaText: "Starte Skalierung Kostenlos"
    },
    fr: {
      name: "Scaler la Production Video",
      heroHeadline: "Multipliez Votre Production Video par 10",
      heroSubheadline: "Produisez des centaines de videos au prix de quelques-unes. L'IA de Hyreel rend enfin la production video a grande echelle abordable.",
      metaTitle: "Scalez la Production Video Sans Embaucher | Hyreel AI",
      metaDescription: "10x votre production video sans 10x l'equipe. Generateur video IA qui scale la production de contenu pour agences, equipes et createurs a haut volume.",
      problem: {
        title: "Scaler la Video est Couteux",
        description: "Quand les demandes video augmentent, la solution traditionnelle est d'embaucher plus d'editeurs — mais cela signifie plus de salaires, plus de gestion et des couts lineaires.",
        points: ["Plus de demande de contenu = plus d'embauches", "Les couts d'equipe video scalent lineairement", "Former de nouveaux editeurs prend du temps", "La qualite varie entre les membres de l'equipe", "Goulets d'etranglement quand la demande explose"]
      },
      solution: {
        title: "Scalez Sans Embaucher",
        description: "Hyreel vous permet de 10x la production video sans 10x l'equipe. L'IA gere le travail de production, laissant votre equipe existante se concentrer sur la strategie et la creativite.",
        points: ["Meme equipe, 10x le resultat", "Qualite consistante a n'importe quel volume", "Pas de formation pour les nouvelles recrues", "Gerez les pics de demande instantanement", "Les couts ne scalent pas lineairement avec le contenu"]
      },
      benefits: [
        { title: "10x Plus de Production", description: "Produisez dramatiquement plus de contenu sans augmenter l'effectif." },
        { title: "Cassez le Scaling Lineaire", description: "Les couts restent stables tandis que le volume de production augmente." },
        { title: "Qualite Consistante", description: "Memes resultats professionnels que vous creez 10 ou 1 000 videos." },
        { title: "Capacite Instantanee", description: "Scalez pour les campagnes ou pics de demande immediatement." }
      ],
      howItWorks: [
        { title: "Telechargez du Contenu en Lots", description: "Telechargez toutes les photos sources d'un coup" },
        { title: "Appliquez des Effets a l'Echelle", description: "Definissez des effets pour des lots de contenu" },
        { title: "L'IA Genere en Parallele", description: "Plusieurs videos creees simultanement" },
        { title: "Exportez et Deployez", description: "Telechargez toutes les videos pour distribution" }
      ],
      results: [{ label: "Plus de Production" }, { label: "Taille d'Equipe" }, { label: "Structure de Couts" }, { label: "Scaling Instantane" }],
      testimonial: { quote: "Notre equipe de contenu de 3 personnes produit maintenant plus de video que des entreprises avec 10+ editeurs. Hyreel n'a pas remplace notre equipe — il les a rendus 10x plus puissants.", author: "Jennifer K.", role: "Directrice du Contenu" },
      faqs: [
        { question: "Combien puis-je vraiment scaler?", answer: "Il n'y a pas de limite pratique. Creez des centaines ou milliers de videos par mois. La seule contrainte est votre contenu source et direction creative." },
        { question: "La qualite diminuera-t-elle a haut volume?", answer: "Non. L'IA applique les memes effets professionnels que vous creez 1 video ou 1 000. La qualite est constante quel que soit le volume." },
        { question: "Comment cela affecte-t-il mon equipe?", answer: "Votre equipe passe de l'edition fastidieuse au travail strategique: planification de contenu, direction creative et optimisation des performances." },
        { question: "Qu'en est-il des besoins entreprise?", answer: "Le plan Business inclut la collaboration d'equipe, le traitement prioritaire et des fonctionnalites concues pour la production a haut volume." }
      ],
      ctaText: "Commencez a Scaler Gratuitement"
    },
    pt: {
      name: "Escalar Producao de Video",
      heroHeadline: "Escale Sua Producao de Video 10x",
      heroSubheadline: "Produza centenas de videos pelo custo de alguns. A IA do Hyreel torna a producao de video em escala finalmente acessivel.",
      metaTitle: "Escale Producao de Video Sem Contratar | Hyreel AI",
      metaDescription: "10x sua producao de video sem 10x a equipe. Gerador de video IA que escala producao de conteudo para agencias, equipes e criadores de alto volume.",
      problem: {
        title: "Escalar Video e Caro",
        description: "Conforme as demandas de video crescem, a solucao tradicional e contratar mais editores — mas isso significa mais salarios, mais gestao e aumentos lineares de custo.",
        points: ["Mais demanda de conteudo = mais contratacoes", "Custos da equipe de video escalam linearmente", "Treinar novos editores leva tempo", "Qualidade varia entre membros da equipe", "Gargalos quando a demanda dispara"]
      },
      solution: {
        title: "Escale Sem Contratar",
        description: "Hyreel permite 10x a producao de video sem 10x a equipe. A IA cuida do trabalho de producao, deixando sua equipe existente focar em estrategia e criatividade.",
        points: ["Mesma equipe, 10x producao", "Qualidade consistente em qualquer volume", "Sem treinamento para novos funcionarios", "Lide com picos de demanda instantaneamente", "Custos nao escalam linearmente com conteudo"]
      },
      benefits: [
        { title: "10x Producao", description: "Produza dramaticamente mais conteudo sem aumentar o quadro." },
        { title: "Quebre o Scaling Linear", description: "Custos permanecem estaveis enquanto volume de producao cresce." },
        { title: "Qualidade Consistente", description: "Mesmos resultados profissionais criando 10 ou 1.000 videos." },
        { title: "Capacidade Instantanea", description: "Escale para campanhas ou picos de demanda imediatamente." }
      ],
      howItWorks: [
        { title: "Envie Conteudo em Lote", description: "Envie todas as fotos fonte de uma vez" },
        { title: "Aplique Efeitos em Escala", description: "Configure efeitos para lotes de conteudo" },
        { title: "IA Gera em Paralelo", description: "Multiplos videos criados simultaneamente" },
        { title: "Exporte e Implante", description: "Baixe todos os videos para distribuicao" }
      ],
      results: [{ label: "Mais Producao" }, { label: "Tamanho da Equipe" }, { label: "Estrutura de Custos" }, { label: "Escalar Instantaneo" }],
      testimonial: { quote: "Nossa equipe de conteudo de 3 pessoas agora produz mais video que empresas com 10+ editores. Hyreel nao substituiu nossa equipe — tornou-os 10x mais poderosos.", author: "Jennifer K.", role: "Chefe de Conteudo" },
      faqs: [
        { question: "Quanto posso realmente escalar?", answer: "Nao ha limite pratico. Crie centenas ou milhares de videos por mes. A unica restricao e seu conteudo fonte e direcao criativa." },
        { question: "A qualidade cairia em alto volume?", answer: "Nao. A IA aplica os mesmos efeitos profissionais criando 1 video ou 1.000. Qualidade e consistente independente do volume." },
        { question: "Como isso afeta minha equipe?", answer: "Sua equipe passa de edicao tediosa para trabalho estrategico: planejamento de conteudo, direcao criativa e otimizacao de performance." },
        { question: "E sobre necessidades empresariais?", answer: "O plano Business inclui colaboracao de equipe, processamento prioritario e recursos projetados para producao de alto volume." }
      ],
      ctaText: "Comece a Escalar Gratis"
    },
    ru: {
      name: "Масштабирование Видеопроизводства",
      heroHeadline: "Масштабируйте Производство Видео в 10 Раз",
      heroSubheadline: "Производите сотни видео по цене нескольких. ИИ Hyreel делает масштабное производство видео наконец доступным.",
      metaTitle: "Масштабируйте Видеопроизводство Без Найма | Hyreel AI",
      metaDescription: "10x выпуск видео без 10x команды. ИИ-генератор видео который масштабирует производство контента для агентств, команд и высокообъемных креаторов.",
      problem: {
        title: "Масштабирование Видео Дорого",
        description: "Когда требования к видео растут, традиционное решение — нанять больше редакторов — но это больше зарплат, больше управления и линейный рост затрат.",
        points: ["Больше спроса на контент = больше найма", "Затраты на видеокоманду растут линейно", "Обучение новых редакторов занимает время", "Качество варьируется между членами команды", "Узкие места при скачках спроса"]
      },
      solution: {
        title: "Масштабируйте Без Найма",
        description: "Hyreel позволяет увеличить выпуск видео в 10 раз без увеличения команды в 10 раз. ИИ берет на себя производственную работу, позволяя существующей команде сосредоточиться на стратегии и креативе.",
        points: ["Та же команда, 10x выпуск", "Стабильное качество при любом объеме", "Без обучения новых сотрудников", "Справляйтесь с пиками спроса мгновенно", "Затраты не растут линейно с контентом"]
      },
      benefits: [
        { title: "10x Выпуск", description: "Производите значительно больше контента без увеличения штата." },
        { title: "Преодолейте Линейный Рост", description: "Затраты остаются плоскими пока объем производства растет." },
        { title: "Стабильное Качество", description: "Одинаково профессиональные результаты создаете ли 10 или 1000 видео." },
        { title: "Мгновенная Мощность", description: "Масштабируйтесь для кампаний или пиков спроса мгновенно." }
      ],
      howItWorks: [
        { title: "Загружайте Контент Пакетами", description: "Загрузите все исходные фото сразу" },
        { title: "Применяйте Эффекты Массово", description: "Установите эффекты для пакетов контента" },
        { title: "ИИ Генерирует Параллельно", description: "Несколько видео создаются одновременно" },
        { title: "Экспортируйте и Разворачивайте", description: "Скачайте все видео для распространения" }
      ],
      results: [{ label: "Больше Выпуск" }, { label: "Размер Команды" }, { label: "Структура Затрат" }, { label: "Мгновенное Масштабирование" }],
      testimonial: { quote: "Наша команда контента из 3 человек теперь производит больше видео чем компании с 10+ редакторами. Hyreel не заменил нашу команду — он сделал их в 10 раз мощнее.", author: "Дженнифер К.", role: "Руководитель Контента" },
      faqs: [
        { question: "Насколько я действительно могу масштабироваться?", answer: "Практических ограничений нет. Создавайте сотни или тысячи видео в месяц. Единственное ограничение — ваш исходный контент и креативное направление." },
        { question: "Упадет ли качество при высоком объеме?", answer: "Нет. ИИ применяет те же профессиональные эффекты создаете ли вы 1 видео или 1000. Качество стабильно независимо от объема." },
        { question: "Как это влияет на мою команду?", answer: "Ваша команда переходит от рутинного редактирования к стратегической работе: планирование контента, креативное направление и оптимизация эффективности." },
        { question: "Что насчет корпоративных потребностей?", answer: "План Business включает командную работу, приоритетную обработку и функции для высокообъемного производства." }
      ],
      ctaText: "Начните Масштабировать Бесплатно"
    },
    it: {
      name: "Scalare la Produzione Video",
      heroHeadline: "Scala la Tua Produzione Video 10x",
      heroSubheadline: "Produci centinaia di video al costo di pochi. L'IA di Hyreel rende finalmente accessibile la produzione video su scala.",
      metaTitle: "Scala la Produzione Video Senza Assumere | Hyreel AI",
      metaDescription: "10x la tua produzione video senza 10x il team. Generatore video IA che scala la produzione di contenuti per agenzie, team e creator ad alto volume.",
      problem: {
        title: "Scalare il Video e Costoso",
        description: "Quando le richieste video crescono, la soluzione tradizionale e assumere piu editor — ma cio significa piu stipendi, piu gestione e aumenti di costo lineari.",
        points: ["Piu domanda di contenuti = piu assunzioni", "I costi del team video scalano linearmente", "Formare nuovi editor richiede tempo", "La qualita varia tra i membri del team", "Colli di bottiglia quando la domanda aumenta"]
      },
      solution: {
        title: "Scala Senza Assumere",
        description: "Hyreel ti permette di 10x la produzione video senza 10x il team. L'IA gestisce il lavoro di produzione, lasciando il tuo team esistente concentrarsi su strategia e creativita.",
        points: ["Stesso team, 10x output", "Qualita consistente a qualsiasi volume", "Nessuna formazione per nuovi assunti", "Gestisci picchi di domanda istantaneamente", "I costi non scalano linearmente con i contenuti"]
      },
      benefits: [
        { title: "10x Output", description: "Produci dramaticamente piu contenuti senza aumentare l'organico." },
        { title: "Rompi lo Scaling Lineare", description: "I costi restano piatti mentre il volume di produzione cresce." },
        { title: "Qualita Consistente", description: "Stessi risultati professionali che tu crei 10 o 1.000 video." },
        { title: "Capacita Istantanea", description: "Scala per campagne o picchi di domanda immediatamente." }
      ],
      howItWorks: [
        { title: "Carica Contenuti in Batch", description: "Carica tutte le foto sorgente in una volta" },
        { title: "Applica Effetti su Scala", description: "Imposta effetti per batch di contenuti" },
        { title: "L'IA Genera in Parallelo", description: "Piu video creati simultaneamente" },
        { title: "Esporta e Distribuisci", description: "Scarica tutti i video per la distribuzione" }
      ],
      results: [{ label: "Piu Output" }, { label: "Dimensione Team" }, { label: "Struttura Costi" }, { label: "Scaling Istantaneo" }],
      testimonial: { quote: "Il nostro team di contenuti di 3 persone ora produce piu video di aziende con 10+ editor. Hyreel non ha sostituito il nostro team — li ha resi 10x piu potenti.", author: "Jennifer K.", role: "Head of Content" },
      faqs: [
        { question: "Quanto posso scalare davvero?", answer: "Non c'e limite pratico. Crea centinaia o migliaia di video al mese. L'unica limitazione e il tuo contenuto sorgente e direzione creativa." },
        { question: "La qualita cala ad alto volume?", answer: "No. L'IA applica gli stessi effetti professionali che tu crei 1 video o 1.000. La qualita e costante indipendentemente dal volume." },
        { question: "Come influisce sul mio team?", answer: "Il tuo team passa dall'editing noioso al lavoro strategico: pianificazione contenuti, direzione creativa e ottimizzazione delle performance." },
        { question: "E per le esigenze enterprise?", answer: "Il piano Business include collaborazione team, elaborazione prioritaria e funzionalita progettate per la produzione ad alto volume." }
      ],
      ctaText: "Inizia a Scalare Gratis"
    },
    nl: {
      name: "Videoproductie Opschalen",
      heroHeadline: "Schaal Je Videoproductie 10x Op",
      heroSubheadline: "Produceer honderden videos voor de kosten van een paar. Hyreels AI maakt schaalbare videoproductie eindelijk betaalbaar.",
      metaTitle: "Schaal Videoproductie Zonder Aan te Nemen | Hyreel AI",
      metaDescription: "10x je video-output zonder 10x het team. AI-videogenerator die contentproductie schaalt voor bureaus, teams en high-volume creators.",
      problem: {
        title: "Video Schalen is Duur",
        description: "Als video-eisen groeien is de traditionele oplossing meer editors aannemen — maar dat betekent meer salarissen, meer management en lineair stijgende kosten.",
        points: ["Meer content vraag = meer aannames", "Videoteam kosten schalen lineair", "Nieuwe editors trainen kost tijd", "Kwaliteit varieert tussen teamleden", "Knelpunten bij vraagpieken"]
      },
      solution: {
        title: "Schaal Zonder Aan te Nemen",
        description: "Hyreel laat je video-output 10x verhogen zonder 10x het team. AI verzorgt het productiewerk, zodat je bestaande team zich kan focussen op strategie en creativiteit.",
        points: ["Zelfde team, 10x output", "Consistente kwaliteit bij elk volume", "Geen training voor nieuwe medewerkers", "Handel vraagpieken direct af", "Kosten schalen niet lineair met content"]
      },
      benefits: [
        { title: "10x Output", description: "Produceer dramatisch meer content zonder personeel toe te voegen." },
        { title: "Breek Lineaire Schaling", description: "Kosten blijven vlak terwijl productievolume groeit." },
        { title: "Consistente Kwaliteit", description: "Zelfde professionele resultaten of je nu 10 of 1.000 videos maakt." },
        { title: "Directe Capaciteit", description: "Schaal voor campagnes of vraagpieken onmiddellijk." }
      ],
      howItWorks: [
        { title: "Upload Content in Batch", description: "Upload alle bronfotos in een keer" },
        { title: "Pas Effecten op Schaal Toe", description: "Stel effecten in voor batches content" },
        { title: "AI Genereert Parallel", description: "Meerdere videos tegelijk gemaakt" },
        { title: "Exporteer en Deploy", description: "Download alle videos voor distributie" }
      ],
      results: [{ label: "Meer Output" }, { label: "Teamgrootte" }, { label: "Kostenstructuur" }, { label: "Direct Opschalen" }],
      testimonial: { quote: "Ons 3-persoons contentteam produceert nu meer video dan bedrijven met 10+ editors. Hyreel heeft ons team niet vervangen — het maakte ze 10x krachtiger.", author: "Jennifer K.", role: "Head of Content" },
      faqs: [
        { question: "Hoeveel kan ik echt opschalen?", answer: "Er is geen praktische limiet. Maak honderden of duizenden videos per maand. De enige beperking is je broncontent en creatieve richting." },
        { question: "Daalt de kwaliteit bij hoog volume?", answer: "Nee. AI past dezelfde professionele effecten toe of je nu 1 video maakt of 1.000. Kwaliteit is consistent ongeacht volume." },
        { question: "Hoe beinvloedt dit mijn team?", answer: "Je team verschuift van vervelend bewerken naar strategisch werk: contentplanning, creatieve richting en performance-optimalisatie." },
        { question: "Hoe zit het met enterprise behoeften?", answer: "Het Business plan bevat teamcollaboratie, prioriteitsverwerking en features ontworpen voor high-volume productie." }
      ],
      ctaText: "Begin Gratis te Schalen"
    },
    pl: {
      name: "Skalowanie Produkcji Wideo",
      heroHeadline: "Skaluj Produkcje Wideo 10x",
      heroSubheadline: "Produkuj setki filmow za cene kilku. AI Hyreel sprawia, ze produkcja wideo na skale jest wreszcie przystepna.",
      metaTitle: "Skaluj Produkcje Wideo Bez Zatrudniania | Hyreel AI",
      metaDescription: "10x produkcja wideo bez 10x zespolu. Generator wideo AI ktory skaluje produkcje tresci dla agencji, zespolow i tworcow o duzym wolumenie.",
      problem: {
        title: "Skalowanie Wideo Jest Drogie",
        description: "Gdy wymagania wideo rosna, tradycyjnym rozwiazaniem jest zatrudnienie wiecej edytorow — ale to oznacza wiecej wynagrodzen, wiecej zarzadzania i liniowy wzrost kosztow.",
        points: ["Wiecej zapotrzebowania na tresci = wiecej zatrudnienia", "Koszty zespolu wideo skaluja sie liniowo", "Szkolenie nowych edytorow zajmuje czas", "Jakosc rozni sie miedzy czlonkami zespolu", "Waskie gardla gdy popyt gwaltownie rosnie"]
      },
      solution: {
        title: "Skaluj Bez Zatrudniania",
        description: "Hyreel pozwala 10x zwiekszyc produkcje wideo bez 10x zespolu. AI zajmuje sie praca produkcyjna, pozwalajac istniejacemu zespolowi skupic sie na strategii i kreatywnosci.",
        points: ["Ten sam zespol, 10x produkcja", "Stala jakosc przy kazdym wolumenie", "Bez szkolenia dla nowych pracownikow", "Obsluguj skoki popytu natychmiast", "Koszty nie skaluja sie liniowo z tresciami"]
      },
      benefits: [
        { title: "10x Produkcja", description: "Produkuj dramatycznie wiecej tresci bez zwiekszania zatrudnienia." },
        { title: "Przerwij Liniowe Skalowanie", description: "Koszty pozostaja plaskie podczas gdy wolumen produkcji rosnie." },
        { title: "Stala Jakosc", description: "Te same profesjonalne rezultaty tworzac 10 czy 1000 filmow." },
        { title: "Natychmiastowa Pojemnosc", description: "Skaluj dla kampanii lub skokow popytu natychmiast." }
      ],
      howItWorks: [
        { title: "Przeslij Tresci Partiami", description: "Przeslij wszystkie zdjecia zrodlowe na raz" },
        { title: "Zastosuj Efekty na Skale", description: "Ustaw efekty dla partii tresci" },
        { title: "AI Generuje Rownolegle", description: "Wiele filmow tworzonych jednoczesnie" },
        { title: "Eksportuj i Wdrazaj", description: "Pobierz wszystkie filmy do dystrybucji" }
      ],
      results: [{ label: "Wiecej Produkcji" }, { label: "Rozmiar Zespolu" }, { label: "Struktura Kosztow" }, { label: "Natychmiastowe Skalowanie" }],
      testimonial: { quote: "Nasz 3-osobowy zespol tresci produkuje teraz wiecej wideo niz firmy z 10+ edytorami. Hyreel nie zastapil naszego zespolu — uczynilgo 10x potezniejszym.", author: "Jennifer K.", role: "Szefowa Tresci" },
      faqs: [
        { question: "Ile naprawde moge skalowac?", answer: "Nie ma praktycznego limitu. Tworz setki lub tysiace filmow miesiecznie. Jedynym ograniczeniem jest twoja tresc zrodlowa i kierunek kreatywny." },
        { question: "Czy jakosc spadnie przy duzym wolumenie?", answer: "Nie. AI stosuje te same profesjonalne efekty tworzac 1 film czy 1000. Jakosc jest stala niezaleznie od wolumenu." },
        { question: "Jak to wplywa na moj zespol?", answer: "Twoj zespol przechodzi od zmodnej edycji do pracy strategicznej: planowanie tresci, kierunek kreatywny i optymalizacja wydajnosci." },
        { question: "A potrzeby korporacyjne?", answer: "Plan Business obejmuje wspolprace zespolowa, priorytetowe przetwarzanie i funkcje zaprojektowane dla produkcji o duzym wolumenie." }
      ],
      ctaText: "Zacznij Skalowac Za Darmo"
    },
    ja: {
      name: "動画制作のスケーリング",
      heroHeadline: "動画制作を10倍にスケール",
      heroSubheadline: "数本分のコストで数百本の動画を制作。HyreelのAIでスケーラブルな動画制作がついに手頃に。",
      metaTitle: "採用なしで動画制作をスケール | Hyreel AI",
      metaDescription: "チームを10倍にせずに動画出力を10倍に。エージェンシー、チーム、大量クリエイター向けにコンテンツ制作をスケールするAI動画ジェネレーター。",
      problem: {
        title: "動画のスケーリングは高価",
        description: "動画の需要が増えると、従来の解決策はより多くのエディターを雇うこと — しかしそれは給与増、管理増、線形的なコスト増を意味します。",
        points: ["より多くのコンテンツ需要 = より多くの採用", "動画チームコストは線形的にスケール", "新しいエディターのトレーニングに時間がかかる", "チームメンバー間で品質がばらつく", "需要急増時にボトルネック"]
      },
      solution: {
        title: "採用なしでスケール",
        description: "Hyreelではチームを10倍にせずに動画出力を10倍に。AIが制作作業を処理し、既存のチームは戦略とクリエイティブに集中できます。",
        points: ["同じチーム、10倍の出力", "どのボリュームでも一貫した品質", "新入社員のトレーニング不要", "需要のスパイクに即座に対応", "コンテンツに比例してコストが増えない"]
      },
      benefits: [
        { title: "10倍の出力", description: "人員を増やさずに劇的により多くのコンテンツを制作。" },
        { title: "線形スケーリングを打破", description: "制作量が増えてもコストは横ばい。" },
        { title: "一貫した品質", description: "10本作っても1000本作っても同じプロの結果。" },
        { title: "即座の容量", description: "キャンペーンや需要スパイクに即座にスケール。" }
      ],
      howItWorks: [
        { title: "コンテンツをバッチアップロード", description: "すべてのソース写真を一度にアップロード" },
        { title: "スケールでエフェクトを適用", description: "コンテンツのバッチにエフェクトを設定" },
        { title: "AIが並列で生成", description: "複数の動画が同時に作成される" },
        { title: "エクスポートしてデプロイ", description: "すべての動画を配信用にダウンロード" }
      ],
      results: [{ label: "より多くの出力" }, { label: "チームサイズ" }, { label: "コスト構造" }, { label: "即座にスケール" }],
      testimonial: { quote: "私たちの3人のコンテンツチームは、10人以上のエディターを抱える企業よりも多くの動画を制作しています。Hyreelはチームを置き換えたのではなく、10倍パワフルにしました。", author: "ジェニファー K.", role: "コンテンツ責任者" },
      faqs: [
        { question: "実際にどのくらいスケールできる？", answer: "実質的な制限はありません。月に数百から数千本の動画を作成。唯一の制約はソースコンテンツとクリエイティブな方向性です。" },
        { question: "大量だと品質は落ちる？", answer: "いいえ。AIは1本作っても1000本作っても同じプロのエフェクトを適用します。品質はボリュームに関係なく一貫しています。" },
        { question: "これはチームにどう影響する？", answer: "チームは退屈な編集から戦略的な仕事に移行：コンテンツプランニング、クリエイティブディレクション、パフォーマンス最適化。" },
        { question: "エンタープライズのニーズは？", answer: "Businessプランにはチームコラボレーション、優先処理、大量生産向けの機能が含まれています。" }
      ],
      ctaText: "無料でスケーリング開始"
    },
    ko: {
      name: "비디오 제작 확장",
      heroHeadline: "비디오 제작을 10배 확장",
      heroSubheadline: "몇 개 비용으로 수백 개 비디오 제작. Hyreel AI로 대규모 비디오 제작이 마침내 저렴해졌습니다.",
      metaTitle: "채용 없이 비디오 제작 확장 | Hyreel AI",
      metaDescription: "팀을 10배 늘리지 않고 비디오 출력 10배. 에이전시, 팀, 대량 크리에이터를 위한 콘텐츠 제작을 확장하는 AI 비디오 생성기.",
      problem: {
        title: "비디오 확장은 비싸다",
        description: "비디오 수요가 증가하면 전통적인 해결책은 더 많은 편집자를 고용하는 것 — 하지만 이는 더 많은 급여, 더 많은 관리, 선형적인 비용 증가를 의미합니다.",
        points: ["더 많은 콘텐츠 수요 = 더 많은 채용", "비디오 팀 비용이 선형적으로 증가", "새 편집자 교육에 시간 소요", "팀원 간 품질 차이", "수요 급증 시 병목현상"]
      },
      solution: {
        title: "채용 없이 확장",
        description: "Hyreel로 팀을 10배 늘리지 않고 비디오 출력 10배. AI가 제작 작업을 처리하여 기존 팀이 전략과 창의성에 집중할 수 있습니다.",
        points: ["같은 팀, 10배 출력", "어떤 볼륨에서도 일관된 품질", "신입 교육 불필요", "수요 급증 즉시 처리", "콘텐츠에 비례해 비용 증가 안 함"]
      },
      benefits: [
        { title: "10배 출력", description: "인원 추가 없이 극적으로 더 많은 콘텐츠 제작." },
        { title: "선형 확장 돌파", description: "제작량이 증가해도 비용은 유지." },
        { title: "일관된 품질", description: "10개를 만들든 1000개를 만들든 같은 전문적 결과." },
        { title: "즉각적인 용량", description: "캠페인이나 수요 급증에 즉시 확장." }
      ],
      howItWorks: [
        { title: "콘텐츠 배치 업로드", description: "모든 소스 사진을 한 번에 업로드" },
        { title: "대규모로 효과 적용", description: "콘텐츠 배치에 효과 설정" },
        { title: "AI가 병렬로 생성", description: "여러 비디오가 동시에 생성" },
        { title: "내보내고 배포", description: "모든 비디오를 배포용으로 다운로드" }
      ],
      results: [{ label: "더 많은 출력" }, { label: "팀 크기" }, { label: "비용 구조" }, { label: "즉시 확장" }],
      testimonial: { quote: "우리 3인 콘텐츠 팀은 이제 10명 이상의 편집자가 있는 회사보다 더 많은 비디오를 제작합니다. Hyreel은 팀을 대체한 게 아니라 10배 강력하게 만들었습니다.", author: "제니퍼 K.", role: "콘텐츠 책임자" },
      faqs: [
        { question: "실제로 얼마나 확장할 수 있나요?", answer: "실질적인 제한이 없습니다. 월 수백에서 수천 개의 비디오 생성. 유일한 제약은 소스 콘텐츠와 크리에이티브 방향입니다." },
        { question: "대량일 때 품질이 떨어지나요?", answer: "아니요. AI는 1개를 만들든 1000개를 만들든 같은 전문 효과를 적용합니다. 품질은 볼륨과 관계없이 일관됩니다." },
        { question: "이것이 팀에 어떤 영향을 주나요?", answer: "팀이 지루한 편집에서 전략적 작업으로 이동: 콘텐츠 기획, 크리에이티브 디렉션, 퍼포먼스 최적화." },
        { question: "엔터프라이즈 니즈는요?", answer: "Business 플랜에는 팀 협업, 우선 처리, 대량 생산을 위한 기능이 포함됩니다." }
      ],
      ctaText: "무료로 확장 시작"
    },
    zh: {
      name: "扩大视频生产",
      heroHeadline: "将视频生产扩大10倍",
      heroSubheadline: "以几个视频的成本制作数百个视频。Hyreel AI让规模化视频制作终于变得实惠。",
      metaTitle: "无需招聘扩大视频生产 | Hyreel AI",
      metaDescription: "不增加10倍团队也能10倍视频产出。为机构、团队和大量创作者扩展内容生产的AI视频生成器。",
      problem: {
        title: "扩大视频生产很贵",
        description: "当视频需求增长时，传统解决方案是雇用更多编辑 — 但这意味着更多工资、更多管理和线性成本增长。",
        points: ["更多内容需求 = 更多招聘", "视频团队成本线性增长", "培训新编辑需要时间", "团队成员之间质量不一", "需求激增时出现瓶颈"]
      },
      solution: {
        title: "无需招聘即可扩展",
        description: "Hyreel让你不增加10倍团队也能10倍视频产出。AI处理制作工作，让现有团队专注于策略和创意。",
        points: ["同样的团队，10倍产出", "任何量级都保持一致质量", "无需培训新员工", "即时处理需求高峰", "成本不随内容线性增长"]
      },
      benefits: [
        { title: "10倍产出", description: "不增加人员就能大幅增加内容产出。" },
        { title: "打破线性扩展", description: "产量增长但成本保持稳定。" },
        { title: "一致的质量", description: "无论制作10个还是1000个视频都是同样专业的结果。" },
        { title: "即时容量", description: "为活动或需求高峰立即扩展。" }
      ],
      howItWorks: [
        { title: "批量上传内容", description: "一次上传所有源照片" },
        { title: "大规模应用效果", description: "为批量内容设置效果" },
        { title: "AI并行生成", description: "同时创建多个视频" },
        { title: "导出并部署", description: "下载所有视频用于分发" }
      ],
      results: [{ label: "更多产出" }, { label: "团队规模" }, { label: "成本结构" }, { label: "即时扩展" }],
      testimonial: { quote: "我们3人的内容团队现在比拥有10多名编辑的公司制作更多视频。Hyreel没有取代我们的团队 — 它让他们强大了10倍。", author: "詹妮弗 K.", role: "内容负责人" },
      faqs: [
        { question: "我真的能扩展多少？", answer: "没有实际限制。每月创建数百或数千个视频。唯一的限制是你的源内容和创意方向。" },
        { question: "大量时质量会下降吗？", answer: "不会。AI无论创建1个还是1000个视频都应用相同的专业效果。质量与量无关，始终一致。" },
        { question: "这如何影响我的团队？", answer: "你的团队从繁琐的编辑转向战略工作：内容规划、创意指导和绩效优化。" },
        { question: "企业需求怎么办？", answer: "Business计划包括团队协作、优先处理和为大量生产设计的功能。" }
      ],
      ctaText: "免费开始扩展"
    }
  },
};

export function getLocalizedSolutionContent(
  slug: string,
  locale: Locale
): SolutionTranslation | null {
  if (locale === "en") return null;
  const translations = solutionTranslations[slug];
  if (!translations) return null;
  return translations[locale as NonEnLocale] || null;
}
