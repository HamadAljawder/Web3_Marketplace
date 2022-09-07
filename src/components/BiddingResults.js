import { WalletOutlined, DollarOutlined} from '@ant-design/icons';
import {Table} from 'antd';
import { useMoralisQuery } from 'react-moralis';


const BiddingResults = () => {
    const { data, error, isLoading } = useMoralisQuery(
        "Bid",
        (query) => query.equalTo("Product", "Natural de Ciudad Bolívar - Antioquia")
        .descending("Amount"),
        [],
        );
        console.log(data)


     if (error) {
       return <span>🤯</span>;
     }
     
     if (isLoading) {
       return <span>🙄</span>;
     }

     const columns = [
        {
          title: [<WalletOutlined/>,' Wallet ID'],
          dataIndex: ['attributes','Customer'],
          key: 'customer',
        },
        {
          title: [<DollarOutlined/>,' Amount'],
          dataIndex: ['attributes','Amount'],
          key: 'amount',
          render: dataIndex => <b>${dataIndex}</b>,

        },
      ];


     return (
        <Table dataSource={data} columns={columns} />
     )




}

export default BiddingResults