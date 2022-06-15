import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ItemRows = ({ item }) => {
    return (
        <View style={styles.rows}>
            <View style={{
                // flex:1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'center',
                backgroundColor: 'white',
                borderRadius:10
            }}>
                <View style={{marginRight:20}}>
                    <Image
                        source={{
                            // uri: `https://flagcdn.com/48x36/${item.CountryCode}.png`
                            uri :`https://flagcdn.com/48x36/za.png`
                            // uri: `https://www.countryflags.io/${item.CountryCode}/flat/64.png`
                        }}
                        style={styles.flag}
                    />
                </View>
                <View style={{ flex:1,marginRight: 90, marginTop: 5, justifyContent:'center'}}>
                    <Text style={styles.countryName}>{item.Country}</Text>
                </View>
                <View style={{justifyContent:'flex-end'}}>
                    <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rows: {
        width: '100%',
        marginTop: 10,
        marginBottom: 8,
        padding: 10,
        
    },
    countryName: {
        fontSize: 18,
        color:'black',
        fontWeight: 'bold'
    },
    totalCases: {
        fontSize: 16,
        color:'black',
        fontWeight: 'bold',
        marginTop: 5
    },
    flag: {
        height: 30,
        width: 40,
        padding: 10, 
        borderRadius: 1000
    }
});

export default ItemRows;