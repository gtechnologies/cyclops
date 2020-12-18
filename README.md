# cyclops

A better way to write front-end code with One U-Eye for React and React Native.

# Why wrap components with cyclops?

-   Alignment direction

# Important Core Components

-   [x] Button
    -   add styling for disabled buttons
-   [x] Card
    -   make Cards clickable
-   [ ] Dropdown
-   [x] IconButton
-   [x] Image
-   [ ] Select
-   [x] Text
-   [x] TextInput
-   [x] View

# Known Issues

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

# importing

TypeScript does not yet support the "exports" field of NPM.
`https://github.com/microsoft/TypeScript/issues/33079`
`https://stackoverflow.com/questions/30302747/root-directory-in-package-json`

# CSS Files

Non .ts or .tsx files are by default not handled by `tsc` and so an alternative copy files solution is needed.
`https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/`

`https://stackoverflow.com/questions/46075993/how-to-include-a-css-file-in-react-and-typescript-npm-package/65364696#65364696`
