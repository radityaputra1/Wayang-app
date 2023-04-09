import { StyleSheet } from "react-native";

const color = {
    'BrownDev': '#C4C4B9',
    'BrownDev2' : '#BABAAF',
    'BrownDev3' : '#B0B0A5',
    'BrownDev4' : '#A6A69C',
    'GrayDev' : '#6D6969',
    'WhiteDev' : '#EEEEE0'
}

export const styleGlobal = StyleSheet.create ({
    //splashscreen Styling
    splash: {
        flex: 1,
        backgroundColor: color.WhiteDev,
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonLogin: {
        backgroundColor: color.GrayDev,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 55
    },

    //home Styling
    home: {
        backgroundColor: color.WhiteDev,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 16,
        backgroundColor: color.BrownDev,
        borderRadius:6,
        marginRight:16
    },
    buttonActive: {
        paddingVertical: 7,
        paddingHorizontal: 16,
        backgroundColor: color.GrayDev,
        borderRadius:6,
        marginRight:16
    },
    listContainer: {
        width: 310,
        height:84,
        backgroundColor: color.BrownDev,
        borderRadius: 8,
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 13
    },
    textContainer: {
        width: 200,
        marginLeft: 16
    },
    textHead: {
        color: color.GrayDev,
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 4
    },
    textDesc: {
        color: color.GrayDev,
        fontSize: 12,
        fontWeight: 400
    },
    bottomNavigationBar: {
        height: 66,
        borderRadius: 25,
        backgroundColor: color.GrayDev,
        width: '100%',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    //detail Styling
    mainMateri: {
        backgroundColor: color.WhiteDev,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },
    headMateri: {
        marginTop: 68,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '80%',
        marginBottom: 94
    },
    contentMateri: {
        height: '79%',
        width: '100%',
        backgroundColor: color.GrayDev,
        borderRadius: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textMateri: {
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
        marginHorizontal: 32,
        lineHeight: 25,
        marginTop: 16,
    },
    textMateri2: {
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
        marginRight: 32,
        lineHeight: 25,
        marginTop: 16,
        marginLeft: 72,
    },
    bottomBarMateri: {
        width: '100%',
        height: 90,
        backgroundColor: color.BrownDev2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 40,
        zIndex: 2,
        alignSelf: 'flex-end'
    },
    //search Styling
    mainSearch: {
        flex: 1,
        backgroundColor: color.WhiteDev,
        flexDirection: "column",
        alignItems: 'center'
    },
    search: {
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 11,
        width: 310,
        marginTop: 32,
        marginBottom: 16,
        borderColor: '#A6A69C',
        justifyContent: "space-between",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: 'center'
    },
    //quiz Styling
    mainQuiz: {
        backgroundColor: color.WhiteDev,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentQuiz: {
        width: '100%',
        height: '65%',
        backgroundColor: color.BrownDev4,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textQuiz: {
        flexDirection: 'row',
        width: 326,
        marginBottom: 12,
    },
    textTitleQuiz: {
        color: '#F2F2F2',
        fontSize: 14
    },
    textTitleQuiz2: {
        color: '#F2F2F2',
        fontSize: 14,
        fontWeight: 600
    },
    quizPilihan: {
        width: 330,
        height: 48,
        borderRadius: 16, 
        backgroundColor: color.GrayDev,
        marginBottom: 15,
        justifyContent: 'center',
        paddingLeft: 20
    },
    quizPilihan1: {
        width: 330,
        height: 48,
        borderRadius: 16, 
        backgroundColor: color.BrownDev2,
        marginBottom: 15,
        justifyContent: 'center',
        paddingLeft: 20
    },
    textPilihan: {
        color: 'white',
        fontSize: 14,
        fontWeight: 500
    },
    quizReview:{
        width: '100%',
        height: 347,
        backgroundColor: color.BrownDev4,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    jawaban: {
        backgroundColor: '#27AE60',
        width: 155,
        height: 74,
        borderRadius: 16,
        flexDirection: 'column',
        paddingVertical: 12,
        paddingLeft:16
    },
    jawabanSalah: {
        backgroundColor: '#EB5757',
        width: 155,
        height: 74,
        borderRadius: 16,
        flexDirection: 'column' ,
        paddingVertical: 12,
        paddingLeft:16
    },
    textJawaban: {
        color: 'white',
        fontSize: 13,
        fontWeight: 500,
        marginBottom: 8
    },
    buttonCheck: {
        width: 326,
        backgroundColor: color.BrownDev,
        height: 48,
        marginBottom: 16,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCoba: {
        width: 326,
        backgroundColor: color.GrayDev,
        height: 48,
        marginBottom: 16,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }, 
    timer: {
        fontWeight: 500,
        fontSize: 16,
        marginLeft: 6
    }, 
    quizSubject: {
        fontWeight: 500,
        fontSize: 14,
        opacity: 0.5
    }
})