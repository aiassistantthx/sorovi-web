import type { Locale } from "@/lib/i18n/config";
import { getAudienceBySlug } from "@/lib/audiences";
import {
  localizedName,
  localizedRole,
  localizedStats,
  pageSpecificCopy,
  type NonEnLocale,
} from "./localized-fallbacks";

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface AudienceTranslation {
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  painPoints: PainPoint[];
  benefits: Benefit[];
  features: string[];
  useCases: string[];
  testimonial: Testimonial;
  stats: Stat[];
  faqs: FAQ[];
  ctaText: string;
}

type AudienceTranslations = Partial<Record<Locale, Partial<AudienceTranslation>>>;

function createAudienceFallback(
  slug: string,
  locale: NonEnLocale
): Partial<AudienceTranslation> | null {
  const audience = getAudienceBySlug(slug);
  if (!audience) return null;
  const name = localizedName(slug, audience.name, locale);
  const specific = pageSpecificCopy(slug, audience.name, locale);

  return {
    name,
    metaTitle: specific.metaTitle,
    metaDescription: specific.metaDescription,
    heroHeadline: specific.heroHeadline,
    heroSubheadline: specific.heroSubheadline,
    description: specific.description,
    painPoints: specific.features.map((item, index) => ({
      icon: audience.painPoints[index]?.icon || "•",
      title: item.title,
      description: item.description,
    })),
    benefits: specific.steps.map((item, index) => ({
      icon: audience.benefits[index]?.icon || "•",
      title: item.title,
      description: item.description,
    })),
    features: specific.benefits,
    useCases: specific.benefits,
    testimonial: {
      quote: specific.description,
      author: audience.testimonial.author,
      role: localizedRole(locale),
    },
    stats: localizedStats(locale, audience.stats, "audience") as Stat[],
    faqs: specific.faqs,
    ctaText: specific.cta,
  };
}

