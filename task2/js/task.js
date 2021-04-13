var app = new Vue({
    el: '#sew',
    data: {
        web: false,
        v_web: 300,
        dis: false,
        v_dis: 400,
        inte: false,
        v_inte: 250,
        tra: false,
        v_tra: 220,
        total: 0,
    },
    methods: {
        web_btn: function() {
            if (this.web) {
                this.total += this.v_web;
            } else if (this.total >= this.v_web && !this.web) {
                this.total -= this.v_web;
            }
        },
        dis_btn: function() {
            if (this.dis) {
                this.total += this.v_dis;
            } else if (this.total >= this.v_dis && !this.dis) {
                this.total -= this.v_dis;
            }
        },
        inte_btn: function() {
            if (this.inte) {
                this.total += this.v_inte;
            } else if (this.total >= this.v_inte && !this.inte) {
                this.total -= this.v_inte;
            }
        },
        tra_btn: function() {
            if (this.tra) {
                this.total += this.v_tra;
            } else if (this.total >= this.v_tra && !this.tra) {
                this.total -= this.v_tra;
            }
        }

    }
})