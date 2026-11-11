/* =========================================================
   澳門慈幼中學 · 活動照片
   Activity content — edit titles, dates, captions and photo
   paths here when you add real photos.
   ========================================================= */

const CATEGORIES = [
  {
    "id": "academic",
    "zh": "學術",
    "en": "Academic",
    "tagline": {
      "zh": "課堂之外的知識冒險",
      "en": "Learning beyond the classroom"
    },
    "color": "#1c5cf0",
    "soft": "#e8efff",
    "icon": "book"
  },
  {
    "id": "guidance",
    "zh": "升學與生涯",
    "en": "Guidance",
    "tagline": {
      "zh": "為下一步找到方向",
      "en": "Finding the way forward"
    },
    "color": "#ff5d44",
    "soft": "#ffe9e5",
    "icon": "compass"
  },
  {
    "id": "culture",
    "zh": "文化傳承",
    "en": "Culture",
    "tagline": {
      "zh": "把手藝與傳統接住",
      "en": "Keeping craft and tradition alive"
    },
    "color": "#d18a00",
    "soft": "#fff4dc",
    "icon": "lantern"
  },
  {
    "id": "talks",
    "zh": "專題講座",
    "en": "Talks",
    "tagline": {
      "zh": "讓世界走進禮堂",
      "en": "Bringing the world into the hall"
    },
    "color": "#0fa97f",
    "soft": "#e2f8f1",
    "icon": "mic"
  },
  {
    "id": "sports",
    "zh": "體育",
    "en": "Sports",
    "tagline": {
      "zh": "在汗水中並肩作戰",
      "en": "Side by side, in sweat and spirit"
    },
    "color": "#ff8a3d",
    "soft": "#fff0e3",
    "icon": "trophy"
  },
  {
    "id": "arts",
    "zh": "藝術",
    "en": "Arts",
    "tagline": {
      "zh": "讓才華被看見",
      "en": "Where talent takes the stage"
    },
    "color": "#8b5cf6",
    "soft": "#f1ebff",
    "icon": "music"
  },
  {
    "id": "campus",
    "zh": "校園生活",
    "en": "Campus",
    "tagline": {
      "zh": "一起走過的日常",
      "en": "Everyday life, shared"
    },
    "color": "#0e8792",
    "soft": "#e2f6f7",
    "icon": "school"
  }
];

const SCHOOL_YEARS = ["2526", "2627"];

