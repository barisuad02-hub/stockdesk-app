import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAuth } from './AuthContext';
import { styled } from 'nativewind';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      {/* Header */}
      <View className="pt-12 pb-4 px-6 bg-white shadow-sm flex-row justify-between items-center">
        <View>
          <Text className="text-xs font-light tracking-[0.2em] text-[#735c00] uppercase">The Sovereign Terminal</Text>
          <Text className="text-[10px] font-bold text-[#735c00] mt-1">
            {user?.email ? `Session: ${user.email.split('@')[0]}` : 'DSEX: 5230.12 (-0.78%)'}
          </Text>
        </View>
        <TouchableOpacity 
          className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden"
          onPress={logout}
        >
           <Image 
            source={{ uri: 'https://picsum.photos/seed/avatar/100/100' }} 
            className="w-full h-full"
          />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-3xl font-light tracking-tight text-[#1a1c1c]">Market Intelligence</Text>
          <TouchableOpacity onPress={logout}>
            <Text className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Logout</Text>
          </TouchableOpacity>
        </View>
        
        {/* Search */}
        <View className="relative mb-8">
          <TextInput 
            className="bg-white border border-stone-200 px-4 py-3 rounded-lg text-sm"
            placeholder="Search Ticker, Sector..."
          />
        </View>

        {/* Top Value Positions */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-sm font-bold text-[#735c00] uppercase tracking-widest">Top Value Positions</Text>
            <TouchableOpacity><Text className="text-[10px] font-bold text-[#d4af37] uppercase">View All</Text></TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
            {[
              { symbol: 'SQ', name: 'SQUARE PHARM', price: '214.20', change: '+1.45%' },
              { symbol: 'BAT', name: 'BATASHOE', price: '715.40', change: '-0.82%' },
              { symbol: 'GP', name: 'GRAMEENPHONE', price: '268.10', change: '+2.10%' }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="bg-white p-4 rounded-xl border border-stone-100 mr-4 w-40 shadow-sm"
                onPress={() => navigation.navigate('Dashboard', { symbol: item.symbol })}
              >
                <View className="flex-row items-center mb-3">
                  <View className="w-8 h-8 rounded bg-stone-50 items-center justify-center">
                    <Text className="font-bold text-[#735c00] text-xs">{item.symbol}</Text>
                  </View>
                  <View className="ml-2">
                    <Text className="font-bold text-[10px]">{item.name}</Text>
                  </View>
                </View>
                <View className="flex-row justify-between items-end">
                  <Text className="text-lg font-bold">{item.price}</Text>
                  <Text className={`text-[10px] font-bold ${item.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {item.change}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Banner */}
        <View className="bg-[#1a1c1c] rounded-2xl p-6 mb-8 relative overflow-hidden">
          <Text className="text-[#d4af37] text-lg font-light mb-1">Guruji Kohen</Text>
          <Text className="text-white text-md font-medium mb-4">Learn Investing from the Basics</Text>
          <TouchableOpacity className="bg-[#735c00] px-4 py-2 rounded self-start">
            <Text className="text-white text-[10px] font-bold uppercase tracking-widest">Enroll Now</Text>
          </TouchableOpacity>
        </View>

        {/* Top Volume */}
        <View className="mb-12">
          <Text className="text-sm font-bold text-[#735c00] uppercase tracking-widest mb-4">Top Volume</Text>
          <View className="bg-white rounded-xl overflow-hidden border border-stone-50">
            {[
              { name: 'ORIONINFU', price: '542.10', change: '+8.4%' },
              { name: 'LHBL', price: '62.30', change: '-2.1%' },
              { name: 'BSC', price: '118.50', change: '+4.2%' }
            ].map((item, index) => (
              <View key={index} className="flex-row justify-between items-center p-4 border-b border-stone-50">
                <Text className="font-bold text-sm">{item.name}</Text>
                <View className="flex-row items-center">
                  <Text className="text-sm font-medium mr-4">{item.price}</Text>
                  <Text className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {item.change}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View className="bg-white border-t border-stone-100 flex-row justify-around py-4 pb-8">
        <TouchableOpacity className="items-center">
          <Text className="text-[#735c00] text-[10px] font-bold uppercase">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-stone-400 text-[10px] font-bold uppercase">News</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-stone-400 text-[10px] font-bold uppercase">Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-stone-400 text-[10px] font-bold uppercase">Guru</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
