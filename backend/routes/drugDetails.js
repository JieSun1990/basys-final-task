const drugDetail = require("../models/drugDetails")
const router = require("express").Router();

// router.get('/', (req, res) => {
//     drugDetail.find({}).then((err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error retrieving patientInfo data');
//         } else {
//             // res.json(data);
//             console.log(data);
//         }
//     });
// });

router.get('/drugDetails/:id', (req, res) => {
    drugDetail.find({ CPTid: req.params.id })
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server Error');
        });
});

//   router.post("/", async (req, res) => {

//     const newProduct = new Product(req.body)

//     try {
//         const savedProduct = await newProduct.save();
//         res.status(200).json(savedProduct);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }

// })

router.put("/:id", async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }

});
module.exports = router;