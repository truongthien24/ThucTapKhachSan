import { Area } from '@ant-design/charts'
import React from 'react'

export const DashboardArea = (props) => {

    // Props

    const {listUser} = props;

    const data = useMemo(()=> {
        if(listUser?.length > 0) {
          const dataa = []
          for(let i = 1; i <= 12; i++) {
            const ai = Array.isArray(listUser) && listUser.filter(item=> {
              const date = formatRelative(new Date(item?.createAt?.seconds * 1000), new Date());
              const dateStrin = new Date(date).getMonth() + 1;
    
              return dateStrin === i;
            })
    
            const len = ai?.length
    
            dataa.push({
              timePeriod: `${i}`,
              value: len
            })
          }
          return dataa;
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

    // Return
    return (
        <div>
            <Area {...config} />
        </div>
    )
}
