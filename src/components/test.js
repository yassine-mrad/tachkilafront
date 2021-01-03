import React, { useState } from 'react';
import {
    View, Button, Platform, Text,
    Input, TextInput, Pressable
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Test = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (sevent, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>


            {/* <TouchableOpacity onPress={showTimepicker}>

                <TextInput
                  
                    value={date}
                    autoCapitalize="none"
                    onChangeText={(selectedDate) => onChange(selectedDate)} />

</TouchableOpacity> */}


            <TouchableOpacity
                onPress={showTimepicker}
                style={{
                    borderColor: '#00EAA1',
                    borderWidth: 1,
                    marginTop: 15
                }}
            >
                <Text style={{
                    color: '#009387'
                }}>Connexion</Text>
           </TouchableOpacity>
            {
                show && (
                    <DateTimePicker
                        
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={(selectedDate) => onChange(selectedDate)}

                    />
                )}
 
        </View>
    );
};

// import React, { Component, useState } from 'react';
// import { View, Button, Platform, Text } from 'react-native';



// import DatePicker from 'react-native-custom-datetimepicker'

// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// export class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state =
//         {
//             date: "2016-05-15",

//         }



//     }

// import React, { Component, useState } from 'react';
// import { View, Button, Platform, Text } from 'react-native';



// import DatePicker from 'react-native-custom-datetimepicker'

// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import DateTimePicker from 'react-native-modal-datetime-picker';


// export class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state =
//         {
//             date: "2016-05-15",
//             mode: "date",
//             show: "false"
//         }



//     }


//     const[date, setDate] = useState(new Date(1598051730000));
// const [mode, setMode] = useState('date');
// const [show, setShow] = useState(false);

// onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
// };

// showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
// };

// showDatepicker = () => {
//     showMode('date');
// };

// showTimepicker = () => {
//     console.log("maryem");
//     // showMode('time');
// };


// render() {

//     return (
//         <View>

//             <DateTimePicker
//                 testID="dateTimePicker"
//                 value={this.state.date}
//                 mode="time"
//                 is24Hour={true}
//                 display="default"
//                 onChange={this.onChange}
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             />


//             {
//             show && (
//                 <DateTimePicker
//                     testID="dateTimePicker"
//                     value={date}
//                     mode={mode}
//                     is24Hour={true}
//                     display="default"
//                     onChange={onChange}
//                 />
//             )
//         }
//         </View>
//     );
// }
// };




//     render() {

//         return (
//             <View>
//                 <DatePicker
//                     style={{ width: 200 }}
//                     date={this.state.date}
//                     mode="date"
//                     placeholder="select date"
//                     format="YYYY-MM-DD "
//                     minDate="2016-05-01"
//                     maxDate="2016-06-01"
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel"
//                     customStyles={{
//                         dateIcon: {
//                             position: 'absolute',
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0
//                         },
//                         dateInput: {
//                             marginLeft: 36
//                         }
//                         // ... You can check the source to find the other keys.
//                     }}
//                     onDateChange={(date) => { this.setState({ date: date }) }}
//                 />



//             </View>
//         );
//     }
// };
