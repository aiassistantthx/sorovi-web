import type { Locale } from "@/lib/i18n/config";

export type NonEnLocale = Exclude<Locale, "en">;

type TextPair = { title: string; description: string };
type Faq = { question: string; answer: string };
type Stat = { value?: string; label: string };

const aiByLocale: Record<NonEnLocale, string> = {
  es: "IA",
  de: "KI",
  fr: "IA",
  pt: "IA",
  ru: "ИИ",
  it: "IA",
  nl: "AI",
  pl: "AI",
  ja: "AI",
  ko: "AI",
  zh: "AI",
};

const names: Record<NonEnLocale, Record<string, string>> = {
  es: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness y bienestar",
    "travel-hospitality": "Viajes y hoteleria",
    "education-online-courses": "Educacion y cursos online",
    "jewelry-accessories": "Joyeria y accesorios",
    "pet-products": "Productos para mascotas",
    automotive: "Automocion",
    "small-business": "Pequenas empresas",
    influencers: "Influencers",
    marketers: "Especialistas en marketing",
    agencies: "Agencias",
    freelancers: "Freelancers",
    entrepreneurs: "Emprendedores",
    "content-teams": "Equipos de contenido",
    realtors: "Agentes inmobiliarios",
    coaches: "Coaches",
    photographers: "Fotografos",
  },
  de: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness und Wellness",
    "travel-hospitality": "Reisen und Hotellerie",
    "education-online-courses": "Bildung und Online-Kurse",
    "jewelry-accessories": "Schmuck und Accessoires",
    "pet-products": "Haustierprodukte",
    automotive: "Automotive",
    "small-business": "Kleine Unternehmen",
    influencers: "Influencer",
    marketers: "Marketingteams",
    agencies: "Agenturen",
    freelancers: "Freelancer",
    entrepreneurs: "Unternehmer",
    "content-teams": "Content-Teams",
    realtors: "Immobilienmakler",
    coaches: "Coaches",
    photographers: "Fotografen",
  },
  fr: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness et bien-etre",
    "travel-hospitality": "Voyage et hotellerie",
    "education-online-courses": "Education et cours en ligne",
    "jewelry-accessories": "Bijoux et accessoires",
    "pet-products": "Produits pour animaux",
    automotive: "Automobile",
    "small-business": "Petites entreprises",
    influencers: "Influenceurs",
    marketers: "Marketeurs",
    agencies: "Agences",
    freelancers: "Freelances",
    entrepreneurs: "Entrepreneurs",
    "content-teams": "Equipes de contenu",
    realtors: "Agents immobiliers",
    coaches: "Coachs",
    photographers: "Photographes",
  },
  pt: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness e bem-estar",
    "travel-hospitality": "Viagens e hotelaria",
    "education-online-courses": "Educacao e cursos online",
    "jewelry-accessories": "Joias e acessorios",
    "pet-products": "Produtos para pets",
    automotive: "Automotivo",
    "small-business": "Pequenas empresas",
    influencers: "Influenciadores",
    marketers: "Profissionais de marketing",
    agencies: "Agencias",
    freelancers: "Freelancers",
    entrepreneurs: "Empreendedores",
    "content-teams": "Equipes de conteudo",
    realtors: "Corretores de imoveis",
    coaches: "Coaches",
    photographers: "Fotografos",
  },
  ru: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Фитнес и wellness",
    "real-estate": "Недвижимость",
    "travel-hospitality": "Путешествия и отели",
    "education-online-courses": "Образование и онлайн-курсы",
    "jewelry-accessories": "Украшения и аксессуары",
    "pet-products": "Товары для питомцев",
    automotive: "Автоиндустрия",
    "small-business": "Малый бизнес",
    influencers: "Инфлюенсеры",
    marketers: "Маркетологи",
    agencies: "Агентства",
    freelancers: "Фрилансеры",
    entrepreneurs: "Предприниматели",
    "content-teams": "Контент-команды",
    realtors: "Риелторы",
    coaches: "Коучи",
    photographers: "Фотографы",
  },
  it: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness e benessere",
    "travel-hospitality": "Viaggi e ospitalita",
    "education-online-courses": "Formazione e corsi online",
    "jewelry-accessories": "Gioielli e accessori",
    "pet-products": "Prodotti per animali",
    automotive: "Automotive",
    "small-business": "Piccole imprese",
    influencers: "Influencer",
    marketers: "Marketer",
    agencies: "Agenzie",
    freelancers: "Freelancer",
    entrepreneurs: "Imprenditori",
    "content-teams": "Team contenuti",
    realtors: "Agenti immobiliari",
    coaches: "Coach",
    photographers: "Fotografi",
  },
  nl: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness en wellness",
    "travel-hospitality": "Reizen en hospitality",
    "education-online-courses": "Educatie en online cursussen",
    "jewelry-accessories": "Sieraden en accessoires",
    "pet-products": "Huisdierproducten",
    automotive: "Automotive",
    "small-business": "Kleine bedrijven",
    influencers: "Influencers",
    marketers: "Marketeers",
    agencies: "Bureaus",
    freelancers: "Freelancers",
    entrepreneurs: "Ondernemers",
    "content-teams": "Contentteams",
    realtors: "Makelaars",
    coaches: "Coaches",
    photographers: "Fotografen",
  },
  pl: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "Fitness i wellness",
    "travel-hospitality": "Podroze i hotelarstwo",
    "education-online-courses": "Edukacja i kursy online",
    "jewelry-accessories": "Bizuteria i akcesoria",
    "pet-products": "Produkty dla zwierzat",
    automotive: "Motoryzacja",
    "small-business": "Male firmy",
    influencers: "Influencerzy",
    marketers: "Marketerzy",
    agencies: "Agencje",
    freelancers: "Freelancerzy",
    entrepreneurs: "Przedsiebiorcy",
    "content-teams": "Zespoly contentowe",
    realtors: "Agenci nieruchomosci",
    coaches: "Coachowie",
    photographers: "Fotografowie",
  },
  ja: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "フィットネスとウェルネス",
    "travel-hospitality": "旅行とホスピタリティ",
    "education-online-courses": "教育とオンライン講座",
    "jewelry-accessories": "ジュエリーとアクセサリー",
    "pet-products": "ペット用品",
    automotive: "自動車",
    "small-business": "中小企業",
    influencers: "インフルエンサー",
    marketers: "マーケター",
    agencies: "代理店",
    freelancers: "フリーランサー",
    entrepreneurs: "起業家",
    "content-teams": "コンテンツチーム",
    realtors: "不動産エージェント",
    coaches: "コーチ",
    photographers: "フォトグラファー",
  },
  ko: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "피트니스와 웰니스",
    "travel-hospitality": "여행과 호텔",
    "education-online-courses": "교육과 온라인 강의",
    "jewelry-accessories": "주얼리와 액세서리",
    "pet-products": "반려동물 제품",
    automotive: "자동차",
    "small-business": "소기업",
    influencers: "인플루언서",
    marketers: "마케터",
    agencies: "에이전시",
    freelancers: "프리랜서",
    entrepreneurs: "창업가",
    "content-teams": "콘텐츠 팀",
    realtors: "부동산 중개인",
    coaches: "코치",
    photographers: "사진작가",
  },
  zh: {
    "youtube-shorts": "YouTube Shorts",
    pinterest: "Pinterest",
    linkedin: "LinkedIn",
    "facebook-reels": "Facebook Reels",
    "fitness-wellness": "健身与健康",
    "travel-hospitality": "旅行与酒店",
    "education-online-courses": "教育与在线课程",
    "jewelry-accessories": "珠宝与配饰",
    "pet-products": "宠物产品",
    automotive: "汽车行业",
    "small-business": "小型企业",
    influencers: "影响者",
    marketers: "营销人员",
    agencies: "代理机构",
    freelancers: "自由职业者",
    entrepreneurs: "创业者",
    "content-teams": "内容团队",
    realtors: "房地产经纪人",
    coaches: "教练",
    photographers: "摄影师",
  },
};

export function localizedName(slug: string, fallbackName: string, locale: NonEnLocale): string {
  return names[locale][slug] || localizeToolName(fallbackName, locale);
}

function localizeToolName(name: string, locale: NonEnLocale): string {
  const wordMaps: Record<NonEnLocale, Array<[RegExp, string]>> = {
    es: [[/\bAI\b/g, "IA"], [/Video/g, "Video"], [/Generator/g, "Generador"], [/Maker/g, "Creador"], [/Creator/g, "Creador"], [/Image/g, "Imagen"], [/Photo/g, "Foto"], [/Script/g, "Guiones"], [/Voice/g, "Voz"], [/Effect/g, "Efecto"], [/Product/g, "Producto"], [/Social Media/g, "Redes Sociales"], [/Short/g, "Corto"], [/App/g, "App"]],
    de: [[/\bAI\b/g, "KI"], [/Video/g, "Video"], [/Generator/g, "Generator"], [/Maker/g, "Ersteller"], [/Creator/g, "Creator"], [/Image/g, "Bild"], [/Photo/g, "Foto"], [/Script/g, "Skript"], [/Voice/g, "Stimme"], [/Effect/g, "Effekt"], [/Product/g, "Produkt"], [/Social Media/g, "Social Media"], [/Short/g, "Kurzvideo"], [/App/g, "App"]],
    fr: [[/\bAI\b/g, "IA"], [/Video/g, "Video"], [/Generator/g, "Generateur"], [/Maker/g, "Createur"], [/Creator/g, "Createur"], [/Image/g, "Image"], [/Photo/g, "Photo"], [/Script/g, "Script"], [/Voice/g, "Voix"], [/Effect/g, "Effet"], [/Product/g, "Produit"], [/Social Media/g, "Reseaux Sociaux"], [/Short/g, "Short"], [/App/g, "App"]],
    pt: [[/\bAI\b/g, "IA"], [/Video/g, "Video"], [/Generator/g, "Gerador"], [/Maker/g, "Criador"], [/Creator/g, "Criador"], [/Image/g, "Imagem"], [/Photo/g, "Foto"], [/Script/g, "Roteiro"], [/Voice/g, "Voz"], [/Effect/g, "Efeito"], [/Product/g, "Produto"], [/Social Media/g, "Redes Sociais"], [/Short/g, "Curto"], [/App/g, "App"]],
    ru: [[/\bAI\b/g, "ИИ"], [/Video/g, "Видео"], [/Generator/g, "Генератор"], [/Maker/g, "Создатель"], [/Creator/g, "Создатель"], [/Image/g, "Изображение"], [/Photo/g, "Фото"], [/Script/g, "Сценариев"], [/Voice/g, "Голоса"], [/Effect/g, "Эффект"], [/Product/g, "Продуктовый"], [/Social Media/g, "Социальных Сетей"], [/Short/g, "Коротких Видео"], [/App/g, "Приложение"]],
    it: [[/\bAI\b/g, "IA"], [/Video/g, "Video"], [/Generator/g, "Generatore"], [/Maker/g, "Creatore"], [/Creator/g, "Creatore"], [/Image/g, "Immagine"], [/Photo/g, "Foto"], [/Script/g, "Script"], [/Voice/g, "Voce"], [/Effect/g, "Effetto"], [/Product/g, "Prodotto"], [/Social Media/g, "Social Media"], [/Short/g, "Short"], [/App/g, "App"]],
    nl: [[/\bAI\b/g, "AI"], [/Video/g, "Video"], [/Generator/g, "Generator"], [/Maker/g, "Maker"], [/Creator/g, "Creator"], [/Image/g, "Afbeelding"], [/Photo/g, "Foto"], [/Script/g, "Script"], [/Voice/g, "Stem"], [/Effect/g, "Effect"], [/Product/g, "Product"], [/Social Media/g, "Social Media"], [/Short/g, "Short"], [/App/g, "App"]],
    pl: [[/\bAI\b/g, "AI"], [/Video/g, "Wideo"], [/Generator/g, "Generator"], [/Maker/g, "Kreator"], [/Creator/g, "Kreator"], [/Image/g, "Obraz"], [/Photo/g, "Zdjecie"], [/Script/g, "Skrypt"], [/Voice/g, "Glos"], [/Effect/g, "Efekt"], [/Product/g, "Produkt"], [/Social Media/g, "Social Media"], [/Short/g, "Short"], [/App/g, "Aplikacja"]],
    ja: [[/\bAI\b/g, "AI"], [/Video/g, "動画"], [/Generator/g, "ジェネレーター"], [/Maker/g, "メーカー"], [/Creator/g, "クリエイター"], [/Image/g, "画像"], [/Photo/g, "写真"], [/Script/g, "スクリプト"], [/Voice/g, "音声"], [/Effect/g, "エフェクト"], [/Product/g, "商品"], [/Social Media/g, "ソーシャルメディア"], [/Short/g, "ショート"], [/App/g, "アプリ"]],
    ko: [[/\bAI\b/g, "AI"], [/Video/g, "비디오"], [/Generator/g, "생성기"], [/Maker/g, "메이커"], [/Creator/g, "크리에이터"], [/Image/g, "이미지"], [/Photo/g, "사진"], [/Script/g, "스크립트"], [/Voice/g, "음성"], [/Effect/g, "효과"], [/Product/g, "제품"], [/Social Media/g, "소셜 미디어"], [/Short/g, "쇼트"], [/App/g, "앱"]],
    zh: [[/\bAI\b/g, "AI"], [/Video/g, "视频"], [/Generator/g, "生成器"], [/Maker/g, "制作器"], [/Creator/g, "创建器"], [/Image/g, "图像"], [/Photo/g, "照片"], [/Script/g, "脚本"], [/Voice/g, "语音"], [/Effect/g, "效果"], [/Product/g, "产品"], [/Social Media/g, "社交媒体"], [/Short/g, "短视频"], [/App/g, "应用"]],
  };

  return wordMaps[locale].reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), name);
}

