import { UserContextProvider } from "./user";
import { PlaceProvider } from "./PlaceContext";
import { ThemeProvider } from "../components/theme-provider";  

export function ContextProvider({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContextProvider>
        <PlaceProvider>
          {children}
        </PlaceProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
