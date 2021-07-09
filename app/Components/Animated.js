import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, NativeModules, LayoutAnimation, TouchableOpacity,
     } from "react-native";

     const { UIManager } = NativeModules;



const Animation = () => {
    
    const [state, setState] = useState({
        w: 100,
        h: 100,
      })

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  
 const scaleUp = () => {
    // Animate the update
    LayoutAnimation.spring();
    setState(previous=>({w: previous.w+ 15, h: previous.h + 15}))
  }

  const scaleDown = () => {
    // Animate the update
    LayoutAnimation.spring();
    setState(previous=>({w: previous.w - 15, h: previous.h - 15}))
  }

   


  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
    })
  ).current;

  return (

    <>
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>

<View style={styles.container}>
<TouchableOpacity onPress={scaleDown}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
<View style={[styles.box, {width: state.w, height: state.h}]} />
<TouchableOpacity onPress={scaleUp}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
</View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "#00D870",
    borderRadius: 5
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom:16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Animation;