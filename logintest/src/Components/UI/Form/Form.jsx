import './Form.css'

export const Form = () =>{
    return(
        <form>
            <select className="select_type">
                <option>Type</option>
            </select>
            <input className="search_box" type="search" placeholder="Search by location"></input>
            <button className="search_button">Search</button>
        </form>
    )
}