import { useState } from 'react';
export default function useFavorites(){const [favorites,setFavorites]=useState([]);const toggle=id=>setFavorites(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);return {favorites,toggle}}
