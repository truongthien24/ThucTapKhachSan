import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots';
import { getAllUser } from '../../../../redux/action/accountAction';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

export const Dashboard = () => {
  // const [data, setData] = useState([]);



  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const data = [
    {
      "timePeriod": "2006 Q3",
      "value": 1
    },
    {
      "timePeriod": "2006 Q4",
      "value": 1.08
    },
    {
      "timePeriod": "2007 Q1",
      "value": 1.17
    },
    {
      "timePeriod": "2007 Q2",
      "value": 1.26
    },
    {
      "timePeriod": "2007 Q3",
      "value": 1.34
    },
    {
      "timePeriod": "2007 Q4",
      "value": 1.41
    },
    {
      "timePeriod": "2008 Q1",
      "value": 1.52
    },
    {
      "timePeriod": "2008 Q2",
      "value": 1.67
    },
    {
      "timePeriod": "2008 Q3",
      "value": 1.84
    },
    {
      "timePeriod": "2008 Q4",
      "value": 2.07
    },
    {
      "timePeriod": "2009 Q1",
      "value": 2.39
    },
    {
      "timePeriod": "2009 Q2",
      "value": 2.71
    },
    {
      "timePeriod": "2009 Q3",
      "value": 3.03
    },
    {
      "timePeriod": "2009 Q4",
      "value": 3.33
    },
    {
      "timePeriod": "2010 Q1",
      "value": 3.5
    },
    {
      "timePeriod": "2010 Q2",
      "value": 3.37
    },
    {
      "timePeriod": "2010 Q3",
      "value": 3.15
    },
    {
      "timePeriod": "2010 Q4",
      "value": 3.01
    },
    {
      "timePeriod": "2011 Q1",
      "value": 2.8
    },
    {
      "timePeriod": "2011 Q2",
      "value": 2.8
    },
    {
      "timePeriod": "2011 Q3",
      "value": 2.84
    },
    {
      "timePeriod": "2011 Q4",
      "value": 2.75
    },
    {
      "timePeriod": "2012 Q1",
      "value": 2.64
    },
    {
      "timePeriod": "2012 Q2",
      "value": 2.55
    },
    {
      "timePeriod": "2012 Q3",
      "value": 2.46
    },
    {
      "timePeriod": "2012 Q4",
      "value": 2.45
    },
    {
      "timePeriod": "2013 Q1",
      "value": 2.57
    },
    {
      "timePeriod": "2013 Q2",
      "value": 2.68
    },
    {
      "timePeriod": "2013 Q3",
      "value": 2.8
    },
    {
      "timePeriod": "2013 Q4",
      "value": 2.89
    },
    {
      "timePeriod": "2014 Q1",
      "value": 2.85
    },
    {
      "timePeriod": "2014 Q2",
      "value": 2.73
    },
    {
      "timePeriod": "2014 Q3",
      "value": 2.54
    },
    {
      "timePeriod": "2014 Q4",
      "value": 2.32
    },
    {
      "timePeriod": "2015 Q1",
      "value": 2.25
    },
    {
      "timePeriod": "2015 Q2",
      "value": 2.33
    },
    {
      "timePeriod": "2015 Q3",
      "value": 2.53
    },
    {
      "timePeriod": "2015 Q4",
      "value": 2.74
    },
    {
      "timePeriod": "2016 Q1",
      "value": 2.76
    },
    {
      "timePeriod": "2016 Q2",
      "value": 2.61
    },
    {
      "timePeriod": "2016 Q3",
      "value": 2.35
    },
    {
      "timePeriod": "2016 Q4",
      "value": 2.11
    },
    {
      "timePeriod": "2017 Q1",
      "value": 2.08
    },
    {
      "timePeriod": "2017 Q2",
      "value": 2.2
    },
    {
      "timePeriod": "2017 Q3",
      "value": 2.38
    },
    {
      "timePeriod": "2017 Q4",
      "value": 2.59
    },
    {
      "timePeriod": "2018 Q1",
      "value": 2.63
    },
    {
      "timePeriod": "2018 Q2",
      "value": 2.67
    },
    {
      "timePeriod": "2018 Q3",
      "value": 2.64
    },
    {
      "timePeriod": "2018 Q4",
      "value": 2.5
    },
    {
      "timePeriod": "2019 Q1",
      "value": 2.31
    },
    {
      "timePeriod": "2019 Q2",
      "value": 2.04
    },
    {
      "timePeriod": "2019 Q3",
      "value": 1.83
    },
    {
      "timePeriod": "2019 Q4",
      "value": 1.71
    },
    {
      "timePeriod": "2020 Q1",
      "value": 1.65
    },
    {
      "timePeriod": "2020 Q2",
      "value": 1.59
    },
    {
      "timePeriod": "2020 Q3",
      "value": 1.58
    }
  ];

  const dataAccount = [

  ]

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllUser());

  }, [])

  const {listUser} = useSelector(state=>state.account);

  const checkQtyMonth = () => {
    for(let i = 1; i <= 12; i++) {
      const ai = listUser.filter(item=> {
        const date = moment(item?.createAt?.seconds).format('YYYY-MM-DD')
        const dateStrin = new Date(date).getMonth() + 1;
        return dateStrin === i;
      })
      // console.log(`Tháng ${i}`, ai?.length)
    }
  }

  useEffect(()=> {
    if(listUser.length > 0) {
      // checkQtyMonth()
      // debugger;
      // for(let i = 1; i <= 12; i++) {
        const ai = listUser.filter(item=> {
          const date = moment(item?.createAt).format('YYYY-MM-DD')
          console.log('date', date.toDateString());
          const dateStrin = new Date(date).getMonth() + 1;
          console.log('dateStrin', dateStrin);

          // return dateStrin === i;
        })
      // }
      // const ai = listUser.forEach(item=> {
      //   console.log('item', item);
      //   const date = moment(item?.createAt?.seconds).format('YYYY-MM-DD')
      //   const dateStrin = new Date(date).getMonth() + 1;
      //   // console.log('dateStrin', dateStrin)
      //   // return dateStrin === i;
      // })
    }
  }, [listUser])

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

  return (
    <Area {...config} />
  )
}
