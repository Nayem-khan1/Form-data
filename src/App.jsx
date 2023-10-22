import { useState } from "react";


const App = () => {

   let [FormData, setFormData] = useState({fName: "", lName: "", city: "", gender: ""});

   const inputOnChange = (property, value) => {

      setFormData(prevObj => ({
        ...prevObj,
        [property]: value,
      }))
   }

   console.log(FormData)

  return (
    <div style={{width: "960px", margin: "0 auto"}}>
      <form>
        <input onChange={(e) => {inputOnChange("fName", e.target.value)}} value={FormData.fName} placeholder="First Name"/>
        <input onChange={(e) => {inputOnChange("lName", e.target.value)}} value={FormData.lName} placeholder="Last Name"/>
        <select onChange={(e) => {inputOnChange("city", e.target.value)}} value={FormData.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Khulna">Khulna</option>
          <option value="Chitagong">Chitagong</option>
          <option value="Rajshahi">Rajshahi</option>
        </select>
        <br/>
        <input onChange={() => {inputOnChange("gender", "Male")}} checked = {FormData.gender === "Male"} type="radio" name="gender" id="" />Male
        <br/>
        <input onChange={() => {inputOnChange("gender", "Female")}} checked = {FormData.gender === "Female"} type="radio" name="gender" id="" />Female
        <br/>
        <input type="Submit" value="Submit your Information" />
      </form>
    </div>
  );
};

export default App;