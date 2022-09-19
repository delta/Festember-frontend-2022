import Router from "./routes";
import UserContextProvider from "./contexts/UserContext";
import "./App.css";

// Wrap Providers around the whole app
const App = () => {
	return (
		<UserContextProvider>
			<Router />
		</UserContextProvider>
	);
};
export default App;