const copy = {
  es: {
    meta: (name: string) => `${name} con IA | Hyreel`,
    desc: (name: string) => `Crea videos profesionales para ${name} a partir de fotos en segundos. Hyreel usa IA para producir contenido vertical listo para redes sociales.`,
    hero: (name: string) => `Videos con IA para ${name}`,
    sub: (name: string) => `Convierte fotos en videos dinamicos para ${name}. Sin editar, sin produccion cara, listos para publicar.`,
    cta: "Crear Videos Gratis",
    steps: ["Sube tus fotos", "Elige un efecto", "La IA crea el video", "Exporta y publica"],
    stepDesc: ["Selecciona imagenes de producto, marca o campana.", "Usa zoom, orbita, pan o parallax segun el objetivo.", "Hyreel anade movimiento, ritmo y acabado profesional.", "Descarga el MP4 y usalo en tus canales."],
    features: ["Movimiento cinematografico", "Formato vertical optimizado", "Creacion rapida", "Listo para redes"],
    featureDesc: ["Efectos de camara que hacen que una foto se sienta viva.", "Videos preparados para TikTok, Reels, Shorts y anuncios.", "Genera multiples variantes sin abrir un editor.", "Exportaciones limpias para publicar o probar en campanas."],
    faqQ: ["Necesito saber editar?", "Puedo usar mis propias fotos?", "Funciona para anuncios?", "Cuanto tarda crear un video?"],
    faqA: ["No. Hyreel automatiza la edicion y el movimiento.", "Si. Las mejores fotos de producto o marca suelen dar los mejores resultados.", "Si. Puedes exportar videos para anuncios, ecommerce y redes sociales.", "Normalmente puedes crear una version lista en minutos."],
  },
  de: {
    meta: (name: string) => `${name} mit KI | Hyreel`,
    desc: (name: string) => `Erstelle professionelle Videos fur ${name} aus Fotos in Sekunden. Hyreel nutzt KI fur vertikale Inhalte, die direkt fur Social Media bereit sind.`,
    hero: (name: string) => `KI-Videos fur ${name}`,
    sub: (name: string) => `Verwandle Fotos in dynamische Videos fur ${name}. Ohne Schnitt, ohne teure Produktion, bereit zum Veröffentlichen.`,
    cta: "Videos Kostenlos Erstellen",
    steps: ["Fotos hochladen", "Effekt auswahlen", "KI erstellt das Video", "Exportieren und posten"],
    stepDesc: ["Wahle Produkt-, Marken- oder Kampagnenbilder aus.", "Nutze Zoom, Orbit, Pan oder Parallax passend zum Ziel.", "Hyreel fugt Bewegung, Rhythmus und professionellen Look hinzu.", "Lade das MP4 herunter und nutze es in deinen Kanalen."],
    features: ["Kinematische Bewegung", "Optimiertes Hochformat", "Schnelle Erstellung", "Social-ready"],
    featureDesc: ["Kameraeffekte lassen Fotos lebendig wirken.", "Videos fur TikTok, Reels, Shorts und Anzeigen vorbereitet.", "Erzeuge Varianten ohne Videoeditor.", "Saubere Exporte fur Posts und Kampagnentests."],
    faqQ: ["Brauche ich Schnittkenntnisse?", "Kann ich eigene Fotos nutzen?", "Funktioniert es fur Anzeigen?", "Wie lange dauert ein Video?"],
    faqA: ["Nein. Hyreel automatisiert Schnitt und Bewegung.", "Ja. Gute Produkt- oder Markenfotos liefern meist die besten Ergebnisse.", "Ja. Exportiere Videos fur Anzeigen, E-Commerce und Social Media.", "In der Regel ist eine fertige Version in wenigen Minuten erstellt."],
  },
  fr: {
    meta: (name: string) => `${name} avec IA | Hyreel`,
    desc: (name: string) => `Creez des videos professionnelles pour ${name} a partir de photos en secondes. Hyreel utilise l'IA pour produire du contenu vertical pret pour les reseaux sociaux.`,
    hero: (name: string) => `Videos IA pour ${name}`,
    sub: (name: string) => `Transformez des photos en videos dynamiques pour ${name}. Sans montage, sans production couteuse, pretes a publier.`,
    cta: "Creer des Videos Gratuitement",
    steps: ["Importez vos photos", "Choisissez un effet", "L'IA cree la video", "Exportez et publiez"],
    stepDesc: ["Selectionnez des images produit, marque ou campagne.", "Utilisez zoom, orbite, panoramique ou parallaxe selon l'objectif.", "Hyreel ajoute mouvement, rythme et finition professionnelle.", "Telechargez le MP4 et utilisez-le sur vos canaux."],
    features: ["Mouvement cinematographique", "Format vertical optimise", "Creation rapide", "Pret pour les reseaux"],
    featureDesc: ["Des effets camera rendent une photo vivante.", "Videos preparees pour TikTok, Reels, Shorts et publicites.", "Creez plusieurs variantes sans editeur video.", "Exports propres pour publier ou tester en campagne."],
    faqQ: ["Dois-je savoir monter?", "Puis-je utiliser mes propres photos?", "Est-ce adapte aux publicites?", "Combien de temps faut-il?"],
    faqA: ["Non. Hyreel automatise le montage et le mouvement.", "Oui. Les bonnes photos produit ou marque donnent les meilleurs resultats.", "Oui. Exportez des videos pour publicites, e-commerce et reseaux sociaux.", "Une version prete peut generalement etre creee en quelques minutes."],
  },
  pt: {
    meta: (name: string) => `${name} com IA | Hyreel`,
    desc: (name: string) => `Crie videos profissionais para ${name} a partir de fotos em segundos. Hyreel usa IA para produzir conteudo vertical pronto para redes sociais.`,
    hero: (name: string) => `Videos com IA para ${name}`,
    sub: (name: string) => `Transforme fotos em videos dinamicos para ${name}. Sem edicao, sem producao cara, prontos para publicar.`,
    cta: "Criar Videos Gratis",
    steps: ["Envie suas fotos", "Escolha um efeito", "A IA cria o video", "Exporte e publique"],
    stepDesc: ["Selecione imagens de produto, marca ou campanha.", "Use zoom, orbita, pan ou parallax conforme o objetivo.", "Hyreel adiciona movimento, ritmo e acabamento profissional.", "Baixe o MP4 e use nos seus canais."],
    features: ["Movimento cinematografico", "Formato vertical otimizado", "Criacao rapida", "Pronto para redes"],
    featureDesc: ["Efeitos de camera fazem a foto ganhar vida.", "Videos preparados para TikTok, Reels, Shorts e anuncios.", "Gere variantes sem abrir um editor.", "Exportacoes limpas para publicar ou testar campanhas."],
    faqQ: ["Preciso saber editar?", "Posso usar minhas fotos?", "Funciona para anuncios?", "Quanto tempo leva?"],
    faqA: ["Nao. Hyreel automatiza edicao e movimento.", "Sim. Boas fotos de produto ou marca costumam dar os melhores resultados.", "Sim. Exporte videos para anuncios, e-commerce e redes sociais.", "Normalmente uma versao pronta leva poucos minutos."],
  },
  ru: {
    meta: (name: string) => `${name} с ИИ | Hyreel`,
    desc: (name: string) => `Создавайте профессиональные видео для ${name} из фотографий за секунды. Hyreel использует ИИ для вертикального контента, готового к соцсетям.`,
    hero: (name: string) => `ИИ-видео для ${name}`,
    sub: (name: string) => `Превращайте фото в динамичные видео для ${name}. Без монтажа, без дорогого продакшена, сразу для публикации.`,
    cta: "Создать Видео Бесплатно",
    steps: ["Загрузите фото", "Выберите эффект", "ИИ создаст видео", "Экспортируйте и публикуйте"],
    stepDesc: ["Выберите изображения продукта, бренда или кампании.", "Используйте зум, орбиту, панораму или параллакс под задачу.", "Hyreel добавит движение, ритм и профессиональную подачу.", "Скачайте MP4 и используйте в своих каналах."],
    features: ["Кинематографичное движение", "Оптимальный вертикальный формат", "Быстрое создание", "Готово для соцсетей"],
    featureDesc: ["Камерные эффекты оживляют статичное фото.", "Видео подготовлены для TikTok, Reels, Shorts и рекламы.", "Создавайте варианты без видеоредактора.", "Чистый экспорт для публикаций и тестов кампаний."],
    faqQ: ["Нужны навыки монтажа?", "Можно использовать свои фото?", "Подходит для рекламы?", "Сколько времени занимает создание?"],
    faqA: ["Нет. Hyreel автоматизирует монтаж и движение.", "Да. Хорошие продуктовые или брендовые фото обычно дают лучший результат.", "Да. Экспортируйте видео для рекламы, e-commerce и соцсетей.", "Обычно готовую версию можно получить за несколько минут."],
  },
  it: {
    meta: (name: string) => `${name} con IA | Hyreel`,
    desc: (name: string) => `Crea video professionali per ${name} da foto in pochi secondi. Hyreel usa l'IA per produrre contenuti verticali pronti per i social.`,
    hero: (name: string) => `Video IA per ${name}`,
    sub: (name: string) => `Trasforma foto in video dinamici per ${name}. Senza editing, senza produzione costosa, pronti da pubblicare.`,
    cta: "Crea Video Gratis",
    steps: ["Carica le foto", "Scegli un effetto", "L'IA crea il video", "Esporta e pubblica"],
    stepDesc: ["Seleziona immagini prodotto, brand o campagna.", "Usa zoom, orbita, pan o parallasse in base all'obiettivo.", "Hyreel aggiunge movimento, ritmo e finitura professionale.", "Scarica l'MP4 e usalo sui tuoi canali."],
    features: ["Movimento cinematografico", "Formato verticale ottimizzato", "Creazione rapida", "Pronto per i social"],
    featureDesc: ["Effetti camera che fanno vivere una foto.", "Video preparati per TikTok, Reels, Shorts e ads.", "Crea varianti senza aprire editor video.", "Export puliti per pubblicare o testare campagne."],
    faqQ: ["Serve saper editare?", "Posso usare le mie foto?", "Funziona per gli annunci?", "Quanto tempo serve?"],
    faqA: ["No. Hyreel automatizza editing e movimento.", "Si. Buone foto prodotto o brand danno spesso i migliori risultati.", "Si. Esporta video per ads, ecommerce e social.", "Di solito una versione pronta richiede pochi minuti."],
  },
  nl: {
    meta: (name: string) => `${name} met AI | Hyreel`,
    desc: (name: string) => `Maak professionele video's voor ${name} uit foto's in seconden. Hyreel gebruikt AI voor verticale content die klaar is voor social media.`,
    hero: (name: string) => `AI-video's voor ${name}`,
    sub: (name: string) => `Verander foto's in dynamische video's voor ${name}. Geen montage, geen dure productie, klaar om te publiceren.`,
    cta: "Maak Gratis Video's",
    steps: ["Upload je foto's", "Kies een effect", "AI maakt de video", "Exporteer en publiceer"],
    stepDesc: ["Selecteer product-, merk- of campagnebeelden.", "Gebruik zoom, orbit, pan of parallax voor je doel.", "Hyreel voegt beweging, ritme en professionele afwerking toe.", "Download de MP4 en gebruik hem op je kanalen."],
    features: ["Cinematische beweging", "Geoptimaliseerd verticaal formaat", "Snelle creatie", "Klaar voor social"],
    featureDesc: ["Camera-effecten laten een foto leven.", "Video's voorbereid voor TikTok, Reels, Shorts en advertenties.", "Maak varianten zonder video-editor.", "Schone exports voor posts en campagnetests."],
    faqQ: ["Moet ik kunnen monteren?", "Kan ik eigen foto's gebruiken?", "Werkt dit voor advertenties?", "Hoe lang duurt het?"],
    faqA: ["Nee. Hyreel automatiseert montage en beweging.", "Ja. Goede product- of merkfoto's geven meestal het beste resultaat.", "Ja. Exporteer video's voor ads, ecommerce en social media.", "Meestal maak je binnen enkele minuten een bruikbare versie."],
  },
  pl: {
    meta: (name: string) => `${name} z AI | Hyreel`,
    desc: (name: string) => `Tworz profesjonalne wideo dla ${name} ze zdjec w kilka sekund. Hyreel uzywa AI do pionowych tresci gotowych na social media.`,
    hero: (name: string) => `Wideo AI dla ${name}`,
    sub: (name: string) => `Zamieniaj zdjecia w dynamiczne wideo dla ${name}. Bez montazu, bez drogiej produkcji, gotowe do publikacji.`,
    cta: "Tworz Wideo za Darmo",
    steps: ["Przeslij zdjecia", "Wybierz efekt", "AI tworzy wideo", "Eksportuj i publikuj"],
    stepDesc: ["Wybierz zdjecia produktu, marki lub kampanii.", "Uzyj zoomu, orbity, panoramy lub paralaksy pod cel.", "Hyreel dodaje ruch, rytm i profesjonalne wykonczenie.", "Pobierz MP4 i uzyj w swoich kanalach."],
    features: ["Kinowy ruch", "Zoptymalizowany format pionowy", "Szybkie tworzenie", "Gotowe na social"],
    featureDesc: ["Efekty kamery ozywiaja statyczne zdjecie.", "Wideo przygotowane pod TikTok, Reels, Shorts i reklamy.", "Tworz warianty bez edytora wideo.", "Czysty eksport do publikacji i testow kampanii."],
    faqQ: ["Czy musze umiec montowac?", "Czy moge uzyc wlasnych zdjec?", "Czy dziala w reklamach?", "Ile trwa tworzenie?"],
    faqA: ["Nie. Hyreel automatyzuje montaz i ruch.", "Tak. Dobre zdjecia produktowe lub brandowe zwykle daja najlepsze efekty.", "Tak. Eksportuj wideo do reklam, e-commerce i social media.", "Zwykle gotowa wersja powstaje w kilka minut."],
  },
  ja: {
    meta: (name: string) => `${name}向けAI動画 | Hyreel`,
    desc: (name: string) => `${name}向けのプロ品質動画を写真から数秒で作成。HyreelはAIでSNS向けの縦型コンテンツを生成します。`,
    hero: (name: string) => `${name}向けAI動画`,
    sub: (name: string) => `写真を${name}向けの動きある動画に変換。編集不要、高額な制作不要、すぐ公開できます。`,
    cta: "無料で動画を作成",
    steps: ["写真をアップロード", "効果を選択", "AIが動画を作成", "書き出して公開"],
    stepDesc: ["商品、ブランド、キャンペーン画像を選びます。", "目的に合わせてズーム、オービット、パン、パララックスを使います。", "Hyreelが動き、リズム、プロ品質の仕上げを加えます。", "MP4をダウンロードして各チャネルで使えます。"],
    features: ["映画的な動き", "最適化された縦型形式", "高速作成", "SNS対応"],
    featureDesc: ["カメラ効果で静止画を生きた映像にします。", "TikTok、Reels、Shorts、広告向けに準備済み。", "動画エディタなしで複数案を作成。", "投稿やキャンペーンテストに使えるクリーンな書き出し。"],
    faqQ: ["編集スキルは必要ですか？", "自分の写真を使えますか？", "広告にも使えますか？", "作成にどのくらいかかりますか？"],
    faqA: ["いいえ。Hyreelが編集と動きを自動化します。", "はい。良い商品写真やブランド写真ほど良い結果になります。", "はい。広告、EC、SNS向けに書き出せます。", "通常は数分で公開できる動画を作れます。"],
  },
  ko: {
    meta: (name: string) => `${name}용 AI 비디오 | Hyreel`,
    desc: (name: string) => `${name}용 전문 비디오를 사진에서 몇 초 만에 만드세요. Hyreel은 AI로 소셜 미디어에 바로 쓸 수 있는 세로 콘텐츠를 제작합니다.`,
    hero: (name: string) => `${name}용 AI 비디오`,
    sub: (name: string) => `사진을 ${name}용 다이내믹 비디오로 변환하세요. 편집도, 비싼 제작도 필요 없이 바로 게시할 수 있습니다.`,
    cta: "무료로 비디오 만들기",
    steps: ["사진 업로드", "효과 선택", "AI가 비디오 생성", "내보내고 게시"],
    stepDesc: ["제품, 브랜드 또는 캠페인 이미지를 선택하세요.", "목표에 맞게 줌, 오빗, 팬, 패럴랙스를 사용하세요.", "Hyreel이 움직임, 리듬, 전문적인 마감을 더합니다.", "MP4를 다운로드해 모든 채널에서 사용하세요."],
    features: ["시네마틱 모션", "최적화된 세로 포맷", "빠른 제작", "소셜 미디어 준비 완료"],
    featureDesc: ["카메라 효과로 정적인 사진을 생동감 있게 만듭니다.", "TikTok, Reels, Shorts, 광고에 맞게 준비됩니다.", "비디오 편집기 없이 여러 버전을 만드세요.", "게시와 캠페인 테스트에 적합한 깔끔한 내보내기."],
    faqQ: ["편집 기술이 필요한가요?", "내 사진을 사용할 수 있나요?", "광고에도 사용할 수 있나요?", "얼마나 걸리나요?"],
    faqA: ["아니요. Hyreel이 편집과 움직임을 자동화합니다.", "네. 좋은 제품 또는 브랜드 사진일수록 결과가 좋습니다.", "네. 광고, 이커머스, 소셜 미디어용으로 내보낼 수 있습니다.", "보통 몇 분 안에 게시 가능한 버전을 만들 수 있습니다."],
  },
  zh: {
    meta: (name: string) => `${name} AI视频 | Hyreel`,
    desc: (name: string) => `用照片在几秒内为${name}创建专业视频。Hyreel使用AI生成适合社交媒体的竖屏内容。`,
    hero: (name: string) => `${name} AI视频`,
    sub: (name: string) => `将照片转换为适合${name}的动态视频。无需剪辑，无需昂贵制作，即可发布。`,
    cta: "免费创建视频",
    steps: ["上传照片", "选择效果", "AI生成视频", "导出并发布"],
    stepDesc: ["选择产品、品牌或活动图片。", "根据目标使用缩放、环绕、平移或视差效果。", "Hyreel添加运动、节奏和专业质感。", "下载MP4并用于您的渠道。"],
    features: ["电影级运动", "优化的竖屏格式", "快速创建", "社交媒体就绪"],
    featureDesc: ["相机运动效果让静态照片变得生动。", "为TikTok、Reels、Shorts和广告准备。", "无需视频编辑器即可创建多个版本。", "干净导出，适合发布和广告测试。"],
    faqQ: ["需要剪辑技能吗？", "可以使用自己的照片吗？", "适合广告吗？", "创建需要多久？"],
    faqA: ["不需要。Hyreel会自动完成剪辑和运动效果。", "可以。优质产品或品牌照片通常效果最好。", "可以。可导出用于广告、电商和社交媒体。", "通常几分钟内即可创建可发布版本。"],
  },
} satisfies Record<NonEnLocale, {
  meta: (name: string) => string;
  desc: (name: string) => string;
  hero: (name: string) => string;
  sub: (name: string) => string;
  cta: string;
  steps: string[];
  stepDesc: string[];
  features: string[];
  featureDesc: string[];
  faqQ: string[];
  faqA: string[];
}>;

