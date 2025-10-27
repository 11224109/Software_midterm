# 如何藉助GPT搭建微信小程式？

 ### <b>一、開發所用工具</b><br/>

  >1.微信小程序      
  >2.chatGPT  

  我們接下來要用 chaptGPT 來幫我們開發一個 微信小程式！  
  它是一個非常強大的代碼生成器，只要輸入你想要的功能和風格，它就能幫你自動產出對應的程式碼。  
  無論是登入註冊頁面，還是後台伺服器部分，它都能輕鬆搞定。  

### 二、微信小程式執行結果 

一開始，我讓 ChatGPT 幫我生成登入註冊程式碼後，將程式貼入微信小程式。  
效果如下：

![image](https://github.com/11224109/Software_midterm/blob/main/1.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/2.png?raw=true)

### 三、登入註冊頁面設計  

接著我們就來看看要怎麼實現這個效果吧！  
我只需要告訴 ChatGPT 想要的頁面風格與布局，例如簡約、清新、炫酷等風格，它就會生成相對應的代碼。  

![image](https://github.com/11224109/Software_midterm/blob/main/3.png?raw=true)

將代碼複製拷貝到微信小程序開發工具，執行效果如下：

![image](https://github.com/11224109/Software_midterm/blob/main/4.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/5.png?raw=true)

### 四、樣式調整與個性化設計  

接下來，我們可以透過修改屬性與樣式，來微調頁面的顏色、字體、大小、位置等，讓介面更符合個人風格。  

我先請 ChatGPT 幫我加上一些樣式設定：  

![image](https://github.com/11224109/Software_midterm/blob/main/6.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/7.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/8.png?raw=true)

我們來看一下效果：

![image](https://github.com/11224109/Software_midterm/blob/main/9.png?raw=true)

這時候標題字體變大、顏色變亮，並將所有元件置中，更符合一般登入介面的常見布局。  

事實上，最初的畫面會有一些預設樣式，那是因為微信小程式有全域樣式設定，存在於 app.wxss 中。  
其中一個常見的類別叫做 container，ChatGPT 在生成 WXML 時就自動加上這個類別，所以會有基礎樣式。  
這點真的很貼心，也說明了 ChatGPT 的智能程度。  

### 五、樣式微調範例  

如果你對輸入框的顏色或其他細節不太滿意，只要簡單修改相對應的樣式代碼就能完成。  

![image](https://github.com/11224109/Software_midterm/blob/main/10.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/11.png?raw=true)


### 六、多語言版本設計  

如果你想讓頁面顯示英文版本，也沒問題。  
只要告訴 ChatGPT 把中文改成英文，它就能自動幫你轉換。  

![image](https://github.com/11224109/Software_midterm/blob/main/12.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/13.png?raw=true)

來看一下效果吧 :


![image](https://github.com/11224109/Software_midterm/blob/main/14.png?raw=true)



### 七、登入與註冊功能實作  

接下來進入登入與註冊的功能部分。  我只要告訴 ChatGPT 想要哪種登入方式（手機號、郵箱、微信帳號等），它就能生成完整代碼。  
還能根據條件新增驗證碼、密碼強度檢查或使用者協定等細節。  

* WXML :
  
![image](https://github.com/11224109/Software_midterm/blob/main/15.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/16.png?raw=true)

* js :
  
![image](https://github.com/11224109/Software_midterm/blob/main/17.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/18.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/19.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/20.png?raw=true)


把這些代碼放進開發工具後，點擊登入或註冊按鈕，就會觸發對應 js 中的事件函數來，來完成登入或註冊的功能。  

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

### 八、與 ChatGPT 的互動技巧  

你只需要向 ChatGPT 提出問題或建議，例如「我想實現這個功能」、「我想修改這個效果」或「我想優化這段程式」，ChatGPT 就會根據你的輸入與回饋，自動生成、調整或改進程式碼，讓程式設計更加合理、高效。  
此外，你也可以透過閱讀 ChatGPT 產生的註解與說明，了解其設計思路與邏輯，從而提升自己的程式設計能力與創新思維。   

![image](https://github.com/11224109/Software_midterm/blob/main/27.png?raw=true)
![image](https://github.com/11224109/Software_midterm/blob/main/28.png?raw=true)


### 九、後台伺服器與延伸工具  

前面介紹的程式碼屬於微信小程式的前端，而後端伺服器同樣需要負責資料處理與邏輯運算。  
為了加速開發，我們也可以借助 ChatGPT 來協助生成與優化後端代碼。  

此外，亞馬遜推出的 CodeWhisperer 工具可整合至多種程式編輯器中，能依據提示自動產生程式碼，目前主要支援多種主流語言的開發。  
因此，在微信小程式後端開發中，也可以運用 CodeWhisperer 來輔助程式編寫。

### 十、結語  

ChatGPT 不僅能幫你省下大量時間與精力，還能提升你的程式設計能力與創造力。   

快去體驗一下 ChatGPT 吧，你會發現做微信小程式其實沒有想像中那麼難！  
