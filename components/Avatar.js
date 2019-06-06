import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';

export default class Avatar extends Component {
    render() {
        const style = {
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size / 2,
            backgroundColor: this.props.backgroundColor
        };

        const { initials } = this.props;

        return (
            <View style={[styles.container, style]}>
                <Text style={styles.text}>{initials}</Text>
            </View>
        );
    }
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});