export function commonCopy(locale: NonEnLocale) {
  return copy[locale];
}

export function genericPairs(locale: NonEnLocale): TextPair[] {
  const c = copy[locale];
  return c.features.map((title, index) => ({ title, description: c.featureDesc[index] }));
}

export function genericSteps(locale: NonEnLocale): TextPair[] {
  const c = copy[locale];
  return c.steps.map((title, index) => ({ title, description: c.stepDesc[index] }));
}

export function genericFaqs(locale: NonEnLocale): Faq[] {
  const c = copy[locale];
  return c.faqQ.map((question, index) => ({ question, answer: c.faqA[index] }));
}

export function genericList(locale: NonEnLocale): string[] {
  const c = copy[locale];
  return c.features.map((feature, index) => `${feature}: ${c.featureDesc[index]}`);
}

export function localizedAi(locale: NonEnLocale): string {
  return aiByLocale[locale];
}

const localizedStatLabels: Record<NonEnLocale, Record<"platform" | "industry" | "audience", string[]>> = {
  es: {
    platform: ["Usuarios mensuales", "Interaccion", "Formato optimo", "Duracion ideal"],
    industry: ["Impacto en conversion", "Preferencia por video", "Tiempo de creacion", "Ahorro de coste"],
    audience: ["Creacion mas rapida", "Videos disponibles", "Herramientas IA", "Resultados"],
  },
  de: {
    platform: ["Monatliche Nutzer", "Engagement", "Optimales Format", "Ideale Dauer"],
    industry: ["Conversion-Effekt", "Video-Praferenz", "Erstellungszeit", "Kostenersparnis"],
    audience: ["Schnellere Erstellung", "Verfugbare Videos", "KI-Tools", "Ergebnisse"],
  },
  fr: {
    platform: ["Utilisateurs mensuels", "Engagement", "Format optimal", "Duree ideale"],
    industry: ["Impact conversion", "Preference video", "Temps de creation", "Economies"],
    audience: ["Creation plus rapide", "Videos disponibles", "Outils IA", "Resultats"],
  },
  pt: {
    platform: ["Usuarios mensais", "Engajamento", "Formato ideal", "Duracao ideal"],
    industry: ["Impacto na conversao", "Preferencia por video", "Tempo de criacao", "Economia de custo"],
    audience: ["Criacao mais rapida", "Videos disponiveis", "Ferramentas IA", "Resultados"],
  },
  ru: {
    platform: ["Пользователей в месяц", "Вовлеченность", "Оптимальный формат", "Идеальная длительность"],
    industry: ["Влияние на конверсию", "Предпочтение видео", "Время создания", "Экономия затрат"],
    audience: ["Быстрее создание", "Доступные видео", "ИИ-инструменты", "Результаты"],
  },
  it: {
    platform: ["Utenti mensili", "Engagement", "Formato ideale", "Durata ideale"],
    industry: ["Impatto conversioni", "Preferenza video", "Tempo di creazione", "Risparmio costi"],
    audience: ["Creazione piu rapida", "Video disponibili", "Strumenti IA", "Risultati"],
  },
  nl: {
    platform: ["Maandelijkse gebruikers", "Betrokkenheid", "Optimaal formaat", "Ideale duur"],
    industry: ["Conversie-impact", "Videovoorkeur", "Creatietijd", "Kostenbesparing"],
    audience: ["Snellere creatie", "Beschikbare video's", "AI-tools", "Resultaten"],
  },
  pl: {
    platform: ["Miesieczni uzytkownicy", "Zaangazowanie", "Optymalny format", "Idealna dlugosc"],
    industry: ["Wplyw na konwersje", "Preferencja wideo", "Czas tworzenia", "Oszczednosc kosztow"],
    audience: ["Szybsze tworzenie", "Dostepne wideo", "Narzędzia AI", "Wyniki"],
  },
  ja: {
    platform: ["月間ユーザー", "エンゲージメント", "最適な形式", "理想的な長さ"],
    industry: ["コンバージョン効果", "動画への期待", "作成時間", "コスト削減"],
    audience: ["より速い作成", "利用できる動画", "AIツール", "成果"],
  },
  ko: {
    platform: ["월간 사용자", "참여도", "최적 포맷", "이상적인 길이"],
    industry: ["전환 영향", "비디오 선호도", "제작 시간", "비용 절감"],
    audience: ["더 빠른 제작", "사용 가능한 비디오", "AI 도구", "결과"],
  },
  zh: {
    platform: ["月活用户", "互动表现", "最佳格式", "理想时长"],
    industry: ["转化影响", "视频偏好", "创建时间", "成本节省"],
    audience: ["更快创作", "可用视频", "AI工具", "结果"],
  },
};

