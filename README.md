# random user generator

- [random user generator](#random-user-generator)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: random user](#1-random-user)

## learning
create a web page that can fetch random user data from api for testing purposes and display it on a web page. also, work with promises and handle different data structures.

## about
do you know how developers test their apps with random user data? well, they can use public apis to generate that data, like how they use lorem ipsum for dummy text. creating a web page to display those random user profiles using html and js is a great way to practice working with data and public apis. pretty neat, huh? take this project to find out how you can do it.

## stages
### 1: random user
<details>
<summary>fetch random user info from the api</summary>

#### 1.1 description
let’s start by checking out the [api](https://randomuser.me/api) we’ll use throughout the project. when you click the link, you can see the returned result contains different fields related to a random user. we will use this link to get the information from the api.

check the [api](https://randomuser.me) docs for more information about the api and how to use it, even though it’s pretty straightforward.

in this stage, you need to fetch the data from the api when the page is loaded and display it on the body of the html as is!

you can see that the result is a json object, so turn it into text and put it in the `body`.

ensure that the retrieved data remains unchanged and that nothing else is in the body.

you can also log the fetched json object first to see if you’ve done it correctly.

#### 1.2 objectives
your page should:

1. use the [api](https://randomuser.me);
2. display the data from the api in the body after the page loads;
3. have nothing else in the body.

#### 1.3 examples

![json object from the random user api](./s01.png)

</details>

[<<](https://github.com/eucarizan/front-end/blob/main/README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc

### 0: 
<details>
<summary></summary>

#### 0.1 description

#### 0.2 objectives

#### 0.3 examples

</details>
-->

