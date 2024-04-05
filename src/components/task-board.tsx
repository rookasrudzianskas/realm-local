//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TaskList from "@/src/components/task-list";
import { LinearGradient } from 'expo-linear-gradient';

const TaskBoard = () => {
  return (
    <View className={'flex-1'}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={StyleSheet.absoluteFillObject}
      />
      <TaskList />
    </View>
  );
};

export default TaskBoard;
