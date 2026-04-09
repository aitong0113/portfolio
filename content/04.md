---
title: InnerSoul 實戰｜UI 狀態設計：用 loading、empty、error 讓畫面更穩定
date: "2026-04-07"
description: 從 Diary 與播放功能的實作經驗出發，整理讓畫面穩定的 UI 狀態設計方式
tags: [React, UI State, Frontend]
---

這篇是 InnerSoul 實戰系列的第 3 篇。

前兩篇我已經先處理了播放器與 Diary 的資料流。這一篇則是把視角再往畫面層收一點，整理當資料進到 UI 之後，loading、empty、error 這些狀態應該怎麼被穩定表達。

## 問題背景

在 InnerSoul 專案中，我在實作 Diary 與播放相關功能時，慢慢意識到一件事：

畫面不穩定的問題，很多時候不是來自 UI 元件本身，而是來自狀態沒有被清楚定義。

例如：

- API loading 時畫面閃動
- 空資料與錯誤狀態混在一起
- 不同頁面對狀態的處理方式不一致

一開始看起來像是畫面細節沒有補齊，但後來我發現，這些問題其實都指向同一件事：

**UI 狀態沒有被當成一個獨立層來設計。**

也因為這樣，我開始重新整理畫面狀態的拆法，試著把 loading、empty、error 抽成一組可預測的狀態模型。

## 核心思考：先定義畫面有哪些狀態

這個轉變其實和前幾篇文章的脈絡很接近。

前面我在寫播放器資料流、Diary 資料流和會員權限時，慢慢建立的是「資料怎麼流動」的觀念。

而這一篇更像是往下收一層，開始處理：

**當資料進到畫面之後，UI 要怎麼穩定地回應不同狀態。**

所以我現在在做這種頁面時，不會先急著寫 JSX，而是先問自己：

這個畫面可能會有哪些狀態？

最基本通常會有這幾個：

- loading
- empty
- error
- success

如果先把這幾個狀態想清楚，後面的 render 其實就會簡單很多。

例如：

```js
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

但資料本身還不夠，真正給畫面用的狀態通常會再整理成：

```js
const hasError = !!error;
const hasData = Array.isArray(data) ? data.length > 0 : !!data;
const isEmpty = !loading && !hasError && !hasData;
```

這樣 UI 吃到的就不只是原始資料，而是整理過的狀態。

如果要更接近我在 InnerSoul 裡的寫法，我會比較像這樣拆：

```jsx
function DiaryListPage() {
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const fetchDiaries = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await api.get("/diaries");

        if (!active) return;

        setDiaries(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        if (!active) return;

        setError(err);
        setDiaries([]);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchDiaries();

    return () => {
      active = false;
    };
  }, []);

  const hasError = !!error;
  const isEmpty = !loading && !hasError && diaries.length === 0;

  if (loading) return <DiaryListSkeleton />;
  if (hasError) return <ErrorState message="日記載入失敗" />;
  if (isEmpty) return <EmptyState title="目前還沒有日記" />;

  return <DiaryList diaries={diaries} />;
}
```

這段比較像實際專案會注意的點：

- request 開始前先重置 error
- request 失敗時同步清空舊資料
- component unmount 後避免繼續 setState
- UI 最後只吃整理過的狀態

在 Diary 頁面裡，這種拆法很重要。因為日記不是只有「有資料」或「沒資料」，還可能同時牽涉：

- 載入中
- 目前沒有資料
- API 失敗
- 今天可以寫，但還沒寫

如果這些狀態沒有先分開，畫面就很容易出現誤導。

---

## loading、empty、error 要互斥

我現在會把這種畫面理解成一個很輕量的狀態切換。

意思是同一個時間點，主要畫面只應該處在其中一種狀態。

例如：

```jsx
if (loading) return <LoadingState />;
if (hasError) return <ErrorState />;
if (isEmpty) return <EmptyState />;

