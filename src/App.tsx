import Router from "./routes";
import Toast from "./components/Toast/Toast";
import UserContextProvider from "./contexts/UserContext";
import "./App.css";

// Wrap Providers around the whole app
const App = () => {
	return (
		<UserContextProvider>
			<Router />
			<Toast />
		</UserContextProvider>
	);
};
export default App;
