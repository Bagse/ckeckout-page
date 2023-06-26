import CardProducts from "./components/CardProducts"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="px-3 py-5 lg:px-72">
      <h1 className="capitalize font-mont text-2xl font-semibold md:text-4xl">checkout</h1>
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:py-8 md:gap-10">
        <CardProducts />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