const localizedRoleLabels: Record<NonEnLocale, string> = {
  es: "Cliente de Hyreel",
  de: "Hyreel-Kunde",
  fr: "Client Hyreel",
  pt: "Cliente Hyreel",
  ru: "Клиент Hyreel",
  it: "Cliente Hyreel",
  nl: "Hyreel-klant",
  pl: "Klient Hyreel",
  ja: "Hyreelユーザー",
  ko: "Hyreel 고객",
  zh: "Hyreel客户",
};

export function localizedStats(
  locale: NonEnLocale,
  stats: Array<{ value?: string; label?: string }>,
  variant: "platform" | "industry" | "audience"
): Stat[] {
  const labels = localizedStatLabels[locale][variant];
  return stats.map((stat, index) => ({
    value: stat.value,
    label: labels[index] || stat.label || labels[labels.length - 1],
  }));
}

export function localizedRole(locale: NonEnLocale): string {
  return localizedRoleLabels[locale];
}

type PageSpecificCopy = {
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  features: TextPair[];
  steps: TextPair[];
  faqs: Faq[];
  benefits: string[];
  cta: string;
};

const slugContexts: Record<string, { asset: string; output: string; audience: string; goal: string }> = {
  "youtube-shorts": { asset: "photos", output: "shorts", audience: "viewers", goal: "channel_growth" },
  pinterest: { asset: "product_photos", output: "pins", audience: "shoppers", goal: "traffic" },
  linkedin: { asset: "brand_assets", output: "professional_posts", audience: "buyers", goal: "authority" },
  "facebook-reels": { asset: "brand_assets", output: "reels", audience: "communities", goal: "reach" },
  "fitness-wellness": { asset: "workout_photos", output: "fitness_videos", audience: "clients", goal: "motivation" },
  "travel-hospitality": { asset: "destination_photos", output: "travel_videos", audience: "travelers", goal: "bookings" },
  "education-online-courses": { asset: "lesson_assets", output: "course_videos", audience: "students", goal: "learning" },
  "jewelry-accessories": { asset: "detail_photos", output: "luxury_product_videos", audience: "shoppers", goal: "trust" },
  "pet-products": { asset: "pet_photos", output: "pet_product_videos", audience: "pet_owners", goal: "sales" },
  automotive: { asset: "vehicle_photos", output: "automotive_videos", audience: "buyers", goal: "leads" },
  "small-business": { asset: "product_photos", output: "marketing_videos", audience: "local_customers", goal: "sales" },
  influencers: { asset: "campaign_photos", output: "sponsored_videos", audience: "followers", goal: "brand_deals" },
  marketers: { asset: "campaign_assets", output: "ad_creatives", audience: "buyers", goal: "conversions" },
  agencies: { asset: "client_assets", output: "client_videos", audience: "clients", goal: "scale" },
  freelancers: { asset: "portfolio_assets", output: "client_videos", audience: "clients", goal: "delivery" },
  entrepreneurs: { asset: "startup_assets", output: "launch_videos", audience: "buyers", goal: "launches" },
  "content-teams": { asset: "content_backlog", output: "content_calendar_videos", audience: "followers", goal: "scale" },
  realtors: { asset: "property_photos", output: "listing_videos", audience: "home_buyers", goal: "leads" },
  coaches: { asset: "lesson_assets", output: "coaching_videos", audience: "clients", goal: "trust" },
  photographers: { asset: "photo_portfolios", output: "portfolio_videos", audience: "clients", goal: "bookings" },
  "ai-social-media-video-maker": { asset: "brand_assets", output: "social_videos", audience: "followers", goal: "reach" },
  "ai-video-generator-app": { asset: "phone_photos", output: "mobile_videos", audience: "creators", goal: "speed" },
  "ai-ecommerce-video-creator": { asset: "product_photos", output: "store_videos", audience: "shoppers", goal: "conversions" },
  "ai-photo-animation": { asset: "photos", output: "animated_photos", audience: "followers", goal: "attention" },
  "ai-3d-photo-video": { asset: "photos", output: "depth_videos", audience: "viewers", goal: "attention" },
  "ai-follow-video-effect": { asset: "subject_photos", output: "follow_motion_videos", audience: "viewers", goal: "focus" },
  "ai-dolly-zoom-effect": { asset: "portrait_photos", output: "dramatic_zoom_videos", audience: "viewers", goal: "drama" },
  "ai-camera-pan-effect": { asset: "wide_photos", output: "pan_videos", audience: "viewers", goal: "storytelling" },
  "ai-ken-burns-effect": { asset: "photos", output: "ken_burns_videos", audience: "viewers", goal: "storytelling" },
  "ai-slow-motion-video": { asset: "action_photos", output: "slow_motion_videos", audience: "viewers", goal: "drama" },
  "ai-loop-video-generator": { asset: "photos", output: "loop_videos", audience: "followers", goal: "watch_time" },
  "ai-cinemagraph-maker": { asset: "lifestyle_photos", output: "cinemagraphs", audience: "viewers", goal: "attention" },
};

