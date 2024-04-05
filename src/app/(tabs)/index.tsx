import {FlatList, StyleSheet} from 'react-native';

import { Text, View } from 'react-native';
import React from "react";
import {StatusBar} from "expo-status-bar";
import TaskListItem from "@/src/components/task-list-item";
import TaskList from "@/src/components/task-list";

export default function TabOneScreen() {
  return (
    <View className="flex-1 bg-[#09090b] px-3 pt-4">
      <TaskList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
