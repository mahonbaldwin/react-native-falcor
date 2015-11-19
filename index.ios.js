/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Falcor = require('falcor');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const model = new Falcor.Model({
  cache: {
    greeting: 'Hello World'
  }
});

var rnfalcor = React.createClass({
  getInitialState: function() {
    return {
      message: 'Loading ...'
    };
  },

  componentDidMount: function() {
    model.get('greeting').then((data) => this.setState({ message: data.json.greeting }));
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Falcor!
        </Text>
        <Text style={styles.instructions}>
          {this.state.message}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnfalcor', () => rnfalcor);
