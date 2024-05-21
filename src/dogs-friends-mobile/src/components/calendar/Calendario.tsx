import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export const Calendario = () => {
  
    const datas = {
        '2024-05-23': {
        marked: true,
        dotColor: 'green',
        selected: true,
        selectedColor: 'green',
        selectedTextColor:'white',
        disableTouchEvent: false,
      },
      '2024-05-22': {
        marked: true,
        dotColor: 'green',
        selected: true,
        selectedColor: 'green',
        selectedTextColor:'white',
        disableTouchEvent: false,
      },
    }

  return (
    <View>
        <Calendar
            style={{borderRadius: 10, elevation: 4, margin: 40}}
            onDayPress={date => {
                console.log(date);
                const {year, month, day} = date;
               
            }}
            //onMonthChange={() => {Alert.alert("movendo")}}
            initialDate={'2024-05-30'}
            minDate={'2023-12-31'}
            maxDate={'2025-06-31'}
            hideExtraDays={true}
            disabledByDefault
            disableAllTouchEventsForDisabledDays
            disableAllTouchEventsForInactiveDays
            
            markedDates={datas}

            />
   </View>
  )
}