const getwildcardHost = () => {
    var host = window.location.host
    var subdomain = host.split('.')[0];
    return host.replace(subdomain, '');
}
  
const domainString = () => {
    var value = getwildcardHost();
    return value === "" ? "" : `domain=${value};`;
}

const cookies = {
    /**
     * clears the key variables inside a domain cookie
     */
    clear: () => {
        var items = cookies.listKeys();
        for (var i = 0; i < items.length; i++) {
            cookies.remove(items[i]);
        }
    },

    /**
     * Returns a list of all key variables inside a domain cookie
     */
    list: () => {
        return document.cookie ? document.cookie.split("; ") : [];
    },

    /**
     * Returns a list of all key variables inside a domain cookie
     */
    listKeys: () => {
        var items = cookies.list();
        var keys = [];
        for (var i = 0; i < items.length; i++) {
            var parts = items[i].split("=");
            keys.push(parts.slice(0)[0]);
        }
        return keys;
    },

    /**
     * Checks to see if a variable value exists inside a domain cookie
     * @param {string} name - Name of the cookie variable
     */
    exists: name => {
        return document.cookie.indexOf(name) > -1;
    },

    /**
     * Gets a variable value via name from inside a domain cookie
     * @param {string} name - Name of the cookie variable
     */
    get: name => {
        var items = cookies.list();
        for (var i = 0; i < items.length; i++) {
            var parts = items[i].split("=");
            if (name === parts.slice(0)[0]) {
            return parts.slice(0)[1];
            }
        }
    },

    /**
     * Sets a key and value inside a domain cookie
     * @param {string} name - Name of the cookie variable
     * @param {string} value - Value of the cookie variable
     * @param {number} expires - Expiration in minutes (default 30)
     */
    set: (name, value, expires) => {
        var date = new Date();
        date.setTime(date.getTime() + (expires ? expires : 30) * 60 * 1000);
        document.cookie = `${name}=${value}; ${domainString()} expires=${date.toUTCString()}; SameSite=None; Secure`;
    },

    /**
     * Removes a variable value via name from inside a domain cookie
     * @param {string} name - Name of the cookie variable
     */
    remove: name => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; ${domainString()} SameSite=None; Secure`;
    }
};
    
export default cookies;
    