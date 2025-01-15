'use client';

import { graphqlClient } from "@/config/graphql/graphql.settings";
import { ApolloProvider } from "@apollo/client";
import React from "react";

interface ApolloProviderWrapperProps {
  children: React.ReactNode;
}


export const ApolloProviderWrapper = ({ children } : ApolloProviderWrapperProps) => {
  return (
    <ApolloProvider client={graphqlClient}>
      {children}
    </ApolloProvider>
  )
}