const terms: Record<NonEnLocale, Record<string, string>> = {
  es: {
    photos: "fotos", product_photos: "fotos de producto", brand_assets: "materiales de marca", workout_photos: "fotos de entrenamiento", destination_photos: "fotos de destinos", lesson_assets: "materiales de clase", detail_photos: "fotos de detalle", pet_photos: "fotos de mascotas", vehicle_photos: "fotos de vehiculos", campaign_photos: "fotos de campana", campaign_assets: "activos de campana", client_assets: "activos de clientes", portfolio_assets: "materiales de portafolio", startup_assets: "materiales de lanzamiento", content_backlog: "backlog de contenido", property_photos: "fotos de propiedades", photo_portfolios: "portafolios fotograficos", phone_photos: "fotos del movil", subject_photos: "fotos con sujeto principal", portrait_photos: "retratos", wide_photos: "fotos amplias", action_photos: "fotos de accion", lifestyle_photos: "fotos lifestyle",
    shorts: "Shorts verticales", pins: "video pins", professional_posts: "posts profesionales", reels: "Reels", fitness_videos: "videos fitness", travel_videos: "videos de viaje", course_videos: "videos de curso", luxury_product_videos: "videos premium de producto", pet_product_videos: "videos de productos para mascotas", automotive_videos: "videos automotrices", marketing_videos: "videos de marketing", sponsored_videos: "videos patrocinados", ad_creatives: "creatividades publicitarias", client_videos: "videos para clientes", launch_videos: "videos de lanzamiento", content_calendar_videos: "videos para calendario editorial", listing_videos: "videos de listados", coaching_videos: "videos de coaching", portfolio_videos: "videos de portafolio", social_videos: "videos sociales", mobile_videos: "videos moviles", store_videos: "videos para tienda", animated_photos: "fotos animadas", depth_videos: "videos con profundidad 3D", follow_motion_videos: "videos con seguimiento", dramatic_zoom_videos: "videos con dolly zoom", pan_videos: "videos con paneo", ken_burns_videos: "videos estilo Ken Burns", slow_motion_videos: "videos slow motion", loop_videos: "videos en loop", cinemagraphs: "cinemagraphs",
    viewers: "espectadores", shoppers: "compradores", buyers: "compradores B2B", communities: "comunidades", clients: "clientes", students: "estudiantes", pet_owners: "duenos de mascotas", local_customers: "clientes locales", followers: "seguidores", creators: "creadores", home_buyers: "compradores de vivienda",
    channel_growth: "hacer crecer el canal", traffic: "llevar trafico", authority: "generar autoridad", reach: "aumentar alcance", motivation: "motivar accion", bookings: "conseguir reservas", learning: "explicar mejor", trust: "generar confianza", sales: "vender mas", leads: "captar leads", brand_deals: "entregar colaboraciones", conversions: "mejorar conversiones", scale: "producir a escala", delivery: "entregar mas rapido", launches: "lanzar mas rapido", speed: "crear mas rapido", attention: "captar atencion", focus: "guiar la mirada", drama: "anadir dramatismo", storytelling: "contar historias", watch_time: "aumentar tiempo de visualizacion",
  },
  de: {
    photos: "Fotos", product_photos: "Produktfotos", brand_assets: "Markenassets", workout_photos: "Trainingsfotos", destination_photos: "Destinationsfotos", lesson_assets: "Lernmaterialien", detail_photos: "Detailfotos", pet_photos: "Haustierfotos", vehicle_photos: "Fahrzeugfotos", campaign_photos: "Kampagnenfotos", campaign_assets: "Kampagnenassets", client_assets: "Kundenassets", portfolio_assets: "Portfolio-Material", startup_assets: "Launch-Material", content_backlog: "Content-Backlog", property_photos: "Immobilienfotos", photo_portfolios: "Fotoportfolios", phone_photos: "Handyfotos", subject_photos: "Motivfotos", portrait_photos: "Portrats", wide_photos: "Weitwinkelbilder", action_photos: "Actionfotos", lifestyle_photos: "Lifestyle-Fotos",
    shorts: "vertikale Shorts", pins: "Video-Pins", professional_posts: "professionelle Posts", reels: "Reels", fitness_videos: "Fitnessvideos", travel_videos: "Reisevideos", course_videos: "Kursvideos", luxury_product_videos: "Premium-Produktvideos", pet_product_videos: "Videos fur Haustierprodukte", automotive_videos: "Automotive-Videos", marketing_videos: "Marketingvideos", sponsored_videos: "Sponsored Videos", ad_creatives: "Ad Creatives", client_videos: "Kundenvideos", launch_videos: "Launch-Videos", content_calendar_videos: "Videos fur den Content-Kalender", listing_videos: "Listing-Videos", coaching_videos: "Coaching-Videos", portfolio_videos: "Portfolio-Videos", social_videos: "Social Videos", mobile_videos: "mobile Videos", store_videos: "Shop-Videos", animated_photos: "animierte Fotos", depth_videos: "3D-Tiefenvideos", follow_motion_videos: "Follow-Motion-Videos", dramatic_zoom_videos: "Dolly-Zoom-Videos", pan_videos: "Pan-Videos", ken_burns_videos: "Ken-Burns-Videos", slow_motion_videos: "Slow-Motion-Videos", loop_videos: "Loop-Videos", cinemagraphs: "Cinemagraphs",
    viewers: "Zuschauer", shoppers: "Kaufer", buyers: "B2B-Kaufer", communities: "Communities", clients: "Kunden", students: "Lernende", pet_owners: "Haustierbesitzer", local_customers: "lokale Kunden", followers: "Follower", creators: "Creator", home_buyers: "Immobilienkaufer",
    channel_growth: "Kanalwachstum erzielen", traffic: "Traffic steigern", authority: "Autoritat aufbauen", reach: "Reichweite erhohen", motivation: "Motivation auslosen", bookings: "Buchungen gewinnen", learning: "Inhalte klarer erklaren", trust: "Vertrauen schaffen", sales: "mehr verkaufen", leads: "Leads gewinnen", brand_deals: "Kooperationen liefern", conversions: "Conversions steigern", scale: "Produktion skalieren", delivery: "schneller liefern", launches: "schneller launchen", speed: "schneller erstellen", attention: "Aufmerksamkeit gewinnen", focus: "Blick lenken", drama: "Dramatik erzeugen", storytelling: "Geschichten erzahlen", watch_time: "Watch-Time erhohen",
  },
  fr: {
    photos: "photos", product_photos: "photos produit", brand_assets: "assets de marque", workout_photos: "photos d'entrainement", destination_photos: "photos de destination", lesson_assets: "supports de cours", detail_photos: "photos de detail", pet_photos: "photos d'animaux", vehicle_photos: "photos de vehicules", campaign_photos: "photos de campagne", campaign_assets: "assets de campagne", client_assets: "assets client", portfolio_assets: "elements de portfolio", startup_assets: "assets de lancement", content_backlog: "backlog de contenu", property_photos: "photos de biens", photo_portfolios: "portfolios photo", phone_photos: "photos mobile", subject_photos: "photos avec sujet", portrait_photos: "portraits", wide_photos: "photos larges", action_photos: "photos d'action", lifestyle_photos: "photos lifestyle",
    shorts: "Shorts verticaux", pins: "video pins", professional_posts: "posts professionnels", reels: "Reels", fitness_videos: "videos fitness", travel_videos: "videos de voyage", course_videos: "videos de cours", luxury_product_videos: "videos produit premium", pet_product_videos: "videos produits animaux", automotive_videos: "videos automobile", marketing_videos: "videos marketing", sponsored_videos: "videos sponsorisees", ad_creatives: "creas publicitaires", client_videos: "videos client", launch_videos: "videos de lancement", content_calendar_videos: "videos de calendrier editorial", listing_videos: "videos d'annonces", coaching_videos: "videos de coaching", portfolio_videos: "videos portfolio", social_videos: "videos sociales", mobile_videos: "videos mobiles", store_videos: "videos boutique", animated_photos: "photos animees", depth_videos: "videos profondeur 3D", follow_motion_videos: "videos avec suivi", dramatic_zoom_videos: "videos dolly zoom", pan_videos: "videos panoramiques", ken_burns_videos: "videos style Ken Burns", slow_motion_videos: "videos slow motion", loop_videos: "videos en boucle", cinemagraphs: "cinemagraphs",
    viewers: "spectateurs", shoppers: "acheteurs", buyers: "acheteurs B2B", communities: "communautes", clients: "clients", students: "apprenants", pet_owners: "proprietaires d'animaux", local_customers: "clients locaux", followers: "abonnes", creators: "createurs", home_buyers: "acheteurs immobiliers",
    channel_growth: "developper la chaine", traffic: "generer du trafic", authority: "construire l'autorite", reach: "augmenter la portee", motivation: "motiver l'action", bookings: "obtenir des reservations", learning: "mieux expliquer", trust: "creer la confiance", sales: "vendre plus", leads: "generer des leads", brand_deals: "livrer des partenariats", conversions: "ameliorer les conversions", scale: "produire a l'echelle", delivery: "livrer plus vite", launches: "lancer plus vite", speed: "creer plus vite", attention: "capter l'attention", focus: "guider le regard", drama: "ajouter du drame", storytelling: "raconter des histoires", watch_time: "augmenter le temps de visionnage",
  },
  pt: {
    photos: "fotos", product_photos: "fotos de produto", brand_assets: "materiais da marca", workout_photos: "fotos de treino", destination_photos: "fotos de destinos", lesson_assets: "materiais de aula", detail_photos: "fotos de detalhe", pet_photos: "fotos de pets", vehicle_photos: "fotos de veículos", campaign_photos: "fotos de campanha", campaign_assets: "ativos de campanha", client_assets: "ativos de clientes", portfolio_assets: "materiais de portfólio", startup_assets: "materiais de lançamento", content_backlog: "backlog de conteúdo", property_photos: "fotos de imóveis", photo_portfolios: "portfólios fotográficos", phone_photos: "fotos do celular", subject_photos: "fotos com assunto principal", portrait_photos: "retratos", wide_photos: "fotos amplas", action_photos: "fotos de ação", lifestyle_photos: "fotos lifestyle",
    shorts: "Shorts verticais", pins: "video pins", professional_posts: "posts profissionais", reels: "Reels", fitness_videos: "vídeos fitness", travel_videos: "vídeos de viagem", course_videos: "vídeos de curso", luxury_product_videos: "vídeos premium de produto", pet_product_videos: "vídeos de produtos pet", automotive_videos: "vídeos automotivos", marketing_videos: "vídeos de marketing", sponsored_videos: "vídeos patrocinados", ad_creatives: "criativos de anúncio", client_videos: "vídeos para clientes", launch_videos: "vídeos de lançamento", content_calendar_videos: "vídeos para calendário editorial", listing_videos: "vídeos de imóveis", coaching_videos: "vídeos de coaching", portfolio_videos: "vídeos de portfólio", social_videos: "vídeos sociais", mobile_videos: "vídeos mobile", store_videos: "vídeos para loja", animated_photos: "fotos animadas", depth_videos: "vídeos com profundidade 3D", follow_motion_videos: "vídeos com acompanhamento", dramatic_zoom_videos: "vídeos com dolly zoom", pan_videos: "vídeos com panorâmica", ken_burns_videos: "vídeos estilo Ken Burns", slow_motion_videos: "vídeos em câmera lenta", loop_videos: "vídeos em loop", cinemagraphs: "cinemagraphs",
    viewers: "espectadores", shoppers: "compradores", buyers: "compradores B2B", communities: "comunidades", clients: "clientes", students: "alunos", pet_owners: "tutores de pets", local_customers: "clientes locais", followers: "seguidores", creators: "criadores", home_buyers: "compradores de imóveis",
    channel_growth: "fazer o canal crescer", traffic: "gerar tráfego", authority: "construir autoridade", reach: "aumentar alcance", motivation: "motivar ação", bookings: "gerar reservas", learning: "explicar melhor", trust: "gerar confiança", sales: "vender mais", leads: "captar leads", brand_deals: "entregar parcerias", conversions: "melhorar conversões", scale: "produzir em escala", delivery: "entregar mais rápido", launches: "lançar mais rápido", speed: "criar mais rápido", attention: "captar atenção", focus: "guiar o olhar", drama: "adicionar drama", storytelling: "contar histórias", watch_time: "aumentar tempo de visualização",
  },
  ru: {
    photos: "фотографии", product_photos: "фото товаров", brand_assets: "материалы бренда", workout_photos: "фото тренировок", destination_photos: "фото направлений", lesson_assets: "материалы уроков", detail_photos: "детальные фото", pet_photos: "фото питомцев", vehicle_photos: "фото автомобилей", campaign_photos: "фото кампаний", campaign_assets: "материалы кампаний", client_assets: "материалы клиентов", portfolio_assets: "материалы портфолио", startup_assets: "материалы запуска", content_backlog: "контент-бэклог", property_photos: "фото объектов", photo_portfolios: "фотопортфолио", phone_photos: "фото с телефона", subject_photos: "фото с главным объектом", portrait_photos: "портреты", wide_photos: "широкие кадры", action_photos: "динамичные фото", lifestyle_photos: "lifestyle-фото",
    shorts: "вертикальные Shorts", pins: "video pins", professional_posts: "профессиональные посты", reels: "Reels", fitness_videos: "фитнес-видео", travel_videos: "видео о путешествиях", course_videos: "видео для курсов", luxury_product_videos: "премиальные товарные видео", pet_product_videos: "видео товаров для питомцев", automotive_videos: "автомобильные видео", marketing_videos: "маркетинговые видео", sponsored_videos: "спонсорские видео", ad_creatives: "рекламные креативы", client_videos: "видео для клиентов", launch_videos: "видео для запуска", content_calendar_videos: "видео для контент-календаря", listing_videos: "видео объявлений", coaching_videos: "видео для коучинга", portfolio_videos: "видео портфолио", social_videos: "видео для соцсетей", mobile_videos: "мобильные видео", store_videos: "видео для магазина", animated_photos: "анимированные фото", depth_videos: "видео с 3D-глубиной", follow_motion_videos: "видео с отслеживанием объекта", dramatic_zoom_videos: "видео с dolly zoom", pan_videos: "видео с панорамированием", ken_burns_videos: "видео в стиле Ken Burns", slow_motion_videos: "slow motion видео", loop_videos: "зацикленные видео", cinemagraphs: "синемаграфы",
    viewers: "зрителей", shoppers: "покупателей", buyers: "B2B-покупателей", communities: "сообществ", clients: "клиентов", students: "студентов", pet_owners: "владельцев питомцев", local_customers: "локальных клиентов", followers: "подписчиков", creators: "создателей контента", home_buyers: "покупателей жилья",
    channel_growth: "растить канал", traffic: "приводить трафик", authority: "укреплять экспертность", reach: "увеличивать охват", motivation: "мотивировать к действию", bookings: "получать бронирования", learning: "объяснять понятнее", trust: "повышать доверие", sales: "продавать больше", leads: "получать лиды", brand_deals: "выполнять бренд-интеграции", conversions: "повышать конверсии", scale: "масштабировать производство", delivery: "сдавать работу быстрее", launches: "запускаться быстрее", speed: "создавать быстрее", attention: "удерживать внимание", focus: "направлять взгляд", drama: "добавлять драматичность", storytelling: "рассказывать истории", watch_time: "увеличивать время просмотра",
  },
  it: {
    photos: "foto", product_photos: "foto prodotto", brand_assets: "asset del brand", workout_photos: "foto di allenamento", destination_photos: "foto di destinazioni", lesson_assets: "materiali di lezione", detail_photos: "foto di dettaglio", pet_photos: "foto di animali", vehicle_photos: "foto di veicoli", campaign_photos: "foto di campagna", campaign_assets: "asset di campagna", client_assets: "asset dei clienti", portfolio_assets: "materiali di portfolio", startup_assets: "asset di lancio", content_backlog: "backlog contenuti", property_photos: "foto immobiliari", photo_portfolios: "portfolio fotografici", phone_photos: "foto da telefono", subject_photos: "foto con soggetto principale", portrait_photos: "ritratti", wide_photos: "foto ampie", action_photos: "foto d'azione", lifestyle_photos: "foto lifestyle",
    shorts: "Shorts verticali", pins: "video pin", professional_posts: "post professionali", reels: "Reels", fitness_videos: "video fitness", travel_videos: "video di viaggio", course_videos: "video corso", luxury_product_videos: "video prodotto premium", pet_product_videos: "video prodotti per animali", automotive_videos: "video automotive", marketing_videos: "video marketing", sponsored_videos: "video sponsorizzati", ad_creatives: "creative pubblicitarie", client_videos: "video per clienti", launch_videos: "video di lancio", content_calendar_videos: "video per calendario editoriale", listing_videos: "video annunci immobiliari", coaching_videos: "video coaching", portfolio_videos: "video portfolio", social_videos: "video social", mobile_videos: "video mobile", store_videos: "video per store", animated_photos: "foto animate", depth_videos: "video con profondità 3D", follow_motion_videos: "video con inseguimento", dramatic_zoom_videos: "video dolly zoom", pan_videos: "video con panoramica", ken_burns_videos: "video stile Ken Burns", slow_motion_videos: "video slow motion", loop_videos: "video in loop", cinemagraphs: "cinemagraph",
    viewers: "spettatori", shoppers: "acquirenti", buyers: "buyer B2B", communities: "community", clients: "clienti", students: "studenti", pet_owners: "proprietari di animali", local_customers: "clienti locali", followers: "follower", creators: "creator", home_buyers: "acquirenti immobiliari",
    channel_growth: "far crescere il canale", traffic: "generare traffico", authority: "costruire autorevolezza", reach: "aumentare la reach", motivation: "motivare all'azione", bookings: "ottenere prenotazioni", learning: "spiegare meglio", trust: "creare fiducia", sales: "vendere di più", leads: "generare lead", brand_deals: "consegnare collaborazioni", conversions: "migliorare le conversioni", scale: "produrre su scala", delivery: "consegnare più velocemente", launches: "lanciare più rapidamente", speed: "creare più velocemente", attention: "catturare attenzione", focus: "guidare lo sguardo", drama: "aggiungere drammaticità", storytelling: "raccontare storie", watch_time: "aumentare il tempo di visione",
  },
  nl: {
    photos: "foto's", product_photos: "productfoto's", brand_assets: "merkassets", workout_photos: "workoutfoto's", destination_photos: "bestemmingsfoto's", lesson_assets: "lesmateriaal", detail_photos: "detailfoto's", pet_photos: "huisdierfoto's", vehicle_photos: "voertuigfoto's", campaign_photos: "campagnefoto's", campaign_assets: "campagneassets", client_assets: "klantassets", portfolio_assets: "portfoliomateriaal", startup_assets: "launchmateriaal", content_backlog: "contentbacklog", property_photos: "vastgoedfoto's", photo_portfolios: "fotoportfolio's", phone_photos: "telefoonfoto's", subject_photos: "foto's met hoofdonderwerp", portrait_photos: "portretten", wide_photos: "brede foto's", action_photos: "actiefoto's", lifestyle_photos: "lifestylefoto's",
    shorts: "verticale Shorts", pins: "video pins", professional_posts: "professionele posts", reels: "Reels", fitness_videos: "fitnessvideo's", travel_videos: "reisvideo's", course_videos: "cursusvideo's", luxury_product_videos: "premium productvideo's", pet_product_videos: "video's voor huisdierproducten", automotive_videos: "automotive video's", marketing_videos: "marketingvideo's", sponsored_videos: "gesponsorde video's", ad_creatives: "advertentiecreatives", client_videos: "klantvideo's", launch_videos: "launchvideo's", content_calendar_videos: "video's voor de contentkalender", listing_videos: "listingvideo's", coaching_videos: "coachingvideo's", portfolio_videos: "portfoliovideo's", social_videos: "social video's", mobile_videos: "mobiele video's", store_videos: "winkelvideo's", animated_photos: "geanimeerde foto's", depth_videos: "3D-dieptevideo's", follow_motion_videos: "follow-motionvideo's", dramatic_zoom_videos: "dolly-zoomvideo's", pan_videos: "panvideo's", ken_burns_videos: "Ken Burns-video's", slow_motion_videos: "slowmotionvideo's", loop_videos: "loopvideo's", cinemagraphs: "cinemagraphs",
    viewers: "kijkers", shoppers: "shoppers", buyers: "B2B-kopers", communities: "communities", clients: "klanten", students: "studenten", pet_owners: "huisdiereigenaren", local_customers: "lokale klanten", followers: "volgers", creators: "makers", home_buyers: "woningkopers",
    channel_growth: "kanaalgroei realiseren", traffic: "verkeer genereren", authority: "autoriteit opbouwen", reach: "bereik vergroten", motivation: "actie stimuleren", bookings: "boekingen krijgen", learning: "duidelijker uitleggen", trust: "vertrouwen opbouwen", sales: "meer verkopen", leads: "leads verzamelen", brand_deals: "samenwerkingen opleveren", conversions: "conversies verbeteren", scale: "productie opschalen", delivery: "sneller opleveren", launches: "sneller lanceren", speed: "sneller maken", attention: "aandacht trekken", focus: "de blik sturen", drama: "dramatiek toevoegen", storytelling: "verhalen vertellen", watch_time: "kijktijd verhogen",
  },
  pl: {
    photos: "zdjęcia", product_photos: "zdjęcia produktów", brand_assets: "materiały marki", workout_photos: "zdjęcia treningowe", destination_photos: "zdjęcia destynacji", lesson_assets: "materiały lekcyjne", detail_photos: "zdjęcia detali", pet_photos: "zdjęcia zwierząt", vehicle_photos: "zdjęcia pojazdów", campaign_photos: "zdjęcia kampanii", campaign_assets: "zasoby kampanii", client_assets: "zasoby klientów", portfolio_assets: "materiały portfolio", startup_assets: "materiały launchowe", content_backlog: "backlog treści", property_photos: "zdjęcia nieruchomości", photo_portfolios: "portfolio fotograficzne", phone_photos: "zdjęcia z telefonu", subject_photos: "zdjęcia z głównym obiektem", portrait_photos: "portrety", wide_photos: "szerokie kadry", action_photos: "zdjęcia akcji", lifestyle_photos: "zdjęcia lifestyle",
    shorts: "pionowe Shorts", pins: "video piny", professional_posts: "profesjonalne posty", reels: "Reels", fitness_videos: "wideo fitness", travel_videos: "wideo podróżnicze", course_videos: "wideo kursowe", luxury_product_videos: "premium wideo produktowe", pet_product_videos: "wideo produktów dla zwierząt", automotive_videos: "wideo motoryzacyjne", marketing_videos: "wideo marketingowe", sponsored_videos: "wideo sponsorowane", ad_creatives: "kreacje reklamowe", client_videos: "wideo dla klientów", launch_videos: "wideo launchowe", content_calendar_videos: "wideo do kalendarza treści", listing_videos: "wideo ofert", coaching_videos: "wideo coachingowe", portfolio_videos: "wideo portfolio", social_videos: "wideo social", mobile_videos: "wideo mobile", store_videos: "wideo do sklepu", animated_photos: "animowane zdjęcia", depth_videos: "wideo z głębią 3D", follow_motion_videos: "wideo ze śledzeniem", dramatic_zoom_videos: "wideo dolly zoom", pan_videos: "wideo z panoramą", ken_burns_videos: "wideo w stylu Ken Burns", slow_motion_videos: "wideo slow motion", loop_videos: "wideo w pętli", cinemagraphs: "cinemagraphy",
    viewers: "widzów", shoppers: "kupujących", buyers: "kupujących B2B", communities: "społeczności", clients: "klientów", students: "studentów", pet_owners: "właścicieli zwierząt", local_customers: "lokalnych klientów", followers: "obserwujących", creators: "twórców", home_buyers: "kupujących nieruchomości",
    channel_growth: "rozwijać kanał", traffic: "generować ruch", authority: "budować autorytet", reach: "zwiększać zasięg", motivation: "motywować do działania", bookings: "zdobywać rezerwacje", learning: "wyjaśniać jaśniej", trust: "budować zaufanie", sales: "sprzedawać więcej", leads: "pozyskiwać leady", brand_deals: "realizować współprace", conversions: "poprawiać konwersje", scale: "produkować na skalę", delivery: "dostarczać szybciej", launches: "szybciej startować", speed: "tworzyć szybciej", attention: "przyciągać uwagę", focus: "prowadzić wzrok", drama: "dodawać dramaturgii", storytelling: "opowiadać historie", watch_time: "zwiększać czas oglądania",
  },
  ja: {
    photos: "写真", product_photos: "商品写真", brand_assets: "ブランド素材", workout_photos: "ワークアウト写真", destination_photos: "旅行先の写真", lesson_assets: "レッスン素材", detail_photos: "ディテール写真", pet_photos: "ペット写真", vehicle_photos: "車両写真", campaign_photos: "キャンペーン写真", campaign_assets: "キャンペーン素材", client_assets: "クライアント素材", portfolio_assets: "ポートフォリオ素材", startup_assets: "ローンチ素材", content_backlog: "コンテンツバックログ", property_photos: "物件写真", photo_portfolios: "写真ポートフォリオ", phone_photos: "スマホ写真", subject_photos: "被写体写真", portrait_photos: "ポートレート", wide_photos: "ワイド写真", action_photos: "アクション写真", lifestyle_photos: "ライフスタイル写真",
    shorts: "縦型Shorts", pins: "動画ピン", professional_posts: "プロ向け投稿", reels: "Reels", fitness_videos: "フィットネス動画", travel_videos: "旅行動画", course_videos: "講座動画", luxury_product_videos: "高級感のある商品動画", pet_product_videos: "ペット用品動画", automotive_videos: "自動車動画", marketing_videos: "マーケティング動画", sponsored_videos: "スポンサー動画", ad_creatives: "広告クリエイティブ", client_videos: "クライアント動画", launch_videos: "ローンチ動画", content_calendar_videos: "コンテンツカレンダー用動画", listing_videos: "物件紹介動画", coaching_videos: "コーチング動画", portfolio_videos: "ポートフォリオ動画", social_videos: "SNS動画", mobile_videos: "モバイル動画", store_videos: "ストア動画", animated_photos: "動く写真", depth_videos: "3D奥行き動画", follow_motion_videos: "追従モーション動画", dramatic_zoom_videos: "ドリーズーム動画", pan_videos: "パン動画", ken_burns_videos: "Ken Burns風動画", slow_motion_videos: "スローモーション動画", loop_videos: "ループ動画", cinemagraphs: "シネマグラフ",
    viewers: "視聴者", shoppers: "買い物客", buyers: "B2B購入者", communities: "コミュニティ", clients: "クライアント", students: "受講者", pet_owners: "ペットオーナー", local_customers: "地域の顧客", followers: "フォロワー", creators: "クリエイター", home_buyers: "住宅購入者",
    channel_growth: "チャンネルを成長させる", traffic: "流入を増やす", authority: "信頼性を高める", reach: "リーチを広げる", motivation: "行動を促す", bookings: "予約を獲得する", learning: "より分かりやすく説明する", trust: "信頼を生む", sales: "売上を伸ばす", leads: "リードを獲得する", brand_deals: "ブランド案件を届ける", conversions: "コンバージョンを改善する", scale: "制作をスケールする", delivery: "より早く納品する", launches: "より早くローンチする", speed: "より早く作成する", attention: "注目を集める", focus: "視線を誘導する", drama: "ドラマ性を加える", storytelling: "ストーリーを伝える", watch_time: "視聴時間を伸ばす",
  },
  ko: {
    photos: "사진", product_photos: "제품 사진", brand_assets: "브랜드 에셋", workout_photos: "운동 사진", destination_photos: "여행지 사진", lesson_assets: "수업 자료", detail_photos: "디테일 사진", pet_photos: "반려동물 사진", vehicle_photos: "차량 사진", campaign_photos: "캠페인 사진", campaign_assets: "캠페인 에셋", client_assets: "클라이언트 에셋", portfolio_assets: "포트폴리오 자료", startup_assets: "출시 자료", content_backlog: "콘텐츠 백로그", property_photos: "매물 사진", photo_portfolios: "사진 포트폴리오", phone_photos: "휴대폰 사진", subject_photos: "주요 피사체 사진", portrait_photos: "인물 사진", wide_photos: "와이드 사진", action_photos: "액션 사진", lifestyle_photos: "라이프스타일 사진",
    shorts: "세로 Shorts", pins: "비디오 핀", professional_posts: "전문적인 게시물", reels: "Reels", fitness_videos: "피트니스 비디오", travel_videos: "여행 비디오", course_videos: "강의 비디오", luxury_product_videos: "프리미엄 제품 비디오", pet_product_videos: "반려동물 제품 비디오", automotive_videos: "자동차 비디오", marketing_videos: "마케팅 비디오", sponsored_videos: "스폰서 비디오", ad_creatives: "광고 크리에이티브", client_videos: "클라이언트 비디오", launch_videos: "출시 비디오", content_calendar_videos: "콘텐츠 캘린더용 비디오", listing_videos: "매물 비디오", coaching_videos: "코칭 비디오", portfolio_videos: "포트폴리오 비디오", social_videos: "소셜 비디오", mobile_videos: "모바일 비디오", store_videos: "스토어 비디오", animated_photos: "움직이는 사진", depth_videos: "3D 깊이 비디오", follow_motion_videos: "팔로우 모션 비디오", dramatic_zoom_videos: "돌리 줌 비디오", pan_videos: "팬 비디오", ken_burns_videos: "Ken Burns 스타일 비디오", slow_motion_videos: "슬로모션 비디오", loop_videos: "루프 비디오", cinemagraphs: "시네마그래프",
    viewers: "시청자", shoppers: "쇼핑객", buyers: "B2B 구매자", communities: "커뮤니티", clients: "고객", students: "학생", pet_owners: "반려동물 보호자", local_customers: "지역 고객", followers: "팔로워", creators: "크리에이터", home_buyers: "주택 구매자",
    channel_growth: "채널을 성장시키기", traffic: "트래픽을 늘리기", authority: "권위를 만들기", reach: "도달 범위를 넓히기", motivation: "행동을 유도하기", bookings: "예약을 얻기", learning: "더 쉽게 설명하기", trust: "신뢰를 만들기", sales: "더 많이 판매하기", leads: "리드를 확보하기", brand_deals: "브랜드 협업을 전달하기", conversions: "전환을 개선하기", scale: "제작을 확장하기", delivery: "더 빠르게 납품하기", launches: "더 빠르게 출시하기", speed: "더 빠르게 만들기", attention: "주의를 끌기", focus: "시선을 유도하기", drama: "극적인 느낌을 더하기", storytelling: "스토리를 전달하기", watch_time: "시청 시간을 늘리기",
  },
  zh: {
    photos: "照片", product_photos: "产品照片", brand_assets: "品牌素材", workout_photos: "训练照片", destination_photos: "目的地照片", lesson_assets: "课程素材", detail_photos: "细节照片", pet_photos: "宠物照片", vehicle_photos: "车辆照片", campaign_photos: "活动照片", campaign_assets: "营销活动素材", client_assets: "客户素材", portfolio_assets: "作品集素材", startup_assets: "发布素材", content_backlog: "内容库存", property_photos: "房源照片", photo_portfolios: "摄影作品集", phone_photos: "手机照片", subject_photos: "主体照片", portrait_photos: "人像", wide_photos: "宽幅照片", action_photos: "动作照片", lifestyle_photos: "生活方式照片",
    shorts: "竖屏Shorts", pins: "视频 Pin", professional_posts: "专业帖子", reels: "Reels", fitness_videos: "健身视频", travel_videos: "旅行视频", course_videos: "课程视频", luxury_product_videos: "高端产品视频", pet_product_videos: "宠物产品视频", automotive_videos: "汽车视频", marketing_videos: "营销视频", sponsored_videos: "赞助视频", ad_creatives: "广告创意", client_videos: "客户视频", launch_videos: "发布视频", content_calendar_videos: "内容日历视频", listing_videos: "房源视频", coaching_videos: "教练视频", portfolio_videos: "作品集视频", social_videos: "社交视频", mobile_videos: "移动端视频", store_videos: "店铺视频", animated_photos: "动态照片", depth_videos: "3D景深视频", follow_motion_videos: "跟随运动视频", dramatic_zoom_videos: "Dolly Zoom视频", pan_videos: "平移视频", ken_burns_videos: "Ken Burns风格视频", slow_motion_videos: "慢动作视频", loop_videos: "循环视频", cinemagraphs: "微动影像",
    viewers: "观众", shoppers: "购物者", buyers: "B2B买家", communities: "社群", clients: "客户", students: "学生", pet_owners: "宠物主人", local_customers: "本地客户", followers: "粉丝", creators: "创作者", home_buyers: "购房者",
    channel_growth: "推动频道增长", traffic: "带来流量", authority: "建立权威", reach: "扩大触达", motivation: "激发行动", bookings: "获得预订", learning: "讲解更清晰", trust: "建立信任", sales: "提升销售", leads: "获取线索", brand_deals: "交付品牌合作", conversions: "提升转化", scale: "规模化生产", delivery: "更快交付", launches: "更快发布", speed: "更快创建", attention: "吸引注意", focus: "引导视线", drama: "增加戏剧感", storytelling: "讲述故事", watch_time: "提升观看时长",
  },
};

