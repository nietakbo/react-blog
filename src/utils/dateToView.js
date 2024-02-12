const dateToView = date => {
    let dateInView = new Date(date);
    const day = String(dateInView.getDate()).padStart(2, '0');
    const month = String(dateInView.getMonth() + 1).padStart(2, '0');
    const year = dateInView.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  export default dateToView;