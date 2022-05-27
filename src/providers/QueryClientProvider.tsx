import React from 'react';

import {
  QueryClient,
  QueryClientProvider as ReactQueryProvider,
} from 'react-query';

const queryClient = new QueryClient();

const QueryClientProvider: React.FC = ({children}) => {
  return (
    <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
  );
};

export default QueryClientProvider;
