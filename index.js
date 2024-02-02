require("dotenv").config(); // load the environment variables
const express = require('express');
const cors = require('cors');
const endpointsDescriptor = require("express-list-endpoints-descriptor")(express);
const userRoutes = require('./src/routes/user.routes');
const customerRoutes = require('./src/routes/customer.routes');
const vendorRoutes = require('./src/routes/vendor.routes');
const productRoutes = require('./src/routes/product.routes');
const productBarcodeRoutes = require('./src/routes/productBarcodeValue.routes');
const ProductCatergoryRoutes = require("./src/routes/productCategory.routes");
const roleRoutes = require('./src/routes/role.routes');
const authRoutes = require('./src/routes/auth.routes');
const offerRoutes = require('./src/routes/offer.routes');
const expenditureRoutes = require('./src/routes/expenditure.routes');
const employeeRoutes = require('./src/routes/employee.routes');
const morgan = require('morgan');

// Initialize the MongoDB connection via mongoose module
require("./src/db/db");

const app = express();

// Enable CORS for all origins and include Authorization header
app.use(morgan('dev'))
app.use(cors());

app.use(express.json());

const PORT = process.env.port;

app.use('/auth', authRoutes)
app.use('/user', userRoutes);
app.use('/customer', customerRoutes);
app.use('/vendor', vendorRoutes);
app.use('/product', productRoutes);
app.use('/productbarcode', productBarcodeRoutes);
app.use('/product/category', ProductCatergoryRoutes);
app.use('/role', roleRoutes);
app.use('/offer', offerRoutes);
app.use('/expenditure', expenditureRoutes);
app.use('/employee', employeeRoutes);


// if (process.env.NODE_ENV == 'production') {
const path = require('path')
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "../build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    )
})
// }

app.listen(PORT, function () {
    console.log(`HTTP Accounting Server started on http://localhost:${PORT}`);
})
