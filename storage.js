const listContact = document.querySelector('.list-contact')
const storage = window.localStorage;

const save = (contact) =>{
    let contactString = JSON.stringify(contact);
    storage.setItem(contact.id, contactString);
    window.location.href = '/';
}

const load = () => {
    let keys = Object.keys(storage);
    for(key of keys){
        let contact = JSON.parse(storage.getItem(key));
        createViewContact(contact);
    }
}

const createViewContact = (contact) => {

    let div = document.createElement('div');
    let name = document.createElement('h3');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let btnRemove = document.createElement('span');

    name.innerHTML = contact.name;
    phone.innerHTML = contact.phone;
    address.innerHTML = contact.address;
    btnRemove.innerHTML = 'delete_forever';

    div.classList.add('contact');
    btnRemove.classList.add('material-icons', 'warn');

    btnRemove.onclick = () => {
        storage.removeItem(contact.id); 
        window.location.href = '/';
    }

    div.appendChild(name);
    div.appendChild(phone);
    div.appendChild(address);
    div.appendChild(btnRemove);

    listContact.appendChild(div);
}
