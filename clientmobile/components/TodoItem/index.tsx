import React, { useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Checkbox } from '../Checkbox'
import { View } from '../Themed'
interface todoDataProps {
    todo:{
        id : string,
        content : string,
        isCompleted : boolean
    },
    onSubmit : () => void
    
}
export const TodoItem = ({todo, onSubmit}: todoDataProps) => {
   const [isChecked, setIsChecked] = useState(false);
   const [content, setContent] = useState('')
   const input = useRef(null)
   useEffect(() => {
       if(!todo) return
       setIsChecked(todo.isCompleted)
       setContent(todo.content)
   }, [todo])

   useEffect(() => {
    if(input.current){
        input?.current?.focus();
    }
   }, [input])

   const onKeyPress = ({nativeEvent}) =>{
       if(nativeEvent.key === 'Backspace' && content === ''){
           
       }
   }

    return (
        <View style={{flexDirection: 'row', marginVertical:3}}>
            <Checkbox isChecked={isChecked} onPress={()=> {setIsChecked(!isChecked)}} />
            <TextInput
                ref={input}
                style={{
                flex: 1,
                fontSize:18,
                color: 'black',
                marginLeft: 12,
                }}
                value={content}
                multiline
                onSubmitEditing={onSubmit}
                blurOnSubmit
                onKeyPress={onKeyPress}
            />
        </View>
    )
}
