/* =========================================================
   澳門慈幼中學 · 活動照片
   Activity content — edit titles, dates, captions and photo
   paths here when you add real photos.
   ========================================================= */

const CATEGORIES = [
  {
    id: "academic",
    zh: "學術",
    en: "Academic",
    tagline: { zh: "課堂之外的知識冒險", en: "Learning beyond the classroom" },
    color: "#1c5cf0",
    soft: "#e8efff",
    icon: "book"
  },
  {
    id: "guidance",
    zh: "升學與生涯",
    en: "Guidance",
    tagline: { zh: "為下一步找到方向", en: "Finding the way forward" },
    color: "#ff5d44",
    soft: "#ffe9e5",
    icon: "compass"
  },
  {
    id: "culture",
    zh: "文化傳承",
    en: "Culture",
    tagline: { zh: "把手藝與傳統接住", en: "Keeping craft and tradition alive" },
    color: "#d18a00",
    soft: "#fff4dc",
    icon: "lantern"
  },
  {
    id: "talks",
    zh: "專題講座",
    en: "Talks",
    tagline: { zh: "讓世界走進禮堂", en: "Bringing the world into the hall" },
    color: "#0fa97f",
    soft: "#e2f8f1",
    icon: "mic"
  }
];

const ACTIVITIES = [
  {
    id: "reclamation-talk",
    category: "talks",
    date: "2026-05-09",
    title: { zh: "填海講座", en: "Land Reclamation Talk" },
    subtitle: {
      zh: "從地圖上看見澳門的成長",
      en: "Seeing how Macau grew, one shoreline at a time"
    },
    location: { zh: "學校禮堂", en: "School Hall" },
    excerpt: {
      zh: "城市腳下的土地從何而來？一場講座，帶同學回看海岸線的變化與城市發展的選擇。",
      en: "Where does the ground beneath the city come from? A talk tracing Macau's shifting shoreline and the choices behind its growth."
    },
    body: {
      zh: [
        "澳門是一座與海爭地的城市。講座從舊地圖與歷史照片出發，帶同學認識填海工程如何一步步改變海岸線，也如何塑造今日的街道、社區與生活空間。",
        "講者以具體案例說明規劃、工程與環境之間的平衡，並提醒我們：每一寸新土地得來不易，城市發展的同時，也要思考自然、歷史與下一代的需要。",
        "問答環節中，同學圍繞土地利用、生態影響與未來規劃踴躍發問，把課本上的地理概念，連結到每天走過的街道。"
      ],
      en: [
        "Macau is a city that has grown out of the sea. Starting from old maps and archival photographs, the talk traced how land reclamation reshaped the coastline — and with it, the streets, neighbourhoods and living spaces we know today.",
        "Speakers walked through real projects to explain the balance between planning, engineering and the environment, reminding us that every inch of new land comes at a cost, and that growth must also consider nature, history and the needs of the next generation.",
        "During the Q&A, students asked about land use, ecological impact and future planning, connecting textbook geography to the streets they walk every day."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/reclamation-talk-01.svg",
        caption: { zh: "講座以舊地圖對照今日海岸線，同學看得入神。", en: "Old maps beside today's coastline kept students captivated." }
      },
      {
        src: "assets/img/ph/reclamation-talk-02.svg",
        caption: { zh: "講者用地圖解說填海工程的規劃。", en: "The speaker walked through reclamation plans on the map." }
      },
      {
        src: "assets/img/ph/reclamation-talk-03.svg",
        caption: { zh: "同學專心記錄，思考城市發展的代價與可能。", en: "Students took notes, weighing the costs and possibilities of urban growth." }
      },
      {
        src: "assets/img/ph/reclamation-talk-04.svg",
        caption: { zh: "問答環節，大家對腳下這片土地有了新的認識。", en: "In the Q&A, students saw the ground beneath them in a new light." }
      }
    ]
  },
  {
    id: "maritime-talk",
    category: "talks",
    date: "2026-05-08",
    title: { zh: "航海講座", en: "Maritime Talk" },
    subtitle: {
      zh: "把海圖攤開，讓好奇心啟航",
      en: "Unfolding the chart, setting curiosity sail"
    },
    location: { zh: "學校禮堂", en: "School Hall" },
    excerpt: {
      zh: "從澳門港口到遠洋航線，講者帶同學認識海上工作的日常與航海科技。",
      en: "From Macau's port to ocean routes, a look at life at sea and the technology of navigation."
    },
    body: {
      zh: [
        "澳門自古與海相伴，港口是城市與世界連結的起點。講座由本地航運的發展說起，帶同學認識碼頭運作、航道管理與船舶種類，也談到航海工作背後的專業與紀律。",
        "講者分享在海上工作的日常：長時間離岸、團隊合作、天氣變化與突發情況的應對。同學最感興趣的，是航海儀器如何結合傳統經驗與現代科技，在茫茫大海中確認位置與方向。",
        "問答環節中，有人問及航海科技與氣候變化，也有人關心入行途徑。講座讓同學看見，海洋不只是風景，更是一條值得探索的專業道路。"
      ],
      en: [
        "Macau has always lived alongside the sea; its port is where the city meets the world. The talk began with the story of local shipping, introducing students to terminal operations, channel management and vessel types — and the professionalism and discipline behind a life at sea.",
        "Speakers described the daily realities of maritime work: long periods away from shore, teamwork, changing weather and responding to the unexpected. Students were especially fascinated by how navigation instruments combine traditional experience with modern technology to fix a position on the open sea.",
        "In the Q&A, questions ranged from navigation technology and climate change to how to enter the industry. The talk showed that the ocean is not just a view — it is a professional path worth exploring."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/maritime-talk-01.svg",
        caption: { zh: "講者分享海上工作的日常與挑戰。", en: "The speaker shared the routines and challenges of life at sea." }
      },
      {
        src: "assets/img/ph/maritime-talk-02.svg",
        caption: { zh: "航海儀器展示，讓課本知識變得立體。", en: "Navigation instruments turned textbook knowledge into something tangible." }
      },
      {
        src: "assets/img/ph/maritime-talk-03.svg",
        caption: { zh: "同學對澳門港口與航運發展充滿好奇。", en: "Students were full of questions about Macau's port and shipping industry." }
      },
      {
        src: "assets/img/ph/maritime-talk-04.svg",
        caption: { zh: "舉手發問一個接一個，講座在熱烈交流中結束。", en: "Hands kept going up as the talk ended in lively conversation." }
      }
    ]
  },
  {
    id: "bamboo-craft",
    category: "culture",
    date: "2026-04-25",
    title: { zh: "F3 搭棚工藝", en: "Bamboo Scaffolding Workshop" },
    subtitle: {
      zh: "一根竹、一條繩，撐起城市的手藝",
      en: "Bamboo, rope, and a craft that holds up the city"
    },
    location: { zh: "工藝室", en: "Craft Room" },
    excerpt: {
      zh: "同學跟隨搭棚師傅認識竹棚結構，親手體驗綁紮，感受澳門傳統工藝的智慧。",
      en: "Students learned the structure of bamboo scaffolding and tried their hand at tying — a close encounter with a traditional Macau craft."
    },
    body: {
      zh: [
        "搭棚是澳門街頭常見的景象，卻很少人真正走近細看。工作坊邀請經驗豐富的搭棚師傅走進校園，介紹竹材的選擇、棚架的結構與綁紮方法，讓同學認識這門以經驗與手感累積而成的手藝。",
        "師傅示範後，同學分組動手嘗試。竹枝長短不一，繩結鬆緊有別，看似簡單的動作，實際操作起來才發現處處講究。每一次修正，都是對結構與安全的重新理解。",
        "活動最後，各組完成小型竹棚。雖然規模不大，卻讓同學真切感受到傳統工藝的價值：它不只是技術，更是人與材料、經驗與合作之間的默契。"
      ],
      en: [
        "Bamboo scaffolding is a familiar sight on Macau's streets, yet few of us stop to look closely. The workshop invited experienced scaffolders onto campus to introduce bamboo selection, frame structure and tying techniques — a craft built on experience and a sensitive pair of hands.",
        "After the demonstration, students worked in groups. Bamboo poles varied in length, knots differed in tension, and movements that looked simple turned out to demand care. Every correction brought a fresh understanding of structure and safety.",
        "By the end, each group had built a small bamboo frame. Modest in scale, it made the value of the craft tangible: not just technique, but a rapport between people, material, experience and teamwork."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/bamboo-craft-01.svg",
        caption: { zh: "搭棚師傅示範竹棚的結構與綁紮技巧。", en: "A scaffolding master demonstrated structure and tying techniques." }
      },
      {
        src: "assets/img/ph/bamboo-craft-02.svg",
        caption: { zh: "同學近距離觀察竹材的紋理與韌性。", en: "Students examined the grain and flexibility of bamboo up close." }
      },
      {
        src: "assets/img/ph/bamboo-craft-03.svg",
        caption: { zh: "分組嘗試綁紮，手上滿是專注。", en: "In groups, students tried their hand at tying with intense focus." }
      },
      {
        src: "assets/img/ph/bamboo-craft-04.svg",
        caption: { zh: "導師逐一指導，修正每個細節。", en: "Instructors moved from group to group, refining every detail." }
      },
      {
        src: "assets/img/ph/bamboo-craft-05.svg",
        caption: { zh: "竹枝交錯成架，手藝在合作中傳承。", en: "Bamboo crossed into a frame, passing craft down through teamwork." }
      },
      {
        src: "assets/img/ph/bamboo-craft-06.svg",
        caption: { zh: "完成的小型竹棚，是合作與手藝的成果。", en: "The finished mini scaffold — a product of teamwork and skill." }
      }
    ]
  },
  {
    id: "math-week",
    category: "academic",
    date: "2026-04-20",
    title: { zh: "數學週", en: "Mathematics Week" },
    subtitle: {
      zh: "數字走出課本，笑聲走進校園",
      en: "Numbers leave the textbook, laughter fills the campus"
    },
    location: { zh: "校園及禮堂", en: "Campus & School Hall" },
    excerpt: {
      zh: "數學遊蹤、解謎攤位與班際速算挑戰，讓同學在遊戲中發現數學的樂趣。",
      en: "A maths trail, puzzle booths and inter-class challenges turned numbers into a campus-wide adventure."
    },
    body: {
      zh: [
        "數學週以「玩中學」為主題，設有數學遊蹤、邏輯解謎站及班際速算挑戰。同學在校園各處尋找線索，運用課堂所學破解難題，也在合作中發現數學並不只是紙上的計算。",
        "攤位遊戲把公式與圖形變成手上的挑戰：有人用七巧板拼出圖案，有人與時間賽跑完成速算，也有人在解謎站前反覆嘗試，直到答案出現的那一刻一起歡呼。",
        "壓軸的班際比賽把氣氛推上高峰。掌聲、倒數與歡呼此起彼落，讓整個禮堂都感受到數學的熱度。原來，數字也可以很好玩。"
      ],
      en: [
        "With the theme \"learning through play\", Mathematics Week featured a campus maths trail, logic puzzle stations and an inter-class speed challenge. Students hunted for clues around school, applied what they had learned in class, and discovered that maths is far more than calculations on paper.",
        "Booth games turned formulas and shapes into hands-on challenges: assembling tangram figures, racing the clock on mental arithmetic, or persevering at a puzzle station until the answer finally clicked — and the whole group cheered.",
        "The inter-class final brought the energy to its peak. Applause, countdowns and cheers filled the hall, and the whole school felt the heat of mathematics. Numbers, it turns out, can be a lot of fun."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/math-week-01.svg",
        caption: { zh: "數學週開幕，禮堂坐滿期待的眼神。", en: "Mathematics Week opens to a hall full of expectant faces." }
      },
      {
        src: "assets/img/ph/math-week-02.svg",
        caption: { zh: "數學遊蹤：同學在校園各處尋找解謎線索。", en: "Maths trail: students hunt for clues across the campus." }
      },
      {
        src: "assets/img/ph/math-week-03.svg",
        caption: { zh: "攤位遊戲把公式變成手上的挑戰。", en: "Booth games turned formulas into hands-on challenges." }
      },
      {
        src: "assets/img/ph/math-week-04.svg",
        caption: { zh: "小組討論，一起拆解難題。", en: "Small-group discussion, breaking down problems together." }
      },
      {
        src: "assets/img/ph/math-week-05.svg",
        caption: { zh: "班際速算比賽，氣氛緊張又熱烈。", en: "The inter-class speed challenge was tense and electric." }
      },
      {
        src: "assets/img/ph/math-week-06.svg",
        caption: { zh: "頒獎時刻，為努力寫下句號。", en: "Award time — a fitting close to every effort." }
      }
    ]
  },
  {
    id: "chinese-culture",
    category: "culture",
    date: "2026-04-11",
    title: { zh: "愛國愛澳中華文化推廣活動", en: "Chinese Culture Day" },
    subtitle: {
      zh: "在書法、茶香與手藝裡，遇見傳統",
      en: "Meeting tradition through calligraphy, tea and craft"
    },
    location: { zh: "學校操場及禮堂", en: "School Grounds & Hall" },
    excerpt: {
      zh: "書法、茶藝、傳統手工藝與文化問答，讓同學在體驗中認識中華文化。",
      en: "Calligraphy, tea art, traditional crafts and a culture quiz brought heritage to life."
    },
    body: {
      zh: [
        "文化推廣活動以傳統表演揭開序幕，校園一時變得熱鬧起來。書法、茶藝、剪紙與傳統手工藝攤位沿著操場排開，同學可以親手嘗試，也可以坐下來聽導師講解背後的故事。",
        "在書法攤位，同學一筆一畫寫下自己的名字與祝福；茶藝桌前，大家學習溫杯、沖泡與奉茶，體會慢下來的節奏。傳統手工藝工作坊裡，一張紙、一根線，在手中慢慢變成作品。",
        "文化問答比賽把一天的所學串連起來。同學在搶答與合作中，重新認識傳統不只是書本上的名詞，而是可以觸摸、可以品嘗、可以延續的生活。"
      ],
      en: [
        "The day opened with a traditional performance, and the campus came alive. Calligraphy, tea art, paper-cutting and craft booths lined the grounds, inviting students to try things with their own hands or sit down and hear the stories behind them.",
        "At the calligraphy booth, students wrote their names and blessings stroke by stroke. At the tea table, they learned to warm cups, brew and serve, discovering a slower rhythm. In the craft workshop, a sheet of paper and a piece of thread slowly became something real.",
        "A culture quiz tied the day together. Through quick-fire rounds and teamwork, students rediscovered that tradition is not just a word in a textbook — it is something you can touch, taste and carry forward."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/chinese-culture-01.svg",
        caption: { zh: "中華文化推廣活動以傳統表演揭開序幕。", en: "Chinese Culture Day opened with a traditional performance." }
      },
      {
        src: "assets/img/ph/chinese-culture-02.svg",
        caption: { zh: "書法攤位前，同學一筆一畫感受漢字之美。", en: "At the calligraphy booth, students felt the beauty of every stroke." }
      },
      {
        src: "assets/img/ph/chinese-culture-03.svg",
        caption: { zh: "茶藝體驗，學習慢下來品味一杯茶。", en: "A tea ceremony taught the art of slowing down." }
      },
      {
        src: "assets/img/ph/chinese-culture-04.svg",
        caption: { zh: "傳統手工藝工作坊，作品在手中慢慢成形。", en: "In the craft workshop, small works took shape by hand." }
      },
      {
        src: "assets/img/ph/chinese-culture-05.svg",
        caption: { zh: "文化問答比賽，考驗知識也考驗默契。", en: "The culture quiz tested knowledge and teamwork alike." }
      },
      {
        src: "assets/img/ph/chinese-culture-06.svg",
        caption: { zh: "活動結束，師生合照留住熱鬧的一天。", en: "Teachers and students gathered for a group photo at day's end." }
      }
    ]
  },
  {
    id: "math-competition",
    category: "academic",
    date: "2026-03-14",
    title: { zh: "初中數學比賽", en: "Junior Mathematics Competition" },
    subtitle: {
      zh: "一場安靜卻熱烈的頭腦競技",
      en: "A quiet contest with a roaring sense of focus"
    },
    location: { zh: "學校禮堂", en: "School Hall" },
    excerpt: {
      zh: "F1 至 F3 同學同場較量，在有限時間裡拆解難題、挑戰自己。",
      en: "F1 to F3 students tackled problems against the clock, pushing their thinking to the limit."
    },
    body: {
      zh: [
        "比賽分為 F1、F2、F3 三個組別，題目涵蓋代數、幾何、數論與邏輯推理。參賽同學在限時內獨立作答，禮堂裡只聽見筆尖劃過紙面的聲音，安靜之中卻藏著最熱烈的思考。",
        "今年的題目特別加入生活情境，要求同學把數學模型應用到真實問題。有人在圖形題上反覆推演，有人從看似無關的線索中找到突破口，每一張草稿紙都記錄著思考的痕跡。",
        "賽後，老師即場講解幾道具挑戰性的題目，分享不同的解題思路。名次固然重要，但更珍貴的是同學願意走出舒適圈，在難題面前多堅持一會兒。"
      ],
      en: [
        "The competition ran in three divisions — F1, F2 and F3 — with problems spanning algebra, geometry, number theory and logical reasoning. Students worked independently against the clock; the hall was silent except for pens on paper, yet the thinking was anything but quiet.",
        "This year's problems included real-life contexts that asked students to apply mathematical models to genuine situations. Some worked and reworked geometry problems; others found a breakthrough in apparently unrelated clues. Every sheet of scratch paper held a trail of thought.",
        "Afterwards, teachers walked through several challenging problems and shared different approaches. Rankings matter, but what matters more is the willingness to step outside one's comfort zone and stay with a hard problem a little longer."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/math-competition-01.svg",
        caption: { zh: "初中數學比賽決賽現場，全神貫注。", en: "Finalists at the Junior Mathematics Competition, fully focused." }
      },
      {
        src: "assets/img/ph/math-competition-02.svg",
        caption: { zh: "題目投影在大屏幕上，全場只剩筆尖的聲音。", en: "With the problems on screen, only pens could be heard." }
      },
      {
        src: "assets/img/ph/math-competition-03.svg",
        caption: { zh: "同學在草稿紙上反覆推演。", en: "Students worked and reworked their solutions on scratch paper." }
      },
      {
        src: "assets/img/ph/math-competition-04.svg",
        caption: { zh: "老師即場講解解題思路。", en: "Teachers unpacked the solutions on the spot." }
      },
      {
        src: "assets/img/ph/math-competition-05.svg",
        caption: { zh: "同場較量，也是彼此學習。", en: "Competing side by side was also a way of learning together." }
      },
      {
        src: "assets/img/ph/math-competition-06.svg",
        caption: { zh: "賽後合照，每位參賽者都是贏家。", en: "A post-contest photo — every participant a winner." }
      }
    ]
  },
  {
    id: "career-week",
    category: "guidance",
    date: "2026-03-02",
    title: { zh: "生涯規劃週", en: "Career Planning Week" },
    subtitle: {
      zh: "把「未來」變成可以討論的現在",
      en: "Turning \"the future\" into something we can talk about today"
    },
    location: { zh: "學校禮堂及課室", en: "School Hall & Classrooms" },
    excerpt: {
      zh: "校友分享、興趣測驗與模擬面試，陪同學一步步認識自己、想像未來。",
      en: "Alumni stories, interest assessments and mock interviews helped students know themselves and imagine what's next."
    },
    body: {
      zh: [
        "生涯規劃不是一次就能完成的答案，而是一段持續探索的過程。今年的生涯規劃週邀請不同屆別的校友回到校園，分享升學選擇、大學生活與職場經驗，讓同學看見多條不同的路徑。",
        "活動設有興趣測驗、能力盤點與模擬面試。同學在導師引導下整理自己的強項與喜好，也練習如何介紹自己、回應問題。有人第一次發現，原來自己對某些領域的熱情比想像中更深。",
        "一對一諮詢時段，同學把升學壓力、選科猶豫與對未來的迷惘說出來。導師沒有給標準答案，而是陪著一起拆解問題，找到下一步可以行動的方向。"
      ],
      en: [
        "Career planning is not an answer to be completed once, but an ongoing process of exploration. This year's Career Planning Week invited alumni from different cohorts back to campus to share their study choices, university life and workplace experience, showing students that there are many paths.",
        "The programme included interest assessments, strengths mapping and mock interviews. With guidance from mentors, students organised their strengths and preferences, and practised introducing themselves and responding to questions. Some discovered a passion deeper than they had imagined.",
        "During one-on-one sessions, students spoke openly about study pressure, doubts over subject choices and uncertainty about the future. Mentors offered no standard answers; instead, they helped break the questions down and find one next step to take."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/career-week-01.svg",
        caption: { zh: "生涯規劃週開幕，攤位排滿好奇的同學。", en: "Career Planning Week opened with curious students lining the booths." }
      },
      {
        src: "assets/img/ph/career-week-02.svg",
        caption: { zh: "校友分享升學與職涯經驗。", en: "Alumni shared their study and career journeys." }
      },
      {
        src: "assets/img/ph/career-week-03.svg",
        caption: { zh: "同學透過測驗認識自己的興趣與強項。", en: "Assessments helped students recognise their interests and strengths." }
      },
      {
        src: "assets/img/ph/career-week-04.svg",
        caption: { zh: "模擬面試練習，讓未來更有準備。", en: "Mock interviews made the future feel a little more prepared." }
      },
      {
        src: "assets/img/ph/career-week-05.svg",
        caption: { zh: "導師一對一解答，為迷惘的腳步指路。", en: "One-on-one sessions helped point the way forward." }
      },
      {
        src: "assets/img/ph/career-week-06.svg",
        caption: { zh: "把問題寫下來，就是把方向找出來。", en: "Writing questions down is already finding a direction." }
      }
    ]
  },
  {
    id: "subject-selection",
    category: "guidance",
    date: "2026-02-07",
    title: { zh: "F3 選科講解會（親子專場）", en: "F3 Subject Selection Talk (Parent Session)" },
    subtitle: {
      zh: "選科這一步，一起好好走",
      en: "Choosing electives, together"
    },
    location: { zh: "學校禮堂", en: "School Hall" },
    excerpt: {
      zh: "老師介紹選修科目與升學方向，家長與同學並肩討論，為下一步做好準備。",
      en: "Teachers introduced elective subjects and pathways, while parents and students talked through the next step side by side."
    },
    body: {
      zh: [
        "F3 是初中階段的重要轉折點，選科不只關乎未來兩年的學習，也與升學方向息息相關。講解會特別設為親子專場，希望家長與同學能在同一張桌子上，理解彼此的期待與考慮。",
        "老師逐一介紹各選修科目的課程內容、評核方式與銜接路徑，也分享過往同學的選科經驗。家長最關心的是出路與負擔，同學則在興趣與能力之間尋找平衡，現場的提問真實而具體。",
        "會後，不少家庭留下來與老師個別交流。選科沒有標準答案，但當資訊清楚、溝通坦誠，這一步就能走得更踏實。"
      ],
      en: [
        "F3 marks an important turning point in junior secondary. Subject selection shapes not only the next two years of study but also future pathways. The talk was designed as a parent-and-student session so that families could sit at the same table and understand each other's hopes and concerns.",
        "Teachers introduced each elective's content, assessment and progression routes, and shared past students' experiences. Parents focused on pathways and workload; students looked for a balance between interest and ability. The questions from the floor were honest and specific.",
        "Afterwards, many families stayed for individual conversations with teachers. There are no standard answers in subject selection, but clear information and open conversation make the next step a more grounded one."
      ]
    },
    photos: [
      {
        src: "assets/img/ph/subject-selection-01.svg",
        caption: { zh: "F3 選科講解會（親子專場）在家長與同學的期待中開始。", en: "The F3 subject selection talk began with parents and students eager to learn." }
      },
      {
        src: "assets/img/ph/subject-selection-02.svg",
        caption: { zh: "老師介紹不同選修科目的特色與出路。", en: "Teachers introduced the character and pathways of each elective." }
      },
      {
        src: "assets/img/ph/subject-selection-03.svg",
        caption: { zh: "家長與同學一起討論未來方向。", en: "Parents and students discussed the road ahead together." }
      },
      {
        src: "assets/img/ph/subject-selection-04.svg",
        caption: { zh: "問答環節，現場互動熱烈。", en: "The Q&A session sparked lively exchange." }
      },
      {
        src: "assets/img/ph/subject-selection-05.svg",
        caption: { zh: "會後仍有不少家庭留下來請教老師。", en: "After the talk, many families stayed to ask more questions." }
      },
      {
        src: "assets/img/ph/subject-selection-06.svg",
        caption: { zh: "選科這一步，一起好好走。", en: "Choosing electives — a step taken together." }
      }
    ]
  }
];
