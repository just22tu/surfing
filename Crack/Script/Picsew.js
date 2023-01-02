

var obj = JSON.parse($response.body);
var bundle_id = obj.receipt.bundle_id;

if (bundle_id == "com.sugarmo.ScrollClip") {
      obj.receipt.in_app[0] = {
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date": "2020-06-06 00:00:00 Etc/GMT",
      "purchase_date_ms": "1591372800000",
      "purchase_date_pst": "2020-06-06 00:00:00 America/San_Francisco",
      "original_purchase_date": "2020-06-06 00:00:00 Etc/GMT",
      "original_purchase_date_ms": "1591372800000",
      "original_purchase_date_pst": "2020-06-06 00:00:00 America/San_Francisco",
      "is_trial_period": "false"
    }
}

$done({body: JSON.stringify(obj)});
