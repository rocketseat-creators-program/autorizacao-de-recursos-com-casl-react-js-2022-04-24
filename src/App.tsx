import { useState } from "react";
import { buildAbility } from "./guards/ability";
import { GuardContext } from "./guards/GuardContext";
import { getAbilitiesByUser, UserType } from "./guards/userAbilities";
import { Home } from "./pages/Home";

function App() {
  const [user, setUser] = useState<UserType>("user");
  const userAbilities = getAbilitiesByUser(user);
  const ability = buildAbility(userAbilities);

  return (
    <GuardContext.Provider value={ability}>
      <div className="App">
        <button onClick={() => setUser("user")}>User</button>
        <button onClick={() => setUser("admin")}>Admin</button>
        <Home />
      </div>
    </GuardContext.Provider>
  );
}

export default App;
