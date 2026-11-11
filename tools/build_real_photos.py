# -*- coding: utf-8 -*-
"""Build the final activity data + web-optimised photos from the school archive."""
from pathlib import Path
from PIL import Image, ImageOps
import json
import shutil
import time

ROOT = Path.cwd()
PLAN = Path(r"C:\Users\tai\AppData\Local\Temp\opencode\salesian-photo-plan")
BASE = Path(r"C:\Users\tai\Desktop\2526-慈幼中學-活動照片")
TARGET = ROOT / "photos"

existing = json.loads((PLAN / "existing.json").read_text(encoding="utf-8"))
selection = json.loads((PLAN / "selection.json").read_text(encoding="utf-8"))

COVERS = {
    "subject-selection": "IMG_0634.JPG",
    "subject-selection-talk": "IMG_0251.JPG",
    "math-competition": "IMG_8925.JPG",
    "bamboo-craft": "IMG_0035.JPG",
    "reclamation-talk": "IMG_0574.JPG",
    "maritime-talk": "IMG_9075.JPG",
    "class-competition": "IMG_2421.JPG",
    "new-curriculum": "IMG_2202.JPG",
    "math-competition-f2": "IMG_9127.JPG",
    "math-competition-f1": "IMG_9357.JPG",
    "sports-week": "IMG_1135.JPG",
    "math-week": "IMG_8102.JPG",
    "chinese-culture": "IMG_9646.JPG",
    "music-week": "IMG_0846.JPG",
    "provincial-talk": "IMG_0515.JPG",
    "jump-rope": "IMG_0563.JPG",
    "career-week": "IMG_0542.JPG",
    "easter-prayer": "IMG_0766.JPG",
}

