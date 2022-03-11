var express = require('express');
const mysql = require('mysql2');

var router = express.Router();


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zealous_staging_shopify_form'
});


//get all users
router.get('/', function (req, res, next) {
  connection.query(
    `SELECT v_db_name from users`,
    function (err, results, fields) {
      results.map(function (row, indx) {
        var connection_db = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          database: row.v_db_name

        });
        // console.log(connection_db);

        connection_db.query(
          `SELECT * from forms`,
          function (err, resultsdata, fields) {
            // console.log(resultsdata);
            for(let i of resultsdata){
              console.log("data",i);
              connection.query(`INSERT INTO forms (id,i_user_id,v_name,v_shortcode,t_form_builder_json,t_form_options_json,v_custom_redirect_url, e_form_type,e_status,v_submit_button_text,v_success_msg,e_register_on_shopify,e_enable_captcha,	v_custom_css ,created_at,updated_at) VALUES (${i.id},${i.i_user_id},"${i.v_name}","${i.v_shortcode}","${i.t_form_builder_json}","${i.t_form_options_json}","${i.v_custom_redirect_url}","${i.e_form_type}","${i.e_status}","${i.v_submit_button_text}","${i.v_success_msg}","${i.e_register_on_shopify}","${i.e_enable_captcha}","${i.v_custom_css}","${i.created_at}","${i.updated_at}"`)
            }

            // resultsdata.map(function (data_insert) {
            //   console.log("data",data_insert);
            //   res.send(data_insert)
            //   console.log(i_user_id);
            //   // connection.query(`INSERT INTO forms (i_user_id,v_name,v_shortcode,t_form_builder_json,t_form_options_json,v_custom_redirect_url, e_form_type,e_status,v_submit_button_text,v_success_msg,	e_register_on_shopify,e_enable_captcha,	v_custom_css ,created_at) VALUES (${i_user_id},"${v_name}","${v_shortcode}","${t_form_builder_json}","${t_form_options_json}","${v_custom_redirect_url}","${e_form_type}","${data_insert.e_status}","${data_insert.v_submit_button_text}","${v_success_msg}","${e_register_on_shopify}","${e_enable_captcha}","${v_custom_css}",${new Date().toTimeString().split(" ")[0]}")`,
            //   //   function (err, results, fields) {
            //   //     console.log("done", results);
            //   //   }
            //   // )

            // })

          }
        )





      })

    }
  );



});


module.exports = router;
