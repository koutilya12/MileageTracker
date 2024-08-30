import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { getItem, setItem } from '../../utils/AsyncStorage';
import { useIsFocused } from '@react-navigation/native';

const PerformanceTab = () => {
    const isFocused = useIsFocused();
    const [costData, setCostData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [mileageData, setMileageData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    

    useEffect(() => {
        setDefaultData();
    },[])

    const calculateCostData = (val) => {
        console.log('calculateCostData(), val:', val);
        var cosData1 = val.reduce((map, obj) => {
            let key = parseInt(obj.refuellingDate.substring(5, 7));
            let value = map[key];
            if (!value)
                map[key] = parseFloat(obj.total);
            else {
                map[key] = value + parseFloat(obj.total);
            }
            return map;
        }, {});
        console.log('cosData1', cosData1);
        let arr = [];
        for (i = 1; i <= 12; i++) {
            let v2 = cosData1[i];
            arr.push(v2 ? v2 : 0);
        }
        console.log(arr);
        setCostData(arr);
    }

    const calculateMileage = (val, vehicle) => {
        console.log('mileageData', val);

        var mileageData1 = val.reduce((map, obj) => {
            let key = parseInt(obj.refuellingDate.substring(5, 7));
            let value = map[key];
            if (!value)
                map[key] = parseFloat(obj.fuel);
            else {
                map[key] = value + parseFloat(obj.fuel);
            }
            return map;
        }, {});
        console.log('mileageData1', mileageData1);

        let arr = [];
        console.log("vehicleMileage",vehicle)
        for (i = 1; i <= 12; i++) {
            let v2 = mileageData1[i];
            arr.push(v2 ? (parseFloat(v2) * parseFloat(vehicle.vehicleMileage)) : 0);
        }
        console.log(arr);
         setMileageData(arr);
    }

    const setDefaultData = () => {
     setCostData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
     setMileageData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    useEffect(() => {
        if (isFocused) {
            getItem("loggedInUser").then(user => {
                console.log("yoyoy")
                getItem("selectedVehicle_").then(vehicle => {
                    if(vehicle){
                        getItem("refuellingList_" + vehicle?.id + user?.id).then(val => {
                            if (val) {
                                calculateCostData(val);
                                calculateMileage(val, vehicle)
                            } else {
                                setDefaultData();
                            }
                        })
                    }else {
                        console.log("hhihih")
                        setDefaultData();
                    }

                })
            })
        }
    }, [isFocused]);

    return (
        <View style={styles.body}>
            <View>
                <Text style={styles.descText}>Money spend on fuel</Text>
                {/* <View style={styles.barView}> */}
                <BarChart
                    style={{
                        borderRadius: 10,
                        // margin: 15,
                        borderWidth: 3,
                        borderColor: "#2D4877"
                    }}
                    data={data = {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                data: costData
                            }
                        ]
                    }}
                    // width={Dimensions.get("window").width}
                    width={345}
                    height={230}
                    // yAxisLabel="rs."
                    yAxisSuffix=".₹"
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        barPercentage: 0.2,
                        height: 5000,
                        fillShadowGradient: `rgba(200,53,83,100)`,
                        fillShadowGradientOpacity: 1,
                        decimalPlaces: 0,
                        color: () => `rgba(200,53,83,100)`,
                        labelColor: () => `rgba(33, 67, 124, 100)`,
                        style: {
                            borderRadius: 16,
                            fontFamily: "Bogle-Regular",
                        },
                        propsForBackgroundLines: {
                            strokeWidth: 1,
                            stroke: "#e3e3e3",
                            strokeDasharray: "0",
                        },
                        // propsForLabels: {
                        //     fontFamily: "Bogle-Regular",
                        // },
                    }}
                />
                {/* </View> */}
            </View>

            <View>
                <Text style={styles.descText}>Vehicle mileage performance</Text>
                {/* <View style={styles.lineView}> */}
                <LineChart
                    style={{
                        margin: 5,
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: "#2D4877"
                    }}
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            data:  mileageData,
                            color: () => `rgba(200,53,83,100)`,
                            strokeWidth: 2
                        }]
                    }}
                    width={Dimensions.get("window").width}
                    height={230}
                    // yAxisLabel="$"
                    yAxisSuffix=".km"
                    // yAxisInterval={1}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 0,
                        color: () => `rgba(245,246,248,100)`,
                        labelColor: () => `rgba(33, 67, 124, 100)`,
                        // propsForDots: {
                        //     strokeWidth: "2",
                        // }
                    }}
                    bezier
                />
                
                {/* </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#D2DDE7"
    },
    barView: {
        backgroundColor: "#99AFC9",
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10
    },
    lineView: {
        backgroundColor: "#99AFC9",
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10
    },
    descText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold",
        color: "#2D4877",
    }
})

export default PerformanceTab


