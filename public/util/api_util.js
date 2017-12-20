export const fetchAllDoves = () => (
    $.ajax({
        method: 'GET', 
        url: `doves`
    })
);

export const fetchSingleDove = (id) => (
    $.ajax({
        method: 'GET', 
        url: `doves/${id}`
    })
);

export const deleteDove = (id) => (
    $.ajax({
        method: 'DELETE', 
        url: `doves/${id}`
    })
);