return <SuccessState data={data} />;
```

這樣做的好處很直接：

- 畫面不會互相打架
- 狀態切換邏輯清楚
- 後續維護時比較不容易漏條件

如果不這樣拆，最常看到的就是 loading、empty、error 一起擠在同一段 JSX 裡，最後誰先顯示都不確定。

如果頁面再複雜一點，我會連狀態命名都先抽出來，讓條件更清楚：

```js
const uiState = {
  isLoading: loading,
  hasError: !!error,
  isEmpty: !loading && !error && list.length === 0,
  isReady: !loading && !error && list.length > 0,
};
```

這樣做的好處是，當你後面要加上 retry、filter、pagination 時，不用再回頭拆一大串 JSX。

---

## 不要把所有條件都塞進 JSX

很多人一開始很容易寫成這樣：

```jsx
return (
  <div>
    {loading ? (
      <Spinner />
    ) : error ? (
      <ErrorMessage />
    ) : data?.length ? (
      <List data={data} />
    ) : (
      <EmptyState />
    )}
  </div>
);
```

這種寫法不是不能用，但只要畫面再複雜一點，就會開始失控。

我現在會更傾向先把狀態整理出來，再讓 JSX 保持單純：

```jsx
if (loading) return <Spinner />;
if (hasError) return <ErrorMessage />;
if (isEmpty) return <EmptyState />;

return <List data={data} />;
```

這樣 JSX 的責任很清楚，就是「根據狀態顯示對應畫面」。

有些情況我也會把畫面拆成明確的 state component：

```jsx
function ArticlePanel({ articles, loading, error }) {
  const hasError = !!error;
  const isEmpty = !loading && !hasError && articles.length === 0;

  if (loading) return <ArticlePanelLoading />;
  if (hasError) return <ArticlePanelError error={error} />;
  if (isEmpty) return <ArticlePanelEmpty />;

  return <ArticlePanelList articles={articles} />;
}
```

這種拆法在工程上很實用，因為：

- 每個 state component 可以獨立調整
- 視覺與邏輯責任比較好分開
- 之後測試也更容易寫

---

## 為什麼這件事會影響畫面穩定性

因為很多時候使用者覺得畫面怪，不是真的因為設計不好，而是狀態切換不穩。

例如：

- request 還沒完成就先出現 empty
- API 失敗後還留著上一筆資料
- loading 結束時沒有正確進入 success 或 empty

這些小地方都會讓畫面看起來不可信。

所以我現在會把 UI 狀態當成一個需要先被設計的層，而不是等到畫面寫完才補判斷。

這也是我在 InnerSoul 做實戰時很有感的一點。

播放器、Diary、會員權限，表面上看起來是三個不同主題，但它們最後都會回到同一個問題：

**畫面到底要如何穩定地表達狀態。**

---

## 我後來的做法

我現在通常會先決定：

- 哪些是原始資料
- 哪些是 UI 狀態
- 哪些狀態應該互斥

這樣做之後，component 的結構會明顯變穩。

不只畫面比較好讀，後面改需求時也比較不容易牽一髮動全身。

我覺得這件事很像在替畫面建立規則。

規則一旦清楚，UI 就不容易亂。

---

## 結語

前端畫面穩不穩，很多時候不在於你用了多少元件，而在於狀態有沒有被拆清楚。

loading、empty、error 這些看起來只是小事，但它們其實決定了畫面是否可信、是否容易維護。

在 InnerSoul 的這段實作裡，我越來越確定：

先想狀態，再想畫面，畫面才會穩。

因為只有當 UI 狀態被設計清楚，畫面才會真的穩定。

## 系列收束

當資料流與 UI 狀態都拆清楚之後，下一步就是把商業規則真正接進來。

下一篇我會談會員權限如何整合播放與日記功能限制，讓前端不只是能顯示資料，而是能把功能限制也穩定地納進同一套資料流裡。