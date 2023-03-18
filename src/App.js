import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
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
          category: "sofas",
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
        {
          id: 6,
          title: "Mirror",
          img: "mirror.avif",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          category: "mirrors",
          price: "23.99$",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}  onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} onAdd={this.addToOrder} items={this.state.currentItems} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
      })
      if(!isInArray) 
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
