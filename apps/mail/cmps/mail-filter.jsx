import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter({onSetMailFilter}){

    const [mailFilterBytoEdit, setMailFilterBytoEdit] = useState(mailService.getDefaultCriteria())


    useEffect(() => {
        onSetMailFilter(mailFilterBytoEdit)
    }, [mailFilterBytoEdit])

        function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setMailFilterBytoEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <section className="mail-filter">


        <form action="" className='mail-filter-form '>
        <button type='button' onClick={()=>{onSetMailFilter(mailFilterBytoEdit)}}>🔍</button>
        <input type="text"
            name="txt"
            placeholder="Search mail"
            value={mailFilterBytoEdit.txt || ''}
            id='mail-search'
            title=""
            className="mail-search"
            onChange={handleChange} />


    </form>

  
    </section>
}





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