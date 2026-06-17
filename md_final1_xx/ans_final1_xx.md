# (70%) Web 程式設計二 期末考-1 -- 斷網考試

##### 2026-6-17, at E201

#### Note:

1. 嚴禁作弊，請不要透過手機網路連上網路，考試時會檢查。請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 ans_final1_xx.pdf，還有 md_final1_xx.zip, src.zip 三個壓縮檔。
3. 請直接將答案寫在 md_final1_xx/ans_final1_xx.md 上，老師出題及圖片放在 ans_final1_htc.pdf 上，請依照老師所給的圖片來實作並標註
4. 跟小考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (許勝翔, 213410243)

期末考-1: 70% (斷網考試)

- P1 (10%): 10 分
- P2 (10%): 10 分
- P3 (15%): 15 分
- P4 (15%): 15 分
- P5 (15%): 15 分
- P6 (5%): 5 分

期末考-2: 30% (開放網路)

- P7 (12%): 12 分
- P8 (8%): 8 分
- P9 (10%): 10 分

##### 總分: 10 分

---

#### (10%) P1: 請透過提供的 sql，將 Category2_xx 及 Shop2_xx 資料匯入 pgAdmin 中。

資料庫名稱： wp2_final_xx

sql 檔案放在 final_xx/\_assets/data/shop2_xx.sql，其中 pid 是 UUID，是透過系統產生

local 圖片已經放在 public/images/midterm 中
本次期末考所用的圖片會用到期中考之圖片，不再另外產生新的目錄

```
model Category2_xx {
  cid              Int     @id
  cname            String  @db.VarChar(255)
  size             String? @db.VarChar(255)
  image_url        String
  remote_image_url String
  link_url         String
}

model Shop2_xx {
  pid            String @id @default(uuid())
  pname          String @db.VarChar(255)
  cat_id         Int
  price          Float  @db.Real
  img_url        String
  remote_img_url String
}

```

##### => Chrome 顯示

![p1_1.png](p1_1.png)

#### Your Answer

##### => Chrome 顯示

![p1_2.png](p1_2.png)

---

#### (10%) P2: 實作路由 /final_xx，要顯示選單及主畫面

##### => Chrome 顯示 final1 選單，及主畫面

![p2_1.png](p2_1.png)

##### => 檔案結構

選單 NavbarFinal_xx 放在 final_xx/\_components/navbar/NavbarFinal_xx 中

![p2_2.png](p2_2.png)

#### Your Answer

##### => Chrome 顯示 final1 選單，及主畫面

![p2_3.png](p2_3.png)

##### => final_xx/page.tsx 完整 code

![p2_4.png](p2_4.png)

---

#### (15%) P3: 於 P2 主畫面中，可以點選任何一個 category，並顯示該 category 所有產品

##### => Chrome，主畫面點選某 category，會顯示該 category 的所有產品

請以你的學號最後一碼除 5 取餘數，來顯示該 category 下所有產品，本範例顯示 4, 所有 womens 產品

hats - 1, 6
jackets - 2, 7
sneakers - 3, 8
womens - 4, 9
mens - 5, 0

![p3_1.png](p3_1.png)

##### => 檔案結構

主要檔案
final_xx/[category]/page.tsx (顯示所有 category 產品)
final_xx/\_component/shop/Product_xx.jsx (顯示某一個產品)

![p3_2.png](p3_2.png)

#### Your Answer

##### => Chrome，主畫面點選某 category，會顯示該 category 的所有產品

請以你的學號最後一碼除 5 取餘數，來顯示該 category 下所有產品

![p3_3.png](p3_3.png)

##### => final_xx/[category]/page.tsx，相關 code

![p3_4.png](p3_4.png)

##### => final_xx/\_component/shop/Product_xx.jsx，相關 code

![p3_5.png](p3_5.png)

---

#### (15%) P4: Shop2_xx CRUD -- list all (5%) and list each category (2% each)

##### => 檔案結構

![p4_0.png](p4_0.png)

##### => Chrome 顯示 all products

需要實作 final_xx/admin_xx/shop2_xx/page.tsx

![p4_1.png](p4_1.png)

##### => Chrome 顯示 hats products

