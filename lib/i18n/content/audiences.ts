import type { Locale } from "@/lib/i18n/config";

interface AudienceTranslation {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
}

type AudienceTranslations = Partial<Record<Locale, AudienceTranslation>>;

// Translations for audience pages (excluding 'en' which uses the original)
export const audienceTranslations: Record<string, AudienceTranslations> = {
  creators: {
    es: {
      name: "Creadores de Contenido",
      heroHeadline: "Crea 10x Más Contenido Sin Agotarte",
      heroSubheadline: "Creación de video impulsada por IA diseñada para creadores de contenido. Convierte fotos en videos que detienen el scroll en segundos, no horas.",
    },
    de: {
      name: "Content Creator",
      heroHeadline: "Erstelle 10x Mehr Content Ohne Burnout",
      heroSubheadline: "KI-gestützte Videoerstellung für Content Creator. Verwandle Fotos in Sekunden in scroll-stoppende Videos, nicht Stunden.",
    },
    fr: {
      name: "Créateurs de Contenu",
      heroHeadline: "Créez 10x Plus de Contenu Sans Épuisement",
      heroSubheadline: "Création vidéo alimentée par IA conçue pour les créateurs de contenu. Transformez photos en vidéos captivantes en secondes.",
    },
    pt: {
      name: "Criadores de Conteúdo",
      heroHeadline: "Crie 10x Mais Conteúdo Sem Se Esgotar",
      heroSubheadline: "Criação de vídeo com IA projetada para criadores de conteúdo. Transforme fotos em vídeos que param o scroll em segundos.",
    },
    ru: {
      name: "Создатели контента",
      heroHeadline: "Создавайте в 10 раз больше контента без выгорания",
      heroSubheadline: "Создание видео на базе ИИ для создателей контента. Превращайте фото в останавливающие скролл видео за секунды.",
    },
    it: {
      name: "Content Creator",
      heroHeadline: "Crea 10x Più Contenuti Senza Esaurirti",
      heroSubheadline: "Creazione video alimentata da IA progettata per content creator. Trasforma foto in video che fermano lo scroll in secondi.",
    },
    nl: {
      name: "Content Creators",
      heroHeadline: "Maak 10x Meer Content Zonder Burn-out",
      heroSubheadline: "AI-gestuurde videocreatie ontworpen voor content creators. Zet foto's in seconden om in scroll-stoppende video's.",
    },
    pl: {
      name: "Twórcy Treści",
      heroHeadline: "Twórz 10x Więcej Treści Bez Wypalenia",
      heroSubheadline: "Tworzenie wideo napędzane przez AI zaprojektowane dla twórców treści. Przekształć zdjęcia w filmy zatrzymujące scrollowanie w kilka sekund.",
    },
    ja: {
      name: "コンテンツクリエイター",
      heroHeadline: "燃え尽きずに10倍のコンテンツを作成",
      heroSubheadline: "コンテンツクリエイターのために設計されたAI動画作成。写真を秒でスクロールを止める動画に変換。",
    },
    ko: {
      name: "콘텐츠 크리에이터",
      heroHeadline: "번아웃 없이 10배 더 많은 콘텐츠 제작",
      heroSubheadline: "콘텐츠 크리에이터를 위해 설계된 AI 비디오 제작. 사진을 몇 초 만에 스크롤을 멈추게 하는 비디오로 변환.",
    },
    zh: {
      name: "内容创作者",
      heroHeadline: "无需疲惫就能创作10倍内容",
      heroSubheadline: "专为内容创作者设计的AI视频创作。秒速将照片转换为令人驻足的视频。",
    },
  },
  "small-business": {
    es: {
      name: "Pequeñas Empresas",
      heroHeadline: "Marketing de Video Profesional Sin el Precio de Agencia",
      heroSubheadline: "Crea videos de marketing que detienen el scroll para tu pequeña empresa. Sin equipo de video necesario—solo tus fotos de producto y la IA de Hyreel.",
    },
    de: {
      name: "Kleine Unternehmen",
      heroHeadline: "Professionelles Videomarketing Ohne Agenturpreis",
      heroSubheadline: "Erstelle scroll-stoppende Marketing-Videos für dein kleines Unternehmen. Kein Video-Team nötig—nur deine Produktfotos und Hyreels KI.",
    },
    fr: {
      name: "Petites Entreprises",
      heroHeadline: "Marketing Vidéo Professionnel Sans Prix d'Agence",
      heroSubheadline: "Créez des vidéos marketing captivantes pour votre entreprise. Pas d'équipe vidéo nécessaire—juste vos photos et l'IA de Hyreel.",
    },
    pt: {
      name: "Pequenas Empresas",
      heroHeadline: "Marketing de Vídeo Profissional Sem Preço de Agência",
      heroSubheadline: "Crie vídeos de marketing que param o scroll para sua pequena empresa. Sem equipe de vídeo necessária—apenas suas fotos de produto e a IA do Hyreel.",
    },
    ru: {
      name: "Малый бизнес",
      heroHeadline: "Профессиональный видеомаркетинг без цен агентства",
      heroSubheadline: "Создавайте захватывающие маркетинговые видео для своего малого бизнеса. Команда не нужна—только ваши фото и ИИ Hyreel.",
    },
    it: {
      name: "Piccole Imprese",
      heroHeadline: "Video Marketing Professionale Senza Prezzi da Agenzia",
      heroSubheadline: "Crea video marketing che fermano lo scroll per la tua piccola impresa. Nessun team video necessario—solo le tue foto prodotto e l'IA di Hyreel.",
    },
    nl: {
      name: "Kleine Bedrijven",
      heroHeadline: "Professionele Videomarketing Zonder Bureauprijs",
      heroSubheadline: "Maak scroll-stoppende marketingvideo's voor je kleine bedrijf. Geen videoteam nodig—alleen je productfoto's en Hyreels AI.",
    },
    pl: {
      name: "Małe Firmy",
      heroHeadline: "Profesjonalny Marketing Wideo Bez Ceny Agencji",
      heroSubheadline: "Twórz filmy marketingowe zatrzymujące scrollowanie dla swojej małej firmy. Nie potrzebujesz zespołu wideo—tylko zdjęcia produktów i AI Hyreel.",
    },
    ja: {
      name: "中小企業",
      heroHeadline: "代理店価格なしでプロのビデオマーケティング",
      heroSubheadline: "中小企業のためにスクロールを止めるマーケティング動画を作成。ビデオチーム不要—製品写真とHyreelのAIだけ。",
    },
    ko: {
      name: "소규모 비즈니스",
      heroHeadline: "에이전시 가격 없이 전문적인 비디오 마케팅",
      heroSubheadline: "소규모 비즈니스를 위한 스크롤을 멈추게 하는 마케팅 비디오 제작. 비디오 팀 필요 없음—제품 사진과 Hyreel AI만 있으면 됩니다.",
    },
    zh: {
      name: "小型企业",
      heroHeadline: "无需代理价格的专业视频营销",
      heroSubheadline: "为您的小型企业创建令人驻足的营销视频。无需视频团队—只需您的产品照片和Hyreel的AI。",
    },
  },
  influencers: {
    es: {
      name: "Influencers",
      heroHeadline: "Escala Tus Acuerdos de Marca Sin Sacrificar Calidad",
      heroSubheadline: "Crea contenido patrocinado impresionante en minutos. Más asociaciones de marca, publicación consistente, sin agotamiento.",
    },
    de: {
      name: "Influencer",
      heroHeadline: "Skaliere Deine Markendeals Ohne Qualitätseinbußen",
      heroSubheadline: "Erstelle beeindruckende gesponserte Inhalte in Minuten. Mehr Markenpartnerschaften, konsistentes Posten, kein Burnout.",
    },
    fr: {
      name: "Influenceurs",
      heroHeadline: "Développez Vos Partenariats Sans Sacrifier la Qualité",
      heroSubheadline: "Créez du contenu sponsorisé époustouflant en minutes. Plus de partenariats, publication régulière, sans épuisement.",
    },
    pt: {
      name: "Influenciadores",
      heroHeadline: "Escale Suas Parcerias de Marca Sem Sacrificar Qualidade",
      heroSubheadline: "Crie conteúdo patrocinado impressionante em minutos. Mais parcerias de marca, postagem consistente, sem esgotamento.",
    },
    ru: {
      name: "Инфлюенсеры",
      heroHeadline: "Масштабируйте рекламные контракты без потери качества",
      heroSubheadline: "Создавайте потрясающий спонсорский контент за минуты. Больше партнёрств с брендами, регулярные публикации, без выгорания.",
    },
    it: {
      name: "Influencer",
      heroHeadline: "Scala le Tue Partnership Senza Sacrificare la Qualità",
      heroSubheadline: "Crea contenuti sponsorizzati straordinari in minuti. Più partnership, pubblicazione costante, nessun burnout.",
    },
    nl: {
      name: "Influencers",
      heroHeadline: "Schaal Je Merkdeals Zonder Kwaliteit Op Te Offeren",
      heroSubheadline: "Maak verbluffende gesponsorde content in minuten. Meer merkpartnerships, consistent posten, geen burn-out.",
    },
    pl: {
      name: "Influencerzy",
      heroHeadline: "Skaluj Umowy z Markami Bez Poświęcania Jakości",
      heroSubheadline: "Twórz oszałamiające treści sponsorowane w minuty. Więcej partnerstw, regularne publikowanie, bez wypalenia.",
    },
    ja: {
      name: "インフルエンサー",
      heroHeadline: "品質を犠牲にせずにブランド契約をスケール",
      heroSubheadline: "数分で素晴らしいスポンサードコンテンツを作成。より多くのブランドパートナーシップ、一貫した投稿、燃え尽きなし。",
    },
    ko: {
      name: "인플루언서",
      heroHeadline: "품질을 희생하지 않고 브랜드 계약 확대",
      heroSubheadline: "몇 분 만에 멋진 스폰서 콘텐츠 제작. 더 많은 브랜드 파트너십, 일관된 게시, 번아웃 없음.",
    },
    zh: {
      name: "网红",
      heroHeadline: "在不牺牲质量的情况下扩大品牌合作",
      heroSubheadline: "几分钟内创建令人惊叹的赞助内容。更多品牌合作、持续发布、无疲惫。",
    },
  },
  marketers: {
    es: {
      name: "Marketers Digitales",
      heroHeadline: "Prueba 10x Más Creativos Sin 10x el Presupuesto",
      heroSubheadline: "Genera variaciones de anuncios de video en segundos. Prueba A/B a escala, encuentra ganadores más rápido, maximiza tu ROAS.",
    },
    de: {
      name: "Digitale Marketer",
      heroHeadline: "Teste 10x Mehr Creatives Ohne 10x das Budget",
      heroSubheadline: "Generiere Video-Anzeigenvarianten in Sekunden. A/B-Tests im großen Maßstab, finde Gewinner schneller, maximiere deinen ROAS.",
    },
    fr: {
      name: "Marketeurs Digitaux",
      heroHeadline: "Testez 10x Plus de Créatifs Sans 10x le Budget",
      heroSubheadline: "Générez des variations d'annonces vidéo en secondes. Tests A/B à grande échelle, trouvez les gagnants plus vite, maximisez votre ROAS.",
    },
    pt: {
      name: "Marketers Digitais",
      heroHeadline: "Teste 10x Mais Criativos Sem 10x o Orçamento",
      heroSubheadline: "Gere variações de anúncios em vídeo em segundos. Teste A/B em escala, encontre vencedores mais rápido, maximize seu ROAS.",
    },
    ru: {
      name: "Диджитал-маркетологи",
      heroHeadline: "Тестируйте в 10 раз больше креативов без 10-кратного бюджета",
      heroSubheadline: "Генерируйте варианты видеорекламы за секунды. A/B тесты в масштабе, находите победителей быстрее, максимизируйте ROAS.",
    },
    it: {
      name: "Digital Marketer",
      heroHeadline: "Testa 10x Più Creativi Senza 10x il Budget",
      heroSubheadline: "Genera varianti di annunci video in secondi. Test A/B su larga scala, trova vincitori più velocemente, massimizza il tuo ROAS.",
    },
    nl: {
      name: "Digitale Marketeers",
      heroHeadline: "Test 10x Meer Creatives Zonder 10x het Budget",
      heroSubheadline: "Genereer video-advertentievariaties in seconden. A/B test op schaal, vind winnaars sneller, maximaliseer je ROAS.",
    },
    pl: {
      name: "Marketerzy Cyfrowi",
      heroHeadline: "Testuj 10x Więcej Kreacji Bez 10x Budżetu",
      heroSubheadline: "Generuj warianty reklam wideo w sekundy. Testy A/B na dużą skalę, znajduj zwycięzców szybciej, maksymalizuj ROAS.",
    },
    ja: {
      name: "デジタルマーケター",
      heroHeadline: "予算を10倍にせずに10倍のクリエイティブをテスト",
      heroSubheadline: "数秒で動画広告のバリエーションを生成。大規模A/Bテスト、勝者を早く見つけ、ROASを最大化。",
    },
    ko: {
      name: "디지털 마케터",
      heroHeadline: "예산 10배 없이 10배 더 많은 크리에이티브 테스트",
      heroSubheadline: "몇 초 만에 비디오 광고 변형 생성. 대규모 A/B 테스트, 더 빠르게 승자 찾기, ROAS 최대화.",
    },
    zh: {
      name: "数字营销人员",
      heroHeadline: "无需10倍预算即可测试10倍创意",
      heroSubheadline: "秒速生成视频广告变体。大规模A/B测试，更快找到赢家，最大化ROAS。",
    },
  },
  agencies: {
    es: {
      name: "Agencias de Marketing",
      heroHeadline: "Entrega Video para Cada Cliente Sin Contratar Más Editores",
      heroSubheadline: "Escala las capacidades de video de tu agencia 10x. Mayores márgenes, entrega más rápida, clientes que piensan que tienes un equipo de producción completo.",
    },
    de: {
      name: "Marketing-Agenturen",
      heroHeadline: "Liefere Video für Jeden Kunden Ohne Mehr Editoren Einzustellen",
      heroSubheadline: "Skaliere die Videofähigkeiten deiner Agentur um das 10-fache. Höhere Margen, schnellere Lieferung, Kunden die denken du hast ein komplettes Produktionsteam.",
    },
    fr: {
      name: "Agences Marketing",
      heroHeadline: "Livrez des Vidéos pour Chaque Client Sans Embaucher Plus de Monteurs",
      heroSubheadline: "Multipliez par 10 les capacités vidéo de votre agence. Marges plus élevées, livraison plus rapide, clients qui pensent que vous avez une équipe de production complète.",
    },
    pt: {
      name: "Agências de Marketing",
      heroHeadline: "Entregue Vídeo para Cada Cliente Sem Contratar Mais Editores",
      heroSubheadline: "Escale as capacidades de vídeo da sua agência em 10x. Margens mais altas, entrega mais rápida, clientes que pensam que você tem uma equipe de produção completa.",
    },
    ru: {
      name: "Маркетинговые агентства",
      heroHeadline: "Делайте видео для каждого клиента без найма новых редакторов",
      heroSubheadline: "Масштабируйте видео-возможности агентства в 10 раз. Выше маржа, быстрее доставка, клиенты думают что у вас полноценная продакшн-команда.",
    },
    it: {
      name: "Agenzie di Marketing",
      heroHeadline: "Consegna Video per Ogni Cliente Senza Assumere Altri Editor",
      heroSubheadline: "Scala le capacità video della tua agenzia di 10x. Margini più alti, consegna più veloce, clienti che pensano che hai un team di produzione completo.",
    },
    nl: {
      name: "Marketingbureaus",
      heroHeadline: "Lever Video voor Elke Klant Zonder Meer Editors Aan te Nemen",
      heroSubheadline: "Schaal de videocapaciteiten van je bureau met 10x. Hogere marges, snellere levering, klanten die denken dat je een volledig productieteam hebt.",
    },
    pl: {
      name: "Agencje Marketingowe",
      heroHeadline: "Dostarczaj Wideo dla Każdego Klienta Bez Zatrudniania Więcej Montażystów",
      heroSubheadline: "Skaluj możliwości wideo swojej agencji 10x. Wyższe marże, szybsza dostawa, klienci którzy myślą że masz pełny zespół produkcyjny.",
    },
    ja: {
      name: "マーケティング代理店",
      heroHeadline: "編集者を増やさずにすべてのクライアントにビデオを提供",
      heroSubheadline: "代理店の動画能力を10倍にスケール。高いマージン、迅速な納品、完全なプロダクションチームがあると思うクライアント。",
    },
    ko: {
      name: "마케팅 에이전시",
      heroHeadline: "더 많은 편집자 고용 없이 모든 클라이언트에게 비디오 제공",
      heroSubheadline: "에이전시의 비디오 역량을 10배 확장. 더 높은 마진, 더 빠른 납품, 완전한 프로덕션 팀이 있다고 생각하는 클라이언트.",
    },
    zh: {
      name: "营销代理",
      heroHeadline: "无需雇用更多编辑即可为每个客户提供视频",
      heroSubheadline: "将代理机构的视频能力扩大10倍。更高利润、更快交付、客户认为您有完整的制作团队。",
    },
  },
  freelancers: {
    es: {
      name: "Freelancers",
      heroHeadline: "Añade Video a Tus Servicios Sin Aprender a Editar",
      heroSubheadline: "Ofrece creación de video profesional a tus clientes. Sin habilidades de edición necesarias—solo la IA de Hyreel y tu creatividad.",
    },
    de: {
      name: "Freelancer",
      heroHeadline: "Füge Video zu Deinen Services Hinzu Ohne Schneiden zu Lernen",
      heroSubheadline: "Biete professionelle Videoerstellung für deine Kunden an. Keine Bearbeitungsfähigkeiten erforderlich—nur Hyreels KI und deine Kreativität.",
    },
    fr: {
      name: "Freelances",
      heroHeadline: "Ajoutez la Vidéo à Vos Services Sans Apprendre le Montage",
      heroSubheadline: "Offrez la création vidéo professionnelle à vos clients. Aucune compétence en montage requise—juste l'IA de Hyreel et votre créativité.",
    },
    pt: {
      name: "Freelancers",
      heroHeadline: "Adicione Vídeo aos Seus Serviços Sem Aprender a Editar",
      heroSubheadline: "Ofereça criação de vídeo profissional aos seus clientes. Sem habilidades de edição necessárias—apenas a IA do Hyreel e sua criatividade.",
    },
    ru: {
      name: "Фрилансеры",
      heroHeadline: "Добавьте видео к своим услугам без обучения монтажу",
      heroSubheadline: "Предлагайте профессиональное создание видео своим клиентам. Навыки монтажа не нужны—только ИИ Hyreel и ваша креативность.",
    },
    it: {
      name: "Freelancer",
      heroHeadline: "Aggiungi Video ai Tuoi Servizi Senza Imparare a Montare",
      heroSubheadline: "Offri creazione video professionale ai tuoi clienti. Nessuna competenza di editing richiesta—solo l'IA di Hyreel e la tua creatività.",
    },
    nl: {
      name: "Freelancers",
      heroHeadline: "Voeg Video Toe aan Je Diensten Zonder Bewerken te Leren",
      heroSubheadline: "Bied professionele videocreatie aan je klanten. Geen bewerkingsvaardigheden nodig—alleen Hyreels AI en jouw creativiteit.",
    },
    pl: {
      name: "Freelancerzy",
      heroHeadline: "Dodaj Wideo do Swoich Usług Bez Uczenia Się Montażu",
      heroSubheadline: "Oferuj profesjonalne tworzenie wideo swoim klientom. Umiejętności montażu nie są wymagane—tylko AI Hyreel i Twoja kreatywność.",
    },
    ja: {
      name: "フリーランサー",
      heroHeadline: "編集を学ばずにサービスにビデオを追加",
      heroSubheadline: "クライアントにプロの動画制作を提供。編集スキル不要—HyreelのAIとあなたの創造性だけ。",
    },
    ko: {
      name: "프리랜서",
      heroHeadline: "편집을 배우지 않고 서비스에 비디오 추가",
      heroSubheadline: "클라이언트에게 전문적인 비디오 제작 제공. 편집 기술 필요 없음—Hyreel AI와 당신의 창의성만 있으면 됩니다.",
    },
    zh: {
      name: "自由职业者",
      heroHeadline: "无需学习编辑即可将视频添加到您的服务中",
      heroSubheadline: "为客户提供专业的视频制作。无需编辑技能—只需Hyreel的AI和您的创意。",
    },
  },
  entrepreneurs: {
    es: {
      name: "Emprendedores",
      heroHeadline: "Comercializa Tu Startup Como Si Tuvieras un Equipo de Video",
      heroSubheadline: "Videos de marketing profesionales con presupuesto bootstrap. Lanza productos, construye tu marca, compite con competidores financiados.",
    },
    de: {
      name: "Unternehmer",
      heroHeadline: "Vermarkte Dein Startup Als Hättest Du Ein Video-Team",
      heroSubheadline: "Professionelle Marketing-Videos mit Bootstrap-Budget. Produkte launchen, Marke aufbauen, mit finanzierten Konkurrenten konkurrieren.",
    },
    fr: {
      name: "Entrepreneurs",
      heroHeadline: "Commercialisez Votre Startup Comme Si Vous Aviez une Équipe Vidéo",
      heroSubheadline: "Vidéos marketing professionnelles avec budget bootstrap. Lancez produits, construisez votre marque, rivalisez avec les concurrents financés.",
    },
    pt: {
      name: "Empreendedores",
      heroHeadline: "Comercialize Sua Startup Como Se Tivesse uma Equipe de Vídeo",
      heroSubheadline: "Vídeos de marketing profissionais com orçamento bootstrap. Lance produtos, construa sua marca, compita com concorrentes financiados.",
    },
    ru: {
      name: "Предприниматели",
      heroHeadline: "Продвигайте свой стартап как будто у вас есть видео-команда",
      heroSubheadline: "Профессиональные маркетинговые видео с бутстрап-бюджетом. Запускайте продукты, стройте бренд, конкурируйте с финансируемыми компаниями.",
    },
    it: {
      name: "Imprenditori",
      heroHeadline: "Commercializza la Tua Startup Come Se Avessi un Team Video",
      heroSubheadline: "Video marketing professionali con budget bootstrap. Lancia prodotti, costruisci il tuo brand, competi con concorrenti finanziati.",
    },
    nl: {
      name: "Ondernemers",
      heroHeadline: "Markt Je Startup Alsof Je een Videoteam Hebt",
      heroSubheadline: "Professionele marketingvideo's met bootstrap-budget. Lanceer producten, bouw je merk, concurreer met gefinancierde concurrenten.",
    },
    pl: {
      name: "Przedsiębiorcy",
      heroHeadline: "Reklamuj Swój Startup Jakbyś Miał Zespół Wideo",
      heroSubheadline: "Profesjonalne filmy marketingowe z budżetem bootstrap. Wprowadzaj produkty, buduj markę, konkuruj z finansowanymi konkurentami.",
    },
    ja: {
      name: "起業家",
      heroHeadline: "ビデオチームがいるかのようにスタートアップをマーケティング",
      heroSubheadline: "ブートストラップ予算でプロのマーケティング動画。製品を発売し、ブランドを構築し、資金調達した競合と競争。",
    },
    ko: {
      name: "기업가",
      heroHeadline: "비디오 팀이 있는 것처럼 스타트업 마케팅",
      heroSubheadline: "부트스트랩 예산으로 전문적인 마케팅 비디오. 제품 출시, 브랜드 구축, 투자받은 경쟁사와 경쟁.",
    },
    zh: {
      name: "企业家",
      heroHeadline: "像拥有视频团队一样营销您的创业公司",
      heroSubheadline: "用引导预算制作专业营销视频。发布产品、建立品牌、与有资金支持的竞争对手竞争。",
    },
  },
  "content-teams": {
    es: {
      name: "Equipos de Contenido",
      heroHeadline: "10x la Producción de Video de Tu Equipo Sin Nuevas Contrataciones",
      heroSubheadline: "Empodera a cada miembro del equipo para crear video profesional. Escala la producción de contenido sin escalar costos.",
    },
    de: {
      name: "Content-Teams",
      heroHeadline: "10x die Video-Produktion Deines Teams Ohne Neueinstellungen",
      heroSubheadline: "Befähige jedes Teammitglied professionelle Videos zu erstellen. Skaliere die Content-Produktion ohne die Kosten zu skalieren.",
    },
    fr: {
      name: "Équipes de Contenu",
      heroHeadline: "10x la Production Vidéo de Votre Équipe Sans Nouvelles Embauches",
      heroSubheadline: "Permettez à chaque membre de l'équipe de créer des vidéos professionnelles. Évoluez la production de contenu sans augmenter les coûts.",
    },
    pt: {
      name: "Equipes de Conteúdo",
      heroHeadline: "10x a Produção de Vídeo da Sua Equipe Sem Novas Contratações",
      heroSubheadline: "Capacite cada membro da equipe a criar vídeo profissional. Escale a produção de conteúdo sem escalar custos.",
    },
    ru: {
      name: "Контент-команды",
      heroHeadline: "Увеличьте видеопроизводство команды в 10 раз без новых наймов",
      heroSubheadline: "Дайте каждому члену команды возможность создавать профессиональное видео. Масштабируйте производство контента без роста затрат.",
    },
    it: {
      name: "Team di Contenuti",
      heroHeadline: "10x la Produzione Video del Tuo Team Senza Nuove Assunzioni",
      heroSubheadline: "Abilita ogni membro del team a creare video professionali. Scala la produzione di contenuti senza scalare i costi.",
    },
    nl: {
      name: "Contentteams",
      heroHeadline: "10x de Videoproductie van Je Team Zonder Nieuwe Aanwervingen",
      heroSubheadline: "Geef elk teamlid de mogelijkheid om professionele video te maken. Schaal contentproductie zonder kosten te schalen.",
    },
    pl: {
      name: "Zespoły Contentowe",
      heroHeadline: "10x Produkcji Wideo Twojego Zespołu Bez Nowych Zatrudnień",
      heroSubheadline: "Umożliw każdemu członkowi zespołu tworzenie profesjonalnych filmów. Skaluj produkcję treści bez skalowania kosztów.",
    },
    ja: {
      name: "コンテンツチーム",
      heroHeadline: "新規採用なしでチームの動画制作を10倍に",
      heroSubheadline: "すべてのチームメンバーがプロの動画を作成できるようにする。コストを増やさずにコンテンツ制作をスケール。",
    },
    ko: {
      name: "콘텐츠 팀",
      heroHeadline: "새로운 고용 없이 팀의 비디오 제작량 10배 증가",
      heroSubheadline: "모든 팀원이 전문 비디오를 만들 수 있도록 지원. 비용을 늘리지 않고 콘텐츠 생산 확대.",
    },
    zh: {
      name: "内容团队",
      heroHeadline: "无需新增人员即可将团队视频产出提高10倍",
      heroSubheadline: "让每位团队成员都能创作专业视频。在不增加成本的情况下扩大内容制作。",
    },
  },
  realtors: {
    es: {
      name: "Agentes Inmobiliarios",
      heroHeadline: "Gana Más Listados con Videos Profesionales de Propiedades",
      heroSubheadline: "Transforma tus fotos de listados en tours de propiedades cinematográficos en segundos. Destaca de todos los demás agentes en tu mercado con video en cada listado.",
    },
    de: {
      name: "Immobilienmakler",
      heroHeadline: "Gewinne Mehr Listings mit Professionellen Immobilien-Videos",
      heroSubheadline: "Verwandle deine Listing-Fotos in Sekunden in kinematische Property-Tours. Hebe dich von allen anderen Maklern in deinem Markt ab mit Video bei jedem Listing.",
    },
    fr: {
      name: "Agents Immobiliers",
      heroHeadline: "Gagnez Plus d'Annonces avec des Vidéos Professionnelles",
      heroSubheadline: "Transformez vos photos d'annonces en visites cinématographiques en secondes. Démarquez-vous des autres agents avec des vidéos pour chaque annonce.",
    },
    pt: {
      name: "Corretores de Imóveis",
      heroHeadline: "Ganhe Mais Listagens com Vídeos Profissionais de Propriedades",
      heroSubheadline: "Transforme suas fotos de listagens em tours cinematográficos em segundos. Destaque-se de todos os outros corretores com vídeo em cada listagem.",
    },
    ru: {
      name: "Риэлторы",
      heroHeadline: "Выигрывайте больше листингов с профессиональными видео недвижимости",
      heroSubheadline: "Превращайте фотографии листингов в кинематографичные туры по недвижимости за секунды. Выделяйтесь среди агентов с видео на каждом листинге.",
    },
    it: {
      name: "Agenti Immobiliari",
      heroHeadline: "Vinci Più Incarichi con Video Professionali delle Proprietà",
      heroSubheadline: "Trasforma le tue foto degli annunci in tour cinematografici in secondi. Distinguiti dagli altri agenti con video per ogni annuncio.",
    },
    nl: {
      name: "Makelaars",
      heroHeadline: "Win Meer Listings met Professionele Vastgoedvideo's",
      heroSubheadline: "Transformeer je listingfoto's in cinematografische property tours in seconden. Onderscheid je van andere makelaars met video bij elke listing.",
    },
    pl: {
      name: "Agenci Nieruchomości",
      heroHeadline: "Zdobywaj Więcej Ofert z Profesjonalnymi Filmami Nieruchomości",
      heroSubheadline: "Przekształć zdjęcia ofert w kinowe wideo-wycieczki w sekundy. Wyróżnij się spośród innych agentów z filmem przy każdej ofercie.",
    },
    ja: {
      name: "不動産エージェント",
      heroHeadline: "プロの物件動画でより多くのリスティングを獲得",
      heroSubheadline: "リスティング写真を数秒でシネマティックな物件ツアーに変換。すべてのリスティングで動画を使って市場の他のエージェントと差別化。",
    },
    ko: {
      name: "부동산 중개인",
      heroHeadline: "전문적인 부동산 비디오로 더 많은 매물 확보",
      heroSubheadline: "매물 사진을 몇 초 만에 시네마틱한 부동산 투어로 변환. 모든 매물에 비디오를 넣어 시장의 다른 중개인과 차별화.",
    },
    zh: {
      name: "房地产经纪人",
      heroHeadline: "用专业房产视频赢得更多房源",
      heroSubheadline: "秒速将房源照片转换为电影级房产之旅。通过每个房源的视频在市场上脱颖而出。",
    },
  },
  coaches: {
    es: {
      name: "Coaches y Consultores",
      heroHeadline: "Construye Tu Marca de Coaching con Video Profesional",
      heroSubheadline: "Crea contenido que te posicione como experto. Transforma tus fotos, gráficos y testimonios en videos que atraen clientes de alto valor.",
    },
    de: {
      name: "Coaches & Berater",
      heroHeadline: "Baue Deine Coaching-Marke mit Professionellem Video Auf",
      heroSubheadline: "Erstelle Inhalte die dich als Experten positionieren. Verwandle deine Fotos, Grafiken und Testimonials in Videos die hochwertige Kunden anziehen.",
    },
    fr: {
      name: "Coaches et Consultants",
      heroHeadline: "Construisez Votre Marque de Coaching avec des Vidéos Professionnelles",
      heroSubheadline: "Créez du contenu qui vous positionne comme expert. Transformez vos photos et témoignages en vidéos qui attirent des clients de grande valeur.",
    },
    pt: {
      name: "Coaches e Consultores",
      heroHeadline: "Construa Sua Marca de Coaching com Vídeo Profissional",
      heroSubheadline: "Crie conteúdo que te posiciona como especialista. Transforme suas fotos e depoimentos em vídeos que atraem clientes de alto valor.",
    },
    ru: {
      name: "Коучи и консультанты",
      heroHeadline: "Стройте свой коучинговый бренд с профессиональным видео",
      heroSubheadline: "Создавайте контент, который позиционирует вас как эксперта. Превращайте фото и отзывы в видео, привлекающие высокооплачиваемых клиентов.",
    },
    it: {
      name: "Coach e Consulenti",
      heroHeadline: "Costruisci il Tuo Brand di Coaching con Video Professionali",
      heroSubheadline: "Crea contenuti che ti posizionano come esperto. Trasforma le tue foto e testimonianze in video che attraggono clienti di alto valore.",
    },
    nl: {
      name: "Coaches & Consultants",
      heroHeadline: "Bouw Je Coaching Merk met Professionele Video",
      heroSubheadline: "Maak content die je positioneert als expert. Transformeer je foto's en testimonials in video's die high-ticket klanten aantrekken.",
    },
    pl: {
      name: "Coachowie i Konsultanci",
      heroHeadline: "Zbuduj Swoją Markę Coachingową z Profesjonalnym Wideo",
      heroSubheadline: "Twórz treści, które pozycjonują Cię jako eksperta. Przekształć swoje zdjęcia i referencje w filmy przyciągające wartościowych klientów.",
    },
    ja: {
      name: "コーチ＆コンサルタント",
      heroHeadline: "プロの動画でコーチングブランドを構築",
      heroSubheadline: "あなたを専門家として位置づけるコンテンツを作成。写真やお客様の声を高額クライアントを引き付ける動画に変換。",
    },
    ko: {
      name: "코치 및 컨설턴트",
      heroHeadline: "전문 비디오로 코칭 브랜드 구축",
      heroSubheadline: "당신을 전문가로 포지셔닝하는 콘텐츠 제작. 사진과 추천사를 고가 클라이언트를 유치하는 비디오로 변환.",
    },
    zh: {
      name: "教练和顾问",
      heroHeadline: "用专业视频打造您的教练品牌",
      heroSubheadline: "创建将您定位为专家的内容。将您的照片和推荐转换为吸引高价值客户的视频。",
    },
  },
  photographers: {
    es: {
      name: "Fotógrafos",
      heroHeadline: "Dale a Tu Fotografía una Nueva Dimensión",
      heroSubheadline: "Transforma tus mejores fotos en videos hipnotizantes. Añade una nueva fuente de ingresos, crea contenido social y entrega más valor a los clientes—todo desde tu trabajo existente.",
    },
    de: {
      name: "Fotografen",
      heroHeadline: "Gib Deiner Fotografie eine Neue Dimension",
      heroSubheadline: "Verwandle deine besten Fotos in faszinierende Videos. Füge eine neue Einnahmequelle hinzu, erstelle Social-Content und liefere mehr Wert für Kunden—alles aus deiner bestehenden Arbeit.",
    },
    fr: {
      name: "Photographes",
      heroHeadline: "Donnez une Nouvelle Dimension à Votre Photographie",
      heroSubheadline: "Transformez vos meilleures photos en vidéos envoûtantes. Ajoutez une nouvelle source de revenus, créez du contenu social et offrez plus de valeur aux clients—à partir de votre travail existant.",
    },
    pt: {
      name: "Fotógrafos",
      heroHeadline: "Dê uma Nova Dimensão à Sua Fotografia",
      heroSubheadline: "Transforme suas melhores fotos em vídeos hipnotizantes. Adicione uma nova fonte de receita, crie conteúdo social e entregue mais valor aos clientes—tudo a partir do seu trabalho existente.",
    },
    ru: {
      name: "Фотографы",
      heroHeadline: "Придайте вашей фотографии новое измерение",
      heroSubheadline: "Превратите лучшие фотографии в завораживающие видео. Добавьте новый источник дохода, создавайте контент для соцсетей и приносите больше ценности клиентам—всё из вашей существующей работы.",
    },
    it: {
      name: "Fotografi",
      heroHeadline: "Dai una Nuova Dimensione alla Tua Fotografia",
      heroSubheadline: "Trasforma le tue migliori foto in video ipnotizzanti. Aggiungi una nuova fonte di reddito, crea contenuti social e offri più valore ai clienti—tutto dal tuo lavoro esistente.",
    },
    nl: {
      name: "Fotografen",
      heroHeadline: "Geef Je Fotografie een Nieuwe Dimensie",
      heroSubheadline: "Transformeer je beste foto's in betoverende video's. Voeg een nieuwe inkomstenbron toe, maak social content en lever meer waarde aan klanten—allemaal vanuit je bestaande werk.",
    },
    pl: {
      name: "Fotografowie",
      heroHeadline: "Nadaj Swojej Fotografii Nowy Wymiar",
      heroSubheadline: "Przekształć swoje najlepsze zdjęcia w hipnotyzujące filmy. Dodaj nowe źródło przychodu, twórz treści społecznościowe i dostarczaj więcej wartości klientom—wszystko z istniejącej pracy.",
    },
    ja: {
      name: "フォトグラファー",
      heroHeadline: "写真に新しい次元を与える",
      heroSubheadline: "最高の写真を魅惑的な動画に変換。新しい収入源を追加し、ソーシャルコンテンツを作成し、クライアントにより多くの価値を提供—すべて既存の作品から。",
    },
    ko: {
      name: "사진작가",
      heroHeadline: "사진에 새로운 차원을 부여",
      heroSubheadline: "최고의 사진을 매혹적인 비디오로 변환. 새로운 수익원 추가, 소셜 콘텐츠 제작, 클라이언트에게 더 많은 가치 제공—모두 기존 작업에서.",
    },
    zh: {
      name: "摄影师",
      heroHeadline: "为您的摄影作品增添新维度",
      heroSubheadline: "将您最好的照片转换为迷人的视频。增加新的收入来源、创建社交内容、为客户提供更多价值—全部来自您现有的作品。",
    },
  },
};

export function getLocalizedAudienceContent(
  slug: string,
  locale: Locale
): AudienceTranslation | null {
  if (locale === "en") return null;
  const translations = audienceTranslations[slug];
  if (!translations) return null;
  return translations[locale] || null;
}
