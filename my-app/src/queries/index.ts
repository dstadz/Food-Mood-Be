import gql from 'graphql-tag';

const getRestaurantQuery = gql`
{
	search(term:"latin food" location:"oakland"){
    business {
      categories{
				alias
      }
		}
  }
}
`;



export { getRestaurantQuery }