function term(locale: NonEnLocale, key: string): string {
  if (terms[locale][key]) return terms[locale][key];

  const groupedFallbacks: Record<NonEnLocale, Record<"asset" | "output" | "audience" | "goal", string>> = {
    es: { asset: "fotos", output: "videos", audience: "audiencia", goal: "mejorar resultados" },
    de: { asset: "Fotos", output: "Videos", audience: "Zielgruppe", goal: "bessere Ergebnisse erzielen" },
    fr: { asset: "photos", output: "videos", audience: "audience", goal: "ameliorer les resultats" },
    pt: { asset: "fotos", output: "videos", audience: "publico", goal: "melhorar resultados" },
    ru: { asset: "фотографии", output: "видео", audience: "аудитория", goal: "улучшать результаты" },
    it: { asset: "foto", output: "video", audience: "pubblico", goal: "migliorare i risultati" },
    nl: { asset: "foto's", output: "video's", audience: "doelgroep", goal: "betere resultaten behalen" },
    pl: { asset: "zdjecia", output: "wideo", audience: "odbiorcy", goal: "poprawiac wyniki" },
    ja: { asset: "写真", output: "動画", audience: "視聴者", goal: "成果を高める" },
    ko: { asset: "사진", output: "비디오", audience: "대상 고객", goal: "성과를 높이기" },
    zh: { asset: "照片", output: "视频", audience: "受众", goal: "提升效果" },
  };
  const assetKeys = new Set(Object.values(slugContexts).map((context) => context.asset));
  const outputKeys = new Set(Object.values(slugContexts).map((context) => context.output));
  const audienceKeys = new Set(Object.values(slugContexts).map((context) => context.audience));
  const goalKeys = new Set(Object.values(slugContexts).map((context) => context.goal));

  if (assetKeys.has(key)) return groupedFallbacks[locale].asset;
  if (outputKeys.has(key)) return groupedFallbacks[locale].output;
  if (audienceKeys.has(key)) return groupedFallbacks[locale].audience;
  if (goalKeys.has(key)) return groupedFallbacks[locale].goal;

  return key.replace(/_/g, " ");
}

