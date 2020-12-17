# cyclops

A better way to write front-end code with One U-Eye for React and React Native.

# Why wrap components with cyclops?

-   Alignment direction

# Important Core Components

-   [x] Button
-   [x] Card
-   [ ] Dropdown
-   [x] IconButton
-   [x] Image
-   [ ] Select
-   [x] Text
-   [x] TextInput
-   [x] View

# Known Issues

-   Views on mobile have a tendancy to flex horizontally regardless of content width when a height is set
-   On web TextInput's border styling has to be specified with the 'border: ' style parameter. Using BorderRadius, BorderStyle and BorderColor will be over written by css styling on react-native-web's TextInput component. Using border can cause typing issues, that will have to be `//@ts-ignore`'d until the issue is resolved

# Concerns

-   Children.ts -> should it be React.ReactNode or JSX.Element

# Developing Locally

## devDependencies

These dependencies are needed to run cyclops as a symbolic link.

-   @babel/runtime

# Exporting Subfolders

-   `https://github.com/preactjs/preact/blob/master/package.json`

# Packaging

`https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c`
