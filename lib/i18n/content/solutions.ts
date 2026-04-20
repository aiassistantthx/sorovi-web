import { type Locale } from "@/lib/i18n/config";

interface SolutionTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
}

type NonEnLocale = Exclude<Locale, "en">;

const solutionTranslations: Record<string, Partial<Record<NonEnLocale, SolutionTranslation>>> = {
  "no-editing-skills": {
    es: { name: "Sin Habilidades de Edición", heroHeadline: "Crea Videos Profesionales Sin Saber Editar", heroSubheadline: "Olvida los meses de tutoriales y software caro. La IA de Hyreel hace la edición por ti — solo sube una foto y obtén un video." },
    de: { name: "Keine Bearbeitungskenntnisse", heroHeadline: "Professionelle Videos Ohne Bearbeitungskenntnisse", heroSubheadline: "Überspringe monatelanges Lernen und teure Software. Hyreels KI erledigt die Bearbeitung — lade ein Foto hoch und erhalte ein Video." },
    fr: { name: "Sans Compétences de Montage", heroHeadline: "Créez des Vidéos Pro Sans Savoir Monter", heroSubheadline: "Oubliez les mois de tutoriels et logiciels coûteux. L'IA de Hyreel fait le montage — uploadez une photo et obtenez une vidéo." },
    pt: { name: "Sem Habilidades de Edição", heroHeadline: "Crie Vídeos Profissionais Sem Saber Editar", heroSubheadline: "Esqueça meses de tutoriais e software caro. A IA do Hyreel faz a edição — envie uma foto e obtenha um vídeo." },
    ru: { name: "Без Навыков Редактирования", heroHeadline: "Создавайте Профессиональные Видео Без Навыков Монтажа", heroSubheadline: "Забудьте о месяцах обучения и дорогом софте. ИИ Hyreel делает монтаж за вас — загрузите фото и получите видео." },
    it: { name: "Senza Competenze di Editing", heroHeadline: "Crea Video Professionali Senza Saper Editare", heroSubheadline: "Dimentica mesi di tutorial e software costosi. L'IA di Hyreel fa il montaggio — carica una foto e ottieni un video." },
    nl: { name: "Geen Bewerkingsvaardigheden", heroHeadline: "Professionele Video's Zonder Bewerkingskennis", heroSubheadline: "Sla maanden tutorials en dure software over. Hyreels AI doet de bewerking — upload een foto en krijg een video." },
    pl: { name: "Bez Umiejętności Edycji", heroHeadline: "Twórz Profesjonalne Filmy Bez Umiejętności Montażu", heroSubheadline: "Zapomnij o miesiącach nauki i drogim oprogramowaniu. AI Hyreel robi montaż — prześlij zdjęcie i uzyskaj wideo." },
    ja: { name: "編集スキル不要", heroHeadline: "編集スキルなしでプロフェッショナルな動画を作成", heroSubheadline: "何ヶ月ものチュートリアルや高価なソフトウェアを忘れましょう。HyreelのAIが編集を行います — 写真をアップロードして動画を取得。" },
    ko: { name: "편집 기술 불필요", heroHeadline: "편집 기술 없이 전문 비디오 제작", heroSubheadline: "수개월의 튜토리얼과 비싼 소프트웨어를 건너뛰세요. Hyreel AI가 편집합니다 — 사진을 업로드하고 비디오를 받으세요." },
    zh: { name: "无需编辑技能", heroHeadline: "无需学习编辑即可创建专业视频", heroSubheadline: "忘记数月的教程和昂贵的软件。Hyreel的AI为您编辑 — 上传照片即可获得视频。" },
  },
  "fast-content-creation": {
    es: { name: "Creación Rápida de Contenido", heroHeadline: "Crea Videos en Segundos, No Horas", heroSubheadline: "Produce semanas de contenido en minutos. La IA de Hyreel transforma una sesión de fotos en docenas de videos únicos." },
    de: { name: "Schnelle Content-Erstellung", heroHeadline: "Videos in Sekunden, Nicht Stunden", heroSubheadline: "Produziere Wochen an Content in Minuten. Hyreels KI verwandelt ein Fotoshooting in Dutzende einzigartige Videos." },
    fr: { name: "Création Rapide de Contenu", heroHeadline: "Créez des Vidéos en Secondes, Pas en Heures", heroSubheadline: "Produisez des semaines de contenu en minutes. L'IA de Hyreel transforme une séance photo en dizaines de vidéos." },
    pt: { name: "Criação Rápida de Conteúdo", heroHeadline: "Crie Vídeos em Segundos, Não Horas", heroSubheadline: "Produza semanas de conteúdo em minutos. A IA do Hyreel transforma uma sessão de fotos em dezenas de vídeos únicos." },
    ru: { name: "Быстрое Создание Контента", heroHeadline: "Создавайте Видео за Секунды, Не Часы", heroSubheadline: "Производите недели контента за минуты. ИИ Hyreel превращает фотосессию в десятки уникальных видео." },
    it: { name: "Creazione Rapida di Contenuti", heroHeadline: "Crea Video in Secondi, Non Ore", heroSubheadline: "Produci settimane di contenuti in minuti. L'IA di Hyreel trasforma un servizio fotografico in decine di video unici." },
    nl: { name: "Snelle Content Creatie", heroHeadline: "Video's in Seconden, Niet Uren", heroSubheadline: "Produceer weken aan content in minuten. Hyreels AI transformeert een fotoshoot in tientallen unieke video's." },
    pl: { name: "Szybkie Tworzenie Treści", heroHeadline: "Twórz Filmy w Sekundach, Nie Godzinach", heroSubheadline: "Produkuj tygodnie treści w minuty. AI Hyreel zamienia sesję zdjęciową w dziesiątki unikalnych filmów." },
    ja: { name: "高速コンテンツ作成", heroHeadline: "数時間ではなく数秒で動画を作成", heroSubheadline: "数週間分のコンテンツを数分で制作。HyreelのAIが1回の撮影を数十本のユニークな動画に変換。" },
    ko: { name: "빠른 콘텐츠 제작", heroHeadline: "몇 시간이 아닌 몇 초 만에 비디오 제작", heroSubheadline: "몇 분 만에 몇 주치 콘텐츠 제작. Hyreel AI가 포토슈트를 수십 개의 독특한 비디오로 변환." },
    zh: { name: "快速内容创作", heroHeadline: "几秒钟而非几小时创建视频", heroSubheadline: "几分钟内制作数周的内容。Hyreel AI将一次拍摄转换为数十个独特视频。" },
  },
  "viral-videos": {
    es: { name: "Videos Virales", heroHeadline: "Crea Videos Que Se Vuelven Virales", heroSubheadline: "Efectos y formatos optimizados para algoritmos de redes sociales. Maximiza tu alcance con cada video." },
    de: { name: "Virale Videos", heroHeadline: "Erstelle Videos Die Viral Gehen", heroSubheadline: "Effekte und Formate optimiert für Social-Media-Algorithmen. Maximiere deine Reichweite mit jedem Video." },
    fr: { name: "Vidéos Virales", heroHeadline: "Créez des Vidéos Qui Deviennent Virales", heroSubheadline: "Effets et formats optimisés pour les algorithmes des réseaux sociaux. Maximisez votre portée avec chaque vidéo." },
    pt: { name: "Vídeos Virais", heroHeadline: "Crie Vídeos Que Viralizam", heroSubheadline: "Efeitos e formatos otimizados para algoritmos de redes sociais. Maximize seu alcance com cada vídeo." },
    ru: { name: "Вирусные Видео", heroHeadline: "Создавайте Видео, Которые Становятся Вирусными", heroSubheadline: "Эффекты и форматы, оптимизированные для алгоритмов соцсетей. Максимизируйте охват каждого видео." },
    it: { name: "Video Virali", heroHeadline: "Crea Video Che Diventano Virali", heroSubheadline: "Effetti e formati ottimizzati per gli algoritmi dei social media. Massimizza la tua portata con ogni video." },
    nl: { name: "Virale Video's", heroHeadline: "Maak Video's Die Viraal Gaan", heroSubheadline: "Effecten en formaten geoptimaliseerd voor social media algoritmes. Maximaliseer je bereik met elke video." },
    pl: { name: "Wirusowe Filmy", heroHeadline: "Twórz Filmy, Które Stają Się Wirusowe", heroSubheadline: "Efekty i formaty zoptymalizowane pod algorytmy mediów społecznościowych. Maksymalizuj zasięg każdego filmu." },
    ja: { name: "バイラル動画", heroHeadline: "バイラルになる動画を作成", heroSubheadline: "SNSアルゴリズムに最適化されたエフェクトとフォーマット。各動画でリーチを最大化。" },
    ko: { name: "바이럴 비디오", heroHeadline: "바이럴되는 비디오 제작", heroSubheadline: "소셜 미디어 알고리즘에 최적화된 효과와 형식. 모든 비디오로 도달률 최대화." },
    zh: { name: "病毒视频", heroHeadline: "创建爆款视频", heroSubheadline: "针对社交媒体算法优化的效果和格式。最大化每个视频的覆盖面。" },
  },
  "product-photography-to-video": {
    es: { name: "De Fotos de Producto a Video", heroHeadline: "Transforma Fotos de Producto en Videos Que Venden", heroSubheadline: "Convierte tu fotografía de producto existente en videos de e-commerce profesionales. Sin nuevas sesiones de fotos necesarias." },
    de: { name: "Produktfotos zu Video", heroHeadline: "Verwandle Produktfotos in Verkaufende Videos", heroSubheadline: "Verwandle deine bestehenden Produktfotos in professionelle E-Commerce-Videos. Keine neuen Fotoshootings nötig." },
    fr: { name: "Photos Produit en Vidéo", heroHeadline: "Transformez les Photos Produit en Vidéos Qui Vendent", heroSubheadline: "Convertissez vos photos produit existantes en vidéos e-commerce professionnelles. Pas de nouvelles séances photo." },
    pt: { name: "Fotos de Produto para Vídeo", heroHeadline: "Transforme Fotos de Produto em Vídeos Que Vendem", heroSubheadline: "Converta suas fotos de produto existentes em vídeos de e-commerce profissionais. Sem novas sessões de fotos." },
    ru: { name: "Фото Продукта в Видео", heroHeadline: "Превращайте Фото Продуктов в Продающие Видео", heroSubheadline: "Конвертируйте существующие фото продуктов в профессиональные видео для e-commerce. Новые фотосессии не нужны." },
    it: { name: "Foto Prodotto in Video", heroHeadline: "Trasforma le Foto Prodotto in Video Che Vendono", heroSubheadline: "Converti le tue foto prodotto esistenti in video e-commerce professionali. Nessun nuovo servizio fotografico." },
    nl: { name: "Productfoto's naar Video", heroHeadline: "Verander Productfoto's in Video's Die Verkopen", heroSubheadline: "Zet je bestaande productfoto's om in professionele e-commerce video's. Geen nieuwe fotoshoots nodig." },
    pl: { name: "Zdjęcia Produktów na Wideo", heroHeadline: "Zamień Zdjęcia Produktów w Filmy, Które Sprzedają", heroSubheadline: "Przekształć istniejące zdjęcia produktów w profesjonalne filmy e-commerce. Bez nowych sesji zdjęciowych." },
    ja: { name: "商品写真から動画へ", heroHeadline: "商品写真を売れる動画に変換", heroSubheadline: "既存の商品写真をプロフェッショナルなEコマース動画に変換。新しい撮影は不要。" },
    ko: { name: "제품 사진을 비디오로", heroHeadline: "제품 사진을 판매하는 비디오로 변환", heroSubheadline: "기존 제품 사진을 전문적인 이커머스 비디오로 변환. 새로운 촬영 불필요." },
    zh: { name: "产品照片转视频", heroHeadline: "将产品照片转换为促销视频", heroSubheadline: "将现有产品照片转换为专业的电商视频。无需新的拍摄。" },
  },
  "scale-video-production": {
    es: { name: "Escalar Producción de Video", heroHeadline: "Escala Tu Producción de Video 10x", heroSubheadline: "Produce cientos de videos por el costo de unos pocos. La IA de Hyreel hace que la producción de video a escala sea finalmente asequible." },
    de: { name: "Videoproduktion Skalieren", heroHeadline: "Skaliere Deine Videoproduktion 10x", heroSubheadline: "Produziere Hunderte Videos zu den Kosten von wenigen. Hyreels KI macht skalierbare Videoproduktion endlich erschwinglich." },
    fr: { name: "Scaler la Production Vidéo", heroHeadline: "Multipliez Votre Production Vidéo par 10", heroSubheadline: "Produisez des centaines de vidéos au prix de quelques-unes. L'IA de Hyreel rend enfin la production vidéo à grande échelle abordable." },
    pt: { name: "Escalar Produção de Vídeo", heroHeadline: "Escale Sua Produção de Vídeo 10x", heroSubheadline: "Produza centenas de vídeos pelo custo de alguns. A IA do Hyreel torna a produção de vídeo em escala finalmente acessível." },
    ru: { name: "Масштабирование Видеопроизводства", heroHeadline: "Масштабируйте Производство Видео в 10 Раз", heroSubheadline: "Производите сотни видео по цене нескольких. ИИ Hyreel делает масштабное производство видео наконец доступным." },
    it: { name: "Scalare la Produzione Video", heroHeadline: "Scala la Tua Produzione Video 10x", heroSubheadline: "Produci centinaia di video al costo di pochi. L'IA di Hyreel rende finalmente accessibile la produzione video su scala." },
    nl: { name: "Videoproductie Opschalen", heroHeadline: "Schaal Je Videoproductie 10x Op", heroSubheadline: "Produceer honderden video's voor de kosten van een paar. Hyreels AI maakt schaalbare videoproductie eindelijk betaalbaar." },
    pl: { name: "Skalowanie Produkcji Wideo", heroHeadline: "Skaluj Produkcję Wideo 10x", heroSubheadline: "Produkuj setki filmów za cenę kilku. AI Hyreel sprawia, że produkcja wideo na skalę jest wreszcie przystępna." },
    ja: { name: "動画制作のスケーリング", heroHeadline: "動画制作を10倍にスケール", heroSubheadline: "数本分のコストで数百本の動画を制作。HyreelのAIでスケーラブルな動画制作がついに手頃に。" },
    ko: { name: "비디오 제작 확장", heroHeadline: "비디오 제작을 10배 확장", heroSubheadline: "몇 개 비용으로 수백 개 비디오 제작. Hyreel AI로 대규모 비디오 제작이 마침내 저렴해졌습니다." },
    zh: { name: "扩大视频生产", heroHeadline: "将视频生产扩大10倍", heroSubheadline: "以几个视频的成本制作数百个视频。Hyreel AI让规模化视频制作终于变得实惠。" },
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
