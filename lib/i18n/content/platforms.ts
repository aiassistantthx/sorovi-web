import { type Locale } from "@/lib/i18n/config";

interface PlatformTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
}

type NonEnLocale = Exclude<Locale, "en">;

const platformTranslations: Record<string, Partial<Record<NonEnLocale, PlatformTranslation>>> = {
  "tiktok": {
    es: { name: "TikTok", heroHeadline: "Crea TikToks Que Llegan a la Página Para Ti", heroSubheadline: "Creación de video con IA optimizada para el algoritmo de TikTok. Convierte fotos en contenido que detiene el scroll." },
    de: { name: "TikTok", heroHeadline: "Erstelle TikToks für die For You Page", heroSubheadline: "KI-gestützte Videoerstellung optimiert für TikToks Algorithmus. Verwandle Fotos in scroll-stoppende Inhalte." },
    fr: { name: "TikTok", heroHeadline: "Créez des TikToks Pour Votre Page", heroSubheadline: "Création vidéo IA optimisée pour l'algorithme TikTok. Transformez les photos en contenu captivant." },
    pt: { name: "TikTok", heroHeadline: "Crie TikToks Para a Página Para Você", heroSubheadline: "Criação de vídeo com IA otimizada para o algoritmo do TikTok. Transforme fotos em conteúdo que para o scroll." },
    ru: { name: "TikTok", heroHeadline: "Создавайте TikTok для Страницы Рекомендаций", heroSubheadline: "Создание видео на базе ИИ, оптимизированное для алгоритма TikTok. Превращайте фото в захватывающий контент." },
    it: { name: "TikTok", heroHeadline: "Crea TikTok per la Pagina Per Te", heroSubheadline: "Creazione video IA ottimizzata per l'algoritmo TikTok. Trasforma le foto in contenuti coinvolgenti." },
    nl: { name: "TikTok", heroHeadline: "Maak TikToks voor de Voor Jou Pagina", heroSubheadline: "AI-gestuurde videocreatie geoptimaliseerd voor TikToks algoritme. Verander foto's in scroll-stoppende content." },
    pl: { name: "TikTok", heroHeadline: "Twórz TikToki na Stronę Dla Ciebie", heroSubheadline: "Tworzenie wideo AI zoptymalizowane pod algorytm TikToka. Zamieniaj zdjęcia w angażujące treści." },
    ja: { name: "TikTok", heroHeadline: "おすすめページに載るTikTokを作成", heroSubheadline: "TikTokアルゴリズムに最適化されたAI動画作成。写真をスクロールを止めるコンテンツに変換。" },
    ko: { name: "TikTok", heroHeadline: "추천 페이지에 오르는 TikTok 제작", heroSubheadline: "TikTok 알고리즘에 최적화된 AI 비디오 제작. 사진을 스크롤을 멈추는 콘텐츠로 변환." },
    zh: { name: "TikTok", heroHeadline: "创建上推荐页的TikTok", heroSubheadline: "针对TikTok算法优化的AI视频创作。将照片转换为吸引眼球的内容。" },
  },
  "instagram": {
    es: { name: "Instagram", heroHeadline: "Crea Reels de Instagram Que Obtienen Alcance", heroSubheadline: "Efectos de video IA optimizados para el algoritmo de Instagram. Convierte tu feed de fotos en contenido dinámico de Reels." },
    de: { name: "Instagram", heroHeadline: "Erstelle Instagram Reels Mit Reichweite", heroSubheadline: "KI-Videoeffekte optimiert für Instagrams Algorithmus. Verwandle deinen Foto-Feed in dynamische Reels-Inhalte." },
    fr: { name: "Instagram", heroHeadline: "Créez des Reels Instagram Avec de la Portée", heroSubheadline: "Effets vidéo IA optimisés pour l'algorithme Instagram. Transformez votre feed photo en contenu Reels dynamique." },
    pt: { name: "Instagram", heroHeadline: "Crie Reels do Instagram Com Alcance", heroSubheadline: "Efeitos de vídeo IA otimizados para o algoritmo do Instagram. Transforme seu feed de fotos em conteúdo dinâmico de Reels." },
    ru: { name: "Instagram", heroHeadline: "Создавайте Instagram Reels с Большим Охватом", heroSubheadline: "ИИ-видеоэффекты, оптимизированные для алгоритма Instagram. Превратите фото-ленту в динамичный контент Reels." },
    it: { name: "Instagram", heroHeadline: "Crea Reels Instagram Con Visibilità", heroSubheadline: "Effetti video IA ottimizzati per l'algoritmo Instagram. Trasforma il tuo feed foto in contenuti Reels dinamici." },
    nl: { name: "Instagram", heroHeadline: "Maak Instagram Reels Met Bereik", heroSubheadline: "AI-video-effecten geoptimaliseerd voor Instagrams algoritme. Verander je fotofeed in dynamische Reels content." },
    pl: { name: "Instagram", heroHeadline: "Twórz Instagram Reels z Zasięgiem", heroSubheadline: "Efekty wideo AI zoptymalizowane pod algorytm Instagrama. Zamień feed zdjęć w dynamiczne treści Reels." },
    ja: { name: "Instagram", heroHeadline: "リーチを獲得するInstagram Reelsを作成", heroSubheadline: "Instagramアルゴリズムに最適化されたAI動画エフェクト。フォトフィードをダイナミックなReelsコンテンツに変換。" },
    ko: { name: "Instagram", heroHeadline: "도달률 높은 Instagram Reels 제작", heroSubheadline: "Instagram 알고리즘에 최적화된 AI 비디오 효과. 사진 피드를 다이나믹한 Reels 콘텐츠로 변환." },
    zh: { name: "Instagram", heroHeadline: "创建获得覆盖的Instagram Reels", heroSubheadline: "针对Instagram算法优化的AI视频效果。将照片信息流转换为动态Reels内容。" },
  },
  "youtube-shorts": {
    es: { name: "YouTube Shorts", heroHeadline: "Crea YouTube Shorts Que Construyen Suscriptores", heroSubheadline: "Videos optimizados para el algoritmo de Shorts de YouTube. Convierte espectadores en suscriptores con contenido profesional." },
    de: { name: "YouTube Shorts", heroHeadline: "Erstelle YouTube Shorts Die Abonnenten Bringen", heroSubheadline: "Videos optimiert für YouTubes Shorts-Algorithmus. Verwandle Zuschauer in Abonnenten mit professionellem Content." },
    fr: { name: "YouTube Shorts", heroHeadline: "Créez des YouTube Shorts Qui Génèrent des Abonnés", heroSubheadline: "Vidéos optimisées pour l'algorithme Shorts de YouTube. Convertissez les spectateurs en abonnés avec du contenu pro." },
    pt: { name: "YouTube Shorts", heroHeadline: "Crie YouTube Shorts Que Constroem Inscritos", heroSubheadline: "Vídeos otimizados para o algoritmo de Shorts do YouTube. Converta espectadores em inscritos com conteúdo profissional." },
    ru: { name: "YouTube Shorts", heroHeadline: "Создавайте YouTube Shorts для Привлечения Подписчиков", heroSubheadline: "Видео, оптимизированные для алгоритма YouTube Shorts. Превращайте зрителей в подписчиков профессиональным контентом." },
    it: { name: "YouTube Shorts", heroHeadline: "Crea YouTube Shorts Che Aumentano gli Iscritti", heroSubheadline: "Video ottimizzati per l'algoritmo Shorts di YouTube. Converti gli spettatori in iscritti con contenuti professionali." },
    nl: { name: "YouTube Shorts", heroHeadline: "Maak YouTube Shorts Die Abonnees Opleveren", heroSubheadline: "Video's geoptimaliseerd voor YouTubes Shorts-algoritme. Zet kijkers om in abonnees met professionele content." },
    pl: { name: "YouTube Shorts", heroHeadline: "Twórz YouTube Shorts Budujące Subskrypcje", heroSubheadline: "Filmy zoptymalizowane pod algorytm YouTube Shorts. Zamieniaj widzów w subskrybentów profesjonalnymi treściami." },
    ja: { name: "YouTube Shorts", heroHeadline: "登録者を増やすYouTube Shortsを作成", heroSubheadline: "YouTube Shortsアルゴリズムに最適化された動画。プロフェッショナルなコンテンツで視聴者を登録者に変換。" },
    ko: { name: "YouTube Shorts", heroHeadline: "구독자를 늘리는 YouTube Shorts 제작", heroSubheadline: "YouTube Shorts 알고리즘에 최적화된 비디오. 전문적인 콘텐츠로 시청자를 구독자로 전환." },
    zh: { name: "YouTube Shorts", heroHeadline: "创建增加订阅者的YouTube Shorts", heroSubheadline: "针对YouTube Shorts算法优化的视频。用专业内容将观众转化为订阅者。" },
  },
  "pinterest": {
    es: { name: "Pinterest", heroHeadline: "Crea Pins de Video de Pinterest Que Generan Tráfico", heroSubheadline: "Videos optimizados para el algoritmo de Pinterest. Convierte tu contenido visual en pins de video que generan clics." },
    de: { name: "Pinterest", heroHeadline: "Erstelle Pinterest Video-Pins Die Traffic Bringen", heroSubheadline: "Videos optimiert für Pinterests Algorithmus. Verwandle visuelle Inhalte in klickgenerierende Video-Pins." },
    fr: { name: "Pinterest", heroHeadline: "Créez des Épingles Vidéo Pinterest Qui Génèrent du Trafic", heroSubheadline: "Vidéos optimisées pour l'algorithme Pinterest. Transformez votre contenu visuel en épingles vidéo qui génèrent des clics." },
    pt: { name: "Pinterest", heroHeadline: "Crie Pins de Vídeo do Pinterest Que Geram Tráfego", heroSubheadline: "Vídeos otimizados para o algoritmo do Pinterest. Transforme conteúdo visual em pins de vídeo que geram cliques." },
    ru: { name: "Pinterest", heroHeadline: "Создавайте Video Pins Pinterest, Которые Генерируют Трафик", heroSubheadline: "Видео, оптимизированные для алгоритма Pinterest. Превращайте визуальный контент в видео-пины, генерирующие клики." },
    it: { name: "Pinterest", heroHeadline: "Crea Video Pin Pinterest Che Generano Traffico", heroSubheadline: "Video ottimizzati per l'algoritmo Pinterest. Trasforma i contenuti visivi in video pin che generano click." },
    nl: { name: "Pinterest", heroHeadline: "Maak Pinterest Video Pins Die Verkeer Genereren", heroSubheadline: "Video's geoptimaliseerd voor Pinterests algoritme. Verander visuele content in klikgenererende video pins." },
    pl: { name: "Pinterest", heroHeadline: "Twórz Piny Wideo Pinterest Generujące Ruch", heroSubheadline: "Filmy zoptymalizowane pod algorytm Pinteresta. Zamieniaj treści wizualne w piny wideo generujące kliknięcia." },
    ja: { name: "Pinterest", heroHeadline: "トラフィックを生むPinterest動画ピンを作成", heroSubheadline: "Pinterestアルゴリズムに最適化された動画。ビジュアルコンテンツをクリックを生む動画ピンに変換。" },
    ko: { name: "Pinterest", heroHeadline: "트래픽을 유도하는 Pinterest 비디오 핀 제작", heroSubheadline: "Pinterest 알고리즘에 최적화된 비디오. 시각적 콘텐츠를 클릭을 유도하는 비디오 핀으로 변환." },
    zh: { name: "Pinterest", heroHeadline: "创建带来流量的Pinterest视频图钉", heroSubheadline: "针对Pinterest算法优化的视频。将视觉内容转换为产生点击的视频图钉。" },
  },
  "linkedin": {
    es: { name: "LinkedIn", heroHeadline: "Crea Videos de LinkedIn Que Construyen Autoridad", heroSubheadline: "Contenido de video profesional optimizado para la audiencia de LinkedIn. Destaca como líder de pensamiento con video de calidad." },
    de: { name: "LinkedIn", heroHeadline: "Erstelle LinkedIn Videos Die Autorität Aufbauen", heroSubheadline: "Professioneller Video-Content optimiert für LinkedIns Publikum. Positioniere dich als Thought Leader mit qualitativem Video." },
    fr: { name: "LinkedIn", heroHeadline: "Créez des Vidéos LinkedIn Qui Construisent l'Autorité", heroSubheadline: "Contenu vidéo professionnel optimisé pour l'audience LinkedIn. Démarquez-vous comme leader d'opinion avec de la vidéo de qualité." },
    pt: { name: "LinkedIn", heroHeadline: "Crie Vídeos do LinkedIn Que Constroem Autoridade", heroSubheadline: "Conteúdo de vídeo profissional otimizado para a audiência do LinkedIn. Destaque-se como líder de pensamento com vídeo de qualidade." },
    ru: { name: "LinkedIn", heroHeadline: "Создавайте Видео LinkedIn, Которые Строят Авторитет", heroSubheadline: "Профессиональный видеоконтент для аудитории LinkedIn. Выделяйтесь как эксперт с качественным видео." },
    it: { name: "LinkedIn", heroHeadline: "Crea Video LinkedIn Che Costruiscono Autorità", heroSubheadline: "Contenuti video professionali ottimizzati per il pubblico LinkedIn. Distinguiti come thought leader con video di qualità." },
    nl: { name: "LinkedIn", heroHeadline: "Maak LinkedIn Video's Die Autoriteit Opbouwen", heroSubheadline: "Professionele video content geoptimaliseerd voor LinkedIns publiek. Onderscheid je als thought leader met kwaliteitsvideo." },
    pl: { name: "LinkedIn", heroHeadline: "Twórz Filmy LinkedIn Budujące Autorytet", heroSubheadline: "Profesjonalne treści wideo zoptymalizowane dla publiczności LinkedIn. Wyróżnij się jako lider myśli jakościowym wideo." },
    ja: { name: "LinkedIn", heroHeadline: "権威を築くLinkedIn動画を作成", heroSubheadline: "LinkedInオーディエンス向けに最適化されたプロフェッショナルな動画コンテンツ。高品質な動画でソートリーダーとして際立つ。" },
    ko: { name: "LinkedIn", heroHeadline: "권위를 구축하는 LinkedIn 비디오 제작", heroSubheadline: "LinkedIn 오디언스에 최적화된 전문 비디오 콘텐츠. 고품질 비디오로 사상 리더로 돋보이세요." },
    zh: { name: "LinkedIn", heroHeadline: "创建建立权威的LinkedIn视频", heroSubheadline: "为LinkedIn受众优化的专业视频内容。用高质量视频脱颖而出成为思想领袖。" },
  },
  "facebook-reels": {
    es: { name: "Facebook Reels", heroHeadline: "Crea Facebook Reels Que Obtienen Vistas", heroSubheadline: "Videos de formato corto optimizados para el algoritmo de Reels de Facebook. Alcanza nuevas audiencias con contenido dinámico." },
    de: { name: "Facebook Reels", heroHeadline: "Erstelle Facebook Reels Die Views Bekommen", heroSubheadline: "Kurzvideos optimiert für Facebooks Reels-Algorithmus. Erreiche neue Zielgruppen mit dynamischem Content." },
    fr: { name: "Facebook Reels", heroHeadline: "Créez des Facebook Reels Qui Obtiennent des Vues", heroSubheadline: "Vidéos courtes optimisées pour l'algorithme Reels de Facebook. Atteignez de nouvelles audiences avec du contenu dynamique." },
    pt: { name: "Facebook Reels", heroHeadline: "Crie Facebook Reels Que Obtêm Visualizações", heroSubheadline: "Vídeos curtos otimizados para o algoritmo de Reels do Facebook. Alcance novas audiências com conteúdo dinâmico." },
    ru: { name: "Facebook Reels", heroHeadline: "Создавайте Facebook Reels с Большим Количеством Просмотров", heroSubheadline: "Короткие видео, оптимизированные для алгоритма Facebook Reels. Охватывайте новые аудитории динамичным контентом." },
    it: { name: "Facebook Reels", heroHeadline: "Crea Facebook Reels Che Ottengono Visualizzazioni", heroSubheadline: "Video brevi ottimizzati per l'algoritmo Reels di Facebook. Raggiungi nuovi pubblici con contenuti dinamici." },
    nl: { name: "Facebook Reels", heroHeadline: "Maak Facebook Reels Die Views Krijgen", heroSubheadline: "Korte video's geoptimaliseerd voor Facebooks Reels-algoritme. Bereik nieuwe doelgroepen met dynamische content." },
    pl: { name: "Facebook Reels", heroHeadline: "Twórz Facebook Reels Zdobywające Wyświetlenia", heroSubheadline: "Krótkie filmy zoptymalizowane pod algorytm Facebook Reels. Docieraj do nowych odbiorców dynamicznymi treściami." },
    ja: { name: "Facebook Reels", heroHeadline: "再生回数を獲得するFacebook Reelsを作成", heroSubheadline: "Facebook Reelsアルゴリズムに最適化されたショート動画。ダイナミックなコンテンツで新しいオーディエンスにリーチ。" },
    ko: { name: "Facebook Reels", heroHeadline: "조회수를 얻는 Facebook Reels 제작", heroSubheadline: "Facebook Reels 알고리즘에 최적화된 숏폼 비디오. 다이나믹한 콘텐츠로 새로운 오디언스에 도달." },
    zh: { name: "Facebook Reels", heroHeadline: "创建获得观看的Facebook Reels", heroSubheadline: "针对Facebook Reels算法优化的短视频。用动态内容触达新受众。" },
  },
};

export function getLocalizedPlatformContent(
  slug: string,
  locale: Locale
): PlatformTranslation | null {
  if (locale === "en") return null;
  const translations = platformTranslations[slug];
  if (!translations) return null;
  return translations[locale as NonEnLocale] || null;
}
