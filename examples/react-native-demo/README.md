# cyclops

## Symbolic Links

cyclops is installed for testing via npm and a symbolic link. Metro Bundler doesn't normally allow for symbolic links so we need to customize the metro.config.js to handle for this:

`https://medium.com/@slavik_210/symlinks-on-react-native-ae73ed63e4a7`
`https://github.com/MrLoh/metro-with-symlinks`

- This solution works if the node_modules of the symlinked file contains all of the packages needed for it to run. However, using this solution would require two copies of react and react-dom which crashes hooks on react-native-web.

### Attempts

Haul

- ends up being a massive dependency that doesn't have default loaders for our symlink
  `https://github.com/callstack/haul`

metro-symlinked-deps

- Fails with 'Unable to resolve module `react` from `../../src/components/Button/Button.native.tsx`
  `https://github.com/Carimus/metro-symlinked-deps`
