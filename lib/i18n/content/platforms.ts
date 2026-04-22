import { type Locale } from "@/lib/i18n/config";
import { getPlatformBySlug } from "@/lib/platforms";
import {
  localizedName,
  localizedStats,
  pageSpecificCopy,
  type NonEnLocale,
} from "./localized-fallbacks";

interface FeatureTranslation {
  title: string;
  description: string;
}

interface ContentTypeTranslation {
  title: string;
  description: string;
}

interface FaqTranslation {
  question: string;
  answer: string;
}

interface StatTranslation {
  value: string;
  label: string;
}

interface PlatformTranslation {
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  features: FeatureTranslation[];
  bestPractices: string[];
  contentTypes: ContentTypeTranslation[];
  algorithmTips: string[];
  stats: StatTranslation[];
  faqs: FaqTranslation[];
  ctaText: string;
}

function createPlatformFallback(slug: string, locale: NonEnLocale): PlatformTranslation | null {
  const platform = getPlatformBySlug(slug);
  if (!platform) return null;
  const name = localizedName(slug, platform.name, locale);
  const specific = pageSpecificCopy(slug, platform.name, locale);

  return {
    name,
    metaTitle: specific.metaTitle,
    metaDescription: specific.metaDescription,
    heroHeadline: specific.heroHeadline,
    heroSubheadline: specific.heroSubheadline,
    description: specific.description,
    features: specific.features,
    bestPractices: specific.benefits,
    contentTypes: specific.features,
    algorithmTips: specific.benefits,
    stats: localizedStats(locale, platform.stats, "platform") as StatTranslation[],
    faqs: specific.faqs,
    ctaText: specific.cta,
  };
}

