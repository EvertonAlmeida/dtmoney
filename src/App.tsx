import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
    <Header />
	<Dashboard />
    <GlobalStyle />
    </>
  );
}
