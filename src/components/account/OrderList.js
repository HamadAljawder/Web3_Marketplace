import { useMoralis, useMoralisQuery } from "react-moralis";
import { Table, Skeleton } from "antd";
import { Link } from "react-router-dom";


const OrderList = () => {

    const {account} = useMoralis ();
    const { data, error, isLoading } = useMoralisQuery(
        "Transaction",
        (query) => query.equalTo("Customer", account),
        [],
        );


     if (error) {
       return <span>🤯</span>;
     }
     
     if (isLoading) {
       return <span>🙄</span>,
       <Skeleton/>
     }
     console.log(data)

    //  {data.map(e => {
    //     let id = e.id;
    //     })}
     
     

    //  for (let i = 0; i < data.length; i++) {
    //  var Transaction = data[i];
    // //  console.log(Transaction)
    // var OrderNumber = Transaction.id;
    // console.log(OrderNumber)

     
    //  var TransactionNumber = Transaction.id;
    //  const createdAt = data.createdAt;
    //  const formattedDate = createdAt.toLocaleDateString("en-GB", {
    //     day: "numeric",
    //      month: "long",
    //         year: "numeric"
    //                         })

    //             console.log(formattedDate)
     
    //  }

    const columns = [
        {
          title: 'Order Number',
          dataIndex: 'id',
          key: 'order',
          render: (id) =>  <Link to="/OrderDetails" state={id}><b>{id}</b></Link>,

        //   render: (id) =>  {data.map(e => {
        //     return (
        //         <Link to="/OrderDetails" state={e.id} ><b>{id}</b></Link>
        //     );
        // })}
        },
        {
          title: 'Date',
          dataIndex: 'createdAt',
          key: 'date',
            render: (createdAt) => <span>{createdAt.toLocaleString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric'
              })}</span>,
        },
        {
            title: 'Items',
            dataIndex: ['attributes', 'Product'],
            key: 'product',
          },
      ];
     
      
         
   
     return (  
        <>
      <pre>{JSON.stringify(data, null, 2)}</pre>,

            {/* <h1 key={1}> Hello {formattedDate}</h1> */}
            {/* <h1 key={1}> Hello {TransactionNumber}</h1> */}
            <Table dataSource={data} columns={columns} bordered/>,

            {data.map(e => {
          return (

            <h1> Heya {e.id} </h1>,
            <h1> Heya {e.createdAt.toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric'
              })} </h1>
            
            
            )
    
    
    })};

        

   
     </>
     )

}

export default OrderList;
