import type { Locale } from "@/lib/i18n/config";

interface AlternativeTranslation {
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
}

type AlternativeTranslations = Partial<Record<Locale, AlternativeTranslation>>;

// Translations for alternative comparison pages (excluding 'en' which uses the original)
export const alternativeTranslations: Record<string, AlternativeTranslations> = {
  canva: {
    es: {
      title: "Alternativa al Generador de Video IA de Canva",
      heroHeadline: "La Mejor Alternativa al Generador de Video IA de Canva",
      heroSubheadline: "Mientras Canva es excelente para diseño, Hyreel se especializa en transformar fotos en impresionantes videos con efectos de movimiento profesionales.",
    },
    de: {
      title: "Canva KI-Videogenerator Alternative",
      heroHeadline: "Die Beste Alternative zum Canva KI-Videogenerator",
      heroSubheadline: "Canva ist großartig für Design, aber Hyreel ist spezialisiert auf die Umwandlung von Fotos in beeindruckende KI-Videos mit professionellen Bewegungseffekten.",
    },
    fr: {
      title: "Alternative au Générateur Vidéo IA de Canva",
      heroHeadline: "La Meilleure Alternative au Générateur Vidéo IA de Canva",
      heroSubheadline: "Canva est excellent pour le design, mais Hyreel se spécialise dans la transformation de photos en vidéos IA avec des effets de mouvement professionnels.",
    },
    pt: {
      title: "Alternativa ao Gerador de Vídeo IA do Canva",
      heroHeadline: "A Melhor Alternativa ao Gerador de Vídeo IA do Canva",
      heroSubheadline: "O Canva é ótimo para design, mas o Hyreel é especializado em transformar fotos em vídeos impressionantes com efeitos de movimento profissionais.",
    },
    ru: {
      title: "Альтернатива AI видеогенератору Canva",
      heroHeadline: "Лучшая альтернатива AI видеогенератору Canva",
      heroSubheadline: "Canva отлично подходит для дизайна, но Hyreel специализируется на превращении фотографий в потрясающие AI-видео с профессиональными эффектами движения.",
    },
    it: {
      title: "Alternativa al Generatore Video IA di Canva",
      heroHeadline: "La Migliore Alternativa al Generatore Video IA di Canva",
      heroSubheadline: "Canva è ottimo per il design, ma Hyreel è specializzato nella trasformazione di foto in video IA con effetti di movimento professionali.",
    },
    nl: {
      title: "Canva AI Video Generator Alternatief",
      heroHeadline: "Het Beste Alternatief voor Canva AI Video Generator",
      heroSubheadline: "Canva is geweldig voor design, maar Hyreel is gespecialiseerd in het omzetten van foto's naar video's met professionele bewegingseffecten.",
    },
    pl: {
      title: "Alternatywa dla Generatora Wideo AI Canva",
      heroHeadline: "Najlepsza Alternatywa dla Generatora Wideo AI Canva",
      heroSubheadline: "Canva jest świetna do projektowania, ale Hyreel specjalizuje się w przekształcaniu zdjęć w oszałamiające filmy AI z profesjonalnymi efektami ruchu.",
    },
    ja: {
      title: "Canva AI動画ジェネレーターの代替",
      heroHeadline: "Canva AI動画ジェネレーターの最良の代替",
      heroSubheadline: "Canvaはデザインに優れていますが、Hyreelは写真をプロフェッショナルなモーションエフェクトを持つ素晴らしいAI動画に変換することに特化しています。",
    },
    ko: {
      title: "Canva AI 비디오 생성기 대안",
      heroHeadline: "Canva AI 비디오 생성기의 최고의 대안",
      heroSubheadline: "Canva는 디자인에 훌륭하지만, Hyreel은 사진을 전문적인 모션 효과가 있는 멋진 AI 비디오로 변환하는 데 특화되어 있습니다.",
    },
    zh: {
      title: "Canva AI视频生成器替代方案",
      heroHeadline: "Canva AI视频生成器的最佳替代方案",
      heroSubheadline: "Canva在设计方面很出色，但Hyreel专门将照片转换为具有专业动态效果的精彩AI视频。",
    },
  },
  synthesia: {
    es: {
      title: "Alternativa a Synthesia",
      heroHeadline: "La Mejor Alternativa a Synthesia para Videos Creativos",
      heroSubheadline: "Synthesia crea videos con avatares IA. Hyreel transforma tus fotos reales en videos dinámicos con movimiento cinematográfico.",
    },
    de: {
      title: "Synthesia Alternative",
      heroHeadline: "Die Beste Synthesia Alternative für Kreative Videos",
      heroSubheadline: "Synthesia erstellt KI-Avatar-Videos. Hyreel verwandelt Ihre echten Fotos in dynamische Videos mit kinematischer Bewegung.",
    },
    fr: {
      title: "Alternative à Synthesia",
      heroHeadline: "La Meilleure Alternative à Synthesia pour Vidéos Créatives",
      heroSubheadline: "Synthesia crée des vidéos avec avatars IA. Hyreel transforme vos vraies photos en vidéos dynamiques avec mouvement cinématographique.",
    },
    pt: {
      title: "Alternativa ao Synthesia",
      heroHeadline: "A Melhor Alternativa ao Synthesia para Vídeos Criativos",
      heroSubheadline: "Synthesia cria vídeos com avatares IA. Hyreel transforma suas fotos reais em vídeos dinâmicos com movimento cinematográfico.",
    },
    ru: {
      title: "Альтернатива Synthesia",
      heroHeadline: "Лучшая альтернатива Synthesia для креативных видео",
      heroSubheadline: "Synthesia создаёт видео с AI-аватарами. Hyreel превращает ваши реальные фотографии в динамичные видео с кинематографическим движением.",
    },
    it: {
      title: "Alternativa a Synthesia",
      heroHeadline: "La Migliore Alternativa a Synthesia per Video Creativi",
      heroSubheadline: "Synthesia crea video con avatar IA. Hyreel trasforma le tue foto reali in video dinamici con movimento cinematografico.",
    },
    nl: {
      title: "Synthesia Alternatief",
      heroHeadline: "Het Beste Alternatief voor Synthesia voor Creatieve Video's",
      heroSubheadline: "Synthesia maakt AI-avatar video's. Hyreel transformeert je echte foto's in dynamische video's met cinematografische beweging.",
    },
    pl: {
      title: "Alternatywa dla Synthesia",
      heroHeadline: "Najlepsza Alternatywa dla Synthesia do Kreatywnych Filmów",
      heroSubheadline: "Synthesia tworzy filmy z awatarami AI. Hyreel przekształca Twoje prawdziwe zdjęcia w dynamiczne filmy z kinowym ruchem.",
    },
    ja: {
      title: "Synthesia代替",
      heroHeadline: "クリエイティブ動画のためのSynthesia最良代替",
      heroSubheadline: "SynthesiaはAIアバター動画を作成します。Hyreelはあなたの実際の写真をシネマティックな動きのあるダイナミックな動画に変換します。",
    },
    ko: {
      title: "Synthesia 대안",
      heroHeadline: "크리에이티브 비디오를 위한 Synthesia 최고의 대안",
      heroSubheadline: "Synthesia는 AI 아바타 비디오를 만듭니다. Hyreel은 실제 사진을 시네마틱한 움직임이 있는 역동적인 비디오로 변환합니다.",
    },
    zh: {
      title: "Synthesia替代方案",
      heroHeadline: "创意视频的最佳Synthesia替代方案",
      heroSubheadline: "Synthesia创建AI头像视频。Hyreel将您的真实照片转换为具有电影般动感的动态视频。",
    },
  },
  runway: {
    es: {
      title: "Alternativa a Runway",
      heroHeadline: "Una Alternativa Más Simple y Rápida a Runway",
      heroSubheadline: "Runway es potente pero complejo. Hyreel ofrece resultados profesionales de video IA desde fotos al instante—sin curva de aprendizaje.",
    },
    de: {
      title: "Runway Alternative",
      heroHeadline: "Eine Einfachere, Schnellere Alternative zu Runway",
      heroSubheadline: "Runway ist leistungsstark aber komplex. Hyreel liefert sofort professionelle KI-Videoergebnisse aus Fotos—ohne Lernkurve.",
    },
    fr: {
      title: "Alternative à Runway",
      heroHeadline: "Une Alternative Plus Simple et Plus Rapide à Runway",
      heroSubheadline: "Runway est puissant mais complexe. Hyreel offre des résultats vidéo IA professionnels instantanément—sans courbe d'apprentissage.",
    },
    pt: {
      title: "Alternativa ao Runway",
      heroHeadline: "Uma Alternativa Mais Simples e Rápida ao Runway",
      heroSubheadline: "Runway é poderoso mas complexo. Hyreel oferece resultados profissionais de vídeo IA instantaneamente—sem curva de aprendizado.",
    },
    ru: {
      title: "Альтернатива Runway",
      heroHeadline: "Более простая и быстрая альтернатива Runway",
      heroSubheadline: "Runway мощный, но сложный. Hyreel мгновенно создаёт профессиональные AI-видео из фотографий—без кривой обучения.",
    },
    it: {
      title: "Alternativa a Runway",
      heroHeadline: "Un'Alternativa Più Semplice e Veloce a Runway",
      heroSubheadline: "Runway è potente ma complesso. Hyreel offre risultati video IA professionali istantaneamente—senza curva di apprendimento.",
    },
    nl: {
      title: "Runway Alternatief",
      heroHeadline: "Een Eenvoudiger, Sneller Alternatief voor Runway",
      heroSubheadline: "Runway is krachtig maar complex. Hyreel levert direct professionele AI-videoresultaten uit foto's—zonder leercurve.",
    },
    pl: {
      title: "Alternatywa dla Runway",
      heroHeadline: "Prostsza, Szybsza Alternatywa dla Runway",
      heroSubheadline: "Runway jest potężny, ale skomplikowany. Hyreel natychmiast dostarcza profesjonalne wyniki wideo AI ze zdjęć—bez krzywej uczenia się.",
    },
    ja: {
      title: "Runway代替",
      heroHeadline: "よりシンプルで高速なRunway代替",
      heroSubheadline: "Runwayは強力ですが複雑です。Hyreelは学習曲線なしで、写真から即座にプロフェッショナルなAI動画結果を提供します。",
    },
    ko: {
      title: "Runway 대안",
      heroHeadline: "Runway보다 더 간단하고 빠른 대안",
      heroSubheadline: "Runway는 강력하지만 복잡합니다. Hyreel은 학습 곡선 없이 사진에서 전문적인 AI 비디오 결과를 즉시 제공합니다.",
    },
    zh: {
      title: "Runway替代方案",
      heroHeadline: "比Runway更简单、更快的替代方案",
      heroSubheadline: "Runway功能强大但复杂。Hyreel无需学习曲线，即可从照片即时提供专业的AI视频效果。",
    },
  },
  capcut: {
    es: {
      title: "Alternativa a CapCut",
      heroHeadline: "Alternativa a CapCut para Generación de Video IA",
      heroSubheadline: "CapCut es un editor de video. Hyreel es un generador de video IA. Transforma fotos en videos dinámicos con efectos de movimiento que CapCut no puede crear.",
    },
    de: {
      title: "CapCut Alternative",
      heroHeadline: "CapCut Alternative für KI-Videogenerierung",
      heroSubheadline: "CapCut ist ein Videoeditor. Hyreel ist ein KI-Videogenerator. Verwandeln Sie Fotos in dynamische Videos mit Bewegungseffekten, die CapCut nicht erstellen kann.",
    },
    fr: {
      title: "Alternative à CapCut",
      heroHeadline: "Alternative à CapCut pour la Génération Vidéo IA",
      heroSubheadline: "CapCut est un éditeur vidéo. Hyreel est un générateur vidéo IA. Transformez photos en vidéos dynamiques avec des effets de mouvement que CapCut ne peut pas créer.",
    },
    pt: {
      title: "Alternativa ao CapCut",
      heroHeadline: "Alternativa ao CapCut para Geração de Vídeo IA",
      heroSubheadline: "CapCut é um editor de vídeo. Hyreel é um gerador de vídeo IA. Transforme fotos em vídeos dinâmicos com efeitos de movimento que o CapCut não pode criar.",
    },
    ru: {
      title: "Альтернатива CapCut",
      heroHeadline: "Альтернатива CapCut для генерации AI-видео",
      heroSubheadline: "CapCut — это видеоредактор. Hyreel — это AI-генератор видео. Превратите фотографии в динамичные видео с эффектами движения, которые CapCut создать не может.",
    },
    it: {
      title: "Alternativa a CapCut",
      heroHeadline: "Alternativa a CapCut per la Generazione Video IA",
      heroSubheadline: "CapCut è un editor video. Hyreel è un generatore video IA. Trasforma foto in video dinamici con effetti di movimento che CapCut non può creare.",
    },
    nl: {
      title: "CapCut Alternatief",
      heroHeadline: "CapCut Alternatief voor AI-Videogeneratie",
      heroSubheadline: "CapCut is een video-editor. Hyreel is een AI-videogenerator. Transformeer foto's naar dynamische video's met bewegingseffecten die CapCut niet kan maken.",
    },
    pl: {
      title: "Alternatywa dla CapCut",
      heroHeadline: "Alternatywa dla CapCut do Generowania Wideo AI",
      heroSubheadline: "CapCut to edytor wideo. Hyreel to generator wideo AI. Przekształć zdjęcia w dynamiczne filmy z efektami ruchu, których CapCut nie może stworzyć.",
    },
    ja: {
      title: "CapCut代替",
      heroHeadline: "AI動画生成のためのCapCut代替",
      heroSubheadline: "CapCutは動画エディターです。HyreelはAI動画ジェネレーターです。写真をCapCutでは作成できないモーションエフェクトのある動画に変換します。",
    },
    ko: {
      title: "CapCut 대안",
      heroHeadline: "AI 비디오 생성을 위한 CapCut 대안",
      heroSubheadline: "CapCut은 비디오 편집기입니다. Hyreel은 AI 비디오 생성기입니다. CapCut이 만들 수 없는 모션 효과가 있는 동적 비디오로 사진을 변환합니다.",
    },
    zh: {
      title: "CapCut替代方案",
      heroHeadline: "AI视频生成的CapCut替代方案",
      heroSubheadline: "CapCut是视频编辑器。Hyreel是AI视频生成器。将照片转换为具有CapCut无法创建的动态效果的视频。",
    },
  },
  "luma-ai": {
    es: {
      title: "Alternativa a Luma AI",
      heroHeadline: "Una Alternativa Más Rápida y Simple a Luma AI",
      heroSubheadline: "Luma AI se enfoca en captura 3D y IA avanzada. Hyreel ofrece conversión instantánea de foto a video con efectos de movimiento impresionantes.",
    },
    de: {
      title: "Luma AI Alternative",
      heroHeadline: "Eine Schnellere, Einfachere Luma AI Alternative",
      heroSubheadline: "Luma AI konzentriert sich auf 3D-Erfassung und fortgeschrittene KI. Hyreel bietet sofortige Foto-zu-Video-Konvertierung mit atemberaubenden Bewegungseffekten.",
    },
    fr: {
      title: "Alternative à Luma AI",
      heroHeadline: "Une Alternative Plus Rapide et Plus Simple à Luma AI",
      heroSubheadline: "Luma AI se concentre sur la capture 3D et l'IA avancée. Hyreel offre une conversion photo-vidéo instantanée avec des effets de mouvement époustouflants.",
    },
    pt: {
      title: "Alternativa ao Luma AI",
      heroHeadline: "Uma Alternativa Mais Rápida e Simples ao Luma AI",
      heroSubheadline: "Luma AI foca em captura 3D e IA avançada. Hyreel oferece conversão instantânea de foto para vídeo com efeitos de movimento impressionantes.",
    },
    ru: {
      title: "Альтернатива Luma AI",
      heroHeadline: "Более быстрая и простая альтернатива Luma AI",
      heroSubheadline: "Luma AI фокусируется на 3D-захвате и продвинутом ИИ. Hyreel предлагает мгновенное преобразование фото в видео с потрясающими эффектами движения.",
    },
    it: {
      title: "Alternativa a Luma AI",
      heroHeadline: "Un'Alternativa Più Veloce e Semplice a Luma AI",
      heroSubheadline: "Luma AI si concentra sulla cattura 3D e IA avanzata. Hyreel offre conversione foto-video istantanea con effetti di movimento mozzafiato.",
    },
    nl: {
      title: "Luma AI Alternatief",
      heroHeadline: "Een Sneller, Eenvoudiger Alternatief voor Luma AI",
      heroSubheadline: "Luma AI focust op 3D-capture en geavanceerde AI. Hyreel biedt directe foto-naar-video conversie met verbluffende bewegingseffecten.",
    },
    pl: {
      title: "Alternatywa dla Luma AI",
      heroHeadline: "Szybsza, Prostsza Alternatywa dla Luma AI",
      heroSubheadline: "Luma AI koncentruje się na przechwytywaniu 3D i zaawansowanym AI. Hyreel oferuje natychmiastową konwersję zdjęcia na wideo z oszałamiającymi efektami ruchu.",
    },
    ja: {
      title: "Luma AI代替",
      heroHeadline: "より高速でシンプルなLuma AI代替",
      heroSubheadline: "Luma AIは3DキャプチャとアドバンスドAIに焦点を当てています。Hyreelは素晴らしいモーションエフェクトで即座に写真から動画への変換を提供します。",
    },
    ko: {
      title: "Luma AI 대안",
      heroHeadline: "더 빠르고 간단한 Luma AI 대안",
      heroSubheadline: "Luma AI는 3D 캡처와 고급 AI에 초점을 맞춥니다. Hyreel은 놀라운 모션 효과로 사진에서 비디오로 즉시 변환을 제공합니다.",
    },
    zh: {
      title: "Luma AI替代方案",
      heroHeadline: "更快、更简单的Luma AI替代方案",
      heroSubheadline: "Luma AI专注于3D捕捉和高级AI。Hyreel提供即时的照片到视频转换，具有令人惊叹的动态效果。",
    },
  },
  "pika-ai": {
    es: {
      title: "Alternativa a Pika AI",
      heroHeadline: "La Mejor Alternativa a Pika para Foto a Video",
      heroSubheadline: "Pika genera video desde texto e imágenes, pero Hyreel está diseñado específicamente para convertir tus fotos en videos que detienen el scroll.",
    },
    de: {
      title: "Pika AI Alternative",
      heroHeadline: "Die Beste Pika Alternative für Foto-zu-Video",
      heroSubheadline: "Pika generiert Videos aus Text und Bildern, aber Hyreel ist speziell dafür gebaut, Ihre Fotos in scroll-stoppende Videos zu verwandeln.",
    },
    fr: {
      title: "Alternative à Pika AI",
      heroHeadline: "La Meilleure Alternative à Pika pour Photo-Vidéo",
      heroSubheadline: "Pika génère des vidéos à partir de texte et d'images, mais Hyreel est conçu pour transformer vos photos en vidéos captivantes.",
    },
    pt: {
      title: "Alternativa ao Pika AI",
      heroHeadline: "A Melhor Alternativa ao Pika para Foto para Vídeo",
      heroSubheadline: "Pika gera vídeo a partir de texto e imagens, mas Hyreel é construído especificamente para transformar suas fotos em vídeos que param o scroll.",
    },
    ru: {
      title: "Альтернатива Pika AI",
      heroHeadline: "Лучшая альтернатива Pika для фото-в-видео",
      heroSubheadline: "Pika генерирует видео из текста и изображений, но Hyreel специально создан для превращения ваших фотографий в останавливающие скролл видео.",
    },
    it: {
      title: "Alternativa a Pika AI",
      heroHeadline: "La Migliore Alternativa a Pika per Foto-Video",
      heroSubheadline: "Pika genera video da testo e immagini, ma Hyreel è costruito specificamente per trasformare le tue foto in video che fermano lo scroll.",
    },
    nl: {
      title: "Pika AI Alternatief",
      heroHeadline: "Het Beste Pika Alternatief voor Foto-naar-Video",
      heroSubheadline: "Pika genereert video uit tekst en afbeeldingen, maar Hyreel is specifiek gebouwd om je foto's om te zetten in scroll-stoppende video's.",
    },
    pl: {
      title: "Alternatywa dla Pika AI",
      heroHeadline: "Najlepsza Alternatywa dla Pika do Zdjęcie-Wideo",
      heroSubheadline: "Pika generuje wideo z tekstu i obrazów, ale Hyreel jest specjalnie stworzony do przekształcania zdjęć w filmy zatrzymujące scrollowanie.",
    },
    ja: {
      title: "Pika AI代替",
      heroHeadline: "写真から動画のための最高のPika代替",
      heroSubheadline: "Pikaはテキストと画像から動画を生成しますが、Hyreelは特にあなたの写真をスクロールを止める動画に変換するために作られています。",
    },
    ko: {
      title: "Pika AI 대안",
      heroHeadline: "사진-비디오를 위한 최고의 Pika 대안",
      heroSubheadline: "Pika는 텍스트와 이미지에서 비디오를 생성하지만, Hyreel은 사진을 스크롤을 멈추게 하는 비디오로 변환하도록 특별히 제작되었습니다.",
    },
    zh: {
      title: "Pika AI替代方案",
      heroHeadline: "照片转视频的最佳Pika替代方案",
      heroSubheadline: "Pika从文本和图像生成视频，但Hyreel专门用于将您的照片转换为令人驻足的视频。",
    },
  },
  heygen: {
    es: {
      title: "Alternativa a HeyGen",
      heroHeadline: "Alternativa a HeyGen: Fotos Reales, Movimiento Real",
      heroSubheadline: "HeyGen crea videos con avatares IA. Hyreel transforma tus fotos reales en videos dinámicos con efectos cinematográficos. Contenido auténtico, no presentadores sintéticos.",
    },
    de: {
      title: "HeyGen Alternative",
      heroHeadline: "HeyGen Alternative: Echte Fotos, Echte Bewegung",
      heroSubheadline: "HeyGen erstellt KI-Avatar-Videos. Hyreel verwandelt Ihre echten Fotos in dynamische Videos mit kinematischen Effekten. Authentischer Inhalt, keine synthetischen Moderatoren.",
    },
    fr: {
      title: "Alternative à HeyGen",
      heroHeadline: "Alternative HeyGen: Vraies Photos, Vrai Mouvement",
      heroSubheadline: "HeyGen crée des vidéos avec avatars IA. Hyreel transforme vos vraies photos en vidéos dynamiques avec effets cinématographiques. Contenu authentique, pas de présentateurs synthétiques.",
    },
    pt: {
      title: "Alternativa ao HeyGen",
      heroHeadline: "Alternativa HeyGen: Fotos Reais, Movimento Real",
      heroSubheadline: "HeyGen cria vídeos com avatares IA. Hyreel transforma suas fotos reais em vídeos dinâmicos com efeitos cinematográficos. Conteúdo autêntico, não apresentadores sintéticos.",
    },
    ru: {
      title: "Альтернатива HeyGen",
      heroHeadline: "Альтернатива HeyGen: Реальные фото, реальное движение",
      heroSubheadline: "HeyGen создаёт видео с AI-аватарами. Hyreel превращает ваши реальные фотографии в динамичные видео с кинематографическими эффектами. Аутентичный контент, а не синтетические ведущие.",
    },
    it: {
      title: "Alternativa a HeyGen",
      heroHeadline: "Alternativa HeyGen: Foto Reali, Movimento Reale",
      heroSubheadline: "HeyGen crea video con avatar IA. Hyreel trasforma le tue foto reali in video dinamici con effetti cinematografici. Contenuto autentico, non presentatori sintetici.",
    },
    nl: {
      title: "HeyGen Alternatief",
      heroHeadline: "HeyGen Alternatief: Echte Foto's, Echte Beweging",
      heroSubheadline: "HeyGen maakt AI-avatar video's. Hyreel transformeert je echte foto's in dynamische video's met cinematografische effecten. Authentieke content, geen synthetische presentatoren.",
    },
    pl: {
      title: "Alternatywa dla HeyGen",
      heroHeadline: "Alternatywa HeyGen: Prawdziwe Zdjęcia, Prawdziwy Ruch",
      heroSubheadline: "HeyGen tworzy filmy z awatarami AI. Hyreel przekształca Twoje prawdziwe zdjęcia w dynamiczne filmy z efektami kinowymi. Autentyczna treść, nie syntetyczni prezenterzy.",
    },
    ja: {
      title: "HeyGen代替",
      heroHeadline: "HeyGen代替：本物の写真、本物の動き",
      heroSubheadline: "HeyGenはAIアバター動画を作成します。Hyreelはあなたの実際の写真をシネマティックなエフェクトのある動的な動画に変換します。本物のコンテンツ、合成プレゼンターではありません。",
    },
    ko: {
      title: "HeyGen 대안",
      heroHeadline: "HeyGen 대안: 진짜 사진, 진짜 움직임",
      heroSubheadline: "HeyGen은 AI 아바타 비디오를 만듭니다. Hyreel은 실제 사진을 시네마틱 효과가 있는 동적 비디오로 변환합니다. 합성 발표자가 아닌 진정한 콘텐츠입니다.",
    },
    zh: {
      title: "HeyGen替代方案",
      heroHeadline: "HeyGen替代方案：真实照片，真实动感",
      heroSubheadline: "HeyGen创建AI头像视频。Hyreel将您的真实照片转换为具有电影效果的动态视频。真实内容，而非合成主持人。",
    },
  },
  "invideo-ai": {
    es: {
      title: "Alternativa a InVideo AI",
      heroHeadline: "La Mejor Alternativa a InVideo AI para Foto a Video",
      heroSubheadline: "InVideo AI construye videos desde plantillas y clips de stock. Hyreel crea videos únicos de movimiento desde tus propias fotos—sin plantillas, sin material de stock genérico.",
    },
    de: {
      title: "InVideo AI Alternative",
      heroHeadline: "Die Beste InVideo AI Alternative für Foto-zu-Video",
      heroSubheadline: "InVideo AI erstellt Videos aus Vorlagen und Stock-Clips. Hyreel erstellt einzigartige Bewegungsvideos aus Ihren eigenen Fotos—keine Vorlagen, kein generisches Stock-Material.",
    },
    fr: {
      title: "Alternative à InVideo AI",
      heroHeadline: "La Meilleure Alternative à InVideo AI pour Photo-Vidéo",
      heroSubheadline: "InVideo AI construit des vidéos à partir de modèles et clips stock. Hyreel crée des vidéos de mouvement uniques à partir de vos propres photos—sans modèles, sans stock générique.",
    },
    pt: {
      title: "Alternativa ao InVideo AI",
      heroHeadline: "A Melhor Alternativa ao InVideo AI para Foto para Vídeo",
      heroSubheadline: "InVideo AI constrói vídeos a partir de templates e clips de stock. Hyreel cria vídeos de movimento únicos a partir de suas próprias fotos—sem templates, sem material de stock genérico.",
    },
    ru: {
      title: "Альтернатива InVideo AI",
      heroHeadline: "Лучшая альтернатива InVideo AI для фото-в-видео",
      heroSubheadline: "InVideo AI создаёт видео из шаблонов и стоковых клипов. Hyreel создаёт уникальные видео с движением из ваших собственных фотографий—без шаблонов, без генерического стока.",
    },
    it: {
      title: "Alternativa a InVideo AI",
      heroHeadline: "La Migliore Alternativa a InVideo AI per Foto-Video",
      heroSubheadline: "InVideo AI costruisce video da template e clip stock. Hyreel crea video di movimento unici dalle tue foto—senza template, senza materiale stock generico.",
    },
    nl: {
      title: "InVideo AI Alternatief",
      heroHeadline: "Het Beste InVideo AI Alternatief voor Foto-naar-Video",
      heroSubheadline: "InVideo AI bouwt video's uit templates en stockclips. Hyreel creëert unieke bewegingsvideo's uit je eigen foto's—geen templates, geen generieke stockbeelden.",
    },
    pl: {
      title: "Alternatywa dla InVideo AI",
      heroHeadline: "Najlepsza Alternatywa dla InVideo AI do Zdjęcie-Wideo",
      heroSubheadline: "InVideo AI tworzy filmy z szablonów i klipów stockowych. Hyreel tworzy unikalne filmy z ruchem z Twoich własnych zdjęć—bez szablonów, bez generycznych materiałów stockowych.",
    },
    ja: {
      title: "InVideo AI代替",
      heroHeadline: "写真から動画のための最高のInVideo AI代替",
      heroSubheadline: "InVideo AIはテンプレートとストッククリップから動画を作成します。Hyreelはあなた自身の写真からユニークなモーション動画を作成します—テンプレートなし、汎用ストック素材なし。",
    },
    ko: {
      title: "InVideo AI 대안",
      heroHeadline: "사진-비디오를 위한 최고의 InVideo AI 대안",
      heroSubheadline: "InVideo AI는 템플릿과 스톡 클립으로 비디오를 만듭니다. Hyreel은 자신의 사진에서 고유한 모션 비디오를 만듭니다—템플릿 없이, 일반 스톡 영상 없이.",
    },
    zh: {
      title: "InVideo AI替代方案",
      heroHeadline: "照片转视频的最佳InVideo AI替代方案",
      heroSubheadline: "InVideo AI从模板和素材片段构建视频。Hyreel从您自己的照片创建独特的动态视频—无模板，无通用素材。",
    },
  },
  pictory: {
    es: {
      title: "Alternativa a Pictory",
      heroHeadline: "La Mejor Alternativa a Pictory para Contenido Visual",
      heroSubheadline: "Pictory convierte artículos y guiones en video. Hyreel transforma tus fotos en videos cinematográficos con efectos de movimiento. El contenido visual merece una herramienta visual.",
    },
    de: {
      title: "Pictory Alternative",
      heroHeadline: "Die Beste Pictory Alternative für Visuellen Content",
      heroSubheadline: "Pictory konvertiert Artikel und Skripte zu Video. Hyreel verwandelt Ihre Fotos in kinematische Videos mit Bewegungseffekten. Visueller Content verdient ein visuelles Tool.",
    },
    fr: {
      title: "Alternative à Pictory",
      heroHeadline: "La Meilleure Alternative à Pictory pour Contenu Visuel",
      heroSubheadline: "Pictory convertit articles et scripts en vidéo. Hyreel transforme vos photos en vidéos cinématographiques avec effets de mouvement. Le contenu visuel mérite un outil visuel.",
    },
    pt: {
      title: "Alternativa ao Pictory",
      heroHeadline: "A Melhor Alternativa ao Pictory para Conteúdo Visual",
      heroSubheadline: "Pictory converte artigos e scripts em vídeo. Hyreel transforma suas fotos em vídeos cinematográficos com efeitos de movimento. Conteúdo visual merece uma ferramenta visual.",
    },
    ru: {
      title: "Альтернатива Pictory",
      heroHeadline: "Лучшая альтернатива Pictory для визуального контента",
      heroSubheadline: "Pictory конвертирует статьи и скрипты в видео. Hyreel превращает ваши фотографии в кинематографичные видео с эффектами движения. Визуальный контент заслуживает визуального инструмента.",
    },
    it: {
      title: "Alternativa a Pictory",
      heroHeadline: "La Migliore Alternativa a Pictory per Contenuti Visivi",
      heroSubheadline: "Pictory converte articoli e script in video. Hyreel trasforma le tue foto in video cinematografici con effetti di movimento. I contenuti visivi meritano uno strumento visivo.",
    },
    nl: {
      title: "Pictory Alternatief",
      heroHeadline: "Het Beste Pictory Alternatief voor Visuele Content",
      heroSubheadline: "Pictory converteert artikelen en scripts naar video. Hyreel transformeert je foto's in cinematografische video's met bewegingseffecten. Visuele content verdient een visueel gereedschap.",
    },
    pl: {
      title: "Alternatywa dla Pictory",
      heroHeadline: "Najlepsza Alternatywa dla Pictory do Treści Wizualnych",
      heroSubheadline: "Pictory konwertuje artykuły i skrypty na wideo. Hyreel przekształca Twoje zdjęcia w kinowe filmy z efektami ruchu. Treści wizualne zasługują na narzędzie wizualne.",
    },
    ja: {
      title: "Pictory代替",
      heroHeadline: "ビジュアルコンテンツのための最高のPictory代替",
      heroSubheadline: "Pictoryは記事やスクリプトを動画に変換します。Hyreelはあなたの写真をモーションエフェクトのあるシネマティックな動画に変換します。ビジュアルコンテンツにはビジュアルツールが相応しい。",
    },
    ko: {
      title: "Pictory 대안",
      heroHeadline: "비주얼 콘텐츠를 위한 최고의 Pictory 대안",
      heroSubheadline: "Pictory는 기사와 스크립트를 비디오로 변환합니다. Hyreel은 사진을 모션 효과가 있는 시네마틱 비디오로 변환합니다. 비주얼 콘텐츠는 비주얼 도구가 필요합니다.",
    },
    zh: {
      title: "Pictory替代方案",
      heroHeadline: "视觉内容的最佳Pictory替代方案",
      heroSubheadline: "Pictory将文章和脚本转换为视频。Hyreel将您的照片转换为具有动态效果的电影级视频。视觉内容值得使用视觉工具。",
    },
  },
  fliki: {
    es: {
      title: "Alternativa a Fliki",
      heroHeadline: "La Mejor Alternativa a Fliki para Foto a Video",
      heroSubheadline: "Fliki convierte texto en video con voces IA. Hyreel convierte tus fotos en videos impresionantes con movimiento cinematográfico. Entrada diferente, mejor resultado visual.",
    },
    de: {
      title: "Fliki Alternative",
      heroHeadline: "Die Beste Fliki Alternative für Foto-zu-Video",
      heroSubheadline: "Fliki wandelt Text mit KI-Stimmen in Video um. Hyreel verwandelt Ihre Fotos in atemberaubende Videos mit kinematischer Bewegung. Andere Eingabe, besseres visuelles Ergebnis.",
    },
    fr: {
      title: "Alternative à Fliki",
      heroHeadline: "La Meilleure Alternative à Fliki pour Photo-Vidéo",
      heroSubheadline: "Fliki convertit le texte en vidéo avec voix IA. Hyreel transforme vos photos en vidéos époustouflantes avec mouvement cinématographique. Entrée différente, meilleur résultat visuel.",
    },
    pt: {
      title: "Alternativa ao Fliki",
      heroHeadline: "A Melhor Alternativa ao Fliki para Foto para Vídeo",
      heroSubheadline: "Fliki converte texto em vídeo com vozes IA. Hyreel transforma suas fotos em vídeos impressionantes com movimento cinematográfico. Entrada diferente, melhor resultado visual.",
    },
    ru: {
      title: "Альтернатива Fliki",
      heroHeadline: "Лучшая альтернатива Fliki для фото-в-видео",
      heroSubheadline: "Fliki конвертирует текст в видео с AI-голосами. Hyreel превращает ваши фотографии в потрясающие видео с кинематографическим движением. Другой ввод, лучший визуальный результат.",
    },
    it: {
      title: "Alternativa a Fliki",
      heroHeadline: "La Migliore Alternativa a Fliki per Foto-Video",
      heroSubheadline: "Fliki converte testo in video con voci IA. Hyreel trasforma le tue foto in video mozzafiato con movimento cinematografico. Input diverso, risultato visivo migliore.",
    },
    nl: {
      title: "Fliki Alternatief",
      heroHeadline: "Het Beste Fliki Alternatief voor Foto-naar-Video",
      heroSubheadline: "Fliki converteert tekst naar video met AI-stemmen. Hyreel transformeert je foto's in verbluffende video's met cinematografische beweging. Andere input, beter visueel resultaat.",
    },
    pl: {
      title: "Alternatywa dla Fliki",
      heroHeadline: "Najlepsza Alternatywa dla Fliki do Zdjęcie-Wideo",
      heroSubheadline: "Fliki konwertuje tekst na wideo z głosami AI. Hyreel przekształca Twoje zdjęcia w oszałamiające filmy z kinowym ruchem. Inne wejście, lepszy wynik wizualny.",
    },
    ja: {
      title: "Fliki代替",
      heroHeadline: "写真から動画のための最高のFliki代替",
      heroSubheadline: "FlikiはAI音声でテキストを動画に変換します。Hyreelはあなたの写真をシネマティックな動きのある素晴らしい動画に変換します。異なる入力、より良い視覚的結果。",
    },
    ko: {
      title: "Fliki 대안",
      heroHeadline: "사진-비디오를 위한 최고의 Fliki 대안",
      heroSubheadline: "Fliki는 AI 음성으로 텍스트를 비디오로 변환합니다. Hyreel은 사진을 시네마틱한 움직임이 있는 멋진 비디오로 변환합니다. 다른 입력, 더 나은 시각적 결과.",
    },
    zh: {
      title: "Fliki替代方案",
      heroHeadline: "照片转视频的最佳Fliki替代方案",
      heroSubheadline: "Fliki用AI语音将文本转换为视频。Hyreel将您的照片转换为具有电影般动感的精彩视频。不同输入，更好的视觉效果。",
    },
  },
  sora: {
    es: {
      title: "Alternativa a OpenAI Sora",
      heroHeadline: "La Mejor Alternativa a OpenAI Sora Disponible Ahora",
      heroSubheadline: "Mientras Sora crea videos IA impresionantes, tiene acceso limitado y es costoso. Hyreel ofrece generación instantánea de video IA desde fotos—disponible hoy.",
    },
    de: {
      title: "OpenAI Sora Alternative",
      heroHeadline: "Die Beste OpenAI Sora Alternative - Jetzt Verfügbar",
      heroSubheadline: "Sora erstellt beeindruckende KI-Videos, hat aber begrenzten Zugang und ist teuer. Hyreel bietet sofortige KI-Videogenerierung aus Fotos—heute verfügbar.",
    },
    fr: {
      title: "Alternative à OpenAI Sora",
      heroHeadline: "La Meilleure Alternative à OpenAI Sora Disponible Maintenant",
      heroSubheadline: "Sora crée des vidéos IA impressionnantes mais a un accès limité et est cher. Hyreel offre une génération vidéo IA instantanée depuis vos photos—disponible aujourd'hui.",
    },
    pt: {
      title: "Alternativa ao OpenAI Sora",
      heroHeadline: "A Melhor Alternativa ao OpenAI Sora Disponível Agora",
      heroSubheadline: "Sora cria vídeos IA impressionantes, mas tem acesso limitado e é caro. Hyreel oferece geração instantânea de vídeo IA a partir de fotos—disponível hoje.",
    },
    ru: {
      title: "Альтернатива OpenAI Sora",
      heroHeadline: "Лучшая альтернатива OpenAI Sora, доступная сейчас",
      heroSubheadline: "Sora создаёт впечатляющие AI-видео, но имеет ограниченный доступ и стоит дорого. Hyreel предлагает мгновенную генерацию AI-видео из фотографий—доступно сегодня.",
    },
    it: {
      title: "Alternativa a OpenAI Sora",
      heroHeadline: "La Migliore Alternativa a OpenAI Sora Disponibile Ora",
      heroSubheadline: "Sora crea video IA impressionanti ma ha accesso limitato ed è costoso. Hyreel offre generazione video IA istantanea dalle tue foto—disponibile oggi.",
    },
    nl: {
      title: "OpenAI Sora Alternatief",
      heroHeadline: "Het Beste OpenAI Sora Alternatief - Nu Beschikbaar",
      heroSubheadline: "Sora maakt indrukwekkende AI-video's maar heeft beperkte toegang en is duur. Hyreel biedt directe AI-videogeneratie uit foto's—vandaag beschikbaar.",
    },
    pl: {
      title: "Alternatywa dla OpenAI Sora",
      heroHeadline: "Najlepsza Alternatywa dla OpenAI Sora Dostępna Teraz",
      heroSubheadline: "Sora tworzy imponujące filmy AI, ale ma ograniczony dostęp i jest drogi. Hyreel oferuje natychmiastowe generowanie wideo AI ze zdjęć—dostępne dzisiaj.",
    },
    ja: {
      title: "OpenAI Sora代替",
      heroHeadline: "今すぐ利用可能な最高のOpenAI Sora代替",
      heroSubheadline: "Soraは印象的なAI動画を作成しますが、アクセスが制限されており高価です。Hyreelは写真から即座にAI動画を生成します—今日から利用可能。",
    },
    ko: {
      title: "OpenAI Sora 대안",
      heroHeadline: "지금 바로 사용할 수 있는 최고의 OpenAI Sora 대안",
      heroSubheadline: "Sora는 인상적인 AI 비디오를 만들지만 접근이 제한되어 있고 비쌉니다. Hyreel은 사진에서 즉시 AI 비디오를 생성합니다—오늘 바로 사용 가능.",
    },
    zh: {
      title: "OpenAI Sora替代方案",
      heroHeadline: "现在可用的最佳OpenAI Sora替代方案",
      heroSubheadline: "Sora创建令人印象深刻的AI视频，但访问受限且价格昂贵。Hyreel提供从照片即时生成AI视频—今天就可以使用。",
    },
  },
  "kling-ai": {
    es: {
      title: "Alternativa a Kling AI",
      heroHeadline: "La Mejor Alternativa a Kling AI para Foto a Video",
      heroSubheadline: "Mientras Kling AI ofrece generación de video impresionante, Hyreel se especializa en transformar tus fotos en videos con efectos de movimiento profesionales—más rápido y más asequible.",
    },
    de: {
      title: "Kling AI Alternative",
      heroHeadline: "Die Beste Kling AI Alternative für Foto-zu-Video",
      heroSubheadline: "Kling AI bietet beeindruckende Videogenerierung, aber Hyreel ist spezialisiert auf die Umwandlung Ihrer Fotos in Videos mit professionellen Bewegungseffekten—schneller und günstiger.",
    },
    fr: {
      title: "Alternative à Kling AI",
      heroHeadline: "La Meilleure Alternative à Kling AI pour Photo-Vidéo",
      heroSubheadline: "Kling AI offre une génération vidéo impressionnante, mais Hyreel se spécialise dans la transformation de vos photos en vidéos avec des effets de mouvement professionnels—plus rapide et plus abordable.",
    },
    pt: {
      title: "Alternativa ao Kling AI",
      heroHeadline: "A Melhor Alternativa ao Kling AI para Foto para Vídeo",
      heroSubheadline: "Kling AI oferece geração de vídeo impressionante, mas Hyreel é especializado em transformar suas fotos em vídeos com efeitos de movimento profissionais—mais rápido e mais acessível.",
    },
    ru: {
      title: "Альтернатива Kling AI",
      heroHeadline: "Лучшая альтернатива Kling AI для фото-в-видео",
      heroSubheadline: "Kling AI предлагает впечатляющую генерацию видео, но Hyreel специализируется на превращении ваших фотографий в видео с профессиональными эффектами движения—быстрее и доступнее.",
    },
    it: {
      title: "Alternativa a Kling AI",
      heroHeadline: "La Migliore Alternativa a Kling AI per Foto-Video",
      heroSubheadline: "Kling AI offre una generazione video impressionante, ma Hyreel è specializzato nella trasformazione delle tue foto in video con effetti di movimento professionali—più veloce e conveniente.",
    },
    nl: {
      title: "Kling AI Alternatief",
      heroHeadline: "Het Beste Kling AI Alternatief voor Foto-naar-Video",
      heroSubheadline: "Kling AI biedt indrukwekkende videogeneratie, maar Hyreel is gespecialiseerd in het transformeren van je foto's naar video's met professionele bewegingseffecten—sneller en betaalbaarder.",
    },
    pl: {
      title: "Alternatywa dla Kling AI",
      heroHeadline: "Najlepsza Alternatywa dla Kling AI do Zdjęcie-Wideo",
      heroSubheadline: "Kling AI oferuje imponujące generowanie wideo, ale Hyreel specjalizuje się w przekształcaniu zdjęć w filmy z profesjonalnymi efektami ruchu—szybciej i taniej.",
    },
    ja: {
      title: "Kling AI代替",
      heroHeadline: "写真から動画のための最高のKling AI代替",
      heroSubheadline: "Kling AIは印象的な動画生成を提供しますが、Hyreelはあなたの写真をプロフェッショナルなモーションエフェクトを持つ動画に変換することに特化しています—より速く、より手頃な価格で。",
    },
    ko: {
      title: "Kling AI 대안",
      heroHeadline: "사진-비디오를 위한 최고의 Kling AI 대안",
      heroSubheadline: "Kling AI는 인상적인 비디오 생성을 제공하지만, Hyreel은 사진을 전문적인 모션 효과가 있는 비디오로 변환하는 데 특화되어 있습니다—더 빠르고 더 저렴하게.",
    },
    zh: {
      title: "Kling AI替代方案",
      heroHeadline: "照片转视频的最佳Kling AI替代方案",
      heroSubheadline: "Kling AI提供令人印象深刻的视频生成，但Hyreel专门将您的照片转换为具有专业动态效果的视频—更快、更实惠。",
    },
  },
  "vidu-ai": {
    es: {
      title: "Alternativa a Vidu AI",
      heroHeadline: "La Mejor Alternativa a Vidu AI para Creadores",
      heroSubheadline: "Vidu AI genera videos desde texto, pero Hyreel transforma tus fotos reales en videos con efectos de movimiento profesionales—perfecto para contenido de productos y redes sociales.",
    },
    de: {
      title: "Vidu AI Alternative",
      heroHeadline: "Die Beste Vidu AI Alternative für Creator",
      heroSubheadline: "Vidu AI generiert Videos aus Text, aber Hyreel verwandelt Ihre echten Fotos in Videos mit professionellen Bewegungseffekten—perfekt für Produkt-Content und Social Media.",
    },
    fr: {
      title: "Alternative à Vidu AI",
      heroHeadline: "La Meilleure Alternative à Vidu AI pour Créateurs",
      heroSubheadline: "Vidu AI génère des vidéos à partir de texte, mais Hyreel transforme vos vraies photos en vidéos avec des effets de mouvement professionnels—parfait pour le contenu produit et réseaux sociaux.",
    },
    pt: {
      title: "Alternativa ao Vidu AI",
      heroHeadline: "A Melhor Alternativa ao Vidu AI para Criadores",
      heroSubheadline: "Vidu AI gera vídeos a partir de texto, mas Hyreel transforma suas fotos reais em vídeos com efeitos de movimento profissionais—perfeito para conteúdo de produtos e redes sociais.",
    },
    ru: {
      title: "Альтернатива Vidu AI",
      heroHeadline: "Лучшая альтернатива Vidu AI для создателей контента",
      heroSubheadline: "Vidu AI генерирует видео из текста, но Hyreel превращает ваши реальные фотографии в видео с профессиональными эффектами движения—идеально для контента о продуктах и социальных сетей.",
    },
    it: {
      title: "Alternativa a Vidu AI",
      heroHeadline: "La Migliore Alternativa a Vidu AI per Creator",
      heroSubheadline: "Vidu AI genera video dal testo, ma Hyreel trasforma le tue foto reali in video con effetti di movimento professionali—perfetto per contenuti di prodotto e social media.",
    },
    nl: {
      title: "Vidu AI Alternatief",
      heroHeadline: "Het Beste Vidu AI Alternatief voor Creators",
      heroSubheadline: "Vidu AI genereert video's uit tekst, maar Hyreel transformeert je echte foto's in video's met professionele bewegingseffecten—perfect voor productcontent en sociale media.",
    },
    pl: {
      title: "Alternatywa dla Vidu AI",
      heroHeadline: "Najlepsza Alternatywa dla Vidu AI dla Twórców",
      heroSubheadline: "Vidu AI generuje filmy z tekstu, ale Hyreel przekształca Twoje prawdziwe zdjęcia w filmy z profesjonalnymi efektami ruchu—idealne dla treści produktowych i mediów społecznościowych.",
    },
    ja: {
      title: "Vidu AI代替",
      heroHeadline: "クリエイターのための最高のVidu AI代替",
      heroSubheadline: "Vidu AIはテキストから動画を生成しますが、Hyreelはあなたの実際の写真をプロフェッショナルなモーションエフェクトを持つ動画に変換します—製品コンテンツとソーシャルメディアに最適。",
    },
    ko: {
      title: "Vidu AI 대안",
      heroHeadline: "크리에이터를 위한 최고의 Vidu AI 대안",
      heroSubheadline: "Vidu AI는 텍스트에서 비디오를 생성하지만, Hyreel은 실제 사진을 전문적인 모션 효과가 있는 비디오로 변환합니다—제품 콘텐츠와 소셜 미디어에 완벽합니다.",
    },
    zh: {
      title: "Vidu AI替代方案",
      heroHeadline: "创作者的最佳Vidu AI替代方案",
      heroSubheadline: "Vidu AI从文本生成视频，但Hyreel将您的真实照片转换为具有专业动态效果的视频—非常适合产品内容和社交媒体。",
    },
  },
  "haiper-ai": {
    es: {
      title: "Alternativa a Haiper AI",
      heroHeadline: "La Mejor Alternativa a Haiper AI",
      heroSubheadline: "Haiper AI ofrece generación de video, pero Hyreel se especializa en transformar fotos en videos impresionantes con efectos de movimiento cinematográficos.",
    },
    de: {
      title: "Haiper AI Alternative",
      heroHeadline: "Die Beste Haiper AI Alternative",
      heroSubheadline: "Haiper AI bietet Videogenerierung, aber Hyreel ist spezialisiert auf die Umwandlung von Fotos in atemberaubende Videos mit kinematischen Bewegungseffekten.",
    },
    fr: {
      title: "Alternative à Haiper AI",
      heroHeadline: "La Meilleure Alternative à Haiper AI",
      heroSubheadline: "Haiper AI offre la génération vidéo, mais Hyreel se spécialise dans la transformation de photos en vidéos époustouflantes avec des effets de mouvement cinématographiques.",
    },
    pt: {
      title: "Alternativa ao Haiper AI",
      heroHeadline: "A Melhor Alternativa ao Haiper AI",
      heroSubheadline: "Haiper AI oferece geração de vídeo, mas Hyreel é especializado em transformar fotos em vídeos impressionantes com efeitos de movimento cinematográficos.",
    },
    ru: {
      title: "Альтернатива Haiper AI",
      heroHeadline: "Лучшая альтернатива Haiper AI",
      heroSubheadline: "Haiper AI предлагает генерацию видео, но Hyreel специализируется на превращении фотографий в потрясающие видео с кинематографическими эффектами движения.",
    },
    it: {
      title: "Alternativa a Haiper AI",
      heroHeadline: "La Migliore Alternativa a Haiper AI",
      heroSubheadline: "Haiper AI offre generazione video, ma Hyreel è specializzato nella trasformazione di foto in video mozzafiato con effetti di movimento cinematografici.",
    },
    nl: {
      title: "Haiper AI Alternatief",
      heroHeadline: "Het Beste Haiper AI Alternatief",
      heroSubheadline: "Haiper AI biedt videogeneratie, maar Hyreel is gespecialiseerd in het transformeren van foto's naar verbluffende video's met cinematografische bewegingseffecten.",
    },
    pl: {
      title: "Alternatywa dla Haiper AI",
      heroHeadline: "Najlepsza Alternatywa dla Haiper AI",
      heroSubheadline: "Haiper AI oferuje generowanie wideo, ale Hyreel specjalizuje się w przekształcaniu zdjęć w oszałamiające filmy z kinowymi efektami ruchu.",
    },
    ja: {
      title: "Haiper AI代替",
      heroHeadline: "最高のHaiper AI代替",
      heroSubheadline: "Haiper AIは動画生成を提供しますが、Hyreelは写真をシネマティックなモーションエフェクトを持つ素晴らしい動画に変換することに特化しています。",
    },
    ko: {
      title: "Haiper AI 대안",
      heroHeadline: "최고의 Haiper AI 대안",
      heroSubheadline: "Haiper AI는 비디오 생성을 제공하지만, Hyreel은 사진을 시네마틱한 모션 효과가 있는 멋진 비디오로 변환하는 데 특화되어 있습니다.",
    },
    zh: {
      title: "Haiper AI替代方案",
      heroHeadline: "最佳Haiper AI替代方案",
      heroSubheadline: "Haiper AI提供视频生成，但Hyreel专门将照片转换为具有电影般动态效果的精彩视频。",
    },
  },
  "viggle-ai": {
    es: {
      title: "Alternativa a Viggle AI",
      heroHeadline: "La Mejor Alternativa a Viggle AI",
      heroSubheadline: "Viggle AI se enfoca en animación de personajes, pero Hyreel sobresale en transformar cualquier foto en video cinematográfico con efectos de movimiento profesionales.",
    },
    de: {
      title: "Viggle AI Alternative",
      heroHeadline: "Die Beste Viggle AI Alternative",
      heroSubheadline: "Viggle AI konzentriert sich auf Charakteranimation, aber Hyreel zeichnet sich durch die Umwandlung jedes Fotos in kinematisches Video mit professionellen Bewegungseffekten aus.",
    },
    fr: {
      title: "Alternative à Viggle AI",
      heroHeadline: "La Meilleure Alternative à Viggle AI",
      heroSubheadline: "Viggle AI se concentre sur l'animation de personnages, mais Hyreel excelle à transformer toute photo en vidéo cinématographique avec des effets de mouvement professionnels.",
    },
    pt: {
      title: "Alternativa ao Viggle AI",
      heroHeadline: "A Melhor Alternativa ao Viggle AI",
      heroSubheadline: "Viggle AI foca em animação de personagens, mas Hyreel se destaca em transformar qualquer foto em vídeo cinematográfico com efeitos de movimento profissionais.",
    },
    ru: {
      title: "Альтернатива Viggle AI",
      heroHeadline: "Лучшая альтернатива Viggle AI",
      heroSubheadline: "Viggle AI фокусируется на анимации персонажей, но Hyreel превосходно превращает любую фотографию в кинематографичное видео с профессиональными эффектами движения.",
    },
    it: {
      title: "Alternativa a Viggle AI",
      heroHeadline: "La Migliore Alternativa a Viggle AI",
      heroSubheadline: "Viggle AI si concentra sull'animazione dei personaggi, ma Hyreel eccelle nel trasformare qualsiasi foto in video cinematografico con effetti di movimento professionali.",
    },
    nl: {
      title: "Viggle AI Alternatief",
      heroHeadline: "Het Beste Viggle AI Alternatief",
      heroSubheadline: "Viggle AI focust op karakteranimatie, maar Hyreel blinkt uit in het transformeren van elke foto naar cinematografische video met professionele bewegingseffecten.",
    },
    pl: {
      title: "Alternatywa dla Viggle AI",
      heroHeadline: "Najlepsza Alternatywa dla Viggle AI",
      heroSubheadline: "Viggle AI koncentruje się na animacji postaci, ale Hyreel doskonale przekształca każde zdjęcie w kinowe wideo z profesjonalnymi efektami ruchu.",
    },
    ja: {
      title: "Viggle AI代替",
      heroHeadline: "最高のViggle AI代替",
      heroSubheadline: "Viggle AIはキャラクターアニメーションに焦点を当てていますが、Hyreelはあらゆる写真をプロフェッショナルなモーションエフェクトを持つシネマティックな動画に変換することに優れています。",
    },
    ko: {
      title: "Viggle AI 대안",
      heroHeadline: "최고의 Viggle AI 대안",
      heroSubheadline: "Viggle AI는 캐릭터 애니메이션에 초점을 맞추지만, Hyreel은 모든 사진을 전문적인 모션 효과가 있는 시네마틱 비디오로 변환하는 데 탁월합니다.",
    },
    zh: {
      title: "Viggle AI替代方案",
      heroHeadline: "最佳Viggle AI替代方案",
      heroSubheadline: "Viggle AI专注于角色动画，但Hyreel擅长将任何照片转换为具有专业动态效果的电影级视频。",
    },
  },
  kaiber: {
    es: {
      title: "Alternativa a Kaiber",
      heroHeadline: "La Mejor Alternativa a Kaiber para Creación Simple de Video",
      heroSubheadline: "Kaiber ofrece transformación artística de video IA, pero Hyreel proporciona conversión directa de foto a video con movimiento cinematográfico profesional—sin prompts artísticos necesarios.",
    },
    de: {
      title: "Kaiber Alternative",
      heroHeadline: "Die Beste Kaiber Alternative für Einfache Videoerstellung",
      heroSubheadline: "Kaiber bietet künstlerische KI-Videotransformation, aber Hyreel liefert direkte Foto-zu-Video-Konvertierung mit professioneller kinematischer Bewegung—keine künstlerischen Prompts erforderlich.",
    },
    fr: {
      title: "Alternative à Kaiber",
      heroHeadline: "La Meilleure Alternative à Kaiber pour Création Vidéo Simple",
      heroSubheadline: "Kaiber offre une transformation vidéo IA artistique, mais Hyreel fournit une conversion photo-vidéo directe avec mouvement cinématographique professionnel—sans prompts artistiques nécessaires.",
    },
    pt: {
      title: "Alternativa ao Kaiber",
      heroHeadline: "A Melhor Alternativa ao Kaiber para Criação Simples de Vídeo",
      heroSubheadline: "Kaiber oferece transformação artística de vídeo IA, mas Hyreel fornece conversão direta de foto para vídeo com movimento cinematográfico profissional—sem prompts artísticos necessários.",
    },
    ru: {
      title: "Альтернатива Kaiber",
      heroHeadline: "Лучшая альтернатива Kaiber для простого создания видео",
      heroSubheadline: "Kaiber предлагает художественную AI-трансформацию видео, но Hyreel обеспечивает прямое преобразование фото в видео с профессиональным кинематографическим движением—без необходимости в художественных промптах.",
    },
    it: {
      title: "Alternativa a Kaiber",
      heroHeadline: "La Migliore Alternativa a Kaiber per Creazione Video Semplice",
      heroSubheadline: "Kaiber offre trasformazione video IA artistica, ma Hyreel fornisce conversione foto-video diretta con movimento cinematografico professionale—senza prompt artistici necessari.",
    },
    nl: {
      title: "Kaiber Alternatief",
      heroHeadline: "Het Beste Kaiber Alternatief voor Eenvoudige Videocreatie",
      heroSubheadline: "Kaiber biedt artistieke AI-videotransformatie, maar Hyreel levert directe foto-naar-video conversie met professionele cinematografische beweging—geen artistieke prompts nodig.",
    },
    pl: {
      title: "Alternatywa dla Kaiber",
      heroHeadline: "Najlepsza Alternatywa dla Kaiber do Prostego Tworzenia Wideo",
      heroSubheadline: "Kaiber oferuje artystyczną transformację wideo AI, ale Hyreel zapewnia bezpośrednią konwersję zdjęcia na wideo z profesjonalnym kinowym ruchem—bez konieczności stosowania artystycznych promptów.",
    },
    ja: {
      title: "Kaiber代替",
      heroHeadline: "シンプルな動画作成のための最高のKaiber代替",
      heroSubheadline: "Kaiberはアーティスティックな AI動画変換を提供しますが、Hyreelはプロフェッショナルなシネマティックモーションによる直接的な写真から動画への変換を提供します—アーティスティックなプロンプトは不要です。",
    },
    ko: {
      title: "Kaiber 대안",
      heroHeadline: "간단한 비디오 제작을 위한 최고의 Kaiber 대안",
      heroSubheadline: "Kaiber는 예술적 AI 비디오 변환을 제공하지만, Hyreel은 전문적인 시네마틱 움직임으로 직접적인 사진-비디오 변환을 제공합니다—예술적 프롬프트가 필요 없습니다.",
    },
    zh: {
      title: "Kaiber替代方案",
      heroHeadline: "简单视频创作的最佳Kaiber替代方案",
      heroSubheadline: "Kaiber提供艺术AI视频转换，但Hyreel提供直接的照片到视频转换，具有专业的电影般动感—无需艺术提示。",
    },
  },
};

export function getLocalizedAlternativeContent(
  slug: string,
  locale: Locale
): AlternativeTranslation | null {
  if (locale === "en") return null;
  const translations = alternativeTranslations[slug];
  if (!translations) return null;
  return translations[locale] || null;
}
