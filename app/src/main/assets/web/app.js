// Study Buddy - Progressive Web App Logic
(function () {
    'use strict';

    // ==========================================
    // 1. DATA LAYER (Class 6-10 Notes, Quiz, Math, AI Guide)
    // ==========================================
    const STUDY_NOTES = [
        {
            id: "note_c6_sci_1",
            classLevel: 6,
            subject: "विज्ञान",
            chapterNumber: 1,
            titleHindi: "भोजन के घटक और पोषक तत्व",
            titleEnglish: "Components of Food",
            readTimeMinutes: 4,
            summary: "भोजन में पाए जाने वाले विभिन्न पोषक तत्वों जैसे कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन और खनिज लवणों का महत्व।",
            keyPoints: [
                "कार्बोहाइड्रेट और वसा हमारे शरीर को ऊर्जा प्रदान करते हैं।",
                "प्रोटीन शरीर की वृद्धि तथा स्वस्थ रहने के लिए आवश्यक होता है। इसे शरीर-वर्धक भोजन कहते हैं।",
                "विटामिन हमारे शरीर को रोगों से रक्षा करने में सहायता करते हैं।",
                "आहारी रेशे (रूक्षांश) और जल बिना पचे भोजन को बाहर निकालने में सहायक होते हैं।"
            ],
            detailedContent: `हमारे भोजन के मुख्य पोषक तत्व कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन तथा खनिज लवण हैं। इसके अतिरिक्त भोजन में आहारी रेशे और जल भी होता है।\n\n1. ऊर्जा देने वाले पोषक तत्व:\n• कार्बोहाइड्रेट: मुख्य रूप से चावल, गेहूं, आलू, केला में मिलता है।\n• वसा: घी, तेल, मक्खन और सूखे मेवे में पाई जाती है। वसा से कार्बोहाइड्रेट की तुलना में अधिक ऊर्जा मिलती है।\n\n2. शरीर-वर्धक भोजन:\n• प्रोटीन: दालें, दूध, अंडा, मछली, पनीर में प्रचुर मात्रा में होता है। यह कोशिकाओं की मरम्मत करता है।\n\n3. सुरक्षात्मक पोषक तत्व:\n• विटामिन A: त्वचा और आँखों को स्वस्थ रखता है (गाजर, पपीता)।\n• विटामिन C: रोगों से लड़ने में मदद करता है (आँवला, नींबू, संतरा)।\n• विटामिन D: हड्डियों और दाँतों के लिए कैल्शियम का उपयोग करने में सहायता करता है।`,
            formulas: [
                "संतुलित आहार: ऐसा आहार जिसमें सभी आवश्यक पोषक तत्व उचित मात्रा में मौजूद हों।",
                "अभावजन्य रोग: वे रोग जो लंबी अवधि तक पोषकों के अभाव के कारण होते हैं (जैसे विटामिन C की कमी से स्कर्वी)।"
            ]
        },
        {
            id: "note_c6_math_1",
            classLevel: 6,
            subject: "गणित",
            chapterNumber: 2,
            titleHindi: "पूर्णांक और भिन्न की समझ",
            titleEnglish: "Integers and Fractions",
            readTimeMinutes: 5,
            summary: "धनात्मक, ऋणात्मक संख्याएँ और भिन्नों (उचित, विषम और मिश्रित) के मूल नियम।",
            keyPoints: [
                "संख्या रेखा पर शून्य के दाईं ओर धनात्मक तथा बाईं ओर ऋणात्मक पूर्णांक होते हैं।",
                "शून्य न तो धनात्मक है और न ही ऋणात्मक।",
                "उचित भिन्न में अंश, हर से छोटा होता है (जैसे 3/5)।",
                "विषम भिन्न में अंश, हर से बड़ा या बराबर होता है (जैसे 7/4)।"
            ],
            detailedContent: `1. पूर्णांक (Integers):\nप्राकृतिक संख्याएँ (1, 2, 3...), उनके ऋणात्मक (-1, -2, -3...) और शून्य का संग्रह पूर्णांक कहलाता है।\n• दो धनात्मक पूर्णांकों का योग हमेशा धनात्मक होता है: (+5) + (+3) = +8\n• एक धनात्मक और एक ऋणात्मक पूर्णांक को जोड़ते समय उनका अंतर निकालते हैं और बड़े मान का चिह्न लगाते हैं: (-9) + (+4) = -5\n\n2. भिन्न (Fractions):\nभिन्न एक संख्या है जो किसी पूर्ण के एक भाग को निरूपित करती है।\n• तुल्य भिन्न (Equivalent Fractions): अंश और हर को समान शून्येतर संख्या से गुणा या भाग करने पर तुल्य भिन्न प्राप्त होती है। उदाहरण: 2/3 = 4/6 = 6/9`,
            formulas: [
                "उचित भिन्न (Proper Fraction): अंश < हर",
                "विषम भिन्न (Improper Fraction): अंश > हर",
                "मिश्रित भिन्न (Mixed Fraction): एक पूर्ण संख्या और एक उचित भिन्न का मेल (जैसे 2 ½)"
            ]
        },
        {
            id: "note_c7_sci_1",
            classLevel: 7,
            subject: "विज्ञान",
            chapterNumber: 1,
            titleHindi: "पादपों में पोषण - प्रकाश संश्लेषण",
            titleEnglish: "Nutrition in Plants - Photosynthesis",
            readTimeMinutes: 5,
            summary: "हरे पौधे किस प्रकार सूर्य के प्रकाश, क्लोरोफिल, जल और कार्बन डाइऑक्साइड से भोजन बनाते हैं।",
            keyPoints: [
                "स्वपोषी पोषण: सजीवों द्वारा स्वयं भोजन बनाने की विधि (जैसे हरे पादप)।",
                "पत्तियों की हरी वर्णक 'क्लोरोफिल' सौर ऊर्जा को अवशोषित करती है।",
                "पत्तियों की सतह पर उपस्थित सूक्ष्म छिद्र 'रंध्र' (Stomata) कहलाते हैं।",
                "प्रकाश संश्लेषण के दौरान ऑक्सीजन गैस बाहर निकलती है।"
            ],
            detailedContent: `पादपों में खाद्य निर्माण का केंद्र पत्तियाँ होती हैं। इसलिए पत्तियाँ पादप की 'खाद्य फैक्ट्रियाँ' कहलाती हैं।\n\nप्रकाश संश्लेषण की आवश्यक सामग्री:\n1. क्लोरोफिल (पर्णहरित): पत्तियों में पाया जाने वाला हरा वर्णक।\n2. सूर्य का प्रकाश: सौर ऊर्जा प्रदान करता है।\n3. कार्बन डाइऑक्साइड (CO₂): वायु से रंध्रों द्वारा ली जाती है।\n4. जल एवं खनिज: जड़ों द्वारा मृदा से अवशोषित किए जाते हैं।\n\nरासायनिक समीकरण:\nकार्बन डाइऑक्साइड + जल + (सूर्य का प्रकाश / क्लोरोफिल) ➔ कार्बोहाइड्रेट + ऑक्सीजन\n\nविषमपोषी पौधे:\nकुछ पौधे जैसे 'अमरबेल' परजीवी होते हैं, जबकि 'घटपर्णी' (Pitcher Plant) कीटभक्षी होता है जो कीड़ों को पकड़कर खाता है।`,
            formulas: [
                "समीकरण: 6CO₂ + 6H₂O ➔ C₆H₁₂O₆ + 6O₂",
                "सहजीवी संबंध: दो जीव परस्पर आवास और पोषण एक-दूसरे के साथ साझा करते हैं (उदा. लाइकेन)।"
            ]
        },
        {
            id: "note_c7_sci_2",
            classLevel: 7,
            subject: "विज्ञान",
            chapterNumber: 2,
            titleHindi: "अम्ल, क्षारक और लवण",
            titleEnglish: "Acids, Bases and Salts",
            readTimeMinutes: 4,
            summary: "अम्ल और क्षारक के गुण, लिटमस पत्र पर उनका प्रभाव तथा उदासीनीकरण अभिक्रिया।",
            keyPoints: [
                "अम्ल स्वाद में खट्टे होते हैं और नीले लिटमस को लाल कर देते हैं।",
                "क्षारक स्वाद में कड़वे होते हैं, छूने पर साबुन जैसे लगते हैं तथा लाल लिटमस को नीला करते हैं।",
                "सूचक (Indicators) वे पदार्थ हैं जो अम्ल या क्षारक की उपस्थिति में रंग बदलते हैं।",
                "उदासीनीकरण अभिक्रिया में अम्ल और क्षारक मिलकर लवण और जल बनाते हैं।"
            ],
            detailedContent: `1. अम्ल (Acids):\n• प्राकृतिक अम्ल: सिरका में एसीटिक अम्ल, नींबू में सिट्रिक अम्ल, दही में लैक्टिक अम्ल, इमली में टार्टरिक अम्ल।\n\n2. क्षारक (Bases):\n• चूने का पानी: कैल्शियम हाइड्रॉक्साइड\n• साबुन: सोडियम/पोटेशियम हाइड्रॉक्साइड\n• मिल्क ऑफ मैग्नीशिया: मैग्नीशियम हाइड्रॉक्साइड (प्रतिअम्ल)\n\n3. उदासीनीकरण (Neutralisation):\nअम्ल + क्षारक ➔ लवण + जल + ऊष्मा\nउदाहरण: HCl + NaOH ➔ NaCl + H₂O`,
            formulas: [
                "लिटमस: लाइकेन से निकाला गया प्राकृतिक सूचक।",
                "दैनिक जीवन में उदासीनीकरण: अपाचन होने पर मिल्क ऑफ मैग्नीशिया लेना।"
            ]
        },
        {
            id: "note_c8_sci_1",
            classLevel: 8,
            subject: "विज्ञान",
            chapterNumber = 8,
            titleHindi: "कोशिका - संरचना एवं प्रकार्य",
            titleEnglish: "Cell - Structure and Functions",
            readTimeMinutes: 6,
            summary: "जीवन की मूलभूत संरचनात्मक एवं कार्यात्मक इकाई कोशिका, पादप व जंतु कोशिका में अंतर।",
            keyPoints: [
                "रॉबर्ट हुक ने 1665 में कॉर्क के पतले टुकड़े में कोशिका की खोज की।",
                "कोशिका के मुख्य भाग: कोशिका झिल्ली, कोशिका द्रव्य और केंद्रक।",
                "पादप कोशिका में सुरक्षा के लिए कोशिका भित्ति (Cell Wall) और क्लोरोप्लास्ट होते हैं।",
                "माइटोकॉन्ड्रिया को कोशिका का 'बिजलीघर' (Powerhouse) कहा जाता है।"
            ],
            detailedContent: `सभी सजीव सूक्ष्म इकाइयों से बने होते हैं जिन्हें कोशिका कहते हैं। जैसे दीवार ईंटों से बनती है, वैसे ही शरीर कोशिकाओं से बनता है।\n\n1. कोशिका के प्रमुख घटक:\n• कोशिका झिल्ली (Cell Membrane): कोशिका को आकार देती है तथा पदार्थों के आवागमन को नियंत्रित करती है।\n• केंद्रक (Nucleus): कोशिका का नियंत्रण कक्ष है, जिसमें गुणसूत्र (DNA) पाए जाते हैं।\n• कोशिका द्रव्य (Cytoplasm): झिल्ली और केंद्रक के बीच का जेली जैसा द्रव जिसमें कोशिकांग तैरते हैं।\n\n2. पादप और जंतु कोशिका में अंतर:\n• पादप कोशिका में कोशिका भित्ति होती है, जंतु में नहीं।\n• पादप कोशिका में हरित लवक (Plastids) होते हैं, जंतु में नहीं।\n• पादप कोशिका में बड़ी रसधानी (Vacuole) होती है, जंतु में छोटी होती हैं।`,
            formulas: [
                "एककोशिकीय जीव: अमीबा, पैरामीशियम (एक कोशिका से पूरा जीव चलता है)।",
                "जीन: सजीवों में आनुवंशिक गुणों के वाहक जो माता-पिता से संतान में जाते हैं।"
            ]
        },
        {
            id: "note_c8_math_1",
            classLevel: 8,
            subject: "गणित",
            chapterNumber: 1,
            titleHindi: "परिमेय संख्याएँ एवं उनके गुणधर्म",
            titleEnglish: "Rational Numbers and Properties",
            readTimeMinutes: 5,
            summary: "p/q के रूप में लिखी जाने वाली परिमेय संख्याओं के संवृत्त, क्रमविनिमेय और साहचर्य नियम।",
            keyPoints: [
                "वह संख्या जिसे p/q के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं और q ≠ 0, परिमेय संख्या कहलाती है।",
                "शून्य (0) योग के लिए तत्समक (Additive Identity) है।",
                "एक (1) गुणन के लिए तत्समक (Multiplicative Identity) है।",
                "दो परिमेय संख्याओं के बीच अनगिनत परिमेय संख्याएँ होती हैं।"
            ],
            detailedContent: `1. योज्य प्रतिलोम (Additive Inverse):\nकिसी संख्या 'a' का योज्य प्रतिलोम '-a' होता है, ताकि a + (-a) = 0 हो।\nउदाहरण: 2/3 का योज्य प्रतिलोम -2/3 है।\n\n2. गुणात्मक प्रतिलोम / व्युत्क्रम (Multiplicative Inverse):\nसंख्या 'a/b' का गुणात्मक प्रतिलोम 'b/a' होता है, ताकि (a/b) × (b/a) = 1 हो।\nउदाहरण: -5/7 का व्युत्क्रम -7/5 है। (शून्य का कोई व्युत्क्रम नहीं होता)\n\n3. वितरण नियम (Distributivity):\na × (b + c) = (a × b) + (a × c)`,
            formulas: [
                "योज्य तत्समक: a + 0 = a",
                "गुणात्मक तत्समक: a × 1 = a",
                "मध्यमान विधि: दो परिमेय संख्याओं a और b के बीच संख्या = (a + b) / 2"
            ]
        },
        {
            id: "note_c9_sci_1",
            classLevel: 9,
            subject: "विज्ञान",
            chapterNumber: 9,
            titleHindi: "गति के नियम एवं बल",
            titleEnglish: "Force and Laws of Motion",
            readTimeMinutes: 6,
            summary: "न्यूटन के तीनों गति के नियम, संवेग संरक्षण का सिद्धांत और गति के समीकरण।",
            keyPoints: [
                "प्रथम नियम (जड़त्व का नियम): वस्तु अपनी विराम या समान गति की अवस्था तब तक बनाए रखती है जब तक कोई बाहरी बल न लगे।",
                "द्वितीय नियम: संवेग परिवर्तन की दर लगाए गए असंतुलित बल के समानुपाती होती है (F = m × a)।",
                "तृतीय नियम: प्रत्येक क्रिया के बराबर और विपरीत दिशा में प्रतिक्रिया होती है।",
                "संवेग (p) = द्रव्यमान (m) × वेग (v), SI मात्रक kg·m/s है।"
            ],
            detailedContent: `1. न्यूटन के गति के समीकरण (एकसमान त्वरण के लिए):\n• v = u + at (पहला समीकरण: वेग-समय संबंध)\n• s = ut + ½ at² (दूसरा समीकरण: स्थिति-समय संबंध)\n• v² = u² + 2as (तीसरा समीकरण: स्थिति-वेग संबंध)\n(जहाँ u = प्रारंभिक वेग, v = अंतिम वेग, a = त्वरण, t = समय, s = तय की गई दूरी)\n\n2. जड़त्व (Inertia):\nकिसी वस्तु का वह प्राकृतिक गुण जो उसकी विराम या गति की अवस्था में परिवर्तन का विरोध करता है। वस्तु का द्रव्यमान उसके जड़त्व की माप है।\n\n3. क्रिया और प्रतिक्रिया:\nबंदूक से गोली छूटने पर बंदूक का पीछे की ओर झटका मारना (Recoil) तीसरे नियम का उदाहरण है।`,
            formulas: [
                "बल का सूत्र: F = m × a (मात्रक: न्यूटन N)",
                "संवेग संरक्षण: टकराने से पहले का कुल संवेग = टकराने के बाद का कुल संवेग (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂)"
            ]
        },
        {
            id: "note_c9_sci_2",
            classLevel: 9,
            subject: "विज्ञान",
            chapterNumber: 3,
            titleHindi: "परमाणु एवं अणु",
            titleEnglish: "Atoms and Molecules",
            readTimeMinutes: 5,
            summary: "डाल्टन का परमाणु सिद्धांत, रासायनिक संयोजन के नियम और मोल संकल्पना।",
            keyPoints: [
                "द्रव्यमान संरक्षण का नियम: किसी रासायनिक अभिक्रिया में द्रव्यमान का न तो सृजन हो सकता है और न ही विनाश।",
                "स्थिर अनुपात का नियम: किसी यौगिक में तत्व हमेशा एक निश्चित द्रव्यमान के अनुपात में होते हैं (जैसे जल में H:O = 1:8)।",
                "परमाणु किसी तत्व का सबसे छोटा कण है जो स्वतंत्र अवस्था में नहीं रह सकता (कुछ उत्कृष्ट गैसों को छोड़कर)।",
                "1 मोल = 6.022 × 10²³ कण (आवोगाद्रो संख्या)।"
            ],
            detailedContent: `डाल्टन का परमाणु सिद्धांत:\n1. सभी द्रव्य सूक्ष्म कणों से बने होते हैं जिन्हें परमाणु कहते हैं।\n2. परमाणु अविभाज्य सूक्ष्मतम कण होते हैं।\n3. किसी एक तत्व के सभी परमाणुओं का द्रव्यमान एवं रासायनिक गुणधर्म समान होते हैं।\n4. भिन्न-भिन्न तत्वों के परमाणु परस्पर छोटी पूर्ण संख्या के अनुपात में संयोग कर यौगिक बनाते हैं。\n\nआण्विक द्रव्यमान ज्ञात करना:\nजल (H₂O) का आण्विक द्रव्यमान:\n= (2 × H का द्रव्यमान) + (1 × O का द्रव्यमान)\n= (2 × 1) + (1 × 16) = 18 u`,
            formulas: [
                "आवोगाद्रो स्थिरांक (Nₐ) = 6.022 × 10²³ mol⁻¹",
                "मोलों की संख्या (n) = दिया गया द्रव्यमान (m) / मोलर द्रव्यमान (M)"
            ]
        },
        {
            id: "note_c10_sci_1",
            classLevel: 10,
            subject: "विज्ञान",
            chapterNumber: 10,
            titleHindi: "प्रकाश: परावर्तन तथा अपवर्तन",
            titleEnglish: "Light: Reflection and Refraction",
            readTimeMinutes: 7,
            summary: "समतल, अवतल व उत्तल दर्पण, लेंस के नियम, दर्पण सूत्र और आवर्धन।",
            keyPoints: [
                "परावर्तन के नियम: आपतन कोण (i) = परावर्तन कोण (r)। आपतित किरण, अभिलंब और परावर्तित किरण एक ही तल में होते हैं।",
                "दर्पण सूत्र: 1/f = 1/v + 1/u",
                "लेंस सूत्र: 1/f = 1/v - 1/u",
                "उत्तल दर्पण का उपयोग वाहनों में पीछे का दृश्य देखने (Rear-view mirror) के लिए होता है क्योंकि यह सदैव सीधा व छोटा प्रतिबिंब बनाता है।"
            ],
            detailedContent: `1. गोलीय दर्पण (Spherical Mirrors):\n• अवतल दर्पण (Concave Mirror): दंत चिकित्सक दाँतों का बड़ा प्रतिबिंब देखने के लिए तथा सौर भट्टी में इसका उपयोग करते हैं।\n• उत्तल दर्पण (Convex Mirror): इसका दृष्टि-क्षेत्र बहुत विस्तृत होता है।\n\n2. अपवर्तन (Refraction):\nजब प्रकाश की किरण एक माध्यम से दूसरे माध्यम में जाती है, तो अपने पथ से मुड़ जाती है।\n• विरल से सघन माध्यम में: अभिलंब की ओर झुकती है।\n• सघन से विरल माध्यम में: अभिलंब से दूर हटती है।\n\n3. स्नेल का अपवर्तन नियम:\nsin i / sin r = स्थिरांक (माध्यम 2 का माध्यम 1 के सापेक्ष अपवर्तनांक)\n\n4. लेंस की क्षमता (Power of Lens):\nP = 1 / f (मीटर में), इसका SI मात्रक डाइऑप्टर (D) है। उत्तल लेंस की क्षमता धनात्मक (+) तथा अवतल लेंस की ऋणात्मक (-) होती है।`,
            formulas: [
                "दर्पण सूत्र: 1/f = 1/v + 1/u",
                "लेंस सूत्र: 1/f = 1/v - 1/u",
                "आवर्धन (दर्पण): m = -v/u = h'/h",
                "क्षमता: P = 1/f (मीटर में, मात्रक: Dioptre D)"
            ]
        },
        {
            id: "note_c10_math_1",
            classLevel: 10,
            subject: "गणित",
            chapterNumber: 4,
            titleHindi: "द्विघात समीकरण और मूलों की प्रकृति",
            titleEnglish: "Quadratic Equations and Roots",
            readTimeMinutes: 6,
            summary: "ax² + bx + c = 0 का मानक रूप, विविक्तकर (Discriminant D) और श्रीधराचार्य सूत्र।",
            keyPoints: [
                "द्विघात समीकरण का मानक रूप: ax² + bx + c = 0 (जहाँ a ≠ 0)।",
                "विविक्तकर (Discriminant): D = b² - 4ac",
                "यदि D > 0, तो दो भिन्न वास्तविक मूल होते हैं।",
                "यदि D = 0, तो दो बराबर वास्तविक मूल होते हैं (-b/2a)।",
                "यदि D < 0, तो कोई वास्तविक मूल नहीं होता।"
            ],
            detailedContent: `1. हल करने की विधियाँ:\n• गुणनखंड विधि (Factorisation method)\n• पूर्ण वर्ग बनाकर\n• द्विघाती सूत्र (श्रीधराचार्य सूत्र):\nx = (-b ± √(b² - 4ac)) / (2a)\n\n2. उदाहरण:\nहल करें: 2x² - 7x + 3 = 0\nयहाँ a = 2, b = -7, c = 3\nD = (-7)² - 4(2)(3) = 49 - 24 = 25 (> 0, दो वास्तविक मूल)\nx = (-(-7) ± √25) / (2 × 2)\nx = (7 ± 5) / 4\nअतः x = 12/4 = 3 अथवा x = 2/4 = 1/2`,
            formulas: [
                "द्विघाती सूत्र: x = (-b ± √(b² - 4ac)) / 2a",
                "मूलों का योग: α + β = -b/a",
                "मूलों का गुणनफल: α × β = c/a"
            ]
        }
    ];

    const QUIZ_QUESTIONS = [
        {
            id: "q1",
            classLevel: 10,
            subject: "विज्ञान",
            questionHindi: "उत्तल दर्पण (Convex Mirror) का मुख्य रूप से किसमें उपयोग किया जाता है?",
            options: [
                "वाहनों के पश्च-दृश्य (रियर-व्यू) दर्पण में",
                "सौर भट्टी में सूर्य के प्रकाश को केंद्रित करने में",
                "दंत चिकित्सक द्वारा दाँतों को बड़ा देखने में",
                "टार्च की रिफ्लेक्टर कटोरी में"
            ],
            correctOptionIndex: 0,
            explanationHindi: "उत्तल दर्पण हमेशा सीधा और छोटा प्रतिबिंब बनाता है तथा इसका दृष्टि-क्षेत्र बहुत बड़ा होता है, इसलिए वाहनों में पीछे का ट्रैफिक देखने के लिए इसका उपयोग किया जाता है।"
        },
        {
            id: "q2",
            classLevel: 9,
            subject: "विज्ञान",
            questionHindi: "न्यूटन के गति के किस नियम को 'जड़त्व का नियम' (Law of Inertia) भी कहा जाता है?",
            options: [
                "द्वितीय गति नियम",
                "प्रथम गति नियम",
                "तृतीय गति नियम",
                "गुरुत्वाकर्षण का नियम"
            ],
            correctOptionIndex: 1,
            explanationHindi: "न्यूटन का प्रथम नियम कहता है कि कोई वस्तु तब तक अपनी विराम या एकसमान गति की अवस्था में रहती है जब तक उस पर कोई बाहरी असंतुलित बल न लगे। इसे जड़त्व का नियम कहते हैं।"
        },
        {
            id: "q3",
            classLevel: 8,
            subject: "विज्ञान",
            questionHindi: "कोशिका का 'बिजलीघर' (Powerhouse of the Cell) किसे कहा जाता है?",
            options: [
                "लाइसोसोम",
                "केंद्रक (Nucleus)",
                "माइटोकॉन्ड्रिया",
                "राइबोसोम"
            ],
            correctOptionIndex: 2,
            explanationHindi: "माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ऊर्जा (ATP के रूप में) का निर्माण और संचय होता है, इसलिए इसे कोशिका का पावरहाउस कहा जाता है।"
        },
        {
            id: "q4",
            classLevel: 7,
            subject: "विज्ञान",
            questionHindi: "पौधों में प्रकाश संश्लेषण के दौरान कौन सी गैस उत्सर्जित (बाहर) होती है?",
            options: [
                "कार्बन डाइऑक्साइड (CO₂)",
                "नाइट्रोजन (N₂)",
                "हाइड्रोजन (H₂)",
                "ऑक्सीजन (O₂)"
            ],
            correctOptionIndex: 3,
            explanationHindi: "प्रकाश संश्लेषण प्रक्रिया में पौधे जल और कार्बन डाइऑक्साइड का उपयोग करके ग्लूकोज बनाते हैं और उप-उत्पाद के रूप में ऑक्सीजन गैस मुक्त करते हैं।"
        },
        {
            id: "q5",
            classLevel: 10,
            subject: "गणित",
            questionHindi: "यदि किसी द्विघात समीकरण ax² + bx + c = 0 का विविक्तकर (D = b² - 4ac) शून्य (0) हो, तो मूल कैसे होंगे?",
            options: [
                "दो बराबर वास्तविक मूल",
                "दो भिन्न वास्तविक मूल",
                "कोई वास्तविक मूल नहीं (काल्पनिक)",
                "अनगिनत मूल"
            ],
            correctOptionIndex: 0,
            explanationHindi: "जब D = 0 होता है, तो द्विघात समीकरण के दोनों मूल वास्तविक और समान (बराबर) होते हैं, जिनका मान -b/(2a) होता है।"
        }
    ];

    const MATH_QUESTIONS = [
        {
            id: "math_1",
            classLevel: 6,
            topicHindi: "भिन्न (Fractions)",
            questionHindi: "हल कीजिए: (2/5) + (3/10) का सरलतम मान क्या होगा?",
            options: ["5/15", "7/10", "1/2", "4/5"],
            correctIndex: 1,
            hintHindi: "सर्वप्रथम दोनों हरों (5 और 10) का ल.स.प. (LCM) ज्ञात करें।",
            formulaUsed: "ल.स.प. द्वारा समान हर में बदलना",
            stepByStepExplanationHindi: [
                "चरण 1: हर 5 और 10 का ल.स.प. = 10",
                "चरण 2: 2/5 को हर 10 में बदलें: (2 × 2) / (5 × 2) = 4/10",
                "चरण 3: अब दोनों को जोड़ें: 4/10 + 3/10 = (4 + 3) / 10",
                "चरण 4: उत्तर = 7/10"
            ],
            finalAnswerHindi: "7/10"
        },
        {
            id: "math_2",
            classLevel: 7,
            topicHindi: "प्रतिशत (Percentage)",
            questionHindi: "एक छात्र ने 500 में से 420 अंक प्राप्त किए। उसका प्रतिशत कितना है?",
            options: ["80%", "82%", "84%", "85%"],
            correctIndex: 2,
            hintHindi: "प्रतिशत = (प्राप्तांक / कुल अंक) × 100",
            formulaUsed: "प्रतिशत = (भाग / कुल) × 100",
            stepByStepExplanationHindi: [
                "चरण 1: छात्र का प्राप्तांक = 420",
                "चरण 2: कुल अंक = 500",
                "चरण 3: प्रतिशत सूत्र = (420 / 500) × 100",
                "चरण 4: 420 / 5 = 84%",
                "अतः छात्र ने 84% अंक प्राप्त किए।"
            ],
            finalAnswerHindi: "84%"
        },
        {
            id: "math_3",
            classLevel: 7,
            topicHindi: "लाभ और हानि (Profit & Loss)",
            questionHindi: "एक दुकानदार ने एक पुस्तक ₹200 में खरीदी और ₹250 में बेची। लाभ प्रतिशत क्या है?",
            options: ["20%", "25%", "30%", "15%"],
            correctIndex: 1,
            hintHindi: "लाभ = विक्रय मूल्य - क्रय मूल्य; लाभ % = (लाभ / क्रय मूल्य) × 100",
            formulaUsed: "लाभ % = (लाभ / क्रय मूल्य) × 100",
            stepByStepExplanationHindi: [
                "चरण 1: क्रय मूल्य (CP) = ₹200, विक्रय मूल्य (SP) = ₹250",
                "चरण 2: लाभ = SP - CP = 250 - 200 = ₹50",
                "चरण 3: लाभ प्रतिशत = (50 / 200) × 100",
                "चरण 4: 50 / 2 = 25%",
                "दुकानदार को 25% का लाभ हुआ।"
            ],
            finalAnswerHindi: "25%"
        },
        {
            id: "math_4",
            classLevel: 8,
            topicHindi: "क्षेत्रफल एवं परिमाप (Area & Perimeter)",
            questionHindi: "एक आयताकार मैदान की लंबाई 20 मीटर और चौड़ाई 15 मीटर है। मैदान का क्षेत्रफल और परिमाप क्या होगा?",
            options: [
                "क्षेत्रफल = 300 वर्ग मी, परिमाप = 70 मी",
                "क्षेत्रफल = 350 वर्ग मी, परिमाप = 60 मी",
                "क्षेत्रफल = 280 वर्ग मी, परिमाप = 70 मी",
                "क्षेत्रफल = 300 वर्ग मी, परिमाप = 35 मी"
            ],
            correctIndex: 0,
            hintHindi: "आयत का क्षेत्रफल = लंबाई × चौड़ाई; परिमाप = 2 × (लंबाई + चौड़ाई)",
            formulaUsed: "क्षेत्रफल = l × b, परिमाप = 2(l + b)",
            stepByStepExplanationHindi: [
                "चरण 1: लंबाई (l) = 20 मी, चौड़ाई (b) = 15 मी",
                "चरण 2: क्षेत्रफल = l × b = 20 × 15 = 300 वर्ग मीटर (m²)",
                "चरण 3: परिमाप = 2 × (20 + 15) = 2 × 35 = 70 मीटर",
                "अतः क्षेत्रफल 300 m² और परिमाप 70 m है।"
            ],
            finalAnswerHindi: "क्षेत्रफल = 300 m², परिमाप = 70 m"
        },
        {
            id: "math_5",
            classLevel: 8,
            topicHindi: "बीजगणित (Basic Algebra)",
            questionHindi: "समीकरण 3x + 7 = 28 में x का मान ज्ञात कीजिए:",
            options: ["x = 5", "x = 7", "x = 9", "x = 6"],
            correctIndex: 1,
            hintHindi: "पहले 7 को दाईं ओर ले जाकर घटाइए, फिर 3 से भाग दीजिए।",
            formulaUsed: "रैखिक समीकरण का पक्षांतरण (Transposition)",
            stepByStepExplanationHindi: [
                "चरण 1: दिया गया समीकरण: 3x + 7 = 28",
                "चरण 2: +7 का दाईं ओर पक्षांतरण करने पर: 3x = 28 - 7",
                "चरण 3: 3x = 21",
                "चरण 4: x = 21 / 3",
                "चरण 5: x = 7"
            ],
            finalAnswerHindi: "x = 7"
        }
    ];

    const AI_GUIDE_ITEMS = [
        {
            id: "ai_guide_1",
            titleHindi: "परीक्षा की तैयारी के 5 अचूक नियम",
            subtitleHindi: "स्मार्ट रिवीजन तकनीक और समय प्रबंधन",
            category: "Exam Tips",
            contentHindi: "कम समय में अधिक प्रभावी पढ़ाई करने के लिए वैज्ञानिक रूप से प्रमाणित अध्ययन तकनीकें।",
            tips: [
                "पोमोडोरो तकनीक: 25 मिनट एकाग्र होकर पढ़ें, फिर 5 मिनट का ब्रेक लें। 4 चक्रों के बाद 20 मिनट का लंबा ब्रेक लें।",
                "सक्रिय स्मरण (Active Recall): केवल पढ़ने के बजाय किताब बंद करके जो पढ़ा उसे याद करने और लिखने का अभ्यास करें।",
                "स्पैस्ड रिपीटिशन: किसी भी नए अध्याय को 1 दिन बाद, 3 दिन बाद और 7 दिन बाद दोहराएं।",
                "लिखकर याद करें: सूत्रों और महत्वपूर्ण परिभाषाओं के अपने हाथ से संक्षिप्त फ्लैशकार्ड बनाएं।",
                "पर्याप्त नींद लें: परीक्षा से पहले रात को 7-8 घंटे की गहरी नींद मस्तिष्क में याददाश्त मजबूत करती है।"
            ]
        },
        {
            id: "ai_guide_2",
            titleHindi: "गणित के महत्वपूर्ण सर्वसमिकाएँ और सूत्र",
            subtitleHindi: "बीजगणित और ज्यामिति त्वरित संदर्भ",
            category: "Formula Sheet",
            contentHindi: "कक्षा 8 से 10 के छात्रों के लिए हर परीक्षा में बार-बार पूछे जाने वाले आवश्यक सूत्र।",
            tips: [
                "(a + b)² = a² + 2ab + b²",
                "(a - b)² = a² - 2ab + b²",
                "a² - b² = (a + b)(a - b)",
                "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca",
                "वृत्त का क्षेत्रफल = πr², वृत्त की परिधि = 2πr",
                "त्रिभुज का क्षेत्रफल = ½ × आधार × ऊँचाई = √(s(s-a)(s-b)(s-c)) [हीरोन सूत्र]",
                "बेलन का आयतन = πr²h, कुल पृष्ठीय क्षेत्रफल = 2πr(r + h)"
            ]
        },
        {
            id: "ai_guide_3",
            titleHindi: "दैनिक अध्ययन समय सारणी (Time Table)",
            subtitleHindi: "संतुलित और तनावमुक्त दिनचर्या",
            category: "Study Plan",
            contentHindi: "स्कूल के साथ-साथ स्वाध्याय (Self Study) के लिए आदर्श 3-4 घंटे का व्यावहारिक शेड्यूल।",
            tips: [
                "सुबह (6:00 - 7:00 AM): कठिन विषय (जैसे विज्ञान के सिद्धांत या सूत्र) जब दिमाग ताजा हो।",
                "शाम (5:00 - 6:30 PM): गणित अभ्यास और संख्यात्मक प्रश्न (Numericals)।",
                "शाम (7:00 - 8:00 PM): सामाजिक विज्ञान या भाषा विषयों के लंबे प्रश्न-उत्तर।",
                "रात (9:30 - 10:00 PM): दिनभर में जो पढ़ा उसका 30 मिनट का त्वरित रिवीजन।"
            ]
        },
        {
            id: "ai_guide_4",
            titleHindi: "अक्सर पूछे जाने वाले सवाल (Study FAQs)",
            subtitleHindi: "विद्यार्थियों की आम समस्याओं का समाधान",
            category: "FAQ",
            contentHindi: "पढ़ाई में मन न लगना, याद न रहना जैसी आम शंकाओं के समाधान।",
            tips: [
                "सवाल: पढ़ाई करते समय ध्यान भटकता है, क्या करें? ➔ समाधान: पढ़ते समय फोन को दूसरे कमरे में रखें और केवल एक विषय की किताब मेज पर रखें।",
                "सवाल: गणित कठिन क्यों लगता है? ➔ समाधान: सीधे कठिन प्रश्न हल न करें। पहले बुनियादी सूत्र और हल किए गए उदाहरण (Solved Examples) समझें।",
                "सवाल: विज्ञान के आरेख (Diagrams) कैसे याद रखें? ➔ समाधान: आरेखों को रफ कॉपी में बिना देखे 3 बार नामांकित (Labeled) बनाकर अभ्यास करें।"
            ]
        }
    ];

    // ==========================================
    // 2. LOCAL STORAGE / PREFERENCES
    // ==========================================
    const Storage = {
        getHighScore: () => parseInt(localStorage.getItem('study_buddy_high_score') || '0', 10),
        setHighScore: (score) => {
            const current = Storage.getHighScore();
            if (score > current) localStorage.setItem('study_buddy_high_score', score);
        },
        getTotalQuizzes: () => parseInt(localStorage.getItem('study_buddy_total_quizzes') || '0', 10),
        incrementTotalQuizzes: () => {
            const current = Storage.getTotalQuizzes();
            localStorage.setItem('study_buddy_total_quizzes', current + 1);
        },
        getBookmarks: () => {
            try {
                return JSON.parse(localStorage.getItem('study_buddy_bookmarks') || '[]');
            } catch (e) {
                return [];
            }
        },
        toggleBookmark: (noteId) => {
            let bookmarks = Storage.getBookmarks();
            const exists = bookmarks.includes(noteId);
            if (exists) {
                bookmarks = bookmarks.filter(id => id !== noteId);
            } else {
                bookmarks.push(noteId);
            }
            localStorage.setItem('study_buddy_bookmarks', JSON.stringify(bookmarks));
            return !exists;
        },
        isBookmarked: (noteId) => Storage.getBookmarks().includes(noteId),
        getSolvedMath: () => {
            try {
                return JSON.parse(localStorage.getItem('study_buddy_math_solved') || '[]');
            } catch (e) {
                return [];
            }
        },
        markMathSolved: (qId) => {
            let solved = Storage.getSolvedMath();
            if (!solved.includes(qId)) {
                solved.push(qId);
                localStorage.setItem('study_buddy_math_solved', JSON.stringify(solved));
            }
        },
        getTheme: () => localStorage.getItem('study_buddy_theme') || 'light',
        setTheme: (t) => localStorage.setItem('study_buddy_theme', t)
    };

    // ==========================================
    // 3. UI CONTROLLER & APP STATE
    // ==========================================
    let currentSelectedClass = 'all';
    let isBookmarkFilterActive = false;
    let searchQuery = '';
    let currentActiveNote = null;
    let isModalFontLarge = false;

    // Quiz State
    let quizCurrentIndex = 0;
    let quizSelectedOption = null;
    let quizIsAnswerChecked = false;
    let quizUserAnswers = {}; // index -> optionIndex
    let quizScore = 0;

    // Math State
    let mathSelectedTopic = 'all';
    let mathCurrentIndex = 0;
    let mathSelectedOption = null;
    let mathIsHintVisible = false;
    let mathIsSolutionVisible = false;

    // AI Guide State
    let aiSelectedCategory = 'all';
    let aiExpandedItemId = 'ai_guide_1';

    // ==========================================
    // 4. INITIALIZATION
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initNavigation();
        initNotesSection();
        initQuizSection();
        initMathSection();
        initAISection();
        initModals();
    });

    // Theme Switcher
    function initTheme() {
        const savedTheme = Storage.getTheme();
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        const themeToggleBtn = document.getElementById('themeToggleBtn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                Storage.setTheme(next);
                updateThemeIcon(next);
            });
        }
    }

    function updateThemeIcon(theme) {
        const iconEl = document.getElementById('themeIcon');
        if (iconEl) {
            iconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Tab Navigation
    function initNavigation() {
        const navItems = document.querySelectorAll('.bottom-nav .nav-item');
        const sections = document.querySelectorAll('.tab-section');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.getAttribute('data-target');

                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');

                sections.forEach(sec => {
                    if (sec.id === targetId) {
                        sec.classList.add('active');
                    } else {
                        sec.classList.remove('active');
                    }
                });

                // Scroll to top on switch
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // ==========================================
    // 5. STUDY NOTES LOGIC
    // ==========================================
    function initNotesSection() {
        const searchInput = document.getElementById('notesSearchInput');
        const clearBtn = document.getElementById('clearSearchBtn');
        const classChips = document.querySelectorAll('.filter-chips-row .chip[data-class]');
        const bookmarkChip = document.getElementById('bookmarkFilterBtn');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                clearBtn.style.display = searchQuery ? 'block' : 'none';
                renderNotes();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchQuery = '';
                clearBtn.style.display = 'none';
                renderNotes();
            });
        }

        classChips.forEach(chip => {
            chip.addEventListener('click', () => {
                classChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentSelectedClass = chip.getAttribute('data-class');
                isBookmarkFilterActive = false;
                bookmarkChip.classList.remove('active');
                document.getElementById('bookmarkActiveBadge').style.display = 'none';
                renderNotes();
            });
        });

        if (bookmarkChip) {
            bookmarkChip.addEventListener('click', () => {
                isBookmarkFilterActive = !isBookmarkFilterActive;
                bookmarkChip.classList.toggle('active', isBookmarkFilterActive);
                document.getElementById('bookmarkActiveBadge').style.display = isBookmarkFilterActive ? 'inline-block' : 'none';
                renderNotes();
            });
        }

        renderNotes();
    }

    function renderNotes() {
        const container = document.getElementById('notesList');
        const countLabel = document.getElementById('notesCountLabel');
        if (!container) return;

        const filtered = STUDY_NOTES.filter(note => {
            const matchesClass = currentSelectedClass === 'all' || note.classLevel.toString() === currentSelectedClass;
            const matchesBookmark = !isBookmarkFilterActive || Storage.isBookmarked(note.id);
            const matchesQuery = !searchQuery ||
                note.titleHindi.toLowerCase().includes(searchQuery) ||
                note.titleEnglish.toLowerCase().includes(searchQuery) ||
                note.subject.toLowerCase().includes(searchQuery) ||
                note.summary.toLowerCase().includes(searchQuery);
            return matchesClass && matchesBookmark && matchesQuery;
        });

        if (countLabel) {
            countLabel.textContent = `${filtered.length} अध्याय नोट्स उपलब्ध`;
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px 16px; color: var(--text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 10px;">📖</div>
                    <h3 style="font-size: 16px; margin-bottom: 6px;">कोई अध्ययन नोट नहीं मिला</h3>
                    <p style="font-size: 13px; color: var(--text-muted);">कृपया अन्य कक्षा चुनें या खोज शब्द बदलें।</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(note => {
            const isBookmarked = Storage.isBookmarked(note.id);
            return `
                <div class="card note-card" data-note-id="${note.id}">
                    <div class="card-header-row">
                        <div class="tag-group">
                            <span class="tag class-tag">कक्षा ${note.classLevel}</span>
                            <span class="tag subject-tag">${note.subject}</span>
                        </div>
                        <button class="icon-btn bookmark-btn" data-id="${note.id}" aria-label="सहेजें" style="width:34px; height:34px;">
                            ${isBookmarked ? '★' : '☆'}
                        </button>
                    </div>
                    <h3 class="card-title">${note.titleHindi}</h3>
                    <div class="card-subtitle">${note.titleEnglish} • अध्याय ${note.chapterNumber}</div>
                    <p class="card-summary">${note.summary}</p>
                    <div class="card-footer-row">
                        <span class="read-time">⏱️ ${note.readTimeMinutes} मिनट का पाठ</span>
                        <button class="btn btn-primary" style="min-height:36px; padding:6px 14px; font-size:13px;" data-read-id="${note.id}">
                            नोट्स पढ़ें ➔
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Attach Click Handlers
        container.querySelectorAll('.note-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.bookmark-btn')) return;
                const noteId = card.getAttribute('data-note-id');
                const note = STUDY_NOTES.find(n => n.id === noteId);
                if (note) openNoteModal(note);
            });
        });

        container.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const noteId = btn.getAttribute('data-id');
                const isNow = Storage.toggleBookmark(noteId);
                btn.textContent = isNow ? '★' : '☆';
                if (isBookmarkFilterActive) renderNotes();
            });
        });
    }

    function openNoteModal(note) {
        currentActiveNote = note;
        const modal = document.getElementById('noteModal');
        const content = document.getElementById('noteModalContent');
        const bookmarkBtn = document.getElementById('modalBookmarkBtn');

        if (!modal || !content) return;

        updateModalBookmarkBtn();

        content.innerHTML = `
            <div class="tag-group" style="margin-bottom: 8px;">
                <span class="tag class-tag">कक्षा ${note.classLevel}</span>
                <span class="tag subject-tag">${note.subject} • अध्याय ${note.chapterNumber}</span>
            </div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 4px;">${note.titleHindi}</h2>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 16px;">${note.titleEnglish}</p>

            <div class="reader-highlights">
                <h4 style="color: var(--primary); font-size: 14px; margin-bottom: 8px;">⭐ मुख्य बिंदु (Key Highlights):</h4>
                <ul style="padding-left: 18px; font-size: 13.5px; line-height: 1.6;">
                    ${note.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
                </ul>
            </div>

            <div style="margin: 16px 0;">
                <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 8px;">विस्तृत अध्ययन सामग्री:</h4>
                <div class="reader-body-text" style="font-size: 14px; line-height: 1.7; white-space: pre-line; background: var(--surface-variant); padding: 14px; border-radius: var(--radius-md);">
                    ${note.detailedContent}
                </div>
            </div>

            ${note.formulas && note.formulas.length ? `
                <div class="reader-formulas">
                    <h4 style="color: #B45309; font-size: 14px; margin-bottom: 8px;">📐 महत्वपूर्ण सूत्र एवं परिभाषाएँ:</h4>
                    <ul style="padding-left: 18px; font-size: 13.5px; line-height: 1.6;">
                        ${note.formulas.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function updateModalBookmarkBtn() {
        const bookmarkBtn = document.getElementById('modalBookmarkBtn');
        if (bookmarkBtn && currentActiveNote) {
            const isBookmarked = Storage.isBookmarked(currentActiveNote.id);
            bookmarkBtn.textContent = isBookmarked ? '★' : '☆';
            bookmarkBtn.style.color = isBookmarked ? '#D97706' : 'var(--text-muted)';
        }
    }

    // ==========================================
    // 6. QUIZ LOGIC (5-Question Interactive Flow)
    // ==========================================
    function initQuizSection() {
        const actionBtn = document.getElementById('quizActionBtn');
        const restartBtn = document.getElementById('restartQuizBtn');

        if (actionBtn) {
            actionBtn.addEventListener('click', handleQuizAction);
        }

        if (restartBtn) {
            restartBtn.addEventListener('click', restartQuiz);
        }

        loadQuizHighScoreHeader();
        renderQuizQuestion();
    }

    function loadQuizHighScoreHeader() {
        const header = document.getElementById('quizHighScoreHeader');
        if (header) {
            header.textContent = `सर्वश्रेष्ठ: ${Storage.getHighScore()}/5`;
        }
    }

    function renderQuizQuestion() {
        const currentQ = QUIZ_QUESTIONS[quizCurrentIndex];
        if (!currentQ) return;

        // Update progress counters
        document.getElementById('quizQuestionCounter').textContent = `प्रश्न ${quizCurrentIndex + 1} / ${QUIZ_QUESTIONS.length}`;
        const pct = ((quizCurrentIndex + 1) / QUIZ_QUESTIONS.length) * 100;
        document.getElementById('quizProgressBar').style.width = `${pct}%`;

        // Update Badges & Text
        document.getElementById('quizClassBadge').textContent = `कक्षा ${currentQ.classLevel}`;
        document.getElementById('quizSubjectBadge').textContent = currentQ.subject;
        document.getElementById('quizQuestionText').textContent = currentQ.questionHindi;

        // Reset explanation
        document.getElementById('quizExplanationCard').style.display = 'none';

        // Render Options
        const optionsList = document.getElementById('quizOptionsList');
        optionsList.innerHTML = currentQ.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = quizSelectedOption === idx;
            return `
                <div class="option-item ${isSelected ? 'selected' : ''}" data-opt-idx="${idx}">
                    <div class="option-badge">${letter}</div>
                    <div class="option-text">${opt}</div>
                </div>
            `;
        }).join('');

        // Action button state
        const actionBtn = document.getElementById('quizActionBtn');
        actionBtn.disabled = quizSelectedOption === null;
        actionBtn.textContent = 'उत्तर जांचें (Check Answer)';

        // Option click handlers
        optionsList.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', () => {
                if (quizIsAnswerChecked) return;
                const idx = parseInt(item.getAttribute('data-opt-idx'), 10);
                quizSelectedOption = idx;

                optionsList.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
                item.classList.add('selected');

                actionBtn.disabled = false;
            });
        });
    }

    function handleQuizAction() {
        const currentQ = QUIZ_QUESTIONS[quizCurrentIndex];
        const actionBtn = document.getElementById('quizActionBtn');

        if (!quizIsAnswerChecked) {
            // Check Answer
            if (quizSelectedOption === null) return;

            quizIsAnswerChecked = true;
            quizUserAnswers[quizCurrentIndex] = quizSelectedOption;

            const isCorrect = quizSelectedOption === currentQ.correctOptionIndex;
            if (isCorrect) quizScore++;

            // Highlight options
            const options = document.querySelectorAll('#quizOptionsList .option-item');
            options.forEach((optEl, idx) => {
                if (idx === currentQ.correctOptionIndex) {
                    optEl.classList.add('correct');
                    optEl.querySelector('.option-badge').textContent = '✓';
                } else if (idx === quizSelectedOption && !isCorrect) {
                    optEl.classList.add('wrong');
                    optEl.querySelector('.option-badge').textContent = '✗';
                }
            });

            // Show explanation
            const explCard = document.getElementById('quizExplanationCard');
            const statusEl = document.getElementById('explanationStatus');
            const iconEl = document.getElementById('explanationIcon');
            const bodyEl = document.getElementById('explanationText');

            if (isCorrect) {
                statusEl.textContent = 'शानदार! सही उत्तर';
                statusEl.style.color = 'var(--success)';
                iconEl.textContent = '✓';
            } else {
                statusEl.textContent = 'गलत उत्तर! सही उत्तर देखें';
                statusEl.style.color = 'var(--danger)';
                iconEl.textContent = '✗';
            }
            bodyEl.textContent = `💡 स्पष्टीकरण: ${currentQ.explanationHindi}`;
            explCard.style.display = 'block';

            // Change button to next / finish
            const isLast = quizCurrentIndex === QUIZ_QUESTIONS.length - 1;
            actionBtn.textContent = isLast ? 'परिणाम देखें (View Results)' : 'अगला प्रश्न (Next Question) ➔';
        } else {
            // Next Question or Finish
            if (quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
                quizCurrentIndex++;
                quizSelectedOption = null;
                quizIsAnswerChecked = false;
                renderQuizQuestion();
            } else {
                showQuizResults();
            }
        }
    }

    function showQuizResults() {
        document.getElementById('quizActiveView').style.display = 'none';
        document.getElementById('quizResultsView').style.display = 'block';

        // Save progress to local storage
        Storage.setHighScore(quizScore);
        Storage.incrementTotalQuizzes();

        const pct = Math.round((quizScore / QUIZ_QUESTIONS.length) * 100);
        document.getElementById('resultsScoreDisplay').textContent = `${QUIZ_QUESTIONS.length} में से ${quizScore} सही`;
        document.getElementById('resultsPercentageDisplay').textContent = `सफलता दर: ${pct}%`;

        const banner = document.getElementById('resultsMessageBanner');
        const trophy = document.getElementById('resultsTrophy');

        if (quizScore === 5) {
            banner.textContent = 'अद्भुत! 5/5 पूरे अंक! 🌟';
            trophy.textContent = '🏆';
        } else if (quizScore >= 3) {
            banner.textContent = 'शाबाश! आपने बहुत अच्छा प्रयास किया! 👍';
            trophy.textContent = '🌟';
        } else {
            banner.textContent = 'अच्छा प्रयास! पुनरावृत्ति से आप और बेहतर कर सकते हैं! 💪';
            trophy.textContent = '📚';
        }

        document.getElementById('resultsHighScore').textContent = `${Storage.getHighScore()} / 5`;
        document.getElementById('resultsTotalPlayed').textContent = `${Storage.getTotalQuizzes()} बार`;

        // Render Question Reviews
        const reviewList = document.getElementById('quizReviewList');
        reviewList.innerHTML = QUIZ_QUESTIONS.map((q, idx) => {
            const userChoice = quizUserAnswers[idx];
            const isCorrect = userChoice === q.correctOptionIndex;
            return `
                <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                    <div class="review-title-row">
                        <strong>प्रश्न ${idx + 1}</strong>
                        <span class="tag ${isCorrect ? 'subject-tag' : 'math-tag'}">${isCorrect ? '✓ सही' : '✗ गलत'}</span>
                    </div>
                    <p style="font-weight: 600; font-size: 14px; margin-bottom: 6px;">${q.questionHindi}</p>
                    <p style="font-size: 13px; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                        आपका उत्तर: ${q.options[userChoice] || 'अनुत्तरित'}
                    </p>
                    ${!isCorrect ? `<p style="font-size: 13px; color: var(--success); font-weight: 700;">सही उत्तर: ${q.options[q.correctOptionIndex]}</p>` : ''}
                    <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        💡 स्पष्टीकरण: ${q.explanationHindi}
                    </p>
                </div>
            `;
        }).join('');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function restartQuiz() {
        quizCurrentIndex = 0;
        quizSelectedOption = null;
        quizIsAnswerChecked = false;
        quizUserAnswers = {};
        quizScore = 0;

        document.getElementById('quizActiveView').style.display = 'block';
        document.getElementById('quizResultsView').style.display = 'none';

        loadQuizHighScoreHeader();
        renderQuizQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==========================================
    // 7. MATH PRACTICE LOGIC
    // ==========================================
    function initMathSection() {
        const topicChips = document.querySelectorAll('#mathTopicChips .chip');
        const toggleHintBtn = document.getElementById('toggleHintBtn');
        const toggleSolutionBtn = document.getElementById('toggleSolutionBtn');
        const nextMathBtn = document.getElementById('nextMathBtn');
        const prevMathBtn = document.getElementById('prevMathBtn');

        topicChips.forEach(chip => {
            chip.addEventListener('click', () => {
                topicChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                mathSelectedTopic = chip.getAttribute('data-topic');
                mathCurrentIndex = 0;
                mathSelectedOption = null;
                mathIsHintVisible = false;
                mathIsSolutionVisible = false;
                renderMathQuestion();
            });
        });

        if (toggleHintBtn) {
            toggleHintBtn.addEventListener('click', () => {
                mathIsHintVisible = !mathIsHintVisible;
                document.getElementById('mathHintCard').style.display = mathIsHintVisible ? 'block' : 'none';
                toggleHintBtn.innerHTML = mathIsHintVisible ? '<span>💡</span> संकेत छिपाएं' : '<span>💡</span> संकेत / सूत्र देखें';
            });
        }

        if (toggleSolutionBtn) {
            toggleSolutionBtn.addEventListener('click', () => {
                mathIsSolutionVisible = !mathIsSolutionVisible;
                document.getElementById('mathSolutionCard').style.display = mathIsSolutionVisible ? 'block' : 'none';
                toggleSolutionBtn.innerHTML = mathIsSolutionVisible ? '<span>📝</span> हल छिपाएं' : '<span>📝</span> संपूर्ण हल देखें';
            });
        }

        if (nextMathBtn) {
            nextMathBtn.addEventListener('click', () => {
                const list = getFilteredMathQuestions();
                if (mathCurrentIndex < list.length - 1) {
                    mathCurrentIndex++;
                } else {
                    mathCurrentIndex = 0;
                }
                mathSelectedOption = null;
                mathIsHintVisible = false;
                mathIsSolutionVisible = false;
                renderMathQuestion();
            });
        }

        if (prevMathBtn) {
            prevMathBtn.addEventListener('click', () => {
                if (mathCurrentIndex > 0) {
                    mathCurrentIndex--;
                    mathSelectedOption = null;
                    mathIsHintVisible = false;
                    mathIsSolutionVisible = false;
                    renderMathQuestion();
                }
            });
        }

        renderMathQuestion();
    }

    function getFilteredMathQuestions() {
        if (mathSelectedTopic === 'all') return MATH_QUESTIONS;
        return MATH_QUESTIONS.filter(q => q.topicHindi.startsWith(mathSelectedTopic));
    }

    function renderMathQuestion() {
        const list = getFilteredMathQuestions();
        const q = list[mathCurrentIndex];
        if (!q) return;

        // Counter & Solved
        document.getElementById('mathCounterLabel').textContent = `प्रश्न ${mathCurrentIndex + 1} / ${list.length}`;
        const solvedCount = Storage.getSolvedMath().length;
        document.getElementById('mathSolvedCount').textContent = `कुल हल: ${solvedCount}`;

        // Question Details
        document.getElementById('mathTopicBadge').textContent = q.topicHindi;
        const isSolved = Storage.getSolvedMath().includes(q.id);
        document.getElementById('mathSolvedBadge').style.display = isSolved ? 'inline-block' : 'none';
        document.getElementById('mathQuestionText').textContent = q.questionHindi;

        // Reset Toggles
        document.getElementById('mathHintCard').style.display = 'none';
        document.getElementById('mathSolutionCard').style.display = 'none';
        document.getElementById('toggleHintBtn').innerHTML = '<span>💡</span> संकेत / सूत्र देखें';
        document.getElementById('toggleSolutionBtn').innerHTML = '<span>📝</span> संपूर्ण हल देखें';

        // Fill Hint & Solution
        document.getElementById('mathHintText').textContent = q.hintHindi;
        document.getElementById('mathFormulaText').textContent = `सूत्र: ${q.formulaUsed}`;

        const stepsContainer = document.getElementById('mathStepsList');
        stepsContainer.innerHTML = q.stepByStepExplanationHindi.map(s => `<p style="margin-bottom: 4px;">${s}</p>`).join('');
        document.getElementById('mathFinalAnswerBox').textContent = `अंतिम उत्तर: ${q.finalAnswerHindi}`;

        // Render Options
        const optionsList = document.getElementById('mathOptionsList');
        optionsList.innerHTML = q.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = mathSelectedOption === idx;
            const isCorrect = idx === q.correctIndex;
            let cls = '';
            if (mathSelectedOption !== null) {
                if (isCorrect) cls = 'correct';
                else if (isSelected) cls = 'wrong';
            }
            return `
                <div class="option-item ${cls}" data-opt-idx="${idx}">
                    <div class="option-badge">${letter}</div>
                    <div class="option-text">${opt}</div>
                </div>
            `;
        }).join('');

        // Navigation visibility
        document.getElementById('prevMathBtn').style.display = mathCurrentIndex > 0 ? 'inline-flex' : 'none';
        const isLast = mathCurrentIndex === list.length - 1;
        document.getElementById('nextMathBtn').textContent = isLast ? 'पुनः शुरू करें ↺' : 'अगला प्रश्न ➔';

        // Options Click
        optionsList.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.getAttribute('data-opt-idx'), 10);
                mathSelectedOption = idx;

                if (idx === q.correctIndex) {
                    Storage.markMathSolved(q.id);
                    document.getElementById('mathSolvedBadge').style.display = 'inline-block';
                    document.getElementById('mathSolvedCount').textContent = `कुल हल: ${Storage.getSolvedMath().length}`;
                }
                renderMathQuestion();
            });
        });
    }

    // ==========================================
    // 8. AI TEACHER LOGIC
    // ==========================================
    function initAISection() {
        const categoryChips = document.querySelectorAll('#aiCategoryChips .chip');
        const askBtn = document.getElementById('askAIBtn');
        const promptInput = document.getElementById('aiQuestionInput');
        const presetChips = document.querySelectorAll('.preset-chip');

        presetChips.forEach(chip => {
            chip.addEventListener('click', () => {
                if (promptInput) {
                    promptInput.value = chip.getAttribute('data-prompt');
                }
            });
        });

        if (askBtn) {
            askBtn.addEventListener('click', () => {
                document.getElementById('aiNoticeModal').style.display = 'flex';
            });
        }

        categoryChips.forEach(chip => {
            chip.addEventListener('click', () => {
                categoryChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                aiSelectedCategory = chip.getAttribute('data-category');
                renderAIGuides();
            });
        });

        renderAIGuides();
    }

    function renderAIGuides() {
        const container = document.getElementById('aiGuidesList');
        if (!container) return;

        const filtered = AI_GUIDE_ITEMS.filter(item => {
            return aiSelectedCategory === 'all' || item.category === aiSelectedCategory;
        });

        container.innerHTML = filtered.map(item => {
            const isExpanded = aiExpandedItemId === item.id;
            return `
                <div class="guide-item ${isExpanded ? 'expanded' : ''}" data-guide-id="${item.id}">
                    <div class="guide-header-row">
                        <div>
                            <span class="tag class-tag" style="font-size: 10px;">${item.category}</span>
                            <h4 style="font-size: 15px; margin-top: 4px;">${item.titleHindi}</h4>
                            <p style="font-size: 12px; color: var(--text-secondary);">${item.subtitleHindi}</p>
                        </div>
                        <span style="font-size: 16px; color: var(--text-muted);">${isExpanded ? '▲' : '▼'}</span>
                    </div>
                    <div class="guide-content">
                        <p style="color: var(--text-secondary); margin-bottom: 8px;">${item.contentHindi}</p>
                        <ul class="guide-tips-list">
                            ${item.tips.map(t => `<li><span>💡</span> <span>${t}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.guide-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = el.getAttribute('data-guide-id');
                aiExpandedItemId = aiExpandedItemId === id ? null : id;
                renderAIGuides();
            });
        });
    }

    // ==========================================
    // 9. MODALS & TOOLS
    // ==========================================
    function initModals() {
        // Note Modal
        const noteModal = document.getElementById('noteModal');
        const closeNoteBtn = document.getElementById('closeNoteModalBtn');
        const finishReadingBtn = document.getElementById('finishReadingBtn');
        const fontToggleBtn = document.getElementById('fontToggleBtn');
        const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');

        const closeNote = () => {
            if (noteModal) noteModal.style.display = 'none';
            document.body.style.overflow = '';
        };

        if (closeNoteBtn) closeNoteBtn.addEventListener('click', closeNote);
        if (finishReadingBtn) finishReadingBtn.addEventListener('click', closeNote);

        if (fontToggleBtn) {
            fontToggleBtn.addEventListener('click', () => {
                isModalFontLarge = !isModalFontLarge;
                const dialog = document.querySelector('.modal-reader');
                if (dialog) dialog.classList.toggle('font-large', isModalFontLarge);
                fontToggleBtn.textContent = isModalFontLarge ? 'फ़ॉन्ट: बड़ा' : 'फ़ॉन्ट: सामान्य';
            });
        }

        if (modalBookmarkBtn) {
            modalBookmarkBtn.addEventListener('click', () => {
                if (currentActiveNote) {
                    Storage.toggleBookmark(currentActiveNote.id);
                    updateModalBookmarkBtn();
                    renderNotes();
                }
            });
        }

        // AI Notice Modal
        const aiModal = document.getElementById('aiNoticeModal');
        const closeAIBtn = document.getElementById('closeAINoticeBtn');
        if (closeAIBtn) {
            closeAIBtn.addEventListener('click', () => {
                if (aiModal) aiModal.style.display = 'none';
            });
        }

        // Info Modal
        const infoModal = document.getElementById('infoModal');
        const infoBtn = document.getElementById('infoBtn');
        const closeInfoBtn = document.getElementById('closeInfoModalBtn');
        const okInfoBtn = document.getElementById('okInfoBtn');

        if (infoBtn) {
            infoBtn.addEventListener('click', () => {
                if (infoModal) infoModal.style.display = 'flex';
            });
        }

        const closeInfo = () => {
            if (infoModal) infoModal.style.display = 'none';
        };

        if (closeInfoBtn) closeInfoBtn.addEventListener('click', closeInfo);
        if (okInfoBtn) okInfoBtn.addEventListener('click', closeInfo);

        // Close on backdrop click
        [noteModal, aiModal, infoModal].forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                    }
                });
            }
        });
    }

})();
