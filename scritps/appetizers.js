const Appetizer = (value) => {
    console.log(value)
    const appetizer = document.createElement('div');
    appetizer.setAttribute('class', 'container');
    const appetizerH2 = document.createElement('h2');
    appetizerH2.innerHTML = 'Appetizers'
    appetizer.appendChild(appetizerH2)
    const appHead = document.createElement('h1');
  appHead.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appHead.innerHTML = 'APPITIZERS';
    
    
    const app1 = document.createElement('h1');
    app1.setAttribute('id', 'app1');
    return appetizer;
};
export default Appetizer;