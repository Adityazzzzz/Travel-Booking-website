import { UserContextProvider } from "./user";
import { PlaceProvider } from "./PlaceContext";

export function ContextProvider({ children }) {
  return (
    <UserContextProvider>
        <PlaceProvider>
            {children}
        </PlaceProvider>
    </UserContextProvider>
  );
}
