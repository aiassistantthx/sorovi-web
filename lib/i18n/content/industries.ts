import { type Locale } from "@/lib/i18n/config";
import { getIndustryBySlug } from "@/lib/industries";
import {
  localizedName,
  localizedRole,
  localizedStats,
  pageSpecificCopy,
  type NonEnLocale,
} from "./localized-fallbacks";

interface IndustryTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle?: string;
  metaDescription?: string;
  challenges: Array<{ title: string; description: string }>;
  solutions: Array<{ title: string; description: string }>;
  videoTypes: Array<{ title: string; description: string }>;
  benefits: string[];
  stats: Array<{ label: string }>;
  testimonial: { quote: string; author: string; role: string };
  faqs: Array<{ question: string; answer: string }>;
  ctaText: string;
}

type IndustryTranslations = Partial<Record<Locale, Partial<IndustryTranslation>>>;

function createIndustryFallback(
  slug: string,
  locale: NonEnLocale
): Partial<IndustryTranslation> | null {
  const industry = getIndustryBySlug(slug);
  if (!industry) return null;
  const name = localizedName(slug, industry.name, locale);
  const specific = pageSpecificCopy(slug, industry.name, locale);

  return {
    name,
    heroHeadline: specific.heroHeadline,
    heroSubheadline: specific.heroSubheadline,
    metaTitle: specific.metaTitle,
    metaDescription: specific.metaDescription,
    challenges: specific.features,
    solutions: specific.steps,
    videoTypes: specific.features.concat(specific.steps.slice(0, 2)),
    benefits: specific.benefits,
    stats: localizedStats(locale, industry.stats, "industry").map(({ label }) => ({ label })),
    testimonial: {
      quote: specific.description,
      author: industry.testimonial.author,
      role: localizedRole(locale),
    },
    faqs: specific.faqs.concat(specific.faqs.slice(0, 1)),
    ctaText: specific.cta,
  };
}

