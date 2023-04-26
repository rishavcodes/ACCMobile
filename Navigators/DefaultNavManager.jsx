import React, { useState } from "react";
import Landing from "../Pages/Landing";
import Testing from "../Pages/Testing";
import OnBoarding from "../Pages/OnBoarding";
import SignIn from "../Pages/SignIn";
import Login from "../Pages/Login";
import ForgetPassword from "../Pages/ForgotPassword";
import Register from "../Pages/Register";
import Register2 from "../Pages/Register2";
import Register3 from "../Pages/Register3";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function NavManager() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="testing" component={Testing} />

      <Drawer.Screen name="register" component={Register} />
      <Drawer.Screen name="register2" component={Register2} />
      <Drawer.Screen name="register3" component={Register3} />

      <Drawer.Screen name="forgotpassword" component={ForgetPassword} />

      <Drawer.Screen name="signin" component={SignIn} />

      <Drawer.Screen name="login" component={Login} />
      <Drawer.Screen name="landing" component={Landing} />
    </Drawer.Navigator>
  );
}
