function textElement(elementId){
    const textEelementValue = document.getElementById(elementId);
    const textEelementValueString = textEelementValue.innerText;
    const textEelementValueNumber = parseFloat (textEelementValueString);

    return textEelementValueNumber;
}

document.getElementById('discount-btn').addEventListener('click', function(){
    const orginalPrice = textElement('orginal-price');

    const discount = orginalPrice * .30;
    const discountPrice = orginalPrice - discount;

    const discountPriceElement = document.getElementById('discount-price');
    discountPriceElement.innerText = `Discounted Price: $${discountPrice}`;
    

})