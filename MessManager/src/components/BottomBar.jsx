import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Admin from '../views/Admin';
import MenuUpdate from '../views/MenuUpdate';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CodeScanner from './CodeScanner';
const Tab = createBottomTabNavigator();

const codename="CodeScanner";
const Menuname="MenuUpdate"
function BottomBar() {
  return (
    <Tab.Navigator
      initialRouteName="codename"
      screenOptions={({route})=>({
        tabBarActiveTintColor:'#06C167',
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            let rn=route.name;
            if(rn == codename)
            {
                iconName = focused ?"qr-code":"qr-code-outline"
            }
            else if(rn == Menuname)
            {
                iconName =focused ?"menu" : "menu-outline"
            }
            return <Ionicons name={iconName} size={size} color ={color}/>
        },
        // tabBarOptions
  })}
    >
      <Tab.Screen
        name={codename}
        component={CodeScanner}
        // options={{
        //   tabBarLabel: 'codeScanner',
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="qr-code-outline" size={30} color ={"grey"}/>
        //   ),
        // }}
      />
      <Tab.Screen
        name={Menuname}
        component={MenuUpdate}
        // options={{
        //   tabBarLabel: 'Updates',
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name= size={30} color ={"grey"}/>
        //   )
        // }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
export default BottomBar;