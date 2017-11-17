import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  // componentDidMount(){
  //   this.props.receivePokemonItem(this.props.match.params.itemId);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (newProps.match.params.itemId !== this.props.match.params.itemId) {
  //     this.props.receivePokemonItem(newProps.match.params.itemId);
  //   }
  // }

  render() {
    // const { name, price, happiness, image_url } = this.props.item;
    console.log(this.props);
    return(
      <section>
          <ul>
            <li><h1>{this.props.random.name}</h1></li>
            <li>Happiness: {this.props.random.happiness}</li>
            <li>Price: ${this.props.random.price}</li>
          </ul>
      </section>
    );
  }
}

export default ItemDetail;
