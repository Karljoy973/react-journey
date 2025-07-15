import { BottomBar } from "./components/BottomBar";
import { FormSection } from "./components/form/FormSection";
import { MenuElement } from "./components/MenuElement";
import { SearchInput } from "./components/SearchInput";
import { TextWidget } from "./components/TextWidget";

function App() {
  return (
    <>
      <SearchInput />
      <ul>
        <MenuElement title="Hello World" />
        <MenuElement title="Hey man !" />
      </ul>

      <BottomBar />
      <p>{""}</p>
      <TextWidget>
        <div>Hello World</div>
      </TextWidget>

      <FormSection />
    </>
  );
}

export default App;
