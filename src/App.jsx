import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Item from './pages/Item';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import AddItem from './pages/AddItem';
import Info from './pages/Info';
import { Modal } from './components/ui';
import useFavorites from './hooks/useFavorites';
export default function App(){const [modal,setModal]=useState(false);const state=useFavorites(),location=useLocation();useEffect(()=>{window.scrollTo(0,0);const titles={'/':'Головна','/catalog':'Каталог','/login':'Вхід','/register':'Реєстрація','/profile':'Профіль','/about':'Про нас','/charity':'Благодійність','/add-item':'Віддати річ'};document.title=`${titles[location.pathname]||'Річ'} · Другий шанс`},[location.pathname]);const close=useCallback(()=>setModal(false),[]);const props={...state,onUnavailable:()=>setModal(true)};return <><Routes><Route element={<Layout/>}><Route index element={<Home {...props}/>}/><Route path="catalog" element={<Catalog {...props}/>}/><Route path="items/:id" element={<Item {...props}/>}/><Route path="login" element={<Auth key="login" {...props}/>}/><Route path="register" element={<Auth key="register" register {...props}/>}/><Route path="profile" element={<Profile {...props}/>}/><Route path="add-item" element={<AddItem {...props}/>}/><Route path="charity" element={<Info charity {...props}/>}/><Route path="about" element={<Info {...props}/>}/><Route path="*" element={<div className="page container empty"><h1>Сторінку не знайдено</h1><Link to="/">Повернутися на головну</Link></div>}/></Route></Routes>{modal&&<Modal close={close} title="Незабаром — ще більше можливостей"><p>Функція буде доступна після підключення сервера</p><p className="demo-note">Це frontend-демонстрація. Дані не надсилаються, бронювання та вхід не виконуються.</p></Modal>}</>}
