import {Form, Formik, Field, ErrorMessage} from 'formik'
import {creatProduct, getProduct, updateProduct} from "../Api";
import * as yup from 'yup'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import './AddProduct.css'

const creatProductValidation = yup.object().shape({
    title:          yup.string().min(2).max(20),
    description:    yup.string().min(8).max(500),
    price:          yup.number().integer().min(20),
    imageUrl:       yup.string().url()
})
const AddProduct = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        if(productId){
            getProduct(productId).then(res => {
                setProduct(res)
            })
        }
    },[productId])

    const handleSubmit = values => {
        if(productId){
            updateProduct(productId,values).then(res => {
                alert('Update Successful!')
            }).catch(err => alert(err.message))
        } else {
            creatProduct(values).then(res => {
                console.log(res)
                alert('Add successfully')
            })
        }
    }
    return(
        <div className={'AddProduct'}>
            <p className={'Product__Title'}>{productId ? 'edit' : 'add'} products</p>
            <Formik enableReinitialize
                    initialValues={productId ?
                        {
                            title: product.title,
                            description: product.description,
                            price: product.price,
                            imageUrl: product.imageUrl
                        } :
                        {
                            title: '',
                            description: '',
                            price: '',
                            imageUrl: ''
                        }}
                    onSubmit={handleSubmit}
                    validationSchema={creatProductValidation}
            >
                <Form  className={'AddProduct'}>
                    <Field placeholder='Title'
                           name='title'
                           className={'AddProduct'}
                    />
                    <ErrorMessage name={'title'}
                                  className={'ErrorMessage'}
                                  component={'div'}/>

                    <Field placeholder='Description'
                           component='textarea'
                           name='description'
                           className={'AddProduct'}
                    />
                    <ErrorMessage name={'description'}
                                  className={'ErrorMessage'}
                                  component={'div'}/>

                    <Field placeholder='Price'
                           name='price'
                           className={'AddProduct'}
                    />
                    <ErrorMessage name={'price'}
                                  className={'ErrorMessage'}
                                  component={'div'}/>

                    <Field placeholder='Image URL'
                           name='imageUrl'
                           className={'AddProduct'}
                    />
                    <ErrorMessage name={'imageUrl'}
                                  className={'ErrorMessage'}
                                  component={'div'}/>

                    <button type={'submit'}
                            className={'form__button'}>
                        Add Product
                    </button>
                </Form>
            </Formik>
        </div>
    )
}
export default AddProduct