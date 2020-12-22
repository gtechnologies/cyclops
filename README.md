# cyclops

A better way to write front-end code with One U-Eye for React and React Native.

# Why wrap components with cyclops?

-   Alignment direction

# Getting Started

Install cyclops by running
`npm i https://github.com/gtechnologies/cyclops.git`
or
`yarn add https://github.com/gtechnologies/cyclops.git`

## React

`import { ... } from 'cyclops/lib/web';`

## React Native

`import { ... } from 'cyclops/lib/native';`

# Important Core Components

-   [x] Button
    -   add styling for disabled buttons
    -   possibly change the button name to be onClick instead of onPress
-   [x] Card
    -   make Cards clickable
-   CheckBox
-   [ ] Dropdown
-   [x] IconButton
-   [x] Image
-   [ ] Select
-   [x] Text
-   [x] TextInput
-   [x] View
    -   [x] HFlex (a View with { flexDirection: 'row'} )
    -   [x] VFlex (a View with { flexDirection: 'column'} )

# Known Issues

-   On web TextInput's border styling has to be specified with the 'border: ' style parameter. Using BorderRadius, BorderStyle and BorderColor will be over written by css styling on react-native-web's TextInput component. Using border can cause typing issues, that will have to be `//@ts-ignore`'d until the issue is resolved
-   Material-UI tooltip breaks from cyclops
    -   https://stackoverflow.com/questions/48930334/mui-next-tooltip-does-not-show-on-hover
    -   https://github.com/mui-org/material-ui/issues/21324

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

# Dependencies

Required by @react-native-community/checkbox
`npm i nullthrows`
