import SingleProduct from "../Components/SingleProduct";
import Breadcrum from "../Components/Breadcrum";

import { useEffect, useState } from "react";
import { getBrand } from "../Redux/ActionCreaters/BrandActionCreaters";
import { getMaincategory } from "../Redux/ActionCreaters/MaincategoryActionCreaters";
import { getProduct } from "../Redux/ActionCreaters/ProductActionCreaters";
import { getSubcategory } from "../Redux/ActionCreaters/SubcategoryActionCreaters";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Color Array
const color = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Orange", "Grey", "Brown", "Navy", "Sky Blue", "Maroon", "Olive", "Beige", "Teal", "Lavender", "Mustard", "Coral", "N/A"];

// Size Array
const size = ["NB", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "Free Size", "One Size", "N/A"];

export default function ShopPage() {

  let [sortFilter, setSortFilter] = useState('1')
  let [search, setSearch] = useState("")
  let [min, setMin] = useState(-1)
  let [max, setMax] = useState(-1)

  let [data, setData] = useState()
  let [selected, setSelected] = useState({
    maincategory: [],
    subcategory: [],
    brand: [],
    color: [],
    size: []
  })

  let maincategoryStateData = useSelector((state) => state.maincategoryStateData)
  let subcategoryStateData = useSelector((state) => state.subcategoryStateData)
  let brandStateData = useSelector((state) => state.brandStateData)
  let productStateData = useSelector((state) => state.productStateData)

  let dispatch = useDispatch()

  useEffect(() => {
    (() => dispatch(getMaincategory()))()
  }, [maincategoryStateData.length])

  useEffect(() => {
    (() => dispatch(getSubcategory()))()
  }, [subcategoryStateData.length])

  useEffect(() => {
    (() => dispatch(getBrand()))()
  }, [brandStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getProduct())
      if (productStateData.length)
        setData(productStateData.filter(x => x.status))
    })()
  }, [productStateData.length])

  function getSelection(key, value) {
    let arr = selected[key]
    if (arr.includes(value))
      arr = arr.filter(x => x !== value)
    else
      arr.push(value)

    setSelected({ ...selected, [key]: arr })
    setSearch('')
    filterData({ ...selected, [key]: arr })

  }

  function filterData(selected) {
    let data = productStateData.filter(x => x.status && (
      (selected.maincategory.length === 0 || selected.maincategory.includes(x.maincategory)) &&
      (selected.subcategory.length === 0 || selected.subcategory.includes(x.subcategory)) &&
      (selected.brand.length === 0 || selected.brand.includes(x.brand)) &&
      (selected.color.length === 0 || (new Set(selected.color)).intersection(new Set(x.color)).size) &&
      (selected.size.length === 0 || (new Set(selected.size)).intersection(new Set(x.size)).size)

    ))
    setData(data)
  }

  function applySortFilter(sortFilter, data) {
    setSortFilter(sortFilter)
    if (min !== -1) {
      data = data.filter(x => x.finalPrice >= min && x.finalPrice <= max)
    }
    if (sortFilter === '1')
      setData(data.sort((x, y) => y.id.localeCompare(x.id)))
    // setData(data.sort((x, y) => x.finalPrice - y.finalPrice))
    else if (sortFilter === '2')
      setData(data.sort((x, y) => x.finalPrice - y.finalPrice))
    else
      setData(data.sort((x, y) => y.finalPrice - x.finalPrice))
  }

  function postSearch() {
    setSelected({
      maincategory: [],
      subcategory: [],
      brand: [],
      color: [],
      size: []
    })

    let ch = search.toLocaleLowerCase()
    let data = productStateData.filter(x => x.status && (
      x.name?.toLocaleLowerCase().includes(ch) ||
      x.maincategory?.toLocaleLowerCase() === ch ||
      x.subcategory?.toLocaleLowerCase() === ch ||
      x.brand?.toLocaleLowerCase() === ch ||
      x.description?.toLocaleLowerCase().includes(ch)
    ))
    applySortFilter(sortFilter, data)
  }

  // function postPriceFilter(e) {
  //   e.preventDefault()
  //   if (search !== "")
  //     postSearch()
  //   else
  //     filterData(selected)
  // }
  function postPriceFilter(e) {
    e.preventDefault()

    let filteredData = [...productStateData]

    if (search !== "") {
      postSearch()
      return
    }

    filteredData = filteredData.filter(
      x =>
        x.status &&
        x.finalPrice >= Number(min) &&
        x.finalPrice <= Number(max)
    )
    applySortFilter(sortFilter, filteredData)
  }
  return (
    <>
      <div className="page-title mt-3">
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><NavLink to="/">Home</NavLink></li>
              <li className="current">Shop</li>
            </ol>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <section id="services" className="services section">
              <div className="container">
                <ul className="list-group mb-2">
                  <li className="list-group-item active" aria-current="true">Maincategory</li>
                  {
                    maincategoryStateData.filter(x => x.status && productStateData.filter(p => p.maincategory === x.name).length).map(item => {
                      return <li key={item.id} onClick={() => getSelection('maincategory', item.name)} className="list-group-item">{item.name} {selected.maincategory.includes(item.name) ? <span><i className="bi bi-check float-end"></i></span> : ''}</li>
                    })
                  }
                </ul>
                <ul className="list-group mb-2">
                  <li className="list-group-item active" aria-current="true">Subcategory</li>
                  {
                    subcategoryStateData.filter(x => x.status).map(item => {
                      return <li key={item.id} onClick={() => getSelection('subcategory', item.name)} className="list-group-item">{item.name} {selected.subcategory.includes(item.name) ? <span><i className="bi bi-check float-end"></i></span> : ''}</li>
                    })
                  }
                </ul>
                <ul className="list-group mb-2">
                  <li className="list-group-item active" aria-current="true">Brand</li>
                  {
                    brandStateData.filter(x => x.status).map(item => {
                      return <li key={item.id} onClick={() => getSelection('brand', item.name)} className="list-group-item">{item.name} {selected.brand.includes(item.name) ? <span><i className="bi bi-check float-end"></i></span> : ''}</li>
                    })
                  }
                </ul>
                <ul className="list-group mb-3">
                  <li className="list-group-item active" aria-current="true">Price Range</li>
                  <form onSubmit={postPriceFilter}>
                    <div className="row">
                      <div className="col-6 my-3">
                        <label>Min. Amount</label>
                        {/* <input type="text" name="min" value={min === -1 ? null : min} onChange={(e) => setMin(e.target.value)} className='form-control border-primary' placeholder='Minimum' /> */}
                        <input
                          type="text"
                          name="minAmount"
                          value={min === -1 ? "" : min}
                          onChange={(e) =>
                            setMin(e.target.value.replace(/\D/g, ""))
                          }
                          className='form-control border-primary'
                          placeholder='Minimum'
                        />
                      </div>
                      <div className="col-6 my-3">
                        <label>Max. Amount</label>
                        {/* <input type="text" name="max" value={max === -1 ? null : max} onChange={(e) => setMax(e.target.value)} className='form-control border-primary' placeholder='Maximum' /> */}
                        <input
                          type="text"
                          name="minAmount"
                          value={max === -1 ? "" : max}
                          onChange={(e) =>
                            setMax(e.target.value.replace(/\D/g, ""))
                          }
                          className='form-control border-primary'
                          placeholder='MiniMaximummum'
                        />
                      </div>

                      <div className="col-12 ">
                        <button type="submit" className='btn btn-primary w-100'>Apply</button>
                      </div>
                    </div>
                  </form>
                </ul>
                <ul className="list-group mb-2">
                  <li className="list-group-item active" aria-current="true">Colors</li>
                  <div className="row">
                    {
                      color.map((item, index) => {
                        return <div className="col-6" key={item.id || index}> <li key={item.id} onClick={() => getSelection('color', item)} className="list-group-item">{item} {selected.color.includes(item) ? <span><i className="bi bi-check float-end"></i></span> : ''}</li>
                        </div>
                      })
                    }
                  </div>
                </ul>
                <ul className="list-group mb-2">
                  <li className="list-group-item active" aria-current="true">Size</li>
                  <div className="row">
                    {
                      size.map((item, index) => {
                        return <div key={item.id || index} className="col-6" >
                          <li key={item.id} onClick={() => getSelection('size', item)} className="list-group-item">
                            {item} {selected.size.includes(item) ? <span><i className="bi bi-check float-end"></i></span> : ''}
                          </li>
                        </div>
                      })
                    }
                  </div>
                </ul>
              </div>
            </section>
          </div>
          <div className="col-lg-9">
            <section id="services" className="services section">
              <div className="row mb-5">
                <div className="col-lg-8">
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    postSearch()
                  }}>
                    <div className="btn-group w-100">
                      <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search Product By Name, Category , Color Etc' className='form-control border-primary rounded-0 rounded-start' />
                      <button type="submit" className='btn btn-primary'>Search</button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <select name="sortFilter" onChange={(e) => applySortFilter(e.target.value, data)} className="form-select border-primary">
                    <option value="1">Latest Product</option>
                    <option value="2">Price : Low to High</option>
                    <option value="3">Price : High to Low</option>
                  </select>
                </div>
              </div>
              <div className="row gy-4">
                {data?.map((item => {
                  return <div key={item.id} className="col-lg-4 col-sm-6 col-12">
                    <SingleProduct item={item} />
                  </div>
                }))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
