import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, TouchableOpacity, Text, View, TextInput } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import StyledButton from "../Components/StyledButton";
import accountFormStyles from "./pageStyles/accountFormStyles";
import { useForm, Controller } from 'react-hook-form';
import { List, Button } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import RangeSlider from "../Components/RangeSlider";
import DatePicker from 'react-native-modern-datepicker';

export default function MyAccountProfileForm() {

  const [traits, setTraits] = useState({
    extroverted: false,
    introverted: false,
    outgoing: false,
    open: false,
    creative: false,
    analytical: false,
    private: false,
    laidBack: false,
    quiet: false,
    adventurous: false,
  });

  const [interests, setInterests] = useState({
    gardening: false,
    cooking: false,
    hiking: false,
    music: false,
    reading: false,
    art: false,
    puzzles: false,
    sports: false,
    yoga: false,
    cars: false,
    other: false,
  });

  const handleTraitToggle = (trait) => {
    setTraits({
      ...traits,
      [trait]: !traits[trait],
    });
  };

  const handleInterestToggle = (interest) => {
    setInterests({
      ...interests,
      [interest]: !interests[interest],
    });
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      eAddress: '',
      location: '',
      occupation: '',
      ageRange: '',
      phoneNum: '',
      aboutYourself: '',
      prefs: '',
      checkboxOther: '',
    }
  });

  const [ values, setValues ] = useState([])
  const [ dob, setDob ] = useState('')
  const [ showCalendar, setShowCalendar ] = useState(false)

  const onSubmit = data => {
    const totalData = Object.assign({}, data, traits, interests, {start: values[0], end: values[1]}, {date: dob});
    console.log(totalData);
  };

  return (
    <>
      <View style={accountFormStyles.container}>
          <ScrollView contentContainerStyle={accountFormStyles.scroll}>

            <View style={accountFormStyles.pageHeader}>
              <Text style={accountFormStyles.userTitle}>Tenant</Text>

              <TouchableOpacity>
                <View style={accountFormStyles.bannerUpload}>
                  <Ionicons name="image-outline" size={40} color="#ACACAC"/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={accountFormStyles.profileUpload}>
                  <Ionicons name="person-add" size={60} color="#ACACAC"/>
                </View>
              </TouchableOpacity>

            </View>

            <List.Section style={accountFormStyles.formBody}>
              <List.Accordion style={accountFormStyles.dropdownHeader} titleStyle={accountFormStyles.dropdownHeader} title="Personal Details">
                  
                  <Text style={accountFormStyles.disclaimer}>*This information will not be visible on your public profile.</Text>
                  
                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Username*"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="userName"
                  />
                  {errors.userName && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="First Name"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="firstName"
                  />
                  {errors.firstName && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Last Name"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="lastName"
                  />
                  {errors.lastName && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    }}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Email Address*"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="eAddress"
                  />
                  {errors.eAddress && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <>
                        <TextInput editable={false} value={dob} placeholder="Date of Birth" style={accountFormStyles.detailsFormField} 
                          onPressIn={() => setShowCalendar(true)}/>
                          { showCalendar ? <DatePicker
                            mode="calendar"
                            selectorStartingYear={2000}
                            onSelectedChange={selectedDate => {setDob(selectedDate); setShowCalendar(false)}}
                          /> : <></>}
                      </>
                    )}
                    name="location"
                  />
                  {errors.location && <Text>Incorrect Input</Text>}


                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Location*"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="location"
                  />
                  {errors.location && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Occupation"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="occupation"
                  />
                  {errors.occupation && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Age Range*"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="ageRange"
                  />
                  {errors.ageRange && <Text>Incorrect Input</Text>}

                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.detailsFormField}
                        placeholder="Phone Number*"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="phoneNum"
                  />
                  {errors.phoneNum && <Text>Incorrect Input</Text>}
                  
                  <View style={accountFormStyles.detailImageUploads}>
                    <View>
                      <View>
                        <TouchableOpacity>
                          <View style={accountFormStyles.mainImageUpload}>
                            <Ionicons name="image-outline" size={60} color="#ACACAC"/>
                          </View>
                        </TouchableOpacity>
                      </View>
                      
                      <View style={accountFormStyles.tripleImage}>
                        <TouchableOpacity style={accountFormStyles.imageUpload}></TouchableOpacity>
                        <TouchableOpacity style={accountFormStyles.imageUpload}></TouchableOpacity>
                        <TouchableOpacity style={accountFormStyles.imageUpload}></TouchableOpacity>
                      </View>
                    </View>
                  </View>

              </List.Accordion>

              <List.Accordion style={accountFormStyles.dropdownHeader} titleStyle={accountFormStyles.dropdownHeader} title="Descriptions">

                  <List.Item titleStyle={accountFormStyles.descriptionsTitle} title='About Yourself'/>
                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.descriptionsFormField}
                        placeholder="Provide a brief description about yourself..."
                        onChangeText={onChange}
                        value={value}
                        multiline={true}
                        numberOfLines={9}
                      />
                    )}
                    name="aboutYourself"
                  />
                  {errors.aboutYourself && <Text>Incorrect Input</Text>}
                  
                  <List.Item titleStyle={accountFormStyles.descriptionsTitle} title='Preferences'/>
                  <Controller
                    control={control}
                    rules={{}}
                    render={({ field: { onChange, value }, }) => (
                      <TextInput
                        style={accountFormStyles.descriptionsFormField}
                        placeholder="Provide what you're looking for in a rental or a housemate."
                        onChangeText={onChange}
                        value={value}
                        multiline={true}
                        numberOfLines={9}
                      />
                    )}
                    name="prefs"
                  />
                  {errors.prefs && <Text>Incorrect Input</Text>}

              </List.Accordion>

              <List.Accordion style={accountFormStyles.dropdownHeader} titleStyle={accountFormStyles.dropdownHeader} title="Price Range">
                <View style={accountFormStyles.priceRange}>
                  <RangeSlider minAmount={400} maxAmount={4000} onChange={(values) => setValues(values)}/>
                </View>
              </List.Accordion>

              <List.Accordion style={accountFormStyles.dropdownHeader} titleStyle={accountFormStyles.dropdownHeader} title="Personality Traits">
                
                <View style={accountFormStyles.checkboxesContainer}>

                  <View style={accountFormStyles.checkboxesRow}>
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.extroverted ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('extroverted')}
                      />
                      <Text>Extroverted</Text>
                    </View>
                    
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.introverted ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('introverted')}
                      />
                      <Text>Introverted</Text>
                    </View>
                  </View>

                  <View style={accountFormStyles.checkboxesRow}>
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.outgoing ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('outgoing')}
                      />
                      <Text>Outgoing</Text>
                    </View>

                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.open ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('open')}
                      />
                      <Text>Open</Text>
                    </View>
                  </View>

                  <View style={accountFormStyles.checkboxesRow}>
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.creative ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('creative')}
                      />
                      <Text>Creative</Text>
                    </View>

                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.analytical ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('analytical')}
                      />
                      <Text>Analytical</Text>
                    </View>
                  </View>

                  <View style={accountFormStyles.checkboxesRow}>
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.private ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('private')}
                      />
                      <Text>Private</Text>
                    </View>

                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.laidBack ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('laidBack')}
                      />
                      <Text>Laid-back</Text>
                    </View>
                  </View>

                  <View style={accountFormStyles.checkboxesRow}>
                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.quiet ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('quiet')}
                      />
                      <Text>Quiet</Text>
                    </View>

                    <View style={accountFormStyles.checkboxContainer}>
                      <Checkbox.Android style={accountFormStyles.checkbox}
                        status={traits.adventurous ? 'checked' : 'unchecked'}
                        onPress={() => handleTraitToggle('adventurous')}
                      />
                      <Text>Adventurous</Text>
                    </View>
                  </View>
                </View>

              </List.Accordion>

              <List.Accordion style={accountFormStyles.dropdownHeader} titleStyle={accountFormStyles.dropdownHeader} title="Interests">
                  
                <View style={accountFormStyles.checkboxesContainer}>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.gardening ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('gardening')}
                        />
                        <Text>Gardening</Text>
                      </View>

                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.cooking ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('cooking')}
                        />
                        <Text>Cooking</Text>
                      </View>
                    </View>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.hiking ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('hiking')}
                        />
                        <Text>Hiking</Text>
                      </View>

                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.music ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('music')}
                        />
                        <Text>Music</Text>
                      </View>
                    </View>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.reading ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('reading')}
                        />
                        <Text>Reading</Text>
                      </View>

                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.art ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('art')}
                        />
                        <Text>Art</Text>
                      </View>
                    </View>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.puzzles ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('puzzles')}
                        />
                        <Text>Puzzles</Text>
                      </View>

                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.sports ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('sports')}
                        />
                        <Text>Sports</Text>
                      </View>
                    </View>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.yoga ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('yoga')}
                        />
                        <Text>Yoga</Text>
                      </View>

                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.cars ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('cars')}
                        />
                        <Text>Cars</Text>
                      </View>
                    </View>

                    <View style={accountFormStyles.checkboxesRow}>
                      <View style={accountFormStyles.checkboxContainer}>
                        <Checkbox.Android style={accountFormStyles.checkbox}
                          status={interests.other ? 'checked' : 'unchecked'}
                          onPress={() => handleInterestToggle('other')}
                        />
                        <Text>Other:</Text>
                        <Controller
                          control={control}
                          rules={{}}
                          render={({ field: { onChange, value } }) => (
                            <TextInput
                              onChangeText={onChange}
                              value={value}
                            />
                          )}
                          name="checkboxOther"
                        />
                        {errors.checkboxOther && <Text>Incorrect Input</Text>}
                      </View>
                    </View>
                </View>
              
              </List.Accordion>
            </List.Section>
            
            <Button style={accountFormStyles.button} onPress={handleSubmit(onSubmit)}><Text style={accountFormStyles.buttonText}>Save</Text></Button>
            <Button style={[accountFormStyles.button, accountFormStyles.lastButton]} onPress={() => console.log("Preview")}><Text style={accountFormStyles.buttonText}>Preview</Text></Button>

          </ScrollView>
      </View>
    </>
  );
}
