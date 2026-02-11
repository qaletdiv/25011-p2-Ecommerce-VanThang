import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useEffect, useState } from 'react'
import { Title } from '../ui/text'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { fetchProducts } from '@/lib/redux/products/productsThunk'


interface Props {
  value: string | null;
  onChange: (value: string |null) => void
}

const CategoryList = ({value, onChange}: Props ) => {
  const { items } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts())
    }
  }, [dispatch, items.length])

  const categories = Array.from(new Set(items.map(p => p.category)))

  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Product Categories</Title>

    <RadioGroup
  value={value ?? ""}
  onValueChange={onChange}
  className="mt-2 space-y-1 "
>
  {categories.map(cat => {
    const active = value === cat

    return (
      <label
        key={cat}
        htmlFor={cat}
        className={`flex items-center space-x-2 hover:cursor-pointer gap-2 
          ${active ? "font-bold text-shop-dark-green bg-green-50 " : "text-gray-700"}
        `}
      >
        <RadioGroupItem value={cat} id={cat} className='rounded-sm'  />
        {cat}
      </label>
    )
  })}
</RadioGroup>
{value && (
          <button onClick={() => onChange(null) } 
          className='text-sm font-medium mt-2 underline underline-offset-2 decoration-1px hover:text-shop-dark-green hoverEffect  ' >
            Reset button
          </button>
        ) }


    </div>
  )
}

export default CategoryList
