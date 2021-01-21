import { useEffect, useState } from "react";
import {db} from '../../../utils/Firebase';

const UseOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("orders")      
      .onSnapshot((snapshot) => {
        let newOrders = snapshot.docs.map((doc) => ({
          orderId: doc.id,
          data: doc.data(),
        }));
        setOrders(newOrders);
      });
  }, []);

  return orders;
};

export default UseOrders;