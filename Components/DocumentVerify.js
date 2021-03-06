import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableWithoutFeedback, Dimensions} from 'react-native';
import LogoTitle from './LogoTitle';
import { ScrollView } from 'react-native-gesture-handler';
GLOBAL = require('./Global');

const api = ''
class DocumentVerify extends Component{
    constructor(props){
        super(props);
        this.state = {
            ticketIsBooked: false
        }
    }       

    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>,
        
    };

    loadTicket(service){
        GLOBAL.ticketBooked = true;
        this.setState({
            ticketIsBooked: true
        })
        this.props.navigation.push('TicketScreen', {
            service: service
        });
    }

    // loadGeneratedTicket(){
    //     // alert('booked');
    //     this.props.navigation.push('TicketScreen');
    //     //This will be required to change when integrating with back end
    // }

    render(){
        var service = this.props.navigation.getParam('service');
        if(service === 'Advancing Of Loans'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>

                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Completed Home Loan Application Form</Text>
                        <Text style={styles.text}>2. Passport Size Photographs</Text>
                        <Text style={styles.text}>3. Proof Of Identification</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'PAN Card'},
                                {key: 'Passport'},
                                {key: 'Aadhar Card'},
                                {key: 'Voter’s ID Card'},
                                {key: 'Driving License'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>4. Proof Of Age</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'PAN Card'},
                                {key: 'Passport'},
                                {key: 'Aadhar Card'},
                                {key: 'Birth Certificate'},
                                {key: '10th Class Marksheet'},
                                {key: 'Bank Passbook'},
                                {key: 'Driving License'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>5. Proof Of Residence</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Voter’s ID Card'},
                                {key: 'Passport'},
                                {key: 'Ration Card'},
                                {key: 'Utility Bills (Telephone Bill, Eectricity Bill)'},
                                {key: 'LIC Policy Receipt'},
                                {key: 'Bank Passbook'},
                                {key: 'Letter from a recognized public authority verifying the customer’s address'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>6. Income Documents</Text>
                        <Text>For Salaried Individuals</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Form 16'},
                                {key: 'Certified Letter From Employer'},
                                {key: 'Payslip of last 2 months'},
                                {key: 'Increment or Promotion letter'},
                                {key: 'IT returns of past 3 years'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text>Apart from the proof of income of the salaried individual, he would also have to furnish any investment proofs (like fixed deposits, shares, etc) and his passport-size photographs.</Text>
                        <Text>Self Employed:</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Income Tax Returns (ITR) of last 3 years'},
                                {key: 'Balance Sheet and Profit & Loss Account Statement of the Company/Firm (duly attested by a C.A.)'},
                                {key: 'Business License Details (or any other equivalent document)'},
                                {key: 'The license of Professional Practice (For Doctors, Consultants, etc.)'},
                                {key: 'Registration Certificate of Establishment (For Shops, Factories & Other Establishments)'},
                                {key: 'Proof of Business Address'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View >
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>7. Property Documents</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'NOC from Society/Builder'},
                                {key: 'A detailed estimate of the cost of construction of the house'},
                                {key: 'Registered Sale Deed, Allotment Letter or Stamped Agreement of Sale with the Builder (original document)'},
                                {key: 'Occupancy Certificate (in case of ready-to-move-in properties)'},
                                {key: 'Property Tax Receipts, Maintenance Bills and Electricity Bills'},
                                {key: 'Receipts of the advance payments made towards the purchase of flat (original document)'},
                                {key: 'An approved copy of the building plan (key plan/floor plan in case of purchase of flats)'},
                                {key: 'Original of the land tax paid receipt and possession certificate as issued by the revenue authority'},
                                {key: 'Payment receipt or bank account statements showing payments made to the Builder or Seller'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                            
                        <View style={styles.button}>
                            {(this.state.ticketIsBooked || GLOBAL.ticketBooked) ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                            {/* <Button title="Book My Ticket" onPress={ () => this.loadTicket()}/> */}
                        </View>   
                    </ScrollView>
                </View>
            )
        } else if(service  === 'Foreign Currency Exchange'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>
                    
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Indian Passport (Mandatory for transactions above Rs.25,000)</Text>
                        <Text style={styles.text}>2. Driving License</Text>
                        <Text style={styles.text}>3. Voter ID</Text>
                        <Text style={styles.text}>4. Aadhar Card</Text>
                        <Text style={styles.text}>5. PAN Card</Text>
                        <View style={styles.button}>
                        {GLOBAL.ticketBooked ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                        {/* <Button title="Book My Ticket" onPress={ () => this.loadTicket()}/> */}
                        </View>  
                    </ScrollView>
                </View>
            )
        } else if (service === 'Open New Savings Account'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>

                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Proof Of Identification</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'PAN Card'},
                                {key: 'Passport'},
                                {key: 'Aadhar Card'},
                                {key: 'Voter’s ID Card'},
                                {key: 'Driving License'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>2. Proof Of Residence</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Voter’s ID Card'},
                                {key: 'Passport'},
                                {key: 'Ration Card'},
                                {key: 'Utility Bills (Telephone Bill, Eectricity Bill)'},
                                {key: 'LIC Policy Receipt'},
                                {key: 'Bank Passbook'},
                                {key: 'Letter from a recognized public authority verifying the customer’s address'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>3. PAN Card</Text>
                        <Text style={styles.text}>4. Form 16 (Only if PAN is not available)</Text>
                        <Text style={styles.text}>5. Two latest passport size photographs</Text>
                        <View style={styles.button}>
                            {(this.state.ticketIsBooked || GLOBAL.ticketBooked) ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                        </View>  
                    </ScrollView>
                </View>
            )
        } else if(service === 'Credit Card'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Proof Of Identification</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'PAN Card'},
                                {key: 'Passport'},
                                {key: 'Aadhar Card'},
                                {key: 'Voter’s ID Card'},
                                {key: 'Driving License'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>2. Proof Of Residence</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Voter’s ID Card'},
                                {key: 'Passport'},
                                {key: 'Ration Card'},
                                {key: 'Utility Bills (Telephone Bill, Eectricity Bill)'},
                                {key: 'LIC Policy Receipt'},
                                {key: 'Bank Passbook'},
                                {key: 'Letter from a recognized public authority verifying the customer’s address'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>3. Proof Of Income</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Salary Slip of last 3 months'},
                                {key: 'Bank Statement of last 6 months'},
                                {key: 'Form 16'},
                                {key: 'IT return of past 3 years'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <View style={styles.button}>
                            {(this.state.ticketIsBooked || GLOBAL.ticketBooked) ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                        </View>
                    </ScrollView>
                </View>
            )
        } else if(service === 'Overdraft'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>
                    
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Proof Of Identification</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'PAN Card'},
                                {key: 'Passport'},
                                {key: 'Aadhar Card'},
                                {key: 'Voter’s ID Card'},
                                {key: 'Driving License'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>2. Proof Of Residence</Text>
                        <View style={styles.bullets}>
                            <FlatList data={[
                                {key: 'Voter’s ID Card'},
                                {key: 'Passport'},
                                {key: 'Ration Card'},
                                {key: 'Utility Bills (Telephone Bill, Eectricity Bill)'},
                                {key: 'LIC Policy Receipt'},
                                {key: 'Bank Passbook'},
                                {key: 'Letter from a recognized public authority verifying the customer’s address'},
                            ]} renderItem={({item}) => 
                                    <TouchableWithoutFeedback >
                                        <View>
                                            <Text>{'\u2022'}{item.key}</Text>
                                        </View>
                            </TouchableWithoutFeedback>}/>
                        </View>
                        <Text style={styles.text}>3. PAN Card</Text>
                        <Text style={styles.text}>4. Two passport size photographs</Text>
                        <View style={styles.button}>
                            {(this.state.ticketIsBooked || GLOBAL.ticketBooked) ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                        </View>
                    </ScrollView>
                </View>
            )
        }else if(service === 'Debit Card'){
            return(
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text>Please ensure that you have the following documents for</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 10, paddingBottom: 15}}>{service}</Text>
                    
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.text}>1. Indian Passport </Text>
                        <Text style={styles.text}>2. Driving License</Text>
                        <Text style={styles.text}>3. Voter ID</Text>
                        <Text style={styles.text}>4. Aadhar Card</Text>
                        <Text style={styles.text}>5. PAN Card</Text>
                        <View style={styles.button}>
                            {(this.state.ticketIsBooked || GLOBAL.ticketBooked) ? <Button title="View My Ticket" onPress={ () => this.loadTicket(service)}/> : <Button title="Book My Ticket" onPress={ () => this.loadTicket(service)}/>}
                        </View>  
                    </ScrollView>
                </View>
            )
        }
    }
}

const width =   Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    heading:{
        width: width,
        alignItems: 'center',
        paddingTop: 10
    },
    scrollContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'flex-start',
        width: '100%'
    },
    text: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18
    },
    bullets:{
        paddingLeft: 10,
        paddingBottom: 20,
        fontSize: 15,
        width: '100%'
    },
    button: {
        marginTop: 20,
        marginBottom: 30
    }
    
})

export default DocumentVerify;