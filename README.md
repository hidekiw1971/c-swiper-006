# compornent（共通部品）

## イメージ画像
`swiper`を使用して`slide & zoomOut`を表現する。
- chrome
<img width="394" alt="image" src="https://user-images.githubusercontent.com/99580997/166153040-42a89936-140e-429c-869b-5a362950c56f.png">
<img width="781" alt="image" src="https://user-images.githubusercontent.com/99580997/166153060-6376fed8-58b9-41e2-aaaa-795e924ee88c.png">
<img width="781" alt="image" src="https://user-images.githubusercontent.com/99580997/166153074-4ff05ea3-f910-46c0-a9af-3c9961bf723e.png">


- safari
<img width="1326" alt="image" src="https://user-images.githubusercontent.com/99580997/166153106-fd8fe59d-14f4-4380-a940-4e5ae97a20fd.png">


## 概要

- ｘｘｘ
- https://www.notion.so/000_web-component-index-c4b399010bf342e9b4e2ed516cf9c730

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- xxx

## 注意事項
- 同一ページ内で複数の`swiper`を使用するケースを想定し、以下のクラスの詳細化を行う。
- `<div class="swiper-container swiper01">`
- `<div class="slide-img swiper01-img">`
- `swiper__wrap`を追加して中央合わせしておかないと、レスポンシブ時に表示崩れが発生します。
- cssは`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">`4.5系を使用。
- jsは`<script src="https://code.jquery.com/jquery-3.6.0.js"></script>`を使用。

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> `swiper` をコピペ。

## w3c html チェック結果

- https://validator.w3.org/nu/
- <img width="885" alt="image" src="https://user-images.githubusercontent.com/99580997/166153767-edaf6427-c73e-466c-b9da-6647703c3836.png">
- 何故かファビコンを認識しないので、エラーとなってる。ファビコンだけなので問題なしとする。


## w3c css チェック結果

- https://jigsaw.w3.org/css-validator/
- <img width="851" alt="image" src="https://user-images.githubusercontent.com/99580997/166153793-81faa34e-42eb-4f31-8b2c-51a0815f7a4c.png">


## portfolio url:

- https://c-0063.wtb.cfbx.jp/

## 参考にしたサイト

- Swiper+CSSのみ！ズームアップしながらフェードインで切り替わるスライダーの実装方法
- https://wemo.tech/2961
- 【CSS3】Animate.cssを使って簡単にアニメーションを実装する。
- http://bashalog.c-brains.jp/14/07/17-095900.php
- CSSアニメーション 入門
- https://tinyurl.com/y5lbuh28

## 更新履歴

- 2022/5/1 やっと表示崩れが解消した。

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
