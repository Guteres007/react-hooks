import React, {useState,useEffect} from 'react';

import './App.css';
import ListItems from "./ListItems";
import { Alert, Button } from 'react-bootstrap';

function List() {



   const [data, setData] = useState([]);
   const [inputValue, setInputValue] = useState("");
   const [show,setShow] = useState(false);

    function AlertPopup() {


        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Chyba</Alert.Heading>
                    <p>
                        Text nesmí být prázdný
                    </p>
                </Alert>
            );
        }
        return false;
    }

  /*  useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setData(result.data);
        };
        fetchData();
    }, []);
*/
    useEffect( () => {
        async function fetchData() {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json());
                setData(data);
        };
        fetchData();
        },[])



    function validation (input){
        if (input.length < 1 ){
            setShow(true);
        }else{
            return true;
        }


    }

   function handleSubmit(event){
       event.preventDefault();

       if (validation(inputValue)) {
           const lastItem = data.slice(-1).pop();
           const lastItemId = lastItem.id + 1;

           setData([...data,{id: lastItemId, name: inputValue}]);
           setInputValue("");
       }

    }

    function handleChange(event){
        setInputValue(event.target.value);

    }

    const dataNew =  data.map(item =>
        <ListItems key={item.id} text={item.name}/>
    );


    return (
        <div>
            <AlertPopup/>
            <form onSubmit={handleSubmit}>
                <ul>
                   {dataNew}
                </ul>
                <input type="text" placeholder={"pridej jméno"} value={inputValue} onChange={handleChange}/>
                <Button variant="success" type={"submmit"}>Přidat</Button>
            </form>
        </div>
    );
}

export default List;