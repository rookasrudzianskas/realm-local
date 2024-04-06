//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, FlatList, TextInput, Button} from 'react-native';
import TaskListItem from "@/src/components/task-list-item";
import { useRealm, useQuery } from '@realm/react';
import {Task} from "@/src/models/Task";

const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const [newTask, setNewTask] = useState('' as string);

  const createTask = () => {
    if (!newTask) {
      return;
    }
    realm.write(() => {
      realm.create(Task, {
        description: newTask,
        userId: '123',
      })
    });
    setNewTask('');
  }

  return (
    <View className={'bg-[#18181b] py-3 px-2 rounded-md'}>
      <Text className={'text-[#71717a] text-lg font-semibold mb-1'}>Todo's:</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskListItem task={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
      />
      <TextInput
        placeholder={'Add a new task'}
        className={'bg-[#27272a] px-3 py-2 rounded-md my-3 text-white'}
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title={'Add Task'} onPress={createTask} />
    </View>
  );
};

export default TaskList;
