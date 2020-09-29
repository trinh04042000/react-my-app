const {Builder, By, Key, until} = require('selenium-webdriver');

async function login() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/login');

        await driver.findElement(By.name('username')).sendKeys('JoJo');
        await driver.findElement(By.name('password')).sendKeys('123');
        await driver.findElement(By.css("input[type=submit]")).click();
        console.log("pass login");
    } catch(e) {
        console.log("Error ", e, " occurred!");
    }
}

async function logout(){
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000/login');

        await driver.findElement(By.name('username')).sendKeys('JoJo');
        await driver.findElement(By.name('password')).sendKeys('123');
        await driver.findElement(By.css("input[type=submit]")).click();
        await driver.findElement(By.id('btn-logout')).click();
        console.log("pass logout");
    } catch(e) {
        console.log("Error ", e, " occurred!");
    }
}

async function list(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/users/');
        await driver.findElement(By.name('username')).sendKeys('JoJo');
        await driver.findElement(By.name('password')).sendKeys('123');
        await driver.findElement(By.css("input[type=submit]")).click();
        console.log("pass list");
    } catch(e) {
        console.log("Error ", e, " occurred!");
    }
}

async function create(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/users/create');
        await driver.findElement(By.name('username')).sendKeys('JoJo');
        await driver.findElement(By.name('password')).sendKeys('123');
        await driver.findElement(By.css("input[type=submit]")).click();
        await driver.findElement(By.name('username')).sendKeys('new user');
        await driver.findElement(By.name('password')).sendKeys('12345');
        await driver.findElement(By.id("btn-submit")).click();
        console.log("pass create");
    } catch(e) {
        console.log("Error ", e, " occurred!");
    }
}

async function update(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/users/1');

        await driver.findElement(By.name('username')).sendKeys('JoJo');
        await driver.findElement(By.name('password')).sendKeys('123');
        await driver.findElement(By.css("input[type=submit]")).click();
        await driver.findElement(By.name('username')).sendKeys('User 1');
        await driver.findElement(By.name('password')).sendKeys('12345');
        await driver.findElement(By.id("btn-submit")).click();
        console.log("pass update");
    } catch(e) {
        console.log("Error ", e, " occurred!");
    }
}

async function parallelPromise() {
    await login();
    await logout();
    await list();
    await create();
    await update();
}
parallelPromise()