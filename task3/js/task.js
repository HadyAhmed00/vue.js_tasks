var app = new Vue({
    el: '#sew',
    data: {

        q_list: ["What is the purpose of fasting?",
            "What is special about Ramadan? Why fast in this month?",
            "When should my children start fasting?",
            "How sick do you have to be to skip fasting?",
            "Should pregnant women fast?",
            "صايم ولا زي كل سنه؟"
        ],
        see: "chose your question",
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
        },
        showQ: function(q) {
            if (q == "What is the purpose of fasting?") {
                this.see = " Fasting is an exercise in self-control. Refraining from food, drink and intercourse are difficult because these are among the strongest three desires that humans have. By learning to go without these three human needs for a period of time, Muslims learn self-control so that they can apply this to other aspects of their life. For example, a person who went sixteen hours without water can more easily resist the temptation to drink alcohol or do some other forbidden act. This instills the quality of being conscious of God, which is ultimately the purpose of fasting.";
            } else if (q == "What is special about Ramadan? Why fast in this month?") {
                this.see = " Ramadan is the month in which the Qur’an was first revealed. Allah decided that this month should be singled out as being special in order to commemorate the Qur’an.";
            } else if (q == "When should my children start fasting?") {
                this.see = " The Prophet Muhammad taught that children should begin praying at the age of seven. This means that they should learn what prayer is and try to perform it at least sometimes. Then he clarified that they must pray regularly by the age of ten and should be disciplined for not doing so. That gives them three years to learn and understand what they are doing and get used to it. The same rule applies for fasting. Once children reach the age of seven, they should be taught how to fast and encouraged to do so, at least sometimes. By the age of ten, children should be encouraged by their parents to fast the entire month, or as much as they are able to.";
            } else if (q == "How sick do you have to be to skip fasting?") {
                this.see = " Someone suffering from an illness where fasting will probably either cause harm to their body, increase their illness, or delay their recovery is excused from fasting. The severity of their illness can be determined by consulting a medical professional. People with a minor cough or slight fever should still fast, because that will not usually cause much harm. Remember that fasting, even when healthy, causes some discomfort, so be careful when deciding whether you are too sick to fast or not.";
            } else if (q == "Should pregnant women fast?") {
                this.see = " There are many pregnant women who fast and it neither harms them nor their child. However, this depends on the health and stature of the woman, as well as the season and her lifestyle. Every case is different. It is best to consult a medical professional who is both well versed in pregnancy as well as nutrition to see if there is a real threat to either the mother or child due to fasting. If there is, the pregnant woman should not fast, and make up the days she missed later on.";
            } else if (q == "صايم ولا زي كل سنه؟") {
                this.see = " انت جاي تهزر بقي يلا يا عم كل سنه و انت طيب";
            }
        }

    }
})