---
title: InnerSoul 實戰｜Diary 資料流設計：從 API 到 UI 的狀態整合
date: "2026-04-07"
description: 如何設計前端資料流，讓 API、State 與 UI 保持一致
tags: [React, Data Flow, API Design]
---

這篇是 InnerSoul 實戰系列的第 2 篇。

延續前一篇播放器資料流的整理，這次我把焦點放到 Diary 功能，開始處理 API、State 與 UI 怎麼對齊，讓畫面背後的資料流更完整。


## 問題背景

在 InnerSoul 中，日記功能不只是單純的表單，而是包含：

- 月曆顯示心情
- 點選日期載入日記
- 顯示不同狀態，例如空資料、已寫、未來日期、訂閱限制

一開始在實作時，我遇到的問題不是畫面，而是：

---

## **資料怎麼流動？**

如果沒有先設計資料流，很容易出現：

- UI 顯示錯誤，例如日期切換但內容沒更新
- API 呼叫時機混亂
- 狀態彼此覆蓋，例如 loading、empty、data

這些問題本質上不是功能太難，而是 **資料沒有被好好管理**。

---

## 核心思考：資料應該長什麼樣子？

我先不寫 UI，而是先拆出這個頁面需要的資料：

```js
const [year, setYear] = useState(...);
const [month, setMonth] = useState(...);
const [moodByDay, setMoodByDay] = useState({});
const [selectedKey, setSelectedKey] = useState(...);

const [diary, setDiary] = useState(null);
const [loading, setLoading] = useState(false);
```

這裡其實在做一件事：

把 UI 拆成「資料狀態」。

例如：

- 月曆對應 year、month、moodByDay
- 當日內容對應 selectedKey、diary
- UI 狀態對應 loading、hasDiary

當資料結構清楚後，UI 其實只是「顯示結果」。

---

## 資料流設計

這個頁面的資料流我拆成兩條主線。

### ① 月曆資料（整個月）

```js
useEffect(() => {
  const fetchMonthMood = async () => {
    const res = await api.get(`/diaries?...`);
    setMoodByDay(map);
  };

  fetchMonthMood();
}, [userId, year, month]);
```

重點是：

- 依賴是 year、month
- 作用是更新整個月的心情狀態

### ② 單日資料（點擊某一天）

```js
useEffect(() => {
  const fetchDiary = async () => {
    setLoading(true);

    const res = await api.get(`/diaries?...`);
    setDiary(res.data[0] || null);

    setLoading(false);
  };

  fetchDiary();
}, [userId, selectedKey]);
```

這一段的重點是：

- 依賴是 selectedKey
- 作用是更新當天日記內容

---

## 關鍵設計：狀態分離

我在這裡刻意把狀態拆開，而不是混在一起：

```js
const hasDiary = !!diary;
const isFutureSelected = selectedKey > todayKey;
const showSubscribe = isFree && isLimited && !hasDiary;
```

這樣 UI 就可以很清楚：

```js
if (loading) return ...;
if (hasDiary) return ...;
if (isFutureSelected) return ...;
if (showSubscribe) return ...;
```

UI 不再自己判斷邏輯，而是依賴 state。

這件事非常關鍵。

---

## UI 只是資料的映射

最後 render 的地方其實很單純：

```jsx
diaryContent={
  !contentReady
    ? ""
    : hasDiary
    ? diary?.diaryContent
    : isFutureSelected
    ? <DiaryWriteBlocked />
    : showSubscribe
    ? <SubscribeNotice />
    : <EmptyDiaryState />
}
```

這段的重點不是 JSX，而是：

**UI = State 的結果**

而不是在 UI 裡面塞滿判斷邏輯。

---

## 一個很關鍵的轉變

這個功能讓我開始意識到一件事：

前端不是在「拿資料」，而是在「設計資料流」。

以前我會覺得 API 來什麼我就用什麼，但現在我會先思考：

UI 需要什麼 → State 怎麼設計 → API 怎麼對應

順序完全反過來。

---

## 收穫

這段 Diary 的實作讓我更清楚：

- API 不應該直接綁 UI
- State 應該是 UI 的唯一依據
- 資料流比畫面更重要

當資料流設計清楚後：

- UI 變得穩定
- bug 明顯變少
- 邏輯也更容易維護

---

## 結語

日記功能看起來只是 CRUD，但實際上是一個完整的資料流問題。

透過這次實作，我開始用更工程的方式去思考前端：

不是「怎麼畫畫面」，而是「資料怎麼流動」。

這也讓我在這個專案中，從：

會串 API → 變成能設計資料流的工程師。

---

這篇文章整理了我在 InnerSoul 中設計 Diary 功能的過程，也讓我更清楚 React 中 API、State 與 UI 之間的關係。

## 系列收束

從播放器到 Diary，我開始把資料流拆得更完整。

下一篇我會再往下收一層，處理 loading、empty、error 這些 UI 狀態，讓畫面在不同情境下也能穩定表達，而不是只在資料正常時看起來合理。