import React from "react";
import { Text, SectionList, FlatList, View } from "react-native";
import Quote from "./components/Quote/Quote";
import styled from "styled-components/native";
import { quotes } from "./quotes";
import { Font } from "expo";

export const Container = styled.View``;

export const ContainerTouch = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #34495e;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "fjallaone-regular": require("./components/assets/FjallaOne-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      selectQuote: quotes[this.getRandom(quotes.length)]
    };
  }

  render() {
    let selectQuote = this.state.selectQuote;

    if (this.state.fontLoaded) {
      return (
        <ContainerTouch onPress={this.inspirar}>
          <Quote
            size="32"
            quoteText={selectQuote.texto}
            authorName={selectQuote.autor}
          />
        </ContainerTouch>
      );
    }
    return <View />;
  }

  inspirar = () => {
    rand = this.getRandom(quotes.length);
    console.log(rand);
    this.setState({
      selectQuote: quotes[rand]
    });
  };

  getRandom = max => {
    return Math.floor(Math.random() * max);
  };
}
