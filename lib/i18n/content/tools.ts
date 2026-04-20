import type { Locale } from "../config";

// Translations for tool content (name, tagline, description)
// Key is tool slug, value is translations per locale

interface ToolTranslation {
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
}

type ToolTranslations = Partial<Record<Locale, ToolTranslation>>;

export const toolTranslations: Record<string, ToolTranslations> = {
  "ai-script-generator": {
    es: {
      name: "Generador de Guiones IA",
      tagline: "Genera guiones de video atractivos en segundos",
      description: "Transforma tus ideas en guiones de video convincentes usando IA avanzada. Perfecto para TikTok, YouTube Shorts, Instagram Reels y más.",
      detailedDescription: "Nuestro Generador de Guiones IA revoluciona la creación de contenido al transformar ideas simples en guiones profesionales y atractivos al instante.",
    },
    de: {
      name: "KI-Skript-Generator",
      tagline: "Erstelle ansprechende Video-Skripte in Sekunden",
      description: "Verwandle deine Ideen mit fortschrittlicher KI in überzeugende Video-Skripte. Perfekt für TikTok, YouTube Shorts, Instagram Reels und mehr.",
      detailedDescription: "Unser KI-Skript-Generator revolutioniert die Content-Erstellung, indem er einfache Ideen sofort in professionelle, ansprechende Video-Skripte verwandelt.",
    },
    fr: {
      name: "Générateur de Scripts IA",
      tagline: "Générez des scripts vidéo captivants en secondes",
      description: "Transformez vos idées en scripts vidéo convaincants grâce à l'IA avancée. Parfait pour TikTok, YouTube Shorts, Instagram Reels et plus.",
      detailedDescription: "Notre Générateur de Scripts IA révolutionne la création de contenu en transformant instantanément des idées simples en scripts professionnels et engageants.",
    },
    pt: {
      name: "Gerador de Roteiros IA",
      tagline: "Gere roteiros de vídeo envolventes em segundos",
      description: "Transforme suas ideias em roteiros de vídeo convincentes usando IA avançada. Perfeito para TikTok, YouTube Shorts, Instagram Reels e mais.",
      detailedDescription: "Nosso Gerador de Roteiros IA revoluciona a criação de conteúdo ao transformar ideias simples em roteiros profissionais e envolventes instantaneamente.",
    },
    ru: {
      name: "ИИ Генератор Сценариев",
      tagline: "Создавайте захватывающие сценарии за секунды",
      description: "Превращайте идеи в убедительные сценарии с помощью продвинутого ИИ. Идеально для TikTok, YouTube Shorts, Instagram Reels.",
      detailedDescription: "Наш ИИ Генератор Сценариев революционизирует создание контента, мгновенно превращая идеи в профессиональные сценарии.",
    },
    it: {
      name: "Generatore di Script IA",
      tagline: "Genera script video coinvolgenti in pochi secondi",
      description: "Trasforma le tue idee in script video convincenti usando l'IA avanzata. Perfetto per TikTok, YouTube Shorts, Instagram Reels e altro.",
      detailedDescription: "Il nostro Generatore di Script IA rivoluziona la creazione di contenuti trasformando istantaneamente semplici idee in script professionali.",
    },
    nl: {
      name: "AI Script Generator",
      tagline: "Genereer boeiende videoscripts in seconden",
      description: "Transformeer je ideeën in overtuigende videoscripts met geavanceerde AI. Perfect voor TikTok, YouTube Shorts, Instagram Reels en meer.",
      detailedDescription: "Onze AI Script Generator revolutioneert contentcreatie door eenvoudige ideeën direct om te zetten in professionele videoscripts.",
    },
    pl: {
      name: "Generator Scenariuszy AI",
      tagline: "Generuj angażujące scenariusze wideo w sekundy",
      description: "Przekształć swoje pomysły w przekonujące scenariusze wideo za pomocą zaawansowanej AI. Idealny do TikTok, YouTube Shorts, Instagram Reels.",
      detailedDescription: "Nasz Generator Scenariuszy AI rewolucjonizuje tworzenie treści, natychmiast przekształcając pomysły w profesjonalne scenariusze.",
    },
    ja: {
      name: "AIスクリプトジェネレーター",
      tagline: "数秒で魅力的な動画スクリプトを生成",
      description: "高度なAIを使用して、アイデアを魅力的な動画スクリプトに変換します。TikTok、YouTube Shorts、Instagram Reelsに最適。",
      detailedDescription: "当社のAIスクリプトジェネレーターは、アイデアを瞬時にプロフェッショナルなスクリプトに変換し、コンテンツ作成を革新します。",
    },
    ko: {
      name: "AI 스크립트 생성기",
      tagline: "몇 초 만에 매력적인 비디오 스크립트 생성",
      description: "고급 AI를 사용하여 아이디어를 매력적인 비디오 스크립트로 변환하세요. TikTok, YouTube Shorts, Instagram Reels에 완벽합니다.",
      detailedDescription: "당사의 AI 스크립트 생성기는 아이디어를 즉시 전문적인 스크립트로 변환하여 콘텐츠 제작을 혁신합니다.",
    },
    zh: {
      name: "AI脚本生成器",
      tagline: "几秒钟内生成引人入胜的视频脚本",
      description: "使用先进的AI将您的想法转化为引人注目的视频脚本。非常适合TikTok、YouTube Shorts、Instagram Reels。",
      detailedDescription: "我们的AI脚本生成器通过将想法即时转化为专业脚本，彻底改变了内容创作。",
    },
  },
  "ai-voice-generator": {
    es: {
      name: "Generador de Voz IA",
      tagline: "Voces profesionales en más de 50 voces IA",
      description: "Crea locuciones naturales para tus videos usando voces IA avanzadas. Sin equipo de grabación.",
      detailedDescription: "Experimenta locuciones de calidad estudio sin costoso equipo de grabación o actores de voz.",
    },
    de: {
      name: "KI-Stimmen-Generator",
      tagline: "Professionelle Voiceovers mit 50+ KI-Stimmen",
      description: "Erstelle natürlich klingende Voiceovers für deine Videos mit fortschrittlichen KI-Stimmen.",
      detailedDescription: "Erlebe Studioqualität-Voiceovers ohne teures Aufnahmeequipment oder Sprecher.",
    },
    fr: {
      name: "Générateur de Voix IA",
      tagline: "Voix-off professionnelles avec 50+ voix IA",
      description: "Créez des voix-off naturelles pour vos vidéos en utilisant des voix IA avancées.",
      detailedDescription: "Profitez de voix-off de qualité studio sans équipement coûteux ni doubleurs.",
    },
    pt: {
      name: "Gerador de Voz IA",
      tagline: "Locuções profissionais com mais de 50 vozes IA",
      description: "Crie locuções naturais para seus vídeos usando vozes IA avançadas.",
      detailedDescription: "Experimente locuções de qualidade de estúdio sem equipamento caro ou locutores.",
    },
    ru: {
      name: "ИИ Генератор Голоса",
      tagline: "Профессиональная озвучка с 50+ ИИ голосами",
      description: "Создавайте естественную озвучку для видео с помощью продвинутых ИИ голосов.",
      detailedDescription: "Получите студийное качество озвучки без дорогого оборудования или дикторов.",
    },
    it: {
      name: "Generatore di Voci IA",
      tagline: "Voci professionali con oltre 50 voci IA",
      description: "Crea doppiaggi naturali per i tuoi video usando voci IA avanzate.",
      detailedDescription: "Sperimenta doppiaggi di qualità studio senza costose attrezzature o doppiatori.",
    },
    nl: {
      name: "AI Stem Generator",
      tagline: "Professionele voice-overs met 50+ AI-stemmen",
      description: "Maak natuurlijk klinkende voice-overs voor je video's met geavanceerde AI-stemmen.",
      detailedDescription: "Ervaar studiokwaliteit voice-overs zonder dure opnameapparatuur of stemacteurs.",
    },
    pl: {
      name: "Generator Głosu AI",
      tagline: "Profesjonalne lektoraty z 50+ głosami AI",
      description: "Twórz naturalne lektoraty do swoich filmów używając zaawansowanych głosów AI.",
      detailedDescription: "Doświadcz lektoratów o jakości studyjnej bez drogiego sprzętu lub lektorów.",
    },
    ja: {
      name: "AIボイスジェネレーター",
      tagline: "50以上のAI音声でプロのナレーション",
      description: "高度なAI音声を使用して、動画に自然なナレーションを作成します。",
      detailedDescription: "高価な録音機器や声優なしで、スタジオ品質のナレーションを体験できます。",
    },
    ko: {
      name: "AI 음성 생성기",
      tagline: "50개 이상의 AI 음성으로 전문 내레이션",
      description: "고급 AI 음성을 사용하여 비디오에 자연스러운 내레이션을 만드세요.",
      detailedDescription: "비싼 녹음 장비나 성우 없이 스튜디오 품질의 내레이션을 경험하세요.",
    },
    zh: {
      name: "AI语音生成器",
      tagline: "50多种AI语音的专业配音",
      description: "使用先进的AI语音为您的视频创建自然的配音。",
      detailedDescription: "无需昂贵的录音设备或配音演员，即可体验录音室级别的配音。",
    },
  },
  "ai-avatar-creator": {
    es: {
      name: "Creador de Avatares IA",
      tagline: "Crea avatares IA realistas para tus videos",
      description: "Genera avatares digitales fotorrealistas que hablan tu guión. Sin filmación, sin cámara.",
      detailedDescription: "Crea contenido de video profesional sin ponerte frente a la cámara.",
    },
    de: {
      name: "KI-Avatar-Ersteller",
      tagline: "Erstelle realistische KI-Avatare für deine Videos",
      description: "Generiere fotorealistische digitale Avatare, die dein Skript sprechen. Keine Kamera nötig.",
      detailedDescription: "Erstelle professionelle Videoinhalte, ohne vor der Kamera zu stehen.",
    },
    fr: {
      name: "Créateur d'Avatars IA",
      tagline: "Créez des avatars IA réalistes pour vos vidéos",
      description: "Générez des avatars numériques photoréalistes qui parlent votre script. Sans caméra.",
      detailedDescription: "Créez du contenu vidéo professionnel sans jamais passer devant la caméra.",
    },
    pt: {
      name: "Criador de Avatares IA",
      tagline: "Crie avatares IA realistas para seus vídeos",
      description: "Gere avatares digitais fotorrealistas que falam seu roteiro. Sem câmera necessária.",
      detailedDescription: "Crie conteúdo de vídeo profissional sem nunca aparecer na câmera.",
    },
    ru: {
      name: "Создатель ИИ Аватаров",
      tagline: "Создавайте реалистичные ИИ аватары для видео",
      description: "Генерируйте фотореалистичные аватары, говорящие ваш сценарий. Без камеры.",
      detailedDescription: "Создавайте профессиональный видеоконтент, не появляясь перед камерой.",
    },
    it: {
      name: "Creatore di Avatar IA",
      tagline: "Crea avatar IA realistici per i tuoi video",
      description: "Genera avatar digitali fotorealistici che parlano il tuo script. Senza telecamera.",
      detailedDescription: "Crea contenuti video professionali senza mai metterti davanti alla telecamera.",
    },
    nl: {
      name: "AI Avatar Maker",
      tagline: "Maak realistische AI-avatars voor je video's",
      description: "Genereer fotorealistische digitale avatars die je script spreken. Geen camera nodig.",
      detailedDescription: "Maak professionele video-inhoud zonder ooit voor de camera te staan.",
    },
    pl: {
      name: "Kreator Awatarów AI",
      tagline: "Twórz realistyczne awatary AI do swoich filmów",
      description: "Generuj fotorealistyczne awatary cyfrowe, które mówią twój scenariusz. Bez kamery.",
      detailedDescription: "Twórz profesjonalne treści wideo bez stawania przed kamerą.",
    },
    ja: {
      name: "AIアバタークリエイター",
      tagline: "動画用のリアルなAIアバターを作成",
      description: "スクリプトを話すフォトリアリスティックなデジタルアバターを生成。カメラ不要。",
      detailedDescription: "カメラの前に立つことなく、プロフェッショナルな動画コンテンツを作成できます。",
    },
    ko: {
      name: "AI 아바타 크리에이터",
      tagline: "비디오용 사실적인 AI 아바타 생성",
      description: "스크립트를 말하는 사실적인 디지털 아바타를 생성하세요. 카메라 불필요.",
      detailedDescription: "카메라 앞에 서지 않고도 전문적인 비디오 콘텐츠를 만들 수 있습니다.",
    },
    zh: {
      name: "AI头像创建器",
      tagline: "为视频创建逼真的AI头像",
      description: "生成能说出您脚本的逼真数字头像。无需摄像头。",
      detailedDescription: "无需出镜即可创建专业视频内容。",
    },
  },
  "image-to-video-ai": {
    es: {
      name: "Imagen a Video IA",
      tagline: "Transforma cualquier foto en video IA impresionante",
      description: "Convierte tus fotos en videos profesionales con efectos de movimiento cinematográfico. Crea contenido viral para TikTok, Instagram Reels y YouTube Shorts.",
      detailedDescription: "Transforma imágenes estáticas en videos cautivadores con la tecnología de Imagen a Video IA de Hyreel.",
    },
    de: {
      name: "Bild zu Video KI",
      tagline: "Verwandle jedes Foto in atemberaubendes KI-Video",
      description: "Verwandle deine Fotos in professionelle Videos mit kinematischen Bewegungseffekten. Erstelle virale Inhalte für TikTok, Instagram Reels und YouTube Shorts.",
      detailedDescription: "Verwandle statische Bilder in fesselnde Videos mit Hyreels Bild-zu-Video-KI-Technologie.",
    },
    fr: {
      name: "Image vers Vidéo IA",
      tagline: "Transformez n'importe quelle photo en vidéo IA époustouflante",
      description: "Convertissez vos photos en vidéos professionnelles avec des effets de mouvement cinématographiques. Créez du contenu viral pour TikTok, Instagram Reels et YouTube Shorts.",
      detailedDescription: "Transformez des images statiques en vidéos captivantes avec la technologie Image vers Vidéo IA de Hyreel.",
    },
    pt: {
      name: "Imagem para Vídeo IA",
      tagline: "Transforme qualquer foto em vídeo IA impressionante",
      description: "Converta suas fotos em vídeos profissionais com efeitos de movimento cinematográficos. Crie conteúdo viral para TikTok, Instagram Reels e YouTube Shorts.",
      detailedDescription: "Transforme imagens estáticas em vídeos cativantes com a tecnologia de Imagem para Vídeo IA da Hyreel.",
    },
    ru: {
      name: "Изображение в Видео ИИ",
      tagline: "Превратите любое фото в потрясающее ИИ видео",
      description: "Конвертируйте фото в профессиональные видео с кинематографическими эффектами движения. Создавайте вирусный контент для TikTok, Instagram Reels и YouTube Shorts.",
      detailedDescription: "Превращайте статичные изображения в захватывающие видео с технологией Изображение в Видео ИИ от Hyreel.",
    },
    it: {
      name: "Immagine a Video IA",
      tagline: "Trasforma qualsiasi foto in video IA straordinario",
      description: "Converti le tue foto in video professionali con effetti di movimento cinematografici. Crea contenuti virali per TikTok, Instagram Reels e YouTube Shorts.",
      detailedDescription: "Trasforma immagini statiche in video accattivanti con la tecnologia Immagine a Video IA di Hyreel.",
    },
    nl: {
      name: "Afbeelding naar Video AI",
      tagline: "Verander elke foto in verbluffende AI-video",
      description: "Zet je foto's om in professionele video's met cinematische bewegingseffecten. Maak virale content voor TikTok, Instagram Reels en YouTube Shorts.",
      detailedDescription: "Transformeer statische afbeeldingen in boeiende video's met Hyreel's Afbeelding naar Video AI-technologie.",
    },
    pl: {
      name: "Obraz na Wideo AI",
      tagline: "Przekształć dowolne zdjęcie w oszałamiające wideo AI",
      description: "Konwertuj zdjęcia na profesjonalne filmy z kinematograficznymi efektami ruchu. Twórz wiralowe treści dla TikTok, Instagram Reels i YouTube Shorts.",
      detailedDescription: "Przekształcaj statyczne obrazy w wciągające filmy dzięki technologii Obraz na Wideo AI od Hyreel.",
    },
    ja: {
      name: "画像から動画へAI",
      tagline: "あらゆる写真を素晴らしいAI動画に変換",
      description: "写真をシネマティックなモーションエフェクトを備えたプロフェッショナルな動画に変換。TikTok、Instagram Reels、YouTube Shorts用のバイラルコンテンツを作成。",
      detailedDescription: "Hyreelの画像から動画へAI技術で、静止画像を魅力的な動画に変換します。",
    },
    ko: {
      name: "이미지에서 비디오로 AI",
      tagline: "모든 사진을 놀라운 AI 비디오로 변환",
      description: "사진을 시네마틱 모션 효과가 있는 전문적인 비디오로 변환하세요. TikTok, Instagram Reels, YouTube Shorts용 바이럴 콘텐츠를 만드세요.",
      detailedDescription: "Hyreel의 이미지에서 비디오로 AI 기술로 정적 이미지를 매력적인 비디오로 변환합니다.",
    },
    zh: {
      name: "图像转视频AI",
      tagline: "将任何照片转换为令人惊叹的AI视频",
      description: "将照片转换为具有电影级运动效果的专业视频。为TikTok、Instagram Reels和YouTube Shorts创建病毒内容。",
      detailedDescription: "使用Hyreel的图像转视频AI技术，将静态图像转化为引人入胜的视频。",
    },
  },
  "ai-tiktok-video-generator": {
    es: {
      name: "Generador de Videos TikTok IA",
      tagline: "Crea videos virales de TikTok con IA",
      description: "Genera videos optimizados para TikTok desde fotos. Efectos de tendencia, música y formatos perfectos para el algoritmo.",
      detailedDescription: "Crea contenido de TikTok que se vuelve viral con nuestro generador de videos IA optimizado para TikTok.",
    },
    de: {
      name: "KI TikTok Video Generator",
      tagline: "Erstelle virale TikTok-Videos mit KI",
      description: "Generiere für TikTok optimierte Videos aus Fotos. Trendeffekte, Musik und perfekte Formate für den Algorithmus.",
      detailedDescription: "Erstelle virale TikTok-Inhalte mit unserem für TikTok optimierten KI-Videogenerator.",
    },
    fr: {
      name: "Générateur de Vidéos TikTok IA",
      tagline: "Créez des vidéos TikTok virales avec l'IA",
      description: "Générez des vidéos optimisées pour TikTok à partir de photos. Effets tendance, musique et formats parfaits pour l'algorithme.",
      detailedDescription: "Créez du contenu TikTok viral avec notre générateur vidéo IA optimisé pour TikTok.",
    },
    pt: {
      name: "Gerador de Vídeos TikTok IA",
      tagline: "Crie vídeos virais do TikTok com IA",
      description: "Gere vídeos otimizados para TikTok a partir de fotos. Efeitos de tendência, música e formatos perfeitos para o algoritmo.",
      detailedDescription: "Crie conteúdo viral do TikTok com nosso gerador de vídeos IA otimizado para TikTok.",
    },
    ru: {
      name: "ИИ Генератор Видео для TikTok",
      tagline: "Создавайте вирусные видео TikTok с ИИ",
      description: "Генерируйте оптимизированные для TikTok видео из фото. Трендовые эффекты, музыка и идеальные форматы для алгоритма.",
      detailedDescription: "Создавайте вирусный контент TikTok с нашим ИИ генератором видео, оптимизированным для TikTok.",
    },
    it: {
      name: "Generatore Video TikTok IA",
      tagline: "Crea video TikTok virali con l'IA",
      description: "Genera video ottimizzati per TikTok dalle foto. Effetti di tendenza, musica e formati perfetti per l'algoritmo.",
      detailedDescription: "Crea contenuti TikTok virali con il nostro generatore video IA ottimizzato per TikTok.",
    },
    nl: {
      name: "AI TikTok Video Generator",
      tagline: "Maak virale TikTok-video's met AI",
      description: "Genereer voor TikTok geoptimaliseerde video's uit foto's. Trending effecten, muziek en perfecte formaten voor het algoritme.",
      detailedDescription: "Maak virale TikTok-content met onze voor TikTok geoptimaliseerde AI-videogenerator.",
    },
    pl: {
      name: "Generator Wideo TikTok AI",
      tagline: "Twórz wiralowe filmy TikTok z AI",
      description: "Generuj zoptymalizowane dla TikTok filmy ze zdjęć. Trendowe efekty, muzyka i idealne formaty dla algorytmu.",
      detailedDescription: "Twórz wiralowe treści TikTok z naszym generatorem wideo AI zoptymalizowanym dla TikTok.",
    },
    ja: {
      name: "AI TikTok動画ジェネレーター",
      tagline: "AIでバイラルTikTok動画を作成",
      description: "写真からTikTok最適化動画を生成。トレンドエフェクト、音楽、アルゴリズムに最適なフォーマット。",
      detailedDescription: "TikTok最適化AIビデオジェネレーターでバイラルTikTokコンテンツを作成。",
    },
    ko: {
      name: "AI TikTok 비디오 생성기",
      tagline: "AI로 바이럴 TikTok 비디오 생성",
      description: "사진에서 TikTok 최적화 비디오를 생성하세요. 트렌드 효과, 음악, 알고리즘에 완벽한 형식.",
      detailedDescription: "TikTok 최적화 AI 비디오 생성기로 바이럴 TikTok 콘텐츠를 만드세요.",
    },
    zh: {
      name: "AI TikTok视频生成器",
      tagline: "用AI创建病毒式TikTok视频",
      description: "从照片生成TikTok优化视频。流行效果、音乐和适合算法的完美格式。",
      detailedDescription: "使用我们为TikTok优化的AI视频生成器创建病毒式TikTok内容。",
    },
  },
  "ai-instagram-reels-maker": {
    es: {
      name: "Creador de Reels Instagram IA",
      tagline: "Crea Reels de Instagram virales con IA",
      description: "Genera Reels perfectos desde fotos. Optimizado para el algoritmo de Instagram con efectos de tendencia.",
      detailedDescription: "Domina Instagram Reels con nuestro creador de videos IA diseñado específicamente para Instagram.",
    },
    de: {
      name: "KI Instagram Reels Maker",
      tagline: "Erstelle virale Instagram Reels mit KI",
      description: "Generiere perfekte Reels aus Fotos. Optimiert für den Instagram-Algorithmus mit Trendeffekten.",
      detailedDescription: "Meistere Instagram Reels mit unserem KI-Video-Ersteller, speziell für Instagram entwickelt.",
    },
    fr: {
      name: "Créateur de Reels Instagram IA",
      tagline: "Créez des Reels Instagram viraux avec l'IA",
      description: "Générez des Reels parfaits à partir de photos. Optimisé pour l'algorithme Instagram avec des effets tendance.",
      detailedDescription: "Maîtrisez Instagram Reels avec notre créateur vidéo IA conçu spécifiquement pour Instagram.",
    },
    pt: {
      name: "Criador de Reels Instagram IA",
      tagline: "Crie Reels do Instagram virais com IA",
      description: "Gere Reels perfeitos a partir de fotos. Otimizado para o algoritmo do Instagram com efeitos de tendência.",
      detailedDescription: "Domine Instagram Reels com nosso criador de vídeos IA projetado especificamente para Instagram.",
    },
    ru: {
      name: "ИИ Создатель Instagram Reels",
      tagline: "Создавайте вирусные Instagram Reels с ИИ",
      description: "Генерируйте идеальные Reels из фото. Оптимизировано для алгоритма Instagram с трендовыми эффектами.",
      detailedDescription: "Овладейте Instagram Reels с нашим ИИ создателем видео, разработанным специально для Instagram.",
    },
    it: {
      name: "Creatore di Reels Instagram IA",
      tagline: "Crea Reels Instagram virali con l'IA",
      description: "Genera Reels perfetti dalle foto. Ottimizzato per l'algoritmo di Instagram con effetti di tendenza.",
      detailedDescription: "Domina Instagram Reels con il nostro creatore video IA progettato specificamente per Instagram.",
    },
    nl: {
      name: "AI Instagram Reels Maker",
      tagline: "Maak virale Instagram Reels met AI",
      description: "Genereer perfecte Reels uit foto's. Geoptimaliseerd voor het Instagram-algoritme met trending effecten.",
      detailedDescription: "Beheers Instagram Reels met onze AI-videomaker speciaal ontworpen voor Instagram.",
    },
    pl: {
      name: "Kreator Reels Instagram AI",
      tagline: "Twórz wiralowe Instagram Reels z AI",
      description: "Generuj idealne Reels ze zdjęć. Zoptymalizowane dla algorytmu Instagram z trendowymi efektami.",
      detailedDescription: "Opanuj Instagram Reels z naszym kreatorem wideo AI zaprojektowanym specjalnie dla Instagram.",
    },
    ja: {
      name: "AI Instagram Reelsメーカー",
      tagline: "AIでバイラルInstagram Reelsを作成",
      description: "写真から完璧なReelsを生成。トレンドエフェクトでInstagramアルゴリズムに最適化。",
      detailedDescription: "Instagram専用に設計されたAIビデオクリエイターでInstagram Reelsをマスター。",
    },
    ko: {
      name: "AI Instagram Reels 메이커",
      tagline: "AI로 바이럴 Instagram Reels 생성",
      description: "사진에서 완벽한 Reels를 생성하세요. 트렌드 효과로 Instagram 알고리즘에 최적화.",
      detailedDescription: "Instagram 전용으로 설계된 AI 비디오 크리에이터로 Instagram Reels를 마스터하세요.",
    },
    zh: {
      name: "AI Instagram Reels制作器",
      tagline: "用AI创建病毒式Instagram Reels",
      description: "从照片生成完美的Reels。使用流行效果为Instagram算法优化。",
      detailedDescription: "使用专为Instagram设计的AI视频创作器掌握Instagram Reels。",
    },
  },
  "ai-youtube-shorts-generator": {
    es: {
      name: "Generador de YouTube Shorts IA",
      tagline: "Crea YouTube Shorts virales con IA",
      description: "Genera Shorts perfectos para YouTube desde fotos. Optimizado para descubrimiento y engagement.",
      detailedDescription: "Domina YouTube Shorts con nuestro generador de videos IA optimizado para el formato vertical de YouTube.",
    },
    de: {
      name: "KI YouTube Shorts Generator",
      tagline: "Erstelle virale YouTube Shorts mit KI",
      description: "Generiere perfekte Shorts für YouTube aus Fotos. Optimiert für Entdeckung und Engagement.",
      detailedDescription: "Meistere YouTube Shorts mit unserem für das YouTube-Hochformat optimierten KI-Videogenerator.",
    },
    fr: {
      name: "Générateur YouTube Shorts IA",
      tagline: "Créez des YouTube Shorts viraux avec l'IA",
      description: "Générez des Shorts parfaits pour YouTube à partir de photos. Optimisé pour la découverte et l'engagement.",
      detailedDescription: "Maîtrisez YouTube Shorts avec notre générateur vidéo IA optimisé pour le format vertical YouTube.",
    },
    pt: {
      name: "Gerador de YouTube Shorts IA",
      tagline: "Crie YouTube Shorts virais com IA",
      description: "Gere Shorts perfeitos para YouTube a partir de fotos. Otimizado para descoberta e engajamento.",
      detailedDescription: "Domine YouTube Shorts com nosso gerador de vídeos IA otimizado para o formato vertical do YouTube.",
    },
    ru: {
      name: "ИИ Генератор YouTube Shorts",
      tagline: "Создавайте вирусные YouTube Shorts с ИИ",
      description: "Генерируйте идеальные Shorts для YouTube из фото. Оптимизировано для охвата и вовлечения.",
      detailedDescription: "Овладейте YouTube Shorts с нашим ИИ генератором видео, оптимизированным для вертикального формата YouTube.",
    },
    it: {
      name: "Generatore YouTube Shorts IA",
      tagline: "Crea YouTube Shorts virali con l'IA",
      description: "Genera Shorts perfetti per YouTube dalle foto. Ottimizzato per scoperta ed engagement.",
      detailedDescription: "Domina YouTube Shorts con il nostro generatore video IA ottimizzato per il formato verticale YouTube.",
    },
    nl: {
      name: "AI YouTube Shorts Generator",
      tagline: "Maak virale YouTube Shorts met AI",
      description: "Genereer perfecte Shorts voor YouTube uit foto's. Geoptimaliseerd voor ontdekking en engagement.",
      detailedDescription: "Beheers YouTube Shorts met onze AI-videogenerator geoptimaliseerd voor het verticale YouTube-formaat.",
    },
    pl: {
      name: "Generator YouTube Shorts AI",
      tagline: "Twórz wiralowe YouTube Shorts z AI",
      description: "Generuj idealne Shorts dla YouTube ze zdjęć. Zoptymalizowane dla odkrywalności i zaangażowania.",
      detailedDescription: "Opanuj YouTube Shorts z naszym generatorem wideo AI zoptymalizowanym dla pionowego formatu YouTube.",
    },
    ja: {
      name: "AI YouTube Shortsジェネレーター",
      tagline: "AIでバイラルYouTube Shortsを作成",
      description: "写真からYouTube用の完璧なShortsを生成。発見とエンゲージメントに最適化。",
      detailedDescription: "YouTube縦型フォーマット向けに最適化されたAIビデオジェネレーターでYouTube Shortsをマスター。",
    },
    ko: {
      name: "AI YouTube Shorts 생성기",
      tagline: "AI로 바이럴 YouTube Shorts 생성",
      description: "사진에서 YouTube용 완벽한 Shorts를 생성하세요. 발견과 참여에 최적화.",
      detailedDescription: "YouTube 세로 형식에 최적화된 AI 비디오 생성기로 YouTube Shorts를 마스터하세요.",
    },
    zh: {
      name: "AI YouTube Shorts生成器",
      tagline: "用AI创建病毒式YouTube Shorts",
      description: "从照片生成完美的YouTube Shorts。针对发现和参与度优化。",
      detailedDescription: "使用为YouTube垂直格式优化的AI视频生成器掌握YouTube Shorts。",
    },
  },
  "ai-zoom-video-effect": {
    es: {
      name: "Efecto de Zoom IA",
      tagline: "Añade zoom cinematográfico a cualquier foto",
      description: "Crea impresionantes efectos de zoom suave en tus fotos. Zoom dramático que captura la atención.",
      detailedDescription: "Transforma fotos estáticas en videos dinámicos con nuestro efecto de zoom IA cinematográfico.",
    },
    ru: {
      name: "ИИ Эффект Зума",
      tagline: "Добавьте кинематографический зум к любому фото",
      description: "Создавайте впечатляющие эффекты плавного зума на фото. Драматичный зум, захватывающий внимание.",
      detailedDescription: "Превращайте статичные фото в динамичные видео с нашим кинематографическим ИИ эффектом зума.",
    },
    zh: {
      name: "AI缩放效果",
      tagline: "为任何照片添加电影级缩放",
      description: "在照片上创建令人惊叹的平滑缩放效果。引人注目的戏剧性缩放。",
      detailedDescription: "使用我们的电影级AI缩放效果将静态照片转化为动态视频。",
    },
  },
  "ai-orbit-video-effect": {
    es: {
      name: "Efecto de Órbita IA",
      tagline: "Movimiento orbital 360° alrededor de tu sujeto",
      description: "Crea impresionantes videos con cámara orbitando alrededor del sujeto. Efecto cinematográfico profesional.",
      detailedDescription: "Añade movimiento orbital cinematográfico a tus fotos con nuestro efecto de órbita IA.",
    },
    ru: {
      name: "ИИ Эффект Орбиты",
      tagline: "360° орбитальное движение вокруг объекта",
      description: "Создавайте потрясающие видео с камерой, вращающейся вокруг объекта. Профессиональный кинематографический эффект.",
      detailedDescription: "Добавьте кинематографическое орбитальное движение к фото с нашим ИИ эффектом орбиты.",
    },
    zh: {
      name: "AI轨道效果",
      tagline: "围绕主体的360°轨道运动",
      description: "创建相机围绕主体旋转的惊人视频。专业电影效果。",
      detailedDescription: "使用我们的AI轨道效果为照片添加电影级轨道运动。",
    },
  },
  "ai-parallax-video-effect": {
    es: {
      name: "Efecto Parallax IA",
      tagline: "Profundidad 3D desde imágenes 2D",
      description: "Convierte fotos planas en videos con profundidad 3D realista. Efecto parallax cinematográfico.",
      detailedDescription: "Crea impresionante profundidad 3D a partir de imágenes 2D con nuestro efecto parallax IA.",
    },
    ru: {
      name: "ИИ Эффект Параллакса",
      tagline: "3D глубина из 2D изображений",
      description: "Конвертируйте плоские фото в видео с реалистичной 3D глубиной. Кинематографический эффект параллакса.",
      detailedDescription: "Создавайте потрясающую 3D глубину из 2D изображений с нашим ИИ эффектом параллакса.",
    },
    zh: {
      name: "AI视差效果",
      tagline: "从2D图像创建3D深度",
      description: "将平面照片转换为具有逼真3D深度的视频。电影级视差效果。",
      detailedDescription: "使用我们的AI视差效果从2D图像创建令人惊叹的3D深度。",
    },
  },
  "ai-product-video-maker": {
    es: {
      name: "Creador de Videos de Producto IA",
      tagline: "Videos de producto profesionales desde fotos",
      description: "Crea videos de producto impresionantes para e-commerce. Perfectos para tiendas online y redes sociales.",
      detailedDescription: "Transforma fotos de productos en videos de ventas profesionales con nuestro creador de videos de producto IA.",
    },
    ru: {
      name: "ИИ Создатель Видео Продуктов",
      tagline: "Профессиональные видео продуктов из фото",
      description: "Создавайте впечатляющие видео продуктов для e-commerce. Идеально для интернет-магазинов и соцсетей.",
      detailedDescription: "Превращайте фото продуктов в профессиональные продающие видео с нашим ИИ создателем видео продуктов.",
    },
    zh: {
      name: "AI产品视频制作器",
      tagline: "从照片制作专业产品视频",
      description: "为电商创建令人印象深刻的产品视频。非常适合在线商店和社交媒体。",
      detailedDescription: "使用我们的AI产品视频制作器将产品照片转化为专业销售视频。",
    },
  },
  "ai-video-from-image": {
    es: {
      name: "Video desde Imagen IA",
      tagline: "Genera videos desde cualquier imagen",
      description: "La forma más fácil de crear videos desde imágenes. Sube una foto, obtén un video profesional.",
      detailedDescription: "Simplifica la creación de videos con nuestra herramienta de video desde imagen IA.",
    },
    ru: {
      name: "Видео из Изображения ИИ",
      tagline: "Генерируйте видео из любого изображения",
      description: "Самый простой способ создавать видео из изображений. Загрузите фото, получите профессиональное видео.",
      detailedDescription: "Упростите создание видео с нашим инструментом видео из изображения ИИ.",
    },
    zh: {
      name: "从图像生成视频AI",
      tagline: "从任何图像生成视频",
      description: "从图像创建视频的最简单方式。上传照片，获得专业视频。",
      detailedDescription: "使用我们的从图像生成视频AI工具简化视频创作。",
    },
  },
  "ai-social-media-video-maker": {
    es: {
      name: "Creador de Videos para Redes Sociales IA",
      tagline: "Videos optimizados para todas las plataformas",
      description: "Crea videos perfectos para TikTok, Instagram, YouTube y más. Formatos y efectos optimizados para cada red.",
      detailedDescription: "Domina todas las redes sociales con videos optimizados para cada plataforma.",
    },
    ru: {
      name: "ИИ Создатель Видео для Соцсетей",
      tagline: "Видео оптимизированные для всех платформ",
      description: "Создавайте идеальные видео для TikTok, Instagram, YouTube и др. Форматы и эффекты для каждой сети.",
      detailedDescription: "Покоряйте все соцсети с видео, оптимизированными для каждой платформы.",
    },
    zh: {
      name: "AI社交媒体视频制作器",
      tagline: "为所有平台优化的视频",
      description: "为TikTok、Instagram、YouTube等创建完美视频。为每个网络优化的格式和效果。",
      detailedDescription: "使用为每个平台优化的视频征服所有社交媒体。",
    },
  },
  "ai-video-generator-app": {
    es: {
      name: "App Generador de Video IA",
      tagline: "Crea videos IA directamente en tu iPhone",
      description: "La app más potente de generación de video IA para iOS. Crea, edita y comparte videos desde tu móvil.",
      detailedDescription: "Lleva el poder de la generación de video IA en tu bolsillo con nuestra app para iOS.",
    },
    ru: {
      name: "Приложение ИИ Генератор Видео",
      tagline: "Создавайте ИИ видео прямо на iPhone",
      description: "Самое мощное приложение для генерации ИИ видео на iOS. Создавайте, редактируйте и делитесь видео с телефона.",
      detailedDescription: "Носите мощь ИИ генерации видео в кармане с нашим приложением для iOS.",
    },
    zh: {
      name: "AI视频生成器应用",
      tagline: "直接在iPhone上创建AI视频",
      description: "最强大的iOS AI视频生成应用。从手机创建、编辑和分享视频。",
      detailedDescription: "通过我们的iOS应用将AI视频生成的力量装进口袋。",
    },
  },
  "ai-faceless-video-generator": {
    es: {
      name: "Generador de Videos Sin Rostro IA",
      tagline: "Crea videos sin mostrar tu cara",
      description: "Videos profesionales sin aparecer en cámara. Perfecto para canales anónimos y contenido de nicho.",
      detailedDescription: "Crea contenido atractivo sin necesidad de mostrar tu rostro con nuestro generador de videos sin rostro IA.",
    },
    ru: {
      name: "ИИ Генератор Видео Без Лица",
      tagline: "Создавайте видео не показывая лицо",
      description: "Профессиональные видео без появления в кадре. Идеально для анонимных каналов и нишевого контента.",
      detailedDescription: "Создавайте привлекательный контент без показа лица с нашим ИИ генератором видео без лица.",
    },
    zh: {
      name: "AI无脸视频生成器",
      tagline: "创建不露脸的视频",
      description: "无需出镜的专业视频。非常适合匿名频道和利基内容。",
      detailedDescription: "使用我们的AI无脸视频生成器创建引人入胜的内容而无需露脸。",
    },
  },
  "ai-short-video-maker": {
    es: {
      name: "Creador de Videos Cortos IA",
      tagline: "Videos cortos virales en segundos",
      description: "Crea contenido corto perfecto para TikTok, Reels y Shorts. Optimizado para máximo engagement.",
      detailedDescription: "Domina el contenido de formato corto con nuestro creador de videos cortos IA.",
    },
    ru: {
      name: "ИИ Создатель Коротких Видео",
      tagline: "Вирусные короткие видео за секунды",
      description: "Создавайте идеальный короткий контент для TikTok, Reels и Shorts. Оптимизировано для максимального вовлечения.",
      detailedDescription: "Овладейте коротким форматом с нашим ИИ создателем коротких видео.",
    },
    zh: {
      name: "AI短视频制作器",
      tagline: "几秒钟内创建病毒式短视频",
      description: "为TikTok、Reels和Shorts创建完美的短内容。为最大参与度优化。",
      detailedDescription: "使用我们的AI短视频制作器掌握短视频内容。",
    },
  },
  "ai-ecommerce-video-creator": {
    es: {
      name: "Creador de Videos E-commerce IA",
      tagline: "Videos de producto que venden",
      description: "Crea videos de producto que convierten visitantes en compradores. Optimizado para tiendas online.",
      detailedDescription: "Aumenta tus ventas con videos de producto profesionales creados con IA.",
    },
    ru: {
      name: "ИИ Создатель Видео для E-commerce",
      tagline: "Видео продуктов, которые продают",
      description: "Создавайте видео продуктов, превращающие посетителей в покупателей. Оптимизировано для интернет-магазинов.",
      detailedDescription: "Увеличьте продажи с профессиональными видео продуктов, созданными с помощью ИИ.",
    },
    zh: {
      name: "AI电商视频创作器",
      tagline: "能卖货的产品视频",
      description: "创建将访客转化为买家的产品视频。为在线商店优化。",
      detailedDescription: "通过AI创建的专业产品视频提升销量。",
    },
  },
  "ai-photo-animation": {
    es: {
      name: "Animación de Fotos IA",
      tagline: "Da vida a tus fotos con animación IA",
      description: "Anima cualquier foto con movimientos realistas. Crea contenido único y atractivo.",
      detailedDescription: "Transforma fotos estáticas en animaciones cautivadoras con nuestra tecnología de animación IA.",
    },
    ru: {
      name: "ИИ Анимация Фото",
      tagline: "Оживите фото с помощью ИИ анимации",
      description: "Анимируйте любое фото с реалистичными движениями. Создавайте уникальный привлекательный контент.",
      detailedDescription: "Превращайте статичные фото в захватывающие анимации с нашей технологией ИИ анимации.",
    },
    zh: {
      name: "AI照片动画",
      tagline: "用AI动画让照片栩栩如生",
      description: "用逼真的动作为任何照片制作动画。创建独特有吸引力的内容。",
      detailedDescription: "使用我们的AI动画技术将静态照片转化为引人入胜的动画。",
    },
  },
  "ai-3d-photo-video": {
    es: {
      name: "Video Foto 3D IA",
      tagline: "Convierte fotos 2D en videos 3D",
      description: "Crea impresionantes videos 3D desde fotos planas. Profundidad y dimensión cinematográfica.",
      detailedDescription: "Añade profundidad 3D a tus fotos con nuestra tecnología de video foto 3D IA.",
    },
    ru: {
      name: "ИИ 3D Фото Видео",
      tagline: "Конвертируйте 2D фото в 3D видео",
      description: "Создавайте потрясающие 3D видео из плоских фото. Кинематографическая глубина и измерение.",
      detailedDescription: "Добавьте 3D глубину к фото с нашей технологией ИИ 3D фото видео.",
    },
    zh: {
      name: "AI 3D照片视频",
      tagline: "将2D照片转换为3D视频",
      description: "从平面照片创建令人惊叹的3D视频。电影级深度和维度。",
      detailedDescription: "使用我们的AI 3D照片视频技术为照片添加3D深度。",
    },
  },
  "ai-follow-video-effect": {
    es: {
      name: "Efecto de Seguimiento IA",
      tagline: "La cámara sigue automáticamente al sujeto",
      description: "Crea videos donde la cámara sigue al sujeto principal. Movimiento natural y cinematográfico.",
      detailedDescription: "Añade seguimiento inteligente de cámara a tus fotos con nuestro efecto de seguimiento IA.",
    },
    ru: {
      name: "ИИ Эффект Слежения",
      tagline: "Камера автоматически следует за объектом",
      description: "Создавайте видео, где камера следует за главным объектом. Естественное кинематографическое движение.",
      detailedDescription: "Добавьте умное слежение камеры к фото с нашим ИИ эффектом слежения.",
    },
    zh: {
      name: "AI跟随效果",
      tagline: "相机自动跟随主体",
      description: "创建相机跟随主体的视频。自然的电影级运动。",
      detailedDescription: "使用我们的AI跟随效果为照片添加智能相机跟踪。",
    },
  },
  "ai-dolly-zoom-effect": {
    es: {
      name: "Efecto Dolly Zoom IA",
      tagline: "El icónico efecto de vértigo cinematográfico",
      description: "Crea el famoso efecto de vértigo donde el fondo se acerca mientras el sujeto se mantiene. Cinematográfico al instante.",
      detailedDescription: "Añade el icónico efecto dolly zoom de Hitchcock a tus fotos con nuestra tecnología IA.",
    },
    ru: {
      name: "ИИ Эффект Долли Зум",
      tagline: "Иконический кинематографический эффект головокружения",
      description: "Создайте знаменитый эффект вертиго, где фон приближается, а объект остаётся. Мгновенно кинематографично.",
      detailedDescription: "Добавьте иконический эффект долли зум Хичкока к фото с нашей ИИ технологией.",
    },
    zh: {
      name: "AI推拉变焦效果",
      tagline: "标志性的电影眩晕效果",
      description: "创建著名的眩晕效果，背景靠近而主体保持不变。即时电影感。",
      detailedDescription: "使用我们的AI技术为照片添加希区柯克标志性的推拉变焦效果。",
    },
  },
  "ai-camera-pan-effect": {
    es: {
      name: "Efecto de Paneo IA",
      tagline: "Movimiento de cámara panorámico suave",
      description: "Añade movimiento de paneo horizontal o vertical a cualquier foto. Cinematográfico y profesional.",
      detailedDescription: "Crea movimientos de paneo cinematográficos con nuestro efecto de paneo IA.",
    },
    ru: {
      name: "ИИ Эффект Панорамирования",
      tagline: "Плавное панорамное движение камеры",
      description: "Добавьте горизонтальное или вертикальное панорамирование к любому фото. Кинематографично и профессионально.",
      detailedDescription: "Создавайте кинематографические панорамные движения с нашим ИИ эффектом панорамирования.",
    },
    zh: {
      name: "AI平移效果",
      tagline: "平滑的全景相机移动",
      description: "为任何照片添加水平或垂直平移移动。电影级专业效果。",
      detailedDescription: "使用我们的AI平移效果创建电影级平移运动。",
    },
  },
  "ai-ken-burns-effect": {
    es: {
      name: "Efecto Ken Burns IA",
      tagline: "El clásico efecto de documentales",
      description: "Añade el icónico zoom y paneo lento usado en documentales. Da vida a fotos con movimiento sutil.",
      detailedDescription: "Crea el famoso efecto Ken Burns para dar vida a fotos con movimiento cinematográfico sutil.",
    },
    ru: {
      name: "ИИ Эффект Кена Бёрнса",
      tagline: "Классический документальный эффект",
      description: "Добавьте иконический медленный зум и панорамирование из документальных фильмов. Оживите фото тонким движением.",
      detailedDescription: "Создайте знаменитый эффект Кена Бёрнса для оживления фото с тонким кинематографическим движением.",
    },
    zh: {
      name: "AI肯伯恩斯效果",
      tagline: "经典纪录片效果",
      description: "添加纪录片中使用的标志性慢速缩放和平移。用微妙的运动让照片活起来。",
      detailedDescription: "创建著名的肯伯恩斯效果，用微妙的电影运动让照片栩栩如生。",
    },
  },
  "ai-slow-motion-video": {
    es: {
      name: "Video en Cámara Lenta IA",
      tagline: "Movimiento fluido en cámara lenta",
      description: "Crea impresionantes videos en cámara lenta desde cualquier foto. Movimiento suave y dramático.",
      detailedDescription: "Añade efecto de cámara lenta cinematográfica a tus fotos con nuestra tecnología IA.",
    },
    ru: {
      name: "ИИ Видео Замедленная Съёмка",
      tagline: "Плавное замедленное движение",
      description: "Создавайте потрясающие замедленные видео из любого фото. Плавное драматичное движение.",
      detailedDescription: "Добавьте кинематографическую замедленную съёмку к фото с нашей ИИ технологией.",
    },
    zh: {
      name: "AI慢动作视频",
      tagline: "流畅的慢动作",
      description: "从任何照片创建令人惊叹的慢动作视频。平滑戏剧性的运动。",
      detailedDescription: "使用我们的AI技术为照片添加电影级慢动作效果。",
    },
  },
  "ai-loop-video-generator": {
    es: {
      name: "Generador de Videos Loop IA",
      tagline: "Videos en bucle perfecto sin costuras",
      description: "Crea videos que se repiten perfectamente. Ideal para fondos, redes sociales y arte digital.",
      detailedDescription: "Genera videos en bucle perfecto para contenido hipnótico que engancha a los espectadores.",
    },
    ru: {
      name: "ИИ Генератор Зацикленных Видео",
      tagline: "Идеально зацикленные видео без швов",
      description: "Создавайте видео с идеальным повторением. Идеально для фонов, соцсетей и цифрового искусства.",
      detailedDescription: "Генерируйте идеально зацикленные видео для гипнотического контента.",
    },
    zh: {
      name: "AI循环视频生成器",
      tagline: "完美无缝循环视频",
      description: "创建完美重复的视频。非常适合背景、社交媒体和数字艺术。",
      detailedDescription: "生成完美循环的视频，创建吸引观众的催眠内容。",
    },
  },
  "ai-cinemagraph-maker": {
    es: {
      name: "Creador de Cinemagraphs IA",
      tagline: "Fotos con movimiento sutil y mágico",
      description: "Crea cinemagraphs donde solo una parte de la imagen se mueve. Efecto mágico e hipnótico.",
      detailedDescription: "Transforma fotos en cinemagraphs cautivadores con movimiento sutil y mágico.",
    },
    ru: {
      name: "ИИ Создатель Синемаграфов",
      tagline: "Фото с тонким магическим движением",
      description: "Создавайте синемаграфы, где движется только часть изображения. Магический гипнотический эффект.",
      detailedDescription: "Превращайте фото в захватывающие синемаграфы с тонким магическим движением.",
    },
    zh: {
      name: "AI电影图制作器",
      tagline: "带有微妙神奇运动的照片",
      description: "创建只有图像一部分移动的电影图。神奇催眠的效果。",
      detailedDescription: "将照片转化为带有微妙神奇运动的迷人电影图。",
    },
  },
};

/**
 * Get localized tool content
 * Returns null if translation not available (fallback to English in component)
 */
export function getLocalizedToolContent(
  slug: string,
  locale: Locale
): { name: string; tagline: string; description: string; detailedDescription: string } | null {
  // Don't return translations for English (default locale)
  if (locale === "en") return null;

  const translations = toolTranslations[slug];
  if (!translations) return null;

  return translations[locale] || null;
}
