# FUNCTION ADVANCE
## Định nghĩa
- Định nghĩa Function bằng cách gán cho
## so sánh với khai báo cũ
-  function add(a,b){
    return a+b
}
- const add= function(a,b){
    return a+b
}
console.log(add(2,3))
## Lambda Function
arrow function

const add = (a,b)=>{
    return a+b
}
## Anonymous function
1. không có tham số
-  const anoy=()=>{
2. có tham số
-  const double=x =>
}
# DOM document object model
- Khi vào website bất kì, nhấn F12, ta thấy website dưới dạng
● Các khối text
● Các hình ảnh
● Các liên kết
● Các ô input
cấu trúc này gọi là DOM, Domcument Object Model
Cấu trúc 1 elemon
- <option...>(thẻ mở)...thuộc tính... </option>: thẻ đóng
Với thẻ tự đóng:
- <img src="image.jpg" alt="Image description"/>
<br/>
<hr/>
<option value="usa">United States</option>
<option value="usa">: thẻ mở, thuộc tính
 United States: text
 </option>: thẻ đóng

## CÁC THẺ HTML thường gặp
### Thẻ Cấu Trúc Cơ Bản
● <html>: Thẻ gốc của trang
● <head>: Chứa metadata: tiêu đề website, hiển thị Google
● <body>: Nội dung của cả website hiển thị
● <div>: Khối/container chung
● <span>: Inline container
● <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
Trên thực tế, có rất nhiều loại thẻ khác nhau:
● Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa
● Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

### Thẻ Nội Dung:
● <h1> đến <h6>: Tiêu đề
● <p>: Đoạn văn
● <a>: Liên kết
● <img>: Hình ảnh
● <ul>, <ol>, <li>: Danh sách

### Thẻ Form (Quan trọng cho Testing):
● <form>: Biểu mẫu
● <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
● <button>: Nút bấm
● <select> và <option>: Dropdown
● <textarea>: Vùng văn bản nhiều dòng

# Selector
Automation = tương tác với các phần tử trên trang web
● Input
● Fill
● Click

## Có 3 loại selector thường dùng:
● XPath
○ Dùng được trong hầu hết các trường hợp (99.99%)
○ Đa dạng, có khả năng tìm các phần tử khó
○ Hơi dài
○ VD: //button[normalize-space() = ‘Add to cart’]
● CSS selector
● Playwright selector

Để tương tác được, ta cần tìm được phần tử này
Selector là công cụ giúp ta tìm
Ưu tiên dùng Playwright selector
# Playwright basic syntax
- test: Đơn vị cơ bản để khai báo 1 test
import { test } from '@playwright/test';
- step:Đơn vị nhỏ hơn test,để khai báo từng step của
test case
test('<tên test>', async ({ page }) => {
// Code của test
});
- Navigate
 await page.goto('https://pw-practice.playwrightvn.com/');
+ Locate: Sử dụng page.locator(“<selector>”) để chọn phần tử trên trang
 page.locator(“//input[@id=’email’]”)
+ click
 Single click
await page.locator("//button").click();
Double click
await page.locator("//button").dblclick();

Click chuột phải
page.locator("//button").click({button: 'right'})
Click chuột kèm bấm phím khác
page.locator("").click({modifiers: ['Shift'],})
- input
+ Fill: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

+ pressSequentially: Giống việc bạn gõ từng chữ cái vào ô 
 inputpage.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,});
+ Radio/checkbox: Lấy giá trị hiện tại đang là check hay không:
 const isChecked =
 page.locator("//input").isChecked();
 Check/ uncheck
 page.locator("//input").check();
 page.locator("//input").setChecked(false);
+ Select: 
 await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })
+ Upload file
 await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
## Bổ sung
- hàm hover: await page.locator("<xpath here>").hover();
- Hàm text(): text()dùng để tìm ra phần tử có giá trị tương ứng.
lý hiệu # = ID selector
