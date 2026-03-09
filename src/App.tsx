import rawData from "../data.json";
import type { ApiEventResponse } from "./types";
import { Header } from "./components/Header";
import { Events } from "./components/Events";
import { MyChoices } from "./components/MyChoices";
import { Footer } from "./components/Footer";

function App() {
  const data: ApiEventResponse = rawData as unknown as ApiEventResponse;
  const events = data.events;

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex items-start justify-center min-h-8/12 px-4 py-6 gap-6">
        <div className="w-3/4 border p-4 rounded-md shadow-md flex flex-col gap-4 overflow-y-auto max-h-screen">
          <Events events={events} />
        </div>
        <div className="w-1/4">
          <MyChoices />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
