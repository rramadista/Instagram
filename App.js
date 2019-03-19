import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import Main from './src/components'
import store from './src/services/redux/store'

// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// 	android:
// 		'Double tap R on your keyboard to reload,\n' +
// 		'Shake or press menu button for dev menu',
// });

export default class App extends Component {
	render() {
		return (
			<View>
				<Provider store={store}>
					<Main></Main>
				</Provider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
