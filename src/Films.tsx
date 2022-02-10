import React from 'react';
import {useParams} from 'react-router-dom';
import {dataFilms} from './components/data-films';

export default function FilmDetails () {
  let params = useParams();
  let film: any = dataFilms.find((item: any) => item._id === params.id)
  return <div> {film._id} </div>;
}
