import React, { useState, useRef, FC } from 'react';
import { Animated, View, ScrollView } from 'react-native';
import ListItemButton from './ListItemButton/ListItemButton';
import styles from './Filter.style';
import { ListItem } from '../../Utils/Types';
import SortByIcon from '../../Assets/Icons/sort-by-icon.svg';
import { useUpdated } from '../../Context/UpdatedContext';
import requestUrls from '../../Backend/requestUrls';

type FiltersProps = {
    filters: ListItem[];
};

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;

const Filter: FC<FiltersProps> = ({ filters }) => {
    const { setCarsUrl } = useUpdated();
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const animatedWidth = useState(new Animated.Value(FILTERS_BUTTON_WIDTH))[0];
    const scrollViewRef = useRef<ScrollView>(null);

    const updateAnimatedWidth = (eventX: number) => {
        const direction = eventX > 0 ? 1 : -1;
        const offsetX = Math.min(Math.abs(eventX), FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH);
        animatedWidth.setValue(FILTERS_BUTTON_WIDTH - offsetX * direction);
    };

    const handleFiltersScroll = (event: any) => {
        updateAnimatedWidth(event.nativeEvent.contentOffset.x);
    };

    const snapToEdge = (offsetX: number, maxOffset: number, velocityFactor: number) => {
        if (offsetX > 0 && offsetX < maxOffset / 2 - velocityFactor) {
            scrollViewRef.current?.scrollTo({ x: 0 });
        } else if (maxOffset / 2 + velocityFactor <= offsetX && offsetX < maxOffset) {
            scrollViewRef.current?.scrollTo({ x: FILTERS_BUTTON_WIDTH });
        }
    };

    const handleScrollEndSnapToEdge = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const maxOffset = FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH;
        const velocityFactor = Math.abs(event.nativeEvent.velocity.x * 30);

        snapToEdge(offsetX, maxOffset, velocityFactor);
    };

    const handleFilterPress = (filter: any) => {
        if (filter.name === activeFilter) {
            setActiveFilter(null);
            setCarsUrl(requestUrls.cars);
        } else {
            setActiveFilter(filter.name);
            setCarsUrl(filter.request);
        }
    };

    const scrollViewPaddingLeft = FILTERS_BUTTON_WIDTH - 18;

    return (
        <View style={styles.container}>
            <View style={styles.stickyItem}>
                <Animated.View
                    style={[
                        styles.stickyItemMask,
                        {
                            width: animatedWidth,
                            maxWidth: FILTERS_BUTTON_WIDTH,
                        },
                    ]}
                >
                    <ListItemButton text={'Sort By'} icon={SortByIcon} />
                </Animated.View>
            </View>
            <ScrollView
                horizontal
                style={styles.scrollView}
                contentContainerStyle={[styles.scrollViewContent, { paddingLeft: scrollViewPaddingLeft }]}
                showsHorizontalScrollIndicator={false}
                onScroll={handleFiltersScroll}
                onScrollEndDrag={handleScrollEndSnapToEdge}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                {filters.map(filter => (
                    <ListItemButton
                        key={filter.name}
                        text={filter.label}
                        active={filter.name === activeFilter}
                        onPress={() => handleFilterPress(filter)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default Filter;
