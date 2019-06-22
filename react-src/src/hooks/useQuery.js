import React from "react";
import { useQuery as useQueryApollo } from "react-apollo-hooks";
import Placeholder from "../components/Placeholder";

const useQuery = (query, markup, variables = {}, queryProps = {}) => {
  const { data, error, loading } = useQueryApollo(query, {
    variables: variables
  });

  if (loading) {
    return <Placeholder type="text" />;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  //console.log("useQuery:" + JSON.stringify(data));

  return markup(data, queryProps);
};

export default useQuery;