以下 5 個，需要實作 final_xx/admin_xx/[category]/page.tsx

![p4_2.png](p4_2.png)

##### => Chrome 顯示 jackets products

![p4_3.png](p4_4.png)

##### => Chrome 顯示 sneakers products

![p4_3.png](p4_5.png)

##### => Chrome 顯示 womens products

![p4_3.png](p4_6.png)

##### => Chrome 顯示 mens products

![p4_7.png](p4_7.png)

#### Your Answer

##### => Chrome 顯示 all products

需要實作 final_xx/admin_xx/shop2_xx/page.tsx

![p4_8.png](p4_8.png)

##### => final_xx/admin_xx/shop2_xx/page.tsx 相關 code

![p4_8_1.png](p4_8_1.png)

##### => Chrome 顯示 hats products

以下 5 個 category，需要實作 final_xx/admin_xx/[category]/page.tsx

![p4_9.png](p4_9.png)

##### => final_xx/admin_xx/[category]/page.tsx 相關 code

![p4_9_1.png](p4_9_1.png)

##### => Chrome 顯示 jackets products

![p4_10.png](p4_10.png)

##### => Chrome 顯示 sneakers products

![p4_11.png](p4_11.png)

##### => Chrome 顯示 womens products

![p4_12.png](p4_12.png)

##### => Chrome 顯示 mens products

![p4_13.png](p4_13.png)

---

#### (15%) P5: Shop2_xx CRUD -- Create, Edit, Delete (5% each)

##### => 檔案結構

![p5_0.png](p5_0.png)

##### => Chrome 顯示 Create New (product)

Product Name -- 輸入 你的姓名代號-學號
Category ID -- 輸入本次考試你所屬的 cat_id，老師輸入 4
Price -- 輸入 $150

![p5_1.png](p5_1.png)

##### => Chrome 顯示 Create New 之結果，要看到你新增的那一筆資料

![p5_2.png](p5_2.png)

##### => Chrome 顯示 Edit (product)

Product Name -- 修改你的姓名代號-學號
Price -- 修改成 $175

![p5_3.png](p5_3.png)

##### => Chrome 顯示 Edit (product) 之結果，要看到你修改的那一筆資料

![p5_4.png](p5_4.png)

##### => Chrome 顯示要刪除前的資料

![p5_5.png](p5_5.png)

##### => Chrome 透過 Delete 按鈕，刪除你新增的資料，透過 console.log 要顯示少一筆資料

![p5_5_1.png](p5_5_1.png)

#### Your Answer

##### => Chrome 顯示 Create New (product)

Product Name -- 輸入 你的姓名代號-學號
Category ID -- 輸入本次考試你所屬的 cat_id，老師輸入 4
Price -- 輸入 $150

![p5_6.png](p5_6.png)

##### => Chrome 顯示 Create New 之結果，要看到你新增的那一筆資料

![p5_7.png](p5_7.png)

##### => Create New 相關 code

![p5_8.png](p5_8.png)
![p5_9.png](p5_9.png)

##### => Chrome 顯示 Edit (product)

Product Name -- 修改你的姓名代號-學號
Price -- 修改成 $175

![p5_10.png](p5_10.png)

##### => Chrome 顯示 Edit (product) 之結果，要看到你修改的那一筆資料

![p5_11.png](p5_11.png)

##### => Edit (product) 相關 code

![p5_12.png](p5_12.png)
![p5_13.png](p5_13.png)

##### => Chrome 顯示要刪除前的資料

![p5_14.png](p5_14.png)

##### => Chrome 透過 Delete 按鈕，刪除你新增的資料，透過 console.log 要顯示少一筆資料

![p5_14_1.png](p5_14_1.png)

##### => Delete (product) 相關 code

![p5_15.png](p5_15.png)
![p5_16.png](p5_16.png)

---

#### (5%) P6: npm run build -- make it successful

##### => 顯示 npm run build 成功之截圖

![p6_1.png](p6_1.png)
![p6_2.png](p6_2.png)

#### Your Answer

##### => 顯示 npm run build 成功之截圖

![p6_3.png](p6_3.png)
![p6_4.png](p6_4.png)
