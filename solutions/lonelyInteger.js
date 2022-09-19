
function lonelyinteger(a) {
    var result = 0
    
    a.map(mapItem => {
      if(a.filter(filterItem => filterItem == mapItem).length < 2) result = mapItem;
    })
    
    return result;
}