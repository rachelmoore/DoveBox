export const fetchAllDoves = () => (
    $.ajax({
        method: 'GET', 
        url: 'http://localhost:3000/doves'
    })
);

export const fetchSingleDove = (id) => (
    $.ajax({
        method: 'GET', 
        url: `http://localhost:3000/doves/${id}`
    })
);

export const createDove = (dove) => (
    $.ajax({
        method: 'POST',
        url: `http://localhost:3000/doves`,
        data: { dove }
    })
);

export const deleteDove = (id) => (
    $.ajax({
        method: 'DELETE', 
        url: `http://localhost:3000/doves/${id}`
    })
);