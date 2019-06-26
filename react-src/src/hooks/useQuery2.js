import { useState } from "react";
import { useQuery as _useQuery } from "react-apollo-hooks";

export function useLoadMore(fetchMore, data, variables) {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  function loadMore() {
    setIsLoadingMore(true);

    fetchMore({
      variables: {
        ...variables,
        //skip: data.list.length,
        cursor: data.posts.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setIsLoadingMore(false);

        if (!fetchMoreResult) {
          return previousResult;
        }

        return {
          ...fetchMoreResult,
          edges: [...previousResult.edges, ...fetchMoreResult.edges]
        };
      }
    });
  }

  return [isLoadingMore, loadMore];
}

export default function useQuery2(schema, variables, options) {
  const { fetchMore, data, ...other } = _useQuery(schema, {
    variables,
    ...options
  });
  const [isLoadingMore, loadMore] = useLoadMore(fetchMore, data, variables);

  return { isLoadingMore, loadMore, fetchMore, data, ...other };
}
