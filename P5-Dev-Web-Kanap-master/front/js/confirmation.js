// Récupération de l'orderId

const getProductId = () => {
  return new URL(location.href).searchParams.get('id');
};
const orderId = getProductId();

const basket = JSON.parse(localStorage.getItem('basket'));

const idConfirmation = document.querySelector('#orderId');

idConfirmation.innerHTML = `${orderId}`;

localStorage.clear();
