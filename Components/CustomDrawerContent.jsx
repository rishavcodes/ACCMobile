import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawerContent(props) {
  /**
   * CustomDrawerContent is what is being displayed when the user clickes the hamburger icon. 
   * It is an extension to the DrawerManager component.
   * -------------------------------------------------------------------------------------------------------------------
   * Note:
   * Since all screens are within the TabManager, which is nested in the DrawerManager, this component as the scope of all screens
   * to navigate to page just call the "name" of the screen.
   * Look at current file and handleOnClick for examples. 
   */
  const navigation = useNavigation();
  const [active, setActive] = useState(0);

  const handleOnClick = (link, active) => {
    setActive(active);
    navigation.navigate(link);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="My Account" onPress={() => handleOnClick("myaccount", 1)} focused={active == 1} />
      <DrawerItem label="Favourites" onPress={() => handleOnClick("favourites", 2)} focused={active == 2} />
      <DrawerItem label="Settings" onPress={() => handleOnClick("settings", 3)} focused={active == 3} />
      <DrawerItem label="Help" onPress={() => handleOnClick("help", 4)} focused={active == 4} />
      <DrawerItem label="Blogs" onPress={() => handleOnClick("blogs", 5)} focused={active == 5} />
      {true && <DrawerItem label="Testing" onPress={() => handleOnClick("testing", 6)} focused={active == 6} />}
    </DrawerContentScrollView>
  );
}