const platformTranslations: Record<string, Partial<Record<NonEnLocale, PlatformTranslation>>> = {
  "tiktok": {
    es: {
      name: "TikTok",
      metaTitle: "Generador de Videos IA para TikTok | Hyreel - Crea TikToks Virales",
      metaDescription: "Crea videos virales de TikTok a partir de fotos en segundos. Efectos IA optimizados para la pagina Para Ti. Formato 9:16 perfecto.",
      heroHeadline: "Crea TikToks Que Llegan a la Pagina Para Ti",
      heroSubheadline: "Creacion de video con IA optimizada para el algoritmo de TikTok. Convierte fotos en contenido que detiene el scroll.",
      description: "Hyreel crea videos optimizados para TikTok con efectos disenados para maximizar la ubicacion en FYP y el engagement.",
      features: [
        { title: "Formato 9:16 Perfecto", description: "Cada video esta optimizado para el formato vertical de TikTok con zonas seguras para texto y UI." },
        { title: "Diseno Hook-First", description: "Ganchos visuales fuertes en los primeros 0.5 segundos para detener el scroll y captar atencion." },
        { title: "Finales Loop-Friendly", description: "Finales suaves que fomentan las reproducciones, aumentando tus metricas de tiempo de visualizacion." },
        { title: "Efectos Optimizados FYP", description: "Patrones de movimiento disenados en torno a lo que el algoritmo de TikTok recompensa." }
      ],
      bestPractices: [
        "Publica 1-3 veces al dia para crecimiento constante",
        "Usa sonidos trending (anade en TikTok despues de exportar)",
        "Los primeros 0.5 segundos deben enganchar a los espectadores",
        "Fomenta comentarios con preguntas o CTAs",
        "Publica en horas pico: 7-9am, 12-3pm, 7-11pm",
        "Usa hashtags relevantes (3-5 por video)"
      ],
      contentTypes: [
        { title: "Showcases de Productos", description: "Revelaciones dinamicas de productos con efectos de zoom" },
        { title: "Antes/Despues", description: "Contenido de transformacion con movimiento dramatico" },
        { title: "Un Dia en Mi Vida", description: "Compilaciones de fotos con transiciones cinematicas" },
        { title: "Tips y Trucos", description: "Contenido educativo con visuales atractivos" },
        { title: "Participacion en Tendencias", description: "Contenido de tendencia con potencial viral" },
        { title: "Detras de Camaras", description: "Vistazos autenticos con movimiento dinamico" }
      ],
      algorithmTips: [
        "El tiempo de visualizacion es rey - manten a los espectadores hasta el final",
        "Las reproducciones cuentan doble - crea contenido digno de repetir",
        "Los comentarios impulsan el alcance mas que los likes",
        "Los compartidos a DMs senalan contenido de alta calidad",
        "Publica consistentemente - el algoritmo recompensa la regularidad",
        "Interactua con comentarios en la primera hora"
      ],
      stats: [
        { value: "1B+", label: "Usuarios Activos Mensuales" },
        { value: "52", label: "Minutos/Dia Promedio" },
        { value: "9:16", label: "Ratio Optimo" },
        { value: "15-60s", label: "Mejor Duracion" }
      ],
      faqs: [
        { question: "Los videos de Hyreel funcionan bien en TikTok?", answer: "Si! Los efectos de Hyreel estan disenados para maximizar el tiempo de visualizacion y engagement - las senales clave que TikTok usa para ubicacion en FYP." },
        { question: "Puedo anadir sonidos trending?", answer: "Exporta tu video de Hyreel y anade sonidos trending directamente en TikTok antes de publicar." },
        { question: "Cuantos TikToks debo publicar por dia?", answer: "1-3 TikToks diarios es optimo para crecimiento. Con Hyreel, puedes crear el contenido de un dia completo en menos de 5 minutos." },
        { question: "Estos videos funcionan para TikTok Shop?", answer: "Absolutamente! Los videos enfocados en productos son perfectos para listados de TikTok Shop." }
      ],
      ctaText: "Crear Videos TikTok Gratis"
    },
    de: {
      name: "TikTok",
      metaTitle: "KI-Videogenerator fur TikTok | Hyreel - Erstelle virale TikToks",
      metaDescription: "Erstelle virale TikTok-Videos aus Fotos in Sekunden. KI-Effekte optimiert fur die For You Page. Perfektes 9:16-Format.",
      heroHeadline: "Erstelle TikToks fur die For You Page",
      heroSubheadline: "KI-gestutzte Videoerstellung optimiert fur TikToks Algorithmus. Verwandle Fotos in scroll-stoppende Inhalte.",
      description: "Hyreel erstellt TikTok-optimierte Videos mit Effekten, die fur maximale FYP-Platzierung und Engagement entwickelt wurden.",
      features: [
        { title: "Perfektes 9:16-Format", description: "Jedes Video ist fur TikToks vertikales Format mit sicheren Zonen fur Text und UI optimiert." },
        { title: "Hook-First-Design", description: "Starke visuelle Hooks in den ersten 0,5 Sekunden, um das Scrollen zu stoppen." },
        { title: "Loop-freundliche Enden", description: "Sanfte Enden, die zu Wiederholungen ermutigen und deine Watch-Time-Metriken steigern." },
        { title: "FYP-optimierte Effekte", description: "Bewegungsmuster, die auf das ausgerichtet sind, was TikToks Algorithmus belohnt." }
      ],
      bestPractices: [
        "Poste 1-3 Mal taglich fur konstantes Wachstum",
        "Verwende Trending-Sounds (nach Export in TikTok hinzufugen)",
        "Die ersten 0,5 Sekunden mussen die Zuschauer fesseln",
        "Ermutige Kommentare mit Fragen oder CTAs",
        "Poste zu Spitzenzeiten: 7-9 Uhr, 12-15 Uhr, 19-23 Uhr",
        "Verwende relevante Hashtags (3-5 pro Video)"
      ],
      contentTypes: [
        { title: "Produkt-Showcases", description: "Dynamische Produktenthullungen mit Zoom-Effekten" },
        { title: "Vorher/Nachher", description: "Transformations-Content mit dramatischer Bewegung" },
        { title: "Ein Tag in meinem Leben", description: "Foto-Compilations mit cinematischen Ubergangen" },
        { title: "Tipps & Tricks", description: "Bildungsinhalte mit ansprechenden Visuals" },
        { title: "Trend-Teilnahme", description: "Trend-Content mit viralem Potenzial" },
        { title: "Hinter den Kulissen", description: "Authentische Einblicke mit dynamischer Bewegung" }
      ],
      algorithmTips: [
        "Watch-Time ist Konig - halte Zuschauer bis zum Ende",
        "Wiederholungen zahlen doppelt - erstelle loop-wurdigen Content",
        "Kommentare steigern Reichweite mehr als Likes",
        "Shares zu DMs signalisieren hochwertige Inhalte",
        "Poste konsistent - der Algorithmus belohnt Regelmasigkeit",
        "Interagiere mit Kommentaren in der ersten Stunde"
      ],
      stats: [
        { value: "1B+", label: "Monatlich aktive Nutzer" },
        { value: "52", label: "Minuten/Tag Durchschnitt" },
        { value: "9:16", label: "Optimales Verhaltnis" },
        { value: "15-60s", label: "Beste Dauer" }
      ],
      faqs: [
        { question: "Performen Hyreel-Videos gut auf TikTok?", answer: "Ja! Hyreels Effekte sind speziell entwickelt, um Watch-Time und Engagement zu maximieren." },
        { question: "Kann ich Trending-Sounds hinzufugen?", answer: "Exportiere dein Hyreel-Video und fuge Trending-Sounds direkt in TikTok vor dem Posten hinzu." },
        { question: "Wie viele TikToks sollte ich pro Tag posten?", answer: "1-3 TikToks taglich sind optimal fur Wachstum. Mit Hyreel erstellst du den Content eines ganzen Tages in unter 5 Minuten." },
        { question: "Funktionieren diese Videos fur TikTok Shop?", answer: "Absolut! Produktfokussierte Videos sind perfekt fur TikTok Shop." }
      ],
      ctaText: "TikTok-Videos kostenlos erstellen"
    },
    fr: {
      name: "TikTok",
      metaTitle: "Generateur Video IA pour TikTok | Hyreel - Creez des TikToks Viraux",
      metaDescription: "Creez des videos TikTok virales a partir de photos en secondes. Effets IA optimises pour la page Pour Toi. Format 9:16 parfait.",
      heroHeadline: "Creez des TikToks Pour Votre Page",
      heroSubheadline: "Creation video IA optimisee pour l'algorithme TikTok. Transformez les photos en contenu captivant.",
      description: "Hyreel cree des videos optimisees TikTok avec des effets concus pour maximiser le placement FYP et l'engagement.",
      features: [
        { title: "Format 9:16 Parfait", description: "Chaque video est optimisee pour le format vertical de TikTok avec des zones sures pour le texte et l'UI." },
        { title: "Design Hook-First", description: "Des hooks visuels forts dans les 0,5 premieres secondes pour arreter le scroll." },
        { title: "Fins Loop-Friendly", description: "Des fins fluides qui encouragent les revisionnages, boostant vos metriques de temps de visionnage." },
        { title: "Effets Optimises FYP", description: "Des patterns de mouvement concus autour de ce que l'algorithme TikTok recompense." }
      ],
      bestPractices: [
        "Publiez 1-3 fois par jour pour une croissance constante",
        "Utilisez des sons tendance (ajoutez dans TikTok apres export)",
        "Les 0,5 premieres secondes doivent accrocher les spectateurs",
        "Encouragez les commentaires avec des questions ou CTAs",
        "Publiez aux heures de pointe: 7-9h, 12-15h, 19-23h",
        "Utilisez des hashtags pertinents (3-5 par video)"
      ],
      contentTypes: [
        { title: "Showcases Produits", description: "Revelations de produits dynamiques avec effets de zoom" },
        { title: "Avant/Apres", description: "Contenu de transformation avec mouvement dramatique" },
        { title: "Une Journee Dans Ma Vie", description: "Compilations de photos avec transitions cinematiques" },
        { title: "Astuces", description: "Contenu educatif avec visuels engageants" },
        { title: "Participation aux Tendances", description: "Contenu tendance avec potentiel viral" },
        { title: "Coulisses", description: "Apercus authentiques avec mouvement dynamique" }
      ],
      algorithmTips: [
        "Le temps de visionnage est roi - gardez les spectateurs jusqu'a la fin",
        "Les revisionnages comptent double - creez du contenu digne d'etre revu",
        "Les commentaires boostent la portee plus que les likes",
        "Les partages en DM signalent un contenu de qualite",
        "Publiez regulierement - l'algorithme recompense la regularite",
        "Engagez avec les commentaires dans la premiere heure"
      ],
      stats: [
        { value: "1B+", label: "Utilisateurs Actifs Mensuels" },
        { value: "52", label: "Minutes/Jour en Moyenne" },
        { value: "9:16", label: "Ratio Optimal" },
        { value: "15-60s", label: "Meilleure Duree" }
      ],
      faqs: [
        { question: "Les videos Hyreel performent-elles bien sur TikTok?", answer: "Oui! Les effets Hyreel sont concus pour maximiser le temps de visionnage et l'engagement." },
        { question: "Puis-je ajouter des sons tendance?", answer: "Exportez votre video Hyreel et ajoutez des sons tendance directement dans TikTok avant de publier." },
        { question: "Combien de TikToks dois-je publier par jour?", answer: "1-3 TikToks par jour est optimal pour la croissance. Avec Hyreel, vous creez le contenu d'une journee en moins de 5 minutes." },
        { question: "Ces videos fonctionnent pour TikTok Shop?", answer: "Absolument! Les videos axees produits sont parfaites pour TikTok Shop." }
      ],
      ctaText: "Creer des Videos TikTok Gratuitement"
    },
    pt: {
      name: "TikTok",
      metaTitle: "Gerador de Video IA para TikTok | Hyreel - Crie TikToks Virais",
      metaDescription: "Crie videos virais do TikTok a partir de fotos em segundos. Efeitos IA otimizados para a pagina Para Voce. Formato 9:16 perfeito.",
      heroHeadline: "Crie TikToks Para a Pagina Para Voce",
      heroSubheadline: "Criacao de video com IA otimizada para o algoritmo do TikTok. Transforme fotos em conteudo que para o scroll.",
      description: "Hyreel cria videos otimizados para TikTok com efeitos projetados para maximizar posicionamento FYP e engajamento.",
      features: [
        { title: "Formato 9:16 Perfeito", description: "Cada video e otimizado para o formato vertical do TikTok com zonas seguras para texto e UI." },
        { title: "Design Hook-First", description: "Ganchos visuais fortes nos primeiros 0,5 segundos para parar o scroll e capturar atencao." },
        { title: "Finais Loop-Friendly", description: "Finais suaves que encorajam rewatches, aumentando suas metricas de tempo de visualizacao." },
        { title: "Efeitos Otimizados FYP", description: "Padroes de movimento projetados em torno do que o algoritmo TikTok recompensa." }
      ],
      bestPractices: [
        "Poste 1-3 vezes ao dia para crescimento consistente",
        "Use sons em alta (adicione no TikTok apos exportar)",
        "Os primeiros 0,5 segundos devem prender os espectadores",
        "Encoraje comentarios com perguntas ou CTAs",
        "Poste em horarios de pico: 7-9h, 12-15h, 19-23h",
        "Use hashtags relevantes (3-5 por video)"
      ],
      contentTypes: [
        { title: "Showcases de Produtos", description: "Revelacoes dinamicas de produtos com efeitos de zoom" },
        { title: "Antes/Depois", description: "Conteudo de transformacao com movimento dramatico" },
        { title: "Um Dia na Minha Vida", description: "Compilacoes de fotos com transicoes cinematicas" },
        { title: "Dicas e Truques", description: "Conteudo educacional com visuais envolventes" },
        { title: "Participacao em Tendencias", description: "Conteudo de tendencia com potencial viral" },
        { title: "Bastidores", description: "Vislumbres autenticos com movimento dinamico" }
      ],
      algorithmTips: [
        "Tempo de visualizacao e rei - mantenha os espectadores ate o fim",
        "Rewatches contam em dobro - crie conteudo digno de loop",
        "Comentarios impulsionam alcance mais que likes",
        "Compartilhamentos para DMs sinalizam conteudo de alta qualidade",
        "Poste consistentemente - o algoritmo recompensa regularidade",
        "Engaje com comentarios na primeira hora"
      ],
      stats: [
        { value: "1B+", label: "Usuarios Ativos Mensais" },
        { value: "52", label: "Minutos/Dia em Media" },
        { value: "9:16", label: "Proporcao Otima" },
        { value: "15-60s", label: "Melhor Duracao" }
      ],
      faqs: [
        { question: "Os videos Hyreel performam bem no TikTok?", answer: "Sim! Os efeitos do Hyreel sao projetados para maximizar tempo de visualizacao e engajamento." },
        { question: "Posso adicionar sons em alta?", answer: "Exporte seu video Hyreel e adicione sons em alta diretamente no TikTok antes de postar." },
        { question: "Quantos TikToks devo postar por dia?", answer: "1-3 TikToks diarios e otimo para crescimento. Com Hyreel, voce cria o conteudo de um dia inteiro em menos de 5 minutos." },
        { question: "Esses videos funcionam para TikTok Shop?", answer: "Absolutamente! Videos focados em produtos sao perfeitos para TikTok Shop." }
      ],
      ctaText: "Criar Videos TikTok Gratis"
    },
    ru: {
      name: "TikTok",
      metaTitle: "ИИ-генератор видео для TikTok | Hyreel - Создавайте вирусные TikTok",
      metaDescription: "Создавайте вирусные видео TikTok из фото за секунды. ИИ-эффекты оптимизированы для страницы рекомендаций. Идеальный формат 9:16.",
      heroHeadline: "Создавайте TikTok для Страницы Рекомендаций",
      heroSubheadline: "Создание видео на базе ИИ, оптимизированное для алгоритма TikTok. Превращайте фото в захватывающий контент.",
      description: "Hyreel создает оптимизированные для TikTok видео с эффектами, разработанными для максимального размещения в рекомендациях.",
      features: [
        { title: "Идеальный формат 9:16", description: "Каждое видео оптимизировано для вертикального формата TikTok с безопасными зонами для текста и UI." },
        { title: "Дизайн с хуком", description: "Сильные визуальные хуки в первые 0,5 секунды, чтобы остановить скролл и захватить внимание." },
        { title: "Зацикленные концовки", description: "Плавные концовки, которые поощряют повторные просмотры, увеличивая ваши метрики времени просмотра." },
        { title: "Эффекты для рекомендаций", description: "Паттерны движения, разработанные вокруг того, что алгоритм TikTok вознаграждает." }
      ],
      bestPractices: [
        "Публикуйте 1-3 раза в день для стабильного роста",
        "Используйте трендовые звуки (добавьте в TikTok после экспорта)",
        "Первые 0,5 секунды должны зацепить зрителей",
        "Поощряйте комментарии вопросами или CTA",
        "Публикуйте в пиковые часы: 7-9, 12-15, 19-23",
        "Используйте релевантные хештеги (3-5 на видео)"
      ],
      contentTypes: [
        { title: "Демонстрация продуктов", description: "Динамичные показы продуктов с эффектами зума" },
        { title: "До/После", description: "Контент трансформации с драматичным движением" },
        { title: "День из моей жизни", description: "Компиляции фото с кинематографичными переходами" },
        { title: "Советы и лайфхаки", description: "Образовательный контент с привлекательными визуалами" },
        { title: "Участие в трендах", description: "Трендовый контент с вирусным потенциалом" },
        { title: "За кулисами", description: "Аутентичные моменты с динамичным движением" }
      ],
      algorithmTips: [
        "Время просмотра - король: удерживайте зрителей до конца",
        "Повторные просмотры считаются вдвойне - создавайте контент для повтора",
        "Комментарии увеличивают охват больше, чем лайки",
        "Репосты в ЛС сигнализируют о качественном контенте",
        "Публикуйте регулярно - алгоритм вознаграждает постоянство",
        "Взаимодействуйте с комментариями в первый час"
      ],
      stats: [
        { value: "1B+", label: "Активных пользователей в месяц" },
        { value: "52", label: "Минут в день в среднем" },
        { value: "9:16", label: "Оптимальное соотношение" },
        { value: "15-60с", label: "Лучшая длительность" }
      ],
      faqs: [
        { question: "Хорошо ли работают видео Hyreel на TikTok?", answer: "Да! Эффекты Hyreel специально разработаны для максимизации времени просмотра и вовлеченности." },
        { question: "Могу ли я добавить трендовые звуки?", answer: "Экспортируйте видео Hyreel и добавьте трендовые звуки прямо в TikTok перед публикацией." },
        { question: "Сколько TikTok нужно публиковать в день?", answer: "1-3 TikTok в день оптимально для роста. С Hyreel вы создаете контент на весь день менее чем за 5 минут." },
        { question: "Подходят ли эти видео для TikTok Shop?", answer: "Абсолютно! Видео, ориентированные на продукты, идеально подходят для TikTok Shop." }
      ],
      ctaText: "Создать видео TikTok бесплатно"
    },
    it: {
      name: "TikTok",
      metaTitle: "Generatore Video IA per TikTok | Hyreel - Crea TikTok Virali",
      metaDescription: "Crea video TikTok virali dalle foto in secondi. Effetti IA ottimizzati per la pagina Per Te. Formato 9:16 perfetto.",
      heroHeadline: "Crea TikTok per la Pagina Per Te",
      heroSubheadline: "Creazione video IA ottimizzata per l'algoritmo TikTok. Trasforma le foto in contenuti coinvolgenti.",
      description: "Hyreel crea video ottimizzati per TikTok con effetti progettati per massimizzare il posizionamento FYP e l'engagement.",
      features: [
        { title: "Formato 9:16 Perfetto", description: "Ogni video e ottimizzato per il formato verticale di TikTok con zone sicure per testo e UI." },
        { title: "Design Hook-First", description: "Hook visivi forti nei primi 0,5 secondi per fermare lo scroll e catturare l'attenzione." },
        { title: "Finali Loop-Friendly", description: "Finali fluidi che incoraggiano i rewatch, aumentando le metriche di tempo di visualizzazione." },
        { title: "Effetti Ottimizzati FYP", description: "Pattern di movimento progettati intorno a cio che l'algoritmo TikTok premia." }
      ],
      bestPractices: [
        "Pubblica 1-3 volte al giorno per una crescita costante",
        "Usa suoni trending (aggiungi in TikTok dopo l'esportazione)",
        "I primi 0,5 secondi devono agganciare gli spettatori",
        "Incoraggia i commenti con domande o CTA",
        "Pubblica nelle ore di punta: 7-9, 12-15, 19-23",
        "Usa hashtag pertinenti (3-5 per video)"
      ],
      contentTypes: [
        { title: "Showcase di Prodotti", description: "Rivelazioni dinamiche di prodotti con effetti zoom" },
        { title: "Prima/Dopo", description: "Contenuti di trasformazione con movimento drammatico" },
        { title: "Un Giorno Nella Mia Vita", description: "Compilazioni di foto con transizioni cinematiche" },
        { title: "Tips e Tricks", description: "Contenuti educativi con visual coinvolgenti" },
        { title: "Partecipazione ai Trend", description: "Contenuti trend con potenziale virale" },
        { title: "Dietro le Quinte", description: "Scorci autentici con movimento dinamico" }
      ],
      algorithmTips: [
        "Il tempo di visualizzazione e re - mantieni gli spettatori fino alla fine",
        "I rewatch contano doppio - crea contenuti degni di essere rivisti",
        "I commenti aumentano la portata piu dei like",
        "Le condivisioni in DM segnalano contenuti di qualita",
        "Pubblica con costanza - l'algoritmo premia la regolarita",
        "Interagisci con i commenti nella prima ora"
      ],
      stats: [
        { value: "1B+", label: "Utenti Attivi Mensili" },
        { value: "52", label: "Minuti/Giorno in Media" },
        { value: "9:16", label: "Rapporto Ottimale" },
        { value: "15-60s", label: "Durata Migliore" }
      ],
      faqs: [
        { question: "I video Hyreel performano bene su TikTok?", answer: "Si! Gli effetti Hyreel sono progettati per massimizzare tempo di visualizzazione ed engagement." },
        { question: "Posso aggiungere suoni trending?", answer: "Esporta il tuo video Hyreel e aggiungi suoni trending direttamente in TikTok prima di pubblicare." },
        { question: "Quanti TikTok devo pubblicare al giorno?", answer: "1-3 TikTok al giorno e ottimale per la crescita. Con Hyreel, crei il contenuto di un giorno in meno di 5 minuti." },
        { question: "Questi video funzionano per TikTok Shop?", answer: "Assolutamente! I video focalizzati sui prodotti sono perfetti per TikTok Shop." }
      ],
      ctaText: "Crea Video TikTok Gratis"
    },
    nl: {
      name: "TikTok",
      metaTitle: "AI-Videogenerator voor TikTok | Hyreel - Maak Virale TikToks",
      metaDescription: "Maak virale TikTok-video's van foto's in seconden. AI-effecten geoptimaliseerd voor de Voor Jou-pagina. Perfect 9:16-formaat.",
      heroHeadline: "Maak TikToks voor de Voor Jou Pagina",
      heroSubheadline: "AI-gestuurde videocreatie geoptimaliseerd voor TikToks algoritme. Verander foto's in scroll-stoppende content.",
      description: "Hyreel maakt TikTok-geoptimaliseerde video's met effecten ontworpen voor maximale FYP-plaatsing en engagement.",
      features: [
        { title: "Perfect 9:16-formaat", description: "Elke video is geoptimaliseerd voor TikToks verticale formaat met veilige zones voor tekst en UI." },
        { title: "Hook-First Design", description: "Sterke visuele hooks in de eerste 0,5 seconden om het scrollen te stoppen en aandacht te vangen." },
        { title: "Loop-vriendelijke Eindes", description: "Vloeiende eindes die herhalingen aanmoedigen, waardoor je kijktijdstatistieken stijgen." },
        { title: "FYP-geoptimaliseerde Effecten", description: "Bewegingspatronen ontworpen rond wat TikToks algoritme beloont." }
      ],
      bestPractices: [
        "Post 1-3 keer per dag voor consistente groei",
        "Gebruik trending geluiden (voeg toe in TikTok na export)",
        "De eerste 0,5 seconden moeten kijkers boeien",
        "Moedig reacties aan met vragen of CTA's",
        "Post tijdens piekuren: 7-9u, 12-15u, 19-23u",
        "Gebruik relevante hashtags (3-5 per video)"
      ],
      contentTypes: [
        { title: "Product Showcases", description: "Dynamische productonthullingen met zoom-effecten" },
        { title: "Voor/Na", description: "Transformatiecontent met dramatische beweging" },
        { title: "Een Dag in Mijn Leven", description: "Fotocompilaties met cinematische overgangen" },
        { title: "Tips & Tricks", description: "Educatieve content met boeiende visuals" },
        { title: "Trend Deelname", description: "Trending content met viraal potentieel" },
        { title: "Achter de Schermen", description: "Authentieke glimpen met dynamische beweging" }
      ],
      algorithmTips: [
        "Kijktijd is koning - houd kijkers tot het einde",
        "Herhalingen tellen dubbel - maak loop-waardige content",
        "Reacties boosten bereik meer dan likes",
        "Shares naar DM's signaleren hoogwaardige content",
        "Post consistent - het algoritme beloont regelmaat",
        "Reageer op reacties in het eerste uur"
      ],
      stats: [
        { value: "1B+", label: "Maandelijks Actieve Gebruikers" },
        { value: "52", label: "Minuten/Dag Gemiddeld" },
        { value: "9:16", label: "Optimale Verhouding" },
        { value: "15-60s", label: "Beste Duur" }
      ],
      faqs: [
        { question: "Presteren Hyreel-video's goed op TikTok?", answer: "Ja! Hyreels effecten zijn specifiek ontworpen om kijktijd en engagement te maximaliseren." },
        { question: "Kan ik trending geluiden toevoegen?", answer: "Exporteer je Hyreel-video en voeg trending geluiden direct toe in TikTok voor het posten." },
        { question: "Hoeveel TikToks moet ik per dag posten?", answer: "1-3 TikToks per dag is optimaal voor groei. Met Hyreel maak je de content van een hele dag in minder dan 5 minuten." },
        { question: "Werken deze video's voor TikTok Shop?", answer: "Absoluut! Productgerichte video's zijn perfect voor TikTok Shop." }
      ],
      ctaText: "Maak Gratis TikTok-Video's"
    },
    pl: {
      name: "TikTok",
      metaTitle: "Generator Wideo AI dla TikTok | Hyreel - Twórz Wirusowe TikToki",
      metaDescription: "Twórz wirusowe filmy TikTok ze zdjec w sekundy. Efekty AI zoptymalizowane pod strone Dla Ciebie. Idealny format 9:16.",
      heroHeadline: "Twórz TikToki na Strone Dla Ciebie",
      heroSubheadline: "Tworzenie wideo AI zoptymalizowane pod algorytm TikToka. Zamieniaj zdjecia w angazujace tresci.",
      description: "Hyreel tworzy filmy zoptymalizowane pod TikToka z efektami zaprojektowanymi dla maksymalnego umiejscowienia na FYP.",
      features: [
        { title: "Idealny Format 9:16", description: "Kazdy film jest zoptymalizowany pod pionowy format TikToka z bezpiecznymi strefami na tekst i UI." },
        { title: "Design Hook-First", description: "Silne wizualne haki w pierwszych 0,5 sekundy, zeby zatrzymac scrollowanie i przyciagnac uwage." },
        { title: "Koncówki Loop-Friendly", description: "Plynne zakonczenia zachecajace do ponownych odslon, zwiekszajace metryki czasu ogladania." },
        { title: "Efekty Zoptymalizowane FYP", description: "Wzorce ruchu zaprojektowane wokól tego, co algorytm TikToka nagradza." }
      ],
      bestPractices: [
        "Publikuj 1-3 razy dziennie dla stalego wzrostu",
        "Uzywaj trendowych dzwieków (dodaj w TikToku po eksporcie)",
        "Pierwsze 0,5 sekundy musi zaczepic widzów",
        "Zachecaj do komentarzy pytaniami lub CTA",
        "Publikuj w godzinach szczytu: 7-9, 12-15, 19-23",
        "Uzywaj odpowiednich hashtagów (3-5 na film)"
      ],
      contentTypes: [
        { title: "Prezentacje Produktów", description: "Dynamiczne odkrycia produktów z efektami zoom" },
        { title: "Przed/Po", description: "Tresci transformacji z dramatycznym ruchem" },
        { title: "Dzien z Mojego Zycia", description: "Kompilacje zdjec z kinowymi przejsciami" },
        { title: "Porady i Triki", description: "Tresci edukacyjne z angazujacymi wizualizacjami" },
        { title: "Udzial w Trendach", description: "Trendowe tresci z wirusowym potencjalem" },
        { title: "Za Kulisami", description: "Autentyczne spojrzenia z dynamicznym ruchem" }
      ],
      algorithmTips: [
        "Czas ogladania jest królem - utrzymuj widzów do konca",
        "Ponowne odslony licza sie podwójnie - twórz tresci warte powtórzenia",
        "Komentarze zwiekszaja zasieg bardziej niz polubienia",
        "Udostepnienia do DM sygnalizuja wysokiej jakosci tresci",
        "Publikuj konsekwentnie - algorytm nagradza regularnosc",
        "Angazuj sie w komentarze w pierwszej godzinie"
      ],
      stats: [
        { value: "1B+", label: "Miesiecznie Aktywnych Uzytkowników" },
        { value: "52", label: "Minut/Dzien Srednio" },
        { value: "9:16", label: "Optymalny Stosunek" },
        { value: "15-60s", label: "Najlepszy Czas Trwania" }
      ],
      faqs: [
        { question: "Czy filmy Hyreel dobrze sie sprawdzaja na TikToku?", answer: "Tak! Efekty Hyreel sa specjalnie zaprojektowane, aby maksymalizowac czas ogladania i zaangazowanie." },
        { question: "Czy moge dodac trendowe dzwieki?", answer: "Wyeksportuj film Hyreel i dodaj trendowe dzwieki bezposrednio w TikToku przed opublikowaniem." },
        { question: "Ile TikToków powinienem publikowac dziennie?", answer: "1-3 TikToki dziennie jest optymalne dla wzrostu. Z Hyreel tworzysz tresci na caly dzien w mniej niz 5 minut." },
        { question: "Czy te filmy dzialaja dla TikTok Shop?", answer: "Absolutnie! Filmy skupione na produktach sa idealne dla TikTok Shop." }
      ],
      ctaText: "Twórz Filmy TikTok za Darmo"
    },
    ja: {
      name: "TikTok",
      metaTitle: "TikTok用AIビデオジェネレーター | Hyreel - バイラルTikTokを作成",
      metaDescription: "写真から数秒でバイラルTikTok動画を作成。おすすめページに最適化されたAIエフェクト。完璧な9:16フォーマット。",
      heroHeadline: "おすすめページに載るTikTokを作成",
      heroSubheadline: "TikTokアルゴリズムに最適化されたAI動画作成。写真をスクロールを止めるコンテンツに変換。",
      description: "HyreelはFYP配置とエンゲージメントを最大化するために設計されたエフェクトでTikTok最適化動画を作成します。",
      features: [
        { title: "完璧な9:16フォーマット", description: "すべての動画がテキストとUI用のセーフゾーンを備えたTikTokの縦型フォーマットに最適化。" },
        { title: "フックファーストデザイン", description: "最初の0.5秒で強力なビジュアルフックを使用してスクロールを止め、注目を集める。" },
        { title: "ループフレンドリーなエンディング", description: "再視聴を促すスムーズなエンディングで視聴時間メトリクスを向上。" },
        { title: "FYP最適化エフェクト", description: "TikTokアルゴリズムが報いるものに基づいて設計されたモーションパターン。" }
      ],
      bestPractices: [
        "安定した成長のために1日1-3回投稿",
        "トレンドサウンドを使用（エクスポート後にTikTokで追加）",
        "最初の0.5秒で視聴者をフックする必要がある",
        "質問やCTAでコメントを促進",
        "ピーク時間に投稿: 7-9時、12-15時、19-23時",
        "関連するハッシュタグを使用（動画あたり3-5個）"
      ],
      contentTypes: [
        { title: "製品ショーケース", description: "ズームエフェクトを使用したダイナミックな製品披露" },
        { title: "ビフォー/アフター", description: "ドラマチックな動きを伴う変身コンテンツ" },
        { title: "私の一日", description: "シネマティックなトランジションを使用した写真コンピレーション" },
        { title: "ヒントとコツ", description: "魅力的なビジュアルを使用した教育コンテンツ" },
        { title: "トレンド参加", description: "バイラルの可能性を持つトレンドコンテンツ" },
        { title: "舞台裏", description: "ダイナミックな動きを伴う本物の瞬間" }
      ],
      algorithmTips: [
        "視聴時間が王様 - 視聴者を最後まで維持",
        "再視聴は2倍カウント - ループに値するコンテンツを作成",
        "コメントはいいねよりもリーチを向上",
        "DMへのシェアは高品質コンテンツを示す",
        "一貫して投稿 - アルゴリズムは規則性を報いる",
        "最初の1時間でコメントに対応"
      ],
      stats: [
        { value: "10億+", label: "月間アクティブユーザー" },
        { value: "52", label: "1日平均分数" },
        { value: "9:16", label: "最適な比率" },
        { value: "15-60秒", label: "最適な長さ" }
      ],
      faqs: [
        { question: "HyreelビデオはTikTokでうまく機能しますか？", answer: "はい！Hyreelのエフェクトは視聴時間とエンゲージメントを最大化するために特別に設計されています。" },
        { question: "トレンドサウンドを追加できますか？", answer: "Hyreelビデオをエクスポートし、投稿前にTikTokで直接トレンドサウンドを追加してください。" },
        { question: "1日に何本のTikTokを投稿すべきですか？", answer: "成長には1日1-3本のTikTokが最適です。Hyreelなら5分以内で1日分のコンテンツを作成できます。" },
        { question: "これらの動画はTikTok Shopで機能しますか？", answer: "もちろん！製品に焦点を当てた動画はTikTok Shopに最適です。" }
      ],
      ctaText: "TikTok動画を無料で作成"
    },
    ko: {
      name: "TikTok",
      metaTitle: "TikTok용 AI 비디오 생성기 | Hyreel - 바이럴 TikTok 제작",
      metaDescription: "사진에서 몇 초 만에 바이럴 TikTok 비디오를 제작하세요. 추천 페이지에 최적화된 AI 효과. 완벽한 9:16 포맷.",
      heroHeadline: "추천 페이지에 오르는 TikTok 제작",
      heroSubheadline: "TikTok 알고리즘에 최적화된 AI 비디오 제작. 사진을 스크롤을 멈추는 콘텐츠로 변환.",
      description: "Hyreel은 FYP 배치와 참여를 최대화하도록 설계된 효과로 TikTok 최적화 비디오를 제작합니다.",
      features: [
        { title: "완벽한 9:16 포맷", description: "모든 비디오가 텍스트와 UI를 위한 세이프 존이 있는 TikTok의 세로 포맷에 최적화." },
        { title: "훅 퍼스트 디자인", description: "처음 0.5초에 강력한 비주얼 훅으로 스크롤을 멈추고 주목을 끕니다." },
        { title: "루프 친화적 엔딩", description: "재시청을 유도하는 부드러운 엔딩으로 시청 시간 지표 향상." },
        { title: "FYP 최적화 효과", description: "TikTok 알고리즘이 보상하는 것에 맞춰 설계된 모션 패턴." }
      ],
      bestPractices: [
        "꾸준한 성장을 위해 하루 1-3회 게시",
        "트렌딩 사운드 사용 (내보내기 후 TikTok에서 추가)",
        "처음 0.5초는 시청자를 사로잡아야 함",
        "질문이나 CTA로 댓글 유도",
        "피크 시간에 게시: 오전 7-9시, 오후 12-3시, 오후 7-11시",
        "관련 해시태그 사용 (비디오당 3-5개)"
      ],
      contentTypes: [
        { title: "제품 쇼케이스", description: "줌 효과를 사용한 다이나믹한 제품 공개" },
        { title: "비포/애프터", description: "드라마틱한 움직임이 있는 변신 콘텐츠" },
        { title: "내 하루", description: "시네마틱 전환이 있는 사진 컴필레이션" },
        { title: "팁과 트릭", description: "매력적인 비주얼이 있는 교육 콘텐츠" },
        { title: "트렌드 참여", description: "바이럴 잠재력이 있는 트렌드 콘텐츠" },
        { title: "비하인드", description: "다이나믹한 움직임이 있는 진정성 있는 순간" }
      ],
      algorithmTips: [
        "시청 시간이 왕 - 시청자를 끝까지 유지",
        "재시청은 두 배로 카운트 - 루프할 가치 있는 콘텐츠 제작",
        "댓글이 좋아요보다 도달률 향상",
        "DM 공유는 고품질 콘텐츠 신호",
        "일관되게 게시 - 알고리즘은 규칙성을 보상",
        "첫 시간 내 댓글에 반응"
      ],
      stats: [
        { value: "10억+", label: "월간 활성 사용자" },
        { value: "52", label: "일 평균 분" },
        { value: "9:16", label: "최적 비율" },
        { value: "15-60초", label: "최적 길이" }
      ],
      faqs: [
        { question: "Hyreel 비디오가 TikTok에서 잘 작동하나요?", answer: "네! Hyreel의 효과는 시청 시간과 참여를 최대화하도록 특별히 설계되었습니다." },
        { question: "트렌딩 사운드를 추가할 수 있나요?", answer: "Hyreel 비디오를 내보내고 게시 전에 TikTok에서 직접 트렌딩 사운드를 추가하세요." },
        { question: "하루에 몇 개의 TikTok을 게시해야 하나요?", answer: "성장을 위해 하루 1-3개의 TikTok이 최적입니다. Hyreel로 5분 이내에 하루치 콘텐츠를 제작할 수 있습니다." },
        { question: "이 비디오가 TikTok Shop에서 작동하나요?", answer: "물론이죠! 제품에 초점을 맞춘 비디오는 TikTok Shop에 완벽합니다." }
      ],
      ctaText: "무료로 TikTok 비디오 제작"
    },
    zh: {
      name: "TikTok",
      metaTitle: "TikTok AI视频生成器 | Hyreel - 创建病毒式TikTok",
      metaDescription: "几秒钟内从照片创建病毒式TikTok视频。针对推荐页优化的AI效果。完美的9:16格式。",
      heroHeadline: "创建上推荐页的TikTok",
      heroSubheadline: "针对TikTok算法优化的AI视频创作。将照片转换为吸引眼球的内容。",
      description: "Hyreel创建针对TikTok优化的视频，具有旨在最大化FYP展示和参与度的效果。",
      features: [
        { title: "完美9:16格式", description: "每个视频都针对TikTok的垂直格式进行优化，具有文本和UI的安全区域。" },
        { title: "钩子优先设计", description: "在最初0.5秒内使用强大的视觉钩子来停止滚动并吸引注意力。" },
        { title: "循环友好结尾", description: "平滑的结尾鼓励重复观看，提高您的观看时间指标。" },
        { title: "FYP优化效果", description: "围绕TikTok算法奖励的内容设计的运动模式。" }
      ],
      bestPractices: [
        "每天发布1-3次以实现稳定增长",
        "使用热门音效（导出后在TikTok中添加）",
        "前0.5秒必须吸引观众",
        "用问题或CTA鼓励评论",
        "在高峰时段发布：7-9点、12-15点、19-23点",
        "使用相关标签（每个视频3-5个）"
      ],
      contentTypes: [
        { title: "产品展示", description: "带有缩放效果的动态产品展示" },
        { title: "前后对比", description: "带有戏剧性动作的转型内容" },
        { title: "我的一天", description: "带有电影级转场的照片汇编" },
        { title: "技巧分享", description: "带有吸引人视觉效果的教育内容" },
        { title: "趋势参与", description: "具有病毒潜力的趋势内容" },
        { title: "幕后花絮", description: "带有动态动作的真实瞬间" }
      ],
      algorithmTips: [
        "观看时间为王 - 让观众看到最后",
        "重复观看双倍计算 - 创建值得循环的内容",
        "评论比点赞更能提升覆盖率",
        "分享到私信表示高质量内容",
        "持续发布 - 算法奖励规律性",
        "在第一小时内回复评论"
      ],
      stats: [
        { value: "10亿+", label: "月活跃用户" },
        { value: "52", label: "日均分钟数" },
        { value: "9:16", label: "最佳比例" },
        { value: "15-60秒", label: "最佳时长" }
      ],
      faqs: [
        { question: "Hyreel视频在TikTok上表现好吗？", answer: "是的！Hyreel的效果专门设计用于最大化观看时间和参与度。" },
        { question: "我可以添加热门音效吗？", answer: "导出Hyreel视频后，在发布前直接在TikTok中添加热门音效。" },
        { question: "我每天应该发布多少TikTok？", answer: "每天1-3个TikTok最适合增长。使用Hyreel，您可以在5分钟内创建一整天的内容。" },
        { question: "这些视频适用于TikTok Shop吗？", answer: "当然！以产品为重点的视频非常适合TikTok Shop。" }
      ],
      ctaText: "免费创建TikTok视频"
    }
  },
  "instagram": {
    es: {
      name: "Instagram Reels",
      metaTitle: "Generador de Videos IA para Instagram Reels | Hyreel",
      metaDescription: "Crea Instagram Reels profesionales a partir de fotos. Efectos IA para maximo engagement, guardados y compartidos. Perfecto para marcas y creadores.",
      heroHeadline: "Crea Reels Que Se Guardan y Comparten",
      heroSubheadline: "Instagram Reels profesionales con efectos de movimiento cinematico. Construye tu marca, crece tu audiencia, impulsa el engagement.",
      description: "Hyreel crea Reels optimizados para Instagram disenados para maximo de guardados, compartidos y crecimiento de seguidores.",
      features: [
        { title: "Estetica Premium", description: "Efectos de movimiento elevados que coinciden con las expectativas pulidas y curadas de Instagram." },
        { title: "Consistencia de Marca", description: "Mantén tu identidad visual en todo tu contenido de Reels." },
        { title: "Contenido Digno de Guardar", description: "Efectos disenados para crear contenido que vale la pena guardar - la senal de engagement principal de Instagram." },
        { title: "Listo para Shopping", description: "Perfecto para etiquetas de productos e integracion con Instagram Shopping." }
      ],
      bestPractices: [
        "Publica 3-5 Reels por semana para alcance optimo",
        "Enfocate en guardados y compartidos sobre likes",
        "Usa portadas que se vean bien en tu grid",
        "Anade subtitulos para accesibilidad",
        "Publica entre 11am-1pm y 7-9pm",
        "Interactua con comentarios en la primera hora"
      ],
      contentTypes: [
        { title: "Revelaciones de Productos", description: "Showcases elegantes con efectos de zoom lento" },
        { title: "Detras de Camaras", description: "Momentos autenticos de marca con movimiento dinamico" },
        { title: "Tutoriales", description: "Contenido paso a paso con visuales claros" },
        { title: "Contenido de Estilo de Vida", description: "Imagenes aspiracionales con movimiento cinematico" },
        { title: "Estilo Generado por Usuarios", description: "Contenido de sensacion autentica que resuena" },
        { title: "Campanas de Temporada", description: "Contenido oportuno con pulido profesional" }
      ],
      algorithmTips: [
        "Los guardados y compartidos importan mas que los likes",
        "El tiempo de visualizacion determina el alcance",
        "Comparte en Stories para visibilidad bonus",
        "La publicacion consistente supera los intentos virales",
        "Los hashtags aun funcionan - usa 5-10 relevantes",
        "Las colaboraciones aumentan el alcance significativamente"
      ],
      stats: [
        { value: "2B+", label: "Usuarios Activos Mensuales" },
        { value: "30%", label: "Tiempo en Reels" },
        { value: "9:16", label: "Ratio Optimo" },
        { value: "15-30s", label: "Mejor Duracion" }
      ],
      faqs: [
        { question: "Como se diferencian los Instagram Reels de TikTok?", answer: "Las audiencias de Instagram esperan contenido mas pulido y curado. Las plantillas de Reels de Hyreel se enfocan en estetica premium mientras las de TikTok enfatizan estar listos para tendencias." },
        { question: "Puedo usar Reels para Instagram Shopping?", answer: "Si! Los videos enfocados en productos son perfectos para agregar etiquetas de productos. Muestra productos bellamente y hazlos comprables." },
        { question: "Con que frecuencia debo publicar Reels?", answer: "3-5 Reels por semana es optimo para la mayoria de cuentas. Con Hyreel, puedes crear el contenido de una semana completa en menos de 30 minutos." },
        { question: "Los Reels ayudan a crecer seguidores?", answer: "Absolutamente! Los Reels alcanzan no-seguidores a traves de Explorar y la pestana de Reels. Son la herramienta de crecimiento organico mas rapida en Instagram." }
      ],
      ctaText: "Crear Instagram Reels Gratis"
    },
    de: {
      name: "Instagram Reels",
      metaTitle: "KI-Videogenerator fur Instagram Reels | Hyreel",
      metaDescription: "Erstelle professionelle Instagram Reels aus Fotos. KI-Effekte fur maximales Engagement, Speicherungen und Shares. Perfekt fur Marken und Creator.",
      heroHeadline: "Erstelle Reels Die Gespeichert und Geteilt Werden",
      heroSubheadline: "Professionelle Instagram Reels mit cinematischen Bewegungseffekten. Baue deine Marke auf, vergrößere deine Followerschaft, steigere Engagement.",
      description: "Hyreel erstellt Instagram-optimierte Reels, die fur maximale Speicherungen, Shares und Follower-Wachstum entwickelt wurden.",
      features: [
        { title: "Premium-Asthetik", description: "Gehobene Bewegungseffekte, die Instagrams polierten, kuratierten Erwartungen entsprechen." },
        { title: "Markenkonsistenz", description: "Behalte deine visuelle Identitat uber alle Reels-Inhalte hinweg bei." },
        { title: "Speicherungswurdiger Content", description: "Effekte, die Inhalte schaffen, die es wert sind, gespeichert zu werden - Instagrams Top-Engagement-Signal." },
        { title: "Shopping-bereit", description: "Perfekt fur Produkt-Tags und Instagram Shopping-Integration." }
      ],
      bestPractices: [
        "Poste 3-5 Reels pro Woche fur optimale Reichweite",
        "Fokussiere auf Speicherungen und Shares uber Likes",
        "Verwende Cover-Frames, die gut in deinem Grid aussehen",
        "Fuge Untertitel fur Barrierefreiheit hinzu",
        "Poste zwischen 11-13 Uhr und 19-21 Uhr",
        "Interagiere mit Kommentaren in der ersten Stunde"
      ],
      contentTypes: [
        { title: "Produkt-Enthullungen", description: "Elegante Showcases mit langsamen Zoom-Effekten" },
        { title: "Hinter den Kulissen", description: "Authentische Markenmomente mit dynamischer Bewegung" },
        { title: "Tutorials", description: "Schritt-fur-Schritt-Inhalte mit klaren Visuals" },
        { title: "Lifestyle-Content", description: "Aspirationale Bilder mit cinematischer Bewegung" },
        { title: "User-Generated Style", description: "Authentisch wirkender Content, der ankommt" },
        { title: "Saisonale Kampagnen", description: "Zeitgemaßer Content mit professionellem Finish" }
      ],
      algorithmTips: [
        "Speicherungen und Shares zahlen mehr als Likes",
        "Watch-Time bestimmt die Reichweite",
        "Cross-poste zu Stories fur Bonus-Sichtbarkeit",
        "Konstantes Posten schlagt virale Versuche",
        "Hashtags funktionieren noch - verwende 5-10 relevante",
        "Kollaborationen steigern die Reichweite erheblich"
      ],
      stats: [
        { value: "2B+", label: "Monatlich aktive Nutzer" },
        { value: "30%", label: "Zeit in Reels" },
        { value: "9:16", label: "Optimales Verhaltnis" },
        { value: "15-30s", label: "Beste Dauer" }
      ],
      faqs: [
        { question: "Wie unterscheiden sich Instagram Reels von TikTok?", answer: "Instagram-Publikum erwartet polierteren, kuratierten Content. Hyreels Reels-Vorlagen fokussieren auf Premium-Asthetik, wahrend TikTok-Vorlagen Trend-Readiness betonen." },
        { question: "Kann ich Reels fur Instagram Shopping nutzen?", answer: "Ja! Produktfokussierte Videos sind perfekt fur Produkt-Tags. Prasentiere Produkte schon und mache sie kaufbar." },
        { question: "Wie oft sollte ich Reels posten?", answer: "3-5 Reels pro Woche ist optimal fur die meisten Accounts. Mit Hyreel erstellst du den Content einer ganzen Woche in unter 30 Minuten." },
        { question: "Helfen Reels beim Follower-Wachstum?", answer: "Absolut! Reels erreichen Nicht-Follower uber Explore und den Reels-Tab. Sie sind das schnellste organische Wachstumstool auf Instagram." }
      ],
      ctaText: "Instagram Reels Kostenlos Erstellen"
    },
    fr: {
      name: "Instagram Reels",
      metaTitle: "Generateur Video IA pour Instagram Reels | Hyreel",
      metaDescription: "Creez des Instagram Reels professionnels a partir de photos. Effets IA pour un engagement maximal, sauvegardes et partages. Parfait pour les marques et createurs.",
      heroHeadline: "Creez des Reels Qui Sont Sauvegardes et Partages",
      heroSubheadline: "Instagram Reels professionnels avec des effets de mouvement cinematiques. Construisez votre marque, developpez votre audience, boostez l'engagement.",
      description: "Hyreel cree des Reels optimises pour Instagram concus pour maximiser les sauvegardes, partages et la croissance de followers.",
      features: [
        { title: "Esthetique Premium", description: "Effets de mouvement sophistiques qui correspondent aux attentes polies et curatees d'Instagram." },
        { title: "Coherence de Marque", description: "Maintenez votre identite visuelle sur tout votre contenu Reels." },
        { title: "Contenu Digne d'etre Sauvegarde", description: "Effets concus pour creer du contenu qui merite d'etre sauvegarde - le signal d'engagement principal d'Instagram." },
        { title: "Pret pour le Shopping", description: "Parfait pour les tags produits et l'integration Instagram Shopping." }
      ],
      bestPractices: [
        "Publiez 3-5 Reels par semaine pour une portee optimale",
        "Concentrez-vous sur les sauvegardes et partages plutot que les likes",
        "Utilisez des couvertures qui s'integrent bien a votre grille",
        "Ajoutez des sous-titres pour l'accessibilite",
        "Publiez entre 11h-13h et 19h-21h",
        "Engagez avec les commentaires dans la premiere heure"
      ],
      contentTypes: [
        { title: "Revelations de Produits", description: "Presentations elegantes avec des effets de zoom lent" },
        { title: "Coulisses", description: "Moments de marque authentiques avec mouvement dynamique" },
        { title: "Tutoriels", description: "Contenu etape par etape avec visuels clairs" },
        { title: "Contenu Lifestyle", description: "Images aspirationnelles avec mouvement cinematique" },
        { title: "Style User-Generated", description: "Contenu authentique qui resonne" },
        { title: "Campagnes Saisonnieres", description: "Contenu opportun avec finition professionnelle" }
      ],
      algorithmTips: [
        "Les sauvegardes et partages comptent plus que les likes",
        "Le temps de visionnage determine la portee",
        "Cross-postez en Stories pour une visibilite bonus",
        "La publication constante bat les tentatives virales",
        "Les hashtags fonctionnent encore - utilisez 5-10 pertinents",
        "Les collaborations boostent la portee significativement"
      ],
      stats: [
        { value: "2B+", label: "Utilisateurs Actifs Mensuels" },
        { value: "30%", label: "Temps sur Reels" },
        { value: "9:16", label: "Ratio Optimal" },
        { value: "15-30s", label: "Meilleure Duree" }
      ],
      faqs: [
        { question: "En quoi les Instagram Reels different de TikTok?", answer: "Les audiences Instagram attendent du contenu plus poli et curate. Les modeles Reels de Hyreel se concentrent sur l'esthetique premium tandis que TikTok met l'accent sur les tendances." },
        { question: "Puis-je utiliser Reels pour Instagram Shopping?", answer: "Oui! Les videos axees produits sont parfaites pour ajouter des tags produits. Presentez les produits magnifiquement et rendez-les achetables." },
        { question: "A quelle frequence dois-je publier des Reels?", answer: "3-5 Reels par semaine est optimal pour la plupart des comptes. Avec Hyreel, vous creez le contenu d'une semaine en moins de 30 minutes." },
        { question: "Les Reels aident-ils a gagner des followers?", answer: "Absolument! Les Reels atteignent les non-followers via Explore et l'onglet Reels. C'est l'outil de croissance organique le plus rapide sur Instagram." }
      ],
      ctaText: "Creer des Instagram Reels Gratuitement"
    },
    pt: {
      name: "Instagram Reels",
      metaTitle: "Gerador de Video IA para Instagram Reels | Hyreel",
      metaDescription: "Crie Instagram Reels profissionais a partir de fotos. Efeitos IA para maximo engajamento, salvamentos e compartilhamentos. Perfeito para marcas e criadores.",
      heroHeadline: "Crie Reels Que Sao Salvos e Compartilhados",
      heroSubheadline: "Instagram Reels profissionais com efeitos de movimento cinematico. Construa sua marca, cresca sua audiencia, impulsione o engajamento.",
      description: "Hyreel cria Reels otimizados para Instagram projetados para maximo de salvamentos, compartilhamentos e crescimento de seguidores.",
      features: [
        { title: "Estetica Premium", description: "Efeitos de movimento elevados que correspondem as expectativas polidas e curadas do Instagram." },
        { title: "Consistencia de Marca", description: "Mantenha sua identidade visual em todo seu conteudo de Reels." },
        { title: "Conteudo Digno de Salvar", description: "Efeitos projetados para criar conteudo que vale a pena salvar - o sinal de engajamento principal do Instagram." },
        { title: "Pronto para Shopping", description: "Perfeito para tags de produtos e integracao com Instagram Shopping." }
      ],
      bestPractices: [
        "Poste 3-5 Reels por semana para alcance otimo",
        "Foque em salvamentos e compartilhamentos sobre curtidas",
        "Use capas que fiquem bem no seu grid",
        "Adicione legendas para acessibilidade",
        "Poste entre 11h-13h e 19h-21h",
        "Engaje com comentarios na primeira hora"
      ],
      contentTypes: [
        { title: "Revelacoes de Produtos", description: "Showcases elegantes com efeitos de zoom lento" },
        { title: "Bastidores", description: "Momentos autenticos de marca com movimento dinamico" },
        { title: "Tutoriais", description: "Conteudo passo a passo com visuais claros" },
        { title: "Conteudo de Lifestyle", description: "Imagens aspiracionais com movimento cinematico" },
        { title: "Estilo User-Generated", description: "Conteudo de sensacao autentica que ressoa" },
        { title: "Campanhas Sazonais", description: "Conteudo oportuno com acabamento profissional" }
      ],
      algorithmTips: [
        "Salvamentos e compartilhamentos importam mais que curtidas",
        "O tempo de visualizacao determina o alcance",
        "Compartilhe nos Stories para visibilidade bonus",
        "Publicacao consistente supera tentativas virais",
        "Hashtags ainda funcionam - use 5-10 relevantes",
        "Colaboracoes aumentam o alcance significativamente"
      ],
      stats: [
        { value: "2B+", label: "Usuarios Ativos Mensais" },
        { value: "30%", label: "Tempo em Reels" },
        { value: "9:16", label: "Proporcao Otima" },
        { value: "15-30s", label: "Melhor Duracao" }
      ],
      faqs: [
        { question: "Como os Instagram Reels diferem do TikTok?", answer: "Audiencias do Instagram esperam conteudo mais polido e curado. Os templates de Reels do Hyreel focam em estetica premium enquanto TikTok enfatiza estar pronto para tendencias." },
        { question: "Posso usar Reels para Instagram Shopping?", answer: "Sim! Videos focados em produtos sao perfeitos para adicionar tags de produtos. Mostre produtos lindamente e torne-os compraveis." },
        { question: "Com que frequencia devo postar Reels?", answer: "3-5 Reels por semana e otimo para a maioria das contas. Com Hyreel, voce cria o conteudo de uma semana em menos de 30 minutos." },
        { question: "Reels ajudam a crescer seguidores?", answer: "Absolutamente! Reels alcancam nao-seguidores pelo Explorar e aba de Reels. E a ferramenta de crescimento organico mais rapida no Instagram." }
      ],
      ctaText: "Criar Instagram Reels Gratis"
    },
    ru: {
      name: "Instagram Reels",
      metaTitle: "ИИ-генератор видео для Instagram Reels | Hyreel",
      metaDescription: "Создавайте профессиональные Instagram Reels из фото. ИИ-эффекты для максимального вовлечения, сохранений и репостов. Идеально для брендов и создателей.",
      heroHeadline: "Создавайте Reels, Которые Сохраняют и Делятся",
      heroSubheadline: "Профессиональные Instagram Reels с кинематографичными эффектами движения. Развивайте бренд, увеличивайте аудиторию, повышайте вовлеченность.",
      description: "Hyreel создает оптимизированные для Instagram Reels, разработанные для максимума сохранений, репостов и роста подписчиков.",
      features: [
        { title: "Премиум эстетика", description: "Продвинутые эффекты движения, соответствующие отполированным ожиданиям Instagram." },
        { title: "Консистентность бренда", description: "Сохраняйте визуальную идентичность во всем контенте Reels." },
        { title: "Контент для сохранения", description: "Эффекты, создающие контент, достойный сохранения - главный сигнал вовлеченности Instagram." },
        { title: "Готово для Shopping", description: "Идеально для тегов продуктов и интеграции с Instagram Shopping." }
      ],
      bestPractices: [
        "Публикуйте 3-5 Reels в неделю для оптимального охвата",
        "Фокусируйтесь на сохранениях и репостах, а не лайках",
        "Используйте обложки, которые хорошо смотрятся в сетке",
        "Добавляйте субтитры для доступности",
        "Публикуйте между 11-13 и 19-21",
        "Взаимодействуйте с комментариями в первый час"
      ],
      contentTypes: [
        { title: "Презентации продуктов", description: "Элегантные показы с медленными эффектами зума" },
        { title: "За кулисами", description: "Аутентичные моменты бренда с динамичным движением" },
        { title: "Туториалы", description: "Пошаговый контент с четкими визуалами" },
        { title: "Лайфстайл контент", description: "Вдохновляющие образы с кинематографичным движением" },
        { title: "UGC-стиль", description: "Аутентичный контент, который резонирует" },
        { title: "Сезонные кампании", description: "Своевременный контент с профессиональной отделкой" }
      ],
      algorithmTips: [
        "Сохранения и репосты важнее лайков",
        "Время просмотра определяет охват",
        "Делитесь в Stories для бонусной видимости",
        "Постоянная публикация побеждает вирусные попытки",
        "Хештеги все еще работают - используйте 5-10 релевантных",
        "Коллаборации значительно увеличивают охват"
      ],
      stats: [
        { value: "2B+", label: "Активных пользователей в месяц" },
        { value: "30%", label: "Времени на Reels" },
        { value: "9:16", label: "Оптимальное соотношение" },
        { value: "15-30с", label: "Лучшая длительность" }
      ],
      faqs: [
        { question: "Чем Instagram Reels отличаются от TikTok?", answer: "Аудитория Instagram ожидает более отполированный, курированный контент. Шаблоны Reels Hyreel фокусируются на премиум-эстетике, тогда как TikTok - на трендах." },
        { question: "Могу ли я использовать Reels для Instagram Shopping?", answer: "Да! Видео, ориентированные на продукты, идеальны для добавления тегов. Красиво демонстрируйте продукты и делайте их покупаемыми." },
        { question: "Как часто публиковать Reels?", answer: "3-5 Reels в неделю оптимально для большинства аккаунтов. С Hyreel вы создаете контент на неделю менее чем за 30 минут." },
        { question: "Reels помогают растить подписчиков?", answer: "Абсолютно! Reels достигают не-подписчиков через Explore и вкладку Reels. Это самый быстрый инструмент органического роста в Instagram." }
      ],
      ctaText: "Создать Instagram Reels бесплатно"
    },
    it: {
      name: "Instagram Reels",
      metaTitle: "Generatore Video IA per Instagram Reels | Hyreel",
      metaDescription: "Crea Instagram Reels professionali dalle foto. Effetti IA per massimo engagement, salvataggi e condivisioni. Perfetto per brand e creator.",
      heroHeadline: "Crea Reels Che Vengono Salvati e Condivisi",
      heroSubheadline: "Instagram Reels professionali con effetti di movimento cinematici. Costruisci il tuo brand, cresci il tuo seguito, aumenta l'engagement.",
      description: "Hyreel crea Reels ottimizzati per Instagram progettati per massimizzare salvataggi, condivisioni e crescita follower.",
      features: [
        { title: "Estetica Premium", description: "Effetti di movimento elevati che corrispondono alle aspettative curate di Instagram." },
        { title: "Coerenza del Brand", description: "Mantieni la tua identita visiva in tutti i contenuti Reels." },
        { title: "Contenuti Degni di Salvataggio", description: "Effetti progettati per creare contenuti che vale la pena salvare - il segnale di engagement principale di Instagram." },
        { title: "Pronto per lo Shopping", description: "Perfetto per tag prodotti e integrazione Instagram Shopping." }
      ],
      bestPractices: [
        "Pubblica 3-5 Reels a settimana per una portata ottimale",
        "Concentrati su salvataggi e condivisioni piuttosto che like",
        "Usa copertine che stanno bene nella tua griglia",
        "Aggiungi sottotitoli per l'accessibilita",
        "Pubblica tra le 11-13 e le 19-21",
        "Interagisci con i commenti nella prima ora"
      ],
      contentTypes: [
        { title: "Rivelazioni Prodotti", description: "Showcase eleganti con effetti zoom lenti" },
        { title: "Dietro le Quinte", description: "Momenti autentici del brand con movimento dinamico" },
        { title: "Tutorial", description: "Contenuti passo passo con visual chiari" },
        { title: "Contenuti Lifestyle", description: "Immagini aspirazionali con movimento cinematico" },
        { title: "Stile User-Generated", description: "Contenuti autentici che risuonano" },
        { title: "Campagne Stagionali", description: "Contenuti tempestivi con finitura professionale" }
      ],
      algorithmTips: [
        "Salvataggi e condivisioni contano piu dei like",
        "Il tempo di visualizzazione determina la portata",
        "Cross-posta nelle Stories per visibilita bonus",
        "La pubblicazione costante batte i tentativi virali",
        "Gli hashtag funzionano ancora - usa 5-10 pertinenti",
        "Le collaborazioni aumentano la portata significativamente"
      ],
      stats: [
        { value: "2B+", label: "Utenti Attivi Mensili" },
        { value: "30%", label: "Tempo su Reels" },
        { value: "9:16", label: "Rapporto Ottimale" },
        { value: "15-30s", label: "Durata Migliore" }
      ],
      faqs: [
        { question: "Come si differenziano gli Instagram Reels da TikTok?", answer: "Il pubblico Instagram si aspetta contenuti piu curati e rifiniti. I template Reels di Hyreel si concentrano su estetica premium mentre TikTok enfatizza la prontezza ai trend." },
        { question: "Posso usare Reels per Instagram Shopping?", answer: "Si! I video focalizzati sui prodotti sono perfetti per aggiungere tag prodotto. Mostra i prodotti magnificamente e rendili acquistabili." },
        { question: "Quanto spesso devo pubblicare Reels?", answer: "3-5 Reels a settimana e ottimale per la maggior parte degli account. Con Hyreel, crei i contenuti di una settimana in meno di 30 minuti." },
        { question: "I Reels aiutano a crescere i follower?", answer: "Assolutamente! I Reels raggiungono i non-follower tramite Esplora e la scheda Reels. Sono lo strumento di crescita organica piu veloce su Instagram." }
      ],
      ctaText: "Crea Instagram Reels Gratis"
    },
    nl: {
      name: "Instagram Reels",
      metaTitle: "AI-Videogenerator voor Instagram Reels | Hyreel",
      metaDescription: "Maak professionele Instagram Reels van foto's. AI-effecten voor maximale engagement, opgeslagen en gedeeld. Perfect voor merken en creators.",
      heroHeadline: "Maak Reels Die Worden Opgeslagen en Gedeeld",
      heroSubheadline: "Professionele Instagram Reels met cinematische bewegingseffecten. Bouw je merk, vergroot je volgers, verhoog engagement.",
      description: "Hyreel maakt Instagram-geoptimaliseerde Reels ontworpen voor maximale opgeslagen, gedeelde en follower-groei.",
      features: [
        { title: "Premium Esthetiek", description: "Verheven bewegingseffecten die passen bij Instagrams gepolijste verwachtingen." },
        { title: "Merkconsistentie", description: "Behoud je visuele identiteit in al je Reels-content." },
        { title: "Opslaan-waardige Content", description: "Effecten ontworpen om content te maken die het waard is om op te slaan - Instagrams top engagement-signaal." },
        { title: "Shopping-klaar", description: "Perfect voor product-tags en Instagram Shopping-integratie." }
      ],
      bestPractices: [
        "Post 3-5 Reels per week voor optimaal bereik",
        "Focus op opgeslagen en gedeeld boven likes",
        "Gebruik covers die goed staan in je grid",
        "Voeg ondertitels toe voor toegankelijkheid",
        "Post tussen 11-13u en 19-21u",
        "Reageer op reacties in het eerste uur"
      ],
      contentTypes: [
        { title: "Product Onthullingen", description: "Elegante showcases met langzame zoom-effecten" },
        { title: "Achter de Schermen", description: "Authentieke merkmomenten met dynamische beweging" },
        { title: "Tutorials", description: "Stap-voor-stap content met duidelijke visuals" },
        { title: "Lifestyle Content", description: "Aspiratiebeelden met cinematische beweging" },
        { title: "User-Generated Stijl", description: "Authentiek aanvoelende content die resoneert" },
        { title: "Seizoenscampagnes", description: "Tijdige content met professionele afwerking" }
      ],
      algorithmTips: [
        "Opgeslagen en gedeeld tellen meer dan likes",
        "Kijktijd bepaalt bereik",
        "Cross-post naar Stories voor bonus-zichtbaarheid",
        "Consistent posten verslaat virale pogingen",
        "Hashtags werken nog - gebruik 5-10 relevante",
        "Samenwerkingen verhogen bereik significant"
      ],
      stats: [
        { value: "2B+", label: "Maandelijks Actieve Gebruikers" },
        { value: "30%", label: "Tijd op Reels" },
        { value: "9:16", label: "Optimale Verhouding" },
        { value: "15-30s", label: "Beste Duur" }
      ],
      faqs: [
        { question: "Hoe verschillen Instagram Reels van TikTok?", answer: "Instagram-publiek verwacht meer gepolijste, gecureerde content. Hyreels Reels-sjablonen focussen op premium esthetiek terwijl TikTok trend-readiness benadrukt." },
        { question: "Kan ik Reels gebruiken voor Instagram Shopping?", answer: "Ja! Productgerichte video's zijn perfect voor het toevoegen van product-tags. Toon producten prachtig en maak ze koopbaar." },
        { question: "Hoe vaak moet ik Reels posten?", answer: "3-5 Reels per week is optimaal voor de meeste accounts. Met Hyreel maak je de content van een week in minder dan 30 minuten." },
        { question: "Helpen Reels bij het groeien van volgers?", answer: "Absoluut! Reels bereiken niet-volgers via Verkennen en de Reels-tab. Ze zijn het snelste organische groei-tool op Instagram." }
      ],
      ctaText: "Maak Gratis Instagram Reels"
    },
    pl: {
      name: "Instagram Reels",
      metaTitle: "Generator Wideo AI dla Instagram Reels | Hyreel",
      metaDescription: "Twórz profesjonalne Instagram Reels ze zdjec. Efekty AI dla maksymalnego zaangazowania, zapisów i udostepnien. Idealne dla marek i twórców.",
      heroHeadline: "Twórz Reels, Które Sa Zapisywane i Udostepniane",
      heroSubheadline: "Profesjonalne Instagram Reels z kinowymi efektami ruchu. Buduj marke, rozwijaj widownie, zwiekszaj zaangazowanie.",
      description: "Hyreel tworzy Reels zoptymalizowane pod Instagram, zaprojektowane dla maksymalnej liczby zapisów, udostepnien i wzrostu obserwujacych.",
      features: [
        { title: "Estetyka Premium", description: "Wyrafinowane efekty ruchu odpowiadajace dopracowanym oczekiwaniom Instagrama." },
        { title: "Spójnosc Marki", description: "Zachowaj tożsamość wizualna we wszystkich tresciach Reels." },
        { title: "Tresci Warte Zapisania", description: "Efekty zaprojektowane do tworzenia tresci wartych zapisania - glówny sygnal zaangazowania Instagrama." },
        { title: "Gotowe do Shopping", description: "Idealne do tagów produktów i integracji z Instagram Shopping." }
      ],
      bestPractices: [
        "Publikuj 3-5 Reels tygodniowo dla optymalnego zasiegu",
        "Skup sie na zapisach i udostepnieniach zamiast polubien",
        "Uzywaj okladek, które dobrze wygladaja w siatce",
        "Dodawaj napisy dla dostepnosci",
        "Publikuj miedzy 11-13 i 19-21",
        "Angazuj sie w komentarze w pierwszej godzinie"
      ],
      contentTypes: [
        { title: "Odkrycia Produktów", description: "Eleganckie prezentacje z wolnymi efektami zoom" },
        { title: "Za Kulisami", description: "Autentyczne momenty marki z dynamicznym ruchem" },
        { title: "Tutoriale", description: "Tresci krok po kroku z czytelnymi wizualizacjami" },
        { title: "Tresci Lifestyle", description: "Aspiracyjne obrazy z kinowym ruchem" },
        { title: "Styl User-Generated", description: "Autentycznie wygladajace tresci, które rezonuja" },
        { title: "Kampanie Sezonowe", description: "Aktualne tresci z profesjonalnym wykonczeniem" }
      ],
      algorithmTips: [
        "Zapisy i udostepnienia licza sie bardziej niz polubienia",
        "Czas ogladania okresla zasieg",
        "Cross-postuj do Stories dla bonusowej widocznosci",
        "Konsekwentne publikowanie pokonuje próby wirusowe",
        "Hashtagi nadal dzialaja - uzywaj 5-10 odpowiednich",
        "Wspólprace znacznie zwiekszaja zasieg"
      ],
      stats: [
        { value: "2B+", label: "Miesiecznie Aktywnych Uzytkowników" },
        { value: "30%", label: "Czasu na Reels" },
        { value: "9:16", label: "Optymalny Stosunek" },
        { value: "15-30s", label: "Najlepszy Czas" }
      ],
      faqs: [
        { question: "Czym Instagram Reels róznia sie od TikToka?", answer: "Publicznosc Instagrama oczekuje bardziej dopracowanych, wyselekcjonowanych tresci. Szablony Reels Hyreel skupiaja sie na estetyce premium, podczas gdy TikTok podkresla gotowosc na trendy." },
        { question: "Czy moge uzywac Reels do Instagram Shopping?", answer: "Tak! Filmy skupione na produktach sa idealne do dodawania tagów produktów. Prezentuj produkty pieknie i spraw, by byly kupowalne." },
        { question: "Jak czesto powinienem publikowac Reels?", answer: "3-5 Reels tygodniowo jest optymalne dla wiekszosci kont. Z Hyreel tworzysz tresci na tydzien w mniej niz 30 minut." },
        { question: "Czy Reels pomagaja rozwijac obserwujacych?", answer: "Absolutnie! Reels docieraja do nieobserwujacych przez Eksploruj i zakladke Reels. Sa najszybszym narzedziem organicznego wzrostu na Instagramie." }
      ],
      ctaText: "Twórz Instagram Reels za Darmo"
    },
    ja: {
      name: "Instagram Reels",
      metaTitle: "Instagram Reels用AIビデオジェネレーター | Hyreel",
      metaDescription: "写真からプロフェッショナルなInstagram Reelsを作成。最大のエンゲージメント、保存、シェアのためのAIエフェクト。ブランドやクリエイターに最適。",
      heroHeadline: "保存・シェアされるReelsを作成",
      heroSubheadline: "シネマティックなモーションエフェクトを備えたプロフェッショナルなInstagram Reels。ブランドを構築し、フォロワーを増やし、エンゲージメントを向上。",
      description: "Hyreelは保存、シェア、フォロワー成長を最大化するために設計されたInstagram最適化Reelsを作成します。",
      features: [
        { title: "プレミアムな美学", description: "Instagramの洗練されたキュレーションされた期待に応える高度なモーションエフェクト。" },
        { title: "ブランドの一貫性", description: "すべてのReelsコンテンツでビジュアルアイデンティティを維持。" },
        { title: "保存に値するコンテンツ", description: "保存する価値のあるコンテンツを作成するために設計されたエフェクト - Instagramの最高のエンゲージメントシグナル。" },
        { title: "ショッピング対応", description: "製品タグとInstagram Shopping統合に最適。" }
      ],
      bestPractices: [
        "最適なリーチのために週3-5本のReelsを投稿",
        "いいねよりも保存とシェアに注力",
        "グリッドで見栄えの良いカバーを使用",
        "アクセシビリティのために字幕を追加",
        "11-13時と19-21時の間に投稿",
        "最初の1時間でコメントに対応"
      ],
      contentTypes: [
        { title: "製品お披露目", description: "スローズームエフェクトを使用したエレガントなショーケース" },
        { title: "舞台裏", description: "ダイナミックな動きを伴う本物のブランドの瞬間" },
        { title: "チュートリアル", description: "明確なビジュアルを使用したステップバイステップコンテンツ" },
        { title: "ライフスタイルコンテンツ", description: "シネマティックな動きを伴う憧れの画像" },
        { title: "UGCスタイル", description: "共感を呼ぶ本物のように感じるコンテンツ" },
        { title: "シーズンキャンペーン", description: "プロフェッショナルな仕上げのタイムリーなコンテンツ" }
      ],
      algorithmTips: [
        "保存とシェアはいいねより重要",
        "視聴時間がリーチを決定",
        "ボーナス可視性のためにStoriesにクロスポスト",
        "一貫した投稿がバイラル試行を上回る",
        "ハッシュタグはまだ機能 - 関連する5-10個を使用",
        "コラボレーションはリーチを大幅に向上"
      ],
      stats: [
        { value: "20億+", label: "月間アクティブユーザー" },
        { value: "30%", label: "Reelsでの時間" },
        { value: "9:16", label: "最適な比率" },
        { value: "15-30秒", label: "最適な長さ" }
      ],
      faqs: [
        { question: "Instagram ReelsはTikTokとどう違いますか？", answer: "Instagramの視聴者はより洗練されたキュレーションされたコンテンツを期待しています。HyreelのReelsテンプレートはプレミアム美学に焦点を当て、TikTokはトレンド対応を強調します。" },
        { question: "Instagram ShoppingにReelsを使用できますか？", answer: "はい！製品に焦点を当てた動画は製品タグの追加に最適です。製品を美しく見せ、購入可能にしましょう。" },
        { question: "どのくらいの頻度でReelsを投稿すべきですか？", answer: "ほとんどのアカウントでは週3-5本のReelsが最適です。Hyreelなら30分以内で1週間分のコンテンツを作成できます。" },
        { question: "Reelsはフォロワー増加に役立ちますか？", answer: "もちろん！Reelsは発見タブとReelsタブを通じて非フォロワーにリーチします。Instagramで最も速いオーガニック成長ツールです。" }
      ],
      ctaText: "Instagram Reelsを無料で作成"
    },
    ko: {
      name: "Instagram Reels",
      metaTitle: "Instagram Reels용 AI 비디오 생성기 | Hyreel",
      metaDescription: "사진에서 전문적인 Instagram Reels를 제작하세요. 최대 참여, 저장, 공유를 위한 AI 효과. 브랜드와 크리에이터에게 완벽합니다.",
      heroHeadline: "저장되고 공유되는 Reels 제작",
      heroSubheadline: "시네마틱 모션 효과가 있는 전문적인 Instagram Reels. 브랜드를 구축하고, 팔로워를 늘리고, 참여를 높이세요.",
      description: "Hyreel은 저장, 공유, 팔로워 성장을 최대화하도록 설계된 Instagram 최적화 Reels를 제작합니다.",
      features: [
        { title: "프리미엄 미학", description: "Instagram의 세련되고 큐레이트된 기대에 부합하는 고급 모션 효과." },
        { title: "브랜드 일관성", description: "모든 Reels 콘텐츠에서 시각적 정체성 유지." },
        { title: "저장할 가치가 있는 콘텐츠", description: "저장할 가치가 있는 콘텐츠를 만들도록 설계된 효과 - Instagram의 최고 참여 신호." },
        { title: "쇼핑 준비 완료", description: "제품 태그와 Instagram Shopping 통합에 완벽." }
      ],
      bestPractices: [
        "최적의 도달을 위해 주 3-5개의 Reels 게시",
        "좋아요보다 저장과 공유에 집중",
        "그리드에서 잘 보이는 커버 사용",
        "접근성을 위해 자막 추가",
        "11-13시와 19-21시 사이에 게시",
        "첫 시간 내 댓글에 참여"
      ],
      contentTypes: [
        { title: "제품 공개", description: "느린 줌 효과가 있는 우아한 쇼케이스" },
        { title: "비하인드", description: "다이나믹한 움직임이 있는 진정한 브랜드 순간" },
        { title: "튜토리얼", description: "명확한 비주얼이 있는 단계별 콘텐츠" },
        { title: "라이프스타일 콘텐츠", description: "시네마틱 움직임이 있는 영감을 주는 이미지" },
        { title: "UGC 스타일", description: "공감을 주는 진정성 있는 콘텐츠" },
        { title: "시즌 캠페인", description: "전문적인 마감의 시의적절한 콘텐츠" }
      ],
      algorithmTips: [
        "저장과 공유가 좋아요보다 중요",
        "시청 시간이 도달을 결정",
        "보너스 가시성을 위해 Stories에 크로스포스트",
        "일관된 게시가 바이럴 시도를 이김",
        "해시태그는 여전히 작동 - 관련 있는 5-10개 사용",
        "콜라보레이션이 도달을 크게 향상"
      ],
      stats: [
        { value: "20억+", label: "월간 활성 사용자" },
        { value: "30%", label: "Reels 사용 시간" },
        { value: "9:16", label: "최적 비율" },
        { value: "15-30초", label: "최적 길이" }
      ],
      faqs: [
        { question: "Instagram Reels는 TikTok과 어떻게 다른가요?", answer: "Instagram 오디언스는 더 세련되고 큐레이트된 콘텐츠를 기대합니다. Hyreel의 Reels 템플릿은 프리미엄 미학에 초점을 맞추고 TikTok은 트렌드 준비성을 강조합니다." },
        { question: "Instagram Shopping에 Reels를 사용할 수 있나요?", answer: "네! 제품 중심 비디오는 제품 태그 추가에 완벽합니다. 제품을 아름답게 보여주고 구매 가능하게 만드세요." },
        { question: "얼마나 자주 Reels를 게시해야 하나요?", answer: "대부분의 계정에서 주 3-5개의 Reels가 최적입니다. Hyreel로 30분 이내에 일주일치 콘텐츠를 제작할 수 있습니다." },
        { question: "Reels가 팔로워 성장에 도움이 되나요?", answer: "물론이죠! Reels는 탐색 탭과 Reels 탭을 통해 비팔로워에게 도달합니다. Instagram에서 가장 빠른 유기적 성장 도구입니다." }
      ],
      ctaText: "무료로 Instagram Reels 제작"
    },
    zh: {
      name: "Instagram Reels",
      metaTitle: "Instagram Reels AI视频生成器 | Hyreel",
      metaDescription: "从照片创建专业的Instagram Reels。用于最大参与度、保存和分享的AI效果。非常适合品牌和创作者。",
      heroHeadline: "创建被保存和分享的Reels",
      heroSubheadline: "带有电影级动态效果的专业Instagram Reels。建立品牌，增加粉丝，提高参与度。",
      description: "Hyreel创建针对Instagram优化的Reels，旨在最大化保存、分享和粉丝增长。",
      features: [
        { title: "高端美学", description: "符合Instagram精致策划期望的高级动态效果。" },
        { title: "品牌一致性", description: "在所有Reels内容中保持视觉身份。" },
        { title: "值得保存的内容", description: "旨在创建值得保存的内容的效果 - Instagram的最高参与信号。" },
        { title: "购物就绪", description: "非常适合产品标签和Instagram Shopping集成。" }
      ],
      bestPractices: [
        "每周发布3-5个Reels以获得最佳覆盖",
        "专注于保存和分享而不是点赞",
        "使用在网格中看起来好的封面",
        "添加字幕以提高可访问性",
        "在11-13点和19-21点之间发布",
        "在第一小时内回复评论"
      ],
      contentTypes: [
        { title: "产品揭示", description: "带有慢速缩放效果的优雅展示" },
        { title: "幕后花絮", description: "带有动态运动的真实品牌时刻" },
        { title: "教程", description: "带有清晰视觉效果的分步内容" },
        { title: "生活方式内容", description: "带有电影级运动的励志图像" },
        { title: "UGC风格", description: "引起共鸣的真实感内容" },
        { title: "季节性活动", description: "专业完成的及时内容" }
      ],
      algorithmTips: [
        "保存和分享比点赞更重要",
        "观看时间决定覆盖率",
        "交叉发布到Stories以获得额外可见性",
        "持续发布胜过病毒式尝试",
        "标签仍然有效 - 使用5-10个相关标签",
        "合作显著提高覆盖率"
      ],
      stats: [
        { value: "20亿+", label: "月活跃用户" },
        { value: "30%", label: "Reels使用时间" },
        { value: "9:16", label: "最佳比例" },
        { value: "15-30秒", label: "最佳时长" }
      ],
      faqs: [
        { question: "Instagram Reels与TikTok有何不同？", answer: "Instagram受众期望更精致、更策划的内容。Hyreel的Reels模板专注于高端美学，而TikTok强调趋势准备。" },
        { question: "我可以将Reels用于Instagram Shopping吗？", answer: "是的！以产品为重点的视频非常适合添加产品标签。美丽地展示产品并使其可购买。" },
        { question: "我应该多久发布一次Reels？", answer: "对于大多数账户，每周3-5个Reels是最佳的。使用Hyreel，您可以在30分钟内创建一周的内容。" },
        { question: "Reels有助于增加粉丝吗？", answer: "当然！Reels通过探索和Reels标签接触非粉丝。它是Instagram上最快的有机增长工具。" }
      ],
      ctaText: "免费创建Instagram Reels"
    }
  }
};

export function getLocalizedPlatformContent(
  slug: string,
  locale: Locale
): PlatformTranslation | null {
  if (locale === "en") return null;
  const translations = platformTranslations[slug];
  const nonEnLocale = locale as NonEnLocale;
  return translations?.[nonEnLocale] || createPlatformFallback(slug, nonEnLocale);
}
