import React from "react";
import { useQuery as useQueryApollo } from "react-apollo-hooks";

const useQuery = (query, markup, variables = {}) => {
  const { data, error, loading } = useQueryApollo(query, {
    variables: variables
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  //console.log("useQuery:" + JSON.stringify(data));

  return markup(data);
};

export default useQuery;
