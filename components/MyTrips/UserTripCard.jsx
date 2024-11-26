import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from '@/constants/Colors'

export default function UserTripCard(trip) {
  const formatData=(data)=>{
    return JSON.parse(data);
  }
  return (
    <View style={{
        marginTop:20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    }}>
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).locationInfo?.photoRef+'&key=AIzaSyDbnLrPvkLVeSBcoAZ0FuWt5Ql68io9yls'}}
                style={{
                    wwidth:100,
                    height:100,
                    borderRadius:15,
                }}
                />
      {/* <Image source={require('./../../assets/images/4.jpg')}
            style={{
                width:100,
                height:100,
                borderRadius:15,

            }}
      /> */}
      <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 18,
        }}>{tripPlan?.travelPlan?.location}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 14,
          color: Colors.GRAY,
        }}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
        <Text>Traveling: {formatData(trip.tripData).traveler.title}</Text>
      </View>
    </View>
  )
}