# don8

_don8_ is a multi platform mobile app designed to connect charities with people who can help them. Post adverts with what your charity needs, and volunteers can see what you need, and where! We created _don8_ for our final project on the [Makers Academy](https://makers.tech/) course.

---

## Index

- [Specification](#specification)
  * [Requirements](#requirements)
- [Getting Started](#getting-started)
  * [Prerequisite(s)](#prerequisite-s-)
  * [Installation](#installation)
- [Running the Program](#running-the-program)
- [Development Process](#development-process)
  * [Modelling](#modelling)
    + [User Stories](#user-stories)
      - [User Story 01](#user-story-01)
      - [User Story 02](#user-story-02)
      - [User Story 03](#user-story-03)
      - [User Story 04](#user-story-04)
      - [User Story 05](#user-story-05)
      - [User Story 06](#user-story-06)
      - [User Story 07](#user-story-07)
    + [Domain Modelling](#domain-modelling)
  * [Test-Driven Design](#test-driven-design)
  * [Behaviour-Driven Design](#behaviour-driven-design)
  * [Continuous Development](#continuous-development)
  * [Refactoring](#refactoring)
- [Minimum Viable Product](#minimum-viable-product)
  * [Wireframes](#wireframes)
- [Additional Features](#additional-features)
  * [Feature 01](#feature-01)
  * [Wireframes](#wireframes-1)
- [Project Conclusions](#project-conclusions)
  * [Final Appearance](#final-appearance)
  * [Specific Characteristics of Note](#specific-characteristics-of-note)
  * [Additional Development](#additional-development)
- [Built With](#built-with)
- [Author(s)](#author-s-)
- [License(s)](#license-s-)
- [Acknowledgements](#acknowledgements)

---

## Demo

<div align="center"><img src="https://github.com/JoshSinyor/don8/blob/readme/docs/don8-demo.gif" width=300/><br>
<a href=https://www.youtube.com/watch?v=epjusmKqPDY>Full demo available here</a></div>


---


## Getting Started
This app is not currently hosted online, and can only be run locally. The instructions for how to do that on a Mac are given below, but please note that you will need some API keys in order for the app to function properly.

### Prerequisites

This project uses npm to manage packages, which is installed with Node.js. If you have Node.js installed, you should have npm installed. You can check if you have Node.js and npm installed by running `node -v` and `npm -v` in the command line respectively. If you don't have either installed, you can follow [these instructions](https://www.npmjs.com/get-npm).  

In order to run the app on your mobile phone, you will need to download the Expo Go app from the [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_GB&gl=US) or [App Store](https://apps.apple.com/gb/app/expo-go/id982107779).


### Installation

1. Download this repo to your local computer.
2. `cd` into the repo and run command `npm install` in the command line to install necessary packages.
3. Call `cd backend` and then another `npm install` in the command line to install necessary packages for the backend.
4. Create a `.env` file in the `backend` folder. This file should have three lines, `API_URL = /api/v1`, a `DATABASE_CONNECTION` line with our DB connection string, and a `secret` line, which you can set yourself.
5. Back in the root folder, create an `app.config.js` file with an [API key for google maps](https://developers.google.com/maps/documentation/javascript/get-api-key) which looks like:
```js
export default ({ config }) => {
  config['extra'] = {
    googleApi: 'your1api2for3google4maps5xyz'
  }
  return {
    ...config,
  };
};
```

---

## Running the Program

1. First start the backend. `cd backend` and then run `npm start`. This will allow API calls to the database to work.
2. In a separate terminal window, run `npm start` from the root folder. This will open an Expo window in your browser.
3. Scan the QR Code in the Expo web page from the Expo Go app (on Android) or the camera (on iOS).
4. Alternatively, if you have [Android Studio](https://developer.android.com/studio) or [XCode](https://developer.apple.com/xcode/) installed, you can run the app in an emulated phone by clicking the option from the Expo web page.

---

## Development Process

### Modelling


#### User Stories

The requirements can be parsed in several simple user stories.

Actions are *italic*. Nouns are **bold**. Attributes of nouns are **_bold italics_**.

User stories marked :white_check_mark: are complete and those with :heavy_exclamation_mark: are incomplete

##### :white_check_mark: User Story 01

&nbsp;&nbsp;&nbsp;As a charity,<br>
&nbsp;&nbsp;&nbsp;So that I can advertise for donations of time or goods,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to post adverts.

##### :white_check_mark: User Story 02

&nbsp;&nbsp;&nbsp;As a donor,<br>
&nbsp;&nbsp;&nbsp;So that I can donate,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to see charities' adverts.

##### :white_check_mark: User Story 03

&nbsp;&nbsp;&nbsp;As a charity,<br>
&nbsp;&nbsp;&nbsp;So that I can manage my adverts,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to sign up as a charity.

##### :white_check_mark: User Story 04

&nbsp;&nbsp;&nbsp;As a charity,<br>
&nbsp;&nbsp;&nbsp;So that I can manage my adverts,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to log in and out.


##### :heavy_exclamation_mark: User Story 05

&nbsp;&nbsp;&nbsp;As a charity,<br>
&nbsp;&nbsp;&nbsp;So that I can manage my adverts,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to edit adverts.

##### :heavy_exclamation_mark: User Story 06

&nbsp;&nbsp;&nbsp;As a charity,<br>
&nbsp;&nbsp;&nbsp;So that I can manage my adverts,<br>
&nbsp;&nbsp;&nbsp;I'd like to be able to delete adverts.

#### Domain Modelling

As per [Class Responsibility Collaborator](http://agilemodeling.com/artifacts/crcModel.htm) modelling, there are _n_ obvious areas of responsibility, and therefore _n_.

Class: **Name**

Responsibility | Collaborators
--- | ---
 |

The relationship between these classes can be summarised in this Domain Model Diagram:

![domain_model_diagram](https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

### Test-Driven Design

TDD was used to structure Unit Tests. These were employed to test individual classes and their methods to ensure that they interacted as expected.

### Behaviour-Driven Design

BDD was used to structure Feature Tests. After unit tests were created to test methods and classes in isolation, feature tests were employed to test the entire program.

### Continuous Development

The code was continuously tested throughout development to ensure development was proceeding as expected, and that changes during development did not impact previously tested units and features.

### Refactoring

Refactoring was performed after the completion of any individual unit, and periodically throughout development, in order to simplify the code. The aim was to keep the code simple and readable, rather than as compact as possible. To check that the resulting code conformed to the Ruby style guide, it was parsed before each commit through _software_, a linter.

---

## Minimum Viable Product
* Charity can post what they need - either time or objects
* Volunteers can see what charities need

### Wireframes

The appearance of an MVP version of our program was projected to look something like as follows:

![wireframe_homepage](/docs/wireframe_homepage.svg) ![wireframe_new_request_page](/docs/wireframe_new_request_page.svg)

The most basic model of this is described as follows:

![request_return_diagram](/docs/request_return_diagram.svg)

---

## Additional Features

### Feature 01

The appearance of an expanded version of our program was projected to look something like as follows:

### Wireframes

---

## Project Conclusions

### Final Appearance

### Specific Characteristics of Note

The presented development state shows some aspects of note:

1.

### Additional Development

With more time, we would have liked to add some additional features:

1.

---

## Built With

This program's dependencies are:

- [Expo](https://docs.expo.io/)
- [React Native](https://reactnative.dev/)
- [MongoBD](https://www.mongodb.com/)

This program's development and test frameworks depend upon:

- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

---

## Author(s)

Proudly authored by [Oscar Bertrand](https://github.com/OscarB89), [Hugh Cavanagh](https://github.com/hacaravan), [Sean Edwards](https://github.com/bear99a9), [Joshua Sinyor](https://gist.github.com/JoshSinyor) and [Louis Wickremeratne](https://github.com/louiswicks).

---

## License(s)

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc/).
- Wireframes generated with [Figma](https://www.figma.com/).
- Diagrams generated with [Diagram.codes](https://www.diagram.codes/).
- API testing conducted with [Postman](https://www.postman.com/).
