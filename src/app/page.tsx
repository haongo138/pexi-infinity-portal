import Header from './components/Header'
import About from './components/About'

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-900 to-gray-900">
      <Header />
      <About />
      <footer className="self-end p-5 max-w-sm text-xs text-right font-clash">
        © 2023 Pexi Infinity
        <br/>
        Disclaimer: project does not claim any rights to ownership of the Unknown King used for illustrative and entertainment purpose</footer>
    </main>
  )
}
