//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

interface task {
  task: {
    id: number;
    description: string;
  };
}

const TaskListItem = ({task}: task) => {
  const deleteTask = () => {
    console.log('Delete task');
  }

  return (
    <View className={'bg-[#27272a] rounded-md px-3 py-2 flex-row items-center justify-between flex'}>
      <Text className={'text-white'}>
        {task.description}
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={deleteTask}>
        <Ionicons name="close-outline" size={17} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskListItem;
