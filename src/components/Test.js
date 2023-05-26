import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Test() {
  const [data, setData] = useState("");

  const db = getFirestore();
  const fetchPost = async () => {
    await getDocs(collection(db, "careguides")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
      console.log(data, newData[0]);
    });
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  return <>Hello i am article</>;
}
