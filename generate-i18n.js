const fs = require('fs');
const path = require('path');

const dir = 'src/lib/i18n/dictionaries';
fs.mkdirSync(dir, { recursive: true });

const dicts = {
  en: {
    common: { welcome: "Welcome", getHelp: "Get Help", continue: "Continue", search: "Search..." },
    nav: { home: "Home", ask: "Ask JANSAHAY", docs: "Documents", emergency: "Emergency", history: "History", profile: "Profile" },
    hero: { title: "Your problem. Your next step.", subtitle: "Navigating government services and legal processes made simple for every Indian." },
    saarthi: { hello: "Namaste! 🙏 I'm Saarthi. Let me help you.", listening: "I'm listening...", thinking: "Let me understand that...", confused: "Just one thing I need to understand...", guiding: "Start here.", success: "Nice! One step done.", emergency: "Let's focus on your safety." },
    ai: { targetTitle: "Check Eligibility", actionSummary: "Here is how to get your certificate.", button: "Check now" },
    dashboard: { title: "Hello,", subtitle: "What can we help you with today?", quick: "Quick Actions", ask: "Ask a Question", docs: "Upload Document", track: "Track Status", recent: "Recent Journeys", viewAll: "View All" },
    docs: { title: "Your Documents", subtitle: "Securely store and manage your government IDs and certificates.", upload: "Upload New Document", verify: "Verify Document", vault: "Secure Vault" },
    emergency: { title: "Emergency Help", subtitle: "Tap any button below for immediate assistance.", police: "Police", ambulance: "Ambulance", fire: "Fire", women: "Women Helpline", cyber: "Cyber Crime" },
    profile: { title: "Profile", settings: "Settings", security: "Security & Privacy", notifications: "Notifications", accessibility: "Accessibility", help: "Help & Support", logout: "Log Out", protected: "Protected", enabled: "Enabled", about: "About JANSAHAY" },
    landing: { trust: "Recognized across India", services: "What do you need help with?", journey: "How JANSAHAY Works", accessibility: "Built for Everyone", security: "Bank-Grade Security", footer: "JANSAHAY. AI for Every Indian." }
  },
  hi: {
    common: { welcome: "स्वागत है", getHelp: "मदद लें", continue: "जारी रखें", search: "खोजें..." },
    nav: { home: "होम", ask: "पूछें", docs: "दस्तावेज़", emergency: "आपातकाल", history: "इतिहास", profile: "प्रोफ़ाइल" },
    hero: { title: "आपकी समस्या। आपका अगला कदम।", subtitle: "हर भारतीय के लिए सरकारी सेवाओं और कानूनी प्रक्रियाओं को सरल बनाना।" },
    saarthi: { hello: "नमस्ते! 🙏 मैं सारथी हूँ। मैं आपकी मदद करूँगा।", listening: "मैं सुन रहा हूँ...", thinking: "मुझे इसे समझने दीजिए...", confused: "बस एक चीज़ समझना बाकी है...", guiding: "यहाँ से शुरू करें।", success: "बहुत बढ़िया! एक कदम पूरा हुआ।", emergency: "आइए पहले आपकी सुरक्षा पर ध्यान दें।" },
    ai: { targetTitle: "पात्रता जांचें", actionSummary: "यहाँ बताया गया है कि अपना प्रमाणपत्र कैसे प्राप्त करें।", button: "अभी जांचें" },
    dashboard: { title: "नमस्ते,", subtitle: "आज हम आपकी कैसे मदद कर सकते हैं?", quick: "त्वरित कार्य", ask: "सवाल पूछें", docs: "दस्तावेज़ अपलोड", track: "स्थिति जांचें", recent: "हाल की यात्राएं", viewAll: "सभी देखें" },
    docs: { title: "आपके दस्तावेज़", subtitle: "अपने सरकारी आईडी और प्रमाणपत्रों को सुरक्षित रूप से सहेजें।", upload: "नया दस्तावेज़ अपलोड करें", verify: "दस्तावेज़ सत्यापित करें", vault: "सुरक्षित वॉल्ट" },
    emergency: { title: "आपातकालीन सहायता", subtitle: "तत्काल सहायता के लिए नीचे दिए गए किसी भी बटन पर टैप करें।", police: "पुलिस", ambulance: "एम्बुलेंस", fire: "दमकल", women: "महिला हेल्पलाइन", cyber: "साइबर अपराध" },
    profile: { title: "प्रोफ़ाइल", settings: "सेटिंग्स", security: "सुरक्षा और गोपनीयता", notifications: "सूचनाएं", accessibility: "पहुंच-योग्यता", help: "सहायता", logout: "लॉग आउट", protected: "सुरक्षित", enabled: "सक्षम", about: "जनसहाय के बारे में" },
    landing: { trust: "पूरे भारत में मान्यता प्राप्त", services: "आपको किसमें मदद चाहिए?", journey: "जनसहाय कैसे काम करता है", accessibility: "सभी के लिए निर्मित", security: "बैंक-स्तर की सुरक्षा", footer: "जनसहाय। हर भारतीय के लिए AI।" }
  },
  bn: {
    common: { welcome: "স্বাগত", getHelp: "সাহায্য নিন", continue: "চালিয়ে যান", search: "অনুসন্ধান..." },
    nav: { home: "হোম", ask: "জিজ্ঞাসা করুন", docs: "নথিপত্র", emergency: "জরুরি", history: "ইতিহাস", profile: "প্রোফাইল" },
    hero: { title: "আপনার সমস্যা। আপনার পরবর্তী পদক্ষেপ।", subtitle: "প্রতিটি ভারতীয়ের জন্য সরকারি পরিষেবা সরলীকরণ।" },
    saarthi: { hello: "নমস্কার! 🙏 আমি সারথি। আমি আপনাকে সাহায্য করব।", listening: "আমি শুনছি...", thinking: "আমাকে বুঝতে দিন...", confused: "শুধু একটি জিনিস বুঝতে হবে...", guiding: "এখান থেকে শুরু করুন।", success: "চমৎকার! এক ধাপ সম্পন্ন।", emergency: "প্রথমে আপনার নিরাপত্তায় ফোকাস করি।" },
    ai: { targetTitle: "যোগ্যতা যাচাই করুন", actionSummary: "কীভাবে আপনার শংসাপত্র পাবেন তা এখানে রয়েছে।", button: "এখন যাচাই করুন" },
    dashboard: { title: "নমস্কার,", subtitle: "আজ আমরা আপনাকে কীভাবে সাহায্য করতে পারি?", quick: "দ্রুত কাজ", ask: "প্রশ্ন জিজ্ঞাসা করুন", docs: "নথি আপলোড", track: "অবস্থা ট্র্যাক", recent: "সাম্প্রতিক যাত্রা", viewAll: "সব দেখুন" },
    docs: { title: "আপনার নথিপত্র", subtitle: "আপনার সরকারি আইডি নিরাপদে সংরক্ষণ করুন।", upload: "নতুন নথি আপলোড", verify: "নথি যাচাই", vault: "নিরাপদ ভল্ট" },
    emergency: { title: "জরুরি সাহায্য", subtitle: "তাৎক্ষণিক সাহায্যের জন্য নিচে ট্যাপ করুন।", police: "পুলিশ", ambulance: "অ্যাম্বুলেন্স", fire: "ফায়ার", women: "নারী হেল্পলাইন", cyber: "সাইবার অপরাধ" },
    profile: { title: "প্রোফাইল", settings: "সেটিংস", security: "নিরাপত্তা ও গোপনীয়তা", notifications: "বিজ্ঞপ্তি", accessibility: "অ্যাক্সেসযোগ্যতা", help: "সাহায্য", logout: "লগ আউট", protected: "সুরক্ষিত", enabled: "সক্ষম", about: "জনসহায় সম্পর্কে" },
    landing: { trust: "সারা ভারতে স্বীকৃত", services: "আপনার কী সাহায্য দরকার?", journey: "জনসহায় কীভাবে কাজ করে", accessibility: "সবার জন্য তৈরি", security: "ব্যাংক-গ্রেড নিরাপত্তা", footer: "জনসহায়। প্রতিটি ভারতীয়ের জন্য এআই।" }
  },
  te: {
    common: { welcome: "స్వాగతం", getHelp: "సహాయం పొందండి", continue: "కొనసాగించండి", search: "వెతకండి..." },
    nav: { home: "హోమ్", ask: "అడగండి", docs: "పత్రాలు", emergency: "అత్యవసర", history: "చరిత్ర", profile: "ప్రొఫైల్" },
    hero: { title: "మీ సమస్య. మీ తదుపరి అడుగు.", subtitle: "ప్రతి భారతీయుడికి ప్రభుత్వ సేవలను సులభతరం చేయడం." },
    saarthi: { hello: "నమస్కారం! 🙏 నేను సారథిని. మీకు సహాయం చేస్తాను.", listening: "నేను వింటున్నాను...", thinking: "నన్ను అర్థం చేసుకోనివ్వండి...", confused: "ఒక్క విషయం అర్థం చేసుకోవాలి...", guiding: "ఇక్కడ ప్రారంభించండి.", success: "అద్భుతం! ఒక అడుగు పూర్తయింది.", emergency: "ముందు మీ భద్రతపై దృష్టి పెడదాం." },
    ai: { targetTitle: "అర్హత తనిఖీ చేయండి", actionSummary: "మీ సర్టిఫికేట్ ఎలా పొందాలో ఇక్కడ ఉంది.", button: "ఇప్పుడే తనిఖీ చేయండి" },
    dashboard: { title: "నమస్కారం,", subtitle: "ఈరోజు మేము మీకు ఎలా సహాయపడగలం?", quick: "త్వరిత చర్యలు", ask: "ప్రశ్న అడగండి", docs: "పత్రం అప్‌లోడ్", track: "స్థితి తనిఖీ", recent: "ఇటీవలి ప్రయాణాలు", viewAll: "అన్నీ చూడండి" },
    docs: { title: "మీ పత్రాలు", subtitle: "మీ ప్రభుత్వ IDలను సురక్షితంగా నిల్వ చేయండి.", upload: "కొత్త పత్రం అప్‌లోడ్", verify: "పత్రం ధృవీకరించండి", vault: "సురక్షిత వాల్ట్" },
    emergency: { title: "అత్యవసర సహాయం", subtitle: "తక్షణ సహాయం కోసం కింద నొక్కండి.", police: "పోలీస్", ambulance: "అంబులెన్స్", fire: "అగ్నిమాపక", women: "మహిళా హెల్ప్‌లైన్", cyber: "సైబర్ క్రైమ్" },
    profile: { title: "ప్రొఫైల్", settings: "సెట్టింగ్‌లు", security: "భద్రత & గోప్యత", notifications: "నోటిఫికేషన్‌లు", accessibility: "యాక్సెసిబిలిటీ", help: "సహాయం", logout: "లాగ్ అవుట్", protected: "సురక్షితం", enabled: "ప్రారంభించబడింది", about: "జనసహాయ్ గురించి" },
    landing: { trust: "భారతదేశం అంతటా గుర్తింపు", services: "మీకు దేనిలో సహాయం కావాలి?", journey: "జనసహాయ్ ఎలా పనిచేస్తుంది", accessibility: "అందరి కోసం", security: "బ్యాంక్-గ్రేడ్ భద్రత", footer: "జనసహాయ్. ప్రతి భారతీయుడికి AI." }
  },
  ta: {
    common: { welcome: "வரவேற்கிறோம்", getHelp: "உதவி பெறுங்கள்", continue: "தொடரவும்", search: "தேடு..." },
    nav: { home: "முகப்பு", ask: "கேளுங்கள்", docs: "ஆவணங்கள்", emergency: "அவசரம்", history: "வரலாறு", profile: "சுயவிவரம்" },
    hero: { title: "உங்கள் பிரச்சனை. உங்கள் அடுத்த படி.", subtitle: "ஒவ்வொரு இந்தியருக்கும் அரசு சேவைகளை எளிதாக்குதல்." },
    saarthi: { hello: "வணக்கம்! 🙏 நான் சாரதி. உங்களுக்கு உதவுகிறேன்.", listening: "நான் கேட்கிறேன்...", thinking: "இதை புரிந்து கொள்ள விடுங்கள்...", confused: "ஒரு விஷயத்தை மட்டும் புரிந்து கொள்ள வேண்டும்...", guiding: "இங்கே தொடங்குங்கள்.", success: "நன்று! ஒரு படி முடிந்தது.", emergency: "முதலில் உங்கள் பாதுகாப்பில் கவனம் செலுத்துவோம்." },
    ai: { targetTitle: "தகுதியை சரிபார்க்கவும்", actionSummary: "உங்கள் சான்றிதழைப் பெறுவது எப்படி என்பது இங்கே.", button: "இப்போதே சரிபார்க்கவும்" },
    dashboard: { title: "வணக்கம்,", subtitle: "இன்று நாங்கள் உங்களுக்கு எப்படி உதவ முடியும்?", quick: "விரைவான செயல்கள்", ask: "கேள்வி கேளுங்கள்", docs: "ஆவணம் பதிவேற்று", track: "நிலை சரிபார்", recent: "சமீபத்திய பயணங்கள்", viewAll: "அனைத்தையும் காண்" },
    docs: { title: "உங்கள் ஆவணங்கள்", subtitle: "உங்கள் அரசு IDகளை பாதுகாப்பாக சேமிக்கவும்.", upload: "புதிய ஆவணம் பதிவேற்று", verify: "ஆவணம் சரிபார்", vault: "பாதுகாப்பான பெட்டகம்" },
    emergency: { title: "அவசர உதவி", subtitle: "உடனடி உதவிக்கு கீழே தட்டவும்.", police: "காவல்துறை", ambulance: "ஆம்புலன்ஸ்", fire: "தீயணைப்பு", women: "பெண்கள் உதவி மையம்", cyber: "சைபர் குற்றம்" },
    profile: { title: "சுயவிவரம்", settings: "அமைப்புகள்", security: "பாதுகாப்பு & தனியுரிமை", notifications: "அறிவிப்புகள்", accessibility: "அணுகல்", help: "உதவி", logout: "வெளியேறு", protected: "பாதுகாக்கப்பட்டது", enabled: "இயக்கப்பட்டது", about: "ஜன்சஹாய் பற்றி" },
    landing: { trust: "இந்தியா முழுவதும் அங்கீகரிக்கப்பட்டது", services: "உங்களுக்கு என்ன உதவி தேவை?", journey: "ஜன்சஹாய் எப்படி வேலை செய்கிறது", accessibility: "அனைவருக்குமானது", security: "வங்கி தர பாதுகாப்பு", footer: "ஜன்சஹாய். ஒவ்வொரு இந்தியருக்கும் AI." }
  },
  mr: {
    common: { welcome: "स्वागत आहे", getHelp: "मदत घ्या", continue: "पुढे जा", search: "शोधा..." },
    nav: { home: "मुख्यपृष्ठ", ask: "विचारा", docs: "कागदपत्रे", emergency: "आणीबाणी", history: "इतिहास", profile: "प्रोफाइल" },
    hero: { title: "तुमची समस्या. तुमची पुढची पायरी.", subtitle: "प्रत्येक भारतीयासाठी सरकारी सेवा सुलभ करणे." },
    saarthi: { hello: "नमस्कार! 🙏 मी सारथी आहे. मी तुम्हाला मदत करेन.", listening: "मी ऐकत आहे...", thinking: "मला हे समजून घेऊ द्या...", confused: "फक्त एक गोष्ट समजून घ्यायची आहे...", guiding: "येथून सुरुवात करा.", success: "छान! एक पायरी पूर्ण.", emergency: "आधी तुमच्या सुरक्षेवर लक्ष केंद्रित करूया." },
    ai: { targetTitle: "पात्रता तपासा", actionSummary: "तुमचे प्रमाणपत्र कसे मिळवायचे ते येथे आहे.", button: "आता तपासा" },
    dashboard: { title: "नमस्कार,", subtitle: "आज आम्ही तुमची कशी मदत करू शकतो?", quick: "त्वरित कृती", ask: "प्रश्न विचारा", docs: "कागदपत्र अपलोड", track: "स्थिती तपासा", recent: "अलीकडील प्रवास", viewAll: "सर्व पहा" },
    docs: { title: "तुमची कागदपत्रे", subtitle: "तुमचे सरकारी आयडी सुरक्षितपणे साठवा.", upload: "नवीन कागदपत्र अपलोड", verify: "कागदपत्र पडताळणी", vault: "सुरक्षित व्हॉल्ट" },
    emergency: { title: "आणीबाणी मदत", subtitle: "तात्काळ मदतीसाठी खाली टॅप करा.", police: "पोलीस", ambulance: "रुग्णवाहिका", fire: "अग्निशमन", women: "महिला हेल्पलाइन", cyber: "सायबर गुन्हे" },
    profile: { title: "प्रोफाइल", settings: "सेटिंग्ज", security: "सुरक्षा आणि गोपनीयता", notifications: "सूचना", accessibility: "प्रवेशयोग्यता", help: "मदत", logout: "लॉग आउट", protected: "सुरक्षित", enabled: "सक्षम", about: "जनसहाय बद्दल" },
    landing: { trust: "संपूर्ण भारतात मान्यताप्राप्त", services: "तुम्हाला कशात मदत हवी आहे?", journey: "जनसहाय कसे काम करते", accessibility: "सर्वांसाठी बनवलेले", security: "बँक-ग्रेड सुरक्षा", footer: "जनसहाय. प्रत्येक भारतीयासाठी AI." }
  },
  gu: {
    common: { welcome: "સ્વાગત છે", getHelp: "મદદ મેળવો", continue: "ચાલુ રાખો", search: "શોધો..." },
    nav: { home: "હોમ", ask: "પૂછો", docs: "દસ્તાવેજો", emergency: "ઇમરજન્સી", history: "ઇતિહાસ", profile: "પ્રોફાઇલ" },
    hero: { title: "તમારી સમસ્યા. તમારું આગલું પગલું.", subtitle: "દરેક ભારતીય માટે સરકારી સેવાઓ સરળ બનાવવી." },
    saarthi: { hello: "નમસ્તે! 🙏 હું સારથી છું. હું તમને મદદ કરીશ.", listening: "હું સાંભળી રહ્યો છું...", thinking: "મને આ સમજવા દો...", confused: "ફક્ત એક જ વસ્તુ સમજવાની બાકી છે...", guiding: "અહીંથી શરૂ કરો.", success: "સરસ! એક પગલું પૂર્ણ થયું.", emergency: "ચાલો પહેલા તમારી સુરક્ષા પર ધ્યાન આપીએ." },
    ai: { targetTitle: "પાત્રતા ચકાસો", actionSummary: "તમારું પ્રમાણપત્ર કેવી રીતે મેળવવું તે અહીં છે.", button: "હમણાં ચકાસો" },
    dashboard: { title: "નમસ્તે,", subtitle: "આજે અમે તમને કેવી રીતે મદદ કરી શકીએ?", quick: "ઝડપી ક્રિયાઓ", ask: "પ્રશ્ન પૂછો", docs: "દસ્તાવેજ અપલોડ", track: "સ્થિતિ ચકાસો", recent: "તાજેતરની મુસાફરી", viewAll: "બધા જુઓ" },
    docs: { title: "તમારા દસ્તાવેજો", subtitle: "તમારા સરકારી ID સુરક્ષિત રીતે સંગ્રહિત કરો.", upload: "નવો દસ્તાવેજ અપલોડ કરો", verify: "દસ્તાવેજ ચકાસો", vault: "સુરક્ષિત વૉલ્ટ" },
    emergency: { title: "ઇમરજન્સી મદદ", subtitle: "તાત્કાલિક મદદ માટે નીચે ટેપ કરો.", police: "પોલીસ", ambulance: "એમ્બ્યુલન્સ", fire: "ફાયર", women: "મહિલા હેલ્પલાઇન", cyber: "સાયબર ક્રાઇમ" },
    profile: { title: "પ્રોફાઇલ", settings: "સેટિંગ્સ", security: "સુરક્ષા અને ગોપનીયતા", notifications: "સૂચનાઓ", accessibility: "સુલભતા", help: "મદદ", logout: "લોગ આઉટ", protected: "સુરક્ષિત", enabled: "સક્ષમ", about: "જનસહાય વિશે" },
    landing: { trust: "સમગ્ર ભારતમાં માન્યતા પ્રાપ્ત", services: "તમારે શેમાં મદદ જોઈએ છે?", journey: "જનસહાય કેવી રીતે કામ કરે છે", accessibility: "બધા માટે બનાવેલ", security: "બેંક-ગ્રેડ સુરક્ષા", footer: "જનસહાય. દરેક ભારતીય માટે AI." }
  },
  kn: {
    common: { welcome: "ಸ್ವಾಗತ", getHelp: "ಸಹಾಯ ಪಡೆಯಿರಿ", continue: "ಮುಂದುವರಿಸಿ", search: "ಹುಡುಕಿ..." },
    nav: { home: "ಮುಖಪುಟ", ask: "ಕೇಳಿ", docs: "ದಾಖಲೆಗಳು", emergency: "ತುರ್ತು", history: "ಇತಿಹಾಸ", profile: "ಪ್ರೊಫೈಲ್" },
    hero: { title: "ನಿಮ್ಮ ಸಮಸ್ಯೆ. ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆ.", subtitle: "ಪ್ರತಿ ಭಾರತೀಯರಿಗೆ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಸರಳೀಕರಿಸುವುದು." },
    saarthi: { hello: "ನಮಸ್ಕಾರ! 🙏 ನಾನು ಸಾರಥಿ. ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.", listening: "ನಾನು ಕೇಳುತ್ತಿದ್ದೇನೆ...", thinking: "ನನಗೆ ಇದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಬಿಡಿ...", confused: "ಒಂದು ವಿಷಯವನ್ನು ಮಾತ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು...", guiding: "ಇಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ.", success: "ಉತ್ತಮ! ಒಂದು ಹೆಜ್ಜೆ ಪೂರ್ಣಗೊಂಡಿದೆ.", emergency: "ಮೊದಲು ನಿಮ್ಮ ಸುರಕ್ಷತೆಯ ಮೇಲೆ ಗಮನ ಹರಿಸೋಣ." },
    ai: { targetTitle: "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ", actionSummary: "ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುವುದು ಹೇಗೆ ಎಂಬುದು ಇಲ್ಲಿದೆ.", button: "ಈಗ ಪರಿಶೀಲಿಸಿ" },
    dashboard: { title: "ನಮಸ್ಕಾರ,", subtitle: "ಇಂದು ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?", quick: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು", ask: "ಪ್ರಶ್ನೆ ಕೇಳಿ", docs: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್", track: "ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ", recent: "ಇತ್ತೀಚಿನ ಪ್ರಯಾಣಗಳು", viewAll: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ" },
    docs: { title: "ನಿಮ್ಮ ದಾಖಲೆಗಳು", subtitle: "ನಿಮ್ಮ ಸರ್ಕಾರಿ IDಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಿ.", upload: "ಹೊಸ ದಾಖಲೆ ಅಪ್‌ಲೋಡ್", verify: "ದಾಖಲೆ ಪರಿಶೀಲಿಸಿ", vault: "ಸುರಕ್ಷಿತ ವಾಲ್ಟ್" },
    emergency: { title: "ತುರ್ತು ಸಹಾಯ", subtitle: "ತಕ್ಷಣದ ಸಹಾಯಕ್ಕಾಗಿ ಕೆಳಗೆ ಟ್ಯಾಪ್ ಮಾಡಿ.", police: "ಪೊಲೀಸ್", ambulance: "ಆಂಬ್ಯುಲೆನ್ಸ್", fire: "ಅಗ್ನಿಶಾಮಕ", women: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ", cyber: "ಸೈಬರ್ ಅಪರಾಧ" },
    profile: { title: "ಪ್ರೊಫೈಲ್", settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", security: "ಭದ್ರತೆ ಮತ್ತು ಗೌಪ್ಯತೆ", notifications: "ಸೂಚನೆಗಳು", accessibility: "ಪ್ರವೇಶಿಸುವಿಕೆ", help: "ಸಹಾಯ", logout: "ಲಾಗ್ ಔಟ್", protected: "ಸುರಕ್ಷಿತ", enabled: "ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ", about: "ಜನಸಹಾಯ್ ಬಗ್ಗೆ" },
    landing: { trust: "ಭಾರತದಾದ್ಯಂತ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ", services: "ನಿಮಗೆ ಯಾವುದರಲ್ಲಿ ಸಹಾಯ ಬೇಕು?", journey: "ಜನಸಹಾಯ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", accessibility: "ಎಲ್ಲರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ", security: "ಬ್ಯಾಂಕ್-ದರ್ಜೆಯ ಭದ್ರತೆ", footer: "ಜನಸಹಾಯ್. ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯರಿಗೂ AI." }
  },
  ml: {
    common: { welcome: "സ്വാഗതം", getHelp: "സഹായം നേടുക", continue: "തുടരുക", search: "തിരയുക..." },
    nav: { home: "ഹോം", ask: "ചോദിക്കുക", docs: "രേഖകൾ", emergency: "അടിയന്തരാവസ്ഥ", history: "ചരിത്രം", profile: "പ്രൊഫൈൽ" },
    hero: { title: "നിങ്ങളുടെ പ്രശ്നം. നിങ്ങളുടെ അടുത്ത ഘട്ടം.", subtitle: "ഓരോ ഇന്ത്യക്കാരനും സർക്കാർ സേവനങ്ങൾ ലളിതമാക്കുന്നു." },
    saarthi: { hello: "നമസ്കാരം! 🙏 ഞാൻ സാരഥി. ഞാൻ നിങ്ങളെ സഹായിക്കാം.", listening: "ഞാൻ കേൾക്കുന്നു...", thinking: "എനിക്കിത് മനസ്സിലാക്കാൻ അനുവദിക്കൂ...", confused: "ഒരു കാര്യം മാത്രം മനസ്സിലാക്കേണ്ടതുണ്ട്...", guiding: "ഇവിടെ തുടങ്ങുക.", success: "കൊള്ളാം! ഒരു ഘട്ടം കഴിഞ്ഞു.", emergency: "ആദ്യം നിങ്ങളുടെ സുരക്ഷയിൽ ശ്രദ്ധിക്കാം." },
    ai: { targetTitle: "യോഗ്യത പരിശോധിക്കുക", actionSummary: "നിങ്ങളുടെ സർട്ടിഫിക്കറ്റ് എങ്ങനെ നേടാം എന്നത് ഇതാ.", button: "ഇപ്പോൾ പരിശോധിക്കുക" },
    dashboard: { title: "നമസ്കാരം,", subtitle: "ഇന്ന് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?", quick: "ദ്രുത പ്രവർത്തനങ്ങൾ", ask: "ചോദ്യം ചോദിക്കുക", docs: "രേഖ അപ്‌ലോഡ്", track: "സ്റ്റാറ്റസ് പരിശോധിക്കുക", recent: "സമീപകാല യാത്രകൾ", viewAll: "എല്ലാം കാണുക" },
    docs: { title: "നിങ്ങളുടെ രേഖകൾ", subtitle: "നിങ്ങളുടെ സർക്കാർ ഐഡികൾ സുരക്ഷിതമായി സൂക്ഷിക്കുക.", upload: "പുതിയ രേഖ അപ്‌ലോഡ് ചെയ്യുക", verify: "രേഖ പരിശോധിക്കുക", vault: "സുരക്ഷിത നിലവറ" },
    emergency: { title: "അടിയന്തര സഹായം", subtitle: "ഉടനടി സഹായത്തിനായി താഴെ ടാപ്പ് ചെയ്യുക.", police: "പോലീസ്", ambulance: "ആംബുലൻസ്", fire: "ഫയർ", women: "വനിതാ ഹെൽപ്പ്‌ലൈൻ", cyber: "സൈബർ ക്രൈം" },
    profile: { title: "പ്രൊഫൈൽ", settings: "ക്രമീകരണങ്ങൾ", security: "സുരക്ഷയും സ്വകാര്യതയും", notifications: "അറിയിപ്പുകൾ", accessibility: "പ്രവേശനക്ഷമത", help: "സഹായം", logout: "ലോഗ് ഔട്ട്", protected: "സുരക്ഷിതം", enabled: "പ്രവർത്തനക്ഷമമാക്കി", about: "ജൻസഹായിനെക്കുറിച്ച്" },
    landing: { trust: "ഇന്ത്യയിലുടനീളം അംഗീകരിക്കപ്പെട്ടു", services: "നിങ്ങൾക്ക് എന്തിലാണ് സഹായം വേണ്ടത്?", journey: "ജൻസഹായ് എങ്ങനെ പ്രവർത്തിക്കുന്നു", accessibility: "എല്ലാവർക്കും വേണ്ടി നിർമ്മിച്ചത്", security: "ബാങ്ക്-ഗ്രേഡ് സുരക്ഷ", footer: "ജൻസഹായ്. ഓരോ ഇന്ത്യക്കാരനും AI." }
  },
  pa: {
    common: { welcome: "ਜੀ ਆਇਆਂ ਨੂੰ", getHelp: "ਮਦਦ ਲਵੋ", continue: "ਜਾਰੀ ਰੱਖੋ", search: "ਖੋਜ..." },
    nav: { home: "ਹੋਮ", ask: "ਪੁੱਛੋ", docs: "ਦਸਤਾਵੇਜ਼", emergency: "ਐਮਰਜੈਂਸੀ", history: "ਇਤਿਹਾਸ", profile: "ਪ੍ਰੋਫਾਈਲ" },
    hero: { title: "ਤੁਹਾਡੀ ਸਮੱਸਿਆ। ਤੁਹਾਡਾ ਅਗਲਾ ਕਦਮ।", subtitle: "ਹਰ ਭਾਰਤੀ ਲਈ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਨੂੰ ਸਰਲ ਬਣਾਉਣਾ।" },
    saarthi: { hello: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! 🙏 ਮੈਂ ਸਾਰਥੀ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਕਰਾਂਗਾ।", listening: "ਮੈਂ ਸੁਣ ਰਿਹਾ ਹਾਂ...", thinking: "ਮੈਨੂੰ ਇਹ ਸਮਝਣ ਦਿਓ...", confused: "ਬਸ ਇੱਕ ਗੱਲ ਸਮਝਣੀ ਬਾਕੀ ਹੈ...", guiding: "ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ।", success: "ਬਹੁਤ ਵਧੀਆ! ਇੱਕ ਕਦਮ ਪੂਰਾ ਹੋਇਆ।", emergency: "ਆਓ ਪਹਿਲਾਂ ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ ਤੇ ਧਿਆਨ ਦੇਈਏ।" },
    ai: { targetTitle: "ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ", actionSummary: "ਆਪਣਾ ਸਰਟੀਫਿਕੇਟ ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕਰਨਾ ਹੈ, ਇਹ ਇੱਥੇ ਹੈ।", button: "ਹੁਣੇ ਜਾਂਚ ਕਰੋ" },
    dashboard: { title: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ,", subtitle: "ਅੱਜ ਅਸੀਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?", quick: "ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ", ask: "ਸਵਾਲ ਪੁੱਛੋ", docs: "ਦਸਤਾਵੇਜ਼ ਅੱਪਲੋਡ", track: "ਸਥਿਤੀ ਦੀ ਜਾਂਚ ਕਰੋ", recent: "ਤਾਜ਼ਾ ਯਾਤਰਾਵਾਂ", viewAll: "ਸਾਰੇ ਦੇਖੋ" },
    docs: { title: "ਤੁਹਾਡੇ ਦਸਤਾਵੇਜ਼", subtitle: "ਆਪਣੀਆਂ ਸਰਕਾਰੀ ਆਈਡੀਆਂ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਸਟੋਰ ਕਰੋ।", upload: "ਨਵਾਂ ਦਸਤਾਵੇਜ਼ ਅੱਪਲੋਡ ਕਰੋ", verify: "ਦਸਤਾਵੇਜ਼ ਦੀ ਜਾਂਚ ਕਰੋ", vault: "ਸੁਰੱਖਿਅਤ ਵਾਲਟ" },
    emergency: { title: "ਐਮਰਜੈਂਸੀ ਮਦਦ", subtitle: "ਤੁਰੰਤ ਮਦਦ ਲਈ ਹੇਠਾਂ ਟੈਪ ਕਰੋ।", police: "ਪੁਲਿਸ", ambulance: "ਐਂਬੂਲੈਂਸ", fire: "ਫਾਇਰ", women: "ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ", cyber: "ਸਾਈਬਰ ਕ੍ਰਾਈਮ" },
    profile: { title: "ਪ੍ਰੋਫਾਈਲ", settings: "ਸੈਟਿੰਗਜ਼", security: "ਸੁਰੱਖਿਆ ਅਤੇ ਗੋਪਨੀਯਤਾ", notifications: "ਸੂਚਨਾਵਾਂ", accessibility: "ਪਹੁੰਚਯੋਗਤਾ", help: "ਮਦਦ", logout: "ਲੌਗ ਆਉਟ", protected: "ਸੁਰੱਖਿਅਤ", enabled: "ਸਮਰਥਿਤ", about: "ਜਨਸਹਾਇ ਬਾਰੇ" },
    landing: { trust: "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਮਾਨਤਾ ਪ੍ਰਾਪਤ", services: "ਤੁਹਾਨੂੰ ਕਿਸ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?", journey: "ਜਨਸਹਾਇ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ", accessibility: "ਸਭ ਲਈ ਬਣਾਇਆ", security: "ਬੈਂਕ-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ", footer: "ਜਨਸਹਾਇ। ਹਰ ਭਾਰਤੀ ਲਈ AI।" }
  }
};

for (const [lang, content] of Object.entries(dicts)) {
  fs.writeFileSync(path.join(dir, lang + '.json'), JSON.stringify(content, null, 2));
}
