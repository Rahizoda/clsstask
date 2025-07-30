import { Form } from "./components/Form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";



import {Button , } from "./components/ui/button"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useForm} from "react-hook-form"



export default function App() {
  const api = 'https://68500abee7c42cfd17971bfc.mockapi.io/data/data'

  const [data, setData] = useState([])

  async function Get() {
    try {
      const { data } = await axios.get(api)
      setData( data)
     } catch (error) {
      console.log(error);
    }
  }

  async function addData(data) {
    try {
      await axios.post(api, data)
      Get()
    } catch (error) {
      console.log(error);
    }
  }


  async function deleteData(id) {
    try {
      await axios.delete(`${api}/${id}`)
      Get()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Get()
  },[])

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    addData(data)
    
    console.log(data);

  }

  console.log(watch("name")) // watch input value by passing the name of it
  // console.log(watch("description")) // watch input value by passing the name of it
  // console.log(watch("image")) // watch input value by passing the name of it
  // console.log(watch("age")) // watch input value by passing the name of it

  return (
    <div className="min-h-screen  bg-gray-100 p-4">
      <Drawer className='h-screen' >
        <DrawerTrigger className='bg-blue-500 text-white p-2 rounded-md'>Open Modal</DrawerTrigger>
        <DrawerContent className='h-[600px]'>
          <DrawerHeader >

             {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
   <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="border border-gray-300 p-2 mb-[30px] rounded-md" placeholder="Name" {...register("name" , { minLength:{ value: 2, message: "Minimum length is 2" } })} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="border border-gray-300 p-2 rounded-md" placeholder="Age" {...register("age" )} /> <br />
      <input className="border border-gray-300 p-2 rounded-md" placeholder="Image URL" {...register("image" )} /> <br /> 
      <input className="border border-gray-300 p-2 rounded-md" placeholder="Description" {...register("description", { minLength: { value: 5, message: "Minimum length is 5" } })} /> <br />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input className="bg-blue-500 text-white p-2 rounded-md" type="submit" />
    </form>

          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose className='bg-red-500 text-white p-2 rounded-md'>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


      <div>

        {
          data.map((el) => {
            return (
              <div className="border-b border-gray-800 py-4" key={el.id}>

              <h1 className="text-lg font-semibold"> {el.name} </h1>
                <h1 className="text-gray-600"> {el.description} </h1>
                <button className="text-blue-500 border border-blue-500 rounded-[2px] p-[10px_30px] ">Edit</button>
                <button onClick={() => deleteData(el.id)} className="text-blue-500 border border-blue-500 rounded-[2px] p-[10px_30px] ">Delete</button>

            </div>
           )
          } )
        }
      </div>

    </div>
  );
}
  