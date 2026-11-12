# 澳門慈幼中學 · 活動照片

一個以「青春活力」為視覺方向的校園活動照片網站，支援中英雙語、活動分類、關鍵字搜尋、活動介紹頁與照片燈箱。網站為純靜態 HTML / CSS / JavaScript，可直接部署到 GitHub Pages。

## 網站內容

- **首頁**：主視覺、精選活動、主題分類、相簿快照
- **活動總覽**：依年度與主題篩選、關鍵字搜尋，分為 2526／2627
- **活動詳情**：活動標題、照片集、前後活動導覽（不顯示日期、地點或文字說明）
- **完整相簿**：所有照片的瀑布流排版、搜尋與燈箱放大；燈箱可直接下載單張照片
- **中英雙語**：右上角按鈕切換中文 / English

目前收錄 2526 年度 18 個活動、全部 402 張照片。桌面原圖不會上傳，網站只保留壓縮後的網頁版本：

| 活動 ID | 年度 | 活動名稱 | 主題 |
| --- | --- | --- | --- |
| `music-week` | 2526 | 音樂週 | 藝術 |
| `sports-week` | 2526 | 體育週 | 體育 |
| `class-competition` | 2526 | F3 班際競賽 | 體育 |
| `new-curriculum` | 2526 | F3 行政人員入班講解新課程 | 學術 |
| `provincial-talk` | 2526 | 省會長講話 | 專題講座 |
| `easter-prayer` | 2526 | 中小學復活節祈禱會 | 校園生活 |
| `subject-selection` | 2526 | F3 選科講解會（親子專場） | 升學與生涯 |
| `subject-selection-talk` | 2526 | F3 選科講解會 | 升學與生涯 |
| `bamboo-craft` | 2526 | F3 搭棚工藝 | 文化傳承 |
| `chinese-culture` | 2526 | 愛國愛澳中華文化推廣活動 | 文化傳承 |
| `math-competition-f2` | 2526 | F2 數學比賽 | 學術 |
| `math-competition-f1` | 2526 | F1 數學比賽 | 學術 |
| `math-competition` | 2526 | F3 數學比賽 | 學術 |
| `math-week` | 2526 | 數學週 | 學術 |
| `maritime-talk` | 2526 | 航海講座 | 專題講座 |
| `reclamation-talk` | 2526 | 填海講座 | 專題講座 |
| `career-week` | 2526 | 生涯規劃週 | 升學與生涯 |
| `jump-rope` | 2526 | 初中跳繩比賽 | 體育 |

活動頁的年度分頁由 `assets/js/data.js` 的 `SCHOOL_YEARS` 控制：

```js
const SCHOOL_YEARS = ["2526", "2627"];
```

新增 2627 活動時，在該活動物件加入 `year: "2627"`，它就會自動出現在 2627 分頁；未有活動的年度會顯示「活動照片準備中」。

## 新增或更換照片

1. 把照片壓縮後放入 `photos/<活動 ID>/`，例如：
   ```
   photos/
     music-week/
       01.jpg
       02.jpg
     sports-week/
       01.jpg
   ```
   建議長邊 1600px、JPEG 品質 80、每張約 150–300KB；上傳前請移除 EXIF（GPS 等位置資料）。

2. 打開 `assets/js/data.js`，找到該活動的 `photos` 陣列，更新 `src` 與中英文說明：
   ```js
   {
     id: "music-week",
     year: "2526",
     // ...
     photos: [
       {
         src: "photos/music-week/01.jpg",
         caption: {
           zh: "音樂週舞台上，同學投入演出。",
           en: "Students give an engaging performance on the Music Week stage."
         }
       }
     ]
   }
   ```
   陣列長度可自由增減；首張照片會自動成為活動封面。

3. 重新整理網頁即可。照片數量、分類數字、統計數字都會自動更新。

> 早期版面示意圖仍放在 `assets/img/ph/`，現已不被 `data.js` 引用；如不需要可整批刪除。
> `tools/build_real_photos.py` 是這次由桌面原圖批次產生網頁照片的腳本，內含本機路徑，只作參考。

## 本機預覽

```powershell
cd salesian-activity-gallery
python -m http.server 8000
```

打開 <http://localhost:8000/>。也可以直接雙擊 `index.html`，但建議用本機伺服器以確保字型與路徑正常。

## 部署到 GitHub Pages

專案已設定為靜態網站，推送到 GitHub 後在 repository 的 **Settings → Pages** 選擇 `main` 分支、`/ (root)` 即可。`.nojekyll` 已加入，避免 Jekyll 處理檔案。

```powershell
git add .
git commit -m "Build Salesian activity gallery"
git push
```

## 隱私提醒

這是一個**公開**網站。上傳包含學生、家長或教職員臉孔的照片前，請先確認學校政策與肖像權同意；如需限制瀏覽，可考慮改用需要登入的平台，或只公開已獲授權的照片。

## 專案結構

```
index.html                 網站外殼
assets/
  css/style.css            視覺與響應式版面
  js/data.js               活動、照片、分類資料（主要編輯位置）
  js/app.js                路由、雙語、搜尋、燈箱、互動
  img/logo.svg             舊網站標誌（備用）
  img/crest.png            澳門慈幼中學校徽
  img/ph/                  早期版面示意圖（現已停用）
photos/                    已壓縮的網站照片
tools/                     照片與版面示意圖產生工具
```

---

以鏡頭記錄校園 · Salesian School Macau
