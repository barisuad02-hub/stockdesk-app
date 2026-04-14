import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useAuth } from './AuthContext';
import { styled } from 'nativewind';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (error) {
      Alert.alert('Authentication Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 flex-row">
          {/* Left Panel - Visual (Hidden on small screens in real web) */}
          <View className="hidden md:flex flex-1 bg-stone-100 relative">
             <Image 
              source={{ uri: 'https://picsum.photos/seed/sovereign/800/1200' }} 
              className="absolute inset-0 w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/20" />
            <View className="absolute bottom-12 left-12">
              <Text className="text-white text-4xl font-light leading-tight">
                Elegance in{'\n'}Execution.
              </Text>
              <View className="h-[1px] w-12 bg-[#d4af37] mt-6" />
            </View>
          </View>

          {/* Right Panel - Form */}
          <View className="flex-1 justify-center p-8 md:p-16">
            <View className="mb-12">
              <Text className="text-4xl font-light tracking-tight text-[#1a1c1c] mb-3">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </Text>
              <Text className="text-[#4d4635] font-light tracking-wide text-xs uppercase">
                {isSignUp ? 'Join the elite sovereign network.' : 'Sign in to access your sovereign terminal.'}
              </Text>
            </View>

            <View className="space-y-8">
              <View>
                <Text className="text-[10px] font-semibold text-[#4d4635] uppercase tracking-widest mb-2">Email Address</Text>
                <TextInput
                  className="w-full border-b border-stone-200 py-3 text-[#1a1c1c]"
                  placeholder="executive@sovereign.com"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View>
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-[10px] font-semibold text-[#4d4635] uppercase tracking-widest">Security Key</Text>
                  {!isSignUp && (
                    <TouchableOpacity>
                      <Text className="text-[10px] text-[#735c00] font-bold tracking-widest uppercase">Forgot?</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <TextInput
                  className="w-full border-b border-stone-200 py-3 text-[#1a1c1c]"
                  placeholder="••••••••••••"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <TouchableOpacity 
                className="bg-[#735c00] py-4 rounded-md items-center justify-center flex-row"
                onPress={handleAuth}
                disabled={loading}
              >
                <Text className="text-white font-bold text-xs tracking-widest uppercase mr-2">
                  {loading ? 'Authorizing...' : (isSignUp ? 'Create Access' : 'Authorize Access')}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-16 flex-row items-center">
              <View className="flex-1 h-[1px] bg-stone-100" />
              <Text className="mx-4 text-[10px] text-stone-400 uppercase tracking-widest">Connection Secure</Text>
              <View className="flex-1 h-[1px] bg-stone-100" />
            </View>

            <View className="mt-8 items-center">
              <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
                <Text className="text-sm text-[#4d4635] font-light">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <Text className="text-[#735c00] font-bold uppercase tracking-widest text-xs ml-1"> 
                    {isSignUp ? ' Sign In' : ' Register'}
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
