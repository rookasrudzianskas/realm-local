// @ts-nocheck
import { Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, TextInput} from 'react-native';
import {useObject, useRealm} from '@realm/react';
import { Task } from '../models/Task';
import { BSON } from 'realm';
import {useState} from "react";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const realm = useRealm();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );

  if(!task) return null;

  const updateDescription = () => {
    if(!task) return;
    realm.write(() => {
      task.description = updatedDescription;
    });
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: 'Task Details' }} />

      <Text style={{ color: 'white', fontSize: 20 }}>Id: {id}</Text>
      <TextInput
        className={'bg-[#27272a] px-3 py-2 rounded-md my-3 text-white'}
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        value={updatedDescription}
      />
    </View>
  );
};

export default TaskDetails;