export const industryTranslations: Record<string, IndustryTranslations> = {
  "real-estate": {
    es: {
      name: "Inmobiliario",
      heroHeadline: "Marketing de Video IA para Inmobiliario",
      heroSubheadline: "Transforma fotos de propiedades en recorridos virtuales impresionantes. Vende propiedades mas rapido con video profesional.",
      metaTitle: "Video IA para Agentes Inmobiliarios | Hyreel",
      metaDescription: "Crea videos impresionantes de propiedades desde fotos de listados. Genera videos inmobiliarios profesionales en segundos.",
      challenges: [
        { title: "Videografia Costosa", description: "Videos profesionales de propiedades cuestan $300-1,000+ por listado, reduciendo margenes de comision." },
        { title: "Listados Sensibles al Tiempo", description: "Mercados calientes se mueven rapido. Esperar videografos significa perder las cruciales primeras 48 horas." },
        { title: "Agenda Ocupada", description: "Entre visitas, open houses y llamadas de clientes, no hay tiempo para coordinar sesiones de video." },
        { title: "Destacar en Linea", description: "Los listados compiten contra cientos de otros. Las fotos estaticas no capturan atencion como el video." }
      ],
      solutions: [
        { title: "Fotos a Tours Instantaneos", description: "Sube fotos de listados y obtiene un tour en video profesional en menos de un minuto. Sin programar, sin esperas." },
        { title: "Efectos de Movimiento Cinematograficos", description: "Zoom Ken Burns, paneos suaves y efectos parallax hacen que cada habitacion luzca impresionante." },
        { title: "Contenido Listo para Redes", description: "Crea videos verticales para Instagram Reels, TikTok y Facebook Stories desde las mismas fotos." },
        { title: "Videos con Tu Marca", description: "Agrega tu logo, informacion de contacto y branding a cada video de propiedad." }
      ],
      videoTypes: [
        { title: "Tours de Propiedad", description: "Videos de recorrido completo desde fotos de listados" },
        { title: "Exhibicion de Habitaciones", description: "Destaca habitaciones especificas con efectos de zoom y paneo" },
        { title: "Caracteristicas Exteriores", description: "Muestra fachada, patios y espacios exteriores" },
        { title: "Destacados del Vecindario", description: "Presenta amenidades locales y estilo de vida" },
        { title: "Presentacion del Agente", description: "Videos de marca personal para listados" },
        { title: "Recien Listado/Vendido", description: "Videos de anuncio para redes sociales" }
      ],
      benefits: [
        "Crea videos de listados el mismo dia, no la proxima semana",
        "Ahorra $300-1,000 por listado en costos de videografia",
        "Genera 3x mas engagement en MLS y Zillow",
        "Destaca con video profesional en cada listado",
        "Crea contenido social que construye tu marca personal",
        "Cierra mas rapido con mejor marketing visual"
      ],
      stats: [
        { label: "Mas consultas con video" },
        { label: "Tiempo de creacion" },
        { label: "Ahorrado por listado" },
        { label: "Mas compartidos en redes" }
      ],
      testimonial: {
        quote: "Antes solo hacia videos para listados de lujo. Ahora cada uno de mis listados tiene un video tour. Mis consultas estan por las nubes.",
        author: "Michael R.",
        role: "Agente Inmobiliario, RE/MAX"
      },
      faqs: [
        { question: "Puedo usar videos de Hyreel en MLS y Zillow?", answer: "Si! Hyreel exporta videos MP4 estandar aceptados en todos los sistemas MLS, Zillow, Realtor.com, Redfin y todas las principales plataformas." },
        { question: "Que calidad de foto necesito?", answer: "Las fotos estandar de listados inmobiliarios funcionan muy bien. Si tienes fotografia profesional, aun mejor." },
        { question: "Puedo agregar mi branding e informacion de contacto?", answer: "Si. Hyreel soporta branding personalizado incluyendo tu logo, nombre, telefono e informacion de correduria." },
        { question: "Cuanto duran los videos de tour de propiedad?", answer: "Tu controlas la duracion. Crea clips de 15 segundos para redes o tours completos de 2-3 minutos." },
        { question: "Es esto mejor que contratar un videografo?", answer: "Para la mayoria de los listados, si. Ahorras cientos de dolares y obtienes resultados inmediatamente." }
      ],
      ctaText: "Crear Videos de Propiedades Gratis"
    },
    de: {
      name: "Immobilien",
      heroHeadline: "KI-Videomarketing fur Immobilien",
      heroSubheadline: "Verwandle Immobilienfotos in beeindruckende virtuelle Rundgange. Verkaufe Immobilien schneller mit professionellem Video.",
      challenges: [
        { title: "Teure Videografie", description: "Professionelle Immobilienvideos kosten 300-1.000+ Euro pro Objekt." },
        { title: "Zeitkritische Angebote", description: "Heisse Markte bewegen sich schnell. Auf Videografen warten bedeutet die ersten 48 Stunden zu verpassen." },
        { title: "Voller Terminkalender", description: "Zwischen Besichtigungen, Open Houses und Kundengesprachen bleibt keine Zeit fur Video-Koordination." },
        { title: "Online Herausstechen", description: "Angebote konkurrieren mit Hunderten anderen. Statische Fotos fesseln nicht wie Video." }
      ],
      solutions: [
        { title: "Fotos zu Tours Sofort", description: "Lade Objektfotos hoch und erhalte einen professionellen Video-Rundgang in unter einer Minute." },
        { title: "Kinematische Bewegungseffekte", description: "Ken Burns Zoom, sanfte Schwenks und Parallax-Effekte lassen jeden Raum beeindruckend aussehen." },
        { title: "Social-Ready Content", description: "Erstelle vertikale Videos fur Instagram Reels, TikTok und Facebook Stories." },
        { title: "Branding Deiner Videos", description: "Fuge dein Logo, Kontaktdaten und Branding zu jedem Immobilienvideo hinzu." }
      ],
      videoTypes: [
        { title: "Immobilien-Rundgange", description: "Komplette Walkthrough-Videos aus Objektfotos" },
        { title: "Raum-Showcases", description: "Hebe spezifische Raume mit Zoom und Schwenk hervor" },
        { title: "Aussenbereich", description: "Zeige Fassade, Garten und Aussenbereiche" },
        { title: "Nachbarschaft-Highlights", description: "Prasentiere lokale Annehmlichkeiten und Lifestyle" },
        { title: "Makler-Vorstellung", description: "Personal Branding Videos fur Objekte" },
        { title: "Neu Gelistet/Verkauft", description: "Ankundigungsvideos fur Social Media" }
      ],
      benefits: [
        "Erstelle Objektvideos am selben Tag",
        "Spare 300-1.000 Euro pro Objekt an Videografiekosten",
        "Generiere 3x mehr Engagement auf Immobilienportalen",
        "Hebe dich mit professionellem Video in jedem Angebot ab",
        "Erstelle Social Content der deine Marke aufbaut",
        "Schliesse schneller mit besserem visuellen Marketing ab"
      ],
      stats: [
        { label: "Mehr Anfragen mit Video" },
        { label: "Video-Erstellungszeit" },
        { label: "Gespart pro Objekt" },
        { label: "Mehr Shares in Social Media" }
      ],
      testimonial: {
        quote: "Fruher machte ich nur Videos fur Luxusobjekte. Jetzt hat jedes meiner Angebote einen Video-Rundgang. Meine Anfragen gehen durch die Decke.",
        author: "Michael R.",
        role: "Immobilienmakler, RE/MAX"
      },
      faqs: [
        { question: "Kann ich Hyreel-Videos auf Immobilienportalen nutzen?", answer: "Ja! Hyreel exportiert Standard-MP4-Videos die auf allen Immobilienportalen akzeptiert werden." },
        { question: "Welche Fotoqualitat brauche ich?", answer: "Standard-Immobilienfotos funktionieren sehr gut. Professionelle Fotografie ist noch besser." },
        { question: "Kann ich mein Branding hinzufugen?", answer: "Ja. Hyreel unterstutzt individuelles Branding mit Logo, Name, Telefon und Maklerinformationen." },
        { question: "Wie lang sind die Immobilien-Rundgangsvideos?", answer: "Du bestimmst die Lange. Erstelle 15-Sekunden-Clips oder 2-3 Minuten komplette Rundgange." },
        { question: "Ist das besser als ein Videograf?", answer: "Fur die meisten Objekte ja. Du sparst Hunderte Euro und bekommst sofortige Ergebnisse." }
      ],
      ctaText: "Immobilienvideos Kostenlos Erstellen"
    },
    fr: {
      name: "Immobilier",
      heroHeadline: "Marketing Video IA pour l'Immobilier",
      heroSubheadline: "Transformez les photos de proprietes en visites virtuelles impressionnantes. Vendez plus vite avec la video professionnelle.",
      challenges: [
        { title: "Videographie Couteuse", description: "Les videos professionnelles coutent 300-1000+ euros par bien." },
        { title: "Annonces Sensibles au Temps", description: "Les marches chauds bougent vite. Attendre les videographes signifie manquer les 48 premieres heures." },
        { title: "Emploi du Temps Charge", description: "Entre les visites et les appels clients, pas de temps pour coordonner les tournages." },
        { title: "Se Demarquer en Ligne", description: "Les annonces rivalisent avec des centaines d'autres. Les photos statiques ne captent pas l'attention comme la video." }
      ],
      solutions: [
        { title: "Photos vers Visites Instantanees", description: "Telechargez des photos et obtenez une visite video professionnelle en moins d'une minute." },
        { title: "Effets de Mouvement Cinematiques", description: "Zoom Ken Burns, panoramiques fluides et effets parallaxe rendent chaque piece impressionnante." },
        { title: "Contenu Pret pour les Reseaux", description: "Creez des videos verticales pour Instagram Reels, TikTok et Facebook Stories." },
        { title: "Videos Personnalisees", description: "Ajoutez votre logo, coordonnees et branding a chaque video de propriete." }
      ],
      videoTypes: [
        { title: "Visites de Proprietes", description: "Videos completes de visite a partir des photos" },
        { title: "Presentations de Pieces", description: "Mettez en valeur des pieces specifiques avec zoom et panoramique" },
        { title: "Caracteristiques Exterieures", description: "Montrez la facade, les jardins et les espaces exterieurs" },
        { title: "Points Forts du Quartier", description: "Presentez les commodites locales et le style de vie" },
        { title: "Presentation de l'Agent", description: "Videos de marque personnelle pour les annonces" },
        { title: "Nouvellement Liste/Vendu", description: "Videos d'annonce pour les reseaux sociaux" }
      ],
      benefits: [
        "Creez des videos d'annonces le jour meme",
        "Economisez 300-1000 euros par annonce en couts de videographie",
        "Generez 3x plus d'engagement sur les portails immobiliers",
        "Demarquez-vous avec une video professionnelle dans chaque annonce",
        "Creez du contenu social qui construit votre marque",
        "Concluez plus vite avec un meilleur marketing visuel"
      ],
      stats: [
        { label: "Plus de demandes avec video" },
        { label: "Temps de creation video" },
        { label: "Economise par annonce" },
        { label: "Plus de partages sur les reseaux" }
      ],
      testimonial: {
        quote: "Avant je ne faisais des videos que pour les biens de luxe. Maintenant chacune de mes annonces a une video. Mes demandes sont au plus haut.",
        author: "Michael R.",
        role: "Agent Immobilier, RE/MAX"
      },
      faqs: [
        { question: "Puis-je utiliser les videos Hyreel sur les portails immobiliers?", answer: "Oui! Hyreel exporte des videos MP4 standard acceptees sur tous les portails immobiliers." },
        { question: "Quelle qualite de photo ai-je besoin?", answer: "Les photos immobilieres standard fonctionnent tres bien. La photographie professionnelle est encore mieux." },
        { question: "Puis-je ajouter mon branding?", answer: "Oui. Hyreel supporte le branding personnalise avec logo, nom, telephone et infos d'agence." },
        { question: "Quelle est la duree des videos de visite?", answer: "Vous controlez la duree. Creez des clips de 15 secondes ou des visites completes de 2-3 minutes." },
        { question: "C'est mieux que d'engager un videographe?", answer: "Pour la plupart des biens, oui. Vous economisez des centaines d'euros et obtenez des resultats immediats." }
      ],
      ctaText: "Creer des Videos Immobilieres Gratuitement"
    },
    pt: {
      name: "Imobiliario",
      heroHeadline: "Marketing de Video IA para Imobiliario",
      heroSubheadline: "Transforme fotos de imoveis em tours virtuais impressionantes. Venda imoveis mais rapido com video profissional.",
      challenges: [
        { title: "Videografia Cara", description: "Videos profissionais de imoveis custam R$1.500-5.000+ por anuncio." },
        { title: "Anuncios Sensiveis ao Tempo", description: "Mercados quentes se movem rapido. Esperar videografos significa perder as primeiras 48 horas." },
        { title: "Agenda Lotada", description: "Entre visitas, open houses e ligacoes de clientes, nao ha tempo para coordenar gravacoes." },
        { title: "Destacar-se Online", description: "Anuncios competem com centenas de outros. Fotos estaticas nao captam atencao como video." }
      ],
      solutions: [
        { title: "Fotos para Tours Instantaneos", description: "Envie fotos de anuncios e receba um tour em video profissional em menos de um minuto." },
        { title: "Efeitos de Movimento Cinematograficos", description: "Zoom Ken Burns, pannings suaves e efeitos parallax fazem cada comodo parecer impressionante." },
        { title: "Conteudo Pronto para Redes", description: "Crie videos verticais para Instagram Reels, TikTok e Facebook Stories." },
        { title: "Videos com Sua Marca", description: "Adicione seu logo, informacoes de contato e branding a cada video de imovel." }
      ],
      videoTypes: [
        { title: "Tours de Imoveis", description: "Videos completos de tour a partir de fotos" },
        { title: "Destaque de Comodos", description: "Destaque comodos especificos com efeitos de zoom e pan" },
        { title: "Caracteristicas Externas", description: "Mostre fachada, jardins e areas externas" },
        { title: "Destaques do Bairro", description: "Apresente amenidades locais e estilo de vida" },
        { title: "Apresentacao do Corretor", description: "Videos de marca pessoal para anuncios" },
        { title: "Recem Listado/Vendido", description: "Videos de anuncio para redes sociais" }
      ],
      benefits: [
        "Crie videos de anuncios no mesmo dia",
        "Economize R$1.500-5.000 por anuncio em custos de videografia",
        "Gere 3x mais engajamento em portais imobiliarios",
        "Destaque-se com video profissional em cada anuncio",
        "Crie conteudo social que constroi sua marca",
        "Feche mais rapido com melhor marketing visual"
      ],
      stats: [
        { label: "Mais consultas com video" },
        { label: "Tempo de criacao" },
        { label: "Economizado por anuncio" },
        { label: "Mais compartilhamentos" }
      ],
      testimonial: {
        quote: "Antes so fazia videos para imoveis de luxo. Agora cada um dos meus anuncios tem um video tour. Minhas consultas estao nas alturas.",
        author: "Michael R.",
        role: "Corretor de Imoveis, RE/MAX"
      },
      faqs: [
        { question: "Posso usar videos do Hyreel em portais imobiliarios?", answer: "Sim! Hyreel exporta videos MP4 padrao aceitos em todos os portais imobiliarios." },
        { question: "Que qualidade de foto preciso?", answer: "Fotos imobiliarias padrao funcionam muito bem. Fotografia profissional e ainda melhor." },
        { question: "Posso adicionar minha marca?", answer: "Sim. Hyreel suporta branding personalizado com logo, nome, telefone e info da imobiliaria." },
        { question: "Qual a duracao dos videos de tour?", answer: "Voce controla a duracao. Crie clips de 15 segundos ou tours completos de 2-3 minutos." },
        { question: "E melhor que contratar um videografo?", answer: "Para a maioria dos imoveis, sim. Voce economiza e obtem resultados imediatos." }
      ],
      ctaText: "Criar Videos de Imoveis Gratis"
    },
    ru: {
      name: "Недвижимость",
      heroHeadline: "AI-Видеомаркетинг для Недвижимости",
      heroSubheadline: "Превращайте фото недвижимости в впечатляющие виртуальные туры. Продавайте быстрее с профессиональным видео.",
      challenges: [
        { title: "Дорогая видеосъемка", description: "Профессиональные видео недвижимости стоят $300-1000+ за объект." },
        { title: "Срочные объявления", description: "Горячие рынки двигаются быстро. Ожидание видеографов означает упущение первых 48 часов." },
        { title: "Плотный график", description: "Между показами, днями открытых дверей и звонками клиентов нет времени на координацию съемок." },
        { title: "Выделиться онлайн", description: "Объявления конкурируют с сотнями других. Статичные фото не привлекают внимание как видео." }
      ],
      solutions: [
        { title: "Из фото в туры мгновенно", description: "Загрузите фото объекта и получите профессиональный видеотур менее чем за минуту." },
        { title: "Кинематографические эффекты", description: "Зум Ken Burns, плавные панорамы и эффекты параллакса делают каждую комнату впечатляющей." },
        { title: "Контент для соцсетей", description: "Создавайте вертикальные видео для Instagram Reels, TikTok и Facebook Stories." },
        { title: "Брендированные видео", description: "Добавляйте свой логотип, контакты и брендинг к каждому видео." }
      ],
      videoTypes: [
        { title: "Туры по объектам", description: "Полные видео-обзоры из фотографий объявлений" },
        { title: "Презентации комнат", description: "Выделяйте отдельные комнаты с эффектами зума и панорамы" },
        { title: "Внешние особенности", description: "Показывайте фасад, двор и внешние пространства" },
        { title: "Особенности района", description: "Представляйте местные удобства и образ жизни" },
        { title: "Презентация агента", description: "Видео для личного бренда" },
        { title: "Новое/Продано", description: "Анонсирующие видео для соцсетей" }
      ],
      benefits: [
        "Создавайте видео объявлений в тот же день",
        "Экономьте $300-1000 за объект на видеосъемке",
        "Получайте в 3 раза больше вовлеченности на порталах недвижимости",
        "Выделяйтесь профессиональным видео в каждом объявлении",
        "Создавайте контент для соцсетей, который строит ваш бренд",
        "Закрывайте сделки быстрее с лучшим визуальным маркетингом"
      ],
      stats: [
        { label: "Больше запросов с видео" },
        { label: "Время создания видео" },
        { label: "Экономия за объект" },
        { label: "Больше репостов в соцсетях" }
      ],
      testimonial: {
        quote: "Раньше я делал видео только для элитных объектов. Теперь у каждого моего объявления есть видеотур. Количество запросов зашкаливает.",
        author: "Михаил Р.",
        role: "Агент по недвижимости, RE/MAX"
      },
      faqs: [
        { question: "Можно использовать видео Hyreel на порталах недвижимости?", answer: "Да! Hyreel экспортирует стандартные MP4 видео, принимаемые на всех порталах недвижимости." },
        { question: "Какое качество фото нужно?", answer: "Стандартные фото недвижимости работают отлично. Профессиональная съемка еще лучше." },
        { question: "Можно добавить свой брендинг?", answer: "Да. Hyreel поддерживает кастомный брендинг с логотипом, именем, телефоном и информацией агентства." },
        { question: "Какая длительность видео туров?", answer: "Вы контролируете длительность. Создавайте 15-секундные клипы или полные туры на 2-3 минуты." },
        { question: "Это лучше, чем нанять видеографа?", answer: "Для большинства объектов да. Вы экономите сотни долларов и получаете результаты мгновенно." }
      ],
      ctaText: "Создать Видео Недвижимости Бесплатно"
    },
    it: {
      name: "Immobiliare",
      heroHeadline: "Video Marketing IA per Immobiliare",
      heroSubheadline: "Trasforma le foto degli immobili in tour virtuali impressionanti. Vendi piu velocemente con video professionali.",
      challenges: [
        { title: "Videografia Costosa", description: "I video professionali costano 300-1.000+ euro per immobile." },
        { title: "Annunci Sensibili al Tempo", description: "I mercati caldi si muovono velocemente. Aspettare i videografi significa perdere le prime 48 ore cruciali." },
        { title: "Agenda Piena", description: "Tra visite, open house e chiamate clienti, non c'e tempo per coordinare riprese video." },
        { title: "Distinguersi Online", description: "Gli annunci competono con centinaia di altri. Le foto statiche non catturano l'attenzione come il video." }
      ],
      solutions: [
        { title: "Foto in Tour Istantanei", description: "Carica le foto dell'immobile e ottieni un tour video professionale in meno di un minuto." },
        { title: "Effetti di Movimento Cinematografici", description: "Zoom Ken Burns, panoramiche fluide ed effetti parallax rendono ogni stanza impressionante." },
        { title: "Contenuto Pronto per i Social", description: "Crea video verticali per Instagram Reels, TikTok e Facebook Stories." },
        { title: "Video con il Tuo Brand", description: "Aggiungi il tuo logo, contatti e branding a ogni video immobiliare." }
      ],
      videoTypes: [
        { title: "Tour degli Immobili", description: "Video completi di walkthrough dalle foto degli annunci" },
        { title: "Showcase delle Stanze", description: "Evidenzia stanze specifiche con effetti zoom e panoramica" },
        { title: "Caratteristiche Esterne", description: "Mostra facciata, giardini e spazi esterni" },
        { title: "Highlights del Quartiere", description: "Presenta servizi locali e stile di vita" },
        { title: "Presentazione dell'Agente", description: "Video di personal branding per gli annunci" },
        { title: "Appena Inserito/Venduto", description: "Video di annuncio per i social media" }
      ],
      benefits: [
        "Crea video degli annunci lo stesso giorno",
        "Risparmia 300-1.000 euro per annuncio sui costi di videografia",
        "Genera 3x piu engagement sui portali immobiliari",
        "Distinguiti con video professionale in ogni annuncio",
        "Crea contenuti social che costruiscono il tuo brand",
        "Chiudi piu velocemente con un marketing visivo migliore"
      ],
      stats: [
        { label: "Piu richieste con video" },
        { label: "Tempo di creazione video" },
        { label: "Risparmiato per annuncio" },
        { label: "Piu condivisioni sui social" }
      ],
      testimonial: {
        quote: "Prima facevo video solo per immobili di lusso. Ora ogni mio annuncio ha un video tour. Le mie richieste sono alle stelle.",
        author: "Michael R.",
        role: "Agente Immobiliare, RE/MAX"
      },
      faqs: [
        { question: "Posso usare i video Hyreel sui portali immobiliari?", answer: "Si! Hyreel esporta video MP4 standard accettati su tutti i portali immobiliari." },
        { question: "Che qualita foto mi serve?", answer: "Le foto immobiliari standard funzionano benissimo. La fotografia professionale e ancora meglio." },
        { question: "Posso aggiungere il mio branding?", answer: "Si. Hyreel supporta branding personalizzato con logo, nome, telefono e info dell'agenzia." },
        { question: "Quanto durano i video tour?", answer: "Tu controlli la durata. Crea clip da 15 secondi o tour completi di 2-3 minuti." },
        { question: "E meglio che assumere un videografo?", answer: "Per la maggior parte degli immobili si. Risparmi centinaia di euro e ottieni risultati immediati." }
      ],
      ctaText: "Crea Video Immobiliari Gratis"
    },
    nl: {
      name: "Vastgoed",
      heroHeadline: "AI Videomarketing voor Vastgoed",
      heroSubheadline: "Verander vastgoedfoto's in indrukwekkende virtuele tours. Verkoop sneller met professionele video.",
      challenges: [
        { title: "Dure Videografie", description: "Professionele vastgoedvideo's kosten 300-1.000+ euro per object." },
        { title: "Tijdgevoelige Aanbiedingen", description: "Hete markten bewegen snel. Wachten op videografen betekent de cruciale eerste 48 uur missen." },
        { title: "Drukke Agenda", description: "Tussen bezichtigingen en klantgesprekken is er geen tijd om video-opnames te coordineren." },
        { title: "Online Opvallen", description: "Aanbiedingen concurreren met honderden andere. Statische foto's trekken niet de aandacht zoals video." }
      ],
      solutions: [
        { title: "Foto's naar Tours Direct", description: "Upload objectfoto's en krijg een professionele videotour in minder dan een minuut." },
        { title: "Cinematische Bewegingseffecten", description: "Ken Burns zoom, soepele pans en parallax-effecten maken elke kamer indrukwekkend." },
        { title: "Social-Ready Content", description: "Maak verticale video's voor Instagram Reels, TikTok en Facebook Stories." },
        { title: "Brand Je Video's", description: "Voeg je logo, contactgegevens en branding toe aan elke vastgoedvideo." }
      ],
      videoTypes: [
        { title: "Object Tours", description: "Complete walkthrough-video's van objectfoto's" },
        { title: "Kamer Showcases", description: "Highlight specifieke kamers met zoom- en pan-effecten" },
        { title: "Buitenkenmerken", description: "Toon gevel, tuinen en buitenruimtes" },
        { title: "Buurt Highlights", description: "Presenteer lokale voorzieningen en levensstijl" },
        { title: "Makelaar Introductie", description: "Personal branding video's voor aanbiedingen" },
        { title: "Net Genoteerd/Verkocht", description: "Aankondigingsvideo's voor social media" }
      ],
      benefits: [
        "Maak objectvideo's dezelfde dag",
        "Bespaar 300-1.000 euro per object aan videografiekosten",
        "Genereer 3x meer engagement op vastgoedportalen",
        "Val op met professionele video in elke aanbieding",
        "Maak social content die je merk bouwt",
        "Sluit sneller af met betere visuele marketing"
      ],
      stats: [
        { label: "Meer aanvragen met video" },
        { label: "Video creatietijd" },
        { label: "Bespaard per object" },
        { label: "Meer shares op social" }
      ],
      testimonial: {
        quote: "Vroeger maakte ik alleen video's voor luxe objecten. Nu heeft elk van mijn aanbiedingen een videotour. Mijn aanvragen gaan door het dak.",
        author: "Michael R.",
        role: "Makelaar, RE/MAX"
      },
      faqs: [
        { question: "Kan ik Hyreel video's gebruiken op vastgoedportalen?", answer: "Ja! Hyreel exporteert standaard MP4 video's die geaccepteerd worden op alle vastgoedportalen." },
        { question: "Welke fotokwaliteit heb ik nodig?", answer: "Standaard vastgoedfoto's werken uitstekend. Professionele fotografie is nog beter." },
        { question: "Kan ik mijn branding toevoegen?", answer: "Ja. Hyreel ondersteunt aangepaste branding met logo, naam, telefoon en kantoorinfo." },
        { question: "Hoe lang zijn de videotours?", answer: "Jij bepaalt de lengte. Maak 15-seconden clips of complete tours van 2-3 minuten." },
        { question: "Is dit beter dan een videograaf inhuren?", answer: "Voor de meeste objecten ja. Je bespaart honderden euro's en krijgt direct resultaat." }
      ],
      ctaText: "Maak Gratis Vastgoedvideo's"
    },
    pl: {
      name: "Nieruchomosci",
      heroHeadline: "Marketing Wideo AI dla Nieruchomosci",
      heroSubheadline: "Zamien zdjecia nieruchomosci w imponujace wirtualne spacery. Sprzedawaj szybciej z profesjonalnym wideo.",
      challenges: [
        { title: "Droga Wideografia", description: "Profesjonalne filmy nieruchomosci kosztuja 1500-5000 zl za obiekt." },
        { title: "Wrazliwe na Czas Oferty", description: "Gorace rynki poruszaja sie szybko. Czekanie na wideografow oznacza utrate pierwszych 48 godzin." },
        { title: "Napiety Harmonogram", description: "Miedzy pokazami i rozmowami z klientami nie ma czasu na koordynacje nagran." },
        { title: "Wyroznic Sie Online", description: "Oferty konkuruja z setkami innych. Statyczne zdjecia nie przyciagaja uwagi jak wideo." }
      ],
      solutions: [
        { title: "Zdjecia do Spaceru Natychmiast", description: "Wgraj zdjecia oferty i otrzymaj profesjonalny spacer wideo w mniej niz minute." },
        { title: "Kinowe Efekty Ruchu", description: "Zoom Ken Burns, plynne panoramy i efekty paralaksy sprawiaja, ze kazdy pokoj wyglada imponujaco." },
        { title: "Tresc Gotowa na Social Media", description: "Twórz pionowe filmy dla Instagram Reels, TikTok i Facebook Stories." },
        { title: "Filmy z Twoim Brandem", description: "Dodaj swoje logo, dane kontaktowe i branding do kazdego filmu nieruchomosci." }
      ],
      videoTypes: [
        { title: "Spacery po Nieruchomosciach", description: "Pelne filmy z przejscia ze zdjec ofert" },
        { title: "Prezentacje Pokoi", description: "Wyroznij konkretne pokoje efektami zoom i panoramy" },
        { title: "Cechy Zewnetrzne", description: "Pokaz fasade, ogrody i przestrzenie zewnetrzne" },
        { title: "Wyrozniki Okolicy", description: "Przedstaw lokalne udogodnienia i styl zycia" },
        { title: "Prezentacja Agenta", description: "Filmy do personal brandingu dla ofert" },
        { title: "Nowo Dodane/Sprzedane", description: "Filmy ogloszeniowe dla social media" }
      ],
      benefits: [
        "Twórz filmy ofert tego samego dnia",
        "Oszczedz 1500-5000 zl za obiekt na kosztach wideografii",
        "Generuj 3x wieksze zaangazowanie na portalach nieruchomosci",
        "Wyroznij sie profesjonalnym wideo w kazdej ofercie",
        "Twórz tresc social, która buduje Twoja marke",
        "Zamykaj szybciej z lepszym marketingiem wizualnym"
      ],
      stats: [
        { label: "Wiecej zapytan z wideo" },
        { label: "Czas tworzenia wideo" },
        { label: "Zaoszczedzone za obiekt" },
        { label: "Wiecej udzialów na social" }
      ],
      testimonial: {
        quote: "Kiedys robilem filmy tylko dla luksusowych nieruchomosci. Teraz kazda moja oferta ma spacer wideo. Moje zapytania przebijaja sufit.",
        author: "Michal R.",
        role: "Agent Nieruchomosci, RE/MAX"
      },
      faqs: [
        { question: "Czy moge uzywac filmów Hyreel na portalach nieruchomosci?", answer: "Tak! Hyreel eksportuje standardowe filmy MP4 akceptowane na wszystkich portalach." },
        { question: "Jaka jakosc zdjec potrzebuje?", answer: "Standardowe zdjecia nieruchomosci dzialaja swietnie. Profesjonalna fotografia jest jeszcze lepsza." },
        { question: "Czy moge dodac swoj branding?", answer: "Tak. Hyreel obsluguje niestandardowy branding z logo, nazwiskiem, telefonem i info agencji." },
        { question: "Jak dlugie sa filmy spacerow?", answer: "Ty kontrolujesz dlugosc. Twórz 15-sekundowe klipy lub pelne spacery 2-3 minutowe." },
        { question: "Czy to lepsze niz zatrudnienie wideografa?", answer: "Dla wiekszosci nieruchomosci tak. Oszczedzasz setki zlotych i dostajesz natychmiastowe wyniki." }
      ],
      ctaText: "Twórz Filmy Nieruchomosci Za Darmo"
    },
    ja: {
      name: "不動産",
      heroHeadline: "不動産のためのAI動画マーケティング",
      heroSubheadline: "物件写真を印象的なバーチャルツアーに変換。プロフェッショナルな動画で早く売却。",
      challenges: [
        { title: "高価なビデオ撮影", description: "プロの物件動画は1件あたり3万-10万円以上かかる。" },
        { title: "時間に敏感な物件", description: "ホットな市場は速く動く。ビデオグラファーを待つことは重要な最初の48時間を逃すことを意味する。" },
        { title: "忙しいスケジュール", description: "内覧、オープンハウス、顧客電話の間にビデオ撮影を調整する時間がない。" },
        { title: "オンラインで目立つ", description: "物件は何百もの他の物件と競合する。静止画は動画のように注目を集めない。" }
      ],
      solutions: [
        { title: "写真から即座にツアーへ", description: "物件写真をアップロードし、1分以内にプロのビデオツアーを取得。予約不要、待ち時間なし。" },
        { title: "シネマティックなモーションエフェクト", description: "Ken Burnsズーム、スムーズなパン、パララックスエフェクトでどの部屋も印象的に。" },
        { title: "SNS対応コンテンツ", description: "Instagram Reels、TikTok、Facebook Stories用の縦型動画を作成。" },
        { title: "ブランド入り動画", description: "すべての物件動画にロゴ、連絡先、ブランディングを追加。" }
      ],
      videoTypes: [
        { title: "物件ツアー", description: "物件写真からの完全なウォークスルー動画" },
        { title: "部屋のショーケース", description: "ズームとパンエフェクトで特定の部屋を強調" },
        { title: "外観の特徴", description: "外観、庭、屋外スペースを紹介" },
        { title: "周辺環境のハイライト", description: "地域の設備やライフスタイルを紹介" },
        { title: "エージェント紹介", description: "物件用のパーソナルブランディング動画" },
        { title: "新規/成約", description: "SNS用のお知らせ動画" }
      ],
      benefits: [
        "当日中に物件動画を作成",
        "物件あたり3万-10万円のビデオ撮影費を節約",
        "不動産ポータルで3倍のエンゲージメントを生成",
        "すべての物件でプロの動画で差別化",
        "ブランドを構築するSNSコンテンツを作成",
        "より良いビジュアルマーケティングで早くクロージング"
      ],
      stats: [
        { label: "動画で問い合わせ増加" },
        { label: "動画作成時間" },
        { label: "物件あたりの節約額" },
        { label: "SNSでのシェア増加" }
      ],
      testimonial: {
        quote: "以前は高級物件だけに動画を作っていました。今ではすべての物件にビデオツアーがあります。問い合わせが急増しています。",
        author: "マイケル R.",
        role: "不動産エージェント、RE/MAX"
      },
      faqs: [
        { question: "Hyreel動画を不動産ポータルで使用できますか？", answer: "はい！Hyreelは全ての不動産ポータルで受け入れられる標準MP4動画をエクスポートします。" },
        { question: "どのような写真品質が必要ですか？", answer: "標準的な不動産写真で十分です。プロの写真撮影ならさらに良い結果が得られます。" },
        { question: "ブランディングを追加できますか？", answer: "はい。Hyreelはロゴ、名前、電話番号、会社情報を含むカスタムブランディングをサポートします。" },
        { question: "物件ツアー動画の長さはどのくらいですか？", answer: "長さはあなたがコントロールします。15秒のクリップから2-3分のフルツアーまで作成できます。" },
        { question: "ビデオグラファーを雇うより良いですか？", answer: "ほとんどの物件ではそうです。数万円を節約し、即座に結果を得られます。" }
      ],
      ctaText: "無料で物件動画を作成"
    },
    ko: {
      name: "부동산",
      heroHeadline: "부동산을 위한 AI 비디오 마케팅",
      heroSubheadline: "부동산 사진을 인상적인 가상 투어로 전환. 전문 비디오로 더 빠르게 판매.",
      challenges: [
        { title: "비싼 비디오 촬영", description: "전문 부동산 비디오는 매물당 30만-100만원 이상 소요." },
        { title: "시간에 민감한 매물", description: "핫한 시장은 빠르게 움직임. 비디오그래퍼를 기다리면 중요한 첫 48시간을 놓침." },
        { title: "바쁜 일정", description: "집 보여주기, 오픈하우스, 고객 전화 사이에 비디오 촬영 조정할 시간이 없음." },
        { title: "온라인에서 눈에 띄기", description: "매물은 수백 개의 다른 것들과 경쟁. 정적인 사진은 비디오처럼 주목을 끌지 못함." }
      ],
      solutions: [
        { title: "사진에서 투어로 즉시", description: "매물 사진을 업로드하고 1분 이내에 전문 비디오 투어를 받으세요. 예약 불필요, 대기 없음." },
        { title: "시네마틱 모션 효과", description: "Ken Burns 줌, 부드러운 팬, 패럴랙스 효과로 모든 방을 인상적으로." },
        { title: "SNS 대응 콘텐츠", description: "Instagram Reels, TikTok, Facebook Stories용 세로 비디오 제작." },
        { title: "브랜드 비디오", description: "모든 부동산 비디오에 로고, 연락처, 브랜딩 추가." }
      ],
      videoTypes: [
        { title: "부동산 투어", description: "매물 사진에서 완전한 워크스루 비디오" },
        { title: "방 쇼케이스", description: "줌과 팬 효과로 특정 방 강조" },
        { title: "외부 특징", description: "외관, 정원, 야외 공간 소개" },
        { title: "동네 하이라이트", description: "지역 편의시설과 라이프스타일 소개" },
        { title: "에이전트 소개", description: "매물용 개인 브랜딩 비디오" },
        { title: "신규/계약완료", description: "SNS용 공지 비디오" }
      ],
      benefits: [
        "당일 매물 비디오 제작",
        "매물당 30만-100만원의 비디오 촬영 비용 절약",
        "부동산 포털에서 3배 더 많은 참여 생성",
        "모든 매물에서 전문 비디오로 차별화",
        "브랜드를 구축하는 SNS 콘텐츠 제작",
        "더 나은 비주얼 마케팅으로 빠른 클로징"
      ],
      stats: [
        { label: "비디오로 문의 증가" },
        { label: "비디오 제작 시간" },
        { label: "매물당 절약액" },
        { label: "SNS 공유 증가" }
      ],
      testimonial: {
        quote: "예전에는 고급 매물에만 비디오를 만들었습니다. 이제 모든 매물에 비디오 투어가 있습니다. 문의가 폭주하고 있습니다.",
        author: "마이클 R.",
        role: "부동산 에이전트, RE/MAX"
      },
      faqs: [
        { question: "Hyreel 비디오를 부동산 포털에서 사용할 수 있나요?", answer: "네! Hyreel은 모든 부동산 포털에서 수용되는 표준 MP4 비디오를 내보냅니다." },
        { question: "어떤 사진 품질이 필요한가요?", answer: "표준 부동산 사진으로 충분합니다. 전문 사진이면 더 좋은 결과를 얻을 수 있습니다." },
        { question: "브랜딩을 추가할 수 있나요?", answer: "네. Hyreel은 로고, 이름, 전화번호, 회사 정보를 포함한 커스텀 브랜딩을 지원합니다." },
        { question: "부동산 투어 비디오의 길이는 얼마나 되나요?", answer: "길이는 당신이 조절합니다. 15초 클립부터 2-3분 풀 투어까지 제작 가능." },
        { question: "비디오그래퍼를 고용하는 것보다 나은가요?", answer: "대부분의 매물에서 그렇습니다. 수십만원을 절약하고 즉시 결과를 얻을 수 있습니다." }
      ],
      ctaText: "무료로 부동산 비디오 만들기"
    },
    zh: {
      name: "房地产",
      heroHeadline: "房地产AI视频营销",
      heroSubheadline: "将房产照片转换为令人印象深刻的虚拟导览。用专业视频更快销售。",
      challenges: [
        { title: "昂贵的视频拍摄", description: "专业房产视频每套500-2000美元以上。" },
        { title: "时间敏感的房源", description: "热门市场动作快。等待摄像师意味着错过关键的前48小时。" },
        { title: "繁忙的日程", description: "在看房、开放日和客户电话之间，没有时间协调视频拍摄。" },
        { title: "在线脱颖而出", description: "房源与数百个其他房源竞争。静态照片不如视频吸引注意力。" }
      ],
      solutions: [
        { title: "照片即刻变导览", description: "上传房源照片，不到一分钟获得专业视频导览。无需预约，无需等待。" },
        { title: "电影级动态效果", description: "Ken Burns缩放、平滑平移和视差效果让每个房间都令人印象深刻。" },
        { title: "社交媒体就绪内容", description: "为Instagram Reels、TikTok和Facebook Stories创建竖版视频。" },
        { title: "品牌化视频", description: "为每个房产视频添加您的logo、联系方式和品牌。" }
      ],
      videoTypes: [
        { title: "房产导览", description: "从房源照片制作完整的走访视频" },
        { title: "房间展示", description: "用缩放和平移效果突出特定房间" },
        { title: "外部特点", description: "展示外观、花园和室外空间" },
        { title: "社区亮点", description: "展示当地设施和生活方式" },
        { title: "经纪人介绍", description: "房源用个人品牌视频" },
        { title: "新上/已售", description: "社交媒体公告视频" }
      ],
      benefits: [
        "当天制作房源视频",
        "每套房源节省500-2000美元的视频拍摄费",
        "在房产网站上产生3倍的互动",
        "在每个房源中以专业视频脱颖而出",
        "创建建立品牌的社交内容",
        "用更好的视觉营销更快成交"
      ],
      stats: [
        { label: "视频带来更多咨询" },
        { label: "视频制作时间" },
        { label: "每套房源节省" },
        { label: "社交分享增加" }
      ],
      testimonial: {
        quote: "以前我只为豪华房产制作视频。现在我的每个房源都有视频导览。我的咨询量暴增。",
        author: "Michael R.",
        role: "房产经纪人，RE/MAX"
      },
      faqs: [
        { question: "可以在房产网站上使用Hyreel视频吗？", answer: "可以！Hyreel导出所有房产网站都接受的标准MP4视频。" },
        { question: "需要什么照片质量？", answer: "标准房产照片效果很好。专业摄影会更好。" },
        { question: "可以添加我的品牌吗？", answer: "可以。Hyreel支持包含logo、姓名、电话和公司信息的自定义品牌。" },
        { question: "房产导览视频有多长？", answer: "您控制长度。制作15秒短片或2-3分钟完整导览。" },
        { question: "这比雇摄像师更好吗？", answer: "对大多数房产来说是的。您节省数百美元并立即获得结果。" }
      ],
      ctaText: "免费创建房产视频"
    }
  },
  "e-commerce": {
    es: {
      name: "E-commerce",
      heroHeadline: "Marketing de Video IA para E-commerce",
      heroSubheadline: "Convierte fotos de productos en videos que venden. Crea exhibiciones profesionales de productos en segundos.",
      metaTitle: "Marketing de Video IA para E-commerce | Hyreel",
      metaDescription: "Crea videos de productos que venden. Transforma fotos en videos impactantes para Amazon, Shopify y Etsy. Aumenta conversiones un 30%.",
      challenges: [
        { title: "Altos Costos de Produccion", description: "Los videos profesionales cuestan $500-2,000 cada uno, imposible cubrir todo el catalogo." },
        { title: "Entrega Lenta", description: "La produccion tradicional toma dias o semanas, retrasando lanzamientos y campanas." },
        { title: "Bajas Tasas de Conversion", description: "Listados con solo imagenes convierten 20-30% menos que los que tienen video." },
        { title: "Presion Competitiva", description: "Competidores con video ganan mas Buy Box y posicionan mejor en busquedas." }
      ],
      solutions: [
        { title: "Foto a Video en Segundos", description: "Sube fotos y obtiene videos profesionales con efectos cinematograficos al instante." },
        { title: "Escala en Tu Catalogo", description: "Crea videos para cientos de SKUs rapidamente. Cubre todo tu inventario." },
        { title: "Multiples Estilos", description: "Zoom, orbitas 360, parallax -- elige el estilo que mejor vende tus productos." },
        { title: "Exportacion Directa", description: "Exporta optimizado para Amazon, Shopify, eBay, TikTok Shop y mas." }
      ],
      videoTypes: [
        { title: "Exhibicion de Producto", description: "Rotacion 360 y zoom para destacar detalles" },
        { title: "Videos Lifestyle", description: "Productos en contexto con movimiento y atmosfera" },
        { title: "Antes/Despues", description: "Muestra transformaciones y resultados" },
        { title: "Estilo Unboxing", description: "Crea emocion alrededor del empaque" },
        { title: "Tamano y Escala", description: "Ayuda a entender dimensiones del producto" },
        { title: "Destacar Caracteristicas", description: "Zoom en caracteristicas especificas" }
      ],
      benefits: [
        "Aumenta conversiones hasta 30% con listados en video",
        "Cubre todo tu catalogo de forma economica",
        "Lanza productos con video desde el dia uno",
        "Gana mas Buy Box en Amazon",
        "Reduce devoluciones con mejor visualizacion",
        "Destaca de competidores con contenido profesional"
      ],
      stats: [
        { label: "Aumento Promedio Conversion" },
        { label: "Compradores prefieren video" },
        { label: "Tiempo creacion video" },
        { label: "Mas barato que estudios" }
      ],
      testimonial: {
        quote: "Pasamos de tener videos en 5% de listados a 100% en un fin de semana. La conversion subio 24% el primer mes.",
        author: "Sarah M.",
        role: "Propietaria Tienda Shopify, 500+ SKUs"
      },
      faqs: [
        { question: "Que plataformas soportan videos de Hyreel?", answer: "Los videos funcionan en todas las plataformas principales incluyendo Amazon, Shopify, Etsy, eBay, WooCommerce. Se exportan como MP4 estandar." },
        { question: "Puedo crear videos para todo mi catalogo?", answer: "Si. Hyreel esta disenado para escalar. Muchos vendedores crean videos para cientos de SKUs en un solo dia." },
        { question: "Que fotos funcionan mejor?", answer: "Fotos claras y bien iluminadas sobre fondos blancos o limpios. La fotografia de producto estandar produce excelentes resultados." },
        { question: "Los videos realmente aumentan ventas?", answer: "Si. Estudios muestran que listados con video convierten 20-30% mas. El video tambien reduce devoluciones." },
        { question: "Como subo videos a Amazon?", answer: "Exporta desde Hyreel y sube a Seller Central > Manage Inventory > Edit > Product Videos. Hyreel exporta en el formato requerido." }
      ],
      ctaText: "Crear Videos de Productos Gratis"
    },
    de: {
      name: "E-Commerce",
      heroHeadline: "KI-Videomarketing fur E-Commerce",
      heroSubheadline: "Verwandle Produktfotos in verkaufsfordernde Videos. Erstelle professionelle Produktprasentationen in Sekunden.",
      metaTitle: "KI-Videomarketing fur E-Commerce | Hyreel",
      metaDescription: "Erstelle Produktvideos die verkaufen. Transformiere Fotos in Scroll-stoppende Videos fur Amazon, Shopify und Etsy. Steigere Conversions um 30%.",
      challenges: [
        { title: "Hohe Produktionskosten", description: "Professionelle Videos kosten 500-2.000 Euro pro Stuck, unmoglich fur den gesamten Katalog." },
        { title: "Langsame Lieferung", description: "Traditionelle Produktion dauert Tage oder Wochen, verzogert Launches und Kampagnen." },
        { title: "Niedrigere Conversion-Raten", description: "Listings nur mit Bildern konvertieren 20-30% weniger als mit Video." },
        { title: "Wettbewerbsdruck", description: "Konkurrenten mit Video gewinnen haufiger die Buy Box und ranken hoher." }
      ],
      solutions: [
        { title: "Foto zu Video in Sekunden", description: "Lade Fotos hoch und erhalte professionelle Videos mit kinematischen Effekten sofort." },
        { title: "Skaliere uber deinen Katalog", description: "Erstelle Videos fur Hunderte SKUs schnell. Decke dein gesamtes Inventar ab." },
        { title: "Mehrere Video-Stile", description: "Zoom, 360 Orbits, Parallax -- wahle den Stil der am besten verkauft." },
        { title: "Direkter Plattform-Export", description: "Exportiere optimiert fur Amazon, Shopify, eBay, TikTok Shop und mehr." }
      ],
      videoTypes: [
        { title: "Produktprasentation", description: "360 Rotation und Zoom fur Produktdetails" },
        { title: "Lifestyle-Videos", description: "Produkte im Kontext mit Bewegung und Atmosphare" },
        { title: "Vorher/Nachher", description: "Zeige Produkttransformationen und Ergebnisse" },
        { title: "Unboxing-Stil", description: "Erzeuge Spannung um die Verpackung" },
        { title: "Grosse und Massstab", description: "Hilf Kunden Produktdimensionen zu verstehen" },
        { title: "Feature-Highlights", description: "Zoome auf spezifische Produktfeatures" }
      ],
      benefits: [
        "Steigere Conversion-Raten um bis zu 30% mit Video-Listings",
        "Decke deinen gesamten Katalog kostengunstig ab",
        "Launche neue Produkte vom ersten Tag an mit Video",
        "Gewinne mehr Buy Box Platzierungen auf Amazon",
        "Reduziere Retouren durch bessere Produktvisualisierung",
        "Hebe dich von Wettbewerbern mit professionellem Content ab"
      ],
      stats: [
        { label: "Durchschn. Conversion-Steigerung" },
        { label: "Kaufer bevorzugen Video" },
        { label: "Video-Erstellungszeit" },
        { label: "Gunstiger als Studios" }
      ],
      testimonial: {
        quote: "Wir gingen von Videos auf 5% unserer Listings zu 100% an einem Wochenende. Unsere Conversion stieg im ersten Monat um 24%.",
        author: "Sarah M.",
        role: "Shopify Shop Inhaberin, 500+ SKUs"
      },
      faqs: [
        { question: "Welche Plattformen unterstutzen Hyreel-Videos?", answer: "Videos funktionieren auf allen grossen Plattformen wie Amazon, Shopify, Etsy, eBay, WooCommerce. Export als Standard-MP4." },
        { question: "Kann ich Videos fur meinen gesamten Katalog erstellen?", answer: "Ja! Hyreel ist fur Skalierung gebaut. Viele Verkaufer erstellen Videos fur Hunderte SKUs an einem Tag." },
        { question: "Welche Fotos funktionieren am besten?", answer: "Klare, gut beleuchtete Fotos auf weissem oder sauberem Hintergrund. Standard-Produktfotografie liefert exzellente Ergebnisse." },
        { question: "Steigern Produktvideos wirklich den Umsatz?", answer: "Ja. Studien zeigen dass Listings mit Video 20-30% hoher konvertieren. Video reduziert auch Retouren." },
        { question: "Wie lade ich Videos auf Amazon hoch?", answer: "Exportiere aus Hyreel und lade in Seller Central hoch. Hyreel exportiert automatisch im Amazon-Format." }
      ],
      ctaText: "Produktvideos Kostenlos Erstellen"
    },
    fr: {
      name: "E-commerce",
      heroHeadline: "Marketing Video IA pour E-commerce",
      heroSubheadline: "Transformez les photos de produits en videos qui vendent. Creez des presentations professionnelles en secondes.",
      metaTitle: "Marketing Video IA pour E-commerce | Hyreel",
      metaDescription: "Creez des videos de produits qui vendent. Transformez les photos en videos captivantes pour Amazon, Shopify et Etsy. Augmentez les conversions de 30%.",
      challenges: [
        { title: "Couts de Production Eleves", description: "Les videos professionnelles coutent 500-2000 euros chacune, impossible de couvrir tout le catalogue." },
        { title: "Livraison Lente", description: "La production traditionnelle prend des jours ou semaines, retardant les lancements." },
        { title: "Taux de Conversion Plus Bas", description: "Les annonces avec uniquement des images convertissent 20-30% de moins que celles avec video." },
        { title: "Pression Concurrentielle", description: "Les concurrents avec video gagnent plus de Buy Box et sont mieux classes." }
      ],
      solutions: [
        { title: "Photo vers Video en Secondes", description: "Telechargez des photos et obtenez des videos professionnelles avec des effets cinematographiques instantanement." },
        { title: "Passez a l'Echelle", description: "Creez des videos pour des centaines de SKUs rapidement. Couvrez tout votre inventaire." },
        { title: "Styles Multiples", description: "Zoom, orbites 360, parallax -- choisissez le style qui vend le mieux." },
        { title: "Export Direct Plateforme", description: "Exportez optimise pour Amazon, Shopify, eBay, TikTok Shop et plus." }
      ],
      videoTypes: [
        { title: "Presentation Produit", description: "Rotation 360 et effets de zoom pour les details" },
        { title: "Videos Lifestyle", description: "Produits en contexte avec mouvement et atmosphere" },
        { title: "Avant/Apres", description: "Montrez les transformations et resultats" },
        { title: "Style Unboxing", description: "Creez de l'excitation autour de l'emballage" },
        { title: "Taille et Echelle", description: "Aidez les clients a comprendre les dimensions" },
        { title: "Points Forts", description: "Zoomez sur des caracteristiques specifiques" }
      ],
      benefits: [
        "Augmentez les conversions jusqu'a 30% avec les annonces video",
        "Couvrez tout votre catalogue de maniere economique",
        "Lancez de nouveaux produits avec video des le premier jour",
        "Gagnez plus de Buy Box sur Amazon",
        "Reduisez les retours avec une meilleure visualisation",
        "Demarquez-vous des concurrents avec du contenu professionnel"
      ],
      stats: [
        { label: "Augmentation Moy. Conversion" },
        { label: "Acheteurs preferent la video" },
        { label: "Temps de creation video" },
        { label: "Moins cher que les studios" }
      ],
      testimonial: {
        quote: "Nous sommes passes de videos sur 5% de nos annonces a 100% en un week-end. Notre conversion a augmente de 24% le premier mois.",
        author: "Sarah M.",
        role: "Proprietaire Boutique Shopify, 500+ SKUs"
      },
      faqs: [
        { question: "Quelles plateformes supportent les videos Hyreel?", answer: "Les videos fonctionnent sur toutes les grandes plateformes incluant Amazon, Shopify, Etsy, eBay, WooCommerce. Export en MP4 standard." },
        { question: "Puis-je creer des videos pour tout mon catalogue?", answer: "Oui! Hyreel est concu pour l'echelle. Beaucoup de vendeurs creent des videos pour des centaines de SKUs en une journee." },
        { question: "Quelles photos fonctionnent le mieux?", answer: "Photos claires et bien eclairees sur fond blanc ou propre. La photographie de produit standard donne d'excellents resultats." },
        { question: "Les videos augmentent-elles vraiment les ventes?", answer: "Oui. Les etudes montrent que les annonces avec video convertissent 20-30% de plus. La video reduit aussi les retours." },
        { question: "Comment telecharger des videos sur Amazon?", answer: "Exportez depuis Hyreel et telechargez sur Seller Central. Hyreel exporte automatiquement au format Amazon." }
      ],
      ctaText: "Creer des Videos Produits Gratuitement"
    },
    pt: {
      name: "E-commerce",
      heroHeadline: "Marketing de Video IA para E-commerce",
      heroSubheadline: "Transforme fotos de produtos em videos que vendem. Crie apresentacoes profissionais em segundos.",
      metaTitle: "Marketing de Video IA para E-commerce | Hyreel",
      metaDescription: "Crie videos de produtos que vendem. Transforme fotos em videos impactantes para Amazon, Shopify e Etsy. Aumente conversoes em 30%.",
      challenges: [
        { title: "Altos Custos de Producao", description: "Videos profissionais custam $500-2.000 cada, impossivel cobrir todo o catalogo." },
        { title: "Entrega Lenta", description: "Producao tradicional leva dias ou semanas, atrasando lancamentos e campanhas." },
        { title: "Taxas de Conversao Mais Baixas", description: "Anuncios apenas com imagens convertem 20-30% menos que com video." },
        { title: "Pressao Competitiva", description: "Concorrentes com video ganham mais Buy Box e posicionam melhor nas buscas." }
      ],
      solutions: [
        { title: "Foto para Video em Segundos", description: "Envie fotos e obtenha videos profissionais com efeitos cinematograficos instantaneamente." },
        { title: "Escale em Seu Catalogo", description: "Crie videos para centenas de SKUs rapidamente. Cubra todo seu inventario." },
        { title: "Multiplos Estilos", description: "Zoom, orbitas 360, parallax -- escolha o estilo que melhor vende seus produtos." },
        { title: "Exportacao Direta", description: "Exporte otimizado para Amazon, Shopify, eBay, TikTok Shop e mais." }
      ],
      videoTypes: [
        { title: "Vitrine de Produto", description: "Rotacao 360 e efeitos de zoom para detalhes" },
        { title: "Videos Lifestyle", description: "Produtos em contexto com movimento e atmosfera" },
        { title: "Antes/Depois", description: "Mostre transformacoes e resultados" },
        { title: "Estilo Unboxing", description: "Crie empolgacao ao redor da embalagem" },
        { title: "Tamanho e Escala", description: "Ajude clientes a entender dimensoes" },
        { title: "Destaques de Recursos", description: "Zoom em recursos especificos do produto" }
      ],
      benefits: [
        "Aumente conversoes em ate 30% com anuncios em video",
        "Cubra todo seu catalogo de forma economica",
        "Lance novos produtos com video desde o primeiro dia",
        "Ganhe mais Buy Box na Amazon",
        "Reduza devolucoes com melhor visualizacao",
        "Destaque-se dos concorrentes com conteudo profissional"
      ],
      stats: [
        { label: "Aumento Medio Conversao" },
        { label: "Compradores preferem video" },
        { label: "Tempo de criacao do video" },
        { label: "Mais barato que estudios" }
      ],
      testimonial: {
        quote: "Passamos de ter videos em 5% dos anuncios para 100% em um fim de semana. A conversao subiu 24% no primeiro mes.",
        author: "Sarah M.",
        role: "Proprietaria Loja Shopify, 500+ SKUs"
      },
      faqs: [
        { question: "Quais plataformas suportam videos do Hyreel?", answer: "Videos funcionam em todas as principais plataformas incluindo Amazon, Shopify, Etsy, eBay, WooCommerce. Exportacao como MP4 padrao." },
        { question: "Posso criar videos para todo meu catalogo?", answer: "Sim! Hyreel foi feito para escalar. Muitos vendedores criam videos para centenas de SKUs em um dia." },
        { question: "Quais fotos funcionam melhor?", answer: "Fotos claras e bem iluminadas sobre fundos brancos ou limpos. Fotografia de produto padrao produz excelentes resultados." },
        { question: "Videos de produtos realmente aumentam vendas?", answer: "Sim. Estudos mostram que anuncios com video convertem 20-30% mais. Video tambem reduz devolucoes." },
        { question: "Como envio videos para Amazon?", answer: "Exporte do Hyreel e envie no Seller Central. Hyreel exporta automaticamente no formato da Amazon." }
      ],
      ctaText: "Criar Videos de Produtos Gratis"
    },
    ru: {
      name: "Электронная коммерция",
      heroHeadline: "AI-Видеомаркетинг для E-commerce",
      heroSubheadline: "Превращайте фото товаров в продающие видео. Создавайте профессиональные презентации за секунды.",
      metaTitle: "AI-Видеомаркетинг для E-commerce | Hyreel",
      metaDescription: "Создавайте видео товаров, которые продают. Превращайте фото в захватывающие видео для Amazon, Shopify и Etsy. Увеличьте конверсию на 30%.",
      challenges: [
        { title: "Высокие затраты на производство", description: "Профессиональные видео стоят $500-2000 каждое, невозможно покрыть весь каталог." },
        { title: "Медленные сроки", description: "Традиционное производство занимает дни или недели, задерживая запуски и кампании." },
        { title: "Низкая конверсия", description: "Листинги только с фото конвертируют на 20-30% хуже, чем с видео." },
        { title: "Давление конкурентов", description: "Конкуренты с видео чаще выигрывают Buy Box и лучше ранжируются." }
      ],
      solutions: [
        { title: "Из фото в видео за секунды", description: "Загрузите фото и получите профессиональные видео с кинематографическими эффектами мгновенно." },
        { title: "Масштабируйтесь по каталогу", description: "Создавайте видео для сотен SKU быстро. Покройте весь инвентарь." },
        { title: "Множество стилей", description: "Зум, 360 орбиты, параллакс -- выберите стиль, который лучше продает." },
        { title: "Прямой экспорт", description: "Экспортируйте оптимизированно для Amazon, Shopify, eBay, TikTok Shop и других." }
      ],
      videoTypes: [
        { title: "Презентация товара", description: "360 вращение и зум для деталей товара" },
        { title: "Lifestyle видео", description: "Товары в контексте с движением и атмосферой" },
        { title: "До/После", description: "Показывайте трансформации и результаты" },
        { title: "Стиль анбоксинг", description: "Создавайте волнение вокруг упаковки" },
        { title: "Размер и масштаб", description: "Помогайте покупателям понять размеры" },
        { title: "Выделение особенностей", description: "Зум на конкретные характеристики товара" }
      ],
      benefits: [
        "Увеличьте конверсию до 30% с видео-листингами",
        "Покройте весь каталог экономично",
        "Запускайте новые товары с видео с первого дня",
        "Выигрывайте больше Buy Box на Amazon",
        "Сокращайте возвраты с лучшей визуализацией",
        "Выделяйтесь среди конкурентов профессиональным контентом"
      ],
      stats: [
        { label: "Средний рост конверсии" },
        { label: "Покупатели предпочитают видео" },
        { label: "Время создания видео" },
        { label: "Дешевле студий" }
      ],
      testimonial: {
        quote: "Мы перешли от видео на 5% листингов к 100% за выходные. Конверсия выросла на 24% в первый месяц.",
        author: "Сара М.",
        role: "Владелица магазина Shopify, 500+ SKU"
      },
      faqs: [
        { question: "Какие платформы поддерживают видео Hyreel?", answer: "Видео работают на всех основных платформах включая Amazon, Shopify, Etsy, eBay, WooCommerce. Экспорт в стандартном MP4." },
        { question: "Могу ли я создать видео для всего каталога?", answer: "Да! Hyreel создан для масштабирования. Многие продавцы создают видео для сотен SKU за день." },
        { question: "Какие фото работают лучше всего?", answer: "Четкие, хорошо освещенные фото на белом или чистом фоне. Стандартная товарная съемка дает отличные результаты." },
        { question: "Видео товаров действительно увеличивают продажи?", answer: "Да. Исследования показывают, что листинги с видео конвертируют на 20-30% лучше. Видео также снижает возвраты." },
        { question: "Как загрузить видео на Amazon?", answer: "Экспортируйте из Hyreel и загрузите в Seller Central. Hyreel автоматически экспортирует в формате Amazon." }
      ],
      ctaText: "Создать Видео Товаров Бесплатно"
    },
    it: {
      name: "E-commerce",
      heroHeadline: "Video Marketing IA per E-commerce",
      heroSubheadline: "Trasforma le foto dei prodotti in video che vendono. Crea presentazioni professionali in pochi secondi.",
      metaTitle: "Video Marketing IA per E-commerce | Hyreel",
      metaDescription: "Crea video di prodotti che vendono. Trasforma le foto in video accattivanti per Amazon, Shopify ed Etsy. Aumenta le conversioni del 30%.",
      challenges: [
        { title: "Alti Costi di Produzione", description: "I video professionali costano 500-2.000 euro ciascuno, impossibile coprire l'intero catalogo." },
        { title: "Consegna Lenta", description: "La produzione tradizionale richiede giorni o settimane, ritardando lanci e campagne." },
        { title: "Tassi di Conversione Piu Bassi", description: "Gli annunci con sole immagini convertono il 20-30% in meno rispetto a quelli con video." },
        { title: "Pressione Competitiva", description: "I concorrenti con video vincono piu Buy Box e si posizionano meglio nelle ricerche." }
      ],
      solutions: [
        { title: "Da Foto a Video in Secondi", description: "Carica le foto e ottieni video professionali con effetti cinematografici istantaneamente." },
        { title: "Scala su Tutto il Catalogo", description: "Crea video per centinaia di SKU rapidamente. Copri tutto il tuo inventario." },
        { title: "Stili Multipli", description: "Zoom, orbite 360, parallax -- scegli lo stile che vende meglio i tuoi prodotti." },
        { title: "Esportazione Diretta", description: "Esporta ottimizzato per Amazon, Shopify, eBay, TikTok Shop e altro." }
      ],
      videoTypes: [
        { title: "Vetrina Prodotto", description: "Rotazione 360 ed effetti zoom per i dettagli" },
        { title: "Video Lifestyle", description: "Prodotti nel contesto con movimento e atmosfera" },
        { title: "Prima/Dopo", description: "Mostra trasformazioni e risultati" },
        { title: "Stile Unboxing", description: "Crea entusiasmo intorno alla confezione" },
        { title: "Dimensioni e Scala", description: "Aiuta i clienti a capire le dimensioni" },
        { title: "Punti di Forza", description: "Zoom su caratteristiche specifiche del prodotto" }
      ],
      benefits: [
        "Aumenta le conversioni fino al 30% con annunci video",
        "Copri tutto il catalogo in modo conveniente",
        "Lancia nuovi prodotti con video dal primo giorno",
        "Vinci piu Buy Box su Amazon",
        "Riduci i resi con migliore visualizzazione",
        "Distinguiti dai concorrenti con contenuti professionali"
      ],
      stats: [
        { label: "Aumento Medio Conversione" },
        { label: "Acquirenti preferiscono video" },
        { label: "Tempo creazione video" },
        { label: "Piu economico degli studi" }
      ],
      testimonial: {
        quote: "Siamo passati da video sul 5% degli annunci al 100% in un weekend. La conversione e aumentata del 24% il primo mese.",
        author: "Sarah M.",
        role: "Proprietaria Negozio Shopify, 500+ SKU"
      },
      faqs: [
        { question: "Quali piattaforme supportano i video Hyreel?", answer: "I video funzionano su tutte le principali piattaforme tra cui Amazon, Shopify, Etsy, eBay, WooCommerce. Esportazione in MP4 standard." },
        { question: "Posso creare video per tutto il mio catalogo?", answer: "Si! Hyreel e progettato per scalare. Molti venditori creano video per centinaia di SKU in un giorno." },
        { question: "Quali foto funzionano meglio?", answer: "Foto chiare e ben illuminate su sfondi bianchi o puliti. La fotografia di prodotto standard produce risultati eccellenti." },
        { question: "I video dei prodotti aumentano davvero le vendite?", answer: "Si. Gli studi mostrano che gli annunci con video convertono il 20-30% in piu. Il video riduce anche i resi." },
        { question: "Come carico i video su Amazon?", answer: "Esporta da Hyreel e carica su Seller Central. Hyreel esporta automaticamente nel formato Amazon." }
      ],
      ctaText: "Crea Video Prodotti Gratis"
    },
    nl: {
      name: "E-commerce",
      heroHeadline: "AI Videomarketing voor E-commerce",
      heroSubheadline: "Verander productfoto's in video's die verkopen. Maak professionele presentaties in seconden.",
      metaTitle: "AI Videomarketing voor E-commerce | Hyreel",
      metaDescription: "Maak productvideo's die verkopen. Transformeer foto's in scroll-stoppende video's voor Amazon, Shopify en Etsy. Verhoog conversies met 30%.",
      challenges: [
        { title: "Hoge Productiekosten", description: "Professionele video's kosten 500-2.000 euro per stuk, onmogelijk om de hele catalogus te dekken." },
        { title: "Trage Levering", description: "Traditionele productie duurt dagen of weken, vertraagt lanceringen en campagnes." },
        { title: "Lagere Conversieratio's", description: "Listings met alleen afbeeldingen converteren 20-30% minder dan met video." },
        { title: "Concurrentiedruk", description: "Concurrenten met video winnen vaker de Buy Box en ranken hoger in zoekresultaten." }
      ],
      solutions: [
        { title: "Foto naar Video in Seconden", description: "Upload foto's en krijg professionele video's met cinematische effecten direct." },
        { title: "Schaal over je Catalogus", description: "Maak video's voor honderden SKU's snel. Dek je hele voorraad." },
        { title: "Meerdere Stijlen", description: "Zoom, 360 orbits, parallax -- kies de stijl die het beste verkoopt." },
        { title: "Directe Platform Export", description: "Exporteer geoptimaliseerd voor Amazon, Shopify, eBay, TikTok Shop en meer." }
      ],
      videoTypes: [
        { title: "Product Showcase", description: "360 rotatie en zoom-effecten voor productdetails" },
        { title: "Lifestyle Video's", description: "Producten in context met beweging en sfeer" },
        { title: "Voor/Na", description: "Toon producttransformaties en resultaten" },
        { title: "Unboxing Stijl", description: "Creeer opwinding rond de verpakking" },
        { title: "Maat en Schaal", description: "Help klanten productafmetingen te begrijpen" },
        { title: "Feature Highlights", description: "Zoom in op specifieke productkenmerken" }
      ],
      benefits: [
        "Verhoog conversieratio's tot 30% met video listings",
        "Dek je hele catalogus betaalbaar",
        "Lanceer nieuwe producten met video vanaf dag een",
        "Win meer Buy Box plaatsingen op Amazon",
        "Verminder retouren met betere productvisualisatie",
        "Onderscheid je van concurrenten met professionele content"
      ],
      stats: [
        { label: "Gem. Conversieverhoging" },
        { label: "Kopers verkiezen video" },
        { label: "Video creatietijd" },
        { label: "Goedkoper dan studio's" }
      ],
      testimonial: {
        quote: "We gingen van video's op 5% van onze listings naar 100% in een weekend. Onze conversie steeg 24% in de eerste maand.",
        author: "Sarah M.",
        role: "Shopify Winkeleigenaar, 500+ SKU's"
      },
      faqs: [
        { question: "Welke platforms ondersteunen Hyreel video's?", answer: "Video's werken op alle grote platforms inclusief Amazon, Shopify, Etsy, eBay, WooCommerce. Export als standaard MP4." },
        { question: "Kan ik video's maken voor mijn hele catalogus?", answer: "Ja! Hyreel is gebouwd voor schaal. Veel verkopers maken video's voor honderden SKU's op een dag." },
        { question: "Welke foto's werken het beste?", answer: "Heldere, goed verlichte foto's op witte of schone achtergronden. Standaard productfotografie levert uitstekende resultaten." },
        { question: "Verhogen productvideo's echt de verkoop?", answer: "Ja. Studies tonen aan dat listings met video 20-30% hoger converteren. Video vermindert ook retouren." },
        { question: "Hoe upload ik video's naar Amazon?", answer: "Exporteer uit Hyreel en upload naar Seller Central. Hyreel exporteert automatisch in Amazon-formaat." }
      ],
      ctaText: "Maak Gratis Productvideo's"
    },
    pl: {
      name: "E-commerce",
      heroHeadline: "Marketing Wideo AI dla E-commerce",
      heroSubheadline: "Zamien zdjecia produktow w filmy, ktore sprzedaja. Tworz profesjonalne prezentacje w sekundy.",
      metaTitle: "Marketing Wideo AI dla E-commerce | Hyreel",
      metaDescription: "Twórz filmy produktowe, ktore sprzedaja. Przeksztalc zdjecia w przyciagajace filmy dla Amazon, Shopify i Etsy. Zwieksz konwersje o 30%.",
      challenges: [
        { title: "Wysokie Koszty Produkcji", description: "Profesjonalne filmy kosztuja 500-2000 zl kazdy, niemozliwe pokrycie calego katalogu." },
        { title: "Wolna Realizacja", description: "Tradycyjna produkcja zajmuje dni lub tygodnie, opozniajac premiery i kampanie." },
        { title: "Nizsze Wskazniki Konwersji", description: "Oferty tylko ze zdjeciami konwertuja o 20-30% gorzej niz te z wideo." },
        { title: "Presja Konkurencji", description: "Konkurenci z wideo czesciej wygrywaja Buy Box i lepiej sie pozycjonuja." }
      ],
      solutions: [
        { title: "Ze Zdjecia do Wideo w Sekundy", description: "Wgraj zdjecia i otrzymaj profesjonalne filmy z efektami kinowymi natychmiast." },
        { title: "Skaluj na Caly Katalog", description: "Twórz filmy dla setek SKU szybko. Pokryj caly asortyment." },
        { title: "Wiele Stylow", description: "Zoom, orbity 360, parallax -- wybierz styl, ktory najlepiej sprzedaje." },
        { title: "Bezposredni Eksport", description: "Eksportuj zoptymalizowane dla Amazon, Shopify, eBay, TikTok Shop i wiecej." }
      ],
      videoTypes: [
        { title: "Prezentacja Produktu", description: "Rotacja 360 i efekty zoom dla detali" },
        { title: "Filmy Lifestyle", description: "Produkty w kontekscie z ruchem i atmosfera" },
        { title: "Przed/Po", description: "Pokaz transformacje i rezultaty" },
        { title: "Styl Unboxing", description: "Twórz emocje wokol opakowania" },
        { title: "Rozmiar i Skala", description: "Pomoz klientom zrozumiec wymiary" },
        { title: "Wyrozniki", description: "Przyblizenie na konkretne cechy produktu" }
      ],
      benefits: [
        "Zwieksz konwersje do 30% z filmami w ofertach",
        "Pokryj caly katalog w przystepnej cenie",
        "Wprowadzaj nowe produkty z wideo od pierwszego dnia",
        "Wygrywaj wiecej Buy Box na Amazon",
        "Zmniejsz zwroty dzieki lepszej wizualizacji",
        "Wyróznij sie od konkurencji profesjonalna trescia"
      ],
      stats: [
        { label: "Sr. Wzrost Konwersji" },
        { label: "Kupujacy wola wideo" },
        { label: "Czas tworzenia wideo" },
        { label: "Tansze niz studia" }
      ],
      testimonial: {
        quote: "Przeszlismy z filmow na 5% ofert do 100% w weekend. Konwersja wzrosla o 24% w pierwszym miesiacu.",
        author: "Sarah M.",
        role: "Wlascicielka Sklepu Shopify, 500+ SKU"
      },
      faqs: [
        { question: "Jakie platformy obsluguja filmy Hyreel?", answer: "Filmy dzialaja na wszystkich glownych platformach w tym Amazon, Shopify, Etsy, eBay, WooCommerce. Eksport jako standardowy MP4." },
        { question: "Czy moge tworzyc filmy dla calego katalogu?", answer: "Tak! Hyreel jest stworzony do skalowania. Wielu sprzedawcow tworzy filmy dla setek SKU w jeden dzien." },
        { question: "Jakie zdjecia dzialaja najlepiej?", answer: "Wyrazne, dobrze oswietlone zdjecia na bialym lub czystym tle. Standardowa fotografia produktowa daje swietne wyniki." },
        { question: "Czy filmy produktowe naprawde zwiekszaja sprzedaz?", answer: "Tak. Badania pokazuja, ze oferty z wideo konwertuja o 20-30% lepiej. Wideo takze zmniejsza zwroty." },
        { question: "Jak wgrac filmy na Amazon?", answer: "Eksportuj z Hyreel i wgraj do Seller Central. Hyreel automatycznie eksportuje w formacie Amazon." }
      ],
      ctaText: "Twórz Filmy Produktowe Za Darmo"
    },
    ja: {
      name: "Eコマース",
      heroHeadline: "EコマースのためのAI動画マーケティング",
      heroSubheadline: "商品写真を売れる動画に変換。数秒でプロフェッショナルな商品展示を作成。",
      metaTitle: "EコマースのためのAI動画マーケティング | Hyreel",
      metaDescription: "売れる商品動画を作成。Amazon、Shopify、Etsy向けの注目を集める動画に写真を変換。コンバージョン30%向上。",
      challenges: [
        { title: "高い制作コスト", description: "プロの動画は1本500-2,000ドル、カタログ全体をカバーするのは不可能。" },
        { title: "遅い納品", description: "従来の制作は数日から数週間かかり、ローンチやキャンペーンが遅れる。" },
        { title: "低いコンバージョン率", description: "画像のみのリスティングは動画付きより20-30%低いコンバージョン。" },
        { title: "競争圧力", description: "動画を持つ競合はBuy Boxをより多く獲得し、検索で上位表示される。" }
      ],
      solutions: [
        { title: "写真から動画を数秒で", description: "写真をアップロードし、シネマティックなエフェクト付きのプロ動画を即座に取得。" },
        { title: "カタログ全体にスケール", description: "数百のSKU用の動画を素早く作成。在庫全体をカバー。" },
        { title: "複数のスタイル", description: "ズーム、360度オービット、パララックス -- 最も売れるスタイルを選択。" },
        { title: "直接プラットフォームエクスポート", description: "Amazon、Shopify、eBay、TikTok Shop向けに最適化してエクスポート。" }
      ],
      videoTypes: [
        { title: "商品ショーケース", description: "360度回転とズームエフェクトで詳細を強調" },
        { title: "ライフスタイル動画", description: "動きと雰囲気のあるコンテキストで商品を表示" },
        { title: "ビフォー/アフター", description: "商品の変化と結果を表示" },
        { title: "開封スタイル", description: "パッケージ周りの興奮を創出" },
        { title: "サイズとスケール", description: "顧客が商品サイズを理解するのを支援" },
        { title: "機能ハイライト", description: "特定の商品機能をズームイン" }
      ],
      benefits: [
        "動画リスティングでコンバージョン率を最大30%向上",
        "カタログ全体を手頃な価格でカバー",
        "初日から動画付きで新商品をローンチ",
        "AmazonでBuy Boxをより多く獲得",
        "より良い商品ビジュアライゼーションで返品を削減",
        "プロフェッショナルなモーションコンテンツで競合との差別化"
      ],
      stats: [
        { label: "平均コンバージョン向上" },
        { label: "購入者は動画を好む" },
        { label: "動画作成時間" },
        { label: "スタジオより安価" }
      ],
      testimonial: {
        quote: "リスティングの5%から100%に動画を増やすのに週末1つで済みました。最初の月でコンバージョンが24%上昇しました。",
        author: "サラ M.",
        role: "Shopifyストアオーナー、500+ SKU"
      },
      faqs: [
        { question: "どのプラットフォームがHyreel動画をサポートしていますか？", answer: "Amazon、Shopify、Etsy、eBay、WooCommerceなど主要プラットフォームで動作します。標準MP4としてエクスポート。" },
        { question: "カタログ全体の動画を作成できますか？", answer: "はい！Hyreelはスケール用に設計されています。多くの販売者が1日で数百SKUの動画を作成しています。" },
        { question: "どんな写真が最も効果的ですか？", answer: "白または清潔な背景で明るくクリアな写真。標準的な商品写真で優れた結果が得られます。" },
        { question: "商品動画は本当に売上を増加させますか？", answer: "はい。研究によると動画付きリスティングは20-30%高いコンバージョン率を示します。動画は返品も減らします。" },
        { question: "Amazonに動画をアップロードする方法は？", answer: "Hyreelからエクスポートしてセラーセントラルにアップロード。HyreelはAmazon形式で自動エクスポートします。" }
      ],
      ctaText: "商品動画を無料で作成"
    },
    ko: {
      name: "이커머스",
      heroHeadline: "이커머스를 위한 AI 비디오 마케팅",
      heroSubheadline: "제품 사진을 판매하는 비디오로 전환. 몇 초 만에 전문적인 제품 쇼케이스 제작.",
      metaTitle: "이커머스를 위한 AI 비디오 마케팅 | Hyreel",
      metaDescription: "판매하는 제품 비디오 제작. 사진을 Amazon, Shopify, Etsy용 시선을 사로잡는 비디오로 변환. 전환율 30% 향상.",
      challenges: [
        { title: "높은 제작 비용", description: "전문 비디오는 개당 $500-2,000, 전체 카탈로그를 커버하기 불가능." },
        { title: "느린 납품", description: "기존 제작은 수일에서 수주 소요, 출시와 캠페인 지연." },
        { title: "낮은 전환율", description: "이미지만 있는 리스팅은 비디오가 있는 것보다 20-30% 낮은 전환율." },
        { title: "경쟁 압박", description: "비디오가 있는 경쟁사가 더 많은 Buy Box를 획득하고 검색에서 상위 노출." }
      ],
      solutions: [
        { title: "사진에서 비디오로 몇 초 만에", description: "사진을 업로드하고 시네마틱 효과가 있는 전문 비디오를 즉시 받으세요." },
        { title: "카탈로그 전체로 확장", description: "수백 개의 SKU용 비디오를 빠르게 제작. 전체 재고를 커버." },
        { title: "다양한 스타일", description: "줌, 360도 오빗, 패럴랙스 -- 가장 잘 팔리는 스타일 선택." },
        { title: "직접 플랫폼 내보내기", description: "Amazon, Shopify, eBay, TikTok Shop 등에 최적화하여 내보내기." }
      ],
      videoTypes: [
        { title: "제품 쇼케이스", description: "360도 회전과 줌 효과로 세부 사항 강조" },
        { title: "라이프스타일 비디오", description: "움직임과 분위기가 있는 맥락에서 제품 표시" },
        { title: "전/후", description: "제품 변화와 결과 표시" },
        { title: "언박싱 스타일", description: "패키징 주변의 흥분 창출" },
        { title: "크기와 스케일", description: "고객이 제품 크기를 이해하도록 도움" },
        { title: "기능 하이라이트", description: "특정 제품 기능 줌인" }
      ],
      benefits: [
        "비디오 리스팅으로 전환율 최대 30% 향상",
        "전체 카탈로그를 합리적인 비용으로 커버",
        "첫날부터 비디오와 함께 신제품 출시",
        "Amazon에서 더 많은 Buy Box 획득",
        "더 나은 제품 시각화로 반품 감소",
        "전문적인 모션 콘텐츠로 경쟁사와 차별화"
      ],
      stats: [
        { label: "평균 전환율 상승" },
        { label: "구매자가 비디오 선호" },
        { label: "비디오 제작 시간" },
        { label: "스튜디오보다 저렴" }
      ],
      testimonial: {
        quote: "리스팅의 5%에서 100%까지 비디오를 늘리는 데 주말 하나면 충분했습니다. 첫 달에 전환율이 24% 상승했습니다.",
        author: "사라 M.",
        role: "Shopify 스토어 오너, 500+ SKU"
      },
      faqs: [
        { question: "어떤 플랫폼이 Hyreel 비디오를 지원하나요?", answer: "Amazon, Shopify, Etsy, eBay, WooCommerce 등 모든 주요 플랫폼에서 작동합니다. 표준 MP4로 내보내기." },
        { question: "전체 카탈로그용 비디오를 만들 수 있나요?", answer: "네! Hyreel은 확장성을 위해 설계되었습니다. 많은 판매자가 하루에 수백 개의 SKU용 비디오를 만듭니다." },
        { question: "어떤 사진이 가장 효과적인가요?", answer: "흰색 또는 깨끗한 배경의 선명하고 잘 조명된 사진. 표준 제품 사진으로 우수한 결과." },
        { question: "제품 비디오가 정말 매출을 늘리나요?", answer: "네. 연구에 따르면 비디오가 있는 리스팅은 20-30% 더 높은 전환율을 보입니다. 비디오는 반품도 줄입니다." },
        { question: "Amazon에 비디오를 어떻게 업로드하나요?", answer: "Hyreel에서 내보내고 Seller Central에 업로드하세요. Hyreel은 Amazon 형식으로 자동 내보내기합니다." }
      ],
      ctaText: "무료로 제품 비디오 만들기"
    },
    zh: {
      name: "电子商务",
      heroHeadline: "电子商务AI视频营销",
      heroSubheadline: "将产品照片转换为促进销售的视频。几秒钟内创建专业产品展示。",
      metaTitle: "电子商务AI视频营销 | Hyreel",
      metaDescription: "创建促进销售的产品视频。将照片转换为Amazon、Shopify和Etsy的吸睛视频。提升30%转化率。",
      challenges: [
        { title: "高昂制作成本", description: "专业视频每个500-2000美元，无法覆盖整个目录。" },
        { title: "交付缓慢", description: "传统制作需要数天或数周，延迟上市和活动。" },
        { title: "较低转化率", description: "仅有图片的列表比有视频的转化率低20-30%。" },
        { title: "竞争压力", description: "有视频的竞争对手赢得更多Buy Box并在搜索中排名更高。" }
      ],
      solutions: [
        { title: "照片秒变视频", description: "上传照片，立即获得具有电影效果的专业视频。" },
        { title: "扩展到整个目录", description: "快速为数百个SKU创建视频。覆盖您的整个库存。" },
        { title: "多种风格", description: "缩放、360度环绕、视差——选择最能促销的风格。" },
        { title: "直接平台导出", description: "为Amazon、Shopify、eBay、TikTok Shop等优化导出。" }
      ],
      videoTypes: [
        { title: "产品展示", description: "360度旋转和缩放效果突出细节" },
        { title: "生活方式视频", description: "在有动感和氛围的场景中展示产品" },
        { title: "前后对比", description: "展示产品转变和效果" },
        { title: "开箱风格", description: "围绕包装创造兴奋感" },
        { title: "尺寸和比例", description: "帮助客户了解产品尺寸" },
        { title: "功能亮点", description: "放大特定产品功能" }
      ],
      benefits: [
        "视频列表转化率提高达30%",
        "经济实惠地覆盖整个目录",
        "新产品从第一天就有视频",
        "在Amazon赢得更多Buy Box",
        "通过更好的可视化减少退货",
        "以专业动态内容从竞争中脱颖而出"
      ],
      stats: [
        { label: "平均转化提升" },
        { label: "买家更喜欢视频" },
        { label: "视频创建时间" },
        { label: "比工作室便宜" }
      ],
      testimonial: {
        quote: "我们在一个周末内将列表视频从5%提升到100%。第一个月转化率上升了24%。",
        author: "Sarah M.",
        role: "Shopify店铺老板，500+ SKU"
      },
      faqs: [
        { question: "哪些平台支持Hyreel视频？", answer: "视频可在所有主要平台上使用，包括Amazon、Shopify、Etsy、eBay、WooCommerce。导出为标准MP4。" },
        { question: "我可以为整个目录创建视频吗？", answer: "可以！Hyreel专为扩展而设计。许多卖家一天内为数百个SKU创建视频。" },
        { question: "什么照片效果最好？", answer: "白色或干净背景上清晰、光线充足的照片。标准产品摄影可产生出色效果。" },
        { question: "产品视频真的能增加销量吗？", answer: "是的。研究表明有视频的列表转化率高20-30%。视频还能减少退货。" },
        { question: "如何将视频上传到Amazon？", answer: "从Hyreel导出并上传到卖家中心。Hyreel自动以Amazon格式导出。" }
      ],
      ctaText: "免费创建产品视频"
    }
  },
  "fashion-apparel": {
    es: {
      name: "Moda y Ropa",
      heroHeadline: "Marketing de Video IA para Moda",
      heroSubheadline: "Crea lookbooks de moda dinamicos y videos de productos. Muestra tu coleccion con movimiento cinematografico.",
      challenges: [
        { title: "Altos Costos de Produccion", description: "Sesiones de video de moda con modelos y estudios cuestan $5,000-20,000+ por campana." },
        { title: "Presion Estacional", description: "Nuevas colecciones salen constantemente. No hay tiempo para producir videos para cada pieza." },
        { title: "Lo Estatico No Vende", description: "Los clientes quieren ver como se mueve la ropa. Las fotos estaticas no capturan la calidad de la tela." },
        { title: "Demandas de Social Media", description: "TikTok e Instagram requieren contenido de video constante. Las publicaciones estaticas ya no funcionan." }
      ],
      solutions: [
        { title: "Da Vida a la Ropa", description: "Agrega movimiento natural a flat-lays y fotos de modelos. Muestra como fluye la tela." },
        { title: "Destaca Detalles", description: "Zoom en costuras, texturas y detalles de diseno que las fotos no capturan." },
        { title: "Multiples Angulos", description: "Crea efectos de orbita y rotacion para mostrar prendas desde cada angulo." },
        { title: "Contenido Social-First", description: "Genera contenido para TikTok y Reels desde tu fotografia de producto existente." }
      ],
      videoTypes: [
        { title: "Videos Lookbook", description: "Da vida a la fotografia editorial con movimiento" },
        { title: "Detalles del Producto", description: "Zoom en texturas, botones, costuras y materiales" },
        { title: "Exhibicion de Outfits", description: "Muestra looks completos con transiciones dinamicas" },
        { title: "Reveals de Coleccion", description: "Reveals dramaticos para lanzamientos de productos" },
        { title: "Talla y Ajuste", description: "Ayuda a los clientes a visualizar como quedan los articulos" },
        { title: "Videos de Styling", description: "Muestra diferentes formas de usar la misma pieza" }
      ],
      benefits: [
        "Crea contenido de video para cada SKU de forma economica",
        "Muestra el movimiento y calidad de la tela que los clientes quieren ver",
        "Mantente al dia con las demandas de contenido de TikTok e Instagram",
        "Lanza nuevas colecciones con video desde el primer dia",
        "Reduce devoluciones mostrando como se ve realmente la ropa",
        "Destaca en marketplaces de moda saturados"
      ],
      stats: [
        { label: "Quieren ver productos en video" },
        { label: "Mayor engagement" },
        { label: "Por video creado" },
        { label: "Menor tasa de devoluciones" }
      ],
      testimonial: {
        quote: "Nuestro engagement en TikTok subio 5x despues de empezar a usar Hyreel. Ahora creamos video para cada nueva llegada -- algo imposible antes.",
        author: "Emma L.",
        role: "Directora de Marketing, Marca de Moda"
      },
      faqs: [
        { question: "Funciona Hyreel con fotos flat-lay?", answer: "Si! Hyreel funciona muy bien con flat-lays, fotos de modelo, fotos en percha e imagenes lifestyle." },
        { question: "Puedo mostrar movimiento de tela?", answer: "El AI de Hyreel agrega movimiento natural que sugiere flujo y caida de tela. Los clientes entienden mejor la prenda." },
        { question: "Que formatos de video funcionan mejor para moda?", answer: "Vertical 9:16 para TikTok y Reels, cuadrado 1:1 para feed de Instagram, y 16:9 para web y YouTube." },
        { question: "Como creo contenido para todo mi catalogo?", answer: "Hyreel esta construido para escalar. Las marcas de moda crean videos para cientos de SKUs en una sola sesion." },
        { question: "Puedo agregar musica y branding?", answer: "Si. Agrega tu logo, colores de marca y audio trending para crear contenido on-brand listo para tus canales sociales." }
      ],
      ctaText: "Crear Videos de Moda Gratis"
    },
    de: {
      name: "Mode & Bekleidung",
      heroHeadline: "KI-Videomarketing fur Mode",
      heroSubheadline: "Erstelle dynamische Mode-Lookbooks und Produktvideos. Prasentiere deine Kollektion mit filmischer Bewegung.",
      challenges: [
        { title: "Hohe Produktionskosten", description: "Mode-Videoshootings mit Models und Studios kosten 5.000-20.000+ Euro pro Kampagne." },
        { title: "Saisonaler Druck", description: "Neue Kollektionen erscheinen standig. Keine Zeit fur Videos fur jedes Teil." },
        { title: "Statisch verkauft nicht", description: "Kunden wollen sehen wie Kleidung sich bewegt. Statische Fotos zeigen die Stoffqualitat nicht." },
        { title: "Social Media Anforderungen", description: "TikTok und Instagram erfordern standigen Video-Content. Statische Posts funktionieren nicht mehr." }
      ],
      solutions: [
        { title: "Kleidung zum Leben erwecken", description: "Fuge naturliche Bewegung zu Flat-Lays und Model-Shots hinzu. Zeige wie Stoff fliesst." },
        { title: "Details hervorheben", description: "Zoome auf Nahte, Texturen und Design-Details die Fotos nicht zeigen." },
        { title: "Mehrere Winkel", description: "Erstelle Orbit- und Rotationseffekte um Kleidung von jedem Winkel zu zeigen." },
        { title: "Social-First Content", description: "Generiere TikTok und Reels-Content aus deiner bestehenden Produktfotografie." }
      ],
      videoTypes: [
        { title: "Lookbook Videos", description: "Erwecke Editorial-Fotografie mit Bewegung zum Leben" },
        { title: "Produkt-Details", description: "Zoome auf Texturen, Knopfe, Nahte und Materialien" },
        { title: "Outfit-Showcases", description: "Zeige komplette Looks mit dynamischen Ubergangen" },
        { title: "Kollektions-Reveals", description: "Dramatische Enthullungen fur Produktlaunches" },
        { title: "Grosse und Passform", description: "Hilf Kunden zu visualisieren wie Artikel passen" },
        { title: "Styling-Videos", description: "Zeige verschiedene Arten dasselbe Stuck zu tragen" }
      ],
      benefits: [
        "Erstelle Video-Content fur jede SKU erschwinglich",
        "Zeige Stoffbewegung und Qualitat die Kunden sehen wollen",
        "Halte mit TikTok und Instagram Content-Anforderungen mit",
        "Launche neue Kollektionen vom ersten Tag an mit Video",
        "Reduziere Retouren durch Zeigen wie Kleidung wirklich aussieht",
        "Hebe dich in uberfullten Mode-Marktplatzen ab"
      ],
      stats: [
        { label: "Wollen Produkte in Video sehen" },
        { label: "Hoheres Engagement" },
        { label: "Pro Video-Erstellung" },
        { label: "Niedrigere Retourenraten" }
      ],
      testimonial: {
        quote: "Unser TikTok-Engagement ging 5x nach oben nachdem wir Hyreel nutzten. Jetzt erstellen wir Video fur jeden Neuzugang -- vorher unmoglich.",
        author: "Emma L.",
        role: "Marketing Direktorin, Modemarke"
      },
      faqs: [
        { question: "Funktioniert Hyreel mit Flat-Lay Fotos?", answer: "Ja! Hyreel funktioniert super mit Flat-Lays, Model-Shots, Bugelfotos und Lifestyle-Bildern." },
        { question: "Kann ich Stoffbewegung zeigen?", answer: "Hyreels KI fugt naturliche Bewegung hinzu die Stofffluss und -fall suggeriert." },
        { question: "Welche Videoformate funktionieren am besten fur Mode?", answer: "Vertikal 9:16 fur TikTok und Reels, quadratisch 1:1 fur Instagram Feed, und 16:9 fur Web." },
        { question: "Wie erstelle ich Content fur meinen ganzen Katalog?", answer: "Hyreel ist fur Skalierung gebaut. Modemarken erstellen Videos fur Hunderte SKUs in einer Sitzung." },
        { question: "Kann ich Musik und Branding hinzufugen?", answer: "Ja. Fuge dein Logo, Markenfarben und Trending-Audio hinzu fur markenkonforme Inhalte." }
      ],
      ctaText: "Mode-Videos Kostenlos Erstellen"
    },
    fr: {
      name: "Mode & Vetements",
      heroHeadline: "Marketing Video IA pour la Mode",
      heroSubheadline: "Creez des lookbooks mode dynamiques et des videos produit. Montrez votre collection avec un mouvement cinematographique.",
      challenges: [
        { title: "Couts de Production Eleves", description: "Les tournages video mode avec mannequins et studios coutent 5 000-20 000+ euros par campagne." },
        { title: "Pression Saisonniere", description: "Les nouvelles collections sortent constamment. Pas le temps de produire des videos pour chaque piece." },
        { title: "Le Statique Ne Vend Pas", description: "Les clients veulent voir comment les vetements bougent. Les photos statiques ne montrent pas la qualite du tissu." },
        { title: "Exigences Social Media", description: "TikTok et Instagram exigent du contenu video constant. Les posts statiques ne fonctionnent plus." }
      ],
      solutions: [
        { title: "Donnez Vie aux Vetements", description: "Ajoutez un mouvement naturel aux flat-lays et photos de mannequins. Montrez comment le tissu coule." },
        { title: "Mettez en Valeur les Details", description: "Zoomez sur les coutures, textures et details de design que les photos ne capturent pas." },
        { title: "Angles Multiples", description: "Creez des effets d'orbite et de rotation pour montrer les vetements sous tous les angles." },
        { title: "Contenu Social-First", description: "Generez du contenu TikTok et Reels a partir de vos photos de produits existantes." }
      ],
      videoTypes: [
        { title: "Videos Lookbook", description: "Donnez vie a la photographie editoriale avec du mouvement" },
        { title: "Details Produit", description: "Zoomez sur les textures, boutons, coutures et materiaux" },
        { title: "Presentations de Tenues", description: "Montrez des looks complets avec des transitions dynamiques" },
        { title: "Reveals de Collection", description: "Revelations dramatiques pour les lancements de produits" },
        { title: "Taille et Coupe", description: "Aidez les clients a visualiser comment les articles vont" },
        { title: "Videos de Styling", description: "Montrez differentes facons de porter la meme piece" }
      ],
      benefits: [
        "Creez du contenu video pour chaque SKU de maniere abordable",
        "Montrez le mouvement et la qualite du tissu que les clients veulent voir",
        "Suivez les exigences de contenu de TikTok et Instagram",
        "Lancez de nouvelles collections avec video des le premier jour",
        "Reduisez les retours en montrant comment les vetements sont vraiment",
        "Demarquez-vous dans les marketplaces mode satures"
      ],
      stats: [
        { label: "Veulent voir les produits en video" },
        { label: "Engagement plus eleve" },
        { label: "Par creation de video" },
        { label: "Taux de retour plus bas" }
      ],
      testimonial: {
        quote: "Notre engagement TikTok a augmente de 5x apres avoir commence a utiliser Hyreel. Maintenant nous creons une video pour chaque nouveaute.",
        author: "Emma L.",
        role: "Directrice Marketing, Marque de Mode"
      },
      faqs: [
        { question: "Hyreel fonctionne-t-il avec les photos flat-lay?", answer: "Oui! Hyreel fonctionne tres bien avec les flat-lays, photos de mannequins, photos sur cintre et images lifestyle." },
        { question: "Puis-je montrer le mouvement du tissu?", answer: "L'IA de Hyreel ajoute un mouvement naturel qui suggere le flux et le drapé du tissu." },
        { question: "Quels formats video fonctionnent le mieux pour la mode?", answer: "Vertical 9:16 pour TikTok et Reels, carre 1:1 pour le feed Instagram, et 16:9 pour le web." },
        { question: "Comment creer du contenu pour tout mon catalogue?", answer: "Hyreel est concu pour l'echelle. Les marques de mode creent des videos pour des centaines de SKUs en une session." },
        { question: "Puis-je ajouter de la musique et du branding?", answer: "Oui. Ajoutez votre logo, couleurs de marque et audio tendance pour du contenu pret pour vos chaines." }
      ],
      ctaText: "Creer des Videos Mode Gratuitement"
    },
    ru: {
      name: "Мода и Одежда",
      heroHeadline: "AI-Видеомаркетинг для Моды",
      heroSubheadline: "Создавайте динамичные модные лукбуки и видео продуктов. Демонстрируйте коллекцию с кинематографичным движением.",
      challenges: [
        { title: "Высокие затраты на производство", description: "Модные видеосъемки с моделями и студиями стоят $5000-20000+ за кампанию." },
        { title: "Сезонное давление", description: "Новые коллекции выходят постоянно. Нет времени на видео для каждой вещи." },
        { title: "Статика не продает", description: "Клиенты хотят видеть как одежда двигается. Статичные фото не передают качество ткани." },
        { title: "Требования соцсетей", description: "TikTok и Instagram требуют постоянного видеоконтента. Статичные посты больше не работают." }
      ],
      solutions: [
        { title: "Оживите одежду", description: "Добавьте естественное движение к flat-lay и фото моделей. Покажите как струится ткань." },
        { title: "Выделите детали", description: "Зум на швы, текстуры и детали дизайна, которые фото не передают." },
        { title: "Множество углов", description: "Создавайте эффекты орбиты и вращения для показа одежды со всех сторон." },
        { title: "Контент для соцсетей", description: "Генерируйте контент для TikTok и Reels из существующей продуктовой съемки." }
      ],
      videoTypes: [
        { title: "Видео-лукбуки", description: "Оживите editorial-фотографию движением" },
        { title: "Детали продукта", description: "Зум на текстуры, пуговицы, швы и материалы" },
        { title: "Презентации образов", description: "Показывайте полные образы с динамичными переходами" },
        { title: "Презентации коллекций", description: "Драматичные показы для запуска продуктов" },
        { title: "Размер и посадка", description: "Помогите клиентам визуализировать как сидят вещи" },
        { title: "Видео стилизации", description: "Показывайте разные способы носить одну вещь" }
      ],
      benefits: [
        "Создавайте видеоконтент для каждого SKU экономично",
        "Показывайте движение и качество ткани, которые хотят видеть клиенты",
        "Успевайте за требованиями контента TikTok и Instagram",
        "Запускайте новые коллекции с видео с первого дня",
        "Сокращайте возвраты, показывая как одежда выглядит на самом деле",
        "Выделяйтесь на переполненных модных маркетплейсах"
      ],
      stats: [
        { label: "Хотят видеть товары на видео" },
        { label: "Выше вовлеченность" },
        { label: "На создание видео" },
        { label: "Ниже возвраты" }
      ],
      testimonial: {
        quote: "Наш engagement в TikTok вырос в 5 раз после начала использования Hyreel. Теперь мы создаем видео для каждой новинки.",
        author: "Эмма Л.",
        role: "Директор по маркетингу, модный бренд"
      },
      faqs: [
        { question: "Работает ли Hyreel с flat-lay фото?", answer: "Да! Hyreel отлично работает с flat-lay, фото моделей, фото на вешалке и lifestyle-изображениями." },
        { question: "Могу ли я показать движение ткани?", answer: "AI Hyreel добавляет естественное движение, передающее струение и драпировку ткани." },
        { question: "Какие форматы видео лучше для моды?", answer: "Вертикальный 9:16 для TikTok и Reels, квадрат 1:1 для ленты Instagram, и 16:9 для веб." },
        { question: "Как создать контент для всего каталога?", answer: "Hyreel создан для масштабирования. Модные бренды создают видео для сотен SKU за одну сессию." },
        { question: "Могу ли я добавить музыку и брендинг?", answer: "Да. Добавляйте логотип, цвета бренда и трендовое аудио для готового контента." }
      ],
      ctaText: "Создать Видео Моды Бесплатно"
    },
    ja: {
      name: "ファッション・アパレル",
      heroHeadline: "ファッションのためのAI動画マーケティング",
      heroSubheadline: "ダイナミックなファッションルックブックと商品動画を作成。シネマティックな動きでコレクションを披露。",
      challenges: [
        { title: "高い制作コスト", description: "モデルとスタジオを使ったファッション動画撮影はキャンペーンあたり50万-200万円以上。" },
        { title: "シーズンのプレッシャー", description: "新コレクションが常に出る。全アイテムの動画を作る時間がない。" },
        { title: "静止画は売れない", description: "顧客は服の動きを見たい。静止画は生地の質感を伝えられない。" },
        { title: "SNSの要求", description: "TikTokとInstagramは常に動画コンテンツが必要。静止画投稿はもう通用しない。" }
      ],
      solutions: [
        { title: "服に命を吹き込む", description: "フラットレイやモデル写真に自然な動きを追加。生地の流れを見せる。" },
        { title: "ディテールを強調", description: "縫い目、テクスチャ、デザインディテールをズームで見せる。" },
        { title: "複数のアングル", description: "オービットと回転エフェクトであらゆる角度から見せる。" },
        { title: "SNSファーストコンテンツ", description: "既存の商品写真からTikTokやReelsコンテンツを生成。" }
      ],
      videoTypes: [
        { title: "ルックブック動画", description: "エディトリアル写真を動きで生き生きと" },
        { title: "商品ディテール", description: "テクスチャ、ボタン、縫製、素材をズーム" },
        { title: "アウトフィットショーケース", description: "ダイナミックな遷移で完全なルックを見せる" },
        { title: "コレクション発表", description: "製品ローンチのドラマチックな公開" },
        { title: "サイズとフィット", description: "アイテムのフィット感を視覚化" },
        { title: "スタイリング動画", description: "同じアイテムの異なる着こなし方" }
      ],
      benefits: [
        "全SKUの動画コンテンツを手頃に作成",
        "顧客が見たい生地の動きと品質を見せる",
        "TikTokとInstagramのコンテンツ需要についていく",
        "初日から動画付きで新コレクションをローンチ",
        "実際の見た目を見せて返品を削減",
        "競争の激しいファッションマーケットプレイスで差別化"
      ],
      stats: [
        { label: "動画で商品を見たい" },
        { label: "エンゲージメント向上" },
        { label: "動画作成時間" },
        { label: "返品率低下" }
      ],
      testimonial: {
        quote: "Hyreel使用開始後、TikTokのエンゲージメントが5倍に。今では全ての新着に動画を作成 -- 以前は不可能でした。",
        author: "エマ L.",
        role: "マーケティングディレクター、ファッションブランド"
      },
      faqs: [
        { question: "Hyreelはフラットレイ写真で機能しますか？", answer: "はい！フラットレイ、モデル撮影、ハンガー写真、ライフスタイル画像で優れた結果が得られます。" },
        { question: "生地の動きを見せられますか？", answer: "HyreelのAIは生地の流れとドレープを示唆する自然な動きを追加します。" },
        { question: "ファッションに最適な動画フォーマットは？", answer: "TikTokとReelsには縦9:16、Instagramフィードには正方形1:1、ウェブには16:9。" },
        { question: "カタログ全体のコンテンツをどう作成する？", answer: "Hyreelはスケール用に設計。ファッションブランドは1セッションで数百SKUの動画を作成。" },
        { question: "音楽とブランディングを追加できますか？", answer: "はい。ロゴ、ブランドカラー、トレンド音声を追加してチャンネル用コンテンツを作成。" }
      ],
      ctaText: "無料でファッション動画を作成"
    },
    ko: {
      name: "패션 & 의류",
      heroHeadline: "패션을 위한 AI 비디오 마케팅",
      heroSubheadline: "다이나믹한 패션 룩북과 제품 비디오 제작. 시네마틱한 움직임으로 컬렉션 쇼케이스.",
      challenges: [
        { title: "높은 제작 비용", description: "모델과 스튜디오를 사용한 패션 비디오 촬영은 캠페인당 500만-2000만원 이상." },
        { title: "시즌 압박", description: "새 컬렉션이 계속 나옴. 모든 아이템의 비디오를 만들 시간이 없음." },
        { title: "정적인 것은 안 팔림", description: "고객은 옷이 어떻게 움직이는지 보고 싶어함. 정적인 사진은 원단 품질을 전달 못함." },
        { title: "SNS 요구", description: "TikTok과 Instagram은 지속적인 비디오 콘텐츠가 필요. 정적인 포스트는 더 이상 통하지 않음." }
      ],
      solutions: [
        { title: "옷에 생명을 불어넣기", description: "플랫레이와 모델 사진에 자연스러운 움직임 추가. 원단의 흐름을 보여줌." },
        { title: "디테일 강조", description: "사진이 포착하지 못하는 바느질, 텍스처, 디자인 디테일 줌." },
        { title: "다양한 각도", description: "오빗과 회전 효과로 모든 각도에서 의류를 보여줌." },
        { title: "소셜 퍼스트 콘텐츠", description: "기존 제품 사진에서 TikTok과 Reels 콘텐츠 생성." }
      ],
      videoTypes: [
        { title: "룩북 비디오", description: "에디토리얼 사진을 움직임으로 생생하게" },
        { title: "제품 디테일", description: "텍스처, 버튼, 봉제, 소재 줌" },
        { title: "아웃핏 쇼케이스", description: "다이나믹한 전환으로 완성된 룩 보여주기" },
        { title: "컬렉션 공개", description: "제품 출시를 위한 드라마틱한 공개" },
        { title: "사이즈와 핏", description: "아이템이 어떻게 맞는지 시각화 도움" },
        { title: "스타일링 비디오", description: "같은 아이템을 다양하게 입는 방법" }
      ],
      benefits: [
        "모든 SKU의 비디오 콘텐츠를 합리적으로 제작",
        "고객이 보고 싶어하는 원단 움직임과 품질 보여주기",
        "TikTok과 Instagram의 콘텐츠 요구 따라가기",
        "첫날부터 비디오와 함께 새 컬렉션 출시",
        "옷이 실제로 어떻게 보이는지 보여줘 반품 감소",
        "경쟁이 치열한 패션 마켓플레이스에서 차별화"
      ],
      stats: [
        { label: "비디오로 제품을 보고 싶어함" },
        { label: "더 높은 참여율" },
        { label: "비디오 제작 시간" },
        { label: "더 낮은 반품률" }
      ],
      testimonial: {
        quote: "Hyreel 사용 후 TikTok 참여율이 5배 상승. 이제 모든 신상품에 비디오를 만듦 -- 예전엔 불가능했죠.",
        author: "엠마 L.",
        role: "마케팅 디렉터, 패션 브랜드"
      },
      faqs: [
        { question: "Hyreel이 플랫레이 사진에서 작동하나요?", answer: "네! 플랫레이, 모델 촬영, 행거 사진, 라이프스타일 이미지에서 훌륭하게 작동합니다." },
        { question: "원단 움직임을 보여줄 수 있나요?", answer: "Hyreel의 AI는 원단의 흐름과 드레이프를 암시하는 자연스러운 움직임을 추가합니다." },
        { question: "패션에 가장 좋은 비디오 포맷은?", answer: "TikTok과 Reels는 세로 9:16, Instagram 피드는 정사각형 1:1, 웹은 16:9." },
        { question: "전체 카탈로그 콘텐츠를 어떻게 만드나요?", answer: "Hyreel은 확장성을 위해 설계됨. 패션 브랜드들이 한 세션에 수백 SKU의 비디오 제작." },
        { question: "음악과 브랜딩을 추가할 수 있나요?", answer: "네. 로고, 브랜드 색상, 트렌딩 오디오를 추가해 채널용 콘텐츠 제작." }
      ],
      ctaText: "무료로 패션 비디오 만들기"
    },
    zh: {
      name: "时尚服装",
      heroHeadline: "时尚AI视频营销",
      heroSubheadline: "创建动态时尚造型集和产品视频。用电影般的动感展示您的系列。",
      challenges: [
        { title: "高昂制作成本", description: "带模特和工作室的时尚视频拍摄每次活动花费5000-20000美元以上。" },
        { title: "季节压力", description: "新系列不断推出。没时间为每件单品制作视频。" },
        { title: "静态不卖货", description: "顾客想看衣服如何移动。静态照片无法展示面料质量。" },
        { title: "社交媒体需求", description: "TikTok和Instagram需要持续的视频内容。静态帖子已经不行了。" }
      ],
      solutions: [
        { title: "让衣服活起来", description: "为平铺图和模特照片添加自然动作。展示面料如何流动。" },
        { title: "突出细节", description: "放大照片无法捕捉的缝线、纹理和设计细节。" },
        { title: "多角度展示", description: "创建环绕和旋转效果从各角度展示服装。" },
        { title: "社交优先内容", description: "从现有产品照片生成TikTok和Reels内容。" }
      ],
      videoTypes: [
        { title: "造型集视频", description: "用动作让编辑摄影活起来" },
        { title: "产品细节", description: "放大纹理、纽扣、缝线和材料" },
        { title: "穿搭展示", description: "用动态过渡展示完整造型" },
        { title: "系列发布", description: "产品发布的戏剧性揭幕" },
        { title: "尺寸和版型", description: "帮助顾客可视化单品如何穿着" },
        { title: "搭配视频", description: "展示同一件单品的不同穿法" }
      ],
      benefits: [
        "为每个SKU经济实惠地创建视频内容",
        "展示顾客想看的面料动感和品质",
        "跟上TikTok和Instagram的内容需求",
        "新系列从第一天就有视频",
        "通过展示衣服实际样子减少退货",
        "在拥挤的时尚市场中脱颖而出"
      ],
      stats: [
        { label: "想看视频中的产品" },
        { label: "更高的互动率" },
        { label: "每个视频制作时间" },
        { label: "更低的退货率" }
      ],
      testimonial: {
        quote: "使用Hyreel后我们的TikTok互动率提升了5倍。现在我们为每件新品都制作视频——以前这是不可能的。",
        author: "Emma L.",
        role: "营销总监，时尚品牌"
      },
      faqs: [
        { question: "Hyreel能处理平铺图吗？", answer: "可以！Hyreel对平铺图、模特照片、挂拍照片和生活方式图片效果都很好。" },
        { question: "能展示面料动感吗？", answer: "Hyreel的AI添加自然动作来暗示面料的流动和垂坠。" },
        { question: "时尚最适合什么视频格式？", answer: "TikTok和Reels用竖版9:16，Instagram动态用正方形1:1，网站用16:9。" },
        { question: "如何为整个目录创建内容？", answer: "Hyreel专为规模化设计。时尚品牌一次会议就能为数百个SKU创建视频。" },
        { question: "能添加音乐和品牌吗？", answer: "可以。添加您的logo、品牌颜色和热门音频来创建适合渠道的内容。" }
      ],
      ctaText: "免费创建时尚视频"
    },
    it: {
      name: "Moda & Abbigliamento",
      heroHeadline: "Video Marketing IA per la Moda",
      heroSubheadline: "Crea lookbook di moda dinamici e video prodotto. Mostra la tua collezione con movimento cinematografico.",
      challenges: [
        { title: "Alti Costi di Produzione", description: "Shooting video moda con modelli e studi costano 5.000-20.000+ euro a campagna." },
        { title: "Pressione Stagionale", description: "Nuove collezioni escono costantemente. Non c'e tempo per video per ogni capo." },
        { title: "Lo Statico Non Vende", description: "I clienti vogliono vedere come si muovono i vestiti. Le foto statiche non mostrano la qualita del tessuto." },
        { title: "Richieste Social Media", description: "TikTok e Instagram richiedono contenuti video costanti. I post statici non funzionano piu." }
      ],
      solutions: [
        { title: "Dai Vita ai Vestiti", description: "Aggiungi movimento naturale a flat-lay e foto di modelli. Mostra come fluisce il tessuto." },
        { title: "Evidenzia i Dettagli", description: "Zoom su cuciture, texture e dettagli di design che le foto non catturano." },
        { title: "Angolazioni Multiple", description: "Crea effetti orbita e rotazione per mostrare i capi da ogni angolo." },
        { title: "Contenuto Social-First", description: "Genera contenuti TikTok e Reels dalla tua fotografia prodotto esistente." }
      ],
      videoTypes: [
        { title: "Video Lookbook", description: "Dai vita alla fotografia editoriale con il movimento" },
        { title: "Dettagli Prodotto", description: "Zoom su texture, bottoni, cuciture e materiali" },
        { title: "Showcase Outfit", description: "Mostra look completi con transizioni dinamiche" },
        { title: "Reveal Collezione", description: "Rivelazioni drammatiche per lanci prodotto" },
        { title: "Taglia e Vestibilita", description: "Aiuta i clienti a visualizzare come calzano i capi" },
        { title: "Video Styling", description: "Mostra diversi modi di indossare lo stesso capo" }
      ],
      benefits: [
        "Crea contenuti video per ogni SKU in modo conveniente",
        "Mostra il movimento e la qualita del tessuto che i clienti vogliono vedere",
        "Tieni il passo con le richieste di contenuti di TikTok e Instagram",
        "Lancia nuove collezioni con video dal primo giorno",
        "Riduci i resi mostrando come appaiono davvero i vestiti",
        "Distinguiti nei marketplace moda affollati"
      ],
      stats: [
        { label: "Vogliono vedere prodotti in video" },
        { label: "Engagement piu alto" },
        { label: "Per creazione video" },
        { label: "Tassi di reso piu bassi" }
      ],
      testimonial: {
        quote: "Il nostro engagement su TikTok e aumentato di 5x dopo aver iniziato a usare Hyreel. Ora creiamo video per ogni nuovo arrivo.",
        author: "Emma L.",
        role: "Direttore Marketing, Brand Moda"
      },
      faqs: [
        { question: "Hyreel funziona con foto flat-lay?", answer: "Si! Hyreel funziona benissimo con flat-lay, foto di modelli, foto su appendino e immagini lifestyle." },
        { question: "Posso mostrare il movimento del tessuto?", answer: "L'IA di Hyreel aggiunge movimento naturale che suggerisce il fluire e il drappeggio del tessuto." },
        { question: "Quali formati video funzionano meglio per la moda?", answer: "Verticale 9:16 per TikTok e Reels, quadrato 1:1 per feed Instagram, e 16:9 per web." },
        { question: "Come creo contenuti per tutto il catalogo?", answer: "Hyreel e costruito per scalare. I brand moda creano video per centinaia di SKU in una sessione." },
        { question: "Posso aggiungere musica e branding?", answer: "Si. Aggiungi il tuo logo, colori del brand e audio trending per contenuti pronti per i tuoi canali." }
      ],
      ctaText: "Crea Video Moda Gratis"
    },
    nl: {
      name: "Mode & Kleding",
      heroHeadline: "AI Videomarketing voor Mode",
      heroSubheadline: "Maak dynamische mode lookbooks en productvideo's. Toon je collectie met cinematografische beweging.",
      challenges: [
        { title: "Hoge Productiekosten", description: "Mode videoshoots met modellen en studio's kosten 5.000-20.000+ euro per campagne." },
        { title: "Seizoensdruk", description: "Nieuwe collecties komen constant uit. Geen tijd om video's voor elk item te maken." },
        { title: "Statisch Verkoopt Niet", description: "Klanten willen zien hoe kleding beweegt. Statische foto's tonen de stofkwaliteit niet." },
        { title: "Social Media Eisen", description: "TikTok en Instagram vereisen constant video content. Statische posts werken niet meer." }
      ],
      solutions: [
        { title: "Breng Kleding tot Leven", description: "Voeg natuurlijke beweging toe aan flat-lays en modelfoto's. Toon hoe stof vloeit." },
        { title: "Highlight Details", description: "Zoom in op naden, texturen en designdetails die foto's niet vastleggen." },
        { title: "Meerdere Hoeken", description: "Maak orbit- en rotatie-effecten om kleding vanuit elke hoek te tonen." },
        { title: "Social-First Content", description: "Genereer TikTok en Reels content uit je bestaande productfotografie." }
      ],
      videoTypes: [
        { title: "Lookbook Video's", description: "Breng editorial fotografie tot leven met beweging" },
        { title: "Productdetails", description: "Zoom in op texturen, knopen, naden en materialen" },
        { title: "Outfit Showcases", description: "Toon complete looks met dynamische overgangen" },
        { title: "Collectie Reveals", description: "Dramatische onthullingen voor productlanceringen" },
        { title: "Maat en Pasvorm", description: "Help klanten visualiseren hoe items passen" },
        { title: "Styling Video's", description: "Toon verschillende manieren om hetzelfde stuk te dragen" }
      ],
      benefits: [
        "Maak video content voor elke SKU betaalbaar",
        "Toon de stofbeweging en kwaliteit die klanten willen zien",
        "Houd bij met TikTok en Instagram content eisen",
        "Lanceer nieuwe collecties met video vanaf dag een",
        "Verminder retouren door te tonen hoe kleding er echt uitziet",
        "Onderscheid je in drukke mode marktplaatsen"
      ],
      stats: [
        { label: "Willen producten in video zien" },
        { label: "Hogere engagement" },
        { label: "Per video creatie" },
        { label: "Lagere retourpercentages" }
      ],
      testimonial: {
        quote: "Onze TikTok engagement ging 5x omhoog nadat we Hyreel gingen gebruiken. Nu maken we video voor elke nieuwe aankomst.",
        author: "Emma L.",
        role: "Marketing Director, Modemerk"
      },
      faqs: [
        { question: "Werkt Hyreel met flat-lay foto's?", answer: "Ja! Hyreel werkt uitstekend met flat-lays, modelfoto's, hangerfoto's en lifestyle beelden." },
        { question: "Kan ik stofbeweging tonen?", answer: "Hyreel's AI voegt natuurlijke beweging toe die de vloeiing en val van stof suggereert." },
        { question: "Welke videoformaten werken het beste voor mode?", answer: "Verticaal 9:16 voor TikTok en Reels, vierkant 1:1 voor Instagram feed, en 16:9 voor web." },
        { question: "Hoe maak ik content voor mijn hele catalogus?", answer: "Hyreel is gebouwd voor schaal. Modemerken maken video's voor honderden SKU's in een sessie." },
        { question: "Kan ik muziek en branding toevoegen?", answer: "Ja. Voeg je logo, merkkleuren en trending audio toe voor kanaalklare content." }
      ],
      ctaText: "Maak Gratis Mode Video's"
    },
    pl: {
      name: "Moda i Odziez",
      heroHeadline: "Marketing Wideo AI dla Mody",
      heroSubheadline: "Twórz dynamiczne lookbooki modowe i filmy produktowe. Pokazuj kolekcje z kinowym ruchem.",
      challenges: [
        { title: "Wysokie Koszty Produkcji", description: "Modowe sesje wideo z modelkami i studiami kosztuja 20 000-80 000+ zl za kampanie." },
        { title: "Presja Sezonowa", description: "Nowe kolekcje wychodza ciagle. Nie ma czasu na filmy dla kazdej sztuki." },
        { title: "Statyka Nie Sprzedaje", description: "Klienci chca widziec jak ubrania sie poruszaja. Statyczne zdjecia nie pokazuja jakosci tkaniny." },
        { title: "Wymagania Social Media", description: "TikTok i Instagram wymagaja ciaglej tresci wideo. Statyczne posty juz nie dzialaja." }
      ],
      solutions: [
        { title: "Ozyw Ubrania", description: "Dodaj naturalny ruch do flat-layow i zdjec modelek. Pokaz jak plywie tkanina." },
        { title: "Wyroznij Detale", description: "Przybliz szwy, tekstury i detale projektowe ktorych zdjecia nie uchwycą." },
        { title: "Wiele Katow", description: "Twórz efekty orbity i rotacji by pokazac ubrania z kazdego kata." },
        { title: "Tresc Social-First", description: "Generuj tresc TikTok i Reels z istniejącej fotografii produktowej." }
      ],
      videoTypes: [
        { title: "Filmy Lookbook", description: "Ozyw fotografie editorial ruchem" },
        { title: "Detale Produktu", description: "Przybliz tekstury, guziki, szwy i materialy" },
        { title: "Prezentacje Stylizacji", description: "Pokaz kompletne looki z dynamicznymi przejsciami" },
        { title: "Premiery Kolekcji", description: "Dramatyczne odkrycia dla premier produktów" },
        { title: "Rozmiar i Krój", description: "Pomoz klientom zwizualizowac jak leża ubrania" },
        { title: "Filmy Stylizacyjne", description: "Pokaz rozne sposoby noszenia tej samej rzeczy" }
      ],
      benefits: [
        "Twórz tresc wideo dla kazdego SKU w przystepnej cenie",
        "Pokaz ruch i jakosc tkaniny ktore klienci chca widziec",
        "Nadazaj za wymaganiami tresci TikTok i Instagram",
        "Wprowadzaj nowe kolekcje z wideo od pierwszego dnia",
        "Zmniejsz zwroty pokazujac jak naprawde wygladaja ubrania",
        "Wyroznij sie na zatoczonych rynkach modowych"
      ],
      stats: [
        { label: "Chca widziec produkty na wideo" },
        { label: "Wyzsze zaangazowanie" },
        { label: "Na tworzenie wideo" },
        { label: "Nizsze wskazniki zwrotów" }
      ],
      testimonial: {
        quote: "Nasze zaangazowanie na TikToku wzroslo 5x po rozpoczeciu uzywania Hyreel. Teraz tworzymy wideo dla kazdej nowosci.",
        author: "Emma L.",
        role: "Dyrektor Marketingu, Marka Modowa"
      },
      faqs: [
        { question: "Czy Hyreel dziala ze zdjeciami flat-lay?", answer: "Tak! Hyreel dziala swietnie z flat-layami, zdjeciami modelek, zdjeciami na wieszaku i lifestyle." },
        { question: "Czy moge pokazac ruch tkaniny?", answer: "AI Hyreel dodaje naturalny ruch sugerujacy plynnosc i uklad tkaniny." },
        { question: "Jakie formaty wideo sa najlepsze dla mody?", answer: "Pionowy 9:16 dla TikTok i Reels, kwadrat 1:1 dla feedu Instagram, i 16:9 dla web." },
        { question: "Jak stworzyc tresc dla calego katalogu?", answer: "Hyreel jest zbudowany do skalowania. Marki modowe tworza wideo dla setek SKU w jednej sesji." },
        { question: "Czy moge dodac muzyke i branding?", answer: "Tak. Dodaj logo, kolory marki i trendujace audio dla gotowej tresci na kanaly." }
      ],
      ctaText: "Twórz Filmy Modowe Za Darmo"
    },
    pt: {
      name: "Moda & Vestuario",
      heroHeadline: "Marketing de Video IA para Moda",
      heroSubheadline: "Crie lookbooks de moda dinamicos e videos de produtos. Mostre sua colecao com movimento cinematografico.",
      challenges: [
        { title: "Altos Custos de Producao", description: "Sessoes de video de moda com modelos e estudios custam R$25.000-100.000+ por campanha." },
        { title: "Pressao Sazonal", description: "Novas colecoes saem constantemente. Nao ha tempo para videos de cada peca." },
        { title: "Estatico Nao Vende", description: "Clientes querem ver como a roupa se move. Fotos estaticas nao mostram a qualidade do tecido." },
        { title: "Demandas de Redes Sociais", description: "TikTok e Instagram exigem conteudo de video constante. Posts estaticos nao funcionam mais." }
      ],
      solutions: [
        { title: "De Vida as Roupas", description: "Adicione movimento natural a flat-lays e fotos de modelos. Mostre como o tecido flui." },
        { title: "Destaque Detalhes", description: "Zoom em costuras, texturas e detalhes de design que fotos nao capturam." },
        { title: "Multiplos Angulos", description: "Crie efeitos de orbita e rotacao para mostrar roupas de todos os angulos." },
        { title: "Conteudo Social-First", description: "Gere conteudo TikTok e Reels da sua fotografia de produto existente." }
      ],
      videoTypes: [
        { title: "Videos Lookbook", description: "De vida a fotografia editorial com movimento" },
        { title: "Detalhes do Produto", description: "Zoom em texturas, botoes, costuras e materiais" },
        { title: "Showcase de Looks", description: "Mostre looks completos com transicoes dinamicas" },
        { title: "Lancamentos de Colecao", description: "Revelacoes dramaticas para lancamentos de produtos" },
        { title: "Tamanho e Caimento", description: "Ajude clientes a visualizar como as pecas ficam" },
        { title: "Videos de Styling", description: "Mostre diferentes formas de usar a mesma peca" }
      ],
      benefits: [
        "Crie conteudo de video para cada SKU de forma acessivel",
        "Mostre o movimento e qualidade do tecido que os clientes querem ver",
        "Acompanhe as demandas de conteudo do TikTok e Instagram",
        "Lance novas colecoes com video desde o primeiro dia",
        "Reduza devolucoes mostrando como as roupas realmente ficam",
        "Destaque-se em marketplaces de moda lotados"
      ],
      stats: [
        { label: "Querem ver produtos em video" },
        { label: "Maior engajamento" },
        { label: "Por criacao de video" },
        { label: "Menores taxas de devolucao" }
      ],
      testimonial: {
        quote: "Nosso engajamento no TikTok subiu 5x apos comecar a usar o Hyreel. Agora criamos video para cada nova chegada.",
        author: "Emma L.",
        role: "Diretora de Marketing, Marca de Moda"
      },
      faqs: [
        { question: "O Hyreel funciona com fotos flat-lay?", answer: "Sim! Hyreel funciona muito bem com flat-lays, fotos de modelo, fotos em cabide e imagens lifestyle." },
        { question: "Posso mostrar movimento do tecido?", answer: "A IA do Hyreel adiciona movimento natural que sugere o fluxo e caimento do tecido." },
        { question: "Quais formatos de video funcionam melhor para moda?", answer: "Vertical 9:16 para TikTok e Reels, quadrado 1:1 para feed do Instagram, e 16:9 para web." },
        { question: "Como crio conteudo para todo meu catalogo?", answer: "Hyreel e construido para escalar. Marcas de moda criam videos para centenas de SKUs em uma sessao." },
        { question: "Posso adicionar musica e branding?", answer: "Sim. Adicione seu logo, cores da marca e audio em alta para conteudo pronto para seus canais." }
      ],
      ctaText: "Criar Videos de Moda Gratis"
    }
  },
  "food-restaurant": {
    es: {
      name: "Comida y Restaurantes",
      heroHeadline: "Marketing de Video IA para Restaurantes",
      heroSubheadline: "Transforma fotos de comida en videos irresistibles. Perfecto para menus, apps de delivery y redes sociales.",
      metaTitle: "Video IA para Restaurantes y Marcas de Comida | Hyreel",
      metaDescription: "Crea videos de comida irresistibles desde fotos. Perfecto para menus de restaurantes, apps de delivery y marketing en redes sociales.",
      challenges: [
        { title: "La Fotografia No Es Suficiente", description: "Las fotos estaticas no compiten en redes sociales donde el video domina el engagement." },
        { title: "Costos de Produccion", description: "La videografia profesional de comida con iluminacion adecuada cuesta $1,000+ por sesion." },
        { title: "El Menu Cambia Frecuentemente", description: "Menus de temporada y especiales diarios hacen imposible mantener el contenido actualizado." },
        { title: "Demandas de Redes Sociales", description: "El contenido de comida en TikTok requiere publicacion constante. Las imagenes estaticas se pierden." }
      ],
      solutions: [
        { title: "Haz que la Comida Luzca Irresistible", description: "Agrega movimiento que destaca texturas, vapor y detalles que hacen los platos deliciosos." },
        { title: "Crea Videos al Instante", description: "Convierte cualquier foto de comida en video en segundos. Actualiza contenido tan seguido como tu menu." },
        { title: "Efectos Cinematograficos", description: "Zooms suaves, reveals dramaticos y movimiento apetitoso que detiene el scroll." },
        { title: "Listo para Apps de Delivery", description: "Crea contenido de video para DoorDash, Uber Eats y tus propias plataformas." }
      ],
      videoTypes: [
        { title: "Exhibicion de Platos", description: "Reveals dramaticos y close-ups apetitosos" },
        { title: "Destacados del Menu", description: "Platos destacados y especiales del dia" },
        { title: "Detras de la Cocina", description: "Muestra preparacion e ingredientes frescos" },
        { title: "Presentacion del Chef", description: "Destaca tu equipo culinario y experiencia" },
        { title: "Videos de Ambiente", description: "Captura la vibra y experiencia de tu restaurante" },
        { title: "Promos de Delivery", description: "Contenido para listados en apps de delivery" }
      ],
      benefits: [
        "Haz que cada plato luzca irresistible con movimiento",
        "Mantente al dia con la demanda de video en redes",
        "Actualiza contenido instantaneamente cuando cambie el menu",
        "Destaca en apps de delivery con listados en video",
        "Genera mas pedidos con contenido apetitoso",
        "Ahorra miles en costos de videografia de comida"
      ],
      stats: [
        { label: "Mas engagement que fotos" },
        { label: "Mayor tasa de pedidos" },
        { label: "Por video de plato" },
        { label: "Mas compartidos en redes" }
      ],
      testimonial: {
        quote: "Nuestro Instagram paso de 500 a 15,000 seguidores despues de publicar videos de Hyreel diariamente. Los pedidos desde redes subieron 40%.",
        author: "Chef Marco D.",
        role: "Dueno de Restaurante"
      },
      faqs: [
        { question: "Que fotos de comida funcionan mejor?", answer: "Fotos bien iluminadas desde arriba o angulo de 45 grados funcionan mejor. Fotos profesionales son ideales, pero incluso buenas fotos de smartphone dan excelentes resultados." },
        { question: "Puede Hyreel agregar efectos de vapor o movimiento?", answer: "Hyreel agrega movimiento sutil que hace la comida mas apetitosa -- zooms suaves, movimientos gentiles y destacados de detalles." },
        { question: "Como uso videos en DoorDash o Uber Eats?", answer: "Exporta tus videos de Hyreel y subelos a tu panel de comerciante. Los listados con video obtienen significativamente mas vistas y pedidos." },
        { question: "Cada cuanto debo publicar videos de comida?", answer: "Para redes sociales, publicar diariamente da mejores resultados. Con Hyreel, puedes crear una semana de contenido en una sesion." },
        { question: "Puedo crear videos para todo mi menu?", answer: "Si! Muchos restaurantes crean videos para cada plato del menu. Es rapido y economico cubrir tu menu completo." }
      ],
      ctaText: "Crear Videos de Comida Gratis"
    },
    de: {
      name: "Gastronomie",
      heroHeadline: "KI-Videomarketing fur Restaurants",
      heroSubheadline: "Verwandle Food-Fotos in appetitanregende Videos. Perfekt fur Speisekarten, Lieferdienste und Social Media.",
      metaTitle: "KI-Video fur Restaurants & Food-Marken | Hyreel",
      metaDescription: "Erstelle unwiderstehliche Food-Videos aus Fotos. Perfekt fur Restaurant-Menus, Liefer-Apps und Social Media Marketing.",
      challenges: [
        { title: "Food-Fotografie reicht nicht", description: "Statische Fotos konkurrieren nicht auf Social Media wo Video das Engagement dominiert." },
        { title: "Produktionskosten", description: "Professionelle Food-Videografie mit korrekter Beleuchtung kostet 1.000+ Euro pro Session." },
        { title: "Menu andert sich haufig", description: "Saisonale Menus und Tagesgerichte machen es unmoglich Video-Content aktuell zu halten." },
        { title: "Social Media Anforderungen", description: "TikTok Food-Content erfordert standiges Posten. Statische Bilder gehen unter." }
      ],
      solutions: [
        { title: "Essen unwiderstehlich machen", description: "Fuge Bewegung hinzu die Texturen, Dampf und Details hervorhebt." },
        { title: "Videos sofort erstellen", description: "Verwandle jedes Food-Foto in Sekunden in Video. Aktualisiere Content so oft wie dein Menu." },
        { title: "Kinematische Effekte", description: "Sanfte Zooms, dramatische Enthullungen und appetitanregende Bewegung." },
        { title: "Bereit fur Liefer-Apps", description: "Erstelle Video-Content fur Lieferando, Uber Eats und eigene Plattformen." }
      ],
      videoTypes: [
        { title: "Gericht-Showcases", description: "Dramatische Enthullungen und appetitliche Nahaufnahmen" },
        { title: "Menu-Highlights", description: "Empfohlene Gerichte und Tagesangebote" },
        { title: "Hinter der Kuche", description: "Zeige Zubereitung und frische Zutaten" },
        { title: "Koch-Features", description: "Hebe dein Kuchenteam und Expertise hervor" },
        { title: "Ambiente-Videos", description: "Fange die Atmosphare deines Restaurants ein" },
        { title: "Liefer-Promos", description: "Content fur Liefer-App Listings" }
      ],
      benefits: [
        "Mach jedes Gericht mit Bewegung unwiderstehlich",
        "Halte mit der Video-Nachfrage von Social Media mit",
        "Aktualisiere Content sofort bei Menu-Anderungen",
        "Hebe dich auf Liefer-Apps mit Video-Listings ab",
        "Generiere mehr Bestellungen mit appetitlichem Content",
        "Spare Tausende an Food-Videografie-Kosten"
      ],
      stats: [
        { label: "Mehr Engagement als Fotos" },
        { label: "Hohere Bestellraten" },
        { label: "Pro Gericht-Video" },
        { label: "Mehr Social Shares" }
      ],
      testimonial: {
        quote: "Unser Instagram wuchs von 500 auf 15.000 Follower nachdem wir taglich Hyreel Food-Videos posteten. Bestellungen uber Social stiegen 40%.",
        author: "Chef Marco D.",
        role: "Restaurant-Inhaber"
      },
      faqs: [
        { question: "Welche Food-Fotos funktionieren am besten?", answer: "Gut beleuchtete Fotos von oben oder 45-Grad-Winkel funktionieren am besten. Professionelle Fotos sind ideal, aber gute Smartphone-Aufnahmen liefern auch super Ergebnisse." },
        { question: "Kann Hyreel Dampf oder Bewegungseffekte hinzufugen?", answer: "Hyreel fugt subtile Bewegung hinzu die Essen appetitlicher macht -- sanfte Zooms, leichte Bewegungen und Detail-Highlights." },
        { question: "Wie nutze ich Videos auf Lieferando oder Uber Eats?", answer: "Exportiere Videos aus Hyreel und lade sie in dein Handler-Dashboard. Video-Listings bekommen deutlich mehr Views und Bestellungen." },
        { question: "Wie oft sollte ich Food-Videos posten?", answer: "Fur Social Media bringt tagliches Posten die besten Ergebnisse. Mit Hyreel kannst du eine Woche Content in einer Session erstellen." },
        { question: "Kann ich Videos fur mein ganzes Menu erstellen?", answer: "Ja! Viele Restaurants erstellen Videos fur jeden Menu-Punkt. Es ist schnell und gunstig dein ganzes Menu abzudecken." }
      ],
      ctaText: "Food-Videos Kostenlos Erstellen"
    },
    fr: {
      name: "Restauration",
      heroHeadline: "Marketing Video IA pour Restaurants",
      heroSubheadline: "Transformez les photos culinaires en videos appetissantes. Parfait pour menus, apps de livraison et reseaux sociaux.",
      metaTitle: "Video IA pour Restaurants & Marques Alimentaires | Hyreel",
      metaDescription: "Creez des videos culinaires irresistibles a partir de photos. Parfait pour menus de restaurants, apps de livraison et marketing social.",
      challenges: [
        { title: "La Photo Ne Suffit Pas", description: "Les photos statiques peinent a concurrencer sur les reseaux ou la video domine." },
        { title: "Couts de Production", description: "La videographie culinaire professionnelle coute 1 000+ euros par session." },
        { title: "Le Menu Change Souvent", description: "Les menus saisonniers et plats du jour rendent impossible de garder le contenu a jour." },
        { title: "Exigences Reseaux Sociaux", description: "Le contenu food TikTok necessite des publications constantes. Les images statiques sont enterrees." }
      ],
      solutions: [
        { title: "Rendez la Nourriture Irresistible", description: "Ajoutez du mouvement qui met en valeur textures, vapeur et details delicieux." },
        { title: "Creez des Videos Instantanement", description: "Transformez n'importe quelle photo en video en secondes. Mettez a jour aussi souvent que votre menu." },
        { title: "Effets Cinematiques", description: "Zooms fluides, revelations dramatiques et mouvement appetissant qui arrete le scroll." },
        { title: "Pret pour les Apps de Livraison", description: "Creez du contenu video pour Uber Eats, Deliveroo et vos propres plateformes." }
      ],
      videoTypes: [
        { title: "Presentations de Plats", description: "Revelations dramatiques et gros plans appetissants" },
        { title: "Points Forts du Menu", description: "Plats vedettes et specials du jour" },
        { title: "En Coulisses", description: "Montrez la preparation et ingredients frais" },
        { title: "Mise en Avant du Chef", description: "Mettez en valeur votre equipe culinaire" },
        { title: "Videos d'Ambiance", description: "Capturez l'atmosphere de votre restaurant" },
        { title: "Promos Livraison", description: "Contenu pour les listings d'apps de livraison" }
      ],
      benefits: [
        "Rendez chaque plat irresistible avec du mouvement",
        "Suivez la demande video des reseaux sociaux",
        "Mettez a jour instantanement quand le menu change",
        "Demarquez-vous sur les apps de livraison avec video",
        "Generez plus de commandes avec du contenu appetissant",
        "Economisez des milliers en videographie culinaire"
      ],
      stats: [
        { label: "Plus d'engagement que les photos" },
        { label: "Taux de commande plus eleve" },
        { label: "Par video de plat" },
        { label: "Plus de partages sociaux" }
      ],
      testimonial: {
        quote: "Notre Instagram est passe de 500 a 15 000 abonnes apres avoir poste des videos Hyreel quotidiennement. Les commandes via social ont augmente de 40%.",
        author: "Chef Marco D.",
        role: "Proprietaire de Restaurant"
      },
      faqs: [
        { question: "Quelles photos culinaires fonctionnent le mieux?", answer: "Les photos bien eclairees en vue du dessus ou angle 45 degres fonctionnent le mieux. Les photos pro sont ideales, mais les bonnes photos smartphone donnent d'excellents resultats." },
        { question: "Hyreel peut-il ajouter des effets de vapeur ou mouvement?", answer: "Hyreel ajoute un mouvement subtil qui rend la nourriture plus appetissante -- zooms doux, mouvements legers et mise en valeur des details." },
        { question: "Comment utiliser les videos sur Uber Eats ou Deliveroo?", answer: "Exportez vos videos Hyreel et telechargez-les sur votre tableau de bord marchand. Les listings video obtiennent nettement plus de vues et commandes." },
        { question: "A quelle frequence poster des videos culinaires?", answer: "Pour les reseaux, poster quotidiennement donne les meilleurs resultats. Avec Hyreel, creez une semaine de contenu en une session." },
        { question: "Puis-je creer des videos pour tout mon menu?", answer: "Oui! Beaucoup de restaurants creent des videos pour chaque plat. C'est rapide et abordable de couvrir tout votre menu." }
      ],
      ctaText: "Creer des Videos Culinaires Gratuitement"
    },
    pt: {
      name: "Comida e Restaurantes",
      heroHeadline: "Marketing de Video IA para Restaurantes",
      heroSubheadline: "Transforme fotos de comida em videos irresistiveis. Perfeito para cardapios, apps de delivery e redes sociais.",
      metaTitle: "Video IA para Restaurantes e Marcas de Comida | Hyreel",
      metaDescription: "Crie videos de comida irresistiveis a partir de fotos. Perfeito para cardapios de restaurantes, apps de delivery e marketing em redes sociais.",
      challenges: [
        { title: "Fotografia Nao e Suficiente", description: "Fotos estaticas nao competem nas redes sociais onde video domina o engajamento." },
        { title: "Custos de Producao", description: "Videografia profissional de comida com iluminacao adequada custa R$5.000+ por sessao." },
        { title: "O Cardapio Muda Frequentemente", description: "Cardapios sazonais e especiais do dia tornam impossivel manter o conteudo atualizado." },
        { title: "Demandas de Redes Sociais", description: "Conteudo de comida no TikTok requer postagens constantes. Imagens estaticas se perdem." }
      ],
      solutions: [
        { title: "Faca a Comida Parecer Irresistivel", description: "Adicione movimento que destaca texturas, vapor e detalhes que tornam os pratos deliciosos." },
        { title: "Crie Videos Instantaneamente", description: "Transforme qualquer foto de comida em video em segundos. Atualize conteudo sempre que o cardapio mudar." },
        { title: "Efeitos Cinematograficos", description: "Zooms suaves, revelacoes dramaticas e movimento apetitoso que para o scroll." },
        { title: "Pronto para Apps de Delivery", description: "Crie conteudo de video para iFood, Uber Eats e suas proprias plataformas." }
      ],
      videoTypes: [
        { title: "Vitrine de Pratos", description: "Revelacoes dramaticas e close-ups apetitosos" },
        { title: "Destaques do Cardapio", description: "Pratos em destaque e especiais do dia" },
        { title: "Por Tras da Cozinha", description: "Mostre preparacao e ingredientes frescos" },
        { title: "Destaque do Chef", description: "Apresente sua equipe culinaria e expertise" },
        { title: "Videos de Ambiente", description: "Capture a vibe e experiencia do seu restaurante" },
        { title: "Promos de Delivery", description: "Conteudo para listagens em apps de delivery" }
      ],
      benefits: [
        "Faca cada prato parecer irresistivel com movimento",
        "Acompanhe a demanda por video nas redes sociais",
        "Atualize conteudo instantaneamente quando o cardapio mudar",
        "Destaque-se em apps de delivery com listagens em video",
        "Gere mais pedidos com conteudo apetitoso",
        "Economize milhares em custos de videografia de comida"
      ],
      stats: [
        { label: "Mais engajamento que fotos" },
        { label: "Maior taxa de pedidos" },
        { label: "Por video de prato" },
        { label: "Mais compartilhamentos" }
      ],
      testimonial: {
        quote: "Nosso Instagram foi de 500 para 15.000 seguidores apos comecar a postar videos do Hyreel diariamente. Pedidos das redes subiram 40%.",
        author: "Chef Marco D.",
        role: "Dono de Restaurante"
      },
      faqs: [
        { question: "Que fotos de comida funcionam melhor?", answer: "Fotos bem iluminadas de cima ou angulo de 45 graus funcionam melhor. Fotos profissionais sao ideais, mas boas fotos de smartphone dao excelentes resultados." },
        { question: "O Hyreel pode adicionar efeitos de vapor ou movimento?", answer: "Hyreel adiciona movimento sutil que torna a comida mais apetitosa -- zooms suaves, movimentos gentis e destaques de detalhes." },
        { question: "Como uso videos no iFood ou Uber Eats?", answer: "Exporte seus videos do Hyreel e envie para seu painel de comerciante. Listagens com video recebem significativamente mais visualizacoes e pedidos." },
        { question: "Com que frequencia devo postar videos de comida?", answer: "Para redes sociais, postar diariamente da melhores resultados. Com Hyreel, voce pode criar uma semana de conteudo em uma sessao." },
        { question: "Posso criar videos para todo meu cardapio?", answer: "Sim! Muitos restaurantes criam videos para cada item do cardapio. E rapido e acessivel cobrir seu cardapio completo." }
      ],
      ctaText: "Criar Videos de Comida Gratis"
    },
    ru: {
      name: "Еда и Рестораны",
      heroHeadline: "AI-Видеомаркетинг для Ресторанов",
      heroSubheadline: "Превращайте фото блюд в аппетитные видео. Идеально для меню, приложений доставки и соцсетей.",
      metaTitle: "AI-Видео для Ресторанов и Фуд-Брендов | Hyreel",
      metaDescription: "Создавайте аппетитные видео блюд из фотографий. Идеально для меню ресторанов, приложений доставки и маркетинга в соцсетях.",
      challenges: [
        { title: "Фотографии недостаточно", description: "Статичные фото не конкурируют в соцсетях, где видео доминирует." },
        { title: "Затраты на производство", description: "Профессиональная фуд-видеосъемка с правильным освещением стоит от $1000 за сессию." },
        { title: "Меню часто меняется", description: "Сезонные меню и ежедневные специалитеты делают невозможным поддержание актуального контента." },
        { title: "Требования соцсетей", description: "Фуд-контент в TikTok требует постоянных публикаций. Статичные изображения теряются." }
      ],
      solutions: [
        { title: "Сделайте еду неотразимой", description: "Добавьте движение, которое подчеркивает текстуры, пар и детали, делающие блюда аппетитными." },
        { title: "Создавайте видео мгновенно", description: "Превращайте любое фото еды в видео за секунды. Обновляйте контент так же часто, как меню." },
        { title: "Кинематографические эффекты", description: "Плавные зумы, драматичные появления и аппетитное движение, останавливающее скролл." },
        { title: "Готово для приложений доставки", description: "Создавайте видеоконтент для Яндекс Еды, Delivery Club и собственных платформ." }
      ],
      videoTypes: [
        { title: "Презентации блюд", description: "Драматичные появления и аппетитные крупные планы" },
        { title: "Хиты меню", description: "Избранные блюда и специалитеты дня" },
        { title: "За кулисами кухни", description: "Показывайте приготовление и свежие ингредиенты" },
        { title: "Презентация шефа", description: "Представьте вашу кулинарную команду и мастерство" },
        { title: "Видео атмосферы", description: "Передайте атмосферу и впечатления от вашего ресторана" },
        { title: "Промо доставки", description: "Контент для листингов в приложениях доставки" }
      ],
      benefits: [
        "Сделайте каждое блюдо неотразимым с помощью движения",
        "Успевайте за спросом на видео в соцсетях",
        "Обновляйте контент мгновенно при изменении меню",
        "Выделяйтесь в приложениях доставки с видео-листингами",
        "Генерируйте больше заказов с аппетитным контентом",
        "Экономьте тысячи на фуд-видеосъемке"
      ],
      stats: [
        { label: "Больше вовлеченности чем фото" },
        { label: "Выше конверсия в заказы" },
        { label: "На видео одного блюда" },
        { label: "Больше репостов в соцсетях" }
      ],
      testimonial: {
        quote: "Наш Instagram вырос с 500 до 15 000 подписчиков после ежедневных публикаций видео Hyreel. Заказы из соцсетей выросли на 40%.",
        author: "Шеф Марко Д.",
        role: "Владелец ресторана"
      },
      faqs: [
        { question: "Какие фото еды работают лучше?", answer: "Хорошо освещенные фото сверху или под углом 45 градусов работают лучше всего. Профессиональные фото идеальны, но хорошие снимки на смартфон тоже дают отличные результаты." },
        { question: "Может ли Hyreel добавить эффекты пара или движения?", answer: "Hyreel добавляет тонкое движение, которое делает еду аппетитнее -- плавные зумы, легкие движения и акценты на деталях." },
        { question: "Как использовать видео в Яндекс Еде или Delivery Club?", answer: "Экспортируйте видео из Hyreel и загрузите в панель ресторатора. Листинги с видео получают значительно больше просмотров и заказов." },
        { question: "Как часто публиковать фуд-видео?", answer: "Для соцсетей ежедневные публикации дают лучшие результаты. С Hyreel вы можете создать недельный контент за одну сессию." },
        { question: "Могу ли я создать видео для всего меню?", answer: "Да! Многие рестораны создают видео для каждого пункта меню. Это быстро и экономично -- покрыть все меню с Hyreel." }
      ],
      ctaText: "Создать Фуд-Видео Бесплатно"
    },
    it: {
      name: "Ristorazione",
      heroHeadline: "Video Marketing IA per Ristoranti",
      heroSubheadline: "Trasforma le foto di cibo in video irresistibili. Perfetto per menu, app di delivery e social media.",
      metaTitle: "Video IA per Ristoranti e Brand Alimentari | Hyreel",
      metaDescription: "Crea video di cibo irresistibili dalle foto. Perfetto per menu di ristoranti, app di delivery e marketing sui social.",
      challenges: [
        { title: "La Fotografia Non Basta", description: "Le foto statiche faticano a competere sui social dove il video domina l'engagement." },
        { title: "Costi di Produzione", description: "La videografia food professionale con illuminazione adeguata costa 1.000+ euro a sessione." },
        { title: "Il Menu Cambia Spesso", description: "Menu stagionali e piatti del giorno rendono impossibile mantenere i contenuti aggiornati." },
        { title: "Richieste Social Media", description: "I contenuti food su TikTok richiedono post costanti. Le immagini statiche vengono sepolte." }
      ],
      solutions: [
        { title: "Rendi il Cibo Irresistibile", description: "Aggiungi movimento che evidenzia texture, vapore e dettagli che rendono i piatti deliziosi." },
        { title: "Crea Video Istantaneamente", description: "Trasforma qualsiasi foto di cibo in video in secondi. Aggiorna i contenuti ogni volta che cambia il menu." },
        { title: "Effetti Cinematografici", description: "Zoom fluidi, reveal drammatici e movimento appetitoso che ferma lo scroll." },
        { title: "Pronto per le App di Delivery", description: "Crea contenuti video per Glovo, Uber Eats e le tue piattaforme." }
      ],
      videoTypes: [
        { title: "Showcase dei Piatti", description: "Reveal drammatici e primi piani appetitosi" },
        { title: "Highlights del Menu", description: "Piatti in evidenza e specialita del giorno" },
        { title: "Dietro le Quinte", description: "Mostra la preparazione e gli ingredienti freschi" },
        { title: "Feature dello Chef", description: "Metti in risalto il tuo team culinario e la sua esperienza" },
        { title: "Video dell'Atmosfera", description: "Cattura il mood e l'esperienza del tuo ristorante" },
        { title: "Promo Delivery", description: "Contenuti per i listing sulle app di delivery" }
      ],
      benefits: [
        "Rendi ogni piatto irresistibile con il movimento",
        "Tieni il passo con la domanda di video sui social",
        "Aggiorna i contenuti istantaneamente quando cambia il menu",
        "Distinguiti sulle app di delivery con listing video",
        "Genera piu ordini con contenuti appetitosi",
        "Risparmia migliaia sui costi di videografia food"
      ],
      stats: [
        { label: "Piu engagement delle foto" },
        { label: "Tasso di ordini piu alto" },
        { label: "Per video di piatto" },
        { label: "Piu condivisioni social" }
      ],
      testimonial: {
        quote: "Il nostro Instagram e passato da 500 a 15.000 follower dopo aver iniziato a postare video Hyreel quotidianamente. Gli ordini dai social sono aumentati del 40%.",
        author: "Chef Marco D.",
        role: "Proprietario di Ristorante"
      },
      faqs: [
        { question: "Quali foto di cibo funzionano meglio?", answer: "Foto ben illuminate dall'alto o con angolo di 45 gradi funzionano meglio. Le foto professionali sono ideali, ma anche buone foto da smartphone danno ottimi risultati." },
        { question: "Hyreel puo aggiungere effetti di vapore o movimento?", answer: "Hyreel aggiunge movimento sottile che rende il cibo piu appetitoso -- zoom fluidi, movimenti delicati e highlight dei dettagli." },
        { question: "Come uso i video su Glovo o Uber Eats?", answer: "Esporta i video da Hyreel e caricali sulla tua dashboard merchant. I listing con video ottengono significativamente piu visualizzazioni e ordini." },
        { question: "Quanto spesso dovrei postare video di cibo?", answer: "Per i social, postare quotidianamente da i migliori risultati. Con Hyreel puoi creare una settimana di contenuti in una sessione." },
        { question: "Posso creare video per tutto il menu?", answer: "Si! Molti ristoranti creano video per ogni voce del menu. E veloce e conveniente coprire l'intero menu." }
      ],
      ctaText: "Crea Video Food Gratis"
    },
    nl: {
      name: "Horeca",
      heroHeadline: "AI Videomarketing voor Restaurants",
      heroSubheadline: "Verander foodfoto's in onweerstaanbare video's. Perfect voor menu's, bezorgapps en social media.",
      metaTitle: "AI Video voor Restaurants & Foodmerken | Hyreel",
      metaDescription: "Maak onweerstaanbare foodvideo's van foto's. Perfect voor restaurantmenu's, bezorgapps en social media marketing.",
      challenges: [
        { title: "Fotografie Is Niet Genoeg", description: "Statische foto's concurreren niet op social media waar video het engagement domineert." },
        { title: "Productiekosten", description: "Professionele foodvideografie met goede belichting kost 1.000+ euro per sessie." },
        { title: "Menu Verandert Vaak", description: "Seizoensmenu's en dagschotels maken het onmogelijk video-content actueel te houden." },
        { title: "Social Media Eisen", description: "TikTok foodcontent vereist constant posten. Statische afbeeldingen verdwijnen." }
      ],
      solutions: [
        { title: "Maak Eten Onweerstaanbaar", description: "Voeg beweging toe die texturen, stoom en details benadrukt die gerechten heerlijk maken." },
        { title: "Maak Video's Direct", description: "Verander elke foodfoto in seconden naar video. Update content zo vaak als je menu verandert." },
        { title: "Cinematische Effecten", description: "Vloeiende zooms, dramatische onthullingen en eetlustopwekkende beweging die de scroll stopt." },
        { title: "Klaar voor Bezorgapps", description: "Maak videocontent voor Thuisbezorgd, Uber Eats en je eigen platforms." }
      ],
      videoTypes: [
        { title: "Gerecht Showcases", description: "Dramatische onthullingen en eetlustopwekkende close-ups" },
        { title: "Menu Highlights", description: "Uitgelichte gerechten en dagspecials" },
        { title: "Achter de Schermen", description: "Toon bereiding en verse ingredienten" },
        { title: "Chef Features", description: "Zet je culinaire team en expertise in de spotlight" },
        { title: "Sfeer Video's", description: "Vang de sfeer en beleving van je restaurant" },
        { title: "Bezorg Promo's", description: "Content voor bezorgapp listings" }
      ],
      benefits: [
        "Maak elk gerecht onweerstaanbaar met beweging",
        "Houd bij met de vraag naar video op social media",
        "Update content direct wanneer het menu verandert",
        "Val op in bezorgapps met video listings",
        "Genereer meer bestellingen met eetlustopwekkende content",
        "Bespaar duizenden op foodvideografie kosten"
      ],
      stats: [
        { label: "Meer engagement dan foto's" },
        { label: "Hogere bestelratio's" },
        { label: "Per gerecht video" },
        { label: "Meer social shares" }
      ],
      testimonial: {
        quote: "Onze Instagram groeide van 500 naar 15.000 volgers nadat we dagelijks Hyreel foodvideo's postten. Bestellingen via social stegen 40%.",
        author: "Chef Marco D.",
        role: "Restaurant Eigenaar"
      },
      faqs: [
        { question: "Welke foodfoto's werken het beste?", answer: "Goed verlichte foto's van boven of 45-graden hoek werken het beste. Professionele foto's zijn ideaal, maar goede smartphonefoto's geven ook uitstekende resultaten." },
        { question: "Kan Hyreel stoom of bewegingseffecten toevoegen?", answer: "Hyreel voegt subtiele beweging toe die eten aantrekkelijker maakt -- zachte zooms, lichte bewegingen en detail highlights." },
        { question: "Hoe gebruik ik video's op Thuisbezorgd of Uber Eats?", answer: "Exporteer je Hyreel video's en upload ze naar je merchant dashboard. Video listings krijgen significant meer views en bestellingen." },
        { question: "Hoe vaak moet ik foodvideo's posten?", answer: "Voor social media geeft dagelijks posten de beste resultaten. Met Hyreel maak je een week content in een sessie." },
        { question: "Kan ik video's maken voor mijn hele menu?", answer: "Ja! Veel restaurants maken video's voor elk menu-item. Het is snel en betaalbaar om je hele menu te dekken." }
      ],
      ctaText: "Maak Gratis Foodvideo's"
    },
    pl: {
      name: "Gastronomia",
      heroHeadline: "Marketing Wideo AI dla Restauracji",
      heroSubheadline: "Zamien zdjecia jedzenia w nieodparte filmy. Idealne dla menu, aplikacji dostawczych i social media.",
      metaTitle: "Wideo AI dla Restauracji i Marek Spozywczych | Hyreel",
      metaDescription: "Twórz nieodparte filmy kulinarne ze zdjec. Idealne dla menu restauracji, aplikacji dostawczych i marketingu w social media.",
      challenges: [
        { title: "Fotografia Nie Wystarczy", description: "Statyczne zdjecia nie konkuruja w social media, gdzie wideo dominuje zaangazowanie." },
        { title: "Koszty Produkcji", description: "Profesjonalna wideografia kulinarna z odpowiednim oswietleniem kosztuje 4000+ zl za sesje." },
        { title: "Menu Czesto Sie Zmienia", description: "Sezonowe menu i codzienne specjaly uniemozliwiaja utrzymanie aktualnej tresci wideo." },
        { title: "Wymagania Social Media", description: "Tresc kulinarna na TikToku wymaga ciaglego postowania. Statyczne obrazy gina." }
      ],
      solutions: [
        { title: "Spraw by Jedzenie Wygladalo Nieodparcie", description: "Dodaj ruch podkreslajacy tekstury, pare i detale ktore czynia dania pysznymi." },
        { title: "Twórz Filmy Natychmiast", description: "Zamien kazde zdjecie jedzenia w wideo w sekundy. Aktualizuj tresc tak czesto jak menu." },
        { title: "Efekty Kinowe", description: "Plynne zoomy, dramatyczne odkrycia i apetyczny ruch zatrzymujacy scroll." },
        { title: "Gotowe dla Aplikacji Dostawczych", description: "Twórz tresc wideo dla Pyszne.pl, Uber Eats i wlasnych platform." }
      ],
      videoTypes: [
        { title: "Prezentacje Dan", description: "Dramatyczne odkrycia i apetyczne zblizenia" },
        { title: "Wyrozniki Menu", description: "Polecane dania i specjaly dnia" },
        { title: "Za Kulisami Kuchni", description: "Pokaz przygotowanie i swieze skladniki" },
        { title: "Prezentacja Szefa Kuchni", description: "Wyroznij swój zespól kulinarny i doswiadczenie" },
        { title: "Filmy Atmosfery", description: "Uchwyc klimat i doswiadczenie twojej restauracji" },
        { title: "Promocje Dostaw", description: "Tresc dla listingow w aplikacjach dostawczych" }
      ],
      benefits: [
        "Spraw by kazde danie wygladalo nieodparcie dzieki ruchowi",
        "Nadazaj za popytem na wideo w social media",
        "Aktualizuj tresc natychmiast gdy zmienia sie menu",
        "Wyróznij sie w aplikacjach dostawczych listingami wideo",
        "Generuj wiecej zamówien z apetyczna trescia",
        "Oszczedz tysiace na kosztach wideografii kulinarnej"
      ],
      stats: [
        { label: "Wiecej zaangazowania niz zdjecia" },
        { label: "Wyzszy wskaznik zamówien" },
        { label: "Na film jednego dania" },
        { label: "Wiecej udzielen w social" }
      ],
      testimonial: {
        quote: "Nasz Instagram urosl z 500 do 15 000 obserwujacych po codziennym postowaniu filmów Hyreel. Zamówienia z social wzrosly o 40%.",
        author: "Szef Marco D.",
        role: "Wlasciciel Restauracji"
      },
      faqs: [
        { question: "Jakie zdjecia jedzenia dzialaja najlepiej?", answer: "Dobrze oswietlone zdjecia z góry lub pod katem 45 stopni dzialaja najlepiej. Profesjonalne zdjecia sa idealne, ale dobre zdjecia ze smartfona tez daja swietne wyniki." },
        { question: "Czy Hyreel moze dodac efekty pary lub ruchu?", answer: "Hyreel dodaje subtelny ruch ktory sprawia ze jedzenie wyglada bardziej apetycznie -- lagodne zoomy, delikatne ruchy i podkreslenie detali." },
        { question: "Jak uzywac filmów na Pyszne.pl lub Uber Eats?", answer: "Eksportuj filmy z Hyreel i wgraj je do panelu sprzedawcy. Listingi z wideo otrzymuja znacznie wiecej wyswietlen i zamówien." },
        { question: "Jak czesto powinienem postowac filmy kulinarne?", answer: "Dla social media codzienne postowanie daje najlepsze rezultaty. Z Hyreel mozesz stworzyc tydzien tresci w jednej sesji." },
        { question: "Czy moge stworzyc filmy dla calego menu?", answer: "Tak! Wiele restauracji tworzy filmy dla kazdej pozycji menu. Jest to szybkie i przystepne cenowo by pokryc cale menu." }
      ],
      ctaText: "Twórz Filmy Kulinarne Za Darmo"
    },
    ja: {
      name: "飲食店",
      heroHeadline: "レストランのためのAI動画マーケティング",
      heroSubheadline: "料理写真を食欲をそそる動画に変換。メニュー、デリバリーアプリ、SNSに最適。",
      metaTitle: "レストラン・フードブランドのためのAI動画 | Hyreel",
      metaDescription: "写真から食欲をそそるフード動画を作成。レストランメニュー、デリバリーアプリ、SNSマーケティングに最適。",
      challenges: [
        { title: "写真だけでは不十分", description: "静止画は動画がエンゲージメントを支配するSNSで競争できない。" },
        { title: "制作コスト", description: "適切な照明を使ったプロのフード動画撮影は1セッション10万円以上。" },
        { title: "メニューが頻繁に変わる", description: "季節メニューや日替わりスペシャルで動画コンテンツを最新に保つのは不可能。" },
        { title: "SNSの要求", description: "TikTokのフードコンテンツは常時投稿が必要。静止画は埋もれる。" }
      ],
      solutions: [
        { title: "料理を魅力的に", description: "テクスチャ、湯気、料理を美味しく見せるディテールを強調する動きを追加。" },
        { title: "動画を即座に作成", description: "どんな料理写真も数秒で動画に。メニューが変わるたびにコンテンツを更新。" },
        { title: "シネマティックなエフェクト", description: "スムーズなズーム、ドラマチックな登場、スクロールを止める食欲をそそる動き。" },
        { title: "デリバリーアプリ対応", description: "Uber Eats、出前館、自社プラットフォーム用の動画コンテンツを作成。" }
      ],
      videoTypes: [
        { title: "料理ショーケース", description: "ドラマチックな登場と食欲をそそるクローズアップ" },
        { title: "メニューハイライト", description: "おすすめ料理と本日のスペシャル" },
        { title: "キッチンの裏側", description: "調理過程と新鮮な食材を見せる" },
        { title: "シェフ紹介", description: "料理チームと専門性をアピール" },
        { title: "雰囲気動画", description: "レストランの雰囲気と体験を捉える" },
        { title: "デリバリープロモ", description: "デリバリーアプリ掲載用コンテンツ" }
      ],
      benefits: [
        "動きですべての料理を魅力的に",
        "SNSの動画需要についていく",
        "メニュー変更時に即座にコンテンツ更新",
        "動画掲載でデリバリーアプリで目立つ",
        "食欲をそそるコンテンツでより多くの注文を獲得",
        "フード動画撮影費を数万円節約"
      ],
      stats: [
        { label: "写真より高いエンゲージメント" },
        { label: "より高い注文率" },
        { label: "料理1品あたりの動画作成時間" },
        { label: "SNSでのシェア増加" }
      ],
      testimonial: {
        quote: "Hyreelのフード動画を毎日投稿してから、Instagramのフォロワーが500から15,000に増えました。SNSからの注文は40%増加しました。",
        author: "シェフ マルコ D.",
        role: "レストランオーナー"
      },
      faqs: [
        { question: "どんな料理写真が最適ですか？", answer: "上から撮影した明るい写真や45度の角度が最適です。プロの写真が理想ですが、スマートフォンでの良い写真でも優れた結果が得られます。" },
        { question: "Hyreelは湯気やモーションエフェクトを追加できますか？", answer: "Hyreelは料理をより美味しく見せる繊細な動きを追加します -- スムーズなズーム、穏やかな動き、ディテールのハイライト。" },
        { question: "Uber Eatsや出前館で動画をどう使う？", answer: "Hyreelから動画をエクスポートして加盟店ダッシュボードにアップロード。動画付き掲載は閲覧数と注文が大幅に増加します。" },
        { question: "フード動画はどのくらいの頻度で投稿すべき？", answer: "SNSでは毎日の投稿が最良の結果をもたらします。Hyreelなら1セッションで1週間分のコンテンツを作成できます。" },
        { question: "メニュー全体の動画を作成できますか？", answer: "はい！多くのレストランがメニュー全品の動画を作成しています。Hyreelならメニュー全体を手頃な価格で素早くカバーできます。" }
      ],
      ctaText: "無料でフード動画を作成"
    },
    ko: {
      name: "음식 & 레스토랑",
      heroHeadline: "레스토랑을 위한 AI 비디오 마케팅",
      heroSubheadline: "음식 사진을 군침 도는 비디오로 변환. 메뉴, 배달 앱, SNS에 완벽.",
      metaTitle: "레스토랑 & 푸드 브랜드를 위한 AI 비디오 | Hyreel",
      metaDescription: "사진에서 군침 도는 푸드 비디오 제작. 레스토랑 메뉴, 배달 앱, SNS 마케팅에 완벽.",
      challenges: [
        { title: "사진만으로는 부족", description: "정적인 사진은 비디오가 참여를 지배하는 SNS에서 경쟁할 수 없음." },
        { title: "제작 비용", description: "적절한 조명을 갖춘 전문 푸드 비디오그래피는 세션당 100만원 이상." },
        { title: "메뉴가 자주 바뀜", description: "시즌 메뉴와 오늘의 특선은 비디오 콘텐츠를 최신 상태로 유지하기 어렵게 함." },
        { title: "SNS 요구사항", description: "TikTok 푸드 콘텐츠는 지속적인 게시가 필요. 정적인 이미지는 묻힘." }
      ],
      solutions: [
        { title: "음식을 매력적으로", description: "텍스처, 김, 요리를 맛있게 보이게 하는 디테일을 강조하는 움직임 추가." },
        { title: "비디오 즉시 제작", description: "모든 음식 사진을 몇 초 만에 비디오로 변환. 메뉴가 바뀔 때마다 콘텐츠 업데이트." },
        { title: "시네마틱 효과", description: "부드러운 줌, 드라마틱한 등장, 스크롤을 멈추게 하는 식욕 돋우는 움직임." },
        { title: "배달 앱 대응", description: "배달의민족, 쿠팡이츠, 자체 플랫폼용 비디오 콘텐츠 제작." }
      ],
      videoTypes: [
        { title: "요리 쇼케이스", description: "드라마틱한 등장과 식욕 돋우는 클로즈업" },
        { title: "메뉴 하이라이트", description: "추천 요리와 오늘의 특선" },
        { title: "주방 비하인드", description: "조리 과정과 신선한 재료 보여주기" },
        { title: "셰프 소개", description: "요리 팀과 전문성 어필" },
        { title: "분위기 비디오", description: "레스토랑의 분위기와 경험 포착" },
        { title: "배달 프로모", description: "배달 앱 리스팅용 콘텐츠" }
      ],
      benefits: [
        "움직임으로 모든 요리를 매력적으로",
        "SNS의 비디오 수요에 따라가기",
        "메뉴 변경 시 즉시 콘텐츠 업데이트",
        "비디오 리스팅으로 배달 앱에서 눈에 띄기",
        "식욕 돋우는 콘텐츠로 더 많은 주문 생성",
        "푸드 비디오그래피 비용 수십만원 절약"
      ],
      stats: [
        { label: "사진보다 높은 참여율" },
        { label: "더 높은 주문율" },
        { label: "요리 1개당 비디오 제작 시간" },
        { label: "SNS 공유 증가" }
      ],
      testimonial: {
        quote: "Hyreel 푸드 비디오를 매일 올린 후 Instagram 팔로워가 500에서 15,000으로 늘었습니다. SNS에서의 주문이 40% 증가했습니다.",
        author: "셰프 마르코 D.",
        role: "레스토랑 오너"
      },
      faqs: [
        { question: "어떤 음식 사진이 가장 효과적인가요?", answer: "위에서 찍은 밝은 사진이나 45도 각도가 가장 좋습니다. 전문 사진이 이상적이지만 좋은 스마트폰 사진도 훌륭한 결과를 낳습니다." },
        { question: "Hyreel이 김이나 모션 효과를 추가할 수 있나요?", answer: "Hyreel은 음식을 더 맛있게 보이게 하는 미묘한 움직임을 추가합니다 -- 부드러운 줌, 살짝의 움직임, 디테일 하이라이트." },
        { question: "배달의민족이나 쿠팡이츠에서 비디오를 어떻게 사용하나요?", answer: "Hyreel에서 비디오를 내보내고 가맹점 대시보드에 업로드하세요. 비디오 리스팅은 조회수와 주문이 크게 증가합니다." },
        { question: "푸드 비디오는 얼마나 자주 올려야 하나요?", answer: "SNS에서는 매일 게시가 최고의 결과를 냅니다. Hyreel로 한 세션에 일주일 분량의 콘텐츠를 만들 수 있습니다." },
        { question: "전체 메뉴의 비디오를 만들 수 있나요?", answer: "네! 많은 레스토랑이 메뉴의 모든 항목에 대해 비디오를 만듭니다. Hyreel로 전체 메뉴를 빠르고 합리적으로 커버할 수 있습니다." }
      ],
      ctaText: "무료로 푸드 비디오 만들기"
    },
    zh: {
      name: "餐饮",
      heroHeadline: "餐厅AI视频营销",
      heroSubheadline: "将美食照片转换为令人垂涎的视频。适合菜单、外卖应用和社交媒体。",
      metaTitle: "餐厅和食品品牌的AI视频 | Hyreel",
      metaDescription: "从照片创建令人垂涎的美食视频。适合餐厅菜单、外卖应用和社交媒体营销。",
      challenges: [
        { title: "照片不够", description: "静态照片在视频主导互动的社交媒体上难以竞争。" },
        { title: "制作成本", description: "带有专业灯光的美食视频拍摄每次1000美元以上。" },
        { title: "菜单经常变化", description: "季节性菜单和每日特色使视频内容难以保持更新。" },
        { title: "社交媒体需求", description: "TikTok美食内容需要持续发布。静态图片会被淹没。" }
      ],
      solutions: [
        { title: "让食物看起来无法抗拒", description: "添加动作突出纹理、蒸汽和让菜品美味的细节。" },
        { title: "即时创建视频", description: "几秒钟内将任何美食照片转换为视频。菜单更新时随时更新内容。" },
        { title: "电影级效果", description: "流畅的缩放、戏剧性的展示和让人停止滚动的诱人动作。" },
        { title: "外卖应用就绪", description: "为美团、饿了么和自有平台创建视频内容。" }
      ],
      videoTypes: [
        { title: "菜品展示", description: "戏剧性的展示和诱人的特写" },
        { title: "菜单亮点", description: "推荐菜品和每日特色" },
        { title: "厨房幕后", description: "展示烹饪过程和新鲜食材" },
        { title: "主厨介绍", description: "展示您的烹饪团队和专业技能" },
        { title: "氛围视频", description: "捕捉餐厅的氛围和体验" },
        { title: "外卖促销", description: "外卖应用列表内容" }
      ],
      benefits: [
        "用动态让每道菜看起来无法抗拒",
        "跟上社交媒体对视频的需求",
        "菜单更改时即时更新内容",
        "用视频列表在外卖应用中脱颖而出",
        "用诱人的内容产生更多订单",
        "节省数千美元的美食视频拍摄费用"
      ],
      stats: [
        { label: "比照片更高的互动率" },
        { label: "更高的订单率" },
        { label: "每道菜视频制作时间" },
        { label: "更多社交分享" }
      ],
      testimonial: {
        quote: "每天发布Hyreel美食视频后，我们的Instagram从500粉丝增长到15000。来自社交的订单增长了40%。",
        author: "主厨 Marco D.",
        role: "餐厅老板"
      },
      faqs: [
        { question: "什么样的美食照片效果最好？", answer: "光线充足的俯拍或45度角照片效果最好。专业照片最理想，但好的手机照片也能产生出色效果。" },
        { question: "Hyreel能添加蒸汽或动态效果吗？", answer: "Hyreel添加微妙的动作使食物看起来更诱人——平滑的缩放、轻柔的移动和细节突出。" },
        { question: "如何在美团或饿了么使用视频？", answer: "从Hyreel导出视频并上传到商家后台。带视频的列表获得的浏览量和订单明显更多。" },
        { question: "应该多久发布一次美食视频？", answer: "对于社交媒体，每天发布效果最好。用Hyreel，一次会话就能创建一周的内容。" },
        { question: "我能为整个菜单创建视频吗？", answer: "可以！许多餐厅为菜单上的每道菜创建视频。用Hyreel快速且经济地覆盖整个菜单。" }
      ],
      ctaText: "免费创建美食视频"
    }
  },
  "beauty-cosmetics": {
    es: {
      name: "Belleza y Cosmeticos",
      heroHeadline: "Marketing de Video IA para Belleza",
      heroSubheadline: "Transforma fotos de productos en videos de belleza glamorosos. Muestra texturas, swatches y productos en movimiento.",
      metaTitle: "Video IA para Marcas de Belleza y Cosmeticos | Hyreel",
      metaDescription: "Crea videos de belleza impresionantes desde fotos de productos. Muestra maquillaje, skincare y cosmeticos en movimiento.",
      challenges: [
        { title: "La Textura Lo Es Todo", description: "Los clientes necesitan ver textura, brillo y acabado -- las fotos estaticas no lo capturan." },
        { title: "Presion de TikTok y Reels", description: "Las marcas de belleza necesitan contenido de video constante. La produccion no puede seguir el ritmo." },
        { title: "Altos Estandares de Produccion", description: "La videografia de belleza requiere iluminacion perfecta y produccion costosa para verse premium." },
        { title: "Gran Cantidad de SKUs", description: "Docenas de tonos y productos significan miles de piezas de contenido necesarias." }
      ],
      solutions: [
        { title: "Muestra Brillo y Textura", description: "Los efectos de movimiento destacan brillo, destellos y textura mejor que cualquier foto." },
        { title: "Detalles en Primer Plano", description: "Los efectos de zoom muestran calidad del producto, detalles de empaque y payoff de color." },
        { title: "Look y Sensacion Premium", description: "El movimiento cinematografico da a cada video de producto una calidad editorial de alta gama." },
        { title: "Contenido Social-Ready", description: "Crea contenido para TikTok, Reels y YouTube Shorts desde tu fotografia de producto." }
      ],
      videoTypes: [
        { title: "Reveals de Producto", description: "Revelaciones dramaticas de empaque y producto" },
        { title: "Close-ups de Textura", description: "Muestra brillo, glitter y acabado en movimiento" },
        { title: "Videos de Swatches", description: "Payoff de color y comparaciones de tonos" },
        { title: "Videos de Rutina", description: "Orden de aplicacion y combinaciones de productos" },
        { title: "Antes/Despues", description: "Muestra transformacion y resultados" },
        { title: "Lanzamientos de Coleccion", description: "Anuncios de nuevos productos y colecciones" }
      ],
      benefits: [
        "Muestra textura y acabado del producto en movimiento",
        "Crea contenido para cada tono y SKU",
        "Mantente al dia con las demandas de contenido de redes",
        "Logra valor de produccion premium de forma economica",
        "Lanza nuevos productos con video desde el dia uno",
        "Genera mayores tasas de conversion online"
      ],
      stats: [
        { label: "Quieren ver productos en video" },
        { label: "Mayores tasas de conversion" },
        { label: "Por video de producto" },
        { label: "Aumento engagement social" }
      ],
      testimonial: {
        quote: "Ahora creamos video para cada tono. Nuestro TikTok se volvio viral tres veces el mes pasado. Hyreel cambio completamente nuestro juego de contenido.",
        author: "Jessica K.",
        role: "Social Media Manager, Marca de Belleza"
      },
      faqs: [
        { question: "Puede Hyreel capturar brillo y destellos del producto?", answer: "Si! Los efectos de movimiento resaltan superficies reflectantes, particulas de brillo y textura de formas que las fotos estaticas no pueden." },
        { question: "Como creo videos para todos mis tonos?", answer: "Hyreel maneja la escala facilmente. Crea videos para toda tu gama de tonos en una sesion. Muchas marcas procesan 50+ productos en una tarde." },
        { question: "Que estilos de video funcionan mejor para belleza?", answer: "Zooms lentos para textura, orbitas para empaque y cortes rapidos para social funcionan mejor. Hyreel soporta todos estos estilos." },
        { question: "Puedo usar estos en mi e-commerce?", answer: "Absolutamente. Los videos de Hyreel funcionan en Shopify, portales de Sephora, Ulta, Amazon y todas las plataformas de retail de belleza." },
        { question: "Necesito fotografia profesional de producto?", answer: "Las fotos profesionales producen los mejores resultados, pero Hyreel funciona con cualquier imagen de producto clara. Buena iluminacion es el factor clave." }
      ],
      ctaText: "Crear Videos de Belleza Gratis"
    },
    de: {
      name: "Beauty & Kosmetik",
      heroHeadline: "KI-Videomarketing fur Beauty",
      heroSubheadline: "Verwandle Produktfotos in glamourose Beauty-Videos. Zeige Texturen, Swatches und Produkte in Bewegung.",
      metaTitle: "KI-Video fur Beauty- & Kosmetikmarken | Hyreel",
      metaDescription: "Erstelle atemberaubende Beauty-Videos aus Produktfotos. Zeige Make-up, Hautpflege und Kosmetik in Bewegung.",
      challenges: [
        { title: "Textur ist alles", description: "Kunden mussen Textur, Schimmer und Finish sehen -- statische Fotos konnen das nicht." },
        { title: "TikTok & Reels Druck", description: "Beauty-Marken brauchen standigen Video-Content. Die Produktion kann nicht mithalten." },
        { title: "Hohe Produktionsstandards", description: "Beauty-Videografie erfordert perfekte Beleuchtung und teure Produktion fur Premium-Look." },
        { title: "Grosse SKU-Anzahl", description: "Dutzende Farbtone und Produkte bedeuten Tausende von benotigten Content-Stucken." }
      ],
      solutions: [
        { title: "Zeige Schimmer & Textur", description: "Bewegungseffekte heben Produktglanz, Glitzer und Textur besser hervor als jedes Foto." },
        { title: "Close-Up Details", description: "Zoom-Effekte zeigen Produktqualitat, Verpackungsdetails und Farbintensitat." },
        { title: "Premium Look & Feel", description: "Kinematische Bewegung gibt jedem Produktvideo eine hochwertige Editorial-Qualitat." },
        { title: "Social-Ready Content", description: "Erstelle TikTok, Reels und YouTube Shorts Content aus deiner Produktfotografie." }
      ],
      videoTypes: [
        { title: "Produkt Reveals", description: "Dramatische Verpackungs- und Produktenthullungen" },
        { title: "Textur Close-Ups", description: "Zeige Schimmer, Glitzer und Finish in Bewegung" },
        { title: "Swatch Videos", description: "Farbintensitat und Farbtonvergleiche" },
        { title: "Routine Videos", description: "Anwendungsreihenfolge und Produktkombinationen" },
        { title: "Vorher/Nachher", description: "Zeige Transformation und Ergebnisse" },
        { title: "Kollektions-Launches", description: "Neue Produkt- und Kollektionsankundigungen" }
      ],
      benefits: [
        "Zeige Produkttextur und Finish in Bewegung",
        "Erstelle Content fur jeden Farbton und SKU",
        "Halte mit Social Media Content-Anforderungen mit",
        "Erreiche Premium-Produktionswert erschwinglich",
        "Launche neue Produkte vom ersten Tag an mit Video",
        "Generiere hohere Conversion-Raten online"
      ],
      stats: [
        { label: "Wollen Produkte in Video sehen" },
        { label: "Hohere Conversion-Raten" },
        { label: "Pro Produktvideo" },
        { label: "Social Engagement Steigerung" }
      ],
      testimonial: {
        quote: "Wir erstellen jetzt Video fur jeden Farbton. Unser TikTok ging letzten Monat dreimal viral. Hyreel hat unser Content-Game komplett verandert.",
        author: "Jessica K.",
        role: "Social Media Managerin, Beauty-Marke"
      },
      faqs: [
        { question: "Kann Hyreel Produktschimmer und -glanz einfangen?", answer: "Ja! Die Bewegungseffekte heben reflektierende Oberflachen, Glitzerpartikel und Textur hervor wie statische Fotos nicht konnen." },
        { question: "Wie erstelle ich Videos fur alle meine Farbtone?", answer: "Hyreel handhabt Skalierung einfach. Erstelle Videos fur deine gesamte Farbpalette in einer Sitzung. Viele Marken verarbeiten 50+ Produkte an einem Nachmittag." },
        { question: "Welche Video-Stile funktionieren am besten fur Beauty?", answer: "Langsame Zooms fur Textur, Orbits fur Verpackung und schnelle Schnitte fur Social performen am besten. Hyreel unterstutzt alle diese Stile." },
        { question: "Kann ich diese auf meiner E-Commerce-Seite verwenden?", answer: "Absolut. Hyreel-Videos funktionieren auf Shopify, Douglas, Amazon und allen Beauty-Retail-Plattformen." },
        { question: "Brauche ich professionelle Produktfotografie?", answer: "Professionelle Fotos liefern die besten Ergebnisse, aber Hyreel funktioniert mit jedem klaren Produktbild. Gute Beleuchtung ist der Schlusselfaktor." }
      ],
      ctaText: "Beauty-Videos Kostenlos Erstellen"
    },
    fr: {
      name: "Beaute & Cosmetiques",
      heroHeadline: "Marketing Video IA pour la Beaute",
      heroSubheadline: "Transformez les photos produits en videos beaute glamour. Montrez textures, swatches et produits en mouvement.",
      metaTitle: "Video IA pour Marques de Beaute & Cosmetiques | Hyreel",
      metaDescription: "Creez des videos beaute sublimes a partir de photos produits. Montrez maquillage, soins et cosmetiques en mouvement.",
      challenges: [
        { title: "La Texture Est Tout", description: "Les clients doivent voir texture, brillance et fini -- les photos statiques ne le capturent pas." },
        { title: "Pression TikTok & Reels", description: "Les marques beaute ont besoin de contenu video constant. La production ne peut pas suivre." },
        { title: "Standards de Production Eleves", description: "La videographie beaute requiert un eclairage parfait et une production couteuse pour un look premium." },
        { title: "Grand Nombre de SKUs", description: "Des dizaines de teintes et produits signifient des milliers de contenus necessaires." }
      ],
      solutions: [
        { title: "Montrez Brillance & Texture", description: "Les effets de mouvement mettent en valeur brillance, paillettes et texture mieux que toute photo." },
        { title: "Details en Gros Plan", description: "Les effets de zoom montrent la qualite du produit, details d'emballage et rendu des couleurs." },
        { title: "Look & Feel Premium", description: "Le mouvement cinematique donne a chaque video produit une qualite editoriale haut de gamme." },
        { title: "Contenu Social-Ready", description: "Creez du contenu TikTok, Reels et YouTube Shorts depuis vos photos produits." }
      ],
      videoTypes: [
        { title: "Reveals Produit", description: "Revelations dramatiques d'emballage et produit" },
        { title: "Close-ups Texture", description: "Montrez brillance, paillettes et fini en mouvement" },
        { title: "Videos de Swatches", description: "Rendu couleur et comparaisons de teintes" },
        { title: "Videos Routine", description: "Ordre d'application et combinaisons de produits" },
        { title: "Avant/Apres", description: "Montrez transformation et resultats" },
        { title: "Lancements Collection", description: "Annonces de nouveaux produits et collections" }
      ],
      benefits: [
        "Montrez texture et fini du produit en mouvement",
        "Creez du contenu pour chaque teinte et SKU",
        "Suivez les demandes de contenu des reseaux",
        "Atteignez une valeur de production premium a moindre cout",
        "Lancez de nouveaux produits avec video des le premier jour",
        "Generez des taux de conversion plus eleves en ligne"
      ],
      stats: [
        { label: "Veulent voir les produits en video" },
        { label: "Taux de conversion plus eleves" },
        { label: "Par video produit" },
        { label: "Augmentation engagement social" }
      ],
      testimonial: {
        quote: "Nous creons maintenant une video pour chaque teinte. Notre TikTok est devenu viral trois fois le mois dernier. Hyreel a completement change notre jeu.",
        author: "Jessica K.",
        role: "Social Media Manager, Marque Beaute"
      },
      faqs: [
        { question: "Hyreel peut-il capturer la brillance et l'eclat du produit?", answer: "Oui! Les effets de mouvement mettent en valeur surfaces reflechissantes, particules scintillantes et texture comme les photos statiques ne peuvent pas." },
        { question: "Comment creer des videos pour toutes mes teintes?", answer: "Hyreel gere l'echelle facilement. Creez des videos pour toute votre gamme de teintes en une session. Beaucoup de marques traitent 50+ produits en un apres-midi." },
        { question: "Quels styles video fonctionnent le mieux pour la beaute?", answer: "Zooms lents pour texture, orbites pour emballage et coupes rapides pour social performent le mieux. Hyreel supporte tous ces styles." },
        { question: "Puis-je les utiliser sur mon e-commerce?", answer: "Absolument. Les videos Hyreel fonctionnent sur Shopify, portails Sephora, Amazon et toutes les plateformes retail beaute." },
        { question: "Ai-je besoin de photos produit professionnelles?", answer: "Les photos professionnelles donnent les meilleurs resultats, mais Hyreel fonctionne avec toute image produit claire. Un bon eclairage est le facteur cle." }
      ],
      ctaText: "Creer des Videos Beaute Gratuitement"
    },
    pt: {
      name: "Beleza e Cosmeticos",
      heroHeadline: "Marketing de Video IA para Beleza",
      heroSubheadline: "Transforme fotos de produtos em videos de beleza glamorosos. Mostre texturas, swatches e produtos em movimento.",
      metaTitle: "Video IA para Marcas de Beleza e Cosmeticos | Hyreel",
      metaDescription: "Crie videos de beleza impressionantes a partir de fotos de produtos. Mostre maquiagem, skincare e cosmeticos em movimento.",
      challenges: [
        { title: "Textura e Tudo", description: "Clientes precisam ver textura, brilho e acabamento -- fotos estaticas nao capturam isso." },
        { title: "Pressao do TikTok e Reels", description: "Marcas de beleza precisam de conteudo de video constante. A producao nao consegue acompanhar." },
        { title: "Altos Padroes de Producao", description: "Videografia de beleza requer iluminacao perfeita e producao cara para parecer premium." },
        { title: "Grande Quantidade de SKUs", description: "Dezenas de tons e produtos significam milhares de pecas de conteudo necessarias." }
      ],
      solutions: [
        { title: "Mostre Brilho e Textura", description: "Efeitos de movimento destacam brilho, glitter e textura melhor que qualquer foto." },
        { title: "Detalhes em Close-Up", description: "Efeitos de zoom mostram qualidade do produto, detalhes de embalagem e payoff de cor." },
        { title: "Look e Sensacao Premium", description: "Movimento cinematografico da a cada video de produto uma qualidade editorial de alta gama." },
        { title: "Conteudo Social-Ready", description: "Crie conteudo para TikTok, Reels e YouTube Shorts da sua fotografia de produto." }
      ],
      videoTypes: [
        { title: "Revelacoes de Produto", description: "Revelacoes dramaticas de embalagem e produto" },
        { title: "Close-ups de Textura", description: "Mostre brilho, glitter e acabamento em movimento" },
        { title: "Videos de Swatches", description: "Payoff de cor e comparacoes de tons" },
        { title: "Videos de Rotina", description: "Ordem de aplicacao e combinacoes de produtos" },
        { title: "Antes/Depois", description: "Mostre transformacao e resultados" },
        { title: "Lancamentos de Colecao", description: "Anuncios de novos produtos e colecoes" }
      ],
      benefits: [
        "Mostre textura e acabamento do produto em movimento",
        "Crie conteudo para cada tom e SKU",
        "Acompanhe as demandas de conteudo das redes",
        "Alcance valor de producao premium de forma acessivel",
        "Lance novos produtos com video desde o primeiro dia",
        "Gere maiores taxas de conversao online"
      ],
      stats: [
        { label: "Querem ver produtos em video" },
        { label: "Maiores taxas de conversao" },
        { label: "Por video de produto" },
        { label: "Aumento do engajamento social" }
      ],
      testimonial: {
        quote: "Agora criamos video para cada tom. Nosso TikTok viralizou tres vezes no mes passado. Hyreel mudou completamente nosso jogo de conteudo.",
        author: "Jessica K.",
        role: "Social Media Manager, Marca de Beleza"
      },
      faqs: [
        { question: "O Hyreel pode capturar brilho e cintilancia do produto?", answer: "Sim! Os efeitos de movimento destacam superficies reflexivas, particulas de brilho e textura de formas que fotos estaticas nao conseguem." },
        { question: "Como crio videos para todos os meus tons?", answer: "Hyreel lida com escala facilmente. Crie videos para toda sua gama de tons em uma sessao. Muitas marcas processam 50+ produtos em uma tarde." },
        { question: "Quais estilos de video funcionam melhor para beleza?", answer: "Zooms lentos para textura, orbitas para embalagem e cortes rapidos para social funcionam melhor. Hyreel suporta todos esses estilos." },
        { question: "Posso usar esses no meu e-commerce?", answer: "Com certeza. Os videos do Hyreel funcionam no Shopify, portais da Sephora, Amazon e todas as plataformas de varejo de beleza." },
        { question: "Preciso de fotografia profissional de produto?", answer: "Fotos profissionais produzem os melhores resultados, mas Hyreel funciona com qualquer imagem de produto clara. Boa iluminacao e o fator chave." }
      ],
      ctaText: "Criar Videos de Beleza Gratis"
    },
    ru: {
      name: "Красота и Косметика",
      heroHeadline: "AI-Видеомаркетинг для Бьюти-Брендов",
      heroSubheadline: "Превращайте фото продуктов в гламурные бьюти-видео. Показывайте текстуры, свотчи и продукты в движении.",
      metaTitle: "AI-Видео для Бьюти и Косметических Брендов | Hyreel",
      metaDescription: "Создавайте потрясающие бьюти-видео из фото продуктов. Показывайте макияж, уход и косметику в движении.",
      challenges: [
        { title: "Текстура -- это все", description: "Клиенты должны видеть текстуру, блеск и финиш -- статичные фото это не передают." },
        { title: "Давление TikTok и Reels", description: "Бьюти-бренды нуждаются в постоянном видеоконтенте. Производство не успевает." },
        { title: "Высокие стандарты производства", description: "Бьюти-видеосъемка требует идеального освещения и дорогого продакшена для премиум-вида." },
        { title: "Большое количество SKU", description: "Десятки оттенков и продуктов означают тысячи необходимых единиц контента." }
      ],
      solutions: [
        { title: "Покажите блеск и текстуру", description: "Эффекты движения подчеркивают блеск, сияние и текстуру лучше любого фото." },
        { title: "Детали крупным планом", description: "Эффекты зума показывают качество продукта, детали упаковки и цветоотдачу." },
        { title: "Премиум вид и ощущение", description: "Кинематографичное движение придает каждому видео высококлассное редакционное качество." },
        { title: "Контент для соцсетей", description: "Создавайте контент для TikTok, Reels и YouTube Shorts из вашей продуктовой съемки." }
      ],
      videoTypes: [
        { title: "Презентации продуктов", description: "Драматичные появления упаковки и продукта" },
        { title: "Крупные планы текстуры", description: "Показывайте блеск, глиттер и финиш в движении" },
        { title: "Видео свотчей", description: "Цветоотдача и сравнение оттенков" },
        { title: "Видео рутины", description: "Порядок нанесения и комбинации продуктов" },
        { title: "До/После", description: "Показывайте трансформацию и результаты" },
        { title: "Запуски коллекций", description: "Анонсы новых продуктов и коллекций" }
      ],
      benefits: [
        "Показывайте текстуру и финиш продукта в движении",
        "Создавайте контент для каждого оттенка и SKU",
        "Успевайте за требованиями контента соцсетей",
        "Достигайте премиум-качества производства экономично",
        "Запускайте новые продукты с видео с первого дня",
        "Генерируйте более высокую конверсию онлайн"
      ],
      stats: [
        { label: "Хотят видеть продукты на видео" },
        { label: "Выше конверсия" },
        { label: "На видео продукта" },
        { label: "Рост вовлеченности в соцсетях" }
      ],
      testimonial: {
        quote: "Теперь мы создаем видео для каждого оттенка. Наш TikTok стал вирусным три раза в прошлом месяце. Hyreel полностью изменил нашу контент-игру.",
        author: "Джессика К.",
        role: "SMM-менеджер, бьюти-бренд"
      },
      faqs: [
        { question: "Может ли Hyreel передать блеск и сияние продукта?", answer: "Да! Эффекты движения подчеркивают отражающие поверхности, частицы блеска и текстуру так, как статичные фото не могут." },
        { question: "Как создать видео для всех оттенков?", answer: "Hyreel легко справляется с масштабом. Создавайте видео для всей палитры за одну сессию. Многие бренды обрабатывают 50+ продуктов за день." },
        { question: "Какие стили видео лучше для бьюти?", answer: "Медленные зумы для текстуры, орбиты для упаковки и быстрые переходы для соцсетей работают лучше всего. Hyreel поддерживает все эти стили." },
        { question: "Могу ли я использовать их на e-commerce?", answer: "Конечно. Видео Hyreel работают на Shopify, Ozon, Wildberries, Amazon и всех платформах бьюти-ритейла." },
        { question: "Нужна ли профессиональная съемка продуктов?", answer: "Профессиональные фото дают лучшие результаты, но Hyreel работает с любым четким изображением продукта. Хорошее освещение -- ключевой фактор." }
      ],
      ctaText: "Создать Бьюти-Видео Бесплатно"
    },
    it: {
      name: "Bellezza e Cosmetici",
      heroHeadline: "Video Marketing IA per la Bellezza",
      heroSubheadline: "Trasforma le foto prodotto in video beauty glamour. Mostra texture, swatch e prodotti in movimento.",
      metaTitle: "Video IA per Brand di Bellezza e Cosmetici | Hyreel",
      metaDescription: "Crea video beauty mozzafiato dalle foto prodotto. Mostra makeup, skincare e cosmetici in movimento.",
      challenges: [
        { title: "La Texture e Tutto", description: "I clienti devono vedere texture, brillantezza e finish -- le foto statiche non lo catturano." },
        { title: "Pressione TikTok e Reels", description: "I brand beauty hanno bisogno di contenuti video costanti. La produzione non riesce a stare al passo." },
        { title: "Standard di Produzione Elevati", description: "La videografia beauty richiede illuminazione perfetta e produzione costosa per sembrare premium." },
        { title: "Grande Numero di SKU", description: "Decine di tonalita e prodotti significano migliaia di contenuti necessari." }
      ],
      solutions: [
        { title: "Mostra Brillantezza e Texture", description: "Gli effetti di movimento evidenziano lucentezza, glitter e texture meglio di qualsiasi foto." },
        { title: "Dettagli in Primo Piano", description: "Gli effetti zoom mostrano qualita del prodotto, dettagli packaging e resa colore." },
        { title: "Look e Feel Premium", description: "Il movimento cinematografico da a ogni video prodotto una qualita editoriale di alto livello." },
        { title: "Contenuto Social-Ready", description: "Crea contenuti TikTok, Reels e YouTube Shorts dalla tua fotografia prodotto." }
      ],
      videoTypes: [
        { title: "Reveal Prodotto", description: "Rivelazioni drammatiche di packaging e prodotto" },
        { title: "Close-up Texture", description: "Mostra brillantezza, glitter e finish in movimento" },
        { title: "Video Swatch", description: "Resa colore e confronti tra tonalita" },
        { title: "Video Routine", description: "Ordine di applicazione e combinazioni prodotto" },
        { title: "Prima/Dopo", description: "Mostra trasformazione e risultati" },
        { title: "Lanci Collezione", description: "Annunci di nuovi prodotti e collezioni" }
      ],
      benefits: [
        "Mostra texture e finish del prodotto in movimento",
        "Crea contenuti per ogni tonalita e SKU",
        "Tieni il passo con le richieste di contenuti social",
        "Raggiungi un valore di produzione premium in modo conveniente",
        "Lancia nuovi prodotti con video dal primo giorno",
        "Genera tassi di conversione piu alti online"
      ],
      stats: [
        { label: "Vogliono vedere prodotti in video" },
        { label: "Tassi di conversione piu alti" },
        { label: "Per video prodotto" },
        { label: "Aumento engagement social" }
      ],
      testimonial: {
        quote: "Ora creiamo video per ogni tonalita. Il nostro TikTok e diventato virale tre volte il mese scorso. Hyreel ha cambiato completamente il nostro gioco.",
        author: "Jessica K.",
        role: "Social Media Manager, Brand Beauty"
      },
      faqs: [
        { question: "Hyreel puo catturare brillantezza e lucentezza del prodotto?", answer: "Si! Gli effetti di movimento evidenziano superfici riflettenti, particelle glitterate e texture in modi che le foto statiche non possono." },
        { question: "Come creo video per tutte le mie tonalita?", answer: "Hyreel gestisce la scala facilmente. Crea video per tutta la tua gamma di tonalita in una sessione. Molti brand elaborano 50+ prodotti in un pomeriggio." },
        { question: "Quali stili video funzionano meglio per il beauty?", answer: "Zoom lenti per texture, orbite per packaging e tagli veloci per social performano meglio. Hyreel supporta tutti questi stili." },
        { question: "Posso usarli sul mio e-commerce?", answer: "Assolutamente. I video Hyreel funzionano su Shopify, portali Sephora, Amazon e tutte le piattaforme retail beauty." },
        { question: "Ho bisogno di fotografia prodotto professionale?", answer: "Le foto professionali producono i migliori risultati, ma Hyreel funziona con qualsiasi immagine prodotto chiara. Una buona illuminazione e il fattore chiave." }
      ],
      ctaText: "Crea Video Beauty Gratis"
    },
    nl: {
      name: "Beauty & Cosmetica",
      heroHeadline: "AI Videomarketing voor Beauty",
      heroSubheadline: "Verander productfoto's in glamoureuze beauty video's. Toon texturen, swatches en producten in beweging.",
      metaTitle: "AI Video voor Beauty & Cosmeticamerken | Hyreel",
      metaDescription: "Maak verbluffende beautyvideo's van productfoto's. Toon make-up, skincare en cosmetica in beweging.",
      challenges: [
        { title: "Textuur Is Alles", description: "Klanten moeten textuur, glans en finish zien -- statische foto's vangen dat niet." },
        { title: "TikTok & Reels Druk", description: "Beautymerken hebben constant videocontent nodig. Productie kan niet bijhouden." },
        { title: "Hoge Productiestandaarden", description: "Beauty videografie vereist perfecte belichting en dure productie voor premium look." },
        { title: "Groot Aantal SKU's", description: "Tientallen tinten en producten betekenen duizenden stukken content nodig." }
      ],
      solutions: [
        { title: "Toon Glans & Textuur", description: "Bewegingseffecten benadrukken productglans, glitter en textuur beter dan elke foto." },
        { title: "Close-Up Details", description: "Zoom-effecten tonen productkwaliteit, verpakkingsdetails en kleurweergave." },
        { title: "Premium Look & Feel", description: "Cinematische beweging geeft elk productvideo een hoogwaardige editoriale kwaliteit." },
        { title: "Social-Ready Content", description: "Maak TikTok, Reels en YouTube Shorts content van je productfotografie." }
      ],
      videoTypes: [
        { title: "Product Reveals", description: "Dramatische verpakkings- en productonthullingen" },
        { title: "Textuur Close-Ups", description: "Toon glans, glitter en finish in beweging" },
        { title: "Swatch Video's", description: "Kleurweergave en tintvergelijkingen" },
        { title: "Routine Video's", description: "Aanbrengorvolgorde en productcombinaties" },
        { title: "Voor/Na", description: "Toon transformatie en resultaten" },
        { title: "Collectie Lanceringen", description: "Nieuwe product- en collectieaankondigingen" }
      ],
      benefits: [
        "Toon producttextuur en finish in beweging",
        "Maak content voor elke tint en SKU",
        "Houd bij met social media contenteisen",
        "Bereik premium productiewaarde betaalbaar",
        "Lanceer nieuwe producten met video vanaf dag een",
        "Genereer hogere conversieratio's online"
      ],
      stats: [
        { label: "Willen producten in video zien" },
        { label: "Hogere conversieratio's" },
        { label: "Per productvideo" },
        { label: "Social engagement boost" }
      ],
      testimonial: {
        quote: "We maken nu video voor elke tint. Onze TikTok ging drie keer viraal vorige maand. Hyreel veranderde ons contentspel compleet.",
        author: "Jessica K.",
        role: "Social Media Manager, Beautymerk"
      },
      faqs: [
        { question: "Kan Hyreel productglans en schittering vastleggen?", answer: "Ja! De bewegingseffecten benadrukken reflecterende oppervlakken, glitterdeeltjes en textuur zoals statische foto's niet kunnen." },
        { question: "Hoe maak ik video's voor al mijn tinten?", answer: "Hyreel handelt schaal eenvoudig. Maak video's voor je hele tintenpalet in een sessie. Veel merken verwerken 50+ producten in een middag." },
        { question: "Welke videostijlen werken het beste voor beauty?", answer: "Langzame zooms voor textuur, orbits voor verpakking en snelle cuts voor social presteren het beste. Hyreel ondersteunt al deze stijlen." },
        { question: "Kan ik deze op mijn e-commerce gebruiken?", answer: "Absoluut. Hyreel video's werken op Shopify, Douglas, Amazon en alle beauty retailplatforms." },
        { question: "Heb ik professionele productfotografie nodig?", answer: "Professionele foto's leveren de beste resultaten, maar Hyreel werkt met elk helder productbeeld. Goede belichting is de sleutelfactor." }
      ],
      ctaText: "Maak Gratis Beauty Video's"
    },
    pl: {
      name: "Uroda i Kosmetyki",
      heroHeadline: "Marketing Wideo AI dla Urody",
      heroSubheadline: "Zamien zdjecia produktów w glamour beauty wideo. Pokaz tekstury, swatche i produkty w ruchu.",
      metaTitle: "Wideo AI dla Marek Urody i Kosmetyków | Hyreel",
      metaDescription: "Twórz oszalamiajace beauty wideo ze zdjec produktów. Pokaz makijaz, pielegnacje i kosmetyki w ruchu.",
      challenges: [
        { title: "Tekstura To Wszystko", description: "Klienci musza widziec teksture, blask i wykonczenie -- statyczne zdjecia tego nie oddaja." },
        { title: "Presja TikTok i Reels", description: "Marki beauty potrzebuja ciaglej tresci wideo. Produkcja nie nadaza." },
        { title: "Wysokie Standardy Produkcji", description: "Wideografia beauty wymaga idealnego oswietlenia i drogiej produkcji dla premium look." },
        { title: "Duza Liczba SKU", description: "Dziesiatki odcieni i produktów oznaczaja tysiace potrzebnych tresci." }
      ],
      solutions: [
        { title: "Pokaz Blask i Teksture", description: "Efekty ruchu podkreslaja polysk, brokat i teksture lepiej niz jakiekolwiek zdjecie." },
        { title: "Detale w Zblizeniu", description: "Efekty zoom pokazuja jakosc produktu, detale opakowania i oddanie koloru." },
        { title: "Premium Look i Feel", description: "Kinowy ruch nadaje kazdemu filmowi produktowemu wysokiej jakosci edytorialny charakter." },
        { title: "Tresc Social-Ready", description: "Twórz tresc TikTok, Reels i YouTube Shorts ze swojej fotografii produktowej." }
      ],
      videoTypes: [
        { title: "Prezentacje Produktów", description: "Dramatyczne odkrycia opakowan i produktów" },
        { title: "Zblizenia Tekstury", description: "Pokaz polysk, brokat i wykonczenie w ruchu" },
        { title: "Filmy Swatch", description: "Oddanie koloru i porównania odcieni" },
        { title: "Filmy Rutyny", description: "Kolejnosc aplikacji i kombinacje produktów" },
        { title: "Przed/Po", description: "Pokaz transformacje i rezultaty" },
        { title: "Premiery Kolekcji", description: "Ogloszenia nowych produktów i kolekcji" }
      ],
      benefits: [
        "Pokaz teksture i wykonczenie produktu w ruchu",
        "Twórz tresc dla kazdego odcienia i SKU",
        "Nadazaj za wymaganiami tresci social media",
        "Osiagnij premium wartosc produkcji w przystepnej cenie",
        "Wprowadzaj nowe produkty z wideo od pierwszego dnia",
        "Generuj wyzsze wskazniki konwersji online"
      ],
      stats: [
        { label: "Chca widziec produkty na wideo" },
        { label: "Wyzsze wskazniki konwersji" },
        { label: "Na film produktowy" },
        { label: "Wzrost zaangazowania social" }
      ],
      testimonial: {
        quote: "Teraz tworzymy wideo dla kazdego odcienia. Nasz TikTok stal sie wiralowy trzy razy w zeszlym miesiacu. Hyreel calkowicie zmienil nasza gre contentowa.",
        author: "Jessica K.",
        role: "Social Media Manager, Marka Beauty"
      },
      faqs: [
        { question: "Czy Hyreel moze uchwycic polysk i blask produktu?", answer: "Tak! Efekty ruchu podkreslaja odbijajace powierzchnie, czasteczki brokatu i teksture tak jak statyczne zdjecia nie moga." },
        { question: "Jak stworzyc wideo dla wszystkich moich odcieni?", answer: "Hyreel latwo obsluguje skale. Stwórz wideo dla calej gamy odcieni w jednej sesji. Wiele marek przetwarza 50+ produktów w jedno popoludnie." },
        { question: "Jakie style wideo dzialaja najlepiej dla beauty?", answer: "Wolne zoomy dla tekstury, orbity dla opakowania i szybkie ciecia dla social dzialaja najlepiej. Hyreel obsluguje wszystkie te style." },
        { question: "Czy moge uzywac ich na moim e-commerce?", answer: "Absolutnie. Filmy Hyreel dzialaja na Shopify, portalach Sephora, Amazon i wszystkich platformach beauty retail." },
        { question: "Czy potrzebuje profesjonalnej fotografii produktowej?", answer: "Profesjonalne zdjecia daja najlepsze wyniki, ale Hyreel dziala z kazdym wyraznym obrazem produktu. Dobre oswietlenie to kluczowy czynnik." }
      ],
      ctaText: "Twórz Beauty Wideo Za Darmo"
    },
    ja: {
      name: "ビューティー・コスメ",
      heroHeadline: "ビューティーのためのAI動画マーケティング",
      heroSubheadline: "商品写真をグラマラスなビューティー動画に変換。テクスチャ、スウォッチ、商品を動きで見せる。",
      metaTitle: "ビューティー・コスメブランドのためのAI動画 | Hyreel",
      metaDescription: "商品写真から魅力的なビューティー動画を作成。メイクアップ、スキンケア、コスメを動きで見せる。",
      challenges: [
        { title: "テクスチャがすべて", description: "顧客はテクスチャ、輝き、仕上がりを見る必要がある -- 静止画では伝わらない。" },
        { title: "TikTokとReelsのプレッシャー", description: "ビューティーブランドは常時動画コンテンツが必要。制作が追いつかない。" },
        { title: "高い制作基準", description: "ビューティー動画撮影はプレミアムに見せるため完璧な照明と高額な制作が必要。" },
        { title: "多くのSKU", description: "数十の色味と商品は数千のコンテンツが必要を意味する。" }
      ],
      solutions: [
        { title: "輝きとテクスチャを見せる", description: "モーションエフェクトは写真より商品の輝き、ラメ、テクスチャを引き立てる。" },
        { title: "クローズアップディテール", description: "ズームエフェクトで商品品質、パッケージディテール、発色を見せる。" },
        { title: "プレミアムなルック", description: "シネマティックな動きがすべての商品動画にハイエンドなエディトリアル品質を与える。" },
        { title: "SNS対応コンテンツ", description: "商品写真からTikTok、Reels、YouTube Shortsコンテンツを作成。" }
      ],
      videoTypes: [
        { title: "商品リビール", description: "パッケージと商品のドラマチックな登場" },
        { title: "テクスチャクローズアップ", description: "動きでシマー、ラメ、仕上がりを見せる" },
        { title: "スウォッチ動画", description: "発色と色味比較" },
        { title: "ルーティン動画", description: "塗布順序と商品コンビネーション" },
        { title: "ビフォー/アフター", description: "変化と結果を見せる" },
        { title: "コレクションローンチ", description: "新商品・コレクションの発表" }
      ],
      benefits: [
        "動きで商品のテクスチャと仕上がりを見せる",
        "すべての色味とSKUのコンテンツを作成",
        "SNSのコンテンツ需要についていく",
        "プレミアムな制作価値を手頃に達成",
        "初日から動画付きで新商品をローンチ",
        "オンラインでより高いコンバージョン率を生成"
      ],
      stats: [
        { label: "動画で商品を見たい" },
        { label: "より高いコンバージョン率" },
        { label: "商品動画あたり" },
        { label: "SNSエンゲージメント向上" }
      ],
      testimonial: {
        quote: "今ではすべての色味で動画を作成しています。先月TikTokが3回バズりました。Hyreelは私たちのコンテンツゲームを完全に変えました。",
        author: "ジェシカ K.",
        role: "SNSマネージャー、ビューティーブランド"
      },
      faqs: [
        { question: "Hyreelは商品の輝きとシマーを捉えられますか？", answer: "はい！モーションエフェクトは静止画では捉えられない反射面、ラメ粒子、テクスチャを引き立てます。" },
        { question: "すべての色味の動画をどう作成する？", answer: "Hyreelは簡単にスケールに対応。1セッションで全色味の動画を作成。多くのブランドが1日で50以上の商品を処理しています。" },
        { question: "ビューティーに最適な動画スタイルは？", answer: "テクスチャにはスローズーム、パッケージにはオービット、SNS用には早いカットが効果的。Hyreelはすべてのスタイルをサポート。" },
        { question: "ECサイトで使用できますか？", answer: "もちろん。Hyreel動画はShopify、@cosme、Amazon、すべてのビューティーリテールプラットフォームで機能します。" },
        { question: "プロの商品写真が必要ですか？", answer: "プロの写真が最良の結果を出しますが、Hyreelは明確な商品画像なら何でも機能します。良い照明が鍵です。" }
      ],
      ctaText: "無料でビューティー動画を作成"
    },
    ko: {
      name: "뷰티 & 화장품",
      heroHeadline: "뷰티를 위한 AI 비디오 마케팅",
      heroSubheadline: "제품 사진을 글래머러스한 뷰티 비디오로 변환. 텍스처, 스와치, 제품을 움직임으로 보여주기.",
      metaTitle: "뷰티 & 화장품 브랜드를 위한 AI 비디오 | Hyreel",
      metaDescription: "제품 사진에서 멋진 뷰티 비디오 제작. 메이크업, 스킨케어, 화장품을 움직임으로 보여주기.",
      challenges: [
        { title: "텍스처가 전부", description: "고객은 텍스처, 광택, 마무리를 봐야 함 -- 정적인 사진은 이를 담지 못함." },
        { title: "TikTok & Reels 압박", description: "뷰티 브랜드는 지속적인 비디오 콘텐츠가 필요. 제작이 따라가지 못함." },
        { title: "높은 제작 기준", description: "뷰티 비디오그래피는 프리미엄 룩을 위해 완벽한 조명과 비싼 제작이 필요." },
        { title: "많은 SKU", description: "수십 가지 색조와 제품은 수천 개의 콘텐츠가 필요함을 의미." }
      ],
      solutions: [
        { title: "광택과 텍스처 보여주기", description: "모션 효과는 어떤 사진보다 제품의 광택, 글리터, 텍스처를 더 잘 부각." },
        { title: "클로즈업 디테일", description: "줌 효과로 제품 품질, 패키징 디테일, 발색 보여주기." },
        { title: "프리미엄 룩 앤 필", description: "시네마틱 움직임이 모든 제품 비디오에 하이엔드 에디토리얼 품질 부여." },
        { title: "SNS 대응 콘텐츠", description: "제품 사진에서 TikTok, Reels, YouTube Shorts 콘텐츠 제작." }
      ],
      videoTypes: [
        { title: "제품 리빌", description: "패키징과 제품의 드라마틱한 등장" },
        { title: "텍스처 클로즈업", description: "움직임으로 쉬머, 글리터, 마무리 보여주기" },
        { title: "스와치 비디오", description: "발색과 색조 비교" },
        { title: "루틴 비디오", description: "바르는 순서와 제품 조합" },
        { title: "전/후", description: "변화와 결과 보여주기" },
        { title: "컬렉션 런칭", description: "신제품 및 컬렉션 발표" }
      ],
      benefits: [
        "움직임으로 제품 텍스처와 마무리 보여주기",
        "모든 색조와 SKU의 콘텐츠 제작",
        "SNS 콘텐츠 요구에 따라가기",
        "프리미엄 제작 가치를 합리적으로 달성",
        "첫날부터 비디오와 함께 신제품 출시",
        "온라인에서 더 높은 전환율 생성"
      ],
      stats: [
        { label: "비디오로 제품을 보고 싶어함" },
        { label: "더 높은 전환율" },
        { label: "제품 비디오당" },
        { label: "SNS 참여 증가" }
      ],
      testimonial: {
        quote: "이제 모든 색조의 비디오를 만듭니다. 지난달 TikTok이 3번 바이럴됐습니다. Hyreel이 우리의 콘텐츠 게임을 완전히 바꿨어요.",
        author: "제시카 K.",
        role: "SNS 매니저, 뷰티 브랜드"
      },
      faqs: [
        { question: "Hyreel이 제품의 광택과 반짝임을 담을 수 있나요?", answer: "네! 모션 효과는 정적인 사진이 담을 수 없는 반사면, 글리터 입자, 텍스처를 부각합니다." },
        { question: "모든 색조의 비디오를 어떻게 만드나요?", answer: "Hyreel은 쉽게 확장됩니다. 한 세션에서 전체 색조 범위의 비디오 제작. 많은 브랜드가 하루에 50개 이상의 제품을 처리합니다." },
        { question: "뷰티에 가장 효과적인 비디오 스타일은?", answer: "텍스처에는 느린 줌, 패키징에는 오빗, SNS용에는 빠른 컷이 가장 효과적. Hyreel은 이 모든 스타일을 지원합니다." },
        { question: "EC 사이트에서 사용할 수 있나요?", answer: "물론입니다. Hyreel 비디오는 Shopify, 올리브영, Amazon 및 모든 뷰티 리테일 플랫폼에서 작동합니다." },
        { question: "전문 제품 사진이 필요한가요?", answer: "전문 사진이 최고의 결과를 내지만, Hyreel은 선명한 제품 이미지라면 무엇이든 작동합니다. 좋은 조명이 핵심입니다." }
      ],
      ctaText: "무료로 뷰티 비디오 만들기"
    },
    zh: {
      name: "美妆护肤",
      heroHeadline: "美妆AI视频营销",
      heroSubheadline: "将产品照片转换为迷人的美妆视频。展示质地、试色和动态产品。",
      metaTitle: "美妆与化妆品品牌的AI视频 | Hyreel",
      metaDescription: "从产品照片创建惊艳的美妆视频。展示彩妆、护肤和化妆品的动态效果。",
      challenges: [
        { title: "质地就是一切", description: "客户需要看到质地、光泽和妆效——静态照片无法传达。" },
        { title: "TikTok和Reels压力", description: "美妆品牌需要持续的视频内容。制作跟不上。" },
        { title: "高制作标准", description: "美妆视频拍摄需要完美的灯光和昂贵的制作才能看起来高端。" },
        { title: "大量SKU", description: "数十种色号和产品意味着需要数千个内容。" }
      ],
      solutions: [
        { title: "展示光泽和质地", description: "动态效果比任何照片都更能突出产品光泽、闪粉和质地。" },
        { title: "特写细节", description: "缩放效果展示产品质量、包装细节和显色度。" },
        { title: "高端外观和感觉", description: "电影级动作给每个产品视频带来高端编辑品质。" },
        { title: "社交媒体就绪内容", description: "从产品照片创建TikTok、Reels和YouTube Shorts内容。" }
      ],
      videoTypes: [
        { title: "产品揭晓", description: "包装和产品的戏剧性展示" },
        { title: "质地特写", description: "动态展示闪光、亮片和妆效" },
        { title: "试色视频", description: "显色度和色号比较" },
        { title: "护肤流程视频", description: "使用顺序和产品搭配" },
        { title: "前后对比", description: "展示转变和效果" },
        { title: "系列发布", description: "新产品和系列发布公告" }
      ],
      benefits: [
        "用动态展示产品质地和妆效",
        "为每个色号和SKU创建内容",
        "跟上社交媒体内容需求",
        "以实惠的价格实现高端制作价值",
        "新产品从第一天就有视频",
        "在线产生更高的转化率"
      ],
      stats: [
        { label: "想看视频中的产品" },
        { label: "更高的转化率" },
        { label: "每个产品视频" },
        { label: "社交互动提升" }
      ],
      testimonial: {
        quote: "现在我们为每个色号制作视频。上个月我们的TikTok三次爆火。Hyreel完全改变了我们的内容策略。",
        author: "Jessica K.",
        role: "社交媒体经理，美妆品牌"
      },
      faqs: [
        { question: "Hyreel能捕捉产品的光泽和闪光吗？", answer: "可以！动态效果以静态照片无法实现的方式突出反光表面、闪光粒子和质地。" },
        { question: "如何为所有色号创建视频？", answer: "Hyreel轻松处理规模。一次会话为整个色号范围创建视频。许多品牌一个下午处理50+产品。" },
        { question: "什么视频风格最适合美妆？", answer: "质地用慢速缩放，包装用环绕，社交用快速剪辑效果最好。Hyreel支持所有这些风格。" },
        { question: "我能在电商网站上使用吗？", answer: "当然。Hyreel视频可在Shopify、天猫、京东、Amazon和所有美妆零售平台上使用。" },
        { question: "需要专业产品摄影吗？", answer: "专业照片效果最好，但Hyreel可以处理任何清晰的产品图像。良好的照明是关键因素。" }
      ],
      ctaText: "免费创建美妆视频"
    }
  }
};

export function getLocalizedIndustryContent(
  slug: string,
  locale: Locale
): Partial<IndustryTranslation> | null {
  if (locale === "en") return null;
  const translations = industryTranslations[slug];
  const nonEnLocale = locale as NonEnLocale;
  const fallback = createIndustryFallback(slug, nonEnLocale);
  const translated = translations?.[locale];
  if (!translated) return fallback;
  return fallback ? { ...fallback, ...translated } : translated;
}
