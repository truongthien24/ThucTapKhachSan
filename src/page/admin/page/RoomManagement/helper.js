    export const columns = [
        {
            title: 'tenPhong',  
            dataIndex: 'tenPhong',
            key: 'tenPhong',
            width: '15%',
        },
        {
            title: 'dacDiemPhong',
            dataIndex: 'dacDiemPhong',
            key: 'dacDiemPhong',
            width: '30%',
        },
        {
            title: 'soLuongPhong',
            dataIndex: 'soLuongPhong',
            key: 'soLuongPhong',
            width: '5%'
        },
        {
            title: 'giaThueNgay',  
            dataIndex: 'giaThueNgay',
            key: 'giaThueNgay',
            width: '15%',
        },
        {
            title: 'danhGia',
            dataIndex: 'danhGia',
            key: 'danhGia',
            width: '15%',
        }
    ]

    // getDataTable
    export const getDataTable = (data) => {
        const dataResult = [];
        (data?.length > 0) 
        &&
        data.map((item, index)=> {
        const obj = {...item, key: index}
        return dataResult.push(obj);
        })
        return dataResult;
    }

    export const setGridColumn = (size) => {
        if(size === '3') {
            return 'col-span-3'
        } else if (size === '2') {
            return 'col-span-2'
        } else {
            return 'col-span-1'
        }
    }