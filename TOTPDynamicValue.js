var TOTPDynamicValue = function() {

    // Input "number"
    this.totp_key = 5;

    // Evaluate function: takes no params, should return the computer value
    this.evaluate = function() {
        var f = function(x) {
            //relace below with your changes
            // if (x == 0) {
            //     return 1;
            // }
            // else {
            //     return x * f(x - 1);
            // }
        }

        return f(this.totp_key);
    }

    // Title function: takes no params, should return the string to display as
    // the Dynamic Value title
    this.title = function() {
        return "Generate TOTP"
    }

    // Text function: takes no params, should return the string to display as
    // the Dynamic Value text
    this.text = function() {
        return "" + this.totp_key + "!"
    }
}

// Extension Identifier (as a reverse domain name)
TOTPDynamicValue.identifier = "com.luckymarmot.PawExtensions.TOTPDynamicValue";

// Extension Name
TOTPDynamicValue.title = "TOTP Dynamic Value";

// Dynamic Value Inputs
TOTPDynamicValue.inputs = [
    DynamicValueInput("totp_key", "Input TOTP Key", "String"),
]

// Register this new Extension
registerDynamicValueClass(TOTPDynamicValue);
