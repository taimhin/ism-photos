# 澳門慈幼中學 · 活動照片

一個以「青春活力」為視覺方向的校園活動照片網站，支援中英雙語、活動分類、關鍵字搜尋、活動介紹頁與照片燈箱。網站為純靜態 HTML / CSS / JavaScript，可直接部署到 GitHub Pages。

## 網站內容

- **首頁**：主視覺、精選活動、主題分類、相簿快照、關於平台
- **活動總覽**：依年度與主題篩選、關鍵字搜尋，分為 2526／2627
- **活動詳情**：活動介紹、日期地點、照片集、前後活動導覽
- **完整相簿**：所有照片的瀑布流排版、搜尋與燈箱放大
- **關於**：平台理念、數據一覽、照片授權聯絡方式
- **中英雙語**：右上角按鈕切換中文 / English

目前收錄 8 個活動、44 張版面示意圖（網站設計為可持續新增活動）：

| 活動 ID | 年度 | 活動名稱 | 主題 |
| --- | --- | --- | --- |
| `reclamation-talk` | 2526 | 填海講座 | 專題講座 |
| `maritime-talk` | 2526 | 航海講座 | 專題講座 |
| `bamboo-craft` | 2526 | F3 搭棚工藝 | 文化傳承 |
| `math-week` | 2526 | 數學週 | 學術 |
| `chinese-culture` | 2526 | 愛國愛澳中華文化推廣活動 | 文化傳承 |
| `math-competition` | 2526 | 初中數學比賽 | 學術 |
| `career-week` | 2526 | 生涯規劃週 | 升學與生涯 |
| `subject-selection` | 2526 | F3 選科講解會（親子專場） | 升學與生涯 |

活動頁的年度分頁由 `assets/js/data.js` 的 `SCHOOL_YEARS` 控制：

```js
const SCHOOL_YEARS = ["2526", "2627"];
```

新增 2627 活動時，在該活動物件加入 `year: "2627"`，它就會自動出現在 2627 分頁；未有活動的年度會顯示「活動照片準備中」。

## 換上真實照片

1. 在 `photos/` 下按活動 ID 建立資料夾，例如：
   ```
   photos/
     math-week/
       01.jpg
       02.jpg
     bamboo-craft/
       01.jpg
   ```
   建議先壓縮照片（長邊 1600–2000px、每張 300–800KB），網站載入會更順。

2. 打開 `assets/js/data.js`，找到該活動的 `photos` 陣列，把 `src` 換成真實照片路徑，並修改中英文說明：
   ```js
   {
     id: "math-week",
     year: "2526",
     // ...
     photos: [
       {
         src: "photos/math-week/01.jpg",
         caption: {
           zh: "數學遊蹤開始，同學在校園尋找解題線索。",
           en: "The maths trail begins as students hunt for clues around campus."
         }
       }
     ]
   }
   ```
   陣列長度可自由增減；首張照片會自動成為活動封面。

3. 重新整理網頁即可。照片數量、分類數字、統計數字都會自動更新。

> 佔位圖放在 `assets/img/ph/`，由 `tools/generate_placeholders.py` 產生，不需要時可整批刪除。

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
  img/logo.svg             網站標誌
  img/ph/                  版面示意圖（可替換）
photos/                    真實照片放這裡
tools/generate_placeholders.py
```

---

以鏡頭記錄校園 · Salesian School Macau
