import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex justify-center">
        <h1 className="text-6xl font-bold">Hello World👋</h1>
      </main>
      <footer className="footer pb-9 relative mb-0 px-6">
        <Button>Start</Button>
      </footer>
    </div>
  );
}
