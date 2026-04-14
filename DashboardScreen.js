import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';

export default function DashboardScreen({ route, navigation }) {
  const { symbol = 'SQURPHRMA' } = route.params || {};

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      {/* Header */}
      <View className="pt-12 pb-4 px-6 bg-white shadow-sm flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-[#735c00] text-lg">←</Text>
        </TouchableOpacity>
        <View>
          <Text className="text-xs font-light tracking-[0.2em] text-[#735c00] uppercase">Analysis</Text>
          <Text className="text-[10px] font-bold text-[#735c00] mt-1">{symbol}</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <View className="flex-row justify-between items-end mb-8">
          <View>
            <Text className="text-3xl font-light tracking-tight text-[#1a1c1c]">{symbol}</Text>
            <Text className="text-[#4d4635] text-xs uppercase tracking-widest mt-1">Square Pharmaceuticals PLC</Text>
          </View>
          <View className="items-end">
            <Text className="text-3xl font-light text-[#1a1c1c]">৳ 218.40</Text>
            <Text className="text-emerald-600 font-bold text-xs">+2.45 (1.13%)</Text>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View className="bg-white rounded-xl h-64 border border-stone-100 mb-8 items-center justify-center">
          <Text className="text-stone-300 text-xs uppercase tracking-widest">Technical Canvas</Text>
          {/* Simple visual representation */}
          <View className="flex-row items-end gap-1 h-32 mt-4">
            {[20, 40, 30, 60, 80, 70, 90, 85, 100].map((h, i) => (
              <View key={i} style={{ height: h, width: 8 }} className="bg-emerald-600/40 rounded-t-sm" />
            ))}
          </View>
        </View>

        {/* Metrics Grid */}
        <View className="flex-row flex-wrap -mx-2 mb-8">
          {[
            { label: 'P/E RATIO', value: '12.4' },
            { label: 'EPS (TRAILING)', value: '21.5' },
            { label: 'ROE (%)', value: '18.2' },
            { label: 'MARKET CAP', value: '19.4K Cr' }
          ].map((item, index) => (
            <View key={index} className="w-1/2 p-2">
              <View className="bg-white p-4 rounded-xl border border-stone-100 items-center">
                <Text className="text-[8px] font-bold text-[#4d4635] uppercase tracking-widest mb-1">{item.label}</Text>
                <Text className="text-xl font-light text-[#735c00]">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* AI Analysis */}
        <View className="bg-[#eeeeee] p-6 rounded-2xl mb-12">
          <View className="flex-row items-center mb-4">
            <Text className="text-[#735c00] text-lg mr-2">✦</Text>
            <Text className="text-lg font-light tracking-tight">Expectation & Prediction</Text>
          </View>
          <Text className="text-[#4d4635] text-sm leading-relaxed mb-6">
            The terminal’s predictive engine identifies <Text className="font-bold">SQURPHRMA</Text> as a "Defensive Alpha" asset. Projections indicate a breakout above ৳225.
          </Text>
          
          <View className="items-center">
            <View className="w-32 h-32 rounded-full border-4 border-[#d4af37] items-center justify-center">
              <Text className="text-3xl font-bold text-[#735c00]">85</Text>
              <Text className="text-[8px] font-bold text-[#4d4635] uppercase tracking-widest">AI Score</Text>
            </View>
            <Text className="text-[8px] font-bold text-[#735c00] uppercase tracking-widest mt-4">Highly Favorable Outlook</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
