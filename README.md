The React version of inu.ro

## Stack

- [create-react-wptheme](https://github.com/devloco/create-react-wptheme) based on `create-react-app` (CRA)
- [WP GraphQL](https://www.wpgraphql.com/)
- [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) because Relay seems too complicated at this stage
- [styled-components](https://www.styled-components.com/) vs Emotion. See http://metamn.io/mr-ui > Basics > Styling for details
- [react-progressive-image](https://github.com/FormidableLabs/react-progressive-image) because is maintained by Formidable Labs

## Missing

### GraphQL fragments (Colocation)

- they are interesting and needed for colocation
- however I couldn't filter them (ie. in `Thumbs` get only the image of size `thumbnail`)

### GraphQL imports (Colocation)

- you need a special loader && a separate `.graphql` file which is not colocation: https://stackoverflow.com/questions/49829531/how-to-import-graphql-query

### Flow (Static typing)

- [flow](https://github.com/facebook/flow) vs TypeScript because [Facebook / React is using it internally](https://twitter.com/dan_abramov/status/1135437323888406528). It also [works out-of-the-box](https://flow.org/en/docs/tools/create-react-app/) with CRA
- it's not working ... see the `v2-flow` branch
