import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { defaultTheme, WidgetProvider } from "@anyalt/widget";
import Widget from './widget'
const queryClient = new QueryClient();

 const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WidgetProvider theme={defaultTheme}>
        <Widget />
      </WidgetProvider>
    </QueryClientProvider>
  );
};
export default App