export function pageSpecificCopy(
  slug: string,
  fallbackName: string,
  locale: NonEnLocale
): PageSpecificCopy {
  const context = slugContexts[slug] || {
    asset: "photos",
    output: "social_videos",
    audience: "viewers",
    goal: "attention",
  };
  const name = localizedName(slug, fallbackName, locale);
  const asset = term(locale, context.asset);
  const output = term(locale, context.output);
  const audience = term(locale, context.audience);
  const goal = term(locale, context.goal);
  const c = copy[locale];
  const sentence = {
    es: {
      desc: `Convierte ${asset} en ${output} para ${audience} y ${goal}.`,
      ideal: `Ideal para transformar ${asset} en ${output}.`,
      oriented: `Pensado para ${audience} y para ${goal}.`,
      variants: `Produce variantes especificas de ${output} sin rehacer el trabajo.`,
      export: `Exporta contenido listo para ${audience}.`,
      start: `Usa ${asset} como punto de partida.`,
      motion: `Ajusta el movimiento para ${goal}.`,
      generate: `Genera ${output} con ritmo y acabado profesional.`,
      publish: `Publica para ${audience}.`,
      flow: `El flujo esta optimizado para crear ${output} desde ${asset}.`,
      images: `Para ${name}, usa imagenes claras que muestren bien el sujeto principal.`,
      ads: `Es especialmente util cuando necesitas ${goal}.`,
      timing: `Puedes crear varias versiones de ${output} para probar que funciona mejor.`,
      benefit1: `${c.features[0]} para convertir ${asset} en ${output}`,
      benefit2: `${c.features[1]} orientado a ${audience}`,
      benefit3: `${c.features[2]} para ${goal}`,
      benefit4: `${c.features[3]} sin trabajo manual de edicion`,
      benefit5: `${c.cta} y prueba variantes especificas de ${name}`,
      benefit6: `${output} listos para publicar, vender o presentar`,
    },
    de: {
      desc: `Erstelle ${output} aus ${asset} fur ${audience}. Ziel: ${goal}.`,
      ideal: `Ideal fur ${asset} und ${output}.`,
      oriented: `Ausgerichtet auf ${audience}. Ziel: ${goal}.`,
      variants: `Erstelle spezifische Varianten fur ${output}, ohne die Arbeit neu aufzusetzen.`,
      export: `Exportiere Inhalte fur ${audience}.`,
      start: `Nutze ${asset} als Ausgangspunkt.`,
      motion: `Passe die Bewegung an. Ziel: ${goal}.`,
      generate: `Erzeuge ${output} mit Rhythmus und professionellem Finish.`,
      publish: `Veroffentliche fur ${audience}.`,
      flow: `Der Ablauf ist darauf optimiert, ${output} aus ${asset} zu erstellen.`,
      images: `Fur ${name} nutzt du klare Bilder mit gut erkennbarem Hauptmotiv.`,
      ads: `Besonders nutzlich fur das Ziel: ${goal}.`,
      timing: `Du kannst mehrere Varianten fur ${output} erstellen und vergleichen.`,
      benefit1: `${c.features[0]} fur ${asset} und ${output}`,
      benefit2: `${c.features[1]} fur ${audience}`,
      benefit3: `${c.features[2]} mit Ziel: ${goal}`,
      benefit4: `${c.features[3]} ohne manuellen Schnitt`,
      benefit5: `${c.cta} und teste spezifische Varianten fur ${name}`,
      benefit6: `${output} bereit zum Posten, Verkaufen oder Prasentieren`,
    },
    fr: {
      desc: `Transformez ${asset} en ${output} pour ${audience} et ${goal}.`,
      ideal: `Ideal pour transformer ${asset} en ${output}.`,
      oriented: `Concu pour ${audience} et pour ${goal}.`,
      variants: `Creez des variantes specifiques de ${output} sans recommencer le travail.`,
      export: `Exportez du contenu pret pour ${audience}.`,
      start: `Utilisez ${asset} comme point de depart.`,
      motion: `Ajustez le mouvement pour ${goal}.`,
      generate: `Generez ${output} avec rythme et finition professionnelle.`,
      publish: `Publiez pour ${audience}.`,
      flow: `Le flux est optimise pour creer ${output} a partir de ${asset}.`,
      images: `Pour ${name}, utilisez des images claires qui montrent bien le sujet principal.`,
      ads: `C'est particulierement utile lorsque vous devez ${goal}.`,
      timing: `Vous pouvez creer plusieurs versions de ${output} pour tester ce qui marche le mieux.`,
      benefit1: `${c.features[0]} pour convertir ${asset} en ${output}`,
      benefit2: `${c.features[1]} pense pour ${audience}`,
      benefit3: `${c.features[2]} pour ${goal}`,
      benefit4: `${c.features[3]} sans montage manuel`,
      benefit5: `${c.cta} et testez des variantes specifiques pour ${name}`,
      benefit6: `${output} prets a publier, vendre ou presenter`,
    },
    pt: {
      desc: `Transforme ${asset} em ${output} para ${audience} e ${goal}.`,
      ideal: `Ideal para transformar ${asset} em ${output}.`,
      oriented: `Pensado para ${audience} e para ${goal}.`,
      variants: `Crie variantes especificas de ${output} sem refazer o trabalho.`,
      export: `Exporte conteudo pronto para ${audience}.`,
      start: `Use ${asset} como ponto de partida.`,
      motion: `Ajuste o movimento para ${goal}.`,
      generate: `Gere ${output} com ritmo e acabamento profissional.`,
      publish: `Publique para ${audience}.`,
      flow: `O fluxo e otimizado para criar ${output} a partir de ${asset}.`,
      images: `Para ${name}, use imagens claras que mostrem bem o assunto principal.`,
      ads: `E especialmente util quando voce precisa ${goal}.`,
      timing: `Voce pode criar varias versoes de ${output} para testar o que funciona melhor.`,
      benefit1: `${c.features[0]} para converter ${asset} em ${output}`,
      benefit2: `${c.features[1]} voltado para ${audience}`,
      benefit3: `${c.features[2]} para ${goal}`,
      benefit4: `${c.features[3]} sem edicao manual`,
      benefit5: `${c.cta} e teste variantes especificas para ${name}`,
      benefit6: `${output} prontos para publicar, vender ou apresentar`,
    },
    ru: {
      desc: `Превращайте ${asset} в ${output} для ${audience}, чтобы ${goal}.`,
      ideal: `Подходит для превращения ${asset} в ${output}.`,
      oriented: `Сделано для ${audience} и задачи: ${goal}.`,
      variants: `Создавайте разные версии для формата: ${output}. Без повторной ручной работы.`,
      export: `Экспортируйте контент, готовый для ${audience}.`,
      start: `Используйте ${asset} как основу.`,
      motion: `Настройте движение под задачу: ${goal}.`,
      generate: `Создавайте ${output} с ритмом и профессиональной подачей.`,
      publish: `Публикуйте для ${audience}.`,
      flow: `Процесс оптимизирован, чтобы создавать ${output} из ${asset}.`,
      images: `Для ${name} используйте четкие изображения с хорошо видимым главным объектом.`,
      ads: `Особенно полезно, когда нужно ${goal}.`,
      timing: `Можно создать несколько версий для формата: ${output}, чтобы проверить, что работает лучше.`,
      benefit1: `${c.features[0]} для превращения ${asset} в ${output}`,
      benefit2: `${c.features[1]} для ${audience}`,
      benefit3: `${c.features[2]}, чтобы ${goal}`,
      benefit4: `${c.features[3]} без ручного монтажа`,
      benefit5: `${c.cta} и тестируйте варианты для ${name}`,
      benefit6: `${output} готовы для публикации, продаж или презентации`,
    },
    it: {
      desc: `Trasforma ${asset} in ${output} per ${audience} e ${goal}.`,
      ideal: `Ideale per trasformare ${asset} in ${output}.`,
      oriented: `Pensato per ${audience} e per ${goal}.`,
      variants: `Crea varianti specifiche di ${output} senza rifare il lavoro.`,
      export: `Esporta contenuti pronti per ${audience}.`,
      start: `Usa ${asset} come punto di partenza.`,
      motion: `Regola il movimento per ${goal}.`,
      generate: `Genera ${output} con ritmo e finitura professionale.`,
      publish: `Pubblica per ${audience}.`,
      flow: `Il flusso e ottimizzato per creare ${output} da ${asset}.`,
      images: `Per ${name}, usa immagini chiare che mostrino bene il soggetto principale.`,
      ads: `E particolarmente utile quando devi ${goal}.`,
      timing: `Puoi creare piu versioni di ${output} per testare cosa funziona meglio.`,
      benefit1: `${c.features[0]} per convertire ${asset} in ${output}`,
      benefit2: `${c.features[1]} per ${audience}`,
      benefit3: `${c.features[2]} per ${goal}`,
      benefit4: `${c.features[3]} senza editing manuale`,
      benefit5: `${c.cta} e prova varianti specifiche per ${name}`,
      benefit6: `${output} pronti per pubblicare, vendere o presentare`,
    },
    nl: {
      desc: `Verander ${asset} in ${output} voor ${audience} en om ${goal}.`,
      ideal: `Ideaal om ${asset} om te zetten in ${output}.`,
      oriented: `Ontworpen voor ${audience} en om ${goal}.`,
      variants: `Maak specifieke varianten van ${output} zonder opnieuw te beginnen.`,
      export: `Exporteer content die klaar is voor ${audience}.`,
      start: `Gebruik ${asset} als startpunt.`,
      motion: `Stem de beweging af om ${goal}.`,
      generate: `Genereer ${output} met ritme en professionele afwerking.`,
      publish: `Publiceer voor ${audience}.`,
      flow: `De workflow is geoptimaliseerd om ${output} te maken vanuit ${asset}.`,
      images: `Gebruik voor ${name} duidelijke beelden waarop het hoofdonderwerp goed zichtbaar is.`,
      ads: `Vooral nuttig wanneer je ${goal}.`,
      timing: `Je kunt meerdere versies van ${output} maken om te testen wat werkt.`,
      benefit1: `${c.features[0]} om ${asset} te veranderen in ${output}`,
      benefit2: `${c.features[1]} voor ${audience}`,
      benefit3: `${c.features[2]} om ${goal}`,
      benefit4: `${c.features[3]} zonder handmatige montage`,
      benefit5: `${c.cta} en test specifieke varianten voor ${name}`,
      benefit6: `${output} klaar om te publiceren, verkopen of presenteren`,
    },
    pl: {
      desc: `Zamieniaj ${asset} w ${output} dla ${audience} i aby ${goal}.`,
      ideal: `Idealne do przeksztalcania ${asset} w ${output}.`,
      oriented: `Zaprojektowane dla ${audience} i aby ${goal}.`,
      variants: `Tworz konkretne warianty ${output} bez zaczynania od nowa.`,
      export: `Eksportuj tresci gotowe dla ${audience}.`,
      start: `Uzyj ${asset} jako punktu wyjscia.`,
      motion: `Dopasuj ruch, aby ${goal}.`,
      generate: `Generuj ${output} z rytmem i profesjonalnym wykonczeniem.`,
      publish: `Publikuj dla ${audience}.`,
      flow: `Proces jest zoptymalizowany do tworzenia ${output} z ${asset}.`,
      images: `Dla ${name} uzywaj wyraznych obrazow dobrze pokazujacych glowny temat.`,
      ads: `Szczegolnie przydatne, gdy chcesz ${goal}.`,
      timing: `Mozesz tworzyc kilka wersji ${output}, aby sprawdzic, co dziala najlepiej.`,
      benefit1: `${c.features[0]} do zamiany ${asset} w ${output}`,
      benefit2: `${c.features[1]} dla ${audience}`,
      benefit3: `${c.features[2]}, aby ${goal}`,
      benefit4: `${c.features[3]} bez recznego montazu`,
      benefit5: `${c.cta} i testuj warianty dla ${name}`,
      benefit6: `${output} gotowe do publikacji, sprzedazy lub prezentacji`,
    },
    ja: {
      desc: `${asset}を${output}に変換し、${audience}に向けて${goal}。`,
      ideal: `${asset}を${output}に変えるのに最適です。`,
      oriented: `${audience}と「${goal}」に合わせて設計されています。`,
      variants: `${output}の複数バリエーションを作り直しなしで作成できます。`,
      export: `${audience}向けにすぐ使えるコンテンツを書き出せます。`,
      start: `${asset}を出発点として使います。`,
      motion: `${goal}ための動きを調整します。`,
      generate: `リズムとプロ品質の仕上げで${output}を生成します。`,
      publish: `${audience}に向けて公開します。`,
      flow: `${asset}から${output}を作るために最適化されています。`,
      images: `${name}では、主題がはっきり見える画像を使ってください。`,
      ads: `${goal}必要があるときに特に便利です。`,
      timing: `${output}の複数版を作って効果を比較できます。`,
      benefit1: `${asset}を${output}に変える${c.features[0]}`,
      benefit2: `${audience}向けの${c.features[1]}`,
      benefit3: `${goal}ための${c.features[2]}`,
      benefit4: `手動編集なしの${c.features[3]}`,
      benefit5: `${c.cta}して${name}向けのバリエーションを試す`,
      benefit6: `公開、販売、提案に使える${output}`,
    },
    ko: {
      desc: `${asset}을 ${output}로 변환해 ${audience}에게 맞추고 ${goal}.`,
      ideal: `${asset}을 ${output}로 바꾸는 데 적합합니다.`,
      oriented: `${audience}와 ${goal}에 맞게 설계되었습니다.`,
      variants: `작업을 다시 하지 않고 ${output}의 여러 버전을 만드세요.`,
      export: `${audience}에게 바로 쓸 수 있는 콘텐츠를 내보내세요.`,
      start: `${asset}을 시작점으로 사용하세요.`,
      motion: `${goal}에 맞게 움직임을 조정하세요.`,
      generate: `리듬과 전문적인 마감으로 ${output}를 생성하세요.`,
      publish: `${audience}에게 게시하세요.`,
      flow: `${asset}에서 ${output}를 만들도록 워크플로가 최적화되어 있습니다.`,
      images: `${name}에는 주요 피사체가 잘 보이는 선명한 이미지를 사용하세요.`,
      ads: `${goal}가 필요할 때 특히 유용합니다.`,
      timing: `${output}의 여러 버전을 만들어 무엇이 더 잘 작동하는지 테스트할 수 있습니다.`,
      benefit1: `${asset}을 ${output}로 바꾸는 ${c.features[0]}`,
      benefit2: `${audience}를 위한 ${c.features[1]}`,
      benefit3: `${goal}를 위한 ${c.features[2]}`,
      benefit4: `수동 편집 없는 ${c.features[3]}`,
      benefit5: `${c.cta}하고 ${name}용 변형을 테스트하세요`,
      benefit6: `게시, 판매, 발표에 바로 쓸 수 있는 ${output}`,
    },
    zh: {
      desc: `将${asset}转换为${output}，面向${audience}并${goal}。`,
      ideal: `非常适合将${asset}转换为${output}。`,
      oriented: `专为${audience}和${goal}而设计。`,
      variants: `无需重做即可创建多个${output}版本。`,
      export: `导出适合${audience}的成品内容。`,
      start: `以${asset}作为起点。`,
      motion: `根据${goal}调整运动效果。`,
      generate: `生成有节奏且具专业质感的${output}。`,
      publish: `面向${audience}发布。`,
      flow: `流程已针对从${asset}创建${output}进行优化。`,
      images: `${name}建议使用主体清晰的图片。`,
      ads: `当您需要${goal}时尤其有用。`,
      timing: `可以创建多个${output}版本并测试效果。`,
      benefit1: `用${c.features[0]}将${asset}变成${output}`,
      benefit2: `面向${audience}的${c.features[1]}`,
      benefit3: `用于${goal}的${c.features[2]}`,
      benefit4: `无需手动剪辑的${c.features[3]}`,
      benefit5: `${c.cta}并测试${name}专属版本`,
      benefit6: `可用于发布、销售或展示的${output}`,
    },
  }[locale];

  return {
    metaTitle: `${name} - ${localizedAi(locale)} | Hyreel`,
    metaDescription: `${c.desc(name)} ${sentence.desc}`,
    heroHeadline: c.hero(name),
    heroSubheadline: `${c.sub(name)} ${sentence.desc}`,
    description: `${c.desc(name)} ${sentence.desc}`,
    features: [
      { title: c.features[0], description: `${c.featureDesc[0]} ${sentence.ideal}` },
      { title: c.features[1], description: `${c.featureDesc[1]} ${sentence.oriented}` },
      { title: c.features[2], description: `${c.featureDesc[2]} ${sentence.variants}` },
      { title: c.features[3], description: `${c.featureDesc[3]} ${sentence.export}` },
    ],
    steps: [
      { title: c.steps[0], description: `${c.stepDesc[0]} ${sentence.start}` },
      { title: c.steps[1], description: `${c.stepDesc[1]} ${sentence.motion}` },
      { title: c.steps[2], description: `${c.stepDesc[2]} ${sentence.generate}` },
      { title: c.steps[3], description: `${c.stepDesc[3]} ${sentence.publish}` },
    ],
    faqs: [
      { question: c.faqQ[0], answer: `${c.faqA[0]} ${sentence.flow}` },
      { question: c.faqQ[1], answer: `${c.faqA[1]} ${sentence.images}` },
      { question: c.faqQ[2], answer: `${c.faqA[2]} ${sentence.ads}` },
      { question: c.faqQ[3], answer: `${c.faqA[3]} ${sentence.timing}` },
    ],
    benefits: [
      sentence.benefit1,
      sentence.benefit2,
      sentence.benefit3,
      sentence.benefit4,
      sentence.benefit5,
      sentence.benefit6,
    ],
    cta: c.cta,
  };
}

