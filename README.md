# cyclops

A better way to write front-end code with One U-Eye for React and React Native.

# Why wrap components with cyclops?

-   Single API for core components between iOS/Android and Web
-   Abstraction of alignment direction for the horizontal and vertical axes (no more need for justifyContent or alignItems)

# Getting Started

Install cyclops by running
`npm i https://github.com/gtechnologies/cyclops.git`
or
`yarn add https://github.com/gtechnologies/cyclops.git`

## React

### Additional Setup

None

### Using Cyclops

`import { ... } from 'cyclops/lib/web';`

## React Native

### Additional Setup

https://callstack.github.io/react-native-paper/getting-started.html
`npm install react-native-paper`
`npm install react-native-vector-icons --save`

#### For iOS

`cd ios && pod install`

#### For Android

### Using Cyclops

`import { ... } from 'cyclops/lib/native';`

# Important Core Components

-   [x] Button (Web + Native)
    -   add styling for disabled buttons
-   [x] Card (Web + Native)
    -   make Cards clickable
-   [x] CheckBox (Web + Native)
-   [ ] Dropdown
-   [x] IconButton
-   [x] Image (Web + Native)
-   [x] Select
-   [x] Text (Web + Native)
-   [x] TextInput
-   [x] View (Web + Native)
    -   [x] HFlex (a View with { flexDirection: 'row'} )
    -   [x] VFlex (a View with { flexDirection: 'column'} )

# // TODO:

-   shift disabled color to be a constant
-   implement TextInput parallel for web
-   add some theme provider either with a Context element or in the style of @material-ui/core ThemeProvider
-   move cornerType out of Card

# Known Issues

-   On web TextInput's border styling has to be specified with the 'border: ' style parameter. Using BorderRadius, BorderStyle and BorderColor will be over written by css styling on react-native-web's TextInput component. Using border can cause typing issues, that will have to be `//@ts-ignore`'d until the issue is resolved
-   Material-UI tooltip breaks from cyclops
    -   https://stackoverflow.com/questions/48930334/mui-next-tooltip-does-not-show-on-hover
    -   https://github.com/mui-org/material-ui/issues/21324
    -   ForwardRef seems to be able to solve the issue
    -   Tooltip doesn't play well with the Modal
-   ReactNative doesn't use className like React so we need to figure out an alternative way to pass style by class
-   Types are not currently working when cyclops is installed as a package
-   Does not work as styled-components which are common within our codebase

# Concerns

-   Children.ts -> should it be React.ReactNode or JSX.Element
-   Should we use forwardRef?

# Developing Locally

## devDependencies

These dependencies are needed to run cyclops as a symbolic link.

-   @babel/runtime

# Exporting Subfolders

-   `https://github.com/preactjs/preact/blob/master/package.json`

# Packaging

`https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c`

# importing

TypeScript does not yet support the "exports" field of NPM.
`https://github.com/microsoft/TypeScript/issues/33079`
`https://stackoverflow.com/questions/30302747/root-directory-in-package-json`

# CSS Files

Non .ts or .tsx files are by default not handled by `tsc` and so an alternative copy files solution is needed.
`https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/`

`https://stackoverflow.com/questions/46075993/how-to-include-a-css-file-in-react-and-typescript-npm-package/65364696#65364696`

# refs and forwardRef

-   https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315

# Dependencies

# Resources Worth Reading

https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/buildingfasterwithcomponents.html
