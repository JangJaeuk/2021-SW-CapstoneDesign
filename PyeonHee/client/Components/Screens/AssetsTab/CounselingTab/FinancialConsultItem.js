import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import RankingLogo from './RankingLogo';

const FinancialConsultItem = (props) => {

    return (
        <TouchableOpacity
            style={styles.container}
            // onPress={() => props.navigation.navigate('FinancialConsult', {consultNumber: props.consultNumber})}
        >
            <View style={styles.itemContainer}>
                <View style={styles.accountLogoContainer}>
                    <RankingLogo rank={props.counselorRank}/>
                </View>


                <View style={styles.item2}>
                    <Text>상담 분야: {props.consultPart}</Text>
                    <Text>소속: {props.counselorCorp}</Text>
                    <Text>상담사: {props.counselorName}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={require('../../assets/redHeart.png')} style={styles.likeLogo}/>
                        <Text style={{marginLeft: 5, }}>{props.counselorLike}</Text>
                    </View>
                </View>

                <View style={styles.nextContainer}>
                    <Icon name={'chevron-forward-outline'} size={20} color={'#8EB3EE'}/>
                </View>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 90,
    },
    accountLogoContainer: {
      width: 50,
      height: 50,
      marginLeft: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'gray',
    },
    item2: {
        marginRight: 20,
        backgroundColor: 'pink',
        width: 150
        // justifyContent: 'space-between',
    },
    nextContainer: {
        marginRight: 15,
    },
    likeLogo: {
        width: 15,
        height:15,

    },
  });

export default FinancialConsultItem;