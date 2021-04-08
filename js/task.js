var app = new Vue({
    el: '#login',
    data: {
        name: null,
        errors: [],
        email: null,
        emailErrors: [],
        password: null,
        passErrors: [],
        cname: false,
        cemaile: false,
        cpass: false,
        has_minimum_lenth: false,
        has_number: false,
        has_lowercsae: false,
        has_uppercase: false,
        has_special: false,
    },
    methods: {
        checkForm: function() {
            this.errors = []; //the name errors arra
            this.emailErrors = []; // the email errors array
            this.passErrors = []; // the password erroers


            // first chick the name if it empty
            if (!this.name) {
                this.errors.push('Name required.');
                this.cname = false;
            } else { //the name is good
                this.cname = true;
            }


            // check the email if empty
            if (!this.email) {
                this.emailErrors.push('Email required.');
                this.cemaile = false;
            } //then check if the email valid by passine the emaile to the validEmail function
            else if (!this.validEmail(this.email)) {
                this.emailErrors.push('Valid email required.');
                this.cemaile = false;
            } else { //the emaile is good
                this.cemaile = true;
            }

            //check the pass if empty
            if (!this.password) {
                this.passErrors.push('password required.');
                this.cpass = false;
            } else {
                //check if the pass is more then 8 chars
                if (this.password.length < 8) {
                    this.passErrors.push('passwoed must be atlest 8 characters.');
                    this.cpass = false;
                } else { //if the pass have a good lenth
                    this.has_minimum_lenth = true;
                }
                if (!/\d/.test(this.password)) {
                    this.passErrors.push('passwoed must be have atlest one number.');
                    this.cpass = false;
                } else {
                    this.has_number = true;
                }
                if (!/[a-z]/.test(this.password)) {
                    this.passErrors.push('passwoed must have atlest one lowercsae characters.');
                    this.cpass = false;
                } else {
                    this.has_lowercase = true;
                }
                if (!/[A-Z]/.test(this.password)) {
                    this.passErrors.push('passwoed must have atlest one uppercase characters.');
                    this.cpass = false;
                } else {
                    this.has_uppercase = true;
                }
                if (!/[!@#\$%\^\&*\)\(+=._-]/.test(this.password)) {
                    this.passErrors.push('passwoed must have atlest one special characters.');
                    this.cpass = false;
                } else {
                    this.has_special = true;
                }
            }
            if (this.has_minimum_lenth && this.has_lowercase && this.has_uppercase && this.has_number && this.has_special) {
                this.cpass = true;
            }

            if (this.cname && this.cemaile && this.cpass) {

                alert("your are in wellcom");
            }
        },
        // valuide the emile Using regular expressions
        validEmail: function(email) {
            // the regular expressions
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // test the email
            return re.test(email);
        },
    }
})