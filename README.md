# 如何藉助GPT搭建微信小程式？
`我們接下來要利用<b>chaptGPT</b>來開發<b>微信小程式</b>!`

chaptGPT是一款神奇的代碼生成器，它可以讓你用最簡單的方式，創建出最精彩的小程式。 你只需要輸入你想要的功能和效果，chaptGPT就會為你生成合適的代碼，無論是登錄註冊頁面，還是後台伺服器，它都能輕鬆搞定，效果展示如下：

![image](https://github.com/11224109/Software_midterm/blob/main/1.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/2.png?raw=true)

<b>關於如何實現圖中展示的效果，讓我來給你詳細介紹一下吧：</b>
<li><b>登錄註冊頁面：</b>你只需要告訴chaptGPT你想要的頁面風格和佈局，比如簡約、清新、炫酷等，chaptGPT就會為你生成相應的代碼，讓你的頁面美觀和易用。</li>

![image](https://github.com/11224109/Software_midterm/blob/main/3.png?raw=true)

將代碼複製拷貝到微信小程序開發工具，運行效果如下：

![image](https://github.com/11224109/Software_midterm/blob/main/4.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/5.png?raw=true)

下面通過調整參數和屬性，來修改頁面的顏色、字體、大小、位置等，讓你的頁面更符合你的品味和喜好。 首先，我們讓chaptGPT幫我們添加一些樣式：

![image](https://github.com/11224109/Software_midterm/blob/main/6.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/7.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/8.png?raw=true)

我們來看一下效果：

![image](https://github.com/11224109/Software_midterm/blob/main/9.png?raw=true)
```
大家會發現標題的字體顏色和大小發生了變化，以及內部元件排列的樣式也發生了變化，比如“使用者名”元件和“請輸入使用者名”元件由垂直排列變成了水平排列，符合登入介面採用的布局樣式。

細心的小夥伴或許還會發現，最初生成的介面似乎帶有一些樣式效果，這是為什麼呢？

因為在微信小程序申存在全域樣式，被放置在app . wxss檔中，其中有一個預設的類為container，裡面初始化定義了一些樣式，利用chaptGPT生成WXML代碼時，在元件內給我們生成了這個類名，所以會帶有一些基本的樣式。 從這裡也能看出chaptGPT真的很厲害，這下小夥伴們應該明白了吧。
```

`如果對生成的樣式不喜歡，比如，輸入框的顏色。 那麼，這裡就需要我們簡單動一下小手指修改一下樣式就可以了。 我們可以在調整「輸入框顏色」樣式的代碼部分將元件的顏色改變就可以了。 類似的我們還可以進行其他的修改和調整，趕緊去嘗試一下吧！`


![image](https://github.com/11224109/Software_midterm/blob/main/10.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/11.png?raw=true)


如果有顯示其他語言的需要，那麼我們可以告訴chaptGPT修改成需要的語言，例如將中文修改成英文。

![image](https://github.com/11224109/Software_midterm/blob/main/12.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/13.png?raw=true)

來看一下效果吧。


![image](https://github.com/11224109/Software_midterm/blob/main/14.png?raw=true)



<li><b>登入註冊功能：</b>你只需要告訴chaptGPT你想要的登入註冊方式，比如手機號、郵箱、微信等，chaptGPT就會為你生成相應的代碼，讓你的功能完善和安全。 你還可以通過添加條件和邏輯，來實現更多的功能，比如驗證碼、密碼強度、用戶協定等，讓你的功能更豐富和人性化。</li>


![image](https://github.com/11224109/Software_midterm/blob/main/15.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/16.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/17.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/18.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/19.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/20.png?raw=true)




將代碼複製到微信開發工具中，點擊登入或註冊按鈕就會調用js中的事件函數來完成登入註冊相應的功能。 點擊登入和註冊按鈕顯示效果分別如下：

![image](https://github.com/11224109/Software_midterm/blob/main/21.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/22.png?raw=true)

點擊登入按鈕，如果信息驗證成功將會跳入相應的介面，因為是類比功能，我們將連結修改成登入
成功效果提示，註冊功能類似。

![image](https://github.com/11224109/Software_midterm/blob/main/23.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/24.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/25.png?raw=true)

`如果帳號註冊過，會顯示提示。`

![image](https://github.com/11224109/Software_midterm/blob/main/26.png?raw=true)

<li><b>引導chaptGPT：</b>你只需要向chaptGPT提出問題和建議，比如“我想要實現這個功能”，“我想要改變這個效果”，“我想要優化這個代碼”等，chaptGPT就會根據你的輸入和反饋，自動調整和優化代碼，讓你的代碼更合理和高效。 你還可以通過查看代碼的註釋和解釋，來學習chaptGPT的思路和方法，讓你的程式設計水平和創造力得到提升。</li>

![image](https://github.com/11224109/Software_midterm/blob/main/27.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/28.png?raw=true)


在使用chaptGPT生成代碼的時候，我發現除了使用合適的prompt外，如果能與chaptGPT先聊幾句有關的話題，後續再進行主要任務詢問，效果會好一些。

比如，我們可以先問chaptGPT會不會寫代碼、會使用什麼語言寫代碼、HTML與WXML的區別等，來讓其慢慢關注到相應的領域。

分享一個案例：我最初直接詢問讓chaptGPT寫WXML代碼時，它會告訴我它不熟悉，然後只輸出一些相關的介紹，我覺得可能它真的不會，我就通過讓它生成HTML代碼，然後再讓它修改成WXML代碼，複製到微信開發者工具后也可以運行，但是總覺得不太好。 然後，我又嘗試詢問一次，發現竟然輸出了WXML代碼，讓我眼前一亮，效果特別好。


<li><b>後台伺服器：</b>前面介紹生成的代碼屬於微信小程式的前端，其還有後端伺服器處理代碼。 我們依然可以利用chaptGPT幫我們加快開發進程。 同時，亞馬遜也推出了codeWhisperer工具，可以集成到多種編輯器中，根據提示直接生成代碼，目前只支援熱門語言代碼的編寫。 因此，微信小程式後端代碼的生成，可以利用該工具。 如果可能後續會給出利用codeWhisperer工具協助編寫微信小程式後端服務代碼。</li>


chaptGPT不僅可以幫你節省時間和精力，還可以幫你提高程式設計水平和創造力，讓你在微信小程序開發中脫穎而出。 chaptGPT是你開發微信小程式的最佳夥伴，趕快來體驗它的魔力吧！ （一般人我不告訴他，文案部分也基本由chaptGPT生成的）
