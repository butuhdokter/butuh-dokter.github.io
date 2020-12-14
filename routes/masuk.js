const express = require('express');
const router = express.Router();

router.get('/masuk',
    async (req, res) => {
        if (req.session.user) {
            res.redirect('/');
        } else {
            res.render('pages/masuk', { layout: false });
        }
        //res.render('pages/login');
    }
);

//dari login.ejs
router.post('/masuk',
    async (req, res) => {
        
            req.session.user = "admin";

            // login success and redirect to member area
            res.redirect('/');//jika sudah berhasil login di oper ke index
        
    }
);//cek login disini, dilempar ke sini user dan pasword yg diinput

module.exports = router;
//00:15:30

//lalu pindah ke login.ejs
//munculin error <persen if..........

//4
//terminal : npm install --save express session
//lalu ke index.js home, tambahkan (enable session) app.use
//time 00:43:26

//lalu tambahkan if(..........) di get diatas
//lalu bikin get logout

//time 00:58:45 pindah ke index.js routes lalu ganti jadi res.render(), yg diganti render, dari redirect, dan tambah isi if, else