import { type Locale } from "@/lib/i18n/config";

interface Feature {
  title: string;
  description: string;
}

interface TemplateTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
  features?: Feature[];
}

type NonEnLocale = Exclude<Locale, "en">;

const templateTranslations: Record<
  string,
  Partial<Record<NonEnLocale, TemplateTranslation>>
> = {
  "tiktok-video-templates": {
    es: {
      name: "Plantillas de Video TikTok",
      heroHeadline: "Plantillas TikTok Que Se Vuelven Virales",
      heroSubheadline:
        "Plantillas de video con IA optimizadas para el algoritmo de TikTok. Crea contenido que detiene el scroll en segundos.",
    },
    de: {
      name: "TikTok Video-Vorlagen",
      heroHeadline: "TikTok-Vorlagen Die Viral Gehen",
      heroSubheadline:
        "KI-gestützte Video-Vorlagen für TikToks Algorithmus. Erstelle scroll-stoppende Inhalte in Sekunden.",
    },
    fr: {
      name: "Modèles Vidéo TikTok",
      heroHeadline: "Modèles TikTok Qui Deviennent Viraux",
      heroSubheadline:
        "Modèles vidéo IA optimisés pour l'algorithme TikTok. Créez du contenu captivant en secondes.",
    },
    pt: {
      name: "Modelos de Vídeo TikTok",
      heroHeadline: "Modelos TikTok Que Viralizam",
      heroSubheadline:
        "Modelos de vídeo com IA otimizados para o algoritmo do TikTok. Crie conteúdo que para o scroll em segundos.",
    },
    ru: {
      name: "Шаблоны Видео TikTok",
      heroHeadline: "Шаблоны TikTok, Которые Становятся Вирусными",
      heroSubheadline:
        "Видеошаблоны на базе ИИ, оптимизированные для алгоритма TikTok. Создавайте захватывающий контент за секунды.",
    },
    it: {
      name: "Modelli Video TikTok",
      heroHeadline: "Modelli TikTok Che Diventano Virali",
      heroSubheadline:
        "Modelli video AI ottimizzati per l'algoritmo TikTok. Crea contenuti coinvolgenti in pochi secondi.",
    },
    nl: {
      name: "TikTok Video Sjablonen",
      heroHeadline: "TikTok Sjablonen Die Viraal Gaan",
      heroSubheadline:
        "AI-gestuurde video sjablonen geoptimaliseerd voor TikToks algoritme. Maak scroll-stoppende content in seconden.",
    },
    pl: {
      name: "Szablony Wideo TikTok",
      heroHeadline: "Szablony TikTok, Które Stają Się Wirusowe",
      heroSubheadline:
        "Szablony wideo AI zoptymalizowane pod algorytm TikToka. Twórz angażujące treści w sekundy.",
    },
    ja: {
      name: "TikTok動画テンプレート",
      heroHeadline: "バイラルになるTikTokテンプレート",
      heroSubheadline:
        "TikTokアルゴリズムに最適化されたAI動画テンプレート。数秒でスクロールを止めるコンテンツを作成。",
    },
    ko: {
      name: "TikTok 비디오 템플릿",
      heroHeadline: "바이럴되는 TikTok 템플릿",
      heroSubheadline:
        "TikTok 알고리즘에 최적화된 AI 비디오 템플릿. 몇 초 만에 스크롤을 멈추는 콘텐츠 제작.",
    },
    zh: {
      name: "TikTok视频模板",
      heroHeadline: "爆款TikTok模板",
      heroSubheadline:
        "针对TikTok算法优化的AI视频模板。几秒钟内创建引人注目的内容。",
    },
  },
  "instagram-reels-templates": {
    es: {
      name: "Plantillas Instagram Reels",
      heroHeadline: "Plantillas de Reels Que Obtienen Alcance",
      heroSubheadline:
        "Crea Reels de Instagram profesionales desde fotos. Efectos de movimiento IA optimizados para máximo engagement.",
    },
    de: {
      name: "Instagram Reels Vorlagen",
      heroHeadline: "Reels-Vorlagen Die Reichweite Bekommen",
      heroSubheadline:
        "Erstelle professionelle Instagram Reels aus Fotos. KI-Bewegungseffekte für maximales Engagement.",
    },
    fr: {
      name: "Modèles Instagram Reels",
      heroHeadline: "Modèles Reels Qui Obtiennent de la Portée",
      heroSubheadline:
        "Créez des Reels Instagram professionnels à partir de photos. Effets de mouvement IA pour un engagement maximal.",
    },
    pt: {
      name: "Modelos Instagram Reels",
      heroHeadline: "Modelos de Reels Que Alcançam Milhões",
      heroSubheadline:
        "Crie Reels profissionais do Instagram a partir de fotos. Efeitos de movimento IA para máximo engajamento.",
    },
    ru: {
      name: "Шаблоны Instagram Reels",
      heroHeadline: "Шаблоны Reels с Большим Охватом",
      heroSubheadline:
        "Создавайте профессиональные Instagram Reels из фотографий. ИИ-эффекты движения для максимальной вовлечённости.",
    },
    it: {
      name: "Modelli Instagram Reels",
      heroHeadline: "Modelli Reels Che Ottengono Visibilità",
      heroSubheadline:
        "Crea Reels Instagram professionali dalle foto. Effetti di movimento AI per massimo engagement.",
    },
    nl: {
      name: "Instagram Reels Sjablonen",
      heroHeadline: "Reels Sjablonen Die Bereik Krijgen",
      heroSubheadline:
        "Maak professionele Instagram Reels van foto's. AI-bewegingseffecten voor maximale betrokkenheid.",
    },
    pl: {
      name: "Szablony Instagram Reels",
      heroHeadline: "Szablony Reels z Dużym Zasięgiem",
      heroSubheadline:
        "Twórz profesjonalne Instagram Reels ze zdjęć. Efekty ruchu AI dla maksymalnego zaangażowania.",
    },
    ja: {
      name: "Instagram Reelsテンプレート",
      heroHeadline: "リーチを獲得するReelsテンプレート",
      heroSubheadline:
        "写真からプロフェッショナルなInstagram Reelsを作成。最大エンゲージメントのためのAIモーションエフェクト。",
    },
    ko: {
      name: "Instagram Reels 템플릿",
      heroHeadline: "도달률을 높이는 Reels 템플릿",
      heroSubheadline:
        "사진으로 프로페셔널한 Instagram Reels 제작. 최대 참여를 위한 AI 모션 효과.",
    },
    zh: {
      name: "Instagram Reels模板",
      heroHeadline: "获得覆盖的Reels模板",
      heroSubheadline:
        "用照片创建专业的Instagram Reels。AI动态效果带来最大参与度。",
    },
  },
  "youtube-shorts-templates": {
    es: {
      name: "Plantillas YouTube Shorts",
      heroHeadline: "Plantillas Shorts Optimizadas para Suscriptores",
      heroSubheadline:
        "Crea YouTube Shorts que convierten espectadores en suscriptores. Efectos de video IA para el formato vertical de YouTube.",
    },
    de: {
      name: "YouTube Shorts Vorlagen",
      heroHeadline: "Shorts-Vorlagen für Mehr Abonnenten",
      heroSubheadline:
        "Erstelle YouTube Shorts die Zuschauer zu Abonnenten machen. KI-Videoeffekte für YouTubes Hochformat.",
    },
    fr: {
      name: "Modèles YouTube Shorts",
      heroHeadline: "Modèles Shorts Optimisés pour les Abonnés",
      heroSubheadline:
        "Créez des YouTube Shorts qui convertissent les spectateurs en abonnés. Effets vidéo IA pour le format vertical.",
    },
    pt: {
      name: "Modelos YouTube Shorts",
      heroHeadline: "Modelos Shorts Otimizados para Inscritos",
      heroSubheadline:
        "Crie YouTube Shorts que convertem espectadores em inscritos. Efeitos de vídeo IA para o formato vertical.",
    },
    ru: {
      name: "Шаблоны YouTube Shorts",
      heroHeadline: "Шаблоны Shorts для Привлечения Подписчиков",
      heroSubheadline:
        "Создавайте YouTube Shorts, превращающие зрителей в подписчиков. ИИ-видеоэффекты для вертикального формата.",
    },
    it: {
      name: "Modelli YouTube Shorts",
      heroHeadline: "Modelli Shorts Ottimizzati per Iscritti",
      heroSubheadline:
        "Crea YouTube Shorts che convertono spettatori in iscritti. Effetti video AI per il formato verticale.",
    },
    nl: {
      name: "YouTube Shorts Sjablonen",
      heroHeadline: "Shorts Sjablonen voor Meer Abonnees",
      heroSubheadline:
        "Maak YouTube Shorts die kijkers omzetten in abonnees. AI-video-effecten voor verticaal formaat.",
    },
    pl: {
      name: "Szablony YouTube Shorts",
      heroHeadline: "Szablony Shorts na Więcej Subskrybentów",
      heroSubheadline:
        "Twórz YouTube Shorts zamieniające widzów w subskrybentów. Efekty wideo AI dla formatu pionowego.",
    },
    ja: {
      name: "YouTube Shortsテンプレート",
      heroHeadline: "登録者を増やすShortsテンプレート",
      heroSubheadline:
        "視聴者を登録者に変えるYouTube Shortsを作成。縦型フォーマット用AIビデオエフェクト。",
    },
    ko: {
      name: "YouTube Shorts 템플릿",
      heroHeadline: "구독자를 늘리는 Shorts 템플릿",
      heroSubheadline:
        "시청자를 구독자로 전환하는 YouTube Shorts 제작. 세로 형식을 위한 AI 비디오 효과.",
    },
    zh: {
      name: "YouTube Shorts模板",
      heroHeadline: "获取订阅者的Shorts模板",
      heroSubheadline:
        "创建将观众转化为订阅者的YouTube Shorts。针对竖屏格式的AI视频效果。",
    },
  },
  "product-video-templates": {
    es: {
      name: "Plantillas de Video de Producto",
      heroHeadline: "Videos de Producto Que Venden",
      heroSubheadline:
        "Convierte fotos de productos en videos de ventas profesionales. Efectos de zoom, órbita y parallax para exhibiciones impresionantes.",
    },
    de: {
      name: "Produkt-Video-Vorlagen",
      heroHeadline: "Produktvideos Die Verkaufen",
      heroSubheadline:
        "Verwandle Produktfotos in professionelle Verkaufsvideos. Zoom-, Orbit- und Parallax-Effekte für beeindruckende Präsentationen.",
    },
    fr: {
      name: "Modèles Vidéo Produit",
      heroHeadline: "Vidéos Produit Qui Vendent",
      heroSubheadline:
        "Transformez les photos de produits en vidéos de vente professionnelles. Effets zoom, orbite et parallaxe.",
    },
    pt: {
      name: "Modelos de Vídeo de Produto",
      heroHeadline: "Vídeos de Produto Que Vendem",
      heroSubheadline:
        "Transforme fotos de produtos em vídeos de vendas profissionais. Efeitos de zoom, órbita e parallax.",
    },
    ru: {
      name: "Шаблоны Видео Продукта",
      heroHeadline: "Видео Продуктов, Которые Продают",
      heroSubheadline:
        "Превращайте фото продуктов в профессиональные продающие видео. Эффекты зума, орбиты и параллакса.",
    },
    it: {
      name: "Modelli Video Prodotto",
      heroHeadline: "Video Prodotto Che Vendono",
      heroSubheadline:
        "Trasforma le foto dei prodotti in video di vendita professionali. Effetti zoom, orbita e parallasse.",
    },
    nl: {
      name: "Product Video Sjablonen",
      heroHeadline: "Productvideo's Die Verkopen",
      heroSubheadline:
        "Verander productfoto's in professionele verkoopvideo's. Zoom-, orbit- en parallax-effecten.",
    },
    pl: {
      name: "Szablony Wideo Produktów",
      heroHeadline: "Wideo Produktów, Które Sprzedają",
      heroSubheadline:
        "Zamień zdjęcia produktów w profesjonalne filmy sprzedażowe. Efekty zoom, orbity i paralaksy.",
    },
    ja: {
      name: "商品動画テンプレート",
      heroHeadline: "売れる商品動画",
      heroSubheadline:
        "商品写真をプロフェッショナルなセールス動画に変換。ズーム、オービット、パララックスエフェクト。",
    },
    ko: {
      name: "제품 비디오 템플릿",
      heroHeadline: "판매하는 제품 비디오",
      heroSubheadline:
        "제품 사진을 전문적인 판매 비디오로 변환. 줌, 오빗, 패럴랙스 효과.",
    },
    zh: {
      name: "产品视频模板",
      heroHeadline: "能卖货的产品视频",
      heroSubheadline:
        "将产品照片转换为专业销售视频。缩放、环绕和视差效果。",
    },
  },
  "real-estate-video-templates": {
    es: {
      name: "Plantillas Video Inmobiliario",
      heroHeadline: "Videos Inmobiliarios Que Venden Propiedades",
      heroSubheadline:
        "Transforma fotos de propiedades en recorridos virtuales cinematográficos. Efectos profesionales para agentes inmobiliarios.",
    },
    de: {
      name: "Immobilien-Video-Vorlagen",
      heroHeadline: "Immobilienvideos Die Verkaufen",
      heroSubheadline:
        "Verwandle Immobilienfotos in filmreife virtuelle Rundgänge. Professionelle Effekte für Makler.",
    },
    fr: {
      name: "Modèles Vidéo Immobilier",
      heroHeadline: "Vidéos Immobilières Qui Vendent",
      heroSubheadline:
        "Transformez les photos de propriétés en visites virtuelles cinématographiques. Effets professionnels pour agents.",
    },
    pt: {
      name: "Modelos Vídeo Imobiliário",
      heroHeadline: "Vídeos Imobiliários Que Vendem",
      heroSubheadline:
        "Transforme fotos de imóveis em tours virtuais cinematográficos. Efeitos profissionais para corretores.",
    },
    ru: {
      name: "Шаблоны Видео Недвижимости",
      heroHeadline: "Видео Недвижимости, Которые Продают",
      heroSubheadline:
        "Превращайте фото недвижимости в кинематографические виртуальные туры. Профессиональные эффекты для риелторов.",
    },
    it: {
      name: "Modelli Video Immobiliare",
      heroHeadline: "Video Immobiliari Che Vendono",
      heroSubheadline:
        "Trasforma le foto degli immobili in tour virtuali cinematografici. Effetti professionali per agenti.",
    },
    nl: {
      name: "Vastgoed Video Sjablonen",
      heroHeadline: "Vastgoedvideo's Die Verkopen",
      heroSubheadline:
        "Verander vastgoedfoto's in cinematografische virtuele tours. Professionele effecten voor makelaars.",
    },
    pl: {
      name: "Szablony Wideo Nieruchomości",
      heroHeadline: "Wideo Nieruchomości, Które Sprzedają",
      heroSubheadline:
        "Zamień zdjęcia nieruchomości w kinowe wirtualne spacery. Profesjonalne efekty dla agentów.",
    },
    ja: {
      name: "不動産動画テンプレート",
      heroHeadline: "売れる不動産動画",
      heroSubheadline:
        "物件写真を映画のようなバーチャルツアーに変換。不動産エージェント向けプロフェッショナルエフェクト。",
    },
    ko: {
      name: "부동산 비디오 템플릿",
      heroHeadline: "판매하는 부동산 비디오",
      heroSubheadline:
        "부동산 사진을 시네마틱 가상 투어로 변환. 부동산 에이전트를 위한 전문 효과.",
    },
    zh: {
      name: "房地产视频模板",
      heroHeadline: "促进销售的房地产视频",
      heroSubheadline:
        "将房产照片转换为电影级虚拟导览。为房产经纪人打造的专业效果。",
    },
  },
  "fashion-video-templates": {
    es: {
      name: "Plantillas Video de Moda",
      heroHeadline: "Videos de Moda con Estilo Editorial",
      heroSubheadline:
        "Crea lookbooks de moda dinámicos desde fotos. Efectos profesionales de pasarela y editorial para marcas.",
    },
    de: {
      name: "Mode-Video-Vorlagen",
      heroHeadline: "Modevideos im Editorial-Stil",
      heroSubheadline:
        "Erstelle dynamische Mode-Lookbooks aus Fotos. Professionelle Laufsteg- und Editorial-Effekte für Marken.",
    },
    fr: {
      name: "Modèles Vidéo Mode",
      heroHeadline: "Vidéos Mode Style Éditorial",
      heroSubheadline:
        "Créez des lookbooks mode dynamiques à partir de photos. Effets défilé et éditorial professionnels.",
    },
    pt: {
      name: "Modelos Vídeo Moda",
      heroHeadline: "Vídeos de Moda Estilo Editorial",
      heroSubheadline:
        "Crie lookbooks de moda dinâmicos a partir de fotos. Efeitos profissionais de passarela e editorial.",
    },
    ru: {
      name: "Шаблоны Видео Моды",
      heroHeadline: "Модные Видео в Редакционном Стиле",
      heroSubheadline:
        "Создавайте динамичные модные лукбуки из фотографий. Профессиональные эффекты подиума и редакционные.",
    },
    it: {
      name: "Modelli Video Moda",
      heroHeadline: "Video Moda Stile Editoriale",
      heroSubheadline:
        "Crea lookbook di moda dinamici dalle foto. Effetti passerella ed editoriali professionali.",
    },
    nl: {
      name: "Mode Video Sjablonen",
      heroHeadline: "Modevideo's in Editorial Stijl",
      heroSubheadline:
        "Maak dynamische mode-lookbooks van foto's. Professionele catwalk- en editorial-effecten.",
    },
    pl: {
      name: "Szablony Wideo Mody",
      heroHeadline: "Wideo Mody w Stylu Edytorskim",
      heroSubheadline:
        "Twórz dynamiczne lookbooki modowe ze zdjęć. Profesjonalne efekty wybiegu i edytorskie.",
    },
    ja: {
      name: "ファッション動画テンプレート",
      heroHeadline: "エディトリアルスタイルのファッション動画",
      heroSubheadline:
        "写真からダイナミックなファッションルックブックを作成。プロフェッショナルなランウェイとエディトリアルエフェクト。",
    },
    ko: {
      name: "패션 비디오 템플릿",
      heroHeadline: "에디토리얼 스타일의 패션 비디오",
      heroSubheadline:
        "사진으로 다이나믹한 패션 룩북 제작. 전문적인 런웨이 및 에디토리얼 효과.",
    },
    zh: {
      name: "时尚视频模板",
      heroHeadline: "编辑风格的时尚视频",
      heroSubheadline:
        "用照片创建动态时尚造型集。专业的T台和编辑效果。",
    },
  },
  "food-video-templates": {
    es: {
      name: "Plantillas Video de Comida",
      heroHeadline: "Videos de Comida Que Dan Hambre",
      heroSubheadline:
        "Haz que tus fotos de comida cobren vida con efectos cinematográficos. Perfecto para restaurantes y food bloggers.",
      features: [
        {
          title: "Atractivo Apetitoso",
          description:
            "Efectos de movimiento diseñados para que la comida se vea irresistible y apetecible.",
        },
        {
          title: "Muestra de Texturas",
          description:
            "Efectos de zoom que destacan las texturas, toppings y detalles que hacen especiales a los platos.",
        },
        {
          title: "Listo para Delivery",
          description:
            "Formatos de exportación optimizados para DoorDash, Uber Eats y otras plataformas de delivery.",
        },
        {
          title: "Especiales del Día",
          description:
            "Crea videos para cambios de menú y especiales al instante — toma una foto, obtén un video.",
        },
      ],
    },
    de: {
      name: "Food-Video-Vorlagen",
      heroHeadline: "Food-Videos Die Hungrig Machen",
      heroSubheadline:
        "Erwecke deine Food-Fotos mit filmischen Effekten zum Leben. Perfekt für Restaurants und Food-Blogger.",
      features: [
        {
          title: "Appetitanregend",
          description:
            "Bewegungseffekte, die Speisen unwiderstehlich und verführerisch aussehen lassen.",
        },
        {
          title: "Textur-Präsentation",
          description:
            "Zoom-Effekte, die Texturen, Toppings und Details hervorheben, die Gerichte besonders machen.",
        },
        {
          title: "Lieferdienst-Optimiert",
          description:
            "Exportformate optimiert für DoorDash, Uber Eats und andere Lieferplattformen.",
        },
        {
          title: "Tagesangebote Sofort",
          description:
            "Erstelle Videos für Menüänderungen und Specials sofort — Foto machen, Video erhalten.",
        },
      ],
    },
    fr: {
      name: "Modèles Vidéo Food",
      heroHeadline: "Vidéos Food Qui Donnent Faim",
      heroSubheadline:
        "Donnez vie à vos photos culinaires avec des effets cinématographiques. Parfait pour restaurants et blogueurs.",
      features: [
        {
          title: "Appétit Visuel",
          description:
            "Effets de mouvement conçus pour rendre la nourriture irrésistible et appétissante.",
        },
        {
          title: "Mise en Valeur des Textures",
          description:
            "Effets de zoom qui mettent en valeur les textures, garnitures et détails qui rendent les plats spéciaux.",
        },
        {
          title: "Prêt pour la Livraison",
          description:
            "Formats d'export optimisés pour DoorDash, Uber Eats et autres plateformes de livraison.",
        },
        {
          title: "Plats du Jour Instantanés",
          description:
            "Créez des vidéos pour les changements de menu instantanément — prenez une photo, obtenez une vidéo.",
        },
      ],
    },
    pt: {
      name: "Modelos Vídeo de Comida",
      heroHeadline: "Vídeos de Comida Que Dão Fome",
      heroSubheadline:
        "Dê vida às suas fotos de comida com efeitos cinematográficos. Perfeito para restaurantes e food bloggers.",
      features: [
        {
          title: "Apelo Apetitoso",
          description:
            "Efeitos de movimento projetados para fazer a comida parecer irresistível e de dar água na boca.",
        },
        {
          title: "Destaque de Texturas",
          description:
            "Efeitos de zoom que destacam as texturas, coberturas e detalhes que tornam os pratos especiais.",
        },
        {
          title: "Pronto para Delivery",
          description:
            "Formatos de exportação otimizados para iFood, Uber Eats e outras plataformas de entrega.",
        },
        {
          title: "Especiais do Dia",
          description:
            "Crie vídeos para mudanças no cardápio instantaneamente — tire uma foto, obtenha um vídeo.",
        },
      ],
    },
    ru: {
      name: "Шаблоны Видео Еды",
      heroHeadline: "Видео Еды, от Которых Хочется Есть",
      heroSubheadline:
        "Оживите фото еды кинематографическими эффектами. Идеально для ресторанов и фуд-блогеров.",
      features: [
        {
          title: "Аппетитная Привлекательность",
          description:
            "Эффекты движения, созданные чтобы еда выглядела неотразимо и вызывала аппетит.",
        },
        {
          title: "Демонстрация Текстур",
          description:
            "Эффекты зума, подчёркивающие текстуры, топпинги и детали, которые делают блюда особенными.",
        },
        {
          title: "Готово для Доставки",
          description:
            "Форматы экспорта, оптимизированные для Яндекс Еды, Delivery Club и других платформ доставки.",
        },
        {
          title: "Блюдо Дня Мгновенно",
          description:
            "Создавайте видео для изменений меню мгновенно — сделайте фото, получите видео.",
        },
      ],
    },
    it: {
      name: "Modelli Video Food",
      heroHeadline: "Video Food Che Fanno Venire Fame",
      heroSubheadline:
        "Dai vita alle tue foto di cibo con effetti cinematografici. Perfetto per ristoranti e food blogger.",
      features: [
        {
          title: "Appeal Appetitoso",
          description:
            "Effetti di movimento progettati per far sembrare il cibo irresistibile e invitante.",
        },
        {
          title: "Vetrina delle Texture",
          description:
            "Effetti zoom che evidenziano texture, topping e dettagli che rendono i piatti speciali.",
        },
        {
          title: "Pronto per il Delivery",
          description:
            "Formati di esportazione ottimizzati per Deliveroo, Uber Eats e altre piattaforme di consegna.",
        },
        {
          title: "Speciali del Giorno",
          description:
            "Crea video per modifiche al menu istantaneamente — scatta una foto, ottieni un video.",
        },
      ],
    },
    nl: {
      name: "Food Video Sjablonen",
      heroHeadline: "Food Video's Die Hongerig Maken",
      heroSubheadline:
        "Breng je food foto's tot leven met cinematografische effecten. Perfect voor restaurants en food bloggers.",
      features: [
        {
          title: "Eetlust Opwekken",
          description:
            "Bewegingseffecten ontworpen om eten onweerstaanbaar en verleidelijk te laten lijken.",
        },
        {
          title: "Textuur Showcase",
          description:
            "Zoom-effecten die texturen, toppings en details benadrukken die gerechten bijzonder maken.",
        },
        {
          title: "Bezorg-App Klaar",
          description:
            "Exportformaten geoptimaliseerd voor Thuisbezorgd, Uber Eats en andere bezorgplatforms.",
        },
        {
          title: "Dagschotels Direct",
          description:
            "Maak video's voor menuwijzigingen direct — neem een foto, krijg een video.",
        },
      ],
    },
    pl: {
      name: "Szablony Wideo Jedzenia",
      heroHeadline: "Wideo Jedzenia, Które Wzmaga Apetyt",
      heroSubheadline:
        "Ożyw zdjęcia jedzenia efektami kinowymi. Idealne dla restauracji i food bloggerów.",
      features: [
        {
          title: "Apetyczna Atrakcyjność",
          description:
            "Efekty ruchu zaprojektowane, aby jedzenie wyglądało nieodparcie i kusząco.",
        },
        {
          title: "Prezentacja Tekstur",
          description:
            "Efekty zoom podkreślające tekstury, dodatki i detale, które czynią dania wyjątkowymi.",
        },
        {
          title: "Gotowe dla Delivery",
          description:
            "Formaty eksportu zoptymalizowane dla Pyszne.pl, Uber Eats i innych platform dostaw.",
        },
        {
          title: "Danie Dnia Natychmiast",
          description:
            "Twórz wideo dla zmian w menu natychmiast — zrób zdjęcie, otrzymaj wideo.",
        },
      ],
    },
    ja: {
      name: "フード動画テンプレート",
      heroHeadline: "食欲をそそるフード動画",
      heroSubheadline:
        "シネマティックエフェクトでフード写真に命を吹き込む。レストランやフードブロガーに最適。",
      features: [
        {
          title: "食欲をそそる演出",
          description:
            "料理を魅力的で食欲をそそるように見せるモーションエフェクト。",
        },
        {
          title: "テクスチャーの魅力",
          description:
            "料理を特別にするテクスチャー、トッピング、ディテールを引き立てるズームエフェクト。",
        },
        {
          title: "デリバリーアプリ対応",
          description:
            "Uber Eats、出前館などのデリバリープラットフォームに最適化されたエクスポート形式。",
        },
        {
          title: "日替わりメニュー対応",
          description:
            "メニュー変更や特別料理の動画を瞬時に作成 — 写真を撮って、動画を取得。",
        },
      ],
    },
    ko: {
      name: "푸드 비디오 템플릿",
      heroHeadline: "배고프게 만드는 푸드 비디오",
      heroSubheadline:
        "시네마틱 효과로 음식 사진에 생명을 불어넣으세요. 레스토랑과 푸드 블로거에 완벽.",
      features: [
        {
          title: "식욕을 돋우는 매력",
          description:
            "음식을 거부할 수 없고 먹음직스럽게 보이게 하는 모션 효과.",
        },
        {
          title: "텍스처 쇼케이스",
          description:
            "요리를 특별하게 만드는 질감, 토핑, 디테일을 강조하는 줌 효과.",
        },
        {
          title: "배달 앱 최적화",
          description:
            "배달의민족, 쿠팡이츠 등 배달 플랫폼에 최적화된 내보내기 형식.",
        },
        {
          title: "오늘의 메뉴 즉시 제작",
          description:
            "메뉴 변경과 스페셜 메뉴 영상을 즉시 제작 — 사진을 찍고 비디오를 얻으세요.",
        },
      ],
    },
    zh: {
      name: "美食视频模板",
      heroHeadline: "让人垂涎的美食视频",
      heroSubheadline:
        "用电影效果让美食照片活起来。非常适合餐厅和美食博主。",
      features: [
        {
          title: "食欲诱人",
          description:
            "专为让食物看起来无法抗拒、令人垂涎而设计的动态效果。",
        },
        {
          title: "质感展示",
          description:
            "突出质地、配料和细节的缩放效果，展现菜品的独特之处。",
        },
        {
          title: "外卖平台就绪",
          description: "针对美团、饿了么等外卖平台优化的导出格式。",
        },
        {
          title: "每日特色即时制作",
          description: "即时为菜单更新和特色菜创建视频 — 拍照即得视频。",
        },
      ],
    },
  },
  "travel-video-templates": {
    es: {
      name: "Plantillas Video de Viajes",
      heroHeadline: "Videos de Viaje Que Inspiran Aventura",
      heroSubheadline:
        "Transforma fotos de viaje en videos cinematográficos épicos. Efectos profesionales para creadores de contenido de viajes.",
      features: [
        {
          title: "Estética Cinematográfica",
          description:
            "Efectos de movimiento épicos que capturan la grandeza y belleza de los destinos.",
        },
        {
          title: "De Foto a Vlog",
          description:
            "Transforma fotos de viaje estáticas en contenido de video dinámico para vlogs de viaje.",
        },
        {
          title: "Muestra de Destinos",
          description:
            "Efectos optimizados para paisajes, arquitectura y vistas panorámicas.",
        },
        {
          title: "Estética Soñadora",
          description:
            "Estilos de movimiento que evocan el sentimiento de aventura que el contenido de viajes necesita.",
        },
      ],
    },
    de: {
      name: "Reise-Video-Vorlagen",
      heroHeadline: "Reisevideos Die Fernweh Wecken",
      heroSubheadline:
        "Verwandle Reisefotos in epische filmische Videos. Professionelle Effekte für Travel Creator.",
      features: [
        {
          title: "Filmisches Gefühl",
          description:
            "Epische Bewegungseffekte, die die Größe und Schönheit von Reisezielen einfangen.",
        },
        {
          title: "Foto-zu-Vlog",
          description:
            "Verwandle statische Reisefotos in dynamische Videoinhalte für Reise-Vlogs.",
        },
        {
          title: "Reiseziel-Präsentation",
          description:
            "Effekte optimiert für Landschaften, Architektur und malerische Aussichten.",
        },
        {
          title: "Verträumte Ästhetik",
          description:
            "Bewegungsstile, die das Fernweh-Gefühl erzeugen, das Reisecontent braucht.",
        },
      ],
    },
    fr: {
      name: "Modèles Vidéo Voyage",
      heroHeadline: "Vidéos Voyage Qui Inspirent l'Aventure",
      heroSubheadline:
        "Transformez vos photos de voyage en vidéos cinématographiques épiques. Effets professionnels pour créateurs voyage.",
      features: [
        {
          title: "Rendu Cinématographique",
          description:
            "Effets de mouvement épiques qui capturent la grandeur et la beauté des destinations.",
        },
        {
          title: "Photo vers Vlog",
          description:
            "Transformez les photos de voyage statiques en contenu vidéo dynamique pour les vlogs de voyage.",
        },
        {
          title: "Vitrine de Destinations",
          description:
            "Effets optimisés pour les paysages, l'architecture et les vues panoramiques.",
        },
        {
          title: "Esthétique Rêveuse",
          description:
            "Styles de mouvement qui évoquent le sentiment d'évasion dont le contenu voyage a besoin.",
        },
      ],
    },
    pt: {
      name: "Modelos Vídeo de Viagem",
      heroHeadline: "Vídeos de Viagem Que Inspiram Aventura",
      heroSubheadline:
        "Transforme fotos de viagem em vídeos cinematográficos épicos. Efeitos profissionais para criadores de viagem.",
      features: [
        {
          title: "Visual Cinematográfico",
          description:
            "Efeitos de movimento épicos que capturam a grandeza e beleza dos destinos.",
        },
        {
          title: "Foto para Vlog",
          description:
            "Transforme fotos de viagem estáticas em conteúdo de vídeo dinâmico para vlogs de viagem.",
        },
        {
          title: "Vitrine de Destinos",
          description:
            "Efeitos otimizados para paisagens, arquitetura e vistas panorâmicas.",
        },
        {
          title: "Estética de Sonho",
          description:
            "Estilos de movimento que evocam o sentimento de aventura que o conteúdo de viagem precisa.",
        },
      ],
    },
    ru: {
      name: "Шаблоны Видео Путешествий",
      heroHeadline: "Видео Путешествий, Вдохновляющие на Приключения",
      heroSubheadline:
        "Превращайте фото из путешествий в эпические кинематографичные видео. Профессиональные эффекты для тревел-блогеров.",
      features: [
        {
          title: "Кинематографичность",
          description:
            "Эпические эффекты движения, передающие величие и красоту направлений.",
        },
        {
          title: "От Фото к Влогу",
          description:
            "Превращайте статичные фото путешествий в динамичный видеоконтент для тревел-влогов.",
        },
        {
          title: "Витрина Направлений",
          description:
            "Эффекты, оптимизированные для пейзажей, архитектуры и живописных видов.",
        },
        {
          title: "Мечтательная Эстетика",
          description:
            "Стили движения, создающие атмосферу странствий, необходимую для тревел-контента.",
        },
      ],
    },
    it: {
      name: "Modelli Video Viaggio",
      heroHeadline: "Video Viaggio Che Ispirano Avventura",
      heroSubheadline:
        "Trasforma le foto di viaggio in video cinematografici epici. Effetti professionali per travel creator.",
      features: [
        {
          title: "Atmosfera Cinematografica",
          description:
            "Effetti di movimento epici che catturano la grandezza e la bellezza delle destinazioni.",
        },
        {
          title: "Da Foto a Vlog",
          description:
            "Trasforma le foto di viaggio statiche in contenuti video dinamici per vlog di viaggio.",
        },
        {
          title: "Vetrina Destinazioni",
          description:
            "Effetti ottimizzati per paesaggi, architettura e viste panoramiche.",
        },
        {
          title: "Estetica da Sogno",
          description:
            "Stili di movimento che evocano il sentimento di wanderlust di cui i contenuti di viaggio hanno bisogno.",
        },
      ],
    },
    nl: {
      name: "Reis Video Sjablonen",
      heroHeadline: "Reisvideo's Die Inspireren",
      heroSubheadline:
        "Verander reisfoto's in epische cinematografische video's. Professionele effecten voor travel creators.",
      features: [
        {
          title: "Cinematografisch Gevoel",
          description:
            "Epische bewegingseffecten die de grandeur en schoonheid van bestemmingen vastleggen.",
        },
        {
          title: "Foto-naar-Vlog",
          description:
            "Verander statische reisfoto's in dynamische videocontent voor reisvlogs.",
        },
        {
          title: "Bestemming Showcase",
          description:
            "Effecten geoptimaliseerd voor landschappen, architectuur en schilderachtige uitzichten.",
        },
        {
          title: "Dromerige Esthetiek",
          description:
            "Bewegingsstijlen die het reislustige gevoel oproepen dat reiscontent nodig heeft.",
        },
      ],
    },
    pl: {
      name: "Szablony Wideo Podróżnicze",
      heroHeadline: "Wideo Podróżnicze, Które Inspirują",
      heroSubheadline:
        "Zamień zdjęcia z podróży w epickie filmy kinowe. Profesjonalne efekty dla travel twórców.",
      features: [
        {
          title: "Kinowa Atmosfera",
          description:
            "Epickie efekty ruchu, które oddają majestat i piękno miejsc docelowych.",
        },
        {
          title: "Ze Zdjęcia do Vloga",
          description:
            "Przekształć statyczne zdjęcia podróżnicze w dynamiczną treść wideo dla vlogów podróżniczych.",
        },
        {
          title: "Prezentacja Miejsc",
          description:
            "Efekty zoptymalizowane dla krajobrazów, architektury i malowniczych widoków.",
        },
        {
          title: "Marzycielska Estetyka",
          description:
            "Style ruchu wywołujące uczucie wędrówki, którego potrzebuje treść podróżnicza.",
        },
      ],
    },
    ja: {
      name: "旅行動画テンプレート",
      heroHeadline: "冒険を刺激する旅行動画",
      heroSubheadline:
        "旅行写真を壮大なシネマティック動画に変換。トラベルクリエイター向けプロフェッショナルエフェクト。",
      features: [
        {
          title: "シネマティックな雰囲気",
          description:
            "目的地の壮大さと美しさを捉える壮大なモーションエフェクト。",
        },
        {
          title: "写真からVlogへ",
          description:
            "静止した旅行写真を旅行Vlog向けのダイナミックな動画コンテンツに変換。",
        },
        {
          title: "目的地のショーケース",
          description: "風景、建築、絶景に最適化されたエフェクト。",
        },
        {
          title: "夢のようなエステティック",
          description:
            "旅行コンテンツに必要な冒険心を呼び起こすモーションスタイル。",
        },
      ],
    },
    ko: {
      name: "여행 비디오 템플릿",
      heroHeadline: "모험을 불러일으키는 여행 비디오",
      heroSubheadline:
        "여행 사진을 에픽한 시네마틱 비디오로 변환. 여행 크리에이터를 위한 전문 효과.",
      features: [
        {
          title: "시네마틱한 느낌",
          description:
            "목적지의 웅장함과 아름다움을 담아내는 에픽한 모션 효과.",
        },
        {
          title: "사진에서 브이로그로",
          description:
            "정적인 여행 사진을 여행 브이로그를 위한 다이나믹한 비디오 콘텐츠로 변환.",
        },
        {
          title: "여행지 쇼케이스",
          description: "풍경, 건축물, 경치 좋은 전망에 최적화된 효과.",
        },
        {
          title: "몽환적인 미학",
          description:
            "여행 콘텐츠에 필요한 방랑욕을 불러일으키는 모션 스타일.",
        },
      ],
    },
    zh: {
      name: "旅行视频模板",
      heroHeadline: "激发冒险的旅行视频",
      heroSubheadline:
        "将旅行照片转换为史诗般的电影视频。为旅行创作者打造的专业效果。",
      features: [
        {
          title: "电影感体验",
          description: "捕捉目的地壮丽与美景的史诗级动态效果。",
        },
        {
          title: "照片变Vlog",
          description: "将静态旅行照片转换为旅行Vlog的动态视频内容。",
        },
        {
          title: "目的地展示",
          description: "针对风景、建筑和美景优化的效果。",
        },
        {
          title: "梦幻美学",
          description: "唤起旅行内容所需漫游感的动态风格。",
        },
      ],
    },
  },
  "fitness-video-templates": {
    es: {
      name: "Plantillas Video Fitness",
      heroHeadline: "Videos Fitness Que Motivan",
      heroSubheadline:
        "Crea contenido fitness dinámico desde fotos. Efectos energéticos para entrenadores y creadores de fitness.",
      features: [
        {
          title: "Energía Intensa",
          description:
            "Efectos de movimiento dinámicos que igualan la energía del contenido fitness.",
        },
        {
          title: "Listo para Transformaciones",
          description:
            "Plantillas perfectas para revelar antes/después y mostrar progresos.",
        },
        {
          title: "Definición Muscular",
          description:
            "Efectos de zoom que realzan la iluminación para mostrar físico y forma.",
        },
        {
          title: "Muestra de Ejercicios",
          description:
            "Patrones de movimiento perfectos para demostraciones de ejercicios y contenido de gimnasio.",
        },
      ],
    },
    de: {
      name: "Fitness-Video-Vorlagen",
      heroHeadline: "Fitnessvideos Die Motivieren",
      heroSubheadline:
        "Erstelle dynamischen Fitness-Content aus Fotos. Energetische Effekte für Trainer und Fitness-Creator.",
      features: [
        {
          title: "High-Energy Feeling",
          description:
            "Dynamische Bewegungseffekte, die zur Energie von Fitness-Content passen.",
        },
        {
          title: "Transformations-Ready",
          description:
            "Vorlagen perfekt für Vorher/Nachher-Reveals und Fortschritts-Showcases.",
        },
        {
          title: "Muskeldefinition",
          description:
            "Lichtverbessernde Zoom-Effekte, die Körper und Form präsentieren.",
        },
        {
          title: "Workout-Präsentation",
          description:
            "Bewegungsmuster perfekt für Übungsdemonstration und Gym-Content.",
        },
      ],
    },
    fr: {
      name: "Modèles Vidéo Fitness",
      heroHeadline: "Vidéos Fitness Qui Motivent",
      heroSubheadline:
        "Créez du contenu fitness dynamique à partir de photos. Effets énergétiques pour coachs et créateurs fitness.",
      features: [
        {
          title: "Énergie Intense",
          description:
            "Effets de mouvement dynamiques qui correspondent à l'énergie du contenu fitness.",
        },
        {
          title: "Prêt pour les Transformations",
          description:
            "Modèles parfaits pour les révélations avant/après et les vitrines de progression.",
        },
        {
          title: "Définition Musculaire",
          description:
            "Effets de zoom améliorant l'éclairage pour mettre en valeur le physique et la forme.",
        },
        {
          title: "Vitrine d'Entraînement",
          description:
            "Motifs de mouvement parfaits pour les démonstrations d'exercices et le contenu de salle de sport.",
        },
      ],
    },
    pt: {
      name: "Modelos Vídeo Fitness",
      heroHeadline: "Vídeos Fitness Que Motivam",
      heroSubheadline:
        "Crie conteúdo fitness dinâmico a partir de fotos. Efeitos energéticos para treinadores e criadores fitness.",
      features: [
        {
          title: "Alta Energia",
          description:
            "Efeitos de movimento dinâmicos que combinam com a energia do conteúdo fitness.",
        },
        {
          title: "Pronto para Transformações",
          description:
            "Templates perfeitos para revelações antes/depois e vitrines de progresso.",
        },
        {
          title: "Definição Muscular",
          description:
            "Efeitos de zoom que realçam a iluminação para mostrar físico e forma.",
        },
        {
          title: "Vitrine de Exercícios",
          description:
            "Padrões de movimento perfeitos para demonstrações de exercícios e conteúdo de academia.",
        },
      ],
    },
    ru: {
      name: "Шаблоны Фитнес-Видео",
      heroHeadline: "Фитнес-Видео, Которые Мотивируют",
      heroSubheadline:
        "Создавайте динамичный фитнес-контент из фотографий. Энергичные эффекты для тренеров и фитнес-блогеров.",
      features: [
        {
          title: "Высокая Энергия",
          description:
            "Динамичные эффекты движения, соответствующие энергии фитнес-контента.",
        },
        {
          title: "Готово для Трансформаций",
          description:
            "Шаблоны, идеально подходящие для показа до/после и демонстрации прогресса.",
        },
        {
          title: "Мышечный Рельеф",
          description:
            "Эффекты зума с улучшением освещения для демонстрации телосложения и формы.",
        },
        {
          title: "Демонстрация Тренировок",
          description:
            "Паттерны движения, идеальные для демонстрации упражнений и контента из зала.",
        },
      ],
    },
    it: {
      name: "Modelli Video Fitness",
      heroHeadline: "Video Fitness Che Motivano",
      heroSubheadline:
        "Crea contenuti fitness dinamici dalle foto. Effetti energetici per trainer e fitness creator.",
      features: [
        {
          title: "Alta Energia",
          description:
            "Effetti di movimento dinamici che corrispondono all'energia dei contenuti fitness.",
        },
        {
          title: "Pronto per le Trasformazioni",
          description:
            "Template perfetti per rivelazioni prima/dopo e showcase dei progressi.",
        },
        {
          title: "Definizione Muscolare",
          description:
            "Effetti zoom che migliorano l'illuminazione per mostrare fisico e forma.",
        },
        {
          title: "Vetrina Allenamenti",
          description:
            "Pattern di movimento perfetti per dimostrazioni di esercizi e contenuti da palestra.",
        },
      ],
    },
    nl: {
      name: "Fitness Video Sjablonen",
      heroHeadline: "Fitnessvideo's Die Motiveren",
      heroSubheadline:
        "Maak dynamische fitness content van foto's. Energieke effecten voor trainers en fitness creators.",
      features: [
        {
          title: "High-Energy Gevoel",
          description:
            "Dynamische bewegingseffecten die passen bij de energie van fitness content.",
        },
        {
          title: "Transformatie-Klaar",
          description:
            "Templates perfect voor voor/na onthullingen en voortgang showcases.",
        },
        {
          title: "Spierdefinitie",
          description:
            "Lichtverbeterende zoom-effecten die lichaamsbouw en vorm tonen.",
        },
        {
          title: "Workout Showcase",
          description:
            "Bewegingspatronen perfect voor oefendemonstraties en gym content.",
        },
      ],
    },
    pl: {
      name: "Szablony Wideo Fitness",
      heroHeadline: "Wideo Fitness, Które Motywują",
      heroSubheadline:
        "Twórz dynamiczne treści fitness ze zdjęć. Energetyczne efekty dla trenerów i fitness twórców.",
      features: [
        {
          title: "Wysoka Energia",
          description:
            "Dynamiczne efekty ruchu dopasowane do energii treści fitness.",
        },
        {
          title: "Gotowe na Transformacje",
          description:
            "Szablony idealne do pokazów przed/po i prezentacji postępów.",
        },
        {
          title: "Definicja Mięśni",
          description:
            "Efekty zoom poprawiające oświetlenie do prezentacji sylwetki i formy.",
        },
        {
          title: "Pokaz Treningów",
          description:
            "Wzorce ruchu idealne do demonstracji ćwiczeń i treści z siłowni.",
        },
      ],
    },
    ja: {
      name: "フィットネス動画テンプレート",
      heroHeadline: "モチベーションを高めるフィットネス動画",
      heroSubheadline:
        "写真からダイナミックなフィットネスコンテンツを作成。トレーナーやフィットネスクリエイター向けエネルギッシュなエフェクト。",
      features: [
        {
          title: "ハイエナジー感",
          description:
            "フィットネスコンテンツのエネルギーにマッチするダイナミックなモーションエフェクト。",
        },
        {
          title: "変身ビフォーアフター対応",
          description:
            "ビフォーアフターの公開や進捗ショーケースに最適なテンプレート。",
        },
        {
          title: "筋肉の定義",
          description:
            "体格とフォームを見せるライティング強化ズームエフェクト。",
        },
        {
          title: "ワークアウトショーケース",
          description:
            "エクササイズデモやジムコンテンツに最適なモーションパターン。",
        },
      ],
    },
    ko: {
      name: "피트니스 비디오 템플릿",
      heroHeadline: "동기를 부여하는 피트니스 비디오",
      heroSubheadline:
        "사진으로 다이나믹한 피트니스 콘텐츠 제작. 트레이너와 피트니스 크리에이터를 위한 에너제틱한 효과.",
      features: [
        {
          title: "하이 에너지 느낌",
          description:
            "피트니스 콘텐츠의 에너지와 매칭되는 다이나믹한 모션 효과.",
        },
        {
          title: "트랜스포메이션 준비 완료",
          description:
            "비포/애프터 공개와 진행 상황 쇼케이스에 완벽한 템플릿.",
        },
        {
          title: "근육 선명도",
          description: "체격과 폼을 보여주는 조명 강화 줌 효과.",
        },
        {
          title: "운동 쇼케이스",
          description: "운동 시연과 체육관 콘텐츠에 완벽한 모션 패턴.",
        },
      ],
    },
    zh: {
      name: "健身视频模板",
      heroHeadline: "激励人心的健身视频",
      heroSubheadline:
        "用照片创建动态健身内容。为教练和健身创作者打造的活力效果。",
      features: [
        {
          title: "高能量感",
          description: "与健身内容能量相匹配的动态运动效果。",
        },
        {
          title: "蜕变展示就绪",
          description: "非常适合前后对比揭示和进度展示的模板。",
        },
        {
          title: "肌肉线条",
          description: "增强光线的缩放效果，展示体型和姿态。",
        },
        {
          title: "锻炼展示",
          description: "非常适合运动演示和健身房内容的动态模式。",
        },
      ],
    },
  },
  "tutorial-video-templates": {
    es: {
      name: "Plantillas Video Tutorial",
      heroHeadline: "Videos Tutorial Que Educan y Enganchan",
      heroSubheadline:
        "Transforma tutoriales paso a paso en videos dinámicos. Efectos visuales que mantienen a los espectadores aprendiendo.",
      features: [
        {
          title: "Flujo Paso a Paso",
          description:
            "Patrones de movimiento que guían a los espectadores a través de procesos de forma clara y lógica.",
        },
        {
          title: "Enfoque de Atención",
          description:
            "Efectos de zoom que dirigen la atención a áreas específicas de capturas de pantalla e imágenes.",
        },
        {
          title: "Listo para Contenido de Pantalla",
          description:
            "Plantillas optimizadas para capturas de pantalla, imágenes de UI y contenido digital.",
        },
        {
          title: "Amigable con Texto",
          description:
            "Espacio y ritmo diseñados para añadir texto explicativo y anotaciones.",
        },
      ],
    },
    de: {
      name: "Tutorial-Video-Vorlagen",
      heroHeadline: "Tutorial-Videos Die Lehren und Fesseln",
      heroSubheadline:
        "Verwandle Schritt-für-Schritt-Anleitungen in dynamische Videos. Visuelle Effekte die Zuschauer am Lernen halten.",
      features: [
        {
          title: "Schritt-für-Schritt-Ablauf",
          description:
            "Bewegungsmuster, die Zuschauer klar und logisch durch Prozesse führen.",
        },
        {
          title: "Aufmerksamkeit Fokussieren",
          description:
            "Zoom-Effekte, die die Aufmerksamkeit auf bestimmte Bereiche von Screenshots und Bildern lenken.",
        },
        {
          title: "Bildschirm-Content Ready",
          description:
            "Vorlagen optimiert für Screenshots, UI-Bilder und digitale Inhalte.",
        },
        {
          title: "Text-Overlay Freundlich",
          description: "Platz und Timing für erklärende Texte und Anmerkungen.",
        },
      ],
    },
    fr: {
      name: "Modèles Vidéo Tutoriel",
      heroHeadline: "Vidéos Tutoriel Qui Éduquent et Captivent",
      heroSubheadline:
        "Transformez les tutoriels étape par étape en vidéos dynamiques. Effets visuels qui maintiennent l'apprentissage.",
      features: [
        {
          title: "Flux Étape par Étape",
          description:
            "Motifs de mouvement qui guident les spectateurs à travers les processus de manière claire et logique.",
        },
        {
          title: "Concentration de l'Attention",
          description:
            "Effets de zoom qui attirent l'attention sur des zones spécifiques des captures d'écran et images.",
        },
        {
          title: "Prêt pour le Contenu d'Écran",
          description:
            "Modèles optimisés pour les captures d'écran, images UI et contenu numérique.",
        },
        {
          title: "Adapté aux Annotations",
          description:
            "Espace et rythme conçus pour ajouter du texte explicatif et des annotations.",
        },
      ],
    },
    pt: {
      name: "Modelos Vídeo Tutorial",
      heroHeadline: "Vídeos Tutorial Que Educam e Engajam",
      heroSubheadline:
        "Transforme tutoriais passo a passo em vídeos dinâmicos. Efeitos visuais que mantêm os espectadores aprendendo.",
      features: [
        {
          title: "Fluxo Passo a Passo",
          description:
            "Padrões de movimento que guiam os espectadores através de processos de forma clara e lógica.",
        },
        {
          title: "Foco de Atenção",
          description:
            "Efeitos de zoom que direcionam a atenção para áreas específicas de capturas de tela e imagens.",
        },
        {
          title: "Pronto para Conteúdo de Tela",
          description:
            "Templates otimizados para capturas de tela, imagens de UI e conteúdo digital.",
        },
        {
          title: "Amigável para Texto",
          description:
            "Espaço e ritmo projetados para adicionar texto explicativo e anotações.",
        },
      ],
    },
    ru: {
      name: "Шаблоны Обучающих Видео",
      heroHeadline: "Обучающие Видео, Которые Учат и Вовлекают",
      heroSubheadline:
        "Превращайте пошаговые туториалы в динамичные видео. Визуальные эффекты, удерживающие внимание зрителей.",
      features: [
        {
          title: "Пошаговый Поток",
          description:
            "Паттерны движения, которые ясно и логично проводят зрителей через процессы.",
        },
        {
          title: "Фокусировка Внимания",
          description:
            "Эффекты зума, привлекающие внимание к определённым областям скриншотов и изображений.",
        },
        {
          title: "Готово для Экранного Контента",
          description:
            "Шаблоны, оптимизированные для скриншотов, UI-изображений и цифрового контента.",
        },
        {
          title: "Удобно для Текста",
          description:
            "Пространство и темп, разработанные для добавления пояснительного текста и аннотаций.",
        },
      ],
    },
    it: {
      name: "Modelli Video Tutorial",
      heroHeadline: "Video Tutorial Che Educano e Coinvolgono",
      heroSubheadline:
        "Trasforma i tutorial passo passo in video dinamici. Effetti visivi che mantengono gli spettatori ad imparare.",
      features: [
        {
          title: "Flusso Passo Passo",
          description:
            "Pattern di movimento che guidano gli spettatori attraverso i processi in modo chiaro e logico.",
        },
        {
          title: "Focus dell'Attenzione",
          description:
            "Effetti zoom che attirano l'attenzione su aree specifiche di screenshot e immagini.",
        },
        {
          title: "Pronto per Contenuti Schermo",
          description:
            "Template ottimizzati per screenshot, immagini UI e contenuti digitali.",
        },
        {
          title: "Adatto per Testo",
          description:
            "Spazio e ritmo progettati per aggiungere testo esplicativo e annotazioni.",
        },
      ],
    },
    nl: {
      name: "Tutorial Video Sjablonen",
      heroHeadline: "Tutorial Video's Die Onderwijzen en Boeien",
      heroSubheadline:
        "Verander stap-voor-stap tutorials in dynamische video's. Visuele effecten die kijkers aan het leren houden.",
      features: [
        {
          title: "Stap-voor-Stap Flow",
          description:
            "Bewegingspatronen die kijkers duidelijk en logisch door processen leiden.",
        },
        {
          title: "Aandacht Focussen",
          description:
            "Zoom-effecten die de aandacht vestigen op specifieke gebieden van screenshots en afbeeldingen.",
        },
        {
          title: "Scherm Content Klaar",
          description:
            "Templates geoptimaliseerd voor screenshots, UI-afbeeldingen en digitale content.",
        },
        {
          title: "Tekst-Overlay Vriendelijk",
          description:
            "Ruimte en timing ontworpen voor het toevoegen van verklarende tekst en annotaties.",
        },
      ],
    },
    pl: {
      name: "Szablony Wideo Tutorialowe",
      heroHeadline: "Wideo Tutoriale, Które Uczą i Angażują",
      heroSubheadline:
        "Zamień tutoriale krok po kroku w dynamiczne filmy. Efekty wizualne utrzymujące widzów w nauce.",
      features: [
        {
          title: "Przepływ Krok po Kroku",
          description:
            "Wzorce ruchu prowadzące widzów przez procesy w sposób jasny i logiczny.",
        },
        {
          title: "Skupienie Uwagi",
          description:
            "Efekty zoom kierujące uwagę na konkretne obszary zrzutów ekranu i obrazów.",
        },
        {
          title: "Gotowe dla Treści Ekranowych",
          description:
            "Szablony zoptymalizowane dla zrzutów ekranu, obrazów UI i treści cyfrowych.",
        },
        {
          title: "Przyjazne dla Tekstu",
          description:
            "Przestrzeń i tempo zaprojektowane do dodawania tekstu objaśniającego i adnotacji.",
        },
      ],
    },
    ja: {
      name: "チュートリアル動画テンプレート",
      heroHeadline: "教育し引き込むチュートリアル動画",
      heroSubheadline:
        "ステップバイステップのチュートリアルをダイナミックな動画に変換。視聴者の学習を維持するビジュアルエフェクト。",
      features: [
        {
          title: "ステップバイステップの流れ",
          description:
            "視聴者を明確かつ論理的にプロセスを通して案内するモーションパターン。",
        },
        {
          title: "注目を集める",
          description:
            "スクリーンショットや画像の特定の領域に注目を集めるズームエフェクト。",
        },
        {
          title: "画面コンテンツ対応",
          description:
            "スクリーンショット、UI画像、デジタルコンテンツに最適化されたテンプレート。",
        },
        {
          title: "テキストオーバーレイ対応",
          description:
            "説明テキストや注釈を追加するために設計されたスペースとペーシング。",
        },
      ],
    },
    ko: {
      name: "튜토리얼 비디오 템플릿",
      heroHeadline: "교육하고 몰입시키는 튜토리얼 비디오",
      heroSubheadline:
        "단계별 튜토리얼을 다이나믹한 비디오로 변환. 시청자를 학습에 집중시키는 시각 효과.",
      features: [
        {
          title: "단계별 흐름",
          description:
            "시청자를 명확하고 논리적으로 프로세스를 통해 안내하는 모션 패턴.",
        },
        {
          title: "주목 집중",
          description:
            "스크린샷과 이미지의 특정 영역에 주목을 끄는 줌 효과.",
        },
        {
          title: "화면 콘텐츠 준비 완료",
          description:
            "스크린샷, UI 이미지, 디지털 콘텐츠에 최적화된 템플릿.",
        },
        {
          title: "텍스트 오버레이 친화적",
          description:
            "설명 텍스트와 주석을 추가하기 위해 설계된 공간과 페이싱.",
        },
      ],
    },
    zh: {
      name: "教程视频模板",
      heroHeadline: "既教育又吸引人的教程视频",
      heroSubheadline:
        "将分步教程转换为动态视频。让观众持续学习的视觉效果。",
      features: [
        {
          title: "步骤流程",
          description: "清晰、有逻辑地引导观众完成流程的动态模式。",
        },
        {
          title: "聚焦注意力",
          description: "将注意力吸引到截图和图像特定区域的缩放效果。",
        },
        {
          title: "屏幕内容就绪",
          description: "针对截图、UI图像和数字内容优化的模板。",
        },
        {
          title: "文字叠加友好",
          description: "为添加解释性文字和注释而设计的空间和节奏。",
        },
      ],
    },
  },
  "fruit-character-animation": {
    es: {
      name: "Animación Personajes Fruta",
      heroHeadline: "Personajes de Fruta Animados con IA",
      heroSubheadline:
        "Crea adorables animaciones de personajes de fruta para contenido infantil, educativo y de entretenimiento.",
      features: [
        {
          title: "Animación Estilo Pixar",
          description:
            "La IA genera animaciones 3D suaves y profesionales que parecen de una película de Pixar.",
        },
        {
          title: "8 Personajes Listos",
          description:
            "Elige entre maracuyá, fresa, aguacate, limón, sandía, naranja, arándano o mango.",
        },
        {
          title: "Generación en 5 Minutos",
          description:
            "Video animado completo generado en menos de 5 minutos. Imagen en 6 segundos, animación en 3-4 minutos.",
        },
        {
          title: "Formato Vertical",
          description:
            "Relación de aspecto 9:16 perfecta optimizada para TikTok, Reels y Shorts.",
        },
      ],
    },
    de: {
      name: "Frucht-Charakter-Animation",
      heroHeadline: "KI-Animierte Frucht-Charaktere",
      heroSubheadline:
        "Erstelle niedliche Frucht-Charakter-Animationen für Kinder-, Bildungs- und Unterhaltungsinhalte.",
      features: [
        {
          title: "Pixar-Stil Animation",
          description:
            "KI generiert flüssige, professionelle 3D-Animationen, die wie aus einem Pixar-Film aussehen.",
        },
        {
          title: "8 Fertige Charaktere",
          description:
            "Wähle aus Passionsfrucht, Erdbeere, Avocado, Zitrone, Wassermelone, Orange, Blaubeere oder Mango.",
        },
        {
          title: "5-Minuten Generierung",
          description:
            "Vollständiges animiertes Video in unter 5 Minuten. Bild in 6 Sekunden, Animation in 3-4 Minuten.",
        },
        {
          title: "Hochformat",
          description:
            "Perfektes 9:16 Seitenverhältnis optimiert für TikTok, Reels und Shorts.",
        },
      ],
    },
    fr: {
      name: "Animation Personnages Fruits",
      heroHeadline: "Personnages Fruits Animés par IA",
      heroSubheadline:
        "Créez d'adorables animations de personnages fruits pour contenu enfants, éducatif et divertissement.",
      features: [
        {
          title: "Animation Style Pixar",
          description:
            "L'IA génère des animations 3D fluides et professionnelles qui ressemblent à un film Pixar.",
        },
        {
          title: "8 Personnages Prêts",
          description:
            "Choisissez parmi fruit de la passion, fraise, avocat, citron, pastèque, orange, myrtille ou mangue.",
        },
        {
          title: "Génération en 5 Minutes",
          description:
            "Vidéo animée complète générée en moins de 5 minutes. Image en 6 secondes, animation en 3-4 minutes.",
        },
        {
          title: "Format Vertical",
          description:
            "Ratio 9:16 parfait optimisé pour TikTok, Reels et Shorts.",
        },
      ],
    },
    pt: {
      name: "Animação Personagens Fruta",
      heroHeadline: "Personagens de Fruta Animados com IA",
      heroSubheadline:
        "Crie adoráveis animações de personagens de fruta para conteúdo infantil, educativo e entretenimento.",
      features: [
        {
          title: "Animação Estilo Pixar",
          description:
            "A IA gera animações 3D suaves e profissionais que parecem de um filme da Pixar.",
        },
        {
          title: "8 Personagens Prontos",
          description:
            "Escolha entre maracujá, morango, abacate, limão, melancia, laranja, mirtilo ou manga.",
        },
        {
          title: "Geração em 5 Minutos",
          description:
            "Vídeo animado completo gerado em menos de 5 minutos. Imagem em 6 segundos, animação em 3-4 minutos.",
        },
        {
          title: "Formato Vertical",
          description:
            "Proporção 9:16 perfeita otimizada para TikTok, Reels e Shorts.",
        },
      ],
    },
    ru: {
      name: "Анимация Фруктовых Персонажей",
      heroHeadline: "Анимированные Фруктовые Персонажи с ИИ",
      heroSubheadline:
        "Создавайте очаровательные анимации фруктовых персонажей для детского, образовательного и развлекательного контента.",
      features: [
        {
          title: "Анимация в Стиле Pixar",
          description:
            "ИИ создаёт плавные профессиональные 3D-анимации, которые выглядят как из фильма Pixar.",
        },
        {
          title: "8 Готовых Персонажей",
          description:
            "Выбирайте из маракуйи, клубники, авокадо, лимона, арбуза, апельсина, черники или манго.",
        },
        {
          title: "Генерация за 5 Минут",
          description:
            "Полное анимированное видео создаётся менее чем за 5 минут. Изображение за 6 секунд, анимация за 3-4 минуты.",
        },
        {
          title: "Вертикальный Формат",
          description:
            "Идеальное соотношение сторон 9:16, оптимизированное для TikTok, Reels и Shorts.",
        },
      ],
    },
    it: {
      name: "Animazione Personaggi Frutta",
      heroHeadline: "Personaggi Frutta Animati con IA",
      heroSubheadline:
        "Crea adorabili animazioni di personaggi frutta per contenuti per bambini, educativi e di intrattenimento.",
      features: [
        {
          title: "Animazione Stile Pixar",
          description:
            "L'IA genera animazioni 3D fluide e professionali che sembrano uscite da un film Pixar.",
        },
        {
          title: "8 Personaggi Pronti",
          description:
            "Scegli tra frutto della passione, fragola, avocado, limone, anguria, arancia, mirtillo o mango.",
        },
        {
          title: "Generazione in 5 Minuti",
          description:
            "Video animato completo generato in meno di 5 minuti. Immagine in 6 secondi, animazione in 3-4 minuti.",
        },
        {
          title: "Formato Verticale",
          description:
            "Rapporto 9:16 perfetto ottimizzato per TikTok, Reels e Shorts.",
        },
      ],
    },
    nl: {
      name: "Fruit Karakter Animatie",
      heroHeadline: "AI-Geanimeerde Fruit Karakters",
      heroSubheadline:
        "Maak schattige fruit karakter animaties voor kinder-, educatieve en entertainment content.",
      features: [
        {
          title: "Pixar-Stijl Animatie",
          description:
            "AI genereert vloeiende, professionele 3D-animaties die eruitzien als uit een Pixar-film.",
        },
        {
          title: "8 Kant-en-Klare Karakters",
          description:
            "Kies uit passievrucht, aardbei, avocado, citroen, watermeloen, sinaasappel, bosbes of mango.",
        },
        {
          title: "5-Minuten Generatie",
          description:
            "Volledige geanimeerde video gegenereerd in minder dan 5 minuten. Afbeelding in 6 seconden, animatie in 3-4 minuten.",
        },
        {
          title: "Verticaal Formaat",
          description:
            "Perfecte 9:16 beeldverhouding geoptimaliseerd voor TikTok, Reels en Shorts.",
        },
      ],
    },
    pl: {
      name: "Animacja Postaci Owoców",
      heroHeadline: "Postacie Owoców Animowane przez AI",
      heroSubheadline:
        "Twórz urocze animacje postaci owoców dla treści dziecięcych, edukacyjnych i rozrywkowych.",
      features: [
        {
          title: "Animacja w Stylu Pixar",
          description:
            "AI generuje płynne, profesjonalne animacje 3D, które wyglądają jak z filmu Pixar.",
        },
        {
          title: "8 Gotowych Postaci",
          description:
            "Wybierz spośród marakui, truskawki, awokado, cytryny, arbuza, pomarańczy, borówki lub mango.",
        },
        {
          title: "Generowanie w 5 Minut",
          description:
            "Pełne animowane wideo wygenerowane w mniej niż 5 minut. Obraz w 6 sekund, animacja w 3-4 minuty.",
        },
        {
          title: "Format Pionowy",
          description:
            "Idealny format 9:16 zoptymalizowany dla TikTok, Reels i Shorts.",
        },
      ],
    },
    ja: {
      name: "フルーツキャラクターアニメーション",
      heroHeadline: "AIアニメーションフルーツキャラクター",
      heroSubheadline:
        "キッズ、教育、エンターテイメントコンテンツ向けの愛らしいフルーツキャラクターアニメーションを作成。",
      features: [
        {
          title: "ピクサースタイルアニメーション",
          description:
            "AIがピクサー映画のような滑らかでプロフェッショナルな3Dアニメーションを生成。",
        },
        {
          title: "8種類のキャラクター",
          description:
            "パッションフルーツ、いちご、アボカド、レモン、スイカ、オレンジ、ブルーベリー、マンゴーから選択。",
        },
        {
          title: "5分で生成",
          description:
            "完全なアニメーション動画を5分以内で生成。画像は6秒、アニメーションは3-4分。",
        },
        {
          title: "縦型フォーマット",
          description:
            "TikTok、Reels、Shortsに最適化された完璧な9:16アスペクト比。",
        },
      ],
    },
    ko: {
      name: "과일 캐릭터 애니메이션",
      heroHeadline: "AI 애니메이션 과일 캐릭터",
      heroSubheadline:
        "어린이, 교육, 엔터테인먼트 콘텐츠를 위한 사랑스러운 과일 캐릭터 애니메이션 제작.",
      features: [
        {
          title: "픽사 스타일 애니메이션",
          description:
            "AI가 픽사 영화처럼 보이는 부드럽고 전문적인 3D 애니메이션을 생성합니다.",
        },
        {
          title: "8개의 준비된 캐릭터",
          description:
            "패션프루트, 딸기, 아보카도, 레몬, 수박, 오렌지, 블루베리, 망고 중에서 선택하세요.",
        },
        {
          title: "5분 생성",
          description:
            "전체 애니메이션 비디오가 5분 이내에 생성됩니다. 이미지 6초, 애니메이션 3-4분.",
        },
        {
          title: "세로 형식",
          description:
            "TikTok, Reels, Shorts에 최적화된 완벽한 9:16 화면 비율.",
        },
      ],
    },
    zh: {
      name: "水果角色动画",
      heroHeadline: "AI动画水果角色",
      heroSubheadline:
        "为儿童、教育和娱乐内容创建可爱的水果角色动画。",
      features: [
        {
          title: "皮克斯风格动画",
          description: "AI生成流畅、专业的3D动画，看起来像皮克斯电影。",
        },
        {
          title: "8个现成角色",
          description:
            "从百香果、草莓、牛油果、柠檬、西瓜、橙子、蓝莓或芒果中选择。",
        },
        {
          title: "5分钟生成",
          description:
            "完整动画视频在5分钟内生成。图像6秒，动画3-4分钟。",
        },
        {
          title: "竖屏格式",
          description: "针对TikTok、Reels和Shorts优化的完美9:16宽高比。",
        },
      ],
    },
  },
  "text-to-video-ai": {
    es: {
      name: "IA Texto a Video",
      heroHeadline: "Genera Videos Desde Texto con IA",
      heroSubheadline:
        "Describe tu visión en texto y deja que la IA cree videos impresionantes. La creación de video más fácil posible.",
      features: [
        {
          title: "Entrada en Lenguaje Natural",
          description:
            "Solo describe lo que quieres en español simple. La IA entiende el contexto y crea visuales coincidentes.",
        },
        {
          title: "Múltiples Estilos",
          description:
            "3D Pixar, realista, cartoon, anime — elige tu estilo visual o deja que la IA decida.",
        },
        {
          title: "Refinamiento Iterativo",
          description:
            "¿No es perfecto? Ajusta tu prompt y regenera hasta obtener exactamente lo que quieres.",
        },
        {
          title: "Generación Rápida",
          description:
            "Imagen en 6 segundos, video en 3-4 minutos. Crea múltiples variaciones rápidamente.",
        },
      ],
    },
    de: {
      name: "KI Text-zu-Video",
      heroHeadline: "Generiere Videos aus Text mit KI",
      heroSubheadline:
        "Beschreibe deine Vision in Text und lass KI beeindruckende Videos erstellen. Die einfachste Videoerstellung überhaupt.",
      features: [
        {
          title: "Natürliche Spracheingabe",
          description:
            "Beschreibe einfach auf Deutsch, was du willst. Die KI versteht den Kontext und erstellt passende Visuals.",
        },
        {
          title: "Mehrere Stile",
          description:
            "3D Pixar, realistisch, Cartoon, Anime — wähle deinen visuellen Stil oder lass die KI entscheiden.",
        },
        {
          title: "Iterative Verfeinerung",
          description:
            "Nicht perfekt? Passe deinen Prompt an und regeneriere, bis du genau das bekommst, was du willst.",
        },
        {
          title: "Schnelle Generierung",
          description:
            "Bild in 6 Sekunden, Video in 3-4 Minuten. Erstelle schnell mehrere Variationen.",
        },
      ],
    },
    fr: {
      name: "IA Texte vers Vidéo",
      heroHeadline: "Générez des Vidéos à Partir de Texte avec l'IA",
      heroSubheadline:
        "Décrivez votre vision en texte et laissez l'IA créer des vidéos impressionnantes. La création vidéo la plus simple.",
      features: [
        {
          title: "Saisie en Langage Naturel",
          description:
            "Décrivez simplement ce que vous voulez en français. L'IA comprend le contexte et crée des visuels correspondants.",
        },
        {
          title: "Styles Multiples",
          description:
            "3D Pixar, réaliste, cartoon, anime — choisissez votre style visuel ou laissez l'IA décider.",
        },
        {
          title: "Affinage Itératif",
          description:
            "Pas parfait ? Ajustez votre prompt et régénérez jusqu'à obtenir exactement ce que vous voulez.",
        },
        {
          title: "Génération Rapide",
          description:
            "Image en 6 secondes, vidéo en 3-4 minutes. Créez rapidement plusieurs variations.",
        },
      ],
    },
    pt: {
      name: "IA Texto para Vídeo",
      heroHeadline: "Gere Vídeos a Partir de Texto com IA",
      heroSubheadline:
        "Descreva sua visão em texto e deixe a IA criar vídeos impressionantes. A criação de vídeo mais fácil possível.",
      features: [
        {
          title: "Entrada em Linguagem Natural",
          description:
            "Apenas descreva o que você quer em português simples. A IA entende o contexto e cria visuais correspondentes.",
        },
        {
          title: "Múltiplos Estilos",
          description:
            "3D Pixar, realista, cartoon, anime — escolha seu estilo visual ou deixe a IA decidir.",
        },
        {
          title: "Refinamento Iterativo",
          description:
            "Não está perfeito? Ajuste seu prompt e regenere até obter exatamente o que você quer.",
        },
        {
          title: "Geração Rápida",
          description:
            "Imagem em 6 segundos, vídeo em 3-4 minutos. Crie múltiplas variações rapidamente.",
        },
      ],
    },
    ru: {
      name: "ИИ Текст в Видео",
      heroHeadline: "Генерируйте Видео из Текста с ИИ",
      heroSubheadline:
        "Опишите свою идею текстом, и ИИ создаст впечатляющие видео. Самый простой способ создания видео.",
      features: [
        {
          title: "Ввод на Естественном Языке",
          description:
            "Просто опишите желаемое на русском языке. ИИ понимает контекст и создаёт соответствующие визуалы.",
        },
        {
          title: "Множество Стилей",
          description:
            "3D Pixar, реалистичный, мультяшный, аниме — выберите визуальный стиль или позвольте ИИ решить.",
        },
        {
          title: "Итеративное Улучшение",
          description:
            "Не идеально? Скорректируйте промпт и перегенерируйте, пока не получите именно то, что хотите.",
        },
        {
          title: "Быстрая Генерация",
          description:
            "Изображение за 6 секунд, видео за 3-4 минуты. Быстро создавайте множество вариаций.",
        },
      ],
    },
    it: {
      name: "IA Testo in Video",
      heroHeadline: "Genera Video dal Testo con IA",
      heroSubheadline:
        "Descrivi la tua visione in testo e lascia che l'IA crei video impressionanti. La creazione video più semplice.",
      features: [
        {
          title: "Input in Linguaggio Naturale",
          description:
            "Descrivi semplicemente quello che vuoi in italiano. L'IA capisce il contesto e crea visual corrispondenti.",
        },
        {
          title: "Stili Multipli",
          description:
            "3D Pixar, realistico, cartoon, anime — scegli il tuo stile visivo o lascia decidere l'IA.",
        },
        {
          title: "Raffinamento Iterativo",
          description:
            "Non è perfetto? Modifica il tuo prompt e rigenera finché non ottieni esattamente quello che vuoi.",
        },
        {
          title: "Generazione Veloce",
          description:
            "Immagine in 6 secondi, video in 3-4 minuti. Crea rapidamente più variazioni.",
        },
      ],
    },
    nl: {
      name: "AI Tekst naar Video",
      heroHeadline: "Genereer Video's uit Tekst met AI",
      heroSubheadline:
        "Beschrijf je visie in tekst en laat AI indrukwekkende video's maken. De eenvoudigste videocreatie mogelijk.",
      features: [
        {
          title: "Natuurlijke Taalinvoer",
          description:
            "Beschrijf gewoon wat je wilt in eenvoudig Nederlands. De AI begrijpt de context en maakt passende visuals.",
        },
        {
          title: "Meerdere Stijlen",
          description:
            "3D Pixar, realistisch, cartoon, anime — kies je visuele stijl of laat AI beslissen.",
        },
        {
          title: "Iteratieve Verfijning",
          description:
            "Niet perfect? Pas je prompt aan en regenereer tot je precies krijgt wat je wilt.",
        },
        {
          title: "Snelle Generatie",
          description:
            "Afbeelding in 6 seconden, video in 3-4 minuten. Maak snel meerdere variaties.",
        },
      ],
    },
    pl: {
      name: "AI Tekst na Wideo",
      heroHeadline: "Generuj Wideo z Tekstu za Pomocą AI",
      heroSubheadline:
        "Opisz swoją wizję tekstem i pozwól AI stworzyć imponujące filmy. Najprostsza możliwa kreacja wideo.",
      features: [
        {
          title: "Wpisywanie w Naturalnym Języku",
          description:
            "Po prostu opisz, czego chcesz, w prostym języku polskim. AI rozumie kontekst i tworzy pasujące wizualizacje.",
        },
        {
          title: "Wiele Stylów",
          description:
            "3D Pixar, realistyczny, kreskówka, anime — wybierz swój styl wizualny lub pozwól AI zdecydować.",
        },
        {
          title: "Iteracyjne Udoskonalanie",
          description:
            "Nie idealne? Dostosuj prompt i regeneruj, aż uzyskasz dokładnie to, czego chcesz.",
        },
        {
          title: "Szybka Generacja",
          description:
            "Obraz w 6 sekund, wideo w 3-4 minuty. Szybko twórz wiele wariantów.",
        },
      ],
    },
    ja: {
      name: "AIテキストから動画",
      heroHeadline: "テキストからAIで動画を生成",
      heroSubheadline:
        "テキストでビジョンを説明し、AIに印象的な動画を作成させましょう。最も簡単な動画作成方法。",
      features: [
        {
          title: "自然言語入力",
          description:
            "欲しいものを日本語で説明するだけ。AIがコンテキストを理解し、マッチするビジュアルを作成します。",
        },
        {
          title: "複数のスタイル",
          description:
            "3D ピクサー、リアル、カートゥーン、アニメ — ビジュアルスタイルを選ぶか、AIに任せましょう。",
        },
        {
          title: "反復的な改善",
          description:
            "完璧じゃない？プロンプトを調整して、欲しいものが得られるまで再生成。",
        },
        {
          title: "高速生成",
          description:
            "画像6秒、動画3-4分。複数のバリエーションを素早く作成。",
        },
      ],
    },
    ko: {
      name: "AI 텍스트-비디오",
      heroHeadline: "텍스트에서 AI로 비디오 생성",
      heroSubheadline:
        "텍스트로 비전을 설명하고 AI가 인상적인 비디오를 만들게 하세요. 가장 쉬운 비디오 제작 방법.",
      features: [
        {
          title: "자연어 입력",
          description:
            "원하는 것을 간단한 한국어로 설명하세요. AI가 맥락을 이해하고 일치하는 비주얼을 생성합니다.",
        },
        {
          title: "다양한 스타일",
          description:
            "3D 픽사, 리얼리스틱, 카툰, 애니메 — 비주얼 스타일을 선택하거나 AI에게 맡기세요.",
        },
        {
          title: "반복적 개선",
          description:
            "완벽하지 않나요? 프롬프트를 조정하고 원하는 것을 얻을 때까지 재생성하세요.",
        },
        {
          title: "빠른 생성",
          description:
            "이미지 6초, 비디오 3-4분. 여러 변형을 빠르게 생성하세요.",
        },
      ],
    },
    zh: {
      name: "AI文字生成视频",
      heroHeadline: "用AI从文字生成视频",
      heroSubheadline:
        "用文字描述您的愿景，让AI创建令人印象深刻的视频。最简单的视频创作方式。",
      features: [
        {
          title: "自然语言输入",
          description:
            "只需用简单的中文描述您想要的内容。AI理解上下文并创建匹配的视觉效果。",
        },
        {
          title: "多种风格",
          description:
            "3D皮克斯、写实、卡通、动漫 — 选择您的视觉风格或让AI决定。",
        },
        {
          title: "迭代优化",
          description:
            "不完美？调整您的提示词并重新生成，直到获得您想要的效果。",
        },
        {
          title: "快速生成",
          description: "图像6秒，视频3-4分钟。快速创建多个变体。",
        },
      ],
    },
  },
};

export function getLocalizedTemplateContent(
  slug: string,
  locale: Locale
): TemplateTranslation | null {
  if (locale === "en") return null;
  const translations = templateTranslations[slug];
  if (!translations) return null;
  return translations[locale as NonEnLocale] || null;
}
