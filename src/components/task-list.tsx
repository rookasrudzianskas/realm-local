//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import TaskListItem from "@/src/components/task-list-item";

export const TASKS = [
  {
    id: 1,
    description: '1 tasks to do cleanup',
  },
  {
    id: 2,
    description: '2 tasks to do cleanup',
  },
  {
    id: 3,
    description: '3 tasks to do cleanup',
  }
]

const TaskList = () => {
  return (
    <View className={'bg-[#18181b] py-3 px-2 rounded-md'}>
      <Text className={'text-[#71717a] text-lg font-semibold mb-1'}>Todo's:</Text>
      <FlatList
        data={TASKS}
        renderItem={({item}) => <TaskListItem task={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
      />
    </View>
  );
};

export default TaskList;
