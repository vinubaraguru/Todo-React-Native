import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View } from 'react-native'

interface CheckBoxProps {
    isChecked : boolean,
    onPress : () => void
}

export const Checkbox = (props: CheckBoxProps) => {
    const { isChecked , onPress } = props;
    const name = isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
    return (
        <Pressable onPress={onPress}>
            <MaterialCommunityIcons name={name} size={24} color="black"/>
        </Pressable>
    )
}
