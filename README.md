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
5. ```node app.js``` 啟動後端伺服器
6. ```cd my-app``` ```npm start``` 啟動react前端
7. 即可開始使用

## 功能說明
### 查詢球員資料
1. Teams 限定查找資料的隊伍
2. Keywords 比對球員姓名
3. 按下Search即可送出查詢

### 資料表
1. 可選擇依據Games, Points, Rebounds, Assists, Steals, Blocks不同欄位進行篩選 預設是Points
2. 可選擇上述欄位正序或倒序
3. 每頁最多顯示15筆資料，可利用下方按鈕進行換頁
4. 點選Detail欄位可查看該位球員的詳細資訊

### 圓餅圖
1. Show Chart 顯示球員人數在15人以下(含15人)的球隊統計資料
2. Hide Chart 可關閉圓餅圖

### 實際運作參考圖
![image](https://user-images.githubusercontent.com/66670167/173235406-dfbea58e-4f30-478d-bd3a-bdd6690bf504.png)
![image](https://user-images.githubusercontent.com/66670167/173235422-c7b4fac4-39ee-4552-9111-07910e92ba35.png)
![image](https://user-images.githubusercontent.com/66670167/173235432-1af1bbdf-3418-43aa-8d00-b1ae4552cee0.png)

