# NBA-Player-Filter
 
## 套件說明
1. node -v v16.13.2
2. npm -v 8.4.1
3. 需安裝上述套件才能啟動

## 啟動說明
1. 將此repository clone下來
2. 啟動本機端sql連線
3. 修改app.js, importData.js, dumpData.js三個檔案的mysql connection設定
![image](https://user-images.githubusercontent.com/66670167/173234582-01f18de8-dad6-4fdd-89a2-0a64e2d90cf6.png)
4. ```node importData.js``` 將球員資料加進資料庫
5. 至根目錄 輸入```node app.js``` 啟動後端伺服器
