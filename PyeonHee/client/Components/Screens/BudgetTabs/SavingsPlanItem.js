import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const SavingPlanItem = (props) => {
  let startYear = props.startSavingDate.substring(0, 4);
  let startMonth = props.startSavingDate.substring(5, 7);
  let startDay = props.startSavingDate.substring(8, 10);

  let finishYear = props.endSavingDate.substring(0, 4);
  let finishMonth = props.endSavingDate.substring(5, 7);
  let finishDay = props.endSavingDate.substring(8, 10);
  
  // let temp = props.savingMoney + props.prevSum;
  // props.setUpdate(temp);
  // console.log(temp);

  const [userID, setUserID] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(()=>{
    let tempID;
    AsyncStorage.getItem('userID', (err, result) => {
      tempID = result;
      if(tempID!= null){
        setUserID(tempID);
      }
    })
  })


  return (
    <TouchableOpacity
      onPress={() => {
        alert('Pressed!');
    }}>
      <View style={styles.boxContainer}>
        <View style={styles.itemContainer}>
          
          <View>
            <Text style={styles.topicText}>" {props.savingName} "</Text>
            <Text>시작일: {startYear}년 {startMonth}월 {startDay}일</Text>
            <Text>종료일: {finishYear}년 {finishMonth}월 {finishDay}일</Text>
            {/* <Text>기간: {props.period}개월</Text> */}
            <Text>적금 금액:   {props.savingMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
            <Text>현재 누적액: {props.currentSavingMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
          </View>

          <Icon name={'chevron-forward-outline'} size={20} color={'gray'} />
        </View>
      </View>
    </TouchableOpacity>  
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    margin: 5,
    padding: 15,
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
});

export default SavingPlanItem;