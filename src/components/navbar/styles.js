import { makeStyles } from "@material-ui/core/styles";


export default makeStyles({
    nav: {
        backgroundColor: 'grey',
        height: '10vh',
        display: 'flex'
    },

    textArea1 : {
        marginLeft: '20%',
        borderRight: '2px solid beige',
        marginTop: '5pt',
        resize: 'none',
        borderTopLeftRadius : '8pt',
        borderBottomLeftRadius: '8pt',
        border: 'none',
        outline: 'none',
        paddingTop: '9pt',
        paddingLeft: '12pt',
        height: '20pt',
        fontSize: '12pt',
        width: '8%'
    },

    textArea: {
        marginTop: '5pt',
        resize: 'none',
        borderTopRightRadius: '8pt',
        borderBottomRightRadius: '8pt',
        border: 'none',
        outline: 'none',
        paddingTop: '9pt',
        paddingLeft: '12pt',
        height: '20pt',
        fontSize: '12pt',
        width: '35%'
    },

    myAccountDiv: {
        marginTop: '5pt',
        marginLeft: '10%'
    },
    
    myAccount: {
        backgroundColor: 'white',

    }
})