export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
       <div className="max-w-2xl space-y-6">
      <h1 className = "text-5xl font-bold">Gahan Patel</h1>
      <p className="text-lg">
        Hey, I am a second year Computer Science and Business Administration student at Northeastern University. I am originally from 
        New Orleans, Louisiana. I'm passionate about leveraging technology to solve real-world problems. 
        Whether coding applications, conducting research, or coordinating events, I approach every opportunity with 
        curiosity and collaboration.
      </p>
      <div className="flex gap-4">
      <a href="https://github.com/gahanpatel"
      target="_blank"
      className="text-amber-400 hover:text-amber-300 transition-colors">
      GitHub
      </a>

      <a href="https://linkedin.com/in/gahanpatel"
      target="_blank"
      className="text-amber-400 hover:text-amber-300 transition-colors">
      LinkedIn
      </a>
      </div>
      </div>
    </main>

  );
}