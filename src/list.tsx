function ListItems(){
const city = ['Nairobi', 'Kisumu', 'Eldoret', 'Mombasa'];

return(
   <>
     {city.map((item)=>(
        <li key={item}>{item}</li>
    ))}
   </>
);

}

export default ListItems