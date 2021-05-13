import { InMemoryCache } from '@apollo/client';
// import { offsetLimitPagination } from '@apollo/client/utilities';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // fetchPetCollectionCompletes: offsetLimitPagination(['isAll']),
        // fetchCollectors: offsetLimitPagination(),
        // fetchCollections:offsetLimitPagination(["isAll"])
      },
    },
  },
});
