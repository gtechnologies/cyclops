# How To Convert From Flow To TypeScript

Generally, most files written in Flow can be converted to TypeScript using Khan Academy's flow-to-ts library.

`https://flow-to-ts.netlify.app/`
`https://github.com/Khan/flow-to-ts`

## Flow Type to TypeScript Type

`type ViewStyle = $PropertyType<ViewProps, 'style'>;` -> `type ViewStyle = ViewProps['style'];`

# // TODO

-   Filter for "forwardPropsList"

## Convert UI Components

-   FlatList

## Convert Other Files

# Known Issues

# Questions

-   Should we convert all React.Component to React.PureComponent or React.FunctionComponent?
