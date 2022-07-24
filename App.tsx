import { NativeBaseProvider } from "native-base";
import Main from "./Main";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}