# ---------------------------------------------------------------------------
# New / rewritten activity content (existing six keep their original copy)
# ---------------------------------------------------------------------------
NEW = {
    "subject-selection-talk": {
        "category": "guidance",
        "date": "2026-05-06",
        "title": {"zh": "F3 選科講解會", "en": "F3 Subject Selection Talk"},
        "subtitle": {"zh": "為下一步，認識每個選擇", "en": "Getting to know every choice ahead"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "math-competition-f1": {
        "category": "academic",
        "date": "2026-04-03",
        "title": {"zh": "F1 數學比賽", "en": "F1 Mathematics Competition"},
        "subtitle": {"zh": "在解題中建立自信", "en": "Building confidence, one problem at a time"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "math-competition-f2": {
        "category": "academic",
        "date": "2026-04-03",
        "title": {"zh": "F2 數學比賽", "en": "F2 Mathematics Competition"},
        "subtitle": {"zh": "思路交鋒，台上較量", "en": "A meeting of quick minds on stage"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "class-competition": {
        "category": "sports",
        "date": "2026-05-22",
        "title": {"zh": "F3 班際競賽", "en": "F3 Inter-class Competition"},
        "subtitle": {"zh": "為班級榮譽，一起拼盡全力", "en": "Giving everything for the class"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "new-curriculum": {
        "category": "academic",
        "date": "2026-05-21",
        "title": {"zh": "F3 行政人員入班講解新課程", "en": "F3 New Curriculum Briefing"},
        "subtitle": {"zh": "認識課程變化，規劃學習方向", "en": "Understanding what's changing, planning what's next"},
        "location": {"zh": "F3 課室", "en": "F3 Classrooms"},
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
        }
    },
    "sports-week": {
        "category": "sports",
        "date": "2026-05-13",
        "title": {"zh": "體育週", "en": "Sports Week"},
        "subtitle": {"zh": "動起來，讓校園充滿活力", "en": "Get moving — campus in motion"},
        "location": {"zh": "學校禮堂及操場", "en": "School Hall & Playground"},
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
        }
    },
    "music-week": {
        "category": "arts",
        "date": "2026-05-10",
        "title": {"zh": "音樂週", "en": "Music Week"},
        "subtitle": {"zh": "讓歌聲，成為校園的底色", "en": "Let music fill the campus"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "provincial-talk": {
        "category": "talks",
        "date": "2026-05-09",
        "title": {"zh": "省會長講話", "en": "Provincial Superior's Address"},
        "subtitle": {"zh": "在聆聽中，思考成長的方向", "en": "Listening, reflecting, growing"},
        "location": {"zh": "學校操場", "en": "School Grounds"},
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
        }
    },
    "jump-rope": {
        "category": "sports",
        "date": "2026-05-09",
        "title": {"zh": "初中跳繩比賽", "en": "Junior High Jump Rope Competition"},
        "subtitle": {"zh": "繩影翻飛，跳出節奏", "en": "Finding rhythm in every jump"},
        "location": {"zh": "學校球場", "en": "School Court"},
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
        }
    },
    "easter-prayer": {
        "category": "campus",
        "date": "2026-05-09",
        "title": {"zh": "中小學復活節祈禱會", "en": "Easter Prayer Gathering"},
        "subtitle": {"zh": "在祈禱中，一起迎接希望", "en": "Welcoming hope together"},
        "location": {"zh": "學校操場", "en": "School Grounds"},
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
        }
    },
    "math-competition": {
        "category": "academic",
        "date": "2026-04-02",
        "title": {"zh": "F3 數學比賽", "en": "F3 Mathematics Competition"},
        "subtitle": {"zh": "在限時挑戰中，磨練思考", "en": "Sharpening the mind against the clock"},
        "location": {"zh": "學校禮堂", "en": "School Hall"},
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
        }
    },
    "bamboo-craft": {
        "category": "culture",
        "date": "2026-04-30",
        "title": {"zh": "F3 搭棚工藝", "en": "Bamboo Scaffolding Workshop"},
        "subtitle": {"zh": "一根竹、一條繩，撐起城市的手藝", "en": "Bamboo, rope, and a craft that holds up the city"},
        "location": {"zh": "課室", "en": "Classroom"},
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
        }
    }
}

CAPTIONS = {
    "subject-selection": [
        {"zh": "講解會現場，家長與同學專心聆聽。", "en": "Parents and students listen closely at the briefing."},
        {"zh": "老師介紹選科資訊，家長不時記錄。", "en": "Teachers present subject information as parents take notes."},
        {"zh": "會後交流，家長與老師討論升學方向。", "en": "Families talk with teachers about pathways after the talk."}
    ],
    "subject-selection-talk": [
        {"zh": "老師向 F3 同學介紹各選修科目。", "en": "Teachers introduce the elective subjects to F3 students."},
        {"zh": "同學細心聆聽，了解課程要求。", "en": "Students listen closely to the course requirements."},
        {"zh": "問答環節，同學踴躍舉手提問。", "en": "Students raise their hands during the Q&A."}
    ],
    "math-competition": [
        {"zh": "比賽現場，同學全神貫注。", "en": "Students are fully focused during the competition."},
        {"zh": "參賽者細心思考，逐一拆解難題。", "en": "Contestants work carefully through each problem."},
        {"zh": "賽後合照，為努力留下紀錄。", "en": "A group photo after the contest captures the effort."}
    ],
    "math-competition-f2": [
        {"zh": "F2 參賽同學在台上準備應戰。", "en": "F2 contestants get ready on stage."},
        {"zh": "台下同學為班級熱烈打氣。", "en": "Classmates cheer from the audience."},
        {"zh": "比賽結束，參賽隊伍合照留念。", "en": "Teams pose for a photo after the competition."}
    ],
    "math-competition-f1": [
        {"zh": "F1 同學專注解答比賽題目。", "en": "F1 students focus on their competition problems."},
        {"zh": "限時之內，大家冷靜思考。", "en": "Working calmly against the clock."},
        {"zh": "賽後師生合照，記錄努力的一天。", "en": "Students and teachers gather for a photo after the contest."}
    ],
    "bamboo-craft": [
        {"zh": "講者介紹竹棚工藝的結構與特色。", "en": "The speaker introduces the structure of bamboo scaffolding."},
        {"zh": "同學專心聆聽，認識傳統搭棚技術。", "en": "Students learn about traditional scaffolding techniques."},
        {"zh": "活動結束，師生合照留念。", "en": "A group photo at the end of the activity."}
    ],
    "reclamation-talk": [
        {"zh": "講者以地圖解說填海與城市發展。", "en": "The speaker uses maps to explain reclamation and urban growth."},
        {"zh": "同學專心聆聽，思考土地與環境的關係。", "en": "Students reflect on the relationship between land and environment."},
        {"zh": "問答環節，同學踴躍舉手提問。", "en": "Students raise questions during the Q&A."}
    ],
    "maritime-talk": [
        {"zh": "講者分享航海工作與航運發展。", "en": "The speaker shares insights into maritime work and shipping."},
        {"zh": "同學對航海儀器與海上生活充滿好奇。", "en": "Students are curious about navigation instruments and life at sea."},
        {"zh": "活動結束，師生以掌聲感謝講者。", "en": "The audience thanks the speaker with a round of applause."}
    ],
    "class-competition": [
        {"zh": "班際競賽開始，同學全力以赴。", "en": "The inter-class competition begins with full effort."},
        {"zh": "隊友互相打氣，現場氣氛熱烈。", "en": "Teammates cheer each other on in a lively atmosphere."},
        {"zh": "比賽結束，班級合照留念。", "en": "Classes pose for photos after the competition."}
    ],
    "new-curriculum": [
        {"zh": "行政人員入班講解新課程安排。", "en": "Administrators explain the new curriculum in class."},
        {"zh": "同學細心聆聽，了解課程變化。", "en": "Students listen carefully to the changes ahead."},
        {"zh": "老師即場解答同學的疑問。", "en": "Teachers answer students' questions on the spot."}
    ],
    "sports-week": [
        {"zh": "體育週活動開始，同學挑戰不同項目。", "en": "Sports Week begins with a range of challenges."},
        {"zh": "同學全力以赴，場邊加油聲不斷。", "en": "Students give their all as cheers ring out."},
        {"zh": "活動結束，師生合照留念。", "en": "A group photo wraps up the day."}
    ],
    "math-week": [
        {"zh": "數學週攤位前，同學挑戰解題遊戲。", "en": "Students take on puzzle games at the Maths Week booths."},
        {"zh": "同學分組合作，一起破解難題。", "en": "Teams work together to crack the problems."},
        {"zh": "禮堂內氣氛熱烈，掌聲與歡呼不斷。", "en": "The hall is filled with applause and cheers."}
    ],
    "chinese-culture": [
        {"zh": "同學在攤位前體驗書法與傳統工藝。", "en": "Students try calligraphy and traditional crafts at the booths."},
        {"zh": "導師講解文化故事，大家細心聆聽。", "en": "Students listen as instructors share cultural stories."},
        {"zh": "活動結束，師生合照留住熱鬧的一天。", "en": "Teachers and students pose together at the end of the day."}
    ],
    "music-week": [
        {"zh": "音樂週舞台上，同學投入演出。", "en": "Students give an engaging performance on the Music Week stage."},
        {"zh": "台下的掌聲與歡呼此起彼落。", "en": "Applause and cheers rise from the audience."},
        {"zh": "演出結束，表演者與老師合照。", "en": "Performers and teachers pose for a photo after the show."}
    ],
    "provincial-talk": [
        {"zh": "省會長向師生講話，分享勉勵。", "en": "The Provincial Superior shares words of encouragement."},
        {"zh": "同學專心聆聽，現場氣氛莊重。", "en": "Students listen attentively in a solemn atmosphere."},
        {"zh": "講話結束，全場以掌聲致謝。", "en": "The community applauds at the end of the address."}
    ],
    "jump-rope": [
        {"zh": "跳繩比賽現場，同學全力以赴。", "en": "Students give their best at the jump rope competition."},
        {"zh": "繩影翻飛，場邊同學加油打氣。", "en": "Ropes spin as classmates cheer from the sidelines."},
        {"zh": "比賽結束，參賽同學合照留念。", "en": "Contestants pose for a photo after the event."}
    ],
    "career-week": [
        {"zh": "生涯規劃週攤位前，同學了解升學資訊。", "en": "Students explore pathways at the Career Week booths."},
        {"zh": "導師與同學交流，協助探索方向。", "en": "Mentors talk with students and help them explore directions."},
        {"zh": "活動結束，同學帶著新想法離開。", "en": "Students leave with new ideas and possibilities."}
    ],
    "easter-prayer": [
        {"zh": "中小學師生齊聚，參與復活節祈禱會。", "en": "Primary and secondary students gather for the Easter prayer."},
        {"zh": "同學安靜祈禱，現場氣氛平和。", "en": "Students pray quietly in a peaceful atmosphere."},
        {"zh": "祈禱會結束，師生有序離開會場。", "en": "The gathering ends and everyone leaves in an orderly way."}
    ],
}

# ---------------------------------------------------------------------------
# Build activity list
# ---------------------------------------------------------------------------
existing_by_id = {a["id"]: a for a in existing["activities"]}
all_ids = list(COVERS.keys())
missing = [i for i in all_ids if i not in selection]
if missing:
    raise SystemExit(f"Missing selection for: {missing}")

activities = []
for activity_id in all_ids:
    sel = selection[activity_id]
    selected_files = list(sel["files"])
    cover = COVERS[activity_id]
    if cover not in selected_files:
        raise SystemExit(f"Cover {cover} not in selection for {activity_id}")
    ordered = [cover] + [f for f in selected_files if f != cover]

    if activity_id in NEW:
        base = dict(NEW[activity_id])
    else:
        base = dict(existing_by_id[activity_id])

    base["id"] = activity_id
    base["year"] = "2526"
    base["date"] = sel["date"]
    base["photos"] = []
    pool = CAPTIONS[activity_id]
    for idx, filename in enumerate(ordered):
        caption = pool[idx % len(pool)]
        base["photos"].append({
            "src": f"photos/{activity_id}/{idx + 1:02d}.jpg",
            "caption": caption,
        })
    activities.append(base)

# newest first, then title for same date
activities.sort(key=lambda a: (a["date"], a["title"]["zh"]), reverse=True)

# ---------------------------------------------------------------------------
# Compress photos
# ---------------------------------------------------------------------------
print("Compressing photos...")
start = time.time()
for activity in activities:
    slug = activity["id"]
    src_folder = BASE / selection[slug]["folder"]
    out_dir = TARGET / slug
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    # cover first, then rest
    selected_files = [p.name for p in sorted([p for p in src_folder.iterdir() if p.suffix.lower() in {".jpg", ".jpeg"}])]
    cover = COVERS[slug]
    ordered = [cover] + [f for f in selected_files if f == cover or f in selection[slug]["files"] and f != cover]
    # ensure no unintended files: keep only selected set
    selected_set = set(selection[slug]["files"])
    ordered = [cover] + [f for f in selected_files if f in selected_set and f != cover]

    for idx, filename in enumerate(ordered, start=1):
        src = src_folder / filename
        dst = out_dir / f"{idx:02d}.jpg"
        with Image.open(src) as im:
            icc = im.info.get("icc_profile")
            im.draft("RGB", (1600, 1600))
            im = ImageOps.exif_transpose(im).convert("RGB")
            im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            im.save(dst, "JPEG", quality=80, optimize=True, progressive=True, icc_profile=icc)
    print(f"  {slug}: {len(ordered)} photos")

print(f"Compression done in {time.time() - start:.1f}s")

# ---------------------------------------------------------------------------
# Write data.js
# ---------------------------------------------------------------------------
categories = existing["categories"] + [
    {
        "id": "sports",
        "zh": "體育",
        "en": "Sports",
        "tagline": {"zh": "在汗水中並肩作戰", "en": "Side by side, in sweat and spirit"},
        "color": "#ff8a3d",
        "soft": "#fff0e3",
        "icon": "trophy",
    },
    {
        "id": "arts",
        "zh": "藝術",
        "en": "Arts",
        "tagline": {"zh": "讓才華被看見", "en": "Where talent takes the stage"},
        "color": "#8b5cf6",
        "soft": "#f1ebff",
        "icon": "music",
    },
    {
        "id": "campus",
        "zh": "校園生活",
        "en": "Campus",
        "tagline": {"zh": "一起走過的日常", "en": "Everyday life, shared"},
        "color": "#0e8792",
        "soft": "#e2f6f7",
        "icon": "school",
    },
]

header = """/* =========================================================
   澳門慈幼中學 · 活動照片
   Activity content — edit titles, dates, captions and photo
   paths here when you add real photos.
   ========================================================= */

"""
data_js = header
data_js += "const CATEGORIES = " + json.dumps(categories, ensure_ascii=False, indent=2) + ";\n\n"
data_js += 'const SCHOOL_YEARS = ["2526", "2627"];\n\n'
data_js += "const ACTIVITIES = " + json.dumps(activities, ensure_ascii=False, indent=2) + ";\n"

Path("assets/js/data.js").write_text(data_js, encoding="utf-8", newline="\n")

total_photos = sum(len(a["photos"]) for a in activities)
size_mb = sum(p.stat().st_size for p in TARGET.rglob("*.jpg")) / 1024 / 1024
print(f"Activities: {len(activities)}, photos: {total_photos}, web images: {size_mb:.1f} MB")
print("Data written: assets/js/data.js")
