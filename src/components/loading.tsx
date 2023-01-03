import React from 'react'
import {View, Modal, ActivityIndicator} from 'react-native'

const Loading = ({visible}) => {
    return(
        <Modal transparent visible={visible}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#edede40'}}>
                <ActivityIndicator size="large" color={'#22354F'} animating={true}/>
            </View>
        </Modal>
    )
}

export default Loading;