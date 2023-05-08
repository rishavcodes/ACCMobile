import React from "react";
import { Text, View } from "react-native";
import RangeSliderStyles from "./componentStyles.js/RangeSliderStyles";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState, useEffect } from 'react'

function RangeSlider(props) {
    const {minAmount, maxAmount, start, end, edit = true, onChange} = props

    const [values, setValues] = useState([ start || minAmount , end || maxAmount]);

    useEffect(() => {
        if (onChange) {
          onChange(values);
        }
      }, [values, onChange]);

    function customLabels(sliderPosition) {
        return (
          <>
            <View style={[RangeSliderStyles.label, {left: sliderPosition.oneMarkerLeftPosition - 15}]}>
              <Text style={RangeSliderStyles.number}>${values[0]}</Text>
            </View>
    
            <View style={[RangeSliderStyles.label, {left: sliderPosition.twoMarkerLeftPosition - 10}]}>
              <Text style={RangeSliderStyles.number}>${values[1]}</Text>
            </View>
          </>
        );
      }

    return (
        <>
            <MultiSlider
                trackStyle={RangeSliderStyles.outerTrackStyle}
                markerStyle={RangeSliderStyles.trackStyle}
                selectedStyle={RangeSliderStyles.trackStyle}
                values={values}
                min={minAmount}
                max={maxAmount}
                onValuesChange={setValues}
                allowOverlap={false}
                minMarkerOverlapDistance={30}
                snapped
                enabledOne={edit}
                enabledTwo={edit}
                enableLabel
                customLabel={(sliderPosition) => (customLabels(sliderPosition))}
                showSteps={true}
            />
            <View style={RangeSliderStyles.bottomBar}>
                <Text style={RangeSliderStyles.number}>${minAmount}</Text>
                <Text style={RangeSliderStyles.number}>${maxAmount}+</Text>
            </View>
        </>
    )
}

export default RangeSlider;