const ACTIVITIES = [
  {
    "category": "sports",
    "date": "2026-05-22",
    "title": {
      "zh": "F3 班際競賽",
      "en": "F3 Inter-class Competition"
    },
    "subtitle": {
      "zh": "為班級榮譽，一起拼盡全力",
      "en": "Giving everything for the class"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "F3 班際競賽結合速度、默契與團隊合作，同學在接力與挑戰項目中互相打氣。",
      "en": "The F3 inter-class competition combined speed, teamwork and strategy, with students cheering each other through every challenge."
    },
    "body": {
      "zh": [
        "F3 班際競賽結合速度、默契與團隊合作，同學在接力與挑戰項目中全力以赴，場邊的加油聲此起彼落。",
        "比賽讓不同班級的同學互相較量，也讓大家在合作中建立默契。勝負之外，最重要的是一起為同一個目標努力的過程。"
      ],
      "en": [
        "The F3 inter-class competition combined speed, teamwork and strategy. Students gave their all in relay races and challenges while cheers echoed around the hall.",
        "Classes competed against one another, but also built a stronger sense of teamwork along the way. Beyond the result, what mattered most was working toward the same goal together."
      ]
    },
    "id": "class-competition",
    "year": "2526",
    "photos": [
      {
        "src": "photos/class-competition/01.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/02.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/03.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/04.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/05.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/06.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/07.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/08.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/09.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/10.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/11.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/12.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/13.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/14.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/15.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/16.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/17.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/18.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/19.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/20.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/21.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/22.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/23.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/24.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/25.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/26.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/27.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/28.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/29.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/30.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/31.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/32.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/33.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/34.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/35.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/36.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/37.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/38.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      },
      {
        "src": "photos/class-competition/39.jpg",
        "caption": {
          "zh": "F3 班際競賽",
          "en": "F3 Inter-class Competition"
        }
      }
    ]
  },
  {
    "category": "academic",
    "date": "2026-05-21",
    "title": {
      "zh": "F3 行政人員入班講解新課程",
      "en": "F3 New Curriculum Briefing"
    },
    "subtitle": {
      "zh": "認識課程變化，規劃學習方向",
      "en": "Understanding what's changing, planning what's next"
    },
    "location": {
      "zh": "F3 課室",
      "en": "F3 Classrooms"
    },
    "excerpt": {
      "zh": "行政人員走進 F3 課室，講解新課程安排與學習要求，並即場解答同學疑問。",
      "en": "Administrators visited F3 classrooms to explain the new curriculum and answer students' questions on the spot."
    },
    "body": {
      "zh": [
        "行政人員走進 F3 課室，向同學講解新課程的科目安排、學習要求與評核方式，讓大家對接下來的學習有更清楚的掌握。",
        "同學在問答環節提出關於選科、功課與考試的疑問，老師逐一回應。及早了解課程變化，有助大家規劃自己的學習節奏。"
      ],
      "en": [
        "Administrators visited F3 classrooms to explain the new curriculum's subject arrangements, learning requirements and assessment methods, giving students a clearer picture of what lies ahead.",
        "During the Q&A, students raised questions about subject choices, homework and examinations, and teachers responded one by one. Understanding the changes early helps everyone plan their own learning rhythm."
      ]
    },
    "id": "new-curriculum",
    "year": "2526",
    "photos": [
      {
        "src": "photos/new-curriculum/01.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/02.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/03.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/04.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/05.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/06.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      },
      {
        "src": "photos/new-curriculum/07.jpg",
        "caption": {
          "zh": "F3 行政人員入班講解新課程",
          "en": "F3 New Curriculum Briefing"
        }
      }
    ]
  },
  {
    "category": "sports",
    "date": "2026-05-13",
    "title": {
      "zh": "體育週",
      "en": "Sports Week"
    },
    "subtitle": {
      "zh": "動起來，讓校園充滿活力",
      "en": "Get moving — campus in motion"
    },
    "location": {
      "zh": "學校禮堂及操場",
      "en": "School Hall & Playground"
    },
    "excerpt": {
      "zh": "體育週設有多個運動挑戰站，同學在比賽與遊戲中鍛鍊身體，也為班級互相打氣。",
      "en": "Sports Week featured a range of activity stations where students built fitness, took on challenges and cheered for their classes."
    },
    "body": {
      "zh": [
        "體育週在校園設置多個運動挑戰站，從體能測試到趣味競技，讓同學在遊戲中活動身體，也在合作中互相鼓勵。",
        "同學輪流挑戰不同項目，場邊的加油聲與笑聲不斷。體育週不只是比賽，更是一個讓大家放下課本、一起動起來的機會。"
      ],
      "en": [
        "Sports Week set up a variety of activity stations across campus, from fitness tests to fun challenges, encouraging students to move and support one another.",
        "Students rotated through the stations amid constant cheers and laughter. More than a competition, Sports Week was a chance to put down the textbooks and get moving together."
      ]
    },
    "id": "sports-week",
    "year": "2526",
    "photos": [
      {
        "src": "photos/sports-week/01.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/02.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/03.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/04.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/05.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/06.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/07.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/08.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/09.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/10.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/11.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/12.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/13.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/14.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/15.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/16.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/17.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      },
      {
        "src": "photos/sports-week/18.jpg",
        "caption": {
          "zh": "體育週",
          "en": "Sports Week"
        }
      }
    ]
  },
  {
    "category": "arts",
    "date": "2026-05-10",
    "title": {
      "zh": "音樂週",
      "en": "Music Week"
    },
    "subtitle": {
      "zh": "讓歌聲，成為校園的底色",
      "en": "Let music fill the campus"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "音樂週為同學提供舞台，獨唱、合唱與樂器演出輪番登場，掌聲與歌聲充滿校園。",
      "en": "Music Week gave students a stage for solos, duets, choir and instrumental performances, filling the campus with song and applause."
    },
    "body": {
      "zh": [
        "音樂週為同學提供展現才華的舞台，獨唱、合唱與樂器演出輪番登場。台下觀眾隨着旋律拍手，校園一時充滿歌聲。",
        "對不少同學來說，這是第一次在台上表演。緊張與興奮交織，但當掌聲響起，所有練習都有了回應。"
      ],
      "en": [
        "Music Week gave students a stage to share their talents, with solos, duets, choir and instrumental performances one after another. The audience clapped along, and the campus was soon filled with song.",
        "For many students, it was their first time performing on stage. Nerves and excitement mixed, but when the applause came, every rehearsal felt worthwhile."
      ]
    },
    "id": "music-week",
    "year": "2526",
    "photos": [
      {
        "src": "photos/music-week/01.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/02.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/03.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/04.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/05.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/06.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/07.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/08.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/09.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/10.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/11.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/12.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/13.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/14.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/15.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/16.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/17.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/18.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/19.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/20.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/21.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/22.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/23.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/24.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/25.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/26.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/27.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/28.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/29.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/30.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/31.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/32.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/33.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/34.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/35.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/36.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/37.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/38.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/39.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/40.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/41.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/42.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/43.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/44.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/45.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/46.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/47.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/48.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/49.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/50.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/51.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/52.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/53.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      },
      {
        "src": "photos/music-week/54.jpg",
        "caption": {
          "zh": "音樂週",
          "en": "Music Week"
        }
      }
    ]
  },
  {
    "category": "talks",
    "date": "2026-05-09",
    "title": {
      "zh": "省會長講話",
      "en": "Provincial Superior's Address"
    },
    "subtitle": {
      "zh": "在聆聽中，思考成長的方向",
      "en": "Listening, reflecting, growing"
    },
    "location": {
      "zh": "學校操場",
      "en": "School Grounds"
    },
    "excerpt": {
      "zh": "省會長向師生發表講話，分享勉勵與期許，鼓勵同學在學習與生活中保持熱情。",
      "en": "The Provincial Superior addressed students and staff, offering encouragement and inviting everyone to keep growing with purpose."
    },
    "body": {
      "zh": [
        "省會長向師生發表講話，分享對學習、成長與服務的期許，鼓勵同學在日常中保持熱情與責任感。",
        "師生在校園中安靜聆聽，講話結束後以掌聲致謝。短短的分享，為新一年的校園生活留下值得思考的方向。"
      ],
      "en": [
        "The Provincial Superior addressed students and staff, sharing hopes for learning, growth and service, and encouraging everyone to keep a sense of passion and responsibility in daily life.",
        "The school community listened quietly and applauded at the end. In just a short address, everyone was left with something worth reflecting on for the year ahead."
      ]
    },
    "id": "provincial-talk",
    "year": "2526",
    "photos": [
      {
        "src": "photos/provincial-talk/01.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      },
      {
        "src": "photos/provincial-talk/02.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      },
      {
        "src": "photos/provincial-talk/03.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      },
      {
        "src": "photos/provincial-talk/04.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      },
      {
        "src": "photos/provincial-talk/05.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      },
      {
        "src": "photos/provincial-talk/06.jpg",
        "caption": {
          "zh": "省會長講話",
          "en": "Provincial Superior's Address"
        }
      }
    ]
  },
  {
    "id": "career-week",
    "year": "2526",
    "category": "guidance",
    "date": "2026-05-09",
    "title": {
      "zh": "生涯規劃週",
      "en": "Career Planning Week"
    },
    "subtitle": {
      "zh": "把「未來」變成可以討論的現在",
      "en": "Turning \"the future\" into something we can talk about today"
    },
    "location": {
      "zh": "學校禮堂及課室",
      "en": "School Hall & Classrooms"
    },
    "excerpt": {
      "zh": "校友分享、興趣測驗與模擬面試，陪同學一步步認識自己、想像未來。",
      "en": "Alumni stories, interest assessments and mock interviews helped students know themselves and imagine what's next."
    },
    "body": {
      "zh": [
        "生涯規劃不是一次就能完成的答案，而是一段持續探索的過程。今年的生涯規劃週邀請不同屆別的校友回到校園，分享升學選擇、大學生活與職場經驗，讓同學看見多條不同的路徑。",
        "活動設有興趣測驗、能力盤點與模擬面試。同學在導師引導下整理自己的強項與喜好，也練習如何介紹自己、回應問題。有人第一次發現，原來自己對某些領域的熱情比想像中更深。",
        "一對一諮詢時段，同學把升學壓力、選科猶豫與對未來的迷惘說出來。導師沒有給標準答案，而是陪著一起拆解問題，找到下一步可以行動的方向。"
      ],
      "en": [
        "Career planning is not an answer to be completed once, but an ongoing process of exploration. This year's Career Planning Week invited alumni from different cohorts back to campus to share their study choices, university life and workplace experience, showing students that there are many paths.",
        "The programme included interest assessments, strengths mapping and mock interviews. With guidance from mentors, students organised their strengths and preferences, and practised introducing themselves and responding to questions. Some discovered a passion deeper than they had imagined.",
        "During one-on-one sessions, students spoke openly about study pressure, doubts over subject choices and uncertainty about the future. Mentors offered no standard answers; instead, they helped break the questions down and find one next step to take."
      ]
    },
    "photos": [
      {
        "src": "photos/career-week/01.jpg",
        "caption": {
          "zh": "生涯規劃週",
          "en": "Career Planning Week"
        }
      },
      {
        "src": "photos/career-week/02.jpg",
        "caption": {
          "zh": "生涯規劃週",
          "en": "Career Planning Week"
        }
      },
      {
        "src": "photos/career-week/03.jpg",
        "caption": {
          "zh": "生涯規劃週",
          "en": "Career Planning Week"
        }
      },
      {
        "src": "photos/career-week/04.jpg",
        "caption": {
          "zh": "生涯規劃週",
          "en": "Career Planning Week"
        }
      }
    ]
  },
  {
    "id": "reclamation-talk",
    "year": "2526",
    "category": "talks",
    "date": "2026-05-09",
    "title": {
      "zh": "填海講座",
      "en": "Land Reclamation Talk"
    },
    "subtitle": {
      "zh": "從地圖上看見澳門的成長",
      "en": "Seeing how Macau grew, one shoreline at a time"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "城市腳下的土地從何而來？一場講座，帶同學回看海岸線的變化與城市發展的選擇。",
      "en": "Where does the ground beneath the city come from? A talk tracing Macau's shifting shoreline and the choices behind its growth."
    },
    "body": {
      "zh": [
        "澳門是一座與海爭地的城市。講座從舊地圖與歷史照片出發，帶同學認識填海工程如何一步步改變海岸線，也如何塑造今日的街道、社區與生活空間。",
        "講者以具體案例說明規劃、工程與環境之間的平衡，並提醒我們：每一寸新土地得來不易，城市發展的同時，也要思考自然、歷史與下一代的需要。",
        "問答環節中，同學圍繞土地利用、生態影響與未來規劃踴躍發問，把課本上的地理概念，連結到每天走過的街道。"
      ],
      "en": [
        "Macau is a city that has grown out of the sea. Starting from old maps and archival photographs, the talk traced how land reclamation reshaped the coastline — and with it, the streets, neighbourhoods and living spaces we know today.",
        "Speakers walked through real projects to explain the balance between planning, engineering and the environment, reminding us that every inch of new land comes at a cost, and that growth must also consider nature, history and the needs of the next generation.",
        "During the Q&A, students asked about land use, ecological impact and future planning, connecting textbook geography to the streets they walk every day."
      ]
    },
    "photos": [
      {
        "src": "photos/reclamation-talk/01.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      },
      {
        "src": "photos/reclamation-talk/02.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      },
      {
        "src": "photos/reclamation-talk/03.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      },
      {
        "src": "photos/reclamation-talk/04.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      },
      {
        "src": "photos/reclamation-talk/05.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      },
      {
        "src": "photos/reclamation-talk/06.jpg",
        "caption": {
          "zh": "填海講座",
          "en": "Land Reclamation Talk"
        }
      }
    ]
  },
  {
    "category": "sports",
    "date": "2026-05-09",
    "title": {
      "zh": "初中跳繩比賽",
      "en": "Junior High Jump Rope Competition"
    },
    "subtitle": {
      "zh": "繩影翻飛，跳出節奏",
      "en": "Finding rhythm in every jump"
    },
    "location": {
      "zh": "學校球場",
      "en": "School Court"
    },
    "excerpt": {
      "zh": "初中跳繩比賽在學校球場舉行，參賽同學在繩影與掌聲中挑戰速度與默契。",
      "en": "The junior high jump rope competition took place on the school court, with students testing their speed and rhythm amid cheers."
    },
    "body": {
      "zh": [
        "初中跳繩比賽在學校球場舉行，參賽同學在繩影與掌聲中挑戰速度、節奏與默契。",
        "看似簡單的跳繩，其實講究體力與專注。比賽讓同學在輕鬆的氣氛中運動，也為校園添上活力。"
      ],
      "en": [
        "The junior high jump rope competition took place on the school court, where students tested their speed, rhythm and coordination amid cheers.",
        "Jumping rope may look simple, but it demands stamina and focus. The competition got students moving in a relaxed atmosphere and brought extra energy to campus."
      ]
    },
    "id": "jump-rope",
    "year": "2526",
    "photos": [
      {
        "src": "photos/jump-rope/01.jpg",
        "caption": {
          "zh": "初中跳繩比賽",
          "en": "Junior High Jump Rope Competition"
        }
      },
      {
        "src": "photos/jump-rope/02.jpg",
        "caption": {
          "zh": "初中跳繩比賽",
          "en": "Junior High Jump Rope Competition"
        }
      }
    ]
  },
  {
    "category": "campus",
    "date": "2026-05-09",
    "title": {
      "zh": "中小學復活節祈禱會",
      "en": "Easter Prayer Gathering"
    },
    "subtitle": {
      "zh": "在祈禱中，一起迎接希望",
      "en": "Welcoming hope together"
    },
    "location": {
      "zh": "學校操場",
      "en": "School Grounds"
    },
    "excerpt": {
      "zh": "中小學師生齊聚校園，透過祈禱、歌詠與分享，一同迎接復活節的盼望。",
      "en": "Primary and secondary students gathered on campus for prayer, song and reflection as they welcomed the hope of Easter."
    },
    "body": {
      "zh": [
        "中小學師生齊聚校園，透過祈禱、歌詠與分享，一同迎接復活節的盼望。",
        "在安靜的時刻裡，同學沉澱心情，也想起彼此守望的重要。祈禱會為校園帶來一份平和與力量。"
      ],
      "en": [
        "Primary and secondary students and teachers gathered on campus for prayer, song and sharing as they welcomed the hope of Easter.",
        "In the quiet moments, students paused to reflect and remembered the importance of looking out for one another. The gathering brought a sense of peace and strength to the school."
      ]
    },
    "id": "easter-prayer",
    "year": "2526",
    "photos": [
      {
        "src": "photos/easter-prayer/01.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/02.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/03.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/04.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/05.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/06.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      },
      {
        "src": "photos/easter-prayer/07.jpg",
        "caption": {
          "zh": "中小學復活節祈禱會",
          "en": "Easter Prayer Gathering"
        }
      }
    ]
  },
  {
    "id": "subject-selection",
    "year": "2526",
    "category": "guidance",
    "date": "2026-05-09",
    "title": {
      "zh": "F3 選科講解會（親子專場）",
      "en": "F3 Subject Selection Talk (Parent Session)"
    },
    "subtitle": {
      "zh": "選科這一步，一起好好走",
      "en": "Choosing electives, together"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "老師介紹選修科目與升學方向，家長與同學並肩討論，為下一步做好準備。",
      "en": "Teachers introduced elective subjects and pathways, while parents and students talked through the next step side by side."
    },
    "body": {
      "zh": [
        "F3 是初中階段的重要轉折點，選科不只關乎未來兩年的學習，也與升學方向息息相關。講解會特別設為親子專場，希望家長與同學能在同一張桌子上，理解彼此的期待與考慮。",
        "老師逐一介紹各選修科目的課程內容、評核方式與銜接路徑，也分享過往同學的選科經驗。家長最關心的是出路與負擔，同學則在興趣與能力之間尋找平衡，現場的提問真實而具體。",
        "會後，不少家庭留下來與老師個別交流。選科沒有標準答案，但當資訊清楚、溝通坦誠，這一步就能走得更踏實。"
      ],
      "en": [
        "F3 marks an important turning point in junior secondary. Subject selection shapes not only the next two years of study but also future pathways. The talk was designed as a parent-and-student session so that families could sit at the same table and understand each other's hopes and concerns.",
        "Teachers introduced each elective's content, assessment and progression routes, and shared past students' experiences. Parents focused on pathways and workload; students looked for a balance between interest and ability. The questions from the floor were honest and specific.",
        "Afterwards, many families stayed for individual conversations with teachers. There are no standard answers in subject selection, but clear information and open conversation make the next step a more grounded one."
      ]
    },
    "photos": [
      {
        "src": "photos/subject-selection/01.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/02.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/03.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/04.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/05.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/06.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/07.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/08.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/09.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/10.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/11.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/12.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/13.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/14.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/15.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/16.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/17.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/18.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/19.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/20.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/21.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/22.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      },
      {
        "src": "photos/subject-selection/23.jpg",
        "caption": {
          "zh": "F3 選科講解會（親子專場）",
          "en": "F3 Subject Selection Talk (Parent Session)"
        }
      }
    ]
  },
  {
    "category": "guidance",
    "date": "2026-05-06",
    "title": {
      "zh": "F3 選科講解會",
      "en": "F3 Subject Selection Talk"
    },
    "subtitle": {
      "zh": "為下一步，認識每個選擇",
      "en": "Getting to know every choice ahead"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "老師向 F3 同學介紹選修科目、課程要求與升學方向，協助大家為選科做好準備。",
      "en": "Teachers introduced elective subjects, course requirements and pathways to help F3 students prepare for subject selection."
    },
    "body": {
      "zh": [
        "F3 選科講解會由老師向同學介紹各選修科目的課程內容、評核方式與升學銜接，幫助大家理解不同選擇帶來的學習方向。",
        "同學細心聆聽，也在問答環節就課程要求與未來出路踴躍發問。選科是重要的決定，但只要有清楚的資訊與充分的討論，就能更踏實地走出下一步。"
      ],
      "en": [
        "Teachers introduced the content, assessment and progression routes of each elective, helping F3 students understand where different choices can lead.",
        "Students listened closely and asked about course requirements and future pathways during the Q&A. Subject selection is an important decision, but clear information and open discussion make the next step a more grounded one."
      ]
    },
    "id": "subject-selection-talk",
    "year": "2526",
    "photos": [
      {
        "src": "photos/subject-selection-talk/01.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/02.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/03.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/04.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/05.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/06.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/07.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/08.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/09.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/10.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/11.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/12.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/13.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      },
      {
        "src": "photos/subject-selection-talk/14.jpg",
        "caption": {
          "zh": "F3 選科講解會",
          "en": "F3 Subject Selection Talk"
        }
      }
    ]
  },
  {
    "category": "culture",
    "date": "2026-04-30",
    "title": {
      "zh": "F3 搭棚工藝",
      "en": "Bamboo Scaffolding Workshop"
    },
    "subtitle": {
      "zh": "一根竹、一條繩，撐起城市的手藝",
      "en": "Bamboo, rope, and a craft that holds up the city"
    },
    "location": {
      "zh": "課室",
      "en": "Classroom"
    },
    "excerpt": {
      "zh": "講者向同學介紹竹棚的結構、材料與工藝智慧，讓大家認識這門澳門常見卻少人細看的傳統手藝。",
      "en": "A guest speaker introduced the structure, materials and wisdom of bamboo scaffolding — a familiar Macau craft that few stop to examine."
    },
    "body": {
      "zh": [
        "搭棚是澳門街頭常見的景象，卻很少人真正走近細看。講者從竹材的選擇、棚架的結構與綁紮方法說起，帶同學認識這門以經驗與手感累積而成的手藝。",
        "講座配合圖片與影片示範，讓同學了解搭棚工程背後的力學原理與安全考量。雖然未能親手搭棚，但同學對這門傳統工藝有了更立體的理解。"
      ],
      "en": [
        "Bamboo scaffolding is a familiar sight on Macau's streets, yet few of us stop to look closely. The speaker began with bamboo selection, frame structure and tying methods, introducing a craft built on experience and a sensitive pair of hands.",
        "Photographs and video demonstrations helped students understand the mechanics and safety considerations behind scaffolding work. Though they did not build a scaffold themselves, students came away with a fuller picture of this traditional craft."
      ]
    },
    "id": "bamboo-craft",
    "year": "2526",
    "photos": [
      {
        "src": "photos/bamboo-craft/01.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/02.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/03.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/04.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/05.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/06.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/07.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/08.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/09.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/10.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/11.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/12.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/13.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/14.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/15.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/16.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/17.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/18.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/19.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/20.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/21.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      },
      {
        "src": "photos/bamboo-craft/22.jpg",
        "caption": {
          "zh": "F3 搭棚工藝",
          "en": "Bamboo Scaffolding Workshop"
        }
      }
    ]
  },
  {
    "id": "chinese-culture",
    "year": "2526",
    "category": "culture",
    "date": "2026-04-16",
    "title": {
      "zh": "愛國愛澳中華文化推廣活動",
      "en": "Chinese Culture Day"
    },
    "subtitle": {
      "zh": "在遊戲與體驗中，認識中華文化",
      "en": "Discovering Chinese culture through games and experiences"
    },
    "location": {
      "zh": "學校操場及禮堂",
      "en": "School Grounds & Hall"
    },
    "excerpt": {
      "zh": "透過文化攤位、問答遊戲與表演，讓同學在互動中認識中華文化。",
      "en": "Cultural booths, quizzes and performances brought Chinese culture to life through hands-on participation."
    },
    "body": {
      "zh": [
        "文化推廣活動以攤位與互動遊戲為主，同學在校園中穿梭，透過配對、問答與展示認識中華文化的不同面向。",
        "活動讓同學在輕鬆的氣氛中交流與學習，也讓傳統文化以更貼近生活的方式走進校園。"
      ],
      "en": [
        "The Chinese Culture Day centred on booths and interactive games. Students moved around campus, exploring different aspects of Chinese culture through matching games, quizzes and displays.",
        "The relaxed atmosphere encouraged conversation and learning, bringing traditional culture into campus life in a way that felt close to students' everyday experience."
      ]
    },
    "photos": [
      {
        "src": "photos/chinese-culture/01.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/02.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/03.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/04.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/05.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/06.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/07.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/08.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/09.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/10.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/11.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/12.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/13.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/14.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/15.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/16.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/17.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/18.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/19.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/20.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/21.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/22.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/23.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/24.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/25.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/26.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/27.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/28.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/29.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/30.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/31.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/32.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/33.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/34.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/35.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/36.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/37.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/38.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/39.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/40.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/41.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/42.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/43.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/44.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/45.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/46.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      },
      {
        "src": "photos/chinese-culture/47.jpg",
        "caption": {
          "zh": "愛國愛澳中華文化推廣活動",
          "en": "Chinese Culture Day"
        }
      }
    ]
  },
  {
    "id": "maritime-talk",
    "year": "2526",
    "category": "talks",
    "date": "2026-04-03",
    "title": {
      "zh": "航海講座",
      "en": "Maritime Talk"
    },
    "subtitle": {
      "zh": "把海圖攤開，讓好奇心啟航",
      "en": "Unfolding the chart, setting curiosity sail"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "從澳門港口到遠洋航線，講者帶同學認識海上工作的日常與航海科技。",
      "en": "From Macau's port to ocean routes, a look at life at sea and the technology of navigation."
    },
    "body": {
      "zh": [
        "澳門自古與海相伴，港口是城市與世界連結的起點。講座由本地航運的發展說起，帶同學認識碼頭運作、航道管理與船舶種類，也談到航海工作背後的專業與紀律。",
        "講者分享在海上工作的日常：長時間離岸、團隊合作、天氣變化與突發情況的應對。同學最感興趣的，是航海儀器如何結合傳統經驗與現代科技，在茫茫大海中確認位置與方向。",
        "問答環節中，有人問及航海科技與氣候變化，也有人關心入行途徑。講座讓同學看見，海洋不只是風景，更是一條值得探索的專業道路。"
      ],
      "en": [
        "Macau has always lived alongside the sea; its port is where the city meets the world. The talk began with the story of local shipping, introducing students to terminal operations, channel management and vessel types — and the professionalism and discipline behind a life at sea.",
        "Speakers described the daily realities of maritime work: long periods away from shore, teamwork, changing weather and responding to the unexpected. Students were especially fascinated by how navigation instruments combine traditional experience with modern technology to fix a position on the open sea.",
        "In the Q&A, questions ranged from navigation technology and climate change to how to enter the industry. The talk showed that the ocean is not just a view — it is a professional path worth exploring."
      ]
    },
    "photos": [
      {
        "src": "photos/maritime-talk/01.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/02.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/03.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/04.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/05.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/06.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/07.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/08.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/09.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/10.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/11.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      },
      {
        "src": "photos/maritime-talk/12.jpg",
        "caption": {
          "zh": "航海講座",
          "en": "Maritime Talk"
        }
      }
    ]
  },
  {
    "category": "academic",
    "date": "2026-04-03",
    "title": {
      "zh": "F2 數學比賽",
      "en": "F2 Mathematics Competition"
    },
    "subtitle": {
      "zh": "思路交鋒，台上較量",
      "en": "A meeting of quick minds on stage"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "F2 數學比賽以台上問答形式進行，參賽同學在限時內拆解難題，台下同學熱烈打氣。",
      "en": "The F2 competition took the form of a stage quiz, with contestants solving problems against the clock and classmates cheering them on."
    },
    "body": {
      "zh": [
        "F2 數學比賽以台上問答形式進行，參賽同學在限時內拆解題目，台下同學則以掌聲與歡呼為班級打氣。",
        "題目結合課堂知識與生活情境，考驗同學的運算、推理與臨場反應。無論勝負，大家都從比賽中看見數學的趣味。"
      ],
      "en": [
        "The F2 Mathematics Competition took the form of a stage quiz. Contestants solved problems against the clock while classmates cheered them on from the audience.",
        "Questions blended classroom knowledge with everyday situations, testing calculation, reasoning and quick thinking. Win or lose, everyone came away with a fresh sense of how much fun mathematics can be."
      ]
    },
    "id": "math-competition-f2",
    "year": "2526",
    "photos": [
      {
        "src": "photos/math-competition-f2/01.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/02.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/03.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/04.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/05.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/06.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/07.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/08.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/09.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/10.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/11.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/12.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/13.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/14.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/15.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/16.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/17.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/18.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/19.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/20.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/21.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/22.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f2/23.jpg",
        "caption": {
          "zh": "F2 數學比賽",
          "en": "F2 Mathematics Competition"
        }
      }
    ]
  },
  {
    "category": "academic",
    "date": "2026-04-03",
    "title": {
      "zh": "F1 數學比賽",
      "en": "F1 Mathematics Competition"
    },
    "subtitle": {
      "zh": "在解題中建立自信",
      "en": "Building confidence, one problem at a time"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "F1 同學透過班際解題挑戰，在緊張又熱鬧的氣氛中比拼數學實力。",
      "en": "F1 students tested their maths skills in a lively inter-class problem-solving challenge."
    },
    "body": {
      "zh": [
        "F1 數學比賽以班際形式進行，題目涵蓋算術、圖形與邏輯推理。同學在限時內專注解題，為班級爭取分數。",
        "比賽不只是比拼速度，也考驗冷靜與策略。賽後老師講解題目，讓同學從每一道難題中帶走新的思路。"
      ],
      "en": [
        "The F1 Mathematics Competition ran as an inter-class challenge, with questions covering arithmetic, shapes and logical reasoning. Students focused hard against the clock to earn points for their class.",
        "It was a test of speed as well as calm and strategy. After the contest, teachers walked through the problems so that every student could take away a new way of thinking."
      ]
    },
    "id": "math-competition-f1",
    "year": "2526",
    "photos": [
      {
        "src": "photos/math-competition-f1/01.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/02.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/03.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/04.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/05.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/06.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/07.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/08.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/09.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/10.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/11.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/12.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/13.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/14.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/15.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/16.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/17.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/18.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/19.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/20.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/21.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/22.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/23.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/24.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/25.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/26.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/27.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition-f1/28.jpg",
        "caption": {
          "zh": "F1 數學比賽",
          "en": "F1 Mathematics Competition"
        }
      }
    ]
  },
  {
    "id": "math-week",
    "year": "2526",
    "category": "academic",
    "date": "2026-04-02",
    "title": {
      "zh": "數學週",
      "en": "Mathematics Week"
    },
    "subtitle": {
      "zh": "數字走出課本，笑聲走進校園",
      "en": "Numbers leave the textbook, laughter fills the campus"
    },
    "location": {
      "zh": "校園及禮堂",
      "en": "Campus & School Hall"
    },
    "excerpt": {
      "zh": "數學遊蹤、解謎攤位與班際速算挑戰，讓同學在遊戲中發現數學的樂趣。",
      "en": "A maths trail, puzzle booths and inter-class challenges turned numbers into a campus-wide adventure."
    },
    "body": {
      "zh": [
        "數學週以「玩中學」為主題，設有數學遊蹤、邏輯解謎站及班際速算挑戰。同學在校園各處尋找線索，運用課堂所學破解難題，也在合作中發現數學並不只是紙上的計算。",
        "攤位遊戲把公式與圖形變成手上的挑戰：有人用七巧板拼出圖案，有人與時間賽跑完成速算，也有人在解謎站前反覆嘗試，直到答案出現的那一刻一起歡呼。",
        "壓軸的班際比賽把氣氛推上高峰。掌聲、倒數與歡呼此起彼落，讓整個禮堂都感受到數學的熱度。原來，數字也可以很好玩。"
      ],
      "en": [
        "With the theme \"learning through play\", Mathematics Week featured a campus maths trail, logic puzzle stations and an inter-class speed challenge. Students hunted for clues around school, applied what they had learned in class, and discovered that maths is far more than calculations on paper.",
        "Booth games turned formulas and shapes into hands-on challenges: assembling tangram figures, racing the clock on mental arithmetic, or persevering at a puzzle station until the answer finally clicked — and the whole group cheered.",
        "The inter-class final brought the energy to its peak. Applause, countdowns and cheers filled the hall, and the whole school felt the heat of mathematics. Numbers, it turns out, can be a lot of fun."
      ]
    },
    "photos": [
      {
        "src": "photos/math-week/01.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/02.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/03.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/04.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/05.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/06.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/07.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/08.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/09.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/10.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/11.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/12.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/13.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/14.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/15.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/16.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/17.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/18.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/19.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/20.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/21.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/22.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/23.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/24.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/25.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/26.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/27.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/28.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/29.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/30.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/31.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/32.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/33.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/34.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/35.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/36.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/37.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/38.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/39.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/40.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/41.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/42.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/43.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      },
      {
        "src": "photos/math-week/44.jpg",
        "caption": {
          "zh": "數學週",
          "en": "Mathematics Week"
        }
      }
    ]
  },
  {
    "category": "academic",
    "date": "2026-04-02",
    "title": {
      "zh": "F3 數學比賽",
      "en": "F3 Mathematics Competition"
    },
    "subtitle": {
      "zh": "在限時挑戰中，磨練思考",
      "en": "Sharpening the mind against the clock"
    },
    "location": {
      "zh": "學校禮堂",
      "en": "School Hall"
    },
    "excerpt": {
      "zh": "F3 同學在禮堂同場較量，於限時內拆解代數、幾何與邏輯題目，展現平日所學。",
      "en": "F3 students competed in the hall, solving algebra, geometry and logic problems against the clock."
    },
    "body": {
      "zh": [
        "F3 數學比賽在禮堂舉行，題目涵蓋代數、幾何與邏輯推理。參賽同學在限時內獨立作答，現場只聽見筆尖劃過紙面的聲音。",
        "賽後老師講解幾道具挑戰性的題目，分享不同的解題思路。名次以外，更重要的是同學願意在難題面前多堅持一會兒。"
      ],
      "en": [
        "The F3 Mathematics Competition took place in the school hall, with problems spanning algebra, geometry and logical reasoning. Students worked independently against the clock; the only sound was pens moving across paper.",
        "Afterwards, teachers walked through several challenging problems and shared different approaches. Beyond the rankings, what mattered most was the willingness to stay with a hard problem a little longer."
      ]
    },
    "id": "math-competition",
    "year": "2526",
    "photos": [
      {
        "src": "photos/math-competition/01.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/02.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/03.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/04.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/05.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/06.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/07.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/08.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/09.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/10.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/11.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/12.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/13.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/14.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/15.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/16.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/17.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/18.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/19.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/20.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/21.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/22.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/23.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/24.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/25.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/26.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/27.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/28.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/29.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/30.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/31.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/32.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/33.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/34.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/35.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/36.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/37.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/38.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/39.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/40.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/41.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/42.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/43.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/44.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/45.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      },
      {
        "src": "photos/math-competition/46.jpg",
        "caption": {
          "zh": "F3 數學比賽",
          "en": "F3 Mathematics Competition"
        }
      }
    ]
  }
];