export function localizedBlogMarkdown(
  title: string,
  excerpt: string,
  locale: NonEnLocale
): string {
  const c = copy[locale];
  const sections: Record<NonEnLocale, string[]> = {
    es: [
      "Por que importa",
      "Como aplicarlo",
      "Buenas practicas",
      "Siguiente paso",
    ],
    de: [
      "Warum es wichtig ist",
      "So setzt du es um",
      "Best Practices",
      "Nachster Schritt",
    ],
    fr: [
      "Pourquoi c'est important",
      "Comment l'appliquer",
      "Bonnes pratiques",
      "Prochaine etape",
    ],
    pt: [
      "Por que isso importa",
      "Como aplicar",
      "Melhores praticas",
      "Proximo passo",
    ],
    ru: [
      "Почему это важно",
      "Как применить",
      "Лучшие практики",
      "Следующий шаг",
    ],
    it: [
      "Perche e importante",
      "Come applicarlo",
      "Migliori pratiche",
      "Prossimo passo",
    ],
    nl: [
      "Waarom dit belangrijk is",
      "Hoe je het toepast",
      "Best practices",
      "Volgende stap",
    ],
    pl: [
      "Dlaczego to wazne",
      "Jak to zastosowac",
      "Najlepsze praktyki",
      "Nastepny krok",
    ],
    ja: [
      "なぜ重要か",
      "活用方法",
      "ベストプラクティス",
      "次のステップ",
    ],
    ko: [
      "왜 중요한가",
      "적용 방법",
      "모범 사례",
      "다음 단계",
    ],
    zh: [
      "为什么重要",
      "如何应用",
      "最佳实践",
      "下一步",
    ],
  };
  const [why, how, best, next] = sections[locale];
  const pairs = genericPairs(locale);
  const faqs = genericFaqs(locale);

  return `## ${why}

${excerpt}

${c.desc(title)}

## ${how}

1. ${c.steps[0]}: ${c.stepDesc[0]}
2. ${c.steps[1]}: ${c.stepDesc[1]}
3. ${c.steps[2]}: ${c.stepDesc[2]}
4. ${c.steps[3]}: ${c.stepDesc[3]}

## ${best}

- **${pairs[0].title}** - ${pairs[0].description}
- **${pairs[1].title}** - ${pairs[1].description}
- **${pairs[2].title}** - ${pairs[2].description}
- **${pairs[3].title}** - ${pairs[3].description}

## ${next}

${c.sub(title)}

### ${faqs[0].question}

${faqs[0].answer}

### ${faqs[1].question}

${faqs[1].answer}`;
}
