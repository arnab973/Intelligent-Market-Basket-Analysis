const MBA_DATA = {
  "kpis": {
    "total_orders": 3421083,
    "unique_customers": 206209,
    "catalog_products": 49688,
    "departments": 21,
    "aisles": 134,
    "train_baskets": 131209,
    "train_line_items": 1384617,
    "reorder_rate": 0.5986,
    "avg_basket_size": 10.55,
    "mined_rules_count": 346,
    "frequent_itemsets_count": 950
  },
  "rules": [
    {
      "rule_str": "Orange Bell Pepper -> Yellow Bell Pepper",
      "antecedents": "Orange Bell Pepper",
      "consequents": "Yellow Bell Pepper",
      "support": 0.0034826964513433,
      "confidence": 0.2124463519313304,
      "lift": 20.717163333063404,
      "leverage": 0.0033145896311502,
      "conviction": 1.2567339332492764
    },
    {
      "rule_str": "Yellow Bell Pepper -> Orange Bell Pepper",
      "antecedents": "Yellow Bell Pepper",
      "consequents": "Orange Bell Pepper",
      "support": 0.0034826964513433,
      "confidence": 0.3396226415094339,
      "lift": 20.717163333063404,
      "leverage": 0.0033145896311502,
      "conviction": 1.489461576636283
    },
    {
      "rule_str": "Lime Sparkling Water -> Sparkling Water Grapefruit",
      "antecedents": "Lime Sparkling Water",
      "consequents": "Sparkling Water Grapefruit",
      "support": 0.0044413174442636,
      "confidence": 0.2568667344862665,
      "lift": 8.695156905257795,
      "leverage": 0.003930536846207,
      "conviction": 1.3059012266242114
    },
    {
      "rule_str": "Sparkling Water Grapefruit -> Lime Sparkling Water",
      "antecedents": "Sparkling Water Grapefruit",
      "consequents": "Lime Sparkling Water",
      "support": 0.0044413174442636,
      "confidence": 0.1503423637987496,
      "lift": 8.695156905257795,
      "leverage": 0.003930536846207,
      "conviction": 1.1565948465655125
    },
    {
      "rule_str": "Green Bell Pepper -> Red Peppers",
      "antecedents": "Green Bell Pepper",
      "consequents": "Red Peppers",
      "support": 0.0042478343080779,
      "confidence": 0.1915906386354621,
      "lift": 7.499075237881315,
      "leverage": 0.0036813865564111,
      "conviction": 1.2053935517157648
    },
    {
      "rule_str": "Red Peppers -> Green Bell Pepper",
      "antecedents": "Red Peppers",
      "consequents": "Green Bell Pepper",
      "support": 0.0042478343080779,
      "confidence": 0.1662650602409638,
      "lift": 7.499075237881315,
      "leverage": 0.0036813865564111,
      "conviction": 1.1728290909978234
    },
    {
      "rule_str": "Organic Ginger Root -> Organic Garlic",
      "antecedents": "Organic Ginger Root",
      "consequents": "Organic Garlic",
      "support": 0.0039048414757486,
      "confidence": 0.2212257100149476,
      "lift": 6.049655930074465,
      "leverage": 0.0032593764243666,
      "conviction": 1.2371128575384616
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Organic Garlic",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Organic Garlic",
      "support": 0.0043269865001539,
      "confidence": 0.205,
      "lift": 5.605946368446368,
      "leverage": 0.0035551299364684,
      "conviction": 1.2118637575608735
    },
    {
      "rule_str": "Bunched Cilantro -> Limes",
      "antecedents": "Bunched Cilantro",
      "consequents": "Limes",
      "support": 0.0049074359087111,
      "confidence": 0.290625,
      "lift": 5.477459908005968,
      "leverage": 0.0040115031239657,
      "conviction": 1.334895714178064
    },
    {
      "rule_str": "Large Lemon, Organic Avocado -> Limes",
      "antecedents": "Large Lemon, Organic Avocado",
      "consequents": "Limes",
      "support": 0.0034211336352842,
      "confidence": 0.2883617494440326,
      "lift": 5.43480403125041,
      "leverage": 0.0027916475276688,
      "conviction": 1.3306502938891576
    },
    {
      "rule_str": "Jalapeno Peppers -> Limes",
      "antecedents": "Jalapeno Peppers",
      "consequents": "Limes",
      "support": 0.0048106943406182,
      "confidence": 0.2880463401790415,
      "lift": 5.428859457990705,
      "leverage": 0.003924560820706,
      "conviction": 1.3300607900283852
    },
    {
      "rule_str": "Organic Garlic -> Organic Yellow Onion",
      "antecedents": "Organic Garlic",
      "consequents": "Organic Yellow Onion",
      "support": 0.0074754848071764,
      "confidence": 0.2044252044252044,
      "lift": 5.418220948523979,
      "leverage": 0.0060957911995887,
      "conviction": 1.2095290019193583
    },
    {
      "rule_str": "Organic Yellow Onion -> Organic Garlic",
      "antecedents": "Organic Yellow Onion",
      "consequents": "Organic Garlic",
      "support": 0.0074754848071764,
      "confidence": 0.1981351981351981,
      "lift": 5.418220948523979,
      "leverage": 0.0060957911995887,
      "conviction": 1.2014889355666387
    },
    {
      "rule_str": "Limes -> Organic Cilantro",
      "antecedents": "Limes",
      "consequents": "Organic Cilantro",
      "support": 0.008856250824502,
      "confidence": 0.1669152991878004,
      "lift": 5.382616022163599,
      "leverage": 0.0072109075958497,
      "conviction": 1.163134947908097
    },
    {
      "rule_str": "Organic Cilantro -> Limes",
      "antecedents": "Organic Cilantro",
      "consequents": "Limes",
      "support": 0.008856250824502,
      "confidence": 0.2855927396483267,
      "lift": 5.382616022163599,
      "leverage": 0.0072109075958497,
      "conviction": 1.3254927543414432
    },
    {
      "rule_str": "Limes, Organic Avocado -> Large Lemon",
      "antecedents": "Limes, Organic Avocado",
      "consequents": "Large Lemon",
      "support": 0.0034211336352842,
      "confidence": 0.3751205400192863,
      "lift": 5.243156853459491,
      "leverage": 0.0027686386344858,
      "conviction": 1.4858149011330488
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Lemon -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas, Organic Lemon",
      "consequents": "Organic Hass Avocado",
      "support": 0.0031045248669803,
      "confidence": 0.330834114339269,
      "lift": 5.158027282455311,
      "leverage": 0.0025026426556279,
      "conviction": 1.3985475954596254
    },
    {
      "rule_str": "Organic Hass Avocado, Organic Strawberries -> Organic Raspberries",
      "antecedents": "Organic Hass Avocado, Organic Strawberries",
      "consequents": "Organic Raspberries",
      "support": 0.0033507761312167,
      "confidence": 0.2475633528265107,
      "lift": 5.075584391117635,
      "leverage": 0.0026906006966242,
      "conviction": 1.2641923594211273
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Organic Cilantro",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Organic Cilantro",
      "support": 0.0032804186271492,
      "confidence": 0.1554166666666666,
      "lift": 5.01181284269238,
      "leverage": 0.0026258812910369,
      "conviction": 1.1472993745423543
    },
    {
      "rule_str": "Organic Cilantro -> Organic Red Onion",
      "antecedents": "Organic Cilantro",
      "consequents": "Organic Red Onion",
      "support": 0.0050217668528208,
      "confidence": 0.1619398752127056,
      "lift": 4.82277986146168,
      "leverage": 0.0039805070406222,
      "conviction": 1.153165330982726
    },
    {
      "rule_str": "Banana, Limes -> Large Lemon",
      "antecedents": "Banana, Limes",
      "consequents": "Large Lemon",
      "support": 0.0039751989798161,
      "confidence": 0.3395942900075131,
      "lift": 4.746597264327509,
      "leverage": 0.0031377150395435,
      "conviction": 1.4058861075896505
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Raspberries -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas, Organic Raspberries",
      "consequents": "Organic Hass Avocado",
      "support": 0.0046699793324831,
      "confidence": 0.298314606741573,
      "lift": 4.651016366317093,
      "leverage": 0.0036659021664032,
      "conviction": 1.333732110352985
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Cucumber -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas, Organic Cucumber",
      "consequents": "Organic Hass Avocado",
      "support": 0.0032188558110901,
      "confidence": 0.2886435331230284,
      "lift": 4.500234873680782,
      "leverage": 0.002503591852332,
      "conviction": 1.315599680232164
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Raspberries",
      "antecedents": "Bag of Organic Bananas, Organic Hass Avocado",
      "consequents": "Organic Raspberries",
      "support": 0.0046699793324831,
      "confidence": 0.2194214876033058,
      "lift": 4.498615262880254,
      "leverage": 0.0036318867062884,
      "conviction": 1.2186149697927608
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Strawberries -> Organic Raspberries",
      "antecedents": "Bag of Organic Bananas, Organic Strawberries",
      "consequents": "Organic Raspberries",
      "support": 0.0057077525174794,
      "confidence": 0.2111255692908262,
      "lift": 4.3285309874167694,
      "leverage": 0.004389117503875,
      "conviction": 1.2057998374342722
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Organic Yellow Onion",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Organic Yellow Onion",
      "support": 0.0033068026911745,
      "confidence": 0.1571249477643125,
      "lift": 4.1645436329932775,
      "leverage": 0.002512765461026,
      "conviction": 1.141652948312328
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Organic Yellow Onion",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Organic Yellow Onion",
      "support": 0.0032804186271492,
      "confidence": 0.1554166666666666,
      "lift": 4.11926621989122,
      "leverage": 0.0024840586804896,
      "conviction": 1.1393438047681657
    },
    {
      "rule_str": "Banana, Limes -> Organic Avocado",
      "antecedents": "Banana, Limes",
      "consequents": "Organic Avocado",
      "support": 0.0030957301789719,
      "confidence": 0.2644628099173553,
      "lift": 4.058677797496678,
      "leverage": 0.0023329866616418,
      "conviction": 1.270962460022461
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Organic Yellow Onion",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Organic Yellow Onion",
      "support": 0.0035266698913856,
      "confidence": 0.1528783835303088,
      "lift": 4.051989883289922,
      "leverage": 0.0026563148330155,
      "conviction": 1.1359299181314289
    },
    {
      "rule_str": "Raspberries -> Organic Blueberries",
      "antecedents": "Raspberries",
      "consequents": "Organic Blueberries",
      "support": 0.0050481509168462,
      "confidence": 0.1750533699298566,
      "lift": 4.008144065218356,
      "leverage": 0.0037886774960545,
      "conviction": 1.1592575137482026
    },
    {
      "rule_str": "Banana, Large Lemon -> Limes",
      "antecedents": "Banana, Large Lemon",
      "consequents": "Limes",
      "support": 0.0039751989798161,
      "confidence": 0.2094531974050046,
      "lift": 3.947600830587776,
      "leverage": 0.002968207860295,
      "conviction": 1.1978312278750576
    },
    {
      "rule_str": "Organic Hass Avocado, Organic Raspberries -> Organic Strawberries",
      "antecedents": "Organic Hass Avocado, Organic Raspberries",
      "consequents": "Organic Strawberries",
      "support": 0.0033507761312167,
      "confidence": 0.3738959764474975,
      "lift": 3.902500642735699,
      "leverage": 0.0024921533049901,
      "conviction": 1.4441540619810462
    },
    {
      "rule_str": "Organic Hass Avocado, Organic Raspberries -> Bag of Organic Bananas",
      "antecedents": "Organic Hass Avocado, Organic Raspberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0046699793324831,
      "confidence": 0.521099116781158,
      "lift": 3.8276211287856303,
      "leverage": 0.0034499057736446,
      "conviction": 1.803835114738239
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Raspberries -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas, Organic Raspberries",
      "consequents": "Organic Strawberries",
      "support": 0.0057077525174794,
      "confidence": 0.3646067415730336,
      "lift": 3.805545213012832,
      "leverage": 0.0042079010644045,
      "conviction": 1.423041017266243
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Organic Cucumber",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Organic Cucumber",
      "support": 0.0035530539554109,
      "confidence": 0.1540221120853984,
      "lift": 3.796463094444012,
      "leverage": 0.0026171686677044,
      "conviction": 1.1341077797932986
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Organic Cucumber",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Organic Cucumber",
      "support": 0.0032364451871069,
      "confidence": 0.1537818637693272,
      "lift": 3.7905412572927273,
      "leverage": 0.002382623801868,
      "conviction": 1.133785797230325
    },
    {
      "rule_str": "Large Lemon, Limes -> Organic Avocado",
      "antecedents": "Large Lemon, Limes",
      "consequents": "Organic Avocado",
      "support": 0.0034211336352842,
      "confidence": 0.2438871473354232,
      "lift": 3.742905667131097,
      "leverage": 0.0025071021475747,
      "conviction": 1.2363764922802547
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Cucumber",
      "antecedents": "Bag of Organic Bananas, Organic Hass Avocado",
      "consequents": "Organic Cucumber",
      "support": 0.0032188558110901,
      "confidence": 0.1512396694214876,
      "lift": 3.727879170078094,
      "leverage": 0.0023554008373006,
      "conviction": 1.130389898834113
    },
    {
      "rule_str": "Banana, Organic Baby Spinach -> Organic Avocado",
      "antecedents": "Banana, Organic Baby Spinach",
      "consequents": "Organic Avocado",
      "support": 0.0042566289960863,
      "confidence": 0.2419999999999999,
      "lift": 3.713943852071804,
      "leverage": 0.0031105080083628,
      "conviction": 1.2332983595586364
    },
    {
      "rule_str": "Large Lemon -> Limes",
      "antecedents": "Large Lemon",
      "consequents": "Limes",
      "support": 0.0140275273734664,
      "confidence": 0.1960663798401966,
      "lift": 3.695297152284032,
      "leverage": 0.0102314788297664,
      "conviction": 1.1778853670242502
    },
    {
      "rule_str": "Limes -> Large Lemon",
      "antecedents": "Limes",
      "consequents": "Large Lemon",
      "support": 0.0140275273734664,
      "confidence": 0.264379247472236,
      "lift": 3.695297152284032,
      "leverage": 0.0102314788297664,
      "conviction": 1.2621384182826938
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Strawberries -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas, Organic Strawberries",
      "consequents": "Organic Hass Avocado",
      "support": 0.0062442284859944,
      "confidence": 0.2309694209499024,
      "lift": 3.6010390798174488,
      "leverage": 0.0045102210654721,
      "conviction": 1.2169351464676417
    },
    {
      "rule_str": "Organic Raspberries, Organic Strawberries -> Organic Hass Avocado",
      "antecedents": "Organic Raspberries, Organic Strawberries",
      "consequents": "Organic Hass Avocado",
      "support": 0.0033507761312167,
      "confidence": 0.2281437125748503,
      "lift": 3.556983523697156,
      "leverage": 0.0024087486776473,
      "conviction": 1.2124800375421965
    },
    {
      "rule_str": "Organic Blackberries -> Organic Raspberries",
      "antecedents": "Organic Blackberries",
      "consequents": "Organic Raspberries",
      "support": 0.0043181918121454,
      "confidence": 0.1727048892015476,
      "lift": 3.540823913931117,
      "leverage": 0.0030986474583141,
      "conviction": 1.149800896788952
    },
    {
      "rule_str": "Raspberries -> Strawberries",
      "antecedents": "Raspberries",
      "consequents": "Strawberries",
      "support": 0.0057869047095554,
      "confidence": 0.2006709362610551,
      "lift": 3.5135954431110683,
      "leverage": 0.0041399010054432,
      "conviction": 1.179598414278493
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Cucumber -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas, Organic Cucumber",
      "consequents": "Organic Strawberries",
      "support": 0.0037289477155797,
      "confidence": 0.334384858044164,
      "lift": 3.490107424629307,
      "leverage": 0.0026605142085579,
      "conviction": 1.3584286351707076
    },
    {
      "rule_str": "Organic Lemon -> Organic Hass Avocado",
      "antecedents": "Organic Lemon",
      "consequents": "Organic Hass Avocado",
      "support": 0.0068686513345939,
      "confidence": 0.2228245363766048,
      "lift": 3.4740523664749565,
      "leverage": 0.0048915218586892,
      "conviction": 1.2041815319171305
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Baby Spinach -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas, Organic Baby Spinach",
      "consequents": "Organic Hass Avocado",
      "support": 0.0043709599401961,
      "confidence": 0.2222719141323792,
      "lift": 3.465436445416452,
      "leverage": 0.0031096585113451,
      "conviction": 1.203325889035363
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Blueberries -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas, Organic Blueberries",
      "consequents": "Organic Strawberries",
      "support": 0.0032892133151576,
      "confidence": 0.3289357959542656,
      "lift": 3.43323340177894,
      "leverage": 0.0023311621341766,
      "conviction": 1.3473981526429335
    },
    {
      "rule_str": "Banana, Large Lemon -> Organic Avocado",
      "antecedents": "Banana, Large Lemon",
      "consequents": "Organic Avocado",
      "support": 0.0041950661800272,
      "confidence": 0.2210379981464319,
      "lift": 3.3922426210338834,
      "leverage": 0.0029584016342735,
      "conviction": 1.2001100879387707
    },
    {
      "rule_str": "Organic Hass Avocado, Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Hass Avocado, Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0062442284859944,
      "confidence": 0.4613385315139701,
      "lift": 3.3886626437852696,
      "leverage": 0.0044015462415856,
      "conviction": 1.6037126844384788
    },
    {
      "rule_str": "Organic Hass Avocado, Organic Lemon -> Bag of Organic Bananas",
      "antecedents": "Organic Hass Avocado, Organic Lemon",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031045248669803,
      "confidence": 0.4519846350832266,
      "lift": 3.3199556157712067,
      "leverage": 0.0021694145142296,
      "conviction": 1.5763394330385194
    },
    {
      "rule_str": "Organic Red Onion -> Limes",
      "antecedents": "Organic Red Onion",
      "consequents": "Limes",
      "support": 0.0058044940855723,
      "confidence": 0.1728653745416448,
      "lift": 3.2580237713008,
      "leverage": 0.0040228944125733,
      "conviction": 1.1448458547123668
    },
    {
      "rule_str": "Organic Cucumber, Organic Hass Avocado -> Bag of Organic Bananas",
      "antecedents": "Organic Cucumber, Organic Hass Avocado",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0032188558110901,
      "confidence": 0.4404332129963899,
      "lift": 3.2351071371934434,
      "leverage": 0.002223879238573,
      "conviction": 1.5437982555310787
    },
    {
      "rule_str": "Garlic -> Large Lemon",
      "antecedents": "Garlic",
      "consequents": "Large Lemon",
      "support": 0.0038960467877402,
      "confidence": 0.2307291666666666,
      "lift": 3.224961265621799,
      "leverage": 0.0026879557544393,
      "conviction": 1.206928916085666
    },
    {
      "rule_str": "Organic Raspberries -> Organic Strawberries",
      "antecedents": "Organic Raspberries",
      "consequents": "Organic Strawberries",
      "support": 0.0146871289740996,
      "confidence": 0.3011179228272629,
      "lift": 3.1428872237079064,
      "leverage": 0.0100139963006427,
      "conviction": 1.2937671437989122
    },
    {
      "rule_str": "Organic Strawberries -> Organic Raspberries",
      "antecedents": "Organic Strawberries",
      "consequents": "Organic Raspberries",
      "support": 0.0146871289740996,
      "confidence": 0.1532953919588764,
      "lift": 3.1428872237079064,
      "leverage": 0.0100139963006427,
      "conviction": 1.1234433488036193
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Organic Raspberries",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Organic Raspberries",
      "support": 0.0038168945956642,
      "confidence": 0.1501210653753026,
      "lift": 3.077806660385646,
      "leverage": 0.002576759974867,
      "conviction": 1.119247249874751
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas, Organic Hass Avocado",
      "consequents": "Organic Strawberries",
      "support": 0.0062442284859944,
      "confidence": 0.2933884297520661,
      "lift": 3.062211437943701,
      "leverage": 0.0042051046003533,
      "conviction": 1.279614864668524
    },
    {
      "rule_str": "Organic Cucumber, Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Cucumber, Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0037289477155797,
      "confidence": 0.4108527131782946,
      "lift": 3.017829958135529,
      "leverage": 0.0024933089396019,
      "conviction": 1.4662856792392134
    },
    {
      "rule_str": "Organic Tomato Cluster -> Organic Hass Avocado",
      "antecedents": "Organic Tomato Cluster",
      "consequents": "Organic Hass Avocado",
      "support": 0.0043181918121454,
      "confidence": 0.1934594168636721,
      "lift": 3.016221444465083,
      "leverage": 0.0028865357180381,
      "conviction": 1.160338809877642
    },
    {
      "rule_str": "Banana, Organic Avocado -> Large Lemon",
      "antecedents": "Banana, Organic Avocado",
      "consequents": "Large Lemon",
      "support": 0.0041950661800272,
      "confidence": 0.2152527075812274,
      "lift": 3.0086427923200327,
      "leverage": 0.0028007277790925,
      "conviction": 1.1831263669475092
    },
    {
      "rule_str": "Blueberries -> Strawberries",
      "antecedents": "Blueberries",
      "consequents": "Strawberries",
      "support": 0.0035002858273602,
      "confidence": 0.1713301764959104,
      "lift": 2.999861059203495,
      "leverage": 0.0023334698454595,
      "conviction": 1.13783230585869
    },
    {
      "rule_str": "Banana, Organic Avocado -> Limes",
      "antecedents": "Banana, Organic Avocado",
      "consequents": "Limes",
      "support": 0.0030957301789719,
      "confidence": 0.1588447653429602,
      "lift": 2.993774911871589,
      "leverage": 0.0020616744232449,
      "conviction": 1.1257632458664495
    },
    {
      "rule_str": "Bunched Cilantro -> Large Lemon",
      "antecedents": "Bunched Cilantro",
      "consequents": "Large Lemon",
      "support": 0.00361461677147,
      "confidence": 0.2140625,
      "lift": 2.9920069529809465,
      "leverage": 0.0024065257381691,
      "conviction": 1.1813346647173817
    },
    {
      "rule_str": "Organic Garlic -> Limes",
      "antecedents": "Organic Garlic",
      "consequents": "Limes",
      "support": 0.0057517259575216,
      "confidence": 0.1572871572871572,
      "lift": 2.964418402011639,
      "leverage": 0.0038114715205573,
      "conviction": 1.1236824683918312
    },
    {
      "rule_str": "Organic Navel Orange -> Organic Hass Avocado",
      "antecedents": "Organic Navel Orange",
      "consequents": "Organic Hass Avocado",
      "support": 0.0032628292511323,
      "confidence": 0.1873737373737373,
      "lift": 2.9213397515536554,
      "leverage": 0.0021459344259422,
      "conviction": 1.1516491447493868
    },
    {
      "rule_str": "Organic Baby Spinach, Organic Hass Avocado -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Spinach, Organic Hass Avocado",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0043709599401961,
      "confidence": 0.3969648562300319,
      "lift": 2.9158197013976603,
      "leverage": 0.0028719097972462,
      "conviction": 1.4325172231733625
    },
    {
      "rule_str": "Organic D'Anjou Pears -> Organic Hass Avocado",
      "antecedents": "Organic D'Anjou Pears",
      "consequents": "Organic Hass Avocado",
      "support": 0.0030957301789719,
      "confidence": 0.1859482303222398,
      "lift": 2.899114702974123,
      "leverage": 0.0020279110354947,
      "conviction": 1.1496324622264298
    },
    {
      "rule_str": "Organic Kiwi -> Organic Hass Avocado",
      "antecedents": "Organic Kiwi",
      "consequents": "Organic Hass Avocado",
      "support": 0.0030605514269381,
      "confidence": 0.1851063829787234,
      "lift": 2.885989479856814,
      "leverage": 0.0020000654313031,
      "conviction": 1.1484448040902877
    },
    {
      "rule_str": "Organic Kiwi -> Organic Strawberries",
      "antecedents": "Organic Kiwi",
      "consequents": "Organic Strawberries",
      "support": 0.0045468537003649,
      "confidence": 0.275,
      "lift": 2.870284101340188,
      "leverage": 0.0029627409297016,
      "conviction": 1.2471595432221008
    },
    {
      "rule_str": "Organic Raspberries -> Organic Hass Avocado",
      "antecedents": "Organic Raspberries",
      "consequents": "Organic Hass Avocado",
      "support": 0.0089617870806033,
      "confidence": 0.1837360259646592,
      "lift": 2.864624274278292,
      "leverage": 0.00583335339348,
      "conviction": 1.146516776586182
    },
    {
      "rule_str": "Organic Raspberries, Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Raspberries, Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0057077525174794,
      "confidence": 0.3886227544910179,
      "lift": 2.854544592984573,
      "leverage": 0.0037082207772827,
      "conviction": 1.41297085551512
    },
    {
      "rule_str": "Jalapeno Peppers -> Large Lemon",
      "antecedents": "Jalapeno Peppers",
      "consequents": "Large Lemon",
      "support": 0.0033947495712589,
      "confidence": 0.2032648762506582,
      "lift": 2.84108577186,
      "leverage": 0.0021998720336348,
      "conviction": 1.1653248179672513
    },
    {
      "rule_str": "Organic Cucumber -> Organic Hass Avocado",
      "antecedents": "Organic Cucumber",
      "consequents": "Organic Hass Avocado",
      "support": 0.007308385735016,
      "confidence": 0.1801430739215261,
      "lift": 2.8086066392769955,
      "leverage": 0.0047062464276414,
      "conviction": 1.141492266011361
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Organic Hass Avocado",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Organic Hass Avocado",
      "support": 0.003772921155622,
      "confidence": 0.1792728792310906,
      "lift": 2.795039453307441,
      "leverage": 0.0024230578643695,
      "conviction": 1.1402819727434528
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Organic Baby Spinach",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Organic Baby Spinach",
      "support": 0.0054263225012092,
      "confidence": 0.2402647975077881,
      "lift": 2.792243336122552,
      "leverage": 0.0034829666227977,
      "conviction": 1.2029885801359372
    },
    {
      "rule_str": "Apple Honeycrisp Organic -> Organic Hass Avocado",
      "antecedents": "Apple Honeycrisp Organic",
      "consequents": "Organic Hass Avocado",
      "support": 0.0035266698913856,
      "confidence": 0.1780639431616341,
      "lift": 2.776190958068505,
      "leverage": 0.0022563430498057,
      "conviction": 1.1386048009066272
    },
    {
      "rule_str": "Yellow Onions -> Large Lemon",
      "antecedents": "Yellow Onions",
      "consequents": "Large Lemon",
      "support": 0.0065696319423068,
      "confidence": 0.1985645933014354,
      "lift": 2.775388700840776,
      "leverage": 0.004202528573933,
      "conviction": 1.158490385240151
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Organic Avocado",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Organic Avocado",
      "support": 0.0060155665977749,
      "confidence": 0.178917080826576,
      "lift": 2.7458181502747774,
      "leverage": 0.0038247563297413,
      "conviction": 1.1385453706509212
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Baby Spinach -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas, Organic Baby Spinach",
      "consequents": "Organic Strawberries",
      "support": 0.0051624818609559,
      "confidence": 0.2625223613595707,
      "lift": 2.74005003656967,
      "leverage": 0.0032783987996776,
      "conviction": 1.226058420568434
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Large Lemon",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Large Lemon",
      "support": 0.0041159139879512,
      "confidence": 0.195,
      "lift": 2.725565457897972,
      "leverage": 0.0026058001963252,
      "conviction": 1.1533605131072262
    },
    {
      "rule_str": "Organic Ginger Root -> Organic Baby Spinach",
      "antecedents": "Organic Ginger Root",
      "consequents": "Organic Baby Spinach",
      "support": 0.0041335033639681,
      "confidence": 0.2341803687095166,
      "lift": 2.721532995105845,
      "leverage": 0.0026146890150694,
      "conviction": 1.1934308487042726
    },
    {
      "rule_str": "Organic Whole String Cheese -> Organic Strawberries",
      "antecedents": "Organic Whole String Cheese",
      "consequents": "Organic Strawberries",
      "support": 0.004529264324348,
      "confidence": 0.2584044154540892,
      "lift": 2.697069401432644,
      "leverage": 0.0028499362648097,
      "conviction": 1.2192503403181283
    },
    {
      "rule_str": "Organic Navel Orange -> Bag of Organic Bananas",
      "antecedents": "Organic Navel Orange",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0063761488061211,
      "confidence": 0.3661616161616161,
      "lift": 2.6895611476522325,
      "leverage": 0.0040054465033729,
      "conviction": 1.3628998363872682
    },
    {
      "rule_str": "Banana, Organic Strawberries -> Organic Avocado",
      "antecedents": "Banana, Organic Strawberries",
      "consequents": "Organic Avocado",
      "support": 0.0033331867551998,
      "confidence": 0.1743330266789328,
      "lift": 2.6754672423441845,
      "leverage": 0.0020873532415443,
      "conviction": 1.13222423416702
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Organic Hass Avocado",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Organic Hass Avocado",
      "support": 0.0043621652521876,
      "confidence": 0.1715669318574887,
      "lift": 2.67489620003507,
      "leverage": 0.002731385989751,
      "conviction": 1.129675258440353
    },
    {
      "rule_str": "Organic Blueberries -> Organic Strawberries",
      "antecedents": "Organic Blueberries",
      "consequents": "Organic Strawberries",
      "support": 0.011160459082714,
      "confidence": 0.2555376560612163,
      "lift": 2.6671478963136224,
      "leverage": 0.0069760420512703,
      "conviction": 1.2145552776412472
    },
    {
      "rule_str": "Organic Yellow Onion -> Organic Hass Avocado",
      "antecedents": "Organic Yellow Onion",
      "consequents": "Organic Hass Avocado",
      "support": 0.0064289169341717,
      "confidence": 0.1703962703962704,
      "lift": 2.6566444433577305,
      "leverage": 0.0040089781462599,
      "conviction": 1.1280811632819576
    },
    {
      "rule_str": "Limes -> Organic Avocado",
      "antecedents": "Limes",
      "consequents": "Organic Avocado",
      "support": 0.0091200914647552,
      "confidence": 0.1718879496104757,
      "lift": 2.637942949177911,
      "leverage": 0.0056628175052871,
      "conviction": 1.1288812378780382
    },
    {
      "rule_str": "Organic D'Anjou Pears -> Organic Strawberries",
      "antecedents": "Organic D'Anjou Pears",
      "consequents": "Organic Strawberries",
      "support": 0.0042038608680357,
      "confidence": 0.2525092445853143,
      "lift": 2.635539164271449,
      "leverage": 0.0026087941260858,
      "conviction": 1.2096345838209128
    },
    {
      "rule_str": "Organic Baby Spinach, Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Spinach, Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0051624818609559,
      "confidence": 0.3581452104942038,
      "lift": 2.630678369460171,
      "leverage": 0.0032000671770144,
      "conviction": 1.3458779832342482
    },
    {
      "rule_str": "Organic Garlic -> Large Lemon",
      "antecedents": "Organic Garlic",
      "consequents": "Large Lemon",
      "support": 0.0068598566465854,
      "confidence": 0.1875901875901875,
      "lift": 2.6219965924944413,
      "leverage": 0.0042435845025933,
      "conviction": 1.142840963844694
    },
    {
      "rule_str": "Banana, Organic Baby Spinach -> Large Lemon",
      "antecedents": "Banana, Organic Baby Spinach",
      "consequents": "Large Lemon",
      "support": 0.0032628292511323,
      "confidence": 0.1854999999999999,
      "lift": 2.592781499692685,
      "leverage": 0.0020044010914439,
      "conviction": 1.1399081805418256
    },
    {
      "rule_str": "Boneless Skinless Chicken Breasts -> Organic Avocado",
      "antecedents": "Boneless Skinless Chicken Breasts",
      "consequents": "Organic Avocado",
      "support": 0.0030869354909634,
      "confidence": 0.168103448275862,
      "lift": 2.579862678662019,
      "leverage": 0.00189038517978,
      "conviction": 1.1237456804069617
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Organic Baby Spinach",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Organic Baby Spinach",
      "support": 0.0074578954311595,
      "confidence": 0.2218153282762228,
      "lift": 2.577832369342592,
      "leverage": 0.0045648076106115,
      "conviction": 1.174467714072129
    },
    {
      "rule_str": "Red Vine Tomato -> Organic Avocado",
      "antecedents": "Red Vine Tomato",
      "consequents": "Organic Avocado",
      "support": 0.0032892133151576,
      "confidence": 0.1674127126230976,
      "lift": 2.569262044649657,
      "leverage": 0.0020089961718704,
      "conviction": 1.1228133923239394
    },
    {
      "rule_str": "Cucumber Kirby -> Organic Avocado",
      "antecedents": "Cucumber Kirby",
      "consequents": "Organic Avocado",
      "support": 0.0035442592674024,
      "confidence": 0.1670120182345627,
      "lift": 2.5631126377866056,
      "leverage": 0.002161464295714,
      "conviction": 1.1222732824597823
    },
    {
      "rule_str": "Organic Kiwi -> Bag of Organic Bananas",
      "antecedents": "Organic Kiwi",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0057517259575216,
      "confidence": 0.3478723404255319,
      "lift": 2.5552212188685464,
      "leverage": 0.0035007560943062,
      "conviction": 1.3246765674576602
    },
    {
      "rule_str": "Michigan Organic Kale -> Large Lemon",
      "antecedents": "Michigan Organic Kale",
      "consequents": "Large Lemon",
      "support": 0.0042214502440525,
      "confidence": 0.1827179291968024,
      "lift": 2.553895776192061,
      "leverage": 0.0025685048563019,
      "conviction": 1.1360278736310243
    },
    {
      "rule_str": "Large Lemon -> Organic Avocado",
      "antecedents": "Large Lemon",
      "consequents": "Organic Avocado",
      "support": 0.0118640341233894,
      "confidence": 0.1658266748617086,
      "lift": 2.544921320711376,
      "leverage": 0.0072021870058239,
      "conviction": 1.120678554892014
    },
    {
      "rule_str": "Organic Avocado -> Large Lemon",
      "antecedents": "Organic Avocado",
      "consequents": "Large Lemon",
      "support": 0.0118640341233894,
      "confidence": 0.1820758536914563,
      "lift": 2.544921320711376,
      "leverage": 0.0072021870058239,
      "conviction": 1.135136084735513
    },
    {
      "rule_str": "Banana, Organic Avocado -> Organic Baby Spinach",
      "antecedents": "Banana, Organic Avocado",
      "consequents": "Organic Baby Spinach",
      "support": 0.0042566289960863,
      "confidence": 0.2184115523465704,
      "lift": 2.5382753024904727,
      "leverage": 0.0025796521165847,
      "conviction": 1.169352969928565
    },
    {
      "rule_str": "Asparagus -> Large Lemon",
      "antecedents": "Asparagus",
      "consequents": "Large Lemon",
      "support": 0.0061738709819269,
      "confidence": 0.1814891416752844,
      "lift": 2.5367206950446484,
      "leverage": 0.0037400709210896,
      "conviction": 1.1343224144290889
    },
    {
      "rule_str": "Broccoli Crown -> Large Lemon",
      "antecedents": "Broccoli Crown",
      "consequents": "Large Lemon",
      "support": 0.0046260058924409,
      "confidence": 0.1793997271487039,
      "lift": 2.507516407552967,
      "leverage": 0.0027811502103378,
      "conviction": 1.1314341997782469
    },
    {
      "rule_str": "Broccoli Crown -> Organic Avocado",
      "antecedents": "Broccoli Crown",
      "consequents": "Organic Avocado",
      "support": 0.0041774768040103,
      "confidence": 0.1620054570259208,
      "lift": 2.4862775666260406,
      "leverage": 0.0024972634360076,
      "conviction": 1.115568310537749
    },
    {
      "rule_str": "Red Peppers -> Organic Avocado",
      "antecedents": "Red Peppers",
      "consequents": "Organic Avocado",
      "support": 0.0041335033639681,
      "confidence": 0.1617900172117039,
      "lift": 2.4829712386363614,
      "leverage": 0.0024687626292996,
      "conviction": 1.115281583065512
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Organic Hass Avocado",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Organic Hass Avocado",
      "support": 0.0036673848995206,
      "confidence": 0.1589782691574533,
      "lift": 2.478626641237931,
      "leverage": 0.0021877813002916,
      "conviction": 1.112765944129492
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Bag of Organic Bananas",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0085572314322149,
      "confidence": 0.3365617433414044,
      "lift": 2.472141668387234,
      "leverage": 0.0050957666053235,
      "conviction": 1.3020928789667974
    },
    {
      "rule_str": "Organic Lacinato (Dinosaur) Kale -> Organic Baby Spinach",
      "antecedents": "Organic Lacinato (Dinosaur) Kale",
      "consequents": "Organic Baby Spinach",
      "support": 0.0032892133151576,
      "confidence": 0.2123793299261783,
      "lift": 2.4681716791962494,
      "leverage": 0.001956561562088,
      "conviction": 1.1603971394500503
    },
    {
      "rule_str": "Organic Garlic -> Organic Hass Avocado",
      "antecedents": "Organic Garlic",
      "consequents": "Organic Hass Avocado",
      "support": 0.0057781100215469,
      "confidence": 0.158008658008658,
      "lift": 2.463509455488065,
      "leverage": 0.0034326308886478,
      "conviction": 1.1114845173361048
    },
    {
      "rule_str": "Cucumber Kirby -> Large Lemon",
      "antecedents": "Cucumber Kirby",
      "consequents": "Large Lemon",
      "support": 0.0037289477155797,
      "confidence": 0.1757148777455449,
      "lift": 2.4560123139590893,
      "leverage": 0.0022106541409157,
      "conviction": 1.1263762841090137
    },
    {
      "rule_str": "Organic Banana -> Organic Hass Avocado",
      "antecedents": "Organic Banana",
      "consequents": "Organic Hass Avocado",
      "support": 0.0032100611230816,
      "confidence": 0.1565180102915952,
      "lift": 2.440268800247612,
      "leverage": 0.0018946072178578,
      "conviction": 1.1095202408269045
    },
    {
      "rule_str": "Organic Hass Avocado -> Bag of Organic Bananas",
      "antecedents": "Organic Hass Avocado",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0212831449804318,
      "confidence": 0.3318250377073907,
      "lift": 2.437349219154965,
      "leverage": 0.0125510581653094,
      "conviction": 1.292862316578394
    },
    {
      "rule_str": "Bag of Organic Bananas -> Organic Hass Avocado",
      "antecedents": "Bag of Organic Bananas",
      "consequents": "Organic Hass Avocado",
      "support": 0.0212831449804318,
      "confidence": 0.1563307493540051,
      "lift": 2.4373492191549646,
      "leverage": 0.0125510581653094,
      "conviction": 1.1092739715686455
    },
    {
      "rule_str": "Organic Red Onion -> Large Lemon",
      "antecedents": "Organic Red Onion",
      "consequents": "Large Lemon",
      "support": 0.0058484675256145,
      "confidence": 0.1741749607124149,
      "lift": 2.434488495120484,
      "leverage": 0.0034461281687694,
      "conviction": 1.1242759287757464
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Organic Strawberries",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Organic Strawberries",
      "support": 0.0049074359087111,
      "confidence": 0.2331801086502298,
      "lift": 2.43379330402739,
      "leverage": 0.0028910625788189,
      "conviction": 1.1791434716755331
    },
    {
      "rule_str": "Honeycrisp Apple -> Organic Avocado",
      "antecedents": "Honeycrisp Apple",
      "consequents": "Organic Avocado",
      "support": 0.0049514093487533,
      "confidence": 0.1585468882005069,
      "lift": 2.433199341724745,
      "leverage": 0.0029164715350501,
      "conviction": 1.1109830642211782
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Organic Hass Avocado",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Organic Hass Avocado",
      "support": 0.0035178752033771,
      "confidence": 0.1557632398753894,
      "lift": 2.4285011915578165,
      "leverage": 0.0020692964604033,
      "conviction": 1.108528299829412
    },
    {
      "rule_str": "Organic Broccoli -> Organic Baby Spinach",
      "antecedents": "Organic Broccoli",
      "consequents": "Organic Baby Spinach",
      "support": 0.0030341673629128,
      "confidence": 0.2087114337568058,
      "lift": 2.425545132391415,
      "leverage": 0.0017832455299633,
      "conviction": 1.1550182973887442
    },
    {
      "rule_str": "Organic Unsweetened Almond Milk -> Organic Baby Spinach",
      "antecedents": "Organic Unsweetened Almond Milk",
      "consequents": "Organic Baby Spinach",
      "support": 0.0039751989798161,
      "confidence": 0.2077205882352941,
      "lift": 2.414029996452792,
      "leverage": 0.0023284924410998,
      "conviction": 1.1535738010529344
    },
    {
      "rule_str": "Michigan Organic Kale -> Organic Avocado",
      "antecedents": "Michigan Organic Kale",
      "consequents": "Organic Avocado",
      "support": 0.0036322061474869,
      "confidence": 0.1572135515797487,
      "lift": 2.4127367907106674,
      "leverage": 0.002126776230112,
      "conviction": 1.1092254251331926
    },
    {
      "rule_str": "Organic Zucchini -> Organic Baby Spinach",
      "antecedents": "Organic Zucchini",
      "consequents": "Organic Baby Spinach",
      "support": 0.0083549536080207,
      "confidence": 0.2070167792547396,
      "lift": 2.4058506628332137,
      "leverage": 0.0048821887614356,
      "conviction": 1.1525499513929751
    },
    {
      "rule_str": "Organic Broccoli -> Organic Strawberries",
      "antecedents": "Organic Broccoli",
      "consequents": "Organic Strawberries",
      "support": 0.0033507761312167,
      "confidence": 0.2304900181488203,
      "lift": 2.405715762218801,
      "leverage": 0.0019579365514792,
      "conviction": 1.17502136445436
    },
    {
      "rule_str": "Organic Baby Arugula -> Large Lemon",
      "antecedents": "Organic Baby Arugula",
      "consequents": "Large Lemon",
      "support": 0.0043973440042214,
      "confidence": 0.1710571330824495,
      "lift": 2.3909098115722096,
      "leverage": 0.0025581512488368,
      "conviction": 1.12004729168345
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Organic Avocado",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Organic Avocado",
      "support": 0.0035178752033771,
      "confidence": 0.1557632398753894,
      "lift": 2.390479037661109,
      "leverage": 0.0020462558551401,
      "conviction": 1.1073198902254182
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Baby Spinach",
      "antecedents": "Bag of Organic Bananas, Organic Hass Avocado",
      "consequents": "Organic Baby Spinach",
      "support": 0.0043709599401961,
      "confidence": 0.2053719008264462,
      "lift": 2.3867346671577137,
      "leverage": 0.0025396043226898,
      "conviction": 1.1501641755129772
    },
    {
      "rule_str": "Organic Granny Smith Apple -> Organic Hass Avocado",
      "antecedents": "Organic Granny Smith Apple",
      "consequents": "Organic Hass Avocado",
      "support": 0.0031221142429972,
      "confidence": 0.1519041506204535,
      "lift": 2.368334217235524,
      "leverage": 0.0018038398962956,
      "conviction": 1.1034841651908645
    },
    {
      "rule_str": "Organic Raspberries -> Bag of Organic Bananas",
      "antecedents": "Organic Raspberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0156545446550283,
      "confidence": 0.3209520375045078,
      "lift": 2.3574839421479363,
      "leverage": 0.0090141835585428,
      "conviction": 1.2721608448019437
    },
    {
      "rule_str": "Michigan Organic Kale -> Organic Baby Spinach",
      "antecedents": "Michigan Organic Kale",
      "consequents": "Organic Baby Spinach",
      "support": 0.0046787740204916,
      "confidence": 0.202512371526456,
      "lift": 2.3535025760850043,
      "leverage": 0.0026907693894218,
      "conviction": 1.1460400636869743
    },
    {
      "rule_str": "Organic Cucumber -> Organic Baby Spinach",
      "antecedents": "Organic Cucumber",
      "consequents": "Organic Baby Spinach",
      "support": 0.0082054439118772,
      "confidence": 0.2022544981573813,
      "lift": 2.350505694295282,
      "leverage": 0.0047145168608209,
      "conviction": 1.145669603168382
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Organic Strawberries",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Organic Strawberries",
      "support": 0.0057165472054878,
      "confidence": 0.2248356969906606,
      "lift": 2.3466993690401203,
      "leverage": 0.003280552514005,
      "conviction": 1.16645034520524
    },
    {
      "rule_str": "Bartlett Pears -> Banana",
      "antecedents": "Bartlett Pears",
      "consequents": "Banana",
      "support": 0.0040983246119343,
      "confidence": 0.3860811930405965,
      "lift": 2.344300013600397,
      "leverage": 0.0023501163671883,
      "conviction": 1.3606207578018288
    },
    {
      "rule_str": "Organic D'Anjou Pears -> Bag of Organic Bananas",
      "antecedents": "Organic D'Anjou Pears",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0053119915570995,
      "confidence": 0.3190702588483888,
      "lift": 2.343661743046256,
      "leverage": 0.0030454564767448,
      "conviction": 1.2686451735362858
    },
    {
      "rule_str": "Organic Blackberries -> Organic Strawberries",
      "antecedents": "Organic Blackberries",
      "consequents": "Organic Strawberries",
      "support": 0.0056022162613781,
      "confidence": 0.2240590925079141,
      "lift": 2.338593639949732,
      "leverage": 0.0032066670023377,
      "conviction": 1.165282897325845
    },
    {
      "rule_str": "Organic Whole Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Whole Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0033947495712589,
      "confidence": 0.3182192910140148,
      "lift": 2.337411142425617,
      "leverage": 0.0019423950797268,
      "conviction": 1.2670617080294384
    },
    {
      "rule_str": "Organic Cucumber -> Organic Strawberries",
      "antecedents": "Organic Cucumber",
      "consequents": "Organic Strawberries",
      "support": 0.009076118024713,
      "confidence": 0.2237155863862996,
      "lift": 2.33500833027852,
      "leverage": 0.0051891434443566,
      "conviction": 1.164767259240596
    },
    {
      "rule_str": "Organic Broccoli -> Bag of Organic Bananas",
      "antecedents": "Organic Broccoli",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0046172112044325,
      "confidence": 0.3176043557168784,
      "lift": 2.33289426788034,
      "leverage": 0.0026380339789564,
      "conviction": 1.265919905653581
    },
    {
      "rule_str": "Gala Apples -> Banana",
      "antecedents": "Gala Apples",
      "consequents": "Banana",
      "support": 0.0032364451871069,
      "confidence": 0.383733055265902,
      "lift": 2.330042029745241,
      "leverage": 0.0018474379735929,
      "conviction": 1.3554364378805217
    },
    {
      "rule_str": "Organic Garlic -> Organic Baby Spinach",
      "antecedents": "Organic Garlic",
      "consequents": "Organic Baby Spinach",
      "support": 0.00722923354294,
      "confidence": 0.1976911976911977,
      "lift": 2.2974731841248603,
      "leverage": 0.0040826316183157,
      "conviction": 1.1391533657555728
    },
    {
      "rule_str": "Organic Fuji Apple -> Banana",
      "antecedents": "Organic Fuji Apple",
      "consequents": "Banana",
      "support": 0.0106415724902159,
      "confidence": 0.3715075222597482,
      "lift": 2.255808118046816,
      "leverage": 0.0059241621727861,
      "conviction": 1.3290702783862465
    },
    {
      "rule_str": "Organic Red Onion -> Organic Baby Spinach",
      "antecedents": "Organic Red Onion",
      "consequents": "Organic Baby Spinach",
      "support": 0.0065168638142561,
      "confidence": 0.1940806705081194,
      "lift": 2.2555133524249507,
      "leverage": 0.0036275597863062,
      "conviction": 1.1340499465394724
    },
    {
      "rule_str": "Organic Baby Arugula -> Organic Baby Spinach",
      "antecedents": "Organic Baby Arugula",
      "consequents": "Organic Baby Spinach",
      "support": 0.0049865881007871,
      "confidence": 0.1939787889154977,
      "lift": 2.254329332955506,
      "leverage": 0.0027745829479066,
      "conviction": 1.1339066019065065
    },
    {
      "rule_str": "Organic Granny Smith Apple -> Organic Strawberries",
      "antecedents": "Organic Granny Smith Apple",
      "consequents": "Organic Strawberries",
      "support": 0.0044237280682467,
      "confidence": 0.2152332049636285,
      "lift": 2.2464743501367166,
      "leverage": 0.002454541076204,
      "conviction": 1.1521775316629148
    },
    {
      "rule_str": "Organic Zucchini -> Large Lemon",
      "antecedents": "Organic Zucchini",
      "consequents": "Large Lemon",
      "support": 0.0064728903742139,
      "confidence": 0.1603835258226193,
      "lift": 2.24172204101548,
      "leverage": 0.003585426961809,
      "conviction": 1.105808713390214
    },
    {
      "rule_str": "Apple Honeycrisp Organic -> Bag of Organic Bananas",
      "antecedents": "Apple Honeycrisp Organic",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0060419506618002,
      "confidence": 0.3050621669626998,
      "lift": 2.2407683265176863,
      "leverage": 0.003345576123523,
      "conviction": 1.2430726729234456
    },
    {
      "rule_str": "Apple Honeycrisp Organic -> Organic Strawberries",
      "antecedents": "Apple Honeycrisp Organic",
      "consequents": "Organic Strawberries",
      "support": 0.0042478343080779,
      "confidence": 0.2144760213143872,
      "lift": 2.23857132399049,
      "leverage": 0.0023502694359854,
      "conviction": 1.1510669226787589
    },
    {
      "rule_str": "Organic Lemon -> Bag of Organic Bananas",
      "antecedents": "Organic Lemon",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0093839321050085,
      "confidence": 0.3044222539229672,
      "lift": 2.2360679833534225,
      "leverage": 0.0051873100993862,
      "conviction": 1.241929079102014
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Organic Baby Spinach",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Organic Baby Spinach",
      "support": 0.0044237280682467,
      "confidence": 0.1917651544033549,
      "lift": 2.228603524267526,
      "leverage": 0.0024387504712555,
      "conviction": 1.1308010011009957
    },
    {
      "rule_str": "Bag of Organic Bananas, Organic Strawberries -> Organic Baby Spinach",
      "antecedents": "Bag of Organic Bananas, Organic Strawberries",
      "consequents": "Organic Baby Spinach",
      "support": 0.0051624818609559,
      "confidence": 0.1909564085881587,
      "lift": 2.2192046646071737,
      "leverage": 0.0028362061716113,
      "conviction": 1.1296706163019956
    },
    {
      "rule_str": "Organic Grade A Free Range Large Brown Eggs -> Organic Strawberries",
      "antecedents": "Organic Grade A Free Range Large Brown Eggs",
      "consequents": "Organic Strawberries",
      "support": 0.003298008003166,
      "confidence": 0.2122241086587436,
      "lift": 2.2150672181973974,
      "leverage": 0.0018091105213777,
      "conviction": 1.1477765171215897
    },
    {
      "rule_str": "Organic Navel Orange -> Organic Strawberries",
      "antecedents": "Organic Navel Orange",
      "consequents": "Organic Strawberries",
      "support": 0.0036849742755375,
      "confidence": 0.2116161616161616,
      "lift": 2.208721833721833,
      "leverage": 0.0020166001872857,
      "conviction": 1.1468914313230785
    },
    {
      "rule_str": "Organic Hass Avocado -> Organic Strawberries",
      "antecedents": "Organic Hass Avocado",
      "consequents": "Organic Strawberries",
      "support": 0.0135350248449936,
      "confidence": 0.2110242698477992,
      "lift": 2.202544024512944,
      "leverage": 0.007389846953266,
      "conviction": 1.1460310302087446
    },
    {
      "rule_str": "Organic Avocado -> Organic Baby Spinach",
      "antecedents": "Organic Avocado",
      "consequents": "Organic Baby Spinach",
      "support": 0.0123301525878369,
      "confidence": 0.1892293156971251,
      "lift": 2.199133211502617,
      "leverage": 0.0067233287158933,
      "conviction": 1.1272642070319043
    },
    {
      "rule_str": "Organic Blueberries, Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Blueberries, Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0032892133151576,
      "confidence": 0.2947202521670606,
      "lift": 2.164804022781372,
      "leverage": 0.0017698086574872,
      "conviction": 1.2248447970945102
    },
    {
      "rule_str": "Organic Whole String Cheese -> Bag of Organic Bananas",
      "antecedents": "Organic Whole String Cheese",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0051624818609559,
      "confidence": 0.2945308580030105,
      "lift": 2.163412868813457,
      "leverage": 0.0027762143410685,
      "conviction": 1.22451596845747
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Organic Baby Spinach",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Organic Baby Spinach",
      "support": 0.0039224308517655,
      "confidence": 0.1858333333333333,
      "lift": 2.1596667177705093,
      "leverage": 0.0021062104046519,
      "conviction": 1.1225622589871789
    },
    {
      "rule_str": "Red Vine Tomato -> Large Lemon",
      "antecedents": "Red Vine Tomato",
      "consequents": "Large Lemon",
      "support": 0.0030253726749043,
      "confidence": 0.1539838854073411,
      "lift": 2.1522726109700945,
      "leverage": 0.0016197084205324,
      "conviction": 1.0974438867495462
    },
    {
      "rule_str": "Organic Cilantro -> Organic Baby Spinach",
      "antecedents": "Organic Cilantro",
      "consequents": "Organic Baby Spinach",
      "support": 0.0057429312695132,
      "confidence": 0.185195689166194,
      "lift": 2.152256320180099,
      "leverage": 0.0030746007292954,
      "conviction": 1.121683771640982
    },
    {
      "rule_str": "Large Lemon, Organic Avocado -> Banana",
      "antecedents": "Large Lemon, Organic Avocado",
      "consequents": "Banana",
      "support": 0.0041950661800272,
      "confidence": 0.3535952557449963,
      "lift": 2.1470441394042936,
      "leverage": 0.0022411863770758,
      "conviction": 1.292240936932808
    },
    {
      "rule_str": "Fresh Cauliflower -> Organic Baby Spinach",
      "antecedents": "Fresh Cauliflower",
      "consequents": "Organic Baby Spinach",
      "support": 0.0043006024361285,
      "confidence": 0.1844586948321388,
      "lift": 2.143691322147214,
      "leverage": 0.0022944356005876,
      "conviction": 1.120670120242748
    },
    {
      "rule_str": "Red Peppers -> Large Lemon",
      "antecedents": "Red Peppers",
      "consequents": "Large Lemon",
      "support": 0.003913636163757,
      "confidence": 0.153184165232358,
      "lift": 2.1410947151500026,
      "leverage": 0.0020857692618097,
      "conviction": 1.096407477200844
    },
    {
      "rule_str": "Honeycrisp Apple -> Large Lemon",
      "antecedents": "Honeycrisp Apple",
      "consequents": "Large Lemon",
      "support": 0.004766720900576,
      "confidence": 0.1526330611095466,
      "lift": 2.133391790222618,
      "leverage": 0.0025323817030493,
      "conviction": 1.0956944039698326
    },
    {
      "rule_str": "Organic Gala Apples -> Organic Strawberries",
      "antecedents": "Organic Gala Apples",
      "consequents": "Organic Strawberries",
      "support": 0.0050481509168462,
      "confidence": 0.2043431826272695,
      "lift": 2.132810866590204,
      "leverage": 0.0026812505057859,
      "conviction": 1.136407869691449
    },
    {
      "rule_str": "Organic Gala Apples -> Bag of Organic Bananas",
      "antecedents": "Organic Gala Apples",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0071236972868387,
      "confidence": 0.2883588465646137,
      "lift": 2.118077690479936,
      "leverage": 0.0037604130603642,
      "conviction": 1.2138958314300723
    },
    {
      "rule_str": "Organic Avocado, Organic Strawberries -> Banana",
      "antecedents": "Organic Avocado, Organic Strawberries",
      "consequents": "Banana",
      "support": 0.0033331867551998,
      "confidence": 0.3483455882352941,
      "lift": 2.1151679541970587,
      "leverage": 0.001757337069795,
      "conviction": 1.2818307637814406
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Large Lemon",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Large Lemon",
      "support": 0.0034123389472758,
      "confidence": 0.1510903426791277,
      "lift": 2.111828815529221,
      "leverage": 0.0017965171902359,
      "conviction": 1.0937032050989826
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Large Lemon",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Large Lemon",
      "support": 0.0050745349808715,
      "confidence": 0.1509285901124771,
      "lift": 2.1095679580503024,
      "leverage": 0.0026690495536272,
      "conviction": 1.0934948488894594
    },
    {
      "rule_str": "Honeycrisp Apple -> Banana",
      "antecedents": "Honeycrisp Apple",
      "consequents": "Banana",
      "support": 0.0108262609383932,
      "confidence": 0.3466629118558152,
      "lift": 2.104950677804415,
      "leverage": 0.0056830235920029,
      "conviction": 1.2785293954865056
    },
    {
      "rule_str": "Carrots -> Large Lemon",
      "antecedents": "Carrots",
      "consequents": "Large Lemon",
      "support": 0.0033068026911745,
      "confidence": 0.1505806968362034,
      "lift": 2.1047053637075,
      "leverage": 0.0017356551338036,
      "conviction": 1.0930469905653648
    },
    {
      "rule_str": "Asparagus -> Organic Baby Spinach",
      "antecedents": "Asparagus",
      "consequents": "Organic Baby Spinach",
      "support": 0.0061474869179015,
      "confidence": 0.1807135470527404,
      "lift": 2.1001669938299115,
      "leverage": 0.0032203449639701,
      "conviction": 1.1155472780461428
    },
    {
      "rule_str": "Organic Avocado, Organic Baby Spinach -> Banana",
      "antecedents": "Organic Avocado, Organic Baby Spinach",
      "consequents": "Banana",
      "support": 0.0042566289960863,
      "confidence": 0.3452211126961483,
      "lift": 2.096196017254916,
      "leverage": 0.0022259844566216,
      "conviction": 1.275714120523056
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Organic Baby Spinach",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Organic Baby Spinach",
      "support": 0.0037905105316388,
      "confidence": 0.180108650229837,
      "lift": 2.0931371703172137,
      "leverage": 0.0019795873941626,
      "conviction": 1.114724253136223
    },
    {
      "rule_str": "Boneless Skinless Chicken Breasts -> Organic Baby Spinach",
      "antecedents": "Boneless Skinless Chicken Breasts",
      "consequents": "Organic Baby Spinach",
      "support": 0.0033068026911745,
      "confidence": 0.1800766283524904,
      "lift": 2.0927650272710467,
      "leverage": 0.0017266909021856,
      "conviction": 1.1146807178931215
    },
    {
      "rule_str": "Organic Strawberries -> Bag of Organic Bananas",
      "antecedents": "Organic Strawberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0270348709379534,
      "confidence": 0.2821736735817882,
      "lift": 2.072645836861578,
      "leverage": 0.0139912189752573,
      "conviction": 1.2034362600488029
    },
    {
      "rule_str": "Bag of Organic Bananas -> Organic Strawberries",
      "antecedents": "Bag of Organic Bananas",
      "consequents": "Organic Strawberries",
      "support": 0.0270348709379534,
      "confidence": 0.198578811369509,
      "lift": 2.072645836861578,
      "leverage": 0.0139912189752573,
      "conviction": 1.1282340442996643
    },
    {
      "rule_str": "Organic Unsweetened Almond Milk -> Bag of Organic Bananas",
      "antecedents": "Organic Unsweetened Almond Milk",
      "consequents": "Bag of Organic Bananas",
      "support": 0.005382349061167,
      "confidence": 0.28125,
      "lift": 2.065861191860465,
      "leverage": 0.0027769711769347,
      "conviction": 1.2018897107885969
    },
    {
      "rule_str": "Limes, Organic Avocado -> Banana",
      "antecedents": "Limes, Organic Avocado",
      "consequents": "Banana",
      "support": 0.0030957301789719,
      "confidence": 0.339440694310511,
      "lift": 2.061097092095304,
      "leverage": 0.0015937484475704,
      "conviction": 1.2645506090963392
    },
    {
      "rule_str": "Organic Granny Smith Apple -> Organic Baby Spinach",
      "antecedents": "Organic Granny Smith Apple",
      "consequents": "Organic Baby Spinach",
      "support": 0.0036410008354953,
      "confidence": 0.1771501925545571,
      "lift": 2.0587553806639325,
      "leverage": 0.0018724561751184,
      "conviction": 1.110716395939598
    },
    {
      "rule_str": "100% Raw Coconut Water -> Bag of Organic Bananas",
      "antecedents": "100% Raw Coconut Water",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031924717470647,
      "confidence": 0.2796610169491526,
      "lift": 2.0541896597030616,
      "leverage": 0.0016383446819298,
      "conviction": 1.1992384834853866
    },
    {
      "rule_str": "Broccoli Crown -> Organic Baby Spinach",
      "antecedents": "Broccoli Crown",
      "consequents": "Organic Baby Spinach",
      "support": 0.0045556483883734,
      "confidence": 0.1766712141882674,
      "lift": 2.0531889216350105,
      "leverage": 0.0023368324088162,
      "conviction": 1.11007022744178
    },
    {
      "rule_str": "Organic Lemon -> Organic Baby Spinach",
      "antecedents": "Organic Lemon",
      "consequents": "Organic Baby Spinach",
      "support": 0.0054351171892177,
      "confidence": 0.1763195435092724,
      "lift": 2.0491019720688697,
      "leverage": 0.0027826785779122,
      "conviction": 1.109596282542954
    },
    {
      "rule_str": "Organic Granny Smith Apple -> Bag of Organic Bananas",
      "antecedents": "Organic Granny Smith Apple",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0057165472054878,
      "confidence": 0.2781343602909713,
      "lift": 2.042975932615303,
      "leverage": 0.0029184000936078,
      "conviction": 1.196702242230992
    },
    {
      "rule_str": "Carrots -> Organic Baby Spinach",
      "antecedents": "Carrots",
      "consequents": "Organic Baby Spinach",
      "support": 0.0038520733476979,
      "confidence": 0.1754104925911093,
      "lift": 2.038537414152912,
      "leverage": 0.0019624473241802,
      "conviction": 1.108373032052409
    },
    {
      "rule_str": "Organic Whole Milk -> Organic Strawberries",
      "antecedents": "Organic Whole Milk",
      "consequents": "Organic Strawberries",
      "support": 0.0083901323600545,
      "confidence": 0.1943765281173594,
      "lift": 2.028784939378039,
      "leverage": 0.0042545868928121,
      "conviction": 1.1223489637448665
    },
    {
      "rule_str": "Organic Yellow Onion -> Organic Baby Spinach",
      "antecedents": "Organic Yellow Onion",
      "consequents": "Organic Baby Spinach",
      "support": 0.0065784266303152,
      "confidence": 0.1743589743589743,
      "lift": 2.0263171687946837,
      "leverage": 0.0033319325810997,
      "conviction": 1.1069614325618131
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Organic Strawberries",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Organic Strawberries",
      "support": 0.0065256585022646,
      "confidence": 0.194088412241695,
      "lift": 2.0257777596788995,
      "leverage": 0.0033043483308571,
      "conviction": 1.1219477205323325
    },
    {
      "rule_str": "Organic Baby Carrots -> Organic Baby Spinach",
      "antecedents": "Organic Baby Carrots",
      "consequents": "Organic Baby Spinach",
      "support": 0.0054966800052768,
      "confidence": 0.1737559077008618,
      "lift": 2.0193086145877444,
      "leverage": 0.0027746196101652,
      "conviction": 1.1061534733424778
    },
    {
      "rule_str": "Organic Cucumber -> Bag of Organic Bananas",
      "antecedents": "Organic Cucumber",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0111516643947055,
      "confidence": 0.2748753522653371,
      "lift": 2.0190375923339894,
      "leverage": 0.0056284069590605,
      "conviction": 1.191323770786242
    },
    {
      "rule_str": "Organic Lemon -> Organic Strawberries",
      "antecedents": "Organic Lemon",
      "consequents": "Organic Strawberries",
      "support": 0.0059540037817158,
      "confidence": 0.1931526390870185,
      "lift": 2.016010724012249,
      "leverage": 0.0030006446002397,
      "conviction": 1.1206464972667116
    },
    {
      "rule_str": "Organic Banana -> Organic Strawberries",
      "antecedents": "Organic Banana",
      "consequents": "Organic Strawberries",
      "support": 0.0039576096037993,
      "confidence": 0.192967409948542,
      "lift": 2.0140774140076165,
      "leverage": 0.001992635677636,
      "conviction": 1.1203892878456991
    },
    {
      "rule_str": "Organic Baby Carrots -> Organic Strawberries",
      "antecedents": "Organic Baby Carrots",
      "consequents": "Organic Strawberries",
      "support": 0.0060947187898509,
      "confidence": 0.1926605504587156,
      "lift": 2.010874599771274,
      "leverage": 0.0030638391961934,
      "conviction": 1.119963442080983
    },
    {
      "rule_str": "Banana, Organic Strawberries -> Organic Baby Spinach",
      "antecedents": "Banana, Organic Strawberries",
      "consequents": "Organic Baby Spinach",
      "support": 0.0033068026911745,
      "confidence": 0.1729530818767249,
      "lift": 2.009978554251125,
      "leverage": 0.0016616096694974,
      "conviction": 1.1050797149444982
    },
    {
      "rule_str": "Organic Tomato Cluster -> Organic Strawberries",
      "antecedents": "Organic Tomato Cluster",
      "consequents": "Organic Strawberries",
      "support": 0.0042830130601116,
      "confidence": 0.1918833727344365,
      "lift": 2.002762887531587,
      "leverage": 0.0021444608197161,
      "conviction": 1.1188863566581309
    },
    {
      "rule_str": "Banana, Large Lemon -> Organic Baby Spinach",
      "antecedents": "Banana, Large Lemon",
      "consequents": "Organic Baby Spinach",
      "support": 0.0032628292511323,
      "confidence": 0.1719184430027803,
      "lift": 1.9979544727750551,
      "leverage": 0.0016297443657693,
      "conviction": 1.103698983273532
    },
    {
      "rule_str": "Organic Hass Avocado -> Organic Baby Spinach",
      "antecedents": "Organic Hass Avocado",
      "consequents": "Organic Baby Spinach",
      "support": 0.0110109493865705,
      "confidence": 0.1716714657891128,
      "lift": 1.9950842209271336,
      "leverage": 0.005491909502904,
      "conviction": 1.1033699006832811
    },
    {
      "rule_str": "Seedless Red Grapes -> Organic Strawberries",
      "antecedents": "Seedless Red Grapes",
      "consequents": "Organic Strawberries",
      "support": 0.0067894991425179,
      "confidence": 0.1901946292190194,
      "lift": 1.98513680148234,
      "leverage": 0.0033693322616016,
      "conviction": 1.1165530650457614
    },
    {
      "rule_str": "Organic Peeled Whole Baby Carrots -> Organic Baby Spinach",
      "antecedents": "Organic Peeled Whole Baby Carrots",
      "consequents": "Organic Baby Spinach",
      "support": 0.0036761795875291,
      "confidence": 0.1699186991869918,
      "lift": 1.9747144001489076,
      "leverage": 0.0018145536292376,
      "conviction": 1.1010400687622286
    },
    {
      "rule_str": "Banana, Organic Baby Spinach -> Organic Strawberries",
      "antecedents": "Banana, Organic Baby Spinach",
      "consequents": "Organic Strawberries",
      "support": 0.0033068026911745,
      "confidence": 0.1879999999999999,
      "lift": 1.9622305856434727,
      "leverage": 0.001621576339405,
      "conviction": 1.1135353064483042
    },
    {
      "rule_str": "Organic Carrot Bunch -> Bag of Organic Bananas",
      "antecedents": "Organic Carrot Bunch",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0040895299239259,
      "confidence": 0.2669345579793341,
      "lift": 1.9607102012299855,
      "leverage": 0.0020037908272657,
      "conviction": 1.1784189788678523
    },
    {
      "rule_str": "Fresh Cauliflower -> Organic Strawberries",
      "antecedents": "Fresh Cauliflower",
      "consequents": "Organic Strawberries",
      "support": 0.0043709599401961,
      "confidence": 0.1874764239909468,
      "lift": 1.9567658151175515,
      "leverage": 0.0021371924109256,
      "conviction": 1.1128177637345855
    },
    {
      "rule_str": "Organic Tomato Cluster -> Organic Baby Spinach",
      "antecedents": "Organic Tomato Cluster",
      "consequents": "Organic Baby Spinach",
      "support": 0.0037465370915966,
      "confidence": 0.1678486997635933,
      "lift": 1.950657850226838,
      "leverage": 0.001825883968774,
      "conviction": 1.098301201074551
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Bag of Organic Bananas",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0055318587573105,
      "confidence": 0.262849979105725,
      "lift": 1.930707808411916,
      "leverage": 0.0026666614792922,
      "conviction": 1.1718893103758077
    },
    {
      "rule_str": "Organic Sticks Low Moisture Part Skim Mozzarella String Cheese -> Bag of Organic Bananas",
      "antecedents": "Organic Sticks Low Moisture Part Skim Mozzarella String Cheese",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0030957301789719,
      "confidence": 0.2622950819672131,
      "lift": 1.926631931206845,
      "leverage": 0.0014889208404425,
      "conviction": 1.1710078223863898
    },
    {
      "rule_str": "Organic Peeled Whole Baby Carrots -> Organic Strawberries",
      "antecedents": "Organic Peeled Whole Baby Carrots",
      "consequents": "Organic Strawberries",
      "support": 0.0039839936678246,
      "confidence": 0.1841463414634146,
      "lift": 1.9220084226269103,
      "leverage": 0.0019111652551481,
      "conviction": 1.1082755582145574
    },
    {
      "rule_str": "Organic Black Beans -> Bag of Organic Bananas",
      "antecedents": "Organic Black Beans",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0036234114594784,
      "confidence": 0.2614213197969543,
      "lift": 1.920213899710122,
      "leverage": 0.0017364282124425,
      "conviction": 1.169622482728336
    },
    {
      "rule_str": "Broccoli Crown -> Banana",
      "antecedents": "Broccoli Crown",
      "consequents": "Banana",
      "support": 0.0081350864078096,
      "confidence": 0.3154843110504775,
      "lift": 1.9156330016017595,
      "leverage": 0.0038884032482444,
      "conviction": 1.2202944152175532
    },
    {
      "rule_str": "Clementines, Bag -> Banana",
      "antecedents": "Clementines, Bag",
      "consequents": "Banana",
      "support": 0.0040983246119343,
      "confidence": 0.3152909336941813,
      "lift": 1.914458806776508,
      "leverage": 0.0019576023370921,
      "conviction": 1.2199497764219978
    },
    {
      "rule_str": "Organic Baby Broccoli -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Broccoli",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0030957301789719,
      "confidence": 0.2605477424130273,
      "lift": 1.9137972255215292,
      "leverage": 0.0014781449208846,
      "conviction": 1.1682407089381277
    },
    {
      "rule_str": "Granny Smith Apples -> Banana",
      "antecedents": "Granny Smith Apples",
      "consequents": "Banana",
      "support": 0.0038168945956642,
      "confidence": 0.3147208121827411,
      "lift": 1.9109970067947548,
      "leverage": 0.0018195630550637,
      "conviction": 1.2189348329905034
    },
    {
      "rule_str": "Organic Gala Apples -> Organic Baby Spinach",
      "antecedents": "Organic Gala Apples",
      "consequents": "Organic Baby Spinach",
      "support": 0.0040543511718921,
      "confidence": 0.1641153435386258,
      "lift": 1.907270557753419,
      "leverage": 0.0019286164902496,
      "conviction": 1.093395799839793
    },
    {
      "rule_str": "Red Peppers -> Organic Baby Spinach",
      "antecedents": "Red Peppers",
      "consequents": "Organic Baby Spinach",
      "support": 0.0041686821160019,
      "confidence": 0.1631669535283993,
      "lift": 1.8962488195979803,
      "leverage": 0.0019702986164748,
      "conviction": 1.0921566450786802
    },
    {
      "rule_str": "Organic Lacinato (Dinosaur) Kale -> Bag of Organic Bananas",
      "antecedents": "Organic Lacinato (Dinosaur) Kale",
      "consequents": "Bag of Organic Bananas",
      "support": 0.003992788355833,
      "confidence": 0.2578080636002272,
      "lift": 1.893673505921436,
      "leverage": 0.0018843000956616,
      "conviction": 1.1639283415280828
    },
    {
      "rule_str": "Original Hummus -> Organic Baby Spinach",
      "antecedents": "Original Hummus",
      "consequents": "Organic Baby Spinach",
      "support": 0.004071940547909,
      "confidence": 0.1620013995801259,
      "lift": 1.8827033053207505,
      "leverage": 0.0019091246988046,
      "conviction": 1.0906375882578614
    },
    {
      "rule_str": "Original Hummus -> Organic Strawberries",
      "antecedents": "Original Hummus",
      "consequents": "Organic Strawberries",
      "support": 0.004529264324348,
      "confidence": 0.1801959412176347,
      "lift": 1.8807765280109372,
      "leverage": 0.0021210758676694,
      "conviction": 1.1029350966851703
    },
    {
      "rule_str": "Large Alfresco Eggs -> Organic Strawberries",
      "antecedents": "Large Alfresco Eggs",
      "consequents": "Organic Strawberries",
      "support": 0.0030077832988874,
      "confidence": 0.1801896733403583,
      "lift": 1.8807111076891356,
      "leverage": 0.0014085034910581,
      "conviction": 1.1029266641714472
    },
    {
      "rule_str": "Blueberries -> Banana",
      "antecedents": "Blueberries",
      "consequents": "Banana",
      "support": 0.0062969966140451,
      "confidence": 0.3082221265604821,
      "lift": 1.8715367350507115,
      "leverage": 0.0029323837287551,
      "conviction": 1.2074839401855044
    },
    {
      "rule_str": "Cucumber Kirby -> Banana",
      "antecedents": "Cucumber Kirby",
      "consequents": "Banana",
      "support": 0.006534453190273,
      "confidence": 0.307915457936179,
      "lift": 1.869674631241762,
      "leverage": 0.003039485092036,
      "conviction": 1.2069488936466806
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Organic Baby Spinach",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Organic Baby Spinach",
      "support": 0.0040895299239259,
      "confidence": 0.1608439986163957,
      "lift": 1.869252541156712,
      "leverage": 0.0019017410436736,
      "conviction": 1.0891333327992232
    },
    {
      "rule_str": "Organic Grade A Free Range Large Brown Eggs -> Bag of Organic Bananas",
      "antecedents": "Organic Grade A Free Range Large Brown Eggs",
      "consequents": "Bag of Organic Bananas",
      "support": 0.003913636163757,
      "confidence": 0.2518392756083757,
      "lift": 1.849831061566561,
      "leverage": 0.0017979639572136,
      "conviction": 1.1546425807526324
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Organic Strawberries",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Organic Strawberries",
      "support": 0.0040631458599006,
      "confidence": 0.1761341974837972,
      "lift": 1.838382497236567,
      "leverage": 0.0018529714995548,
      "conviction": 1.097497512427991
    },
    {
      "rule_str": "Organic Tomato Cluster -> Bag of Organic Bananas",
      "antecedents": "Organic Tomato Cluster",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0055846268853612,
      "confidence": 0.2501970055161544,
      "lift": 1.8377681209440784,
      "leverage": 0.0025458175700204,
      "conviction": 1.152113603152482
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Organic Strawberries",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Organic Strawberries",
      "support": 0.0039751989798161,
      "confidence": 0.17601246105919,
      "lift": 1.837111885876189,
      "leverage": 0.0018113683441441,
      "conviction": 1.0973353674720734
    },
    {
      "rule_str": "Strawberries -> Banana",
      "antecedents": "Strawberries",
      "consequents": "Banana",
      "support": 0.0171320522404467,
      "confidence": 0.2999692023406221,
      "lift": 1.8214246583435028,
      "leverage": 0.0077261994306865,
      "conviction": 1.1932484615631798
    },
    {
      "rule_str": "Large Lemon, Organic Baby Spinach -> Banana",
      "antecedents": "Large Lemon, Organic Baby Spinach",
      "consequents": "Banana",
      "support": 0.0032628292511323,
      "confidence": 0.2996768982229402,
      "lift": 1.8196497763771984,
      "leverage": 0.0014697208774823,
      "conviction": 1.1927504179632364
    },
    {
      "rule_str": "Organic Avocado -> Banana",
      "antecedents": "Organic Avocado",
      "consequents": "Banana",
      "support": 0.0194890286267094,
      "confidence": 0.2990956944256985,
      "lift": 1.816120684325219,
      "leverage": 0.0087578978186538,
      "conviction": 1.1917613655825212
    },
    {
      "rule_str": "Unsweetened Original Almond Breeze Almond Milk -> Banana",
      "antecedents": "Unsweetened Original Almond Breeze Almond Milk",
      "consequents": "Banana",
      "support": 0.0038432786596895,
      "confidence": 0.2982935153583618,
      "lift": 1.8112498218424933,
      "leverage": 0.0017213854711618,
      "conviction": 1.1903989640062849
    },
    {
      "rule_str": "Limes -> Organic Baby Spinach",
      "antecedents": "Limes",
      "consequents": "Organic Baby Spinach",
      "support": 0.0082582120399278,
      "confidence": 0.1556439582297364,
      "lift": 1.8088201421210324,
      "leverage": 0.003692687890996,
      "conviction": 1.0824258100992747
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Bag of Organic Bananas",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0055582428213359,
      "confidence": 0.2461059190031152,
      "lift": 1.8077179276646784,
      "leverage": 0.0024835137741352,
      "conviction": 1.145861535995895
    },
    {
      "rule_str": "Vanilla Almond Breeze Almond Milk -> Banana",
      "antecedents": "Vanilla Almond Breeze Almond Milk",
      "consequents": "Banana",
      "support": 0.0033243920671914,
      "confidence": 0.2960062646828504,
      "lift": 1.7973615468206507,
      "leverage": 0.0014747964345976,
      "conviction": 1.1865313999954703
    },
    {
      "rule_str": "Organic Reduced Fat Milk -> Banana",
      "antecedents": "Organic Reduced Fat Milk",
      "consequents": "Banana",
      "support": 0.0031309089310056,
      "confidence": 0.2951907131011609,
      "lift": 1.7924094859108994,
      "leverage": 0.0013841490775146,
      "conviction": 1.185158436304472
    },
    {
      "rule_str": "Raspberries -> Organic Strawberries",
      "antecedents": "Raspberries",
      "consequents": "Organic Strawberries",
      "support": 0.0049514093487533,
      "confidence": 0.1716986886245806,
      "lift": 1.792087331563975,
      "leverage": 0.0021884807450272,
      "conviction": 1.0916204724275844
    },
    {
      "rule_str": "Green Bell Pepper -> Organic Baby Spinach",
      "antecedents": "Green Bell Pepper",
      "consequents": "Organic Baby Spinach",
      "support": 0.0034123389472758,
      "confidence": 0.1539071796905989,
      "lift": 1.78863612701549,
      "leverage": 0.0015045507192869,
      "conviction": 1.080203909768645
    },
    {
      "rule_str": "Hass Avocados -> Bag of Organic Bananas",
      "antecedents": "Hass Avocados",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0048722571566773,
      "confidence": 0.2434094903339191,
      "lift": 1.7879118926626794,
      "leverage": 0.0021471468329123,
      "conviction": 1.1417777762115535
    },
    {
      "rule_str": "Red Raspberries -> Banana",
      "antecedents": "Red Raspberries",
      "consequents": "Banana",
      "support": 0.0038608680357064,
      "confidence": 0.2940388479571333,
      "lift": 1.785415315975961,
      "leverage": 0.0016984198920396,
      "conviction": 1.1832247000231215
    },
    {
      "rule_str": "Banana, Organic Avocado -> Organic Strawberries",
      "antecedents": "Banana, Organic Avocado",
      "consequents": "Organic Strawberries",
      "support": 0.0033331867551998,
      "confidence": 0.171028880866426,
      "lift": 1.7850962822578456,
      "leverage": 0.0014659559574392,
      "conviction": 1.0907384442790566
    },
    {
      "rule_str": "Organic Ginger Root -> Bag of Organic Bananas",
      "antecedents": "Organic Ginger Root",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0042830130601116,
      "confidence": 0.2426507224713502,
      "lift": 1.7823385270416587,
      "leverage": 0.0018799829986897,
      "conviction": 1.1406338597802717
    },
    {
      "rule_str": "Roma Tomato -> Banana",
      "antecedents": "Roma Tomato",
      "consequents": "Banana",
      "support": 0.0050305615408293,
      "confidence": 0.2928827444956477,
      "lift": 1.7783954108126467,
      "leverage": 0.0022018534198774,
      "conviction": 1.1812901832781777
    },
    {
      "rule_str": "Organic Small Bunch Celery -> Bag of Organic Bananas",
      "antecedents": "Organic Small Bunch Celery",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0055582428213359,
      "confidence": 0.2409454822722074,
      "lift": 1.769813053085358,
      "leverage": 0.0024176609323922,
      "conviction": 1.1380713894111825
    },
    {
      "rule_str": "Large Lemon -> Organic Baby Spinach",
      "antecedents": "Large Lemon",
      "consequents": "Organic Baby Spinach",
      "support": 0.0108878237544523,
      "confidence": 0.1521819299323909,
      "lift": 1.7685860939250313,
      "leverage": 0.0047315931972568,
      "conviction": 1.0780057712765094
    },
    {
      "rule_str": "Cucumber Kirby -> Organic Baby Spinach",
      "antecedents": "Cucumber Kirby",
      "consequents": "Organic Baby Spinach",
      "support": 0.0032100611230816,
      "confidence": 0.1512639867384997,
      "lift": 1.7579181942049382,
      "leverage": 0.0013840028152128,
      "conviction": 1.0768398633319225
    },
    {
      "rule_str": "Red Peppers -> Banana",
      "antecedents": "Red Peppers",
      "consequents": "Banana",
      "support": 0.0073699485510751,
      "confidence": 0.2884681583476764,
      "lift": 1.7515898720988223,
      "leverage": 0.0031623719553939,
      "conviction": 1.1739610562109697
    },
    {
      "rule_str": "Organic Strawberries -> Organic Baby Spinach",
      "antecedents": "Organic Strawberries",
      "consequents": "Organic Baby Spinach",
      "support": 0.0144144936458379,
      "confidence": 0.1504497888746098,
      "lift": 1.7484559734247256,
      "leverage": 0.0061703663329813,
      "conviction": 1.0758078340239492
    },
    {
      "rule_str": "Organic Baby Spinach -> Organic Strawberries",
      "antecedents": "Organic Baby Spinach",
      "consequents": "Organic Strawberries",
      "support": 0.0144144936458379,
      "confidence": 0.1675183973834832,
      "lift": 1.7484559734247254,
      "leverage": 0.0061703663329813,
      "conviction": 1.086138920060362
    },
    {
      "rule_str": "Seedless Red Grapes -> Banana",
      "antecedents": "Seedless Red Grapes",
      "consequents": "Banana",
      "support": 0.0102194274658106,
      "confidence": 0.2862774082286277,
      "lift": 1.7382875522074184,
      "leverage": 0.0043404073618967,
      "conviction": 1.1703576179097248
    },
    {
      "rule_str": "Yellow Onions -> Banana",
      "antecedents": "Yellow Onions",
      "consequents": "Banana",
      "support": 0.0094191108570423,
      "confidence": 0.284688995215311,
      "lift": 1.728642646638734,
      "leverage": 0.0039702629558538,
      "conviction": 1.167758732588393
    },
    {
      "rule_str": "Large Lemon, Limes -> Banana",
      "antecedents": "Large Lemon, Limes",
      "consequents": "Banana",
      "support": 0.0039751989798161,
      "confidence": 0.283385579937304,
      "lift": 1.7207282583985453,
      "leverage": 0.0016650149281427,
      "conviction": 1.1656347527598143
    },
    {
      "rule_str": "Organic Peeled Whole Baby Carrots -> Bag of Organic Bananas",
      "antecedents": "Organic Peeled Whole Baby Carrots",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0050657402928631,
      "confidence": 0.2341463414634146,
      "lift": 1.719871431272452,
      "leverage": 0.0021203222803578,
      "conviction": 1.1279677520637408
    },
    {
      "rule_str": "Organic Yellow Onion -> Bag of Organic Bananas",
      "antecedents": "Organic Yellow Onion",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0087946880084429,
      "confidence": 0.2331002331002331,
      "lift": 1.7121874680014215,
      "leverage": 0.0036581663524885,
      "conviction": 1.126429120094138
    },
    {
      "rule_str": "Asparagus -> Organic Strawberries",
      "antecedents": "Asparagus",
      "consequents": "Organic Strawberries",
      "support": 0.0055758321973527,
      "confidence": 0.1639089968976215,
      "lift": 1.7107832285885862,
      "leverage": 0.0023166044330305,
      "conviction": 1.0814500640252744
    },
    {
      "rule_str": "Organic Zucchini -> Organic Strawberries",
      "antecedents": "Organic Zucchini",
      "consequents": "Organic Strawberries",
      "support": 0.0066048106943406,
      "confidence": 0.163652211810852,
      "lift": 1.7081030607630745,
      "leverage": 0.0027380588302054,
      "conviction": 1.0811180248276473
    },
    {
      "rule_str": "Small Hass Avocado -> Organic Strawberries",
      "antecedents": "Small Hass Avocado",
      "consequents": "Organic Strawberries",
      "support": 0.0044589068202805,
      "confidence": 0.1633902674830809,
      "lift": 1.7053690438923914,
      "leverage": 0.0018442781355101,
      "conviction": 1.0807795244214868
    },
    {
      "rule_str": "Boneless Skinless Chicken Breasts -> Banana",
      "antecedents": "Boneless Skinless Chicken Breasts",
      "consequents": "Banana",
      "support": 0.0051536871729475,
      "confidence": 0.2806513409961685,
      "lift": 1.704125853250526,
      "leverage": 0.0021294462325749,
      "conviction": 1.1612041836717308
    },
    {
      "rule_str": "Grape White/Green Seedless -> Bag of Organic Bananas",
      "antecedents": "Grape White/Green Seedless",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031133195549887,
      "confidence": 0.2318271119842829,
      "lift": 1.7028360315357165,
      "leverage": 0.0012850052033239,
      "conviction": 1.124562247778301
    },
    {
      "rule_str": "Large Alfresco Eggs -> Bag of Organic Bananas",
      "antecedents": "Large Alfresco Eggs",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0038520733476979,
      "confidence": 0.2307692307692307,
      "lift": 1.6950655933214072,
      "leverage": 0.0015795516453666,
      "conviction": 1.1230156985180952
    },
    {
      "rule_str": "Small Hass Avocado -> Banana",
      "antecedents": "Small Hass Avocado",
      "consequents": "Banana",
      "support": 0.0076074051273031,
      "confidence": 0.2787624879149211,
      "lift": 1.6926566639093297,
      "leverage": 0.0031130470631383,
      "conviction": 1.1581630993360796
    },
    {
      "rule_str": "Organic Baby Carrots -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Carrots",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0072556176069653,
      "confidence": 0.2293577981651376,
      "lift": 1.6846982196619489,
      "leverage": 0.0029488417569729,
      "conviction": 1.120958893209454
    },
    {
      "rule_str": "Organic Blueberries -> Bag of Organic Bananas",
      "antecedents": "Organic Blueberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0099995602655995,
      "confidence": 0.2289569069673781,
      "lift": 1.6817535598660034,
      "leverage": 0.0040536473184039,
      "conviction": 1.120376069036073
    },
    {
      "rule_str": "Honeycrisp Apple -> Organic Strawberries",
      "antecedents": "Honeycrisp Apple",
      "consequents": "Organic Strawberries",
      "support": 0.0050305615408293,
      "confidence": 0.1610813855252041,
      "lift": 1.681270326890338,
      "leverage": 0.0020384421532625,
      "conviction": 1.0778049899418325
    },
    {
      "rule_str": "Organic Baby Spinach -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Spinach",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0196649223868783,
      "confidence": 0.2285363859362223,
      "lift": 1.6786647133642223,
      "leverage": 0.0079503005029955,
      "conviction": 1.119765357537508
    },
    {
      "rule_str": "Russet Potato -> Banana",
      "antecedents": "Russet Potato",
      "consequents": "Banana",
      "support": 0.0034387230113011,
      "confidence": 0.2757404795486601,
      "lift": 1.6743069116245006,
      "leverage": 0.0013849042117569,
      "conviction": 1.1533306070085956
    },
    {
      "rule_str": "Organic Whole Milk -> Bag of Organic Bananas",
      "antecedents": "Organic Whole Milk",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0098324611934391,
      "confidence": 0.2277913610431947,
      "lift": 1.6731922937607533,
      "leverage": 0.0039559930611725,
      "conviction": 1.1186850108233837
    },
    {
      "rule_str": "Organic Zucchini -> Bag of Organic Bananas",
      "antecedents": "Organic Zucchini",
      "consequents": "Bag of Organic Bananas",
      "support": 0.009155270216789,
      "confidence": 0.2268468075833515,
      "lift": 1.6662542801204767,
      "leverage": 0.0036607485666318,
      "conviction": 1.1173183246248242
    },
    {
      "rule_str": "No Salt Added Black Beans -> Banana",
      "antecedents": "No Salt Added Black Beans",
      "consequents": "Banana",
      "support": 0.0030077832988874,
      "confidence": 0.2736,
      "lift": 1.6613098365908363,
      "leverage": 0.0011972942301778,
      "conviction": 1.149932092998208
    },
    {
      "rule_str": "100% Whole Wheat Bread -> Banana",
      "antecedents": "100% Whole Wheat Bread",
      "consequents": "Banana",
      "support": 0.0055230640693021,
      "confidence": 0.2732811140121844,
      "lift": 1.659373548475672,
      "leverage": 0.0021946609653863,
      "conviction": 1.1494275000414718
    },
    {
      "rule_str": "Organic Reduced Fat 2% Milk -> Bag of Organic Bananas",
      "antecedents": "Organic Reduced Fat 2% Milk",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0030253726749043,
      "confidence": 0.2241042345276873,
      "lift": 1.646109301483894,
      "leverage": 0.0011874797280768,
      "conviction": 1.1133689189596825
    },
    {
      "rule_str": "Organic Yellow Onion -> Organic Strawberries",
      "antecedents": "Organic Yellow Onion",
      "consequents": "Organic Strawberries",
      "support": 0.0059012356536651,
      "confidence": 0.1564102564102564,
      "lift": 1.6325158991305495,
      "leverage": 0.0022864251291195,
      "conviction": 1.0718369630578997
    },
    {
      "rule_str": "Organic Red Onion -> Organic Strawberries",
      "antecedents": "Organic Red Onion",
      "consequents": "Organic Strawberries",
      "support": 0.0052504287410404,
      "confidence": 0.1563645887899424,
      "lift": 1.632039248059519,
      "leverage": 0.0020333316355123,
      "conviction": 1.0717789424451836
    },
    {
      "rule_str": "Fresh Cauliflower -> Bag of Organic Bananas",
      "antecedents": "Fresh Cauliflower",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0051536871729475,
      "confidence": 0.2210486608826857,
      "lift": 1.6236652445520532,
      "leverage": 0.0019795802009347,
      "conviction": 1.1090015335337942
    },
    {
      "rule_str": "Red Vine Tomato -> Banana",
      "antecedents": "Red Vine Tomato",
      "consequents": "Banana",
      "support": 0.005224044677015,
      "confidence": 0.2658907788719785,
      "lift": 1.6144991461945055,
      "leverage": 0.0019883386134172,
      "conviction": 1.1378561231942734
    },
    {
      "rule_str": "Organic Garlic -> Bag of Organic Bananas",
      "antecedents": "Organic Garlic",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0080207554636999,
      "confidence": 0.2193362193362193,
      "lift": 1.611086874652766,
      "leverage": 0.0030422806279288,
      "conviction": 1.1065688597654486
    },
    {
      "rule_str": "Large Lemon -> Banana",
      "antecedents": "Large Lemon",
      "consequents": "Banana",
      "support": 0.0189789367222197,
      "confidence": 0.2652735095267363,
      "lift": 1.6107510627329678,
      "leverage": 0.0071962738630575,
      "conviction": 1.1369001705870776
    },
    {
      "rule_str": "Organic Garlic -> Organic Strawberries",
      "antecedents": "Organic Garlic",
      "consequents": "Organic Strawberries",
      "support": 0.0056286003254034,
      "confidence": 0.1539201539201539,
      "lift": 1.6065257115376446,
      "leverage": 0.0021250147400746,
      "conviction": 1.068682433490672
    },
    {
      "rule_str": "Grape White/Green Seedless -> Banana",
      "antecedents": "Grape White/Green Seedless",
      "consequents": "Banana",
      "support": 0.003535464579394,
      "confidence": 0.2632612966601179,
      "lift": 1.598532827979211,
      "leverage": 0.0013237711330583,
      "conviction": 1.1337950192750246
    },
    {
      "rule_str": "Organic Peeled Whole Baby Carrots -> Banana",
      "antecedents": "Organic Peeled Whole Baby Carrots",
      "consequents": "Banana",
      "support": 0.0056813684534541,
      "confidence": 0.2626016260162601,
      "lift": 1.594527282184068,
      "leverage": 0.0021183259662335,
      "conviction": 1.1327807353862125
    },
    {
      "rule_str": "Organic Cilantro -> Organic Strawberries",
      "antecedents": "Organic Cilantro",
      "consequents": "Organic Strawberries",
      "support": 0.0047227474605338,
      "confidence": 0.152297220646625,
      "lift": 1.5895865130920237,
      "leverage": 0.0017516934023641,
      "conviction": 1.0666364330263691
    },
    {
      "rule_str": "Orange Bell Pepper -> Banana",
      "antecedents": "Orange Bell Pepper",
      "consequents": "Banana",
      "support": 0.0042830130601116,
      "confidence": 0.2612660944206008,
      "lift": 1.5864178824145263,
      "leverage": 0.0015832117608519,
      "conviction": 1.1307328200927134
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Bag of Organic Bananas",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0072116441669231,
      "confidence": 0.2144912372482343,
      "lift": 1.5754991040898247,
      "leverage": 0.0026342730035867,
      "conviction": 1.0997435936972455
    },
    {
      "rule_str": "Organic Red Onion -> Bag of Organic Bananas",
      "antecedents": "Organic Red Onion",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0070797238467965,
      "confidence": 0.2108433734939759,
      "lift": 1.5487045079542978,
      "leverage": 0.0025083393054367,
      "conviction": 1.0946600467058354
    },
    {
      "rule_str": "Grated Parmesan -> Bag of Organic Bananas",
      "antecedents": "Grated Parmesan",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031309089310056,
      "confidence": 0.2101534828807556,
      "lift": 1.5436370653072558,
      "leverage": 0.0011026414053211,
      "conviction": 1.0937039170344105
    },
    {
      "rule_str": "Unsweetened Almondmilk -> Bag of Organic Bananas",
      "antecedents": "Unsweetened Almondmilk",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0039751989798161,
      "confidence": 0.2083909635776855,
      "lift": 1.5306908600517273,
      "leverage": 0.0013782023663511,
      "conviction": 1.091268782799045
    },
    {
      "rule_str": "Feta Cheese Crumbles -> Banana",
      "antecedents": "Feta Cheese Crumbles",
      "consequents": "Banana",
      "support": 0.003157292995031,
      "confidence": 0.2477570738440303,
      "lift": 1.5043905842911176,
      "leverage": 0.0010585740665828,
      "conviction": 1.1104267561842187
    },
    {
      "rule_str": "Michigan Organic Kale -> Bag of Organic Bananas",
      "antecedents": "Michigan Organic Kale",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0047051580845169,
      "confidence": 0.203654358583936,
      "lift": 1.495899150050804,
      "leverage": 0.001559786897992,
      "conviction": 1.0847779967668172
    },
    {
      "rule_str": "Bunched Cilantro -> Banana",
      "antecedents": "Bunched Cilantro",
      "consequents": "Banana",
      "support": 0.0041422980519766,
      "confidence": 0.2453125,
      "lift": 1.4895470368738652,
      "leverage": 0.0013613868424386,
      "conviction": 1.1068298764109623
    },
    {
      "rule_str": "Red Onion -> Banana",
      "antecedents": "Red Onion",
      "consequents": "Banana",
      "support": 0.0031660876830394,
      "confidence": 0.2452316076294277,
      "lift": 1.4890558552549442,
      "leverage": 0.0010398493207468,
      "conviction": 1.1067112518190636
    },
    {
      "rule_str": "Organic Cilantro -> Bag of Organic Bananas",
      "antecedents": "Organic Cilantro",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0062794072380282,
      "confidence": 0.2024957458876914,
      "lift": 1.4873888104754491,
      "leverage": 0.002057641420104,
      "conviction": 1.0832020333118513
    },
    {
      "rule_str": "Uncured Genoa Salami -> Bag of Organic Bananas",
      "antecedents": "Uncured Genoa Salami",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031836770590563,
      "confidence": 0.2024608501118568,
      "lift": 1.487132491083248,
      "leverage": 0.001042861040211,
      "conviction": 1.083154638553433
    },
    {
      "rule_str": "Michigan Organic Kale -> Banana",
      "antecedents": "Michigan Organic Kale",
      "consequents": "Banana",
      "support": 0.0056110109493865,
      "confidence": 0.2428625808907499,
      "lift": 1.4746710327983936,
      "leverage": 0.0018060871225864,
      "conviction": 1.1032484345267424
    },
    {
      "rule_str": "Green Bell Pepper -> Banana",
      "antecedents": "Green Bell Pepper",
      "consequents": "Banana",
      "support": 0.005382349061167,
      "confidence": 0.2427608092026973,
      "lift": 1.4740530711520186,
      "leverage": 0.0017309547073934,
      "conviction": 1.1031001597717012
    },
    {
      "rule_str": "Organic Blackberries -> Banana",
      "antecedents": "Organic Blackberries",
      "consequents": "Banana",
      "support": 0.0060683347258256,
      "confidence": 0.2427013717903623,
      "lift": 1.473692164873606,
      "leverage": 0.0019505583879524,
      "conviction": 1.103013581747391
    },
    {
      "rule_str": "2% Reduced Fat Milk -> Banana",
      "antecedents": "2% Reduced Fat Milk",
      "consequents": "Banana",
      "support": 0.0032364451871069,
      "confidence": 0.2389610389610389,
      "lift": 1.4509807185231731,
      "leverage": 0.0010059226544567,
      "conviction": 1.0975925216936888
    },
    {
      "rule_str": "Organic Italian Parsley Bunch -> Bag of Organic Bananas",
      "antecedents": "Organic Italian Parsley Bunch",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0041686821160019,
      "confidence": 0.1974999999999999,
      "lift": 1.4506936369509045,
      "leverage": 0.0012951035672162,
      "conviction": 1.076458853120628
    },
    {
      "rule_str": "Organic Whole String Cheese -> Banana",
      "antecedents": "Organic Whole String Cheese",
      "consequents": "Banana",
      "support": 0.0041774768040103,
      "confidence": 0.2383341695935775,
      "lift": 1.4471743433535047,
      "leverage": 0.0012908330328597,
      "conviction": 1.0966891765489586
    },
    {
      "rule_str": "Organic Baby Arugula -> Bag of Organic Bananas",
      "antecedents": "Organic Baby Arugula",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0050569456048546,
      "confidence": 0.1967157030448169,
      "lift": 1.4449327528883016,
      "leverage": 0.0015571663973128,
      "conviction": 1.075407838673959
    },
    {
      "rule_str": "Original Hummus -> Bag of Organic Bananas",
      "antecedents": "Original Hummus",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0049338199727364,
      "confidence": 0.1962911126662001,
      "lift": 1.4418140158727577,
      "leverage": 0.0015118668508909,
      "conviction": 1.0748397127908362
    },
    {
      "rule_str": "Organic Gala Apples -> Banana",
      "antecedents": "Organic Gala Apples",
      "consequents": "Banana",
      "support": 0.0058572622136229,
      "confidence": 0.2370950516197935,
      "lift": 1.4396503708442072,
      "leverage": 0.0017887311784187,
      "conviction": 1.0949079228381242
    },
    {
      "rule_str": "Spring Water -> Bag of Organic Bananas",
      "antecedents": "Spring Water",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0037553317796051,
      "confidence": 0.1919101123595505,
      "lift": 1.409634323374851,
      "leverage": 0.0010912850000017,
      "conviction": 1.0690125477893222
    },
    {
      "rule_str": "Seedless Red Grapes -> Bag of Organic Bananas",
      "antecedents": "Seedless Red Grapes",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0068422672705685,
      "confidence": 0.1916728258191672,
      "lift": 1.4078913862899491,
      "leverage": 0.0019823275499348,
      "conviction": 1.0686987363807816
    },
    {
      "rule_str": "Hass Avocado -> Banana",
      "antecedents": "Hass Avocado",
      "consequents": "Banana",
      "support": 0.0033155973791829,
      "confidence": 0.2308634415186773,
      "lift": 1.4018117920474849,
      "leverage": 0.0009503744598207,
      "conviction": 1.0860368853136273
    },
    {
      "rule_str": "Organic Baby Spinach, Organic Strawberries -> Banana",
      "antecedents": "Organic Baby Spinach, Organic Strawberries",
      "consequents": "Banana",
      "support": 0.0033068026911745,
      "confidence": 0.2294081757169005,
      "lift": 1.3929753615235596,
      "leverage": 0.0009328894242824,
      "conviction": 1.0839859002280594
    },
    {
      "rule_str": "Original Hummus -> Banana",
      "antecedents": "Original Hummus",
      "consequents": "Banana",
      "support": 0.0057253418934963,
      "confidence": 0.2277816655003499,
      "lift": 1.383099128255756,
      "leverage": 0.0015858396867986,
      "conviction": 1.0817027193418405
    },
    {
      "rule_str": "Asparagus -> Bag of Organic Bananas",
      "antecedents": "Asparagus",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0064025328701464,
      "confidence": 0.1882109617373319,
      "lift": 1.382463010616494,
      "leverage": 0.0017712821090202,
      "conviction": 1.0641412841420852
    },
    {
      "rule_str": "Organic Grape Tomatoes -> Banana",
      "antecedents": "Organic Grape Tomatoes",
      "consequents": "Banana",
      "support": 0.0076425838793368,
      "confidence": 0.2273083965472142,
      "lift": 1.3802254207733096,
      "leverage": 0.0021053841115953,
      "conviction": 1.0810401829414191
    },
    {
      "rule_str": "Organic Half & Half -> Bag of Organic Bananas",
      "antecedents": "Organic Half & Half",
      "consequents": "Bag of Organic Bananas",
      "support": 0.004309397124137,
      "confidence": 0.1851851851851851,
      "lift": 1.360237821801129,
      "leverage": 0.0011412767741008,
      "conviction": 1.0601896454541455
    },
    {
      "rule_str": "Limes -> Banana",
      "antecedents": "Limes",
      "consequents": "Banana",
      "support": 0.0117057297392375,
      "confidence": 0.2206199237526935,
      "lift": 1.3396127539410454,
      "leverage": 0.0029675852980173,
      "conviction": 1.071762927756501
    },
    {
      "rule_str": "Garlic -> Banana",
      "antecedents": "Garlic",
      "consequents": "Banana",
      "support": 0.0037113583395629,
      "confidence": 0.2197916666666666,
      "lift": 1.334583544715013,
      "leverage": 0.0009304471300249,
      "conviction": 1.0706251608274262
    },
    {
      "rule_str": "Organic D'Anjou Pears -> Banana",
      "antecedents": "Organic D'Anjou Pears",
      "consequents": "Banana",
      "support": 0.0035882327074447,
      "confidence": 0.2155309033280507,
      "lift": 1.3087120240796757,
      "leverage": 0.0008464280617908,
      "conviction": 1.064810170212747
    },
    {
      "rule_str": "Carrots -> Bag of Organic Bananas",
      "antecedents": "Carrots",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0039048414757486,
      "confidence": 0.1778133760512615,
      "lift": 1.3060897883661944,
      "leverage": 0.0009151224606162,
      "conviction": 1.0506838769529332
    },
    {
      "rule_str": "Organic Garnet Sweet Potato (Yam) -> Banana",
      "antecedents": "Organic Garnet Sweet Potato (Yam)",
      "consequents": "Banana",
      "support": 0.0048282837166351,
      "confidence": 0.2137850467289719,
      "lift": 1.2981111149374,
      "leverage": 0.0011088149738781,
      "conviction": 1.0624456694426996
    },
    {
      "rule_str": "Half & Half -> Banana",
      "antecedents": "Half & Half",
      "consequents": "Banana",
      "support": 0.0045380590123565,
      "confidence": 0.2128712871287128,
      "lift": 1.2925627311209174,
      "leverage": 0.0010271586103148,
      "conviction": 1.061212300726336
    },
    {
      "rule_str": "Organic Whole Milk -> Banana",
      "antecedents": "Organic Whole Milk",
      "consequents": "Banana",
      "support": 0.0091816542808143,
      "confidence": 0.2127139364303178,
      "lift": 1.2916072915630297,
      "leverage": 0.0020729500014329,
      "conviction": 1.0610002018408211
    },
    {
      "rule_str": "Carrots -> Banana",
      "antecedents": "Carrots",
      "consequents": "Banana",
      "support": 0.0046348005804494,
      "confidence": 0.2110532639167,
      "lift": 1.281523623499326,
      "leverage": 0.001018167616795,
      "conviction": 1.0587668775978092
    },
    {
      "rule_str": "Organic Blackberries -> Bag of Organic Bananas",
      "antecedents": "Organic Blackberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0043269865001539,
      "confidence": 0.1730566303200844,
      "lift": 1.2711501389241082,
      "leverage": 0.0009229932442382,
      "conviction": 1.0446401305130204
    },
    {
      "rule_str": "Jalapeno Peppers -> Banana",
      "antecedents": "Jalapeno Peppers",
      "consequents": "Banana",
      "support": 0.0034739017633349,
      "confidence": 0.2080042127435492,
      "lift": 1.2630096662397343,
      "leverage": 0.0007234067701512,
      "conviction": 1.054690802393652
    },
    {
      "rule_str": "Organic Kiwi -> Banana",
      "antecedents": "Organic Kiwi",
      "consequents": "Banana",
      "support": 0.0034035442592674,
      "confidence": 0.2058510638297872,
      "lift": 1.2499356623286315,
      "leverage": 0.0006805686999281,
      "conviction": 1.0518312552078557
    },
    {
      "rule_str": "Uncured Genoa Salami -> Banana",
      "antecedents": "Uncured Genoa Salami",
      "consequents": "Banana",
      "support": 0.0032364451871069,
      "confidence": 0.2058165548098434,
      "lift": 1.2497261222179454,
      "leverage": 0.0006467216232247,
      "conviction": 1.0517855508230776
    },
    {
      "rule_str": "Organic Baby Carrots -> Banana",
      "antecedents": "Organic Baby Carrots",
      "consequents": "Banana",
      "support": 0.0064992744382393,
      "confidence": 0.205448985265499,
      "lift": 1.247494225654895,
      "leverage": 0.0012894110941205,
      "conviction": 1.0512989812655604
    },
    {
      "rule_str": "Raspberries -> Bag of Organic Bananas",
      "antecedents": "Raspberries",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0048898465326942,
      "confidence": 0.1695638914303141,
      "lift": 1.2454949790105858,
      "leverage": 0.0009638198404158,
      "conviction": 1.040246468951336
    },
    {
      "rule_str": "Asparagus -> Banana",
      "antecedents": "Asparagus",
      "consequents": "Banana",
      "support": 0.0069741875906952,
      "confidence": 0.2050155118924508,
      "lift": 1.2448621584818502,
      "leverage": 0.0013718102164801,
      "conviction": 1.0507257498097164
    },
    {
      "rule_str": "Organic Zucchini -> Banana",
      "antecedents": "Organic Zucchini",
      "consequents": "Banana",
      "support": 0.0082582120399278,
      "confidence": 0.2046197428633689,
      "lift": 1.2424590335511785,
      "leverage": 0.0016115445708811,
      "conviction": 1.050202924775901
    },
    {
      "rule_str": "Organic Baby Spinach -> Banana",
      "antecedents": "Organic Baby Spinach",
      "consequents": "Banana",
      "support": 0.0175893760168858,
      "confidence": 0.2044153720359771,
      "lift": 1.2412180859420472,
      "leverage": 0.0034183159782818,
      "conviction": 1.0499331472649718
    },
    {
      "rule_str": "Small Hass Avocado -> Bag of Organic Bananas",
      "antecedents": "Small Hass Avocado",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0045908271404071,
      "confidence": 0.1682242990654205,
      "lift": 1.2356552923277548,
      "leverage": 0.0008755295417064,
      "conviction": 1.03857113000377
    },
    {
      "rule_str": "Organic Baby Arugula -> Banana",
      "antecedents": "Organic Baby Arugula",
      "consequents": "Banana",
      "support": 0.005224044677015,
      "confidence": 0.20321587410195,
      "lift": 1.2339346878544393,
      "leverage": 0.0009903970387445,
      "conviction": 1.0483525527223894
    },
    {
      "rule_str": "Honeycrisp Apple -> Bag of Organic Bananas",
      "antecedents": "Honeycrisp Apple",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0052152499890066,
      "confidence": 0.1669952126161644,
      "lift": 1.2266273030052313,
      "leverage": 0.0009635510611992,
      "conviction": 1.037038733405564
    },
    {
      "rule_str": "Unsweetened Almondmilk -> Banana",
      "antecedents": "Unsweetened Almondmilk",
      "consequents": "Banana",
      "support": 0.0038080999076557,
      "confidence": 0.1996311664361456,
      "lift": 1.2121682035470438,
      "leverage": 0.0006665392756308,
      "conviction": 1.0436571707002331
    },
    {
      "rule_str": "Organic Strawberries -> Banana",
      "antecedents": "Organic Strawberries",
      "consequents": "Banana",
      "support": 0.0191196517303548,
      "confidence": 0.199559390490178,
      "lift": 1.2117323772127362,
      "leverage": 0.0033408773987367,
      "conviction": 1.043563585392588
    },
    {
      "rule_str": "Lime Sparkling Water -> Banana",
      "antecedents": "Lime Sparkling Water",
      "consequents": "Banana",
      "support": 0.0034475176993096,
      "confidence": 0.1993896236012207,
      "lift": 1.2107015460630568,
      "leverage": 0.0005999804920431,
      "conviction": 1.043342301046864
    },
    {
      "rule_str": "Sparkling Water Grapefruit -> Banana",
      "antecedents": "Sparkling Water Grapefruit",
      "consequents": "Banana",
      "support": 0.0058484675256145,
      "confidence": 0.1979755879726109,
      "lift": 1.202115466753483,
      "leverage": 0.000983321300178,
      "conviction": 1.0415028019438544
    },
    {
      "rule_str": "Organic Granny Smith Apple -> Banana",
      "antecedents": "Organic Granny Smith Apple",
      "consequents": "Banana",
      "support": 0.0040455564838837,
      "confidence": 0.1968335472828412,
      "lift": 1.1951809512867384,
      "leverage": 0.0006606661210242,
      "conviction": 1.040021865365509
    },
    {
      "rule_str": "Organic Grade A Free Range Large Brown Eggs -> Banana",
      "antecedents": "Organic Grade A Free Range Large Brown Eggs",
      "consequents": "Banana",
      "support": 0.0030517567389296,
      "confidence": 0.1963780418788907,
      "lift": 1.1924151047655278,
      "leverage": 0.0004924493914017,
      "conviction": 1.0394323648234776
    },
    {
      "rule_str": "Half & Half -> Bag of Organic Bananas",
      "antecedents": "Half & Half",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0034299283232927,
      "confidence": 0.1608910891089109,
      "lift": 1.1817907808222683,
      "leverage": 0.0005276139890192,
      "conviction": 1.0294947633340377
    },
    {
      "rule_str": "Fresh Cauliflower -> Banana",
      "antecedents": "Fresh Cauliflower",
      "consequents": "Banana",
      "support": 0.0045028802603227,
      "confidence": 0.1931346661637118,
      "lift": 1.1727212013320971,
      "leverage": 0.0006631950434034,
      "conviction": 1.0352541338991044
    },
    {
      "rule_str": "Organic Red Bell Pepper -> Banana",
      "antecedents": "Organic Red Bell Pepper",
      "consequents": "Banana",
      "support": 0.0040279671078668,
      "confidence": 0.1913915587129126,
      "lift": 1.1621369851250525,
      "leverage": 0.0005619668347291,
      "conviction": 1.033022449066087
    },
    {
      "rule_str": "Raspberries -> Banana",
      "antecedents": "Raspberries",
      "consequents": "Banana",
      "support": 0.0054790906292599,
      "confidence": 0.1899969502897224,
      "lift": 1.153668868562047,
      "leverage": 0.0007298157042208,
      "conviction": 1.03124386093691
    },
    {
      "rule_str": "Organic Half & Half -> Banana",
      "antecedents": "Organic Half & Half",
      "consequents": "Banana",
      "support": 0.0043973440042214,
      "confidence": 0.1889644746787604,
      "lift": 1.1473996365133212,
      "leverage": 0.0005649007435769,
      "conviction": 1.029931052678665
    },
    {
      "rule_str": "100% Whole Wheat Bread -> Bag of Organic Bananas",
      "antecedents": "100% Whole Wheat Bread",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0031309089310056,
      "confidence": 0.154917319408181,
      "lift": 1.1379117443996911,
      "leverage": 0.0003794574705434,
      "conviction": 1.022217410755994
    },
    {
      "rule_str": "Limes -> Bag of Organic Bananas",
      "antecedents": "Limes",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0081966492238687,
      "confidence": 0.1544836731311122,
      "lift": 1.1347264892359892,
      "leverage": 0.0009731911468588,
      "conviction": 1.0216931384735524
    },
    {
      "rule_str": "Organic Blueberries -> Banana",
      "antecedents": "Organic Blueberries",
      "consequents": "Banana",
      "support": 0.0081350864078096,
      "confidence": 0.1862666129681836,
      "lift": 1.1310181153234713,
      "leverage": 0.0009423754356401,
      "conviction": 1.026516406560123
    },
    {
      "rule_str": "Green Bell Pepper -> Bag of Organic Bananas",
      "antecedents": "Green Bell Pepper",
      "consequents": "Bag of Organic Bananas",
      "support": 0.0034035442592674,
      "confidence": 0.1535105117017056,
      "lift": 1.1275783419278065,
      "leverage": 0.0003850894586471,
      "conviction": 1.0205185552462397
    },
    {
      "rule_str": "Apple Honeycrisp Organic -> Banana",
      "antecedents": "Apple Honeycrisp Organic",
      "consequents": "Banana",
      "support": 0.0035794380194362,
      "confidence": 0.180728241563055,
      "lift": 1.0973889088394304,
      "leverage": 0.000317660913249,
      "conviction": 1.0195770374747852
    },
    {
      "rule_str": "Organic Cucumber -> Banana",
      "antecedents": "Organic Cucumber",
      "consequents": "Banana",
      "support": 0.007308385735016,
      "confidence": 0.1801430739215261,
      "lift": 1.0938357481708387,
      "leverage": 0.00062695687585,
      "conviction": 1.0188493208800986
    },
    {
      "rule_str": "Organic Red Onion -> Banana",
      "antecedents": "Organic Red Onion",
      "consequents": "Banana",
      "support": 0.0057956993975638,
      "confidence": 0.1726034573074908,
      "lift": 1.0480549029770505,
      "leverage": 0.0002657415860972,
      "conviction": 1.0095650987803684
    },
    {
      "rule_str": "Organic Garlic -> Banana",
      "antecedents": "Organic Garlic",
      "consequents": "Banana",
      "support": 0.0062794072380282,
      "confidence": 0.1717171717171717,
      "lift": 1.0426733424170145,
      "leverage": 0.0002569963998725,
      "conviction": 1.0084848361345844
    },
    {
      "rule_str": "Organic Cilantro -> Banana",
      "antecedents": "Organic Cilantro",
      "consequents": "Banana",
      "support": 0.0052064553009981,
      "confidence": 0.1678956324446965,
      "lift": 1.0194688073867468,
      "leverage": 9.942773598210514e-05,
      "conviction": 1.003853248370772
    },
    {
      "rule_str": "Extra Virgin Olive Oil -> Banana",
      "antecedents": "Extra Virgin Olive Oil",
      "consequents": "Banana",
      "support": 0.0030253726749043,
      "confidence": 0.1663442940038684,
      "lift": 1.0100490200635408,
      "leverage": 3.009955963116477e-05,
      "conviction": 1.0019851916634928
    },
    {
      "rule_str": "Organic Large Extra Fancy Fuji Apple -> Banana",
      "antecedents": "Organic Large Extra Fancy Fuji Apple",
      "consequents": "Banana",
      "support": 0.0041950661800272,
      "confidence": 0.1649948114839156,
      "lift": 1.0018549097393263,
      "leverage": 7.767061915658034e-06,
      "conviction": 1.0003658466342666
    }
  ],
  "benchmarks": [
    {
      "min_support": 0.01,
      "min_support_pct": "1.00%",
      "fpgrowth_time_sec": 1.1876,
      "apriori_time_sec": 1.0922,
      "speedup_factor": 0.92,
      "frequent_itemsets": 151,
      "association_rules": 29,
      "exact_match": true
    },
    {
      "min_support": 0.007,
      "min_support_pct": "0.70%",
      "fpgrowth_time_sec": 1.5588,
      "apriori_time_sec": 1.2324,
      "speedup_factor": 0.79,
      "frequent_itemsets": 255,
      "association_rules": 65,
      "exact_match": true
    },
    {
      "min_support": 0.005,
      "min_support_pct": "0.50%",
      "fpgrowth_time_sec": 2.1453,
      "apriori_time_sec": 1.9718,
      "speedup_factor": 0.92,
      "frequent_itemsets": 475,
      "association_rules": 148,
      "exact_match": true
    },
    {
      "min_support": 0.003,
      "min_support_pct": "0.30%",
      "fpgrowth_time_sec": 2.829,
      "apriori_time_sec": 2.7858,
      "speedup_factor": 0.98,
      "frequent_itemsets": 950,
      "association_rules": 351,
      "exact_match": true
    }
  ],
  "top_products": [
    {
      "name": "Banana",
      "product_name": "Banana",
      "count": 18726,
      "purchase_count": 18726,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.841,
      "reorder_pct": 84.1
    },
    {
      "name": "Bag of Organic Bananas",
      "product_name": "Bag of Organic Bananas",
      "count": 15480,
      "purchase_count": 15480,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.825,
      "reorder_pct": 82.5
    },
    {
      "name": "Organic Strawberries",
      "product_name": "Organic Strawberries",
      "count": 10894,
      "purchase_count": 10894,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.778,
      "reorder_pct": 77.8
    },
    {
      "name": "Organic Baby Spinach",
      "product_name": "Organic Baby Spinach",
      "count": 9784,
      "purchase_count": 9784,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.761,
      "reorder_pct": 76.1
    },
    {
      "name": "Large Lemon",
      "product_name": "Large Lemon",
      "count": 8135,
      "purchase_count": 8135,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.692,
      "reorder_pct": 69.2
    },
    {
      "name": "Organic Avocado",
      "product_name": "Organic Avocado",
      "count": 7409,
      "purchase_count": 7409,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.743,
      "reorder_pct": 74.3
    },
    {
      "name": "Organic Hass Avocado",
      "product_name": "Organic Hass Avocado",
      "count": 7293,
      "purchase_count": 7293,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.738,
      "reorder_pct": 73.8
    },
    {
      "name": "Strawberries",
      "product_name": "Strawberries",
      "count": 6494,
      "purchase_count": 6494,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.685,
      "reorder_pct": 68.5
    },
    {
      "name": "Limes",
      "product_name": "Limes",
      "count": 6033,
      "purchase_count": 6033,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.662,
      "reorder_pct": 66.2
    },
    {
      "name": "Organic Raspberries",
      "product_name": "Organic Raspberries",
      "count": 5546,
      "purchase_count": 5546,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.759,
      "reorder_pct": 75.9
    },
    {
      "name": "Organic Blueberries",
      "product_name": "Organic Blueberries",
      "count": 4966,
      "purchase_count": 4966,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.712,
      "reorder_pct": 71.2
    },
    {
      "name": "Organic Whole Milk",
      "product_name": "Organic Whole Milk",
      "count": 4908,
      "purchase_count": 4908,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.835,
      "reorder_pct": 83.5
    },
    {
      "name": "Organic Cucumber",
      "product_name": "Organic Cucumber",
      "count": 4613,
      "purchase_count": 4613,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.718,
      "reorder_pct": 71.8
    },
    {
      "name": "Organic Zucchini",
      "product_name": "Organic Zucchini",
      "count": 4589,
      "purchase_count": 4589,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.704,
      "reorder_pct": 70.4
    },
    {
      "name": "Organic Yellow Onion",
      "product_name": "Organic Yellow Onion",
      "count": 4290,
      "purchase_count": 4290,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.691,
      "reorder_pct": 69.1
    },
    {
      "name": "Organic Garlic",
      "product_name": "Organic Garlic",
      "count": 4158,
      "purchase_count": 4158,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.683,
      "reorder_pct": 68.3
    },
    {
      "name": "Seedless Red Grapes",
      "product_name": "Seedless Red Grapes",
      "count": 4059,
      "purchase_count": 4059,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.655,
      "reorder_pct": 65.5
    },
    {
      "name": "Asparagus",
      "product_name": "Asparagus",
      "count": 3868,
      "purchase_count": 3868,
      "is_organic": false,
      "organic": false,
      "reorder_rate": 0.648,
      "reorder_pct": 64.8
    },
    {
      "name": "Organic Grape Tomatoes",
      "product_name": "Organic Grape Tomatoes",
      "count": 3823,
      "purchase_count": 3823,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.697,
      "reorder_pct": 69.7
    },
    {
      "name": "Organic Red Onion",
      "product_name": "Organic Red Onion",
      "count": 3818,
      "purchase_count": 3818,
      "is_organic": true,
      "organic": true,
      "reorder_rate": 0.687,
      "reorder_pct": 68.7
    }
  ],
  "departments": [
    {
      "department": "produce",
      "name": "produce",
      "count": 409087,
      "item_count": 409087,
      "pct": 29.5
    },
    {
      "department": "dairy eggs",
      "name": "dairy eggs",
      "count": 217051,
      "item_count": 217051,
      "pct": 15.7
    },
    {
      "department": "snacks",
      "name": "snacks",
      "count": 118862,
      "item_count": 118862,
      "pct": 8.6
    },
    {
      "department": "beverages",
      "name": "beverages",
      "count": 114046,
      "item_count": 114046,
      "pct": 8.2
    },
    {
      "department": "frozen",
      "name": "frozen",
      "count": 100426,
      "item_count": 100426,
      "pct": 7.3
    },
    {
      "department": "pantry",
      "name": "pantry",
      "count": 81242,
      "item_count": 81242,
      "pct": 5.9
    },
    {
      "department": "bakery",
      "name": "bakery",
      "count": 48394,
      "item_count": 48394,
      "pct": 3.5
    },
    {
      "department": "canned goods",
      "name": "canned goods",
      "count": 46799,
      "item_count": 46799,
      "pct": 3.4
    },
    {
      "department": "deli",
      "name": "deli",
      "count": 44291,
      "item_count": 44291,
      "pct": 3.2
    },
    {
      "department": "dry goods pasta",
      "name": "dry goods pasta",
      "count": 38713,
      "item_count": 38713,
      "pct": 2.8
    },
    {
      "department": "household",
      "name": "household",
      "count": 35986,
      "item_count": 35986,
      "pct": 2.6
    },
    {
      "department": "meat seafood",
      "name": "meat seafood",
      "count": 30307,
      "item_count": 30307,
      "pct": 2.2
    },
    {
      "department": "breakfast",
      "name": "breakfast",
      "count": 29500,
      "item_count": 29500,
      "pct": 2.1
    },
    {
      "department": "personal care",
      "name": "personal care",
      "count": 21570,
      "item_count": 21570,
      "pct": 1.6
    },
    {
      "department": "babies",
      "name": "babies",
      "count": 14941,
      "item_count": 14941,
      "pct": 1.1
    },
    {
      "department": "international",
      "name": "international",
      "count": 11983,
      "item_count": 11983,
      "pct": 0.9
    },
    {
      "department": "alcohol",
      "name": "alcohol",
      "count": 5598,
      "item_count": 5598,
      "pct": 0.4
    },
    {
      "department": "pets",
      "name": "pets",
      "count": 4497,
      "item_count": 4497,
      "pct": 0.3
    },
    {
      "department": "missing",
      "name": "missing",
      "count": 4661,
      "item_count": 4661,
      "pct": 0.3
    },
    {
      "department": "other",
      "name": "other",
      "count": 1795,
      "item_count": 1795,
      "pct": 0.1
    },
    {
      "department": "bulk",
      "name": "bulk",
      "count": 1359,
      "item_count": 1359,
      "pct": 0.1
    }
  ],
  "aisles": [
    {
      "aisle": "fresh vegetables",
      "count": 150609,
      "pct": 10.9
    },
    {
      "aisle": "fresh fruits",
      "count": 150473,
      "pct": 10.9
    },
    {
      "aisle": "packaged vegetables fruits",
      "count": 78493,
      "pct": 5.7
    },
    {
      "aisle": "yogurt",
      "count": 55240,
      "pct": 4.0
    },
    {
      "aisle": "packaged cheese",
      "count": 41699,
      "pct": 3.0
    },
    {
      "aisle": "water seltzer sparkling water",
      "count": 36617,
      "pct": 2.6
    },
    {
      "aisle": "milk",
      "count": 32644,
      "pct": 2.4
    },
    {
      "aisle": "chips pretzels",
      "count": 31269,
      "pct": 2.3
    },
    {
      "aisle": "soy lactosefree",
      "count": 26240,
      "pct": 1.9
    },
    {
      "aisle": "bread",
      "count": 23635,
      "pct": 1.7
    },
    {
      "aisle": "refrigerated",
      "count": 23228,
      "pct": 1.7
    },
    {
      "aisle": "ice cream ice",
      "count": 22676,
      "pct": 1.6
    },
    {
      "aisle": "frozen produce",
      "count": 22453,
      "pct": 1.6
    },
    {
      "aisle": "eggs",
      "count": 19875,
      "pct": 1.4
    },
    {
      "aisle": "crackers",
      "count": 19592,
      "pct": 1.4
    }
  ],
  "product_pairs": [
    {
      "item1": "Bag of Organic Bananas",
      "item2": "Organic Strawberries",
      "count": 3074,
      "lift": 2.07
    },
    {
      "item1": "Bag of Organic Bananas",
      "item2": "Organic Hass Avocado",
      "count": 2420,
      "lift": 2.77
    },
    {
      "item1": "Bag of Organic Bananas",
      "item2": "Organic Baby Spinach",
      "count": 2236,
      "lift": 1.98
    },
    {
      "item1": "Banana",
      "item2": "Organic Avocado",
      "count": 2216,
      "lift": 2.06
    },
    {
      "item1": "Organic Strawberries",
      "item2": "Banana",
      "count": 2174,
      "lift": 1.38
    },
    {
      "item1": "Banana",
      "item2": "Large Lemon",
      "count": 2158,
      "lift": 1.83
    },
    {
      "item1": "Organic Baby Spinach",
      "item2": "Banana",
      "count": 2000,
      "lift": 1.41
    },
    {
      "item1": "Strawberries",
      "item2": "Banana",
      "count": 1948,
      "lift": 2.07
    },
    {
      "item1": "Bag of Organic Bananas",
      "item2": "Organic Raspberries",
      "count": 1780,
      "lift": 2.68
    },
    {
      "item1": "Organic Strawberries",
      "item2": "Organic Raspberries",
      "count": 1670,
      "lift": 3.57
    },
    {
      "item1": "Organic Strawberries",
      "item2": "Organic Baby Spinach",
      "count": 1639,
      "lift": 1.99
    },
    {
      "item1": "Limes",
      "item2": "Large Lemon",
      "count": 1595,
      "lift": 5.66
    }
  ],
  "dow_counts": [
    600905,
    587478,
    467260,
    436972,
    426339,
    453379,
    448750
  ],
  "hour_counts": [
    21875,
    11586,
    6939,
    5143,
    5326,
    8879,
    29058,
    89242,
    171383,
    245455,
    276262,
    273611,
    261886,
    266092,
    268905,
    266214,
    253501,
    208845,
    163657,
    125810,
    97621,
    79568,
    63467,
    40216
  ],
  "days_since_prior": [
    {
      "days": 0,
      "count": 67755
    },
    {
      "days": 1,
      "count": 145247
    },
    {
      "days": 2,
      "count": 193206
    },
    {
      "days": 3,
      "count": 217005
    },
    {
      "days": 4,
      "count": 221396
    },
    {
      "days": 5,
      "count": 214503
    },
    {
      "days": 6,
      "count": 240019
    },
    {
      "days": 7,
      "count": 346386
    },
    {
      "days": 8,
      "count": 190007
    },
    {
      "days": 9,
      "count": 139493
    },
    {
      "days": 10,
      "count": 120801
    },
    {
      "days": 11,
      "count": 107387
    },
    {
      "days": 12,
      "count": 100774
    },
    {
      "days": 13,
      "count": 107996
    },
    {
      "days": 14,
      "count": 147572
    },
    {
      "days": 15,
      "count": 99945
    },
    {
      "days": 20,
      "count": 60995
    },
    {
      "days": 21,
      "count": 84380
    },
    {
      "days": 25,
      "count": 43500
    },
    {
      "days": 30,
      "count": 369523
    }
  ],
  "scatter_points": [
    {
      "x": 0.348,
      "y": 21.24,
      "lift": 20.72,
      "rule": "Orange Bell Pepper -> Yellow Bell Pepper"
    },
    {
      "x": 0.348,
      "y": 33.96,
      "lift": 20.72,
      "rule": "Yellow Bell Pepper -> Orange Bell Pepper"
    },
    {
      "x": 0.444,
      "y": 25.69,
      "lift": 8.7,
      "rule": "Lime Sparkling Water -> Sparkling Water Grapefruit"
    },
    {
      "x": 0.444,
      "y": 15.03,
      "lift": 8.7,
      "rule": "Sparkling Water Grapefruit -> Lime Sparkling Water"
    },
    {
      "x": 0.425,
      "y": 19.16,
      "lift": 7.5,
      "rule": "Green Bell Pepper -> Red Peppers"
    },
    {
      "x": 0.425,
      "y": 16.63,
      "lift": 7.5,
      "rule": "Red Peppers -> Green Bell Pepper"
    },
    {
      "x": 0.39,
      "y": 22.12,
      "lift": 6.05,
      "rule": "Organic Ginger Root -> Organic Garlic"
    },
    {
      "x": 0.433,
      "y": 20.5,
      "lift": 5.61,
      "rule": "Organic Italian Parsley Bunch -> Organic Garlic"
    },
    {
      "x": 0.491,
      "y": 29.06,
      "lift": 5.48,
      "rule": "Bunched Cilantro -> Limes"
    },
    {
      "x": 0.342,
      "y": 28.84,
      "lift": 5.43,
      "rule": "Large Lemon, Organic Avocado -> Limes"
    },
    {
      "x": 0.481,
      "y": 28.8,
      "lift": 5.43,
      "rule": "Jalapeno Peppers -> Limes"
    },
    {
      "x": 0.748,
      "y": 20.44,
      "lift": 5.42,
      "rule": "Organic Garlic -> Organic Yellow Onion"
    },
    {
      "x": 0.748,
      "y": 19.81,
      "lift": 5.42,
      "rule": "Organic Yellow Onion -> Organic Garlic"
    },
    {
      "x": 0.886,
      "y": 16.69,
      "lift": 5.38,
      "rule": "Limes -> Organic Cilantro"
    },
    {
      "x": 0.886,
      "y": 28.56,
      "lift": 5.38,
      "rule": "Organic Cilantro -> Limes"
    },
    {
      "x": 0.342,
      "y": 37.51,
      "lift": 5.24,
      "rule": "Limes, Organic Avocado -> Large Lemon"
    },
    {
      "x": 0.31,
      "y": 33.08,
      "lift": 5.16,
      "rule": "Bag of Organic Bananas, Organic Lemon -> Organic Hass Avocado"
    },
    {
      "x": 0.335,
      "y": 24.76,
      "lift": 5.08,
      "rule": "Organic Hass Avocado, Organic Strawberries -> Organic Raspberries"
    },
    {
      "x": 0.328,
      "y": 15.54,
      "lift": 5.01,
      "rule": "Organic Italian Parsley Bunch -> Organic Cilantro"
    },
    {
      "x": 0.502,
      "y": 16.19,
      "lift": 4.82,
      "rule": "Organic Cilantro -> Organic Red Onion"
    },
    {
      "x": 0.398,
      "y": 33.96,
      "lift": 4.75,
      "rule": "Banana, Limes -> Large Lemon"
    },
    {
      "x": 0.467,
      "y": 29.83,
      "lift": 4.65,
      "rule": "Bag of Organic Bananas, Organic Raspberries -> Organic Hass Avocado"
    },
    {
      "x": 0.322,
      "y": 28.86,
      "lift": 4.5,
      "rule": "Bag of Organic Bananas, Organic Cucumber -> Organic Hass Avocado"
    },
    {
      "x": 0.467,
      "y": 21.94,
      "lift": 4.5,
      "rule": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Raspberries"
    },
    {
      "x": 0.571,
      "y": 21.11,
      "lift": 4.33,
      "rule": "Bag of Organic Bananas, Organic Strawberries -> Organic Raspberries"
    },
    {
      "x": 0.331,
      "y": 15.71,
      "lift": 4.16,
      "rule": "Organic Red Bell Pepper -> Organic Yellow Onion"
    },
    {
      "x": 0.328,
      "y": 15.54,
      "lift": 4.12,
      "rule": "Organic Italian Parsley Bunch -> Organic Yellow Onion"
    },
    {
      "x": 0.31,
      "y": 26.45,
      "lift": 4.06,
      "rule": "Banana, Limes -> Organic Avocado"
    },
    {
      "x": 0.353,
      "y": 15.29,
      "lift": 4.05,
      "rule": "Organic Small Bunch Celery -> Organic Yellow Onion"
    },
    {
      "x": 0.505,
      "y": 17.51,
      "lift": 4.01,
      "rule": "Raspberries -> Organic Blueberries"
    },
    {
      "x": 0.398,
      "y": 20.95,
      "lift": 3.95,
      "rule": "Banana, Large Lemon -> Limes"
    },
    {
      "x": 0.335,
      "y": 37.39,
      "lift": 3.9,
      "rule": "Organic Hass Avocado, Organic Raspberries -> Organic Strawberries"
    },
    {
      "x": 0.467,
      "y": 52.11,
      "lift": 3.83,
      "rule": "Organic Hass Avocado, Organic Raspberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.571,
      "y": 36.46,
      "lift": 3.81,
      "rule": "Bag of Organic Bananas, Organic Raspberries -> Organic Strawberries"
    },
    {
      "x": 0.355,
      "y": 15.4,
      "lift": 3.8,
      "rule": "Organic Small Bunch Celery -> Organic Cucumber"
    },
    {
      "x": 0.324,
      "y": 15.38,
      "lift": 3.79,
      "rule": "Organic Red Bell Pepper -> Organic Cucumber"
    },
    {
      "x": 0.342,
      "y": 24.39,
      "lift": 3.74,
      "rule": "Large Lemon, Limes -> Organic Avocado"
    },
    {
      "x": 0.322,
      "y": 15.12,
      "lift": 3.73,
      "rule": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Cucumber"
    },
    {
      "x": 0.426,
      "y": 24.2,
      "lift": 3.71,
      "rule": "Banana, Organic Baby Spinach -> Organic Avocado"
    },
    {
      "x": 1.403,
      "y": 19.61,
      "lift": 3.7,
      "rule": "Large Lemon -> Limes"
    },
    {
      "x": 1.403,
      "y": 26.44,
      "lift": 3.7,
      "rule": "Limes -> Large Lemon"
    },
    {
      "x": 0.624,
      "y": 23.1,
      "lift": 3.6,
      "rule": "Bag of Organic Bananas, Organic Strawberries -> Organic Hass Avocado"
    },
    {
      "x": 0.335,
      "y": 22.81,
      "lift": 3.56,
      "rule": "Organic Raspberries, Organic Strawberries -> Organic Hass Avocado"
    },
    {
      "x": 0.432,
      "y": 17.27,
      "lift": 3.54,
      "rule": "Organic Blackberries -> Organic Raspberries"
    },
    {
      "x": 0.579,
      "y": 20.07,
      "lift": 3.51,
      "rule": "Raspberries -> Strawberries"
    },
    {
      "x": 0.373,
      "y": 33.44,
      "lift": 3.49,
      "rule": "Bag of Organic Bananas, Organic Cucumber -> Organic Strawberries"
    },
    {
      "x": 0.687,
      "y": 22.28,
      "lift": 3.47,
      "rule": "Organic Lemon -> Organic Hass Avocado"
    },
    {
      "x": 0.437,
      "y": 22.23,
      "lift": 3.47,
      "rule": "Bag of Organic Bananas, Organic Baby Spinach -> Organic Hass Avocado"
    },
    {
      "x": 0.329,
      "y": 32.89,
      "lift": 3.43,
      "rule": "Bag of Organic Bananas, Organic Blueberries -> Organic Strawberries"
    },
    {
      "x": 0.42,
      "y": 22.1,
      "lift": 3.39,
      "rule": "Banana, Large Lemon -> Organic Avocado"
    },
    {
      "x": 0.624,
      "y": 46.13,
      "lift": 3.39,
      "rule": "Organic Hass Avocado, Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.31,
      "y": 45.2,
      "lift": 3.32,
      "rule": "Organic Hass Avocado, Organic Lemon -> Bag of Organic Bananas"
    },
    {
      "x": 0.58,
      "y": 17.29,
      "lift": 3.26,
      "rule": "Organic Red Onion -> Limes"
    },
    {
      "x": 0.322,
      "y": 44.04,
      "lift": 3.24,
      "rule": "Organic Cucumber, Organic Hass Avocado -> Bag of Organic Bananas"
    },
    {
      "x": 0.39,
      "y": 23.07,
      "lift": 3.22,
      "rule": "Garlic -> Large Lemon"
    },
    {
      "x": 1.469,
      "y": 30.11,
      "lift": 3.14,
      "rule": "Organic Raspberries -> Organic Strawberries"
    },
    {
      "x": 1.469,
      "y": 15.33,
      "lift": 3.14,
      "rule": "Organic Strawberries -> Organic Raspberries"
    },
    {
      "x": 0.382,
      "y": 15.01,
      "lift": 3.08,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Organic Raspberries"
    },
    {
      "x": 0.624,
      "y": 29.34,
      "lift": 3.06,
      "rule": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Strawberries"
    },
    {
      "x": 0.373,
      "y": 41.09,
      "lift": 3.02,
      "rule": "Organic Cucumber, Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.432,
      "y": 19.35,
      "lift": 3.02,
      "rule": "Organic Tomato Cluster -> Organic Hass Avocado"
    },
    {
      "x": 0.42,
      "y": 21.53,
      "lift": 3.01,
      "rule": "Banana, Organic Avocado -> Large Lemon"
    },
    {
      "x": 0.35,
      "y": 17.13,
      "lift": 3.0,
      "rule": "Blueberries -> Strawberries"
    },
    {
      "x": 0.31,
      "y": 15.88,
      "lift": 2.99,
      "rule": "Banana, Organic Avocado -> Limes"
    },
    {
      "x": 0.361,
      "y": 21.41,
      "lift": 2.99,
      "rule": "Bunched Cilantro -> Large Lemon"
    },
    {
      "x": 0.575,
      "y": 15.73,
      "lift": 2.96,
      "rule": "Organic Garlic -> Limes"
    },
    {
      "x": 0.326,
      "y": 18.74,
      "lift": 2.92,
      "rule": "Organic Navel Orange -> Organic Hass Avocado"
    },
    {
      "x": 0.437,
      "y": 39.7,
      "lift": 2.92,
      "rule": "Organic Baby Spinach, Organic Hass Avocado -> Bag of Organic Bananas"
    },
    {
      "x": 0.31,
      "y": 18.59,
      "lift": 2.9,
      "rule": "Organic D'Anjou Pears -> Organic Hass Avocado"
    },
    {
      "x": 0.306,
      "y": 18.51,
      "lift": 2.89,
      "rule": "Organic Kiwi -> Organic Hass Avocado"
    },
    {
      "x": 0.455,
      "y": 27.5,
      "lift": 2.87,
      "rule": "Organic Kiwi -> Organic Strawberries"
    },
    {
      "x": 0.896,
      "y": 18.37,
      "lift": 2.86,
      "rule": "Organic Raspberries -> Organic Hass Avocado"
    },
    {
      "x": 0.571,
      "y": 38.86,
      "lift": 2.85,
      "rule": "Organic Raspberries, Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.339,
      "y": 20.33,
      "lift": 2.84,
      "rule": "Jalapeno Peppers -> Large Lemon"
    },
    {
      "x": 0.731,
      "y": 18.01,
      "lift": 2.81,
      "rule": "Organic Cucumber -> Organic Hass Avocado"
    },
    {
      "x": 0.377,
      "y": 17.93,
      "lift": 2.8,
      "rule": "Organic Red Bell Pepper -> Organic Hass Avocado"
    },
    {
      "x": 0.543,
      "y": 24.03,
      "lift": 2.79,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Organic Baby Spinach"
    },
    {
      "x": 0.353,
      "y": 17.81,
      "lift": 2.78,
      "rule": "Apple Honeycrisp Organic -> Organic Hass Avocado"
    },
    {
      "x": 0.657,
      "y": 19.86,
      "lift": 2.78,
      "rule": "Yellow Onions -> Large Lemon"
    },
    {
      "x": 0.602,
      "y": 17.89,
      "lift": 2.75,
      "rule": "Organic Grape Tomatoes -> Organic Avocado"
    },
    {
      "x": 0.516,
      "y": 26.25,
      "lift": 2.74,
      "rule": "Bag of Organic Bananas, Organic Baby Spinach -> Organic Strawberries"
    },
    {
      "x": 0.412,
      "y": 19.5,
      "lift": 2.73,
      "rule": "Organic Italian Parsley Bunch -> Large Lemon"
    },
    {
      "x": 0.413,
      "y": 23.42,
      "lift": 2.72,
      "rule": "Organic Ginger Root -> Organic Baby Spinach"
    },
    {
      "x": 0.453,
      "y": 25.84,
      "lift": 2.7,
      "rule": "Organic Whole String Cheese -> Organic Strawberries"
    },
    {
      "x": 0.638,
      "y": 36.62,
      "lift": 2.69,
      "rule": "Organic Navel Orange -> Bag of Organic Bananas"
    },
    {
      "x": 0.333,
      "y": 17.43,
      "lift": 2.68,
      "rule": "Banana, Organic Strawberries -> Organic Avocado"
    },
    {
      "x": 0.436,
      "y": 17.16,
      "lift": 2.67,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Organic Hass Avocado"
    },
    {
      "x": 1.116,
      "y": 25.55,
      "lift": 2.67,
      "rule": "Organic Blueberries -> Organic Strawberries"
    },
    {
      "x": 0.643,
      "y": 17.04,
      "lift": 2.66,
      "rule": "Organic Yellow Onion -> Organic Hass Avocado"
    },
    {
      "x": 0.912,
      "y": 17.19,
      "lift": 2.64,
      "rule": "Limes -> Organic Avocado"
    },
    {
      "x": 0.42,
      "y": 25.25,
      "lift": 2.64,
      "rule": "Organic D'Anjou Pears -> Organic Strawberries"
    },
    {
      "x": 0.516,
      "y": 35.81,
      "lift": 2.63,
      "rule": "Organic Baby Spinach, Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.686,
      "y": 18.76,
      "lift": 2.62,
      "rule": "Organic Garlic -> Large Lemon"
    },
    {
      "x": 0.326,
      "y": 18.55,
      "lift": 2.59,
      "rule": "Banana, Organic Baby Spinach -> Large Lemon"
    },
    {
      "x": 0.309,
      "y": 16.81,
      "lift": 2.58,
      "rule": "Boneless Skinless Chicken Breasts -> Organic Avocado"
    },
    {
      "x": 0.746,
      "y": 22.18,
      "lift": 2.58,
      "rule": "Organic Grape Tomatoes -> Organic Baby Spinach"
    },
    {
      "x": 0.329,
      "y": 16.74,
      "lift": 2.57,
      "rule": "Red Vine Tomato -> Organic Avocado"
    },
    {
      "x": 0.354,
      "y": 16.7,
      "lift": 2.56,
      "rule": "Cucumber Kirby -> Organic Avocado"
    },
    {
      "x": 0.575,
      "y": 34.79,
      "lift": 2.56,
      "rule": "Organic Kiwi -> Bag of Organic Bananas"
    },
    {
      "x": 0.422,
      "y": 18.27,
      "lift": 2.55,
      "rule": "Michigan Organic Kale -> Large Lemon"
    },
    {
      "x": 1.186,
      "y": 16.58,
      "lift": 2.54,
      "rule": "Large Lemon -> Organic Avocado"
    },
    {
      "x": 1.186,
      "y": 18.21,
      "lift": 2.54,
      "rule": "Organic Avocado -> Large Lemon"
    },
    {
      "x": 0.426,
      "y": 21.84,
      "lift": 2.54,
      "rule": "Banana, Organic Avocado -> Organic Baby Spinach"
    },
    {
      "x": 0.617,
      "y": 18.15,
      "lift": 2.54,
      "rule": "Asparagus -> Large Lemon"
    },
    {
      "x": 0.463,
      "y": 17.94,
      "lift": 2.51,
      "rule": "Broccoli Crown -> Large Lemon"
    },
    {
      "x": 0.418,
      "y": 16.2,
      "lift": 2.49,
      "rule": "Broccoli Crown -> Organic Avocado"
    },
    {
      "x": 0.413,
      "y": 16.18,
      "lift": 2.48,
      "rule": "Red Peppers -> Organic Avocado"
    },
    {
      "x": 0.367,
      "y": 15.9,
      "lift": 2.48,
      "rule": "Organic Small Bunch Celery -> Organic Hass Avocado"
    },
    {
      "x": 0.856,
      "y": 33.66,
      "lift": 2.47,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Bag of Organic Bananas"
    },
    {
      "x": 0.329,
      "y": 21.24,
      "lift": 2.47,
      "rule": "Organic Lacinato (Dinosaur) Kale -> Organic Baby Spinach"
    },
    {
      "x": 0.578,
      "y": 15.8,
      "lift": 2.46,
      "rule": "Organic Garlic -> Organic Hass Avocado"
    },
    {
      "x": 0.373,
      "y": 17.57,
      "lift": 2.46,
      "rule": "Cucumber Kirby -> Large Lemon"
    },
    {
      "x": 0.321,
      "y": 15.65,
      "lift": 2.44,
      "rule": "Organic Banana -> Organic Hass Avocado"
    },
    {
      "x": 2.128,
      "y": 33.18,
      "lift": 2.44,
      "rule": "Organic Hass Avocado -> Bag of Organic Bananas"
    },
    {
      "x": 2.128,
      "y": 15.63,
      "lift": 2.44,
      "rule": "Bag of Organic Bananas -> Organic Hass Avocado"
    },
    {
      "x": 0.585,
      "y": 17.42,
      "lift": 2.43,
      "rule": "Organic Red Onion -> Large Lemon"
    },
    {
      "x": 0.491,
      "y": 23.32,
      "lift": 2.43,
      "rule": "Organic Red Bell Pepper -> Organic Strawberries"
    },
    {
      "x": 0.495,
      "y": 15.85,
      "lift": 2.43,
      "rule": "Honeycrisp Apple -> Organic Avocado"
    },
    {
      "x": 0.352,
      "y": 15.58,
      "lift": 2.43,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Organic Hass Avocado"
    },
    {
      "x": 0.303,
      "y": 20.87,
      "lift": 2.43,
      "rule": "Organic Broccoli -> Organic Baby Spinach"
    },
    {
      "x": 0.398,
      "y": 20.77,
      "lift": 2.41,
      "rule": "Organic Unsweetened Almond Milk -> Organic Baby Spinach"
    },
    {
      "x": 0.363,
      "y": 15.72,
      "lift": 2.41,
      "rule": "Michigan Organic Kale -> Organic Avocado"
    },
    {
      "x": 0.835,
      "y": 20.7,
      "lift": 2.41,
      "rule": "Organic Zucchini -> Organic Baby Spinach"
    },
    {
      "x": 0.335,
      "y": 23.05,
      "lift": 2.41,
      "rule": "Organic Broccoli -> Organic Strawberries"
    },
    {
      "x": 0.44,
      "y": 17.11,
      "lift": 2.39,
      "rule": "Organic Baby Arugula -> Large Lemon"
    },
    {
      "x": 0.352,
      "y": 15.58,
      "lift": 2.39,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Organic Avocado"
    },
    {
      "x": 0.437,
      "y": 20.54,
      "lift": 2.39,
      "rule": "Bag of Organic Bananas, Organic Hass Avocado -> Organic Baby Spinach"
    },
    {
      "x": 0.312,
      "y": 15.19,
      "lift": 2.37,
      "rule": "Organic Granny Smith Apple -> Organic Hass Avocado"
    },
    {
      "x": 1.565,
      "y": 32.1,
      "lift": 2.36,
      "rule": "Organic Raspberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.468,
      "y": 20.25,
      "lift": 2.35,
      "rule": "Michigan Organic Kale -> Organic Baby Spinach"
    },
    {
      "x": 0.821,
      "y": 20.23,
      "lift": 2.35,
      "rule": "Organic Cucumber -> Organic Baby Spinach"
    },
    {
      "x": 0.572,
      "y": 22.48,
      "lift": 2.35,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Organic Strawberries"
    },
    {
      "x": 0.41,
      "y": 38.61,
      "lift": 2.34,
      "rule": "Bartlett Pears -> Banana"
    },
    {
      "x": 0.531,
      "y": 31.91,
      "lift": 2.34,
      "rule": "Organic D'Anjou Pears -> Bag of Organic Bananas"
    },
    {
      "x": 0.56,
      "y": 22.41,
      "lift": 2.34,
      "rule": "Organic Blackberries -> Organic Strawberries"
    },
    {
      "x": 0.339,
      "y": 31.82,
      "lift": 2.34,
      "rule": "Organic Whole Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.908,
      "y": 22.37,
      "lift": 2.34,
      "rule": "Organic Cucumber -> Organic Strawberries"
    },
    {
      "x": 0.462,
      "y": 31.76,
      "lift": 2.33,
      "rule": "Organic Broccoli -> Bag of Organic Bananas"
    },
    {
      "x": 0.324,
      "y": 38.37,
      "lift": 2.33,
      "rule": "Gala Apples -> Banana"
    },
    {
      "x": 0.723,
      "y": 19.77,
      "lift": 2.3,
      "rule": "Organic Garlic -> Organic Baby Spinach"
    },
    {
      "x": 1.064,
      "y": 37.15,
      "lift": 2.26,
      "rule": "Organic Fuji Apple -> Banana"
    },
    {
      "x": 0.652,
      "y": 19.41,
      "lift": 2.26,
      "rule": "Organic Red Onion -> Organic Baby Spinach"
    },
    {
      "x": 0.499,
      "y": 19.4,
      "lift": 2.25,
      "rule": "Organic Baby Arugula -> Organic Baby Spinach"
    },
    {
      "x": 0.442,
      "y": 21.52,
      "lift": 2.25,
      "rule": "Organic Granny Smith Apple -> Organic Strawberries"
    },
    {
      "x": 0.647,
      "y": 16.04,
      "lift": 2.24,
      "rule": "Organic Zucchini -> Large Lemon"
    },
    {
      "x": 0.604,
      "y": 30.51,
      "lift": 2.24,
      "rule": "Apple Honeycrisp Organic -> Bag of Organic Bananas"
    },
    {
      "x": 0.425,
      "y": 21.45,
      "lift": 2.24,
      "rule": "Apple Honeycrisp Organic -> Organic Strawberries"
    },
    {
      "x": 0.938,
      "y": 30.44,
      "lift": 2.24,
      "rule": "Organic Lemon -> Bag of Organic Bananas"
    },
    {
      "x": 0.442,
      "y": 19.18,
      "lift": 2.23,
      "rule": "Organic Small Bunch Celery -> Organic Baby Spinach"
    },
    {
      "x": 0.516,
      "y": 19.1,
      "lift": 2.22,
      "rule": "Bag of Organic Bananas, Organic Strawberries -> Organic Baby Spinach"
    },
    {
      "x": 0.33,
      "y": 21.22,
      "lift": 2.22,
      "rule": "Organic Grade A Free Range Large Brown Eggs -> Organic Strawberries"
    },
    {
      "x": 0.368,
      "y": 21.16,
      "lift": 2.21,
      "rule": "Organic Navel Orange -> Organic Strawberries"
    },
    {
      "x": 1.354,
      "y": 21.1,
      "lift": 2.2,
      "rule": "Organic Hass Avocado -> Organic Strawberries"
    },
    {
      "x": 1.233,
      "y": 18.92,
      "lift": 2.2,
      "rule": "Organic Avocado -> Organic Baby Spinach"
    },
    {
      "x": 0.329,
      "y": 29.47,
      "lift": 2.16,
      "rule": "Organic Blueberries, Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.516,
      "y": 29.45,
      "lift": 2.16,
      "rule": "Organic Whole String Cheese -> Bag of Organic Bananas"
    },
    {
      "x": 0.392,
      "y": 18.58,
      "lift": 2.16,
      "rule": "Organic Italian Parsley Bunch -> Organic Baby Spinach"
    },
    {
      "x": 0.303,
      "y": 15.4,
      "lift": 2.15,
      "rule": "Red Vine Tomato -> Large Lemon"
    },
    {
      "x": 0.574,
      "y": 18.52,
      "lift": 2.15,
      "rule": "Organic Cilantro -> Organic Baby Spinach"
    },
    {
      "x": 0.42,
      "y": 35.36,
      "lift": 2.15,
      "rule": "Large Lemon, Organic Avocado -> Banana"
    },
    {
      "x": 0.43,
      "y": 18.45,
      "lift": 2.14,
      "rule": "Fresh Cauliflower -> Organic Baby Spinach"
    },
    {
      "x": 0.391,
      "y": 15.32,
      "lift": 2.14,
      "rule": "Red Peppers -> Large Lemon"
    },
    {
      "x": 0.477,
      "y": 15.26,
      "lift": 2.13,
      "rule": "Honeycrisp Apple -> Large Lemon"
    },
    {
      "x": 0.505,
      "y": 20.43,
      "lift": 2.13,
      "rule": "Organic Gala Apples -> Organic Strawberries"
    },
    {
      "x": 0.712,
      "y": 28.84,
      "lift": 2.12,
      "rule": "Organic Gala Apples -> Bag of Organic Bananas"
    },
    {
      "x": 0.333,
      "y": 34.83,
      "lift": 2.12,
      "rule": "Organic Avocado, Organic Strawberries -> Banana"
    },
    {
      "x": 0.341,
      "y": 15.11,
      "lift": 2.11,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Large Lemon"
    },
    {
      "x": 0.507,
      "y": 15.09,
      "lift": 2.11,
      "rule": "Organic Grape Tomatoes -> Large Lemon"
    },
    {
      "x": 1.083,
      "y": 34.67,
      "lift": 2.1,
      "rule": "Honeycrisp Apple -> Banana"
    },
    {
      "x": 0.331,
      "y": 15.06,
      "lift": 2.1,
      "rule": "Carrots -> Large Lemon"
    },
    {
      "x": 0.615,
      "y": 18.07,
      "lift": 2.1,
      "rule": "Asparagus -> Organic Baby Spinach"
    },
    {
      "x": 0.426,
      "y": 34.52,
      "lift": 2.1,
      "rule": "Organic Avocado, Organic Baby Spinach -> Banana"
    },
    {
      "x": 0.379,
      "y": 18.01,
      "lift": 2.09,
      "rule": "Organic Red Bell Pepper -> Organic Baby Spinach"
    },
    {
      "x": 0.331,
      "y": 18.01,
      "lift": 2.09,
      "rule": "Boneless Skinless Chicken Breasts -> Organic Baby Spinach"
    },
    {
      "x": 2.703,
      "y": 28.22,
      "lift": 2.07,
      "rule": "Organic Strawberries -> Bag of Organic Bananas"
    },
    {
      "x": 2.703,
      "y": 19.86,
      "lift": 2.07,
      "rule": "Bag of Organic Bananas -> Organic Strawberries"
    },
    {
      "x": 0.538,
      "y": 28.12,
      "lift": 2.07,
      "rule": "Organic Unsweetened Almond Milk -> Bag of Organic Bananas"
    },
    {
      "x": 0.31,
      "y": 33.94,
      "lift": 2.06,
      "rule": "Limes, Organic Avocado -> Banana"
    },
    {
      "x": 0.364,
      "y": 17.72,
      "lift": 2.06,
      "rule": "Organic Granny Smith Apple -> Organic Baby Spinach"
    },
    {
      "x": 0.319,
      "y": 27.97,
      "lift": 2.05,
      "rule": "100% Raw Coconut Water -> Bag of Organic Bananas"
    },
    {
      "x": 0.456,
      "y": 17.67,
      "lift": 2.05,
      "rule": "Broccoli Crown -> Organic Baby Spinach"
    },
    {
      "x": 0.544,
      "y": 17.63,
      "lift": 2.05,
      "rule": "Organic Lemon -> Organic Baby Spinach"
    },
    {
      "x": 0.572,
      "y": 27.81,
      "lift": 2.04,
      "rule": "Organic Granny Smith Apple -> Bag of Organic Bananas"
    },
    {
      "x": 0.385,
      "y": 17.54,
      "lift": 2.04,
      "rule": "Carrots -> Organic Baby Spinach"
    },
    {
      "x": 0.839,
      "y": 19.44,
      "lift": 2.03,
      "rule": "Organic Whole Milk -> Organic Strawberries"
    },
    {
      "x": 0.658,
      "y": 17.44,
      "lift": 2.03,
      "rule": "Organic Yellow Onion -> Organic Baby Spinach"
    },
    {
      "x": 0.653,
      "y": 19.41,
      "lift": 2.03,
      "rule": "Organic Grape Tomatoes -> Organic Strawberries"
    },
    {
      "x": 0.55,
      "y": 17.38,
      "lift": 2.02,
      "rule": "Organic Baby Carrots -> Organic Baby Spinach"
    },
    {
      "x": 1.115,
      "y": 27.49,
      "lift": 2.02,
      "rule": "Organic Cucumber -> Bag of Organic Bananas"
    },
    {
      "x": 0.595,
      "y": 19.32,
      "lift": 2.02,
      "rule": "Organic Lemon -> Organic Strawberries"
    },
    {
      "x": 0.396,
      "y": 19.3,
      "lift": 2.01,
      "rule": "Organic Banana -> Organic Strawberries"
    },
    {
      "x": 0.609,
      "y": 19.27,
      "lift": 2.01,
      "rule": "Organic Baby Carrots -> Organic Strawberries"
    },
    {
      "x": 0.331,
      "y": 17.3,
      "lift": 2.01,
      "rule": "Banana, Organic Strawberries -> Organic Baby Spinach"
    },
    {
      "x": 0.428,
      "y": 19.19,
      "lift": 2.0,
      "rule": "Organic Tomato Cluster -> Organic Strawberries"
    },
    {
      "x": 0.326,
      "y": 17.19,
      "lift": 2.0,
      "rule": "Banana, Large Lemon -> Organic Baby Spinach"
    },
    {
      "x": 1.101,
      "y": 17.17,
      "lift": 2.0,
      "rule": "Organic Hass Avocado -> Organic Baby Spinach"
    },
    {
      "x": 0.679,
      "y": 19.02,
      "lift": 1.99,
      "rule": "Seedless Red Grapes -> Organic Strawberries"
    },
    {
      "x": 0.368,
      "y": 16.99,
      "lift": 1.97,
      "rule": "Organic Peeled Whole Baby Carrots -> Organic Baby Spinach"
    },
    {
      "x": 0.331,
      "y": 18.8,
      "lift": 1.96,
      "rule": "Banana, Organic Baby Spinach -> Organic Strawberries"
    },
    {
      "x": 0.409,
      "y": 26.69,
      "lift": 1.96,
      "rule": "Organic Carrot Bunch -> Bag of Organic Bananas"
    },
    {
      "x": 0.437,
      "y": 18.75,
      "lift": 1.96,
      "rule": "Fresh Cauliflower -> Organic Strawberries"
    },
    {
      "x": 0.375,
      "y": 16.78,
      "lift": 1.95,
      "rule": "Organic Tomato Cluster -> Organic Baby Spinach"
    },
    {
      "x": 0.553,
      "y": 26.28,
      "lift": 1.93,
      "rule": "Organic Red Bell Pepper -> Bag of Organic Bananas"
    },
    {
      "x": 0.31,
      "y": 26.23,
      "lift": 1.93,
      "rule": "Organic Sticks Low Moisture Part Skim Mozzarella String Cheese -> Bag of Organic Bananas"
    },
    {
      "x": 0.398,
      "y": 18.41,
      "lift": 1.92,
      "rule": "Organic Peeled Whole Baby Carrots -> Organic Strawberries"
    },
    {
      "x": 0.362,
      "y": 26.14,
      "lift": 1.92,
      "rule": "Organic Black Beans -> Bag of Organic Bananas"
    },
    {
      "x": 0.814,
      "y": 31.55,
      "lift": 1.92,
      "rule": "Broccoli Crown -> Banana"
    },
    {
      "x": 0.41,
      "y": 31.53,
      "lift": 1.91,
      "rule": "Clementines, Bag -> Banana"
    },
    {
      "x": 0.31,
      "y": 26.05,
      "lift": 1.91,
      "rule": "Organic Baby Broccoli -> Bag of Organic Bananas"
    },
    {
      "x": 0.382,
      "y": 31.47,
      "lift": 1.91,
      "rule": "Granny Smith Apples -> Banana"
    },
    {
      "x": 0.405,
      "y": 16.41,
      "lift": 1.91,
      "rule": "Organic Gala Apples -> Organic Baby Spinach"
    },
    {
      "x": 0.417,
      "y": 16.32,
      "lift": 1.9,
      "rule": "Red Peppers -> Organic Baby Spinach"
    },
    {
      "x": 0.399,
      "y": 25.78,
      "lift": 1.89,
      "rule": "Organic Lacinato (Dinosaur) Kale -> Bag of Organic Bananas"
    },
    {
      "x": 0.407,
      "y": 16.2,
      "lift": 1.88,
      "rule": "Original Hummus -> Organic Baby Spinach"
    },
    {
      "x": 0.453,
      "y": 18.02,
      "lift": 1.88,
      "rule": "Original Hummus -> Organic Strawberries"
    },
    {
      "x": 0.301,
      "y": 18.02,
      "lift": 1.88,
      "rule": "Large Alfresco Eggs -> Organic Strawberries"
    },
    {
      "x": 0.63,
      "y": 30.82,
      "lift": 1.87,
      "rule": "Blueberries -> Banana"
    },
    {
      "x": 0.653,
      "y": 30.79,
      "lift": 1.87,
      "rule": "Cucumber Kirby -> Banana"
    },
    {
      "x": 0.409,
      "y": 16.08,
      "lift": 1.87,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Organic Baby Spinach"
    },
    {
      "x": 0.391,
      "y": 25.18,
      "lift": 1.85,
      "rule": "Organic Grade A Free Range Large Brown Eggs -> Bag of Organic Bananas"
    },
    {
      "x": 0.406,
      "y": 17.61,
      "lift": 1.84,
      "rule": "Organic Small Bunch Celery -> Organic Strawberries"
    },
    {
      "x": 0.558,
      "y": 25.02,
      "lift": 1.84,
      "rule": "Organic Tomato Cluster -> Bag of Organic Bananas"
    },
    {
      "x": 0.398,
      "y": 17.6,
      "lift": 1.84,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Organic Strawberries"
    },
    {
      "x": 1.713,
      "y": 30.0,
      "lift": 1.82,
      "rule": "Strawberries -> Banana"
    },
    {
      "x": 0.326,
      "y": 29.97,
      "lift": 1.82,
      "rule": "Large Lemon, Organic Baby Spinach -> Banana"
    },
    {
      "x": 1.949,
      "y": 29.91,
      "lift": 1.82,
      "rule": "Organic Avocado -> Banana"
    },
    {
      "x": 0.384,
      "y": 29.83,
      "lift": 1.81,
      "rule": "Unsweetened Original Almond Breeze Almond Milk -> Banana"
    },
    {
      "x": 0.826,
      "y": 15.56,
      "lift": 1.81,
      "rule": "Limes -> Organic Baby Spinach"
    },
    {
      "x": 0.556,
      "y": 24.61,
      "lift": 1.81,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Bag of Organic Bananas"
    },
    {
      "x": 0.332,
      "y": 29.6,
      "lift": 1.8,
      "rule": "Vanilla Almond Breeze Almond Milk -> Banana"
    },
    {
      "x": 0.313,
      "y": 29.52,
      "lift": 1.79,
      "rule": "Organic Reduced Fat Milk -> Banana"
    },
    {
      "x": 0.495,
      "y": 17.17,
      "lift": 1.79,
      "rule": "Raspberries -> Organic Strawberries"
    },
    {
      "x": 0.341,
      "y": 15.39,
      "lift": 1.79,
      "rule": "Green Bell Pepper -> Organic Baby Spinach"
    },
    {
      "x": 0.487,
      "y": 24.34,
      "lift": 1.79,
      "rule": "Hass Avocados -> Bag of Organic Bananas"
    },
    {
      "x": 0.386,
      "y": 29.4,
      "lift": 1.79,
      "rule": "Red Raspberries -> Banana"
    },
    {
      "x": 0.333,
      "y": 17.1,
      "lift": 1.79,
      "rule": "Banana, Organic Avocado -> Organic Strawberries"
    },
    {
      "x": 0.428,
      "y": 24.27,
      "lift": 1.78,
      "rule": "Organic Ginger Root -> Bag of Organic Bananas"
    },
    {
      "x": 0.503,
      "y": 29.29,
      "lift": 1.78,
      "rule": "Roma Tomato -> Banana"
    },
    {
      "x": 0.556,
      "y": 24.09,
      "lift": 1.77,
      "rule": "Organic Small Bunch Celery -> Bag of Organic Bananas"
    },
    {
      "x": 1.089,
      "y": 15.22,
      "lift": 1.77,
      "rule": "Large Lemon -> Organic Baby Spinach"
    },
    {
      "x": 0.321,
      "y": 15.13,
      "lift": 1.76,
      "rule": "Cucumber Kirby -> Organic Baby Spinach"
    },
    {
      "x": 0.737,
      "y": 28.85,
      "lift": 1.75,
      "rule": "Red Peppers -> Banana"
    },
    {
      "x": 1.441,
      "y": 15.04,
      "lift": 1.75,
      "rule": "Organic Strawberries -> Organic Baby Spinach"
    },
    {
      "x": 1.441,
      "y": 16.75,
      "lift": 1.75,
      "rule": "Organic Baby Spinach -> Organic Strawberries"
    },
    {
      "x": 1.022,
      "y": 28.63,
      "lift": 1.74,
      "rule": "Seedless Red Grapes -> Banana"
    },
    {
      "x": 0.942,
      "y": 28.47,
      "lift": 1.73,
      "rule": "Yellow Onions -> Banana"
    },
    {
      "x": 0.398,
      "y": 28.34,
      "lift": 1.72,
      "rule": "Large Lemon, Limes -> Banana"
    },
    {
      "x": 0.507,
      "y": 23.41,
      "lift": 1.72,
      "rule": "Organic Peeled Whole Baby Carrots -> Bag of Organic Bananas"
    },
    {
      "x": 0.879,
      "y": 23.31,
      "lift": 1.71,
      "rule": "Organic Yellow Onion -> Bag of Organic Bananas"
    },
    {
      "x": 0.558,
      "y": 16.39,
      "lift": 1.71,
      "rule": "Asparagus -> Organic Strawberries"
    },
    {
      "x": 0.66,
      "y": 16.37,
      "lift": 1.71,
      "rule": "Organic Zucchini -> Organic Strawberries"
    },
    {
      "x": 0.446,
      "y": 16.34,
      "lift": 1.71,
      "rule": "Small Hass Avocado -> Organic Strawberries"
    },
    {
      "x": 0.515,
      "y": 28.07,
      "lift": 1.7,
      "rule": "Boneless Skinless Chicken Breasts -> Banana"
    },
    {
      "x": 0.311,
      "y": 23.18,
      "lift": 1.7,
      "rule": "Grape White/Green Seedless -> Bag of Organic Bananas"
    },
    {
      "x": 0.385,
      "y": 23.08,
      "lift": 1.7,
      "rule": "Large Alfresco Eggs -> Bag of Organic Bananas"
    },
    {
      "x": 0.761,
      "y": 27.88,
      "lift": 1.69,
      "rule": "Small Hass Avocado -> Banana"
    },
    {
      "x": 0.726,
      "y": 22.94,
      "lift": 1.68,
      "rule": "Organic Baby Carrots -> Bag of Organic Bananas"
    },
    {
      "x": 1.0,
      "y": 22.9,
      "lift": 1.68,
      "rule": "Organic Blueberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.503,
      "y": 16.11,
      "lift": 1.68,
      "rule": "Honeycrisp Apple -> Organic Strawberries"
    },
    {
      "x": 1.966,
      "y": 22.85,
      "lift": 1.68,
      "rule": "Organic Baby Spinach -> Bag of Organic Bananas"
    },
    {
      "x": 0.344,
      "y": 27.57,
      "lift": 1.67,
      "rule": "Russet Potato -> Banana"
    },
    {
      "x": 0.983,
      "y": 22.78,
      "lift": 1.67,
      "rule": "Organic Whole Milk -> Bag of Organic Bananas"
    },
    {
      "x": 0.916,
      "y": 22.68,
      "lift": 1.67,
      "rule": "Organic Zucchini -> Bag of Organic Bananas"
    },
    {
      "x": 0.301,
      "y": 27.36,
      "lift": 1.66,
      "rule": "No Salt Added Black Beans -> Banana"
    },
    {
      "x": 0.552,
      "y": 27.33,
      "lift": 1.66,
      "rule": "100% Whole Wheat Bread -> Banana"
    },
    {
      "x": 0.303,
      "y": 22.41,
      "lift": 1.65,
      "rule": "Organic Reduced Fat 2% Milk -> Bag of Organic Bananas"
    },
    {
      "x": 0.59,
      "y": 15.64,
      "lift": 1.63,
      "rule": "Organic Yellow Onion -> Organic Strawberries"
    },
    {
      "x": 0.525,
      "y": 15.64,
      "lift": 1.63,
      "rule": "Organic Red Onion -> Organic Strawberries"
    },
    {
      "x": 0.515,
      "y": 22.1,
      "lift": 1.62,
      "rule": "Fresh Cauliflower -> Bag of Organic Bananas"
    },
    {
      "x": 0.522,
      "y": 26.59,
      "lift": 1.61,
      "rule": "Red Vine Tomato -> Banana"
    },
    {
      "x": 0.802,
      "y": 21.93,
      "lift": 1.61,
      "rule": "Organic Garlic -> Bag of Organic Bananas"
    },
    {
      "x": 1.898,
      "y": 26.53,
      "lift": 1.61,
      "rule": "Large Lemon -> Banana"
    },
    {
      "x": 0.563,
      "y": 15.39,
      "lift": 1.61,
      "rule": "Organic Garlic -> Organic Strawberries"
    },
    {
      "x": 0.354,
      "y": 26.33,
      "lift": 1.6,
      "rule": "Grape White/Green Seedless -> Banana"
    },
    {
      "x": 0.568,
      "y": 26.26,
      "lift": 1.59,
      "rule": "Organic Peeled Whole Baby Carrots -> Banana"
    },
    {
      "x": 0.472,
      "y": 15.23,
      "lift": 1.59,
      "rule": "Organic Cilantro -> Organic Strawberries"
    },
    {
      "x": 0.428,
      "y": 26.13,
      "lift": 1.59,
      "rule": "Orange Bell Pepper -> Banana"
    },
    {
      "x": 0.721,
      "y": 21.45,
      "lift": 1.58,
      "rule": "Organic Grape Tomatoes -> Bag of Organic Bananas"
    },
    {
      "x": 0.708,
      "y": 21.08,
      "lift": 1.55,
      "rule": "Organic Red Onion -> Bag of Organic Bananas"
    },
    {
      "x": 0.313,
      "y": 21.02,
      "lift": 1.54,
      "rule": "Grated Parmesan -> Bag of Organic Bananas"
    },
    {
      "x": 0.398,
      "y": 20.84,
      "lift": 1.53,
      "rule": "Unsweetened Almondmilk -> Bag of Organic Bananas"
    },
    {
      "x": 0.316,
      "y": 24.78,
      "lift": 1.5,
      "rule": "Feta Cheese Crumbles -> Banana"
    },
    {
      "x": 0.471,
      "y": 20.37,
      "lift": 1.5,
      "rule": "Michigan Organic Kale -> Bag of Organic Bananas"
    },
    {
      "x": 0.414,
      "y": 24.53,
      "lift": 1.49,
      "rule": "Bunched Cilantro -> Banana"
    },
    {
      "x": 0.317,
      "y": 24.52,
      "lift": 1.49,
      "rule": "Red Onion -> Banana"
    },
    {
      "x": 0.628,
      "y": 20.25,
      "lift": 1.49,
      "rule": "Organic Cilantro -> Bag of Organic Bananas"
    },
    {
      "x": 0.318,
      "y": 20.25,
      "lift": 1.49,
      "rule": "Uncured Genoa Salami -> Bag of Organic Bananas"
    },
    {
      "x": 0.561,
      "y": 24.29,
      "lift": 1.47,
      "rule": "Michigan Organic Kale -> Banana"
    },
    {
      "x": 0.538,
      "y": 24.28,
      "lift": 1.47,
      "rule": "Green Bell Pepper -> Banana"
    },
    {
      "x": 0.607,
      "y": 24.27,
      "lift": 1.47,
      "rule": "Organic Blackberries -> Banana"
    },
    {
      "x": 0.324,
      "y": 23.9,
      "lift": 1.45,
      "rule": "2% Reduced Fat Milk -> Banana"
    },
    {
      "x": 0.417,
      "y": 19.75,
      "lift": 1.45,
      "rule": "Organic Italian Parsley Bunch -> Bag of Organic Bananas"
    },
    {
      "x": 0.418,
      "y": 23.83,
      "lift": 1.45,
      "rule": "Organic Whole String Cheese -> Banana"
    },
    {
      "x": 0.506,
      "y": 19.67,
      "lift": 1.44,
      "rule": "Organic Baby Arugula -> Bag of Organic Bananas"
    },
    {
      "x": 0.493,
      "y": 19.63,
      "lift": 1.44,
      "rule": "Original Hummus -> Bag of Organic Bananas"
    },
    {
      "x": 0.586,
      "y": 23.71,
      "lift": 1.44,
      "rule": "Organic Gala Apples -> Banana"
    },
    {
      "x": 0.376,
      "y": 19.19,
      "lift": 1.41,
      "rule": "Spring Water -> Bag of Organic Bananas"
    },
    {
      "x": 0.684,
      "y": 19.17,
      "lift": 1.41,
      "rule": "Seedless Red Grapes -> Bag of Organic Bananas"
    },
    {
      "x": 0.332,
      "y": 23.09,
      "lift": 1.4,
      "rule": "Hass Avocado -> Banana"
    },
    {
      "x": 0.331,
      "y": 22.94,
      "lift": 1.39,
      "rule": "Organic Baby Spinach, Organic Strawberries -> Banana"
    },
    {
      "x": 0.573,
      "y": 22.78,
      "lift": 1.38,
      "rule": "Original Hummus -> Banana"
    },
    {
      "x": 0.64,
      "y": 18.82,
      "lift": 1.38,
      "rule": "Asparagus -> Bag of Organic Bananas"
    },
    {
      "x": 0.764,
      "y": 22.73,
      "lift": 1.38,
      "rule": "Organic Grape Tomatoes -> Banana"
    },
    {
      "x": 0.431,
      "y": 18.52,
      "lift": 1.36,
      "rule": "Organic Half & Half -> Bag of Organic Bananas"
    },
    {
      "x": 1.171,
      "y": 22.06,
      "lift": 1.34,
      "rule": "Limes -> Banana"
    },
    {
      "x": 0.371,
      "y": 21.98,
      "lift": 1.33,
      "rule": "Garlic -> Banana"
    },
    {
      "x": 0.359,
      "y": 21.55,
      "lift": 1.31,
      "rule": "Organic D'Anjou Pears -> Banana"
    },
    {
      "x": 0.39,
      "y": 17.78,
      "lift": 1.31,
      "rule": "Carrots -> Bag of Organic Bananas"
    },
    {
      "x": 0.483,
      "y": 21.38,
      "lift": 1.3,
      "rule": "Organic Garnet Sweet Potato (Yam) -> Banana"
    },
    {
      "x": 0.454,
      "y": 21.29,
      "lift": 1.29,
      "rule": "Half & Half -> Banana"
    },
    {
      "x": 0.918,
      "y": 21.27,
      "lift": 1.29,
      "rule": "Organic Whole Milk -> Banana"
    },
    {
      "x": 0.463,
      "y": 21.11,
      "lift": 1.28,
      "rule": "Carrots -> Banana"
    },
    {
      "x": 0.433,
      "y": 17.31,
      "lift": 1.27,
      "rule": "Organic Blackberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.347,
      "y": 20.8,
      "lift": 1.26,
      "rule": "Jalapeno Peppers -> Banana"
    },
    {
      "x": 0.34,
      "y": 20.59,
      "lift": 1.25,
      "rule": "Organic Kiwi -> Banana"
    },
    {
      "x": 0.324,
      "y": 20.58,
      "lift": 1.25,
      "rule": "Uncured Genoa Salami -> Banana"
    },
    {
      "x": 0.65,
      "y": 20.54,
      "lift": 1.25,
      "rule": "Organic Baby Carrots -> Banana"
    },
    {
      "x": 0.489,
      "y": 16.96,
      "lift": 1.25,
      "rule": "Raspberries -> Bag of Organic Bananas"
    },
    {
      "x": 0.697,
      "y": 20.5,
      "lift": 1.24,
      "rule": "Asparagus -> Banana"
    },
    {
      "x": 0.826,
      "y": 20.46,
      "lift": 1.24,
      "rule": "Organic Zucchini -> Banana"
    },
    {
      "x": 1.759,
      "y": 20.44,
      "lift": 1.24,
      "rule": "Organic Baby Spinach -> Banana"
    },
    {
      "x": 0.459,
      "y": 16.82,
      "lift": 1.24,
      "rule": "Small Hass Avocado -> Bag of Organic Bananas"
    },
    {
      "x": 0.522,
      "y": 20.32,
      "lift": 1.23,
      "rule": "Organic Baby Arugula -> Banana"
    },
    {
      "x": 0.522,
      "y": 16.7,
      "lift": 1.23,
      "rule": "Honeycrisp Apple -> Bag of Organic Bananas"
    },
    {
      "x": 0.381,
      "y": 19.96,
      "lift": 1.21,
      "rule": "Unsweetened Almondmilk -> Banana"
    },
    {
      "x": 1.912,
      "y": 19.96,
      "lift": 1.21,
      "rule": "Organic Strawberries -> Banana"
    },
    {
      "x": 0.345,
      "y": 19.94,
      "lift": 1.21,
      "rule": "Lime Sparkling Water -> Banana"
    },
    {
      "x": 0.585,
      "y": 19.8,
      "lift": 1.2,
      "rule": "Sparkling Water Grapefruit -> Banana"
    },
    {
      "x": 0.405,
      "y": 19.68,
      "lift": 1.2,
      "rule": "Organic Granny Smith Apple -> Banana"
    },
    {
      "x": 0.305,
      "y": 19.64,
      "lift": 1.19,
      "rule": "Organic Grade A Free Range Large Brown Eggs -> Banana"
    },
    {
      "x": 0.343,
      "y": 16.09,
      "lift": 1.18,
      "rule": "Half & Half -> Bag of Organic Bananas"
    },
    {
      "x": 0.45,
      "y": 19.31,
      "lift": 1.17,
      "rule": "Fresh Cauliflower -> Banana"
    },
    {
      "x": 0.403,
      "y": 19.14,
      "lift": 1.16,
      "rule": "Organic Red Bell Pepper -> Banana"
    },
    {
      "x": 0.548,
      "y": 19.0,
      "lift": 1.15,
      "rule": "Raspberries -> Banana"
    },
    {
      "x": 0.44,
      "y": 18.9,
      "lift": 1.15,
      "rule": "Organic Half & Half -> Banana"
    },
    {
      "x": 0.313,
      "y": 15.49,
      "lift": 1.14,
      "rule": "100% Whole Wheat Bread -> Bag of Organic Bananas"
    },
    {
      "x": 0.82,
      "y": 15.45,
      "lift": 1.13,
      "rule": "Limes -> Bag of Organic Bananas"
    },
    {
      "x": 0.814,
      "y": 18.63,
      "lift": 1.13,
      "rule": "Organic Blueberries -> Banana"
    },
    {
      "x": 0.34,
      "y": 15.35,
      "lift": 1.13,
      "rule": "Green Bell Pepper -> Bag of Organic Bananas"
    },
    {
      "x": 0.358,
      "y": 18.07,
      "lift": 1.1,
      "rule": "Apple Honeycrisp Organic -> Banana"
    },
    {
      "x": 0.731,
      "y": 18.01,
      "lift": 1.09,
      "rule": "Organic Cucumber -> Banana"
    },
    {
      "x": 0.58,
      "y": 17.26,
      "lift": 1.05,
      "rule": "Organic Red Onion -> Banana"
    },
    {
      "x": 0.628,
      "y": 17.17,
      "lift": 1.04,
      "rule": "Organic Garlic -> Banana"
    },
    {
      "x": 0.521,
      "y": 16.79,
      "lift": 1.02,
      "rule": "Organic Cilantro -> Banana"
    },
    {
      "x": 0.303,
      "y": 16.63,
      "lift": 1.01,
      "rule": "Extra Virgin Olive Oil -> Banana"
    },
    {
      "x": 0.42,
      "y": 16.5,
      "lift": 1.0,
      "rule": "Organic Large Extra Fancy Fuji Apple -> Banana"
    }
  ],
  "frequent_itemsets": {
    "total": 950,
    "lengths": {
      "1": 506,
      "2": 426,
      "3": 18
    },
    "len1": [
      {
        "itemsets": "Banana",
        "length": 1,
        "support": 0.1646893276461017,
        "support_pct": 16.47,
        "count": 21609
      },
      {
        "itemsets": "Bag of Organic Bananas",
        "length": 1,
        "support": 0.1361417703706961,
        "support_pct": 13.61,
        "count": 17863
      },
      {
        "itemsets": "Organic Strawberries",
        "length": 1,
        "support": 0.0958093311639769,
        "support_pct": 9.58,
        "count": 12571
      },
      {
        "itemsets": "Organic Baby Spinach",
        "length": 1,
        "support": 0.0860472274746053,
        "support_pct": 8.6,
        "count": 11290
      },
      {
        "itemsets": "Large Lemon",
        "length": 1,
        "support": 0.0715447869486829,
        "support_pct": 7.15,
        "count": 9387
      },
      {
        "itemsets": "Organic Avocado",
        "length": 1,
        "support": 0.0651598434545534,
        "support_pct": 6.52,
        "count": 8550
      },
      {
        "itemsets": "Organic Hass Avocado",
        "length": 1,
        "support": 0.064139659645574,
        "support_pct": 6.41,
        "count": 8416
      },
      {
        "itemsets": "Strawberries",
        "length": 1,
        "support": 0.0571127039268282,
        "support_pct": 5.71,
        "count": 7494
      },
      {
        "itemsets": "Limes",
        "length": 1,
        "support": 0.053058352754936,
        "support_pct": 5.31,
        "count": 6962
      },
      {
        "itemsets": "Organic Raspberries",
        "length": 1,
        "support": 0.0487753396948243,
        "support_pct": 4.88,
        "count": 6400
      },
      {
        "itemsets": "Organic Blueberries",
        "length": 1,
        "support": 0.0436744206499274,
        "support_pct": 4.37,
        "count": 5730
      },
      {
        "itemsets": "Organic Whole Milk",
        "length": 1,
        "support": 0.0431643287454377,
        "support_pct": 4.32,
        "count": 5664
      },
      {
        "itemsets": "Organic Cucumber",
        "length": 1,
        "support": 0.0405698957829471,
        "support_pct": 4.06,
        "count": 5323
      },
      {
        "itemsets": "Organic Zucchini",
        "length": 1,
        "support": 0.0403588232707444,
        "support_pct": 4.04,
        "count": 5295
      },
      {
        "itemsets": "Organic Yellow Onion",
        "length": 1,
        "support": 0.03772921155622,
        "support_pct": 3.77,
        "count": 4950
      },
      {
        "itemsets": "Organic Garlic",
        "length": 1,
        "support": 0.0365683127391055,
        "support_pct": 3.66,
        "count": 4798
      },
      {
        "itemsets": "Seedless Red Grapes",
        "length": 1,
        "support": 0.0356976386262697,
        "support_pct": 3.57,
        "count": 4684
      },
      {
        "itemsets": "Asparagus",
        "length": 1,
        "support": 0.0340178532166571,
        "support_pct": 3.4,
        "count": 4463
      },
      {
        "itemsets": "Organic Grape Tomatoes",
        "length": 1,
        "support": 0.0336220922562772,
        "support_pct": 3.36,
        "count": 4412
      },
      {
        "itemsets": "Organic Red Onion",
        "length": 1,
        "support": 0.0335781188162349,
        "support_pct": 3.36,
        "count": 4406
      },
      {
        "itemsets": "Yellow Onions",
        "length": 1,
        "support": 0.0330856162877621,
        "support_pct": 3.31,
        "count": 4341
      },
      {
        "itemsets": "Organic Baby Carrots",
        "length": 1,
        "support": 0.0316344927663691,
        "support_pct": 3.16,
        "count": 4151
      },
      {
        "itemsets": "Honeycrisp Apple",
        "length": 1,
        "support": 0.0312299371179807,
        "support_pct": 3.12,
        "count": 4098
      },
      {
        "itemsets": "Organic Cilantro",
        "length": 1,
        "support": 0.0310100699177696,
        "support_pct": 3.1,
        "count": 4069
      },
      {
        "itemsets": "Organic Lemon",
        "length": 1,
        "support": 0.0308253814695923,
        "support_pct": 3.08,
        "count": 4045
      },
      {
        "itemsets": "Sparkling Water Grapefruit",
        "length": 1,
        "support": 0.0295413570203597,
        "support_pct": 2.95,
        "count": 3876
      },
      {
        "itemsets": "Raspberries",
        "length": 1,
        "support": 0.0288377819796842,
        "support_pct": 2.88,
        "count": 3784
      },
      {
        "itemsets": "Organic Fuji Apple",
        "length": 1,
        "support": 0.0286442988434985,
        "support_pct": 2.86,
        "count": 3758
      },
      {
        "itemsets": "Small Hass Avocado",
        "length": 1,
        "support": 0.0272899168901983,
        "support_pct": 2.73,
        "count": 3581
      },
      {
        "itemsets": "Broccoli Crown",
        "length": 1,
        "support": 0.0257860252407545,
        "support_pct": 2.58,
        "count": 3383
      },
      {
        "itemsets": "Organic Baby Arugula",
        "length": 1,
        "support": 0.0257068730486785,
        "support_pct": 2.57,
        "count": 3373
      },
      {
        "itemsets": "Red Peppers",
        "length": 1,
        "support": 0.0255485686645266,
        "support_pct": 2.55,
        "count": 3352
      },
      {
        "itemsets": "Organic Large Extra Fancy Fuji Apple",
        "length": 1,
        "support": 0.0254254430324084,
        "support_pct": 2.54,
        "count": 3336
      },
      {
        "itemsets": "Original Hummus",
        "length": 1,
        "support": 0.0251352183281298,
        "support_pct": 2.51,
        "count": 3298
      },
      {
        "itemsets": "Organic Blackberries",
        "length": 1,
        "support": 0.0250032980080031,
        "support_pct": 2.5,
        "count": 3281
      },
      {
        "itemsets": "Organic Gala Apples",
        "length": 1,
        "support": 0.0247042786157161,
        "support_pct": 2.47,
        "count": 3241
      },
      {
        "itemsets": "Fresh Cauliflower",
        "length": 1,
        "support": 0.0233147179103821,
        "support_pct": 2.33,
        "count": 3059
      },
      {
        "itemsets": "Organic Half & Half",
        "length": 1,
        "support": 0.0232707444703399,
        "support_pct": 2.33,
        "count": 3053
      },
      {
        "itemsets": "Michigan Organic Kale",
        "length": 1,
        "support": 0.0231036453981795,
        "support_pct": 2.31,
        "count": 3031
      },
      {
        "itemsets": "Organic Small Bunch Celery",
        "length": 1,
        "support": 0.0230684666461457,
        "support_pct": 2.31,
        "count": 3027
      }
    ],
    "len2": [
      {
        "itemsets": "Bag of Organic Bananas, Organic Strawberries",
        "length": 2,
        "support": 0.0270348709379534,
        "support_pct": 2.7,
        "count": 3547
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Hass Avocado",
        "length": 2,
        "support": 0.0212831449804318,
        "support_pct": 2.13,
        "count": 2793
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Baby Spinach",
        "length": 2,
        "support": 0.0196649223868783,
        "support_pct": 1.97,
        "count": 2580
      },
      {
        "itemsets": "Banana, Organic Avocado",
        "length": 2,
        "support": 0.0194890286267094,
        "support_pct": 1.95,
        "count": 2557
      },
      {
        "itemsets": "Banana, Organic Strawberries",
        "length": 2,
        "support": 0.0191196517303548,
        "support_pct": 1.91,
        "count": 2509
      },
      {
        "itemsets": "Banana, Large Lemon",
        "length": 2,
        "support": 0.0189789367222197,
        "support_pct": 1.9,
        "count": 2490
      },
      {
        "itemsets": "Banana, Organic Baby Spinach",
        "length": 2,
        "support": 0.0175893760168858,
        "support_pct": 1.76,
        "count": 2308
      },
      {
        "itemsets": "Banana, Strawberries",
        "length": 2,
        "support": 0.0171320522404467,
        "support_pct": 1.71,
        "count": 2248
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Raspberries",
        "length": 2,
        "support": 0.0156545446550283,
        "support_pct": 1.57,
        "count": 2054
      },
      {
        "itemsets": "Organic Raspberries, Organic Strawberries",
        "length": 2,
        "support": 0.0146871289740996,
        "support_pct": 1.47,
        "count": 1927
      },
      {
        "itemsets": "Organic Baby Spinach, Organic Strawberries",
        "length": 2,
        "support": 0.0144144936458379,
        "support_pct": 1.44,
        "count": 1891
      },
      {
        "itemsets": "Large Lemon, Limes",
        "length": 2,
        "support": 0.0140275273734664,
        "support_pct": 1.4,
        "count": 1841
      },
      {
        "itemsets": "Organic Hass Avocado, Organic Strawberries",
        "length": 2,
        "support": 0.0135350248449936,
        "support_pct": 1.35,
        "count": 1776
      },
      {
        "itemsets": "Organic Avocado, Organic Baby Spinach",
        "length": 2,
        "support": 0.0123301525878369,
        "support_pct": 1.23,
        "count": 1618
      },
      {
        "itemsets": "Large Lemon, Organic Avocado",
        "length": 2,
        "support": 0.0118640341233894,
        "support_pct": 1.19,
        "count": 1557
      },
      {
        "itemsets": "Banana, Limes",
        "length": 2,
        "support": 0.0117057297392375,
        "support_pct": 1.17,
        "count": 1536
      },
      {
        "itemsets": "Organic Blueberries, Organic Strawberries",
        "length": 2,
        "support": 0.011160459082714,
        "support_pct": 1.12,
        "count": 1464
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Cucumber",
        "length": 2,
        "support": 0.0111516643947055,
        "support_pct": 1.12,
        "count": 1463
      },
      {
        "itemsets": "Organic Baby Spinach, Organic Hass Avocado",
        "length": 2,
        "support": 0.0110109493865705,
        "support_pct": 1.1,
        "count": 1445
      },
      {
        "itemsets": "Large Lemon, Organic Baby Spinach",
        "length": 2,
        "support": 0.0108878237544523,
        "support_pct": 1.09,
        "count": 1429
      },
      {
        "itemsets": "Banana, Honeycrisp Apple",
        "length": 2,
        "support": 0.0108262609383932,
        "support_pct": 1.08,
        "count": 1421
      },
      {
        "itemsets": "Banana, Organic Fuji Apple",
        "length": 2,
        "support": 0.0106415724902159,
        "support_pct": 1.06,
        "count": 1396
      },
      {
        "itemsets": "Banana, Seedless Red Grapes",
        "length": 2,
        "support": 0.0102194274658106,
        "support_pct": 1.02,
        "count": 1341
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Blueberries",
        "length": 2,
        "support": 0.0099995602655995,
        "support_pct": 1.0,
        "count": 1312
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Whole Milk",
        "length": 2,
        "support": 0.0098324611934391,
        "support_pct": 0.98,
        "count": 1290
      },
      {
        "itemsets": "Organic Avocado, Organic Strawberries",
        "length": 2,
        "support": 0.0095686205531858,
        "support_pct": 0.96,
        "count": 1255
      },
      {
        "itemsets": "Banana, Yellow Onions",
        "length": 2,
        "support": 0.0094191108570423,
        "support_pct": 0.94,
        "count": 1236
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Avocado",
        "length": 2,
        "support": 0.0094103161690339,
        "support_pct": 0.94,
        "count": 1235
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Lemon",
        "length": 2,
        "support": 0.0093839321050085,
        "support_pct": 0.94,
        "count": 1231
      },
      {
        "itemsets": "Bag of Organic Bananas, Large Lemon",
        "length": 2,
        "support": 0.0092959852249241,
        "support_pct": 0.93,
        "count": 1220
      },
      {
        "itemsets": "Banana, Organic Whole Milk",
        "length": 2,
        "support": 0.0091816542808143,
        "support_pct": 0.92,
        "count": 1205
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Zucchini",
        "length": 2,
        "support": 0.009155270216789,
        "support_pct": 0.92,
        "count": 1201
      },
      {
        "itemsets": "Limes, Organic Avocado",
        "length": 2,
        "support": 0.0091200914647552,
        "support_pct": 0.91,
        "count": 1197
      },
      {
        "itemsets": "Organic Cucumber, Organic Strawberries",
        "length": 2,
        "support": 0.009076118024713,
        "support_pct": 0.91,
        "count": 1191
      },
      {
        "itemsets": "Organic Hass Avocado, Organic Raspberries",
        "length": 2,
        "support": 0.0089617870806033,
        "support_pct": 0.9,
        "count": 1176
      },
      {
        "itemsets": "Large Lemon, Organic Strawberries",
        "length": 2,
        "support": 0.0089441977045864,
        "support_pct": 0.89,
        "count": 1174
      },
      {
        "itemsets": "Limes, Organic Cilantro",
        "length": 2,
        "support": 0.008856250824502,
        "support_pct": 0.89,
        "count": 1162
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Yellow Onion",
        "length": 2,
        "support": 0.0087946880084429,
        "support_pct": 0.88,
        "count": 1154
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Large Extra Fancy Fuji Apple",
        "length": 2,
        "support": 0.0085572314322149,
        "support_pct": 0.86,
        "count": 1123
      },
      {
        "itemsets": "Organic Strawberries, Organic Whole Milk",
        "length": 2,
        "support": 0.0083901323600545,
        "support_pct": 0.84,
        "count": 1101
      },
      {
        "itemsets": "Organic Baby Spinach, Organic Zucchini",
        "length": 2,
        "support": 0.0083549536080207,
        "support_pct": 0.84,
        "count": 1096
      },
      {
        "itemsets": "Banana, Organic Hass Avocado",
        "length": 2,
        "support": 0.0083285695439954,
        "support_pct": 0.83,
        "count": 1093
      },
      {
        "itemsets": "Banana, Organic Zucchini",
        "length": 2,
        "support": 0.0082582120399278,
        "support_pct": 0.83,
        "count": 1084
      },
      {
        "itemsets": "Limes, Organic Baby Spinach",
        "length": 2,
        "support": 0.0082582120399278,
        "support_pct": 0.83,
        "count": 1084
      },
      {
        "itemsets": "Organic Baby Spinach, Organic Cucumber",
        "length": 2,
        "support": 0.0082054439118772,
        "support_pct": 0.82,
        "count": 1077
      },
      {
        "itemsets": "Bag of Organic Bananas, Limes",
        "length": 2,
        "support": 0.0081966492238687,
        "support_pct": 0.82,
        "count": 1075
      },
      {
        "itemsets": "Banana, Organic Blueberries",
        "length": 2,
        "support": 0.0081350864078096,
        "support_pct": 0.81,
        "count": 1067
      },
      {
        "itemsets": "Banana, Broccoli Crown",
        "length": 2,
        "support": 0.0081350864078096,
        "support_pct": 0.81,
        "count": 1067
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Garlic",
        "length": 2,
        "support": 0.0080207554636999,
        "support_pct": 0.8,
        "count": 1052
      },
      {
        "itemsets": "Banana, Organic Raspberries",
        "length": 2,
        "support": 0.0079064245195901,
        "support_pct": 0.79,
        "count": 1037
      }
    ],
    "len3": [
      {
        "itemsets": "Bag of Organic Bananas, Organic Hass Avocado, Organic Strawberries",
        "length": 3,
        "support": 0.0062442284859944,
        "support_pct": 0.62,
        "count": 819
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Raspberries, Organic Strawberries",
        "length": 3,
        "support": 0.0057077525174794,
        "support_pct": 0.57,
        "count": 749
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Baby Spinach, Organic Strawberries",
        "length": 3,
        "support": 0.0051624818609559,
        "support_pct": 0.52,
        "count": 677
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Hass Avocado, Organic Raspberries",
        "length": 3,
        "support": 0.0046699793324831,
        "support_pct": 0.47,
        "count": 613
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Baby Spinach, Organic Hass Avocado",
        "length": 3,
        "support": 0.0043709599401961,
        "support_pct": 0.44,
        "count": 574
      },
      {
        "itemsets": "Banana, Organic Avocado, Organic Baby Spinach",
        "length": 3,
        "support": 0.0042566289960863,
        "support_pct": 0.43,
        "count": 559
      },
      {
        "itemsets": "Banana, Large Lemon, Organic Avocado",
        "length": 3,
        "support": 0.0041950661800272,
        "support_pct": 0.42,
        "count": 550
      },
      {
        "itemsets": "Banana, Large Lemon, Limes",
        "length": 3,
        "support": 0.0039751989798161,
        "support_pct": 0.4,
        "count": 522
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Cucumber, Organic Strawberries",
        "length": 3,
        "support": 0.0037289477155797,
        "support_pct": 0.37,
        "count": 489
      },
      {
        "itemsets": "Large Lemon, Limes, Organic Avocado",
        "length": 3,
        "support": 0.0034211336352842,
        "support_pct": 0.34,
        "count": 449
      },
      {
        "itemsets": "Organic Hass Avocado, Organic Raspberries, Organic Strawberries",
        "length": 3,
        "support": 0.0033507761312167,
        "support_pct": 0.34,
        "count": 440
      },
      {
        "itemsets": "Banana, Organic Avocado, Organic Strawberries",
        "length": 3,
        "support": 0.0033331867551998,
        "support_pct": 0.33,
        "count": 437
      },
      {
        "itemsets": "Banana, Organic Baby Spinach, Organic Strawberries",
        "length": 3,
        "support": 0.0033068026911745,
        "support_pct": 0.33,
        "count": 434
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Blueberries, Organic Strawberries",
        "length": 3,
        "support": 0.0032892133151576,
        "support_pct": 0.33,
        "count": 432
      },
      {
        "itemsets": "Banana, Large Lemon, Organic Baby Spinach",
        "length": 3,
        "support": 0.0032628292511323,
        "support_pct": 0.33,
        "count": 428
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Cucumber, Organic Hass Avocado",
        "length": 3,
        "support": 0.0032188558110901,
        "support_pct": 0.32,
        "count": 422
      },
      {
        "itemsets": "Bag of Organic Bananas, Organic Hass Avocado, Organic Lemon",
        "length": 3,
        "support": 0.0031045248669803,
        "support_pct": 0.31,
        "count": 407
      },
      {
        "itemsets": "Banana, Limes, Organic Avocado",
        "length": 3,
        "support": 0.0030957301789719,
        "support_pct": 0.31,
        "count": 406
      }
    ]
  },
  "rule_stats": {
    "support": {
      "min": 0.003,
      "max": 0.027,
      "mean": 0.0057,
      "median": 0.0045
    },
    "confidence": {
      "min": 0.15,
      "max": 0.5211,
      "mean": 0.2234,
      "median": 0.205
    },
    "lift": {
      "min": 1.002,
      "max": 20.717,
      "mean": 2.474,
      "median": 2.093
    },
    "leverage": {
      "min": 7.8e-06,
      "max": 0.01399,
      "mean": 0.00285,
      "median": 0.00237
    },
    "conviction": {
      "min": 1.0004,
      "max": 1.8038,
      "mean": 1.1554,
      "median": 1.1333
    }
  },
  "apriori_details": {
    "name": "Apriori (Agrawal & Srikant, 1994)",
    "type": "Level-wise Candidate Generation & Pruning",
    "principle": "Downward Closure (Anti-monotonicity of support: all non-empty subsets of a frequent itemset must also be frequent)",
    "memory_challenge": "Default 1-hot boolean matrix (131,209 \u00d7 49,688) exceeds 27.1 GiB RAM during k=2 cross-product expansion.",
    "solution_applied": "Filtered candidate universe below min_support threshold (reducing dimension from 49,688 to 506 items) and enabled low_memory=True chunking, keeping RAM to 54.87 MB.",
    "complexity": "O(2^|I|) worst-case, requires multiple database passes over candidate matrix."
  },
  "fpgrowth_details": {
    "name": "FP-Growth (Han, Pei, & Yin, 2000)",
    "type": "Frequent Pattern Tree (FP-Tree) Mining without Candidate Generation",
    "principle": "Compresses transaction database into a compact prefix-tree structure with item links and frequency counts; recursively mines conditional pattern bases.",
    "passes_required": "Exactly 2 database scans (Scan 1: find frequent 1-items; Scan 2: construct FP-Tree).",
    "memory_efficiency": "Tree compression eliminates redundant prefix storage. Avoids generating 24.6 million potential 2-item candidate pairs.",
    "benchmark_result": "Matches Apriori frequent itemsets and association rules with 100% exact mathematical parity."
  }
};
