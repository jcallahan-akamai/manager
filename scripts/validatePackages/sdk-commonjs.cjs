const apiv4 = require('@linode/api-v4');

apiv4.getRegions().then(res => {
    console.log(res.data.length)
})