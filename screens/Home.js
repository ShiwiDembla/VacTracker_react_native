
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../src/components/Cards';
import ItemRows from '../src/components/ItemRows';
const Home = () => {


    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setIsloading(false);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);

    const ItemDivider = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
            }}
          />
        );
      }


    return (
        <View style={styles.container}>
            <Text style={styles.covidHeading}>COVID19 DASHBOARD</Text>
            <View style={styles.cards}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 100 }}
                >
                    <Cards
                        style ={{alignItems:'center'}}
                        icon="pulse"
                        title="Total Cases"
                        bg="#48A296"
                        number={data ? data.Global.TotalConfirmed : 0}
                    />

                    <Cards
                        icon="medkit"
                        title="Recovered"
                        bg="#48A296"
                        number={data ? data.Global.TotalRecovered : 0}
                    />

                    <Cards

                        icon="nuclear"
                        title="Death Reported"
                        bg="#48A296"
                        number={data ? data.Global.TotalDeaths : 0}
                    />
                </ScrollView>
            </View>
            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={styles.casesHeading}>Covid Cases by region</Text>
                </View>
            </View>
            <View style={styles.flatList}>
                
                <FlatList 
                    data={data && data.Countries ?  data.Countries : 0}
                    renderItem={({item})=> <ItemRows item={item}
                    ItemSeparatorComponent={ItemDivider}/>
                } 
                />
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    covidHeading: {
        color: '#48A296',
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        // marginTop: 20
    },
    cards: {
        marginTop: -90,
        // height: 220,
    },
    casesHeading:{
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 20
    },
    flatList:{
        marginTop:-20,
        backgroundColor:'white',
        margin:10,
        padding:10,
        borderRadius:30,
      
    }
})

export default Home;