import {
    ActivityIndicator,
    StyleSheet,
    Text,
    ViewPropTypes,
    SafeAreaView,
    View
} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class Feed extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
            .isRequired,
        onPressComments: PropTypes.func.isRequired
    };

    static defaultProps = {
        style: null
    };

    state = {
        loading: true,
        error: false,
        items: []
    };

    async componentDidMount() {
        try {
            const items = await fetchImages();

            this.setState({
                loading: false,
                items
            });
        } catch (e) {
            this.setState({
                loading: true,
                error: true
            });
        }
    }

    render() {
        const { commentsForItem, onPressComments, style } = this.props;
        const { loading, error, items } = this.state;

        if (loading) {
            return (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }

        if (error) {
            return <Text>Error...</Text>;
        }

        return (
            <SafeAreaView style={style}>
                <CardList
                    items={items}
                    commentsForItem={commentsForItem}
                    onPressComments={onPressComments}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
