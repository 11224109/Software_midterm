# 如何藉助GPT搭建微信小程式？

一、開發所用工具<br/>

  1.微信小程序      
  2.chatGPT      

我們接下來要用 <b>chaptGPT</b> 來幫我們開發一個<b>微信小程式</b>！  
它是一個非常強大的代碼生成器，只要輸入你想要的功能和風格，  
它就能幫你自動產出對應的程式碼。  
無論是登入註冊頁面，還是後台伺服器部分，它都能輕鬆搞定。  

二、ChatGPT 生成的頁面效果展示  

一開始，我讓 ChatGPT 幫我生成登入註冊的畫面。  
效果如下：

![image](https://github.com/11224109/Software_midterm/blob/main/1.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/2.png?raw=true)

三、登入註冊頁面設計  

接著我們就來看看要怎麼實現這個效果吧！  
我只需要告訴 ChatGPT 想要的頁面風格與布局，例如簡約、清新、炫酷等風格，它就會生成相對應的代碼。  

![image](https://github.com/11224109/Software_midterm/blob/main/3.png?raw=true)

將代碼複製拷貝到微信小程序開發工具，執行效果如下：

![image](https://github.com/11224109/Software_midterm/blob/main/4.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/5.png?raw=true)

四、樣式調整與個性化設計  

接下來，我們可以透過修改屬性與樣式，來微調頁面的顏色、字體、大小、位置等，讓介面更符合個人風格。  

我先請 ChatGPT 幫我加上一些樣式設定：  

![image](https://github.com/11224109/Software_midterm/blob/main/6.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/7.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/8.png?raw=true)

我們來看一下效果：

![image](https://github.com/11224109/Software_midterm/blob/main/9.png?raw=true)

這時候標題字體變大、顏色變亮，而且「使用者名」與「請輸入使用者名」這兩個元件也改成了水平排列，更符合一般登入介面的常見布局。  

事實上，最初的畫面會有一些預設樣式，那是因為微信小程式有全域樣式設定，存在於 app.wxss 中。  
其中一個常見的類別叫做 container，ChatGPT 在生成 WXML 時就自動加上這個類別，所以會有基礎樣式。  
這點真的很貼心，也說明了 ChatGPT 的智能程度。  

五、樣式微調範例  

如果你對輸入框的顏色或其他細節不太滿意，只要簡單修改相對應的樣式代碼就能完成。  

![image](https://github.com/11224109/Software_midterm/blob/main/10.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/11.png?raw=true)


六、多語言版本設計  

如果你想讓頁面顯示英文版本，也沒問題。  
只要告訴 ChatGPT 把中文改成英文，它就能自動幫你轉換。  

![image](https://github.com/11224109/Software_midterm/blob/main/12.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/13.png?raw=true)

來看一下效果吧。


![image](https://github.com/11224109/Software_midterm/blob/main/14.png?raw=true)



七、登入與註冊功能實作  

接下來進入重頭戲——登入與註冊的功能部分。  我只要告訴 ChatGPT 想要哪種登入方式（手機號、郵箱、微信帳號等），它就能生成完整代碼。  
還能根據條件新增驗證碼、密碼強度檢查或使用者協定等細節。  

![image](https://github.com/11224109/Software_midterm/blob/main/15.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/16.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/17.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/18.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/19.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/20.png?raw=true)


把這些代碼放進開發工具後，點擊登入或註冊按鈕，就會觸發對應js中的事件函數來，來完成登入或註冊的功能。  

登入與註冊的執行畫面如下：  

![image](https://github.com/11224109/Software_midterm/blob/main/21.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/22.png?raw=true)

點擊登入按鈕，如果信息驗證成功將會跳入相應的介面，因為是類比功能，我們將連結修改成登入
成功效果提示，註冊功能類似。

![image](https://github.com/11224109/Software_midterm/blob/main/23.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/24.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/25.png?raw=true)

如果帳號已經被註冊過，也會自動顯示提示訊息。  

![image](https://github.com/11224109/Software_midterm/blob/main/26.png?raw=true)

八、與 ChatGPT 的互動技巧  

使用 ChatGPT 寫程式時，我發現有個小訣竅非常實用：  
在進入主要任務前，先和它「暖機」一下！  
例如可以問它「你會寫代碼嗎？」、「會用哪種語言？」、「HTML 跟 WXML 有什麼差別？」等等。  

這樣能讓 ChatGPT 更快「進入開發模式」，接下來生成代碼的品質也會更高。  

![image](https://github.com/11224109/Software_midterm/blob/main/27.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/28.png?raw=true)


我自己一開始問它直接寫 WXML，它回答「不熟悉」，結果只給了介紹文字。  
但我後來改成請它先生成 HTML，再轉換成 WXML，竟然能成功執行！  
再試幾次後，它甚至直接幫我生成原生 WXML。  
真的超神奇～  

九、後台伺服器與延伸工具  

目前我們做的部分屬於前端。  
如果想再進一步處理後端伺服器邏輯，依然可以用 ChatGPT 來加速開發流程。  

另外，Amazon 推出了 CodeWhisperer 工具，它可以整合到多種編輯器中，根據提示自動生成程式碼，目前支援多種主流語言，非常適合用在後端開發。  

未來我們也能結合這兩個工具，打造前後端一體的小程式系統。  

十、結語  

ChatGPT 不僅能幫你省下大量時間與精力，還能提升你的程式設計能力與創造力。  
它真的就像是一位「永遠不累的開發夥伴」。  

快去體驗一下 ChatGPT 的魔力吧，你會發現做微信小程式其實一點都不難！  

（小聲說：這篇文案很多段落，其實也是 ChatGPT 幫我寫的呢 😄）  
