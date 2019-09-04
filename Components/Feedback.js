import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, View, Image, FlatList, TouchableWithoutFeedback, Dimensions, Button, Slider} from 'react-native';
import LogoTitle from './LogoTitle';
import { ScrollView } from 'react-native-gesture-handler';


class Feedback extends Component{
    
    constructor(props) {
        super(props)
        this.state = { 
            scoreOne: 0,
            scoreTwo: 0,
            scoreThree: 0,
            textFeedback: '' 
        }
    } 

    getVal(val){
        console.warn(val);
    } 

    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
    };

    submitFeedback(){
        this.props.navigation.navigate('HomeScreen')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{fontWeight: 'bold',fontSize: 20}}>Feedback Form</Text>
                </View>
                <ScrollView>
                    <Text style={{fontWeight: 'bold'}}>Please rate our agent's service out of 5</Text>
                    <View style={styles.label}>
                        <Text>1. Helpful</Text>
                        <View style={styles.slider}>
                            <Slider
                                style={styles.sliderBar}
                                step={1}
                                minimumValue={0}
                                maximumValue={5}
                                value={this.state.scoreOne}
                                onValueChange={val => this.setState({ scoreOne: val })}
                                onSlidingComplete={ val => this.getVal(val)}
                            />
                            <FlatList contentContainerStyle={styles.scoreContainer} data={[
                                {key: '0'},
                                {key: '1'},
                                {key: '2'},
                                {key: '3'},
                                {key: '4'},
                                {key: '5'},
                            ]} renderItem={({item}) => 
                                <TouchableWithoutFeedback >
                                        <View style={styles.score}>
                                            <Text>{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                    </View>
                    <View style={styles.label}>
                        <Text>2. Knowledgeable</Text>
                        <View style={styles.slider}>
                            <Slider
                                style={styles.sliderBar}
                                step={1}
                                minimumValue={0}
                                maximumValue={5}
                                value={this.state.scoreTwo}
                                onValueChange={val => this.setState({ scoreTwo: val })}
                                onSlidingComplete={ val => this.getVal(val)}
                            />
                            <FlatList contentContainerStyle={styles.scoreContainer} data={[
                                {key: '0'},
                                {key: '1'},
                                {key: '2'},
                                {key: '3'},
                                {key: '4'},
                                {key: '5'},
                            ]} renderItem={({item}) => 
                                <TouchableWithoutFeedback >
                                        <View style={styles.score}>
                                            <Text>{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                    </View>
                    <View style={styles.label}>
                        <Text>3. Quickness</Text>
                        <View style={styles.slider}>
                            <Slider
                                style={styles.sliderBar}
                                step={1}
                                minimumValue={0}
                                maximumValue={5}
                                value={this.state.scoreThree}
                                onValueChange={val => this.setState({ scoreThree: val })}
                                onSlidingComplete={ val => this.getVal(val)}
                            />
                            <FlatList contentContainerStyle={styles.scoreContainer} data={[
                                {key: '0'},
                                {key: '1'},
                                {key: '2'},
                                {key: '3'},
                                {key: '4'},
                                {key: '5'},
                            ]} renderItem={({item}) => 
                                <TouchableWithoutFeedback >
                                        <View style={styles.score}>
                                            <Text>{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                    </View>

                    <View style={{marginTop: 50}}>
                        <Text style={{fontWeight:'bold'}}>How can we improve our services ?</Text>
                    </View>
                    
                    <View style={styles.feedbackContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({
                                textFeedback: text
                            })}
                            value={this.state.textFeedback}
                            style={styles.feedbackSpace}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Submit"  onPress={ ()=> {this.submitFeedback()}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    heading:{
        marginTop: 20,
        marginBottom: 30,
        
    },
    label:{
        marginTop: 20,
        marginBottom: 10
    },
    slider:{
        width: screenWidth*0.85
    },
    scoreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    sliderBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '92%'
    },
    feedbackContainer:{
        borderColor: '#D0D0D0',
        borderWidth: 1,
        padding: 5,
        width: screenWidth*0.85,
        marginTop: 15,
        marginBottom: 30
    },
    feedbackSpace: {
        textAlignVertical: 'top',
    },
    button:{
        marginTop: 10,
        marginBottom: 20
    }  
})

export default Feedback