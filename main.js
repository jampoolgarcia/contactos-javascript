const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const btnSave = document.querySelector('.btn-save');

load();

btnSave.onclick = () => {
    if(name.value.length > 0 && phone.value.length > 0 && address.value.length > 0){
        let contact = {
            id: Math.random(0, 100),
            name: name.value,
            phone: phone.value,
            address: address.value,
        }
        save(contact);
    }
    
}