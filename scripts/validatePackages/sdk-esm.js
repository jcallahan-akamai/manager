import { getRegions } from '@linode/api-v4';

getRegions().then(res => {
    console.log(res.data.length);
});