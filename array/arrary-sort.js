let order = [{
        "GROUPBY": "CATEGORY_CODE",
        "ORDERBY": "1"
    },
    {
        "GROUPBY": "SUBCATEGORY_CODE",
        "ORDERBY": "2"
    },
    {
        "GROUPBY": "TYPE_CODE",
        "ORDERBY": "3"
    },
    {
        "GROUPBY": "DESIGN",
        "ORDERBY": "4"
    },
    {
        "GROUPBY": "COST_CODE",
        "ORDERBY": "5"
    },
    {
        "GROUPBY": "CUST_GENDER",
        "ORDERBY": "6"
    },
    {
        "GROUPBY": "CUST_NATIONALITY",
        "ORDERBY": "7"
    },
    {
        "GROUPBY": "CUST_TYPE",
        "ORDERBY": "8"
    },
    {
        "GROUPBY": "CUST_RELIGION",
        "ORDERBY": "9"
    }
];

let arrange = [{
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "GEN",
        "GROSSWT": "23.000",
        "NET_AMT": "1723.130",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "21",
        "GROSSWT": "-1.000",
        "NET_AMT": "-105.000",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "20",
        "GROSSWT": "13.000",
        "NET_AMT": "2397.270",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "19",
        "GROSSWT": "17.000",
        "NET_AMT": "2014.120",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "18",
        "GROSSWT": "24.000",
        "NET_AMT": "4965.350",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "17",
        "GROSSWT": "110.000",
        "NET_AMT": "13655.130",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "16",
        "GROSSWT": "32.000",
        "NET_AMT": "3682.240",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "15",
        "GROSSWT": "32.000",
        "NET_AMT": "1642.840",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CATEGORY_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "439.000",
        "NET_AMT": "410845.820",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "SUBCATEGORY_CODE",
        "GROUP_VALUE": "GEN",
        "GROSSWT": "1.000",
        "NET_AMT": "147.000",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "SUBCATEGORY_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "249.000",
        "NET_AMT": "29828.080",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "SUBCATEGORY_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "439.000",
        "NET_AMT": "410845.820",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "TYPE_CODE",
        "GROUP_VALUE": "48",
        "GROSSWT": "8.000",
        "NET_AMT": "199.960",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "TYPE_CODE",
        "GROUP_VALUE": "0",
        "GROSSWT": "1.000",
        "NET_AMT": "250.000",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "TYPE_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "241.000",
        "NET_AMT": "29525.120",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "TYPE_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "439.000",
        "NET_AMT": "410845.820",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "DESIGN",
        "GROUP_VALUE": "",
        "GROSSWT": "689.000",
        "NET_AMT": "440820.900",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "COST_CODE",
        "GROUP_VALUE": "CNSL",
        "GROSSWT": "250.000",
        "NET_AMT": "29975.080",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "COST_CODE",
        "GROUP_VALUE": "",
        "GROSSWT": "439.000",
        "NET_AMT": "410845.820",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_GENDER",
        "GROUP_VALUE": "Male",
        "GROSSWT": "743.000",
        "NET_AMT": "450650.420",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_GENDER",
        "GROUP_VALUE": "",
        "GROSSWT": "-54.000",
        "NET_AMT": "-9829.520",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_NATIONALITY",
        "GROUP_VALUE": "",
        "GROSSWT": "743.000",
        "NET_AMT": "450650.420",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_NATIONALITY",
        "GROUP_VALUE": "",
        "GROSSWT": "-54.000",
        "NET_AMT": "-9829.520",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_TYPE",
        "GROUP_VALUE": "",
        "GROSSWT": "743.000",
        "NET_AMT": "450650.420",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_TYPE",
        "GROUP_VALUE": "",
        "GROSSWT": "-54.000",
        "NET_AMT": "-9829.520",
        "GP": "0.000"
    },
    {
        "GROUP_NAME": "CUST_RELIGION",
        "GROUP_VALUE": "",
        "GROSSWT": "689.000",
        "NET_AMT": "440820.900",
        "GP": "0.000"
    }
];

order.forEach((element) => {
    arrange.forEach((el) => {
        if (element.GROUPBY == el.GROUP_NAME) {
            el["ORDER"] = element.ORDERBY;
        }
    });
});

console.log(arrange);
arrange.sort((a, b) => (a.ORDER > b.ORDER ? 1 : -1))
console.log(arrange);