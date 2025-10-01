
import {test} from '@playwright/test'
test('Ex3:ToDo page',async({page})=>{
    await test.step('Navigate to Material Playwright Page',async()=>{
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('<a href="03-xpath-todo-list.html">Bài học 3: Todo page</a>').click();     
})
    await test.step('Thêm mới 100 todo item có nội dung todo[i]',async()=>{
     for(let i=0;i<=100;i++){
    await page.locator('<input type="text" id="new-task" placeholder="Enter a new task">').fill(`To-do ${i}`);
    await page.locator('<button id="add-task">Add Task</button>').click();
    }
  })
})

