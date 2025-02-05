# random user generator

- [random user generator](#random-user-generator)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: random user](#1-random-user)
    - [2: clean up the data](#2-clean-up-the-data)

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

### 2: clean up the data
<details>
<summary>remove the unnecessary information and display the rest on the page</summary>

#### 2.1 description
let's clean up our messy data and use html tags to show the necessary information on the page.

nothing will change in how we get the data, but instead of showing it as is, we'll only use some fields and show them as html tags.

first, add a level 1 `header` to the `body` saying `random user generator`.

second, let’s look at our json object; we are only interested in the `results` key, and you can see that the value is an array. we'll use the first element in the results array.

the information that you need to extract from the result is the following:

- the large picture, first and last names, email, password, city and country, gender, phone, and date of birth.

if you carefully examine the api docs, you can see that you can query specific fields and do it manually.

third, you will show these fields as html elements, so:
- the picture will be an `image` with any `alt` attribute and `class` called `photo`;
- the first and last names will be next to each other, and the tag will be a level 2 `header` with the `name` class;
- the rest of the elements will be `paragraphs`;
- the email will have the text `email:` and the email of the user; the class is `email`;
- the password will have the text `password:` and the password of the user; the class is `password`;
- the gender will have the text `gender:` and the gender of the user; the class is `gender`;
- the phone will have the text `phone:` and the phone of the user; the class is `phone`;
- the location will include the text `location:` followed by a city and a country next to each other. the class is `location`;
- the date of birth will include the text `birthday:` with a date of birth in the following format: `dd/mm/yyyy`; the class is `birthday`.

finally, put all of the elements in a `div` with the class `user` and append it to the html body.

#### 2.2 objectives
your page should:

1. use the [api](https://randomuser.me);
2. display the data from the api in the body after the page loads;
3. have the necessary fields shown in mentioned html tags.

#### 2.3 examples

![arranged data from random user api](./s02.png)

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

