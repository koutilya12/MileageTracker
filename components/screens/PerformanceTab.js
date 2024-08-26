import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const PerformanceTab = () => {
    return (
        <View style={styles.body}>
            <View>
                <Text style={styles.descText}>Money spend on fuel</Text>
                <View style={styles.barView}>
                    <BarChart
                        style={{
                            borderRadius: 10,
                            margin: 15
                        }}
                        data={data = {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43]
                                }
                            ]
                        }}
                        // width={Dimensions.get("window").width}
                        width={310}
                        height={230}
                        yAxisSuffix="k"
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            barPercentage: 0.7,
                            height: 5000,
                            fillShadowGradient: `rgba(200,53,83,100)`,
                            fillShadowGradientOpacity: 1,
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(200,53,83,100)`,
                            labelColor: (opacity = 1) => `rgba(33, 67, 124, 100)`,

                            style: {
                                borderRadius: 16,
                                fontFamily: "Bogle-Regular",
                            },
                            propsForBackgroundLines: {
                                strokeWidth: 1,
                                stroke: "#e3e3e3",
                                strokeDasharray: "0",
                            },
                            propsForLabels: {
                                fontFamily: "Bogle-Regular",
                            },
                        }}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.descText}>Vehicle mileage performance</Text>
                <View style={styles.lineView}>
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                            datasets: [{
                                data: [0, 10, 24, 39, 10],
                                color: () => `rgba(200,53,83,100)`,
                                strokeWidth: 2
                            }]
                        }}
                        width={340}
                        height={230}
                        // yAxisLabel="$"
                        // yAxisSuffix="k"
                        // yAxisInterval={1}
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 0,
                            color: () => `rgba(245,246,248,100)`,
                            labelColor: () => `rgba(33, 67, 124, 100)`,
                            style: {
                                borderRadius: 16,
                                borderWidth: 5,
                                borderColor: "red"
                            },
                            propsForDots: {
                                strokeWidth: "2",
                                // stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            margin: 15,
                            borderRadius: 10,
                        }}
                    />
                </View>
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
        color: "#2D4877"
    }
})

export default PerformanceTab