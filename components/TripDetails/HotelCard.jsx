import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function HotelCard({item}) {

    const [photoRef,setPhotoRef]=useState();
    useEffect(()=>{
        GetGooglePhotoRef();
      })
      const GetGooglePhotoRef=async()=>{
        const result= await GetPhotoRef(item.hostelName);
        setPhotoRef(result);
      }

  return (
    <View style={{
        marginRight:20,
        width:180,
      }}>
          <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photoRef+'&key=AIzaSyDbnLrPvkLVeSBcoAZ0FuWt5Ql68io9yls'}}
            style={{
              width:180,
              height:120,
              borderRadius:15
            }}
          />
          <View style={{
            padding:5
          }}>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:17,
              }}>{item.hotelName}</Text>
              <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
              }}>
                <Text style={{
                  fontFamily:'outfit'
                }}>⭐ {item.rating}</Text>
                <Text style={{
                  fontFamily:'outfit'
                }}>💵 {item.price}</Text>
              </View>
          </View>
      </View>
  )
}