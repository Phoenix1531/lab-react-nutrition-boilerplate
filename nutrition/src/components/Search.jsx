const Search=(props)=>{
    const {setSearch}=props
    return <>
        <h1 style={{color:"white",fontSize:"30px"}}>Search</h1>
        <input type="text" style={{
            width:"400px",
            padding:"10px 40px",
            fontSize:"large",
            borderRadius:"20px"
        }} placeholder="Search food here....." onChange={(e)=>{
            setSearch(e.target.value)
        }}/>

    </>
}
export default Search