import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        flex: 1
    },
    flexRowSpaceBetween: {

        flexDirection: "row", justifyContent: "space-between"

    },

    flexDirectionRow: {
        flexDirection: "row"
    },

    flexRowAlignCenter: {
        flexDirection: "row", alignItems: "center"
    },
    marginVerticalSmall: {
        marginVertical: 10,

    },
    marginHorizontalSmall: {
        marginHorizontal: 10,

    },


    cardShadow:
    {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 10,
        padding: 10
    },
    fontBold: {
        fontWeight: "bold"

    },
    cartChangeButton: {
        backgroundColor: "green", borderRadius: 20
    },

    header: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 8,
        marginBottom: 4
    },
    cartNumber: {

        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 50,
        paddingHorizontal: 3,
        alignSelf: 'flex-start',
        minWidth: 20,
        right: -10,
        top: 3


    },


    image:
        { height: 200 },

    text: {
        color: "black"
    },

    textTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },
    
    textSubTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
});

export default commonStyles;
