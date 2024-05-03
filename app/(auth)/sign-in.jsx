import { Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm]= useState({
    email: '',
    password: ''
  })

    const [isSubmitting, setIsSubmitting]= useState(false)
  const submit = () => {


  }

  return (
  <SafeAreaView className="bg-primary h-full">
    <ScrollView>
      <View className=" w-full justify-center h-full px-4 my-6 ">
        <Image  source={images.logo}
        resizeMode='contain'
        className='w-[115px] h-[35px]'
        />
        <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
          Login To Loara
        </Text>

        <FormField
        title="Email"
        value={form.email} 
        handleChangeText={(e) => setForm({...form, email: e})}
        otherStyles="mt-7"
        keyboardType='email-address'
          />

<FormField
        title="Password"
        value={form.password} 
        handleChangeText={(e) => setForm({...form, password: e})}
        otherStyles="mt-7"
       
          />

          <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}

           />
           <View className='justify-center pt-5 flex-row items-center gap-2 '>
            <Text 
            className='text-gray-100 text-lg font-pregular'>
              Don't have an account?
            </Text>
            <Link href="/sign-up"
            className='font-psemibold text-secondary-100'>Sign Up</Link>
           </View>

      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignIn

 