import type { Locale } from "../config";
import { getToolBySlug } from "@/lib/tools";
import {
  localizedName,
  pageSpecificCopy,
  type NonEnLocale,
} from "./localized-fallbacks";

// Translations for tool content (name, tagline, description, howItWorks, features, faqs)
// Key is tool slug, value is translations per locale

interface HowItWorksStep {
  step?: string;
  title: string;
  description: string;
}

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ToolTranslation {
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  howItWorks?: HowItWorksStep[];
  features?: Feature[];
  faqs?: FAQ[];
}

type ToolTranslations = Partial<Record<Locale, ToolTranslation>>;

function createToolFallback(
  slug: string,
  locale: NonEnLocale,
  displayName?: string
): ToolTranslation | null {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  const name = displayName || localizedName(slug, tool.name, locale);
  const specific = pageSpecificCopy(slug, name, locale);

  return {
    name,
    tagline: specific.heroHeadline,
    description: specific.description,
    detailedDescription: specific.metaDescription,
    howItWorks: specific.steps,
    features: specific.features,
    faqs: specific.faqs,
  };
}

export const toolTranslations: Record<string, ToolTranslations> = {
  "ai-script-generator": {
    es: {
      name: "Generador de Guiones IA",
      tagline: "Genera guiones de video atractivos en segundos",
      description: "Transforma tus ideas en guiones de video convincentes usando IA avanzada. Perfecto para TikTok, YouTube Shorts, Instagram Reels y más.",
      detailedDescription: "Nuestro Generador de Guiones IA revoluciona la creación de contenido al transformar ideas simples en guiones profesionales y atractivos al instante.",
      howItWorks: [
        { title: "Ingresa Tu Tema", description: "Cuéntale a nuestra IA de qué trata tu video. Unas pocas palabras o un brief detallado, lo que te funcione." },
        { title: "Elige Tu Estilo", description: "Selecciona el tono, duración y formato. Informal, profesional, educativo o entretenido, tú decides." },
        { title: "Genera y Refina", description: "Obtén tu guión al instante. Edita, regenera secciones o úsalo tal cual. Control creativo total." },
        { title: "Crea Tu Video", description: "Usa el guión con nuestra voz IA, avatares y editor de video para crear tu video completo." },
      ],
      features: [
        { title: "Múltiples Formatos", description: "Guiones optimizados para TikTok, YouTube, Instagram y más" },
        { title: "Tono Personalizable", description: "Profesional, informal, divertido, educativo: más de 20 estilos de escritura" },
        { title: "Generación Instantánea", description: "Obtén guiones completos en menos de 10 segundos" },
        { title: "Revisiones Ilimitadas", description: "Regenera secciones o guiones enteros hasta que sea perfecto" },
        { title: "Control de Duración", description: "Clips de 15 segundos a videos de 10 minutos, cualquier duración" },
        { title: "32 Idiomas", description: "Genera guiones en cualquiera de nuestros idiomas soportados" },
      ],
    },
    de: {
      name: "KI-Skript-Generator",
      tagline: "Erstelle ansprechende Video-Skripte in Sekunden",
      description: "Verwandle deine Ideen mit fortschrittlicher KI in überzeugende Video-Skripte. Perfekt für TikTok, YouTube Shorts, Instagram Reels und mehr.",
      detailedDescription: "Unser KI-Skript-Generator revolutioniert die Content-Erstellung, indem er einfache Ideen sofort in professionelle, ansprechende Video-Skripte verwandelt.",
      howItWorks: [
        { title: "Gib dein Thema ein", description: "Erzähl unserer KI, worum es in deinem Video geht. Ein paar Worte oder ein ausführliches Briefing - was immer für dich funktioniert." },
        { title: "Wähle deinen Stil", description: "Wähle Ton, Länge und Format. Locker, professionell, lehrreich oder unterhaltsam - du entscheidest." },
        { title: "Generieren & Verfeinern", description: "Erhalte dein Skript sofort. Bearbeite, regeneriere Abschnitte oder verwende es direkt. Volle kreative Kontrolle." },
        { title: "Erstelle dein Video", description: "Verwende das Skript mit unserer KI-Stimme, Avataren und Video-Editor, um dein komplettes Video zu erstellen." },
      ],
      features: [
        { title: "Mehrere Formate", description: "Optimierte Skripte für TikTok, YouTube, Instagram und mehr" },
        { title: "Anpassbarer Ton", description: "Professionell, locker, lustig, lehrreich - über 20 Schreibstile" },
        { title: "Sofortige Generierung", description: "Erhalte vollständige Skripte in weniger als 10 Sekunden" },
        { title: "Unbegrenzte Überarbeitungen", description: "Regeneriere Abschnitte oder ganze Skripte bis zur Perfektion" },
        { title: "Längenkontrolle", description: "Von 15-Sekunden-Clips bis zu 10-Minuten-Videos, jede Länge" },
        { title: "32 Sprachen", description: "Generiere Skripte in einer unserer unterstützten Sprachen" },
      ],
    },
    fr: {
      name: "Générateur de Scripts IA",
      tagline: "Générez des scripts vidéo captivants en secondes",
      description: "Transformez vos idées en scripts vidéo convaincants grâce à l'IA avancée. Parfait pour TikTok, YouTube Shorts, Instagram Reels et plus.",
      detailedDescription: "Notre Générateur de Scripts IA révolutionne la création de contenu en transformant instantanément des idées simples en scripts professionnels et engageants.",
      howItWorks: [
        { title: "Entrez votre sujet", description: "Dites à notre IA de quoi parle votre vidéo. Quelques mots ou un brief détaillé - ce qui vous convient." },
        { title: "Choisissez votre style", description: "Sélectionnez le ton, la durée et le format. Décontracté, professionnel, éducatif ou divertissant - c'est vous qui décidez." },
        { title: "Générer et affiner", description: "Obtenez votre script instantanément. Éditez, régénérez des sections ou utilisez-le tel quel. Contrôle créatif total." },
        { title: "Créez votre vidéo", description: "Utilisez le script avec notre voix IA, avatars et éditeur vidéo pour créer votre vidéo complète." },
      ],
      features: [
        { title: "Formats multiples", description: "Scripts optimisés pour TikTok, YouTube, Instagram et plus" },
        { title: "Ton personnalisable", description: "Professionnel, décontracté, drôle, éducatif - plus de 20 styles d'écriture" },
        { title: "Génération instantanée", description: "Obtenez des scripts complets en moins de 10 secondes" },
        { title: "Révisions illimitées", description: "Régénérez des sections ou des scripts entiers jusqu'à la perfection" },
        { title: "Contrôle de durée", description: "De clips de 15 secondes à des vidéos de 10 minutes, toute durée" },
        { title: "32 langues", description: "Générez des scripts dans l'une de nos langues prises en charge" },
      ],
    },
    pt: {
      name: "Gerador de Roteiros IA",
      tagline: "Gere roteiros de vídeo envolventes em segundos",
      description: "Transforme suas ideias em roteiros de vídeo convincentes usando IA avançada. Perfeito para TikTok, YouTube Shorts, Instagram Reels e mais.",
      detailedDescription: "Nosso Gerador de Roteiros IA revoluciona a criação de conteúdo ao transformar ideias simples em roteiros profissionais e envolventes instantaneamente.",
      howItWorks: [
        { title: "Digite seu tema", description: "Diga à nossa IA sobre o que é seu vídeo. Algumas palavras ou um briefing detalhado - o que funcionar para você." },
        { title: "Escolha seu estilo", description: "Selecione o tom, duração e formato. Descontraído, profissional, educacional ou divertido - você decide." },
        { title: "Gerar e refinar", description: "Obtenha seu roteiro instantaneamente. Edite, regenere seções ou use como está. Controle criativo total." },
        { title: "Crie seu vídeo", description: "Use o roteiro com nossa voz IA, avatares e editor de vídeo para criar seu vídeo completo." },
      ],
      features: [
        { title: "Múltiplos formatos", description: "Roteiros otimizados para TikTok, YouTube, Instagram e mais" },
        { title: "Tom personalizável", description: "Profissional, descontraído, engraçado, educacional - mais de 20 estilos de escrita" },
        { title: "Geração instantânea", description: "Obtenha roteiros completos em menos de 10 segundos" },
        { title: "Revisões ilimitadas", description: "Regenere seções ou roteiros inteiros até a perfeição" },
        { title: "Controle de duração", description: "De clipes de 15 segundos a vídeos de 10 minutos, qualquer duração" },
        { title: "32 idiomas", description: "Gere roteiros em qualquer um de nossos idiomas suportados" },
      ],
    },
    ru: {
      name: "ИИ Генератор Сценариев",
      tagline: "Создавайте захватывающие сценарии за секунды",
      description: "Превращайте идеи в убедительные сценарии с помощью продвинутого ИИ. Идеально для TikTok, YouTube Shorts, Instagram Reels.",
      detailedDescription: "Наш ИИ Генератор Сценариев революционизирует создание контента, мгновенно превращая идеи в профессиональные сценарии.",
      howItWorks: [
        { title: "Введите тему", description: "Расскажите нашему ИИ, о чём ваше видео. Несколько слов или подробное описание - как вам удобно." },
        { title: "Выберите стиль", description: "Выберите тон, длительность и формат. Повседневный, профессиональный, образовательный или развлекательный - решать вам." },
        { title: "Генерация и доработка", description: "Получите сценарий мгновенно. Редактируйте, перегенерируйте разделы или используйте как есть. Полный творческий контроль." },
        { title: "Создайте видео", description: "Используйте сценарий с нашей ИИ-озвучкой, аватарами и видеоредактором для создания готового видео." },
      ],
      features: [
        { title: "Множество форматов", description: "Сценарии, оптимизированные для TikTok, YouTube, Instagram и других платформ" },
        { title: "Настраиваемый тон", description: "Профессиональный, повседневный, весёлый, образовательный - более 20 стилей письма" },
        { title: "Мгновенная генерация", description: "Получайте готовые сценарии менее чем за 10 секунд" },
        { title: "Безлимитные правки", description: "Перегенерируйте разделы или целые сценарии до идеала" },
        { title: "Контроль длительности", description: "От 15-секундных клипов до 10-минутных видео, любая длина" },
        { title: "32 языка", description: "Генерируйте сценарии на любом из поддерживаемых языков" },
      ],
    },
    it: {
      name: "Generatore di Script IA",
      tagline: "Genera script video coinvolgenti in pochi secondi",
      description: "Trasforma le tue idee in script video convincenti usando l'IA avanzata. Perfetto per TikTok, YouTube Shorts, Instagram Reels e altro.",
      detailedDescription: "Il nostro Generatore di Script IA rivoluziona la creazione di contenuti trasformando istantaneamente semplici idee in script professionali.",
      howItWorks: [
        { title: "Inserisci il tuo argomento", description: "Racconta alla nostra IA di cosa parla il tuo video. Poche parole o un brief dettagliato - quello che funziona per te." },
        { title: "Scegli il tuo stile", description: "Seleziona tono, durata e formato. Informale, professionale, educativo o divertente - decidi tu." },
        { title: "Genera e perfeziona", description: "Ottieni il tuo script istantaneamente. Modifica, rigenera sezioni o usalo così com'è. Controllo creativo totale." },
        { title: "Crea il tuo video", description: "Usa lo script con la nostra voce IA, avatar ed editor video per creare il tuo video completo." },
      ],
      features: [
        { title: "Formati multipli", description: "Script ottimizzati per TikTok, YouTube, Instagram e altro" },
        { title: "Tono personalizzabile", description: "Professionale, informale, divertente, educativo - oltre 20 stili di scrittura" },
        { title: "Generazione istantanea", description: "Ottieni script completi in meno di 10 secondi" },
        { title: "Revisioni illimitate", description: "Rigenera sezioni o interi script fino alla perfezione" },
        { title: "Controllo durata", description: "Da clip di 15 secondi a video di 10 minuti, qualsiasi durata" },
        { title: "32 lingue", description: "Genera script in una qualsiasi delle nostre lingue supportate" },
      ],
    },
    nl: {
      name: "AI Script Generator",
      tagline: "Genereer boeiende videoscripts in seconden",
      description: "Transformeer je ideeën in overtuigende videoscripts met geavanceerde AI. Perfect voor TikTok, YouTube Shorts, Instagram Reels en meer.",
      detailedDescription: "Onze AI Script Generator revolutioneert contentcreatie door eenvoudige ideeën direct om te zetten in professionele videoscripts.",
      howItWorks: [
        { title: "Voer je onderwerp in", description: "Vertel onze AI waar je video over gaat. Een paar woorden of een gedetailleerde briefing - wat voor jou werkt." },
        { title: "Kies je stijl", description: "Selecteer toon, lengte en formaat. Informeel, professioneel, educatief of vermakelijk - jij beslist." },
        { title: "Genereren & verfijnen", description: "Krijg je script direct. Bewerk, regenereer secties of gebruik het zoals het is. Volledige creatieve controle." },
        { title: "Maak je video", description: "Gebruik het script met onze AI-stem, avatars en video-editor om je complete video te maken." },
      ],
      features: [
        { title: "Meerdere formaten", description: "Geoptimaliseerde scripts voor TikTok, YouTube, Instagram en meer" },
        { title: "Aanpasbare toon", description: "Professioneel, informeel, grappig, educatief - meer dan 20 schrijfstijlen" },
        { title: "Directe generatie", description: "Krijg complete scripts in minder dan 10 seconden" },
        { title: "Onbeperkte revisies", description: "Regenereer secties of hele scripts tot perfectie" },
        { title: "Lengtecontrole", description: "Van 15-seconden clips tot 10-minuten video's, elke lengte" },
        { title: "32 talen", description: "Genereer scripts in een van onze ondersteunde talen" },
      ],
    },
    pl: {
      name: "Generator Scenariuszy AI",
      tagline: "Generuj angażujące scenariusze wideo w sekundy",
      description: "Przekształć swoje pomysły w przekonujące scenariusze wideo za pomocą zaawansowanej AI. Idealny do TikTok, YouTube Shorts, Instagram Reels.",
      detailedDescription: "Nasz Generator Scenariuszy AI rewolucjonizuje tworzenie treści, natychmiast przekształcając pomysły w profesjonalne scenariusze.",
      howItWorks: [
        { title: "Wprowadź swój temat", description: "Powiedz naszej AI, o czym jest twój film. Kilka słów lub szczegółowy brief - cokolwiek ci odpowiada." },
        { title: "Wybierz swój styl", description: "Wybierz ton, długość i format. Swobodny, profesjonalny, edukacyjny lub rozrywkowy - ty decydujesz." },
        { title: "Generuj i dopracuj", description: "Otrzymaj scenariusz natychmiast. Edytuj, regeneruj sekcje lub użyj go tak jak jest. Pełna kontrola twórcza." },
        { title: "Stwórz swój film", description: "Użyj scenariusza z naszym głosem AI, awatarami i edytorem wideo, aby stworzyć kompletny film." },
      ],
      features: [
        { title: "Wiele formatów", description: "Scenariusze zoptymalizowane dla TikTok, YouTube, Instagram i innych" },
        { title: "Konfigurowalny ton", description: "Profesjonalny, swobodny, zabawny, edukacyjny - ponad 20 stylów pisania" },
        { title: "Natychmiastowa generacja", description: "Otrzymuj kompletne scenariusze w mniej niż 10 sekund" },
        { title: "Nieograniczone poprawki", description: "Regeneruj sekcje lub całe scenariusze do perfekcji" },
        { title: "Kontrola długości", description: "Od 15-sekundowych klipów do 10-minutowych filmów, dowolna długość" },
        { title: "32 języki", description: "Generuj scenariusze w dowolnym z naszych obsługiwanych języków" },
      ],
    },
    ja: {
      name: "AIスクリプトジェネレーター",
      tagline: "数秒で魅力的な動画スクリプトを生成",
      description: "高度なAIを使用して、アイデアを魅力的な動画スクリプトに変換します。TikTok、YouTube Shorts、Instagram Reelsに最適。",
      detailedDescription: "当社のAIスクリプトジェネレーターは、アイデアを瞬時にプロフェッショナルなスクリプトに変換し、コンテンツ作成を革新します。",
      howItWorks: [
        { title: "トピックを入力", description: "動画の内容をAIに伝えてください。数語でも詳細なブリーフでも、あなたに合った方法で。" },
        { title: "スタイルを選択", description: "トーン、長さ、フォーマットを選択。カジュアル、プロフェッショナル、教育的、エンターテイメント - あなたが決めます。" },
        { title: "生成と改良", description: "スクリプトを即座に取得。編集、セクションの再生成、またはそのまま使用。完全なクリエイティブコントロール。" },
        { title: "動画を作成", description: "スクリプトをAIボイス、アバター、動画エディターと組み合わせて完全な動画を作成。" },
      ],
      features: [
        { title: "複数のフォーマット", description: "TikTok、YouTube、Instagram向けに最適化されたスクリプト" },
        { title: "カスタマイズ可能なトーン", description: "プロフェッショナル、カジュアル、面白い、教育的 - 20以上のライティングスタイル" },
        { title: "即座の生成", description: "10秒以内で完全なスクリプトを取得" },
        { title: "無制限の修正", description: "セクションまたはスクリプト全体を完璧になるまで再生成" },
        { title: "長さの制御", description: "15秒のクリップから10分の動画まで、任意の長さ" },
        { title: "32言語", description: "サポートされている言語でスクリプトを生成" },
      ],
    },
    ko: {
      name: "AI 스크립트 생성기",
      tagline: "몇 초 만에 매력적인 비디오 스크립트 생성",
      description: "고급 AI를 사용하여 아이디어를 매력적인 비디오 스크립트로 변환하세요. TikTok, YouTube Shorts, Instagram Reels에 완벽합니다.",
      detailedDescription: "당사의 AI 스크립트 생성기는 아이디어를 즉시 전문적인 스크립트로 변환하여 콘텐츠 제작을 혁신합니다.",
      howItWorks: [
        { title: "주제 입력", description: "비디오가 무엇에 관한 것인지 AI에게 알려주세요. 몇 단어든 상세한 브리프든 - 당신에게 맞는 방식으로." },
        { title: "스타일 선택", description: "톤, 길이, 형식을 선택하세요. 캐주얼, 전문적, 교육적, 엔터테인먼트 - 당신이 결정합니다." },
        { title: "생성 및 다듬기", description: "스크립트를 즉시 받으세요. 편집, 섹션 재생성, 또는 그대로 사용. 완전한 창작 통제권." },
        { title: "비디오 만들기", description: "스크립트를 AI 음성, 아바타, 비디오 편집기와 함께 사용하여 완전한 비디오를 만드세요." },
      ],
      features: [
        { title: "다양한 형식", description: "TikTok, YouTube, Instagram 등에 최적화된 스크립트" },
        { title: "맞춤형 톤", description: "전문적, 캐주얼, 재미있는, 교육적 - 20개 이상의 작문 스타일" },
        { title: "즉각적인 생성", description: "10초 이내에 완전한 스크립트 받기" },
        { title: "무제한 수정", description: "섹션 또는 전체 스크립트를 완벽해질 때까지 재생성" },
        { title: "길이 제어", description: "15초 클립부터 10분 비디오까지, 모든 길이" },
        { title: "32개 언어", description: "지원되는 모든 언어로 스크립트 생성" },
      ],
    },
    zh: {
      name: "AI脚本生成器",
      tagline: "几秒钟内生成引人入胜的视频脚本",
      description: "使用先进的AI将您的想法转化为引人注目的视频脚本。非常适合TikTok、YouTube Shorts、Instagram Reels。",
      detailedDescription: "我们的AI脚本生成器通过将想法即时转化为专业脚本，彻底改变了内容创作。",
      howItWorks: [
        { title: "输入您的主题", description: "告诉我们的AI您的视频是关于什么的。几个词或详细的简报 - 任何适合您的方式。" },
        { title: "选择您的风格", description: "选择语调、长度和格式。休闲、专业、教育或娱乐 - 由您决定。" },
        { title: "生成和完善", description: "立即获取脚本。编辑、重新生成部分或直接使用。完全的创意控制。" },
        { title: "创建您的视频", description: "将脚本与我们的AI语音、头像和视频编辑器配合使用，创建完整的视频。" },
      ],
      features: [
        { title: "多种格式", description: "为TikTok、YouTube、Instagram等优化的脚本" },
        { title: "可定制语调", description: "专业、休闲、有趣、教育 - 超过20种写作风格" },
        { title: "即时生成", description: "在10秒内获取完整脚本" },
        { title: "无限修改", description: "重新生成部分或整个脚本直到完美" },
        { title: "长度控制", description: "从15秒片段到10分钟视频，任何长度" },
        { title: "32种语言", description: "用我们支持的任何语言生成脚本" },
      ],
    },
  },
  "ai-voice-generator": {
    es: {
      name: "Generador de Voz IA",
      tagline: "Voces profesionales en más de 50 voces IA",
      description: "Crea locuciones naturales para tus videos usando voces IA avanzadas. Sin equipo de grabación.",
      detailedDescription: "Experimenta locuciones de calidad estudio sin costoso equipo de grabación o actores de voz.",
      howItWorks: [
        { title: "Ingresa Tu Guión", description: "Escribe o pega tu texto. Nuestro motor de voz IA maneja cualquier longitud con naturalidad." },
        { title: "Elige Una Voz", description: "Explora más de 50 voces IA en 32 idiomas. Previsualiza cada una para encontrar la perfecta." },
        { title: "Personaliza Configuración", description: "Ajusta velocidad, tono y énfasis. Añade pausas, música de fondo o efectos de sonido." },
        { title: "Genera y Descarga", description: "Genera tu audio al instante. Descarga en alta calidad MP3 o úsalo directamente en tu video." },
      ],
      features: [
        { title: "50+ Voces IA", description: "Elige entre voces masculinas, femeninas y de carácter con acentos diversos" },
        { title: "32 Idiomas", description: "Genera locuciones en cualquiera de nuestros idiomas soportados" },
        { title: "Personalización de Voz", description: "Controla velocidad, tono, pausas y énfasis para una entrega perfecta" },
        { title: "Generación Instantánea", description: "Obtén tu audio de voz en segundos, sin tiempos de espera" },
        { title: "Música de Fondo", description: "Añade música libre de derechos o sube tu propia pista de fondo" },
        { title: "Audio de Alta Calidad", description: "Exporta en calidad de estudio MP3 a 320kbps o WAV" },
      ],
    },
    de: {
      name: "KI-Stimmen-Generator",
      tagline: "Professionelle Voiceovers mit 50+ KI-Stimmen",
      description: "Erstelle natürlich klingende Voiceovers für deine Videos mit fortschrittlichen KI-Stimmen.",
      detailedDescription: "Erlebe Studioqualität-Voiceovers ohne teures Aufnahmeequipment oder Sprecher.",
      howItWorks: [
        { title: "Gib dein Skript ein", description: "Schreibe oder füge deinen Text ein. Unsere KI-Sprachengine verarbeitet jede Länge natürlich." },
        { title: "Wähle eine Stimme", description: "Durchstöbere über 50 KI-Stimmen in 32 Sprachen. Höre jede an, um die perfekte zu finden." },
        { title: "Passe Einstellungen an", description: "Justiere Geschwindigkeit, Tonhöhe und Betonung. Füge Pausen, Hintergrundmusik oder Soundeffekte hinzu." },
        { title: "Generiere & Lade herunter", description: "Generiere dein Audio sofort. Lade in hoher Qualität MP3 herunter oder verwende es direkt in deinem Video." },
      ],
      features: [
        { title: "50+ KI-Stimmen", description: "Wähle aus männlichen, weiblichen und Charakterstimmen mit verschiedenen Akzenten" },
        { title: "32 Sprachen", description: "Generiere Voiceovers in jeder unserer unterstützten Sprachen" },
        { title: "Stimmenanpassung", description: "Steuere Geschwindigkeit, Tonhöhe, Pausen und Betonung für perfekte Lieferung" },
        { title: "Sofortige Generierung", description: "Erhalte dein Voiceover-Audio in Sekunden, keine Wartezeiten" },
        { title: "Hintergrundmusik", description: "Füge lizenzfreie Musik hinzu oder lade deinen eigenen Hintergrundtrack hoch" },
        { title: "Hochwertige Audio", description: "Exportiere in Studioqualität MP3 bei 320kbps oder WAV" },
      ],
    },
    fr: {
      name: "Générateur de Voix IA",
      tagline: "Voix-off professionnelles avec 50+ voix IA",
      description: "Créez des voix-off naturelles pour vos vidéos en utilisant des voix IA avancées.",
      detailedDescription: "Profitez de voix-off de qualité studio sans équipement coûteux ni doubleurs.",
      howItWorks: [
        { title: "Entrez votre script", description: "Tapez ou collez votre texte. Notre moteur vocal IA gère toute longueur naturellement." },
        { title: "Choisissez une voix", description: "Parcourez plus de 50 voix IA dans 32 langues. Prévisualisez chacune pour trouver la parfaite." },
        { title: "Personnalisez les paramètres", description: "Ajustez la vitesse, le ton et l'emphase. Ajoutez des pauses, de la musique de fond ou des effets sonores." },
        { title: "Générez et téléchargez", description: "Générez votre audio instantanément. Téléchargez en MP3 haute qualité ou utilisez-le directement dans votre vidéo." },
      ],
      features: [
        { title: "50+ voix IA", description: "Choisissez parmi des voix masculines, féminines et de personnages avec divers accents" },
        { title: "32 langues", description: "Générez des voix-off dans l'une de nos langues prises en charge" },
        { title: "Personnalisation vocale", description: "Contrôlez la vitesse, le ton, les pauses et l'emphase pour une livraison parfaite" },
        { title: "Génération instantanée", description: "Obtenez votre audio voix-off en secondes, sans attente" },
        { title: "Musique de fond", description: "Ajoutez de la musique libre de droits ou téléchargez votre propre piste" },
        { title: "Audio haute qualité", description: "Exportez en qualité studio MP3 à 320kbps ou WAV" },
      ],
    },
    pt: {
      name: "Gerador de Voz IA",
      tagline: "Locuções profissionais com mais de 50 vozes IA",
      description: "Crie locuções naturais para seus vídeos usando vozes IA avançadas.",
      detailedDescription: "Experimente locuções de qualidade de estúdio sem equipamento caro ou locutores.",
      howItWorks: [
        { title: "Digite seu roteiro", description: "Digite ou cole seu texto. Nosso motor de voz IA lida com qualquer comprimento naturalmente." },
        { title: "Escolha uma voz", description: "Explore mais de 50 vozes IA em 32 idiomas. Ouça cada uma para encontrar a perfeita." },
        { title: "Personalize as configurações", description: "Ajuste velocidade, tom e ênfase. Adicione pausas, música de fundo ou efeitos sonoros." },
        { title: "Gere e baixe", description: "Gere seu áudio instantaneamente. Baixe em MP3 de alta qualidade ou use diretamente em seu vídeo." },
      ],
      features: [
        { title: "50+ vozes IA", description: "Escolha entre vozes masculinas, femininas e de personagens com diversos sotaques" },
        { title: "32 idiomas", description: "Gere locuções em qualquer um de nossos idiomas suportados" },
        { title: "Personalização de voz", description: "Controle velocidade, tom, pausas e ênfase para entrega perfeita" },
        { title: "Geração instantânea", description: "Obtenha seu áudio de locução em segundos, sem espera" },
        { title: "Música de fundo", description: "Adicione música livre de royalties ou faça upload de sua própria faixa" },
        { title: "Áudio de alta qualidade", description: "Exporte em qualidade de estúdio MP3 a 320kbps ou WAV" },
      ],
    },
    ru: {
      name: "ИИ Генератор Голоса",
      tagline: "Профессиональная озвучка с 50+ ИИ голосами",
      description: "Создавайте естественную озвучку для видео с помощью продвинутых ИИ голосов.",
      detailedDescription: "Получите студийное качество озвучки без дорогого оборудования или дикторов.",
      howItWorks: [
        { title: "Введите сценарий", description: "Напишите или вставьте текст. Наш движок ИИ-голоса естественно обрабатывает любую длину." },
        { title: "Выберите голос", description: "Исследуйте более 50 ИИ-голосов на 32 языках. Прослушайте каждый, чтобы найти идеальный." },
        { title: "Настройте параметры", description: "Регулируйте скорость, тон и акценты. Добавляйте паузы, фоновую музыку или звуковые эффекты." },
        { title: "Генерируйте и скачивайте", description: "Создайте аудио мгновенно. Скачайте в высококачественном MP3 или используйте прямо в видео." },
      ],
      features: [
        { title: "50+ ИИ голосов", description: "Выбирайте из мужских, женских и характерных голосов с разными акцентами" },
        { title: "32 языка", description: "Генерируйте озвучку на любом из поддерживаемых языков" },
        { title: "Настройка голоса", description: "Контролируйте скорость, тон, паузы и акценты для идеальной подачи" },
        { title: "Мгновенная генерация", description: "Получайте аудио за секунды, без ожидания" },
        { title: "Фоновая музыка", description: "Добавляйте музыку без лицензионных отчислений или загружайте свой трек" },
        { title: "Высококачественное аудио", description: "Экспортируйте в студийном качестве MP3 320kbps или WAV" },
      ],
    },
    it: {
      name: "Generatore di Voci IA",
      tagline: "Voci professionali con oltre 50 voci IA",
      description: "Crea doppiaggi naturali per i tuoi video usando voci IA avanzate.",
      detailedDescription: "Sperimenta doppiaggi di qualità studio senza costose attrezzature o doppiatori.",
      howItWorks: [
        { title: "Inserisci il tuo script", description: "Digita o incolla il tuo testo. Il nostro motore vocale IA gestisce qualsiasi lunghezza naturalmente." },
        { title: "Scegli una voce", description: "Esplora oltre 50 voci IA in 32 lingue. Ascolta ognuna per trovare quella perfetta." },
        { title: "Personalizza le impostazioni", description: "Regola velocità, tono ed enfasi. Aggiungi pause, musica di sottofondo o effetti sonori." },
        { title: "Genera e scarica", description: "Genera il tuo audio istantaneamente. Scarica in MP3 alta qualità o usalo direttamente nel tuo video." },
      ],
      features: [
        { title: "50+ voci IA", description: "Scegli tra voci maschili, femminili e di personaggi con accenti diversi" },
        { title: "32 lingue", description: "Genera doppiaggi in una qualsiasi delle nostre lingue supportate" },
        { title: "Personalizzazione vocale", description: "Controlla velocità, tono, pause ed enfasi per una consegna perfetta" },
        { title: "Generazione istantanea", description: "Ottieni il tuo audio voiceover in secondi, senza attese" },
        { title: "Musica di sottofondo", description: "Aggiungi musica royalty-free o carica la tua traccia" },
        { title: "Audio alta qualità", description: "Esporta in qualità studio MP3 a 320kbps o WAV" },
      ],
    },
    nl: {
      name: "AI Stem Generator",
      tagline: "Professionele voice-overs met 50+ AI-stemmen",
      description: "Maak natuurlijk klinkende voice-overs voor je video's met geavanceerde AI-stemmen.",
      detailedDescription: "Ervaar studiokwaliteit voice-overs zonder dure opnameapparatuur of stemacteurs.",
      howItWorks: [
        { title: "Voer je script in", description: "Typ of plak je tekst. Onze AI-spraakengine verwerkt elke lengte natuurlijk." },
        { title: "Kies een stem", description: "Verken 50+ AI-stemmen in 32 talen. Beluister elke stem om de perfecte te vinden." },
        { title: "Pas instellingen aan", description: "Pas snelheid, toonhoogte en nadruk aan. Voeg pauzes, achtergrondmuziek of geluidseffecten toe." },
        { title: "Genereer en download", description: "Genereer je audio direct. Download in hoge kwaliteit MP3 of gebruik het direct in je video." },
      ],
      features: [
        { title: "50+ AI-stemmen", description: "Kies uit mannelijke, vrouwelijke en karakterstemmen met diverse accenten" },
        { title: "32 talen", description: "Genereer voice-overs in een van onze ondersteunde talen" },
        { title: "Stemaanpassing", description: "Beheer snelheid, toonhoogte, pauzes en nadruk voor perfecte levering" },
        { title: "Directe generatie", description: "Krijg je voice-over audio in seconden, geen wachttijd" },
        { title: "Achtergrondmuziek", description: "Voeg royalty-vrije muziek toe of upload je eigen track" },
        { title: "Hoge kwaliteit audio", description: "Exporteer in studiokwaliteit MP3 op 320kbps of WAV" },
      ],
    },
    pl: {
      name: "Generator Głosu AI",
      tagline: "Profesjonalne lektoraty z 50+ głosami AI",
      description: "Twórz naturalne lektoraty do swoich filmów używając zaawansowanych głosów AI.",
      detailedDescription: "Doświadcz lektoratów o jakości studyjnej bez drogiego sprzętu lub lektorów.",
      howItWorks: [
        { title: "Wprowadź swój scenariusz", description: "Wpisz lub wklej tekst. Nasz silnik głosowy AI naturalnie obsługuje dowolną długość." },
        { title: "Wybierz głos", description: "Przeglądaj ponad 50 głosów AI w 32 językach. Odsłuchaj każdy, aby znaleźć idealny." },
        { title: "Dostosuj ustawienia", description: "Dostosuj prędkość, ton i akcenty. Dodaj pauzy, muzykę w tle lub efekty dźwiękowe." },
        { title: "Generuj i pobierz", description: "Wygeneruj audio natychmiast. Pobierz w wysokiej jakości MP3 lub użyj bezpośrednio w swoim filmie." },
      ],
      features: [
        { title: "50+ głosów AI", description: "Wybieraj spośród głosów męskich, żeńskich i charakterystycznych z różnymi akcentami" },
        { title: "32 języki", description: "Generuj lektoraty w dowolnym z naszych obsługiwanych języków" },
        { title: "Dostosowanie głosu", description: "Kontroluj prędkość, ton, pauzy i akcenty dla idealnej dostawy" },
        { title: "Natychmiastowa generacja", description: "Otrzymaj audio lektoratu w sekundy, bez czekania" },
        { title: "Muzyka w tle", description: "Dodaj muzykę bez tantiem lub prześlij własny utwór" },
        { title: "Wysoka jakość audio", description: "Eksportuj w jakości studyjnej MP3 320kbps lub WAV" },
      ],
    },
    ja: {
      name: "AIボイスジェネレーター",
      tagline: "50以上のAI音声でプロのナレーション",
      description: "高度なAI音声を使用して、動画に自然なナレーションを作成します。",
      detailedDescription: "高価な録音機器や声優なしで、スタジオ品質のナレーションを体験できます。",
      howItWorks: [
        { title: "スクリプトを入力", description: "テキストを入力または貼り付け。AIボイスエンジンがあらゆる長さを自然に処理します。" },
        { title: "音声を選択", description: "32言語で50以上のAI音声を探索。完璧な音声を見つけるためにプレビュー。" },
        { title: "設定をカスタマイズ", description: "速度、ピッチ、強調を調整。ポーズ、BGM、効果音を追加。" },
        { title: "生成とダウンロード", description: "即座にオーディオを生成。高品質MP3でダウンロードまたは動画で直接使用。" },
      ],
      features: [
        { title: "50以上のAI音声", description: "様々なアクセントの男性、女性、キャラクター音声から選択" },
        { title: "32言語", description: "サポートされている任意の言語でナレーションを生成" },
        { title: "音声カスタマイズ", description: "完璧な配信のために速度、ピッチ、ポーズ、強調を制御" },
        { title: "即時生成", description: "数秒でナレーションオーディオを取得、待ち時間なし" },
        { title: "BGM", description: "ロイヤリティフリー音楽を追加または独自のトラックをアップロード" },
        { title: "高品質オーディオ", description: "スタジオ品質MP3 320kbpsまたはWAVでエクスポート" },
      ],
    },
    ko: {
      name: "AI 음성 생성기",
      tagline: "50개 이상의 AI 음성으로 전문 내레이션",
      description: "고급 AI 음성을 사용하여 비디오에 자연스러운 내레이션을 만드세요.",
      detailedDescription: "비싼 녹음 장비나 성우 없이 스튜디오 품질의 내레이션을 경험하세요.",
      howItWorks: [
        { title: "스크립트 입력", description: "텍스트를 입력하거나 붙여넣으세요. AI 음성 엔진이 모든 길이를 자연스럽게 처리합니다." },
        { title: "음성 선택", description: "32개 언어로 50개 이상의 AI 음성을 탐색하세요. 완벽한 음성을 찾기 위해 미리 들어보세요." },
        { title: "설정 맞춤화", description: "속도, 피치, 강조를 조절하세요. 일시정지, 배경음악, 효과음을 추가하세요." },
        { title: "생성 및 다운로드", description: "즉시 오디오를 생성하세요. 고품질 MP3로 다운로드하거나 비디오에서 직접 사용하세요." },
      ],
      features: [
        { title: "50개 이상의 AI 음성", description: "다양한 악센트의 남성, 여성, 캐릭터 음성 중 선택" },
        { title: "32개 언어", description: "지원되는 모든 언어로 내레이션 생성" },
        { title: "음성 맞춤화", description: "완벽한 전달을 위해 속도, 피치, 일시정지, 강조 제어" },
        { title: "즉각적인 생성", description: "몇 초 만에 내레이션 오디오 받기, 대기 시간 없음" },
        { title: "배경 음악", description: "로열티 프리 음악 추가 또는 자신의 트랙 업로드" },
        { title: "고품질 오디오", description: "스튜디오 품질 MP3 320kbps 또는 WAV로 내보내기" },
      ],
    },
    zh: {
      name: "AI语音生成器",
      tagline: "50多种AI语音的专业配音",
      description: "使用先进的AI语音为您的视频创建自然的配音。",
      detailedDescription: "无需昂贵的录音设备或配音演员，即可体验录音室级别的配音。",
      howItWorks: [
        { title: "输入您的脚本", description: "输入或粘贴您的文本。我们的AI语音引擎自然处理任何长度。" },
        { title: "选择声音", description: "浏览32种语言的50多种AI声音。试听每种以找到完美的声音。" },
        { title: "自定义设置", description: "调整速度、音调和重音。添加停顿、背景音乐或音效。" },
        { title: "生成并下载", description: "即时生成音频。下载高质量MP3或直接在视频中使用。" },
      ],
      features: [
        { title: "50多种AI声音", description: "从各种口音的男性、女性和角色声音中选择" },
        { title: "32种语言", description: "用我们支持的任何语言生成配音" },
        { title: "声音定制", description: "控制速度、音调、停顿和重音以实现完美交付" },
        { title: "即时生成", description: "几秒钟内获取配音音频，无需等待" },
        { title: "背景音乐", description: "添加免版税音乐或上传您自己的曲目" },
        { title: "高质量音频", description: "以录音室品质MP3 320kbps或WAV导出" },
      ],
    },
  },
  "ai-avatar-creator": {
    es: {
      name: "Creador de Avatares IA",
      tagline: "Crea avatares IA realistas para tus videos",
      description: "Genera avatares digitales fotorrealistas que hablan tu guión. Sin filmación, sin cámara.",
      detailedDescription: "Crea contenido de video profesional sin ponerte frente a la cámara.",
      howItWorks: [
        { title: "Elige un Avatar", description: "Navega por más de 100 avatares IA o crea uno personalizado. Encuentra la persona perfecta para tu marca." },
        { title: "Añade Tu Guión", description: "Escribe tu guión o usa nuestro generador IA. El avatar sincronizará labios con cualquier texto." },
        { title: "Personaliza Apariencia", description: "Ajusta ropa, fondo, iluminación y más. Haz que el avatar coincida con tu estilo." },
        { title: "Genera Tu Video", description: "Renderiza tu video con avatar en minutos. Descarga o comparte directamente en redes sociales." },
      ],
      features: [
        { title: "100+ Avatares", description: "Elige de avatares diversos de todas las edades, etnias y estilos" },
        { title: "Avatares Personalizados", description: "Crea tu propio avatar digital desde una foto o video" },
        { title: "Sincronización Labial Natural", description: "La IA sincroniza perfectamente los labios con tu audio en cualquier idioma" },
        { title: "Múltiples Gestos", description: "Gestos naturales con manos, movimientos de cabeza y expresiones faciales" },
        { title: "Fondos Personalizados", description: "Usa cualquier imagen o video como fondo para tu avatar" },
        { title: "Renderizado Rápido", description: "Genera videos de avatar en minutos, no horas" },
      ],
    },
    de: {
      name: "KI-Avatar-Ersteller",
      tagline: "Erstelle realistische KI-Avatare für deine Videos",
      description: "Generiere fotorealistische digitale Avatare, die dein Skript sprechen. Keine Kamera nötig.",
      detailedDescription: "Erstelle professionelle Videoinhalte, ohne vor der Kamera zu stehen.",
      howItWorks: [
        { title: "Wähle einen Avatar", description: "Durchstöbere über 100 KI-Avatare oder erstelle einen eigenen. Finde die perfekte Person für deine Marke." },
        { title: "Füge dein Skript hinzu", description: "Schreibe dein Skript oder nutze unseren KI-Generator. Der Avatar synchronisiert die Lippen zu jedem Text." },
        { title: "Passe das Aussehen an", description: "Passe Kleidung, Hintergrund, Beleuchtung und mehr an. Lass den Avatar zu deinem Stil passen." },
        { title: "Generiere dein Video", description: "Rendere dein Avatar-Video in Minuten. Lade herunter oder teile direkt in sozialen Medien." },
      ],
      features: [
        { title: "100+ Avatare", description: "Wähle aus diversen Avataren aller Altersgruppen, Ethnien und Stile" },
        { title: "Eigene Avatare", description: "Erstelle deinen eigenen digitalen Avatar aus einem Foto oder Video" },
        { title: "Natürliche Lippensynchronisation", description: "KI synchronisiert Lippen perfekt mit deinem Audio in jeder Sprache" },
        { title: "Verschiedene Gesten", description: "Natürliche Handgesten, Kopfbewegungen und Gesichtsausdrücke" },
        { title: "Eigene Hintergründe", description: "Verwende jedes Bild oder Video als Hintergrund für deinen Avatar" },
        { title: "Schnelles Rendering", description: "Generiere Avatar-Videos in Minuten, nicht Stunden" },
      ],
    },
    fr: {
      name: "Créateur d'Avatars IA",
      tagline: "Créez des avatars IA réalistes pour vos vidéos",
      description: "Générez des avatars numériques photoréalistes qui parlent votre script. Sans caméra.",
      detailedDescription: "Créez du contenu vidéo professionnel sans jamais passer devant la caméra.",
      howItWorks: [
        { title: "Choisissez un avatar", description: "Parcourez plus de 100 avatars IA ou créez le vôtre. Trouvez la persona parfaite pour votre marque." },
        { title: "Ajoutez votre script", description: "Écrivez votre script ou utilisez notre générateur IA. L'avatar synchronisera les lèvres avec n'importe quel texte." },
        { title: "Personnalisez l'apparence", description: "Ajustez les vêtements, l'arrière-plan, l'éclairage et plus. Faites correspondre l'avatar à votre style." },
        { title: "Générez votre vidéo", description: "Rendez votre vidéo avatar en minutes. Téléchargez ou partagez directement sur les réseaux sociaux." },
      ],
      features: [
        { title: "100+ avatars", description: "Choisissez parmi des avatars divers de tous âges, ethnies et styles" },
        { title: "Avatars personnalisés", description: "Créez votre propre avatar numérique à partir d'une photo ou vidéo" },
        { title: "Synchronisation labiale naturelle", description: "L'IA synchronise parfaitement les lèvres avec votre audio dans toute langue" },
        { title: "Gestes multiples", description: "Gestes naturels des mains, mouvements de tête et expressions faciales" },
        { title: "Arrière-plans personnalisés", description: "Utilisez n'importe quelle image ou vidéo comme arrière-plan pour votre avatar" },
        { title: "Rendu rapide", description: "Générez des vidéos avatar en minutes, pas en heures" },
      ],
    },
    pt: {
      name: "Criador de Avatares IA",
      tagline: "Crie avatares IA realistas para seus vídeos",
      description: "Gere avatares digitais fotorrealistas que falam seu roteiro. Sem câmera necessária.",
      detailedDescription: "Crie conteúdo de vídeo profissional sem nunca aparecer na câmera.",
      howItWorks: [
        { title: "Escolha um avatar", description: "Navegue por mais de 100 avatares IA ou crie o seu próprio. Encontre a persona perfeita para sua marca." },
        { title: "Adicione seu roteiro", description: "Escreva seu roteiro ou use nosso gerador IA. O avatar sincronizará lábios com qualquer texto." },
        { title: "Personalize a aparência", description: "Ajuste roupas, fundo, iluminação e mais. Faça o avatar combinar com seu estilo." },
        { title: "Gere seu vídeo", description: "Renderize seu vídeo de avatar em minutos. Baixe ou compartilhe diretamente nas redes sociais." },
      ],
      features: [
        { title: "100+ avatares", description: "Escolha entre avatares diversos de todas as idades, etnias e estilos" },
        { title: "Avatares personalizados", description: "Crie seu próprio avatar digital a partir de uma foto ou vídeo" },
        { title: "Sincronização labial natural", description: "IA sincroniza lábios perfeitamente com seu áudio em qualquer idioma" },
        { title: "Múltiplos gestos", description: "Gestos naturais de mãos, movimentos de cabeça e expressões faciais" },
        { title: "Fundos personalizados", description: "Use qualquer imagem ou vídeo como fundo para seu avatar" },
        { title: "Renderização rápida", description: "Gere vídeos de avatar em minutos, não horas" },
      ],
    },
    ru: {
      name: "Создатель ИИ Аватаров",
      tagline: "Создавайте реалистичные ИИ аватары для видео",
      description: "Генерируйте фотореалистичные аватары, говорящие ваш сценарий. Без камеры.",
      detailedDescription: "Создавайте профессиональный видеоконтент, не появляясь перед камерой.",
      howItWorks: [
        { title: "Выберите аватар", description: "Просмотрите более 100 ИИ-аватаров или создайте свой. Найдите идеальный образ для вашего бренда." },
        { title: "Добавьте сценарий", description: "Напишите сценарий или используйте наш ИИ-генератор. Аватар синхронизирует губы с любым текстом." },
        { title: "Настройте внешность", description: "Настройте одежду, фон, освещение и многое другое. Сделайте аватар соответствующим вашему стилю." },
        { title: "Создайте видео", description: "Отрендерите видео с аватаром за минуты. Скачайте или поделитесь напрямую в соцсетях." },
      ],
      features: [
        { title: "100+ аватаров", description: "Выбирайте из разнообразных аватаров всех возрастов, этносов и стилей" },
        { title: "Пользовательские аватары", description: "Создайте собственный цифровой аватар из фото или видео" },
        { title: "Естественная синхронизация губ", description: "ИИ идеально синхронизирует губы с аудио на любом языке" },
        { title: "Множество жестов", description: "Естественные жесты руками, движения головой и выражения лица" },
        { title: "Пользовательские фоны", description: "Используйте любое изображение или видео в качестве фона" },
        { title: "Быстрый рендеринг", description: "Создавайте видео с аватаром за минуты, не часы" },
      ],
    },
    it: {
      name: "Creatore di Avatar IA",
      tagline: "Crea avatar IA realistici per i tuoi video",
      description: "Genera avatar digitali fotorealistici che parlano il tuo script. Senza telecamera.",
      detailedDescription: "Crea contenuti video professionali senza mai metterti davanti alla telecamera.",
      howItWorks: [
        { title: "Scegli un avatar", description: "Sfoglia oltre 100 avatar IA o crea il tuo. Trova la persona perfetta per il tuo brand." },
        { title: "Aggiungi il tuo script", description: "Scrivi il tuo script o usa il nostro generatore IA. L'avatar sincronizzerà le labbra con qualsiasi testo." },
        { title: "Personalizza l'aspetto", description: "Regola abbigliamento, sfondo, illuminazione e altro. Fai corrispondere l'avatar al tuo stile." },
        { title: "Genera il tuo video", description: "Renderizza il tuo video avatar in pochi minuti. Scarica o condividi direttamente sui social." },
      ],
      features: [
        { title: "100+ avatar", description: "Scegli tra avatar diversi di tutte le età, etnie e stili" },
        { title: "Avatar personalizzati", description: "Crea il tuo avatar digitale da una foto o video" },
        { title: "Sincronizzazione labiale naturale", description: "L'IA sincronizza perfettamente le labbra con il tuo audio in qualsiasi lingua" },
        { title: "Gesti multipli", description: "Gesti naturali delle mani, movimenti della testa ed espressioni facciali" },
        { title: "Sfondi personalizzati", description: "Usa qualsiasi immagine o video come sfondo per il tuo avatar" },
        { title: "Rendering veloce", description: "Genera video avatar in minuti, non ore" },
      ],
    },
    nl: {
      name: "AI Avatar Maker",
      tagline: "Maak realistische AI-avatars voor je video's",
      description: "Genereer fotorealistische digitale avatars die je script spreken. Geen camera nodig.",
      detailedDescription: "Maak professionele video-inhoud zonder ooit voor de camera te staan.",
      howItWorks: [
        { title: "Kies een avatar", description: "Blader door 100+ AI-avatars of maak je eigen. Vind de perfecte persona voor je merk." },
        { title: "Voeg je script toe", description: "Schrijf je script of gebruik onze AI-generator. De avatar synchroniseert lippen met elke tekst." },
        { title: "Pas het uiterlijk aan", description: "Pas kleding, achtergrond, verlichting en meer aan. Laat de avatar passen bij jouw stijl." },
        { title: "Genereer je video", description: "Render je avatar-video in minuten. Download of deel direct op sociale media." },
      ],
      features: [
        { title: "100+ avatars", description: "Kies uit diverse avatars van alle leeftijden, etniciteiten en stijlen" },
        { title: "Aangepaste avatars", description: "Maak je eigen digitale avatar van een foto of video" },
        { title: "Natuurlijke lipsynchronisatie", description: "AI synchroniseert lippen perfect met je audio in elke taal" },
        { title: "Meerdere gebaren", description: "Natuurlijke handgebaren, hoofdbewegingen en gezichtsuitdrukkingen" },
        { title: "Aangepaste achtergronden", description: "Gebruik elke afbeelding of video als achtergrond voor je avatar" },
        { title: "Snelle rendering", description: "Genereer avatar-video's in minuten, niet uren" },
      ],
    },
    pl: {
      name: "Kreator Awatarów AI",
      tagline: "Twórz realistyczne awatary AI do swoich filmów",
      description: "Generuj fotorealistyczne awatary cyfrowe, które mówią twój scenariusz. Bez kamery.",
      detailedDescription: "Twórz profesjonalne treści wideo bez stawania przed kamerą.",
      howItWorks: [
        { title: "Wybierz awatar", description: "Przeglądaj ponad 100 awatarów AI lub stwórz własny. Znajdź idealną personę dla swojej marki." },
        { title: "Dodaj swój scenariusz", description: "Napisz scenariusz lub użyj naszego generatora AI. Awatar zsynchronizuje usta z dowolnym tekstem." },
        { title: "Dostosuj wygląd", description: "Dostosuj ubranie, tło, oświetlenie i więcej. Dopasuj awatar do swojego stylu." },
        { title: "Wygeneruj swój film", description: "Wyrenderuj film z awatarem w minuty. Pobierz lub udostępnij bezpośrednio w mediach społecznościowych." },
      ],
      features: [
        { title: "100+ awatarów", description: "Wybieraj spośród różnorodnych awatarów w każdym wieku, etniczności i stylu" },
        { title: "Własne awatary", description: "Stwórz własny cyfrowy awatar ze zdjęcia lub filmu" },
        { title: "Naturalna synchronizacja ust", description: "AI idealnie synchronizuje usta z audio w każdym języku" },
        { title: "Wiele gestów", description: "Naturalne gesty rąk, ruchy głowy i wyrazy twarzy" },
        { title: "Własne tła", description: "Użyj dowolnego obrazu lub wideo jako tła dla swojego awatara" },
        { title: "Szybkie renderowanie", description: "Generuj filmy z awatarem w minuty, nie godziny" },
      ],
    },
    ja: {
      name: "AIアバタークリエイター",
      tagline: "動画用のリアルなAIアバターを作成",
      description: "スクリプトを話すフォトリアリスティックなデジタルアバターを生成。カメラ不要。",
      detailedDescription: "カメラの前に立つことなく、プロフェッショナルな動画コンテンツを作成できます。",
      howItWorks: [
        { title: "アバターを選択", description: "100以上のAIアバターを閲覧するか、独自に作成。ブランドに最適なペルソナを見つけてください。" },
        { title: "スクリプトを追加", description: "スクリプトを書くか、AIジェネレーターを使用。アバターはどんなテキストにもリップシンクします。" },
        { title: "外観をカスタマイズ", description: "服装、背景、照明などを調整。アバターをあなたのスタイルに合わせます。" },
        { title: "動画を生成", description: "数分でアバター動画をレンダリング。ダウンロードまたはSNSに直接共有。" },
      ],
      features: [
        { title: "100以上のアバター", description: "あらゆる年齢、民族、スタイルの多様なアバターから選択" },
        { title: "カスタムアバター", description: "写真や動画から独自のデジタルアバターを作成" },
        { title: "自然なリップシンク", description: "AIがどの言語でもオーディオと完璧にリップシンク" },
        { title: "複数のジェスチャー", description: "自然な手のジェスチャー、頭の動き、表情" },
        { title: "カスタム背景", description: "任意の画像や動画をアバターの背景として使用" },
        { title: "高速レンダリング", description: "数時間ではなく数分でアバター動画を生成" },
      ],
    },
    ko: {
      name: "AI 아바타 크리에이터",
      tagline: "비디오용 사실적인 AI 아바타 생성",
      description: "스크립트를 말하는 사실적인 디지털 아바타를 생성하세요. 카메라 불필요.",
      detailedDescription: "카메라 앞에 서지 않고도 전문적인 비디오 콘텐츠를 만들 수 있습니다.",
      howItWorks: [
        { title: "아바타 선택", description: "100개 이상의 AI 아바타를 탐색하거나 직접 만드세요. 브랜드에 완벽한 페르소나를 찾으세요." },
        { title: "스크립트 추가", description: "스크립트를 작성하거나 AI 생성기를 사용하세요. 아바타가 모든 텍스트에 립싱크합니다." },
        { title: "외관 맞춤화", description: "의상, 배경, 조명 등을 조정하세요. 아바타를 당신의 스타일에 맞추세요." },
        { title: "비디오 생성", description: "몇 분 만에 아바타 비디오를 렌더링하세요. 다운로드하거나 소셜 미디어에 직접 공유하세요." },
      ],
      features: [
        { title: "100개 이상의 아바타", description: "모든 연령, 민족, 스타일의 다양한 아바타 중 선택" },
        { title: "맞춤 아바타", description: "사진이나 비디오에서 나만의 디지털 아바타 생성" },
        { title: "자연스러운 립싱크", description: "AI가 모든 언어에서 오디오와 완벽하게 립싱크" },
        { title: "다양한 제스처", description: "자연스러운 손 제스처, 머리 움직임, 표정" },
        { title: "맞춤 배경", description: "아바타 배경으로 모든 이미지나 비디오 사용" },
        { title: "빠른 렌더링", description: "몇 시간이 아닌 몇 분 만에 아바타 비디오 생성" },
      ],
    },
    zh: {
      name: "AI头像创建器",
      tagline: "为视频创建逼真的AI头像",
      description: "生成能说出您脚本的逼真数字头像。无需摄像头。",
      detailedDescription: "无需出镜即可创建专业视频内容。",
      howItWorks: [
        { title: "选择头像", description: "浏览100多个AI头像或创建您自己的。找到适合您品牌的完美形象。" },
        { title: "添加您的脚本", description: "编写脚本或使用我们的AI生成器。头像将与任何文本进行口型同步。" },
        { title: "自定义外观", description: "调整服装、背景、灯光等。让头像与您的风格匹配。" },
        { title: "生成您的视频", description: "几分钟内渲染头像视频。下载或直接分享到社交媒体。" },
      ],
      features: [
        { title: "100多个头像", description: "从各种年龄、种族和风格的多样化头像中选择" },
        { title: "自定义头像", description: "从照片或视频创建您自己的数字头像" },
        { title: "自然口型同步", description: "AI完美地将口型与任何语言的音频同步" },
        { title: "多种手势", description: "自然的手势、头部动作和面部表情" },
        { title: "自定义背景", description: "使用任何图像或视频作为头像的背景" },
        { title: "快速渲染", description: "几分钟而非几小时内生成头像视频" },
      ],
    },
  },
  "image-to-video-ai": {
    es: {
      name: "Imagen a Video IA",
      tagline: "Transforma cualquier foto en video IA impresionante",
      description: "Convierte tus fotos en videos profesionales con efectos de movimiento cinematográfico. Crea contenido viral para TikTok, Instagram Reels y YouTube Shorts.",
      detailedDescription: "Transforma imágenes estáticas en videos cautivadores con la tecnología de Imagen a Video IA de Hyreel.",
      howItWorks: [
        { title: "Sube Tu Imagen", description: "Elige cualquier foto de tu galería o toma una nueva. Fotos de productos, retratos, paisajes—cualquier imagen funciona." },
        { title: "Selecciona Efecto de Movimiento", description: "Elige entre efectos IA: acercamiento/alejamiento, Órbita 360°, Seguir Sujeto, Parallax 3D, Dolly Zoom y más." },
        { title: "Personaliza Duración y Estilo", description: "Configura la duración del video (2-30 segundos), ajusta la velocidad de movimiento, añade música y afina los ajustes de generación IA." },
        { title: "Genera y Comparte", description: "La IA genera tu video en segundos. Comparte en TikTok, Instagram, YouTube o guarda en tu dispositivo." }
      ],
      features: [
        { title: "Efecto Zoom IA", description: "Zoom cinematográfico suave que añade profundidad y enfoque a cualquier imagen" },
        { title: "Movimiento Órbita 360°", description: "Impresionante movimiento orbital de cámara alrededor de tu sujeto para videos dinámicos" },
        { title: "IA Seguir Sujeto", description: "La IA rastrea y sigue al sujeto principal con movimientos de cámara naturales" },
        { title: "Efecto Parallax 3D", description: "Crea profundidad y dimensión realistas desde imágenes 2D planas" },
        { title: "Generación Instantánea", description: "Obtén tu video IA en menos de 10 segundos—sin esperas ni retrasos de renderizado" },
        { title: "App iOS para creación móvil", description: "Crea y comparte videos directamente desde tu iPhone—optimizado para creadores en movimiento" }
      ],
    },
    de: {
      name: "Bild zu Video KI",
      tagline: "Verwandle jedes Foto in atemberaubendes KI-Video",
      description: "Verwandle deine Fotos in professionelle Videos mit kinematischen Bewegungseffekten. Erstelle virale Inhalte für TikTok, Instagram Reels und YouTube Shorts.",
      detailedDescription: "Verwandle statische Bilder in fesselnde Videos mit Hyreels Bild-zu-Video-KI-Technologie.",
      howItWorks: [
        { title: "Bild Hochladen", description: "Wähle ein Foto aus deiner Galerie oder mache ein neues. Produktfotos, Porträts, Landschaften—jedes Bild funktioniert." },
        { title: "Bewegungseffekt Wählen", description: "Wähle aus KI-Effekten: Heran-/Herauszoomen, 360° Orbit, Subjekt Folgen, 3D Parallax, Dolly Zoom und mehr." },
        { title: "Dauer und Stil Anpassen", description: "Stelle die Videodauer ein (2-30 Sekunden), passe die Bewegungsgeschwindigkeit an, füge Musik hinzu und optimiere die KI-Generierungseinstellungen." },
        { title: "Generieren und Teilen", description: "KI generiert dein Video in Sekunden. Teile auf TikTok, Instagram, YouTube oder speichere auf deinem Gerät." }
      ],
      features: [
        { title: "KI-Zoom-Effekt", description: "Sanfter cinematischer Zoom, der jedem Bild Tiefe und Fokus verleiht" },
        { title: "360° Orbit-Bewegung", description: "Atemberaubende orbitale Kamerabewegung um dein Motiv für dynamische Videos" },
        { title: "KI Subjekt-Tracking", description: "KI verfolgt und folgt dem Hauptmotiv mit natürlichen Kamerabewegungen" },
        { title: "3D Parallax-Effekt", description: "Erzeuge realistische Tiefe und Dimension aus flachen 2D-Bildern" },
        { title: "Sofortige Generierung", description: "Erhalte dein KI-Video in unter 10 Sekunden—keine Wartezeit oder Rendering-Verzögerungen" },
        { title: "iOS-App für mobiles Erstellen", description: "Erstelle und teile Videos direkt von deinem iPhone—optimiert für Content-Ersteller unterwegs" }
      ],
    },
    fr: {
      name: "Image vers Vidéo IA",
      tagline: "Transformez n'importe quelle photo en vidéo IA époustouflante",
      description: "Convertissez vos photos en vidéos professionnelles avec des effets de mouvement cinématographiques. Créez du contenu viral pour TikTok, Instagram Reels et YouTube Shorts.",
      detailedDescription: "Transformez des images statiques en vidéos captivantes avec la technologie Image vers Vidéo IA de Hyreel.",
      howItWorks: [
        { title: "Téléchargez Votre Image", description: "Choisissez une photo de votre galerie ou prenez-en une nouvelle. Photos de produits, portraits, paysages—n'importe quelle image fonctionne." },
        { title: "Sélectionnez l'Effet de Mouvement", description: "Choisissez parmi les effets IA: zoom avant/arrière, Orbite 360°, Suivi de Sujet, Parallax 3D, Dolly Zoom et plus." },
        { title: "Personnalisez Durée et Style", description: "Définissez la durée de la vidéo (2-30 secondes), ajustez la vitesse de mouvement, ajoutez de la musique et affinez les paramètres de génération IA." },
        { title: "Générez et Partagez", description: "L'IA génère votre vidéo en secondes. Partagez sur TikTok, Instagram, YouTube ou enregistrez sur votre appareil." }
      ],
      features: [
        { title: "Effet Zoom IA", description: "Zoom cinématographique fluide qui ajoute profondeur et focus à n'importe quelle image" },
        { title: "Mouvement Orbite 360°", description: "Mouvement orbital de caméra époustouflant autour de votre sujet pour des vidéos dynamiques" },
        { title: "Suivi de Sujet IA", description: "L'IA suit le sujet principal avec des mouvements de caméra naturels" },
        { title: "Effet Parallax 3D", description: "Créez une profondeur et dimension réalistes à partir d'images 2D plates" },
        { title: "Génération Instantanée", description: "Obtenez votre vidéo IA en moins de 10 secondes—pas d'attente ni de délais de rendu" },
        { title: "App iOS pour création mobile", description: "Créez et partagez des vidéos directement depuis votre iPhone—optimisé pour les créateurs en déplacement" }
      ],
    },
    pt: {
      name: "Imagem para Vídeo IA",
      tagline: "Transforme qualquer foto em vídeo IA impressionante",
      description: "Converta suas fotos em vídeos profissionais com efeitos de movimento cinematográficos. Crie conteúdo viral para TikTok, Instagram Reels e YouTube Shorts.",
      detailedDescription: "Transforme imagens estáticas em vídeos cativantes com a tecnologia de Imagem para Vídeo IA da Hyreel.",
      howItWorks: [
        { title: "Envie Sua Imagem", description: "Escolha uma foto da sua galeria ou tire uma nova. Fotos de produtos, retratos, paisagens—qualquer imagem funciona." },
        { title: "Selecione o Efeito de Movimento", description: "Escolha entre efeitos IA: aproximação/afastamento, Órbita 360°, Seguir Sujeito, Parallax 3D, Dolly Zoom e mais." },
        { title: "Personalize Duração e Estilo", description: "Defina a duração do vídeo (2-30 segundos), ajuste a velocidade do movimento, adicione música e refine as configurações de geração IA." },
        { title: "Gere e Compartilhe", description: "A IA gera seu vídeo em segundos. Compartilhe no TikTok, Instagram, YouTube ou salve no seu dispositivo." }
      ],
      features: [
        { title: "Efeito Zoom IA", description: "Zoom cinematográfico suave que adiciona profundidade e foco a qualquer imagem" },
        { title: "Movimento Órbita 360°", description: "Movimento orbital de câmera impressionante ao redor do seu sujeito para vídeos dinâmicos" },
        { title: "Rastreamento de Sujeito IA", description: "A IA rastreia e segue o sujeito principal com movimentos de câmera naturais" },
        { title: "Efeito Parallax 3D", description: "Crie profundidade e dimensão realistas a partir de imagens 2D planas" },
        { title: "Geração Instantânea", description: "Obtenha seu vídeo IA em menos de 10 segundos—sem espera ou atrasos de renderização" },
        { title: "App iOS para criação móvel", description: "Crie e compartilhe vídeos diretamente do seu iPhone—otimizado para criadores em movimento" }
      ],
    },
    ru: {
      name: "Изображение в Видео ИИ",
      tagline: "Превратите любое фото в потрясающее ИИ видео",
      description: "Конвертируйте фото в профессиональные видео с кинематографическими эффектами движения. Создавайте вирусный контент для TikTok, Instagram Reels и YouTube Shorts.",
      detailedDescription: "Превращайте статичные изображения в захватывающие видео с технологией Изображение в Видео ИИ от Hyreel.",
      howItWorks: [
        { title: "Загрузите Изображение", description: "Выберите фото из галереи или сделайте новое. Фото продуктов, портреты, пейзажи—любое изображение подойдет." },
        { title: "Выберите Эффект Движения", description: "Выбирайте из ИИ-эффектов: приближение/отдаление, орбита 360°, слежение за объектом, 3D-параллакс, Dolly Zoom и другие." },
        { title: "Настройте Длительность и Стиль", description: "Установите длительность видео (2-30 секунд), настройте скорость движения, добавьте музыку и отрегулируйте параметры генерации ИИ." },
        { title: "Генерируйте и Делитесь", description: "ИИ создает видео за секунды. Делитесь в TikTok, Instagram, YouTube или сохраняйте на устройство." }
      ],
      features: [
        { title: "ИИ Эффект Zoom", description: "Плавный кинематографический зум, добавляющий глубину и фокус любому изображению" },
        { title: "Движение Орбита 360°", description: "Потрясающее орбитальное движение камеры вокруг объекта для динамичных видео" },
        { title: "ИИ Слежение за Объектом", description: "ИИ отслеживает и следует за главным объектом с естественными движениями камеры" },
        { title: "3D Эффект Параллакс", description: "Создавайте реалистичную глубину и объем из плоских 2D изображений" },
        { title: "Мгновенная Генерация", description: "Получите ИИ видео менее чем за 10 секунд—без ожидания и задержек рендеринга" },
        { title: "iOS-приложение для мобильного создания", description: "Создавайте и делитесь видео прямо с iPhone—оптимизировано для создателей в движении" }
      ],
    },
    it: {
      name: "Immagine a Video IA",
      tagline: "Trasforma qualsiasi foto in video IA straordinario",
      description: "Converti le tue foto in video professionali con effetti di movimento cinematografici. Crea contenuti virali per TikTok, Instagram Reels e YouTube Shorts.",
      detailedDescription: "Trasforma immagini statiche in video accattivanti con la tecnologia Immagine a Video IA di Hyreel.",
      howItWorks: [
        { title: "Carica la Tua Immagine", description: "Scegli una foto dalla tua galleria o scattane una nuova. Foto di prodotti, ritratti, paesaggi—qualsiasi immagine funziona." },
        { title: "Seleziona l'Effetto di Movimento", description: "Scegli tra effetti IA: avvicinamento/allontanamento, Orbita 360°, Tracciamento Soggetto, Parallax 3D, Dolly Zoom e altro." },
        { title: "Personalizza Durata e Stile", description: "Imposta la durata del video (2-30 secondi), regola la velocità del movimento, aggiungi musica e affina le impostazioni di generazione IA." },
        { title: "Genera e Condividi", description: "L'IA genera il tuo video in secondi. Condividi su TikTok, Instagram, YouTube o salva sul tuo dispositivo." }
      ],
      features: [
        { title: "Effetto Zoom IA", description: "Zoom cinematografico fluido che aggiunge profondità e focus a qualsiasi immagine" },
        { title: "Movimento Orbita 360°", description: "Straordinario movimento orbitale della telecamera attorno al soggetto per video dinamici" },
        { title: "Tracciamento Soggetto IA", description: "L'IA traccia e segue il soggetto principale con movimenti naturali della telecamera" },
        { title: "Effetto Parallax 3D", description: "Crea profondità e dimensione realistiche da immagini 2D piatte" },
        { title: "Generazione Istantanea", description: "Ottieni il tuo video IA in meno di 10 secondi—nessuna attesa o ritardi di rendering" },
        { title: "App iOS per creare in mobilità", description: "Crea e condividi video direttamente dal tuo iPhone—ottimizzato per creatori in movimento" }
      ],
    },
    nl: {
      name: "Afbeelding naar Video AI",
      tagline: "Verander elke foto in verbluffende AI-video",
      description: "Zet je foto's om in professionele video's met cinematische bewegingseffecten. Maak virale content voor TikTok, Instagram Reels en YouTube Shorts.",
      detailedDescription: "Transformeer statische afbeeldingen in boeiende video's met Hyreel's Afbeelding naar Video AI-technologie.",
      howItWorks: [
        { title: "Upload Je Afbeelding", description: "Kies een foto uit je galerij of maak een nieuwe. Productfoto's, portretten, landschappen—elke afbeelding werkt." },
        { title: "Selecteer Bewegingseffect", description: "Kies uit AI-effecten: inzoomen/uitzoomen, 360° Orbit, Onderwerp Volgen, 3D Parallax, Dolly Zoom en meer." },
        { title: "Pas Duur en Stijl Aan", description: "Stel de videoduur in (2-30 seconden), pas de bewegingssnelheid aan, voeg muziek toe en verfijn de AI-generatie-instellingen." },
        { title: "Genereer en Deel", description: "AI genereert je video in seconden. Deel op TikTok, Instagram, YouTube of sla op naar je apparaat." }
      ],
      features: [
        { title: "AI Zoom Effet", description: "Vloeiende cinematische zoom die diepte en focus toevoegt aan elke afbeelding" },
        { title: "360° Orbit Beweging", description: "Verbluffende orbitale camerabeweging rond je onderwerp voor dynamische video's" },
        { title: "AI Onderwerp Tracking", description: "AI volgt het hoofdonderwerp met natuurlijke camerabewegingen" },
        { title: "3D Parallax Effect", description: "Creëer realistische diepte en dimensie uit platte 2D-afbeeldingen" },
        { title: "Directe Generatie", description: "Krijg je AI-video in minder dan 10 seconden—geen wachten of rendering-vertragingen" },
        { title: "iOS-app voor mobiel maken", description: "Maak en deel video's rechtstreeks vanaf je iPhone—geoptimaliseerd voor makers onderweg" }
      ],
    },
    pl: {
      name: "Obraz na Wideo AI",
      tagline: "Przekształć dowolne zdjęcie w oszałamiające wideo AI",
      description: "Konwertuj zdjęcia na profesjonalne filmy z kinematograficznymi efektami ruchu. Twórz wiralowe treści dla TikTok, Instagram Reels i YouTube Shorts.",
      detailedDescription: "Przekształcaj statyczne obrazy w wciągające filmy dzięki technologii Obraz na Wideo AI od Hyreel.",
      howItWorks: [
        { title: "Prześlij Swój Obraz", description: "Wybierz zdjęcie z galerii lub zrób nowe. Zdjęcia produktów, portrety, krajobrazy—każdy obraz zadziała." },
        { title: "Wybierz Efekt Ruchu", description: "Wybierz spośród efektów AI: przybliżanie/oddalanie, Orbita 360°, Śledzenie Obiektu, Parallax 3D, Dolly Zoom i więcej." },
        { title: "Dostosuj Czas Trwania i Styl", description: "Ustaw czas trwania wideo (2-30 sekund), dostosuj prędkość ruchu, dodaj muzykę i dopracuj ustawienia generacji AI." },
        { title: "Generuj i Udostępniaj", description: "AI generuje Twoje wideo w sekundy. Udostępniaj na TikTok, Instagram, YouTube lub zapisz na urządzeniu." }
      ],
      features: [
        { title: "Efekt Zoom AI", description: "Płynny kinematograficzny zoom dodający głębię i skupienie każdemu obrazowi" },
        { title: "Ruch Orbita 360°", description: "Oszałamiający orbitalny ruch kamery wokół obiektu dla dynamicznych filmów" },
        { title: "Śledzenie Obiektu AI", description: "AI śledzi i podąża za głównym obiektem z naturalnymi ruchami kamery" },
        { title: "Efekt Parallax 3D", description: "Twórz realistyczną głębię i wymiar z płaskich obrazów 2D" },
        { title: "Natychmiastowa Generacja", description: "Otrzymaj swoje wideo AI w mniej niż 10 sekund—bez czekania i opóźnień renderowania" },
        { title: "Aplikacja iOS do tworzenia mobilnego", description: "Twórz i udostępniaj filmy bezpośrednio z iPhone'a—zoptymalizowane dla twórców w ruchu" }
      ],
    },
    ja: {
      name: "画像から動画へAI",
      tagline: "あらゆる写真を素晴らしいAI動画に変換",
      description: "写真をシネマティックなモーションエフェクトを備えたプロフェッショナルな動画に変換。TikTok、Instagram Reels、YouTube Shorts用のバイラルコンテンツを作成。",
      detailedDescription: "Hyreelの画像から動画へAI技術で、静止画像を魅力的な動画に変換します。",
      howItWorks: [
        { title: "画像をアップロード", description: "ギャラリーから写真を選ぶか、新しく撮影。商品写真、ポートレート、風景—どんな画像でもOK。" },
        { title: "モーションエフェクトを選択", description: "AIエフェクトから選択: ズームイン/アウト、360°オービット、被写体追従、3Dパララックス、ドリーズームなど。" },
        { title: "長さとスタイルをカスタマイズ", description: "動画の長さを設定（2〜30秒）、動きの速度を調整、音楽を追加、AI生成設定を微調整。" },
        { title: "生成して共有", description: "AIが数秒で動画を生成。TikTok、Instagram、YouTubeで共有、またはデバイスに保存。" }
      ],
      features: [
        { title: "AIズームエフェクト", description: "どんな画像にも深みとフォーカスを加える滑らかなシネマティックズーム" },
        { title: "360°オービットモーション", description: "ダイナミックな動画のための被写体周りの見事な軌道カメラ移動" },
        { title: "AI被写体トラッキング", description: "AIが自然なカメラの動きでメイン被写体を追跡・追従" },
        { title: "3Dパララックスエフェクト", description: "平面の2D画像からリアルな奥行きと立体感を創出" },
        { title: "瞬時の生成", description: "AI動画を10秒以内で取得—待ち時間やレンダリング遅延なし" },
        { title: "モバイルファーストiOSアプリ", description: "iPhoneから直接動画を作成・共有—外出先のクリエイター向けに最適化" }
      ],
    },
    ko: {
      name: "이미지에서 비디오로 AI",
      tagline: "모든 사진을 놀라운 AI 비디오로 변환",
      description: "사진을 시네마틱 모션 효과가 있는 전문적인 비디오로 변환하세요. TikTok, Instagram Reels, YouTube Shorts용 바이럴 콘텐츠를 만드세요.",
      detailedDescription: "Hyreel의 이미지에서 비디오로 AI 기술로 정적 이미지를 매력적인 비디오로 변환합니다.",
      howItWorks: [
        { title: "이미지 업로드", description: "갤러리에서 사진을 선택하거나 새로 촬영하세요. 제품 사진, 인물 사진, 풍경—어떤 이미지든 가능합니다." },
        { title: "모션 효과 선택", description: "AI 효과 중 선택: 줌 인/아웃, 360° 오빗, 피사체 추적, 3D 패럴랙스, 돌리 줌 등." },
        { title: "길이와 스타일 커스터마이즈", description: "비디오 길이 설정(2-30초), 움직임 속도 조정, 음악 추가, AI 생성 설정 미세 조정." },
        { title: "생성 및 공유", description: "AI가 몇 초 만에 비디오를 생성합니다. TikTok, Instagram, YouTube에 공유하거나 기기에 저장하세요." }
      ],
      features: [
        { title: "AI 줌 효과", description: "모든 이미지에 깊이와 포커스를 더하는 부드러운 시네마틱 줌" },
        { title: "360° 오빗 모션", description: "다이나믹한 비디오를 위한 피사체 주변의 놀라운 궤도 카메라 움직임" },
        { title: "AI 피사체 트래킹", description: "AI가 자연스러운 카메라 움직임으로 메인 피사체를 추적 및 추종" },
        { title: "3D 패럴랙스 효과", description: "평면 2D 이미지에서 사실적인 깊이와 차원을 생성" },
        { title: "즉각적인 생성", description: "AI 비디오를 10초 이내에 받으세요—대기 시간이나 렌더링 지연 없음" },
        { title: "모바일 퍼스트 iOS 앱", description: "iPhone에서 직접 비디오를 만들고 공유—이동 중인 크리에이터를 위해 최적화" }
      ],
    },
    zh: {
      name: "图像转视频AI",
      tagline: "将任何照片转换为令人惊叹的AI视频",
      description: "将照片转换为具有电影级运动效果的专业视频。为TikTok、Instagram Reels和YouTube Shorts创建病毒内容。",
      detailedDescription: "使用Hyreel的图像转视频AI技术，将静态图像转化为引人入胜的视频。",
      howItWorks: [
        { title: "上传您的图像", description: "从相册选择照片或拍摄新照片。产品照片、人像、风景——任何图像都可以。" },
        { title: "选择运动效果", description: "从AI效果中选择：放大/缩小、360°环绕、主体跟踪、3D视差、推拉变焦等。" },
        { title: "自定义时长和风格", description: "设置视频时长（2-30秒），调整运动速度，添加音乐，微调AI生成设置。" },
        { title: "生成并分享", description: "AI在几秒钟内生成您的视频。分享到TikTok、Instagram、YouTube或保存到设备。" }
      ],
      features: [
        { title: "AI缩放效果", description: "流畅的电影级缩放，为任何图像增添深度和焦点" },
        { title: "360°环绕运动", description: "围绕主体的令人惊叹的轨道相机运动，打造动感视频" },
        { title: "AI主体追踪", description: "AI以自然的相机移动追踪并跟随主体" },
        { title: "3D视差效果", description: "从平面2D图像创建逼真的深度和维度" },
        { title: "即时生成", description: "在10秒内获得您的AI视频——无需等待或渲染延迟" },
        { title: "移动优先iOS应用", description: "直接从iPhone创建和分享视频——为移动创作者优化" }
      ],
    },
  },
  "ai-tiktok-video-generator": {
    es: {
      name: "Generador de Videos TikTok IA",
      tagline: "Crea videos virales de TikTok con IA",
      description: "Genera videos optimizados para TikTok desde fotos. Efectos de tendencia, música y formatos perfectos para el algoritmo.",
      detailedDescription: "Crea contenido de TikTok que se vuelve viral con nuestro generador de videos IA optimizado para TikTok.",
      howItWorks: [
        { title: "Sube Tu Foto", description: "Elige cualquier imagen—foto de producto, selfie o foto creativa. Nuestra IA la optimiza para el formato 9:16 de TikTok automáticamente." },
        { title: "Elige Efecto Viral", description: "Selecciona entre efectos de tendencia en TikTok: Revelación Zoom, Exhibición Órbita, Cámara Seguimiento, Pop-out 3D y más animaciones virales." },
        { title: "Añade Música y Subtítulos", description: "Elige sonidos de tendencia o añade tu propio audio. Incluye textos superpuestos y subtítulos para máximo engagement." },
        { title: "Exporta a TikTok", description: "Exporta en formato perfecto para TikTok. Comparte desde iOS, listo para el FYP." }
      ],
      features: [
        { title: "Efectos Optimizados para Virales", description: "Efectos IA probados para aumentar engagement y aparición en FYP" },
        { title: "Formato Perfecto 9:16", description: "Auto-recorte y optimización para el formato vertical de TikTok" },
        { title: "Integración de Sonidos Trending", description: "Acceso a sonidos virales y música sincronizada con tu video" },
        { title: "Generación en 10 Segundos", description: "Crea videos listos para TikTok más rápido que apps de edición" },
        { title: "Compartir Fácil a TikTok", description: "Exporta y comparte a TikTok desde iOS directamente" },
        { title: "Subtítulos Automáticos", description: "Añade textos superpuestos y subtítulos atractivos automáticamente" }
      ],
    },
    de: {
      name: "KI TikTok Video Generator",
      tagline: "Erstelle virale TikTok-Videos mit KI",
      description: "Generiere für TikTok optimierte Videos aus Fotos. Trendeffekte, Musik und perfekte Formate für den Algorithmus.",
      detailedDescription: "Erstelle virale TikTok-Inhalte mit unserem für TikTok optimierten KI-Videogenerator.",
      howItWorks: [
        { title: "Foto Hochladen", description: "Wähle ein beliebiges Bild—Produktfoto, Selfie oder kreatives Foto. Unsere KI optimiert es automatisch für TikToks 9:16-Format." },
        { title: "Viralen Effekt Wählen", description: "Wähle aus TikTok-Trendeffekten: Zoom-Enthüllung, Orbit-Präsentation, Follow-Cam, 3D-Pop-out und mehr virale Animationen." },
        { title: "Musik & Untertitel Hinzufügen", description: "Wähle Trendsounds oder füge eigenes Audio hinzu. Füge Text-Overlays und Untertitel für maximales Engagement hinzu." },
        { title: "Nach TikTok Exportieren", description: "Exportiere im perfekten TikTok-Format. Teile über iOS, bereit für die FYP." }
      ],
      features: [
        { title: "Viral-Optimierte Effekte", description: "KI-Effekte, die nachweislich Engagement und FYP-Platzierung steigern" },
        { title: "Perfektes 9:16-Format", description: "Auto-Zuschnitt und Optimierung für TikToks vertikales Videoformat" },
        { title: "Trending Sound Integration", description: "Zugang zu viralen Sounds und Musik, synchronisiert mit deinem Video" },
        { title: "10-Sekunden-Generierung", description: "Erstelle TikTok-fertige Videos schneller als Bearbeitungs-Apps" },
        { title: "Einfaches TikTok-Teilen", description: "Exportiere und teile direkt zu TikTok über iOS" },
        { title: "Auto-Untertitel", description: "Füge automatisch ansprechende Text-Overlays und Untertitel hinzu" }
      ],
    },
    fr: {
      name: "Générateur de Vidéos TikTok IA",
      tagline: "Créez des vidéos TikTok virales avec l'IA",
      description: "Générez des vidéos optimisées pour TikTok à partir de photos. Effets tendance, musique et formats parfaits pour l'algorithme.",
      detailedDescription: "Créez du contenu TikTok viral avec notre générateur vidéo IA optimisé pour TikTok.",
      howItWorks: [
        { title: "Téléchargez Votre Photo", description: "Choisissez n'importe quelle image—photo produit, selfie ou photo créative. Notre IA l'optimise automatiquement pour le format 9:16 de TikTok." },
        { title: "Choisissez l'Effet Viral", description: "Sélectionnez parmi les effets tendance TikTok: Révélation Zoom, Présentation Orbite, Caméra Suivi, Pop-out 3D et plus d'animations virales." },
        { title: "Ajoutez Musique & Sous-titres", description: "Choisissez des sons tendance ou ajoutez votre propre audio. Incluez des superpositions de texte et sous-titres pour un engagement maximum." },
        { title: "Exportez vers TikTok", description: "Exportez au format TikTok parfait. Partagez via iOS, prêt pour le FYP." }
      ],
      features: [
        { title: "Effets Optimisés Viraux", description: "Effets IA prouvés pour booster l'engagement et le placement FYP" },
        { title: "Format Parfait 9:16", description: "Recadrage et optimisation auto pour le format vidéo vertical TikTok" },
        { title: "Intégration Sons Tendance", description: "Accès aux sons viraux et musique synchronisés avec votre vidéo" },
        { title: "Génération en 10 Secondes", description: "Créez des vidéos prêtes pour TikTok plus vite que les apps d'édition" },
        { title: "Partage Facile TikTok", description: "Exportez et partagez vers TikTok directement via iOS" },
        { title: "Sous-titres Auto", description: "Ajoutez automatiquement des superpositions de texte et sous-titres engageants" }
      ],
    },
    pt: {
      name: "Gerador de Vídeos TikTok IA",
      tagline: "Crie vídeos virais do TikTok com IA",
      description: "Gere vídeos otimizados para TikTok a partir de fotos. Efeitos de tendência, música e formatos perfeitos para o algoritmo.",
      detailedDescription: "Crie conteúdo viral do TikTok com nosso gerador de vídeos IA otimizado para TikTok.",
      howItWorks: [
        { title: "Envie Sua Foto", description: "Escolha qualquer imagem—foto de produto, selfie ou foto criativa. Nossa IA otimiza automaticamente para o formato 9:16 do TikTok." },
        { title: "Escolha Efeito Viral", description: "Selecione entre efeitos de tendência do TikTok: Revelação Zoom, Exibição Órbita, Câmera Seguimento, Pop-out 3D e mais animações virais." },
        { title: "Adicione Música & Legendas", description: "Escolha sons de tendência ou adicione seu próprio áudio. Inclua sobreposições de texto e legendas para máximo engajamento." },
        { title: "Exporte para TikTok", description: "Exporte no formato perfeito do TikTok. Compartilhe via iOS, pronto para o FYP." }
      ],
      features: [
        { title: "Efeitos Otimizados para Virais", description: "Efeitos IA comprovados para aumentar engajamento e posicionamento FYP" },
        { title: "Formato Perfeito 9:16", description: "Auto-corte e otimização para o formato de vídeo vertical do TikTok" },
        { title: "Integração de Sons Trending", description: "Acesso a sons virais e música sincronizada com seu vídeo" },
        { title: "Geração em 10 Segundos", description: "Crie vídeos prontos para TikTok mais rápido que apps de edição" },
        { title: "Compartilhamento Fácil TikTok", description: "Exporte e compartilhe para TikTok diretamente via iOS" },
        { title: "Legendas Automáticas", description: "Adicione automaticamente sobreposições de texto e legendas envolventes" }
      ],
    },
    ru: {
      name: "ИИ Генератор Видео для TikTok",
      tagline: "Создавайте вирусные видео TikTok с ИИ",
      description: "Генерируйте оптимизированные для TikTok видео из фото. Трендовые эффекты, музыка и идеальные форматы для алгоритма.",
      detailedDescription: "Создавайте вирусный контент TikTok с нашим ИИ генератором видео, оптимизированным для TikTok.",
      howItWorks: [
        { title: "Загрузите Фото", description: "Выберите любое изображение—фото продукта, селфи или креативное фото. Наш ИИ автоматически оптимизирует его для формата 9:16 TikTok." },
        { title: "Выберите Вирусный Эффект", description: "Выбирайте из трендовых эффектов TikTok: Zoom-раскрытие, Орбита-презентация, Follow-камера, 3D-всплытие и другие вирусные анимации." },
        { title: "Добавьте Музыку и Субтитры", description: "Выберите трендовые звуки или добавьте собственное аудио. Добавьте текстовые наложения и субтитры для максимальной вовлеченности." },
        { title: "Экспортируйте в TikTok", description: "Экспортируйте в идеальном формате TikTok. Делитесь через iOS, готово для FYP." }
      ],
      features: [
        { title: "Вирусно-Оптимизированные Эффекты", description: "ИИ эффекты, доказанно повышающие вовлеченность и попадание в FYP" },
        { title: "Идеальный Формат 9:16", description: "Авто-обрезка и оптимизация для вертикального формата TikTok" },
        { title: "Интеграция Трендовых Звуков", description: "Доступ к вирусным звукам и музыке, синхронизированной с видео" },
        { title: "Генерация за 10 Секунд", description: "Создавайте видео для TikTok быстрее, чем в приложениях для редактирования" },
        { title: "Простой Экспорт в TikTok", description: "Экспортируйте и делитесь в TikTok напрямую через iOS" },
        { title: "Авто-Субтитры", description: "Автоматически добавляйте привлекательные текстовые наложения и субтитры" }
      ],
    },
    it: {
      name: "Generatore Video TikTok IA",
      tagline: "Crea video TikTok virali con l'IA",
      description: "Genera video ottimizzati per TikTok dalle foto. Effetti di tendenza, musica e formati perfetti per l'algoritmo.",
      detailedDescription: "Crea contenuti TikTok virali con il nostro generatore video IA ottimizzato per TikTok.",
      howItWorks: [
        { title: "Carica la Tua Foto", description: "Scegli qualsiasi immagine—foto prodotto, selfie o foto creativa. La nostra IA la ottimizza automaticamente per il formato 9:16 di TikTok." },
        { title: "Scegli l'Effetto Virale", description: "Seleziona tra effetti di tendenza TikTok: Rivelazione Zoom, Presentazione Orbita, Follow Cam, Pop-out 3D e altre animazioni virali." },
        { title: "Aggiungi Musica & Sottotitoli", description: "Scegli suoni di tendenza o aggiungi il tuo audio. Includi sovrapposizioni di testo e sottotitoli per massimo engagement." },
        { title: "Esporta su TikTok", description: "Esporta nel formato perfetto per TikTok. Condividi via iOS, pronto per il FYP." }
      ],
      features: [
        { title: "Effetti Ottimizzati Virali", description: "Effetti IA provati per aumentare engagement e posizionamento FYP" },
        { title: "Formato Perfetto 9:16", description: "Auto-ritaglio e ottimizzazione per il formato video verticale TikTok" },
        { title: "Integrazione Suoni Trending", description: "Accesso a suoni virali e musica sincronizzata con il tuo video" },
        { title: "Generazione in 10 Secondi", description: "Crea video pronti per TikTok più veloce delle app di editing" },
        { title: "Condivisione Facile TikTok", description: "Esporta e condividi su TikTok direttamente via iOS" },
        { title: "Sottotitoli Auto", description: "Aggiungi automaticamente sovrapposizioni di testo e sottotitoli coinvolgenti" }
      ],
    },
    nl: {
      name: "AI TikTok Video Generator",
      tagline: "Maak virale TikTok-video's met AI",
      description: "Genereer voor TikTok geoptimaliseerde video's uit foto's. Trending effecten, muziek en perfecte formaten voor het algoritme.",
      detailedDescription: "Maak virale TikTok-content met onze voor TikTok geoptimaliseerde AI-videogenerator.",
      howItWorks: [
        { title: "Upload Je Foto", description: "Kies een willekeurige afbeelding—productfoto, selfie of creatieve foto. Onze AI optimaliseert automatisch voor TikToks 9:16-formaat." },
        { title: "Kies Viraal Effect", description: "Selecteer uit TikTok-trending effecten: Zoom-onthulling, Orbit-showcase, Follow-cam, 3D-pop-out en meer virale animaties." },
        { title: "Voeg Muziek & Ondertitels Toe", description: "Kies trending geluiden of voeg je eigen audio toe. Voeg tekstoverlays en ondertitels toe voor maximale engagement." },
        { title: "Exporteer naar TikTok", description: "Exporteer in perfect TikTok-formaat. Deel via iOS, klaar voor de FYP." }
      ],
      features: [
        { title: "Viraal-Geoptimaliseerde Effecten", description: "AI-effecten bewezen om engagement en FYP-plaatsing te verhogen" },
        { title: "Perfect 9:16 Formaat", description: "Auto-bijsnijden en optimaliseren voor TikToks verticale videoformaat" },
        { title: "Trending Sound Integratie", description: "Toegang tot virale geluiden en muziek gesynchroniseerd met je video" },
        { title: "10-Seconden Generatie", description: "Maak TikTok-klare video's sneller dan bewerkings-apps" },
        { title: "Makkelijk TikTok Delen", description: "Exporteer en deel naar TikTok direct via iOS" },
        { title: "Auto Ondertitels", description: "Voeg automatisch aantrekkelijke tekstoverlays en ondertitels toe" }
      ],
    },
    pl: {
      name: "Generator Wideo TikTok AI",
      tagline: "Twórz wiralowe filmy TikTok z AI",
      description: "Generuj zoptymalizowane dla TikTok filmy ze zdjęć. Trendowe efekty, muzyka i idealne formaty dla algorytmu.",
      detailedDescription: "Twórz wiralowe treści TikTok z naszym generatorem wideo AI zoptymalizowanym dla TikTok.",
      howItWorks: [
        { title: "Prześlij Swoje Zdjęcie", description: "Wybierz dowolny obraz—zdjęcie produktu, selfie lub kreatywne zdjęcie. Nasza AI automatycznie optymalizuje je dla formatu 9:16 TikToka." },
        { title: "Wybierz Efekt Wiralowy", description: "Wybierz spośród trendowych efektów TikTok: Ujawnienie Zoom, Pokaz Orbita, Follow Cam, 3D Pop-out i więcej wiralowych animacji." },
        { title: "Dodaj Muzykę i Napisy", description: "Wybierz trendowe dźwięki lub dodaj własne audio. Dodaj nakładki tekstowe i napisy dla maksymalnego zaangażowania." },
        { title: "Eksportuj do TikToka", description: "Eksportuj w idealnym formacie TikTok. Udostępniaj przez iOS, gotowe na FYP." }
      ],
      features: [
        { title: "Efekty Zoptymalizowane pod Wirale", description: "Efekty AI sprawdzone w zwiększaniu zaangażowania i pozycji FYP" },
        { title: "Idealny Format 9:16", description: "Auto-kadrowanie i optymalizacja dla pionowego formatu wideo TikToka" },
        { title: "Integracja Trendowych Dźwięków", description: "Dostęp do wiralowych dźwięków i muzyki zsynchronizowanej z Twoim wideo" },
        { title: "Generacja w 10 Sekund", description: "Twórz filmy gotowe na TikTok szybciej niż aplikacje do edycji" },
        { title: "Łatwe Udostępnianie TikTok", description: "Eksportuj i udostępniaj na TikTok bezpośrednio przez iOS" },
        { title: "Auto Napisy", description: "Automatycznie dodawaj atrakcyjne nakładki tekstowe i napisy" }
      ],
    },
    ja: {
      name: "AI TikTok動画ジェネレーター",
      tagline: "AIでバイラルTikTok動画を作成",
      description: "写真からTikTok最適化動画を生成。トレンドエフェクト、音楽、アルゴリズムに最適なフォーマット。",
      detailedDescription: "TikTok最適化AIビデオジェネレーターでバイラルTikTokコンテンツを作成。",
      howItWorks: [
        { title: "写真をアップロード", description: "どんな画像でもOK—商品写真、セルフィー、クリエイティブ写真。AIがTikTokの9:16フォーマットに自動最適化。" },
        { title: "バイラルエフェクトを選択", description: "TikTokトレンドエフェクトから選択: ズーム・リビール、オービット・ショーケース、フォローカム、3Dポップアウトなど。" },
        { title: "音楽とキャプションを追加", description: "トレンドサウンドを選ぶか独自のオーディオを追加。最大エンゲージメントのためテキストオーバーレイとキャプションを含める。" },
        { title: "TikTokにエクスポート", description: "完璧なTikTokフォーマットでエクスポート。iOSで共有、FYP準備完了。" }
      ],
      features: [
        { title: "バイラル最適化エフェクト", description: "エンゲージメントとFYP掲載を高めることが実証されたAIエフェクト" },
        { title: "完璧な9:16フォーマット", description: "TikTokの縦型動画フォーマット用に自動トリミング・最適化" },
        { title: "トレンドサウンド統合", description: "動画に同期されたバイラルサウンドと音楽にアクセス" },
        { title: "10秒で生成", description: "編集アプリより速くTikTok対応動画を作成" },
        { title: "簡単TikTok共有", description: "iOSから直接TikTokにエクスポート・共有" },
        { title: "自動キャプション", description: "魅力的なテキストオーバーレイとキャプションを自動追加" }
      ],
    },
    ko: {
      name: "AI TikTok 비디오 생성기",
      tagline: "AI로 바이럴 TikTok 비디오 생성",
      description: "사진에서 TikTok 최적화 비디오를 생성하세요. 트렌드 효과, 음악, 알고리즘에 완벽한 형식.",
      detailedDescription: "TikTok 최적화 AI 비디오 생성기로 바이럴 TikTok 콘텐츠를 만드세요.",
      howItWorks: [
        { title: "사진 업로드", description: "어떤 이미지든 선택하세요—제품 사진, 셀피, 크리에이티브 사진. AI가 TikTok의 9:16 형식에 자동 최적화합니다." },
        { title: "바이럴 효과 선택", description: "TikTok 트렌드 효과 중 선택: 줌 리빌, 오빗 쇼케이스, 팔로우 캠, 3D 팝아웃 등 바이럴 입증 애니메이션." },
        { title: "음악 & 자막 추가", description: "트렌드 사운드를 선택하거나 자신만의 오디오를 추가하세요. 최대 참여를 위해 텍스트 오버레이와 자막을 포함하세요." },
        { title: "TikTok으로 내보내기", description: "완벽한 TikTok 형식으로 내보내기. iOS로 공유, FYP 준비 완료." }
      ],
      features: [
        { title: "바이럴 최적화 효과", description: "참여도와 FYP 배치를 높이는 것으로 입증된 AI 효과" },
        { title: "완벽한 9:16 형식", description: "TikTok의 세로 비디오 형식에 맞게 자동 자르기 및 최적화" },
        { title: "트렌드 사운드 통합", description: "비디오와 동기화된 바이럴 사운드 및 음악에 접근" },
        { title: "10초 생성", description: "편집 앱보다 빠르게 TikTok 준비 비디오 생성" },
        { title: "쉬운 TikTok 공유", description: "iOS에서 TikTok으로 직접 내보내기 및 공유" },
        { title: "자동 자막", description: "매력적인 텍스트 오버레이와 자막을 자동으로 추가" }
      ],
    },
    zh: {
      name: "AI TikTok视频生成器",
      tagline: "用AI创建病毒式TikTok视频",
      description: "从照片生成TikTok优化视频。流行效果、音乐和适合算法的完美格式。",
      detailedDescription: "使用我们为TikTok优化的AI视频生成器创建病毒式TikTok内容。",
      howItWorks: [
        { title: "上传您的照片", description: "选择任何图像——产品照片、自拍或创意照片。我们的AI会自动优化为TikTok的9:16格式。" },
        { title: "选择病毒效果", description: "从TikTok流行效果中选择：缩放揭示、环绕展示、跟随相机、3D弹出等经过验证的病毒动画。" },
        { title: "添加音乐和字幕", description: "选择流行声音或添加您自己的音频。添加文字叠加和字幕以获得最大参与度。" },
        { title: "导出到TikTok", description: "以完美的TikTok格式导出。通过iOS分享，准备好上FYP。" }
      ],
      features: [
        { title: "病毒优化效果", description: "经证实能提高参与度和FYP展示的AI效果" },
        { title: "完美9:16格式", description: "自动裁剪和优化TikTok的垂直视频格式" },
        { title: "流行声音集成", description: "访问与您的视频同步的病毒声音和音乐" },
        { title: "10秒生成", description: "比编辑应用更快地创建TikTok就绪视频" },
        { title: "轻松TikTok分享", description: "通过iOS直接导出并分享到TikTok" },
        { title: "自动字幕", description: "自动添加吸引人的文字叠加和字幕" }
      ],
    },
  },
  "ai-instagram-reels-maker": {
    es: {
      name: "Creador de Reels Instagram IA",
      tagline: "Crea Reels de Instagram virales con IA",
      description: "Genera Reels perfectos desde fotos. Optimizado para el algoritmo de Instagram con efectos de tendencia.",
      detailedDescription: "Domina Instagram Reels con nuestro creador de videos IA diseñado específicamente para Instagram.",
      howItWorks: [
        { title: "Selecciona Tu Mejor Foto", description: "Elige cualquier imagen de alta calidad. Productos, retratos, fotos de viajes—Hyreel las hace todas listas para Reels." },
        { title: "Aplica Efecto de Movimiento IA", description: "Elige entre efectos optimizados para Instagram: Zoom elegante, Órbita suave, Seguimiento dinámico, Profundidad parallax." },
        { title: "Personaliza y Marca", description: "Añade los colores de tu marca, textos superpuestos y elige entre música curada amigable con Instagram." },
        { title: "Comparte en Instagram", description: "Exporta en formato perfecto para Reels (9:16). Comparte a Instagram desde iOS directamente." }
      ],
      features: [
        { title: "Optimizado para Instagram", description: "Efectos y formatos diseñados específicamente para el algoritmo de Reels" },
        { title: "Presets Estéticos", description: "Hermosas gradaciones de color y estilos que combinan con la estética de Instagram" },
        { title: "Movimiento que Aumenta Engagement", description: "Patrones de movimiento IA probados para aumentar tiempo de visualización y compartidos" },
        { title: "Compartir Fácil a Instagram", description: "Exporta y comparte a Instagram Reels y Stories desde iOS" },
        { title: "Herramientas de Texto y Caption", description: "Añade textos superpuestos elegantes que combinan con tu marca" },
        { title: "Biblioteca de Música Instagram", description: "Acceso a música segura para Instagram y audio de tendencia" }
      ],
    },
    de: {
      name: "KI Instagram Reels Maker",
      tagline: "Erstelle virale Instagram Reels mit KI",
      description: "Generiere perfekte Reels aus Fotos. Optimiert für den Instagram-Algorithmus mit Trendeffekten.",
      detailedDescription: "Meistere Instagram Reels mit unserem KI-Video-Ersteller, speziell für Instagram entwickelt.",
      howItWorks: [
        { title: "Wähle Dein Bestes Foto", description: "Wähle ein beliebiges hochwertiges Bild. Produkte, Porträts, Reisefotos—Hyreel macht sie alle Reels-fertig." },
        { title: "Wende KI-Bewegungseffekt An", description: "Wähle aus Instagram-optimierten Effekten: Eleganter Zoom, Sanfte Orbit, Dynamisches Folgen, Parallax-Tiefe." },
        { title: "Anpassen & Branden", description: "Füge deine Markenfarben, Text-Overlays hinzu und wähle aus kuratierter Instagram-freundlicher Musik." },
        { title: "Auf Instagram Teilen", description: "Exportiere im perfekten Reels-Format (9:16). Teile über iOS direkt auf Instagram." }
      ],
      features: [
        { title: "Instagram-Optimiert", description: "Effekte und Formate speziell für den Reels-Algorithmus entwickelt" },
        { title: "Ästhetische Presets", description: "Schöne Farbabstufungen und Stile passend zur Instagram-Ästhetik" },
        { title: "Engagement-Steigernde Bewegung", description: "KI-Bewegungsmuster, die nachweislich Wiedergabezeit und Shares erhöhen" },
        { title: "Einfaches Instagram-Teilen", description: "Exportiere und teile zu Instagram Reels und Stories über iOS" },
        { title: "Text- & Caption-Tools", description: "Füge stilvolle Text-Overlays hinzu, die zu deiner Marke passen" },
        { title: "Instagram-Musikbibliothek", description: "Zugang zu Instagram-sicherer Musik und Trending-Audio" }
      ],
    },
    fr: {
      name: "Créateur de Reels Instagram IA",
      tagline: "Créez des Reels Instagram viraux avec l'IA",
      description: "Générez des Reels parfaits à partir de photos. Optimisé pour l'algorithme Instagram avec des effets tendance.",
      detailedDescription: "Maîtrisez Instagram Reels avec notre créateur vidéo IA conçu spécifiquement pour Instagram.",
      howItWorks: [
        { title: "Sélectionnez Votre Meilleure Photo", description: "Choisissez n'importe quelle image haute qualité. Produits, portraits, photos de voyage—Hyreel les rend toutes prêtes pour Reels." },
        { title: "Appliquez l'Effet de Mouvement IA", description: "Choisissez parmi les effets optimisés Instagram: Zoom élégant, Orbite fluide, Suivi dynamique, Profondeur parallax." },
        { title: "Personnalisez & Brandez", description: "Ajoutez vos couleurs de marque, superpositions de texte et choisissez parmi une musique curatée adaptée à Instagram." },
        { title: "Partagez sur Instagram", description: "Exportez au format parfait pour Reels (9:16). Partagez sur Instagram directement via iOS." }
      ],
      features: [
        { title: "Optimisé Instagram", description: "Effets et formats conçus spécifiquement pour l'algorithme Reels" },
        { title: "Préréglages Esthétiques", description: "Belles gradations de couleurs et styles correspondant à l'esthétique Instagram" },
        { title: "Mouvement Boostant l'Engagement", description: "Motifs de mouvement IA prouvés pour augmenter le temps de visionnage et les partages" },
        { title: "Partage Facile Instagram", description: "Exportez et partagez vers Instagram Reels et Stories via iOS" },
        { title: "Outils Texte & Légende", description: "Ajoutez des superpositions de texte élégantes correspondant à votre marque" },
        { title: "Bibliothèque Musicale Instagram", description: "Accès à la musique sûre Instagram et audio tendance" }
      ],
    },
    pt: {
      name: "Criador de Reels Instagram IA",
      tagline: "Crie Reels do Instagram virais com IA",
      description: "Gere Reels perfeitos a partir de fotos. Otimizado para o algoritmo do Instagram com efeitos de tendência.",
      detailedDescription: "Domine Instagram Reels com nosso criador de vídeos IA projetado especificamente para Instagram.",
      howItWorks: [
        { title: "Selecione Sua Melhor Foto", description: "Escolha qualquer imagem de alta qualidade. Produtos, retratos, fotos de viagem—Hyreel deixa todas prontas para Reels." },
        { title: "Aplique Efeito de Movimento IA", description: "Escolha entre efeitos otimizados para Instagram: Zoom elegante, Órbita suave, Seguimento dinâmico, Profundidade parallax." },
        { title: "Personalize & Marque", description: "Adicione as cores da sua marca, sobreposições de texto e escolha entre música curada amigável ao Instagram." },
        { title: "Compartilhe no Instagram", description: "Exporte no formato perfeito para Reels (9:16). Compartilhe no Instagram diretamente via iOS." }
      ],
      features: [
        { title: "Otimizado para Instagram", description: "Efeitos e formatos projetados especificamente para o algoritmo do Reels" },
        { title: "Presets Estéticos", description: "Lindas gradações de cores e estilos combinando com a estética do Instagram" },
        { title: "Movimento que Aumenta Engajamento", description: "Padrões de movimento IA comprovados para aumentar tempo de visualização e compartilhamentos" },
        { title: "Compartilhamento Fácil Instagram", description: "Exporte e compartilhe para Instagram Reels e Stories via iOS" },
        { title: "Ferramentas de Texto & Legenda", description: "Adicione sobreposições de texto estilosas que combinam com sua marca" },
        { title: "Biblioteca de Música Instagram", description: "Acesso a música segura para Instagram e áudio trending" }
      ],
    },
    ru: {
      name: "ИИ Создатель Instagram Reels",
      tagline: "Создавайте вирусные Instagram Reels с ИИ",
      description: "Генерируйте идеальные Reels из фото. Оптимизировано для алгоритма Instagram с трендовыми эффектами.",
      detailedDescription: "Овладейте Instagram Reels с нашим ИИ создателем видео, разработанным специально для Instagram.",
      howItWorks: [
        { title: "Выберите Лучшее Фото", description: "Выберите любое качественное изображение. Продукты, портреты, фото из путешествий—Hyreel делает их готовыми для Reels." },
        { title: "Примените ИИ Эффект Движения", description: "Выбирайте из эффектов, оптимизированных для Instagram: Элегантный зум, Плавная орбита, Динамичное слежение, Глубина параллакс." },
        { title: "Настройте и Брендируйте", description: "Добавьте цвета бренда, текстовые наложения и выберите из подобранной музыки для Instagram." },
        { title: "Поделитесь в Instagram", description: "Экспортируйте в идеальном формате Reels (9:16). Делитесь в Instagram напрямую через iOS." }
      ],
      features: [
        { title: "Оптимизировано для Instagram", description: "Эффекты и форматы, разработанные специально для алгоритма Reels" },
        { title: "Эстетические Пресеты", description: "Красивые цветовые градации и стили, соответствующие эстетике Instagram" },
        { title: "Движение для Вовлеченности", description: "ИИ паттерны движения, доказанно увеличивающие время просмотра и репосты" },
        { title: "Простой Экспорт в Instagram", description: "Экспортируйте и делитесь в Instagram Reels и Stories через iOS" },
        { title: "Инструменты Текста и Подписей", description: "Добавляйте стильные текстовые наложения, соответствующие вашему бренду" },
        { title: "Библиотека Музыки Instagram", description: "Доступ к музыке, безопасной для Instagram, и трендовому аудио" }
      ],
    },
    it: {
      name: "Creatore di Reels Instagram IA",
      tagline: "Crea Reels Instagram virali con l'IA",
      description: "Genera Reels perfetti dalle foto. Ottimizzato per l'algoritmo di Instagram con effetti di tendenza.",
      detailedDescription: "Domina Instagram Reels con il nostro creatore video IA progettato specificamente per Instagram.",
      howItWorks: [
        { title: "Seleziona la Tua Foto Migliore", description: "Scegli qualsiasi immagine di alta qualità. Prodotti, ritratti, foto di viaggio—Hyreel le rende tutte pronte per Reels." },
        { title: "Applica Effetto Movimento IA", description: "Scegli tra effetti ottimizzati per Instagram: Zoom elegante, Orbita fluida, Tracciamento dinamico, Profondità parallax." },
        { title: "Personalizza & Brandizza", description: "Aggiungi i colori del tuo brand, sovrapposizioni di testo e scegli tra musica curata adatta a Instagram." },
        { title: "Condividi su Instagram", description: "Esporta nel formato perfetto per Reels (9:16). Condividi su Instagram direttamente via iOS." }
      ],
      features: [
        { title: "Ottimizzato per Instagram", description: "Effetti e formati progettati specificamente per l'algoritmo Reels" },
        { title: "Preset Estetici", description: "Belle gradazioni di colore e stili che corrispondono all'estetica Instagram" },
        { title: "Movimento che Aumenta Engagement", description: "Pattern di movimento IA provati per aumentare tempo di visione e condivisioni" },
        { title: "Condivisione Facile Instagram", description: "Esporta e condividi su Instagram Reels e Stories via iOS" },
        { title: "Strumenti Testo & Didascalie", description: "Aggiungi sovrapposizioni di testo eleganti che corrispondono al tuo brand" },
        { title: "Libreria Musicale Instagram", description: "Accesso a musica sicura per Instagram e audio trending" }
      ],
    },
    nl: {
      name: "AI Instagram Reels Maker",
      tagline: "Maak virale Instagram Reels met AI",
      description: "Genereer perfecte Reels uit foto's. Geoptimaliseerd voor het Instagram-algoritme met trending effecten.",
      detailedDescription: "Beheers Instagram Reels met onze AI-videomaker speciaal ontworpen voor Instagram.",
      howItWorks: [
        { title: "Selecteer Je Beste Foto", description: "Kies een willekeurige afbeelding van hoge kwaliteit. Producten, portretten, reisfoto's—Hyreel maakt ze allemaal Reels-klaar." },
        { title: "Pas AI Bewegingseffect Toe", description: "Kies uit Instagram-geoptimaliseerde effecten: Elegante zoom, Vloeiende orbit, Dynamisch volgen, Parallax diepte." },
        { title: "Aanpassen & Branden", description: "Voeg je merkkleuren, tekstoverlays toe en kies uit gecureerde Instagram-vriendelijke muziek." },
        { title: "Deel op Instagram", description: "Exporteer in perfect Reels-formaat (9:16). Deel op Instagram direct via iOS." }
      ],
      features: [
        { title: "Instagram-Geoptimaliseerd", description: "Effecten en formaten speciaal ontworpen voor het Reels-algoritme" },
        { title: "Esthetische Presets", description: "Mooie kleurverlopingen en stijlen die passen bij de Instagram-esthetiek" },
        { title: "Engagement-Verhogend Beweging", description: "AI-bewegingspatronen bewezen om kijktijd en shares te verhogen" },
        { title: "Makkelijk Instagram Delen", description: "Exporteer en deel naar Instagram Reels en Stories via iOS" },
        { title: "Tekst- & Caption-Tools", description: "Voeg stijlvolle tekstoverlays toe die bij je merk passen" },
        { title: "Instagram Muziekbibliotheek", description: "Toegang tot Instagram-veilige muziek en trending audio" }
      ],
    },
    pl: {
      name: "Kreator Reels Instagram AI",
      tagline: "Twórz wiralowe Instagram Reels z AI",
      description: "Generuj idealne Reels ze zdjęć. Zoptymalizowane dla algorytmu Instagram z trendowymi efektami.",
      detailedDescription: "Opanuj Instagram Reels z naszym kreatorem wideo AI zaprojektowanym specjalnie dla Instagram.",
      howItWorks: [
        { title: "Wybierz Swoje Najlepsze Zdjęcie", description: "Wybierz dowolny obraz wysokiej jakości. Produkty, portrety, zdjęcia z podróży—Hyreel przygotuje je wszystkie na Reels." },
        { title: "Zastosuj Efekt Ruchu AI", description: "Wybierz spośród efektów zoptymalizowanych dla Instagram: Elegancki zoom, Płynna orbita, Dynamiczne śledzenie, Głębia parallax." },
        { title: "Dostosuj i Branduj", description: "Dodaj kolory swojej marki, nakładki tekstowe i wybierz z wyselekcjonowanej muzyki przyjaznej Instagram." },
        { title: "Udostępnij na Instagram", description: "Eksportuj w idealnym formacie Reels (9:16). Udostępniaj na Instagram bezpośrednio przez iOS." }
      ],
      features: [
        { title: "Zoptymalizowane dla Instagram", description: "Efekty i formaty zaprojektowane specjalnie dla algorytmu Reels" },
        { title: "Estetyczne Presety", description: "Piękne gradacje kolorów i style pasujące do estetyki Instagram" },
        { title: "Ruch Zwiększający Zaangażowanie", description: "Wzorce ruchu AI sprawdzone w zwiększaniu czasu oglądania i udostępnień" },
        { title: "Łatwe Udostępnianie Instagram", description: "Eksportuj i udostępniaj na Instagram Reels i Stories przez iOS" },
        { title: "Narzędzia Tekstu i Podpisów", description: "Dodawaj stylowe nakładki tekstowe pasujące do Twojej marki" },
        { title: "Biblioteka Muzyki Instagram", description: "Dostęp do muzyki bezpiecznej dla Instagram i trendowego audio" }
      ],
    },
    ja: {
      name: "AI Instagram Reelsメーカー",
      tagline: "AIでバイラルInstagram Reelsを作成",
      description: "写真から完璧なReelsを生成。トレンドエフェクトでInstagramアルゴリズムに最適化。",
      detailedDescription: "Instagram専用に設計されたAIビデオクリエイターでInstagram Reelsをマスター。",
      howItWorks: [
        { title: "ベストな写真を選択", description: "高品質な画像を選択。商品、ポートレート、旅行写真—HyreelがすべてReels対応にします。" },
        { title: "AIモーションエフェクトを適用", description: "Instagram最適化エフェクトから選択: エレガントズーム、スムーズオービット、ダイナミックフォロー、パララックス深度。" },
        { title: "カスタマイズ&ブランディング", description: "ブランドカラー、テキストオーバーレイを追加し、Instagram向けの厳選音楽から選択。" },
        { title: "Instagramに共有", description: "完璧なReelsフォーマット（9:16）でエクスポート。iOSから直接Instagramに共有。" }
      ],
      features: [
        { title: "Instagram最適化", description: "Reelsアルゴリズム専用に設計されたエフェクトとフォーマット" },
        { title: "エステティックプリセット", description: "Instagramの美学に合った美しいカラーグレードとスタイル" },
        { title: "エンゲージメント向上モーション", description: "視聴時間とシェアを増やすことが実証されたAIモーションパターン" },
        { title: "簡単Instagram共有", description: "iOSからInstagram ReelsとStoriesにエクスポート・共有" },
        { title: "テキスト&キャプションツール", description: "ブランドに合ったスタイリッシュなテキストオーバーレイを追加" },
        { title: "Instagram音楽ライブラリ", description: "Instagram対応の音楽とトレンドオーディオにアクセス" }
      ],
    },
    ko: {
      name: "AI Instagram Reels 메이커",
      tagline: "AI로 바이럴 Instagram Reels 생성",
      description: "사진에서 완벽한 Reels를 생성하세요. 트렌드 효과로 Instagram 알고리즘에 최적화.",
      detailedDescription: "Instagram 전용으로 설계된 AI 비디오 크리에이터로 Instagram Reels를 마스터하세요.",
      howItWorks: [
        { title: "최고의 사진 선택", description: "고품질 이미지를 선택하세요. 제품, 인물, 여행 사진—Hyreel이 모두 Reels 준비 완료로 만들어 드립니다." },
        { title: "AI 모션 효과 적용", description: "Instagram 최적화 효과 중 선택: 우아한 줌, 부드러운 오빗, 다이나믹 팔로우, 패럴랙스 깊이." },
        { title: "커스터마이즈 & 브랜딩", description: "브랜드 색상, 텍스트 오버레이를 추가하고 Instagram 친화적인 큐레이션 음악에서 선택하세요." },
        { title: "Instagram에 공유", description: "완벽한 Reels 형식(9:16)으로 내보내기. iOS에서 직접 Instagram에 공유." }
      ],
      features: [
        { title: "Instagram 최적화", description: "Reels 알고리즘 전용으로 설계된 효과와 형식" },
        { title: "에스테틱 프리셋", description: "Instagram 미학에 맞는 아름다운 컬러 그레이드와 스타일" },
        { title: "참여도 향상 모션", description: "시청 시간과 공유를 늘리는 것으로 입증된 AI 모션 패턴" },
        { title: "쉬운 Instagram 공유", description: "iOS에서 Instagram Reels와 Stories로 내보내기 및 공유" },
        { title: "텍스트 & 캡션 도구", description: "브랜드에 맞는 스타일리시한 텍스트 오버레이 추가" },
        { title: "Instagram 음악 라이브러리", description: "Instagram 안전 음악과 트렌드 오디오에 접근" }
      ],
    },
    zh: {
      name: "AI Instagram Reels制作器",
      tagline: "用AI创建病毒式Instagram Reels",
      description: "从照片生成完美的Reels。使用流行效果为Instagram算法优化。",
      detailedDescription: "使用专为Instagram设计的AI视频创作器掌握Instagram Reels。",
      howItWorks: [
        { title: "选择您最好的照片", description: "选择任何高质量图像。产品、人像、旅行照片——Hyreel让它们都准备好成为Reels。" },
        { title: "应用AI运动效果", description: "从Instagram优化效果中选择：优雅缩放、流畅环绕、动态跟随、视差深度。" },
        { title: "自定义与品牌化", description: "添加您的品牌颜色、文字叠加，并从精选的Instagram友好音乐中选择。" },
        { title: "分享到Instagram", description: "以完美的Reels格式（9:16）导出。通过iOS直接分享到Instagram。" }
      ],
      features: [
        { title: "Instagram优化", description: "专为Reels算法设计的效果和格式" },
        { title: "美学预设", description: "与Instagram美学相匹配的美丽色彩分级和风格" },
        { title: "提升参与度的运动", description: "经证实可增加观看时间和分享的AI运动模式" },
        { title: "轻松Instagram分享", description: "通过iOS导出并分享到Instagram Reels和Stories" },
        { title: "文字和标题工具", description: "添加与您品牌匹配的时尚文字叠加" },
        { title: "Instagram音乐库", description: "访问Instagram安全音乐和流行音频" }
      ],
    },
  },
  "ai-youtube-shorts-generator": {
    es: {
      name: "Generador de YouTube Shorts IA",
      tagline: "Crea YouTube Shorts virales con IA",
      description: "Genera Shorts perfectos para YouTube desde fotos. Optimizado para descubrimiento y engagement.",
      detailedDescription: "Domina YouTube Shorts con nuestro generador de videos IA optimizado para el formato vertical de YouTube.",
      howItWorks: [
        { title: "Sube Cualquier Imagen", description: "Comienza con una foto que cuente tu historia. Miniaturas, fotos de productos o cualquier imagen impactante funciona." },
        { title: "Añade Movimiento IA", description: "Elige efectos de movimiento cinematográfico que den vida a tu imagen y mantengan la atención del espectador." },
        { title: "Optimiza para YouTube", description: "Añade títulos, llamadas a suscripción y optimiza para el algoritmo de YouTube Shorts." },
        { title: "Sube a YouTube", description: "Exporta en calidad y formato perfecto para YouTube. Sube directamente desde tu dispositivo." }
      ],
      features: [
        { title: "Calidad Optimizada YouTube", description: "Exportación en calidad 1080p perfecta para los estándares de YouTube" },
        { title: "Listo para 60 Segundos", description: "Crea Shorts de hasta 60 segundos con ritmo perfecto" },
        { title: "Herramientas CTA Suscribirse", description: "Añade indicaciones de suscripción y branding del canal" },
        { title: "Movimiento Amigable con Algoritmo", description: "Efectos diseñados para maximizar tiempo de visualización y retención" },
        { title: "Efectos Cinematográficos", description: "Movimientos de cámara profesionales con aspecto de producción de estudio" },
        { title: "Exportación Alta Calidad", description: "Sin artefactos de compresión—archivos listos para YouTube" }
      ],
    },
    de: {
      name: "KI YouTube Shorts Generator",
      tagline: "Erstelle virale YouTube Shorts mit KI",
      description: "Generiere perfekte Shorts für YouTube aus Fotos. Optimiert für Entdeckung und Engagement.",
      detailedDescription: "Meistere YouTube Shorts mit unserem für das YouTube-Hochformat optimierten KI-Videogenerator.",
      howItWorks: [
        { title: "Beliebiges Bild Hochladen", description: "Beginne mit einem Foto, das deine Geschichte erzählt. Thumbnails, Produktfotos oder jedes überzeugende Bild funktioniert." },
        { title: "KI-Bewegung Hinzufügen", description: "Wähle cinematische Bewegungseffekte, die dein Bild zum Leben erwecken und die Aufmerksamkeit der Zuschauer halten." },
        { title: "Für YouTube Optimieren", description: "Füge Titel, Abo-Aufforderungen hinzu und optimiere für den YouTube Shorts-Algorithmus." },
        { title: "Auf YouTube Hochladen", description: "Exportiere in YouTube-perfekter Qualität und Format. Lade direkt von deinem Gerät hoch." }
      ],
      features: [
        { title: "YouTube-Optimierte Qualität", description: "1080p Exportqualität perfekt für YouTubes Standards" },
        { title: "60-Sekunden-Fertig", description: "Erstelle Shorts bis zu 60 Sekunden mit perfektem Timing" },
        { title: "Abonnieren-CTA-Tools", description: "Füge Abo-Aufforderungen und Kanal-Branding hinzu" },
        { title: "Algorithmus-Freundliche Bewegung", description: "Effekte für maximale Wiedergabezeit und Retention entwickelt" },
        { title: "Cinematische Effekte", description: "Professionelle Kamerabewegungen mit Studio-Produktionsqualität" },
        { title: "Hochwertige Exportierung", description: "Keine Kompressionsartefakte—YouTube-fertige Dateien" }
      ],
    },
    fr: {
      name: "Générateur YouTube Shorts IA",
      tagline: "Créez des YouTube Shorts viraux avec l'IA",
      description: "Générez des Shorts parfaits pour YouTube à partir de photos. Optimisé pour la découverte et l'engagement.",
      detailedDescription: "Maîtrisez YouTube Shorts avec notre générateur vidéo IA optimisé pour le format vertical YouTube.",
      howItWorks: [
        { title: "Téléchargez N'importe Quelle Image", description: "Commencez avec une photo qui raconte votre histoire. Miniatures, photos de produits ou toute image percutante fonctionne." },
        { title: "Ajoutez du Mouvement IA", description: "Choisissez des effets de mouvement cinématographiques qui donnent vie à votre image et captent l'attention des spectateurs." },
        { title: "Optimisez pour YouTube", description: "Ajoutez des titres, des incitations à s'abonner et optimisez pour l'algorithme YouTube Shorts." },
        { title: "Téléchargez sur YouTube", description: "Exportez en qualité et format parfaits pour YouTube. Téléchargez directement depuis votre appareil." }
      ],
      features: [
        { title: "Qualité Optimisée YouTube", description: "Exportation en qualité 1080p parfaite pour les standards YouTube" },
        { title: "Prêt pour 60 Secondes", description: "Créez des Shorts jusqu'à 60 secondes avec un rythme parfait" },
        { title: "Outils CTA S'abonner", description: "Ajoutez des incitations à s'abonner et le branding du canal" },
        { title: "Mouvement Ami de l'Algorithme", description: "Effets conçus pour maximiser le temps de visionnage et la rétention" },
        { title: "Effets Cinématographiques", description: "Mouvements de caméra professionnels avec aspect production studio" },
        { title: "Exportation Haute Qualité", description: "Sans artefacts de compression—fichiers prêts pour YouTube" }
      ],
    },
    pt: {
      name: "Gerador de YouTube Shorts IA",
      tagline: "Crie YouTube Shorts virais com IA",
      description: "Gere Shorts perfeitos para YouTube a partir de fotos. Otimizado para descoberta e engajamento.",
      detailedDescription: "Domine YouTube Shorts com nosso gerador de vídeos IA otimizado para o formato vertical do YouTube.",
      howItWorks: [
        { title: "Envie Qualquer Imagem", description: "Comece com uma foto que conte sua história. Miniaturas, fotos de produtos ou qualquer imagem impactante funciona." },
        { title: "Adicione Movimento IA", description: "Escolha efeitos de movimento cinematográficos que dão vida à sua imagem e mantêm a atenção do espectador." },
        { title: "Otimize para YouTube", description: "Adicione títulos, chamadas para inscrição e otimize para o algoritmo do YouTube Shorts." },
        { title: "Envie para YouTube", description: "Exporte em qualidade e formato perfeitos para YouTube. Envie diretamente do seu dispositivo." }
      ],
      features: [
        { title: "Qualidade Otimizada YouTube", description: "Exportação em qualidade 1080p perfeita para os padrões do YouTube" },
        { title: "Pronto para 60 Segundos", description: "Crie Shorts de até 60 segundos com ritmo perfeito" },
        { title: "Ferramentas CTA Inscrever-se", description: "Adicione indicações de inscrição e branding do canal" },
        { title: "Movimento Amigável ao Algoritmo", description: "Efeitos projetados para maximizar tempo de visualização e retenção" },
        { title: "Efeitos Cinematográficos", description: "Movimentos de câmera profissionais com visual de produção de estúdio" },
        { title: "Exportação Alta Qualidade", description: "Sem artefatos de compressão—arquivos prontos para YouTube" }
      ],
    },
    ru: {
      name: "ИИ Генератор YouTube Shorts",
      tagline: "Создавайте вирусные YouTube Shorts с ИИ",
      description: "Генерируйте идеальные Shorts для YouTube из фото. Оптимизировано для охвата и вовлечения.",
      detailedDescription: "Овладейте YouTube Shorts с нашим ИИ генератором видео, оптимизированным для вертикального формата YouTube.",
      howItWorks: [
        { title: "Загрузите Любое Изображение", description: "Начните с фото, которое рассказывает вашу историю. Миниатюры, фото продуктов или любое впечатляющее изображение подойдет." },
        { title: "Добавьте ИИ Движение", description: "Выберите кинематографические эффекты движения, которые оживят изображение и удержат внимание зрителей." },
        { title: "Оптимизируйте для YouTube", description: "Добавьте заголовки, призывы к подписке и оптимизируйте для алгоритма YouTube Shorts." },
        { title: "Загрузите на YouTube", description: "Экспортируйте в идеальном качестве и формате для YouTube. Загружайте прямо с устройства." }
      ],
      features: [
        { title: "Оптимизированное Качество YouTube", description: "Экспорт в качестве 1080p, идеальном для стандартов YouTube" },
        { title: "Готово к 60 Секундам", description: "Создавайте Shorts до 60 секунд с идеальным ритмом" },
        { title: "Инструменты CTA Подписка", description: "Добавляйте призывы к подписке и брендинг канала" },
        { title: "Движение для Алгоритма", description: "Эффекты для максимального времени просмотра и удержания" },
        { title: "Кинематографические Эффекты", description: "Профессиональные движения камеры студийного качества" },
        { title: "Высококачественный Экспорт", description: "Без артефактов сжатия—файлы готовы для YouTube" }
      ],
    },
    it: {
      name: "Generatore YouTube Shorts IA",
      tagline: "Crea YouTube Shorts virali con l'IA",
      description: "Genera Shorts perfetti per YouTube dalle foto. Ottimizzato per scoperta ed engagement.",
      detailedDescription: "Domina YouTube Shorts con il nostro generatore video IA ottimizzato per il formato verticale YouTube.",
      howItWorks: [
        { title: "Carica Qualsiasi Immagine", description: "Inizia con una foto che racconta la tua storia. Miniature, foto prodotti o qualsiasi immagine coinvolgente funziona." },
        { title: "Aggiungi Movimento IA", description: "Scegli effetti di movimento cinematografici che danno vita alla tua immagine e mantengono l'attenzione degli spettatori." },
        { title: "Ottimizza per YouTube", description: "Aggiungi titoli, inviti all'iscrizione e ottimizza per l'algoritmo YouTube Shorts." },
        { title: "Carica su YouTube", description: "Esporta in qualità e formato perfetti per YouTube. Carica direttamente dal tuo dispositivo." }
      ],
      features: [
        { title: "Qualità Ottimizzata YouTube", description: "Esportazione in qualità 1080p perfetta per gli standard YouTube" },
        { title: "Pronto per 60 Secondi", description: "Crea Shorts fino a 60 secondi con ritmo perfetto" },
        { title: "Strumenti CTA Iscriviti", description: "Aggiungi inviti all'iscrizione e branding del canale" },
        { title: "Movimento Amico dell'Algoritmo", description: "Effetti progettati per massimizzare tempo di visione e retention" },
        { title: "Effetti Cinematografici", description: "Movimenti di camera professionali con aspetto da produzione studio" },
        { title: "Esportazione Alta Qualità", description: "Nessun artefatto di compressione—file pronti per YouTube" }
      ],
    },
    nl: {
      name: "AI YouTube Shorts Generator",
      tagline: "Maak virale YouTube Shorts met AI",
      description: "Genereer perfecte Shorts voor YouTube uit foto's. Geoptimaliseerd voor ontdekking en engagement.",
      detailedDescription: "Beheers YouTube Shorts met onze AI-videogenerator geoptimaliseerd voor het verticale YouTube-formaat.",
      howItWorks: [
        { title: "Upload Elke Afbeelding", description: "Begin met een foto die je verhaal vertelt. Thumbnails, productfoto's of elke overtuigende afbeelding werkt." },
        { title: "Voeg AI Beweging Toe", description: "Kies cinematische bewegingseffecten die je afbeelding tot leven brengen en de aandacht van kijkers vasthouden." },
        { title: "Optimaliseer voor YouTube", description: "Voeg titels, abonneer-oproepen toe en optimaliseer voor het YouTube Shorts-algoritme." },
        { title: "Upload naar YouTube", description: "Exporteer in YouTube-perfecte kwaliteit en formaat. Upload direct vanaf je apparaat." }
      ],
      features: [
        { title: "YouTube-Geoptimaliseerde Kwaliteit", description: "1080p exportkwaliteit perfect voor YouTubes standaarden" },
        { title: "60-Seconden Klaar", description: "Maak Shorts tot 60 seconden met perfecte timing" },
        { title: "Abonneer CTA Tools", description: "Voeg abonneer-oproepen en kanaalbranding toe" },
        { title: "Algoritme-Vriendelijke Beweging", description: "Effecten ontworpen om kijktijd en retentie te maximaliseren" },
        { title: "Cinematische Effecten", description: "Professionele camerabewegingen met studio-productiekwaliteit" },
        { title: "Hoogwaardige Export", description: "Geen compressieartefacten—YouTube-klare bestanden" }
      ],
    },
    pl: {
      name: "Generator YouTube Shorts AI",
      tagline: "Twórz wiralowe YouTube Shorts z AI",
      description: "Generuj idealne Shorts dla YouTube ze zdjęć. Zoptymalizowane dla odkrywalności i zaangażowania.",
      detailedDescription: "Opanuj YouTube Shorts z naszym generatorem wideo AI zoptymalizowanym dla pionowego formatu YouTube.",
      howItWorks: [
        { title: "Prześlij Dowolny Obraz", description: "Zacznij od zdjęcia, które opowiada Twoją historię. Miniatury, zdjęcia produktów lub dowolny przekonujący obraz zadziała." },
        { title: "Dodaj Ruch AI", description: "Wybierz kinematograficzne efekty ruchu, które ożywią Twój obraz i utrzymają uwagę widzów." },
        { title: "Zoptymalizuj dla YouTube", description: "Dodaj tytuły, wezwania do subskrypcji i zoptymalizuj dla algorytmu YouTube Shorts." },
        { title: "Prześlij na YouTube", description: "Eksportuj w idealnej jakości i formacie dla YouTube. Przesyłaj bezpośrednio z urządzenia." }
      ],
      features: [
        { title: "Jakość Zoptymalizowana dla YouTube", description: "Eksport w jakości 1080p idealnej dla standardów YouTube" },
        { title: "Gotowe na 60 Sekund", description: "Twórz Shorts do 60 sekund z idealnym tempem" },
        { title: "Narzędzia CTA Subskrybuj", description: "Dodawaj wezwania do subskrypcji i branding kanału" },
        { title: "Ruch Przyjazny Algorytmowi", description: "Efekty zaprojektowane dla maksymalnego czasu oglądania i retencji" },
        { title: "Efekty Kinematograficzne", description: "Profesjonalne ruchy kamery o jakości produkcji studyjnej" },
        { title: "Eksport Wysokiej Jakości", description: "Bez artefaktów kompresji—pliki gotowe dla YouTube" }
      ],
    },
    ja: {
      name: "AI YouTube Shortsジェネレーター",
      tagline: "AIでバイラルYouTube Shortsを作成",
      description: "写真からYouTube用の完璧なShortsを生成。発見とエンゲージメントに最適化。",
      detailedDescription: "YouTube縦型フォーマット向けに最適化されたAIビデオジェネレーターでYouTube Shortsをマスター。",
      howItWorks: [
        { title: "任意の画像をアップロード", description: "ストーリーを伝える写真から始めましょう。サムネイル、商品写真、または魅力的な画像なら何でもOK。" },
        { title: "AIモーションを追加", description: "画像に命を吹き込み、視聴者の注目を維持するシネマティックなモーションエフェクトを選択。" },
        { title: "YouTube向けに最適化", description: "タイトル、登録促進、YouTube Shortsアルゴリズム向けの最適化を追加。" },
        { title: "YouTubeにアップロード", description: "YouTube完璧な品質とフォーマットでエクスポート。デバイスから直接アップロード。" }
      ],
      features: [
        { title: "YouTube最適化品質", description: "YouTubeの基準に完璧な1080p品質でエクスポート" },
        { title: "60秒対応", description: "完璧なペーシングで最大60秒のShortsを作成" },
        { title: "登録CTAツール", description: "登録促進とチャンネルブランディングを追加" },
        { title: "アルゴリズムフレンドリーモーション", description: "視聴時間と維持率を最大化するよう設計されたエフェクト" },
        { title: "シネマティックエフェクト", description: "スタジオ制作品質のプロフェッショナルなカメラ移動" },
        { title: "高品質エクスポート", description: "圧縮アーティファクトなし—YouTube対応ファイル" }
      ],
    },
    ko: {
      name: "AI YouTube Shorts 생성기",
      tagline: "AI로 바이럴 YouTube Shorts 생성",
      description: "사진에서 YouTube용 완벽한 Shorts를 생성하세요. 발견과 참여에 최적화.",
      detailedDescription: "YouTube 세로 형식에 최적화된 AI 비디오 생성기로 YouTube Shorts를 마스터하세요.",
      howItWorks: [
        { title: "이미지 업로드", description: "스토리를 전달하는 사진으로 시작하세요. 썸네일, 제품 사진 또는 매력적인 이미지라면 무엇이든 가능합니다." },
        { title: "AI 모션 추가", description: "이미지에 생명을 불어넣고 시청자의 주의를 유지하는 시네마틱 모션 효과를 선택하세요." },
        { title: "YouTube용 최적화", description: "제목, 구독 유도, YouTube Shorts 알고리즘 최적화를 추가하세요." },
        { title: "YouTube에 업로드", description: "YouTube 완벽한 품질과 형식으로 내보내기. 기기에서 직접 업로드하세요." }
      ],
      features: [
        { title: "YouTube 최적화 품질", description: "YouTube 표준에 완벽한 1080p 품질로 내보내기" },
        { title: "60초 준비 완료", description: "완벽한 페이싱으로 최대 60초 Shorts 생성" },
        { title: "구독 CTA 도구", description: "구독 유도와 채널 브랜딩 추가" },
        { title: "알고리즘 친화적 모션", description: "시청 시간과 유지율을 최대화하도록 설계된 효과" },
        { title: "시네마틱 효과", description: "스튜디오 제작 품질의 전문적인 카메라 움직임" },
        { title: "고품질 내보내기", description: "압축 아티팩트 없음—YouTube 준비 파일" }
      ],
    },
    zh: {
      name: "AI YouTube Shorts生成器",
      tagline: "用AI创建病毒式YouTube Shorts",
      description: "从照片生成完美的YouTube Shorts。针对发现和参与度优化。",
      detailedDescription: "使用为YouTube垂直格式优化的AI视频生成器掌握YouTube Shorts。",
      howItWorks: [
        { title: "上传任何图像", description: "从讲述您故事的照片开始。缩略图、产品照片或任何引人注目的图像都可以。" },
        { title: "添加AI运动", description: "选择让图像栩栩如生并保持观众注意力的电影级运动效果。" },
        { title: "为YouTube优化", description: "添加标题、订阅提示，并为YouTube Shorts算法优化。" },
        { title: "上传到YouTube", description: "以YouTube完美的质量和格式导出。直接从设备上传。" }
      ],
      features: [
        { title: "YouTube优化质量", description: "以符合YouTube标准的完美1080p质量导出" },
        { title: "60秒就绪", description: "创建最长60秒的Shorts，节奏完美" },
        { title: "订阅CTA工具", description: "添加订阅提示和频道品牌" },
        { title: "算法友好运动", description: "旨在最大化观看时间和留存率的效果" },
        { title: "电影级效果", description: "具有工作室制作质量的专业相机移动" },
        { title: "高质量导出", description: "无压缩伪影——YouTube就绪文件" }
      ],
    },
  },
  "ai-zoom-video-effect": {
    es: {
      name: "Efecto de Zoom IA",
      tagline: "Añade zoom cinematográfico a cualquier foto",
      description: "Crea impresionantes efectos de zoom suave en tus fotos. Zoom dramático que captura la atención.",
      detailedDescription: "Transforma fotos estáticas en videos dinámicos con nuestro efecto de zoom IA cinematográfico.",
      howItWorks: [
        { title: "Sube Tu Foto", description: "Elige cualquier imagen. La IA analiza composicion, profundidad y puntos focales automaticamente." },
        { title: "Elige Estilo de Zoom", description: "Selecciona Zoom In, Zoom Out o Dolly Zoom. La IA sugiere puntos de inicio y fin optimos." },
        { title: "Ajusta Parametros", description: "Afina la velocidad del zoom, duracion y area focal. Vista previa en tiempo real." },
        { title: "Genera y Exporta", description: "La IA genera video de zoom suave en segundos. Exporta a cualquier plataforma." },
      ],
      features: [
        { title: "Deteccion Focal Inteligente", description: "La IA identifica automaticamente los mejores puntos focales en tu imagen" },
        { title: "Suavidad Cinematografica", description: "Curvas de zoom ultra suaves que parecen filmadas profesionalmente" },
        { title: "Velocidad Personalizable", description: "Controla la velocidad del zoom desde dramatico lento hasta revelacion rapida" },
        { title: "Opciones de acercamiento y alejamiento", description: "Elige la direccion y crea efectos de zoom compuestos" },
        { title: "Procesamiento con Profundidad", description: "La IA entiende la profundidad 3D para perspectiva de zoom realista" },
        { title: "Vista Previa Instantanea", description: "Ve los resultados antes del render final, ajusta en tiempo real" },
      ],
    },
    de: {
      name: "KI-Zoom-Videoeffekt",
      tagline: "Fuege cinematischen Zoom zu jedem Foto hinzu",
      description: "Erstelle beeindruckende sanfte Zoom-Effekte auf deinen Fotos. Dramatischer Zoom, der Aufmerksamkeit erregt.",
      detailedDescription: "Verwandle statische Fotos in dynamische Videos mit unserem cinematischen KI-Zoom-Effekt.",
      howItWorks: [
        { title: "Foto Hochladen", description: "Waehle ein beliebiges Bild. Die KI analysiert Komposition, Tiefe und Fokuspunkte automatisch." },
        { title: "Zoom-Stil Waehlen", description: "Waehle Zoom In, Zoom Out oder Dolly Zoom. Die KI schlaegt optimale Start- und Endpunkte vor." },
        { title: "Parameter Anpassen", description: "Passe Zoom-Geschwindigkeit, Dauer und Fokusbereich an. Echtzeit-Vorschau." },
        { title: "Generieren und Exportieren", description: "Die KI erstellt sanftes Zoom-Video in Sekunden. Exportiere auf jede Plattform." },
      ],
      features: [
        { title: "Intelligente Fokuserkennung", description: "KI identifiziert automatisch die besten Fokuspunkte in deinem Bild" },
        { title: "Cinematische Geschmeidigkeit", description: "Butterweiche Zoom-Kurven, die professionell gefilmt aussehen" },
        { title: "Anpassbare Geschwindigkeit", description: "Steuere die Zoom-Geschwindigkeit von langsam-dramatisch bis schnelle Enthuellung" },
        { title: "Optionen zum Heran- und Herauszoomen", description: "Waehle Richtung und erstelle kombinierte Zoom-Effekte" },
        { title: "Tiefenbewusste Verarbeitung", description: "KI versteht 3D-Tiefe fuer realistische Zoom-Perspektive" },
        { title: "Sofortige Vorschau", description: "Siehe Ergebnisse vor dem finalen Render, passe in Echtzeit an" },
      ],
    },
    fr: {
      name: "Effet Zoom Video IA",
      tagline: "Ajoutez un zoom cinematographique a toute photo",
      description: "Creez des effets de zoom fluides impressionnants sur vos photos. Zoom dramatique qui capte l'attention.",
      detailedDescription: "Transformez les photos statiques en videos dynamiques avec notre effet zoom IA cinematographique.",
      howItWorks: [
        { title: "Telechargez Votre Photo", description: "Choisissez n'importe quelle image. L'IA analyse la composition, la profondeur et les points focaux automatiquement." },
        { title: "Choisissez le Style de Zoom", description: "Selectionnez Zoom In, Zoom Out ou Dolly Zoom. L'IA suggere les points de depart et d'arrivee optimaux." },
        { title: "Ajustez les Parametres", description: "Affinez la vitesse du zoom, la duree et la zone focale. Apercu en temps reel." },
        { title: "Generez et Exportez", description: "L'IA genere une video zoom fluide en secondes. Exportez vers n'importe quelle plateforme." },
      ],
      features: [
        { title: "Detection Focale Intelligente", description: "L'IA identifie automatiquement les meilleurs points focaux dans votre image" },
        { title: "Fluidite Cinematographique", description: "Courbes de zoom ultra-fluides qui semblent filmees professionnellement" },
        { title: "Vitesse Personnalisable", description: "Controlez la vitesse du zoom, du lent dramatique a la revelation rapide" },
        { title: "Options de zoom avant/arrière", description: "Choisissez la direction et creez des effets de zoom composes" },
        { title: "Traitement avec Profondeur", description: "L'IA comprend la profondeur 3D pour une perspective de zoom realiste" },
        { title: "Apercu Instantane", description: "Voyez les resultats avant le rendu final, ajustez en temps reel" },
      ],
    },
    pt: {
      name: "Efeito Zoom Video IA",
      tagline: "Adicione zoom cinematografico a qualquer foto",
      description: "Crie efeitos de zoom suaves impressionantes em suas fotos. Zoom dramatico que captura a atencao.",
      detailedDescription: "Transforme fotos estaticas em videos dinamicos com nosso efeito de zoom IA cinematografico.",
      howItWorks: [
        { title: "Envie Sua Foto", description: "Escolha qualquer imagem. A IA analisa composicao, profundidade e pontos focais automaticamente." },
        { title: "Escolha o Estilo de Zoom", description: "Selecione Zoom In, Zoom Out ou Dolly Zoom. A IA sugere pontos de inicio e fim otimos." },
        { title: "Ajuste Parametros", description: "Refine a velocidade do zoom, duracao e area focal. Pre-visualizacao em tempo real." },
        { title: "Gere e Exporte", description: "A IA gera video de zoom suave em segundos. Exporte para qualquer plataforma." },
      ],
      features: [
        { title: "Deteccao Focal Inteligente", description: "A IA identifica automaticamente os melhores pontos focais na sua imagem" },
        { title: "Suavidade Cinematografica", description: "Curvas de zoom ultra suaves que parecem filmadas profissionalmente" },
        { title: "Velocidade Personalizavel", description: "Controle a velocidade do zoom de dramatico lento a revelacao rapida" },
        { title: "Opções de aproximação e afastamento", description: "Escolha a direcao e crie efeitos de zoom compostos" },
        { title: "Processamento com Profundidade", description: "A IA entende a profundidade 3D para perspectiva de zoom realista" },
        { title: "Pre-visualizacao Instantanea", description: "Veja os resultados antes do render final, ajuste em tempo real" },
      ],
    },
    ru: {
      name: "ИИ Эффект Зума",
      tagline: "Добавьте кинематографический зум к любому фото",
      description: "Создавайте впечатляющие эффекты плавного зума на фото. Драматичный зум, захватывающий внимание.",
      detailedDescription: "Превращайте статичные фото в динамичные видео с нашим кинематографическим ИИ эффектом зума.",
      howItWorks: [
        { title: "Загрузите Фото", description: "Выберите любое изображение. ИИ автоматически анализирует композицию, глубину и фокусные точки." },
        { title: "Выберите Стиль Зума", description: "Выберите Zoom In, Zoom Out или Dolly Zoom. ИИ предложит оптимальные начальную и конечную точки." },
        { title: "Настройте Параметры", description: "Отрегулируйте скорость зума, длительность и фокусную область. Предпросмотр в реальном времени." },
        { title: "Сгенерируйте и Экспортируйте", description: "ИИ создаёт плавное зум-видео за секунды. Экспортируйте на любую платформу." },
      ],
      features: [
        { title: "Умное Определение Фокуса", description: "ИИ автоматически определяет лучшие фокусные точки на изображении" },
        { title: "Кинематографическая Плавность", description: "Сверхплавные кривые зума, выглядящие профессионально снятыми" },
        { title: "Настраиваемая Скорость", description: "Управляйте скоростью зума от медленного драматичного до быстрого раскрытия" },
        { title: "Опции приближения и отдаления", description: "Выбирайте направление и создавайте составные эффекты зума" },
        { title: "Обработка с Учётом Глубины", description: "ИИ понимает 3D-глубину для реалистичной перспективы зума" },
        { title: "Мгновенный Предпросмотр", description: "Смотрите результаты до финального рендера, настраивайте в реальном времени" },
      ],
    },
    it: {
      name: "Effetto Zoom Video IA",
      tagline: "Aggiungi zoom cinematografico a qualsiasi foto",
      description: "Crea effetti di zoom fluidi impressionanti sulle tue foto. Zoom drammatico che cattura l'attenzione.",
      detailedDescription: "Trasforma le foto statiche in video dinamici con il nostro effetto zoom IA cinematografico.",
      howItWorks: [
        { title: "Carica la Tua Foto", description: "Scegli qualsiasi immagine. L'IA analizza composizione, profondita e punti focali automaticamente." },
        { title: "Scegli lo Stile di Zoom", description: "Seleziona Zoom In, Zoom Out o Dolly Zoom. L'IA suggerisce punti di inizio e fine ottimali." },
        { title: "Regola i Parametri", description: "Perfeziona velocita dello zoom, durata e area focale. Anteprima in tempo reale." },
        { title: "Genera ed Esporta", description: "L'IA genera video zoom fluido in pochi secondi. Esporta su qualsiasi piattaforma." },
      ],
      features: [
        { title: "Rilevamento Focale Intelligente", description: "L'IA identifica automaticamente i migliori punti focali nella tua immagine" },
        { title: "Fluidita Cinematografica", description: "Curve di zoom ultra fluide che sembrano filmate professionalmente" },
        { title: "Velocita Personalizzabile", description: "Controlla la velocita dello zoom da lento drammatico a rivelazione rapida" },
        { title: "Opzioni di avvicinamento e allontanamento", description: "Scegli la direzione e crea effetti di zoom composti" },
        { title: "Elaborazione con Profondita", description: "L'IA comprende la profondita 3D per prospettiva di zoom realistica" },
        { title: "Anteprima Istantanea", description: "Vedi i risultati prima del render finale, regola in tempo reale" },
      ],
    },
    nl: {
      name: "AI Zoom Video Effect",
      tagline: "Voeg cinematische zoom toe aan elke foto",
      description: "Maak indrukwekkende vloeiende zoom-effecten op je fotos. Dramatische zoom die de aandacht trekt.",
      detailedDescription: "Verander statische fotos in dynamische videos met ons cinematische AI zoom-effect.",
      howItWorks: [
        { title: "Upload Je Foto", description: "Kies een willekeurige afbeelding. De AI analyseert compositie, diepte en focuspunten automatisch." },
        { title: "Kies Zoom Stijl", description: "Selecteer Zoom In, Zoom Out of Dolly Zoom. De AI suggereert optimale start- en eindpunten." },
        { title: "Pas Parameters Aan", description: "Verfijn zoomsnelheid, duur en focusgebied. Real-time preview." },
        { title: "Genereer en Exporteer", description: "AI genereert vloeiende zoom video in seconden. Exporteer naar elk platform." },
      ],
      features: [
        { title: "Slimme Focus Detectie", description: "AI identificeert automatisch de beste focuspunten in je afbeelding" },
        { title: "Cinematische Vloeiendheid", description: "Boterzachte zoom curves die professioneel gefilmd lijken" },
        { title: "Aanpasbare Snelheid", description: "Regel de zoomsnelheid van langzaam dramatisch tot snelle onthulling" },
        { title: "Opties voor inzoomen en uitzoomen", description: "Kies richting en creeer samengestelde zoom-effecten" },
        { title: "Dieptebewuste Verwerking", description: "AI begrijpt 3D-diepte voor realistische zoom perspectief" },
        { title: "Directe Preview", description: "Bekijk resultaten voor de finale render, pas aan in real-time" },
      ],
    },
    pl: {
      name: "Efekt Zoom Wideo AI",
      tagline: "Dodaj kinowy zoom do dowolnego zdjecia",
      description: "Twórz imponujace efekty plynnego zoomu na zdjeciach. Dramatyczny zoom, który przyciaga uwage.",
      detailedDescription: "Przeksztalcaj statyczne zdjecia w dynamiczne filmy z naszym kinowym efektem zoomu AI.",
      howItWorks: [
        { title: "Przeslij Swoje Zdjecie", description: "Wybierz dowolny obraz. AI automatycznie analizuje kompozycje, glebie i punkty fokalne." },
        { title: "Wybierz Styl Zoomu", description: "Wybierz Zoom In, Zoom Out lub Dolly Zoom. AI sugeruje optymalne punkty poczatkowe i koncowe." },
        { title: "Dostosuj Parametry", description: "Dopracuj szybkosc zoomu, czas trwania i obszar fokusa. Podglad w czasie rzeczywistym." },
        { title: "Generuj i Eksportuj", description: "AI generuje plynne wideo z zoomem w kilka sekund. Eksportuj na dowolna platforme." },
      ],
      features: [
        { title: "Inteligentna Detekcja Fokusa", description: "AI automatycznie identyfikuje najlepsze punkty fokalne na obrazie" },
        { title: "Kinowa Plynnosc", description: "Gladkie jak maslo krzywe zoomu, które wygladaja profesjonalnie nakrecone" },
        { title: "Regulowana Predkosc", description: "Kontroluj szybkosc zoomu od wolnego dramatycznego po szybkie odsloniecie" },
        { title: "Opcje przybliżania i oddalania", description: "Wybierz kierunek i twórz zlozone efekty zoomu" },
        { title: "Przetwarzanie z Glebia", description: "AI rozumie glebie 3D dla realistycznej perspektywy zoomu" },
        { title: "Natychmiastowy Podglad", description: "Zobacz wyniki przed finalnym renderem, dostosuj w czasie rzeczywistym" },
      ],
    },
    ja: {
      name: "AIズームビデオエフェクト",
      tagline: "あらゆる写真にシネマティックなズームを追加",
      description: "写真に印象的なスムーズズームエフェクトを作成。注目を集めるドラマチックなズーム。",
      detailedDescription: "シネマティックなAIズームエフェクトで静止画をダイナミックな動画に変換します。",
      howItWorks: [
        { title: "写真をアップロード", description: "任意の画像を選択。AIが構図、深度、焦点を自動的に分析します。" },
        { title: "ズームスタイルを選択", description: "ズームイン、ズームアウト、またはドリーズームを選択。AIが最適な開始点と終了点を提案。" },
        { title: "パラメータを調整", description: "ズーム速度、長さ、フォーカスエリアを微調整。リアルタイムプレビュー。" },
        { title: "生成してエクスポート", description: "AIが数秒でスムーズなズームビデオを生成。あらゆるプラットフォームにエクスポート。" },
      ],
      features: [
        { title: "スマート焦点検出", description: "AIが画像内の最適な焦点を自動的に識別" },
        { title: "シネマティックな滑らかさ", description: "プロが撮影したような超滑らかなズームカーブ" },
        { title: "カスタマイズ可能な速度", description: "スローでドラマチックから高速の披露までズーム速度を調整" },
        { title: "ズームイン/アウトオプション", description: "方向を選択し、複合ズームエフェクトを作成" },
        { title: "深度認識処理", description: "AIがリアルなズームパースペクティブのために3D深度を理解" },
        { title: "インスタントプレビュー", description: "最終レンダリング前に結果を確認、リアルタイムで調整" },
      ],
    },
    ko: {
      name: "AI 줌 비디오 효과",
      tagline: "모든 사진에 시네마틱 줌 추가",
      description: "사진에 인상적인 부드러운 줌 효과를 만드세요. 시선을 사로잡는 드라마틱한 줌.",
      detailedDescription: "시네마틱 AI 줌 효과로 정적인 사진을 역동적인 비디오로 변환합니다.",
      howItWorks: [
        { title: "사진 업로드", description: "아무 이미지나 선택하세요. AI가 구도, 깊이, 초점을 자동으로 분석합니다." },
        { title: "줌 스타일 선택", description: "줌 인, 줌 아웃 또는 돌리 줌을 선택하세요. AI가 최적의 시작점과 끝점을 제안합니다." },
        { title: "파라미터 조정", description: "줌 속도, 길이, 초점 영역을 미세 조정하세요. 실시간 미리보기." },
        { title: "생성 및 내보내기", description: "AI가 몇 초 만에 부드러운 줌 비디오를 생성합니다. 모든 플랫폼으로 내보내기." },
      ],
      features: [
        { title: "스마트 초점 감지", description: "AI가 이미지의 최적 초점을 자동으로 식별" },
        { title: "시네마틱 부드러움", description: "전문 촬영처럼 보이는 매끄러운 줌 커브" },
        { title: "맞춤형 속도", description: "느린 드라마틱에서 빠른 공개까지 줌 속도 조절" },
        { title: "줌 인/아웃 옵션", description: "방향을 선택하고 복합 줌 효과 생성" },
        { title: "깊이 인식 처리", description: "AI가 사실적인 줌 원근감을 위해 3D 깊이를 이해" },
        { title: "즉시 미리보기", description: "최종 렌더링 전 결과 확인, 실시간 조정" },
      ],
    },
    zh: {
      name: "AI缩放效果",
      tagline: "为任何照片添加电影级缩放",
      description: "在照片上创建令人惊叹的平滑缩放效果。引人注目的戏剧性缩放。",
      detailedDescription: "使用我们的电影级AI缩放效果将静态照片转化为动态视频。",
      howItWorks: [
        { title: "上传照片", description: "选择任意图片。AI自动分析构图、深度和焦点。" },
        { title: "选择缩放风格", description: "选择放大、缩小或推拉变焦。AI建议最佳起点和终点。" },
        { title: "调整参数", description: "微调缩放速度、时长和焦点区域。实时预览。" },
        { title: "生成并导出", description: "AI在几秒内生成流畅的缩放视频。导出到任何平台。" },
      ],
      features: [
        { title: "智能焦点检测", description: "AI自动识别图像中的最佳焦点" },
        { title: "电影级流畅度", description: "如黄油般顺滑的缩放曲线，看起来像专业拍摄" },
        { title: "可自定义速度", description: "控制缩放速度，从慢速戏剧到快速揭示" },
        { title: "放大/缩小选项", description: "选择方向并创建复合缩放效果" },
        { title: "深度感知处理", description: "AI理解3D深度，实现逼真的缩放透视" },
        { title: "即时预览", description: "在最终渲染前查看结果，实时调整" },
      ],
    },
  },
  "ai-orbit-video-effect": {
    es: {
      name: "Efecto de Orbita IA",
      tagline: "Movimiento orbital 360 grados alrededor de tu sujeto",
      description: "Crea impresionantes videos con camara orbitando alrededor del sujeto. Efecto cinematografico profesional.",
      detailedDescription: "Anade movimiento orbital cinematografico a tus fotos con nuestro efecto de orbita IA.",
      howItWorks: [
        { title: "Sube Tu Imagen", description: "Elige una foto con un sujeto claro. Productos, personas, objetos: la IA maneja todos los tipos." },
        { title: "La IA Analiza Profundidad", description: "Nuestra IA separa el sujeto del fondo y calcula profundidad 3D para orbita realista." },
        { title: "Personaliza la Trayectoria", description: "Elige direccion de orbita, angulo y velocidad. Previsualiza el movimiento antes de renderizar." },
        { title: "Genera el Video", description: "La IA crea video con movimiento orbital suave. Exporta y comparte donde quieras." },
      ],
      features: [
        { title: "Movimiento Orbital 360", description: "Movimiento circular completo alrededor de tu sujeto desde cualquier angulo" },
        { title: "Separacion de Sujeto IA", description: "Deteccion inteligente de primer plano y fondo para profundidad realista" },
        { title: "Trayectoria de Orbita Ajustable", description: "Controla direccion, angulo, velocidad y radio de la orbita" },
        { title: "Generacion de Profundidad 3D", description: "Crea perspectiva 3D realista desde imagenes 2D" },
        { title: "Fondo con Parallax", description: "El fondo se mueve naturalmente mientras la camara orbita" },
        { title: "Opcion de Loop Continuo", description: "Crea bucles perfectos para reproduccion continua" },
      ],
    },
    de: {
      name: "KI-Orbit-Videoeffekt",
      tagline: "360-Grad Orbitalbewegung um dein Motiv",
      description: "Erstelle beeindruckende Videos mit Kamera, die um das Motiv kreist. Professioneller cinematischer Effekt.",
      detailedDescription: "Fuege cinematische Orbitalbewegung zu deinen Fotos hinzu mit unserem KI-Orbit-Effekt.",
      howItWorks: [
        { title: "Bild Hochladen", description: "Waehle ein Foto mit klarem Motiv. Produkte, Menschen, Objekte: Die KI verarbeitet alle Typen." },
        { title: "KI Analysiert Tiefe", description: "Unsere KI trennt das Motiv vom Hintergrund und berechnet 3D-Tiefe fuer realistische Orbits." },
        { title: "Orbit-Pfad Anpassen", description: "Waehle Orbit-Richtung, Winkel und Geschwindigkeit. Vorschau der Bewegung vor dem Rendern." },
        { title: "Video Generieren", description: "Die KI erstellt Video mit sanfter Orbitalbewegung. Exportiere und teile ueberall." },
      ],
      features: [
        { title: "360-Grad Orbitbewegung", description: "Vollstaendige Kreisbewegung um dein Motiv aus jedem Winkel" },
        { title: "KI-Motivtrennung", description: "Intelligente Vordergrund/Hintergrund-Erkennung fuer realistische Tiefe" },
        { title: "Einstellbarer Orbit-Pfad", description: "Steuere Richtung, Winkel, Geschwindigkeit und Orbit-Radius" },
        { title: "3D-Tiefengenerierung", description: "Erstellt realistische 3D-Perspektive aus 2D-Bildern" },
        { title: "Parallax-Hintergrund", description: "Hintergrund bewegt sich natuerlich waehrend die Kamera kreist" },
        { title: "Nahtlose Loop-Option", description: "Erstelle perfekte Schleifen fuer kontinuierliche Wiedergabe" },
      ],
    },
    fr: {
      name: "Effet Orbite Video IA",
      tagline: "Mouvement orbital 360 degres autour de votre sujet",
      description: "Creez des videos impressionnantes avec camera orbitant autour du sujet. Effet cinematographique professionnel.",
      detailedDescription: "Ajoutez un mouvement orbital cinematographique a vos photos avec notre effet orbite IA.",
      howItWorks: [
        { title: "Telechargez Votre Image", description: "Choisissez une photo avec un sujet clair. Produits, personnes, objets: l'IA gere tous les types." },
        { title: "L'IA Analyse la Profondeur", description: "Notre IA separe le sujet de l'arriere-plan et calcule la profondeur 3D pour une orbite realiste." },
        { title: "Personnalisez la Trajectoire", description: "Choisissez la direction, l'angle et la vitesse de l'orbite. Previsualisez avant le rendu." },
        { title: "Generez la Video", description: "L'IA cree une video avec mouvement orbital fluide. Exportez et partagez partout." },
      ],
      features: [
        { title: "Mouvement Orbital 360", description: "Mouvement circulaire complet autour de votre sujet depuis n'importe quel angle" },
        { title: "Separation de Sujet IA", description: "Detection intelligente avant-plan/arriere-plan pour profondeur realiste" },
        { title: "Trajectoire d'Orbite Ajustable", description: "Controlez direction, angle, vitesse et rayon de l'orbite" },
        { title: "Generation de Profondeur 3D", description: "Cree une perspective 3D realiste a partir d'images 2D" },
        { title: "Arriere-plan Parallaxe", description: "L'arriere-plan bouge naturellement pendant que la camera orbite" },
        { title: "Option Boucle Continue", description: "Creez des boucles parfaites pour lecture continue" },
      ],
    },
    pt: {
      name: "Efeito Orbita Video IA",
      tagline: "Movimento orbital 360 graus ao redor do seu sujeito",
      description: "Crie videos impressionantes com camera orbitando ao redor do sujeito. Efeito cinematografico profissional.",
      detailedDescription: "Adicione movimento orbital cinematografico as suas fotos com nosso efeito de orbita IA.",
      howItWorks: [
        { title: "Envie Sua Imagem", description: "Escolha uma foto com sujeito claro. Produtos, pessoas, objetos: a IA lida com todos os tipos." },
        { title: "IA Analisa Profundidade", description: "Nossa IA separa o sujeito do fundo e calcula profundidade 3D para orbita realista." },
        { title: "Personalize a Trajetoria", description: "Escolha direcao da orbita, angulo e velocidade. Pre-visualize antes de renderizar." },
        { title: "Gere o Video", description: "A IA cria video com movimento orbital suave. Exporte e compartilhe em qualquer lugar." },
      ],
      features: [
        { title: "Movimento Orbital 360", description: "Movimento circular completo ao redor do seu sujeito de qualquer angulo" },
        { title: "Separacao de Sujeito IA", description: "Deteccao inteligente de primeiro plano/fundo para profundidade realista" },
        { title: "Trajetoria de Orbita Ajustavel", description: "Controle direcao, angulo, velocidade e raio da orbita" },
        { title: "Geracao de Profundidade 3D", description: "Cria perspectiva 3D realista de imagens 2D" },
        { title: "Fundo com Parallax", description: "O fundo move-se naturalmente enquanto a camera orbita" },
        { title: "Opcao de Loop Continuo", description: "Crie loops perfeitos para reproducao continua" },
      ],
    },
    ru: {
      name: "ИИ Эффект Орбиты",
      tagline: "360 градусов орбитальное движение вокруг объекта",
      description: "Создавайте потрясающие видео с камерой, вращающейся вокруг объекта. Профессиональный кинематографический эффект.",
      detailedDescription: "Добавьте кинематографическое орбитальное движение к фото с нашим ИИ эффектом орбиты.",
      howItWorks: [
        { title: "Загрузите Изображение", description: "Выберите фото с чётким объектом. Продукты, люди, объекты: ИИ обрабатывает все типы." },
        { title: "ИИ Анализирует Глубину", description: "Наш ИИ отделяет объект от фона и рассчитывает 3D-глубину для реалистичной орбиты." },
        { title: "Настройте Траекторию", description: "Выберите направление орбиты, угол и скорость. Предварительный просмотр перед рендерингом." },
        { title: "Сгенерируйте Видео", description: "ИИ создаёт видео с плавным орбитальным движением. Экспортируйте и делитесь везде." },
      ],
      features: [
        { title: "360-Градусное Орбитальное Движение", description: "Полное круговое движение вокруг объекта с любого угла" },
        { title: "ИИ-Разделение Объектов", description: "Умное определение переднего и заднего плана для реалистичной глубины" },
        { title: "Настраиваемая Траектория Орбиты", description: "Управляйте направлением, углом, скоростью и радиусом орбиты" },
        { title: "Генерация 3D-Глубины", description: "Создаёт реалистичную 3D-перспективу из 2D-изображений" },
        { title: "Параллакс Фона", description: "Фон движется естественно, пока камера вращается" },
        { title: "Опция Бесшовного Цикла", description: "Создавайте идеальные петли для непрерывного воспроизведения" },
      ],
    },
    it: {
      name: "Effetto Orbita Video IA",
      tagline: "Movimento orbitale 360 gradi attorno al tuo soggetto",
      description: "Crea video impressionanti con fotocamera che orbita attorno al soggetto. Effetto cinematografico professionale.",
      detailedDescription: "Aggiungi movimento orbitale cinematografico alle tue foto con il nostro effetto orbita IA.",
      howItWorks: [
        { title: "Carica la Tua Immagine", description: "Scegli una foto con soggetto chiaro. Prodotti, persone, oggetti: l'IA gestisce tutti i tipi." },
        { title: "L'IA Analizza la Profondita", description: "La nostra IA separa il soggetto dallo sfondo e calcola la profondita 3D per un'orbita realistica." },
        { title: "Personalizza il Percorso", description: "Scegli direzione dell'orbita, angolo e velocita. Anteprima del movimento prima del rendering." },
        { title: "Genera il Video", description: "L'IA crea video con movimento orbitale fluido. Esporta e condividi ovunque." },
      ],
      features: [
        { title: "Movimento Orbitale 360", description: "Movimento circolare completo attorno al soggetto da qualsiasi angolo" },
        { title: "Separazione Soggetto IA", description: "Rilevamento intelligente primo piano/sfondo per profondita realistica" },
        { title: "Percorso Orbita Regolabile", description: "Controlla direzione, angolo, velocita e raggio dell'orbita" },
        { title: "Generazione Profondita 3D", description: "Crea prospettiva 3D realistica da immagini 2D" },
        { title: "Sfondo con Parallasse", description: "Lo sfondo si muove naturalmente mentre la fotocamera orbita" },
        { title: "Opzione Loop Continuo", description: "Crea loop perfetti per riproduzione continua" },
      ],
    },
    nl: {
      name: "AI Orbit Video Effect",
      tagline: "360 graden orbitbeweging rond je onderwerp",
      description: "Maak indrukwekkende videos met camera die rond het onderwerp draait. Professioneel cinematisch effect.",
      detailedDescription: "Voeg cinematische orbitbeweging toe aan je fotos met ons AI orbit effect.",
      howItWorks: [
        { title: "Upload Je Afbeelding", description: "Kies een foto met duidelijk onderwerp. Producten, mensen, objecten: de AI verwerkt alle types." },
        { title: "AI Analyseert Diepte", description: "Onze AI scheidt het onderwerp van de achtergrond en berekent 3D-diepte voor realistische orbit." },
        { title: "Pas Orbitpad Aan", description: "Kies orbitrichting, hoek en snelheid. Preview de beweging voor het renderen." },
        { title: "Genereer Video", description: "AI maakt video met vloeiende orbitbeweging. Exporteer en deel overal." },
      ],
      features: [
        { title: "360 Graden Orbitbeweging", description: "Volledige cirkelbeweging rond je onderwerp vanuit elke hoek" },
        { title: "AI Onderwerpscheiding", description: "Slimme voorgrond/achtergrond detectie voor realistische diepte" },
        { title: "Aanpasbaar Orbitpad", description: "Regel richting, hoek, snelheid en orbit radius" },
        { title: "3D Dieptegeneratie", description: "Creert realistische 3D-perspectief uit 2D-afbeeldingen" },
        { title: "Parallax Achtergrond", description: "Achtergrond beweegt natuurlijk terwijl de camera draait" },
        { title: "Naadloze Loop Optie", description: "Maak perfecte loops voor continue weergave" },
      ],
    },
    pl: {
      name: "Efekt Orbity Wideo AI",
      tagline: "360-stopniowy ruch orbitalny wokol tematu",
      description: "Twórz imponujace filmy z kamera krazaca wokol tematu. Profesjonalny efekt kinowy.",
      detailedDescription: "Dodaj kinowy ruch orbitalny do swoich zdjec z naszym efektem orbity AI.",
      howItWorks: [
        { title: "Przeslij Swój Obraz", description: "Wybierz zdjecie z wyraznym tematem. Produkty, ludzie, obiekty: AI obsluguje wszystkie typy." },
        { title: "AI Analizuje Glebie", description: "Nasze AI oddziela temat od tla i oblicza glebie 3D dla realistycznej orbity." },
        { title: "Dostosuj Sciezke Orbity", description: "Wybierz kierunek orbity, kat i predkosc. Podglad ruchu przed renderowaniem." },
        { title: "Wygeneruj Wideo", description: "AI tworzy wideo z plynnym ruchem orbitalnym. Eksportuj i udostepniaj wszedzie." },
      ],
      features: [
        { title: "360-Stopniowy Ruch Orbitalny", description: "Pelny ruch kolowy wokol tematu z dowolnego kata" },
        { title: "AI Separacja Tematu", description: "Inteligentna detekcja pierwszego planu/tla dla realistycznej glebi" },
        { title: "Regulowana Sciezka Orbity", description: "Kontroluj kierunek, kat, predkosc i promien orbity" },
        { title: "Generacja Glebi 3D", description: "Tworzy realistyczna perspektywe 3D z obrazow 2D" },
        { title: "Tlo z Parallaksa", description: "Tlo porusza sie naturalnie gdy kamera krazy" },
        { title: "Opcja Ciaglej Petli", description: "Twórz idealne petle do ciaglego odtwarzania" },
      ],
    },
    ja: {
      name: "AIオービットビデオエフェクト",
      tagline: "被写体を中心に360度のオービタルモーション",
      description: "被写体の周りをカメラが回転する印象的な動画を作成。プロフェッショナルなシネマティック効果。",
      detailedDescription: "AIオービットエフェクトで写真にシネマティックな軌道運動を追加します。",
      howItWorks: [
        { title: "画像をアップロード", description: "明確な被写体のある写真を選択。製品、人物、オブジェクト：AIがすべてのタイプを処理します。" },
        { title: "AIが深度を分析", description: "AIが被写体を背景から分離し、リアルなオービットのために3D深度を計算します。" },
        { title: "オービットパスをカスタマイズ", description: "オービットの方向、角度、速度を選択。レンダリング前にモーションをプレビュー。" },
        { title: "動画を生成", description: "AIが滑らかなオービタルモーション動画を作成。どこでもエクスポートして共有。" },
      ],
      features: [
        { title: "360度オービットモーション", description: "あらゆる角度から被写体を中心とした完全な円運動" },
        { title: "AI被写体分離", description: "リアルな深度のためのスマートな前景/背景検出" },
        { title: "調整可能なオービットパス", description: "方向、角度、速度、オービット半径を制御" },
        { title: "3D深度生成", description: "2D画像からリアルな3Dパースペクティブを作成" },
        { title: "パララックス背景", description: "カメラが回転する間、背景が自然に動く" },
        { title: "シームレスループオプション", description: "連続再生のための完璧なループを作成" },
      ],
    },
    ko: {
      name: "AI 오빗 비디오 효과",
      tagline: "피사체를 중심으로 360도 궤도 운동",
      description: "피사체 주위를 카메라가 도는 인상적인 비디오를 만드세요. 전문적인 시네마틱 효과.",
      detailedDescription: "AI 오빗 효과로 사진에 시네마틱 궤도 운동을 추가합니다.",
      howItWorks: [
        { title: "이미지 업로드", description: "명확한 피사체가 있는 사진을 선택하세요. 제품, 사람, 오브젝트: AI가 모든 유형을 처리합니다." },
        { title: "AI가 깊이 분석", description: "AI가 피사체를 배경에서 분리하고 사실적인 오빗을 위해 3D 깊이를 계산합니다." },
        { title: "오빗 경로 커스터마이즈", description: "오빗 방향, 각도, 속도를 선택하세요. 렌더링 전 모션 미리보기." },
        { title: "비디오 생성", description: "AI가 부드러운 궤도 운동 비디오를 생성합니다. 어디서나 내보내고 공유하세요." },
      ],
      features: [
        { title: "360도 오빗 모션", description: "어떤 각도에서든 피사체를 중심으로 완전한 원형 운동" },
        { title: "AI 피사체 분리", description: "사실적인 깊이를 위한 스마트한 전경/배경 감지" },
        { title: "조절 가능한 오빗 경로", description: "방향, 각도, 속도, 오빗 반경 제어" },
        { title: "3D 깊이 생성", description: "2D 이미지에서 사실적인 3D 원근감 생성" },
        { title: "패럴랙스 배경", description: "카메라가 회전하는 동안 배경이 자연스럽게 움직임" },
        { title: "끊김 없는 루프 옵션", description: "연속 재생을 위한 완벽한 루프 생성" },
      ],
    },
    zh: {
      name: "AI轨道效果",
      tagline: "围绕主体的360度轨道运动",
      description: "创建相机围绕主体旋转的惊人视频。专业电影效果。",
      detailedDescription: "使用我们的AI轨道效果为照片添加电影级轨道运动。",
      howItWorks: [
        { title: "上传图片", description: "选择有清晰主体的照片。产品、人物、物体：AI处理所有类型。" },
        { title: "AI分析深度", description: "我们的AI将主体从背景中分离，并计算3D深度以实现逼真的轨道。" },
        { title: "自定义轨道路径", description: "选择轨道方向、角度和速度。渲染前预览运动。" },
        { title: "生成视频", description: "AI创建流畅的轨道运动视频。随处导出和分享。" },
      ],
      features: [
        { title: "360度轨道运动", description: "从任何角度围绕主体的完整圆周运动" },
        { title: "AI主体分离", description: "智能前景/背景检测，实现逼真深度" },
        { title: "可调轨道路径", description: "控制方向、角度、速度和轨道半径" },
        { title: "3D深度生成", description: "从2D图像创建逼真的3D透视" },
        { title: "视差背景", description: "相机旋转时背景自然移动" },
        { title: "无缝循环选项", description: "创建完美循环，实现连续播放" },
      ],
    },
  },
  "ai-parallax-video-effect": {
    es: {
      name: "Efecto Parallax IA",
      tagline: "Profundidad 3D desde imagenes 2D",
      description: "Convierte fotos planas en videos con profundidad 3D realista. Efecto parallax cinematografico.",
      detailedDescription: "Crea impresionante profundidad 3D a partir de imagenes 2D con nuestro efecto parallax IA.",
      howItWorks: [
        { title: "Sube Tu Foto", description: "Elige cualquier imagen: paisajes, retratos, productos, arquitectura. Mayor resolucion da resultados mas nitidos." },
        { title: "La IA Crea Mapa de Profundidad", description: "Nuestra IA analiza la imagen y genera un mapa de profundidad multicapa, separando primer plano, plano medio y fondo." },
        { title: "Elige Estilo de Movimiento", description: "Selecciona entre paneo horizontal, deriva vertical, revelacion con zoom o flotacion sutil. Ajusta velocidad e intensidad." },
        { title: "Exporta Tu Video", description: "La IA renderiza movimiento parallax suave. Descarga en HD y comparte en cualquier plataforma." },
      ],
      features: [
        { title: "Deteccion de Profundidad IA", description: "Separa automaticamente imagenes en multiples capas de profundidad para parallax realista" },
        { title: "Multiples Estilos de Movimiento", description: "Paneo horizontal, deriva vertical, revelacion con zoom y efectos de flotacion sutil" },
        { title: "Intensidad Ajustable", description: "Controla cuanta separacion de profundidad y velocidad de movimiento aplicar" },
        { title: "Separacion Multicapa", description: "Hasta 5 capas de profundidad para movimiento parallax suave y natural" },
        { title: "Loop Continuo", description: "Crea bucles perfectos para publicaciones en redes sociales e historias" },
        { title: "Todas las Proporciones", description: "Exporta en vertical, horizontal o cuadrado para cualquier plataforma" },
      ],
    },
    de: {
      name: "KI-Parallax-Videoeffekt",
      tagline: "3D-Tiefe aus 2D-Bildern",
      description: "Verwandle flache Fotos in Videos mit realistischer 3D-Tiefe. Cinematischer Parallax-Effekt.",
      detailedDescription: "Erstelle beeindruckende 3D-Tiefe aus 2D-Bildern mit unserem KI-Parallax-Effekt.",
      howItWorks: [
        { title: "Foto Hochladen", description: "Waehle ein beliebiges Bild: Landschaften, Portraits, Produkte, Architektur. Hoehere Aufloesung gibt schaerfere Ergebnisse." },
        { title: "KI Erstellt Tiefenkarte", description: "Unsere KI analysiert das Bild und generiert eine mehrschichtige Tiefenkarte, trennt Vordergrund, Mittelgrund und Hintergrund." },
        { title: "Bewegungsstil Waehlen", description: "Waehle aus horizontalem Schwenk, vertikalem Drift, Zoom-Enthuellung oder subtiler Schwebung. Passe Geschwindigkeit und Intensitaet an." },
        { title: "Video Exportieren", description: "Die KI rendert sanfte Parallax-Bewegung. In HD herunterladen und auf jeder Plattform teilen." },
      ],
      features: [
        { title: "KI-Tiefenerkennung", description: "Trennt Bilder automatisch in mehrere Tiefenschichten fuer realistischen Parallax" },
        { title: "Mehrere Bewegungsstile", description: "Horizontaler Schwenk, vertikaler Drift, Zoom-Enthuellung und subtile Schwebeffekte" },
        { title: "Einstellbare Intensitaet", description: "Steuere wie viel Tiefentrennung und Bewegungsgeschwindigkeit angewendet wird" },
        { title: "Mehrschicht-Trennung", description: "Bis zu 5 Tiefenschichten fuer sanfte, natuerlich aussehende Parallax-Bewegung" },
        { title: "Nahtloses Loopen", description: "Erstelle perfekte Schleifen fuer Social Media Beitraege und Stories" },
        { title: "Alle Seitenverhaeltnisse", description: "Exportiere in Hoch-, Querformat oder quadratisch fuer jede Plattform" },
      ],
    },
    fr: {
      name: "Effet Parallaxe Video IA",
      tagline: "Profondeur 3D a partir d'images 2D",
      description: "Convertissez les photos plates en videos avec profondeur 3D realiste. Effet parallaxe cinematographique.",
      detailedDescription: "Creez une profondeur 3D impressionnante a partir d'images 2D avec notre effet parallaxe IA.",
      howItWorks: [
        { title: "Telechargez Votre Photo", description: "Choisissez n'importe quelle image: paysages, portraits, produits, architecture. Plus haute resolution donne des resultats plus nets." },
        { title: "L'IA Cree la Carte de Profondeur", description: "Notre IA analyse l'image et genere une carte de profondeur multicouche, separant premier plan, plan moyen et arriere-plan." },
        { title: "Choisissez le Style de Mouvement", description: "Selectionnez parmi panoramique horizontal, derive verticale, revelation zoom ou flottement subtil. Ajustez vitesse et intensite." },
        { title: "Exportez Votre Video", description: "L'IA rend un mouvement parallaxe fluide. Telechargez en HD et partagez sur toute plateforme." },
      ],
      features: [
        { title: "Detection de Profondeur IA", description: "Separe automatiquement les images en plusieurs couches de profondeur pour un parallaxe realiste" },
        { title: "Plusieurs Styles de Mouvement", description: "Panoramique horizontal, derive verticale, revelation zoom et effets de flottement subtil" },
        { title: "Intensite Ajustable", description: "Controlez la separation de profondeur et la vitesse de mouvement a appliquer" },
        { title: "Separation Multicouche", description: "Jusqu'a 5 couches de profondeur pour un mouvement parallaxe fluide et naturel" },
        { title: "Boucle Continue", description: "Creez des boucles parfaites pour les publications et stories sur les reseaux sociaux" },
        { title: "Tous les Ratios", description: "Exportez en portrait, paysage ou carre pour toute plateforme" },
      ],
    },
    pt: {
      name: "Efeito Parallax Video IA",
      tagline: "Profundidade 3D de imagens 2D",
      description: "Converta fotos planas em videos com profundidade 3D realista. Efeito parallax cinematografico.",
      detailedDescription: "Crie profundidade 3D impressionante de imagens 2D com nosso efeito parallax IA.",
      howItWorks: [
        { title: "Envie Sua Foto", description: "Escolha qualquer imagem: paisagens, retratos, produtos, arquitetura. Maior resolucao da resultados mais nitidos." },
        { title: "IA Cria Mapa de Profundidade", description: "Nossa IA analisa a imagem e gera um mapa de profundidade multicamada, separando primeiro plano, plano medio e fundo." },
        { title: "Escolha o Estilo de Movimento", description: "Selecione entre panoramica horizontal, deriva vertical, revelacao com zoom ou flutuacao sutil. Ajuste velocidade e intensidade." },
        { title: "Exporte Seu Video", description: "A IA renderiza movimento parallax suave. Baixe em HD e compartilhe em qualquer plataforma." },
      ],
      features: [
        { title: "Deteccao de Profundidade IA", description: "Separa automaticamente imagens em multiplas camadas de profundidade para parallax realista" },
        { title: "Multiplos Estilos de Movimento", description: "Panoramica horizontal, deriva vertical, revelacao com zoom e efeitos de flutuacao sutil" },
        { title: "Intensidade Ajustavel", description: "Controle quanta separacao de profundidade e velocidade de movimento aplicar" },
        { title: "Separacao Multicamada", description: "Ate 5 camadas de profundidade para movimento parallax suave e natural" },
        { title: "Loop Continuo", description: "Crie loops perfeitos para postagens e stories em redes sociais" },
        { title: "Todas as Proporcoes", description: "Exporte em retrato, paisagem ou quadrado para qualquer plataforma" },
      ],
    },
    ru: {
      name: "ИИ Эффект Параллакса",
      tagline: "3D глубина из 2D изображений",
      description: "Конвертируйте плоские фото в видео с реалистичной 3D глубиной. Кинематографический эффект параллакса.",
      detailedDescription: "Создавайте потрясающую 3D глубину из 2D изображений с нашим ИИ эффектом параллакса.",
      howItWorks: [
        { title: "Загрузите Фото", description: "Выберите любое изображение: пейзажи, портреты, продукты, архитектура. Более высокое разрешение даёт более чёткие результаты." },
        { title: "ИИ Создаёт Карту Глубины", description: "Наш ИИ анализирует изображение и генерирует многослойную карту глубины, разделяя передний, средний и задний планы." },
        { title: "Выберите Стиль Движения", description: "Выберите из горизонтального панорамирования, вертикального дрейфа, зум-раскрытия или лёгкого парения. Настройте скорость и интенсивность." },
        { title: "Экспортируйте Видео", description: "ИИ рендерит плавное параллакс-движение. Скачайте в HD и делитесь на любой платформе." },
      ],
      features: [
        { title: "ИИ-Определение Глубины", description: "Автоматически разделяет изображения на несколько слоёв глубины для реалистичного параллакса" },
        { title: "Несколько Стилей Движения", description: "Горизонтальное панорамирование, вертикальный дрейф, зум-раскрытие и эффекты лёгкого парения" },
        { title: "Настраиваемая Интенсивность", description: "Контролируйте степень разделения глубины и скорость движения" },
        { title: "Многослойное Разделение", description: "До 5 слоёв глубины для плавного, естественного параллакс-движения" },
        { title: "Бесшовное Зацикливание", description: "Создавайте идеальные петли для публикаций и историй в социальных сетях" },
        { title: "Все Соотношения Сторон", description: "Экспортируйте в портретном, альбомном или квадратном формате для любой платформы" },
      ],
    },
    it: {
      name: "Effetto Parallasse Video IA",
      tagline: "Profondita 3D da immagini 2D",
      description: "Converti foto piatte in video con profondita 3D realistica. Effetto parallasse cinematografico.",
      detailedDescription: "Crea profondita 3D impressionante da immagini 2D con il nostro effetto parallasse IA.",
      howItWorks: [
        { title: "Carica la Tua Foto", description: "Scegli qualsiasi immagine: paesaggi, ritratti, prodotti, architettura. Risoluzione piu alta da risultati piu nitidi." },
        { title: "L'IA Crea Mappa di Profondita", description: "La nostra IA analizza l'immagine e genera una mappa di profondita multistrato, separando primo piano, piano medio e sfondo." },
        { title: "Scegli lo Stile di Movimento", description: "Seleziona tra panoramica orizzontale, deriva verticale, rivelazione zoom o fluttuazione sottile. Regola velocita e intensita." },
        { title: "Esporta il Tuo Video", description: "L'IA renderizza movimento parallasse fluido. Scarica in HD e condividi su qualsiasi piattaforma." },
      ],
      features: [
        { title: "Rilevamento Profondita IA", description: "Separa automaticamente le immagini in piu strati di profondita per parallasse realistico" },
        { title: "Piu Stili di Movimento", description: "Panoramica orizzontale, deriva verticale, rivelazione zoom e effetti di fluttuazione sottile" },
        { title: "Intensita Regolabile", description: "Controlla quanta separazione di profondita e velocita di movimento applicare" },
        { title: "Separazione Multistrato", description: "Fino a 5 strati di profondita per movimento parallasse fluido e naturale" },
        { title: "Loop Continuo", description: "Crea loop perfetti per post e storie sui social media" },
        { title: "Tutti i Rapporti", description: "Esporta in verticale, orizzontale o quadrato per qualsiasi piattaforma" },
      ],
    },
    nl: {
      name: "AI Parallax Video Effect",
      tagline: "3D-diepte uit 2D-afbeeldingen",
      description: "Verander platte fotos in videos met realistische 3D-diepte. Cinematisch parallax effect.",
      detailedDescription: "Creeer indrukwekkende 3D-diepte uit 2D-afbeeldingen met ons AI parallax effect.",
      howItWorks: [
        { title: "Upload Je Foto", description: "Kies een willekeurige afbeelding: landschappen, portretten, producten, architectuur. Hogere resolutie geeft scherpere resultaten." },
        { title: "AI Maakt Dieptekaart", description: "Onze AI analyseert de afbeelding en genereert een meerlaagse dieptekaart, scheidt voorgrond, middenplan en achtergrond." },
        { title: "Kies Bewegingsstijl", description: "Selecteer uit horizontale pan, verticale drift, zoom onthulling of subtiele zweving. Pas snelheid en intensiteit aan." },
        { title: "Exporteer Je Video", description: "AI rendert vloeiende parallax beweging. Download in HD en deel op elk platform." },
      ],
      features: [
        { title: "AI Dieptedetectie", description: "Scheidt automatisch afbeeldingen in meerdere dieptelagen voor realistische parallax" },
        { title: "Meerdere Bewegingsstijlen", description: "Horizontale pan, verticale drift, zoom onthulling en subtiele zweefeffecten" },
        { title: "Aanpasbare Intensiteit", description: "Regel hoeveel dieptescheiding en bewegingssnelheid toe te passen" },
        { title: "Meerlaagse Scheiding", description: "Tot 5 dieptelagen voor vloeiende, natuurlijk ogende parallax beweging" },
        { title: "Naadloos Loopen", description: "Maak perfecte loops voor social media posts en stories" },
        { title: "Alle Verhoudingen", description: "Exporteer in portret, landschap of vierkant voor elk platform" },
      ],
    },
    pl: {
      name: "Efekt Parallax Wideo AI",
      tagline: "Glebia 3D z obrazow 2D",
      description: "Przeksztalcaj plaskie zdjecia w filmy z realistyczna glebia 3D. Kinowy efekt parallax.",
      detailedDescription: "Twórz imponujaca glebie 3D z obrazow 2D z naszym efektem parallax AI.",
      howItWorks: [
        { title: "Przeslij Swoje Zdjecie", description: "Wybierz dowolny obraz: krajobrazy, portrety, produkty, architektura. Wyzsza rozdzielczosc daje ostrzejsze wyniki." },
        { title: "AI Tworzy Mape Glebi", description: "Nasze AI analizuje obraz i generuje wielowarstwowa mape glebi, rozdzielajac pierwszy plan, plan sredni i tlo." },
        { title: "Wybierz Styl Ruchu", description: "Wybierz z panoramy poziomej, dryfu pionowego, odsloniecia zoom lub subtelnego unoszenia. Dostosuj predkosc i intensywnosc." },
        { title: "Eksportuj Swoje Wideo", description: "AI renderuje plynny ruch parallax. Pobierz w HD i udostepniaj na dowolnej platformie." },
      ],
      features: [
        { title: "Detekcja Glebi AI", description: "Automatycznie rozdziela obrazy na wiele warstw glebi dla realistycznego parallaxu" },
        { title: "Wiele Stylów Ruchu", description: "Panorama pozioma, dryf pionowy, odsloniecie zoom i efekty subtelnego unoszenia" },
        { title: "Regulowana Intensywnosc", description: "Kontroluj ile separacji glebi i predkosci ruchu zastosowac" },
        { title: "Wielowarstwowa Separacja", description: "Do 5 warstw glebi dla plynnego, naturalnego ruchu parallax" },
        { title: "Ciagla Petla", description: "Twórz idealne petle do postow i stories w mediach spolecznosciowych" },
        { title: "Wszystkie Proporcje", description: "Eksportuj w pionie, poziomie lub kwadracie na dowolna platforme" },
      ],
    },
    ja: {
      name: "AIパララックスビデオエフェクト",
      tagline: "2D画像から3D深度を作成",
      description: "平面写真をリアルな3D深度を持つ動画に変換。シネマティックなパララックス効果。",
      detailedDescription: "AIパララックスエフェクトで2D画像から印象的な3D深度を作成します。",
      howItWorks: [
        { title: "写真をアップロード", description: "任意の画像を選択：風景、ポートレート、製品、建築。高解像度ほどシャープな結果が得られます。" },
        { title: "AIが深度マップを作成", description: "AIが画像を分析し、前景、中景、背景を分離したマルチレイヤー深度マップを生成します。" },
        { title: "モーションスタイルを選択", description: "水平パン、垂直ドリフト、ズームリビール、または微妙なフロートから選択。速度と強度を調整。" },
        { title: "動画をエクスポート", description: "AIが滑らかなパララックスモーションをレンダリング。HDでダウンロードしてどのプラットフォームでも共有。" },
      ],
      features: [
        { title: "AI深度検出", description: "リアルなパララックスのために画像を複数の深度レイヤーに自動分離" },
        { title: "複数のモーションスタイル", description: "水平パン、垂直ドリフト、ズームリビール、微妙なフロートエフェクト" },
        { title: "調整可能な強度", description: "適用する深度分離と動作速度を制御" },
        { title: "マルチレイヤー分離", description: "滑らかで自然なパララックスモーションのための最大5つの深度レイヤー" },
        { title: "シームレスループ", description: "ソーシャルメディアの投稿やストーリー用の完璧なループを作成" },
        { title: "すべてのアスペクト比", description: "縦、横、正方形でどのプラットフォームにもエクスポート" },
      ],
    },
    ko: {
      name: "AI 패럴랙스 비디오 효과",
      tagline: "2D 이미지에서 3D 깊이 생성",
      description: "평면 사진을 사실적인 3D 깊이가 있는 비디오로 변환하세요. 시네마틱 패럴랙스 효과.",
      detailedDescription: "AI 패럴랙스 효과로 2D 이미지에서 인상적인 3D 깊이를 만드세요.",
      howItWorks: [
        { title: "사진 업로드", description: "아무 이미지나 선택하세요: 풍경, 인물, 제품, 건축물. 높은 해상도일수록 선명한 결과를 얻습니다." },
        { title: "AI가 깊이 맵 생성", description: "AI가 이미지를 분석하고 전경, 중경, 배경을 분리하는 다중 레이어 깊이 맵을 생성합니다." },
        { title: "모션 스타일 선택", description: "수평 팬, 수직 드리프트, 줌 리빌 또는 미묘한 플로트 중에서 선택하세요. 속도와 강도를 조정하세요." },
        { title: "비디오 내보내기", description: "AI가 부드러운 패럴랙스 모션을 렌더링합니다. HD로 다운로드하고 모든 플랫폼에서 공유하세요." },
      ],
      features: [
        { title: "AI 깊이 감지", description: "사실적인 패럴랙스를 위해 이미지를 여러 깊이 레이어로 자동 분리" },
        { title: "다양한 모션 스타일", description: "수평 팬, 수직 드리프트, 줌 리빌, 미묘한 플로트 효과" },
        { title: "조절 가능한 강도", description: "적용할 깊이 분리와 움직임 속도 제어" },
        { title: "다중 레이어 분리", description: "부드럽고 자연스러운 패럴랙스 모션을 위한 최대 5개의 깊이 레이어" },
        { title: "끊김 없는 루핑", description: "소셜 미디어 게시물과 스토리를 위한 완벽한 루프 생성" },
        { title: "모든 비율 지원", description: "세로, 가로, 정사각형으로 모든 플랫폼에 내보내기" },
      ],
    },
    zh: {
      name: "AI视差效果",
      tagline: "从2D图像创建3D深度",
      description: "将平面照片转换为具有逼真3D深度的视频。电影级视差效果。",
      detailedDescription: "使用我们的AI视差效果从2D图像创建令人惊叹的3D深度。",
      howItWorks: [
        { title: "上传照片", description: "选择任意图片：风景、肖像、产品、建筑。更高分辨率会产生更清晰的结果。" },
        { title: "AI创建深度图", description: "我们的AI分析图像并生成多层深度图，分离前景、中景和背景。" },
        { title: "选择运动风格", description: "从水平平移、垂直漂移、缩放揭示或微妙漂浮中选择。调整速度和强度。" },
        { title: "导出视频", description: "AI渲染流畅的视差运动。以HD下载并在任何平台分享。" },
      ],
      features: [
        { title: "AI深度检测", description: "自动将图像分离为多个深度层，实现逼真视差" },
        { title: "多种运动风格", description: "水平平移、垂直漂移、缩放揭示和微妙漂浮效果" },
        { title: "可调强度", description: "控制应用多少深度分离和运动速度" },
        { title: "多层分离", description: "最多5个深度层，实现流畅自然的视差运动" },
        { title: "无缝循环", description: "为社交媒体帖子和故事创建完美循环" },
        { title: "所有比例", description: "以纵向、横向或方形导出到任何平台" },
      ],
    },
  },
  "ai-product-video-maker": {
    es: {
      name: "Creador de Videos de Producto IA",
      tagline: "Videos de producto profesionales desde fotos",
      description: "Crea videos de producto impresionantes para e-commerce. Perfectos para tiendas online y redes sociales.",
      detailedDescription: "Transforma fotos de productos en videos de ventas profesionales con nuestro creador de videos de producto IA.",
      howItWorks: [
        { title: "Sube Fotos de Producto", description: "Sube una o mas imagenes de producto. Fotos con fondo blanco funcionan genial, pero cualquier foto sirve." },
        { title: "Selecciona Estilo de Video", description: "Elige entre plantillas optimizadas para e-commerce: Presentacion Hero, Destacado de Caracteristicas, Contexto Lifestyle o Giro 360." },
        { title: "Personaliza para Tu Tienda", description: "Anade tu logo, precios, insignias de caracteristicas y elige la proporcion correcta para tu listado o anuncios sociales." },
        { title: "Exporta y Publica", description: "Descarga en formatos listos para marketplace. Sube directamente a tus listados de productos o usa en campanas publicitarias." },
      ],
      features: [
        { title: "IA Enfocada en Productos", description: "IA entrenada especificamente en fotografia de productos para resultados de exhibicion optimos" },
        { title: "Plantillas E-commerce", description: "Plantillas preconstruidas optimizadas para listados de productos y videos de tiendas online" },
        { title: "Etiquetas de Precio y Caracteristicas", description: "Anade superposiciones de texto dinamicas destacando precio, caracteristicas y puntos de venta" },
        { title: "Exportacion Multi-Formato", description: "Exporta en formatos cuadrado, horizontal o vertical para cualquier marketplace o plataforma de anuncios" },
        { title: "Generacion Rapida", description: "Crea videos de producto en segundos, no horas, sin habilidades de edicion requeridas" },
        { title: "Variantes para Test A/B", description: "Genera multiples versiones de video para probar cual convierte mejor" },
      ],
    },
    de: {
      name: "KI-Produktvideo-Maker",
      tagline: "Professionelle Produktvideos aus Fotos",
      description: "Erstelle beeindruckende Produktvideos fuer E-Commerce. Perfekt fuer Online-Shops und Social Media.",
      detailedDescription: "Verwandle Produktfotos in professionelle Verkaufsvideos mit unserem KI-Produktvideo-Maker.",
      howItWorks: [
        { title: "Produktfotos Hochladen", description: "Lade ein oder mehrere Produktbilder hoch. Saubere Produkt-auf-Weiss-Hintergruende funktionieren super, aber jedes Foto reicht." },
        { title: "Video-Stil Waehlen", description: "Waehle aus E-Commerce-optimierten Templates: Hero Showcase, Feature Highlight, Lifestyle Kontext oder 360-Grad Spin." },
        { title: "Fuer Deinen Shop Anpassen", description: "Fuege dein Markenlogo, Preisangaben, Feature-Badges hinzu und waehle das richtige Seitenverhaeltnis fuer dein Listing oder Social Ads." },
        { title: "Exportieren und Listen", description: "In marktplatz-fertigen Formaten herunterladen. Direkt zu deinen Produktlistings hochladen oder in Werbekampagnen verwenden." },
      ],
      features: [
        { title: "Produkt-fokussierte KI", description: "KI speziell fuer Produktfotografie trainiert fuer optimale Praesentationsergebnisse" },
        { title: "E-Commerce Templates", description: "Vorgefertigte Templates optimiert fuer Produktlistings und Online-Shop-Videos" },
        { title: "Preis- und Feature-Callouts", description: "Fuege dynamische Text-Overlays hinzu, die Preis, Features und Verkaufsargumente hervorheben" },
        { title: "Multi-Format Export", description: "Exportiere in quadratischen, Quer- oder Hochformaten fuer jeden Marktplatz oder Werbeplattform" },
        { title: "Schnelle Generierung", description: "Erstelle Produktvideos in Sekunden, nicht Stunden, ohne Bearbeitungskenntnisse" },
        { title: "A/B-Test Varianten", description: "Generiere mehrere Videoversionen um zu testen, welche am besten konvertiert" },
      ],
    },
    fr: {
      name: "Createur de Videos Produit IA",
      tagline: "Videos de produit professionnelles a partir de photos",
      description: "Creez des videos de produit impressionnantes pour l'e-commerce. Parfaites pour les boutiques en ligne et les reseaux sociaux.",
      detailedDescription: "Transformez les photos de produits en videos de vente professionnelles avec notre createur de videos produit IA.",
      howItWorks: [
        { title: "Telechargez les Photos Produit", description: "Telechargez une ou plusieurs images de produit. Les photos sur fond blanc fonctionnent tres bien, mais toute photo convient." },
        { title: "Selectionnez le Style Video", description: "Choisissez parmi les templates optimises e-commerce: Hero Showcase, Mise en Avant des Caracteristiques, Contexte Lifestyle ou Rotation 360." },
        { title: "Personnalisez pour Votre Boutique", description: "Ajoutez votre logo, prix, badges de caracteristiques et choisissez le bon ratio pour votre listing ou publicites sociales." },
        { title: "Exportez et Publiez", description: "Telechargez dans des formats prets pour les marketplaces. Uploadez directement sur vos fiches produits ou utilisez dans vos campagnes publicitaires." },
      ],
      features: [
        { title: "IA Focalisee Produit", description: "IA entrainee specifiquement sur la photographie de produit pour des resultats de presentation optimaux" },
        { title: "Templates E-commerce", description: "Templates preconstruits optimises pour les fiches produits et videos de boutiques en ligne" },
        { title: "Callouts Prix et Caracteristiques", description: "Ajoutez des superpositions de texte dynamiques mettant en valeur prix, caracteristiques et arguments de vente" },
        { title: "Export Multi-Format", description: "Exportez en formats carre, paysage ou portrait pour toute marketplace ou plateforme publicitaire" },
        { title: "Generation Rapide", description: "Creez des videos produit en secondes, pas en heures, sans competences de montage requises" },
        { title: "Variantes pour Tests A/B", description: "Generez plusieurs versions video pour tester laquelle convertit le mieux" },
      ],
    },
    pt: {
      name: "Criador de Videos de Produto IA",
      tagline: "Videos de produto profissionais de fotos",
      description: "Crie videos de produto impressionantes para e-commerce. Perfeitos para lojas online e redes sociais.",
      detailedDescription: "Transforme fotos de produtos em videos de vendas profissionais com nosso criador de videos de produto IA.",
      howItWorks: [
        { title: "Envie Fotos do Produto", description: "Envie uma ou mais imagens do produto. Fotos com fundo branco funcionam otimo, mas qualquer foto serve." },
        { title: "Selecione o Estilo do Video", description: "Escolha entre templates otimizados para e-commerce: Apresentacao Hero, Destaque de Recursos, Contexto Lifestyle ou Giro 360." },
        { title: "Personalize para Sua Loja", description: "Adicione seu logo, precos, badges de recursos e escolha a proporcao certa para seu listing ou anuncios sociais." },
        { title: "Exporte e Publique", description: "Baixe em formatos prontos para marketplace. Envie diretamente para seus listings de produtos ou use em campanhas publicitarias." },
      ],
      features: [
        { title: "IA Focada em Produtos", description: "IA treinada especificamente em fotografia de produtos para resultados de exibicao otimos" },
        { title: "Templates E-commerce", description: "Templates pre-construidos otimizados para listings de produtos e videos de lojas online" },
        { title: "Etiquetas de Preco e Recursos", description: "Adicione sobreposicoes de texto dinamicas destacando preco, recursos e pontos de venda" },
        { title: "Exportacao Multi-Formato", description: "Exporte em formatos quadrado, paisagem ou retrato para qualquer marketplace ou plataforma de anuncios" },
        { title: "Geracao Rapida", description: "Crie videos de produto em segundos, nao horas, sem habilidades de edicao necessarias" },
        { title: "Variantes para Teste A/B", description: "Gere multiplas versoes de video para testar qual converte melhor" },
      ],
    },
    ru: {
      name: "ИИ Создатель Видео Продуктов",
      tagline: "Профессиональные видео продуктов из фото",
      description: "Создавайте впечатляющие видео продуктов для e-commerce. Идеально для интернет-магазинов и соцсетей.",
      detailedDescription: "Превращайте фото продуктов в профессиональные продающие видео с нашим ИИ создателем видео продуктов.",
      howItWorks: [
        { title: "Загрузите Фото Продукта", description: "Загрузите одно или несколько изображений продукта. Фото на белом фоне отлично подходят, но любое фото сгодится." },
        { title: "Выберите Стиль Видео", description: "Выберите из шаблонов, оптимизированных для e-commerce: Hero-презентация, Акцент на функциях, Лайфстайл-контекст или 360-градусный поворот." },
        { title: "Настройте под Ваш Магазин", description: "Добавьте логотип, цены, бейджи характеристик и выберите правильное соотношение сторон для листинга или рекламы в соцсетях." },
        { title: "Экспортируйте и Публикуйте", description: "Скачайте в форматах, готовых для маркетплейсов. Загружайте прямо в карточки товаров или используйте в рекламных кампаниях." },
      ],
      features: [
        { title: "ИИ, Ориентированная на Продукты", description: "ИИ, обученная специально на продуктовой фотографии для оптимальных результатов презентации" },
        { title: "Шаблоны для E-commerce", description: "Готовые шаблоны, оптимизированные для карточек товаров и видео интернет-магазинов" },
        { title: "Метки Цен и Характеристик", description: "Добавляйте динамические текстовые наложения с ценой, характеристиками и преимуществами" },
        { title: "Многоформатный Экспорт", description: "Экспортируйте в квадратном, горизонтальном или вертикальном формате для любого маркетплейса или рекламной платформы" },
        { title: "Быстрая Генерация", description: "Создавайте видео продуктов за секунды, а не часы, без навыков монтажа" },
        { title: "Варианты для A/B-Тестов", description: "Генерируйте несколько версий видео, чтобы проверить, какая конвертирует лучше" },
      ],
    },
    it: {
      name: "Creatore Video Prodotto IA",
      tagline: "Video di prodotto professionali da foto",
      description: "Crea video di prodotto impressionanti per l'e-commerce. Perfetti per negozi online e social media.",
      detailedDescription: "Trasforma le foto dei prodotti in video di vendita professionali con il nostro creatore video prodotto IA.",
      howItWorks: [
        { title: "Carica Foto Prodotto", description: "Carica una o piu immagini del prodotto. Le foto su sfondo bianco funzionano benissimo, ma qualsiasi foto va bene." },
        { title: "Seleziona Stile Video", description: "Scegli tra template ottimizzati per e-commerce: Hero Showcase, Evidenziazione Caratteristiche, Contesto Lifestyle o Rotazione 360." },
        { title: "Personalizza per il Tuo Negozio", description: "Aggiungi il tuo logo, prezzi, badge caratteristiche e scegli il rapporto corretto per il tuo listing o annunci social." },
        { title: "Esporta e Pubblica", description: "Scarica in formati pronti per marketplace. Carica direttamente nelle tue schede prodotto o usa nelle campagne pubblicitarie." },
      ],
      features: [
        { title: "IA Focalizzata sui Prodotti", description: "IA addestrata specificamente sulla fotografia di prodotto per risultati di presentazione ottimali" },
        { title: "Template E-commerce", description: "Template precostituiti ottimizzati per schede prodotto e video di negozi online" },
        { title: "Callout Prezzi e Caratteristiche", description: "Aggiungi sovrapposizioni di testo dinamiche che evidenziano prezzo, caratteristiche e punti di vendita" },
        { title: "Esportazione Multi-Formato", description: "Esporta in formati quadrato, orizzontale o verticale per qualsiasi marketplace o piattaforma pubblicitaria" },
        { title: "Generazione Rapida", description: "Crea video prodotto in secondi, non ore, senza competenze di editing richieste" },
        { title: "Varianti per Test A/B", description: "Genera piu versioni video per testare quale converte meglio" },
      ],
    },
    nl: {
      name: "AI Product Video Maker",
      tagline: "Professionele productvideo's van foto's",
      description: "Maak indrukwekkende productvideo's voor e-commerce. Perfect voor online winkels en social media.",
      detailedDescription: "Verander productfoto's in professionele verkoop video's met onze AI product video maker.",
      howItWorks: [
        { title: "Upload Productfoto's", description: "Upload een of meer productafbeeldingen. Schone product-op-wit achtergronden werken geweldig, maar elke foto is goed." },
        { title: "Selecteer Video Stijl", description: "Kies uit e-commerce geoptimaliseerde templates: Hero Showcase, Feature Highlight, Lifestyle Context of 360 Graden Spin." },
        { title: "Pas Aan voor Je Winkel", description: "Voeg je merklogo, prijzen, feature badges toe en kies de juiste verhouding voor je listing of social ads." },
        { title: "Exporteer en Publiceer", description: "Download in marketplace-klare formaten. Upload direct naar je productlistings of gebruik in reclamecampagnes." },
      ],
      features: [
        { title: "Product-gerichte AI", description: "AI specifiek getraind op productfotografie voor optimale showcase resultaten" },
        { title: "E-commerce Templates", description: "Voorgebouwde templates geoptimaliseerd voor productlistings en online winkel video's" },
        { title: "Prijs- en Feature Callouts", description: "Voeg dynamische tekstoverlays toe die prijs, features en verkoopargumenten benadrukken" },
        { title: "Multi-Format Export", description: "Exporteer in vierkante, landschap of portret formaten voor elke marketplace of advertentieplatform" },
        { title: "Snelle Generatie", description: "Maak productvideo's in seconden, niet uren, geen bewerkingsvaardigheden nodig" },
        { title: "A/B Test Varianten", description: "Genereer meerdere videoversies om te testen welke het beste converteert" },
      ],
    },
    pl: {
      name: "Kreator Wideo Produktowych AI",
      tagline: "Profesjonalne filmy produktowe ze zdjec",
      description: "Twórz imponujace filmy produktowe dla e-commerce. Idealne dla sklepow online i mediow spolecznosciowych.",
      detailedDescription: "Przeksztalcaj zdjecia produktow w profesjonalne filmy sprzedazowe z naszym kreatorem wideo produktowych AI.",
      howItWorks: [
        { title: "Przeslij Zdjecia Produktu", description: "Przeslij jedno lub wiecej zdjec produktu. Zdjecia na bialym tle dzialaja swietnie, ale kazde zdjecie sie nada." },
        { title: "Wybierz Styl Wideo", description: "Wybierz z szablonow zoptymalizowanych dla e-commerce: Hero Showcase, Podkreslenie Cech, Kontekst Lifestyle lub Obrot 360." },
        { title: "Dostosuj dla Swojego Sklepu", description: "Dodaj logo, ceny, odznaki cech i wybierz odpowiednia proporcje dla listingu lub reklam spolecznosciowych." },
        { title: "Eksportuj i Publikuj", description: "Pobierz w formatach gotowych na marketplace. Wrzuc bezposrednio do listingow produktow lub uzyj w kampaniach reklamowych." },
      ],
      features: [
        { title: "AI Skupione na Produktach", description: "AI przeszkolone specjalnie na fotografii produktowej dla optymalnych wynikow prezentacji" },
        { title: "Szablony E-commerce", description: "Gotowe szablony zoptymalizowane dla listingow produktow i filmow sklepow online" },
        { title: "Oznaczenia Cen i Cech", description: "Dodaj dynamiczne nakladki tekstowe podkreslajace cene, cechy i argumenty sprzedazowe" },
        { title: "Eksport Multi-Format", description: "Eksportuj w formatach kwadrat, poziom lub pion dla kazdego marketplace lub platformy reklamowej" },
        { title: "Szybka Generacja", description: "Twórz filmy produktowe w sekundy, nie godziny, bez umiejetnosci edycji" },
        { title: "Warianty do Testow A/B", description: "Generuj wiele wersji wideo, aby przetestowac, ktora konwertuje lepiej" },
      ],
    },
    ja: {
      name: "AI製品動画メーカー",
      tagline: "写真からプロフェッショナルな製品動画を作成",
      description: "Eコマース向けの印象的な製品動画を作成。オンラインストアとソーシャルメディアに最適。",
      detailedDescription: "AI製品動画メーカーで製品写真をプロフェッショナルなセールス動画に変換します。",
      howItWorks: [
        { title: "製品写真をアップロード", description: "1枚以上の製品画像をアップロード。白背景の製品写真が最適ですが、どんな写真でも使えます。" },
        { title: "動画スタイルを選択", description: "Eコマース最適化テンプレートから選択：ヒーローショーケース、機能ハイライト、ライフスタイルコンテキスト、または360度スピン。" },
        { title: "ショップ用にカスタマイズ", description: "ブランドロゴ、価格、機能バッジを追加し、リスティングやソーシャル広告に適したアスペクト比を選択。" },
        { title: "エクスポートして掲載", description: "マーケットプレイス対応フォーマットでダウンロード。製品リスティングに直接アップロードするか、広告キャンペーンで使用。" },
      ],
      features: [
        { title: "製品特化AI", description: "最適なショーケース結果のために製品写真に特化してトレーニングされたAI" },
        { title: "Eコマーステンプレート", description: "製品リスティングとオンラインストア動画向けに最適化されたプリセットテンプレート" },
        { title: "価格・機能コールアウト", description: "価格、機能、セールスポイントを強調するダイナミックなテキストオーバーレイを追加" },
        { title: "マルチフォーマットエクスポート", description: "あらゆるマーケットプレイスや広告プラットフォーム向けに正方形、横長、縦長でエクスポート" },
        { title: "高速生成", description: "編集スキル不要で、数時間ではなく数秒で製品動画を作成" },
        { title: "A/Bテストバリアント", description: "複数の動画バージョンを生成して、どれが最もコンバートするかテスト" },
      ],
    },
    ko: {
      name: "AI 제품 비디오 메이커",
      tagline: "사진에서 전문적인 제품 비디오 제작",
      description: "이커머스를 위한 인상적인 제품 비디오를 만드세요. 온라인 스토어와 소셜 미디어에 완벽합니다.",
      detailedDescription: "AI 제품 비디오 메이커로 제품 사진을 전문적인 판매 비디오로 변환하세요.",
      howItWorks: [
        { title: "제품 사진 업로드", description: "하나 이상의 제품 이미지를 업로드하세요. 흰색 배경 제품 사진이 좋지만 어떤 사진이든 사용 가능합니다." },
        { title: "비디오 스타일 선택", description: "이커머스 최적화 템플릿에서 선택: 히어로 쇼케이스, 기능 하이라이트, 라이프스타일 컨텍스트 또는 360도 스핀." },
        { title: "스토어에 맞게 커스터마이즈", description: "브랜드 로고, 가격, 기능 뱃지를 추가하고 리스팅이나 소셜 광고에 맞는 비율을 선택하세요." },
        { title: "내보내기 및 게시", description: "마켓플레이스 지원 포맷으로 다운로드하세요. 제품 리스팅에 직접 업로드하거나 광고 캠페인에 사용하세요." },
      ],
      features: [
        { title: "제품 중심 AI", description: "최적의 쇼케이스 결과를 위해 제품 사진에 특화되어 훈련된 AI" },
        { title: "이커머스 템플릿", description: "제품 리스팅 및 온라인 스토어 비디오에 최적화된 사전 제작 템플릿" },
        { title: "가격 및 기능 콜아웃", description: "가격, 기능, 판매 포인트를 강조하는 동적 텍스트 오버레이 추가" },
        { title: "멀티 포맷 내보내기", description: "모든 마켓플레이스나 광고 플랫폼용으로 정사각형, 가로, 세로 포맷으로 내보내기" },
        { title: "빠른 생성", description: "편집 기술 없이 몇 시간이 아닌 몇 초 만에 제품 비디오 생성" },
        { title: "A/B 테스트 변형", description: "어떤 것이 가장 잘 전환되는지 테스트하기 위해 여러 비디오 버전 생성" },
      ],
    },
    zh: {
      name: "AI产品视频制作器",
      tagline: "从照片制作专业产品视频",
      description: "为电商创建令人印象深刻的产品视频。非常适合在线商店和社交媒体。",
      detailedDescription: "使用我们的AI产品视频制作器将产品照片转化为专业销售视频。",
      howItWorks: [
        { title: "上传产品照片", description: "上传一张或多张产品图片。白色背景的产品照片效果很好，但任何照片都可以。" },
        { title: "选择视频风格", description: "从电商优化模板中选择：主打展示、功能亮点、生活方式场景或360度旋转。" },
        { title: "为您的商店自定义", description: "添加品牌标志、价格、功能徽章，并选择适合您的商品详情或社交广告的比例。" },
        { title: "导出并发布", description: "以市场就绪格式下载。直接上传到产品详情页或用于广告活动。" },
      ],
      features: [
        { title: "产品专注AI", description: "专门针对产品摄影训练的AI，实现最佳展示效果" },
        { title: "电商模板", description: "为产品详情页和在线商店视频优化的预建模板" },
        { title: "价格和功能标注", description: "添加动态文字覆盖，突出价格、功能和卖点" },
        { title: "多格式导出", description: "以正方形、横向或纵向格式导出，适用于任何市场或广告平台" },
        { title: "快速生成", description: "无需编辑技能，几秒钟而非几小时内创建产品视频" },
        { title: "A/B测试变体", description: "生成多个视频版本，测试哪个转化最好" },
      ],
    },
  },
  "ai-video-from-image": {
    es: {
      name: "Video desde Imagen IA",
      tagline: "Genera videos desde cualquier imagen",
      description: "La forma más fácil de crear videos desde imágenes. Sube una foto, obtén un video profesional.",
      detailedDescription: "Simplifica la creación de videos con nuestra herramienta de video desde imagen IA.",
      howItWorks: [
        { title: "Proporciona Tu Imagen", description: "Sube cualquier imagen: foto, ilustración, captura de pantalla o imagen generada por IA." },
        { title: "Elige Tipo de Movimiento", description: "Selecciona cómo quieres que se mueva tu imagen: zoom, órbita, parallax o animación generativa." },
        { title: "Ajusta Duración y Parámetros", description: "Configura la duración del video, velocidad de movimiento y parámetros de generación IA." },
        { title: "Genera y Descarga", description: "La IA crea tu video en segundos. Descarga o comparte directamente en redes sociales." },
      ],
      features: [
        { title: "Movimiento Generativo IA", description: "La IA analiza tu imagen y genera movimiento natural único para cada escena" },
        { title: "Animación de Elementos Naturales", description: "Agua que fluye, nubes en movimiento, hojas que se balancean de forma automática" },
        { title: "Animación de Sujetos", description: "Da vida a personas, animales y objetos con movimientos realistas" },
        { title: "Preservación de Estilo", description: "Mantiene la calidad y estética original de tu imagen durante la animación" },
        { title: "Múltiples Variaciones", description: "Genera diferentes versiones de movimiento para elegir la mejor" },
        { title: "Integración con App iOS", description: "Crea videos desde imágenes directamente en tu iPhone con nuestra app móvil" },
      ],
    },
    de: {
      name: "Video aus Bild KI",
      tagline: "Erstelle Videos aus jedem Bild",
      description: "Der einfachste Weg, Videos aus Bildern zu erstellen. Lade ein Foto hoch, erhalte ein professionelles Video.",
      detailedDescription: "Vereinfache die Videoerstellung mit unserem Video-aus-Bild-KI-Tool.",
      howItWorks: [
        { title: "Gib dein Bild", description: "Lade ein beliebiges Bild hoch: Foto, Illustration, Screenshot oder KI-generiertes Bild." },
        { title: "Wähle Bewegungsart", description: "Wähle, wie sich dein Bild bewegen soll: Zoom, Orbit, Parallax oder generative Animation." },
        { title: "Passe Dauer und Parameter an", description: "Stelle Videolänge, Bewegungsgeschwindigkeit und KI-Generierungsparameter ein." },
        { title: "Generiere und lade herunter", description: "KI erstellt dein Video in Sekunden. Lade herunter oder teile direkt in sozialen Medien." },
      ],
      features: [
        { title: "Generative KI-Bewegung", description: "KI analysiert dein Bild und generiert einzigartige natürliche Bewegung für jede Szene" },
        { title: "Natürliche Element-Animation", description: "Fließendes Wasser, bewegende Wolken, schwankende Blätter automatisch" },
        { title: "Subjekt-Animation", description: "Erwecke Menschen, Tiere und Objekte mit realistischen Bewegungen zum Leben" },
        { title: "Stil-Erhaltung", description: "Erhält die Originalqualität und Ästhetik deines Bildes während der Animation" },
        { title: "Mehrere Variationen", description: "Generiere verschiedene Bewegungsversionen, um die beste auszuwählen" },
        { title: "iOS-App-Integration", description: "Erstelle Videos aus Bildern direkt auf deinem iPhone mit unserer mobilen App" },
      ],
    },
    fr: {
      name: "Vidéo à partir d'Image IA",
      tagline: "Créez des vidéos à partir de n'importe quelle image",
      description: "Le moyen le plus simple de créer des vidéos à partir d'images. Téléchargez une photo, obtenez une vidéo professionnelle.",
      detailedDescription: "Simplifiez la création vidéo avec notre outil vidéo à partir d'image IA.",
      howItWorks: [
        { title: "Fournissez votre image", description: "Téléchargez n'importe quelle image: photo, illustration, capture d'écran ou image générée par IA." },
        { title: "Choisissez le type de mouvement", description: "Sélectionnez comment vous voulez que votre image bouge: zoom, orbite, parallaxe ou animation générative." },
        { title: "Ajustez durée et paramètres", description: "Configurez la durée de la vidéo, la vitesse de mouvement et les paramètres de génération IA." },
        { title: "Générez et téléchargez", description: "L'IA crée votre vidéo en secondes. Téléchargez ou partagez directement sur les réseaux sociaux." },
      ],
      features: [
        { title: "Mouvement génératif IA", description: "L'IA analyse votre image et génère un mouvement naturel unique pour chaque scène" },
        { title: "Animation d'éléments naturels", description: "Eau qui coule, nuages en mouvement, feuilles qui balancent automatiquement" },
        { title: "Animation de sujets", description: "Donnez vie aux personnes, animaux et objets avec des mouvements réalistes" },
        { title: "Préservation du style", description: "Conserve la qualité et l'esthétique originales de votre image pendant l'animation" },
        { title: "Variations multiples", description: "Générez différentes versions de mouvement pour choisir la meilleure" },
        { title: "Intégration app iOS", description: "Créez des vidéos à partir d'images directement sur votre iPhone avec notre app mobile" },
      ],
    },
    pt: {
      name: "Vídeo a partir de Imagem IA",
      tagline: "Crie vídeos a partir de qualquer imagem",
      description: "A forma mais fácil de criar vídeos a partir de imagens. Faça upload de uma foto, obtenha um vídeo profissional.",
      detailedDescription: "Simplifique a criação de vídeos com nossa ferramenta de vídeo a partir de imagem IA.",
      howItWorks: [
        { title: "Forneça sua imagem", description: "Faça upload de qualquer imagem: foto, ilustração, captura de tela ou imagem gerada por IA." },
        { title: "Escolha o tipo de movimento", description: "Selecione como você quer que sua imagem se mova: zoom, órbita, parallax ou animação generativa." },
        { title: "Ajuste duração e parâmetros", description: "Configure a duração do vídeo, velocidade de movimento e parâmetros de geração IA." },
        { title: "Gere e baixe", description: "A IA cria seu vídeo em segundos. Baixe ou compartilhe diretamente nas redes sociais." },
      ],
      features: [
        { title: "Movimento generativo IA", description: "A IA analisa sua imagem e gera movimento natural único para cada cena" },
        { title: "Animação de elementos naturais", description: "Água fluindo, nuvens em movimento, folhas balançando automaticamente" },
        { title: "Animação de sujeitos", description: "Dê vida a pessoas, animais e objetos com movimentos realistas" },
        { title: "Preservação de estilo", description: "Mantém a qualidade e estética original da sua imagem durante a animação" },
        { title: "Múltiplas variações", description: "Gere diferentes versões de movimento para escolher a melhor" },
        { title: "Integração com app iOS", description: "Crie vídeos a partir de imagens diretamente no seu iPhone com nosso app móvel" },
      ],
    },
    ru: {
      name: "Видео из Изображения ИИ",
      tagline: "Генерируйте видео из любого изображения",
      description: "Самый простой способ создавать видео из изображений. Загрузите фото, получите профессиональное видео.",
      detailedDescription: "Упростите создание видео с нашим инструментом видео из изображения ИИ.",
      howItWorks: [
        { title: "Загрузите изображение", description: "Загрузите любое изображение: фото, иллюстрацию, скриншот или изображение, сгенерированное ИИ." },
        { title: "Выберите тип движения", description: "Выберите, как будет двигаться изображение: зум, орбита, параллакс или генеративная анимация." },
        { title: "Настройте параметры", description: "Задайте длительность видео, скорость движения и параметры ИИ-генерации." },
        { title: "Сгенерируйте и скачайте", description: "ИИ создаст видео за секунды. Скачайте или поделитесь напрямую в соцсетях." },
      ],
      features: [
        { title: "Генеративное движение ИИ", description: "ИИ анализирует изображение и генерирует уникальное естественное движение для каждой сцены" },
        { title: "Анимация природных элементов", description: "Текущая вода, движущиеся облака, колышущаяся листва автоматически" },
        { title: "Анимация объектов", description: "Оживите людей, животных и предметы реалистичными движениями" },
        { title: "Сохранение стиля", description: "Сохраняет оригинальное качество и эстетику изображения при анимации" },
        { title: "Несколько вариаций", description: "Генерируйте разные версии движения, чтобы выбрать лучшую" },
        { title: "Интеграция с iOS", description: "Создавайте видео из изображений прямо на iPhone с нашим мобильным приложением" },
      ],
    },
    it: {
      name: "Video da Immagine IA",
      tagline: "Crea video da qualsiasi immagine",
      description: "Il modo più semplice per creare video dalle immagini. Carica una foto, ottieni un video professionale.",
      detailedDescription: "Semplifica la creazione video con il nostro strumento video da immagine IA.",
      howItWorks: [
        { title: "Fornisci la tua immagine", description: "Carica qualsiasi immagine: foto, illustrazione, screenshot o immagine generata da IA." },
        { title: "Scegli il tipo di movimento", description: "Seleziona come vuoi che si muova la tua immagine: zoom, orbita, parallasse o animazione generativa." },
        { title: "Regola durata e parametri", description: "Imposta la durata del video, la velocità di movimento e i parametri di generazione IA." },
        { title: "Genera e scarica", description: "L'IA crea il tuo video in secondi. Scarica o condividi direttamente sui social." },
      ],
      features: [
        { title: "Movimento generativo IA", description: "L'IA analizza la tua immagine e genera movimento naturale unico per ogni scena" },
        { title: "Animazione elementi naturali", description: "Acqua che scorre, nuvole in movimento, foglie che ondeggiano automaticamente" },
        { title: "Animazione soggetti", description: "Dai vita a persone, animali e oggetti con movimenti realistici" },
        { title: "Preservazione stile", description: "Mantiene la qualità e l'estetica originale della tua immagine durante l'animazione" },
        { title: "Variazioni multiple", description: "Genera diverse versioni di movimento per scegliere la migliore" },
        { title: "Integrazione app iOS", description: "Crea video da immagini direttamente sul tuo iPhone con la nostra app mobile" },
      ],
    },
    nl: {
      name: "Video van Afbeelding AI",
      tagline: "Maak video's van elke afbeelding",
      description: "De makkelijkste manier om video's van afbeeldingen te maken. Upload een foto, krijg een professionele video.",
      detailedDescription: "Vereenvoudig videocreatie met onze video-van-afbeelding AI-tool.",
      howItWorks: [
        { title: "Geef je afbeelding", description: "Upload elke afbeelding: foto, illustratie, screenshot of AI-gegenereerde afbeelding." },
        { title: "Kies bewegingstype", description: "Selecteer hoe je afbeelding moet bewegen: zoom, orbit, parallax of generatieve animatie." },
        { title: "Pas duur en parameters aan", description: "Stel videoduur, bewegingssnelheid en AI-generatieparameters in." },
        { title: "Genereer en download", description: "AI maakt je video in seconden. Download of deel direct op sociale media." },
      ],
      features: [
        { title: "Generatieve AI-beweging", description: "AI analyseert je afbeelding en genereert unieke natuurlijke beweging voor elke scène" },
        { title: "Natuurlijke element-animatie", description: "Stromend water, bewegende wolken, wuivende bladeren automatisch" },
        { title: "Onderwerp-animatie", description: "Breng mensen, dieren en objecten tot leven met realistische bewegingen" },
        { title: "Stijlbehoud", description: "Behoudt de originele kwaliteit en esthetiek van je afbeelding tijdens animatie" },
        { title: "Meerdere variaties", description: "Genereer verschillende bewegingsversies om de beste te kiezen" },
        { title: "iOS-app integratie", description: "Maak video's van afbeeldingen direct op je iPhone met onze mobiele app" },
      ],
    },
    pl: {
      name: "Wideo z Obrazu AI",
      tagline: "Twórz filmy z dowolnego obrazu",
      description: "Najprostszy sposób tworzenia filmów z obrazów. Prześlij zdjęcie, otrzymaj profesjonalne wideo.",
      detailedDescription: "Uprość tworzenie wideo dzięki naszemu narzędziu wideo z obrazu AI.",
      howItWorks: [
        { title: "Podaj swój obraz", description: "Prześlij dowolny obraz: zdjęcie, ilustrację, zrzut ekranu lub obraz wygenerowany przez AI." },
        { title: "Wybierz typ ruchu", description: "Wybierz, jak ma się poruszać twój obraz: zoom, orbita, paralaksa lub animacja generatywna." },
        { title: "Dostosuj czas i parametry", description: "Ustaw czas trwania wideo, prędkość ruchu i parametry generacji AI." },
        { title: "Wygeneruj i pobierz", description: "AI tworzy twoje wideo w sekundy. Pobierz lub udostępnij bezpośrednio w mediach społecznościowych." },
      ],
      features: [
        { title: "Generatywny ruch AI", description: "AI analizuje twój obraz i generuje unikalny naturalny ruch dla każdej sceny" },
        { title: "Animacja elementów naturalnych", description: "Płynąca woda, poruszające się chmury, kołyszące się liście automatycznie" },
        { title: "Animacja obiektów", description: "Ożyw ludzi, zwierzęta i przedmioty realistycznymi ruchami" },
        { title: "Zachowanie stylu", description: "Zachowuje oryginalną jakość i estetykę obrazu podczas animacji" },
        { title: "Wiele wariacji", description: "Generuj różne wersje ruchu, aby wybrać najlepszą" },
        { title: "Integracja z aplikacją iOS", description: "Twórz filmy z obrazów bezpośrednio na swoim iPhonie z naszą aplikacją mobilną" },
      ],
    },
    ja: {
      name: "画像からビデオAI",
      tagline: "あらゆる画像から動画を作成",
      description: "画像から動画を作成する最も簡単な方法。写真をアップロードして、プロフェッショナルな動画を取得。",
      detailedDescription: "画像からビデオAIツールで動画作成を簡素化。",
      howItWorks: [
        { title: "画像を提供", description: "任意の画像をアップロード：写真、イラスト、スクリーンショット、またはAI生成画像。" },
        { title: "モーションタイプを選択", description: "画像の動き方を選択：ズーム、オービット、パララックス、または生成アニメーション。" },
        { title: "時間とパラメータを調整", description: "動画の長さ、動きの速度、AI生成パラメータを設定。" },
        { title: "生成してダウンロード", description: "AIが数秒で動画を作成。ダウンロードまたはSNSに直接共有。" },
      ],
      features: [
        { title: "生成AIモーション", description: "AIが画像を分析し、各シーンに独自の自然な動きを生成" },
        { title: "自然要素アニメーション", description: "流れる水、動く雲、揺れる葉を自動で" },
        { title: "被写体アニメーション", description: "人、動物、物にリアルな動きを与える" },
        { title: "スタイル保持", description: "アニメーション中も画像の元の品質と美的感覚を維持" },
        { title: "複数のバリエーション", description: "最適なものを選ぶために異なる動きのバージョンを生成" },
        { title: "iOSアプリ統合", description: "モバイルアプリでiPhone上で直接画像から動画を作成" },
      ],
    },
    ko: {
      name: "이미지에서 비디오 AI",
      tagline: "모든 이미지에서 비디오 생성",
      description: "이미지에서 비디오를 만드는 가장 쉬운 방법. 사진을 업로드하고 전문적인 비디오를 받으세요.",
      detailedDescription: "이미지에서 비디오 AI 도구로 비디오 제작을 간소화하세요.",
      howItWorks: [
        { title: "이미지 제공", description: "모든 이미지 업로드: 사진, 일러스트레이션, 스크린샷 또는 AI 생성 이미지." },
        { title: "모션 타입 선택", description: "이미지가 어떻게 움직일지 선택: 줌, 오빗, 패럴랙스 또는 생성 애니메이션." },
        { title: "시간과 매개변수 조정", description: "비디오 길이, 모션 속도 및 AI 생성 매개변수를 설정하세요." },
        { title: "생성 및 다운로드", description: "AI가 몇 초 만에 비디오를 만듭니다. 다운로드하거나 소셜 미디어에 직접 공유하세요." },
      ],
      features: [
        { title: "생성 AI 모션", description: "AI가 이미지를 분석하고 각 장면에 고유한 자연스러운 움직임을 생성" },
        { title: "자연 요소 애니메이션", description: "흐르는 물, 움직이는 구름, 흔들리는 잎을 자동으로" },
        { title: "피사체 애니메이션", description: "사람, 동물, 물체에 사실적인 움직임 부여" },
        { title: "스타일 보존", description: "애니메이션 중 이미지의 원래 품질과 미학 유지" },
        { title: "다양한 변형", description: "최상의 것을 선택하기 위해 다른 모션 버전 생성" },
        { title: "iOS 앱 통합", description: "모바일 앱으로 iPhone에서 직접 이미지에서 비디오 생성" },
      ],
    },
    zh: {
      name: "从图像生成视频AI",
      tagline: "从任何图像生成视频",
      description: "从图像创建视频的最简单方式。上传照片，获得专业视频。",
      detailedDescription: "使用我们的从图像生成视频AI工具简化视频创作。",
      howItWorks: [
        { title: "提供您的图像", description: "上传任何图像：照片、插图、截图或AI生成的图像。" },
        { title: "选择运动类型", description: "选择图像如何移动：缩放、环绕、视差或生成动画。" },
        { title: "调整时长和参数", description: "设置视频时长、运动速度和AI生成参数。" },
        { title: "生成并下载", description: "AI在几秒内创建视频。下载或直接分享到社交媒体。" },
      ],
      features: [
        { title: "生成式AI运动", description: "AI分析图像并为每个场景生成独特的自然运动" },
        { title: "自然元素动画", description: "流动的水、移动的云、摇曳的叶子自动生成" },
        { title: "主体动画", description: "用逼真的动作让人物、动物和物体栩栩如生" },
        { title: "风格保持", description: "在动画过程中保持图像的原始质量和美感" },
        { title: "多种变体", description: "生成不同的运动版本以选择最佳效果" },
        { title: "iOS应用集成", description: "通过我们的移动应用直接在iPhone上从图像创建视频" },
      ],
    },
  },
  "ai-social-media-video-maker": {
    es: {
      name: "Creador de Videos para Redes Sociales IA",
      tagline: "Videos optimizados para todas las plataformas",
      description: "Crea videos perfectos para TikTok, Instagram, YouTube y más. Formatos y efectos optimizados para cada red.",
      detailedDescription: "Domina todas las redes sociales con videos optimizados para cada plataforma.",
    },
    pt: {
      name: "Criador de Vídeos para Redes Sociais IA",
      tagline: "Vídeos otimizados para todas as plataformas",
      description: "Crie vídeos perfeitos para TikTok, Instagram, YouTube e mais. Formatos e efeitos otimizados para cada rede.",
      detailedDescription: "Domine todas as redes sociais com vídeos otimizados para cada plataforma.",
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
    it: {
      name: "Creatore Video Social Media IA",
      tagline: "Video ottimizzati per tutte le piattaforme",
      description: "Crea video perfetti per TikTok, Instagram, YouTube e altro. Formati ed effetti ottimizzati per ogni rete.",
      detailedDescription: "Domina tutti i social media con video ottimizzati per ogni piattaforma.",
    },
    nl: {
      name: "AI Social Media Video Maker",
      tagline: "Video's geoptimaliseerd voor alle platformen",
      description: "Maak perfecte video's voor TikTok, Instagram, YouTube en meer. Formaten en effecten geoptimaliseerd voor elk netwerk.",
      detailedDescription: "Beheers alle sociale media met video's die voor elk platform zijn geoptimaliseerd.",
    },
    pl: {
      name: "Kreator Wideo Social Media AI",
      tagline: "Filmy zoptymalizowane dla wszystkich platform",
      description: "Twórz idealne filmy na TikTok, Instagram, YouTube i inne. Formaty i efekty zoptymalizowane dla każdej sieci.",
      detailedDescription: "Opanuj wszystkie media społecznościowe z filmami zoptymalizowanymi dla każdej platformy.",
    },
    ja: {
      name: "AIソーシャルメディア動画メーカー",
      tagline: "すべてのプラットフォームに最適化された動画",
      description: "TikTok、Instagram、YouTubeなどに最適な動画を作成。各ネットワーク向けに最適化されたフォーマットとエフェクト。",
      detailedDescription: "各プラットフォームに最適化された動画ですべてのソーシャルメディアを制覇。",
    },
    ko: {
      name: "AI 소셜 미디어 비디오 메이커",
      tagline: "모든 플랫폼에 최적화된 비디오",
      description: "TikTok, Instagram, YouTube 등에 완벽한 비디오 제작. 각 네트워크에 최적화된 형식과 효과.",
      detailedDescription: "각 플랫폼에 최적화된 비디오로 모든 소셜 미디어를 정복하세요.",
    },
  },
  "ai-video-generator-app": {
    es: {
      name: "App Generador de Video IA",
      tagline: "Crea videos IA directamente en tu iPhone",
      description: "La app más potente de generación de video IA para iOS. Crea, edita y comparte videos desde tu móvil.",
      detailedDescription: "Lleva el poder de la generación de video IA en tu bolsillo con nuestra app para iOS.",
    },
    pt: {
      name: "App Gerador de Vídeo IA",
      tagline: "Crie vídeos IA diretamente no seu iPhone",
      description: "O aplicativo mais poderoso de geração de vídeo IA para iOS. Crie, edite e compartilhe vídeos do seu celular.",
      detailedDescription: "Leve o poder da geração de vídeo IA no seu bolso com nosso aplicativo para iOS.",
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
    ja: {
      name: "AI動画ジェネレーターアプリ",
      tagline: "iPhoneで直接AI動画を作成",
      description: "最も強力なiOS向けAI動画生成アプリ。モバイルから動画を作成、編集、共有。",
      detailedDescription: "AI動画生成のパワーをポケットに。iOS向けアプリで。",
    },
    ko: {
      name: "AI 비디오 생성기 앱",
      tagline: "iPhone에서 직접 AI 비디오 제작",
      description: "가장 강력한 iOS용 AI 비디오 생성 앱. 모바일에서 비디오 제작, 편집, 공유.",
      detailedDescription: "iOS 앱으로 AI 비디오 생성의 힘을 주머니에.",
    },
  },
  "ai-faceless-video-generator": {
    es: {
      name: "Generador de Videos Sin Rostro IA",
      tagline: "Crea videos virales sin mostrar tu cara",
      description: "Genera contenido de video atractivo sin aparecer en camara con IA. Perfecto para creadores que quieren construir una audiencia y monetizar contenido sin mostrarse.",
      detailedDescription: "Construye un canal de contenido rentable sin ponerte frente a la camara. El Generador de Videos Sin Rostro IA de Hyreel combina animacion de imagenes IA, voces profesionales y edicion inteligente para crear videos de alta calidad.",
      howItWorks: [
        { title: "Elige Tu Nicho", description: "Selecciona tu tematica: motivacional, educativo, resenas de productos, narracion o cualquier tema. Sin camara necesaria." },
        { title: "Sube Imagenes", description: "Anade imagenes que ilustren tu contenido. Fotos de stock, capturas de pantalla o visuales generados por IA." },
        { title: "Anade Voz IA y Movimiento", description: "Genera narracion con voces IA y aplica efectos de movimiento cinematografico." },
        { title: "Publica Anonimamente", description: "Exporta tu video y publicalo en YouTube, TikTok o cualquier plataforma sin mostrar tu cara." }
      ],
      features: [
        { title: "Sin Rostro Requerido", description: "Pipeline completo de creacion de video sin aparecer en camara" },
        { title: "Narracion IA", description: "Voces profesionales en mas de 50 voces IA realistas en 32 idiomas" },
        { title: "Animacion Cinematografica", description: "Transforma imagenes estaticas en escenas dinamicas con efectos de movimiento IA" },
        { title: "Subtitulos Automaticos", description: "Subtitulos sincronizados para accesibilidad y engagement" },
        { title: "Biblioteca Musical", description: "Musica libre de regalias y sonidos ambiente adaptados a tu contenido" },
        { title: "Plantillas por Nicho", description: "Plantillas predisenadas para nichos populares de contenido sin rostro" }
      ],
      faqs: [
        { question: "Se puede ganar dinero con videos sin mostrar la cara?", answer: "Absolutamente. Los canales sin rostro estan entre los mas rentables de YouTube, especialmente en nichos como finanzas, educacion y tecnologia." },
        { question: "Que nichos funcionan mejor para contenido sin rostro?", answer: "Educacion, finanzas, tecnologia, narracion y misterio, historias motivacionales, meditacion y compilaciones de datos curiosos." },
        { question: "Puedo usar las voces IA para cualquier contenido?", answer: "Si, nuestras 50+ voces IA cubren una amplia gama de tonos y estilos para cualquier nicho." },
        { question: "Como hago mis videos unicos?", answer: "La combinacion de tu seleccion de imagenes, voz, estilo de script y efectos de movimiento crea contenido unico." }
      ]
    },
    de: {
      name: "KI Gesichtsloser Video-Generator",
      tagline: "Erstelle virale Videos ohne dein Gesicht zu zeigen",
      description: "Generiere ansprechende Video-Inhalte mit KI ohne vor der Kamera zu erscheinen. Perfekt fuer Creator, die ein Publikum aufbauen wollen.",
      detailedDescription: "Baue einen profitablen Content-Kanal auf, ohne vor die Kamera zu treten. Hyreels KI kombiniert Bildanimation, professionelle Stimmen und intelligente Bearbeitung.",
      howItWorks: [
        { title: "Waehle Deine Nische", description: "Waehle dein Thema: motivierend, bildend, Produktbewertungen, Storytelling oder jedes Thema." },
        { title: "Lade Bilder Hoch", description: "Fuege Bilder hinzu, die deinen Inhalt illustrieren. Stock-Fotos, Screenshots oder KI-generierte Visuals." },
        { title: "Fuege KI-Voiceover Hinzu", description: "Generiere Narration mit KI-Stimmen und wende cinematische Bewegungseffekte an." },
        { title: "Veroeffentliche Anonym", description: "Exportiere dein Video und veroeffentliche auf YouTube, TikTok oder jeder Plattform." }
      ],
      features: [
        { title: "Kein Gesicht Erforderlich", description: "Komplette Videoproduktion ohne vor der Kamera zu erscheinen" },
        { title: "KI-Narration", description: "Professionelle Voiceovers mit 50+ realistischen KI-Stimmen in 32 Sprachen" },
        { title: "Cinematische Bildanimation", description: "Verwandle statische Bilder in dynamische Szenen mit KI-Bewegungseffekten" },
        { title: "Auto-Generierte Untertitel", description: "Synchronisierte Untertitel fuer Barrierefreiheit und Engagement" },
        { title: "Hintergrundmusik-Bibliothek", description: "Lizenzfreie Musik und Ambient-Sounds passend zur Stimmung" },
        { title: "Nischen-Templates", description: "Vorgefertigte Templates fuer beliebte gesichtslose Content-Nischen" }
      ],
      faqs: [
        { question: "Kann man mit Videos ohne Gesicht Geld verdienen?", answer: "Absolut. Gesichtslose Kanaele gehoeren zu den profitabelsten auf YouTube, besonders in Nischen wie Finanzen, Bildung und Tech." },
        { question: "Welche Nischen funktionieren am besten?", answer: "Bildung, Finanzen und Business, Tech-Reviews, Storytelling, motivierende Stories und Meditations-Inhalte." },
        { question: "Kann ich die KI-Stimmen fuer jede Art von Content nutzen?", answer: "Ja, unsere 50+ KI-Stimmen decken eine breite Palette von Toenen und Stilen ab." },
        { question: "Wie mache ich meine Videos einzigartig?", answer: "Die Kombination aus Bildauswahl, Stimmwahl, Skriptstil und Bewegungseffekten schafft einzigartigen Content." }
      ]
    },
    fr: {
      name: "Generateur de Videos Sans Visage IA",
      tagline: "Creez des videos virales sans montrer votre visage",
      description: "Generez du contenu video engageant avec l'IA sans apparaitre devant la camera. Parfait pour les createurs qui veulent monetiser du contenu.",
      detailedDescription: "Construisez une chaine rentable sans passer devant la camera. Le Generateur combine animation d'images IA, voix professionnelles et montage intelligent.",
      howItWorks: [
        { title: "Choisissez Votre Niche", description: "Selectionnez votre thematique: motivationnel, educatif, avis produits, storytelling ou tout sujet." },
        { title: "Telechargez des Images", description: "Ajoutez des images qui illustrent votre contenu. Photos stock, captures d'ecran ou visuels generes par IA." },
        { title: "Ajoutez Voix IA et Mouvement", description: "Generez la narration avec des voix IA et appliquez des effets de mouvement cinematographiques." },
        { title: "Publiez Anonymement", description: "Exportez votre video et publiez sur YouTube, TikTok ou toute plateforme." }
      ],
      features: [
        { title: "Aucun Visage Requis", description: "Pipeline complet de creation video sans apparaitre devant la camera" },
        { title: "Narration IA", description: "Voix-off professionnelles avec plus de 50 voix IA realistes en 32 langues" },
        { title: "Animation Cinematographique", description: "Transformez des images statiques en scenes dynamiques avec des effets de mouvement IA" },
        { title: "Sous-titres Automatiques", description: "Sous-titres synchronises pour l'accessibilite et l'engagement" },
        { title: "Bibliotheque Musicale", description: "Musique libre de droits et sons d'ambiance adaptes a votre contenu" },
        { title: "Templates par Niche", description: "Templates pre-construits pour les niches populaires de contenu sans visage" }
      ],
      faqs: [
        { question: "Peut-on gagner de l'argent avec des videos sans visage?", answer: "Absolument. Les chaines sans visage sont parmi les plus rentables sur YouTube, surtout dans les niches comme la finance et l'education." },
        { question: "Quelles niches fonctionnent le mieux?", answer: "Education, finance et business, revues tech, storytelling et mystere, histoires motivantes et contenu meditation." },
        { question: "Puis-je utiliser les voix IA pour tout type de contenu?", answer: "Oui, nos 50+ voix IA couvrent une large gamme de tons et styles." },
        { question: "Comment rendre mes videos uniques?", answer: "La combinaison de votre selection d'images, choix de voix, style de script et effets de mouvement cree un contenu unique." }
      ]
    },
    pt: {
      name: "Gerador de Videos Sem Rosto IA",
      tagline: "Crie videos virais sem mostrar seu rosto",
      description: "Gere conteudo de video envolvente com IA sem aparecer na camera. Perfeito para criadores que querem monetizar conteudo sem se mostrar.",
      detailedDescription: "Construa um canal lucrativo sem aparecer na camera. O Gerador combina animacao de imagens IA, vozes profissionais e edicao inteligente.",
      howItWorks: [
        { title: "Escolha Seu Nicho", description: "Selecione sua tematica: motivacional, educacional, reviews de produtos, storytelling ou qualquer topico." },
        { title: "Envie Imagens", description: "Adicione imagens que ilustrem seu conteudo. Fotos de banco, capturas de tela ou visuais gerados por IA." },
        { title: "Adicione Voz IA e Movimento", description: "Gere narracao com vozes IA e aplique efeitos de movimento cinematograficos." },
        { title: "Publique Anonimamente", description: "Exporte seu video e publique no YouTube, TikTok ou qualquer plataforma." }
      ],
      features: [
        { title: "Sem Rosto Necessario", description: "Pipeline completo de criacao de video sem aparecer na camera" },
        { title: "Narracao IA", description: "Locucoes profissionais com mais de 50 vozes IA realistas em 32 idiomas" },
        { title: "Animacao Cinematografica", description: "Transforme imagens estaticas em cenas dinamicas com efeitos de movimento IA" },
        { title: "Legendas Automaticas", description: "Legendas sincronizadas para acessibilidade e engajamento" },
        { title: "Biblioteca Musical", description: "Musica livre de royalties e sons ambiente adaptados ao seu conteudo" },
        { title: "Templates por Nicho", description: "Templates pre-construidos para nichos populares de conteudo sem rosto" }
      ],
      faqs: [
        { question: "E possivel ganhar dinheiro com videos sem mostrar o rosto?", answer: "Absolutamente. Canais sem rosto estao entre os mais lucrativos do YouTube, especialmente em nichos como financas e educacao." },
        { question: "Quais nichos funcionam melhor?", answer: "Educacao, financas e negocios, reviews de tech, storytelling e misterio, historias motivacionais e conteudo de meditacao." },
        { question: "Posso usar as vozes IA para qualquer tipo de conteudo?", answer: "Sim, nossas 50+ vozes IA cobrem uma ampla gama de tons e estilos." },
        { question: "Como torno meus videos unicos?", answer: "A combinacao da sua selecao de imagens, escolha de voz, estilo de roteiro e efeitos de movimento cria conteudo unico." }
      ]
    },
    ru: {
      name: "ИИ Генератор Видео Без Лица",
      tagline: "Создавайте вирусные видео не показывая лицо",
      description: "Генерируйте вовлекающий видеоконтент с помощью ИИ без появления в кадре. Идеально для создателей, которые хотят монетизировать контент.",
      detailedDescription: "Постройте прибыльный контент-канал без появления перед камерой. Генератор сочетает ИИ-анимацию изображений, профессиональные голоса и умный монтаж.",
      howItWorks: [
        { title: "Выберите Нишу", description: "Выберите тематику: мотивационный, образовательный, обзоры продуктов, сторителлинг или любую тему." },
        { title: "Загрузите Изображения", description: "Добавьте изображения, иллюстрирующие ваш контент. Стоковые фото, скриншоты или визуалы ИИ." },
        { title: "Добавьте ИИ-Озвучку и Движение", description: "Создайте озвучку с помощью ИИ-голосов и примените кинематографические эффекты движения." },
        { title: "Публикуйте Анонимно", description: "Экспортируйте готовое видео и публикуйте на YouTube, TikTok или любой платформе." }
      ],
      features: [
        { title: "Лицо Не Требуется", description: "Полный процесс создания видео без появления в кадре" },
        { title: "ИИ-Озвучка", description: "Профессиональная озвучка с более чем 50 реалистичными ИИ-голосами на 32 языках" },
        { title: "Кинематографическая Анимация", description: "Превращайте статичные изображения в динамичные сцены с эффектами движения ИИ" },
        { title: "Автоматические Субтитры", description: "Синхронизированные субтитры для доступности и вовлеченности" },
        { title: "Библиотека Музыки", description: "Музыка без лицензионных отчислений и фоновые звуки под настроение контента" },
        { title: "Шаблоны по Нишам", description: "Готовые шаблоны для популярных ниш контента без лица" }
      ],
      faqs: [
        { question: "Можно ли зарабатывать на видео без показа лица?", answer: "Безусловно. Каналы без лица одни из самых прибыльных на YouTube, особенно в нишах финансов, образования и технологий." },
        { question: "Какие ниши лучше всего подходят?", answer: "Образование, финансы и бизнес, обзоры технологий, сторителлинг и детективы, мотивационные истории и контент для медитации." },
        { question: "Могу ли я использовать ИИ-голоса для любого типа контента?", answer: "Да, наши 50+ ИИ-голосов охватывают широкий спектр тональностей и стилей." },
        { question: "Как сделать мои видео уникальными?", answer: "Сочетание вашего выбора изображений, голоса, стиля сценария и эффектов движения создает уникальный контент." }
      ]
    },
    it: {
      name: "Generatore Video Senza Volto IA",
      tagline: "Crea video virali senza mostrare il viso",
      description: "Genera contenuti video coinvolgenti con l'IA senza apparire davanti alla telecamera. Perfetto per creator che vogliono monetizzare contenuti.",
      detailedDescription: "Costruisci un canale redditizio senza metterti davanti alla telecamera. Il Generatore combina animazione immagini IA, voci professionali e montaggio intelligente.",
      howItWorks: [
        { title: "Scegli la Tua Nicchia", description: "Seleziona la tua tematica: motivazionale, educativo, recensioni prodotti, storytelling o qualsiasi argomento." },
        { title: "Carica Immagini", description: "Aggiungi immagini che illustrino il tuo contenuto. Foto stock, screenshot o visual generati dall'IA." },
        { title: "Aggiungi Voce IA e Movimento", description: "Genera la narrazione con voci IA e applica effetti di movimento cinematografici." },
        { title: "Pubblica Anonimamente", description: "Esporta il tuo video e pubblicalo su YouTube, TikTok o qualsiasi piattaforma." }
      ],
      features: [
        { title: "Nessun Volto Richiesto", description: "Pipeline completa di creazione video senza apparire davanti alla telecamera" },
        { title: "Narrazione IA", description: "Doppiaggi professionali con oltre 50 voci IA realistiche in 32 lingue" },
        { title: "Animazione Cinematografica", description: "Trasforma immagini statiche in scene dinamiche con effetti di movimento IA" },
        { title: "Sottotitoli Automatici", description: "Sottotitoli sincronizzati per accessibilita e coinvolgimento" },
        { title: "Libreria Musicale", description: "Musica royalty-free e suoni ambientali abbinati al mood del contenuto" },
        { title: "Template per Nicchia", description: "Template pre-costruiti per nicchie popolari di contenuto senza volto" }
      ],
      faqs: [
        { question: "Si puo guadagnare con video senza mostrare il volto?", answer: "Assolutamente. I canali senza volto sono tra i piu redditizi su YouTube, specialmente in nicchie come finanza ed educazione." },
        { question: "Quali nicchie funzionano meglio?", answer: "Educazione, finanza e business, recensioni tech, storytelling e mystery, storie motivazionali e contenuti di meditazione." },
        { question: "Posso usare le voci IA per qualsiasi tipo di contenuto?", answer: "Si, le nostre 50+ voci IA coprono un'ampia gamma di toni e stili." },
        { question: "Come rendo unici i miei video?", answer: "La combinazione della tua selezione di immagini, scelta della voce, stile dello script e effetti di movimento crea contenuti unici." }
      ]
    },
    nl: {
      name: "AI Gezichtloze Video Generator",
      tagline: "Maak virale videos zonder je gezicht te tonen",
      description: "Genereer boeiende video-inhoud met AI zonder voor de camera te verschijnen. Perfect voor creators die content willen monetiseren.",
      detailedDescription: "Bouw een winstgevend contentkanaal zonder voor de camera te staan. De Generator combineert AI-beeldanimatie, professionele stemmen en slimme bewerking.",
      howItWorks: [
        { title: "Kies Je Niche", description: "Selecteer je thema: motiverend, educatief, productreviews, storytelling of elk onderwerp." },
        { title: "Upload Afbeeldingen", description: "Voeg afbeeldingen toe die je content illustreren. Stockfotos, screenshots of AI-gegenereerde visuals." },
        { title: "Voeg AI Voice-over Toe", description: "Genereer narration met AI-stemmen en pas cinematische bewegingseffecten toe." },
        { title: "Publiceer Anoniem", description: "Exporteer je video en publiceer op YouTube, TikTok of elk platform." }
      ],
      features: [
        { title: "Geen Gezicht Vereist", description: "Complete videoproductie-pipeline zonder voor de camera te verschijnen" },
        { title: "AI Narration", description: "Professionele voice-overs met 50+ realistische AI-stemmen in 32 talen" },
        { title: "Cinematische Animatie", description: "Transformeer statische beelden in dynamische scenes met AI-bewegingseffecten" },
        { title: "Automatische Ondertitels", description: "Gesynchroniseerde ondertitels voor toegankelijkheid en engagement" },
        { title: "Muziek Bibliotheek", description: "Royalty-vrije muziek en ambient sounds afgestemd op de stemming" },
        { title: "Niche Templates", description: "Voorgebouwde templates voor populaire gezichtloze content niches" }
      ],
      faqs: [
        { question: "Kun je geld verdienen met videos zonder gezicht?", answer: "Absoluut. Gezichtloze kanalen behoren tot de meest winstgevende op YouTube, vooral in niches zoals financien en educatie." },
        { question: "Welke niches werken het beste?", answer: "Educatie, financien en business, tech reviews, storytelling en mystery, motiverende verhalen en meditatie-content." },
        { question: "Kan ik de AI-stemmen voor elk type content gebruiken?", answer: "Ja, onze 50+ AI-stemmen dekken een breed scala aan tonen en stijlen." },
        { question: "Hoe maak ik mijn videos uniek?", answer: "De combinatie van je beeldselectie, stemkeuze, scriptstijl en bewegingseffecten creert unieke content." }
      ]
    },
    pl: {
      name: "Generator Wideo Bez Twarzy AI",
      tagline: "Tworz wiralowe filmy bez pokazywania twarzy",
      description: "Generuj angazujace tresci wideo z AI bez pojawiania sie przed kamera. Idealny dla tworcow, ktorzy chca zarabiac na tresciach.",
      detailedDescription: "Zbuduj dochodowy kanal bez stawania przed kamera. Generator laczy animacje obrazow AI, profesjonalne glosy i inteligentny montaz.",
      howItWorks: [
        { title: "Wybierz Swoja Nisze", description: "Wybierz tematyke: motywacyjna, edukacyjna, recenzje produktow, storytelling lub dowolny temat." },
        { title: "Przeslij Obrazy", description: "Dodaj obrazy ilustrujace Twoja tresc. Zdjecia stockowe, zrzuty ekranu lub wizualizacje AI." },
        { title: "Dodaj Glos AI i Ruch", description: "Wygeneruj narracje z glosami AI i zastosuj kinowe efekty ruchu." },
        { title: "Publikuj Anonimowo", description: "Eksportuj film i publikuj na YouTube, TikTok lub dowolnej platformie." }
      ],
      features: [
        { title: "Twarz Nie Jest Wymagana", description: "Kompletny proces tworzenia wideo bez pojawiania sie przed kamera" },
        { title: "Narracja AI", description: "Profesjonalne lektoraty z ponad 50 realistycznymi glosami AI w 32 jezykach" },
        { title: "Kinowa Animacja", description: "Przeksztalcaj statyczne obrazy w dynamiczne sceny z efektami ruchu AI" },
        { title: "Automatyczne Napisy", description: "Zsynchronizowane napisy dla dostepnosci i zaangazowania" },
        { title: "Biblioteka Muzyki", description: "Muzyka bez tantiem i dzwieki ambient dopasowane do nastroju" },
        { title: "Szablony Niszowe", description: "Gotowe szablony dla popularnych nisz tresci bez twarzy" }
      ],
      faqs: [
        { question: "Czy mozna zarabiac na filmach bez pokazywania twarzy?", answer: "Absolutnie. Kanaly bez twarzy naleza do najbardziej dochodowych na YouTube, szczegolnie w niszach jak finanse i edukacja." },
        { question: "Ktore nisze dzialaja najlepiej?", answer: "Edukacja, finanse i biznes, recenzje tech, storytelling i tajemnice, motywacyjne historie i tresci medytacyjne." },
        { question: "Czy moge uzywac glosow AI do kazdego typu tresci?", answer: "Tak, nasze 50+ glosow AI obejmuje szeroki zakres tonow i stylow." },
        { question: "Jak uczynic moje filmy unikalnymi?", answer: "Kombinacja Twojego wyboru obrazow, glosu, stylu skryptu i efektow ruchu tworzy unikalna tresc." }
      ]
    },
    ja: {
      name: "AI顔出し不要動画ジェネレーター",
      tagline: "顔を出さずにバイラル動画を作成",
      description: "カメラの前に出ることなくAIで魅力的な動画コンテンツを生成。コンテンツを収益化したいクリエイターに最適。",
      detailedDescription: "カメラの前に立つことなく収益性の高いコンテンツチャンネルを構築。ジェネレーターはAI画像アニメーション、プロの音声、スマート編集を組み合わせます。",
      howItWorks: [
        { title: "ニッチを選択", description: "テーマを選択：モチベーション、教育、商品レビュー、ストーリーテリングなど。" },
        { title: "画像をアップロード", description: "コンテンツを説明する画像を追加。ストック写真、スクリーンショット、またはAI生成ビジュアル。" },
        { title: "AIボイスとモーションを追加", description: "AIボイスでナレーションを生成し、シネマティックなモーションエフェクトを適用。" },
        { title: "匿名で公開", description: "動画をエクスポートし、顔を出さずにYouTube、TikTok、または任意のプラットフォームに公開。" }
      ],
      features: [
        { title: "顔出し不要", description: "カメラの前に出る必要のない完全な動画作成パイプライン" },
        { title: "AIナレーション", description: "32言語で50以上のリアルなAIボイスによるプロのボイスオーバー" },
        { title: "シネマティックアニメーション", description: "静止画像をAIモーションエフェクトでダイナミックなシーンに変換" },
        { title: "自動字幕", description: "アクセシビリティとエンゲージメントのための同期字幕" },
        { title: "BGMライブラリ", description: "コンテンツのムードに合わせたロイヤリティフリーの音楽とアンビエントサウンド" },
        { title: "ニッチテンプレート", description: "人気の顔出し不要コンテンツニッチ用のプリセットテンプレート" }
      ],
      faqs: [
        { question: "顔を出さない動画で収益化できますか?", answer: "もちろんです。顔出し不要チャンネルはYouTubeで最も収益性の高いカテゴリの一つです。" },
        { question: "顔出し不要コンテンツに最適なニッチは?", answer: "教育、金融とビジネス、テックレビュー、ストーリーテリングとミステリー、モチベーションと瞑想コンテンツ。" },
        { question: "AIボイスはどんなタイプのコンテンツにも使えますか?", answer: "はい、50以上のAIボイスは幅広いトーンとスタイルをカバーしています。" },
        { question: "顔出し不要動画をユニークにするには?", answer: "画像選択、ボイス選択、スクリプトスタイル、モーションエフェクトの組み合わせがユニークなコンテンツを生み出します。" }
      ]
    },
    ko: {
      name: "AI 얼굴 없는 비디오 생성기",
      tagline: "얼굴을 보여주지 않고 바이럴 비디오 제작",
      description: "카메라 앞에 나타나지 않고 AI로 매력적인 비디오 콘텐츠를 생성합니다. 콘텐츠를 수익화하려는 크리에이터에게 완벽합니다.",
      detailedDescription: "카메라 앞에 서지 않고 수익성 있는 콘텐츠 채널을 구축하세요. 생성기는 AI 이미지 애니메이션, 전문 음성, 스마트 편집을 결합합니다.",
      howItWorks: [
        { title: "니치 선택", description: "주제를 선택하세요: 동기부여, 교육, 제품 리뷰, 스토리텔링 또는 모든 주제." },
        { title: "이미지 업로드", description: "콘텐츠를 설명하는 이미지를 추가하세요. 스톡 사진, 스크린샷 또는 AI 생성 비주얼." },
        { title: "AI 음성 및 모션 추가", description: "AI 음성으로 내레이션을 생성하고 시네마틱 모션 효과를 적용합니다." },
        { title: "익명으로 게시", description: "비디오를 내보내고 얼굴을 보여주지 않고 YouTube, TikTok 또는 모든 플랫폼에 게시합니다." }
      ],
      features: [
        { title: "얼굴 불필요", description: "카메라 앞에 나타날 필요 없는 완전한 비디오 제작 파이프라인" },
        { title: "AI 내레이션", description: "32개 언어로 50개 이상의 사실적인 AI 음성으로 전문 보이스오버" },
        { title: "시네마틱 애니메이션", description: "AI 모션 효과로 정적 이미지를 역동적인 장면으로 변환" },
        { title: "자동 자막", description: "접근성과 참여를 위한 동기화된 자막" },
        { title: "음악 라이브러리", description: "콘텐츠 분위기에 맞는 로열티 프리 음악과 앰비언트 사운드" },
        { title: "니치 템플릿", description: "인기 있는 얼굴 없는 콘텐츠 니치를 위한 사전 제작 템플릿" }
      ],
      faqs: [
        { question: "얼굴을 보여주지 않는 비디오로 수익을 낼 수 있나요?", answer: "물론입니다. 얼굴 없는 채널은 YouTube에서 가장 수익성이 높은 채널 중 하나입니다." },
        { question: "얼굴 없는 콘텐츠에 가장 적합한 니치는?", answer: "교육, 금융 및 비즈니스, 기술 리뷰, 스토리텔링 및 미스터리, 동기부여 및 명상 콘텐츠." },
        { question: "AI 음성을 모든 유형의 콘텐츠에 사용할 수 있나요?", answer: "네, 50개 이상의 AI 음성은 다양한 톤과 스타일을 다룹니다." },
        { question: "얼굴 없는 비디오를 독특하게 만드는 방법은?", answer: "이미지 선택, 음성 선택, 스크립트 스타일, 모션 효과의 조합이 고유한 콘텐츠를 만듭니다." }
      ]
    },
    zh: {
      name: "AI无脸视频生成器",
      tagline: "不露脸创建病毒式视频",
      description: "使用AI生成引人入胜的视频内容，无需出镜。非常适合想要将内容变现的创作者。",
      detailedDescription: "无需出镜即可建立盈利的内容频道。生成器结合了AI图像动画、专业配音和智能编辑。",
      howItWorks: [
        { title: "选择细分市场", description: "选择您的主题：励志、教育、产品评测、故事讲述或任何话题。" },
        { title: "上传图片", description: "添加说明内容的图片。库存照片、截图或AI生成的视觉效果。" },
        { title: "添加AI配音和动效", description: "使用AI语音生成旁白，并应用电影级动效。" },
        { title: "匿名发布", description: "导出视频，在YouTube、TikTok或任何平台上发布而无需露脸。" }
      ],
      features: [
        { title: "无需露脸", description: "完整的视频创作流程，永远不需要出镜" },
        { title: "AI旁白", description: "32种语言50多种逼真AI语音的专业配音" },
        { title: "电影级动画", description: "通过AI动效将静态图像转换为动态场景" },
        { title: "自动字幕", description: "同步字幕，提高可访问性和参与度" },
        { title: "音乐库", description: "与内容氛围匹配的免版税音乐和环境音效" },
        { title: "细分市场模板", description: "为热门无脸内容细分市场预建的模板" }
      ],
      faqs: [
        { question: "不露脸的视频能赚钱吗?", answer: "当然可以。无脸频道是YouTube上最赚钱的频道之一。" },
        { question: "哪些细分市场最适合无脸内容?", answer: "教育、金融和商业、科技评测、故事讲述和悬疑、励志和冥想内容。" },
        { question: "我可以将AI语音用于任何类型的内容吗?", answer: "是的，我们的50多种AI语音涵盖了广泛的音调和风格。" },
        { question: "如何使我的无脸视频独特?", answer: "您的图片选择、声音选择、脚本风格和动效的组合创造了独特的内容。" }
      ]
    }
  },
  "ai-short-video-maker": {
    es: {
      name: "Creador de Videos Cortos IA",
      tagline: "Videos cortos virales en segundos",
      description: "Crea contenido corto perfecto para TikTok, Reels y Shorts. Optimizado para máximo engagement.",
      detailedDescription: "Domina el contenido de formato corto con nuestro creador de videos cortos IA.",
      howItWorks: [
        { title: "Sube Tu Imagen", description: "Elige una foto de alto impacto. La IA analiza los elementos visuales para determinar el mejor enfoque de video corto." },
        { title: "Selecciona Duración y Estilo", description: "Elige la duración: 3, 7, 15 o 30 segundos. Selecciona un estilo: dramático, energético, elegante o cinematográfico." },
        { title: "La IA Optimiza para Viralidad", description: "Nuestro algoritmo estructura el video con un gancho fuerte, desarrollo atractivo y final memorable." },
        { title: "Publica y Analiza", description: "Exporta en formato perfecto para cualquier plataforma. Analiza el rendimiento e itera." },
      ],
      features: [
        { title: "Generador de Ganchos IA", description: "Crea aperturas que captan la atención en los primeros 0.5 segundos críticos" },
        { title: "Tiempo Preciso", description: "La IA marca el ritmo de los efectos para mantener la atención durante todo el video" },
        { title: "Optimizado para Loop", description: "Crea loops perfectos que fomentan repeticiones y mejoran el ranking del algoritmo" },
        { title: "Puntuación de Viralidad", description: "La IA califica el potencial viral de tu video antes de publicar" },
      ],
    },
    de: {
      name: "KI-Kurzvideo-Ersteller",
      tagline: "Virale Kurzvideos in Sekunden erstellen",
      description: "Erstelle perfekte Kurzinhalte für TikTok, Reels und Shorts. Optimiert für maximales Engagement.",
      detailedDescription: "Beherrsche Kurzform-Content mit unserem KI-Kurzvideo-Ersteller.",
      howItWorks: [
        { title: "Bild Hochladen", description: "Wähle ein wirkungsvolles Foto. Die KI analysiert visuelle Elemente für den besten Kurzvideo-Ansatz." },
        { title: "Dauer & Stil Wählen", description: "Wähle die Ziellänge: 3, 7, 15 oder 30 Sekunden. Wähle einen Stil: dramatisch, energetisch, elegant oder filmisch." },
        { title: "KI Optimiert für Viralität", description: "Unser Algorithmus strukturiert das Video mit starkem Hook, fesselnder Mitte und wiederholenswertem Ende." },
        { title: "Veröffentlichen & Tracken", description: "Exportiere im perfekten Format für jede Plattform. Verfolge die Performance." },
      ],
      features: [
        { title: "KI-Hook-Generator", description: "Erstellt aufmerksamkeitsstarke Eröffnungen in den kritischen ersten 0,5 Sekunden" },
        { title: "Präzises Timing", description: "KI taktet Bewegungseffekte, um die Aufmerksamkeit durchgehend zu halten" },
        { title: "Loop-Optimiert", description: "Erstellt nahtlose Loops, die Wiederholungen fördern und das Algorithmus-Ranking verbessern" },
        { title: "Viralitäts-Score", description: "KI bewertet das virale Potenzial deines Videos vor der Veröffentlichung" },
      ],
    },
    fr: {
      name: "Créateur de Vidéos Courtes IA",
      tagline: "Créez des vidéos courtes virales en secondes",
      description: "Créez du contenu court parfait pour TikTok, Reels et Shorts. Optimisé pour un engagement maximal.",
      detailedDescription: "Maîtrisez le contenu court avec notre créateur de vidéos courtes IA.",
      howItWorks: [
        { title: "Téléchargez Votre Image", description: "Choisissez une photo percutante. L'IA analyse les éléments visuels pour déterminer la meilleure approche vidéo courte." },
        { title: "Sélectionnez Durée et Style", description: "Choisissez la durée : 3, 7, 15 ou 30 secondes. Choisissez un style : dramatique, énergique, élégant ou cinématique." },
        { title: "L'IA Optimise pour la Viralité", description: "Notre algorithme structure la vidéo avec une accroche forte, un milieu engageant et une fin mémorable." },
        { title: "Publiez et Suivez", description: "Exportez au format parfait pour toute plateforme. Suivez les performances et itérez." },
      ],
      features: [
        { title: "Générateur d'Accroches IA", description: "Crée des ouvertures captivantes dans les 0,5 premières secondes critiques" },
        { title: "Timing Précis", description: "L'IA rythme les effets de mouvement pour maintenir l'attention tout au long" },
        { title: "Optimisé pour la Boucle", description: "Crée des boucles parfaites qui encouragent les replays et améliorent le classement algorithmique" },
        { title: "Score de Viralité", description: "L'IA évalue le potentiel viral de votre vidéo avant publication" },
      ],
    },
    pt: {
      name: "Criador de Vídeos Curtos IA",
      tagline: "Crie vídeos curtos virais em segundos",
      description: "Crie conteúdo curto perfeito para TikTok, Reels e Shorts. Otimizado para máximo engajamento.",
      detailedDescription: "Domine o conteúdo de formato curto com nosso criador de vídeos curtos IA.",
      howItWorks: [
        { title: "Envie Sua Imagem", description: "Escolha uma foto de alto impacto. A IA analisa elementos visuais para determinar a melhor abordagem de vídeo curto." },
        { title: "Selecione Duração e Estilo", description: "Escolha a duração: 3, 7, 15 ou 30 segundos. Escolha um estilo: dramático, energético, elegante ou cinematográfico." },
        { title: "A IA Otimiza para Viralidade", description: "Nosso algoritmo estrutura o vídeo com gancho forte, meio envolvente e final memorável." },
        { title: "Publique e Acompanhe", description: "Exporte no formato perfeito para qualquer plataforma. Acompanhe o desempenho." },
      ],
      features: [
        { title: "Gerador de Ganchos IA", description: "Cria aberturas que captam atenção nos primeiros 0,5 segundos críticos" },
        { title: "Timing Preciso", description: "A IA define o ritmo dos efeitos para manter a atenção durante todo o vídeo" },
        { title: "Otimizado para Loop", description: "Cria loops perfeitos que incentivam replays e melhoram o ranking do algoritmo" },
        { title: "Pontuação de Viralidade", description: "A IA avalia o potencial viral do seu vídeo antes de publicar" },
      ],
    },
    ru: {
      name: "ИИ Создатель Коротких Видео",
      tagline: "Вирусные короткие видео за секунды",
      description: "Создавайте идеальный короткий контент для TikTok, Reels и Shorts. Оптимизировано для максимального вовлечения.",
      detailedDescription: "Овладейте коротким форматом с нашим ИИ создателем коротких видео.",
      howItWorks: [
        { title: "Загрузите Изображение", description: "Выберите яркое фото. ИИ анализирует визуальные элементы для определения лучшего подхода к короткому видео." },
        { title: "Выберите Длительность и Стиль", description: "Выберите длительность: 3, 7, 15 или 30 секунд. Выберите стиль: драматичный, энергичный, элегантный или кинематографичный." },
        { title: "ИИ Оптимизирует для Виральности", description: "Наш алгоритм структурирует видео с сильным хуком, захватывающей серединой и запоминающимся финалом." },
        { title: "Публикуйте и Отслеживайте", description: "Экспортируйте в идеальном формате для любой платформы. Отслеживайте результаты." },
      ],
      features: [
        { title: "ИИ Генератор Хуков", description: "Создаёт цепляющие начала в критические первые 0,5 секунды" },
        { title: "Точный Тайминг", description: "ИИ задаёт ритм эффектов движения для удержания внимания на протяжении всего видео" },
        { title: "Оптимизация для Лупов", description: "Создаёт бесшовные петли, которые поощряют повторные просмотры" },
        { title: "Оценка Виральности", description: "ИИ оценивает вирусный потенциал вашего видео перед публикацией" },
      ],
    },
    it: {
      name: "Creatore Video Brevi IA",
      tagline: "Crea video brevi virali in pochi secondi",
      description: "Crea contenuti brevi perfetti per TikTok, Reels e Shorts. Ottimizzato per il massimo engagement.",
      detailedDescription: "Padroneggia i contenuti brevi con il nostro creatore di video brevi IA.",
      howItWorks: [
        { title: "Carica la Tua Immagine", description: "Scegli una foto d'impatto. L'IA analizza gli elementi visivi per determinare il miglior approccio video breve." },
        { title: "Seleziona Durata e Stile", description: "Scegli la durata: 3, 7, 15 o 30 secondi. Scegli uno stile: drammatico, energico, elegante o cinematografico." },
        { title: "L'IA Ottimizza per la Viralità", description: "Il nostro algoritmo struttura il video con un hook forte, una parte centrale coinvolgente e un finale memorabile." },
        { title: "Pubblica e Monitora", description: "Esporta nel formato perfetto per qualsiasi piattaforma. Monitora le performance." },
      ],
      features: [
        { title: "Generatore di Hook IA", description: "Crea aperture che catturano l'attenzione nei primi 0,5 secondi critici" },
        { title: "Timing Preciso", description: "L'IA scandisce gli effetti di movimento per mantenere l'attenzione per tutto il video" },
        { title: "Ottimizzato per Loop", description: "Crea loop perfetti che incoraggiano i replay e migliorano il ranking algoritmico" },
        { title: "Punteggio di Viralità", description: "L'IA valuta il potenziale virale del tuo video prima della pubblicazione" },
      ],
    },
    nl: {
      name: "AI Korte Video Maker",
      tagline: "Maak virale korte video's in seconden",
      description: "Maak perfecte korte content voor TikTok, Reels en Shorts. Geoptimaliseerd voor maximale betrokkenheid.",
      detailedDescription: "Beheers korte content met onze AI korte video maker.",
      howItWorks: [
        { title: "Upload Je Afbeelding", description: "Kies een impactvolle foto. De AI analyseert visuele elementen voor de beste korte video aanpak." },
        { title: "Selecteer Duur & Stijl", description: "Kies de duur: 3, 7, 15 of 30 seconden. Kies een stijl: dramatisch, energiek, elegant of filmisch." },
        { title: "AI Optimaliseert voor Viraliteit", description: "Ons algoritme structureert de video met een sterke hook, boeiend midden en memorabel einde." },
        { title: "Publiceer & Volg", description: "Exporteer in het perfecte formaat voor elk platform. Volg de prestaties." },
      ],
      features: [
        { title: "AI Hook Generator", description: "Maakt aandachttrekkende openingen in de kritieke eerste 0,5 seconden" },
        { title: "Precieze Timing", description: "AI bepaalt het tempo van bewegingseffecten om aandacht vast te houden" },
        { title: "Loop-Geoptimaliseerd", description: "Maakt naadloze loops die replays aanmoedigen en algoritme ranking verbeteren" },
        { title: "Viraliteits Score", description: "AI beoordeelt het virale potentieel van je video voor publicatie" },
      ],
    },
    pl: {
      name: "Kreator Krótkich Filmów AI",
      tagline: "Twórz wirusowe krótkie filmy w sekundy",
      description: "Twórz idealne krótkie treści na TikTok, Reels i Shorts. Zoptymalizowane pod maksymalne zaangażowanie.",
      detailedDescription: "Opanuj krótkie formy wideo z naszym kreatorem krótkich filmów AI.",
      howItWorks: [
        { title: "Prześlij Swoje Zdjęcie", description: "Wybierz efektowne zdjęcie. AI analizuje elementy wizualne, aby określić najlepsze podejście do krótkiego filmu." },
        { title: "Wybierz Czas i Styl", description: "Wybierz długość: 3, 7, 15 lub 30 sekund. Wybierz styl: dramatyczny, energiczny, elegancki lub filmowy." },
        { title: "AI Optymalizuje pod Wirusowość", description: "Nasz algorytm strukturyzuje film z mocnym hookiem, angażującym środkiem i zapadającym w pamięć zakończeniem." },
        { title: "Publikuj i Śledź", description: "Eksportuj w idealnym formacie na każdą platformę. Śledź wyniki i ulepszaj." },
      ],
      features: [
        { title: "Generator Hooków AI", description: "Tworzy przyciągające uwagę otwarcia w krytycznych pierwszych 0,5 sekundy" },
        { title: "Precyzyjny Timing", description: "AI wyznacza tempo efektów ruchu, aby utrzymać uwagę przez cały film" },
        { title: "Zoptymalizowany pod Loop", description: "Tworzy idealne pętle zachęcające do powtórnych odtworzeń" },
        { title: "Ocena Wirusowości", description: "AI ocenia potencjał wirusowy Twojego filmu przed publikacją" },
      ],
    },
    ja: {
      name: "AIショート動画メーカー",
      tagline: "数秒でバイラルショート動画を作成",
      description: "TikTok、Reels、Shortsに最適な短編コンテンツを作成。最大エンゲージメントに最適化。",
      detailedDescription: "AIショート動画メーカーで短編コンテンツをマスター。",
      howItWorks: [
        { title: "画像をアップロード", description: "インパクトのある写真を選択。AIが視覚要素を分析し、最適なショート動画アプローチを決定。" },
        { title: "長さとスタイルを選択", description: "長さを選択：3、7、15、または30秒。スタイルを選択：ドラマチック、エネルギッシュ、エレガント、またはシネマティック。" },
        { title: "AIがバイラル性を最適化", description: "アルゴリズムが強力なフック、魅力的な中盤、記憶に残るエンディングで動画を構成。" },
        { title: "公開してトラッキング", description: "あらゆるプラットフォームに最適なフォーマットでエクスポート。パフォーマンスを追跡。" },
      ],
      features: [
        { title: "AIフックジェネレーター", description: "重要な最初の0.5秒で注目を集めるオープニングを作成" },
        { title: "精密なタイミング", description: "AIがモーションエフェクトのペースを調整し、全体を通して注目を維持" },
        { title: "ループ最適化", description: "リプレイを促し、アルゴリズムランキングを向上させるシームレスなループを作成" },
        { title: "バイラルスコア", description: "公開前に動画のバイラルポテンシャルをAIが評価" },
      ],
    },
    ko: {
      name: "AI 숏폼 비디오 메이커",
      tagline: "몇 초 만에 바이럴 숏폼 비디오 제작",
      description: "TikTok, Reels, Shorts에 완벽한 숏폼 콘텐츠 제작. 최대 참여를 위해 최적화.",
      detailedDescription: "AI 숏폼 비디오 메이커로 숏폼 콘텐츠를 마스터하세요.",
      howItWorks: [
        { title: "이미지 업로드", description: "임팩트 있는 사진을 선택하세요. AI가 시각적 요소를 분석하여 최적의 숏폼 비디오 접근법을 결정합니다." },
        { title: "길이 및 스타일 선택", description: "길이 선택: 3, 7, 15 또는 30초. 스타일 선택: 드라마틱, 에너제틱, 엘레강스, 시네마틱." },
        { title: "AI가 바이럴성 최적화", description: "알고리즘이 강력한 훅, 몰입도 높은 중반, 기억에 남는 엔딩으로 비디오를 구성합니다." },
        { title: "게시 및 추적", description: "모든 플랫폼에 완벽한 포맷으로 내보내기. 성과를 추적하세요." },
      ],
      features: [
        { title: "AI 훅 제너레이터", description: "중요한 처음 0.5초에 시선을 사로잡는 오프닝 생성" },
        { title: "정밀한 타이밍", description: "AI가 모션 효과의 페이스를 조절하여 전체 주의를 유지" },
        { title: "루프 최적화", description: "재생을 유도하고 알고리즘 순위를 높이는 완벽한 루프 생성" },
        { title: "바이럴 점수", description: "게시 전 비디오의 바이럴 잠재력을 AI가 평가" },
      ],
    },
    zh: {
      name: "AI短视频制作器",
      tagline: "几秒钟内创建病毒式短视频",
      description: "为TikTok、Reels和Shorts创建完美的短内容。为最大参与度优化。",
      detailedDescription: "使用我们的AI短视频制作器掌握短视频内容。",
      howItWorks: [
        { title: "上传您的图片", description: "选择一张有冲击力的照片。AI分析视觉元素，确定最佳短视频方法。" },
        { title: "选择时长和风格", description: "选择时长：3、7、15或30秒。选择风格：戏剧性、活力、优雅或电影感。" },
        { title: "AI优化病毒性", description: "我们的算法以强力开头、引人入胜的中段和难忘的结尾构建视频。" },
        { title: "发布并追踪", description: "以完美格式导出到任何平台。追踪表现并优化。" },
      ],
      features: [
        { title: "AI钩子生成器", description: "在关键的前0.5秒创建吸引注意力的开场" },
        { title: "精准时机", description: "AI调整动效节奏，全程保持注意力" },
        { title: "循环优化", description: "创建完美循环，鼓励重播并提高算法排名" },
        { title: "病毒性评分", description: "AI在发布前评估视频的病毒潜力" },
      ],
    },
  },
  "ai-ecommerce-video-creator": {
    es: {
      name: "Creador de Videos E-commerce IA",
      tagline: "Videos de producto que venden",
      description: "Crea videos de producto que convierten visitantes en compradores. Optimizado para tiendas online.",
      detailedDescription: "Aumenta tus ventas con videos de producto profesionales creados con IA.",
    },
    pt: {
      name: "Criador de Vídeos E-commerce IA",
      tagline: "Vídeos de produto que vendem",
      description: "Crie vídeos de produto que convertem visitantes em compradores. Otimizado para lojas online.",
      detailedDescription: "Aumente suas vendas com vídeos de produto profissionais criados com IA.",
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
    ja: {
      name: "AI Eコマース動画クリエイター",
      tagline: "売れる商品動画",
      description: "訪問者を購入者に変える商品動画を作成。オンラインストア向けに最適化。",
      detailedDescription: "AIで作成したプロの商品動画で売上を増加。",
    },
    ko: {
      name: "AI 이커머스 비디오 크리에이터",
      tagline: "판매를 부르는 제품 비디오",
      description: "방문자를 구매자로 전환하는 제품 비디오 제작. 온라인 스토어에 최적화.",
      detailedDescription: "AI로 제작한 전문 제품 비디오로 매출 증대.",
    },
    it: {
      name: "Creatore Video E-commerce IA",
      tagline: "Video di prodotti che vendono",
      description: "Crea video di prodotti che convertono i visitatori in acquirenti. Ottimizzato per negozi online.",
      detailedDescription: "Aumenta le tue vendite con video di prodotti professionali creati con l'IA.",
    },
    nl: {
      name: "AI E-commerce Video Maker",
      tagline: "Productvideo's die verkopen",
      description: "Maak productvideo's die bezoekers omzetten in kopers. Geoptimaliseerd voor online winkels.",
      detailedDescription: "Verhoog je verkoop met professionele productvideo's gemaakt met AI.",
    },
    pl: {
      name: "Kreator Wideo E-commerce AI",
      tagline: "Filmy produktowe, które sprzedają",
      description: "Twórz filmy produktowe, które przekształcają odwiedzających w kupujących. Zoptymalizowane dla sklepów online.",
      detailedDescription: "Zwiększ sprzedaż dzięki profesjonalnym filmom produktowym tworzonym przez AI.",
    },
  },
  "ai-photo-animation": {
    es: {
      name: "Animación de Fotos IA",
      tagline: "Da vida a tus fotos con animación IA",
      description: "Anima cualquier foto con movimientos realistas. Crea contenido único y atractivo.",
      detailedDescription: "Transforma fotos estáticas en animaciones cautivadoras con nuestra tecnología de animación IA.",
    },
    pt: {
      name: "Animação de Fotos IA",
      tagline: "Dê vida às suas fotos com animação IA",
      description: "Anime qualquer foto com movimentos realistas. Crie conteúdo único e atraente.",
      detailedDescription: "Transforme fotos estáticas em animações cativantes com nossa tecnologia de animação IA.",
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
    ja: {
      name: "AIフォトアニメーション",
      tagline: "AIアニメーションで写真に命を",
      description: "リアルな動きで写真をアニメーション化。ユニークで魅力的なコンテンツを作成。",
      detailedDescription: "AIアニメーション技術で静止画を魅力的なアニメーションに変換。",
    },
    ko: {
      name: "AI 포토 애니메이션",
      tagline: "AI 애니메이션으로 사진에 생명을",
      description: "사실적인 움직임으로 사진 애니메이션화. 독특하고 매력적인 콘텐츠 제작.",
      detailedDescription: "AI 애니메이션 기술로 정적 사진을 매력적인 애니메이션으로 변환.",
    },
    it: {
      name: "Animazione Foto IA",
      tagline: "Dai vita alle tue foto con l'animazione IA",
      description: "Anima qualsiasi foto con movimenti realistici. Crea contenuti unici e coinvolgenti.",
      detailedDescription: "Trasforma foto statiche in animazioni accattivanti con la nostra tecnologia di animazione IA.",
    },
    nl: {
      name: "AI Foto Animatie",
      tagline: "Breng je foto's tot leven met AI-animatie",
      description: "Animeer elke foto met realistische bewegingen. Maak unieke en boeiende content.",
      detailedDescription: "Transformeer statische foto's in boeiende animaties met onze AI-animatietechnologie.",
    },
    pl: {
      name: "Animacja Zdjęć AI",
      tagline: "Ożyw swoje zdjęcia dzięki animacji AI",
      description: "Animuj dowolne zdjęcie z realistycznymi ruchami. Twórz unikalne i atrakcyjne treści.",
      detailedDescription: "Przekształć statyczne zdjęcia w fascynujące animacje dzięki naszej technologii animacji AI.",
    },
  },
  "ai-3d-photo-video": {
    es: {
      name: "Video Foto 3D IA",
      tagline: "Convierte fotos 2D en videos 3D",
      description: "Crea impresionantes videos 3D desde fotos planas. Profundidad y dimensión cinematográfica.",
      detailedDescription: "Añade profundidad 3D a tus fotos con nuestra tecnología de video foto 3D IA.",
    },
    pt: {
      name: "Vídeo Foto 3D IA",
      tagline: "Converta fotos 2D em vídeos 3D",
      description: "Crie vídeos 3D impressionantes a partir de fotos planas. Profundidade e dimensão cinematográfica.",
      detailedDescription: "Adicione profundidade 3D às suas fotos com nossa tecnologia de vídeo foto 3D IA.",
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
    ja: {
      name: "AI 3Dフォトビデオ",
      tagline: "2D写真を3D動画に変換",
      description: "平面写真から印象的な3D動画を作成。シネマティックな奥行きと立体感。",
      detailedDescription: "AI 3Dフォトビデオ技術で写真に3D深度を追加。",
    },
    ko: {
      name: "AI 3D 포토 비디오",
      tagline: "2D 사진을 3D 비디오로 변환",
      description: "평면 사진에서 인상적인 3D 비디오 제작. 시네마틱한 깊이와 차원.",
      detailedDescription: "AI 3D 포토 비디오 기술로 사진에 3D 깊이 추가.",
    },
    it: {
      name: "Video Foto 3D IA",
      tagline: "Converti foto 2D in video 3D",
      description: "Crea video 3D straordinari da foto piatte. Profondità e dimensione cinematografica.",
      detailedDescription: "Aggiungi profondità 3D alle tue foto con la nostra tecnologia video foto 3D IA.",
    },
    nl: {
      name: "AI 3D Foto Video",
      tagline: "Zet 2D-foto's om in 3D-video's",
      description: "Maak verbluffende 3D-video's van platte foto's. Cinematische diepte en dimensie.",
      detailedDescription: "Voeg 3D-diepte toe aan je foto's met onze AI 3D-fotovideotechnologie.",
    },
    pl: {
      name: "Wideo Zdjęcie 3D AI",
      tagline: "Konwertuj zdjęcia 2D na filmy 3D",
      description: "Twórz oszałamiające filmy 3D z płaskich zdjęć. Kinematograficzna głębia i wymiar.",
      detailedDescription: "Dodaj głębię 3D do swoich zdjęć dzięki naszej technologii wideo zdjęcie 3D AI.",
    },
  },
  "ai-follow-video-effect": {
    es: {
      name: "Efecto de Seguimiento IA",
      tagline: "La cámara sigue automáticamente al sujeto",
      description: "Crea videos donde la cámara sigue al sujeto principal. Movimiento natural y cinematográfico.",
      detailedDescription: "Añade seguimiento inteligente de cámara a tus fotos con nuestro efecto de seguimiento IA.",
    },
    pt: {
      name: "Efeito de Seguimento IA",
      tagline: "A câmera segue automaticamente o sujeito",
      description: "Crie vídeos onde a câmera segue o sujeito principal. Movimento natural e cinematográfico.",
      detailedDescription: "Adicione rastreamento inteligente de câmera às suas fotos com nosso efeito de seguimento IA.",
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
    ja: {
      name: "AI追従エフェクト",
      tagline: "カメラが被写体を自動追従",
      description: "被写体を追従するカメラ動画を作成。自然でシネマティックな動き。",
      detailedDescription: "AI追従エフェクトで写真にスマートなカメラトラッキングを追加。",
    },
    ko: {
      name: "AI 팔로우 효과",
      tagline: "카메라가 피사체를 자동으로 추적",
      description: "피사체를 따라가는 카메라 비디오 제작. 자연스럽고 시네마틱한 움직임.",
      detailedDescription: "AI 팔로우 효과로 사진에 스마트 카메라 트래킹 추가.",
    },
    it: {
      name: "Effetto Seguimento IA",
      tagline: "La fotocamera segue automaticamente il soggetto",
      description: "Crea video dove la fotocamera segue il soggetto principale. Movimento naturale e cinematografico.",
      detailedDescription: "Aggiungi tracciamento intelligente della fotocamera alle tue foto con il nostro effetto seguimento IA.",
    },
    nl: {
      name: "AI Volg Effect",
      tagline: "Camera volgt automatisch het onderwerp",
      description: "Maak video's waarbij de camera het hoofdonderwerp volgt. Natuurlijke cinematische beweging.",
      detailedDescription: "Voeg slimme cameratracking toe aan je foto's met ons AI volg-effect.",
    },
    pl: {
      name: "Efekt Śledzenia AI",
      tagline: "Kamera automatycznie śledzi obiekt",
      description: "Twórz filmy, gdzie kamera podąża za głównym obiektem. Naturalny kinematograficzny ruch.",
      detailedDescription: "Dodaj inteligentne śledzenie kamery do swoich zdjęć z naszym efektem śledzenia AI.",
    },
  },
  "ai-dolly-zoom-effect": {
    es: {
      name: "Efecto Dolly Zoom IA",
      tagline: "El icónico efecto de vértigo cinematográfico",
      description: "Crea el famoso efecto de vértigo donde el fondo se acerca mientras el sujeto se mantiene. Cinematográfico al instante.",
      detailedDescription: "Añade el icónico efecto dolly zoom de Hitchcock a tus fotos con nuestra tecnología IA.",
    },
    pt: {
      name: "Efeito Dolly Zoom IA",
      tagline: "O icônico efeito de vertigem cinematográfico",
      description: "Crie o famoso efeito de vertigem onde o fundo se aproxima enquanto o sujeito permanece. Cinematográfico instantaneamente.",
      detailedDescription: "Adicione o icônico efeito dolly zoom de Hitchcock às suas fotos com nossa tecnologia IA.",
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
    ja: {
      name: "AIドリーズームエフェクト",
      tagline: "象徴的なシネマティック眩暈エフェクト",
      description: "被写体は固定のまま背景が近づく有名な眩暈エフェクトを作成。即座にシネマティック。",
      detailedDescription: "AI技術でヒッチコックの象徴的なドリーズームエフェクトを写真に追加。",
    },
    ko: {
      name: "AI 돌리 줌 효과",
      tagline: "상징적인 시네마틱 현기증 효과",
      description: "피사체는 고정된 채 배경이 다가오는 유명한 현기증 효과 제작. 즉각적인 시네마틱.",
      detailedDescription: "AI 기술로 히치콕의 상징적인 돌리 줌 효과를 사진에 추가.",
    },
    it: {
      name: "Effetto Dolly Zoom IA",
      tagline: "L'iconico effetto vertigine cinematografico",
      description: "Crea il famoso effetto vertigine dove lo sfondo si avvicina mentre il soggetto rimane. Cinematografico istantaneamente.",
      detailedDescription: "Aggiungi l'iconico effetto dolly zoom di Hitchcock alle tue foto con la nostra tecnologia IA.",
    },
    nl: {
      name: "AI Dolly Zoom Effect",
      tagline: "Het iconische cinematische duizeleffect",
      description: "Maak het beroemde duizeleffect waarbij de achtergrond nadert terwijl het onderwerp blijft. Direct cinematisch.",
      detailedDescription: "Voeg het iconische Hitchcock dolly zoom effect toe aan je foto's met onze AI-technologie.",
    },
    pl: {
      name: "Efekt Dolly Zoom AI",
      tagline: "Ikoniczny kinematograficzny efekt zawrotu głowy",
      description: "Stwórz słynny efekt zawrotu głowy, gdzie tło się zbliża, a obiekt pozostaje. Natychmiast kinematograficznie.",
      detailedDescription: "Dodaj ikoniczny efekt dolly zoom Hitchcocka do swoich zdjęć z naszą technologią AI.",
    },
  },
  "ai-camera-pan-effect": {
    es: {
      name: "Efecto de Paneo IA",
      tagline: "Movimiento de cámara panorámico suave",
      description: "Añade movimiento de paneo horizontal o vertical a cualquier foto. Cinematográfico y profesional.",
      detailedDescription: "Crea movimientos de paneo cinematográficos con nuestro efecto de paneo IA.",
    },
    pt: {
      name: "Efeito de Panorâmica IA",
      tagline: "Movimento de câmera panorâmico suave",
      description: "Adicione movimento de panorâmica horizontal ou vertical a qualquer foto. Cinematográfico e profissional.",
      detailedDescription: "Crie movimentos de panorâmica cinematográficos com nosso efeito de panorâmica IA.",
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
    ja: {
      name: "AIカメラパンエフェクト",
      tagline: "滑らかなパノラマカメラ移動",
      description: "写真に水平または垂直のパン移動を追加。シネマティックでプロフェッショナル。",
      detailedDescription: "AIパンエフェクトでシネマティックなパン移動を作成。",
    },
    ko: {
      name: "AI 카메라 팬 효과",
      tagline: "부드러운 파노라마 카메라 움직임",
      description: "사진에 수평 또는 수직 팬 움직임 추가. 시네마틱하고 전문적.",
      detailedDescription: "AI 팬 효과로 시네마틱 팬 움직임 생성.",
    },
    it: {
      name: "Effetto Panoramica IA",
      tagline: "Movimento fluido della panoramica",
      description: "Aggiungi movimento panoramico orizzontale o verticale a qualsiasi foto. Cinematografico e professionale.",
      detailedDescription: "Crea movimenti panoramici cinematografici con il nostro effetto panoramica IA.",
    },
    nl: {
      name: "AI Pan Effect",
      tagline: "Vloeiende panoramische camerabeweging",
      description: "Voeg horizontale of verticale panbeweging toe aan elke foto. Cinematisch en professioneel.",
      detailedDescription: "Maak cinematische panbeweging met ons AI pan-effect.",
    },
    pl: {
      name: "Efekt Panoramy AI",
      tagline: "Płynny panoramiczny ruch kamery",
      description: "Dodaj poziomy lub pionowy ruch panoramiczny do dowolnego zdjęcia. Kinematograficzny i profesjonalny.",
      detailedDescription: "Twórz kinematograficzne ruchy panoramiczne z naszym efektem panoramy AI.",
    },
  },
  "ai-ken-burns-effect": {
    es: {
      name: "Efecto Ken Burns IA",
      tagline: "El clásico efecto de documentales",
      description: "Añade el icónico zoom y paneo lento usado en documentales. Da vida a fotos con movimiento sutil.",
      detailedDescription: "Crea el famoso efecto Ken Burns para dar vida a fotos con movimiento cinematográfico sutil.",
    },
    pt: {
      name: "Efeito Ken Burns IA",
      tagline: "O clássico efeito de documentários",
      description: "Adicione o icônico zoom e panorâmica lenta usados em documentários. Dê vida às fotos com movimento sutil.",
      detailedDescription: "Crie o famoso efeito Ken Burns para dar vida às fotos com movimento cinematográfico sutil.",
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
    ja: {
      name: "AIケンバーンズエフェクト",
      tagline: "クラシックなドキュメンタリーエフェクト",
      description: "ドキュメンタリーで使われる象徴的なスローズームとパンを追加。微妙な動きで写真に命を。",
      detailedDescription: "有名なケンバーンズエフェクトで微妙なシネマティック動きを写真に。",
    },
    ko: {
      name: "AI 켄 번즈 효과",
      tagline: "클래식 다큐멘터리 효과",
      description: "다큐멘터리에서 사용되는 상징적인 슬로우 줌과 팬 추가. 미묘한 움직임으로 사진에 생명을.",
      detailedDescription: "유명한 켄 번즈 효과로 미묘한 시네마틱 움직임을 사진에.",
    },
    it: {
      name: "Effetto Ken Burns IA",
      tagline: "Il classico effetto dei documentari",
      description: "Aggiungi l'iconico zoom lento e panoramica usati nei documentari. Dai vita alle foto con movimento sottile.",
      detailedDescription: "Crea il famoso effetto Ken Burns per dare vita alle foto con movimento cinematografico sottile.",
    },
    nl: {
      name: "AI Ken Burns Effect",
      tagline: "Het klassieke documentaire-effect",
      description: "Voeg de iconische langzame zoom en pan toe die in documentaires worden gebruikt. Breng foto's tot leven met subtiele beweging.",
      detailedDescription: "Maak het beroemde Ken Burns effect om foto's tot leven te brengen met subtiele cinematische beweging.",
    },
    pl: {
      name: "Efekt Ken Burns AI",
      tagline: "Klasyczny efekt dokumentalny",
      description: "Dodaj ikoniczny powolny zoom i panoramę używane w dokumentach. Ożyw zdjęcia subtelnym ruchem.",
      detailedDescription: "Stwórz słynny efekt Ken Burns, aby ożywić zdjęcia subtelnym kinematograficznym ruchem.",
    },
  },
  "ai-slow-motion-video": {
    es: {
      name: "Video en Cámara Lenta IA",
      tagline: "Movimiento fluido en cámara lenta",
      description: "Crea impresionantes videos en cámara lenta desde cualquier foto. Movimiento suave y dramático.",
      detailedDescription: "Añade efecto de cámara lenta cinematográfica a tus fotos con nuestra tecnología IA.",
    },
    pt: {
      name: "Vídeo em Câmera Lenta IA",
      tagline: "Movimento fluido em câmera lenta",
      description: "Crie vídeos impressionantes em câmera lenta a partir de qualquer foto. Movimento suave e dramático.",
      detailedDescription: "Adicione efeito de câmera lenta cinematográfica às suas fotos com nossa tecnologia IA.",
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
    ja: {
      name: "AIスローモーション動画",
      tagline: "滑らかなスローモーション",
      description: "写真から印象的なスローモーション動画を作成。滑らかでドラマチックな動き。",
      detailedDescription: "AI技術でシネマティックなスローモーションエフェクトを写真に追加。",
    },
    ko: {
      name: "AI 슬로우 모션 비디오",
      tagline: "부드러운 슬로우 모션",
      description: "사진에서 인상적인 슬로우 모션 비디오 제작. 부드럽고 드라마틱한 움직임.",
      detailedDescription: "AI 기술로 시네마틱 슬로우 모션 효과를 사진에 추가.",
    },
    it: {
      name: "Video Slow Motion IA",
      tagline: "Movimento fluido al rallentatore",
      description: "Crea video al rallentatore straordinari da qualsiasi foto. Movimento fluido e drammatico.",
      detailedDescription: "Aggiungi effetto slow motion cinematografico alle tue foto con la nostra tecnologia IA.",
    },
    nl: {
      name: "AI Slow Motion Video",
      tagline: "Vloeiende slow motion beweging",
      description: "Maak verbluffende slow motion video's van elke foto. Vloeiende dramatische beweging.",
      detailedDescription: "Voeg cinematisch slow motion effect toe aan je foto's met onze AI-technologie.",
    },
    pl: {
      name: "Wideo Slow Motion AI",
      tagline: "Płynny ruch w zwolnionym tempie",
      description: "Twórz oszałamiające filmy w zwolnionym tempie z dowolnego zdjęcia. Płynny dramatyczny ruch.",
      detailedDescription: "Dodaj kinematograficzny efekt zwolnionego tempa do swoich zdjęć z naszą technologią AI.",
    },
  },
  "ai-loop-video-generator": {
    es: {
      name: "Generador de Videos Loop IA",
      tagline: "Videos en bucle perfecto sin costuras",
      description: "Crea videos que se repiten perfectamente. Ideal para fondos, redes sociales y arte digital.",
      detailedDescription: "Genera videos en bucle perfecto para contenido hipnótico que engancha a los espectadores.",
    },
    pt: {
      name: "Gerador de Vídeos Loop IA",
      tagline: "Vídeos em loop perfeito sem emendas",
      description: "Crie vídeos que se repetem perfeitamente. Ideal para fundos, redes sociais e arte digital.",
      detailedDescription: "Gere vídeos em loop perfeito para conteúdo hipnótico que prende os espectadores.",
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
    ja: {
      name: "AIループ動画ジェネレーター",
      tagline: "完璧なシームレスループ動画",
      description: "完璧にループする動画を作成。背景、SNS、デジタルアートに最適。",
      detailedDescription: "視聴者を引き付ける催眠的なコンテンツのための完璧なループ動画を生成。",
    },
    ko: {
      name: "AI 루프 비디오 생성기",
      tagline: "완벽한 심리스 루프 비디오",
      description: "완벽하게 반복되는 비디오 제작. 배경, SNS, 디지털 아트에 최적.",
      detailedDescription: "시청자를 사로잡는 최면적 콘텐츠를 위한 완벽한 루프 비디오 생성.",
    },
    it: {
      name: "Generatore Video Loop IA",
      tagline: "Video in loop perfetto senza interruzioni",
      description: "Crea video che si ripetono perfettamente. Ideale per sfondi, social media e arte digitale.",
      detailedDescription: "Genera video in loop perfetto per contenuti ipnotici che catturano gli spettatori.",
    },
    nl: {
      name: "AI Loop Video Generator",
      tagline: "Naadloze perfect geloopte video's",
      description: "Maak video's die perfect herhalen. Ideaal voor achtergronden, sociale media en digitale kunst.",
      detailedDescription: "Genereer perfect geloopte video's voor hypnotiserende content die kijkers boeit.",
    },
    pl: {
      name: "Generator Wideo Loop AI",
      tagline: "Idealnie zapętlone filmy bez szwów",
      description: "Twórz filmy, które idealnie się powtarzają. Idealne do teł, mediów społecznościowych i sztuki cyfrowej.",
      detailedDescription: "Generuj idealnie zapętlone filmy dla hipnotyzujących treści, które angażują widzów.",
    },
  },
  "ai-cinemagraph-maker": {
    es: {
      name: "Creador de Cinemagraphs IA",
      tagline: "Fotos con movimiento sutil y mágico",
      description: "Crea cinemagraphs donde solo una parte de la imagen se mueve. Efecto mágico e hipnótico.",
      detailedDescription: "Transforma fotos en cinemagraphs cautivadores con movimiento sutil y mágico.",
    },
    pt: {
      name: "Criador de Cinemagraphs IA",
      tagline: "Fotos com movimento sutil e mágico",
      description: "Crie cinemagraphs onde apenas uma parte da imagem se move. Efeito mágico e hipnótico.",
      detailedDescription: "Transforme fotos em cinemagraphs cativantes com movimento sutil e mágico.",
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
    ja: {
      name: "AIシネマグラフメーカー",
      tagline: "微妙で魔法のような動きを持つ写真",
      description: "画像の一部だけが動くシネマグラフを作成。魔法のような催眠的なエフェクト。",
      detailedDescription: "微妙で魔法のような動きを持つ魅惑的なシネマグラフに写真を変換。",
    },
    ko: {
      name: "AI 시네마그래프 메이커",
      tagline: "미묘하고 마법 같은 움직임을 가진 사진",
      description: "이미지의 일부만 움직이는 시네마그래프 제작. 마법같고 최면적인 효과.",
      detailedDescription: "미묘하고 마법 같은 움직임을 가진 매력적인 시네마그래프로 사진 변환.",
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
): ToolTranslation | null {
  // Don't return translations for English (default locale)
  if (locale === "en") return null;

  const translations = toolTranslations[slug];
  const translated = translations?.[locale];
  const fallback = createToolFallback(slug, locale as NonEnLocale, translated?.name);
  if (!translated) return fallback;

  return fallback
    ? {
        ...fallback,
        ...translated,
        howItWorks: translated.howItWorks || fallback.howItWorks,
        features: translated.features || fallback.features,
        faqs: translated.faqs || fallback.faqs,
      }
    : translated;
}
