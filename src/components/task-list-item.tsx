//@ts-nocheck
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";

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
    <TouchableOpacity onPress={() => router.push(`/${task.id}`)} className={'bg-[#27272a] rounded-md px-3 py-2' +
      ' flex-row' +
      ' items-center' +
      ' justify-between' +
      ' flex'}>
      <Text className={'text-white'}>
        {task.description}
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={deleteTask}>
        <Ionicons name="close-outline" size={17} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskListItem;
