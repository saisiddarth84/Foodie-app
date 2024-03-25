# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR- Hot module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Foodie App

/**
 * Header 
 *  - Logo 
 *  - Nav Items
 * Body
 *  - Search 
 *  - Restaurant Container
 *     - Restaurant Card
 *         - Img
 *         - Name of Res, Star Rating, cuisine, delivery Time
 * Footer
 * - Copyright
 * - Social Links
 * - Address
 * - Contact
*/


Two types  of Export / Import

- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import 

export const Component;
import {Component} from "path"


...
# React Hooks
(Normal JS utility functions)
- useState() - Superpoweful  State Variables in react
- useEffect()


# 2 types Routing in web apps
 - Client Side Routing - All the   components loaded when we load the app and it just loads that component when we click About link and  we dont make a network call
 - Server Side Routing - make a network call get the html,js,css from server and loads the whole page 




 # Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Create Slice  (cartSlice)
    - dispatch(action)
    - Selector


# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End to End Testinng - e2e testing


 # Setting up Testing in our app
  - Install React Testing Library
  - Installed jest
  - Installed Babel dependencies
  - Configure Babel 
  - Configue Parcel Config file to disable default babel transipilation
  - Jest configuration - npx jest --init
  - Install jsdom library
  - Install @babel/preset-react - to make JSX work in test cases
  - Install @babel/preset-react inside my babel config
  - Install- npm i -D @testing-library/jest-dom