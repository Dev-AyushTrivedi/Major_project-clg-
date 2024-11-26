import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import UserTripCard from './UserTripCard';
import { useRoute } from '@react-navigation/native'
import { useNavigation, useRouter } from 'expo-router';
 
export default function UserTripList({userTrips}) {
    const LatestTrip=JSON.parse(userTrips[0].tripData)
    const router=useRouter();

    return userTrips&&(
        <View>
            <View style={{
                marginTop:20
            }}>
                {LatestTrip?.locationInfo?.photoRef?
                <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo?.photoRef+'&key=AIzaSyDbnLrPvkLVeSBcoAZ0FuWt5Ql68io9yls'}}
                style={{
                    width:'100%',
                    height:240,
                    borderRadius:15,
                    objectFit:'cover'
                }}
                />
                :
                <Image source={require('./../../assets/images/2.jpg')}
                    style={{
                        width:'100%',
                        height:240,
                        borderRadius:15,
                        objectFit:'cover'
                    }}
                />}
                <View style={{marginTop:10}}>
                    <Text style={{
                        fontSize:20,
                        fontFamily:'outfit-medium',
                        fontSize:24
                    }}>{userTrips[0]?.tripPlan?.travelPlan?.location}</Text>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        display: 'flex',
                        marginTop:5
                    }}>

                    <Text style={{
                        fontFamily:'outfit',
                        fontSize:17,
                        color:Colors.GRAY
                    }}>{moment(LatestTrip?.startDate).format('DD MMM YYYY')}</Text>
                  
                    <Text style={{
                        fontFamily:'outfit',
                        fontSize:17,
                        color:Colors.GRAY
                    }}>🚌 {LatestTrip.traveler.title}</Text>

                    </View>
                    <TouchableOpacity 
                    onPress={()=>router.push({pathname:'/trip-details',params:{
                        trip:JSON.stringify(userTrips[0])
                    }})}
                    style={{
                        backgroundColor:Colors.PRIMARY,
                        padding:15,
                        borderRadius:15,
                        marginTop:10
                    }}>
                      <Text style={{
                        color:Colors.WHITE,
                        fontSize:15,
                        fontFamily:'outfit-medium',
                        textAlign:'center'
                      }}>See your plan</Text>
                    </TouchableOpacity>
                </View>

                {userTrips.map((trip,index)=>(
                    <UserTripCard trip={trip} key={index}/>
                ))}
            </View>
        </View>
    )
}