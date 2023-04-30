import React, { Component } from "react";
import Chart from "react-apexcharts";
import s from './Profil.module.css'

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state1 = {
        options: {},
        series: [50, 50],
        labels: ['A', 'B'],
        }
    this.state = {
      options: {
        chart: {
            type: 'bar',
            height: 200,
            stacked: true,
            stackType: '100%',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: ''
        },
        fill: {
            opacity: 1
        },
        noData: {
            text: 'Загрузка...'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 0
        },
        xaxis: {
          categories: ["текст","текст","текст","текст","текст","текст","текст","текст","текст","текст","текст",]
        }
      },
      series: [
        {"name":"Прошли","data":["358","26","63","45","26","63","26","63","26","63","26","63","26","63"]},
        
        {"name":"Не прошли","data":["83","2","28","8","26","63","26","63","26","63","26","63","26","63","26","63","26","63","26","63"]}
    
        ],
      
    };
  }

  render() {
    return (

        <div className={s.main}>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
       
       <div>   

       <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 > Свод по профилям   </h1>
                </div>

            <h3>Сколько всего студентов прошедших анкетирование</h3>
            <div className={s.main2}>
            <Chart options={this.state1.options} series={this.state1.series} type="donut" width="380" />
             <div className={s.main3}>
             <h5>Всего студентов:</h5>
             <h5>6241</h5>
             <h5>Оценившие студенты:</h5>
             <h5>2441</h5>
             </div>
             </div>
             <div div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
             <h3>Студенты, прошедшие анкетирование по профилям</h3>
             </div>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1080"
            />
          </div>
        </div>
      </div>


      

      </div>
      </main>
      
      </div>
    );
  }
}

export default Profil;