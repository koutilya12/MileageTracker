import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import rData from '../../RefuellingData'

const RefuellingDetails = () => {
    const [limit, setLimit] = useState(true)

    const renderList = () => {
        data = limit ? rData.slice(0, 4) : rData
        return (
            data.map(item => {
                return (
                    <View style={styles.listContent}>
                        <Image source={require('../../assets/images/refuelImage.png')} style={styles.imageStyle} />
                        <View style={styles.dataView}>
                            <Text style={styles.dateStyle}>{item.date}</Text>
                            <Text style={styles.fuelStyle}>{item.fuel}</Text>
                        </View>
                        <Text style={styles.costStyle}>{item.cost}</Text>
                    </View>
                )
            })
        )
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.body}>
                <Text style={styles.titleText}>Refuelling history</Text>
                <TouchableOpacity onPress={() => {
                    setLimit(limit ? false : true)
                }} style={styles.topTextStyle}>
                    {
                        limit ?
                            <Text style={styles.topText}>See all <Icon name="chevron-right" size={16} color="#BE2C2F" /></Text> :
                            <Text style={styles.topText}>See less <Icon name="chevron-down" size={16} color="#BE2C2F" /></Text>
                    }
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listView} scrollEnabled={true}>
                {renderList()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#D2DDE7",
        flexDirection: "column",
    },
    listView: {
        height: "85%",
        backgroundColor: "#99AFC9",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white",
        marginBottom: 10
    },
    body: {
        flexDirection: "row",
    },
    titleText: {
        fontSize: 20,
        color: "#2D4877",
        margin: 10,
        paddingTop: 10
    },
    topText: {
        fontSize: 16,
        color: "#BE2C2F",
    },
    topTextStyle: {
        position: "absolute",
        right: 0,
        marginTop: 25,
        paddingRight: 10
    },
    listContent: {
        backgroundColor: "white",
        height: 80,
        width: "95%",
        borderRadius: 10,
        margin: 10,
        borderBottomWidth: 5,
        borderColor: "grey",
        alignItems: "center",
        flexDirection: "row"
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: "center"
    },
    dataView: {
        // flexDirection: "row",
        paddingBottom: 10,
        margin: 5
    },
    dateStyle: {
        fontSize: 20
    },
    costStyle: {
        position: "absolute",
        // justifyContent: "flex-end",
        right: 0,
        margin: 10,
        fontSize: 18,
        color: "#6B9BD2"
    },
    fuelStyle: {
        fontSize: 12,
        color: "#ACAEB1"
    }
})

export default RefuellingDetails