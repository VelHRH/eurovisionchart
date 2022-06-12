import { render } from '@testing-library/react';
import React, { Component, useState, useEffect } from 'react';
import { Bar, Line, Bubble } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


const Charts = () => {

  const [CurrCountry, setCurrCountry] = useState()
  const handleChangeCountry = (e) =>{
    setCurrCountry(e.target.value);
  }

  const [CurrTelevote, setCurrTelevote] = useState()
  const handleChangeTelevote = (e) =>{
    setCurrTelevote(e.target.value);
  }

  const [CurrJury, setCurrJury] = useState()
  const handleChangeJury = (e) =>{
    setCurrJury(e.target.value);
  }

  const [CurrYear, setCurrYear] = useState()
  const handleChangeYear = (e) =>{
    setCurrYear(e.target.value);
  }

  const [CurrPlace, setCurrPlace] = useState()
  const handleChangePlace = (e) =>{
    if (e.target.value === '1') {setCurrPlace(20);}
    if (e.target.value === '2') {setCurrPlace(15);}
    if (e.target.value === '3') {setCurrPlace(10);}
    if (e.target.value === '4') {setCurrPlace(5);}
    if (e.target.value === '5') {setCurrPlace(3);}
    if (toString(e.target.value) > toString(5)) {setCurrPlace(1);}
  }

  const [EurData, setEurData] = useState(
    [
      {
        label: '',
        data: [{
          x: 0,
          y: 0,
          r: 0
        }],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '',
        data: [{
          x: 100,
          y: 100,
          r: 0
        }],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Spain 2022',
        data: [{
          x: 80,
          y: 70,
          r: 10
        }],
        backgroundColor: 'orange',
      },
    ]
  );


  const data = {
    datasets: EurData
  }


  const options = {

    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Eurovision top entries',
      },
    },
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setEurData(oldArray => [...oldArray, {
      label: CurrCountry + CurrYear,
      data: [{
        x: CurrTelevote,
        y: CurrJury,
        r: CurrPlace
      }],
      backgroundColor: 'blue',
    }])
  }


  return (
    <div className='bubbleChart'>
      <div>THIS IS BUBBLE CHART</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          <div>Страна:</div>
            <input type="text" name="name" onChange={handleChangeCountry} />
          </label>
        </div>
        <div>
          <label>
          <div>Год:</div>
            <input type="text" name="name" onChange={handleChangeYear} />
          </label>
        </div>
        <div>
          <label>
          <div>Место:</div>
            <input type="text" name="name" onChange={handleChangePlace} />
          </label>
        </div>
        <div>
          <label>
          <div>Процентов голосов жюри:</div>
            <input type="text" name="name" onChange={handleChangeJury} />
          </label>
        </div>
        <div>
          <label>
          <div>Процентов телевоута:</div>
            <input type="text" name="name" onChange={handleChangeTelevote} />
          </label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
      <Bubble data={data} options={options} />
    </div>
  );
};
export default Charts;