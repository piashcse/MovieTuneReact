import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ActivityIndicator, ListView, Text, View, Image
} from 'react-native';


export default class Screen2 extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c37d3b40004717511adb2c1fbb15eda4&page= 1')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.results),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={{flex: 1, paddingTop: 4}}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <View style={{
                            flex: 1,
                            flexDirection:'column',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection:'row',
                                // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
                                backgroundColor: 'mediumseagreen'
                            }}>


                                <Image
                                    source={{uri: 'http://image.tmdb.org/t/p/w500/'+ rowData.poster_path+'?api_key=c37d3b40004717511adb2c1fbb15eda4'}}
                                    style={{width: 120, height: 160, margin: 5}}
                                >
                                </Image>
                                <View style={{
                                    flex: 1,
                                    flexDirection:'column',
                                    height: 150
                                }}>
                                    <Text style={styles.flatListItem}>{rowData.title}</Text>

                                </View>
                            </View>
                            <View style={{
                                height: 1,
                                backgroundColor:'white'
                            }}>

                            </View>
                        </View>
                    }
                />
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
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
});
