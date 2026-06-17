'use client';

import { useState, useEffect } from 'react';
import Form from './_components/Form_xx';
import { nanoid } from 'nanoid';
import Items from './_components/Items_xx';
import { ToastContainer, toast } from 'react-toastify';

import Wrapper from '../../_assets/wrapper/Grocery_xx';

// 1. Fix the utility function
const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }
    return list;
  }
  return [];
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const GroceryPage_xx = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedList = getLocalStorage();
    if (storedList.length > 0) {
      setItems(storedList);
    }
  }, []);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_xx;
