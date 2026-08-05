const browserVersion = 'Chrome';
//const browserVersion2 = 'Firefox';

function getBrowserVersion(){

    if(browserVersion == 'Chrome'){
       //var browserVersion = 'firefox';
       let browserVersion = 'firefox';
       //const browserVersion

       console.log('inside block',browserVersion);

    }

    console.log('accessing variable inside the block', browserVersion);
}
getBrowserVersion()
