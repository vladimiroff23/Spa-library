import { Formik, Form, Field, ErrorMessage } from "formik"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import * as yup from 'yup'
import books from "../Store/books"


const shema = yup.object({
    name:yup.string().required().min(10)
})

export const AuthorForm = observer (()=>{
    const param = useParams ()
    console.log(param)
    function submit(V){
        console.log(V)
    }
    
    return <Formik 
    initialValues={{name:"Vadim"}}
    onSubmit={submit}
    validationSchema={shema}
    >
        <Form>
            <button type="button"
            onClick={()=>books.increment()}           
            >increment</button>
            <div>{books.counter}</div>
            <Field name = "name"/>
            <ErrorMessage name = "name"/>
            <button>submit</button>
        </Form>
    </Formik>
})


    
    

