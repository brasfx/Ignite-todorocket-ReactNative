import { useCallback, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { Logo } from '../../components/Logo';
import Input from '../../components/TextInput';
import { Counters } from '../../components/Counters';
import { Task } from '../../components/Task';
import { EmptyState } from '../../components/EmptyState';

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export const Home = () => {
  const randomId = uuid.v4().toString();
  const [todo, setTodo] = useState<Todo>({
    id: '',
    text: '',
    checked: false,
  });

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleCreateTodoItem = () => {
    if (todo?.text?.trim() !== '') {
      setTodoList((prevState) => [
        ...prevState,
        { id: randomId, text: todo.text, checked: false },
      ]);
      setTodo({ id: '', text: '', checked: false });
    }
  };

  const handleCheckTodoItem = (id: string) => {
    const newTodoList = todoList.filter((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleRemoveTodoItem = (id: string) => {
    Alert.alert(
      'Remover atividade',
      `Você realmente deseja remover essa atividade ?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            let removeItems = todoList.filter((item) => {
              return item.id !== id;
            });
            setTodoList(removeItems);
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Input
        onPress={handleCreateTodoItem}
        text={todo.text}
        onChangeText={(text: string) => setTodo({ ...todo, text: text })}
        disabled={!todo.text?.length}
      />
      <Counters
        add={todoList?.length}
        finished={todoList?.filter((item) => item?.checked === true)?.length}
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={todoList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Task
              key={item.id}
              item={item}
              changeTodoItemStatus={() => handleCheckTodoItem(item.id)}
              onPress={() => handleRemoveTodoItem(item.id)}
            />
          );
        }}
        ListEmptyComponent={() => <EmptyState />}
      />
    </View>
  );
};
