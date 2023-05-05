import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const StyledDialog = (props) => {
  /**
   * The StyledDialogs is used for when diaglogs are required, most dialogs on the mobile page can be turned into screens instead.
   * -------------------------------------------------------------------------------------------------------------------------------
   * Note: 
   * This page was a template file, and basicly used to test wether or not the buttons work, 
   * if you do not want to implment diaglogs cause it has annoying states to deal with,
   * implement direct pages instead.
   */
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Button onPress={showDialog}>{props.children}</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default StyledDialog;