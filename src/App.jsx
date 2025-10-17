import { UserProvider } from "./UserProvider";
import Navbar from "./Navbar";
import LoginButton from "./LoginButton";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <LoginButton />
    </UserProvider>
  );
}

export default App;
