import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState([
    {
      id: 1,
      title: 'Desing Engineer',
      description: 'Professional creative design engineer at twitter',
      hour: '12.25 pm',
      read: false,
    },
    {
      id: 2,
      title: 'Software Developer',
      description:
        'Experienced software developer specializing in web applications at Google.',
      hour: '10:00 am',
      read: false,
    },
    {
      id: 3,
      title: 'Marketing Manager',
      description:
        'Dynamic marketing manager with a proven track record of successful campaigns at Coca-Cola.',
      hour: '9:30 am',
      read: false,
    },
    {
      id: 4,
      title: 'Financial Analyst',
      description:
        'Detail-oriented financial analyst with expertise in forecasting and budgeting at JP Morgan Chase.',
      hour: '11:15 am',
      read: false,
    },
  ]);

  const changeCount = () => {
    setCount(count + 1);
  };
  const addNote = item => {
    if (item) setNote([...note, item]);
    Alert.alert('Your note has been added successfully');
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = note.filter(item => item.id !== id);
      setNote(updateItems);
      Alert.alert('Your note has been deleted!');
    } else {
      Alert.alert('Note not found!');
    }
  };
  const updateNote = (id, item) => {
    const updateItems = note.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '20.00',
          }
        : note,
    );
    setNote(updateItems);
    Alert.alert('Your note has been updated');
  };
  return (
    <MyContext.Provider
      value={{count, changeCount, note, addNote, updateNote, deleteNote}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
