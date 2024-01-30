

// EXPENSES MODEL ENUMS
const expense = {
    categories: [
        'ELECTRICITY BILL',
        'REPAIR AND MAINTAINANCE',
        'INTERNET BILLS',
        'RAW MATERIAL',
        'RENT',
        'PRINTING',
        'EMPLOYEE SALARIES',
    ]
}

const common = {
    userType: ['TAXABLE', 'EXEMPTED'],
    paymentStatus: [
        'PAID',
        'PENDING',
    ],
    paymentMode: [
        'CASH',
        'CARD',
        'UPI',
        'NET BANKING',
        'CHEQUE',
        'EMI',
    ],
    paymentType: ['RECEIVED', 'PAID'],
    partyType: ['CUSTOMER', 'VENDOR']
};

const offer = {
    type: ['PERCENTAGE', 'VALUE'],
    status: ['DRAFT', 'LIVE', 'PAST']
};

const purchase = {
    orderType: ['PURCHASE', 'RETURN']
}

function generateOfferCode() {
    // You can customize the length and characters of the code as needed
    const codeLength = 6;
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

    let code = "";
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}

module.exports = {
    expense,
    common,
    offer,
    purchase,
    generateOfferCode
}


