export type LangCode = 'en' | 'es' | 'it' | 'tr' | 'ru' | 'zh' | 'hi' | 'pl' | 'ko';

export const LANG_CODES: LangCode[] = ['en', 'es', 'it', 'tr', 'ru', 'zh', 'hi', 'pl', 'ko'];

export const LANG_LABELS: Record<LangCode, string> = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  tr: 'Türkçe',
  ru: 'Русский',
  zh: '简体中文',
  hi: 'हिन्दी',
  pl: 'Polski',
  ko: '한국어',
};

export const LANG_FLAGS: Record<LangCode, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  it: '🇮🇹',
  tr: '🇹🇷',
  ru: '🇷🇺',
  zh: '🇨🇳',
  hi: '🇮🇳',
  pl: '🇵🇱',
  ko: '🇰🇷',
};

export const LANG_SHORT: Record<LangCode, string> = {
  en: 'EN',
  es: 'ES',
  it: 'IT',
  tr: 'TR',
  ru: 'RU',
  zh: 'ZH',
  hi: 'HI',
  pl: 'PL',
  ko: 'KO',
};

export const UI_STRINGS: Record<LangCode, {
  equipment: string;
  category: string;
  target: string;
  muscleGroup: string;
  instructions: string;
  steps: string;
  secondaryMuscles: string;
  relatedExercises: string;
  seeAll: string;
  viewExercise: string;
  attribution: string;
  search: string;
  allEquipment: string;
  allMuscles: string;
  filter: string;
  clear: string;
  showing: string;
  of: string;
  exercises: string;
  noResults: string;
  noResultsDesc: string;
}> = {
  en: {
    equipment: 'Equipment', category: 'Muscle group', target: 'Target muscle',
    muscleGroup: 'Muscle group', instructions: 'How to do it', steps: 'steps',
    secondaryMuscles: 'Secondary muscles', relatedExercises: 'Similar exercises',
    seeAll: 'See all', viewExercise: 'View exercise', attribution: '© Gym visual',
    search: 'Search exercise (e.g. squat, bench press, pull-up...)',
    allEquipment: 'All equipment', allMuscles: 'All muscles',
    filter: 'Filter', clear: 'Clear', showing: 'Showing', of: 'of', exercises: 'exercises',
    noResults: 'No results', noResultsDesc: 'No exercises match your filters. Try changing the category, equipment, or target muscle.',
  },
  es: {
    equipment: 'Equipo', category: 'Grupo muscular', target: 'Músculo objetivo',
    muscleGroup: 'Grupo muscular', instructions: 'Cómo hacerlo', steps: 'pasos',
    secondaryMuscles: 'Músculos secundarios', relatedExercises: 'Ejercicios similares',
    seeAll: 'Ver todos', viewExercise: 'Ver ejercicio', attribution: '© Gym visual',
    search: 'Buscar ejercicio (ej. sentadilla, press banca, dominadas...)',
    allEquipment: 'Todos los equipos', allMuscles: 'Todos los músculos',
    filter: 'Filtrar', clear: 'Limpiar', showing: 'Mostrando', of: 'de', exercises: 'ejercicios',
    noResults: 'Sin resultados', noResultsDesc: 'No se encontraron ejercicios con esos filtros. Prueba a cambiar la categoría, el equipo o el músculo objetivo.',
  },
  it: {
    equipment: 'Attrezzatura', category: 'Gruppo muscolare', target: 'Muscolo target',
    muscleGroup: 'Gruppo muscolare', instructions: 'Come farlo', steps: 'passi',
    secondaryMuscles: 'Muscoli secondari', relatedExercises: 'Esercizi simili',
    seeAll: 'Vedi tutti', viewExercise: 'Vedi esercizio', attribution: '© Gym visual',
    search: 'Cerca esercizio (es. squat, panca, trazioni...)',
    allEquipment: 'Tutte le attrezzature', allMuscles: 'Tutti i muscoli',
    filter: 'Filtra', clear: 'Pulisci', showing: 'Mostrando', of: 'di', exercises: 'esercizi',
    noResults: 'Nessun risultato', noResultsDesc: 'Nessun esercizio corrisponde ai filtri. Prova a cambiare categoria, attrezzatura o muscolo target.',
  },
  tr: {
    equipment: 'Ekipman', category: 'Kas grubu', target: 'Hedef kas',
    muscleGroup: 'Kas grubu', instructions: 'Nasıl yapılır', steps: 'adım',
    secondaryMuscles: 'İkincil kaslar', relatedExercises: 'Benzer egzersizler',
    seeAll: 'Tümünü gör', viewExercise: 'Egzersizi gör', attribution: '© Gym visual',
    search: 'Egzersiz ara (örn. squat, bench press, pull-up...)',
    allEquipment: 'Tüm ekipmanlar', allMuscles: 'Tüm kaslar',
    filter: 'Filtrele', clear: 'Temizle', showing: 'Gösterilen', of: '/', exercises: 'egzersiz',
    noResults: 'Sonuç yok', noResultsDesc: 'Filtrelerinize uyan egzersiz yok. Kategori, ekipman veya hedef kası değiştirmeyi deneyin.',
  },
  ru: {
    equipment: 'Оборудование', category: 'Группа мышц', target: 'Целевая мышца',
    muscleGroup: 'Группа мышц', instructions: 'Как выполнять', steps: 'шагов',
    secondaryMuscles: 'Вторичные мышцы', relatedExercises: 'Похожие упражнения',
    seeAll: 'Смотреть все', viewExercise: 'Смотреть упражнение', attribution: '© Gym visual',
    search: 'Поиск упражнения (напр. присед, жим, подтягивания...)',
    allEquipment: 'Всё оборудование', allMuscles: 'Все мышцы',
    filter: 'Фильтр', clear: 'Очистить', showing: 'Показано', of: 'из', exercises: 'упражнений',
    noResults: 'Нет результатов', noResultsDesc: 'Нет упражнений, соответствующих вашим фильтрам. Попробуйте изменить категорию, оборудование или целевую мышцу.',
  },
  zh: {
    equipment: '器械', category: '肌群', target: '目标肌肉',
    muscleGroup: '肌群', instructions: '如何做', steps: '步骤',
    secondaryMuscles: '协同肌肉', relatedExercises: '类似动作',
    seeAll: '查看全部', viewExercise: '查看动作', attribution: '© Gym visual',
    search: '搜索动作（如深蹲、卧推、引体向上…）',
    allEquipment: '全部器械', allMuscles: '全部肌肉',
    filter: '筛选', clear: '清除', showing: '显示', of: '共', exercises: '个动作',
    noResults: '无结果', noResultsDesc: '没有符合筛选条件的动作。请尝试更改类别、器械或目标肌肉。',
  },
  hi: {
    equipment: 'उपकरण', category: 'मांसपेशी समूह', target: 'लक्ष्य मांसपेशी',
    muscleGroup: 'मांसपेशी समूह', instructions: 'कैसे करें', steps: 'चरण',
    secondaryMuscles: 'द्वितीयक मांसपेशियाँ', relatedExercises: 'समान व्यायाम',
    seeAll: 'सभी देखें', viewExercise: 'व्यायाम देखें', attribution: '© Gym visual',
    search: 'व्यायाम खोजें (जैसे स्क्वैट, बेंच प्रेस, पुल-अप...)',
    allEquipment: 'सभी उपकरण', allMuscles: 'सभी मांसपेशियाँ',
    filter: 'फ़िल्टर', clear: 'साफ़ करें', showing: 'दिखा रहा है', of: 'में से', exercises: 'व्यायाम',
    noResults: 'कोई परिणाम नहीं', noResultsDesc: 'आपके फ़िल्टर से मेल खाते कोई व्यायाम नहीं हैं। श्रेणी, उपकरण या लक्ष्य मांसपेशी बदलने का प्रयास करें।',
  },
  pl: {
    equipment: 'Sprzęt', category: 'Grupa mięśniowa', target: 'Mięsień docelowy',
    muscleGroup: 'Grupa mięśniowa', instructions: 'Jak to zrobić', steps: 'kroków',
    secondaryMuscles: 'Mięśnie pomocnicze', relatedExercises: 'Podobne ćwiczenia',
    seeAll: 'Zobacz wszystkie', viewExercise: 'Zobacz ćwiczenie', attribution: '© Gym visual',
    search: 'Szukaj ćwiczenia (np. przysiad, wyciskanie, podciąganie...)',
    allEquipment: 'Cały sprzęt', allMuscles: 'Wszystkie mięśnie',
    filter: 'Filtruj', clear: 'Wyczyść', showing: 'Pokazano', of: 'z', exercises: 'ćwiczeń',
    noResults: 'Brak wyników', noResultsDesc: 'Brak ćwiczeń pasujących do filtrów. Spróbuj zmienić kategorię, sprzęt lub mięsień docelowy.',
  },
  ko: {
    equipment: '장비', category: '근육 그룹', target: '대상 근육',
    muscleGroup: '근육 그룹', instructions: '수행 방법', steps: '단계',
    secondaryMuscles: '보조 근육', relatedExercises: '유사한 운동',
    seeAll: '모두 보기', viewExercise: '운동 보기', attribution: '© Gym visual',
    search: '운동 검색 (예: 스쿼트, 벤치프레스, 풀업...)',
    allEquipment: '모든 장비', allMuscles: '모든 근육',
    filter: '필터', clear: '지우기', showing: '표시', of: '/', exercises: '개 운동',
    noResults: '결과 없음', noResultsDesc: '필터에 맞는 운동이 없습니다. 카테고리, 장비 또는 대상 근육을 변경해 보세요.',
  },
};

