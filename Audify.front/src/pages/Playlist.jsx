import React from 'react';
import { useParams } from 'react-router-dom';

export default function Playlist() {
  const { id } = useParams();
  return <div>Playlist Page for ID: {id}</div>;
}