// Translations for audience pages (excluding 'en' which uses the original)
export const audienceTranslations: Record<string, AudienceTranslations> = {
  creators: {
    es: {
      name: "Creadores de Contenido",
      metaTitle: "Generador de Video IA para Creadores de Contenido | Hyreel",
      metaDescription: "Crea TikToks, Reels y Shorts virales 10x más rápido. Efectos de video IA diseñados para creadores de contenido. Sin habilidades de edición. Comienza gratis.",
      heroHeadline: "Crea 10x Más Contenido Sin Agotarte",
      heroSubheadline: "Creación de video impulsada por IA diseñada para creadores de contenido. Convierte fotos en videos que detienen el scroll en segundos, no horas.",
      description: "Hyreel ayuda a los creadores de contenido a producir más contenido de video de alta calidad sin la carga de la edición.",
      painPoints: [
        { icon: "⏰", title: "La Edición Toma Mucho Tiempo", description: "Pasar 3-4 horas editando un solo video no deja tiempo para estrategia, engagement o descanso." },
        { icon: "📉", title: "El Algoritmo Exige Consistencia", description: "Las plataformas recompensan la publicación diaria, pero crear tanto contenido de calidad es agotador." },
        { icon: "💸", title: "No Puedo Pagar Herramientas Pro", description: "El software de edición profesional cuesta cientos y toma meses aprender." },
        { icon: "🎬", title: "Ideas de Video Atrapadas como Fotos", description: "Grandes ideas de contenido atrapadas en tu carrete porque grabar toma mucho tiempo." }
      ],
      benefits: [
        { icon: "⚡", title: "Crea en Segundos", description: "Sube una foto, elige un efecto, obtén un video. Lo que tomaba horas ahora toma 10 segundos." },
        { icon: "📱", title: "Crea en Cualquier Lugar", description: "App iOS completa significa que puedes crear videos profesionales sobre la marcha." },
        { icon: "🔥", title: "Optimizado para Algoritmos", description: "Efectos diseñados para maximizar tiempo de visualización y engagement en TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Precios para Creadores", description: "Plan gratuito con 5 videos/día. Videos ilimitados por menos que un café por semana." }
      ],
      features: [
        "IA de foto a video con efectos de movimiento cinematográfico",
        "Formatos optimizados para TikTok, Reels, Shorts",
        "Más de 50 voces IA para locuciones",
        "Creación en lote para calendarios de contenido",
        "Sin marca de agua en planes de pago",
        "Exportación directa a redes sociales"
      ],
      useCases: [
        "Creación diaria de contenido para TikTok",
        "Instagram Reels para engagement",
        "YouTube Shorts para crecimiento del canal",
        "Contenido detrás de cámaras",
        "Reseñas de productos y unboxings",
        "Contenido de viajes y estilo de vida"
      ],
      testimonial: {
        quote: "Pasé de publicar dos veces por semana a diario. Mis seguidores crecieron 5x en 3 meses. Hyreel es el arma secreta que todo creador necesita.",
        author: "Maya K.",
        role: "Creadora de TikTok, 120K Seguidores"
      },
      stats: [
        { value: "10x", label: "Creación de Contenido Más Rápida" },
        { value: "5", label: "Videos Gratis Diarios" },
        { value: "50+", label: "Voces IA" },
        { value: "4.8", label: "Calificación App Store" }
      ],
      faqs: [
        { question: "¿Necesito experiencia en edición para usar Hyreel?", answer: "¡Para nada! Hyreel está diseñado para creadores de todos los niveles. Sube una foto, toca un efecto y tu video está listo. La IA maneja toda la edición compleja automáticamente." },
        { question: "¿Puedo crear contenido para múltiples plataformas?", answer: "¡Sí! Hyreel exporta en formatos optimizados para TikTok, Instagram Reels, YouTube Shorts y más. Crea una vez, publica en todas partes." },
        { question: "¿Cuántos videos puedo crear?", answer: "Los usuarios gratuitos obtienen 5 videos por día. El plan Creator ($9.99/mes) ofrece videos ilimitados, perfecto para calendarios de contenido diario." },
        { question: "¿Mis videos se verán como los de todos los demás?", answer: "¡No! Tú proporcionas tus propias fotos, así que cada video es único para tu marca. La IA añade efectos de movimiento profesional a TU contenido." }
      ],
      ctaText: "Comienza a Crear Gratis"
    },
    de: {
      name: "Content Creator",
      metaTitle: "KI-Video-Generator für Content Creator | Hyreel",
      metaDescription: "Erstelle virale TikToks, Reels und Shorts 10x schneller. KI-Video-Effekte für Content Creator. Keine Bearbeitungskenntnisse nötig. Starte kostenlos.",
      heroHeadline: "Erstelle 10x Mehr Content Ohne Burnout",
      heroSubheadline: "KI-gestützte Videoerstellung für Content Creator. Verwandle Fotos in Sekunden in scroll-stoppende Videos, nicht Stunden.",
      description: "Hyreel hilft Content Creators, mehr hochwertige Videoinhalte ohne den Bearbeitungsaufwand zu produzieren.",
      painPoints: [
        { icon: "⏰", title: "Bearbeitung Dauert Ewig", description: "3-4 Stunden für ein einzelnes Video zu bearbeiten lässt keine Zeit für Strategie, Engagement oder Erholung." },
        { icon: "📉", title: "Algorithmus Verlangt Konsistenz", description: "Plattformen belohnen tägliches Posten, aber so viel Qualitätscontent zu erstellen ist erschöpfend." },
        { icon: "💸", title: "Kann Mir Pro-Tools Nicht Leisten", description: "Professionelle Bearbeitungssoftware kostet Hunderte und braucht Monate zum Lernen." },
        { icon: "🎬", title: "Video-Ideen Stecken als Fotos Fest", description: "Großartige Content-Ideen in deiner Fotogalerie gefangen, weil Filmen zu lange dauert." }
      ],
      benefits: [
        { icon: "⚡", title: "Erstelle in Sekunden", description: "Lade ein Foto hoch, wähle einen Effekt, erhalte ein Video. Was Stunden dauerte, dauert jetzt 10 Sekunden." },
        { icon: "📱", title: "Erstelle Überall", description: "Vollwertige iOS-App bedeutet, du kannst professionelle Videos unterwegs erstellen." },
        { icon: "🔥", title: "Algorithmus-Optimiert", description: "Effekte entwickelt um Watchtime und Engagement auf TikTok, Instagram, YouTube zu maximieren." },
        { icon: "💰", title: "Creator-Freundliche Preise", description: "Kostenlos mit 5 Videos/Tag. Unbegrenzte Videos für weniger als einen Kaffee pro Woche." }
      ],
      features: [
        "Foto-zu-Video-KI mit cinematischen Bewegungseffekten",
        "Für TikTok, Reels, Shorts optimierte Formate",
        "Über 50 KI-Stimmen für Voiceovers",
        "Batch-Erstellung für Content-Kalender",
        "Kein Wasserzeichen bei bezahlten Plänen",
        "Direkter Social-Media-Export"
      ],
      useCases: [
        "Tägliche TikTok-Content-Erstellung",
        "Instagram Reels für Engagement",
        "YouTube Shorts für Kanalwachstum",
        "Behind-the-Scenes-Content",
        "Produktbewertungen und Unboxings",
        "Reise- und Lifestyle-Content"
      ],
      testimonial: {
        quote: "Ich bin von zweimal pro Woche zu täglich posten gewechselt. Meine Follower sind in 3 Monaten um das 5-fache gewachsen. Hyreel ist die Geheimwaffe, die jeder Creator braucht.",
        author: "Maya K.",
        role: "TikTok Creator, 120K Follower"
      },
      stats: [
        { value: "10x", label: "Schnellere Content-Erstellung" },
        { value: "5", label: "Kostenlose Videos Täglich" },
        { value: "50+", label: "KI-Stimmen" },
        { value: "4.8", label: "App Store Bewertung" }
      ],
      faqs: [
        { question: "Brauche ich Bearbeitungserfahrung um Hyreel zu nutzen?", answer: "Überhaupt nicht! Hyreel ist für Creator aller Erfahrungsstufen entwickelt. Lade ein Foto hoch, tippe auf einen Effekt und dein Video ist fertig. Die KI übernimmt die komplexe Bearbeitung automatisch." },
        { question: "Kann ich Content für mehrere Plattformen erstellen?", answer: "Ja! Hyreel exportiert in optimierten Formaten für TikTok, Instagram Reels, YouTube Shorts und mehr. Einmal erstellen, überall posten." },
        { question: "Wie viele Videos kann ich erstellen?", answer: "Kostenlose Nutzer erhalten 5 Videos pro Tag. Der Creator-Plan (9,99€/Monat) bietet unbegrenzte Videos — perfekt für tägliche Content-Pläne." },
        { question: "Werden meine Videos wie die aller anderen aussehen?", answer: "Nein! Du verwendest deine eigenen Fotos, also ist jedes Video einzigartig für deine Marke. Die KI fügt professionelle Bewegungseffekte zu DEINEM Content hinzu." }
      ],
      ctaText: "Starte Kostenlos"
    },
    fr: {
      name: "Créateurs de Contenu",
      metaTitle: "Générateur Vidéo IA pour Créateurs de Contenu | Hyreel",
      metaDescription: "Créez des TikToks, Reels et Shorts viraux 10x plus vite. Effets vidéo IA conçus pour les créateurs. Aucune compétence requise. Commencez gratuitement.",
      heroHeadline: "Créez 10x Plus de Contenu Sans Épuisement",
      heroSubheadline: "Création vidéo alimentée par IA conçue pour les créateurs de contenu. Transformez photos en vidéos captivantes en secondes.",
      description: "Hyreel aide les créateurs de contenu à produire plus de vidéos de qualité sans la corvée du montage.",
      painPoints: [
        { icon: "⏰", title: "Le Montage Prend une Éternité", description: "Passer 3-4 heures à monter une seule vidéo ne laisse pas de temps pour la stratégie, l'engagement ou le repos." },
        { icon: "📉", title: "L'Algorithme Exige la Régularité", description: "Les plateformes récompensent la publication quotidienne, mais créer autant de contenu de qualité est épuisant." },
        { icon: "💸", title: "Je Ne Peux Pas Me Permettre les Outils Pro", description: "Les logiciels de montage professionnels coûtent des centaines et prennent des mois à apprendre." },
        { icon: "🎬", title: "Idées Vidéo Bloquées en Photos", description: "De super idées de contenu coincées dans votre pellicule car filmer prend trop de temps." }
      ],
      benefits: [
        { icon: "⚡", title: "Créez en Secondes", description: "Téléchargez une photo, choisissez un effet, obtenez une vidéo. Ce qui prenait des heures prend maintenant 10 secondes." },
        { icon: "📱", title: "Créez Partout", description: "Une app iOS complète signifie que vous pouvez créer des vidéos professionnelles en déplacement." },
        { icon: "🔥", title: "Optimisé pour l'Algorithme", description: "Effets conçus pour maximiser le temps de visionnage et l'engagement sur TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Prix Adaptés aux Créateurs", description: "Plan gratuit avec 5 vidéos/jour. Vidéos illimitées pour moins qu'un café par semaine." }
      ],
      features: [
        "IA photo-vers-vidéo avec effets de mouvement cinématographiques",
        "Formats optimisés pour TikTok, Reels, Shorts",
        "Plus de 50 voix IA pour les voix off",
        "Création par lots pour les calendriers de contenu",
        "Sans filigrane sur les plans payants",
        "Export direct vers les réseaux sociaux"
      ],
      useCases: [
        "Création de contenu TikTok quotidienne",
        "Instagram Reels pour l'engagement",
        "YouTube Shorts pour la croissance de chaîne",
        "Contenu en coulisses",
        "Critiques de produits et unboxings",
        "Contenu voyage et lifestyle"
      ],
      testimonial: {
        quote: "Je suis passé de deux posts par semaine à quotidien. Mes abonnés ont été multipliés par 5 en 3 mois. Hyreel est l'arme secrète dont chaque créateur a besoin.",
        author: "Maya K.",
        role: "Créatrice TikTok, 120K Abonnés"
      },
      stats: [
        { value: "10x", label: "Création de Contenu Plus Rapide" },
        { value: "5", label: "Vidéos Gratuites par Jour" },
        { value: "50+", label: "Voix IA" },
        { value: "4.8", label: "Note App Store" }
      ],
      faqs: [
        { question: "Ai-je besoin d'expérience en montage pour utiliser Hyreel?", answer: "Pas du tout! Hyreel est conçu pour les créateurs de tous niveaux. Téléchargez une photo, touchez un effet et votre vidéo est prête. L'IA gère tout le montage complexe automatiquement." },
        { question: "Puis-je créer du contenu pour plusieurs plateformes?", answer: "Oui! Hyreel exporte dans des formats optimisés pour TikTok, Instagram Reels, YouTube Shorts et plus. Créez une fois, publiez partout." },
        { question: "Combien de vidéos puis-je créer?", answer: "Les utilisateurs gratuits ont 5 vidéos par jour. Le plan Creator (9,99€/mois) offre des vidéos illimitées — parfait pour les calendriers de contenu quotidien." },
        { question: "Mes vidéos ressembleront-elles à celles des autres?", answer: "Non! Vous fournissez vos propres photos, donc chaque vidéo est unique à votre marque. L'IA ajoute des effets de mouvement professionnels à VOTRE contenu." }
      ],
      ctaText: "Commencez à Créer Gratuitement"
    },
    pt: {
      name: "Criadores de Conteúdo",
      metaTitle: "Gerador de Vídeo IA para Criadores de Conteúdo | Hyreel",
      metaDescription: "Crie TikToks, Reels e Shorts virais 10x mais rápido. Efeitos de vídeo IA para criadores. Sem habilidades de edição. Comece grátis.",
      heroHeadline: "Crie 10x Mais Conteúdo Sem Se Esgotar",
      heroSubheadline: "Criação de vídeo com IA projetada para criadores de conteúdo. Transforme fotos em vídeos que param o scroll em segundos.",
      description: "Hyreel ajuda criadores de conteúdo a produzir mais vídeos de alta qualidade sem o trabalho pesado da edição.",
      painPoints: [
        { icon: "⏰", title: "Edição Demora Muito", description: "Gastar 3-4 horas editando um único vídeo não deixa tempo para estratégia, engajamento ou descanso." },
        { icon: "📉", title: "O Algoritmo Exige Consistência", description: "As plataformas recompensam postagens diárias, mas criar tanto conteúdo de qualidade é exaustivo." },
        { icon: "💸", title: "Não Posso Pagar Ferramentas Pro", description: "Software de edição profissional custa centenas e leva meses para aprender." },
        { icon: "🎬", title: "Ideias de Vídeo Presas como Fotos", description: "Ótimas ideias de conteúdo presas no seu rolo da câmera porque gravar leva muito tempo." }
      ],
      benefits: [
        { icon: "⚡", title: "Crie em Segundos", description: "Faça upload de uma foto, escolha um efeito, obtenha um vídeo. O que levava horas agora leva 10 segundos." },
        { icon: "📱", title: "Crie em Qualquer Lugar", description: "App iOS completo significa que você pode criar vídeos profissionais em movimento." },
        { icon: "🔥", title: "Otimizado para Algoritmos", description: "Efeitos projetados para maximizar tempo de visualização e engajamento no TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Preços para Criadores", description: "Plano gratuito com 5 vídeos/dia. Vídeos ilimitados por menos que um café por semana." }
      ],
      features: [
        "IA de foto para vídeo com efeitos de movimento cinematográfico",
        "Formatos otimizados para TikTok, Reels, Shorts",
        "Mais de 50 vozes IA para narrações",
        "Criação em lote para calendários de conteúdo",
        "Sem marca d'água em planos pagos",
        "Exportação direta para redes sociais"
      ],
      useCases: [
        "Criação diária de conteúdo TikTok",
        "Instagram Reels para engajamento",
        "YouTube Shorts para crescimento do canal",
        "Conteúdo dos bastidores",
        "Reviews de produtos e unboxings",
        "Conteúdo de viagem e lifestyle"
      ],
      testimonial: {
        quote: "Passei de postar duas vezes por semana para diariamente. Meus seguidores cresceram 5x em 3 meses. Hyreel é a arma secreta que todo criador precisa.",
        author: "Maya K.",
        role: "Criadora de TikTok, 120K Seguidores"
      },
      stats: [
        { value: "10x", label: "Criação de Conteúdo Mais Rápida" },
        { value: "5", label: "Vídeos Grátis por Dia" },
        { value: "50+", label: "Vozes IA" },
        { value: "4.8", label: "Avaliação App Store" }
      ],
      faqs: [
        { question: "Preciso de experiência em edição para usar o Hyreel?", answer: "De jeito nenhum! O Hyreel é projetado para criadores de todos os níveis. Faça upload de uma foto, toque em um efeito e seu vídeo está pronto. A IA cuida de toda a edição complexa automaticamente." },
        { question: "Posso criar conteúdo para múltiplas plataformas?", answer: "Sim! O Hyreel exporta em formatos otimizados para TikTok, Instagram Reels, YouTube Shorts e mais. Crie uma vez, poste em todos os lugares." },
        { question: "Quantos vídeos posso criar?", answer: "Usuários gratuitos têm 5 vídeos por dia. O plano Creator (R$49,99/mês) oferece vídeos ilimitados — perfeito para calendários de conteúdo diário." },
        { question: "Meus vídeos vão parecer iguais aos de todo mundo?", answer: "Não! Você fornece suas próprias fotos, então cada vídeo é único para sua marca. A IA adiciona efeitos de movimento profissionais ao SEU conteúdo." }
      ],
      ctaText: "Comece a Criar Grátis"
    },
    ru: {
      name: "Создатели контента",
      metaTitle: "ИИ Генератор Видео для Создателей Контента | Hyreel",
      metaDescription: "Создавайте вирусные TikTok, Reels и Shorts в 10 раз быстрее. ИИ-эффекты для создателей контента. Без навыков монтажа. Начните бесплатно.",
      heroHeadline: "Создавайте в 10 раз больше контента без выгорания",
      heroSubheadline: "Создание видео на базе ИИ для создателей контента. Превращайте фото в останавливающие скролл видео за секунды.",
      description: "Hyreel помогает создателям контента производить больше качественного видео без изнурительного монтажа.",
      painPoints: [
        { icon: "⏰", title: "Монтаж Занимает Вечность", description: "Тратить 3-4 часа на монтаж одного видео не оставляет времени на стратегию, взаимодействие или отдых." },
        { icon: "📉", title: "Алгоритм Требует Регулярности", description: "Платформы вознаграждают ежедневные публикации, но создавать столько качественного контента изнурительно." },
        { icon: "💸", title: "Не Могу Позволить Себе Про-Инструменты", description: "Профессиональный софт для монтажа стоит сотни долларов и требует месяцев обучения." },
        { icon: "🎬", title: "Идеи для Видео Застряли как Фото", description: "Отличные идеи для контента застряли в фотоплёнке, потому что съёмка занимает слишком много времени." }
      ],
      benefits: [
        { icon: "⚡", title: "Создавайте за Секунды", description: "Загрузите фото, выберите эффект, получите видео. То, что занимало часы, теперь занимает 10 секунд." },
        { icon: "📱", title: "Создавайте Где Угодно", description: "Полнофункциональное iOS-приложение позволяет создавать профессиональные видео на ходу." },
        { icon: "🔥", title: "Оптимизировано для Алгоритмов", description: "Эффекты, разработанные для максимизации времени просмотра и вовлечённости в TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Цены для Создателей", description: "Бесплатный план с 5 видео/день. Безлимитные видео дешевле чашки кофе в неделю." }
      ],
      features: [
        "ИИ фото-в-видео с кинематографическими эффектами движения",
        "Форматы, оптимизированные для TikTok, Reels, Shorts",
        "Более 50 ИИ-голосов для озвучки",
        "Пакетное создание для контент-календарей",
        "Без водяного знака на платных планах",
        "Прямой экспорт в соцсети"
      ],
      useCases: [
        "Ежедневное создание контента для TikTok",
        "Instagram Reels для вовлечённости",
        "YouTube Shorts для роста канала",
        "Закулисный контент",
        "Обзоры продуктов и анбоксинги",
        "Контент о путешествиях и лайфстайле"
      ],
      testimonial: {
        quote: "Я перешёл с двух постов в неделю на ежедневные. Мои подписчики выросли в 5 раз за 3 месяца. Hyreel — секретное оружие, которое нужно каждому создателю.",
        author: "Maya K.",
        role: "TikTok-создатель, 120K подписчиков"
      },
      stats: [
        { value: "10x", label: "Быстрее Создание Контента" },
        { value: "5", label: "Бесплатных Видео в День" },
        { value: "50+", label: "ИИ-Голосов" },
        { value: "4.8", label: "Рейтинг App Store" }
      ],
      faqs: [
        { question: "Нужен ли мне опыт монтажа для использования Hyreel?", answer: "Совсем нет! Hyreel создан для создателей любого уровня. Загрузите фото, нажмите на эффект, и ваше видео готово. ИИ автоматически выполняет весь сложный монтаж." },
        { question: "Могу ли я создавать контент для нескольких платформ?", answer: "Да! Hyreel экспортирует в оптимизированных форматах для TikTok, Instagram Reels, YouTube Shorts и других. Создайте один раз, публикуйте везде." },
        { question: "Сколько видео я могу создать?", answer: "Бесплатные пользователи получают 5 видео в день. План Creator ($9.99/мес) предлагает неограниченные видео — идеально для ежедневных контент-планов." },
        { question: "Будут ли мои видео выглядеть как у всех остальных?", answer: "Нет! Вы используете свои собственные фото, поэтому каждое видео уникально для вашего бренда. ИИ добавляет профессиональные эффекты движения к ВАШЕМУ контенту." }
      ],
      ctaText: "Начать Создавать Бесплатно"
    },
    it: {
      name: "Content Creator",
      metaTitle: "Generatore Video IA per Content Creator | Hyreel",
      metaDescription: "Crea TikTok, Reels e Shorts virali 10x più velocemente. Effetti video IA per content creator. Nessuna competenza richiesta. Inizia gratis.",
      heroHeadline: "Crea 10x Più Contenuti Senza Esaurirti",
      heroSubheadline: "Creazione video alimentata da IA progettata per content creator. Trasforma foto in video che fermano lo scroll in secondi.",
      description: "Hyreel aiuta i content creator a produrre più video di alta qualità senza la fatica del montaggio.",
      painPoints: [
        { icon: "⏰", title: "Il Montaggio Richiede un'Eternità", description: "Passare 3-4 ore a montare un singolo video non lascia tempo per strategia, engagement o riposo." },
        { icon: "📉", title: "L'Algoritmo Richiede Costanza", description: "Le piattaforme premiano la pubblicazione quotidiana, ma creare così tanti contenuti di qualità è estenuante." },
        { icon: "💸", title: "Non Posso Permettermi Strumenti Pro", description: "Il software di montaggio professionale costa centinaia e richiede mesi per impararlo." },
        { icon: "🎬", title: "Idee Video Bloccate come Foto", description: "Ottime idee di contenuto bloccate nel rullino perché girare richiede troppo tempo." }
      ],
      benefits: [
        { icon: "⚡", title: "Crea in Secondi", description: "Carica una foto, scegli un effetto, ottieni un video. Quello che richiedeva ore ora richiede 10 secondi." },
        { icon: "📱", title: "Crea Ovunque", description: "App iOS completa significa che puoi creare video professionali in movimento." },
        { icon: "🔥", title: "Ottimizzato per l'Algoritmo", description: "Effetti progettati per massimizzare tempo di visualizzazione e engagement su TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Prezzi per Creator", description: "Piano gratuito con 5 video/giorno. Video illimitati per meno di un caffè a settimana." }
      ],
      features: [
        "IA foto-a-video con effetti di movimento cinematografici",
        "Formati ottimizzati per TikTok, Reels, Shorts",
        "Oltre 50 voci IA per voiceover",
        "Creazione batch per calendari contenuti",
        "Nessun watermark sui piani a pagamento",
        "Esportazione diretta sui social media"
      ],
      useCases: [
        "Creazione contenuti TikTok quotidiana",
        "Instagram Reels per l'engagement",
        "YouTube Shorts per la crescita del canale",
        "Contenuti dietro le quinte",
        "Recensioni prodotti e unboxing",
        "Contenuti di viaggio e lifestyle"
      ],
      testimonial: {
        quote: "Sono passato da pubblicare due volte a settimana a ogni giorno. I miei follower sono cresciuti 5x in 3 mesi. Hyreel è l'arma segreta di cui ogni creator ha bisogno.",
        author: "Maya K.",
        role: "TikTok Creator, 120K Follower"
      },
      stats: [
        { value: "10x", label: "Creazione Contenuti Più Veloce" },
        { value: "5", label: "Video Gratis al Giorno" },
        { value: "50+", label: "Voci IA" },
        { value: "4.8", label: "Valutazione App Store" }
      ],
      faqs: [
        { question: "Ho bisogno di esperienza di montaggio per usare Hyreel?", answer: "Assolutamente no! Hyreel è progettato per creator di tutti i livelli. Carica una foto, tocca un effetto e il tuo video è pronto. L'IA gestisce automaticamente tutto il montaggio complesso." },
        { question: "Posso creare contenuti per più piattaforme?", answer: "Sì! Hyreel esporta in formati ottimizzati per TikTok, Instagram Reels, YouTube Shorts e altro. Crea una volta, pubblica ovunque." },
        { question: "Quanti video posso creare?", answer: "Gli utenti gratuiti ottengono 5 video al giorno. Il piano Creator (€9,99/mese) offre video illimitati — perfetto per calendari di contenuti quotidiani." },
        { question: "I miei video sembreranno come quelli di tutti gli altri?", answer: "No! Tu fornisci le tue foto, quindi ogni video è unico per il tuo brand. L'IA aggiunge effetti di movimento professionali al TUO contenuto." }
      ],
      ctaText: "Inizia a Creare Gratis"
    },
    nl: {
      name: "Content Creators",
      metaTitle: "AI Video Generator voor Content Creators | Hyreel",
      metaDescription: "Maak virale TikToks, Reels en Shorts 10x sneller. AI video-effecten voor content creators. Geen bewerkingsvaardigheden nodig. Start gratis.",
      heroHeadline: "Maak 10x Meer Content Zonder Burn-out",
      heroSubheadline: "AI-gestuurde videocreatie ontworpen voor content creators. Zet foto's in seconden om in scroll-stoppende video's.",
      description: "Hyreel helpt content creators meer hoogwaardige video-content te produceren zonder het bewerkingswerk.",
      painPoints: [
        { icon: "⏰", title: "Bewerken Duurt Eeuwig", description: "3-4 uur besteden aan het bewerken van één video laat geen tijd over voor strategie, engagement of rust." },
        { icon: "📉", title: "Algoritme Eist Consistentie", description: "Platforms belonen dagelijks posten, maar zoveel kwaliteitscontent maken is uitputtend." },
        { icon: "💸", title: "Kan Pro Tools Niet Betalen", description: "Professionele bewerkingssoftware kost honderden en duurt maanden om te leren." },
        { icon: "🎬", title: "Video-ideeën Vastzitten als Foto's", description: "Geweldige content-ideeën vast in je filmrol omdat filmen te lang duurt." }
      ],
      benefits: [
        { icon: "⚡", title: "Maak in Seconden", description: "Upload een foto, kies een effect, krijg een video. Wat uren duurde duurt nu 10 seconden." },
        { icon: "📱", title: "Maak Overal", description: "Volwaardige iOS-app betekent dat je onderweg professionele video's kunt maken." },
        { icon: "🔥", title: "Algoritme-Geoptimaliseerd", description: "Effecten ontworpen om kijktijd en engagement te maximaliseren op TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Creator-Vriendelijke Prijzen", description: "Gratis plan met 5 video's/dag. Onbeperkte video's voor minder dan een koffie per week." }
      ],
      features: [
        "Foto-naar-video AI met cinematische bewegingseffecten",
        "Geoptimaliseerde formaten voor TikTok, Reels, Shorts",
        "Meer dan 50 AI-stemmen voor voice-overs",
        "Batch-creatie voor content-kalenders",
        "Geen watermerk bij betaalde plannen",
        "Directe social media export"
      ],
      useCases: [
        "Dagelijkse TikTok content creatie",
        "Instagram Reels voor engagement",
        "YouTube Shorts voor kanaalgroei",
        "Behind-the-scenes content",
        "Productreviews en unboxings",
        "Reis- en lifestyle content"
      ],
      testimonial: {
        quote: "Ik ging van twee keer per week naar dagelijks posten. Mijn volgers groeiden 5x in 3 maanden. Hyreel is het geheime wapen dat elke creator nodig heeft.",
        author: "Maya K.",
        role: "TikTok Creator, 120K Volgers"
      },
      stats: [
        { value: "10x", label: "Snellere Content Creatie" },
        { value: "5", label: "Gratis Video's Dagelijks" },
        { value: "50+", label: "AI Stemmen" },
        { value: "4.8", label: "App Store Beoordeling" }
      ],
      faqs: [
        { question: "Heb ik bewerkingservaring nodig om Hyreel te gebruiken?", answer: "Helemaal niet! Hyreel is ontworpen voor creators van alle niveaus. Upload een foto, tik op een effect en je video is klaar. De AI doet alle complexe bewerking automatisch." },
        { question: "Kan ik content maken voor meerdere platforms?", answer: "Ja! Hyreel exporteert in geoptimaliseerde formaten voor TikTok, Instagram Reels, YouTube Shorts en meer. Maak één keer, post overal." },
        { question: "Hoeveel video's kan ik maken?", answer: "Gratis gebruikers krijgen 5 video's per dag. Het Creator-plan (€9,99/maand) biedt onbeperkte video's — perfect voor dagelijkse content-schema's." },
        { question: "Zullen mijn video's eruitzien zoals die van iedereen?", answer: "Nee! Je gebruikt je eigen foto's, dus elke video is uniek voor jouw merk. De AI voegt professionele bewegingseffecten toe aan JOUW content." }
      ],
      ctaText: "Start Gratis met Creëren"
    },
    pl: {
      name: "Twórcy Treści",
      metaTitle: "Generator Wideo AI dla Twórców Treści | Hyreel",
      metaDescription: "Twórz wirusowe TikToki, Reelsy i Shortsy 10x szybciej. Efekty wideo AI dla twórców treści. Bez umiejętności montażu. Zacznij za darmo.",
      heroHeadline: "Twórz 10x Więcej Treści Bez Wypalenia",
      heroSubheadline: "Tworzenie wideo napędzane przez AI zaprojektowane dla twórców treści. Przekształć zdjęcia w filmy zatrzymujące scrollowanie w kilka sekund.",
      description: "Hyreel pomaga twórcom treści produkować więcej wysokiej jakości treści wideo bez żmudnego montażu.",
      painPoints: [
        { icon: "⏰", title: "Montaż Trwa Wieczność", description: "Spędzanie 3-4 godzin na montażu jednego filmu nie zostawia czasu na strategię, zaangażowanie czy odpoczynek." },
        { icon: "📉", title: "Algorytm Wymaga Regularności", description: "Platformy nagradzają codzienne publikowanie, ale tworzenie tylu wartościowych treści jest wyczerpujące." },
        { icon: "💸", title: "Nie Stać Mnie na Narzędzia Pro", description: "Profesjonalne oprogramowanie do montażu kosztuje setki i wymaga miesięcy nauki." },
        { icon: "🎬", title: "Pomysły na Filmy Uwięzione jako Zdjęcia", description: "Świetne pomysły na treści uwięzione w rolce aparatu, bo nagrywanie zajmuje zbyt dużo czasu." }
      ],
      benefits: [
        { icon: "⚡", title: "Twórz w Sekundy", description: "Prześlij zdjęcie, wybierz efekt, otrzymaj film. To co zajmowało godziny, teraz zajmuje 10 sekund." },
        { icon: "📱", title: "Twórz Gdziekolwiek", description: "Pełnofunkcyjna aplikacja iOS oznacza, że możesz tworzyć profesjonalne filmy w podróży." },
        { icon: "🔥", title: "Zoptymalizowane pod Algorytm", description: "Efekty zaprojektowane by maksymalizować czas oglądania i zaangażowanie na TikTok, Instagram, YouTube." },
        { icon: "💰", title: "Ceny dla Twórców", description: "Darmowy plan z 5 filmami/dzień. Nieograniczone filmy za mniej niż kawa tygodniowo." }
      ],
      features: [
        "AI zdjęcie-do-wideo z kinowymi efektami ruchu",
        "Formaty zoptymalizowane dla TikTok, Reels, Shorts",
        "Ponad 50 głosów AI do lektorów",
        "Tworzenie wsadowe dla kalendarzy treści",
        "Bez znaku wodnego w płatnych planach",
        "Bezpośredni eksport do mediów społecznościowych"
      ],
      useCases: [
        "Codzienna produkcja treści TikTok",
        "Instagram Reels dla zaangażowania",
        "YouTube Shorts dla wzrostu kanału",
        "Treści zza kulis",
        "Recenzje produktów i unboxingi",
        "Treści podróżnicze i lifestyle"
      ],
      testimonial: {
        quote: "Przeszedłem z publikowania dwa razy w tygodniu na codziennie. Moi obserwujący wzrosli 5x w 3 miesiące. Hyreel to tajna broń, której potrzebuje każdy twórca.",
        author: "Maya K.",
        role: "Twórczyni TikTok, 120K Obserwujących"
      },
      stats: [
        { value: "10x", label: "Szybsze Tworzenie Treści" },
        { value: "5", label: "Darmowych Filmów Dziennie" },
        { value: "50+", label: "Głosów AI" },
        { value: "4.8", label: "Ocena App Store" }
      ],
      faqs: [
        { question: "Czy potrzebuję doświadczenia w montażu, żeby używać Hyreel?", answer: "Wcale nie! Hyreel jest zaprojektowany dla twórców na każdym poziomie. Prześlij zdjęcie, dotknij efektu i twój film jest gotowy. AI automatycznie zajmuje się całym skomplikowanym montażem." },
        { question: "Czy mogę tworzyć treści dla wielu platform?", answer: "Tak! Hyreel eksportuje w formatach zoptymalizowanych dla TikTok, Instagram Reels, YouTube Shorts i innych. Stwórz raz, publikuj wszędzie." },
        { question: "Ile filmów mogę stworzyć?", answer: "Darmowi użytkownicy otrzymują 5 filmów dziennie. Plan Creator (39,99 zł/mies.) oferuje nieograniczone filmy — idealny dla codziennych planów treści." },
        { question: "Czy moje filmy będą wyglądać jak wszystkich innych?", answer: "Nie! Ty dostarczasz własne zdjęcia, więc każdy film jest unikalny dla twojej marki. AI dodaje profesjonalne efekty ruchu do TWOICH treści." }
      ],
      ctaText: "Zacznij Tworzyć Za Darmo"
    },
    ja: {
      name: "コンテンツクリエイター",
      metaTitle: "コンテンツクリエイター向けAI動画ジェネレーター | Hyreel",
      metaDescription: "バイラルTikTok、Reels、Shortsを10倍速く作成。クリエイター向けAI動画エフェクト。編集スキル不要。無料で始める。",
      heroHeadline: "燃え尽きずに10倍のコンテンツを作成",
      heroSubheadline: "コンテンツクリエイターのために設計されたAI動画作成。写真を秒でスクロールを止める動画に変換。",
      description: "Hyreelはコンテンツクリエイターが編集の苦労なしに高品質な動画コンテンツをより多く制作できるよう支援します。",
      painPoints: [
        { icon: "⏰", title: "編集に時間がかかりすぎる", description: "1本の動画編集に3-4時間かけると、戦略、エンゲージメント、休息の時間がなくなります。" },
        { icon: "📉", title: "アルゴリズムは一貫性を要求", description: "プラットフォームは毎日の投稿を報酬しますが、それほど多くの質の高いコンテンツを作るのは疲れます。" },
        { icon: "💸", title: "プロツールを買う余裕がない", description: "プロの編集ソフトは数百ドルかかり、習得に数ヶ月かかります。" },
        { icon: "🎬", title: "動画のアイデアが写真のまま", description: "撮影に時間がかかりすぎて、素晴らしいコンテンツのアイデアがカメラロールに閉じ込められています。" }
      ],
      benefits: [
        { icon: "⚡", title: "秒で作成", description: "写真をアップロードし、エフェクトを選び、動画を取得。何時間もかかっていたことが今は10秒。" },
        { icon: "📱", title: "どこでも作成", description: "フル機能のiOSアプリで、外出先でもプロの動画を作成できます。" },
        { icon: "🔥", title: "アルゴリズム最適化", description: "TikTok、Instagram、YouTubeでの視聴時間とエンゲージメントを最大化するように設計されたエフェクト。" },
        { icon: "💰", title: "クリエイター向け価格", description: "1日5本の無料プラン。週のコーヒー代より安く無制限動画。" }
      ],
      features: [
        "シネマティックモーションエフェクト付き写真から動画へのAI",
        "TikTok、Reels、Shorts最適化フォーマット",
        "ボイスオーバー用50以上のAIボイス",
        "コンテンツカレンダー用バッチ作成",
        "有料プランでウォーターマークなし",
        "ソーシャルメディアへの直接エクスポート"
      ],
      useCases: [
        "毎日のTikTokコンテンツ作成",
        "エンゲージメント向上のためのInstagram Reels",
        "チャンネル成長のためのYouTube Shorts",
        "舞台裏コンテンツ",
        "製品レビューと開封動画",
        "旅行とライフスタイルコンテンツ"
      ],
      testimonial: {
        quote: "週2回の投稿から毎日投稿に変わりました。フォロワーは3ヶ月で5倍に成長。Hyreelはすべてのクリエイターが必要とする秘密兵器です。",
        author: "Maya K.",
        role: "TikTokクリエイター、12万フォロワー"
      },
      stats: [
        { value: "10x", label: "高速コンテンツ作成" },
        { value: "5", label: "毎日無料動画" },
        { value: "50+", label: "AIボイス" },
        { value: "4.8", label: "App Store評価" }
      ],
      faqs: [
        { question: "Hyreelを使うのに編集経験は必要ですか？", answer: "全く必要ありません！Hyreelはあらゆるスキルレベルのクリエイター向けに設計されています。写真をアップロードし、エフェクトをタップするだけで動画が完成。AIが自動的に複雑な編集をすべて処理します。" },
        { question: "複数のプラットフォーム用にコンテンツを作成できますか？", answer: "はい！HyreelはTikTok、Instagram Reels、YouTube Shortsなど用に最適化されたフォーマットでエクスポートします。一度作成して、どこにでも投稿。" },
        { question: "何本の動画を作成できますか？", answer: "無料ユーザーは1日5本の動画を取得できます。Creatorプラン（月額1,480円）は無制限の動画を提供—毎日のコンテンツスケジュールに最適。" },
        { question: "私の動画は他の人と同じに見えますか？", answer: "いいえ！あなた自身の写真を使用するので、すべての動画はあなたのブランドに固有です。AIはあなたのコンテンツにプロのモーションエフェクトを追加します。" }
      ],
      ctaText: "無料で作成を始める"
    },
    ko: {
      name: "콘텐츠 크리에이터",
      metaTitle: "콘텐츠 크리에이터를 위한 AI 비디오 생성기 | Hyreel",
      metaDescription: "바이럴 TikTok, Reels, Shorts를 10배 빠르게 제작. 크리에이터를 위한 AI 비디오 효과. 편집 기술 불필요. 무료로 시작.",
      heroHeadline: "번아웃 없이 10배 더 많은 콘텐츠 제작",
      heroSubheadline: "콘텐츠 크리에이터를 위해 설계된 AI 비디오 제작. 사진을 몇 초 만에 스크롤을 멈추게 하는 비디오로 변환.",
      description: "Hyreel은 콘텐츠 크리에이터가 편집의 고됨 없이 더 많은 고품질 비디오 콘텐츠를 제작할 수 있도록 돕습니다.",
      painPoints: [
        { icon: "⏰", title: "편집에 시간이 너무 오래 걸림", description: "하나의 비디오 편집에 3-4시간을 쓰면 전략, 참여, 휴식을 위한 시간이 없습니다." },
        { icon: "📉", title: "알고리즘은 일관성을 요구", description: "플랫폼은 매일 게시를 보상하지만, 그만큼의 양질의 콘텐츠를 만드는 것은 지칩니다." },
        { icon: "💸", title: "프로 도구를 살 여유가 없음", description: "전문 편집 소프트웨어는 수백 달러가 들고 배우는 데 몇 달이 걸립니다." },
        { icon: "🎬", title: "비디오 아이디어가 사진으로 갇혀있음", description: "촬영에 시간이 너무 오래 걸려서 훌륭한 콘텐츠 아이디어가 카메라 롤에 갇혀 있습니다." }
      ],
      benefits: [
        { icon: "⚡", title: "몇 초 만에 제작", description: "사진 업로드, 효과 선택, 비디오 획득. 몇 시간 걸리던 것이 이제 10초." },
        { icon: "📱", title: "어디서든 제작", description: "완전한 기능의 iOS 앱으로 이동 중에도 전문 비디오를 만들 수 있습니다." },
        { icon: "🔥", title: "알고리즘 최적화", description: "TikTok, Instagram, YouTube에서 시청 시간과 참여를 극대화하도록 설계된 효과." },
        { icon: "💰", title: "크리에이터 친화적 가격", description: "하루 5개 비디오 무료 플랜. 주당 커피 한 잔보다 저렴하게 무제한 비디오." }
      ],
      features: [
        "시네마틱 모션 효과가 있는 사진-비디오 AI",
        "TikTok, Reels, Shorts 최적화 포맷",
        "내레이션을 위한 50개 이상의 AI 음성",
        "콘텐츠 캘린더용 배치 생성",
        "유료 플랜에서 워터마크 없음",
        "소셜 미디어 직접 내보내기"
      ],
      useCases: [
        "일일 TikTok 콘텐츠 제작",
        "참여를 위한 Instagram Reels",
        "채널 성장을 위한 YouTube Shorts",
        "비하인드 씬 콘텐츠",
        "제품 리뷰 및 언박싱",
        "여행 및 라이프스타일 콘텐츠"
      ],
      testimonial: {
        quote: "주 2회 게시에서 매일로 바뀌었습니다. 팔로워가 3개월 만에 5배 성장했습니다. Hyreel은 모든 크리에이터에게 필요한 비밀 무기입니다.",
        author: "Maya K.",
        role: "TikTok 크리에이터, 12만 팔로워"
      },
      stats: [
        { value: "10x", label: "더 빠른 콘텐츠 제작" },
        { value: "5", label: "일일 무료 비디오" },
        { value: "50+", label: "AI 음성" },
        { value: "4.8", label: "App Store 평점" }
      ],
      faqs: [
        { question: "Hyreel을 사용하려면 편집 경험이 필요한가요?", answer: "전혀 아닙니다! Hyreel은 모든 기술 수준의 크리에이터를 위해 설계되었습니다. 사진을 업로드하고, 효과를 탭하면 비디오가 준비됩니다. AI가 모든 복잡한 편집을 자동으로 처리합니다." },
        { question: "여러 플랫폼용 콘텐츠를 만들 수 있나요?", answer: "네! Hyreel은 TikTok, Instagram Reels, YouTube Shorts 등에 최적화된 형식으로 내보냅니다. 한 번 만들어 어디서든 게시하세요." },
        { question: "몇 개의 비디오를 만들 수 있나요?", answer: "무료 사용자는 하루 5개의 비디오를 받습니다. Creator 플랜(월 ₩12,900)은 무제한 비디오를 제공—일일 콘텐츠 일정에 완벽합니다." },
        { question: "내 비디오가 다른 사람들과 같아 보일까요?", answer: "아니요! 자신의 사진을 사용하므로 모든 비디오는 귀하의 브랜드에 고유합니다. AI는 귀하의 콘텐츠에 전문적인 모션 효과를 추가합니다." }
      ],
      ctaText: "무료로 제작 시작"
    },
    zh: {
      name: "内容创作者",
      metaTitle: "内容创作者AI视频生成器 | Hyreel",
      metaDescription: "快10倍创建病毒式TikTok、Reels和Shorts。为创作者设计的AI视频特效。无需编辑技能。免费开始。",
      heroHeadline: "无需疲惫就能创作10倍内容",
      heroSubheadline: "专为内容创作者设计的AI视频创作。秒速将照片转换为令人驻足的视频。",
      description: "Hyreel帮助内容创作者在没有编辑负担的情况下制作更多高质量视频内容。",
      painPoints: [
        { icon: "⏰", title: "编辑耗时太长", description: "花3-4小时编辑一个视频，就没有时间做策略、互动或休息了。" },
        { icon: "📉", title: "算法要求持续输出", description: "平台奖励每日发布，但创造这么多高质量内容令人疲惫。" },
        { icon: "💸", title: "买不起专业工具", description: "专业编辑软件要花数百美元，还需要数月学习。" },
        { icon: "🎬", title: "视频创意困在照片中", description: "很棒的内容创意困在你的相机胶卷中，因为拍摄太耗时。" }
      ],
      benefits: [
        { icon: "⚡", title: "秒速创作", description: "上传照片，选择特效，获得视频。曾经需要数小时的事现在只需10秒。" },
        { icon: "📱", title: "随处创作", description: "全功能iOS应用意味着你可以随时随地创作专业视频。" },
        { icon: "🔥", title: "算法优化", description: "专为最大化TikTok、Instagram、YouTube观看时间和参与度而设计的特效。" },
        { icon: "💰", title: "创作者友好定价", description: "免费计划每天5个视频。无限视频每周不到一杯咖啡的价格。" }
      ],
      features: [
        "带电影级运动特效的照片转视频AI",
        "TikTok、Reels、Shorts优化格式",
        "50+种AI配音声音",
        "批量创建内容日历",
        "付费计划无水印",
        "直接导出到社交媒体"
      ],
      useCases: [
        "每日TikTok内容创作",
        "用于互动的Instagram Reels",
        "用于频道增长的YouTube Shorts",
        "幕后内容",
        "产品评测和开箱",
        "旅行和生活方式内容"
      ],
      testimonial: {
        quote: "我从每周发两次变成了每天发。我的粉丝在3个月内增长了5倍。Hyreel是每个创作者都需要的秘密武器。",
        author: "Maya K.",
        role: "TikTok创作者，12万粉丝"
      },
      stats: [
        { value: "10x", label: "更快的内容创作" },
        { value: "5", label: "每日免费视频" },
        { value: "50+", label: "AI声音" },
        { value: "4.8", label: "App Store评分" }
      ],
      faqs: [
        { question: "使用Hyreel需要编辑经验吗？", answer: "完全不需要！Hyreel专为各种技能水平的创作者设计。上传照片，点击特效，视频就准备好了。AI自动处理所有复杂的编辑工作。" },
        { question: "我可以为多个平台创建内容吗？", answer: "可以！Hyreel以优化格式导出到TikTok、Instagram Reels、YouTube Shorts等。一次创建，到处发布。" },
        { question: "我可以创建多少个视频？", answer: "免费用户每天获得5个视频。Creator计划（每月¥68）提供无限视频——非常适合每日内容计划。" },
        { question: "我的视频会和别人的一样吗？", answer: "不会！你使用自己的照片，所以每个视频都是你品牌独有的。AI为你的内容添加专业的运动特效。" }
      ],
      ctaText: "免费开始创作"
    },
  },
};

export function getLocalizedAudienceContent(
  slug: string,
  locale: Locale
): Partial<AudienceTranslation> | null {
  if (locale === "en") return null;
  const translations = audienceTranslations[slug];
  const nonEnLocale = locale as NonEnLocale;
  const fallback = createAudienceFallback(slug, nonEnLocale);
  const translated = translations?.[locale];
  if (!translated) return fallback;
  return fallback ? { ...fallback, ...translated } : translated;
}
