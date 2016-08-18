angular.module('app')
       .filter('zeroPadding', zeroPaddingFilter);
       
function zeroPaddingFilter() {
    return function (input) {
        if (input < 10) {
        return '0' + input;
    }
    
    return input;
    }
}