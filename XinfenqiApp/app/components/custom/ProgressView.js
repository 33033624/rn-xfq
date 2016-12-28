/**
 * Created by wuran on 16/12/21.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    StyleSheet,
    Platform,
    ActivityIndicator,
    Color,
    ColorPropType
} from "react-native"


var SIZE = [
    'small',
    'large'
];

export class ProgressView extends Component {

    static Props = {
        ...View.Props,
        color: ColorPropType,
        animating: PropTypes.bool,
        size: PropTypes.oneOf(SIZE)
    }

    render() {

        var {color, animating, size, ...props} = this.props

        if (Platform.OS == 'android') {
            return <ActivityIndicator {...props} animating={animating} color={color} size={size || 'large'}/>
        } else {
            return <ActivityIndicator {...props} animating={animating} color={color} size={size || 'large'}/>

        }


    }

}