export const TRANSLATIONS: Record<LangCode, Record<string, string>> = {
  en: {
    waist: 'waist', chest: 'chest', back: 'back', 'upper arms': 'upper arms',
    'lower arms': 'lower arms', 'upper legs': 'upper legs', 'lower legs': 'lower legs',
    shoulders: 'shoulders', neck: 'neck', cardio: 'cardio',
    abductors: 'abductors', abs: 'abs', adductors: 'adductors', biceps: 'biceps',
    calves: 'calves', 'cardiovascular system': 'cardiovascular system', delts: 'delts',
    forearms: 'forearms', glutes: 'glutes', hamstrings: 'hamstrings',
    'hip flexors': 'hip flexors', lats: 'lats', 'levator scapulae': 'levator scapulae',
    pectorals: 'pectorals', quads: 'quads', 'serratus anterior': 'serratus anterior',
    spine: 'spine', traps: 'traps', triceps: 'triceps', 'upper back': 'upper back',
    'body weight': 'body weight', dumbbell: 'dumbbell', barbell: 'barbell',
    cable: 'cable', 'leverage machine': 'leverage machine', band: 'band',
    'smith machine': 'smith machine', kettlebell: 'kettlebell', weighted: 'weighted',
    'stability ball': 'stability ball', 'ez barbell': 'ez barbell',
  },
  es: {
    waist: 'cintura', chest: 'pecho', back: 'espalda', 'upper arms': 'brazos',
    'lower arms': 'antebrazos', 'upper legs': 'piernas', 'lower legs': 'pantorrillas',
    shoulders: 'hombros', neck: 'cuello', cardio: 'cardio',
    abductors: 'abductores', abs: 'abdominales', adductors: 'aductores', biceps: 'bíceps',
    calves: 'gemelos', 'cardiovascular system': 'sistema cardiovascular', delts: 'deltoides',
    forearms: 'antebrazos', glutes: 'glúteos', hamstrings: 'isquiotibiales',
    'hip flexors': 'flexores de cadera', lats: 'dorsales', 'levator scapulae': 'elevador de la escápula',
    pectorals: 'pectorales', quads: 'cuádriceps', 'serratus anterior': 'serrato anterior',
    spine: 'columna', traps: 'trapecios', triceps: 'tríceps', 'upper back': 'espalda alta',
    'body weight': 'peso corporal', dumbbell: 'mancuerna', barbell: 'barra',
    cable: 'polea', 'leverage machine': 'máquina', band: 'banda',
    'smith machine': 'máquina smith', kettlebell: 'pesa rusa', weighted: 'con peso',
    'stability ball': 'balón de estabilidad', 'ez barbell': 'barra z',
  },
  it: {
    waist: 'vita', chest: 'petto', back: 'schiena', 'upper arms': 'braccia',
    'lower arms': 'avambracci', 'upper legs': 'gambe', 'lower legs': 'polpacci',
    shoulders: 'spalle', neck: 'collo', cardio: 'cardio',
    abductors: 'abduttori', abs: 'addominali', adductors: 'adduttori', biceps: 'bicipiti',
    calves: 'polpacci', 'cardiovascular system': 'sistema cardiovascolare', delts: 'deltoidi',
    forearms: 'avambracci', glutes: 'glutei', hamstrings: 'bicipiti femorali',
    'hip flexors': 'flessori dell\'anca', lats: 'dorsali', 'levator scapulae': 'elevatore della scapola',
    pectorals: 'pettorali', quads: 'quadricipiti', 'serratus anterior': 'serrato',
    spine: 'colonna', traps: 'trapezi', triceps: 'tricipiti', 'upper back': 'schiena alta',
    'body weight': 'peso corporeo', dumbbell: 'manubrio', barbell: 'bilanciere',
    cable: 'cavo', 'leverage machine': 'macchina', band: 'elastico',
    'smith machine': 'smith machine', kettlebell: 'kettlebell', weighted: 'zavorrato',
    'stability ball': 'palla fitness', 'ez barbell': 'barra ez',
  },
  tr: {
    waist: 'bel', chest: 'göğüs', back: 'sırt', 'upper arms': 'üst kollar',
    'lower arms': 'alt kollar', 'upper legs': 'üst bacaklar', 'lower legs': 'alt bacaklar',
    shoulders: 'omuzlar', neck: 'boyun', cardio: 'kardiyo',
    abductors: 'abduktörler', abs: 'karın', adductors: 'adduktörler', biceps: 'biceps',
    calves: 'baldırlar', 'cardiovascular system': 'kardiyovasküler', delts: 'deltoidler',
    forearms: 'ön kol', glutes: 'kalça', hamstrings: 'hamstringler',
    'hip flexors': 'kalça fleksörleri', lats: 'latlar', 'levator scapulae': 'levator skapula',
    pectorals: 'pektoral', quads: 'kuadriseps', 'serratus anterior': 'serratus anterior',
    spine: 'omurga', traps: 'trapezler', triceps: 'triceps', 'upper back': 'üst sırt',
    'body weight': 'vücut ağırlığı', dumbbell: 'dambıl', barbell: 'halter',
    cable: 'kablo', 'leverage machine': 'makine', band: 'bant',
    'smith machine': 'smith makinesi', kettlebell: 'kettlebell', weighted: 'ağırlıklı',
    'stability ball': 'denge topu', 'ez barbell': 'ez bar',
  },
  ru: {
    waist: 'талия', chest: 'грудь', back: 'спина', 'upper arms': 'руки',
    'lower arms': 'предплечья', 'upper legs': 'бедра', 'lower legs': 'голени',
    shoulders: 'плечи', neck: 'шея', cardio: 'кардио',
    abductors: 'абдукторы', abs: 'пресс', adductors: 'аддукторы', biceps: 'бицепс',
    calves: 'икры', 'cardiovascular system': 'сердечно-сосудистая', delts: 'дельты',
    forearms: 'предплечья', glutes: 'ягодицы', hamstrings: 'бицепс бедра',
    'hip flexors': 'сгибатели бедра', lats: 'широчайшие', 'levator scapulae': 'подниматель лопатки',
    pectorals: 'грудные', quads: 'квадрицепс', 'serratus anterior': 'передняя зубчатая',
    spine: 'позвоночник', traps: 'трапеция', triceps: 'трицепс', 'upper back': 'верх спины',
    'body weight': 'собственный вес', dumbbell: 'гантель', barbell: 'штанга',
    cable: 'блок', 'leverage machine': 'тренажёр', band: 'лента',
    'smith machine': 'смит', kettlebell: 'гиря', weighted: 'утяжелитель',
    'stability ball': 'фитбол', 'ez barbell': 'ez-гриф',
  },
  zh: {
    waist: '腰', chest: '胸', back: '背', 'upper arms': '上臂',
    'lower arms': '前臂', 'upper legs': '大腿', 'lower legs': '小腿',
    shoulders: '肩', neck: '颈', cardio: '有氧',
    abductors: '外展肌', abs: '腹肌', adductors: '内收肌', biceps: '肱二头肌',
    calves: '小腿肌', 'cardiovascular system': '心血管系统', delts: '三角肌',
    forearms: '前臂', glutes: '臀大肌', hamstrings: '腘绳肌',
    'hip flexors': '髋屈肌', lats: '背阔肌', 'levator scapulae': '肩胛提肌',
    pectorals: '胸大肌', quads: '股四头肌', 'serratus anterior': '前锯肌',
    spine: '脊柱', traps: '斜方肌', triceps: '肱三头肌', 'upper back': '上背',
    'body weight': '自重', dumbbell: '哑铃', barbell: '杠铃',
    cable: '绳索', 'leverage machine': '器械', band: '弹力带',
    'smith machine': '史密斯机', kettlebell: '壶铃', weighted: '负重',
    'stability ball': '健身球', 'ez barbell': '弯杠',
  },
  hi: {
    waist: 'कमर', chest: 'छाती', back: 'पीठ', 'upper arms': 'ऊपरी बाहें',
    'lower arms': 'निचली बाहें', 'upper legs': 'ऊपरी पैर', 'lower legs': 'निचले पैर',
    shoulders: 'कंधे', neck: 'गर्दन', cardio: 'कार्डियो',
    abductors: 'अपहननशील', abs: 'पेट', adductors: 'अभिन्नशील', biceps: 'बाइसेप्स',
    calves: 'पिंडली', 'cardiovascular system': 'हृदय प्रणाली', delts: 'डेल्टॉइड',
    forearms: 'अग्रबाहु', glutes: 'नितंब', hamstrings: 'हैमस्ट्रिंग',
    'hip flexors': 'कूल्हे मोड़ने वाले', lats: 'लैट्स', 'levator scapulae': 'स्कैपुला उठाने वाला',
    pectorals: 'पेक्टोरल', quads: 'क्वाड्स', 'serratus anterior': 'सिरेटस',
    spine: 'रीढ़', traps: 'ट्रेपेज़ियस', triceps: 'ट्राइसेप्स', 'upper back': 'ऊपरी पीठ',
    'body weight': 'शरीर का वजन', dumbbell: 'डम्बल', barbell: 'बारबेल',
    cable: 'केबल', 'leverage machine': 'मशीन', band: 'बैंड',
    'smith machine': 'स्मिथ मशीन', kettlebell: 'केटलबेल', weighted: 'भारित',
    'stability ball': 'स्थिरता गेंद', 'ez barbell': 'ईज़ी बार',
  },
  pl: {
    waist: 'talia', chest: 'klatka piersiowa', back: 'plecy', 'upper arms': 'ramiona',
    'lower arms': 'przedramiona', 'upper legs': 'uda', 'lower legs': 'łydki',
    shoulders: 'barki', neck: 'szyja', cardio: 'cardio',
    abductors: 'odwodziciele', abs: 'brzuch', adductors: 'przywodziciele', biceps: 'biceps',
    calves: 'łydki', 'cardiovascular system': 'układ sercowo-naczyniowy', delts: 'naramienne',
    forearms: 'przedramiona', glutes: 'pośladki', hamstrings: 'dwugłowe uda',
    'hip flexors': 'zginacze bioder', lats: 'najszersze', 'levator scapulae': 'dźwigacz łopatki',
    pectorals: 'piersiowe', quads: 'czworogłowe', 'serratus anterior': 'zębaty przedni',
    spine: 'kręgosłup', traps: 'czworoboczny', triceps: 'triceps', 'upper back': 'górne plecy',
    'body weight': 'własna masa ciała', dumbbell: 'hantel', barbell: 'sztanga',
    cable: 'wyciąg', 'leverage machine': 'maszyna', band: 'guma',
    'smith machine': 'maszyna smitha', kettlebell: 'kettlebell', weighted: 'obciążenie',
    'stability ball': 'piłka gimnastyczna', 'ez barbell': 'gryf łamany',
  },
  ko: {
    waist: '허리', chest: '가슴', back: '등', 'upper arms': '상완',
    'lower arms': '전완', 'upper legs': '허벅지', 'lower legs': '종아리',
    shoulders: '어깨', neck: '목', cardio: '유산소',
    abductors: '외전근', abs: '복근', adductors: '내전근', biceps: '이두근',
    calves: '종아리근', 'cardiovascular system': '심혈관계', delts: '삼각근',
    forearms: '전완근', glutes: '둔근', hamstrings: '햄스트링',
    'hip flexors': '고관절 굴곡근', lats: '광배근', 'levator scapulae': '견갑거근',
    pectorals: '대흉근', quads: '대퇴사두근', 'serratus anterior': '전거근',
    spine: '척추', traps: '승모근', triceps: '삼두근', 'upper back': '상부 등',
    'body weight': '맨몸', dumbbell: '덤벨', barbell: '바벨',
    cable: '케이블', 'leverage machine': '머신', band: '밴드',
    'smith machine': '스미스 머신', kettlebell: '케틀벨', weighted: '추가 저항',
    'stability ball': '스위스 볼', 'ez barbell': 'EZ 바',
  },
};
