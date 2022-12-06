import Button from '@components/Button'
import { DefaultLayout } from '@layouts/DefaultLayout'
import { postData } from '@utils/request'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { Input } from '../components/Input'

const CreateProductPage: IPageComponent = () => {
  const router = useRouter()
  const [values, setValues] = useState<{
    pid: string
    name: string
    unit_name: string
    description: string
    price_sol: string
    price_usd: string
  }>({
    pid: '',
    name: '',
    unit_name: '',
    description: '',
    price_sol: '',
    price_usd: '',
  })
  const handleInputValue = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }))
  const createProduct = useCallback(async (values) => {
    postData(
      {
        ...values,
        price_sol: Number(values.price_sol),
        price_usd: Number(values.price_usd),
      },
      'product'
    )
      .then((res) => router.replace('/'))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data) // => the response payload
        }
      })
  }, [])
  return (
    <div className="flex flex-col items-center gap-8 text-black">
      <h1 className="text-center text-2xl">Create a new product</h1>
      <div className="create">
        <Input
          label="pid"
          value={values['pid']}
          handleInputValue={handleInputValue}
        />
        <Input
          label="name"
          value={values['name']}
          handleInputValue={handleInputValue}
        />
        <Input
          label="unit_name"
          value={values['unit_name']}
          handleInputValue={handleInputValue}
        />
        <Input
          label="description"
          type="textarea"
          value={values['description']}
          handleInputValue={handleInputValue}
        />
        <Input
          label="price_sol"
          value={values['price_sol']}
          handleInputValue={handleInputValue}
        />
        <Input
          label="price_usd"
          value={values['price_usd']}
          handleInputValue={handleInputValue}
        />
        <div className="flex justify-end">
          <Button text="Submit" onClick={() => createProduct(values)} />
        </div>
      </div>
    </div>
  )
}
CreateProductPage.getLayout = (screen) => (
  <DefaultLayout>{screen}</DefaultLayout>
)
export default CreateProductPage
