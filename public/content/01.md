---
title: InnerSoul 實戰｜播放器資料流設計：用 Redux 建立可預測狀態
date: "2026-04-06"
description: 透過 Redux 建立可預測的播放狀態管理，並整合訂閱邏輯與 UI 行為
tags: [React, Redux, State Management]
---

這篇是 InnerSoul 實戰系列的第 1 篇。

這組文章會從播放器資料流開始，往後延伸到 Diary 的資料流、UI 狀態設計，以及會員權限整合，整理我在專案裡如何把前端從功能實作慢慢推進到系統設計。

## 問題背景

在 **InnerSoul** 專案中，播放器不只是單純的 UI，而是一個 **跨頁共享的核心功能**。

一開始如果使用 `useState` 分散管理播放狀態，很快就會遇到幾個問題：

- **播放狀態在不同頁面之間不同步**  
- **播放邏輯分散在多個 component 中**  
- **切歌、循環等行為難以統一管理**  

這些問題本質上不是 UI 的問題，而是 **資料流沒有被好好設計**。

當資料流不一致時，UI 很容易開始失控。

---

## 解法

我後來將播放器的核心狀態集中到 **Redux**，讓所有播放相關資料都有 **單一來源（Single Source of Truth）**。

```js
import {
  configureStore
} from "@reduxjs/toolkit";
import playerReducer from "./slices/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

// 播放器的核心狀態整理如下：
const initialState = {
  songList: [],
  currentIndex: 0,
  isPlaying: false,
  currentListId: null,
  currentListName: "",
  repeatType: "none",
};
```

這樣的設計讓播放邏輯不再依賴 UI，而是集中在 state 中統一管理。

---



## 架構圖

播放器的資料流可以簡化為：

``` 
UI → dispatch → reducer → state → UI
```


實際流程會是：

- 使用者點擊播放按鈕  
- `dispatch(toggle)`  
- Redux 更新 `isPlaying`  
- UI 根據 state 控制 audio 播放或暫停  

這樣的好處是：**所有狀態變化都可以被追蹤，行為也變得可預測**。

---

## 我的實作（InnerSoul）

在播放器中，我將 **切歌與播放規則集中在 slice 中處理**，而不是分散在 component。

例如 `next` 的邏輯：

```js
next(state) {
  if (!state.songList.length) return;

  const { currentIndex, songList, repeatType } = state;

  // 單曲循環
  if (repeatType === "single") {
    state.isPlaying = true;
    return;
  }

  const nextIndex = currentIndex + 1;

  // 正常切換
  if (nextIndex < songList.length) {
    state.currentIndex = nextIndex;
    state.isPlaying = true;
    return;
  }

  // 列表循環
  if (repeatType === "list") {
    state.currentIndex = 0;
    state.isPlaying = true;
    return;
  }

  // 播放結束
  state.isPlaying = false;
}
```

這樣的設計讓播放規則可以集中管理，而不是散落在各個按鈕邏輯中。



---


## 商業邏輯整合


播放器中還包含一個重要需求：**試聽限制**。

免費用戶只能播放前三首，因此我將這段邏輯抽離成 **獨立判斷**，而不是寫在 UI 中：

```js
const canPlayIndex = (index) => {
  const plan = authStore.getUserPlan();
  return plan === "pro" || index < 3;
};
```

在播放前先檢查是否可播放，不符合就阻擋並提示升級。

這樣的設計讓「播放控制」與「商業規則」可以分開處理，而不是耦合在 UI 中。

帶來的好處是：

- **商業規則可以集中管理**  
- **UI 不需要理解訂閱邏輯**  
- **未來調整限制時影響範圍小**  

---

## 收穫

這段播放器的實作，讓我對 React 的理解有一個很明顯的轉變。

我開始意識到：

**React 的核心其實不是 UI，而是資料流。**

過去我會比較直覺地從畫面去思考功能，但在這次實作中，我開始先思考：

**資料應該如何流動，UI 再去對應這個結果。**

當資料流清楚時：

- UI 會自然變簡單  
- 狀態變化可以被追蹤  
- 系統更容易維護  

同時，也讓我更確定 **「狀態集中」的重要性**，避免邏輯分散在不同 component。

---

## 結語

播放器看起來只是單一功能，但實際上是一個 **狀態設計與資料流管理的問題**。

透過 Redux，我將 **播放狀態、播放規則與商業邏輯集中在同一個資料流中**，讓整個系統變得可預測且容易維護。

這也讓我在這個專案中開始從：

**「寫功能」轉變成「設計系統」。**

---

這篇文章整理了我在 InnerSoul 中設計播放器資料流的過程，也讓我更清楚 **前端架構與狀態管理之間的關係**。

## 系列收束

如果把這組系列往後看，播放器資料流其實只是起點。

下一篇我會把同樣的思考帶到 Diary 功能，開始處理 API、State 與 UI 之間要怎麼對齊，讓畫面不只是能動，而是真的穩定。