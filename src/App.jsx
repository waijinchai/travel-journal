import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data.js"
import './App.css'

function App() {
  const noOfItems = Object.keys(data).length;
  const cards = data.map((item) => (
    <Card 
      key={item.id}
      {...item}
      noOfItems={noOfItems}
    />
  ))

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
