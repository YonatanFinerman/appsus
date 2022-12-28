const { useState, useEffect } = React

export function MailFilter(){

        function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <section className="mail-filter">
        


        <input type="search" name="" id="" />
    </section>
}

{/* <label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist> */}




// import { bookService } from "../services/book.service.js"
// import { eventBusService } from "../services/event-bus.service.js"

// export function BookFilter({ onSetFilter }) {
//     const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

//     useEffect(() => {
//         onSetFilter(filterByToEdit)
//     }, [filterByToEdit])

 

//     function handleChange({ target }) {
//         let { value, name: field, type } = target
//         value = (type === 'number') ? +value : value
//         setFilterByToEdit((prevFilter) => {
//             return { ...prevFilter, [field]: value }
//         })
//     }


//     return <form action="" className='book-filter full'>
//         <label htmlFor="title">Book title:</label>
//         <input type="text"
//             name="title"
//             placeholder="filter by title"
//             value={filterByToEdit.title || ''}
//             id='title'
        

//             onChange={handleChange} /><br></br>

//         <label htmlFor="price-filter">Min price:</label>
//         <input type="number"
//             placeholder="filter by min price"
//             name="amount"
//             value={filterByToEdit.amount || ''}
//             id="price-filter"
//             onChange={handleChange} />
//     </form>
// }