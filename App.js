import React from 'react';
import { AppLoading, Font } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      diplomata: require('./assets/fonts/DiplomataSC-Regular.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.info}>
          Look, you can load this font! Now the question is, should you use it?
          Probably not. But you can load any font.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  info: {
    fontFamily: 'diplomata',
    textAlign: 'center',
    fontSize: 14,
  },
});
