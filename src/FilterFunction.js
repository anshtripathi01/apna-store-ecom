export const getSortedData = (data, sortType) => {
    if(sortType === "New"){
        console.log("Fetured");
        return data.filter((item)=>item.featured === "New")
    }
    else if (sortType === "low-to-high") {
        return [...data].sort((a, b) => a['price'] - b['price'])
    } else if (sortType === "high-to-low") {
        return [...data].sort((a, b) => b['price'] - a['price'])
    }
    return data;
}

export const getRatingSortedData = (data, rating) => {
    if (rating !== 0) {
        return data.filter(item => item.rating >= rating)
    }
    return data;
}
export const getFilteredData = (data, state) => {
   
    let filteredData = [...data];
    if (state.sortByFilters.sortByCategory.length !== 0) {
        filteredData = filteredData.filter(item => state.sortByFilters.sortByCategory.includes(item.category))
        
    }
    return filteredData;
}
