import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Chair",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "chairs",
          price: "19.99$",
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "tables",
          price: "39.99$",
        },
        {
          id: 3,
          title: "Couch",
          img: "couch.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "chairs",
          price: "119.99$",
        },
        {
          id: 4,
          title: "Lamp",
          img: "lamp.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "lamps",
          price: "9.99$",
        },
        {
          id: 5,
          title: "Cabinet",
          img: "cabinet.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "cabinets",
          price: "89.99$",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
