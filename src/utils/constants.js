

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
    partyType: ['CUSTOMER', 'VENDOR', 'EXPENSE', 'INCOME']
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

const permissionForManager = {
    "sales": {
        r: true,
        u: false
    },
    "purchase": {
        r: true,
        u: false
    },
    "purchaseReturn": {
        r: true,
        u: false
    },
    "payment": {
        r: true,
        u: false
    },
    "receipt": {
        r: true,
        u: false
    },
    "expenditure": {
        r: true,
        u: false
    },
    "product": {
        r: true,
        u: false
    },
    "customer": {
        r: true,
        u: false
    },
    "vendor": {
        r: true,
        u: false
    },
    "user": {
        r: true,
        u: false
    },
    "offer": {
        r: true,
        u: false
    },
    "employee": {
        r: true,
        u: false
    },
    "reports": {
        r: true,
        u: false
    },
    "settings": {
        r: true,
        u: false
    }
};

const permissionForAdmin = {
    "sales": {
        r: true,
        u: true
    },
    "purchase": {
        r: true,
        u: true
    },
    "purchaseReturn": {
        r: true,
        u: true
    },
    "payment": {
        r: true,
        u: true
    },
    "receipt": {
        r: true,
        u: true
    },
    "expenditure": {
        r: true,
        u: true
    },
    "product": {
        r: true,
        u: true
    },
    "customer": {
        r: true,
        u: true
    },
    "vendor": {
        r: true,
        u: true
    },
    "user": {
        r: true,
        u: true
    },
    "offer": {
        r: true,
        u: true
    },
    "employee": {
        r: true,
        u: true
    },
    "reports": {
        r: true,
        u: true
    },
    "settings": {
        r: true,
        u: true
    }
};

module.exports = {
    expense,
    common,
    offer,
    purchase,
    generateOfferCode,
    permissionForManager,
    permissionForAdmin,
}


