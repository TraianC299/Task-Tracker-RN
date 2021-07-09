import React from 'react';
import { Text, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { BlurView } from 'expo-blur';


const Container=styled.View`
    background-color: #F8CF3E;
    flex: 1;  
    flex-direction: column;
    padding: 5%;
    padding-top: 10%;
`
function TestScreen(props) {
    return (
        <><ImageBackground style={{flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}} source={{url: "https://freepikpsd.com/media/2020/09/nightlight-iphone-wallpaper-.jpg"}}>
                <BlurView intensity={80}> 
                <Text style={{fontSize: 80}}>Hello</Text>
                </BlurView>
     </ImageBackground>
            
            </>

    );
}

export default TestScreen;