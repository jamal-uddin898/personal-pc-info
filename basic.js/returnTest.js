function getTotal(phone, casing){
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;

    const total = phoneCost + casingCost;
    return total;
}

const totalCost = getTotal(4, 6);
const firstResult = document.getElementById('firstResult');
firstResult.innerText = totalCost;