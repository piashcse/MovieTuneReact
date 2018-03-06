import {TabNavigator} from "react-navigation";

//import your tabs js file
import Screen1 from "./tabs/Screen1";
import Screen2 from "./tabs/Screen2";
import Screen3 from "./tabs/Screen3";

var myTabs = TabNavigator({
        // here you will define your screen-tab
        NewRelaeas : {screen:Screen1, navigationOptions:{tabBarLabel:'New release'}},
        Shopping: {screen:Screen2,navigationOptions:{tabBarLabel:'Recent'}},
        Cart: {screen:Screen3, navigationOptions:{tabBarLabel:'New release'}}
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'black',
            labelStyle: {
                fontSize: 10,
            },
        }
    });

export default myTabs;